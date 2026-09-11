export const PISA_2025_META = {
  title: "PISA 2025 Results (Volume I): The State of Global Education",
  publisher: "OECD Publishing",
  year: "2026",
  evaluationYear: "2025",
  participatingCountries: 85,
  oecdMembers: 38,
  partnerEconomies: 47,
  testedSampleStudents: 690000,
  representedStudents: 3400000,
  evaluatedSchools: 24500,
  primaryDomain: "Ciencias (Science)",
  innovativeDomain: "Aprendizaje en el Mundo Digital (Learning in the Digital World / Computational Problem Solving)"
};

export const OECD_AVERAGES = {
  science: {
    score: 482,
    shortTermChange: -3,
    decennialTrend: +2,
    unit: "puntos",
    label: "Ciencias",
    icon: "Atom",
    description: "Evaluación focalizada de alfabetización y razonamiento científico.",
    color: "from-sky-500 to-blue-600"
  },
  math: {
    score: 463,
    shortTermChange: -9,
    decennialTrend: -5,
    unit: "puntos",
    label: "Matemáticas",
    icon: "Calculator",
    description: "Pensamiento matemático y resolución de problemas cuantitativos.",
    color: "from-indigo-500 to-purple-600"
  },
  reading: {
    score: 461,
    shortTermChange: -14,
    decennialTrend: -10,
    unit: "puntos",
    label: "Lectura",
    icon: "BookOpen",
    description: "Comprensión, evaluación y reflexión sobre textos complejos.",
    color: "from-emerald-500 to-teal-600"
  },
  digitalWorld: {
    score: 500,
    shortTermChange: 0,
    decennialTrend: 0,
    unit: "puntos",
    label: "Mundo Digital (LDW)",
    icon: "Cpu",
    description: "Resolución de problemas computacionales y aprendizaje en entorno digital.",
    color: "from-amber-500 to-orange-600"
  }
};

export const COMPETENCY_GAP_DATA = {
  subjects: [
    {
      id: "science",
      name: "Ciencias",
      topPerformers: 9.8, // Level 5 & 6
      baselineCompetency: 64.2, // Level 2-4
      lowAchievers: 26.0, // Below Level 2
      netGap: -16.2,
      description: "26% de los estudiantes de la OCDE no alcanzan la competencia mínima en ciencias (Nivel 2)."
    },
    {
      id: "math",
      name: "Matemáticas",
      topPerformers: 8.5,
      baselineCompetency: 59.8,
      lowAchievers: 31.7,
      netGap: -23.2,
      description: "Casi 1 de cada 3 estudiantes (31.7%) queda rezagado en matemáticas en la OCDE."
    },
    {
      id: "reading",
      name: "Lectura",
      topPerformers: 7.2,
      baselineCompetency: 63.5,
      lowAchievers: 29.3,
      netGap: -22.1,
      description: "El 29.3% carece de habilidades básicas de comprensión lectora crítica."
    },
    {
      id: "digital",
      name: "Resolución Digital (LDW)",
      topPerformers: 15.4,
      baselineCompetency: 63.6,
      lowAchievers: 21.0,
      netGap: -5.6,
      description: "Dominio de mayor porcentaje de estudiantes de alto rendimiento (15.4%)."
    }
  ],
  globalOverview: {
    topPerformersOverall: 11.9,
    lowAchieversOverall: 19.7,
    resilientDisadvantaged: 14.8 // Disadvantaged students achieving Level 3+
  }
};

