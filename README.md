# Práctica de Investigación Científica (Metodología Sampieri)

Aplicación web estática completa, autónoma, segura y orientada a la práctica y simulación de exámenes universitarios de **Investigación Científica**, fundamentada en la obra y metodología de **Roberto Hernández-Sampieri**.

Diseñada con un estándar visual moderno inspirado en plataformas como *Quizlet* y *Kahoot*, optimizada para **Mobile First** (probada en iPhone 16, Android, tablets y monitores de escritorio), con soporte PWA offline y cero dependencias de terceros.

---

## 1. Estructura del Proyecto

```text
app-preguntas/
├── index.html                   # Interfaz semántica principal sin scripts/estilos inline
├── manifest.webmanifest         # Manifiesto de PWA instalable
├── service-worker.js            # Service Worker para funcionamiento 100% offline
├── vercel.json                  # Encabezados de seguridad HTTP y Content Security Policy
├── extract_docx.py              # Extractor automatizado desde documentos Word (.docx)
├── README.md                    # Documentación exhaustiva del sistema
├── css/
│   └── styles.css               # Sistema de diseño, variables CSS y modos claro/oscuro
├── js/
│   ├── questions.js             # Banco de 137 preguntas con 5 alternativas y clave consistente (A-E)
│   ├── storage.js               # Gestor seguro versionado de localStorage (investigacionQuiz_v1)
│   └── app.js                   # Lógica de estados, modos, teclado y renderizado seguro DOM
└── assets/
    └── icons/
        ├── icon.svg             # Ícono vectorial principal
        ├── favicon.svg          # Favicon vectorial de pestaña
        ├── icon-192.png         # Ícono para PWA en móviles (192x192)
        └── icon-512.png         # Ícono para PWA en alta resolución (512x512)
```

---

## 2. Cómo Modificar Preguntas

Todas las preguntas residen en el archivo `js/questions.js` bajo una estructura de arreglo JavaScript estándar:

```javascript
const questions = [
  {
    id: 1,
    question: "¿Cuál es la característica distintiva principal del enfoque cuantitativo...?",
    options: [
      "Alternativa A...",
      "Alternativa B...",
      "Alternativa C...",
      "Alternativa D...",
      "Alternativa E..."
    ],
    correctAnswer: 1 // 0 = A, 1 = B, 2 = C, 3 = D, 4 = E
  }
];
```

Para editar el enunciado, las opciones o la respuesta correcta:
1. Abre `js/questions.js` con cualquier editor de texto o IDE.
2. Modifica el texto de la propiedad `question`, las cadenas dentro del arreglo `options`, o el índice numérico en `correctAnswer`.
3. Guarda el archivo y recarga la página.

---

## 3. Cómo Agregar Nuevas Preguntas

### Opción A: Manualmente en `js/questions.js`
Añade un nuevo objeto al final del arreglo `questions`:

```javascript
  {
    id: 61,
    question: "Enunciado de la nueva pregunta de investigación científica",
    options: [
      "Primera alternativa (A)",
      "Segunda alternativa (B)",
      "Tercera alternativa (C)",
      "Cuarta alternativa (D)",
      "Quinta alternativa (E)"
    ],
    correctAnswer: 2 // Indica el índice de la opción correcta (ejemplo: 2 = C)
  }
```

> **Reglas obligatorias:**
> - Cada pregunta debe contener exactamente 5 alternativas en `options`.
> - `correctAnswer` debe ser un número entero entre `0` y `4`.
> - El `id` debe ser un número único secuencial.

### Opción B: Extracción Automática desde Word (.docx)
Si tienes el archivo `Banco_preguntas_examen_investigacion_cientifica_Sampieri.docx`:
1. Coloca el archivo en la raíz del proyecto.
2. Ejecuta el script extractor incluido:
   ```bash
   python extract_docx.py "Banco_preguntas_examen_investigacion_cientifica_Sampieri.docx"
   ```
