/**
 * storage.js - Administrador de almacenamiento local seguro para la aplicación
 * Clave versionada: investigacionQuiz_v1
 * No almacena datos personales ni información sensible.
 */

const STORAGE_KEY = 'investigacionQuiz_v1';

const DEFAULT_STATE = {
  version: 1,
  totalAnswered: 0,
  totalCorrect: 0,
  totalIncorrect: 0,
  lastPracticeIndex: 0,
  theme: 'system', // 'system' | 'light' | 'dark'
  questionStats: {}, // { [id]: { correctCount: 0, incorrectCount: 0, consecutiveCorrect: 0, mastered: false } }
  incorrectQuestionIds: [], // IDs de preguntas activamente falladas
  bestExam: null, // { score: 0, total: 0, percentage: 0, date: "" }
  examHistory: [] // últimos exámenes realizados
};

/**
 * Obtiene los datos almacenados de forma segura
 * @returns {typeof DEFAULT_STATE}
 */
function getStorageData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_STATE, questionStats: {}, incorrectQuestionIds: [], examHistory: [] };
    const parsed = JSON.parse(raw);
    return {
      ...DEFAULT_STATE,
      ...parsed,
      questionStats: parsed.questionStats || {},
      incorrectQuestionIds: Array.isArray(parsed.incorrectQuestionIds) ? parsed.incorrectQuestionIds : [],
      examHistory: Array.isArray(parsed.examHistory) ? parsed.examHistory : []
    };
  } catch (err) {
    console.error('Error al leer de localStorage:', err);
    return { ...DEFAULT_STATE, questionStats: {}, incorrectQuestionIds: [], examHistory: [] };
  }
}

/**
 * Guarda los datos en localStorage
 * @param {typeof DEFAULT_STATE} data
 */
function saveStorageData(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (err) {
    console.error('Error al guardar en localStorage:', err);
  }
}

/**
 * Registra el resultado de una respuesta individual (Modo Práctica o Práctica de Errores)
 * @param {number} questionId
 * @param {boolean} isCorrect
 */
function recordAnswer(questionId, isCorrect) {
  const data = getStorageData();
  data.totalAnswered += 1;

  if (!data.questionStats[questionId]) {
    data.questionStats[questionId] = {
      correctCount: 0,
      incorrectCount: 0,
      consecutiveCorrect: 0,
      mastered: false
    };
  }

  const stat = data.questionStats[questionId];

  if (isCorrect) {
    data.totalCorrect += 1;
    stat.correctCount += 1;
    stat.consecutiveCorrect += 1;

    // Si responde correctamente de forma consecutiva (al menos 2 veces), se considera dominada
    // y se retira de la lista activa de errores pendientes, conservando el histórico.
    if (stat.consecutiveCorrect >= 2) {
      stat.mastered = true;
      const idx = data.incorrectQuestionIds.indexOf(questionId);
      if (idx !== -1) {
        data.incorrectQuestionIds.splice(idx, 1);
      }
    }
  } else {
    data.totalIncorrect += 1;
    stat.incorrectCount += 1;
    stat.consecutiveCorrect = 0;
    stat.mastered = false;

    // Agregar a la lista de errores si no está presente
    if (!data.incorrectQuestionIds.includes(questionId)) {
      data.incorrectQuestionIds.push(questionId);
    }
  }

  saveStorageData(data);
}

/**
 * Registra el resultado de un examen finalizado
 * @param {number} score
 * @param {number} total
 * @param {Array<{ questionId: number, isCorrect: boolean }>} details
 */
