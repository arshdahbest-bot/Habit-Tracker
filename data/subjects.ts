// IBDP study content. Add more subjects, lessons, flashcards and questions here —
// every screen in the app reads from this file.

export type Lesson = {
  id: string;
  title: string;
  steps: string[]; // each step is one "slide" the avatar tutor explains
};

export type Flashcard = { front: string; back: string };

export type QuizQuestion = {
  question: string;
  options: string[];
  answer: number; // index into options
  explanation: string;
};

export type Subject = {
  id: string;
  name: string;
  group: string;
  emoji: string;
  color: string;
  lessons: Lesson[];
  flashcards: Flashcard[];
  quiz: QuizQuestion[];
};

export const SUBJECTS: Subject[] = [
  {
    id: 'bio',
    name: 'Biology',
    group: 'Group 4 · Sciences',
    emoji: '🧬',
    color: '#16A34A',
    lessons: [
      {
        id: 'bio-cells',
        title: 'Cell Theory & Cell Structure',
        steps: [
          'Cell theory has three main ideas: all living things are made of cells, the cell is the smallest unit of life, and cells only come from pre-existing cells.',
          'Prokaryotic cells, like bacteria, have no nucleus. Their DNA is a naked loop in a region called the nucleoid, and they have 70S ribosomes.',
          'Eukaryotic cells have a nucleus and membrane-bound organelles such as mitochondria, the Golgi apparatus and the rough endoplasmic reticulum. Their ribosomes are 80S.',
          'Cells stay small because of the surface-area-to-volume ratio. As a cell grows, its volume increases faster than its surface area, so it cannot exchange materials fast enough.',
          'Exam tip: when you compare prokaryotes and eukaryotes, always give paired points, for example "prokaryotes have 70S ribosomes whereas eukaryotes have 80S ribosomes".',
        ],
      },
      {
        id: 'bio-dna',
        title: 'DNA Replication',
        steps: [
          'DNA replication is semi-conservative: each new DNA molecule keeps one original strand and gains one newly built strand.',
          'Helicase unwinds the double helix by breaking the hydrogen bonds between complementary bases.',
          'DNA polymerase III adds free nucleotides to the 3-prime end of the growing strand, so replication always runs in the 5-prime to 3-prime direction.',
          'Because of this, the lagging strand is built in short pieces called Okazaki fragments, which DNA ligase later joins together.',
          'Remember the base pairing rule: adenine pairs with thymine, and cytosine pairs with guanine.',
        ],
      },
    ],
    flashcards: [
      { front: 'What are the 3 parts of cell theory?', back: 'All living things are made of cells; cells are the smallest unit of life; cells come from pre-existing cells.' },
      { front: 'Ribosome size in prokaryotes?', back: '70S (eukaryotes have 80S in the cytoplasm).' },
      { front: 'Why are cells small?', back: 'A high surface-area-to-volume ratio allows efficient exchange of materials.' },
      { front: 'What does helicase do?', back: 'Unwinds DNA and separates the two strands by breaking hydrogen bonds.' },
      { front: 'What are Okazaki fragments?', back: 'Short DNA sections made on the lagging strand, joined by DNA ligase.' },
      { front: 'Define osmosis.', back: 'Passive movement of water across a partially permeable membrane from lower to higher solute concentration.' },
    ],
    quiz: [
      { question: 'Which organelle is the site of aerobic respiration?', options: ['Ribosome', 'Mitochondrion', 'Golgi apparatus', 'Lysosome'], answer: 1, explanation: 'Mitochondria carry out the Krebs cycle and oxidative phosphorylation.' },
      { question: 'DNA replication is described as…', options: ['Conservative', 'Dispersive', 'Semi-conservative', 'Random'], answer: 2, explanation: 'Each new molecule has one old strand and one new strand.' },
      { question: 'Which enzyme joins Okazaki fragments?', options: ['Helicase', 'DNA ligase', 'RNA primase', 'Amylase'], answer: 1, explanation: 'DNA ligase seals the sugar-phosphate backbone between fragments.' },
      { question: 'Prokaryotic DNA is found in the…', options: ['Nucleus', 'Nucleolus', 'Nucleoid', 'Vacuole'], answer: 2, explanation: 'Prokaryotes have no nucleus; their DNA sits in the nucleoid region.' },
      { question: 'As a cell grows, its SA:V ratio…', options: ['Increases', 'Decreases', 'Stays the same', 'Doubles'], answer: 1, explanation: 'Volume grows faster (cubed) than surface area (squared).' },
    ],
  },
  {
    id: 'chem',
    name: 'Chemistry',
    group: 'Group 4 · Sciences',
    emoji: '⚗️',
    color: '#0EA5E9',
    lessons: [
      {
        id: 'chem-mole',
        title: 'The Mole Concept',
        steps: [
          'A mole is an amount of substance containing 6.02 times ten to the power 23 particles. This number is called Avogadro’s constant.',
          'To convert between mass and moles, use n equals m over M, where n is moles, m is mass in grams, and M is molar mass in grams per mole.',
          'For example, 18 grams of water, with a molar mass of 18 grams per mole, is exactly 1 mole of water molecules.',
          'For gases at STP, one mole occupies 22.7 cubic decimetres, as given in the IB data booklet.',
          'Exam tip: always show your working and give answers to the correct number of significant figures.',
        ],
      },
      {
        id: 'chem-bonding',
        title: 'Chemical Bonding',
        steps: [
          'Ionic bonding is the electrostatic attraction between oppositely charged ions, usually formed between a metal and a non-metal.',
          'Covalent bonding is the electrostatic attraction between a shared pair of electrons and the positively charged nuclei.',
          'Metallic bonding is the attraction between a lattice of positive metal ions and a sea of delocalised electrons.',
          'VSEPR theory predicts molecular shape: electron domains repel each other and spread out as far as possible.',
          'For example, methane has four bonding domains, giving a tetrahedral shape with bond angles of 109.5 degrees.',
        ],
      },
    ],
    flashcards: [
      { front: 'Avogadro’s constant', back: '6.02 × 10²³ mol⁻¹' },
      { front: 'Formula linking moles, mass, molar mass', back: 'n = m / M' },
      { front: 'Molar volume of a gas at STP (IB)', back: '22.7 dm³ mol⁻¹' },
      { front: 'Define ionic bonding', back: 'Electrostatic attraction between oppositely charged ions.' },
      { front: 'Shape & angle of CH₄', back: 'Tetrahedral, 109.5°' },
      { front: 'Define electronegativity', back: 'The ability of an atom to attract a shared pair of electrons in a covalent bond.' },
    ],
    quiz: [
      { question: 'How many moles are in 36 g of water (M = 18 g/mol)?', options: ['0.5', '1', '2', '18'], answer: 2, explanation: 'n = 36 / 18 = 2 mol.' },
      { question: 'What is the shape of a water molecule?', options: ['Linear', 'Bent (V-shaped)', 'Tetrahedral', 'Trigonal planar'], answer: 1, explanation: 'Two bonding and two lone pairs give a bent shape (~104.5°).' },
      { question: 'Metallic bonding involves…', options: ['Shared electron pairs', 'Delocalised electrons', 'Hydrogen bonds', 'Transferred electrons only'], answer: 1, explanation: 'Positive ions sit in a sea of delocalised electrons.' },
      { question: 'Which element is the most electronegative?', options: ['Oxygen', 'Chlorine', 'Fluorine', 'Nitrogen'], answer: 2, explanation: 'Fluorine has the highest electronegativity (4.0).' },
      { question: 'The bond angle in CO₂ is…', options: ['90°', '109.5°', '120°', '180°'], answer: 3, explanation: 'Two electron domains → linear, 180°.' },
    ],
  },
  {
    id: 'phys',
    name: 'Physics',
    group: 'Group 4 · Sciences',
    emoji: '🪐',
    color: '#8B5CF6',
    lessons: [
      {
        id: 'phys-kinematics',
        title: 'Kinematics',
        steps: [
          'Kinematics describes motion using displacement, velocity and acceleration. Displacement and velocity are vectors, so direction matters.',
          'For constant acceleration we use the SUVAT equations. For example, v equals u plus a t.',
          'Another useful one: s equals u t plus one half a t squared, which gives displacement when you know the time.',
          'On a velocity–time graph, the gradient is acceleration and the area under the line is displacement.',
          'For projectiles, treat horizontal and vertical motion separately. Horizontal velocity stays constant; vertically the object accelerates at 9.81 metres per second squared downwards.',
        ],
      },
      {
        id: 'phys-energy',
        title: 'Work, Energy & Power',
        steps: [
          'Work done equals force times displacement in the direction of the force: W equals F s cos theta.',
          'Kinetic energy is one half m v squared. Gravitational potential energy change is m g delta h.',
          'Energy is always conserved: in a closed system, the total energy before equals the total energy after.',
          'Power is the rate of doing work: P equals work divided by time, which also equals force times velocity.',
          'Efficiency is useful output divided by total input. It can never be more than 100 percent.',
        ],
      },
    ],
    flashcards: [
      { front: 'SUVAT: find v without s', back: 'v = u + at' },
      { front: 'Gradient of a v–t graph', back: 'Acceleration' },
      { front: 'Area under a v–t graph', back: 'Displacement' },
      { front: 'Kinetic energy formula', back: 'Eₖ = ½mv²' },
      { front: 'Power in terms of F and v', back: 'P = Fv' },
      { front: 'Newton’s 2nd law', back: 'F = ma (resultant force = rate of change of momentum)' },
    ],
    quiz: [
      { question: 'A car accelerates from 0 to 20 m/s in 4 s. Its acceleration is…', options: ['4 m/s²', '5 m/s²', '20 m/s²', '80 m/s²'], answer: 1, explanation: 'a = Δv / t = 20 / 4 = 5 m/s².' },
      { question: 'Which quantity is a scalar?', options: ['Velocity', 'Force', 'Speed', 'Displacement'], answer: 2, explanation: 'Speed has magnitude only.' },
      { question: 'KE of a 2 kg ball moving at 3 m/s?', options: ['3 J', '6 J', '9 J', '18 J'], answer: 2, explanation: '½ × 2 × 3² = 9 J.' },
      { question: 'In projectile motion (no air resistance), horizontal velocity…', options: ['Increases', 'Decreases', 'Stays constant', 'Becomes zero'], answer: 2, explanation: 'No horizontal force acts, so it stays constant.' },
      { question: 'Unit of power?', options: ['Joule', 'Newton', 'Watt', 'Pascal'], answer: 2, explanation: '1 W = 1 J/s.' },
    ],
  },
  {
    id: 'math',
    name: 'Maths AA',
    group: 'Group 5 · Mathematics',
    emoji: '📐',
    color: '#F59E0B',
    lessons: [
      {
        id: 'math-diff',
        title: 'Introduction to Differentiation',
        steps: [
          'Differentiation finds the gradient of a curve at any point. The derivative of y with respect to x is written d y by d x.',
          'The power rule: the derivative of x to the n is n times x to the n minus one. So the derivative of x cubed is 3 x squared.',
          'The derivative of a constant is zero, and you can differentiate a sum term by term.',
          'At a stationary point the gradient is zero. Solve d y by d x equals zero to find it.',
          'Use the second derivative to classify it: positive means a minimum, negative means a maximum.',
        ],
      },
      {
        id: 'math-seq',
        title: 'Arithmetic & Geometric Sequences',
        steps: [
          'An arithmetic sequence adds the same common difference d each time. The nth term is u one plus n minus one times d.',
          'The sum of the first n terms of an arithmetic series is n over two, times two u one plus n minus one d.',
          'A geometric sequence multiplies by a common ratio r each time. The nth term is u one times r to the power n minus one.',
          'A geometric series converges to a sum to infinity only when the absolute value of r is less than one. That sum is u one over one minus r.',
          'Exam tip: these formulas are in the formula booklet, but you must know when to use each one.',
        ],
      },
    ],
    flashcards: [
      { front: 'd/dx (xⁿ)', back: 'nxⁿ⁻¹' },
      { front: 'Condition for a stationary point', back: 'dy/dx = 0' },
      { front: 'f″(x) > 0 at a stationary point means…', back: 'Local minimum' },
      { front: 'nth term of an arithmetic sequence', back: 'uₙ = u₁ + (n − 1)d' },
      { front: 'Sum to infinity of a geometric series', back: 'S∞ = u₁ / (1 − r), for |r| < 1' },
      { front: 'd/dx (eˣ)', back: 'eˣ' },
    ],
    quiz: [
      { question: 'Differentiate y = 4x³', options: ['12x²', '4x²', '12x³', 'x⁴'], answer: 0, explanation: '3 × 4x² = 12x².' },
      { question: 'The 10th term of 3, 7, 11, … is', options: ['39', '40', '43', '37'], answer: 0, explanation: '3 + 9 × 4 = 39.' },
      { question: 'Sum to infinity of 8 + 4 + 2 + …', options: ['14', '16', '12', 'It diverges'], answer: 1, explanation: '8 / (1 − ½) = 16.' },
      { question: 'If f″(a) < 0 at a stationary point, it is a…', options: ['Minimum', 'Maximum', 'Point of inflection', 'Root'], answer: 1, explanation: 'Negative second derivative → concave down → maximum.' },
      { question: 'd/dx (5) =', options: ['5', '1', '0', '5x'], answer: 2, explanation: 'The derivative of a constant is 0.' },
    ],
  },
  {
    id: 'econ',
    name: 'Economics',
    group: 'Group 3 · Individuals & Societies',
    emoji: '📈',
    color: '#EC4899',
    lessons: [
      {
        id: 'econ-sd',
        title: 'Supply & Demand',
        steps: [
          'The law of demand says that as price rises, quantity demanded falls, ceteris paribus, meaning all other things being equal.',
          'A change in price causes a movement along the demand curve. A change in a non-price determinant, like income or tastes, shifts the whole curve.',
          'The law of supply says that as price rises, quantity supplied rises, because producing becomes more profitable.',
          'Market equilibrium is where quantity demanded equals quantity supplied. There is no shortage and no surplus.',
          'Exam tip: always draw clear, fully labelled diagrams: price and quantity on the axes, curves labelled, and the equilibrium marked.',
        ],
      },
      {
        id: 'econ-elasticity',
        title: 'Price Elasticity of Demand',
        steps: [
          'Price elasticity of demand, or PED, measures how responsive quantity demanded is to a change in price.',
          'PED equals the percentage change in quantity demanded divided by the percentage change in price.',
          'If the absolute value is greater than one, demand is elastic. If it is less than one, demand is inelastic.',
          'Determinants include the number of substitutes, whether the good is a necessity, the proportion of income spent on it, and time.',
          'Firms use PED to set prices: raising the price of an inelastic good increases total revenue.',
        ],
      },
    ],
    flashcards: [
      { front: 'Ceteris paribus', back: 'All other things being equal.' },
      { front: 'Movement vs shift of demand', back: 'Price change → movement; non-price determinant → shift.' },
      { front: 'PED formula', back: '%Δ Quantity demanded ÷ %Δ Price' },
      { front: '|PED| > 1 means…', back: 'Price elastic demand' },
      { front: 'Market equilibrium', back: 'Where Qd = Qs; no excess demand or supply.' },
      { front: 'Opportunity cost', back: 'The value of the next best alternative given up.' },
    ],
    quiz: [
      { question: 'Price rises 10%, quantity demanded falls 20%. PED is…', options: ['0.5', '−2 (elastic)', '−0.5 (inelastic)', '2 (inelastic)'], answer: 1, explanation: '−20% ÷ 10% = −2, |2| > 1 → elastic.' },
      { question: 'An increase in consumer income (normal good) causes…', options: ['Movement along D', 'D shifts right', 'D shifts left', 'S shifts right'], answer: 1, explanation: 'Income is a non-price determinant → demand shifts right.' },
      { question: 'At a price above equilibrium there is…', options: ['Excess demand', 'Excess supply', 'Equilibrium', 'No trade'], answer: 1, explanation: 'Qs > Qd at high prices → surplus.' },
      { question: 'Which good is likely to have inelastic demand?', options: ['A brand of cereal', 'Petrol', 'Concert tickets', 'Designer jeans'], answer: 1, explanation: 'Few close substitutes and a necessity.' },
      { question: 'Opportunity cost is…', options: ['The price paid', 'The next best alternative forgone', 'Total cost', 'Sunk cost'], answer: 1, explanation: 'It is the value of the best option given up.' },
    ],
  },
  {
    id: 'hist',
    name: 'History',
    group: 'Group 3 · Individuals & Societies',
    emoji: '🏛️',
    color: '#B45309',
    lessons: [
      {
        id: 'hist-coldwar',
        title: 'Origins of the Cold War',
        steps: [
          'The Cold War was a period of rivalry between the United States and the Soviet Union from around 1945 to 1991.',
          'Ideological differences were central: American capitalism and liberal democracy against Soviet communism and a one-party state.',
          'At the Yalta and Potsdam conferences in 1945, disagreements over the future of Germany and Eastern Europe grew.',
          'In 1947, the Truman Doctrine promised support to countries resisting communism, and the Marshall Plan offered economic aid to rebuild Europe.',
          'Exam tip: IB essays reward historiography. Mention orthodox, revisionist and post-revisionist views on who was responsible.',
        ],
      },
      {
        id: 'hist-essay',
        title: 'Writing an IB History Essay',
        steps: [
          'Start with a clear introduction that defines key terms and states your argument directly.',
          'Each body paragraph should open with an analytical topic sentence that links back to the question.',
          'Support every point with specific evidence: dates, names, statistics and events.',
          'Weigh different perspectives and include historians’ views where they genuinely support your analysis.',
          'Finish with a conclusion that answers the question and does not introduce new evidence.',
        ],
      },
    ],
    flashcards: [
      { front: 'Truman Doctrine (1947)', back: 'US pledge to support free peoples resisting communist subjugation — the start of containment.' },
      { front: 'Marshall Plan', back: 'US economic aid (~$13 billion) to rebuild Western Europe after WWII.' },
      { front: 'Berlin Blockade dates', back: 'June 1948 – May 1949' },
      { front: 'Orthodox view of the Cold War', back: 'Blames Soviet expansionism.' },
      { front: 'Revisionist view of the Cold War', back: 'Blames US economic imperialism and hostility.' },
      { front: 'When did the USSR collapse?', back: 'December 1991' },
    ],
    quiz: [
      { question: 'Which conference took place in February 1945?', options: ['Potsdam', 'Yalta', 'Tehran', 'Versailles'], answer: 1, explanation: 'Yalta: February 1945; Potsdam: July–August 1945.' },
      { question: 'The policy of stopping the spread of communism was called…', options: ['Détente', 'Appeasement', 'Containment', 'Glasnost'], answer: 2, explanation: 'Containment, articulated by George Kennan and the Truman Doctrine.' },
      { question: 'The Berlin Airlift was a response to…', options: ['The Berlin Wall', 'The Berlin Blockade', 'The Cuban Missile Crisis', 'The Korean War'], answer: 1, explanation: 'Western allies flew supplies into West Berlin, 1948–49.' },
      { question: 'Revisionist historians mainly blame…', options: ['The USSR', 'The USA', 'Britain', 'No one'], answer: 1, explanation: 'Revisionists, e.g. William Appleman Williams, emphasise US actions.' },
      { question: 'A good IB essay conclusion should…', options: ['Add new evidence', 'Answer the question', 'Repeat the introduction word for word', 'Be skipped'], answer: 1, explanation: 'Conclude with a direct, supported judgement.' },
    ],
  },
];

export function getSubject(id: string | undefined) {
  return SUBJECTS.find((s) => s.id === id) ?? SUBJECTS[0];
}
