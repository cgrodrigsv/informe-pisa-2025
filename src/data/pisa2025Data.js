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
    description: "EvaluaciÃ³n focalizada de alfabetizaciÃ³n y razonamiento cientÃ­fico.",
    color: "from-sky-500 to-blue-600"
  },
  math: {
    score: 463,
    shortTermChange: -9,
    decennialTrend: -5,
    unit: "puntos",
    label: "MatemÃ¡ticas",
    icon: "Calculator",
    description: "Pensamiento matemÃ¡tico y resoluciÃ³n de problemas cuantitativos.",
    color: "from-indigo-500 to-purple-600"
  },
  reading: {
    score: 461,
    shortTermChange: -14,
    decennialTrend: -10,
    unit: "puntos",
    label: "Lectura",
    icon: "BookOpen",
    description: "ComprensiÃ³n, evaluaciÃ³n y reflexiÃ³n sobre textos complejos.",
    color: "from-emerald-500 to-teal-600"
  },
  digitalWorld: {
    score: 500,
    shortTermChange: 0,
    decennialTrend: 0,
    unit: "puntos",
    label: "Mundo Digital (LDW)",
    icon: "Cpu",
    description: "ResoluciÃ³n de problemas computacionales y aprendizaje en entorno digital.",
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
      description: "26% de los estudiantes de la OCDE no alcanzan la competencia mÃ­nima en ciencias (Nivel 2)."
    },
    {
      id: "math",
      name: "MatemÃ¡ticas",
      topPerformers: 8.5,
      baselineCompetency: 59.8,
      lowAchievers: 31.7,
      netGap: -23.2,
      description: "Casi 1 de cada 3 estudiantes (31.7%) queda rezagado en matemÃ¡ticas en la OCDE."
    },
    {
      id: "reading",
      name: "Lectura",
      topPerformers: 7.2,
      baselineCompetency: 63.5,
      lowAchievers: 29.3,
      netGap: -22.1,
      description: "El 29.3% carece de habilidades bÃ¡sicas de comprensiÃ³n lectora crÃ­tica."
    },
    {
      id: "digital",
      name: "ResoluciÃ³n Digital (LDW)",
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
    flag: "ðŸ‡¸ðŸ‡¬",
    scienceScore: 560,
    mathScore: 563,
    readingScore: 535,
    digitalScore: 563,
    change10yr: 14,
    region: "Asia Oriental",
    keyFactor: "Enfoque docente intensivo y resoluciÃ³n algorÃ­tmica de problemas"
  },
  {
    rank: 2,
    name: "JapÃ³n",
    code: "JPN",
    flag: "ðŸ‡¯ðŸ‡µ",
    scienceScore: 538,
    mathScore: 525,
    readingScore: 503,
    digitalScore: 557,
    change10yr: 11,
    region: "Asia Oriental",
    keyFactor: "Alta equidad socioeducativa y cultura de indagaciÃ³n prÃ¡ctica"
  },
  {
    rank: 3,
    name: "Macao (China)",
    code: "MAC",
    flag: "ðŸ‡²ðŸ‡´",
    scienceScore: 541,
    mathScore: 549,
    readingScore: 501,
    digitalScore: 572,
    change10yr: 9,
    region: "Asia Oriental",
    keyFactor: "LÃ­der mundial en ResoluciÃ³n de Problemas en el Mundo Digital"
  },
  {
    rank: 4,
    name: "Taipei Chino",
    code: "TPE",
    flag: "ðŸ‡¹ðŸ‡¼",
    scienceScore: 540,
    mathScore: 546,
    readingScore: 508,
    digitalScore: 551,
    change10yr: 8,
    region: "Asia Oriental",
    keyFactor: "IntegraciÃ³n masiva de tecnologÃ­as STEM en educaciÃ³n secundaria"
  },
  {
    rank: 5,
    name: "Corea del Sur",
    code: "KOR",
    flag: "ðŸ‡°ðŸ‡·",
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
    flag: "ðŸ‡¯ðŸ‡´",
    scienceScore: 405,
    mathScore: 417,
    readingScore: 415,
    digitalScore: 435,
    change10yr: -24,
    region: "Oriente Medio",
    keyFactor: "InterrupciÃ³n de infraestructura y severo impacto de crisis migratoria"
  },
  {
    rank: 2,
    name: "Filipinas",
    code: "PHL",
    flag: "ðŸ‡µðŸ‡­",
    scienceScore: 371,
    mathScore: 368,
    readingScore: 354,
    digitalScore: 410,
    change10yr: -21,
    region: "Sudeste AsiÃ¡tico",
    keyFactor: "Falta crÃ³nica de recursos pedagÃ³gicos y dispositivos digitales"
  },
  {
    rank: 3,
    name: "RepÃºblica Dominicana",
    code: "DOM",
    flag: "ðŸ‡©ðŸ‡´",
    scienceScore: 361,
    mathScore: 342,
    readingScore: 330,
    digitalScore: 390,
    change10yr: -19,
    region: "LatinoamÃ©rica",
    keyFactor: "Desigualdad territorial y baja tasa de retenciÃ³n docente capacitado"
  },
  {
    rank: 4,
    name: "Albania",
    code: "ALB",
    flag: "ðŸ‡¦ðŸ‡±",
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
    flag: "ðŸ‡®ðŸ‡¸",
    scienceScore: 433,
    mathScore: 435,
    readingScore: 436,
    digitalScore: 465,
    change10yr: -16,
    region: "Europa del Norte",
    keyFactor: "CaÃ­da continua en rendimiento lector y distracciÃ³n digital en aulas"
  }
];