function recordExamResult(score, total, details = []) {
  const data = getStorageData();
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;

  // Actualizar estadísticas individuales de cada pregunta
  details.forEach(({ questionId, isCorrect }) => {
    data.totalAnswered += 1;
    if (!data.questionStats[questionId]) {
      data.questionStats[questionId] = {
        correctCount: 0,
        incorrectCount: 0,
        consecutiveCorrect: 0,
        mastered: false
      };
    }
    const stat = data.questionStats[questionId];
    if (isCorrect) {
      data.totalCorrect += 1;
      stat.correctCount += 1;
      stat.consecutiveCorrect += 1;
      if (stat.consecutiveCorrect >= 2) {
        stat.mastered = true;
        const idx = data.incorrectQuestionIds.indexOf(questionId);
        if (idx !== -1) {
          data.incorrectQuestionIds.splice(idx, 1);
        }
      }
    } else {
      data.totalIncorrect += 1;
      stat.incorrectCount += 1;
      stat.consecutiveCorrect = 0;
      stat.mastered = false;
      if (!data.incorrectQuestionIds.includes(questionId)) {
        data.incorrectQuestionIds.push(questionId);
      }
    }
  });

  // Evaluar mejor examen
  const examRecord = {
    score,
    total,
    percentage,
    date: new Date().toLocaleDateString('es-ES')
  };

  if (!data.bestExam || percentage > data.bestExam.percentage || (percentage === data.bestExam.percentage && score > data.bestExam.score)) {
    data.bestExam = examRecord;
  }

  // Guardar en historial limitado a los últimos 10
  data.examHistory.unshift(examRecord);
  if (data.examHistory.length > 10) {
    data.examHistory.pop();
  }

  saveStorageData(data);
}

/**
 * Actualiza el último índice de pregunta visitado en modo práctica
 * @param {number} index
 */
function saveLastPracticeIndex(index) {
  const data = getStorageData();
  data.lastPracticeIndex = index;
  saveStorageData(data);
}

/**
 * Guarda la preferencia de tema
 * @param {'system' | 'light' | 'dark'} theme
 */
function saveThemePreference(theme) {
  const data = getStorageData();
  data.theme = theme;
  saveStorageData(data);
}

/**
 * Obtiene la preferencia de tema
 * @returns {'system' | 'light' | 'dark'}
 */
function getThemePreference() {
  const data = getStorageData();
  return data.theme || 'system';
}

/**
 * Obtiene métricas globales calculadas
 * @param {number} totalAvailable
 */
function getGlobalStats(totalAvailable = 0) {
  const data = getStorageData();
  const answeredTotal = data.totalAnswered;
  const accuracy = answeredTotal > 0 ? Math.round((data.totalCorrect / answeredTotal) * 100) : 0;

  // Conteo de preguntas dominadas y preguntas con errores
  let masteredCount = 0;
  let needsReviewCount = data.incorrectQuestionIds.length;

  Object.keys(data.questionStats).forEach((qId) => {
    if (data.questionStats[qId].mastered) {
      masteredCount += 1;
    }
  });

  return {
    totalQuestions: totalAvailable,
    totalAnswered: data.totalAnswered,
    totalCorrect: data.totalCorrect,
    totalIncorrect: data.totalIncorrect,
    accuracyPercentage: accuracy,
    bestExam: data.bestExam,
    masteredCount,
    needsReviewCount,
    lastPracticeIndex: data.lastPracticeIndex || 0
  };
}

/**
 * Retorna las preguntas ordenadas por mayor número de errores
 * @param {Array<{ id: number, question: string }>} allQuestions
 * @returns {Array<{ question: Object, errorCount: number, correctCount: number }>}
 */
function getQuestionsRankedByErrors(allQuestions = []) {
  const data = getStorageData();
  const ranked = [];

  allQuestions.forEach((q) => {
    const stat = data.questionStats[q.id];
    if (stat && stat.incorrectCount > 0) {
      ranked.push({
        question: q,
        errorCount: stat.incorrectCount,
        correctCount: stat.correctCount
      });
    }
  });

  // Ordenar descendentemente por mayor número de fallos
  ranked.sort((a, b) => b.errorCount - a.errorCount);
  return ranked;
}

/**
 * Elimina todos los datos guardados y restablece el estado inicial
 */
function resetAllProgress() {
  try {
    const currentTheme = getThemePreference();
    localStorage.removeItem(STORAGE_KEY);
    // Preservar preferencia de tema al reiniciar progreso
    const fresh = { ...DEFAULT_STATE, theme: currentTheme };
    saveStorageData(fresh);
    return true;
  } catch (err) {
    console.error('Error al resetear progreso:', err);
    return false;
  }
}

// Exponer en objeto global sin usar export para máxima compatibilidad con archivos estáticos
window.QuizStorage = {
  getStorageData,
  saveStorageData,
  recordAnswer,
  recordExamResult,
  saveLastPracticeIndex,
  saveThemePreference,
  getThemePreference,
  getGlobalStats,
  getQuestionsRankedByErrors,
  resetAllProgress
};
