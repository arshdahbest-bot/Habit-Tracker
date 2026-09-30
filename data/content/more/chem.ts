import type { MoreContent } from '../../types';
import { M } from '../helpers';

// Lesson 2 (worked calculations, practicals, common mistakes, exam technique) plus extra
// flashcards and questions for every Chemistry chapter.
const more: Record<string, MoreContent> = {
  'S1.1': M(
    [
      'States of matter differ in particle arrangement and movement: solids vibrate in fixed positions, liquids move past each other, and gases move quickly and randomly with large spaces between particles.',
      'Changes of state: melting, freezing, boiling, condensation, and sublimation, when a solid turns directly into a gas, like dry ice. Deposition is the reverse.',
      'On a heating curve, temperature stays constant during a change of state because energy is used to overcome intermolecular forces, not to raise kinetic energy.',
      'Common mistake: saying particles “expand” when heated. The particles stay the same size; the spaces between them increase.',
    ],
    [
      ['Sublimation', 'Solid turns directly into a gas, e.g. dry ice.'],
      ['Deposition', 'Gas turns directly into a solid.'],
      ['Flat section of a heating curve', 'A change of state; energy breaks intermolecular forces.'],
      ['Homogeneous mixture', 'Uniform composition throughout, e.g. salt solution.'],
    ],
    [
      ['Dry ice turning into gas without melting is…', 'Sublimation', ['Evaporation', 'Condensation', 'Deposition'], 'The solid goes straight to gas.'],
      ['During boiling, the temperature of pure water…', 'Stays constant', ['Rises steadily', 'Falls', 'Doubles'], 'Energy breaks intermolecular forces.'],
      ['−10 °C in kelvin is about…', '263 K', ['283 K', '−263 K', '10 K'], '−10 + 273 = 263 K.'],
      ['Air is a…', 'Homogeneous mixture', ['Compound', 'Element', 'Heterogeneous mixture'], 'Gases mix uniformly.'],
    ],
  ),
  'S1.2': M(
    [
      'Rutherford’s gold foil experiment: most alpha particles passed through, but a few bounced back, showing atoms have a tiny, dense, positive nucleus.',
      'Mass spectrometry separates isotopes by mass-to-charge ratio. Peaks show each isotope’s relative abundance, used to calculate relative atomic mass.',
      'Worked example: boron is 20% ¹⁰B and 80% ¹¹B. Ar is 0.2 times 10 plus 0.8 times 11, which is 10.8.',
      'Isotopes have the same chemical properties, because they have the same electrons, but different physical properties like density. Radioisotopes like carbon-14 are used in dating.',
    ],
    [
      ['Rutherford’s experiment', 'Alpha particles deflected by a small, dense, positive nucleus.'],
      ['Mass spectrometer', 'Measures mass-to-charge ratios of ions to find isotopic composition.'],
      ['Radioisotope use', 'Carbon-14 dating, cobalt-60 in radiotherapy, iodine-131 in medicine.'],
      ['Ion charge and electrons', 'Positive ions have fewer electrons than protons.'],
    ],
    [
      ['Boron: 20% ¹⁰B, 80% ¹¹B. Ar is…', '10.8', ['10.5', '10.2', '11.0'], '0.2 × 10 + 0.8 × 11 = 10.8.'],
      ['How many electrons does Mg²⁺ have?', '10', ['12', '14', '2'], 'Mg has 12 electrons and loses 2.'],
      ['Most alpha particles passed through gold foil because atoms…', 'Are mostly empty space', ['Are solid spheres', 'Have no nucleus', 'Contain only electrons'], 'The nucleus is tiny.'],
      ['Isotopes of an element have the same chemical properties because they have the same…', 'Electron configuration', ['Mass', 'Number of neutrons', 'Density'], 'Chemistry depends on electrons.'],
    ],
  ),
  'S1.3': M(
    [
      'The hydrogen emission spectrum has series of lines: electrons falling to n equals 1 give ultraviolet lines, the Lyman series; falling to n equals 2 give visible lines, the Balmer series.',
      'Lines converge at higher energies because energy levels get closer together further from the nucleus. The convergence limit relates to ionisation energy.',
      'Orbital shapes: s orbitals are spherical, p orbitals are dumbbell-shaped in three orientations. Each orbital holds two electrons with opposite spins, the Pauli exclusion principle.',
      'At HL, successive ionisation energies show big jumps when an electron is removed from a new, inner shell, revealing an element’s group.',
    ],
    [
      ['Pauli exclusion principle', 'An orbital holds at most two electrons with opposite spins.'],
      ['Balmer series', 'Hydrogen lines in the visible region from transitions to n = 2.'],
      ['Convergence limit', 'Point where spectral lines merge — linked to ionisation.'],
      ['Chromium configuration', '[Ar] 3d⁵ 4s¹.'],
    ],
    [
      ['Visible lines in hydrogen’s spectrum come from transitions to…', 'n = 2', ['n = 1', 'n = 3', 'n = ∞'], 'This is the Balmer series.'],
      ['How many electrons can one p sublevel hold?', '6', ['2', '10', '8'], 'Three orbitals × 2 electrons.'],
      ['A big jump between the 2nd and 3rd ionisation energies suggests the element is in group…', '2', ['1', '3', '17'], 'The third electron comes from an inner shell.'],
      ['The configuration of chromium is…', '[Ar] 3d⁵ 4s¹', ['[Ar] 3d⁴ 4s²', '[Ar] 3d⁶', '[Ar] 4s² 4p⁴'], 'Half-filled 3d is more stable.'],
    ],
  ),
  'S1.4': M(
    [
      'Worked example: find the empirical formula of a compound with 40% carbon, 6.7% hydrogen and 53.3% oxygen. Divide by Ar: 3.33, 6.7, 3.33. Divide by the smallest: 1 to 2 to 1, so CH₂O.',
      'If the molar mass is 180 g/mol, the molecular formula is CH₂O multiplied by 180 divided by 30, which is C₆H₁₂O₆.',
      'Dilution: moles stay the same, so c₁V₁ equals c₂V₂. Diluting 50 cm³ of 2.0 mol/dm³ acid to 200 cm³ gives 0.50 mol/dm³.',
      'Exam tip: show units at every step and give answers to the correct number of significant figures, matching the data given.',
    ],
    [
      ['Molecular formula from empirical', 'Multiply the empirical formula by M ÷ empirical formula mass.'],
      ['Dilution equation', 'c₁V₁ = c₂V₂.'],
      ['Number of particles', 'N = n × Avogadro’s constant.'],
      ['Molar mass unit', 'g mol⁻¹.'],
    ],
    [
      ['How many molecules are in 0.5 mol of CO₂?', '3.01 × 10²³', ['6.02 × 10²³', '1.20 × 10²⁴', '0.5'], '0.5 × 6.02 × 10²³.'],
      ['20 cm³ of 1.0 mol dm⁻³ acid is diluted to 100 cm³. New concentration?', '0.20 mol dm⁻³', ['5.0 mol dm⁻³', '0.50 mol dm⁻³', '2.0 mol dm⁻³'], 'c₂ = (1.0 × 20) ÷ 100.'],
      ['Empirical formula CH₂, molar mass 56 g mol⁻¹. Molecular formula?', 'C₄H₈', ['C₂H₄', 'C₃H₆', 'C₅H₁₀'], '56 ÷ 14 = 4.'],
      ['The mass of 0.25 mol of NaOH (M = 40 g mol⁻¹) is…', '10 g', ['160 g', '40 g', '0.00625 g'], 'm = n × M.'],
    ],
  ),
  'S1.5': M(
    [
      'Worked example: find the volume of 0.50 mol of gas at 300 K and 100 kPa. V equals nRT over P: 0.50 times 8.31 times 300 divided by 100,000, which is 0.0125 m³, or 12.5 dm³.',
      'At STP, 273 K and 100 kPa, one mole of an ideal gas occupies 22.7 dm³. Use this in the data booklet for quick volume calculations.',
      'The combined gas law, P₁V₁ over T₁ equals P₂V₂ over T₂, applies when a fixed amount of gas changes conditions.',
      'Ideal gas assumptions: particles have negligible volume and no intermolecular forces, and collisions are elastic. Real gases deviate at high pressure and low temperature.',
    ],
    [
      ['Molar volume at STP', '22.7 dm³ mol⁻¹ (273 K, 100 kPa).'],
      ['Combined gas law', 'P₁V₁/T₁ = P₂V₂/T₂.'],
      ['Ideal gas assumptions', 'No intermolecular forces, negligible particle volume, elastic collisions.'],
      ['Charles’s law', 'V ∝ T at constant pressure (T in kelvin).'],
    ],
    [
      ['What volume does 2 mol of gas occupy at STP?', '45.4 dm³', ['22.7 dm³', '11.35 dm³', '2 dm³'], '2 × 22.7.'],
      ['Gas at 300 K is heated to 600 K at constant pressure. Its volume…', 'Doubles', ['Halves', 'Stays the same', 'Quadruples'], 'V ∝ T in kelvin.'],
      ['Converting 5 dm³ to m³ gives…', '0.005 m³', ['5000 m³', '0.5 m³', '0.05 m³'], '1 m³ = 1000 dm³.'],
      ['Which is an ideal gas assumption?', 'No intermolecular forces', ['Particles have large volume', 'Collisions lose energy', 'Particles are stationary'], 'Real gases do have some forces.'],
    ],
  ),
  'S2.1': M(
    [
      'Ions form to reach a noble gas configuration. Group 1 metals form 1+ ions, group 2 form 2+ ions, group 16 non-metals form 2− ions and group 17 form 1− ions.',
      'Polyatomic ions to learn: ammonium NH₄⁺, hydroxide OH⁻, nitrate NO₃⁻, carbonate CO₃²⁻, sulfate SO₄²⁻, phosphate PO₄³⁻ and hydrogencarbonate HCO₃⁻.',
      'Worked example: aluminium sulfate. Al³⁺ and SO₄²⁻ must balance charges: two Al³⁺ give 6+, three SO₄²⁻ give 6−, so Al₂(SO₄)₃.',
      'Ionic compounds have high melting points, are brittle because shifting layers bring like charges together, and are often soluble in water.',
    ],
    [
      ['Ammonium ion', 'NH₄⁺.'],
      ['Carbonate ion', 'CO₃²⁻.'],
      ['Why ionic solids are brittle', 'Shifting layers put like charges together, which repel.'],
      ['Phosphate ion', 'PO₄³⁻.'],
    ],
    [
      ['The formula of aluminium sulfate is…', 'Al₂(SO₄)₃', ['AlSO₄', 'Al₃(SO₄)₂', 'Al(SO₄)₃'], 'Charges balance at 6+ and 6−.'],
      ['The formula of calcium nitrate is…', 'Ca(NO₃)₂', ['CaNO₃', 'Ca₂NO₃', 'Ca(NO₃)₃'], 'Ca²⁺ needs two NO₃⁻.'],
      ['Ionic compounds are brittle because…', 'Like charges repel when layers shift', ['They have free electrons', 'Bonds are weak', 'They are molecular'], 'The lattice shatters.'],
      ['Which ion does oxygen form?', 'O²⁻', ['O⁻', 'O²⁺', 'O⁺'], 'Oxygen gains two electrons.'],
    ],
  ),
  'S2.2': M(
    [
      'VSEPR theory: electron domains repel and spread out. Two domains give linear, three trigonal planar, four tetrahedral. Lone pairs repel more, so NH₃ is trigonal pyramidal at about 107° and H₂O bent at about 104.5°.',
      'Intermolecular forces in order of strength: London dispersion forces, dipole-induced dipole, dipole–dipole, and hydrogen bonding.',
      'Covalent network structures, like diamond, graphite and silicon dioxide, have very high melting points. Graphite conducts because each carbon has one delocalised electron.',
      'Chromatography separates substances by their different attractions to the stationary and mobile phases, related to polarity and intermolecular forces.',
    ],
    [
      ['Shape of NH₃', 'Trigonal pyramidal, about 107°.'],
      ['Why graphite conducts', 'Each carbon has one delocalised electron.'],
      ['London dispersion forces', 'Weak forces from temporary dipoles; increase with more electrons.'],
      ['Silicon dioxide structure', 'Giant covalent network with high melting point.'],
    ],
    [
      ['The shape of ammonia is…', 'Trigonal pyramidal', ['Tetrahedral', 'Trigonal planar', 'Bent'], 'One lone pair and three bonding pairs.'],
      ['Why does diamond have a very high melting point?', 'Many strong covalent bonds must break', ['It has hydrogen bonds', 'It is ionic', 'It has delocalised electrons'], 'It is a giant covalent network.'],
      ['Which molecule can form hydrogen bonds with itself?', 'NH₃', ['CH₄', 'HCl', 'CO₂'], 'H is bonded to N, which has a lone pair.'],
      ['BF₃ has a bond angle of…', '120°', ['109.5°', '107°', '180°'], 'Three domains give trigonal planar.'],
    ],
  ),
  'S2.3': M(
    [
      'Melting points of metals depend on the charge of the ions, the number of delocalised electrons and the size of the ions. Across period 3, Na, Mg and Al melting points increase.',
      'Down group 1, melting points decrease because ions get larger, so delocalised electrons are further from the nucleus and attraction is weaker.',
      'Transition metals have high melting points and conduct well because both 3d and 4s electrons can be delocalised.',
      'Exam tip: explain properties using the model: “Metals conduct because delocalised electrons are free to move through the lattice when a voltage is applied.”',
    ],
    [
      ['Melting point trend down group 1', 'Decreases — larger ions, weaker metallic bonding.'],
      ['Why transition metals have high melting points', 'Both 3d and 4s electrons are delocalised.'],
      ['Ductile', 'Can be drawn into wires.'],
      ['Metallic lattice', 'Regular arrangement of positive ions in a sea of electrons.'],
    ],
    [
      ['Which has the lowest melting point?', 'Caesium', ['Lithium', 'Sodium', 'Potassium'], 'Metallic bonding weakens down group 1.'],
      ['Metals can be drawn into wires because they are…', 'Ductile', ['Brittle', 'Ionic', 'Molecular'], 'Layers slide without breaking bonds.'],
      ['Magnesium has a higher melting point than sodium because…', 'Mg²⁺ is smaller and releases more delocalised electrons', ['Mg is a non-metal', 'Na has more electrons', 'Mg forms covalent bonds'], 'Stronger metallic bonding.'],
      ['Metals are good thermal conductors because…', 'Delocalised electrons transfer kinetic energy', ['Ions move freely', 'They contain water', 'They have hydrogen bonds'], 'Electrons carry energy quickly.'],
    ],
  ),
  'S2.4': M(
    [
      'The bonding triangle, van Arkel–Ketelaar, places compounds by electronegativity difference and average. Ionic compounds sit at the top, covalent bottom right and metallic bottom left.',
      'Alloys are mixtures of a metal with other elements. Brass, copper and zinc, is harder than copper; stainless steel resists corrosion because of chromium.',
      'Polymers: addition polymers like PVC form from alkenes without losing atoms; condensation polymers like polyesters and polyamides lose water. Many plastics are not biodegradable.',
      'At HL, know how to draw repeating units and identify monomers, and why biodegradable polymers like PLA are being developed.',
    ],
    [
      ['Brass', 'Alloy of copper and zinc.'],
      ['Stainless steel', 'Iron alloy with chromium; resists corrosion.'],
      ['PVC', 'Poly(chloroethene), an addition polymer.'],
      ['Repeating unit', 'The part of a polymer that repeats along the chain.'],
    ],
    [
      ['Brass is an alloy of copper and…', 'Zinc', ['Tin', 'Iron', 'Carbon'], 'Brass is harder than pure copper.'],
      ['Nylon is formed by…', 'Condensation polymerisation', ['Addition polymerisation', 'Radical substitution', 'Combustion'], 'Water is lost when monomers join.'],
      ['PVC is made from…', 'Chloroethene', ['Ethene', 'Propene', 'Ethanol'], 'Its double bond opens up.'],
      ['Stainless steel resists rust because it contains…', 'Chromium', ['Carbon only', 'Copper', 'Lead'], 'Chromium forms a protective oxide layer.'],
    ],
  ),
  'S3.1': M(
    [
      'Groups are columns and periods are rows. The s, p, d and f blocks show which sublevel holds the outermost electrons.',
      'Electronegativity increases across a period and decreases down a group. Fluorine is the most electronegative element.',
      'Transition elements have variable oxidation states, form coloured compounds and complex ions, and act as catalysts, like iron in the Haber process.',
      'Period 3 oxides: Na₂O and MgO are basic, Al₂O₃ is amphoteric, and non-metal oxides like SO₃ and P₄O₁₀ are acidic.',
    ],
    [
      ['Most electronegative element', 'Fluorine.'],
      ['Amphoteric oxide', 'Reacts with both acids and bases, e.g. Al₂O₃.'],
      ['Properties of transition elements', 'Variable oxidation states, coloured compounds, complex ions, catalysts.'],
      ['d-block', 'Elements whose outer electrons fill d orbitals.'],
    ],
    [
      ['Which oxide is amphoteric?', 'Al₂O₃', ['Na₂O', 'SO₃', 'MgO'], 'It reacts with both acids and bases.'],
      ['Electronegativity down group 17…', 'Decreases', ['Increases', 'Stays the same', 'Doubles'], 'Outer electrons are further from the nucleus.'],
      ['Coloured compounds are typical of…', 'Transition elements', ['Group 1 metals', 'Noble gases', 'Halogens'], 'Partially filled d orbitals absorb light.'],
      ['First ionisation energy across period 3 generally…', 'Increases', ['Decreases', 'Stays the same', 'Falls to zero'], 'Nuclear charge increases.'],
    ],
  ),
  'S3.2': M(
    [
      'IUPAC naming: find the longest carbon chain, number it to give functional groups the lowest numbers, and name branches alphabetically, like 2-methylbutane.',
      'Functional groups to know: alkene C=C, alcohol –OH, halogenoalkane –X, aldehyde –CHO, ketone C=O, carboxylic acid –COOH, ester –COO–, amine –NH₂, amide –CONH₂.',
      'Alcohols are primary, secondary or tertiary depending on how many carbons are attached to the carbon with the –OH group.',
      'At HL, stereoisomers include cis–trans isomers around C=C bonds and optical isomers with a chiral carbon bonded to four different groups.',
    ],
    [
      ['Aldehyde functional group', '–CHO (suffix -al).'],
      ['Ketone functional group', 'C=O within the chain (suffix -one).'],
      ['Ester functional group', '–COO– (name ends in -oate).'],
      ['Secondary alcohol', '–OH carbon attached to two other carbons.'],
    ],
    [
      ['CH₃COCH₃ is named…', 'Propanone', ['Propanal', 'Propanol', 'Propanoic acid'], 'It is a ketone with three carbons.'],
      ['Propan-2-ol is a…', 'Secondary alcohol', ['Primary alcohol', 'Tertiary alcohol', 'Aldehyde'], 'The –OH carbon has two carbon neighbours.'],
      ['The general formula of alkenes is…', 'CₙH₂ₙ', ['CₙH₂ₙ₊₂', 'CₙH₂ₙ₋₂', 'CₙH₂ₙ₊₁OH'], 'One C=C double bond.'],
      ['Which functional group is in ethyl ethanoate?', 'Ester', ['Ketone', 'Amine', 'Aldehyde'], 'It forms from an alcohol and a carboxylic acid.'],
    ],
  ),
  'R1.1': M(
    [
      'Worked example: 50 cm³ of acid and 50 cm³ of alkali, each 1.0 mol/dm³, react and the temperature rises 6.8 K. Q is 100 times 4.18 times 6.8, 2,842 J. Moles of water formed: 0.050. ΔH is minus 2.842 divided by 0.050, about minus 57 kJ/mol.',
      'Use the total mass of solution in Q equals mcΔT, and assume the solution has the density and specific heat capacity of water.',
      'Heat loss makes experimental ΔH less exothermic than literature values. Using a polystyrene cup, a lid, and extrapolating a temperature-time graph reduces the error.',
      'Standard enthalpy changes are measured at 100 kPa and usually 298 K, with substances in their standard states.',
    ],
    [
      ['Enthalpy of neutralisation (strong acid/base)', 'About −57 kJ mol⁻¹.'],
      ['Standard conditions', '100 kPa and usually 298 K.'],
      ['ΔH from Q', 'ΔH = −Q ÷ n (in kJ mol⁻¹).'],
      ['Extrapolation in calorimetry', 'Extending a cooling graph back to estimate the maximum temperature.'],
    ],
    [
      ['Q = 2.09 kJ for 0.050 mol reacting. ΔH (exothermic) is…', '−41.8 kJ mol⁻¹', ['+41.8 kJ mol⁻¹', '−0.10 kJ mol⁻¹', '−2.09 kJ mol⁻¹'], '2.09 ÷ 0.050 = 41.8; negative for exothermic.'],
      ['Why is experimental ΔH usually less negative than the literature value?', 'Heat is lost to the surroundings', ['Too much reactant', 'The thermometer is too accurate', 'Water has high density'], 'Some heat doesn’t raise the solution temperature.'],
      ['Standard pressure is…', '100 kPa', ['1 kPa', '273 kPa', '10 kPa'], 'Standard temperature is usually 298 K.'],
      ['A lid on a calorimeter reduces…', 'Heat loss', ['Reaction rate', 'Concentration', 'Activation energy'], 'Less heat escapes.'],
    ],
  ),
  'R1.2': M(
    [
      'Worked example using bond enthalpies: CH₄ plus 2O₂ gives CO₂ plus 2H₂O. Bonds broken: 4 C–H at 414 and 2 O=O at 498 gives 2,652 kJ. Bonds formed: 2 C=O at 804 and 4 O–H at 463 gives 3,460 kJ. ΔH is about minus 808 kJ.',
      'At HL, use enthalpies of formation: ΔH reaction equals the sum of ΔHf of products minus the sum of ΔHf of reactants. The ΔHf of an element in its standard state is zero.',
      'At HL, Born–Haber cycles calculate lattice enthalpy from atomisation, ionisation energy, electron affinity and enthalpy of formation.',
      'Exam tip: draw a clear Hess cycle with arrows, and double-check signs when reversing a step.',
    ],
    [
      ['ΔHf of an element', 'Zero in its standard state.'],
      ['ΔH from formation data', 'ΣΔHf(products) − ΣΔHf(reactants).'],
      ['Born–Haber cycle', 'Hess cycle to calculate lattice enthalpy.'],
      ['Reversing a reaction', 'Change the sign of ΔH.'],
    ],
    [
      ['ΔHf of O₂(g) is…', '0 kJ mol⁻¹', ['−498 kJ mol⁻¹', '+498 kJ mol⁻¹', '−286 kJ mol⁻¹'], 'Elements in standard states have zero ΔHf.'],
      ['If A → B has ΔH = −50 kJ, then B → A has ΔH =…', '+50 kJ', ['−50 kJ', '0 kJ', '−100 kJ'], 'Reversing changes the sign.'],
      ['Products ΣΔHf = −400 kJ, reactants ΣΔHf = −150 kJ. ΔH =…', '−250 kJ', ['−550 kJ', '+250 kJ', '+550 kJ'], '−400 − (−150).'],
      ['A Born–Haber cycle is used to calculate…', 'Lattice enthalpy', ['Reaction rate', 'pH', 'Equilibrium constant'], 'It applies Hess’s law to ionic compounds.'],
    ],
  ),
  'R1.3': M(
    [
      'Specific energy is energy released per kilogram of fuel; energy density is energy per unit volume. Hydrogen has a high specific energy but low energy density as a gas.',
      'Burning fossil fuels releases carbon dioxide, a greenhouse gas, and pollutants like sulfur dioxide, causing acid rain, and particulates from incomplete combustion.',
      'Fuel cells convert chemical energy directly into electricity. In a hydrogen fuel cell, hydrogen is oxidised at the anode and oxygen reduced at the cathode, producing only water.',
      'Evaluate fuels using energy released, carbon emissions, cost, availability and safety. Biofuels are renewable but can compete with food crops for land.',
    ],
    [
      ['Specific energy', 'Energy released per unit mass of fuel.'],
      ['Energy density', 'Energy released per unit volume of fuel.'],
      ['Acid rain cause', 'SO₂ and NOₓ dissolving in rainwater.'],
      ['Drawback of biofuels', 'Can use land needed for food crops.'],
    ],
    [
      ['Hydrogen has high specific energy but low energy density because…', 'It is a very light gas', ['It releases CO₂', 'It is a solid', 'It is non-flammable'], 'Little mass fills a large volume.'],
      ['Sulfur dioxide from burning coal causes…', 'Acid rain', ['Ozone depletion', 'Eutrophication', 'Global dimming only'], 'SO₂ forms acids in rainwater.'],
      ['In a hydrogen fuel cell, hydrogen is…', 'Oxidised at the anode', ['Reduced at the anode', 'Oxidised at the cathode', 'Unchanged'], 'It loses electrons.'],
      ['Soot is produced by…', 'Incomplete combustion', ['Complete combustion', 'Photosynthesis', 'Fuel cells'], 'Not enough oxygen leaves unburnt carbon.'],
    ],
  ),
  'R1.4': M(
    [
      'Entropy increases with temperature, when a substance changes from solid to liquid to gas, and when the number of gas molecules increases.',
      'Worked example: ΔH is plus 178 kJ/mol and ΔS is plus 161 J/K/mol for decomposing calcium carbonate. The reaction becomes spontaneous when T is above 178,000 divided by 161, about 1,106 K.',
      'Remember to convert ΔS from J to kJ, or ΔH from kJ to J, before using ΔG equals ΔH minus TΔS.',
      'ΔG also relates to equilibrium: a very negative ΔG means the equilibrium lies far to the right, and K is large.',
    ],
    [
      ['Temperature when ΔG = 0', 'T = ΔH ÷ ΔS.'],
      ['Units trap in ΔG', 'ΔS is often in J K⁻¹ mol⁻¹; convert to kJ.'],
      ['ΔH < 0 and ΔS > 0', 'Spontaneous at all temperatures.'],
      ['ΔG and K', 'Very negative ΔG means a large K.'],
    ],
    [
      ['ΔH = +100 kJ mol⁻¹, ΔS = +200 J K⁻¹ mol⁻¹. It becomes spontaneous above…', '500 K', ['2 K', '200 K', '50 K'], '100,000 ÷ 200 = 500 K.'],
      ['A reaction with ΔH < 0 and ΔS < 0 is spontaneous…', 'At low temperatures', ['At all temperatures', 'At high temperatures', 'Never'], 'TΔS becomes too big at high T.'],
      ['Which has the highest entropy?', 'Steam', ['Ice', 'Liquid water', 'Solid carbon'], 'Gases are most dispersed.'],
      ['ΔH = −50 kJ, ΔS = +0.1 kJ K⁻¹, T = 300 K. ΔG is…', '−80 kJ', ['−20 kJ', '+80 kJ', '−50 kJ'], '−50 − 300 × 0.1 = −80 kJ.'],
    ],
  ),
  'R2.1': M(
    [
      'Worked example: how much CO₂ forms when 10.0 g of CaCO₃ decomposes? Moles CaCO₃: 10.0 divided by 100.1, 0.0999. The ratio is 1 to 1, so 0.0999 mol CO₂, which is 4.40 g.',
      'Titration: react a known concentration with an unknown, find the end point with an indicator, and use mole ratios to calculate the unknown concentration.',
      'Worked titration: 25.0 cm³ of NaOH is neutralised by 20.0 cm³ of 0.100 mol/dm³ HCl. Moles HCl: 0.00200. Ratio 1 to 1, so NaOH is 0.00200 divided by 0.0250, 0.0800 mol/dm³.',
      'Atom economy matters for green chemistry: reactions with higher atom economy waste fewer atoms and produce less waste.',
    ],
    [
      ['Titration', 'Measuring the volume of one solution that reacts exactly with another.'],
      ['End point', 'The point at which the indicator changes colour.'],
      ['Concordant titres', 'Results within 0.10 cm³ of each other.'],
      ['Green chemistry', 'Designing processes to reduce waste and hazards.'],
    ],
    [
      ['20.0 cm³ of 0.100 mol dm⁻³ HCl neutralises 25.0 cm³ NaOH. [NaOH] is…', '0.0800 mol dm⁻³', ['0.125 mol dm⁻³', '0.100 mol dm⁻³', '0.0500 mol dm⁻³'], '0.00200 ÷ 0.0250.'],
      ['Mass of CO₂ from 0.20 mol CaCO₃ decomposing is…', '8.8 g', ['4.4 g', '20 g', '0.20 g'], '0.20 × 44.'],
      ['Titres of 22.30, 22.35 and 23.10 cm³: which are concordant?', '22.30 and 22.35', ['All three', '22.35 and 23.10', 'None'], 'They are within 0.10 cm³.'],
      ['Higher atom economy means…', 'Less waste product', ['Faster reaction', 'Higher yield always', 'More energy released'], 'More reactant atoms end up in the product.'],
    ],
  ),
  'R2.2': M(
    [
      'Rate can be measured by gas volume over time, mass loss, colour change with a colorimeter, or the time for a precipitate to hide a cross, as in the sodium thiosulfate experiment.',
      'The rate at a point is the gradient of a tangent to the concentration–time curve. The initial rate is the gradient at time zero.',
      'At HL, rate equations take the form rate equals k times [A] to the power m times [B] to the power n. Orders are found experimentally, not from the equation.',
      'At HL, zero-order means changing concentration has no effect; first order doubles rate when concentration doubles; second order quadruples it.',
    ],
    [
      ['Rate from a graph', 'Gradient of the tangent to the curve.'],
      ['Rate equation', 'rate = k[A]ᵐ[B]ⁿ.'],
      ['Second-order reactant', 'Doubling its concentration quadruples the rate.'],
      ['Rate-determining step', 'The slowest step in a mechanism.'],
    ],
    [
      ['Doubling [A] quadruples the rate. The order with respect to A is…', '2', ['1', '0', '4'], '2² = 4.'],
      ['Rate at a point on a curve is found from…', 'The gradient of a tangent', ['The area under the curve', 'The y-intercept', 'The final value'], 'It is the instantaneous rate.'],
      ['Doubling [B] has no effect on rate. The order with respect to B is…', '0', ['1', '2', '−1'], 'Zero order.'],
      ['Which measurement suits the reaction of marble chips with acid?', 'Volume of CO₂ over time', ['Colour change', 'pH of solid', 'Electrical conductivity of marble'], 'It produces a gas.'],
    ],
  ),
  'R2.3': M(
    [
      'The equilibrium constant expression: for aA plus bB in equilibrium with cC plus dD, K equals [C]ᶜ[D]ᵈ divided by [A]ᵃ[B]ᵇ. Solids and pure liquids are not included.',
      'If K is much greater than 1, the equilibrium lies to the right; if much less than 1, it lies to the left.',
      'The Haber process uses about 450 °C, 200 atmospheres and an iron catalyst: a compromise between yield, rate and cost.',
      'At HL, the reaction quotient Q is calculated like K but at any moment. If Q is less than K, the reaction proceeds forwards.',
    ],
    [
      ['Equilibrium constant K', 'Ratio of product to reactant concentrations at equilibrium, raised to their coefficients.'],
      ['K ≫ 1', 'Equilibrium lies far to the right.'],
      ['Haber process conditions', 'About 450 °C, 200 atm, iron catalyst.'],
      ['Reaction quotient Q', 'Like K but at any point; compare with K to predict direction.'],
    ],
    [
      ['For H₂ + I₂ ⇌ 2HI, K =…', '[HI]² / ([H₂][I₂])', ['[H₂][I₂] / [HI]²', '[HI] / ([H₂][I₂])', '2[HI] / ([H₂][I₂])'], 'Products over reactants, powers from coefficients.'],
      ['The Haber process uses 450 °C as a compromise between…', 'Yield and rate', ['Colour and smell', 'Cost of iron and water', 'Pressure and volume'], 'Lower T gives higher yield but slower rate.'],
      ['If Q < K, the reaction will…', 'Move forward', ['Move backward', 'Stop', 'Reach K immediately'], 'More products must form.'],
      ['K = 1 × 10⁻⁵ means the equilibrium…', 'Lies to the left', ['Lies to the right', 'Is at 50:50', 'Has not been reached'], 'Reactants dominate.'],
    ],
  ),
  'R3.1': M(
    [
      'Conjugate acid–base pairs differ by one proton: in NH₃ plus H₂O in equilibrium with NH₄⁺ plus OH⁻, NH₃ and NH₄⁺ are a pair, and H₂O and OH⁻ are a pair.',
      'At 298 K, Kw equals [H⁺][OH⁻] equals 1.0 times 10 to the minus 14. So pH plus pOH equals 14. A solution with [OH⁻] of 0.01 has pOH 2 and pH 12.',
      'Titration curves: strong acid–strong base has an equivalence point at pH 7; weak acid–strong base above 7. Choose an indicator that changes colour in the steep part.',
      'At HL, buffers resist pH changes. A buffer of ethanoic acid and sodium ethanoate neutralises added acid and base. Ka and pKa measure weak acid strength.',
    ],
    [
      ['Kw at 298 K', '1.0 × 10⁻¹⁴ = [H⁺][OH⁻].'],
      ['pH + pOH', '14 at 298 K.'],
      ['Buffer solution', 'Resists changes in pH when small amounts of acid or base are added.'],
      ['Conjugate acid–base pair', 'Two species differing by one proton.'],
    ],
    [
      ['[OH⁻] = 1 × 10⁻² mol dm⁻³. The pH is…', '12', ['2', '10', '14'], 'pOH = 2, so pH = 14 − 2.'],
      ['The conjugate acid of NH₃ is…', 'NH₄⁺', ['NH₂⁻', 'H₂O', 'OH⁻'], 'Add one proton.'],
      ['The equivalence point of a weak acid–strong base titration is…', 'Above pH 7', ['Exactly pH 7', 'Below pH 7', 'At pH 0'], 'The conjugate base makes it slightly basic.'],
      ['A buffer can be made from…', 'A weak acid and its salt', ['A strong acid and water', 'A strong base alone', 'Pure water'], 'E.g. ethanoic acid and sodium ethanoate.'],
    ],
  ),
  'R3.2': M(
    [
      'Rules for oxidation states: elements are 0; oxygen is usually minus 2; hydrogen usually plus 1; the sum in a compound is 0 and in an ion equals its charge.',
      'Voltaic cells produce electricity from spontaneous redox reactions. In a zinc–copper cell, zinc is the negative anode and is oxidised; copper ions are reduced at the positive cathode. A salt bridge completes the circuit.',
      'Electrolysis uses electricity to drive non-spontaneous reactions. Molten sodium chloride gives sodium at the cathode and chlorine at the anode.',
      'At HL, standard electrode potentials predict whether reactions are spontaneous: E cell equals E cathode minus E anode, and a positive value means spontaneous.',
    ],
    [
      ['Salt bridge', 'Allows ions to flow to complete the circuit in a voltaic cell.'],
      ['Voltaic cell', 'Converts chemical energy to electrical energy spontaneously.'],
      ['Electrolysis of molten NaCl', 'Na at the cathode, Cl₂ at the anode.'],
      ['E°cell', 'E°(cathode) − E°(anode); positive means spontaneous.'],
    ],
    [
      ['The oxidation state of S in H₂SO₄ is…', '+6', ['+4', '−2', '+2'], '2(+1) + x + 4(−2) = 0.'],
      ['In a Zn–Cu voltaic cell, electrons flow from…', 'Zinc to copper', ['Copper to zinc', 'The salt bridge to zinc', 'Nowhere'], 'Zinc is oxidised.'],
      ['Electrolysis of molten lead bromide gives lead at the…', 'Cathode', ['Anode', 'Salt bridge', 'Surface'], 'Pb²⁺ gains electrons.'],
      ['The purpose of a salt bridge is to…', 'Maintain charge balance by allowing ion flow', ['Carry electrons', 'Speed up the reaction', 'Stop the reaction'], 'It completes the circuit.'],
    ],
  ),
  'R3.3': M(
    [
      'Methane with chlorine in UV light: initiation, Cl₂ splits into two chlorine radicals; propagation, Cl radical plus CH₄ gives HCl and a methyl radical, which then reacts with Cl₂; termination, radicals combine.',
      'Radical substitution gives a mixture of products, like dichloromethane and trichloromethane, because further substitution happens.',
      'CFCs in the stratosphere release chlorine radicals under UV light, which catalyse the breakdown of ozone. The Montreal Protocol of 1987 phased them out.',
      'Exam tip: show radicals with a dot and use single-headed, fish-hook arrows at HL to show the movement of single electrons.',
    ],
    [
      ['Propagation step', 'A radical reacts to form a product and a new radical.'],
      ['Why radical substitution gives mixtures', 'Further substitution of H atoms occurs.'],
      ['Montreal Protocol (1987)', 'Agreement to phase out ozone-depleting CFCs.'],
      ['Fish-hook arrow', 'Shows movement of a single electron.'],
    ],
    [
      ['CH₄ + Cl• → CH₃• + HCl is a…', 'Propagation step', ['Initiation step', 'Termination step', 'Addition step'], 'A radical forms another radical.'],
      ['Chlorine radicals destroy ozone in the…', 'Stratosphere', ['Troposphere', 'Ocean', 'Soil'], 'CFCs break down under UV there.'],
      ['Why does radical substitution give a mixture?', 'More hydrogen atoms can be substituted', ['UV light is weak', 'Chlorine is unreactive', 'Methane is ionic'], 'Chain reactions continue.'],
      ['The Montreal Protocol aimed to…', 'Phase out CFCs', ['Reduce CO₂', 'Ban plastics', 'Increase fossil fuels'], 'It protects the ozone layer.'],
    ],
  ),
  'R3.4': M(
    [
      'Nucleophilic substitution: OH⁻ attacks the partially positive carbon in a halogenoalkane and the halide leaves. At HL, primary halogenoalkanes follow SN2, one step; tertiary follow SN1, via a carbocation.',
      'Electrophilic addition: in ethene plus HBr, the electron-rich double bond attacks the H, forming a carbocation, then Br⁻ adds. At HL, Markovnikov’s rule predicts the major product.',
      'Lewis acids accept electron pairs; Lewis bases donate them. Transition metal ions act as Lewis acids when ligands form coordinate bonds to make complex ions.',
      'Exam tip: in mechanisms, curly arrows start at a lone pair or bond and point to where the electrons go. Show partial charges and lone pairs clearly.',
    ],
    [
      ['SN2', 'One-step nucleophilic substitution, typical of primary halogenoalkanes.'],
      ['SN1', 'Two-step substitution via a carbocation, typical of tertiary halogenoalkanes.'],
      ['Lewis acid', 'An electron-pair acceptor.'],
      ['Coordinate bond', 'Both shared electrons come from the same atom.'],
    ],
    [
      ['Tertiary halogenoalkanes react mainly by…', 'SN1', ['SN2', 'Radical substitution', 'Electrophilic addition'], 'A stable tertiary carbocation forms.'],
      ['A Lewis base is an…', 'Electron-pair donor', ['Electron-pair acceptor', 'Proton acceptor only', 'Radical'], 'For example, NH₃ with its lone pair.'],
      ['In a complex ion, ligands bond to the metal by…', 'Coordinate bonds', ['Ionic bonds', 'Metallic bonds', 'Hydrogen bonds'], 'Ligands donate lone pairs.'],
      ['Curly arrows in mechanisms start from…', 'A lone pair or a bond', ['A positive charge', 'An empty orbital', 'A nucleus'], 'They show where electrons move from.'],
    ],
  ),
};

export default more;