export const TOP_SYSTEMS_RISING = [
  {
    rank: 1,
    name: "Singapur",
    code: "SGP",
    flag: "🇸🇬",
    scienceScore: 560,
    mathScore: 563,
    readingScore: 535,
    digitalScore: 563,
    change10yr: 14,
    region: "Asia Oriental",
    keyFactor: "Enfoque docente intensivo y resolución algorítmica de problemas"
  },
  {
    rank: 2,
    name: "Japón",
    code: "JPN",
    flag: "🇯🇵",
    scienceScore: 538,
    mathScore: 525,
    readingScore: 503,
    digitalScore: 557,
    change10yr: 11,
    region: "Asia Oriental",
    keyFactor: "Alta equidad socioeducativa y cultura de indagación práctica"
  },
  {
    rank: 3,
    name: "Macao (China)",
    code: "MAC",
    flag: "🇲🇴",
    scienceScore: 541,
    mathScore: 549,
    readingScore: 501,
    digitalScore: 572,
    change10yr: 9,
    region: "Asia Oriental",
    keyFactor: "Líder mundial en Resolución de Problemas en el Mundo Digital"
  },
  {
    rank: 4,
    name: "Taipei Chino",
    code: "TPE",
    flag: "🇹🇼",
    scienceScore: 540,
    mathScore: 546,
    readingScore: 508,
    digitalScore: 551,
    change10yr: 8,
    region: "Asia Oriental",
    keyFactor: "Integración masiva de tecnologías STEM en educación secundaria"
  },
  {
    rank: 5,
    name: "Corea del Sur",
    code: "KOR",
    flag: "🇰🇷",
    scienceScore: 526,
    mathScore: 522,
    readingScore: 501,
    digitalScore: 538,
    change10yr: 6,
    region: "Asia Oriental",
    keyFactor: "Adaptabilidad cognitiva y alto pensamiento computacional"
  }
];

export const TOP_SYSTEMS_DECLINING = [
  {
    rank: 1,
    name: "Jordania",
    code: "JOR",
    flag: "🇯🇴",
    scienceScore: 405,
    mathScore: 417,
    readingScore: 415,
    digitalScore: 435,
    change10yr: -24,
    region: "Oriente Medio",
    keyFactor: "Interrupción de infraestructura y severo impacto de crisis migratoria"
  },
  {
    rank: 2,
    name: "Filipinas",
    code: "PHL",
    flag: "🇵🇭",
    scienceScore: 371,
    mathScore: 368,
    readingScore: 354,
    digitalScore: 410,
    change10yr: -21,
    region: "Sudeste Asiático",
    keyFactor: "Falta crónica de recursos pedagógicos y dispositivos digitales"
  },
  {
    rank: 3,
    name: "República Dominicana",
    code: "DOM",
    flag: "🇩🇴",
    scienceScore: 361,
    mathScore: 342,
    readingScore: 330,
    digitalScore: 390,
    change10yr: -19,
    region: "Latinoamérica",
    keyFactor: "Desigualdad territorial y baja tasa de retención docente capacitado"
  },
  {
    rank: 4,
    name: "Albania",
    code: "ALB",
    flag: "🇦🇱",
    scienceScore: 431,
    mathScore: 405,
    readingScore: 388,
    digitalScore: 420,
    change10yr: -18,
    region: "Europa del Este",
    keyFactor: "Problemas de cobertura en muestreo y brecha urbano-rural"
  },
  {
    rank: 5,
    name: "Islandia",
    code: "ISL",
    flag: "🇮🇸",
    scienceScore: 433,
    mathScore: 435,
    readingScore: 436,
    digitalScore: 465,
    change10yr: -16,
    region: "Europa del Norte",
    keyFactor: "Caída continua en rendimiento lector y distracción digital en aulas"
  }
];

