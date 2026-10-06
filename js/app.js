/**
 * app.js - Lógica principal de la aplicación de práctica y examen
 * Cumple estrictamente:
 * - 0 dependencias externas
 * - 0 innerHTML para renderizado dinámico (utiliza createElement y textContent)
 * - Algoritmo Fisher-Yates seguro para aleatoriedad sin mutar array original
 * - Navegación por teclado completa (1-5, Enter, Flechas)
 * - Modo oscuro / claro / sistema sincronizado
 * - Registro de Service Worker para PWA offline
 */

(function () {
  'use strict';

  // ==========================================================================
  // ESTADO DE LA APLICACIÓN
  // ==========================================================================
  const state = {
    currentView: 'dashboard',
    allQuestions: [],
    
    // Sesión de Práctica
    practice: {
      isErrorMode: false,
      questions: [],
      currentIndex: 0,
      userAnswers: {}, // index -> { selectedOptionIndex: number, isCorrect: boolean }
      isAnswered: false
    },

    // Sesión de Examen
    exam: {
      configCount: 20, // 10, 20, 30, 'all'
      configOrder: 'random', // 'random', 'original'
      questions: [],
      currentIndex: 0,
      userAnswers: {} // index -> selectedOptionIndex (number)
    }
  };

  const OPTION_LETTERS = ['A', 'B', 'C', 'D', 'E'];

  // ==========================================================================
  // UTILIDADES SEGURAS
  // ==========================================================================

  /**
   * Algoritmo Fisher-Yates para barajado seguro sin mutar el array original
   * @param {Array} arr
   * @returns {Array} copia barajada
   */
  function shuffleArray(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = copy[i];
      copy[i] = copy[j];
      copy[j] = temp;
    }
    return copy;
  }

  /**
   * Limpia todos los hijos de un elemento de forma segura
   * @param {HTMLElement} element
   */
  function clearElement(element) {
    if (!element) return;
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }

  // ==========================================================================
  // GESTIÓN DE TEMAS (CLARO / OSCURO / SISTEMA)
  // ==========================================================================
  function initTheme() {
    const savedTheme = window.QuizStorage.getThemePreference();
    applyTheme(savedTheme);

    const themeToggleBtn = document.getElementById('btn-theme-toggle');
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        const current = window.QuizStorage.getThemePreference();
        let next = 'light';
        if (current === 'system') next = 'light';
        else if (current === 'light') next = 'dark';
        else if (current === 'dark') next = 'system';

        window.QuizStorage.saveThemePreference(next);
        applyTheme(next);
      });
    }

    // Escuchar cambios de preferencia del sistema si está en modo 'system'
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', () => {
      if (window.QuizStorage.getThemePreference() === 'system') {
        applyTheme('system');
      }
    });
  }

  function applyTheme(theme) {
    const root = document.documentElement;
    const btn = document.getElementById('btn-theme-toggle');

    if (theme === 'light') {
      root.setAttribute('data-theme', 'light');
      if (btn) btn.title = 'Tema actual: Claro (clic para Oscuro)';
    } else if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
      if (btn) btn.title = 'Tema actual: Oscuro (clic para Automático)';
    } else {
      root.removeAttribute('data-theme');
      if (btn) btn.title = 'Tema actual: Automático del Sistema (clic para Claro)';
    }
  }

  // ==========================================================================
  // NAVEGACIÓN ENTRE VISTAS
  // ==========================================================================
  function switchView(viewName) {
    state.currentView = viewName;

    // Actualizar secciones
    const views = document.querySelectorAll('.view-section');
    views.forEach((sec) => {
      sec.classList.remove('active');
    });

    const targetSec = document.getElementById(`view-${viewName}`);
    if (targetSec) {
      targetSec.classList.add('active');
    }

    // Actualizar botones de la barra de navegación superior
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach((btn) => {
      if (btn.getAttribute('data-view') === viewName) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Cargar datos correspondientes a cada vista
    if (viewName === 'dashboard') {
      renderDashboardStats();
    } else if (viewName === 'stats') {
      renderStatsView();
    }
  }

  // ==========================================================================
  // DASHBOARD / PANTALLA DE INICIO
  // ==========================================================================
  function renderDashboardStats() {
    const stats = window.QuizStorage.getGlobalStats(state.allQuestions.length);

    const elTotal = document.getElementById('stat-total-questions');
    const elAnswered = document.getElementById('stat-total-answered');
    const elCorrect = document.getElementById('stat-total-correct');
    const elIncorrect = document.getElementById('stat-total-incorrect');
    const elAccuracy = document.getElementById('stat-accuracy-rate');
    const elBest = document.getElementById('stat-best-score');

    if (elTotal) elTotal.textContent = String(stats.totalQuestions);
    if (elAnswered) elAnswered.textContent = String(stats.totalAnswered);
    if (elCorrect) elCorrect.textContent = String(stats.totalCorrect);
    if (elIncorrect) elIncorrect.textContent = String(stats.totalIncorrect);
    if (elAccuracy) elAccuracy.textContent = `${stats.accuracyPercentage}%`;

    if (elBest) {
      if (stats.bestExam) {
        elBest.textContent = `${stats.bestExam.score}/${stats.bestExam.total} (${stats.bestExam.percentage}%)`;
      } else {
        elBest.textContent = '-';
      }
    }

    // Actualizar descripción del botón de errores
    const elErrorsDesc = document.getElementById('action-errors-desc');
    if (elErrorsDesc) {
      if (stats.needsReviewCount > 0) {
        elErrorsDesc.textContent = `Tienes ${stats.needsReviewCount} preguntas por reforzar.`;
      } else {
        elErrorsDesc.textContent = '¡Sin errores pendientes! Puedes seguir practicando.';
      }
    }

    // Actualizar botón continuar práctica
    const elContinueDesc = document.getElementById('action-continue-desc');
    if (elContinueDesc) {
      const lastIdx = stats.lastPracticeIndex || 0;
      elContinueDesc.textContent = `Reanudar en la pregunta ${lastIdx + 1} de ${state.allQuestions.length}.`;
    }
  }

  // ==========================================================================
  // MODO 1: PRÁCTICA (Y PRÁCTICA DE ERRORES)
  // ==========================================================================
  function startPracticeSession(startIndex = 0, isErrorMode = false) {
    state.practice.isErrorMode = isErrorMode;

    if (isErrorMode) {
      const storeData = window.QuizStorage.getStorageData();
      const errorIds = storeData.incorrectQuestionIds || [];
      const errorQuestions = state.allQuestions.filter((q) => errorIds.includes(q.id));

      if (errorQuestions.length === 0) {
        alert('¡Excelente trabajo! No tienes preguntas con errores pendientes para practicar en este momento.');
        return;
      }

      state.practice.questions = errorQuestions;
      state.practice.currentIndex = 0;
    } else {
      state.practice.questions = [...state.allQuestions];
      state.practice.currentIndex = Math.min(Math.max(0, startIndex), state.practice.questions.length - 1);
    }

    state.practice.userAnswers = {};
    state.practice.isAnswered = false;

    switchView('practice');
    renderPracticeQuestion();
  }

  function renderPracticeQuestion() {
    const p = state.practice;
    const currentQ = p.questions[p.currentIndex];
    if (!currentQ) return;

    // Actualizar badges e indicadores
    const badge = document.getElementById('practice-mode-badge');
    if (badge) {
      badge.textContent = p.isErrorMode ? 'Práctica de Errores' : 'Práctica';
      badge.style.backgroundColor = p.isErrorMode ? 'var(--error-bg)' : 'var(--primary-subtle)';
      badge.style.color = p.isErrorMode ? 'var(--error-text)' : 'var(--primary-text)';
    }

    const counter = document.getElementById('practice-question-counter');
    if (counter) {
      counter.textContent = `Pregunta ${p.currentIndex + 1} de ${p.questions.length}`;
    }

    const progressBar = document.getElementById('practice-progress-bar');
    if (progressBar) {
      const pct = Math.round(((p.currentIndex + 1) / p.questions.length) * 100);
      progressBar.style.width = `${pct}%`;
    }

    // Texto de la pregunta (con textContent)
    const textEl = document.getElementById('practice-question-text');
    if (textEl) {
      textEl.textContent = `${currentQ.id}. ${currentQ.question}`;
    }

    // Contenedor de alternativas
    const optionsContainer = document.getElementById('practice-options-container');
    clearElement(optionsContainer);

    const feedbackBox = document.getElementById('practice-feedback-box');
    clearElement(feedbackBox);

    const previousAnswer = p.userAnswers[p.currentIndex];
    p.isAnswered = !!previousAnswer;

    currentQ.options.forEach((optText, optIndex) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'option-btn';
      btn.setAttribute('role', 'radio');
      btn.setAttribute('aria-checked', 'false');
      btn.id = `practice-opt-${optIndex}`;

      // Badge de letra (A, B, C, D, E)
      const badgeSpan = document.createElement('span');
      badgeSpan.className = 'option-badge';
      badgeSpan.textContent = OPTION_LETTERS[optIndex];

      // Contenido de la opción
      const textSpan = document.createElement('span');
      textSpan.className = 'option-content';
      textSpan.textContent = optText;

      btn.appendChild(badgeSpan);
      btn.appendChild(textSpan);

      // Si ya fue respondida en esta sesión
      if (previousAnswer) {
        btn.disabled = true;
        if (optIndex === currentQ.correctAnswer) {
          btn.classList.add('is-correct');
        }
        if (optIndex === previousAnswer.selectedOptionIndex && !previousAnswer.isCorrect) {
          btn.classList.add('is-incorrect');
        }
      } else {
        btn.addEventListener('click', () => {
          handlePracticeAnswer(optIndex);
        });
      }

      optionsContainer.appendChild(btn);
    });

    if (previousAnswer) {
      showPracticeFeedback(previousAnswer.isCorrect, currentQ);
    }

    // Botones de navegación
    const prevBtn = document.getElementById('btn-practice-prev');
    const nextBtn = document.getElementById('btn-practice-next');

    if (prevBtn) {
      prevBtn.disabled = p.currentIndex === 0;
    }

    if (nextBtn) {
      const nextText = nextBtn.querySelector('span');
      if (nextText) {
        nextText.textContent = p.currentIndex === p.questions.length - 1 ? 'Finalizar sesión' : 'Siguiente';
      }
    }
  }

  function handlePracticeAnswer(selectedIndex) {
    const p = state.practice;
    if (p.isAnswered) return;

    const currentQ = p.questions[p.currentIndex];
    const isCorrect = selectedIndex === currentQ.correctAnswer;
    p.isAnswered = true;

    p.userAnswers[p.currentIndex] = {
      selectedOptionIndex: selectedIndex,
      isCorrect
    };

    // Bloquear temporalmente todas las opciones
    const optionsContainer = document.getElementById('practice-options-container');
    const allButtons = optionsContainer.querySelectorAll('.option-btn');
    allButtons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === currentQ.correctAnswer) {
        btn.classList.add('is-correct');
      }
      if (idx === selectedIndex && !isCorrect) {
        btn.classList.add('is-incorrect');
      }
    });

    // Guardar resultado en almacenamiento
    window.QuizStorage.recordAnswer(currentQ.id, isCorrect);
    if (!p.isErrorMode) {
      window.QuizStorage.saveLastPracticeIndex(p.currentIndex);
    }

    // Mostrar feedback discreto
    showPracticeFeedback(isCorrect, currentQ);
  }

  function showPracticeFeedback(isCorrect, question) {
    const feedbackBox = document.getElementById('practice-feedback-box');
    clearElement(feedbackBox);

    const banner = document.createElement('div');
    banner.className = `practice-feedback ${isCorrect ? 'feedback-correct' : 'feedback-incorrect'}`;

    const iconSpan = document.createElement('span');
    iconSpan.className = 'feedback-icon';
    iconSpan.setAttribute('aria-hidden', 'true');

    if (isCorrect) {
      iconSpan.textContent = '✓';
      banner.appendChild(iconSpan);

      const msg = document.createElement('span');
      msg.textContent = 'Respuesta correcta';
      banner.appendChild(msg);
    } else {
      iconSpan.textContent = '✕';
      banner.appendChild(iconSpan);

      const msg = document.createElement('span');
      const correctLetter = OPTION_LETTERS[question.correctAnswer];
      const correctText = question.options[question.correctAnswer];
      msg.textContent = `Respuesta incorrecta. La alternativa correcta es la ${correctLetter}: ${correctText}`;
      banner.appendChild(msg);
    }

    feedbackBox.appendChild(banner);
  }

  function nextPracticeQuestion() {
    const p = state.practice;
    if (p.currentIndex < p.questions.length - 1) {
      p.currentIndex += 1;
      p.isAnswered = false;
      renderPracticeQuestion();
    } else {
      // Fin de la sesión de práctica
      alert('¡Has completado todas las preguntas de esta sesión de práctica!');
      switchView('dashboard');
    }
  }

  function prevPracticeQuestion() {
    const p = state.practice;
    if (p.currentIndex > 0) {
      p.currentIndex -= 1;
      renderPracticeQuestion();
    }
  }

  // ==========================================================================
  // MODO 2: EXAMEN CONFIGURABLE
  // ==========================================================================
  function initExamConfig() {
    // Selectores de cantidad (10, 20, 30, todas)
    const countButtons = document.querySelectorAll('[data-exam-count]');
    countButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        countButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        const countVal = btn.getAttribute('data-exam-count');
        state.exam.configCount = countVal === 'all' ? 'all' : parseInt(countVal, 10);
      });
    });

    // Selectores de orden (aleatorio, original)
    const orderButtons = document.querySelectorAll('[data-exam-order]');
    orderButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        orderButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        state.exam.configOrder = btn.getAttribute('data-exam-order');
      });
    });

    const startBtn = document.getElementById('btn-start-exam-now');
    if (startBtn) {
      startBtn.addEventListener('click', startExamSession);
    }

    const cancelBtn = document.getElementById('btn-cancel-exam-config');
    if (cancelBtn) {
      cancelBtn.addEventListener('click', () => {
        switchView('dashboard');
      });
    }
  }

  function startExamSession() {
    let pool = [...state.allQuestions];

    // Aplicar orden aleatorio mediante Fisher-Yates seguro si está configurado
    if (state.exam.configOrder === 'random') {
      pool = shuffleArray(pool);
    }

    // Aplicar límite de cantidad
    let totalExamQuestions = pool.length;
    if (state.exam.configCount !== 'all' && typeof state.exam.configCount === 'number') {
      totalExamQuestions = Math.min(state.exam.configCount, pool.length);
    }

    state.exam.questions = pool.slice(0, totalExamQuestions);
    state.exam.currentIndex = 0;
    state.exam.userAnswers = {};

    switchView('exam');
    renderExamQuestion();
  }

  function renderExamQuestion() {
    const e = state.exam;
    const currentQ = e.questions[e.currentIndex];
    if (!currentQ) return;

    // Actualizar contador
    const counter = document.getElementById('exam-question-counter');
    if (counter) {
      counter.textContent = `Pregunta ${e.currentIndex + 1} de ${e.questions.length}`;
    }

    // Barra de progreso
    const progressBar = document.getElementById('exam-progress-bar');
    if (progressBar) {
      const pct = Math.round(((e.currentIndex + 1) / e.questions.length) * 100);
      progressBar.style.width = `${pct}%`;
    }

    // Texto de la pregunta
    const textEl = document.getElementById('exam-question-text');
    if (textEl) {
      textEl.textContent = `${e.currentIndex + 1}. ${currentQ.question}`;
    }

    // Opciones del examen (NO muestra si es correcta o incorrecta)
    const optionsContainer = document.getElementById('exam-options-container');
    clearElement(optionsContainer);

    const selectedOption = e.userAnswers[e.currentIndex];

    currentQ.options.forEach((optText, optIndex) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'option-btn';
      btn.setAttribute('role', 'radio');
      btn.id = `exam-opt-${optIndex}`;

      const isSelected = selectedOption === optIndex;
      if (isSelected) {
        btn.classList.add('selected');
        btn.setAttribute('aria-checked', 'true');
      } else {
        btn.setAttribute('aria-checked', 'false');
      }

      const badgeSpan = document.createElement('span');
      badgeSpan.className = 'option-badge';
      badgeSpan.textContent = OPTION_LETTERS[optIndex];

      const textSpan = document.createElement('span');
      textSpan.className = 'option-content';
      textSpan.textContent = optText;

      btn.appendChild(badgeSpan);
      btn.appendChild(textSpan);

      // Permite seleccionar y cambiar la respuesta libremente
      btn.addEventListener('click', () => {
        handleExamAnswer(optIndex);
      });

      optionsContainer.appendChild(btn);
    });

    // Control de botones de navegación
    const prevBtn = document.getElementById('btn-exam-prev');
    const nextBtn = document.getElementById('btn-exam-next');
    const finishBtn = document.getElementById('btn-exam-finish');

    if (prevBtn) {
      prevBtn.disabled = e.currentIndex === 0;
    }

    const isLast = e.currentIndex === e.questions.length - 1;
    if (nextBtn) {
      nextBtn.style.display = isLast ? 'none' : 'inline-flex';
    }
    if (finishBtn) {
      finishBtn.style.display = isLast ? 'inline-flex' : 'none';
    }
  }

  function handleExamAnswer(optionIndex) {
    const e = state.exam;
    e.userAnswers[e.currentIndex] = optionIndex;

    // Actualizar visualmente la selección sin recargar toda la pregunta
    const optionsContainer = document.getElementById('exam-options-container');
    const allButtons = optionsContainer.querySelectorAll('.option-btn');
    allButtons.forEach((btn, idx) => {
      if (idx === optionIndex) {
        btn.classList.add('selected');
        btn.setAttribute('aria-checked', 'true');
      } else {
        btn.classList.remove('selected');
        btn.setAttribute('aria-checked', 'false');
      }
    });
  }

  function nextExamQuestion() {
    const e = state.exam;
    if (e.currentIndex < e.questions.length - 1) {
      e.currentIndex += 1;
      renderExamQuestion();
    }
  }

  function prevExamQuestion() {
    const e = state.exam;
    if (e.currentIndex > 0) {
      e.currentIndex -= 1;
      renderExamQuestion();
    }
  }

  function finishExam() {
    const e = state.exam;
    let score = 0;
    const total = e.questions.length;
    const incorrectList = [];
    const examDetails = [];

    e.questions.forEach((q, idx) => {
      const userSelected = e.userAnswers[idx];
      const isCorrect = userSelected !== undefined && userSelected === q.correctAnswer;

      if (isCorrect) {
        score += 1;
      } else {
        incorrectList.push({
          question: q,
          userSelected: userSelected !== undefined ? userSelected : null,
          correctAnswer: q.correctAnswer
        });
      }

      examDetails.push({
        questionId: q.id,
        isCorrect
      });
    });

    // Registrar en storage
    window.QuizStorage.recordExamResult(score, total, examDetails);

    // Renderizar resultados
    renderExamResults(score, total, incorrectList);
    switchView('results');
  }

  function renderExamResults(score, total, incorrectList) {
    const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
    const incorrectCount = total - score;

    const elScore = document.getElementById('results-score-display');
    const elPct = document.getElementById('results-percentage-display');
    const elCorrect = document.getElementById('results-correct-count');
    const elIncorrect = document.getElementById('results-incorrect-count');

    if (elScore) elScore.textContent = `${score} / ${total}`;
    if (elPct) elPct.textContent = `${percentage}%`;
    if (elCorrect) elCorrect.textContent = String(score);
    if (elIncorrect) elIncorrect.textContent = String(incorrectCount);

    // Contenedor de revisión de errores
    const reviewList = document.getElementById('results-review-list');
    clearElement(reviewList);

    const reviewSection = document.getElementById('results-review-container');

    if (incorrectList.length === 0) {
      if (reviewSection) reviewSection.style.display = 'none';
    } else {
      if (reviewSection) reviewSection.style.display = 'block';

      incorrectList.forEach((item, i) => {
        const card = document.createElement('div');
        card.className = 'review-card';

        const qTitle = document.createElement('div');
        qTitle.className = 'review-q-text';
        qTitle.textContent = `${i + 1}. ${item.question.question}`;
        card.appendChild(qTitle);

        // Tu respuesta
        const userRow = document.createElement('div');
        userRow.className = 'review-ans-row';

        const userTag = document.createElement('span');
        userTag.className = 'review-tag tag-user';
        userTag.textContent = 'Tu respuesta';

        const userText = document.createElement('span');
        if (item.userSelected !== null) {
          userText.textContent = `${OPTION_LETTERS[item.userSelected]}: ${item.question.options[item.userSelected]}`;
        } else {
          userText.textContent = 'No respondida';
        }

        userRow.appendChild(userTag);
        userRow.appendChild(userText);
        card.appendChild(userRow);

        // Respuesta correcta
        const correctRow = document.createElement('div');
        correctRow.className = 'review-ans-row';

        const correctTag = document.createElement('span');
        correctTag.className = 'review-tag tag-correct';
        correctTag.textContent = 'Respuesta correcta';

        const correctText = document.createElement('span');
        correctText.textContent = `${OPTION_LETTERS[item.correctAnswer]}: ${item.question.options[item.correctAnswer]}`;

        correctRow.appendChild(correctTag);
        correctRow.appendChild(correctText);
        card.appendChild(correctRow);

        reviewList.appendChild(card);
      });
    }
  }

  // ==========================================================================
  // VISTA DE ESTADÍSTICAS
  // ==========================================================================
  function renderStatsView() {
    const stats = window.QuizStorage.getGlobalStats(state.allQuestions.length);

    const elMastered = document.getElementById('stats-mastered-count');
    const elReview = document.getElementById('stats-review-count');
    const elTotalAns = document.getElementById('stats-total-answers');
    const elCorrectAns = document.getElementById('stats-correct-answers');
    const elIncorrectAns = document.getElementById('stats-incorrect-answers');
    const elGlobalAcc = document.getElementById('stats-global-accuracy');
    const elAccLabel = document.getElementById('stats-accuracy-label');
    const elAccBar = document.getElementById('stats-accuracy-bar');
    const elBestExam = document.getElementById('stats-best-exam-label');

    if (elMastered) elMastered.textContent = String(stats.masteredCount);
    if (elReview) elReview.textContent = String(stats.needsReviewCount);
    if (elTotalAns) elTotalAns.textContent = String(stats.totalAnswered);
    if (elCorrectAns) elCorrectAns.textContent = String(stats.totalCorrect);
    if (elIncorrectAns) elIncorrectAns.textContent = String(stats.totalIncorrect);
    if (elGlobalAcc) elGlobalAcc.textContent = `${stats.accuracyPercentage}%`;
    if (elAccLabel) elAccLabel.textContent = `${stats.accuracyPercentage}%`;

    if (elAccBar) {
      elAccBar.style.width = `${stats.accuracyPercentage}%`;
    }

    if (elBestExam) {
      if (stats.bestExam) {
        elBestExam.textContent = `${stats.bestExam.score}/${stats.bestExam.total} (${stats.bestExam.percentage}%) - Fecha: ${stats.bestExam.date}`;
      } else {
        elBestExam.textContent = 'Aún no has completado ningún examen';
      }
    }

    // Lista ordenada de preguntas por mayor número de errores
    const rankedList = document.getElementById('stats-ranked-list');
    clearElement(rankedList);

    const rankedErrors = window.QuizStorage.getQuestionsRankedByErrors(state.allQuestions);

    if (rankedErrors.length === 0) {
      const emptyDiv = document.createElement('div');
      emptyDiv.className = 'empty-state';

      const emptyTitle = document.createElement('div');
      emptyTitle.className = 'empty-state-title';
      emptyTitle.textContent = '¡Sin errores registrados!';

      const emptyDesc = document.createElement('div');
      emptyDesc.textContent = 'Cuando respondas preguntas incorrectamente en práctica o examen, aparecerán aquí ordenadas por dificultad.';

      emptyDiv.appendChild(emptyTitle);
      emptyDiv.appendChild(emptyDesc);
      rankedList.appendChild(emptyDiv);
    } else {
      rankedErrors.forEach((item) => {
        const row = document.createElement('div');
        row.className = 'ranked-item';

        const info = document.createElement('div');
        info.className = 'ranked-item-info';

        const qTitle = document.createElement('div');
        qTitle.className = 'ranked-item-question';
        qTitle.textContent = `${item.question.id}. ${item.question.question}`;

        const qStats = document.createElement('div');
        qStats.style.fontSize = '0.8125rem';
        qStats.style.color = 'var(--text-secondary)';
        qStats.style.marginTop = '4px';
        qStats.textContent = `Aciertos: ${item.correctCount} | Fallos: ${item.errorCount}`;

        info.appendChild(qTitle);
        info.appendChild(qStats);

        const badge = document.createElement('div');
        badge.className = 'ranked-badge';
        badge.textContent = `${item.errorCount} ${item.errorCount === 1 ? 'error' : 'errores'}`;

        row.appendChild(info);
        row.appendChild(badge);
        rankedList.appendChild(row);
      });
    }
  }

  // ==========================================================================
  // MODAL DE CONFIRMACIÓN PARA REINICIAR PROGRESO
  // ==========================================================================
  function initResetModal() {
    const modal = document.getElementById('reset-modal');
    const openBtn = document.getElementById('btn-action-reset-progress');
    const cancelBtn = document.getElementById('btn-cancel-reset');
    const confirmBtn = document.getElementById('btn-confirm-reset');

    if (openBtn && modal) {
      openBtn.addEventListener('click', () => {
        modal.classList.add('active');
        if (cancelBtn) cancelBtn.focus();
      });
    }

    if (cancelBtn && modal) {
      cancelBtn.addEventListener('click', () => {
        modal.classList.remove('active');
      });
    }

    if (confirmBtn && modal) {
      confirmBtn.addEventListener('click', () => {
        window.QuizStorage.resetAllProgress();
        modal.classList.remove('active');
        renderDashboardStats();
        alert('Progreso restablecido correctamente.');
      });
    }

    // Cerrar al hacer clic en el backdrop
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('active');
        }
      });
    }
  }

  // ==========================================================================
  // NAVEGACIÓN POR TECLADO ACCESIBLE
  // 1, 2, 3, 4, 5: Seleccionar alternativas
  // Enter: Siguiente pregunta / Confirmar
  // Flecha Izquierda: Pregunta anterior
  // Flecha Derecha: Pregunta siguiente
  // Escape: Cerrar modal
  // ==========================================================================
  function initKeyboardNavigation() {
    window.addEventListener('keydown', (e) => {
      // Ignorar si el usuario está escribiendo en un input
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) {
        return;
      }

      // Escape cierra modales
      if (e.key === 'Escape') {
        const modal = document.getElementById('reset-modal');
        if (modal && modal.classList.contains('active')) {
          modal.classList.remove('active');
        }
        return;
      }

      // Atajos en Modo Práctica
      if (state.currentView === 'practice') {
        if (['1', '2', '3', '4', '5'].includes(e.key)) {
          const optIndex = parseInt(e.key, 10) - 1;
          handlePracticeAnswer(optIndex);
        } else if (e.key === 'ArrowRight' || e.key === 'Enter') {
          e.preventDefault();
          nextPracticeQuestion();
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          prevPracticeQuestion();
        }
      }

      // Atajos en Modo Examen
      else if (state.currentView === 'exam') {
        if (['1', '2', '3', '4', '5'].includes(e.key)) {
          const optIndex = parseInt(e.key, 10) - 1;
          handleExamAnswer(optIndex);
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          nextExamQuestion();
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          prevExamQuestion();
        } else if (e.key === 'Enter') {
          e.preventDefault();
          const eState = state.exam;
          if (eState.currentIndex === eState.questions.length - 1) {
            finishExam();
          } else {
            nextExamQuestion();
          }
        }
      }
    });
  }

  // ==========================================================================
  // REGISTRO DE SERVICE WORKER PARA PWA
  // ==========================================================================
  function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js')
          .then((registration) => {
            console.log('Service Worker registrado exitosamente:', registration.scope);
          })
          .catch((err) => {
            console.warn('Error al registrar Service Worker:', err);
          });
      });
    }
  }

  // ==========================================================================
  // INICIALIZACIÓN GLOBAL
  // ==========================================================================
  function initApp() {
    // Cargar preguntas desde questions.js
    state.allQuestions = Array.isArray(window.quizQuestions) ? window.quizQuestions : [];

    // Iniciar subsistemas
    initTheme();
    initExamConfig();
    initResetModal();
    initKeyboardNavigation();
    registerServiceWorker();

    // Eventos de barra de navegación
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const view = btn.getAttribute('data-view');
        if (view === 'practice') {
          const stats = window.QuizStorage.getGlobalStats(state.allQuestions.length);
          startPracticeSession(stats.lastPracticeIndex || 0, false);
        } else if (view === 'exam-config') {
          switchView('exam-config');
        } else {
          switchView(view);
        }
      });
    });

    const brandLink = document.getElementById('nav-brand');
    if (brandLink) {
      brandLink.addEventListener('click', (e) => {
        e.preventDefault();
        switchView('dashboard');
      });
    }

    // Botones de acción del dashboard
    const btnAllPractice = document.getElementById('btn-action-all-practice');
    if (btnAllPractice) {
      btnAllPractice.addEventListener('click', () => {
        startPracticeSession(0, false);
      });
    }

    const btnExamMode = document.getElementById('btn-action-exam-mode');
    if (btnExamMode) {
      btnExamMode.addEventListener('click', () => {
        switchView('exam-config');
      });
    }

    const btnErrorsPractice = document.getElementById('btn-action-errors-practice');
    if (btnErrorsPractice) {
      btnErrorsPractice.addEventListener('click', () => {
        startPracticeSession(0, true);
      });
    }

    const btnContinuePractice = document.getElementById('btn-action-continue-practice');
    if (btnContinuePractice) {
      btnContinuePractice.addEventListener('click', () => {
        const stats = window.QuizStorage.getGlobalStats(state.allQuestions.length);
        startPracticeSession(stats.lastPracticeIndex || 0, false);
      });
    }

    // Botones de sesión de práctica
    const btnPracticeNext = document.getElementById('btn-practice-next');
    if (btnPracticeNext) {
      btnPracticeNext.addEventListener('click', nextPracticeQuestion);
    }

    const btnPracticePrev = document.getElementById('btn-practice-prev');
    if (btnPracticePrev) {
      btnPracticePrev.addEventListener('click', prevPracticeQuestion);
    }

    // Botones de sesión de examen
    const btnExamNext = document.getElementById('btn-exam-next');
    if (btnExamNext) {
      btnExamNext.addEventListener('click', nextExamQuestion);
    }

    const btnExamPrev = document.getElementById('btn-exam-prev');
    if (btnExamPrev) {
      btnExamPrev.addEventListener('click', prevExamQuestion);
    }

    const btnExamFinish = document.getElementById('btn-exam-finish');
    if (btnExamFinish) {
      btnExamFinish.addEventListener('click', finishExam);
    }

    // Botones de resultados de examen
    const btnResultsRetry = document.getElementById('btn-results-retry');
    if (btnResultsRetry) {
      btnResultsRetry.addEventListener('click', startExamSession);
    }

    const btnResultsPracticeErrors = document.getElementById('btn-results-practice-errors');
    if (btnResultsPracticeErrors) {
      btnResultsPracticeErrors.addEventListener('click', () => {
        startPracticeSession(0, true);
      });
    }

    const btnResultsHome = document.getElementById('btn-results-home');
    if (btnResultsHome) {
      btnResultsHome.addEventListener('click', () => {
        switchView('dashboard');
      });
    }

    // Render inicial
    switchView('dashboard');
  }

  // Arrancar cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();
