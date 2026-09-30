import type { SubjectContentFile } from '../types';
import { C } from './helpers';

const content: SubjectContentFile = {
  units: {
    S1: [
      'Structure 1 builds the particle model of matter: atoms, their electrons, and how we count particles using the mole.',
      'You will study atomic structure, isotopes, electron configurations, the mole concept and ideal gases.',
      'Calculations are central here: mass, moles, molar mass, and gas volumes. Always show units and significant figures.',
    ],
    S2: [
      'Structure 2 explains how atoms bond: the ionic, covalent and metallic models, and how bonding determines properties.',
      'You will use Lewis formulas and VSEPR theory to predict shapes, and link intermolecular forces to boiling points.',
      'It ends with materials, like alloys and polymers, and the bonding triangle.',
    ],
    S3: [
      'Structure 3 classifies matter: the periodic table and its trends, and organic compounds by functional group.',
      'Learn the periodic trends in radius, ionisation energy and electronegativity, and the IUPAC naming rules for organic molecules.',
    ],
    R1: [
      'Reactivity 1 asks what drives chemical reactions: energy changes.',
      'You will measure enthalpy changes by calorimetry, use Hess’s law and bond enthalpies, and compare fuels. At HL, entropy and Gibbs energy decide whether reactions are spontaneous.',
    ],
    R2: [
      'Reactivity 2 covers how much, how fast and how far reactions go.',
      'You will do stoichiometry and yield calculations, study rates using collision theory, and explore dynamic equilibrium and Le Chatelier’s principle.',
    ],
    R3: [
      'Reactivity 3 looks at the four types of reaction mechanism: proton transfer, electron transfer, electron sharing and electron-pair sharing.',
      'These cover acids and bases, redox and electrochemistry, radical reactions, and nucleophiles and electrophiles in organic chemistry.',
    ],
  },
  chapters: {
    'S1.1': C(
      [
        'Matter is made of particles: atoms, molecules or ions. Elements contain one type of atom; compounds contain atoms of different elements chemically bonded in fixed ratios.',
        'Mixtures contain substances not chemically combined. They can be separated by filtration, crystallisation, distillation, paper chromatography and solvation.',
        'The kinetic molecular theory explains the three states of matter: particles in solids vibrate in fixed positions; in liquids they move past each other; in gases they move freely and fast.',
        'Temperature in kelvin is proportional to the average kinetic energy of particles. Kelvin equals degrees Celsius plus 273.15.',
      ],
      [
        ['Compound vs mixture', 'Compound: chemically bonded in fixed ratio. Mixture: not chemically combined.'],
        ['Kelvin conversion', 'K = °C + 273.15'],
        ['Distillation', 'Separates liquids by boiling point.'],
        ['Kelvin temperature', 'Proportional to average kinetic energy of particles.'],
      ],
      [
        ['25 °C in kelvin is…', ['−248 K', '273 K', '298 K', '25 K'], 2, '25 + 273 = 298 K.'],
        ['Which method separates dyes in ink?', ['Filtration', 'Paper chromatography', 'Crystallisation', 'Magnetism'], 1, 'Dyes travel different distances on the paper.'],
        ['Salt water is a…', ['Compound', 'Element', 'Mixture', 'Pure substance'], 2, 'Salt and water are not chemically bonded.'],
      ],
    ),
    'S1.2': C(
      [
        'Atoms have a small, dense nucleus containing protons and neutrons, surrounded by electrons.',
        'The atomic number Z is the number of protons. The mass number A is protons plus neutrons.',
        'Isotopes are atoms of the same element with different numbers of neutrons. They have the same chemical properties but different physical properties, like mass.',
        'Relative atomic mass is the weighted average of isotope masses. At HL, mass spectrometry gives isotope abundances.',
      ],
      [
        ['Atomic number (Z)', 'Number of protons.'],
        ['Mass number (A)', 'Protons + neutrons.'],
        ['Isotopes', 'Same element, different numbers of neutrons.'],
        ['Relative atomic mass', 'Weighted average mass of an element’s isotopes.'],
      ],
      [
        ['Chlorine-37 has 17 protons. How many neutrons?', ['17', '20', '37', '54'], 1, '37 − 17 = 20.'],
        ['Isotopes of an element differ in…', ['Protons', 'Electrons', 'Neutrons', 'Chemical properties'], 2, 'Same Z, different neutron number.'],
        ['Chlorine is 75% ³⁵Cl and 25% ³⁷Cl. Its Ar is…', ['35.0', '35.5', '36.0', '37.0'], 1, '(0.75 × 35) + (0.25 × 37) = 35.5.'],
      ],
    ),
    'S1.3': C(
      [
        'Electrons occupy energy levels. When they fall from higher to lower levels, they emit light of specific frequencies, giving line emission spectra.',
        'In the hydrogen spectrum, lines converge at higher frequencies, showing energy levels get closer together.',
        'Electrons fill sublevels, s, p, d and f, in order of increasing energy, following the Aufbau principle, Pauli exclusion and Hund’s rule. For example, sodium is 1s2 2s2 2p6 3s1.',
        'Chromium and copper are exceptions, with a half-filled or full 3d sublevel. At HL, ionisation energies give evidence for energy levels and sublevels.',
      ],
      [
        ['Aufbau principle', 'Electrons fill the lowest energy orbitals first.'],
        ['Hund’s rule', 'Electrons occupy orbitals singly with parallel spins before pairing.'],
        ['Electron configuration of Na', '1s² 2s² 2p⁶ 3s¹'],
        ['Line emission spectrum', 'Discrete lines from electrons falling between energy levels.'],
      ],
      [
        ['The electron configuration of oxygen (Z = 8) is…', ['1s² 2s² 2p⁴', '1s² 2s⁴ 2p²', '1s² 2p⁶', '1s² 2s² 2p⁶'], 0, 'Eight electrons: 2 + 2 + 4.'],
        ['Emission spectra consist of lines because…', ['Energy levels are fixed', 'Electrons are continuous', 'Atoms are hot', 'Light is scattered'], 0, 'Only specific energy differences are possible.'],
        ['The configuration of copper is unusual because…', ['3d is full: [Ar] 3d¹⁰ 4s¹', '4s is full', 'It has no d electrons', 'It is a noble gas'], 0, 'A full 3d sublevel is more stable.'],
      ],
    ),
    'S1.4': C(
      [
        'A mole is an amount of substance containing 6.02 × 10²³ particles, Avogadro’s constant.',
        'Moles equal mass divided by molar mass, n equals m over M. For example, 18 grams of water is one mole.',
        'Empirical formula gives the simplest whole-number ratio of atoms; molecular formula gives the actual numbers.',
        'Concentration equals moles divided by volume in cubic decimetres. At STP, one mole of gas occupies 22.7 cubic decimetres, as given in the data booklet.',
      ],
      [
        ['Avogadro’s constant', '6.02 × 10²³ mol⁻¹'],
        ['Moles, mass, molar mass', 'n = m / M'],
        ['Concentration', 'c = n / V (V in dm³)'],
        ['Empirical formula', 'The simplest whole-number ratio of atoms in a compound.'],
      ],
      [
        ['How many moles are in 36 g of water (M = 18 g/mol)?', ['0.5', '1', '2', '18'], 2, 'n = 36 / 18 = 2 mol.'],
        ['0.5 mol of NaCl in 250 cm³ gives a concentration of…', ['0.125 mol dm⁻³', '2.0 mol dm⁻³', '0.5 mol dm⁻³', '125 mol dm⁻³'], 1, '250 cm³ = 0.25 dm³; 0.5 / 0.25 = 2.0.'],
        ['The empirical formula of C₆H₁₂O₆ is…', ['C₆H₁₂O₆', 'CH₂O', 'C₃H₆O₃', 'CHO'], 1, 'Divide by 6: CH₂O.'],
      ],
    ),
    'S1.5': C(
      [
        'An ideal gas has particles of negligible volume, no intermolecular forces, and perfectly elastic collisions.',
        'Real gases deviate from ideal behaviour at high pressure and low temperature, when particle volume and attractions matter.',
        'Gas laws: at constant temperature, pressure is inversely proportional to volume; at constant pressure, volume is proportional to temperature in kelvin.',
        'The ideal gas equation is PV equals nRT, with pressure in pascals, volume in cubic metres and temperature in kelvin.',
      ],
      [
        ['Ideal gas equation', 'PV = nRT'],
        ['Boyle’s law', 'P ∝ 1/V at constant temperature.'],
        ['When real gases deviate most', 'High pressure and low temperature.'],
        ['Units for PV = nRT', 'P in Pa, V in m³, T in K, R = 8.31 J K⁻¹ mol⁻¹.'],
      ],
      [
        ['Doubling the pressure of a gas at constant T makes its volume…', ['Double', 'Halve', 'Stay the same', 'Quadruple'], 1, 'Pressure and volume are inversely proportional.'],
        ['Real gases behave most ideally at…', ['High P, low T', 'Low P, high T', 'High P, high T', 'Low P, low T'], 1, 'Particles are far apart and move fast.'],
        ['In PV = nRT, temperature must be in…', ['°C', 'K', '°F', 'J'], 1, 'Kelvin is the absolute scale.'],
      ],
    ),
    'S2.1': C(
      [
        'Ionic bonding is the electrostatic attraction between oppositely charged ions, usually a metal and a non-metal.',
        'Metals lose electrons to form positive cations; non-metals gain electrons to form negative anions. Polyatomic ions include sulfate, nitrate, carbonate and ammonium.',
        'Ionic compounds form giant lattices, so they have high melting points. They conduct electricity when molten or dissolved, because ions can move.',
        'Lattice enthalpy measures the strength of the lattice; it is larger for smaller ions with higher charges.',
      ],
      [
        ['Ionic bond', 'Electrostatic attraction between oppositely charged ions.'],
        ['Why ionic compounds conduct when molten', 'Ions are free to move.'],
        ['Formula of the sulfate ion', 'SO₄²⁻'],
        ['Lattice enthalpy is higher when…', 'Ions are smaller and more highly charged.'],
      ],
      [
        ['The formula of magnesium chloride is…', ['MgCl', 'MgCl₂', 'Mg₂Cl', 'Mg₂Cl₃'], 1, 'Mg²⁺ needs two Cl⁻ ions.'],
        ['Solid sodium chloride doesn’t conduct because…', ['It has no ions', 'Its ions can’t move', 'It has free electrons', 'It is covalent'], 1, 'Ions are fixed in the lattice.'],
        ['Which has the highest lattice enthalpy?', ['NaCl', 'MgO', 'KBr', 'NaBr'], 1, 'Mg²⁺ and O²⁻ are small and doubly charged.'],
      ],
    ),
    'S2.2': C(
      [
        'A covalent bond is the electrostatic attraction between a shared pair of electrons and the nuclei. Lewis formulas show bonding and lone pairs.',
        'VSEPR theory predicts shape: electron domains repel and spread out. Four bonding domains give a tetrahedral shape, 109.5 degrees; water, with two lone pairs, is bent.',
        'Bond polarity comes from differences in electronegativity. A molecule is polar if its bond dipoles don’t cancel.',
        'Intermolecular forces, London dispersion forces, dipole-dipole forces and hydrogen bonds, determine boiling points. Giant covalent structures like diamond and silicon dioxide have very high melting points.',
      ],
      [
        ['Shape and angle of CH₄', 'Tetrahedral, 109.5°'],
        ['Electronegativity', 'The ability of an atom to attract a shared pair of electrons.'],
        ['Hydrogen bonding', 'Between H bonded to N, O or F and a lone pair on another N, O or F.'],
        ['Why CO₂ is non-polar', 'It is linear, so its bond dipoles cancel.'],
      ],
      [
        ['What is the shape of a water molecule?', ['Linear', 'Bent (V-shaped)', 'Tetrahedral', 'Trigonal planar'], 1, 'Two bonding and two lone pairs give a bent shape (~104.5°).'],
        ['Why does water have a high boiling point for its size?', ['London forces', 'Hydrogen bonding', 'Ionic bonds', 'Metallic bonds'], 1, 'Hydrogen bonds between molecules need extra energy to break.'],
        ['The bond angle in CO₂ is…', ['90°', '109.5°', '120°', '180°'], 3, 'Two electron domains → linear.'],
      ],
    ),
    'S2.3': C(
      [
        'Metallic bonding is the electrostatic attraction between a lattice of positive metal ions and a sea of delocalised electrons.',
        'Delocalised electrons can move, so metals conduct electricity and heat.',
        'Layers of ions can slide over each other without breaking bonds, so metals are malleable and ductile.',
        'Bond strength increases with more delocalised electrons and smaller ions, so magnesium has a higher melting point than sodium. Transition metals have strong metallic bonding because d electrons also delocalise.',
      ],
      [
        ['Metallic bond', 'Attraction between positive ions and delocalised electrons.'],
        ['Why metals conduct', 'Delocalised electrons can move through the structure.'],
        ['Why metals are malleable', 'Layers of ions slide without breaking the metallic bond.'],
        ['Stronger metallic bonding', 'More delocalised electrons and smaller ions.'],
      ],
      [
        ['Which metal has the strongest metallic bonding?', ['Na', 'Mg', 'Al', 'K'], 2, 'Al³⁺ is small and gives three delocalised electrons.'],
        ['Metals are malleable because…', ['They have free ions', 'Layers can slide', 'They are brittle', 'Bonds are directional'], 1, 'The electron sea holds layers together as they move.'],
        ['Electricity is conducted in metals by…', ['Ions', 'Protons', 'Delocalised electrons', 'Neutrons'], 2, 'Electrons move through the lattice.'],
      ],
    ),
    'S2.4': C(
      [
        'Bonding is often not purely ionic, covalent or metallic. The bonding triangle places substances by electronegativity difference and average electronegativity.',
        'Alloys are mixtures of a metal with other elements. Different sized atoms disrupt the layers, making alloys harder and stronger than pure metals, like steel.',
        'Polymers are long chains of repeating units. Addition polymers, like polyethene, form from alkenes; at HL, condensation polymers like nylon and polyesters release small molecules.',
        'Plastics are durable, which makes them useful but hard to degrade. Recycling and biodegradable polymers reduce environmental harm.',
      ],
      [
        ['Bonding triangle', 'Classifies bonding using electronegativity difference and average.'],
        ['Why alloys are stronger', 'Different sized atoms stop layers sliding easily.'],
        ['Addition polymer', 'Formed from alkene monomers, e.g. polyethene from ethene.'],
        ['Condensation polymer', 'Formed with loss of a small molecule, e.g. nylon.'],
      ],
      [
        ['Steel is harder than pure iron because…', ['It has more electrons', 'Carbon atoms disrupt the layers', 'It is ionic', 'It is a compound'], 1, 'Layers can’t slide as easily.'],
        ['Polyethene is made from…', ['Ethane', 'Ethene', 'Ethanol', 'Glucose'], 1, 'The C=C double bond opens up.'],
        ['A large electronegativity difference means bonding is mainly…', ['Metallic', 'Ionic', 'Non-polar covalent', 'Hydrogen'], 1, 'Electrons are transferred rather than shared.'],
      ],
    ),
    'S3.1': C(
      [
        'The periodic table is arranged by atomic number. Periods are rows; groups are columns. Blocks, s, p, d and f, show which sublevel is being filled.',
        'Across a period, atomic radius decreases and first ionisation energy and electronegativity increase, because nuclear charge increases while shielding stays similar.',
        'Down a group, atomic radius increases and ionisation energy decreases because of extra shells.',
        'Group 1 metals get more reactive down the group; group 17 halogens get less reactive. Metal oxides are basic; non-metal oxides are acidic. At HL, transition elements show variable oxidation states and coloured complexes.',
      ],
      [
        ['Trend in atomic radius across a period', 'Decreases (greater nuclear charge).'],
        ['Trend in ionisation energy down a group', 'Decreases (electrons further from nucleus).'],
        ['Reactivity of halogens down group 17', 'Decreases.'],
        ['Metal oxides', 'Basic: they react with acids.'],
      ],
      [
        ['Which has the largest atomic radius?', ['Na', 'Mg', 'Cl', 'Ar'], 0, 'Radius decreases across period 3.'],
        ['Which is most reactive?', ['Li', 'Na', 'K', 'Cs'], 3, 'Group 1 reactivity increases down the group.'],
        ['Sulfur dioxide dissolves in water to form…', ['A basic solution', 'An acidic solution', 'A neutral solution', 'A metal'], 1, 'Non-metal oxides are acidic.'],
      ],
    ),
    'S3.2': C(
      [
        'Organic compounds are grouped into homologous series with the same functional group and general formula, like alkanes, alkenes, alcohols, aldehydes, ketones and carboxylic acids.',
        'Down a homologous series, boiling point increases because London dispersion forces get stronger.',
        'IUPAC naming uses the longest carbon chain, a stem like meth, eth, prop, but, and a suffix for the functional group, such as ane, ene, ol, al, one and oic acid.',
        'Structural isomers have the same molecular formula but different structures. Alcohols can be primary, secondary or tertiary. At HL, stereoisomers include cis-trans and optical isomers.',
      ],
      [
        ['Homologous series', 'Same functional group and general formula; each differs by CH₂.'],
        ['Suffix for alcohols', '-ol, e.g. ethanol.'],
        ['Structural isomers', 'Same molecular formula, different structural formula.'],
        ['Carboxylic acid functional group', '–COOH'],
      ],
      [
        ['The name of CH₃CH₂CH₂OH is…', ['Propan-1-ol', 'Propanal', 'Propanoic acid', 'Propane'], 0, 'Three carbons with –OH on carbon 1.'],
        ['Boiling point increases down the alkanes because…', ['Hydrogen bonding increases', 'London forces increase', 'They become ionic', 'They are more polar'], 1, 'Bigger molecules have more electrons.'],
        ['Butane and methylpropane are…', ['The same compound', 'Structural isomers', 'Different homologous series', 'Stereoisomers'], 1, 'Both are C₄H₁₀ with different structures.'],
      ],
    ),
    'R1.1': C(
      [
        'Chemical reactions involve energy changes. In exothermic reactions, energy is released and the surroundings warm up, so ΔH is negative. In endothermic reactions, energy is absorbed and ΔH is positive.',
        'Energy profiles show the reactants, products and activation energy.',
        'In calorimetry, heat energy Q equals m c ΔT, where m is the mass of water, c its specific heat capacity, 4.18 joules per gram per kelvin, and ΔT the temperature change.',
        'The enthalpy change equals minus Q divided by moles reacting. Heat loss to the surroundings is the main source of error.',
      ],
      [
        ['Exothermic', 'Releases heat; ΔH is negative.'],
        ['Heat energy formula', 'Q = mcΔT'],
        ['Specific heat capacity of water', '4.18 J g⁻¹ K⁻¹'],
        ['Main error in calorimetry', 'Heat loss to the surroundings.'],
      ],
      [
        ['Combustion is…', ['Endothermic', 'Exothermic', 'Neither', 'Always reversible'], 1, 'It releases heat.'],
        ['50 g of water rises by 10 K. Q is…', ['500 J', '2090 J', '4180 J', '209 J'], 1, 'Q = 50 × 4.18 × 10 = 2090 J.'],
        ['An endothermic reaction has ΔH that is…', ['Negative', 'Positive', 'Zero', 'Undefined'], 1, 'Energy is absorbed from the surroundings.'],
      ],
    ),
    'R1.2': C(
      [
        'Hess’s law says the enthalpy change of a reaction is the same whatever route is taken, as long as the start and end are the same.',
        'This lets us calculate enthalpy changes that can’t be measured directly, using energy cycles.',
        'Average bond enthalpies can estimate ΔH: bonds broken in reactants minus bonds formed in products. Breaking bonds is endothermic; making bonds is exothermic.',
        'At HL, standard enthalpies of formation and combustion, and Born-Haber cycles for lattice enthalpy, are used.',
      ],
      [
        ['Hess’s law', 'ΔH is independent of the route taken.'],
        ['Bond enthalpy calculation', 'ΔH = Σ(bonds broken) − Σ(bonds formed)'],
        ['Breaking bonds is…', 'Endothermic (needs energy).'],
        ['Why bond enthalpy values are approximate', 'They are averages across many compounds.'],
      ],
      [
        ['Bonds broken need 1000 kJ; bonds formed release 1300 kJ. ΔH is…', ['+300 kJ', '−300 kJ', '+2300 kJ', '−2300 kJ'], 1, '1000 − 1300 = −300 kJ: exothermic.'],
        ['Hess’s law works because enthalpy is a…', ['Rate', 'State function', 'Catalyst', 'Constant'], 1, 'It depends only on initial and final states.'],
        ['Making bonds is…', ['Endothermic', 'Exothermic', 'Neither', 'Impossible'], 1, 'Energy is released when bonds form.'],
      ],
    ),
    'R1.3': C(
      [
        'Fuels release energy when they burn. Complete combustion of hydrocarbons gives carbon dioxide and water.',
        'Incomplete combustion, with limited oxygen, produces carbon monoxide, which is toxic, and carbon soot.',
        'Fossil fuels are non-renewable and release CO₂, contributing to climate change. Biofuels are renewable, made from recent biomass, and are closer to carbon neutral.',
        'Fuel cells convert chemical energy directly into electricity, such as hydrogen fuel cells that produce only water.',
      ],
      [
        ['Complete combustion products', 'Carbon dioxide and water.'],
        ['Incomplete combustion products', 'Carbon monoxide and/or carbon, plus water.'],
        ['Biofuel', 'A renewable fuel made from recent biomass, e.g. bioethanol.'],
        ['Hydrogen fuel cell product', 'Water.'],
      ],
      [
        ['Carbon monoxide is formed when…', ['Oxygen is plentiful', 'Oxygen is limited', 'Fuel is wet', 'Temperature is low'], 1, 'Incomplete combustion occurs.'],
        ['Why are biofuels considered more sustainable?', ['They produce no CO₂', 'They are renewable and absorb CO₂ while growing', 'They are fossil fuels', 'They don’t burn'], 1, 'Plants absorb CO₂ as they grow.'],
        ['Complete combustion of methane gives…', ['CO and H₂', 'CO₂ and H₂O', 'C and H₂O', 'CH₃OH'], 1, 'CH₄ + 2O₂ → CO₂ + 2H₂O.'],
      ],
    ),
    'R1.4': C(
      [
        'Entropy, S, is a measure of the dispersal of energy and matter, often described as disorder. Gases have much higher entropy than liquids and solids.',
        'Entropy increases when a solid dissolves, a liquid boils, or the number of gas molecules increases.',
        'Gibbs energy, ΔG equals ΔH minus TΔS, decides whether a reaction is spontaneous. If ΔG is negative, the reaction is spontaneous.',
        'Temperature matters: an endothermic reaction with increasing entropy becomes spontaneous at high temperature. ΔG is also related to the equilibrium constant.',
      ],
      [
        ['Entropy', 'A measure of dispersal of energy and matter.'],
        ['Gibbs equation', 'ΔG = ΔH − TΔS'],
        ['Spontaneous reaction', 'ΔG < 0'],
        ['Entropy increases when…', 'Gas molecules increase, solids dissolve, liquids boil.'],
      ],
      [
        ['Which change increases entropy?', ['Water freezing', 'Steam condensing', 'Ice melting', 'Gas forming a solid'], 2, 'Liquid is more disordered than solid.'],
        ['A reaction has ΔH > 0 and ΔS > 0. It is spontaneous…', ['At all temperatures', 'At high temperatures', 'At low temperatures', 'Never'], 1, 'TΔS must exceed ΔH.'],
        ['A reaction is spontaneous when ΔG is…', ['Positive', 'Negative', 'Zero', 'Greater than ΔH'], 1, 'Negative ΔG means spontaneous.'],
      ],
    ),
    'R2.1': C(
      [
        'Balanced equations show mole ratios. Use them to find the amounts of reactants and products.',
        'The limiting reactant is used up first and determines the amount of product. The other reactant is in excess.',
        'Percentage yield equals actual yield divided by theoretical yield, times 100. Yields are below 100 percent because of incomplete reactions, side reactions and losses.',
        'Atom economy equals the molar mass of the desired product divided by the total molar mass of all products, times 100. High atom economy means less waste.',
      ],
      [
        ['Limiting reactant', 'The reactant that is completely used up first.'],
        ['Percentage yield', '(Actual ÷ theoretical yield) × 100'],
        ['Atom economy', '(Mr of desired product ÷ total Mr of products) × 100'],
        ['Why yields are below 100%', 'Incomplete reaction, side reactions, loss during transfer.'],
      ],
      [
        ['Theoretical yield 20 g, actual 15 g. Percentage yield?', ['15%', '75%', '133%', '25%'], 1, '15 ÷ 20 × 100 = 75%.'],
        ['2H₂ + O₂ → 2H₂O. 4 mol H₂ and 1 mol O₂. Limiting reactant?', ['H₂', 'O₂', 'H₂O', 'Neither'], 1, '4 mol H₂ needs 2 mol O₂, but only 1 mol is present.'],
        ['A reaction with only one product has atom economy of…', ['50%', '100%', '0%', 'It depends on yield'], 1, 'All atoms end up in the desired product.'],
      ],
    ),
    'R2.2': C(
      [
        'Rate of reaction is the change in concentration of a reactant or product per unit time. It can be measured by gas volume, mass loss, colour change or conductivity.',
        'Collision theory: particles must collide with energy at least equal to the activation energy and with the correct orientation.',
        'Rate increases with higher temperature, concentration, pressure and surface area, and with a catalyst. A Maxwell-Boltzmann distribution shows why temperature has a large effect.',
        'A catalyst provides an alternative pathway with lower activation energy. At HL, rate equations, orders of reaction, rate-determining steps and the Arrhenius equation are studied.',
      ],
      [
        ['Activation energy', 'The minimum energy for a collision to lead to reaction.'],
        ['How a catalyst works', 'Provides an alternative pathway with lower activation energy.'],
        ['Why temperature increases rate', 'More particles have energy ≥ Ea, and collisions are more frequent.'],
        ['Factors affecting rate', 'Temperature, concentration, pressure, surface area, catalyst.'],
      ],
      [
        ['Powdered marble reacts faster than lumps because of…', ['Higher temperature', 'Larger surface area', 'A catalyst', 'Lower Ea'], 1, 'More particles are exposed to collisions.'],
        ['A catalyst…', ['Is used up', 'Raises Ea', 'Lowers Ea', 'Changes ΔH'], 2, 'It provides a lower-energy pathway.'],
        ['On a Maxwell-Boltzmann curve at higher temperature…', ['The peak moves right and lowers', 'The peak moves left', 'The area increases', 'Nothing changes'], 0, 'More particles have higher energies.'],
      ],
    ),
    'R2.3': C(
      [
        'Reversible reactions in a closed system reach dynamic equilibrium: forward and backward rates are equal, and concentrations stay constant.',
        'The equilibrium constant Kc is the concentrations of products over reactants, each raised to their coefficients. A large K means the position lies to the right.',
        'Le Chatelier’s principle: if conditions change, the equilibrium shifts to oppose the change. Adding a reactant or removing product shifts it right.',
        'Increasing pressure shifts it towards fewer gas moles. For an exothermic forward reaction, raising temperature shifts it left and decreases K. A catalyst doesn’t change the position.',
      ],
      [
        ['Dynamic equilibrium', 'Forward and reverse rates equal; concentrations constant.'],
        ['Le Chatelier’s principle', 'The system shifts to oppose a change in conditions.'],
        ['Effect of a catalyst on equilibrium', 'Reached faster, but position and K unchanged.'],
        ['Only factor that changes K', 'Temperature.'],
      ],
      [
        ['N₂ + 3H₂ ⇌ 2NH₃. Increasing pressure shifts equilibrium…', ['Left', 'Right', 'Not at all', 'Depends on the catalyst'], 1, 'The right side has fewer gas moles (2 vs 4).'],
        ['For an exothermic forward reaction, raising temperature…', ['Increases K', 'Decreases K', 'Doesn’t change K', 'Stops the reaction'], 1, 'Equilibrium shifts in the endothermic direction.'],
        ['At equilibrium…', ['Reactions stop', 'Forward and reverse rates are equal', 'All reactants are used', 'Products equal reactants'], 1, 'It is dynamic.'],
      ],
    ),
    'R3.1': C(
      [
        'A Brønsted-Lowry acid is a proton donor, and a base is a proton acceptor. Conjugate acid-base pairs differ by one proton.',
        'pH equals minus log of the hydrogen ion concentration. A change of one pH unit is a tenfold change in H⁺ concentration.',
        'Strong acids, like HCl, dissociate completely; weak acids, like ethanoic acid, only partially. Neutralisation of an acid and base makes a salt and water.',
        'Titration curves show pH changes during neutralisation. At HL, study Ka, Kb, pKa, buffers and indicators.',
      ],
      [
        ['Brønsted-Lowry acid', 'A proton (H⁺) donor.'],
        ['pH formula', 'pH = −log₁₀[H⁺]'],
        ['Strong vs weak acid', 'Strong: fully dissociates. Weak: partially dissociates.'],
        ['Neutralisation', 'Acid + base → salt + water.'],
      ],
      [
        ['Solution A has pH 2, B has pH 4. [H⁺] in A is…', ['2 times B', '10 times B', '100 times B', 'Half of B'], 2, 'Two pH units = 10² = 100 times.'],
        ['The conjugate base of H₂O is…', ['H₃O⁺', 'OH⁻', 'O²⁻', 'H₂'], 1, 'Remove one proton from H₂O.'],
        ['[H⁺] = 1 × 10⁻³ mol dm⁻³. pH is…', ['1', '3', '−3', '11'], 1, '−log(10⁻³) = 3.'],
      ],
    ),
    'R3.2': C(
      [
        'Oxidation is loss of electrons or an increase in oxidation state. Reduction is gain of electrons or a decrease in oxidation state. OIL RIG helps you remember.',
        'An oxidising agent is reduced; a reducing agent is oxidised. Half-equations show electron transfer.',
        'In a voltaic cell, a spontaneous redox reaction produces electricity: oxidation at the anode, reduction at the cathode.',
        'In electrolysis, electricity drives a non-spontaneous reaction, such as extracting reactive metals. At HL, standard electrode potentials predict whether reactions happen.',
      ],
      [
        ['Oxidation', 'Loss of electrons; oxidation state increases.'],
        ['Reduction', 'Gain of electrons; oxidation state decreases.'],
        ['Anode', 'Where oxidation takes place.'],
        ['Oxidising agent', 'A species that is itself reduced.'],
      ],
      [
        ['In Zn + Cu²⁺ → Zn²⁺ + Cu, zinc is…', ['Reduced', 'Oxidised', 'A catalyst', 'Unchanged'], 1, 'Zinc loses electrons.'],
        ['The oxidation state of Mn in MnO₄⁻ is…', ['+2', '+4', '+7', '−1'], 2, 'x + 4(−2) = −1, so x = +7.'],
        ['In electrolysis, reduction happens at the…', ['Anode', 'Cathode', 'Salt bridge', 'Electrolyte surface'], 1, 'Positive ions gain electrons at the cathode.'],
      ],
    ),
    'R3.3': C(
      [
        'Electron sharing reactions involve radicals: species with an unpaired electron.',
        'Homolytic fission breaks a covalent bond so each atom gets one electron, forming two radicals, often using UV light.',
        'Alkanes react with halogens by radical substitution, in three steps: initiation, propagation and termination.',
        'For example, methane and chlorine in UV light form chloromethane and hydrogen chloride, and further substitution can occur.',
      ],
      [
        ['Radical', 'A species with an unpaired electron.'],
        ['Homolytic fission', 'Bond breaks evenly, each atom gets one electron.'],
        ['Three steps of radical substitution', 'Initiation, propagation, termination.'],
        ['Condition for radical substitution', 'UV light.'],
      ],
      [
        ['Cl₂ → 2Cl• in UV light is…', ['Propagation', 'Initiation', 'Termination', 'Heterolytic fission'], 1, 'Radicals are first formed.'],
        ['Two radicals joining is…', ['Initiation', 'Propagation', 'Termination', 'Addition'], 2, 'It removes radicals from the chain.'],
        ['Alkanes react with chlorine by…', ['Electrophilic addition', 'Radical substitution', 'Nucleophilic substitution', 'Neutralisation'], 1, 'UV light starts a radical chain reaction.'],
      ],
    ),
    'R3.4': C(
      [
        'Electron-pair sharing reactions involve nucleophiles, which donate an electron pair, and electrophiles, which accept one.',
        'Heterolytic fission breaks a bond so one atom gets both electrons. Curly arrows show movement of electron pairs.',
        'Halogenoalkanes undergo nucleophilic substitution, for example with hydroxide ions to form alcohols.',
        'Alkenes undergo electrophilic addition, such as with bromine, which decolourises bromine water, a test for C=C. At HL, study SN1 and SN2 mechanisms and Lewis acids and bases.',
      ],
      [
        ['Nucleophile', 'An electron-pair donor, e.g. OH⁻.'],
        ['Electrophile', 'An electron-pair acceptor, e.g. Br⁺ in polarised Br₂.'],
        ['Test for alkenes', 'Bromine water decolourises from orange to colourless.'],
        ['Heterolytic fission', 'One atom takes both bonding electrons.'],
      ],
      [
        ['Which is a nucleophile?', ['H⁺', 'OH⁻', 'Br⁺', 'NO₂⁺'], 1, 'It has a lone pair to donate.'],
        ['Ethene + bromine is an example of…', ['Nucleophilic substitution', 'Electrophilic addition', 'Radical substitution', 'Elimination'], 1, 'The C=C attacks the electrophile.'],
        ['Bromoethane + NaOH(aq) forms…', ['Ethene', 'Ethanol', 'Ethane', 'Ethanal'], 1, 'OH⁻ substitutes for Br.'],
      ],
    ),
  },
};

export default content;