export const FUTURE_SKILLS_DATA = [
  {
    skill: "Resolución de Problemas Computacionales (LDW)",
    oecdScore: 500,
    topSystemScore: 572, // Macao
    topSystemName: "Macao (China)",
    category: "Mundo Digital",
    description: "Diseño, ejecución y depuración de algoritmos y artefactos computacionales."
  },
  {
    skill: "Explicación Científica de Fenómenos",
    oecdScore: 482,
    topSystemScore: 597, // B-S-J-Z China
    topSystemName: "B-S-J-Z (China)",
    category: "Ciencia Cognitiva",
    description: "Aplicación de teorías y conceptos para explicar eventos naturales y tecnológicos."
  },
  {
    skill: "Interpretación de Datos e Evidencia Científica",
    oecdScore: 480,
    topSystemScore: 560, // Singapore
    topSystemName: "Singapur",
    category: "Pensamiento Crítico",
    description: "Transformación de gráficos, tablas y experimentos en explicaciones válidas."
  },
  {
    skill: "Ciencia Ambiental y Conciencia Ecológica",
    oecdScore: 480,
    topSystemScore: 561, // Singapore
    topSystemName: "Singapur",
    category: "Sostenibilidad",
    description: "Comprensión de sistemas ecológicos y compromiso de acción climática."
  },
  {
    skill: "Evaluación Crítica de Respuestas de IA",
    oecdScore: 465,
    topSystemScore: 545, // Chinese Taipei
    topSystemName: "Taipei Chino",
    category: "Alfabetización IA",
    description: "Habilidad para verificar, corregir y cuestionar alucinaciones de modelos de IA."
  },
  {
    skill: "Diseño de Investigaciones Experimentales",
    oecdScore: 478,
    topSystemScore: 538, // Japan
    topSystemName: "Japón",
    category: "Investigación",
    description: "Formulación de hipótesis y diseño de experimentos controlados."
  }
];

export const COUNTRY_EXPLORER_DATA = [
  { name: "B-S-J-Z (China)", code: "CHN", science: 597, math: 612, reading: 527, digital: 560, lowPerformersPct: 1.8, topPerformersPct: 55.5, escsGap: 68 },
  { name: "Singapur", code: "SGP", science: 560, math: 563, reading: 535, digital: 563, lowPerformersPct: 6.8, topPerformersPct: 42.3, escsGap: 88 },
  { name: "Macao (China)", code: "MAC", science: 541, math: 549, reading: 501, digital: 572, lowPerformersPct: 5.2, topPerformersPct: 30.8, escsGap: 41 },
  { name: "Taipei Chino", code: "TPE", science: 540, math: 546, reading: 508, digital: 551, lowPerformersPct: 9.1, topPerformersPct: 35.0, escsGap: 92 },
  { name: "Japón", code: "JPN", science: 538, math: 525, reading: 503, digital: 557, lowPerformersPct: 8.8, topPerformersPct: 27.1, escsGap: 67 },
  { name: "Estonia", code: "EST", science: 527, math: 508, reading: 499, digital: 541, lowPerformersPct: 7.4, topPerformersPct: 18.0, escsGap: 64 },
  { name: "Corea del Sur", code: "KOR", science: 526, math: 522, reading: 501, digital: 538, lowPerformersPct: 9.4, topPerformersPct: 28.1, escsGap: 69 },
  { name: "Reino Unido", code: "GBR", science: 511, math: 488, reading: 494, digital: 523, lowPerformersPct: 12.0, topPerformersPct: 18.2, escsGap: 78 },
  { name: "Canadá", code: "CAN", science: 510, math: 485, reading: 490, digital: 525, lowPerformersPct: 12.0, topPerformersPct: 17.4, escsGap: 56 },
  { name: "Nueva Zelanda", code: "NZL", science: 509, math: 480, reading: 497, digital: 531, lowPerformersPct: 13.8, topPerformersPct: 20.8, escsGap: 92 },
  { name: "Australia", code: "AUS", science: 510, math: 487, reading: 498, digital: 528, lowPerformersPct: 13.1, topPerformersPct: 19.5, escsGap: 78 },
  { name: "Irlanda", code: "IRL", science: 503, math: 471, reading: 510, digital: 512, lowPerformersPct: 11.2, topPerformersPct: 16.5, escsGap: 71 },
  { name: "Finlandia", code: "FIN", science: 502, math: 484, reading: 490, digital: 515, lowPerformersPct: 14.2, topPerformersPct: 15.8, escsGap: 83 },
  { name: "Estados Unidos", code: "USA", science: 500, math: 465, reading: 501, digital: 518, lowPerformersPct: 15.6, topPerformersPct: 17.9, escsGap: 100 },
  { name: "Suiza", code: "CHE", science: 495, math: 506, reading: 485, digital: 510, lowPerformersPct: 13.9, topPerformersPct: 18.4, escsGap: 97 },
  { name: "Francia", code: "FRA", science: 486, math: 464, reading: 473, digital: 490, lowPerformersPct: 18.5, topPerformersPct: 12.1, escsGap: 95 },
  { name: "España", code: "ESP", science: 477, math: 473, reading: 474, digital: 485, lowPerformersPct: 19.2, topPerformersPct: 8.9, escsGap: 69 },
  { name: "Chile", code: "CHL", science: 442, math: 411, reading: 446, digital: 460, lowPerformersPct: 29.8, topPerformersPct: 3.5, escsGap: 75 },
  { name: "Uruguay", code: "URY", science: 445, math: 409, reading: 430, digital: 450, lowPerformersPct: 32.1, topPerformersPct: 2.8, escsGap: 84 },
  { name: "México", code: "MEX", science: 413, math: 396, reading: 414, digital: 430, lowPerformersPct: 44.5, topPerformersPct: 0.9, escsGap: 74 },
  { name: "Colombia", code: "COL", science: 420, math: 388, reading: 407, digital: 432, lowPerformersPct: 42.1, topPerformersPct: 1.1, escsGap: 93 },
  { name: "Costa Rica", code: "CRI", science: 424, math: 387, reading: 416, digital: 452, lowPerformersPct: 36.7, topPerformersPct: 0.9, escsGap: 78 },
  { name: "Perú", code: "PER", science: 405, math: 389, reading: 399, digital: 415, lowPerformersPct: 48.2, topPerformersPct: 0.7, escsGap: 77 },
  { name: "Argentina", code: "ARG", science: 397, math: 376, reading: 394, digital: 410, lowPerformersPct: 51.3, topPerformersPct: 0.6, escsGap: 81 },
  { name: "Brasil", code: "BRA", science: 413, math: 379, reading: 410, digital: 425, lowPerformersPct: 45.0, topPerformersPct: 1.2, escsGap: 96 }
];

