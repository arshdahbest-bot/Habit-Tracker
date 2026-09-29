// IB Diploma syllabus structure: units and chapters for every subject.
// `hl: true` marks chapters taught at Higher Level only. Codes for the sciences (first
// assessment 2025), Economics, Business Management, ESS (2026) and Computer Science (2027)
// follow the IB subject guides; codes for other subjects are the app's own short labels.
// Always double-check against the latest guide on the IB Programme Resource Centre.

export type Chapter = { id: string; title: string; hl?: boolean };
export type Unit = { id: string; title: string; chapters: Chapter[] };

const ch = (id: string, title: string, hl = false): Chapter => (hl ? { id, title, hl } : { id, title });

export const SYLLABUS: Record<string, Unit[]> = {
  bio: [
    {
      id: 'A',
      title: 'Theme A · Unity and diversity',
      chapters: [
        ch('A1.1', 'Water'),
        ch('A1.2', 'Nucleic acids'),
        ch('A2.1', 'Origins of cells'),
        ch('A2.2', 'Cell structure'),
        ch('A2.3', 'Viruses', true),
        ch('A3.1', 'Diversity of organisms'),
        ch('A3.2', 'Classification and cladistics', true),
        ch('A4.1', 'Evolution and speciation'),
        ch('A4.2', 'Conservation of biodiversity'),
      ],
    },
    {
      id: 'B',
      title: 'Theme B · Form and function',
      chapters: [
        ch('B1.1', 'Carbohydrates and lipids'),
        ch('B1.2', 'Proteins'),
        ch('B2.1', 'Membranes and membrane transport'),
        ch('B2.2', 'Organelles and compartmentalization'),
        ch('B2.3', 'Cell specialization'),
        ch('B3.1', 'Gas exchange'),
        ch('B3.2', 'Transport'),
        ch('B3.3', 'Muscle and motility', true),
        ch('B4.1', 'Adaptation to environment'),
        ch('B4.2', 'Ecological niches'),
      ],
    },
    {
      id: 'C',
      title: 'Theme C · Interaction and interdependence',
      chapters: [
        ch('C1.1', 'Enzymes and metabolism'),
        ch('C1.2', 'Cell respiration'),
        ch('C1.3', 'Photosynthesis'),
        ch('C2.1', 'Chemical signalling', true),
        ch('C2.2', 'Neural signalling'),
        ch('C3.1', 'Integration of body systems'),
        ch('C3.2', 'Defence against disease'),
        ch('C4.1', 'Populations and communities'),
        ch('C4.2', 'Transfers of energy and matter'),
      ],
    },
    {
      id: 'D',
      title: 'Theme D · Continuity and change',
      chapters: [
        ch('D1.1', 'DNA replication'),
        ch('D1.2', 'Protein synthesis'),
        ch('D1.3', 'Mutation and gene editing'),
        ch('D2.1', 'Cell and nuclear division'),
        ch('D2.2', 'Gene expression', true),
        ch('D2.3', 'Water potential'),
        ch('D3.1', 'Reproduction'),
        ch('D3.2', 'Inheritance'),
        ch('D3.3', 'Homeostasis'),
        ch('D4.1', 'Natural selection'),
        ch('D4.2', 'Stability and change'),
        ch('D4.3', 'Climate change'),
      ],
    },
  ],

  chem: [
    {
      id: 'S1',
      title: 'Structure 1 · Models of the particulate nature of matter',
      chapters: [
        ch('S1.1', 'Introduction to the particulate nature of matter'),
        ch('S1.2', 'The nuclear atom'),
        ch('S1.3', 'Electron configurations'),
        ch('S1.4', 'Counting particles by mass: the mole'),
        ch('S1.5', 'Ideal gases'),
      ],
    },
    {
      id: 'S2',
      title: 'Structure 2 · Models of bonding and structure',
      chapters: [
        ch('S2.1', 'The ionic model'),
        ch('S2.2', 'The covalent model'),
        ch('S2.3', 'The metallic model'),
        ch('S2.4', 'From models to materials'),
      ],
    },
    {
      id: 'S3',
      title: 'Structure 3 · Classification of matter',
      chapters: [
        ch('S3.1', 'The periodic table: classification of elements'),
        ch('S3.2', 'Functional groups: classification of organic compounds'),
      ],
    },
    {
      id: 'R1',
      title: 'Reactivity 1 · What drives chemical reactions?',
      chapters: [
        ch('R1.1', 'Measuring enthalpy changes'),
        ch('R1.2', 'Energy cycles in reactions'),
        ch('R1.3', 'Energy from fuels'),
        ch('R1.4', 'Entropy and spontaneity', true),
      ],
    },
    {
      id: 'R2',
      title: 'Reactivity 2 · How much, how fast and how far?',
      chapters: [
        ch('R2.1', 'How much? The amount of chemical change'),
        ch('R2.2', 'How fast? The rate of chemical change'),
        ch('R2.3', 'How far? The extent of chemical change'),
      ],
    },
    {
      id: 'R3',
      title: 'Reactivity 3 · What are the mechanisms of chemical change?',
      chapters: [
        ch('R3.1', 'Proton transfer reactions'),
        ch('R3.2', 'Electron transfer reactions'),
        ch('R3.3', 'Electron sharing reactions'),
        ch('R3.4', 'Electron-pair sharing reactions'),
      ],
    },
  ],

  phys: [
    {
      id: 'A',
      title: 'Theme A · Space, time and motion',
      chapters: [
        ch('A.1', 'Kinematics'),
        ch('A.2', 'Forces and momentum'),
        ch('A.3', 'Work, energy and power'),
        ch('A.4', 'Rigid body mechanics', true),
        ch('A.5', 'Galilean and special relativity', true),
      ],
    },
    {
      id: 'B',
      title: 'Theme B · The particulate nature of matter',
      chapters: [
        ch('B.1', 'Thermal energy transfers'),
        ch('B.2', 'Greenhouse effect'),
        ch('B.3', 'Gas laws'),
        ch('B.4', 'Thermodynamics', true),
        ch('B.5', 'Current and circuits'),
      ],
    },
    {
      id: 'C',
      title: 'Theme C · Wave behaviour',
      chapters: [
        ch('C.1', 'Simple harmonic motion'),
        ch('C.2', 'Wave model'),
        ch('C.3', 'Wave phenomena'),
        ch('C.4', 'Standing waves and resonance'),
        ch('C.5', 'Doppler effect'),
      ],
    },
    {
      id: 'D',
      title: 'Theme D · Fields',
      chapters: [
        ch('D.1', 'Gravitational fields'),
        ch('D.2', 'Electric and magnetic fields'),
        ch('D.3', 'Motion in electromagnetic fields'),
        ch('D.4', 'Induction', true),
      ],
    },
    {
      id: 'E',
      title: 'Theme E · Nuclear and quantum physics',
      chapters: [
        ch('E.1', 'Structure of the atom'),
        ch('E.2', 'Quantum physics', true),
        ch('E.3', 'Radioactive decay'),
        ch('E.4', 'Fission'),
        ch('E.5', 'Fusion and stars'),
      ],
    },
  ],

  math: [
    {
      id: '1',
      title: 'Topic 1 · Number and algebra',
      chapters: [
        ch('1a', 'Scientific notation, sequences and series'),
        ch('1b', 'Exponents and logarithms'),
        ch('1c', 'Financial applications and simple proof'),
        ch('1d', 'The binomial theorem'),
        ch('1e', 'Counting principles and extended binomial theorem', true),
        ch('1f', 'Partial fractions', true),
        ch('1g', 'Complex numbers', true),
        ch('1h', 'Proof by induction, contradiction and counterexample', true),
        ch('1i', 'Systems of linear equations', true),
      ],
    },
    {
      id: '2',
      title: 'Topic 2 · Functions',
      chapters: [
        ch('2a', 'Straight lines'),
        ch('2b', 'Functions, domain, range and inverses'),
        ch('2c', 'Composite functions and graphing'),
        ch('2d', 'Quadratic functions'),
        ch('2e', 'Rational, exponential and logarithmic functions'),
        ch('2f', 'Transformations of graphs'),
        ch('2g', 'Polynomial functions and the factor theorem', true),
        ch('2h', 'Rational functions, odd/even functions and modulus', true),
        ch('2i', 'Solving inequalities', true),
      ],
    },
    {
      id: '3',
      title: 'Topic 3 · Geometry and trigonometry',
      chapters: [
        ch('3a', '3D geometry: distance, volume and surface area'),
        ch('3b', 'Right-angled and non-right-angled trigonometry'),
        ch('3c', 'Radians, arcs and sectors'),
        ch('3d', 'The unit circle and trigonometric identities'),
        ch('3e', 'Trigonometric functions and equations'),
        ch('3f', 'Reciprocal and inverse trigonometric functions', true),
        ch('3g', 'Compound angle identities', true),
        ch('3h', 'Vectors', true),
        ch('3i', 'Lines and planes in 3D', true),
      ],
    },
    {
      id: '4',
      title: 'Topic 4 · Statistics and probability',
      chapters: [
        ch('4a', 'Sampling and presenting data'),
        ch('4b', 'Measures of central tendency and dispersion'),
        ch('4c', 'Correlation and regression'),
        ch('4d', 'Probability, Venn and tree diagrams'),
        ch('4e', 'Discrete random variables and the binomial distribution'),
        ch('4f', 'The normal distribution'),
        ch('4g', "Bayes' theorem", true),
        ch('4h', 'Continuous random variables', true),
      ],
    },
    {
      id: '5',
      title: 'Topic 5 · Calculus',
      chapters: [
        ch('5a', 'Limits and the derivative'),
        ch('5b', 'Differentiation rules: chain, product, quotient'),
        ch('5c', 'Stationary points, optimisation and kinematics'),
        ch('5d', 'Integration and areas'),
        ch('5e', 'Continuity, differentiability and L’Hôpital’s rule', true),
        ch('5f', 'Implicit differentiation and related rates', true),
        ch('5g', 'Further integration: substitution and by parts', true),
        ch('5h', 'Volumes of revolution', true),
        ch('5i', 'Differential equations', true),
        ch('5j', 'Maclaurin series', true),
      ],
    },
  ],

  econ: [
    {
      id: '1',
      title: 'Unit 1 · Introduction to economics',
      chapters: [ch('1.1', 'What is economics?'), ch('1.2', 'How do economists approach the world?')],
    },
    {
      id: '2',
      title: 'Unit 2 · Microeconomics',
      chapters: [
        ch('2.1', 'Demand'),
        ch('2.2', 'Supply'),
        ch('2.3', 'Competitive market equilibrium'),
        ch('2.4', 'Critique of the maximizing behaviour of consumers and producers'),
        ch('2.5', 'Elasticity of demand (PED and YED)'),
        ch('2.6', 'Elasticity of supply (PES)'),
        ch('2.7', 'Role of government in microeconomics'),
        ch('2.8', 'Market failure: externalities and common pool resources'),
        ch('2.9', 'Market failure: public goods'),
        ch('2.10', 'Market failure: asymmetric information', true),
        ch('2.11', 'Market failure: market power', true),
        ch('2.12', "The market's inability to achieve equity", true),
      ],
    },
    {
      id: '3',
      title: 'Unit 3 · Macroeconomics',
      chapters: [
        ch('3.1', 'Measuring economic activity and illustrating its variations'),
        ch('3.2', 'Variations in economic activity: aggregate demand and aggregate supply'),
        ch('3.3', 'Macroeconomic objectives'),
        ch('3.4', 'Economics of inequality and poverty'),
        ch('3.5', 'Demand management: monetary policy'),
        ch('3.6', 'Demand management: fiscal policy'),
        ch('3.7', 'Supply-side policies'),
      ],
    },
    {
      id: '4',
      title: 'Unit 4 · The global economy',
      chapters: [
        ch('4.1', 'Benefits of international trade'),
        ch('4.2', 'Types of trade protection'),
        ch('4.3', 'Arguments for and against trade control/protection'),
        ch('4.4', 'Economic integration'),
        ch('4.5', 'Exchange rates'),
        ch('4.6', 'Balance of payments'),
        ch('4.7', 'Sustainable development'),
        ch('4.8', 'Measuring development'),
        ch('4.9', 'Barriers to economic growth and/or economic development'),
        ch('4.10', 'Economic growth and/or economic development strategies'),
      ],
    },
  ],

  bm: [
    {
      id: '1',
      title: 'Unit 1 · Introduction to business management',
      chapters: [
        ch('1.1', 'What is a business?'),
        ch('1.2', 'Types of business entities'),
        ch('1.3', 'Business objectives'),
        ch('1.4', 'Stakeholders'),
        ch('1.5', 'Growth and evolution'),
        ch('1.6', 'Multinational companies (MNCs)'),
      ],
    },
    {
      id: '2',
      title: 'Unit 2 · Human resource management',
      chapters: [
        ch('2.1', 'Introduction to human resource management'),
        ch('2.2', 'Organizational structure'),
        ch('2.3', 'Leadership and management'),
        ch('2.4', 'Motivation and demotivation'),
        ch('2.5', 'Organizational (corporate) culture', true),
        ch('2.6', 'Communication'),
        ch('2.7', 'Industrial/employee relations', true),
      ],
    },
    {
      id: '3',
      title: 'Unit 3 · Finance and accounts',
      chapters: [
        ch('3.1', 'Introduction to finance'),
        ch('3.2', 'Sources of finance'),
        ch('3.3', 'Costs and revenues'),
        ch('3.4', 'Final accounts'),
        ch('3.5', 'Profitability and liquidity ratio analysis'),
        ch('3.6', 'Debt/efficiency ratio analysis', true),
        ch('3.7', 'Cash flow'),
        ch('3.8', 'Investment appraisal'),
        ch('3.9', 'Budgets', true),
      ],
    },
    {
      id: '4',
      title: 'Unit 4 · Marketing',
      chapters: [
        ch('4.1', 'Introduction to marketing'),
        ch('4.2', 'Marketing planning'),
        ch('4.3', 'Sales forecasting', true),
        ch('4.4', 'Market research'),
        ch('4.5', 'The seven Ps of the marketing mix'),
        ch('4.6', 'International marketing', true),
      ],
    },
    {
      id: '5',
      title: 'Unit 5 · Operations management',
      chapters: [
        ch('5.1', 'Introduction to operations management'),
        ch('5.2', 'Operations methods'),
        ch('5.3', 'Lean production and quality management', true),
        ch('5.4', 'Location'),
        ch('5.5', 'Break-even analysis'),
        ch('5.6', 'Production planning', true),
        ch('5.7', 'Crisis management and contingency planning', true),
        ch('5.8', 'Research and development', true),
        ch('5.9', 'Management information systems', true),
      ],
    },
  ],

  hist: [
    {
      id: 'PS',
      title: 'Prescribed subjects (Paper 1, choose one)',
      chapters: [
        ch('PS1', 'Military leaders'),
        ch('PS2', 'Conquest and its impact'),
        ch('PS3', 'The move to global war'),
        ch('PS4', 'Rights and protest'),
        ch('PS5', 'Conflict and intervention'),
      ],
    },
    {
      id: 'WH',
      title: 'World history topics (Paper 2, choose two)',
      chapters: [
        ch('WH1', 'Society and economy (750–1400)'),
        ch('WH2', 'Causes and effects of medieval wars (750–1500)'),
        ch('WH3', 'Dynasties and rulers (750–1500)'),
        ch('WH4', 'Societies in transition (1400–1700)'),
        ch('WH5', 'Early modern states (1450–1789)'),
        ch('WH6', 'Causes and effects of early modern wars (1500–1750)'),
        ch('WH7', 'Origins, development and impact of industrialization (1750–2005)'),
        ch('WH8', 'Independence movements (1800–2000)'),
        ch('WH9', 'Evolution and development of democratic states (1848–2000)'),
        ch('WH10', 'Authoritarian states (20th century)'),
        ch('WH11', 'Causes and effects of 20th-century wars'),
        ch('WH12', 'The Cold War: superpower tensions and rivalries (20th century)'),
      ],
    },
    {
      id: 'HL',
      title: 'HL regional options (Paper 3, choose one)',
      chapters: [
        ch('HL1', 'History of Africa and the Middle East', true),
        ch('HL2', 'History of the Americas', true),
        ch('HL3', 'History of Asia and Oceania', true),
        ch('HL4', 'History of Europe', true),
      ],
    },
    {
      id: 'SK',
      title: 'Skills',
      chapters: [ch('SK1', 'Source analysis (OPCVL)'), ch('SK2', 'Essay writing'), ch('SK3', 'Historical investigation (IA)')],
    },
  ],

  psych: [
    {
      id: 'F',
      title: 'Concepts, frameworks and research',
      chapters: [
        ch('F1', 'Key concepts: bias, causality, change, measurement, perspective, responsibility'),
        ch('F2', 'The biological framework'),
        ch('F3', 'The cognitive framework'),
        ch('F4', 'The sociocultural framework'),
        ch('F5', 'Research methods and data in psychology'),
      ],
    },
    {
      id: 'C',
      title: 'Contexts',
      chapters: [
        ch('C1', 'Health and well-being'),
        ch('C2', 'Human development'),
        ch('C3', 'Human relationships'),
        ch('C4', 'Learning and cognition'),
      ],
    },
    {
      id: 'HL',
      title: 'HL extensions',
      chapters: [ch('HL1', 'Culture', true), ch('HL2', 'Motivation', true), ch('HL3', 'Technology', true)],
    },
  ],

  cs: [
    {
      id: 'A',
      title: 'Theme A · Concepts of computer science',
      chapters: [
        ch('A1', 'Computer fundamentals'),
        ch('A2', 'Networks'),
        ch('A3', 'Databases'),
        ch('A4', 'Machine learning'),
      ],
    },
    {
      id: 'B',
      title: 'Theme B · Computational thinking and problem-solving',
      chapters: [
        ch('B1', 'Computational thinking'),
        ch('B2', 'Programming'),
        ch('B3', 'Object-oriented programming'),
        ch('B4', 'Abstract data types', true),
      ],
    },
    {
      id: 'X',
      title: 'Case study and internal assessment',
      chapters: [ch('X1', 'Annual case study'), ch('X2', 'Computational solution (IA)')],
    },
  ],

  ess: [
    {
      id: '1',
      title: 'Topic 1 · Foundation',
      chapters: [ch('1.1', 'Perspectives'), ch('1.2', 'Systems'), ch('1.3', 'Sustainability')],
    },
    {
      id: '2',
      title: 'Topic 2 · Ecology',
      chapters: [
        ch('2.1', 'Individuals, populations, communities and ecosystems'),
        ch('2.2', 'Energy and biomass in ecosystems'),
        ch('2.3', 'Biogeochemical cycles'),
        ch('2.4', 'Climate and biomes'),
        ch('2.5', 'Zonation, succession and change in ecosystems'),
      ],
    },
    {
      id: '3',
      title: 'Topic 3 · Biodiversity and conservation',
      chapters: [
        ch('3.1', 'Biodiversity and evolution'),
        ch('3.2', 'Human impact on biodiversity'),
        ch('3.3', 'Conservation and regeneration'),
      ],
    },
    {
      id: '4',
      title: 'Topic 4 · Water',
      chapters: [
        ch('4.1', 'Water systems'),
        ch('4.2', 'Water access, use and security'),
        ch('4.3', 'Aquatic food production systems'),
        ch('4.4', 'Water pollution'),
      ],
    },
    {
      id: '5',
      title: 'Topic 5 · Land',
      chapters: [ch('5.1', 'Soil'), ch('5.2', 'Agriculture and food')],
    },
    {
      id: '6',
      title: 'Topic 6 · Atmosphere and climate change',
      chapters: [
        ch('6.1', 'Introduction to the atmosphere'),
        ch('6.2', 'Climate change: causes and impacts'),
        ch('6.3', 'Climate change: mitigation and adaptation'),
        ch('6.4', 'Stratospheric ozone'),
      ],
    },
    {
      id: '7',
      title: 'Topic 7 · Natural resources',
      chapters: [
        ch('7.1', 'Natural resource uses and management'),
        ch('7.2', 'Energy sources, uses and management'),
        ch('7.3', 'Solid waste'),
      ],
    },
    {
      id: '8',
      title: 'Topic 8 · Human populations and urban systems',
      chapters: [
        ch('8.1', 'Human population dynamics'),
        ch('8.2', 'Urban systems and urban planning'),
        ch('8.3', 'Urban air pollution'),
      ],
    },
    {
      id: 'HL',
      title: 'HL lenses',
      chapters: [
        ch('HL.a', 'Environmental law', true),
        ch('HL.b', 'Environmental economics', true),
        ch('HL.c', 'Environmental ethics', true),
      ],
    },
  ],

  eng: [
    {
      id: 'AE',
      title: 'Areas of exploration',
      chapters: [
        ch('AE1', 'Readers, writers and texts'),
        ch('AE2', 'Time and space'),
        ch('AE3', 'Intertextuality: connecting texts'),
      ],
    },
    {
      id: 'TX',
      title: 'Texts and analysis',
      chapters: [
        ch('TX1', 'Non-literary text types (ads, speeches, articles, infographics…)'),
        ch('TX2', 'Prose fiction'),
        ch('TX3', 'Poetry'),
        ch('TX4', 'Drama'),
        ch('TX5', 'Stylistic and rhetorical devices'),
      ],
    },
    {
      id: 'AS',
      title: 'Assessment skills',
      chapters: [
        ch('AS1', 'Paper 1: guided textual analysis'),
        ch('AS2', 'Paper 2: comparative essay'),
        ch('AS3', 'Individual oral: global issues'),
        ch('AS4', 'HL essay', true),
        ch('AS5', 'Learner portfolio'),
      ],
    },
  ],

  fre: [
    {
      id: 'TH',
      title: 'Thèmes prescrits',
      chapters: [
        ch('TH1', 'Identités'),
        ch('TH2', 'Expériences'),
        ch('TH3', 'Ingéniosité humaine'),
        ch('TH4', 'Organisation sociale'),
        ch('TH5', 'Partage de la planète'),
      ],
    },
    {
      id: 'LG',
      title: 'Langue',
      chapters: [
        ch('LG1', 'Grammar: tenses (présent, passé composé, imparfait, futur)'),
        ch('LG2', 'Grammar: subjunctive and conditional'),
        ch('LG3', 'Connectives and complex sentences'),
        ch('LG4', 'Text types (article, blog, letter, speech, brochure…)'),
      ],
    },
    {
      id: 'AS',
      title: 'Assessment skills',
      chapters: [
        ch('AS1', 'Paper 1: productive writing'),
        ch('AS2', 'Paper 2: listening comprehension'),
        ch('AS3', 'Paper 2: reading comprehension'),
        ch('AS4', 'Individual oral (visual stimulus)'),
        ch('AS5', 'Literary works', true),
      ],
    },
  ],

  hin: [
    {
      id: 'TH',
      title: 'Prescribed themes (निर्धारित विषय)',
      chapters: [
        ch('TH1', 'Identities (पहचान)'),
        ch('TH2', 'Experiences (अनुभव)'),
        ch('TH3', 'Human ingenuity (मानवीय सृजनशीलता)'),
        ch('TH4', 'Social organization (सामाजिक संगठन)'),
        ch('TH5', 'Sharing the planet (ग्रह की साझेदारी)'),
      ],
    },
    {
      id: 'LG',
      title: 'Language (भाषा)',
      chapters: [
        ch('LG1', 'Grammar: tenses and verb forms (काल)'),
        ch('LG2', 'Grammar: postpositions and gender (परसर्ग और लिंग)'),
        ch('LG3', 'Connectives and idioms (मुहावरे)'),
        ch('LG4', 'Text types (letter, diary, article, speech…)'),
      ],
    },
    {
      id: 'AS',
      title: 'Assessment skills',
      chapters: [
        ch('AS1', 'Paper 1: productive writing'),
        ch('AS2', 'Paper 2: listening comprehension'),
        ch('AS3', 'Paper 2: reading comprehension'),
        ch('AS4', 'Individual oral'),
        ch('AS5', 'Literary works', true),
      ],
    },
  ],

  tok: [
    {
      id: 'CORE',
      title: 'Core theme',
      chapters: [ch('K1', 'Knowledge and the knower'), ch('K2', 'The knowledge framework: scope, perspectives, methods and tools, ethics')],
    },
    {
      id: 'OT',
      title: 'Optional themes (study two)',
      chapters: [
        ch('OT1', 'Knowledge and technology'),
        ch('OT2', 'Knowledge and language'),
        ch('OT3', 'Knowledge and politics'),
        ch('OT4', 'Knowledge and religion'),
        ch('OT5', 'Knowledge and indigenous societies'),
      ],
    },
    {
      id: 'AOK',
      title: 'Areas of knowledge',
      chapters: [
        ch('AOK1', 'History'),
        ch('AOK2', 'The human sciences'),
        ch('AOK3', 'The natural sciences'),
        ch('AOK4', 'The arts'),
        ch('AOK5', 'Mathematics'),
      ],
    },
    {
      id: 'AS',
      title: 'Assessment',
      chapters: [ch('AS1', 'TOK exhibition'), ch('AS2', 'TOK essay')],
    },
  ],
};