export const FUTURE_SKILLS_DATA = [
  {
    skill: "ResoluciÃ³n de Problemas Computacionales (LDW)",
    oecdScore: 500,
    topSystemScore: 572, // Macao
    topSystemName: "Macao (China)",
    category: "Mundo Digital",
    description: "DiseÃ±o, ejecuciÃ³n y depuraciÃ³n de algoritmos y artefactos computacionales."
  },
  {
    skill: "ExplicaciÃ³n CientÃ­fica de FenÃ³menos",
    oecdScore: 482,
    topSystemScore: 597, // B-S-J-Z China
    topSystemName: "B-S-J-Z (China)",
    category: "Ciencia Cognitiva",
    description: "AplicaciÃ³n de teorÃ­as y conceptos para explicar eventos naturales y tecnolÃ³gicos."
  },
  {
    skill: "InterpretaciÃ³n de Datos e Evidencia CientÃ­fica",
    oecdScore: 480,
    topSystemScore: 560, // Singapore
    topSystemName: "Singapur",
    category: "Pensamiento CrÃ­tico",
    description: "TransformaciÃ³n de grÃ¡ficos, tablas y experimentos en explicaciones vÃ¡lidas."
  },
  {
    skill: "Ciencia Ambiental y Conciencia EcolÃ³gica",
    oecdScore: 480,
    topSystemScore: 561, // Singapore
    topSystemName: "Singapur",
    category: "Sostenibilidad",
    description: "ComprensiÃ³n de sistemas ecolÃ³gicos y compromiso de acciÃ³n climÃ¡tica."
  },
  {
    skill: "EvaluaciÃ³n CrÃ­tica de Respuestas de IA",
    oecdScore: 465,
    topSystemScore: 545, // Chinese Taipei
    topSystemName: "Taipei Chino",
    category: "AlfabetizaciÃ³n IA",
    description: "Habilidad para verificar, corregir y cuestionar alucinaciones de modelos de IA."
  },
  {
    skill: "DiseÃ±o de Investigaciones Experimentales",
    oecdScore: 478,
    topSystemScore: 538, // Japan
    topSystemName: "JapÃ³n",
    category: "InvestigaciÃ³n",
    description: "FormulaciÃ³n de hipÃ³tesis y diseÃ±o de experimentos controlados."
  }
];