export const RAG_QA_BANK = [
  {
    question: "¿Cuáles son los promedios globales de la OCDE en PISA 2025?",
    answer: "En PISA 2025, el promedio de la OCDE en Ciencias es de 482 puntos, en Matemáticas 463 puntos, en Lectura 461 puntos y en la evaluación innovadora de 'Aprendizaje en el Mundo Digital' (LDW) alcanza los 500 puntos."
  },
  {
    question: "¿Cuántos estudiantes e instituciones fueron evaluados en total?",
    answer: "El informe evaluó a 690,000 estudiantes mediante muestra directa, representando a aproximadamente 3.4 millones de jóvenes de 15 años en 24,500 instituciones educativas de 85 países y economías participantes."
  },
  {
    question: "¿Qué es el 'Aprendizaje en el Mundo Digital' (LDW) y cuáles fueron los mejores resultados?",
    answer: "Es el dominio innovador de PISA 2025 que mide la capacidad de resolver problemas computacionales, programar artefactos y pensamiento algorítmico. Macao (China) lideró el mundo con 572 puntos, seguido de Singapur (563) y Japón (557)."
  },
  {
    question: "¿Cuáles fueron los 5 países en mayor ascenso e 5 en mayor declive?",
    answer: "Ascenso/Top scores: 1. Singapur (+14 pts en 10 años), 2. Japón (+11 pts), 3. Macao (+9 pts), 4. Taipei Chino (+8 pts), 5. Corea (+6 pts). Declive: 1. Jordania (-24 pts), 2. Filipinas (-21 pts), 3. Rep. Dominicana (-19 pts), 4. Albania (-18 pts), 5. Islandia (-16 pts)."
  },
  {
    question: "¿Cómo afectó el uso de Inteligencia Artificial al rendimiento en Ciencias?",
    answer: "El informe reveló que el 48.5% de los estudiantes usa IA para tareas escolares. Sin embargo, los estudiantes que evalúan críticamente y verifican la información generada por IA obtienen en promedio +32 puntos más en ciencias que aquellos que la consumen pasivamente."
  }
];
