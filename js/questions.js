/**
 * questions.js - Banco de preguntas de Examen de Investigación Científica
 * Basado en Material de Clase PFC I + Roberto Hernández-Sampieri (Metodología de la investigación, 6.ª ed.)
 * Total de preguntas: 137
 * Cada pregunta cuenta con exactamente 5 alternativas (A, B, C, D, E).
 * correctAnswer: 0 = A, 1 = B, 2 = C, 3 = D, 4 = E.
 */

const questions = [
  {
    "id": 1,
    "question": "Según el material de clase, ¿cuál de las siguientes disciplinas forma parte del campo de Computación - Informática?",
    "options": [
      "Ciencia de Datos",
      "Ingeniería Civil",
      "Derecho",
      "Medicina",
      "Arquitectura"
    ],
    "correctAnswer": 0
  },
  {
    "id": 2,
    "question": "¿Cuál de las siguientes opciones NO aparece entre las disciplinas de Computación - Informática mostradas en clase?",
    "options": [
      "Ingeniería de Software",
      "Ingeniería Mecánica",
      "Ciberseguridad",
      "Sistemas de Información",
      "Inteligencia Artificial"
    ],
    "correctAnswer": 1
  },
  {
    "id": 3,
    "question": "En la clasificación presentada, un área de investigación es:",
    "options": [
      "Una técnica de recolección de datos",
      "Una pregunta de investigación",
      "Una categoría amplia que agrupa varias líneas",
      "Una hipótesis estadística",
      "El lugar geográfico donde vive el investigador"
    ],
    "correctAnswer": 2
  },
  {
    "id": 4,
    "question": "Una línea de investigación se entiende mejor como:",
    "options": [
      "Un resultado final del estudio",
      "Una etapa del proyecto",
      "La población total del estudio",
      "Un tema específico dentro de un área de investigación",
      "Una referencia bibliográfica"
    ],
    "correctAnswer": 3
  },
  {
    "id": 5,
    "question": "¿Cuál de las siguientes líneas corresponde al área 'Usuarios y organizaciones' según el material de clase?",
    "options": [
      "Procesamiento de señales",
      "Circuitos y Electrónica",
      "Lenguajes de programación",
      "Sistemas operativos",
      "Diseño de la experiencia del usuario"
    ],
    "correctAnswer": 4
  },
  {
    "id": 6,
    "question": "¿Cuál de las siguientes líneas pertenece al área 'Modelado de sistemas'?",
    "options": [
      "Gráficos y visualización",
      "Análisis y especificación de requerimientos",
      "Diseño Digital",
      "Sistemas embebidos",
      "Procesamiento de señales"
    ],
    "correctAnswer": 1
  },
  {
    "id": 7,
    "question": "¿Cuál de las siguientes líneas pertenece al área 'Arquitectura e infraestructura de sistemas'?",
    "options": [
      "Diseño de la experiencia del usuario",
      "Gestión de proyectos",
      "Fundamentos de la programación",
      "Internet de las cosas",
      "Circuitos y Electrónica"
    ],
    "correctAnswer": 3
  },
  {
    "id": 8,
    "question": "¿Cuál de las siguientes líneas corresponde al área 'Desarrollo de software'?",
    "options": [
      "Verificación, validación y calidad de software",
      "Gestión de datos e información",
      "Organización y Arquitectura de Hardware",
      "Sistemas operativos",
      "Principios de seguridad"
    ],
    "correctAnswer": 0
  },
  {
    "id": 9,
    "question": "¿Cuál de las siguientes líneas corresponde al área 'Fundamentos de software'?",
    "options": [
      "Internet de las cosas",
      "Gestión y liderazgo en Sistemas de Información",
      "Implementación de tecnologías de seguridad",
      "Diseño Digital",
      "Lenguajes de programación"
    ],
    "correctAnswer": 4
  },
  {
    "id": 10,
    "question": "¿Cuál de las siguientes líneas corresponde al área 'Hardware'?",
    "options": [
      "Sistemas inteligentes",
      "Gestión de proyectos",
      "Procesamiento de señales",
      "Procesos de software",
      "Arquitectura empresarial"
    ],
    "correctAnswer": 2
  },
  {
    "id": 11,
    "question": "En la tabla de líneas de investigación USIL, la línea general indicada es:",
    "options": [
      "Tecnología de la Información",
      "Salud Pública",
      "Ingeniería Civil",
      "Gestión Comercial",
      "Economía Aplicada"
    ],
    "correctAnswer": 0
  },
  {
    "id": 12,
    "question": "Según el material, el área OCDE asociada a las líneas de investigación mostradas es principalmente:",
    "options": [
      "Ciencias Sociales",
      "Ingeniería y Tecnología",
      "Ciencias Médicas",
      "Humanidades",
      "Ciencias Agrícolas"
    ],
    "correctAnswer": 1
  },
  {
    "id": 13,
    "question": "En las diapositivas de 'Ámbito y temáticas de investigación', el término ámbito se refiere principalmente a:",
    "options": [
      "La prueba estadística",
      "El tamaño de la muestra",
      "El sector o contexto donde se aplica la investigación",
      "El software de análisis",
      "La revista donde se publica"
    ],
    "correctAnswer": 2
  },
  {
    "id": 14,
    "question": "¿Cuál de los siguientes pares ámbito-temática coincide con el material de clase?",
    "options": [
      "Retail - Psiquiatría",
      "Educación - Circuitos y Electrónica",
      "Salud - Gestión de proyectos",
      "Economía y Finanzas - Rotación de clientes",
      "Hardware - Salud Pública"
    ],
    "correctAnswer": 3
  },
  {
    "id": 15,
    "question": "¿Cuál de las siguientes temáticas se muestra dentro del ámbito Educación?",
    "options": [
      "Gestión de portafolio de inversiones",
      "Rotación de clientes",
      "Piscigranjas",
      "Industria 4.0",
      "Gamificación digital"
    ],
    "correctAnswer": 4
  },
  {
    "id": 16,
    "question": "Un proyecto es definido en el material como:",
    "options": [
      "Una lista de bibliografía",
      "Un conjunto de actividades coordinadas para alcanzar resultados específicos",
      "Una hipótesis sin comprobar",
      "Una encuesta aplicada a una muestra",
      "Un conjunto de teorías sin objetivo"
    ],
    "correctAnswer": 1
  },
  {
    "id": 17,
    "question": "¿Cuál es el orden correcto de las etapas del proyecto mostradas en clase?",
    "options": [
      "Control - Inicio - Planificación - Ejecución - Cierre",
      "Planificación - Inicio - Cierre - Ejecución - Control",
      "Inicio - Ejecución - Planificación - Cierre - Control",
      "Inicio - Planificación - Ejecución - Seguimiento y Control - Cierre",
      "Inicio - Planificación - Cierre - Ejecución - Control"
    ],
    "correctAnswer": 3
  },
  {
    "id": 18,
    "question": "¿Qué caracteriza principalmente a la etapa de Inicio de un proyecto?",
    "options": [
      "Se definen objetivos, se evalúa la viabilidad y se establece una visión clara",
      "Se ejecutan todas las tareas planificadas",
      "Se elaboran únicamente reportes de avance",
      "Se liberan recursos y se documentan lecciones aprendidas",
      "Se realiza el análisis estadístico"
    ],
    "correctAnswer": 0
  },
  {
    "id": 19,
    "question": "¿Cuál de los siguientes documentos aparece asociado a la etapa de Inicio?",
    "options": [
      "Matriz RACI",
      "Lecciones Aprendidas",
      "Reporte de Avance",
      "Plan de Comunicación",
      "Acta de Constitución del Proyecto"
    ],
    "correctAnswer": 4
  },
  {
    "id": 20,
    "question": "¿Cuál de los siguientes documentos aparece asociado a la etapa de Planificación?",
    "options": [
      "Reporte de resultados",
      "Acta de Cierre del Proyecto",
      "Matriz RACI",
      "Artículo científico",
      "Conclusiones de investigación"
    ],
    "correctAnswer": 2
  },
  {
    "id": 21,
    "question": "La EDT o WBS se ubica principalmente en la etapa de:",
    "options": [
      "Planificación",
      "Cierre",
      "Inicio",
      "Defensa",
      "Publicación"
    ],
    "correctAnswer": 0
  },
  {
    "id": 22,
    "question": "Durante la Ejecución de un proyecto:",
    "options": [
      "Se define por primera vez el problema",
      "Se implementan las tareas planificadas",
      "Se redacta únicamente el acta de cierre",
      "Se deja de actualizar la documentación",
      "Se elimina el cronograma"
    ],
    "correctAnswer": 1
  },
  {
    "id": 23,
    "question": "El Seguimiento y Control tiene como propósito principal:",
    "options": [
      "Seleccionar la línea de investigación",
      "Crear el título de la tesis",
      "Monitorear el progreso y realizar ajustes para mantener el rumbo",
      "Definir la etimología de tesis",
      "Reemplazar la planificación"
    ],
    "correctAnswer": 2
  },
  {
    "id": 24,
    "question": "¿Cuál de los siguientes productos se asocia al Seguimiento y Control?",
    "options": [
      "Tesis aprobada",
      "Acta de Constitución",
      "Registro de interesados inicial",
      "Reportes de avance",
      "Marco teórico"
    ],
    "correctAnswer": 3
  },
  {
    "id": 25,
    "question": "¿Cuál de los siguientes elementos se asocia al Cierre de un proyecto?",
    "options": [
      "Plan de comunicación",
      "Matriz RACI",
      "EDT/WBS",
      "Registro de riesgos inicial",
      "Lecciones aprendidas"
    ],
    "correctAnswer": 4
  },
  {
    "id": 26,
    "question": "La tecnología es presentada en clase como:",
    "options": [
      "Únicamente dispositivos electrónicos",
      "Conocimientos y nociones científicas utilizados para lograr un objetivo o resolver una necesidad",
      "Solamente programación",
      "Una teoría sin aplicación",
      "Un método estadístico"
    ],
    "correctAnswer": 1
  },
  {
    "id": 27,
    "question": "Según el material, dos tipos de tecnología mencionados son:",
    "options": [
      "Exploratoria y descriptiva",
      "Local y nacional",
      "Cuantitativa y cualitativa",
      "Blanda y dura",
      "Probabilística y no probabilística"
    ],
    "correctAnswer": 3
  },
  {
    "id": 28,
    "question": "Un sistema se define como:",
    "options": [
      "Un conjunto de elementos relacionados que actúan de manera coordinada",
      "Una única pieza de hardware",
      "Un documento de planificación",
      "Una pregunta de investigación",
      "Un conjunto de citas bibliográficas"
    ],
    "correctAnswer": 0
  },
  {
    "id": 29,
    "question": "Un sistema computacional permite principalmente:",
    "options": [
      "Evitar el uso de comunicaciones",
      "Únicamente redactar documentos",
      "Reemplazar la investigación científica",
      "Eliminar la necesidad de software",
      "Procesar, almacenar y transmitir datos"
    ],
    "correctAnswer": 4
  },
  {
    "id": 30,
    "question": "¿Qué componentes menciona el material para un sistema computacional?",
    "options": [
      "Población, muestra y variable",
      "Objetivos, preguntas y conclusiones",
      "Hardware, software y comunicaciones",
      "Área, línea y ámbito",
      "Costo, tiempo y alcance únicamente"
    ],
    "correctAnswer": 2
  },
  {
    "id": 31,
    "question": "En su sentido original, 'tesis' se relaciona con:",
    "options": [
      "Una proposición o postura que debe ser defendida mediante argumentos",
      "Una encuesta cerrada",
      "Una técnica de muestreo",
      "Una etapa de cierre",
      "Una base de datos"
    ],
    "correctAnswer": 0
  },
  {
    "id": 32,
    "question": "Según la clase, un problema es:",
    "options": [
      "Una solución tecnológica ya implementada",
      "Una situación, circunstancia o dilema que requiere solución, respuesta o aclaración",
      "Una bibliografía incompleta",
      "Una variable dependiente",
      "Una muestra probabilística"
    ],
    "correctAnswer": 1
  },
  {
    "id": 33,
    "question": "¿Cuál de las siguientes frases expresa mejor un problema y no una solución?",
    "options": [
      "Implementar inteligencia artificial",
      "Desarrollar una aplicación móvil de inventario",
      "La empresa presenta errores frecuentes en el registro de inventario",
      "Comprar un nuevo servidor",
      "Crear un chatbot"
    ],
    "correctAnswer": 2
  },
  {
    "id": 34,
    "question": "La investigación, en sentido amplio, se entiende como actividades destinadas a:",
    "options": [
      "Publicar siempre en una revista Q1",
      "Construir únicamente software",
      "Realizar exclusivamente experimentos",
      "Obtener nuevos saberes y conocimientos y/o aplicarlos a problemas",
      "Usar obligatoriamente estadística"
    ],
    "correctAnswer": 3
  },
  {
    "id": 35,
    "question": "¿Cuál de las siguientes afirmaciones coincide con las conclusiones de la clase?",
    "options": [
      "Todo proyecto es investigación científica",
      "Toda investigación es experimental",
      "Toda solución exige investigación científica",
      "Toda tesis es cualitativa",
      "No toda investigación es científica"
    ],
    "correctAnswer": 4
  },
  {
    "id": 36,
    "question": "¿Cuál de las siguientes afirmaciones también aparece como conclusión de la clase?",
    "options": [
      "Toda solución debe probar una hipótesis",
      "No toda solución proviene de una investigación científica",
      "Toda investigación usa una muestra probabilística",
      "Todo problema es internacional",
      "Todo proyecto debe ser mixto"
    ],
    "correctAnswer": 1
  },
  {
    "id": 37,
    "question": "La investigación científica se describe en las diapositivas como un proceso:",
    "options": [
      "Exclusivamente tecnológico",
      "Improvisado, subjetivo y casual",
      "Exclusivamente cualitativo",
      "Sistemático, organizado y objetivo",
      "Únicamente documental"
    ],
    "correctAnswer": 3
  },
  {
    "id": 38,
    "question": "La finalidad central de la investigación científica presentada en clase es:",
    "options": [
      "Generar conocimientos verificables sobre fenómenos de la realidad",
      "Crear siempre una aplicación",
      "Obtener una calificación alta",
      "Evitar la recopilación de datos",
      "Demostrar que toda hipótesis es verdadera"
    ],
    "correctAnswer": 0
  },
  {
    "id": 39,
    "question": "Para Sampieri, la investigación se define como un conjunto de procesos:",
    "options": [
      "Solamente computacionales",
      "Aleatorios y sin estructura",
      "Exclusivamente estadísticos",
      "Administrativos y financieros",
      "Sistemáticos, críticos y empíricos aplicados al estudio de un fenómeno o problema"
    ],
    "correctAnswer": 4
  },
  {
    "id": 40,
    "question": "Que una investigación sea 'empírica' significa principalmente que:",
    "options": [
      "No necesita evidencia",
      "Se basa solo en opiniones",
      "Recolecta y analiza datos",
      "Evita observar la realidad",
      "Se limita a leer teorías"
    ],
    "correctAnswer": 2
  },
  {
    "id": 41,
    "question": "Que una investigación sea 'sistemática' implica que:",
    "options": [
      "Existe disciplina y un proceso; no se dejan los hechos a la casualidad",
      "El investigador puede omitir cualquier etapa sin criterio",
      "No se utilizan datos",
      "Solo se investiga en laboratorio",
      "Los resultados siempre son idénticos"
    ],
    "correctAnswer": 0
  },
  {
    "id": 42,
    "question": "Que una investigación sea 'crítica' significa que:",
    "options": [
      "Debe criticar a otros autores",
      "Se evalúa y mejora constantemente",
      "Rechaza todas las hipótesis",
      "No acepta ningún dato nuevo",
      "Solo trabaja con errores"
    ],
    "correctAnswer": 1
  },
  {
    "id": 43,
    "question": "Según Sampieri, dos propósitos fundamentales de la investigación científica son:",
    "options": [
      "Aplicar encuestas y entrevistas",
      "Crear títulos y bibliografías",
      "Producir conocimiento y teorías, y resolver problemas",
      "Publicar y citar",
      "Programar y documentar"
    ],
    "correctAnswer": 2
  },
  {
    "id": 44,
    "question": "La investigación orientada principalmente a producir conocimiento y teorías se denomina:",
    "options": [
      "Descriptiva",
      "Aplicada",
      "Mixta",
      "Básica",
      "Local"
    ],
    "correctAnswer": 3
  },
  {
    "id": 45,
    "question": "La investigación orientada principalmente a resolver problemas se denomina:",
    "options": [
      "Internacional",
      "Básica",
      "Exploratoria",
      "Bibliográfica",
      "Aplicada"
    ],
    "correctAnswer": 4
  },
  {
    "id": 46,
    "question": "¿Cuál de las siguientes secuencias representa elementos del proceso científico mostrados en clase?",
    "options": [
      "Solución - publicidad - venta - cierre - cobro",
      "Observación - problema - hipótesis - recolección/análisis de datos - conclusiones",
      "Muestra - título - presupuesto - venta - conclusión",
      "Problema - solución inmediata - eliminación de datos - cierre",
      "Hipótesis - publicación - problema - observación"
    ],
    "correctAnswer": 1
  },
  {
    "id": 47,
    "question": "Un problema de investigación científica se diferencia de un simple problema práctico porque:",
    "options": [
      "No admite datos",
      "Siempre exige desarrollar software",
      "Debe ser internacional",
      "Implica una cuestión de conocimiento que necesita ser respondida con evidencia",
      "Solo puede ser cualitativo"
    ],
    "correctAnswer": 3
  },
  {
    "id": 48,
    "question": "¿Cuál de las siguientes formulaciones expresa mejor un problema de conocimiento?",
    "options": [
      "Se desconoce la relación entre el tiempo de carga y el abandono de usuarios",
      "Instalar un servidor más potente",
      "Crear una página web",
      "Comprar más computadoras",
      "Capacitar al personal mañana"
    ],
    "correctAnswer": 0
  },
  {
    "id": 49,
    "question": "La pregunta '¿Para quién son los nuevos saberes?' se relaciona principalmente con:",
    "options": [
      "El cierre del proyecto",
      "La codificación de datos",
      "El diseño gráfico",
      "La matriz RACI",
      "La justificación de la investigación"
    ],
    "correctAnswer": 4
  },
  {
    "id": 50,
    "question": "En la diapositiva de justificación se distinguen como posibles beneficiarios:",
    "options": [
      "Solo la universidad",
      "Solo el investigador",
      "Persona y colectivo/sociedad",
      "Solo la empresa",
      "Solo el asesor"
    ],
    "correctAnswer": 2
  },
  {
    "id": 51,
    "question": "La identificación de problemas de investigación científica es considerada en las conclusiones como:",
    "options": [
      "El punto de partida idóneo",
      "La última actividad del proyecto",
      "Una actividad opcional",
      "Una tarea exclusiva del jurado",
      "Un reemplazo del análisis de datos"
    ],
    "correctAnswer": 0
  },
  {
    "id": 52,
    "question": "Los tres enfoques de investigación considerados en el material y en Sampieri son:",
    "options": [
      "Local, nacional e internacional",
      "Cuantitativo, cualitativo y mixto",
      "Exploratorio, descriptivo y correlacional",
      "Básico, aplicado y tecnológico",
      "Experimental, documental y bibliográfico"
    ],
    "correctAnswer": 1
  },
  {
    "id": 53,
    "question": "El paradigma asociado al enfoque cuantitativo en la tabla de clase es:",
    "options": [
      "Pragmatismo",
      "Interpretativismo y constructivismo",
      "Positivismo y postpositivismo",
      "Fenomenología únicamente",
      "Hermenéutica únicamente"
    ],
    "correctAnswer": 2
  },
  {
    "id": 54,
    "question": "El paradigma asociado al enfoque cualitativo en la tabla de clase es:",
    "options": [
      "Pragmatismo",
      "Positivismo",
      "Postpositivismo exclusivamente",
      "Interpretativismo o constructivismo",
      "Determinismo tecnológico"
    ],
    "correctAnswer": 3
  },
  {
    "id": 55,
    "question": "El paradigma asociado al enfoque mixto en la tabla de clase es:",
    "options": [
      "Racionalismo puro",
      "Positivismo clásico",
      "Naturalismo exclusivamente",
      "Conductismo",
      "Pragmatismo"
    ],
    "correctAnswer": 4
  },
  {
    "id": 56,
    "question": "La finalidad principal del enfoque cuantitativo, según la tabla de clase, es:",
    "options": [
      "Comprender e interpretar únicamente",
      "Explicar y predecir",
      "Narrar experiencias de vida",
      "Evitar la medición",
      "Generar solo categorías"
    ],
    "correctAnswer": 1
  },
  {
    "id": 57,
    "question": "La finalidad principal del enfoque cualitativo es:",
    "options": [
      "Probar siempre causalidad",
      "Calcular únicamente promedios",
      "Generalizar estadísticamente en todos los casos",
      "Comprender e interpretar",
      "Usar solo experimentos"
    ],
    "correctAnswer": 3
  },
  {
    "id": 58,
    "question": "El enfoque mixto busca:",
    "options": [
      "Combinar los fines y procedimientos cuantitativos y cualitativos",
      "Eliminar el análisis cualitativo",
      "Trabajar solo con números",
      "Trabajar solo con entrevistas",
      "Evitar la triangulación"
    ],
    "correctAnswer": 0
  },
  {
    "id": 59,
    "question": "Según Sampieri, el enfoque cuantitativo es principalmente:",
    "options": [
      "Exclusivamente narrativo",
      "Circular y sin secuencia",
      "Puramente interpretativo",
      "No empírico",
      "Secuencial y probatorio"
    ],
    "correctAnswer": 4
  },
  {
    "id": 60,
    "question": "En el enfoque cuantitativo, la lógica predominante es:",
    "options": [
      "Intuitiva",
      "Inductiva",
      "Deductiva",
      "Narrativa",
      "Artística"
    ],
    "correctAnswer": 2
  },
  {
    "id": 61,
    "question": "En el enfoque cualitativo, la lógica predominante es:",
    "options": [
      "Inductiva",
      "Deductiva exclusivamente",
      "Matemática únicamente",
      "Probabilística necesariamente",
      "Experimental exclusivamente"
    ],
    "correctAnswer": 0
  },
  {
    "id": 62,
    "question": "¿Cuál es una característica del enfoque cuantitativo?",
    "options": [
      "No utiliza variables",
      "Mide fenómenos y utiliza estadística",
      "No trabaja con datos",
      "No formula preguntas específicas",
      "Se basa solo en narraciones"
    ],
    "correctAnswer": 1
  },
  {
    "id": 63,
    "question": "¿Cuál es una característica del enfoque cualitativo?",
    "options": [
      "Solo usa datos numéricos",
      "Siempre requiere un experimento puro",
      "Los planteamientos son más abiertos y pueden ir enfocándose durante el estudio",
      "Busca necesariamente generalización estadística",
      "Tiene una secuencia lineal rígida"
    ],
    "correctAnswer": 2
  },
  {
    "id": 64,
    "question": "En el enfoque cuantitativo, las hipótesis generalmente:",
    "options": [
      "Se reemplazan por opiniones",
      "Solo aparecen al final",
      "Nunca se utilizan",
      "Se plantean antes de recolectar y analizar los datos",
      "Se formulan después del reporte final"
    ],
    "correctAnswer": 3
  },
  {
    "id": 65,
    "question": "En la mayoría de estudios cualitativos, las hipótesis:",
    "options": [
      "Son obligatoriamente causales",
      "Siempre deben estar cerradas antes de entrar al campo",
      "Nunca pueden aparecer",
      "Se prueban solo con ANOVA",
      "Pueden generarse y perfeccionarse durante el proceso"
    ],
    "correctAnswer": 4
  },
  {
    "id": 66,
    "question": "En el enfoque cuantitativo, los datos suelen representarse principalmente mediante:",
    "options": [
      "Relatos únicamente",
      "Números",
      "Fotografías únicamente",
      "Historias de vida únicamente",
      "Símbolos sin medición"
    ],
    "correctAnswer": 1
  },
  {
    "id": 67,
    "question": "En el enfoque cualitativo, los datos pueden presentarse como:",
    "options": [
      "Solo matrices numéricas",
      "Solo porcentajes",
      "Solo valores p",
      "Textos, imágenes, audio y narraciones",
      "Solo tasas"
    ],
    "correctAnswer": 3
  },
  {
    "id": 68,
    "question": "¿Cuál de las siguientes técnicas es especialmente común en investigación cualitativa?",
    "options": [
      "Entrevista abierta",
      "Prueba t como técnica de recolección",
      "ANOVA como entrevista",
      "Regresión lineal como observación",
      "Coeficiente de Pearson como grupo focal"
    ],
    "correctAnswer": 0
  },
  {
    "id": 69,
    "question": "El análisis del enfoque cuantitativo es principalmente:",
    "options": [
      "Biográfico únicamente",
      "Narrativo exclusivamente",
      "Hermenéutico únicamente",
      "Artístico",
      "Estadístico"
    ],
    "correctAnswer": 4
  },
  {
    "id": 70,
    "question": "El análisis cualitativo puede incluir:",
    "options": [
      "Solo pruebas t",
      "Únicamente regresión lineal",
      "Categorización y análisis narrativo o del discurso",
      "Solo ANOVA",
      "Solo cálculo de varianza"
    ],
    "correctAnswer": 2
  },
  {
    "id": 71,
    "question": "En métodos mixtos, la tabla de clase menciona posteriormente la aplicación de:",
    "options": [
      "Triangulación",
      "Eliminación de datos cualitativos",
      "Solo estadística descriptiva",
      "Solo observación",
      "Solo experimento puro"
    ],
    "correctAnswer": 0
  },
  {
    "id": 72,
    "question": "¿Cuál de las siguientes situaciones corresponde mejor a un enfoque cuantitativo?",
    "options": [
      "Comprender experiencias de 15 docentes mediante entrevistas abiertas",
      "Medir la relación entre usabilidad y satisfacción en 400 usuarios",
      "Interpretar historias de vida sin medición",
      "Analizar significados en diarios personales",
      "Observar prácticas culturales sin cuantificación"
    ],
    "correctAnswer": 1
  },
  {
    "id": 73,
    "question": "¿Cuál de las siguientes situaciones corresponde mejor a un enfoque cualitativo?",
    "options": [
      "Comparar promedios con una prueba t",
      "Calcular la correlación entre dos variables en 500 casos",
      "Comprender las percepciones de docentes sobre el uso de IA mediante entrevistas",
      "Estimar porcentajes de satisfacción",
      "Aplicar una regresión lineal"
    ],
    "correctAnswer": 2
  },
  {
    "id": 74,
    "question": "¿Cuál de las siguientes situaciones corresponde mejor a un enfoque mixto?",
    "options": [
      "Analizar únicamente registros numéricos",
      "Aplicar solo una encuesta cerrada",
      "Realizar solo entrevistas abiertas",
      "Aplicar una encuesta y luego realizar entrevistas para profundizar los resultados",
      "Hacer únicamente observación participante"
    ],
    "correctAnswer": 3
  },
  {
    "id": 75,
    "question": "El enfoque cuantitativo busca, entre otras cosas:",
    "options": [
      "Eliminar la objetividad",
      "Evitar toda medición",
      "Trabajar con pocos casos solo por sus cualidades",
      "No usar instrumentos estandarizados",
      "Generalizar resultados de una muestra a una población cuando el diseño lo permite"
    ],
    "correctAnswer": 4
  },
  {
    "id": 76,
    "question": "El enfoque cualitativo generalmente:",
    "options": [
      "Siempre exige grandes muestras representativas",
      "No pretende generalizar probabilísticamente a poblaciones amplias",
      "Solo acepta datos numéricos",
      "Se basa necesariamente en experimentos",
      "Tiene que ser correlacional"
    ],
    "correctAnswer": 1
  },
  {
    "id": 77,
    "question": "Según Sampieri, en el cuantitativo el investigador busca ser:",
    "options": [
      "Ajeno a cualquier procedimiento",
      "Totalmente emotivo",
      "Parte activa que modifica el fenómeno deliberadamente en todo estudio",
      "Lo más objetivo posible",
      "Exclusivamente narrador"
    ],
    "correctAnswer": 3
  },
  {
    "id": 78,
    "question": "Los cuatro alcances o niveles de profundidad cuantitativos señalados son:",
    "options": [
      "Exploratorio, descriptivo, correlacional y explicativo",
      "Básico, aplicado, mixto y puro",
      "Local, nacional, regional e internacional",
      "Teórico, práctico, técnico y social",
      "Inductivo, deductivo, mixto y experimental"
    ],
    "correctAnswer": 0
  },
  {
    "id": 79,
    "question": "Un estudio exploratorio se caracteriza por:",
    "options": [
      "Generalizar siempre a nivel nacional",
      "Determinar necesariamente causas",
      "Medir únicamente dos variables",
      "Probar siempre una teoría",
      "Investigar problemas poco estudiados y preparar el terreno para nuevos estudios"
    ],
    "correctAnswer": 4
  },
  {
    "id": 80,
    "question": "Un estudio descriptivo busca principalmente:",
    "options": [
      "Explorar un tema completamente desconocido únicamente",
      "Determinar causalidad en todos los casos",
      "Describir un fenómeno y sus componentes o medir conceptos",
      "Manipular variables",
      "Combinar necesariamente dos enfoques"
    ],
    "correctAnswer": 2
  },
  {
    "id": 81,
    "question": "Un estudio correlacional busca principalmente:",
    "options": [
      "Asociar o cuantificar relaciones entre variables",
      "Narrar historias de vida",
      "Determinar siempre causas",
      "Evitar cualquier medición",
      "Crear un sistema computacional"
    ],
    "correctAnswer": 0
  },
  {
    "id": 82,
    "question": "Un estudio explicativo busca principalmente:",
    "options": [
      "Solo enumerar características",
      "Determinar causas y generar mayor entendimiento del fenómeno",
      "Solo identificar temas nuevos",
      "Evitar relaciones causales",
      "Aplicar únicamente entrevistas"
    ],
    "correctAnswer": 1
  },
  {
    "id": 83,
    "question": "La pregunta '¿Cuál es el nivel de satisfacción de los usuarios?' corresponde principalmente a un alcance:",
    "options": [
      "Explicativo",
      "Correlacional",
      "Descriptivo",
      "Experimental",
      "Mixto"
    ],
    "correctAnswer": 2
  },
  {
    "id": 84,
    "question": "La pregunta '¿Existe relación entre usabilidad y satisfacción?' corresponde principalmente a un alcance:",
    "options": [
      "Biográfico",
      "Descriptivo",
      "Exploratorio",
      "Correlacional",
      "Etnográfico"
    ],
    "correctAnswer": 3
  },
  {
    "id": 85,
    "question": "La pregunta '¿Qué factores causan la disminución del rendimiento del sistema?' se aproxima más a un alcance:",
    "options": [
      "Local",
      "Descriptivo",
      "Exploratorio",
      "Documental",
      "Explicativo"
    ],
    "correctAnswer": 4
  },
  {
    "id": 86,
    "question": "Si un fenómeno ha sido muy poco estudiado y se busca identificar conceptos prometedores, el alcance más adecuado sería:",
    "options": [
      "Explicativo",
      "Exploratorio",
      "Correlacional",
      "Causal puro",
      "Longitudinal necesariamente"
    ],
    "correctAnswer": 1
  },
  {
    "id": 87,
    "question": "Una investigación puede:",
    "options": [
      "Ser descriptiva solo si usa entrevistas",
      "Tener obligatoriamente un solo alcance sin excepción",
      "Ser correlacional y por ello demostrar siempre causalidad",
      "Incluir elementos de distintos alcances e incluso avanzar de uno a otro",
      "Ser exploratoria únicamente con grandes muestras"
    ],
    "correctAnswer": 3
  },
  {
    "id": 88,
    "question": "¿Cuál es la afirmación correcta sobre correlación y causalidad?",
    "options": [
      "Una correlación no demuestra por sí sola causalidad",
      "Toda correlación implica causalidad",
      "La causalidad no necesita evidencia",
      "Una correlación solo existe en estudios cualitativos",
      "La correlación elimina la necesidad de variables"
    ],
    "correctAnswer": 0
  },
  {
    "id": 89,
    "question": "Una variable es, en términos de investigación cuantitativa:",
    "options": [
      "Un beneficiario del estudio",
      "Una referencia bibliográfica",
      "Una etapa del proyecto",
      "Un área de investigación",
      "Una característica o concepto que puede asumir valores y ser medido"
    ],
    "correctAnswer": 4
  },
  {
    "id": 90,
    "question": "En una relación causal, la variable independiente se considera:",
    "options": [
      "La muestra",
      "El supuesto efecto",
      "La supuesta causa o condición antecedente",
      "La población",
      "La conclusión"
    ],
    "correctAnswer": 2
  },
  {
    "id": 91,
    "question": "En una relación causal, la variable dependiente se considera:",
    "options": [
      "El supuesto efecto o consecuencia",
      "La supuesta causa",
      "La técnica de muestreo",
      "El marco teórico",
      "El ámbito geográfico"
    ],
    "correctAnswer": 0
  },
  {
    "id": 92,
    "question": "En el enunciado 'El tiempo de respuesta del sistema influye en la satisfacción del usuario', la variable independiente es:",
    "options": [
      "Satisfacción del usuario",
      "Tiempo de respuesta del sistema",
      "Usuario",
      "Sistema",
      "Encuesta"
    ],
    "correctAnswer": 1
  },
  {
    "id": 93,
    "question": "En el mismo enunciado, la variable dependiente es:",
    "options": [
      "Empresa",
      "Tiempo de respuesta del sistema",
      "Satisfacción del usuario",
      "Muestra",
      "Cuestionario"
    ],
    "correctAnswer": 2
  },
  {
    "id": 94,
    "question": "En un experimento, el investigador:",
    "options": [
      "No utiliza variables",
      "Nunca modifica ninguna condición",
      "Solo describe fenómenos pasados",
      "Manipula intencionalmente una o más variables independientes y observa efectos en variables dependientes",
      "Solo aplica entrevistas"
    ],
    "correctAnswer": 3
  },
  {
    "id": 95,
    "question": "¿Cuál de las siguientes afirmaciones sobre las hipótesis es correcta?",
    "options": [
      "Deben formularse después de las conclusiones",
      "Siempre son verdaderas",
      "Solo existen en investigación cualitativa",
      "No tienen relación con variables",
      "En el enfoque cuantitativo pueden someterse a prueba con datos"
    ],
    "correctAnswer": 4
  },
  {
    "id": 96,
    "question": "Si los resultados no aportan evidencia a favor de una hipótesis cuantitativa:",
    "options": [
      "Se cambian los datos para confirmarla",
      "La hipótesis puede rechazarse o requerir otras explicaciones; no significa que el estudio sea inútil",
      "Se elimina la muestra",
      "Se declara verdadera de todas formas",
      "Se evita reportar los resultados"
    ],
    "correctAnswer": 1
  },
  {
    "id": 97,
    "question": "En un estudio cuantitativo, la hipótesis suele derivarse de:",
    "options": [
      "La matriz RACI",
      "Solo intuición sin antecedentes",
      "El cierre del proyecto",
      "Preguntas, revisión de literatura y marco teórico",
      "El acta de defensa"
    ],
    "correctAnswer": 3
  },
  {
    "id": 98,
    "question": "En la diapositiva de 'Tipos', el ámbito geográfico puede clasificarse como:",
    "options": [
      "Local, nacional e internacional",
      "Exploratorio, descriptivo y correlacional",
      "Cuantitativo, cualitativo y mixto",
      "Básico, aplicado y tecnológico",
      "Software, hardware y comunicaciones"
    ],
    "correctAnswer": 0
  },
  {
    "id": 99,
    "question": "Si un problema se demuestra únicamente en una empresa específica, el ámbito de evidencia es principalmente:",
    "options": [
      "Universal",
      "Nacional",
      "Internacional",
      "Global",
      "Local"
    ],
    "correctAnswer": 4
  },
  {
    "id": 100,
    "question": "¿Cuál sería un error de generalización?",
    "options": [
      "Indicar los límites del estudio",
      "Describir los resultados de la empresa estudiada",
      "Concluir que todas las empresas del Perú presentan el mismo problema a partir de una sola empresa",
      "Definir la población del estudio",
      "Reconocer que los resultados son locales"
    ],
    "correctAnswer": 2
  },
  {
    "id": 101,
    "question": "La unidad de estudio es:",
    "options": [
      "El elemento individual sobre el cual se recolectan o analizan datos",
      "Toda la población",
      "La bibliografía",
      "El cronograma",
      "La pregunta general"
    ],
    "correctAnswer": 0
  },
  {
    "id": 102,
    "question": "La población es:",
    "options": [
      "Solo quienes respondieron la encuesta",
      "El conjunto total de unidades que cumplen los criterios definidos para el estudio",
      "La variable independiente",
      "La lista de referencias",
      "El software estadístico"
    ],
    "correctAnswer": 1
  },
  {
    "id": 103,
    "question": "La muestra es:",
    "options": [
      "Una técnica de análisis",
      "La totalidad de la población en todos los casos",
      "Un subconjunto de la población seleccionado para el estudio",
      "Una hipótesis",
      "Un ámbito sectorial"
    ],
    "correctAnswer": 2
  },
  {
    "id": 104,
    "question": "Si una universidad tiene 12 000 estudiantes y se estudian 380, ¿cuál es la población?",
    "options": [
      "La universidad",
      "380 estudiantes",
      "1 estudiante",
      "12 000 estudiantes",
      "La encuesta"
    ],
    "correctAnswer": 3
  },
  {
    "id": 105,
    "question": "En el mismo caso, ¿cuál es la muestra?",
    "options": [
      "La variable",
      "12 000 estudiantes",
      "1 estudiante",
      "La ciudad",
      "380 estudiantes"
    ],
    "correctAnswer": 4
  },
  {
    "id": 106,
    "question": "En el mismo caso, si se analiza a cada estudiante, la unidad de estudio es:",
    "options": [
      "Los 12 000 estudiantes como bloque",
      "Cada estudiante",
      "La universidad completa",
      "El cuestionario",
      "La hipótesis"
    ],
    "correctAnswer": 1
  },
  {
    "id": 107,
    "question": "El diseño de contrastación o diseño de investigación sirve principalmente para:",
    "options": [
      "Reemplazar la recolección de datos",
      "Elegir la portada",
      "Definir el color del informe",
      "Establecer el plan o estrategia para obtener evidencia y responder al problema",
      "Seleccionar el título de la revista"
    ],
    "correctAnswer": 3
  },
  {
    "id": 108,
    "question": "Los métodos o técnicas de recopilación de datos responden a la pregunta:",
    "options": [
      "¿Cómo se obtendrán los datos?",
      "¿Cómo se imprimirá el informe?",
      "¿Qué color tendrá el gráfico?",
      "¿Quién financiará la universidad?",
      "¿Qué revista será Q1?"
    ],
    "correctAnswer": 0
  },
  {
    "id": 109,
    "question": "¿Cuál de las siguientes es una técnica de recopilación de datos?",
    "options": [
      "Correlación de Pearson como grupo focal",
      "Regresión lineal como forma de entrevistar",
      "ANOVA como técnica de observación",
      "Varianza como cuestionario",
      "Encuesta"
    ],
    "correctAnswer": 4
  },
  {
    "id": 110,
    "question": "Los métodos o técnicas de procesamiento de datos responden principalmente a:",
    "options": [
      "Cuál es el ámbito sectorial",
      "Quién es el autor del libro",
      "Qué se hará con los datos una vez obtenidos",
      "Qué carrera estudia el investigador",
      "Cómo se llama la tesis"
    ],
    "correctAnswer": 2
  },
  {
    "id": 111,
    "question": "En un estudio cuantitativo, un ejemplo de procesamiento de datos sería:",
    "options": [
      "Codificar y analizar estadísticamente las respuestas",
      "Entregar la encuesta sin analizarla",
      "Elegir la temática",
      "Definir el nombre del proyecto",
      "Crear la portada"
    ],
    "correctAnswer": 0
  },
  {
    "id": 112,
    "question": "Según Sampieri, en el enfoque cuantitativo se intenta frecuentemente:",
    "options": [
      "Evitar toda generalización por principio",
      "Generalizar resultados de la muestra a la población cuando procede",
      "Usar solo muestras de un caso",
      "No definir población",
      "No medir variables"
    ],
    "correctAnswer": 1
  },
  {
    "id": 113,
    "question": "En investigación cualitativa, las muestras suelen seleccionarse principalmente para:",
    "options": [
      "Obtener exclusivamente millones de casos",
      "Garantizar siempre generalización probabilística",
      "Analizar casos en profundidad más que para representar estadísticamente a toda una población",
      "Evitar contacto con participantes",
      "Aplicar únicamente estadística inferencial"
    ],
    "correctAnswer": 2
  },
  {
    "id": 114,
    "question": "Respecto del título de investigación, la diapositiva señala que:",
    "options": [
      "Nunca debe mencionar variables",
      "Existe una fórmula obligatoria e invariable",
      "Debe contener exactamente diez palabras",
      "No existe una fórmula rígida única",
      "Siempre debe incluir dos países"
    ],
    "correctAnswer": 3
  },
  {
    "id": 115,
    "question": "El esquema orientativo mostrado para redactar un título incluye:",
    "options": [
      "Solo el año",
      "Solo el nombre del autor",
      "Solo el objetivo general",
      "Solo la población",
      "Conector + variable 1 + conector + variable 2 + caso + población opcional + tiempo"
    ],
    "correctAnswer": 4
  },
  {
    "id": 116,
    "question": "La pregunta de investigación y el objetivo deben:",
    "options": [
      "Ser totalmente independientes del título",
      "Guardar relación con la estructura y contenido del título",
      "Usar variables distintas",
      "Referirse a otro problema",
      "Evitar el caso estudiado"
    ],
    "correctAnswer": 1
  },
  {
    "id": 117,
    "question": "¿Cuál de los siguientes títulos muestra una relación clara entre dos variables?",
    "options": [
      "Estudio general",
      "Aplicación móvil",
      "Tecnología moderna",
      "Relación entre usabilidad y satisfacción de usuarios de una plataforma virtual en 2026",
      "Proyecto de sistemas"
    ],
    "correctAnswer": 3
  },
  {
    "id": 118,
    "question": "Una empresa detecta que 30% de sus pedidos se registran con errores. Un estudiante propone inmediatamente 'crear una app'. ¿Cuál es la principal observación metodológica?",
    "options": [
      "La app es una posible solución; primero debe formularse claramente el problema de investigación si se pretende investigar",
      "La app ya constituye una hipótesis",
      "La app es la población",
      "La app es un alcance correlacional",
      "La app convierte el estudio en cualitativo"
    ],
    "correctAnswer": 0
  },
  {
    "id": 119,
    "question": "Se desea saber si el tiempo de carga de una web se relaciona con el abandono de compra. ¿Qué alcance es el más directo?",
    "options": [
      "Biográfico",
      "Descriptivo",
      "Exploratorio",
      "Etnográfico",
      "Correlacional"
    ],
    "correctAnswer": 4
  },
  {
    "id": 120,
    "question": "Se encuesta a 600 clientes sobre satisfacción y se calculan promedios, correlaciones y regresiones. ¿Qué enfoque predomina?",
    "options": [
      "Mixto por definición",
      "Cualitativo",
      "Cuantitativo",
      "Etnográfico",
      "Fenomenológico"
    ],
    "correctAnswer": 2
  },
  {
    "id": 121,
    "question": "Se entrevista a 20 docentes para comprender qué significado atribuyen al uso de IA generativa en clase. ¿Qué enfoque predomina?",
    "options": [
      "Cualitativo",
      "Cuantitativo",
      "Experimental puro",
      "Correlacional necesariamente",
      "Estadístico inferencial"
    ],
    "correctAnswer": 0
  },
  {
    "id": 122,
    "question": "Se aplica una encuesta a 400 estudiantes y luego se entrevistan 20 para comprender las razones de sus respuestas. ¿Qué enfoque es?",
    "options": [
      "Solo cuantitativo",
      "Mixto",
      "Solo cualitativo",
      "Solo experimental",
      "Solo descriptivo"
    ],
    "correctAnswer": 1
  },
  {
    "id": 123,
    "question": "Una investigación pregunta: '¿Cuál es la frecuencia de fallos de un sistema durante un mes?'. ¿Cuál es el alcance más probable?",
    "options": [
      "Explicativo",
      "Correlacional",
      "Descriptivo",
      "Fenomenológico",
      "Etnográfico"
    ],
    "correctAnswer": 2
  },
  {
    "id": 124,
    "question": "Una investigación pregunta: '¿Por qué la latencia de red aumenta la tasa de abandono de una aplicación?'. Si busca causas, el alcance más probable es:",
    "options": [
      "Narrativo",
      "Descriptivo",
      "Exploratorio",
      "Explicativo",
      "Local"
    ],
    "correctAnswer": 3
  },
  {
    "id": 125,
    "question": "En un experimento se modifica el número de notificaciones enviadas a usuarios y se mide su nivel de interacción. ¿Cuál es la variable independiente?",
    "options": [
      "Muestra",
      "Nivel de interacción",
      "Usuarios",
      "Aplicación",
      "Número de notificaciones"
    ],
    "correctAnswer": 4
  },
  {
    "id": 126,
    "question": "En el caso anterior, ¿cuál es la variable dependiente?",
    "options": [
      "Número de notificaciones",
      "Nivel de interacción",
      "Tamaño de la muestra",
      "Tipo de proyecto",
      "Área de investigación"
    ],
    "correctAnswer": 1
  },
  {
    "id": 127,
    "question": "Una investigación se realiza solo con trabajadores de la empresa ABC de Lima. ¿Qué sería incorrecto afirmar sin evidencia adicional?",
    "options": [
      "Que puede definirse una muestra",
      "Que la empresa ABC forma parte del contexto de estudio",
      "Que existe una población delimitada",
      "Que los resultados describen automáticamente a todos los trabajadores del Perú",
      "Que el estudio puede tener un alcance descriptivo"
    ],
    "correctAnswer": 3
  },
  {
    "id": 128,
    "question": "Tema: 'Gamificación digital para mejorar participación estudiantil'. ¿Cuál es el ámbito sectorial más coherente según las diapositivas?",
    "options": [
      "Educación",
      "Energía y Minas",
      "Telecomunicaciones",
      "Justicia y Legal",
      "Manufactura e Industria"
    ],
    "correctAnswer": 0
  },
  {
    "id": 129,
    "question": "Tema: 'Predicción de rotación de clientes de una entidad financiera'. ¿Cuál es el ámbito sectorial más coherente?",
    "options": [
      "Agrícola y Ganadería",
      "Salud",
      "Educación",
      "Cultura y artes",
      "Economía y Finanzas"
    ],
    "correctAnswer": 4
  },
  {
    "id": 130,
    "question": "Un estudio usa cuestionarios estandarizados, medición numérica y estadística. ¿Qué combinación es la más coherente?",
    "options": [
      "Enfoque mixto - sin medición",
      "Enfoque cualitativo - lógica inductiva",
      "Enfoque cuantitativo - lógica deductiva",
      "Enfoque cualitativo - experimento puro obligatorio",
      "Enfoque cuantitativo - sin variables"
    ],
    "correctAnswer": 2
  },
  {
    "id": 131,
    "question": "Un estudio usa observación no estructurada, entrevistas abiertas y análisis de significados. ¿Qué combinación es la más coherente?",
    "options": [
      "Enfoque cualitativo - lógica inductiva",
      "Enfoque cuantitativo - lógica deductiva",
      "Enfoque experimental - análisis exclusivamente estadístico",
      "Enfoque mixto - sin datos cualitativos",
      "Enfoque cuantitativo - prueba de hipótesis obligatoria"
    ],
    "correctAnswer": 0
  },
  {
    "id": 132,
    "question": "En una empresa, la población son 2 000 empleados y se seleccionan 200 para responder un cuestionario. ¿Cuál opción es correcta?",
    "options": [
      "Población: 200; muestra: 2 000",
      "Población: 2 000; muestra: 200",
      "Población y muestra: 2 000",
      "Unidad de estudio: 200 empleados",
      "La muestra es el cuestionario"
    ],
    "correctAnswer": 1
  },
  {
    "id": 133,
    "question": "Título: 'Relación entre calidad del sistema y satisfacción de usuarios de la plataforma X, 2026'. ¿Cuántas variables principales aparecen explícitamente?",
    "options": [
      "Tres",
      "Una",
      "Dos",
      "Cuatro",
      "Ninguna"
    ],
    "correctAnswer": 2
  },
  {
    "id": 134,
    "question": "En el título anterior, 'calidad del sistema' y 'satisfacción de usuarios' funcionan como:",
    "options": [
      "Técnicas de muestreo",
      "Etapas del proyecto",
      "Ámbitos geográficos",
      "Variables",
      "Tipos de tecnología"
    ],
    "correctAnswer": 3
  },
  {
    "id": 135,
    "question": "Si el objetivo es 'Determinar la relación entre calidad del sistema y satisfacción', ¿qué pregunta sería más coherente?",
    "options": [
      "¿Qué empresa vende computadoras?",
      "¿Cómo crear una aplicación móvil?",
      "¿Cuánto cuesta el servidor?",
      "¿Quién es el autor del libro?",
      "¿Qué relación existe entre calidad del sistema y satisfacción?"
    ],
    "correctAnswer": 4
  },
  {
    "id": 136,
    "question": "Una investigación científica bien formulada debe evitar principalmente:",
    "options": [
      "Delimitar su población",
      "Confundir el problema con la solución propuesta",
      "Definir técnicas de recolección",
      "Relacionar objetivo y pregunta",
      "Identificar variables cuando corresponda"
    ],
    "correctAnswer": 1
  },
  {
    "id": 137,
    "question": "¿Cuál síntesis representa mejor la lógica general vista en clase?",
    "options": [
      "Escribir título -> omitir preguntas -> implementar sin medir",
      "Elegir solución -> ignorar el problema -> evitar datos -> concluir",
      "Comprar tecnología -> formular después el problema -> eliminar análisis",
      "Identificar problema de conocimiento -> investigar con método y evidencia -> obtener conclusiones -> apoyar decisiones o soluciones",
      "Seleccionar muestra -> inventar resultados -> justificar después"
    ],
    "correctAnswer": 3
  }
];

// Exponer en objeto global para compatibilidad estática
window.quizQuestions = questions;