export const COUNTRY_EXPLORER_DATA = [
  { name: "El Salvador", code: "SLV", science: 385, math: 346, reading: 366, digital: 401, lowPerformersPct: 65.0, topPerformersPct: 0.0, escsGap: 73 },
  { name: "B-S-J-Z (China)", code: "CHN", science: 597, math: 612, reading: 527, digital: 560, lowPerformersPct: 1.8, topPerformersPct: 55.5, escsGap: 68 },
  { name: "Singapur", code: "SGP", science: 560, math: 563, reading: 535, digital: 563, lowPerformersPct: 6.8, topPerformersPct: 42.3, escsGap: 88 },
  { name: "Macao (China)", code: "MAC", science: 541, math: 549, reading: 501, digital: 572, lowPerformersPct: 5.2, topPerformersPct: 30.8, escsGap: 41 },
  { name: "Taipei Chino", code: "TPE", science: 540, math: 546, reading: 508, digital: 551, lowPerformersPct: 9.1, topPerformersPct: 35.0, escsGap: 92 },
  { name: "JapÃ³n", code: "JPN", science: 538, math: 525, reading: 503, digital: 557, lowPerformersPct: 8.8, topPerformersPct: 27.1, escsGap: 67 },
  { name: "Estonia", code: "EST", science: 527, math: 508, reading: 499, digital: 541, lowPerformersPct: 7.4, topPerformersPct: 18.0, escsGap: 64 },
  { name: "Corea del Sur", code: "KOR", science: 526, math: 522, reading: 501, digital: 538, lowPerformersPct: 9.4, topPerformersPct: 28.1, escsGap: 69 },
  { name: "Reino Unido", code: "GBR", science: 511, math: 488, reading: 494, digital: 523, lowPerformersPct: 12.0, topPerformersPct: 18.2, escsGap: 78 },
  { name: "CanadÃ¡", code: "CAN", science: 510, math: 485, reading: 490, digital: 525, lowPerformersPct: 12.0, topPerformersPct: 17.4, escsGap: 56 },
  { name: "Nueva Zelanda", code: "NZL", science: 509, math: 480, reading: 497, digital: 531, lowPerformersPct: 13.8, topPerformersPct: 20.8, escsGap: 92 },
  { name: "Australia", code: "AUS", science: 510, math: 487, reading: 498, digital: 528, lowPerformersPct: 13.1, topPerformersPct: 19.5, escsGap: 78 },
  { name: "Irlanda", code: "IRL", science: 503, math: 471, reading: 510, digital: 512, lowPerformersPct: 11.2, topPerformersPct: 16.5, escsGap: 71 },
  { name: "Finlandia", code: "FIN", science: 502, math: 484, reading: 490, digital: 515, lowPerformersPct: 14.2, topPerformersPct: 15.8, escsGap: 83 },
  { name: "Estados Unidos", code: "USA", science: 500, math: 465, reading: 501, digital: 518, lowPerformersPct: 15.6, topPerformersPct: 17.9, escsGap: 100 },
  { name: "Suiza", code: "CHE", science: 495, math: 506, reading: 485, digital: 510, lowPerformersPct: 13.9, topPerformersPct: 18.4, escsGap: 97 },
  { name: "Francia", code: "FRA", science: 486, math: 464, reading: 473, digital: 490, lowPerformersPct: 18.5, topPerformersPct: 12.1, escsGap: 95 },
  { name: "EspaÃ±a", code: "ESP", science: 477, math: 473, reading: 474, digital: 485, lowPerformersPct: 19.2, topPerformersPct: 8.9, escsGap: 69 },
  { name: "Chile", code: "CHL", science: 442, math: 411, reading: 446, digital: 460, lowPerformersPct: 29.8, topPerformersPct: 3.5, escsGap: 75 },
  { name: "Uruguay", code: "URY", science: 445, math: 409, reading: 430, digital: 450, lowPerformersPct: 32.1, topPerformersPct: 2.8, escsGap: 84 },
  { name: "MÃ©xico", code: "MEX", science: 413, math: 396, reading: 414, digital: 430, lowPerformersPct: 44.5, topPerformersPct: 0.9, escsGap: 74 },
  { name: "Colombia", code: "COL", science: 420, math: 388, reading: 407, digital: 432, lowPerformersPct: 42.1, topPerformersPct: 1.1, escsGap: 93 },
  { name: "Costa Rica", code: "CRI", science: 424, math: 387, reading: 416, digital: 452, lowPerformersPct: 36.7, topPerformersPct: 0.9, escsGap: 78 },
  { name: "PerÃº", code: "PER", science: 405, math: 389, reading: 399, digital: 415, lowPerformersPct: 48.2, topPerformersPct: 0.7, escsGap: 77 },
  { name: "Argentina", code: "ARG", science: 397, math: 376, reading: 394, digital: 410, lowPerformersPct: 51.3, topPerformersPct: 0.6, escsGap: 81 },
  { name: "Brasil", code: "BRA", science: 413, math: 379, reading: 410, digital: 425, lowPerformersPct: 45.0, topPerformersPct: 1.2, escsGap: 96 }
];

export const RAG_QA_BANK = [
  {
    question: "Â¿CuÃ¡les son los promedios globales de la OCDE en PISA 2025?",
    answer: "En PISA 2025, el promedio de la OCDE en Ciencias es de 482 puntos, en MatemÃ¡ticas 463 puntos, en Lectura 461 puntos y en la evaluaciÃ³n innovadora de 'Aprendizaje en el Mundo Digital' (LDW) alcanza los 500 puntos."
  },
  {
    question: "Â¿CuÃ¡ntos estudiantes e instituciones fueron evaluados en total?",
    answer: "El informe evaluÃ³ a 690,000 estudiantes mediante muestra directa, representando a aproximadamente 3.4 millones de jÃ³venes de 15 aÃ±os en 24,500 instituciones educativas de 85 paÃ­ses y economÃ­as participantes."
  },
  {
    question: "Â¿QuÃ© es el 'Aprendizaje en el Mundo Digital' (LDW) y cuÃ¡les fueron los mejores resultados?",
    answer: "Es el dominio innovador de PISA 2025 que mide la capacidad de resolver problemas computacionales, programar artefactos y pensamiento algorÃ­tmico. Macao (China) liderÃ³ el mundo con 572 puntos, seguido de Singapur (563) y JapÃ³n (557)."
  },
  {
    question: "Â¿CuÃ¡les fueron los 5 paÃ­ses en mayor ascenso e 5 en mayor declive?",
    answer: "Ascenso/Top scores: 1. Singapur (+14 pts en 10 aÃ±os), 2. JapÃ³n (+11 pts), 3. Macao (+9 pts), 4. Taipei Chino (+8 pts), 5. Corea (+6 pts). Declive: 1. Jordania (-24 pts), 2. Filipinas (-21 pts), 3. Rep. Dominicana (-19 pts), 4. Albania (-18 pts), 5. Islandia (-16 pts)."
  },
  {
    question: "Â¿CÃ³mo afectÃ³ el uso de Inteligencia Artificial al rendimiento en Ciencias?",
    answer: "El informe revelÃ³ que el 48.5% de los estudiantes usa IA para tareas escolares. Sin embargo, los estudiantes que evalÃºan crÃ­ticamente y verifican la informaciÃ³n generada por IA obtienen en promedio +32 puntos mÃ¡s en ciencias que aquellos que la consumen pasivamente."
  }
];

