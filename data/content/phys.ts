import type { SubjectContentFile } from '../types';
import { C } from './helpers';

const content: SubjectContentFile = {
  units: {
    A: [
      'Theme A, space, time and motion, is classical mechanics: how things move and why.',
      'You will study kinematics, forces and momentum, and work, energy and power. At HL, rigid body mechanics and relativity extend these ideas.',
      'Master the equations of motion and free-body diagrams; they appear across the whole course.',
    ],
    B: [
      'Theme B, the particulate nature of matter, links microscopic particles to large-scale properties.',
      'It covers thermal energy transfer, the greenhouse effect, gas laws and electric circuits. At HL, thermodynamics studies entropy and heat engines.',
    ],
    C: [
      'Theme C, wave behaviour, covers oscillations and waves.',
      'You will study simple harmonic motion, wave properties, reflection, refraction, diffraction and interference, standing waves, and the Doppler effect.',
    ],
    D: [
      'Theme D, fields, describes how objects interact at a distance through gravitational, electric and magnetic fields.',
      'You will compare field strength and potential for gravity and electricity, and study motion of charges in fields. At HL, electromagnetic induction explains generators and transformers.',
    ],
    E: [
      'Theme E, nuclear and quantum physics, explores the atom and its nucleus.',
      'It covers atomic structure, radioactive decay, fission and fusion, and how stars work. At HL, quantum physics introduces the photoelectric effect and wave-particle duality.',
    ],
  },
  chapters: {
    'A.1': C(
      [
        'Kinematics describes motion using displacement, velocity and acceleration. Displacement and velocity are vectors, so direction matters.',
        'For constant acceleration we use the SUVAT equations, such as v equals u plus a t, and s equals u t plus one half a t squared.',
        'On a velocity-time graph, the gradient is acceleration and the area under the line is displacement.',
        'For projectiles, treat horizontal and vertical motion separately. Horizontal velocity stays constant; vertically the object accelerates at 9.81 metres per second squared downwards. Air resistance reduces range and height.',
      ],
      [
        ['SUVAT: find v without s', 'v = u + at'],
        ['Gradient of a v–t graph', 'Acceleration'],
        ['Area under a v–t graph', 'Displacement'],
        ['Projectile horizontal velocity', 'Constant (ignoring air resistance).'],
      ],
      [
        ['A car accelerates from 0 to 20 m/s in 4 s. Its acceleration is…', ['4 m/s²', '5 m/s²', '20 m/s²', '80 m/s²'], 1, 'a = Δv / t = 20 / 4 = 5 m/s².'],
        ['Which quantity is a scalar?', ['Velocity', 'Displacement', 'Speed', 'Acceleration'], 2, 'Speed has magnitude only.'],
        ['A ball is dropped from rest. After 2 s its speed is about…', ['9.8 m/s', '19.6 m/s', '4.9 m/s', '39.2 m/s'], 1, 'v = 0 + 9.81 × 2 ≈ 19.6 m/s.'],
      ],
    ),
    'A.2': C(
      [
        'Newton’s first law: an object stays at rest or at constant velocity unless a resultant force acts. Newton’s second law: F equals m a. Newton’s third law: forces come in equal and opposite pairs on different objects.',
        'Free-body diagrams show all forces on one object, such as weight, normal force, tension, friction and drag.',
        'Momentum is mass times velocity. In a closed system, total momentum is conserved in collisions and explosions.',
        'Impulse equals force times time, which equals change in momentum. Airbags increase stopping time to reduce force. Circular motion needs a centripetal force towards the centre.',
      ],
      [
        ['Newton’s second law', 'F = ma (resultant force = rate of change of momentum)'],
        ['Momentum', 'p = mv'],
        ['Impulse', 'FΔt = Δp'],
        ['Centripetal acceleration', 'a = v²/r, directed towards the centre.'],
      ],
      [
        ['A 2 kg object has a resultant force of 10 N. Its acceleration is…', ['0.2 m/s²', '5 m/s²', '20 m/s²', '12 m/s²'], 1, 'a = F/m = 10/2 = 5 m/s².'],
        ['Airbags reduce injury by…', ['Reducing momentum change', 'Increasing the stopping time', 'Increasing the force', 'Removing inertia'], 1, 'Longer time means smaller force for the same impulse.'],
        ['A 1 kg ball at 4 m/s hits a 1 kg ball at rest and they stick. Final speed?', ['1 m/s', '2 m/s', '4 m/s', '8 m/s'], 1, 'Momentum 4 = 2v, so v = 2 m/s.'],
      ],
    ),
    'A.3': C(
      [
        'Work done equals force times displacement in the direction of the force: W equals F s cos theta.',
        'Kinetic energy is one half m v squared. Gravitational potential energy change is m g delta h. Elastic potential energy is one half k x squared.',
        'Energy is always conserved: in a closed system, the total energy before equals the total energy after.',
        'Power is the rate of doing work: P equals work divided by time, which also equals force times velocity. Efficiency is useful output divided by total input and can never be more than 100 percent.',
      ],
      [
        ['Kinetic energy formula', 'Eₖ = ½mv²'],
        ['Gravitational PE change', 'ΔEp = mgΔh'],
        ['Power in terms of F and v', 'P = Fv'],
        ['Efficiency', 'Useful output ÷ total input'],
      ],
      [
        ['KE of a 2 kg ball moving at 3 m/s?', ['3 J', '6 J', '9 J', '18 J'], 2, '½ × 2 × 3² = 9 J.'],
        ['Unit of power?', ['Joule', 'Newton', 'Watt', 'Pascal'], 2, '1 W = 1 J/s.'],
        ['A motor uses 200 J to lift a load, gaining 150 J of PE. Efficiency?', ['25%', '75%', '133%', '50%'], 1, '150 ÷ 200 = 75%.'],
      ],
    ),
    'A.4': C(
      [
        'Rigid body mechanics studies rotation. Torque, the turning effect of a force, equals force times perpendicular distance from the pivot.',
        'Rotational motion has equations like linear motion, using angular displacement, angular velocity and angular acceleration.',
        'Moment of inertia, I, measures resistance to angular acceleration and depends on how mass is distributed. Newton’s second law for rotation is torque equals I times angular acceleration.',
        'Angular momentum, L equals I omega, is conserved when no external torque acts. A spinning skater pulls in their arms to spin faster. Rotational kinetic energy is one half I omega squared.',
      ],
      [
        ['Torque', 'τ = Fr sin θ'],
        ['Moment of inertia', 'Resistance to angular acceleration; depends on mass distribution.'],
        ['Angular momentum', 'L = Iω'],
        ['Rotational KE', 'Eₖ = ½Iω²'],
      ],
      [
        ['A skater pulls in their arms. Their angular velocity…', ['Decreases', 'Increases', 'Stays the same', 'Becomes zero'], 1, 'I decreases and L = Iω is conserved.'],
        ['A 20 N force acts 0.5 m from a pivot at 90°. Torque?', ['10 N m', '40 N m', '20 N m', '0.5 N m'], 0, '20 × 0.5 = 10 N m.'],
        ['Moment of inertia depends on…', ['Only mass', 'Mass and its distribution about the axis', 'Only speed', 'Colour'], 1, 'Mass further from the axis increases I.'],
      ],
    ),
    'A.5': C(
      [
        'Galilean relativity says the laws of mechanics are the same in all inertial frames, and velocities simply add.',
        'Einstein’s special relativity has two postulates: physics laws are the same in all inertial frames, and the speed of light is the same for all observers.',
        'This leads to time dilation, moving clocks run slow, and length contraction, moving objects are shorter in their direction of motion. The Lorentz factor gamma describes both.',
        'Simultaneity is relative, and spacetime diagrams show events. Muons from cosmic rays reaching the ground is evidence for time dilation.',
      ],
      [
        ['Postulates of special relativity', 'Laws of physics are the same in all inertial frames; c is constant for all observers.'],
        ['Time dilation', 'Moving clocks run slow: Δt = γΔt₀.'],
        ['Length contraction', 'L = L₀ / γ'],
        ['Evidence for time dilation', 'Cosmic-ray muons reaching Earth’s surface.'],
      ],
      [
        ['The speed of light measured by any inertial observer is…', ['Faster if moving towards the source', 'Always the same', 'Slower in moving frames', 'Infinite'], 1, 'This is Einstein’s second postulate.'],
        ['A moving rocket’s length, measured from Earth, appears…', ['Longer', 'Shorter', 'Unchanged', 'Zero'], 1, 'Length contraction occurs in the direction of motion.'],
        ['Muons reaching Earth show…', ['Length expansion', 'Time dilation', 'Galilean addition', 'Gravity'], 1, 'Their lifetime is extended in our frame.'],
      ],
    ),
    'B.1': C(
      [
        'Temperature measures the average kinetic energy of particles; internal energy is the total kinetic and potential energy of the particles.',
        'Specific heat capacity: Q equals m c ΔT. Specific latent heat is the energy to change state without a temperature change: Q equals m L.',
        'Heat transfers by conduction, convection and radiation.',
        'All objects emit thermal radiation. The Stefan-Boltzmann law says power equals emissivity times sigma times area times T to the fourth. Wien’s law links peak wavelength to temperature: hotter objects peak at shorter wavelengths.',
      ],
      [
        ['Specific heat capacity equation', 'Q = mcΔT'],
        ['Specific latent heat', 'Q = mL (change of state at constant temperature)'],
        ['Stefan-Boltzmann law', 'P = eσAT⁴'],
        ['Wien’s law', 'λmax T = 2.9 × 10⁻³ m K'],
      ],
      [
        ['During melting, temperature stays constant because energy…', ['Is lost', 'Breaks intermolecular bonds', 'Increases KE', 'Is destroyed'], 1, 'Energy increases potential energy of particles.'],
        ['If an object’s temperature doubles, the power it radiates…', ['Doubles', 'Quadruples', 'Increases 16 times', 'Halves'], 2, 'P ∝ T⁴, and 2⁴ = 16.'],
        ['A hotter star has a peak wavelength that is…', ['Longer', 'Shorter', 'The same', 'Zero'], 1, 'Wien’s law: λmax ∝ 1/T.'],
      ],
    ),
    'B.2': C(
      [
        'The Sun emits mainly visible and short-wavelength radiation, which passes through the atmosphere and warms Earth’s surface.',
        'Earth emits longer-wavelength infrared radiation. Greenhouse gases, such as carbon dioxide, methane, water vapour and nitrous oxide, absorb and re-emit it, warming the atmosphere.',
        'Albedo is the fraction of radiation reflected. Earth’s average albedo is about 0.3; ice has high albedo, oceans low.',
        'The solar constant is about 1360 watts per square metre. Energy balance models compare incoming and outgoing radiation. Adding greenhouse gases enhances the effect and raises temperatures.',
      ],
      [
        ['Albedo', 'Reflected power ÷ incident power.'],
        ['Main greenhouse gases', 'CO₂, CH₄, H₂O, N₂O.'],
        ['Solar constant', 'About 1360 W m⁻²'],
        ['Why greenhouse gases warm Earth', 'They absorb and re-emit infrared radiation from Earth.'],
      ],
      [
        ['Greenhouse gases absorb mainly…', ['Visible light', 'Infrared radiation', 'Ultraviolet', 'X-rays'], 1, 'Earth re-emits infrared.'],
        ['Melting polar ice lowers Earth’s albedo, which…', ['Cools Earth', 'Warms Earth further', 'Has no effect', 'Reduces greenhouse gases'], 1, 'Less reflection means more absorption.'],
        ['An albedo of 0.3 means…', ['30% is absorbed', '30% is reflected', '70% is reflected', 'All is absorbed'], 1, 'Albedo is the reflected fraction.'],
      ],
    ),
    'B.3': C(
      [
        'Pressure is force per unit area. In gases, pressure comes from particles colliding with container walls.',
        'The gas laws: Boyle’s law, pressure is inversely proportional to volume; Charles’ law, volume is proportional to temperature in kelvin; and the pressure law.',
        'The ideal gas equation is P V equals n R T, or P V equals N k T in terms of molecules.',
        'The average kinetic energy of an ideal gas molecule is three halves k T. Real gases deviate from ideal behaviour at high pressures and low temperatures.',
      ],
      [
        ['Ideal gas equation', 'PV = nRT = NkT'],
        ['Average KE of a gas molecule', '3/2 kT'],
        ['Boltzmann constant k', 'R ÷ Avogadro’s constant'],
        ['Why gases exert pressure', 'Molecules collide with walls, changing momentum.'],
      ],
      [
        ['Gas temperature rises from 300 K to 600 K at constant volume. Pressure…', ['Halves', 'Doubles', 'Stays the same', 'Quadruples'], 1, 'P ∝ T at constant volume.'],
        ['The average KE of gas molecules depends only on…', ['Pressure', 'Volume', 'Temperature', 'Mass'], 2, 'KE = 3/2 kT.'],
        ['Temperature in gas laws must be in…', ['°C', 'K', '°F', 'J'], 1, 'Kelvin is absolute temperature.'],
      ],
    ),
    'B.4': C(
      [
        'The first law of thermodynamics: the heat added to a gas equals the increase in internal energy plus the work done by the gas.',
        'Processes can be isobaric, constant pressure; isovolumetric, constant volume; isothermal, constant temperature; or adiabatic, no heat transfer.',
        'The second law: entropy of an isolated system never decreases. Heat flows naturally from hot to cold.',
        'Heat engines convert heat into work, but no engine can be 100 percent efficient. The Carnot cycle gives the maximum efficiency: one minus T cold over T hot.',
      ],
      [
        ['First law of thermodynamics', 'Q = ΔU + W'],
        ['Adiabatic process', 'No heat transfer (Q = 0).'],
        ['Second law', 'Entropy of an isolated system never decreases.'],
        ['Carnot efficiency', 'η = 1 − Tc/Th'],
      ],
      [
        ['A Carnot engine works between 600 K and 300 K. Maximum efficiency?', ['25%', '50%', '75%', '100%'], 1, '1 − 300/600 = 0.5.'],
        ['In an isothermal expansion of an ideal gas, ΔU is…', ['Positive', 'Negative', 'Zero', 'Equal to Q'], 2, 'Constant temperature means no change in internal energy.'],
        ['Heat flows naturally from…', ['Cold to hot', 'Hot to cold', 'Both ways equally', 'Low to high entropy only'], 1, 'This is the second law.'],
      ],
    ),
    'B.5': C(
      [
        'Electric current is the rate of flow of charge: I equals charge divided by time. Potential difference is energy transferred per unit charge.',
        'Resistance equals V divided by I. For an ohmic conductor at constant temperature, current is proportional to potential difference. Resistivity depends on material, length and area.',
        'In series, resistances add. In parallel, one over total resistance is the sum of one over each resistance. Power equals V I, or I squared R.',
        'Real cells have internal resistance, so the terminal voltage is less than the emf: emf equals I times R plus r. Potential dividers split voltage, for example with LDRs and thermistors.',
      ],
      [
        ['Current', 'I = Δq / Δt'],
        ['Resistance', 'R = V / I'],
        ['Resistors in series', 'R_total = R₁ + R₂ + …'],
        ['emf and internal resistance', 'ε = I(R + r)'],
      ],
      [
        ['Two 6 Ω resistors in parallel have total resistance…', ['12 Ω', '6 Ω', '3 Ω', '36 Ω'], 2, '1/R = 1/6 + 1/6, so R = 3 Ω.'],
        ['A 12 V supply drives 2 A. Power?', ['6 W', '14 W', '24 W', '10 W'], 2, 'P = VI = 24 W.'],
        ['Terminal voltage is less than emf because of…', ['Resistivity', 'Internal resistance', 'Current', 'Parallel circuits'], 1, 'Some energy is lost inside the cell.'],
      ],
    ),
    'C.1': C(
      [
        'Simple harmonic motion, SHM, occurs when acceleration is proportional to displacement and directed towards the equilibrium position: a equals minus omega squared x.',
        'Examples include a mass on a spring and a simple pendulum at small angles.',
        'The period of a mass on a spring is two pi root m over k; for a pendulum it is two pi root L over g. The period doesn’t depend on amplitude.',
        'Energy transfers between kinetic and potential: kinetic is maximum at equilibrium, potential is maximum at the extremes. At HL, study phase and the equations for displacement and velocity.',
      ],
      [
        ['Condition for SHM', 'a ∝ −x (acceleration opposite and proportional to displacement).'],
        ['Period of a mass on a spring', 'T = 2π√(m/k)'],
        ['Period of a simple pendulum', 'T = 2π√(L/g)'],
        ['Where KE is maximum in SHM', 'At the equilibrium position.'],
      ],
      [
        ['Doubling the length of a pendulum makes its period…', ['Double', '√2 times longer', 'Half', 'Unchanged'], 1, 'T ∝ √L.'],
        ['In SHM, acceleration is greatest at…', ['Equilibrium', 'Maximum displacement', 'Half amplitude', 'Zero velocity only in the middle'], 1, 'a ∝ x, so it is maximum at the extremes.'],
        ['The period of SHM depends on amplitude?', ['Yes, always', 'No', 'Only for springs', 'Only for large masses'], 1, 'SHM is isochronous.'],
      ],
    ),
    'C.2': C(
      [
        'Waves transfer energy without transferring matter. In transverse waves, oscillations are perpendicular to the direction of travel; in longitudinal waves, they are parallel.',
        'Key quantities are amplitude, wavelength, frequency and period. The wave equation is speed equals frequency times wavelength.',
        'Sound is a longitudinal wave that needs a medium. Electromagnetic waves are transverse and travel at 3 × 10⁸ metres per second in a vacuum.',
        'The electromagnetic spectrum, from radio waves to gamma rays, has increasing frequency and decreasing wavelength.',
      ],
      [
        ['Wave equation', 'v = fλ'],
        ['Transverse wave', 'Oscillations perpendicular to direction of travel.'],
        ['Longitudinal wave', 'Oscillations parallel to direction of travel, e.g. sound.'],
        ['Speed of EM waves in a vacuum', '3.00 × 10⁸ m s⁻¹'],
      ],
      [
        ['A wave has f = 50 Hz and λ = 2 m. Speed?', ['25 m/s', '52 m/s', '100 m/s', '0.04 m/s'], 2, 'v = 50 × 2 = 100 m/s.'],
        ['Sound cannot travel through…', ['Water', 'Steel', 'A vacuum', 'Air'], 2, 'It needs a medium.'],
        ['Which EM wave has the highest frequency?', ['Radio', 'Visible', 'X-rays', 'Gamma'], 3, 'Gamma rays are at the top of the spectrum.'],
      ],
    ),
    'C.3': C(
      [
        'Waves reflect, refract, diffract and interfere. Refraction is a change in direction due to a change in speed at a boundary.',
        'Snell’s law: n1 sin theta 1 equals n2 sin theta 2. Total internal reflection happens when light in a denser medium hits a boundary above the critical angle, as in optical fibres.',
        'Diffraction is the spreading of waves through gaps or around obstacles; it is greatest when the gap is similar to the wavelength.',
        'Interference: where waves meet in phase they interfere constructively; out of phase, destructively. In the double-slit experiment, fringe spacing equals wavelength times distance to screen divided by slit separation.',
      ],
      [
        ['Snell’s law', 'n₁ sin θ₁ = n₂ sin θ₂'],
        ['Critical angle', 'sin c = n₂ / n₁ (from denser to less dense)'],
        ['Double-slit fringe spacing', 's = λD / d'],
        ['Constructive interference', 'Path difference = whole number of wavelengths.'],
      ],
      [
        ['Diffraction is greatest when the gap is…', ['Much larger than λ', 'Similar to λ', 'Zero', 'Infinite'], 1, 'Similar-sized gaps spread waves the most.'],
        ['Optical fibres rely on…', ['Diffraction', 'Total internal reflection', 'Polarisation', 'Dispersion'], 1, 'Light is trapped by repeated reflection.'],
        ['Increasing slit separation in a double-slit experiment makes fringes…', ['Further apart', 'Closer together', 'Brighter only', 'Unchanged'], 1, 's = λD/d, so larger d means smaller s.'],
      ],
    ),
    'C.4': C(
      [
        'Standing waves form when two identical waves travelling in opposite directions superpose. They have nodes, with no displacement, and antinodes, with maximum displacement.',
        'Unlike travelling waves, standing waves don’t transfer energy along the medium.',
        'On a string fixed at both ends, the fundamental has wavelength twice the string length. In pipes, open ends are antinodes and closed ends are nodes.',
        'Resonance happens when a system is driven at its natural frequency, giving a large amplitude. Damping reduces amplitude; it can be light, critical or heavy.',
      ],
      [
        ['Node', 'A point on a standing wave with zero displacement.'],
        ['Fundamental on a string', 'λ = 2L'],
        ['Resonance', 'Large amplitude when driving frequency equals natural frequency.'],
        ['Critical damping', 'Returns to equilibrium fastest without oscillating.'],
      ],
      [
        ['Distance between adjacent nodes is…', ['λ', 'λ/2', 'λ/4', '2λ'], 1, 'Nodes are half a wavelength apart.'],
        ['A 1 m string’s fundamental wavelength is…', ['0.5 m', '1 m', '2 m', '4 m'], 2, 'λ = 2L = 2 m.'],
        ['Car suspension uses damping that is…', ['Light', 'Critical', 'None', 'Negative'], 1, 'It stops bouncing as quickly as possible.'],
      ],
    ),
    'C.5': C(
      [
        'The Doppler effect is the change in observed frequency when the source or observer moves.',
        'When a source moves towards you, waves are compressed, so frequency increases; moving away, frequency decreases.',
        'For sound, formulas depend on whether the source or observer is moving. For light at low speeds, the fractional change in wavelength equals v over c.',
        'Astronomers observe redshift in light from distant galaxies, showing they are moving away and the universe is expanding. Doppler ultrasound measures blood flow.',
      ],
      [
        ['Doppler effect', 'Change in observed frequency due to relative motion.'],
        ['Source moving towards observer', 'Observed frequency increases.'],
        ['Doppler for light', 'Δλ/λ ≈ v/c'],
        ['Redshift', 'Wavelength increases as a source moves away.'],
      ],
      [
        ['An ambulance siren sounds higher pitched when it…', ['Moves away', 'Moves towards you', 'Stops', 'Gets louder only'], 1, 'Waves are compressed ahead of the source.'],
        ['Redshift in distant galaxies shows they are…', ['Approaching', 'Receding', 'Stationary', 'Rotating'], 1, 'Wavelengths are stretched.'],
        ['A galaxy line shifts by 1% in wavelength. Its speed is about…', ['3 × 10⁴ m/s', '3 × 10⁶ m/s', '3 × 10⁸ m/s', '3 × 10² m/s'], 1, 'v = 0.01 × 3 × 10⁸ = 3 × 10⁶ m/s.'],
      ],
    ),
    'D.1': C(
      [
        'Newton’s law of gravitation: the force between two masses is proportional to their product and inversely proportional to the distance squared: F equals G m1 m2 over r squared.',
        'Gravitational field strength g equals force per unit mass. Near Earth it is about 9.81 newtons per kilogram.',
        'Kepler’s third law: T squared is proportional to r cubed for orbits. Orbits need gravity to provide the centripetal force.',
        'At HL, gravitational potential is the work done per unit mass to bring a mass from infinity; escape velocity is root of 2 G M over r.',
      ],
      [
        ['Newton’s law of gravitation', 'F = Gm₁m₂ / r²'],
        ['Gravitational field strength', 'g = F/m = GM/r²'],
        ['Kepler’s third law', 'T² ∝ r³'],
        ['Escape velocity (HL)', 'v = √(2GM/r)'],
      ],
      [
        ['Doubling the distance between two masses makes the force…', ['Half', 'A quarter', 'Double', 'Four times'], 1, 'F ∝ 1/r².'],
        ['Satellites stay in orbit because gravity provides…', ['Thrust', 'Centripetal force', 'Friction', 'Lift'], 1, 'Gravity keeps them moving in a circle.'],
        ['Kepler’s third law relates…', ['Mass and speed', 'Period and orbital radius', 'Force and area', 'Energy and time'], 1, 'T² ∝ r³.'],
      ],
    ),
    'D.2': C(
      [
        'Charge comes in positive and negative; like charges repel. Coulomb’s law: F equals k q1 q2 over r squared.',
        'Electric field strength is force per unit charge. Field lines go from positive to negative; between parallel plates the field is uniform: E equals V over d.',
        'Moving charges create magnetic fields. Field patterns around a wire are circles; a solenoid has a field like a bar magnet.',
        'At HL, electric potential and potential energy, equipotentials, and links between gravitational and electric fields are studied.',
      ],
      [
        ['Coulomb’s law', 'F = kq₁q₂ / r²'],
        ['Electric field strength', 'E = F/q'],
        ['Field between parallel plates', 'E = V/d (uniform)'],
        ['Field around a current-carrying wire', 'Concentric circles; direction from the right-hand rule.'],
      ],
      [
        ['Two plates 0.02 m apart have 100 V across them. E is…', ['2 V/m', '50 V/m', '5000 V/m', '200 V/m'], 2, '100 ÷ 0.02 = 5000 V/m.'],
        ['Electric field lines point…', ['From negative to positive', 'From positive to negative', 'In circles', 'Randomly'], 1, 'They show the force on a positive charge.'],
        ['Halving the distance between two charges makes the force…', ['Half', 'Double', 'Four times', 'A quarter'], 2, 'F ∝ 1/r².'],
      ],
    ),
    'D.3': C(
      [
        'A charged particle in an electric field feels a force qE in the field direction, and accelerates.',
        'A charge moving in a magnetic field feels a force F equals q v B sin theta, perpendicular to both velocity and field.',
        'Because the magnetic force is perpendicular to motion, it makes charges move in circles, with radius m v over q B.',
        'A current-carrying wire in a magnetic field feels a force F equals B I L sin theta. This is the motor effect; its direction is given by Fleming’s left-hand rule.',
      ],
      [
        ['Force on a moving charge', 'F = qvB sin θ'],
        ['Force on a current-carrying wire', 'F = BIL sin θ'],
        ['Radius of circular path in B field', 'r = mv / qB'],
        ['Motor effect', 'A current-carrying conductor in a magnetic field feels a force.'],
      ],
      [
        ['A charge moving parallel to a magnetic field feels…', ['Maximum force', 'No force', 'Half the force', 'A force along the field'], 1, 'sin 0° = 0.'],
        ['Why does a charge move in a circle in a B field?', ['The force is along the velocity', 'The force is perpendicular to velocity', 'The charge loses energy', 'Gravity'], 1, 'A perpendicular force provides centripetal force.'],
        ['A 0.5 m wire carries 2 A in a 0.1 T field at 90°. Force?', ['0.1 N', '1 N', '10 N', '0.25 N'], 0, 'F = 0.1 × 2 × 0.5 = 0.1 N.'],
      ],
    ),
    'D.4': C(
      [
        'Magnetic flux is B times area times cos theta. Flux linkage is flux times the number of turns.',
        'Faraday’s law: the induced emf equals the rate of change of flux linkage. Lenz’s law: the induced current opposes the change that caused it.',
        'Generators rotate coils in a magnetic field to produce alternating current.',
        'Transformers change alternating voltages; the voltage ratio equals the turns ratio. Power is transmitted at high voltage to reduce energy loss in cables.',
      ],
      [
        ['Magnetic flux', 'Φ = BA cos θ'],
        ['Faraday’s law', 'ε = −N ΔΦ/Δt'],
        ['Lenz’s law', 'The induced current opposes the change causing it.'],
        ['Transformer equation', 'Vs/Vp = Ns/Np'],
      ],
      [
        ['A transformer has 100 primary and 500 secondary turns. 12 V in gives…', ['2.4 V', '60 V', '12 V', '600 V'], 1, '12 × 5 = 60 V.'],
        ['Power lines use high voltage to…', ['Increase current', 'Reduce energy loss', 'Increase resistance', 'Store energy'], 1, 'Lower current means less I²R loss.'],
        ['Moving a magnet faster into a coil makes the induced emf…', ['Smaller', 'Larger', 'Zero', 'Constant'], 1, 'The flux changes faster.'],
      ],
    ),
    'E.1': C(
      [
        'The Geiger-Marsden experiment fired alpha particles at gold foil. Most passed straight through, but a few bounced back, showing a tiny, dense, positive nucleus.',
        'Atoms have discrete energy levels. When an electron drops a level, it emits a photon with energy E equals h f.',
        'Emission and absorption spectra identify elements, for example in stars.',
        'At HL, the Bohr model of hydrogen, the nuclear radius formula, and deviations from Rutherford scattering are also studied.',
      ],
      [
        ['Geiger-Marsden conclusion', 'Atoms have a small, dense, positive nucleus.'],
        ['Photon energy', 'E = hf'],
        ['Emission spectrum', 'Bright lines at specific wavelengths from electron transitions.'],
        ['Absorption spectrum', 'Dark lines where specific wavelengths are absorbed.'],
      ],
      [
        ['Most alpha particles passed straight through gold foil because atoms are…', ['Solid', 'Mostly empty space', 'Negative', 'Very large'], 1, 'The nucleus is tiny compared with the atom.'],
        ['A photon emitted from an energy drop of 3.0 × 10⁻¹⁹ J has frequency (h = 6.6 × 10⁻³⁴)…', ['4.5 × 10¹⁴ Hz', '2 × 10⁻⁵³ Hz', '4.5 × 10¹⁶ Hz', '2.2 × 10¹⁵ Hz'], 0, 'f = E/h ≈ 4.5 × 10¹⁴ Hz.'],
        ['Line spectra show that atomic energy levels are…', ['Continuous', 'Discrete', 'Random', 'Identical for all elements'], 1, 'Only certain energies are allowed.'],
      ],
    ),
    'E.2': C(
      [
        'The photoelectric effect: light above a threshold frequency ejects electrons from a metal, no matter how intense lower-frequency light is.',
        'Einstein explained this with photons: the maximum kinetic energy of electrons equals h f minus the work function.',
        'Matter also has wave properties. The de Broglie wavelength is h over momentum, confirmed by electron diffraction.',
        'Compton scattering, where X-ray photons lose energy when scattering off electrons, shows photons carry momentum.',
      ],
      [
        ['Photoelectric equation', 'Eₖmax = hf − Φ'],
        ['Work function', 'Minimum energy to release an electron from a metal.'],
        ['de Broglie wavelength', 'λ = h / p'],
        ['Evidence for wave nature of electrons', 'Electron diffraction.'],
      ],
      [
        ['Below the threshold frequency, increasing intensity…', ['Releases electrons', 'Releases no electrons', 'Increases KE', 'Lowers the work function'], 1, 'Each photon still lacks enough energy.'],
        ['Increasing the frequency of light above threshold increases…', ['Number of electrons only', 'Maximum KE of electrons', 'Work function', 'Nothing'], 1, 'KE = hf − Φ.'],
        ['Electron diffraction shows electrons behave as…', ['Particles only', 'Waves', 'Photons', 'Nuclei'], 1, 'Diffraction is a wave property.'],
      ],
    ),
    'E.3': C(
      [
        'Unstable nuclei decay by emitting alpha particles, helium nuclei; beta particles, electrons or positrons; or gamma rays.',
        'Alpha is the most ionising and least penetrating, stopped by paper. Beta is stopped by aluminium. Gamma is least ionising, reduced by thick lead.',
        'Decay is random, but a large sample follows a half-life: the time for half the nuclei to decay.',
        'Mass defect and binding energy explain nuclear stability: binding energy per nucleon peaks around iron. Background radiation comes from rocks, cosmic rays and medical sources.',
      ],
      [
        ['Alpha particle', 'Helium nucleus (2 protons, 2 neutrons).'],
        ['Half-life', 'Time for half the radioactive nuclei in a sample to decay.'],
        ['Most penetrating radiation', 'Gamma.'],
        ['Binding energy per nucleon peak', 'Around iron-56 (most stable).'],
      ],
      [
        ['A sample has a half-life of 5 days. After 15 days, fraction left?', ['1/2', '1/3', '1/8', '1/16'], 2, 'Three half-lives: (½)³ = 1/8.'],
        ['Which radiation is stopped by paper?', ['Alpha', 'Beta', 'Gamma', 'X-rays'], 0, 'Alpha particles are heavily ionising.'],
        ['In beta-minus decay, a neutron becomes…', ['A proton, electron and antineutrino', 'An alpha particle', 'A photon', 'Two protons'], 0, 'n → p + e⁻ + ν̄.'],
      ],
    ),
    'E.4': C(
      [
        'Nuclear fission is the splitting of a heavy nucleus, like uranium-235, into two lighter nuclei, releasing energy and neutrons.',
        'The neutrons can cause more fission, a chain reaction. Critical mass is the minimum mass for a sustained chain reaction.',
        'In a reactor, a moderator slows neutrons, control rods absorb neutrons to control the rate, and a heat exchanger transfers energy to produce steam.',
        'Fission produces no carbon dioxide while operating, but produces radioactive waste and carries the risk of accidents.',
      ],
      [
        ['Fission', 'Splitting of a heavy nucleus into lighter ones, releasing energy.'],
        ['Moderator', 'Slows neutrons so they can cause fission.'],
        ['Control rods', 'Absorb neutrons to control the reaction rate.'],
        ['Chain reaction', 'Neutrons from one fission cause further fissions.'],
      ],
      [
        ['Control rods in a reactor…', ['Speed up neutrons', 'Absorb neutrons', 'Cool the reactor', 'Produce steam'], 1, 'They control how many neutrons cause fission.'],
        ['The moderator’s role is to…', ['Absorb neutrons', 'Slow down neutrons', 'Shield radiation', 'Store fuel'], 1, 'Slow neutrons are more likely to be absorbed by U-235.'],
        ['A disadvantage of nuclear fission is…', ['High CO₂ emissions', 'Radioactive waste', 'Low energy density', 'Needs sunlight'], 1, 'Waste stays radioactive for a long time.'],
      ],
    ),
    'E.5': C(
      [
        'Fusion joins light nuclei, like hydrogen, to form heavier ones, releasing energy. It needs very high temperatures and pressures to overcome electrostatic repulsion.',
        'Stars are powered by fusion in their cores. A stable star balances inward gravity and outward radiation pressure.',
        'The Hertzsprung-Russell diagram plots luminosity against surface temperature, showing the main sequence, red giants and white dwarfs.',
        'Stellar evolution depends on mass: low-mass stars become white dwarfs; massive stars explode as supernovae, leaving neutron stars or black holes. Distances use parallax: d in parsecs equals one over parallax angle in arcseconds.',
      ],
      [
        ['Fusion', 'Joining light nuclei to form heavier ones, releasing energy.'],
        ['Why fusion needs high temperature', 'To overcome electrostatic repulsion between nuclei.'],
        ['HR diagram axes', 'Luminosity vs surface temperature (hot on the left).'],
        ['Parallax distance', 'd (pc) = 1 / p (arcsec)'],
      ],
      [
        ['A star stays stable when gravity is balanced by…', ['Magnetism', 'Radiation and gas pressure', 'Friction', 'Rotation only'], 1, 'Pressure from fusion pushes outward.'],
        ['The Sun will end its life as a…', ['Black hole', 'Neutron star', 'White dwarf', 'Supernova'], 2, 'Low-mass stars become white dwarfs.'],
        ['A star with parallax 0.5 arcsec is at…', ['0.5 pc', '2 pc', '5 pc', '50 pc'], 1, 'd = 1/0.5 = 2 pc.'],
      ],
    ),
  },
};

export default content;