3. El script extraerá automáticamente las preguntas, validará que tengan 5 alternativas, asociará la clave de respuestas, comprobará duplicados y generará `js/questions.js`.

---

## 4. Cómo Desplegar en Vercel

La aplicación está 100% preparada para Vercel como sitio estático sin requerir Node.js en producción.

### Método 1: Desde la Interfaz Web de Vercel
1. Sube tu carpeta a un repositorio en **GitHub**, **GitLab** o **Bitbucket**.
2. Entra a [vercel.com](https://vercel.com) e inicia sesión.
3. Haz clic en **"Add New..."** &rarr; **"Project"**.
4. Importa tu repositorio.
5. En **Framework Preset**, selecciona **"Other"** (sitio estático).
6. Haz clic en **Deploy**. El archivo `vercel.json` configurará de inmediato la compresión, rutas limpias y todas las cabeceras de seguridad estrictas (CSP, nosniff, etc.).

### Método 2: Mediante Vercel CLI
```bash
npx vercel
# Para producción:
npx vercel --prod
```

---

## 5. Cómo Desplegar en GitHub Pages

1. Sube el código a tu repositorio en GitHub (por ejemplo, en la rama `main`).
2. En GitHub, ve a **Settings** &rarr; **Pages**.
3. En **Build and deployment** &rarr; **Source**, selecciona **Deploy from a branch**.
4. Selecciona la rama `main` y la carpeta `/ (root)`.
5. Haz clic en **Save**. En menos de un minuto tu sitio estará disponible en `https://<tu-usuario>.github.io/<tu-repositorio>/`.

---

## 6. Cómo Limpiar o Restablecer el Progreso

1. En la pantalla de **Inicio (Dashboard)**, dirígete a la parte inferior y presiona el botón:
   `5. Reiniciar progreso`.
2. Se abrirá un cuadro de diálogo accesible pidiendo confirmación explícita para evitar pérdidas accidentales.
3. Al pulsar **"Sí, restablecer"**, se borrarán todas las respuestas acumuladas, preguntas marcadas como erróneas y registros de exámenes, restableciendo los contadores a cero manteniendo intacta tu preferencia de tema (claro/oscuro).

---

## 7. Funcionamiento de localStorage

- **Clave versionada:** Toda la información se persiste bajo la clave:
  `investigacionQuiz_v1`
- **Estructura del Estado Almacenado:**
  - `totalAnswered`: Número total de preguntas respondidas acumuladas.
  - `totalCorrect`: Total de aciertos acumulados.
  - `totalIncorrect`: Total de fallos acumulados.
  - `lastPracticeIndex`: Índice de la última pregunta visitada en modo práctica para reanudar donde te quedaste.
  - `theme`: Preferencia visual del usuario (`'system'`, `'light'`, o `'dark'`).
  - `questionStats`: Mapa por cada ID de pregunta con historial de aciertos, fallos y racha consecutiva de aciertos.
  - `incorrectQuestionIds`: Arreglo de IDs de preguntas con errores pendientes. Cuando el usuario responde correctamente una pregunta varias veces consecutivas en modo de refuerzo, se marca como dominada y se retira de la lista activa conservando el historial.
  - `bestExam`: Puntuación más alta obtenida en el simulador de examen (`{ score, total, percentage, date }`).
  - `examHistory`: Historial de los últimos exámenes realizados.

---

## 8. Funcionamiento de la PWA (Progressive Web App)

- **Instalación Nativa:** Gracias a `manifest.webmanifest`, la web puede añadirse a la pantalla de inicio en iPhone (Safari &rarr; "Compartir" &rarr; "Agregar al inicio") y en Android (Chrome &rarr; "Instalar aplicación"), abriéndose en modo pantalla completa sin barra de navegación del navegador (`standalone`).
- **Capacidad Offline Autónoma:** El archivo `service-worker.js` almacena en la caché del navegador todos los recursos críticos (`index.html`, `css/styles.css`, scripts y assets). Si pierdes la conexión a internet o viajas en transporte público, la aplicación continuará funcionando con total fluidez.

---

## 9. Medidas de Seguridad Implementadas

Se ha minimizado al máximo la superficie de ataque siguiendo las recomendaciones de ciberseguridad más estrictas:

1. **Cero Dependencias y Cero CDNs:** Ninguna librería externa (React, Vue, jQuery, Bootstrap, Tailwind, etc.), evitando ataques de cadena de suministro o secuestro de librerías.
2. **Prohibición de `eval()` y `new Function()`:** El código no utiliza generación dinámica de código.
3. **Renderizado Seguro del DOM:** Todas las preguntas, alternativas y resultados se insertan estrictamente mediante `document.createElement()` y `element.textContent`. **No se utiliza `innerHTML`** para inyectar contenido proveniente de datos.
4. **Content Security Policy (CSP) Restrictiva:**
   - No permite `'unsafe-inline'` para scripts.
   - Restringe todas las fuentes a `'self'`.
   - Bloquea marcos (`frame-ancestors 'none'`) para mitigar ataques de Clickjacking.
   - Bloquea objetos embebidos (`object-src 'none'`).
5. **Encabezados HTTP de Seguridad en `vercel.json`:**
   - `X-Content-Type-Options: nosniff` (previene MIME type sniffing).
   - `X-Frame-Options: DENY`.
   - `Referrer-Policy: strict-origin-when-cross-origin`.
   - `Permissions-Policy` restrictiva deshabilitando acceso a cámara, micrófono y geolocalización.
6. **Privacidad Absoluta:**
   - No se utilizan cookies, trackers ni servicios analíticos de terceros.
   - Toda la información y estadísticas residen única y exclusivamente en el dispositivo del usuario.

---

## 10. Navegación por Teclado

La aplicación es completamente accesible mediante teclado:
- <kbd>1</kbd>, <kbd>2</kbd>, <kbd>3</kbd>, <kbd>4</kbd>, <kbd>5</kbd>: Seleccionar alternativas A, B, C, D o E.
- <kbd>&rarr;</kbd> (Flecha Derecha): Siguiente pregunta.
- <kbd>&larr;</kbd> (Flecha Izquierda): Pregunta anterior.
- <kbd>Enter</kbd>: Siguiente pregunta o finalizar examen en la última pregunta.
- <kbd>Esc</kbd>: Cerrar cuadros de confirmación.

---

## 11. Notas sobre el Documento Word Extraído

Se procesó y extrajo con éxito el archivo `Banco_preguntas_examen_investigacion_cientifica_Sampieri.docx`:
- **Total de preguntas encontradas:** 137 preguntas de opción múltiple (todas con exactamente 5 alternativas de la A a la E).
- **Temáticas cubiertas:**
  1. Computación, áreas, líneas, ámbitos y temáticas de investigación (Disciplinas de computación, áreas de investigación, líneas, ámbitos y títulos de proyecto).
  2. La investigación científica y el problema (Definición de investigación, planteamiento del problema, objetivos, justificación, viabilidad y delimitación).
  3. Enfoques de la investigación (Cuantitativo, cualitativo y mixto).
  4. Alcance y formulación de hipótesis (Exploratorio, descriptivo, correlacional, explicativo; hipótesis, variables y operacionalización).
  5. Diseño de investigación (Experimentales, preexperimentos, cuasiexperimentos, experimentos puros; no experimentales transversales y longitudinales).
  6. Población y muestra (Universo, muestras probabilísticas y no probabilísticas).
  7. Casos prácticos aplicados a proyectos universitarios e ingeniería.
- **Validación de Claves:** Se extrajeron las 137 claves de respuesta directamente de la tabla de soluciones (*Bloque 1* a *Bloque 7*) ubicada al final del documento Word. Todas coinciden al 100% sin discrepancias ni preguntas huérfanas.
- **Inconsistencias detectadas:** Ninguna. Cada una de las 137 preguntas tiene exactamente 5 alternativas (A, B, C, D, E) y su clave respectiva.

