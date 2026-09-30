import type { MoreContent } from '../../types';
import { M } from '../helpers';

// Lesson 2 (worked calculations, practicals, common mistakes, exam technique) plus extra
// flashcards and questions for every Physics chapter.
const more: Record<string, MoreContent> = {
  'A.1': M(
    [
      'Worked example: a car at 10 m/s accelerates at 2 m/s² for 5 s. Final velocity: v equals u plus at, 10 plus 10, 20 m/s. Displacement: s equals ut plus one half a t squared, 50 plus 25, 75 m.',
      'Projectile worked example: a ball is kicked horizontally at 15 m/s from a 20 m cliff. Time to fall: 20 equals one half times 9.8 times t squared, so t is about 2.0 s. Horizontal range is 15 times 2.0, about 30 m.',
      'Air resistance increases with speed. A falling object accelerates until drag equals weight; then it moves at terminal velocity.',
      'Common mistake: mixing up distance and displacement. Displacement is a vector with direction; running a full lap has a displacement of zero.',
    ],
    [
      ['s = ut + ½at²', 'SUVAT equation for displacement without final velocity.'],
      ['Terminal velocity', 'Constant velocity reached when drag equals weight.'],
      ['Gradient of a displacement–time graph', 'Velocity.'],
      ['Vertical motion of a projectile', 'Constant acceleration g downward.'],
    ],
    [
      ['A car goes from 10 m/s to 20 m/s at 2 m/s². Distance travelled?', '75 m', ['50 m', '100 m', '25 m'], 'v² = u² + 2as: 400 = 100 + 4s, s = 75 m.'],
      ['A ball rolls off a table horizontally. Its horizontal velocity (no air resistance)…', 'Stays constant', ['Increases', 'Decreases', 'Becomes zero'], 'No horizontal force acts.'],
      ['A skydiver reaches terminal velocity when…', 'Drag equals weight', ['Weight is zero', 'Drag exceeds weight', 'The parachute opens'], 'Resultant force is zero.'],
      ['After running one full lap of a 400 m track, the displacement is…', '0 m', ['400 m', '200 m', '800 m'], 'You end where you started.'],
    ],
  ),
  'A.2': M(
    [
      'Newton’s third law: forces come in pairs, equal in size, opposite in direction, acting on different objects, like a rocket pushing gas backwards and the gas pushing the rocket forwards.',
      'Friction: static friction can be up to μs times the normal force; dynamic friction equals μd times the normal force. Worked example: a 10 kg box with μd of 0.3 has friction 0.3 times 98, about 29 N.',
      'On a force–time graph, the area under the curve is the impulse, the change in momentum.',
      'Circular motion: centripetal force equals m v squared over r, directed towards the centre. It is provided by another force, like tension, friction or gravity.',
    ],
    [
      ['Newton’s third law', 'Forces come in equal and opposite pairs acting on different objects.'],
      ['Dynamic friction', 'F = μd × normal force.'],
      ['Area under force–time graph', 'Impulse (change in momentum).'],
      ['Centripetal force', 'F = mv²/r towards the centre.'],
    ],
    [
      ['A 1000 kg car turns at 10 m/s on a curve of radius 50 m. Centripetal force?', '2000 N', ['200 N', '500 N', '20 000 N'], 'F = 1000 × 100 ÷ 50.'],
      ['A 5 kg box on a floor with μd = 0.2. Friction while sliding (g = 9.8)?', 'About 9.8 N', ['49 N', '1 N', '25 N'], '0.2 × 5 × 9.8.'],
      ['Newton’s third-law pair forces act on…', 'Different objects', ['The same object', 'Only stationary objects', 'Only in space'], 'That’s why they don’t cancel.'],
      ['A 0.5 kg ball changes velocity from +6 m/s to −4 m/s. Impulse size?', '5 N s', ['1 N s', '10 N s', '2.5 N s'], '0.5 × (6 − (−4)) = 5.'],
    ],
  ),
  'A.3': M(
    [
      'Worked example: a 60 kg student climbs 3 m of stairs in 4 s. Work against gravity is 60 times 9.8 times 3, about 1,760 J. Power is about 440 W.',
      'Work done by a force at an angle: W equals F s cos θ. Pulling a sledge with 50 N at 60° over 10 m does 50 times 10 times 0.5, 250 J.',
      'Elastic potential energy stored in a spring is one half k x squared. A spring with k of 200 N/m stretched 0.1 m stores 1 J.',
      'Sankey diagrams show energy transfers: arrow widths show amounts, and wasted energy, usually thermal, branches off.',
    ],
    [
      ['Work at an angle', 'W = Fs cos θ.'],
      ['Elastic potential energy', 'Eₚ = ½kx².'],
      ['Sankey diagram', 'Arrow diagram showing useful and wasted energy transfers.'],
      ['Joule', '1 J = 1 N m.'],
    ],
    [
      ['A spring (k = 400 N/m) is stretched 0.05 m. Energy stored?', '0.5 J', ['20 J', '10 J', '1 J'], '½ × 400 × 0.05².'],
      ['A 2 kg mass falls 5 m from rest (g = 10). Speed just before landing?', '10 m/s', ['5 m/s', '100 m/s', '50 m/s'], 'mgh = ½mv²: v = √(2gh) = 10.'],
      ['A 50 N force at 60° to the motion moves an object 4 m. Work done?', '100 J', ['200 J', '173 J', '50 J'], '50 × 4 × cos 60° = 100 J.'],
      ['A 1200 W kettle runs for 2 minutes. Energy used?', '144 000 J', ['2400 J', '600 J', '1200 J'], '1200 × 120 s.'],
    ],
  ),
  'A.4': M(
    [
      'Equilibrium of a rigid body needs two conditions: no resultant force and no resultant torque about any point.',
      'Worked example: a seesaw with a 400 N child 1.5 m left of the pivot balances a 300 N child at 2.0 m on the right: 600 N m each side.',
      'Newton’s second law for rotation: torque equals I times angular acceleration. A torque of 10 N m on I of 2 kg m² gives 5 rad/s².',
      'Rolling objects share energy between translational and rotational kinetic energy, so a hollow cylinder rolls down a slope more slowly than a solid one.',
    ],
    [
      ['Rotational equilibrium', 'Sum of clockwise torques equals sum of anticlockwise torques.'],
      ['Newton’s second law (rotation)', 'τ = Iα.'],
      ['Angular velocity', 'ω = Δθ/Δt, in rad s⁻¹.'],
      ['Why hollow cylinders roll slower', 'Larger moment of inertia takes more rotational KE.'],
    ],
    [
      ['A 10 N m torque acts on I = 2 kg m². Angular acceleration?', '5 rad s⁻²', ['20 rad s⁻²', '0.2 rad s⁻²', '12 rad s⁻²'], 'α = τ ÷ I.'],
      ['A 400 N child sits 1.5 m from a pivot. A 300 N child balances at…', '2.0 m', ['1.5 m', '1.0 m', '3.0 m'], '400 × 1.5 = 300 × d.'],
      ['Which rolls down a slope fastest?', 'Solid cylinder', ['Hollow cylinder', 'Ring', 'They tie always'], 'Less energy goes into rotation.'],
      ['A wheel turns 10 rad in 2 s. Its average angular velocity is…', '5 rad s⁻¹', ['20 rad s⁻¹', '0.2 rad s⁻¹', '12 rad s⁻¹'], 'ω = Δθ ÷ Δt.'],
    ],
  ),
  'A.5': M(
    [
      'The Lorentz factor gamma equals 1 over the square root of 1 minus v squared over c squared. At 0.6 c, gamma is 1.25; at 0.8 c, it is about 1.67.',
      'Worked example: a clock on a ship at 0.8 c ticks 6 s of proper time. An Earth observer measures 6 times 1.67, about 10 s.',
      'Proper time is measured by an observer at rest relative to the events; proper length is measured in the object’s rest frame. These are the shortest time and longest length.',
      'Spacetime diagrams: a light ray is drawn at 45°; the worldline of a moving object tilts towards it, and events simultaneous for one observer lie on lines parallel to their x-axis.',
    ],
    [
      ['Lorentz factor γ', '1 ÷ √(1 − v²/c²).'],
      ['Proper time', 'Time between events measured by an observer for whom they happen at the same place.'],
      ['Proper length', 'Length measured in the object’s rest frame.'],
      ['Light on a spacetime diagram', 'A line at 45°.'],
    ],
    [
      ['γ at v = 0.6c is…', '1.25', ['1.67', '0.8', '2.0'], '1 ÷ √(1 − 0.36) = 1 ÷ 0.8.'],
      ['A ship at 0.6c has proper length 100 m. Earth measures…', '80 m', ['125 m', '100 m', '60 m'], 'L = L₀ ÷ γ.'],
      ['Proper time is measured by…', 'The observer at rest relative to the events', ['Any observer', 'Only Earth observers', 'Light itself'], 'It is the shortest time interval.'],
      ['On a spacetime diagram a light ray is drawn at…', '45°', ['90°', '0°', '30°'], 'With ct and x on the axes.'],
    ],
  ),
  'B.1': M(
    [
      'Worked example: heating 0.5 kg of water from 20 °C to 100 °C needs 0.5 times 4,200 times 80, 168 kJ. Boiling it all away needs 0.5 times 2.26 times 10⁶, 1,130 kJ more.',
      'Conduction is transfer through vibrating particles and free electrons; convection is bulk movement of fluid due to density differences; radiation needs no medium.',
      'A black body is a perfect emitter and absorber. Emissivity, from 0 to 1, compares a real surface with a black body. Real power equals e σ A T⁴.',
      'Wien’s law worked example: the Sun’s peak wavelength is about 500 nm. T equals 2.9 times 10⁻³ divided by 500 times 10⁻⁹, about 5,800 K.',
    ],
    [
      ['Emissivity', 'Ratio of power emitted to that of a black body at the same temperature.'],
      ['Black body', 'Perfect absorber and emitter of radiation.'],
      ['Convection', 'Heat transfer by bulk movement of a fluid.'],
      ['Wien’s law', 'λmax T = 2.9 × 10⁻³ m K.'],
    ],
    [
      ['A star has peak wavelength 290 nm. Its surface temperature is about…', '10 000 K', ['1000 K', '5800 K', '290 K'], 'T = 2.9 × 10⁻³ ÷ 2.9 × 10⁻⁷.'],
      ['Energy to heat 2 kg of water by 10 K (c = 4200 J kg⁻¹ K⁻¹)?', '84 000 J', ['8400 J', '42 000 J', '840 J'], '2 × 4200 × 10.'],
      ['Heat transfer that needs no medium is…', 'Radiation', ['Conduction', 'Convection', 'Evaporation'], 'EM waves travel through a vacuum.'],
      ['A perfect black body has emissivity…', '1', ['0', '0.5', '100'], 'It emits the maximum possible.'],
    ],
  ),
  'B.2': M(
    [
      'Energy balance model: incoming power absorbed equals one quarter of the solar constant times 1 minus albedo, spread over the whole sphere; outgoing power is e σ T⁴.',
      'Worked example: with S of 1,360 W/m² and albedo 0.3, absorbed power is 1,360 over 4 times 0.7, about 238 W/m². Without greenhouse gases, this gives about 255 K, much colder than the real 288 K.',
      'Greenhouse gases absorb infrared because their molecules vibrate at matching frequencies, then re-emit in all directions, some back towards Earth.',
      'Feedback: warming melts ice, lowering albedo; warmer oceans hold less carbon dioxide; thawing permafrost releases methane. These amplify warming.',
    ],
    [
      ['Why divide the solar constant by 4', 'Earth intercepts a disc but radiates from a whole sphere (area ratio 4).'],
      ['Earth’s temperature without greenhouse effect', 'About 255 K (−18 °C).'],
      ['Why greenhouse gases absorb IR', 'Molecular vibrations resonate with infrared frequencies.'],
      ['Ice–albedo feedback', 'Melting ice lowers albedo, causing more absorption and warming.'],
    ],
    [
      ['Average solar power absorbed per m² of Earth’s surface (S = 1360, albedo 0.3) is about…', '238 W m⁻²', ['1360 W m⁻²', '952 W m⁻²', '340 W m⁻²'], '1360 ÷ 4 × 0.7.'],
      ['Without greenhouse gases, Earth’s average temperature would be about…', '255 K', ['288 K', '0 K', '373 K'], 'Around −18 °C.'],
      ['Which gas is NOT a greenhouse gas?', 'Nitrogen', ['Carbon dioxide', 'Methane', 'Water vapour'], 'N₂ doesn’t absorb infrared.'],
      ['Thawing permafrost is a positive feedback because it…', 'Releases methane that causes more warming', ['Cools the Earth', 'Increases albedo', 'Absorbs CO₂'], 'Warming causes more warming.'],
    ],
  ),
  'B.3': M(
    [
      'Worked example: a gas occupies 2.0 m³ at 100 kPa and 300 K. Heated to 450 K at constant pressure, its volume becomes 2.0 times 450 over 300, 3.0 m³.',
      'Kinetic theory assumptions: many identical particles in random motion, negligible volume, no forces except in collisions, and elastic collisions.',
      'Worked example: the average kinetic energy of a molecule at 300 K is three halves times 1.38 times 10⁻²³ times 300, about 6.2 times 10⁻²¹ J.',
      'Real gases deviate from ideal behaviour at high pressures and low temperatures, when particle volume and attractive forces matter.',
    ],
    [
      ['Pressure law', 'P ∝ T at constant volume.'],
      ['Kinetic theory assumptions', 'Random motion, negligible volume, elastic collisions, no forces between collisions.'],
      ['Avogadro constant', '6.02 × 10²³ mol⁻¹.'],
      ['Gas constant R', '8.31 J K⁻¹ mol⁻¹.'],
    ],
    [
      ['Gas at 2.0 m³, 300 K heated to 450 K at constant P. New volume?', '3.0 m³', ['1.3 m³', '2.0 m³', '4.5 m³'], 'V ∝ T.'],
      ['Average KE of a molecule at 300 K (k = 1.38 × 10⁻²³) is about…', '6.2 × 10⁻²¹ J', ['4.1 × 10⁻²¹ J', '1.2 × 10⁻²⁰ J', '300 J'], '1.5 × k × T.'],
      ['Gas pressure at constant temperature halves. The volume…', 'Doubles', ['Halves', 'Stays the same', 'Quadruples'], 'Boyle’s law.'],
      ['Real gases act least ideally at…', 'High pressure and low temperature', ['Low pressure and high temperature', 'Room conditions always', 'Zero pressure'], 'Particle volume and forces matter.'],
    ],
  ),
  'B.4': M(
    [
      'The first law: Q equals ΔU plus W, where W is work done by the gas. Worked example: 500 J of heat is added and the gas does 200 J of work; internal energy rises by 300 J.',
      'At constant pressure, work done equals P ΔV. A gas expanding by 0.01 m³ at 100 kPa does 1,000 J of work.',
      'On a P–V diagram, the area under the curve is the work done. In a cycle, the enclosed area is the net work done per cycle.',
      'Entropy change for heat transfer at constant temperature: ΔS equals Q over T. Heat flowing from hot to cold increases total entropy.',
    ],
    [
      ['Work done at constant pressure', 'W = PΔV.'],
      ['Area enclosed on a P–V cycle', 'Net work done per cycle.'],
      ['Isovolumetric process', 'Constant volume: no work done, Q = ΔU.'],
      ['Entropy change', 'ΔS = Q/T at constant temperature.'],
    ],
    [
      ['500 J of heat is added; the gas does 200 J of work. ΔU is…', '+300 J', ['+700 J', '−300 J', '+200 J'], 'ΔU = Q − W.'],
      ['A gas expands by 0.02 m³ at 200 kPa. Work done?', '4000 J', ['400 J', '10 000 J', '40 J'], 'W = PΔV.'],
      ['In an adiabatic compression, the temperature of the gas…', 'Rises', ['Falls', 'Stays the same', 'Becomes zero'], 'Work is done on the gas with no heat loss.'],
      ['On a P–V diagram, work done is the…', 'Area under the curve', ['Gradient', 'y-intercept', 'x-intercept'], 'W = ∫P dV.'],
    ],
  ),
  'B.5': M(
    [
      'Resistivity: R equals ρ L over A. A longer wire has more resistance; a thicker one has less.',
      'Worked example of internal resistance: emf 6.0 V, internal resistance 0.5 Ω, external resistor 2.5 Ω. Current is 6 divided by 3, 2 A. Terminal voltage is 2 times 2.5, 5 V; 1 V is “lost” inside the cell.',
      'Potential dividers split voltage between resistors in proportion to their resistance. With a thermistor or LDR, they make sensors, like automatic lights.',
      'Filament lamps are non-ohmic: as current increases, the filament heats up and resistance increases, giving a curved I–V graph.',
    ],
    [
      ['Resistivity equation', 'R = ρL/A.'],
      ['Potential divider', 'Two resistors in series share the supply voltage in proportion to resistance.'],
      ['LDR', 'Light-dependent resistor: resistance falls as light increases.'],
      ['Thermistor (NTC)', 'Resistance falls as temperature rises.'],
    ],
    [
      ['emf 6 V, internal resistance 1 Ω, external 5 Ω. Current?', '1 A', ['6 A', '1.2 A', '0.5 A'], 'I = 6 ÷ (5 + 1).'],
      ['Doubling the length of a wire makes its resistance…', 'Double', ['Halve', 'Stay the same', 'Quadruple'], 'R ∝ L.'],
      ['A 12 V supply across 4 Ω and 8 Ω in series. Voltage across the 8 Ω?', '8 V', ['4 V', '6 V', '12 V'], 'Voltage splits 1 : 2.'],
      ['As light intensity increases, an LDR’s resistance…', 'Decreases', ['Increases', 'Stays the same', 'Becomes infinite'], 'More light frees more charge carriers.'],
    ],
  ),
  'C.1': M(
    [
      'SHM equations: x equals x₀ sin ωt, with ω equals 2π f. Maximum speed is ω x₀ and maximum acceleration is ω squared x₀.',
      'Worked example: a mass on a spring with k of 50 N/m and m of 0.5 kg has period 2π times the square root of 0.01, about 0.63 s.',
      'Phase difference describes how far one oscillation is ahead of another, in radians. Displacement and acceleration are π radians out of phase.',
      'Practical: measure g using a pendulum. Time 20 oscillations, find T, and plot T squared against length; the gradient equals 4π squared over g.',
    ],
    [
      ['Angular frequency', 'ω = 2πf = 2π/T.'],
      ['Maximum speed in SHM', 'v = ωx₀.'],
      ['Finding g with a pendulum', 'Gradient of T² vs L = 4π²/g.'],
      ['Phase of acceleration vs displacement', 'π radians out of phase.'],
    ],
    [
      ['A pendulum of length 1.0 m (g = 9.8) has period about…', '2.0 s', ['1.0 s', '3.1 s', '0.5 s'], 'T = 2π√(1/9.8).'],
      ['An oscillator has ω = 4 rad/s and amplitude 0.1 m. Maximum speed?', '0.4 m/s', ['0.025 m/s', '1.6 m/s', '4 m/s'], 'v = ωx₀.'],
      ['Why time 20 oscillations instead of one?', 'To reduce the percentage uncertainty from reaction time', ['To make the pendulum faster', 'To change the period', 'To reduce air resistance'], 'The timing error is spread over many swings.'],
      ['Frequency 2 Hz gives an angular frequency of about…', '12.6 rad/s', ['2 rad/s', '6.3 rad/s', '0.5 rad/s'], 'ω = 2π × 2.'],
    ],
  ),
  'C.2': M(
    [
      'Worked example: radio station waves at 100 MHz have wavelength 3 times 10⁸ divided by 10⁸, 3 m.',
      'Displacement–distance graphs show the wave shape at one moment, giving wavelength. Displacement–time graphs show one point over time, giving period.',
      'Sound in air is about 340 m/s, much slower than light. Its speed is greater in liquids and solids because particles are closer.',
      'Polarisation only happens to transverse waves: a polarising filter lets through oscillations in one plane. This is evidence that light is transverse.',
    ],
    [
      ['Speed of sound in air', 'About 340 m s⁻¹.'],
      ['Polarisation', 'Restricting oscillations to one plane — only for transverse waves.'],
      ['Period from frequency', 'T = 1/f.'],
      ['Displacement–distance graph', 'Shows the wave at an instant; gives wavelength.'],
    ],
    [
      ['A 100 MHz radio wave has wavelength…', '3 m', ['30 m', '0.3 m', '300 m'], 'λ = c ÷ f.'],
      ['Which cannot be polarised?', 'Sound waves', ['Light', 'Radio waves', 'Microwaves'], 'Sound is longitudinal.'],
      ['A wave has frequency 25 Hz. Its period is…', '0.04 s', ['25 s', '0.4 s', '4 s'], 'T = 1 ÷ f.'],
      ['Sound travels fastest in…', 'Steel', ['Air', 'Water', 'A vacuum'], 'Particles are closest in solids.'],
    ],
  ),
  'C.3': M(
    [
      'Worked example of Snell’s law: light enters glass, n of 1.5, at 30°. Sin r equals sin 30 divided by 1.5, 0.333, so r is about 19.5°.',
      'Critical angle: sin c equals 1 over n. For glass with n of 1.5, c is about 42°. Above this, total internal reflection happens.',
      'Double-slit fringe spacing: s equals λ D over d. With 600 nm light, slits 0.5 mm apart and a screen 2 m away, s is 2.4 mm.',
      'A diffraction grating gives sharper, brighter maxima: d sin θ equals n λ. It is used in spectroscopes to measure wavelengths accurately.',
    ],
    [
      ['Critical angle equation', 'sin c = 1/n.'],
      ['Diffraction grating equation', 'd sin θ = nλ.'],
      ['Path difference for constructive interference', 'A whole number of wavelengths, nλ.'],
      ['Refractive index', 'n = c ÷ speed of light in the medium.'],
    ],
    [
      ['Critical angle for glass with n = 1.5 is about…', '42°', ['30°', '60°', '19°'], 'sin c = 1/1.5.'],
      ['600 nm light, slits 0.5 mm apart, screen 2 m away. Fringe spacing?', '2.4 mm', ['0.24 mm', '24 mm', '1.2 mm'], 's = λD/d.'],
      ['Destructive interference occurs when path difference is…', 'Half a wavelength (or odd multiples)', ['A whole wavelength', 'Zero', 'Two wavelengths'], 'Waves arrive in antiphase.'],
      ['Light speed in a medium with n = 2 is…', '1.5 × 10⁸ m/s', ['3 × 10⁸ m/s', '6 × 10⁸ m/s', '1 × 10⁸ m/s'], 'v = c ÷ n.'],
    ],
  ),
  'C.4': M(
    [
      'Harmonics on a string: the nth harmonic has wavelength 2L over n, so frequencies are n times the fundamental.',
      'Pipes: a pipe open at both ends has antinodes at both ends, fundamental wavelength 2L. A pipe closed at one end has a node at the closed end, fundamental wavelength 4L, and only odd harmonics.',
      'Worked example: a 0.85 m closed pipe has fundamental wavelength 3.4 m. With sound at 340 m/s, the frequency is 100 Hz.',
      'Damping types: light damping, oscillations slowly decrease; critical damping, returns to equilibrium fastest without oscillating; heavy damping, returns slowly without oscillating.',
    ],
    [
      ['Closed pipe fundamental', 'λ = 4L; only odd harmonics.'],
      ['Open pipe fundamental', 'λ = 2L.'],
      ['Antinode', 'Point of maximum amplitude in a standing wave.'],
      ['Heavy damping', 'Slow return to equilibrium with no oscillation.'],
    ],
    [
      ['A 0.85 m pipe closed at one end (v = 340 m/s) has fundamental frequency…', '100 Hz', ['200 Hz', '400 Hz', '50 Hz'], 'λ = 4L = 3.4 m, f = v/λ.'],
      ['A string’s fundamental is 200 Hz. Its third harmonic is…', '600 Hz', ['400 Hz', '300 Hz', '66.7 Hz'], 'fₙ = n × f₁.'],
      ['Which harmonics exist in a pipe closed at one end?', 'Odd harmonics only', ['Even harmonics only', 'All harmonics', 'None'], 'A node must be at the closed end.'],
      ['The Tacoma Narrows Bridge collapse is often linked to…', 'Oscillations driven by wind', ['Critical damping', 'Refraction', 'The Doppler effect'], 'Large wind-driven oscillations destroyed it in 1940.'],
    ],
  ),
  'C.5': M(
    [
      'Worked example for sound: a source moves towards you at 20 m/s emitting 500 Hz, sound speed 340 m/s. Observed frequency is 500 times 340 over 320, about 531 Hz.',
      'For light at speeds much less than c, the fractional change in wavelength equals v over c. A 0.5% redshift means the galaxy recedes at about 1.5 times 10⁶ m/s.',
      'Applications: police radar guns, Doppler ultrasound to measure blood flow, and detecting exoplanets from the wobble of their stars.',
      'Hubble found that more distant galaxies have larger redshifts, evidence that the universe is expanding.',
    ],
    [
      ['Moving source (towards)', 'f′ = f × v ÷ (v − us).'],
      ['Δλ/λ ≈ v/c', 'Doppler shift for light at low speeds.'],
      ['Doppler ultrasound', 'Measures blood flow speed from frequency shifts.'],
      ['Hubble’s observation', 'More distant galaxies have greater redshift.'],
    ],
    [
      ['A 500 Hz source approaches at 20 m/s (v sound = 340 m/s). Observed frequency?', 'About 531 Hz', ['About 472 Hz', '500 Hz', 'About 560 Hz'], 'f′ = 500 × 340 ÷ 320.'],
      ['A galaxy shows a 0.5% redshift. Its speed is about…', '1.5 × 10⁶ m/s', ['1.5 × 10⁸ m/s', '3 × 10⁶ m/s', '1.5 × 10⁴ m/s'], 'v = 0.005 × 3 × 10⁸.'],
      ['Doppler ultrasound is used to measure…', 'Blood flow speed', ['Bone density', 'Body temperature', 'Blood type'], 'Moving blood shifts reflected frequencies.'],
      ['Blueshift in a star’s spectrum means the star is…', 'Moving towards us', ['Moving away', 'Stationary', 'Getting hotter'], 'Wavelengths are compressed.'],
    ],
  ),
  'D.1': M(
    [
      'Worked example: g at Earth’s surface equals GM over r squared: 6.67 times 10⁻¹¹ times 6.0 times 10²⁴, divided by 6.4 times 10⁶ squared, about 9.8 N/kg.',
      'Orbital speed: setting gravitational force equal to centripetal force gives v equals the square root of GM over r. Higher orbits are slower.',
      'Geostationary satellites orbit above the equator with a period of 24 hours, staying over one point, at about 36,000 km altitude.',
      'At HL, gravitational potential energy is minus GMm over r; escape velocity is the square root of 2GM over r, about 11 km/s for Earth.',
    ],
    [
      ['Orbital speed', 'v = √(GM/r).'],
      ['Geostationary orbit', '24-hour period above the equator, about 36,000 km up.'],
      ['G', '6.67 × 10⁻¹¹ N m² kg⁻².'],
      ['Earth’s escape velocity', 'About 11.2 km/s.'],
    ],
    [
      ['A satellite moves to a higher orbit. Its orbital speed…', 'Decreases', ['Increases', 'Stays the same', 'Becomes zero'], 'v = √(GM/r).'],
      ['A geostationary satellite has a period of…', '24 hours', ['12 hours', '90 minutes', '365 days'], 'It matches Earth’s rotation.'],
      ['At twice Earth’s radius from its centre, g is about…', '2.5 N/kg', ['4.9 N/kg', '9.8 N/kg', '19.6 N/kg'], 'g ∝ 1/r², so 9.8 ÷ 4.'],
      ['Earth’s escape velocity is about…', '11 km/s', ['3 km/s', '300 km/s', '1 km/s'], '√(2GM/r).'],
    ],
  ),
  'D.2': M(
    [
      'Worked example of Coulomb’s law: two charges of 1 μC, 0.1 m apart. F equals 8.99 times 10⁹ times 10⁻¹² divided by 0.01, about 0.9 N, repulsive.',
      'Charge is quantised in units of e, 1.6 times 10⁻¹⁹ C. Charging by friction transfers electrons; charge is always conserved.',
      'Magnetic field patterns: around a straight wire, concentric circles using the right-hand grip rule; inside a solenoid, a uniform field like a bar magnet’s.',
      'At HL, electric potential is work done per unit charge from infinity, V equals kQ over r. Field strength equals minus the potential gradient.',
    ],
    [
      ['Elementary charge e', '1.6 × 10⁻¹⁹ C.'],
      ['Coulomb constant k', '8.99 × 10⁹ N m² C⁻².'],
      ['Right-hand grip rule', 'Thumb along current, fingers show field direction.'],
      ['Solenoid field', 'Uniform inside, like a bar magnet outside.'],
    ],
    [
      ['Two 1 μC charges 0.1 m apart. The force is about…', '0.9 N', ['9 N', '0.09 N', '90 N'], 'F = kq₁q₂/r².'],
      ['An object gains 3 electrons. Its charge is…', '−4.8 × 10⁻¹⁹ C', ['+4.8 × 10⁻¹⁹ C', '−1.6 × 10⁻¹⁹ C', '−3 C'], '3 × −1.6 × 10⁻¹⁹.'],
      ['The field inside a long solenoid is…', 'Uniform', ['Zero', 'Circular', 'Radial'], 'Field lines are parallel inside.'],
      ['Charging by rubbing transfers…', 'Electrons', ['Protons', 'Neutrons', 'Nuclei'], 'Only electrons move.'],
    ],
  ),
  'D.3': M(
    [
      'Worked example: an electron at 2 times 10⁶ m/s enters a 0.01 T field at 90°. Radius r equals mv over qB: 9.11 times 10⁻³¹ times 2 times 10⁶, divided by 1.6 times 10⁻¹⁹ times 0.01, about 1.1 mm.',
      'Fleming’s left-hand rule: first finger for field, second finger for current, thumb for the force or motion. Remember current is the direction of positive charge.',
      'Velocity selector: crossed electric and magnetic fields let particles pass undeflected only when qE equals qvB, so v equals E over B.',
      'Two parallel wires carrying current in the same direction attract; in opposite directions they repel.',
    ],
    [
      ['Fleming’s left-hand rule', 'Field (first finger), current (second finger), force (thumb).'],
      ['Velocity selector', 'Undeflected particles have v = E/B.'],
      ['Parallel currents', 'Same direction attract; opposite directions repel.'],
      ['Magnetic force and work', 'The force is perpendicular to velocity, so it does no work.'],
    ],
    [
      ['In a velocity selector with E = 1000 V/m and B = 0.01 T, undeflected particles have speed…', '1 × 10⁵ m/s', ['10 m/s', '1 × 10⁻⁵ m/s', '1000 m/s'], 'v = E/B.'],
      ['Two parallel wires carry currents in the same direction. They…', 'Attract', ['Repel', 'Don’t interact', 'Rotate'], 'Their fields interact to pull them together.'],
      ['A magnetic field does no work on a moving charge because…', 'The force is perpendicular to its velocity', ['There is no force', 'Charge is conserved', 'The field is uniform'], 'Speed stays constant.'],
      ['Increasing B in a circular-path experiment makes the radius…', 'Smaller', ['Larger', 'Unchanged', 'Infinite'], 'r = mv/qB.'],
    ],
  ),
  'D.4': M(
    [
      'Worked example of Faraday’s law: a 200-turn coil’s flux changes by 0.03 Wb in 0.1 s. The emf is 200 times 0.03 divided by 0.1, 60 V.',
      'Lenz’s law is conservation of energy: the induced current creates a field that opposes the change, so work must be done to push a magnet into a coil.',
      'AC values: the root-mean-square voltage is the peak divided by root 2. UK mains at 230 V rms has a peak of about 325 V.',
      'Real transformers lose energy through eddy currents, reduced by laminated cores, and resistance heating in coils. Efficiency is often over 95%.',
    ],
    [
      ['rms voltage', 'V_rms = V₀ ÷ √2.'],
      ['Eddy currents', 'Induced currents in a core causing energy loss; reduced by laminations.'],
      ['Weber (Wb)', 'Unit of magnetic flux: 1 Wb = 1 T m².'],
      ['Step-up transformer', 'More secondary turns than primary; increases voltage.'],
    ],
    [
      ['Flux linkage changes by 6 Wb in 0.2 s. The emf is…', '30 V', ['1.2 V', '6 V', '0.03 V'], 'ε = ΔNΦ/Δt.'],
      ['Peak voltage 325 V gives rms voltage of about…', '230 V', ['325 V', '460 V', '163 V'], '325 ÷ √2.'],
      ['Laminated transformer cores reduce…', 'Eddy currents', ['Voltage', 'Turns ratio', 'Frequency'], 'Thin insulated layers block large induced currents.'],
      ['Lenz’s law is a consequence of conservation of…', 'Energy', ['Momentum', 'Charge', 'Mass'], 'Otherwise energy would be created.'],
    ],
  ),
  'E.1': M(
    [
      'Worked example: photon energy E equals hf, and f equals c over λ. A 500 nm photon has energy 6.63 times 10⁻³⁴ times 3 times 10⁸ divided by 5 times 10⁻⁷, about 4.0 times 10⁻¹⁹ J, or 2.5 eV.',
      'The electronvolt is the energy gained by an electron moving through 1 V: 1 eV equals 1.6 times 10⁻¹⁹ J.',
      'Nuclear notation: mass number A on top, atomic number Z below. The nucleus is about 10⁻¹⁵ m across, while the atom is about 10⁻¹⁰ m.',
      'Absorption spectra from stars show dark lines where elements in the star’s atmosphere absorbed specific wavelengths, revealing their composition.',
    ],
    [
      ['Electronvolt', '1 eV = 1.6 × 10⁻¹⁹ J.'],
      ['Photon energy with wavelength', 'E = hc/λ.'],
      ['Size of a nucleus', 'About 10⁻¹⁵ m (atom about 10⁻¹⁰ m).'],
      ['Planck’s constant', 'h = 6.63 × 10⁻³⁴ J s.'],
    ],
    [
      ['A 500 nm photon has energy of about…', '2.5 eV', ['0.25 eV', '25 eV', '500 eV'], 'E ≈ 4.0 × 10⁻¹⁹ J ÷ 1.6 × 10⁻¹⁹.'],
      ['3.2 × 10⁻¹⁹ J is equal to…', '2 eV', ['0.5 eV', '3.2 eV', '5.1 eV'], 'Divide by 1.6 × 10⁻¹⁹.'],
      ['Dark lines in a star’s spectrum are caused by…', 'Absorption by elements in its atmosphere', ['Emission from its core', 'Dust on telescopes', 'Doppler effect alone'], 'Specific wavelengths are absorbed.'],
      ['Compared with the atom, the nucleus is about…', '100 000 times smaller', ['10 times smaller', 'The same size', '1000 times bigger'], '10⁻¹⁰ ÷ 10⁻¹⁵.'],
    ],
  ),
  'E.2': M(
    [
      'Worked example: light of 6 eV hits a metal with work function 4 eV. The maximum kinetic energy of photoelectrons is 2 eV, and the stopping potential is 2 V.',
      'Threshold frequency equals work function over h. Below it, no electrons are emitted, however bright the light, which the wave model can’t explain.',
      'De Broglie worked example: an electron at 1 times 10⁶ m/s has λ equals h over mv, 6.63 times 10⁻³⁴ divided by 9.11 times 10⁻²⁵, about 7.3 times 10⁻¹⁰ m, similar to atomic spacing, so crystals diffract it.',
      'Wave–particle duality: light and matter show both wave and particle behaviour depending on the experiment.',
    ],
    [
      ['Stopping potential', 'Voltage that stops the fastest photoelectrons: eV_s = E_k max.'],
      ['Threshold frequency', 'f₀ = Φ/h.'],
      ['Wave–particle duality', 'Light and matter show both wave and particle properties.'],
      ['Why electron diffraction works in crystals', 'Electron wavelength is similar to atomic spacing.'],
    ],
    [
      ['6 eV photons hit a metal with Φ = 4 eV. Maximum KE of electrons?', '2 eV', ['10 eV', '4 eV', '24 eV'], 'E_k = hf − Φ.'],
      ['Photoelectrons have maximum KE 3 eV. The stopping potential is…', '3 V', ['1 V', '4.8 V', '0.3 V'], 'eV_s = E_k max.'],
      ['Increasing the speed of an electron makes its de Broglie wavelength…', 'Shorter', ['Longer', 'Unchanged', 'Zero'], 'λ = h/mv.'],
      ['Which observation supports the particle model of light?', 'The photoelectric effect', ['Diffraction', 'Interference', 'Polarisation'], 'Energy comes in photons.'],
    ],
  ),
  'E.3': M(
    [
      'Decay equations must balance mass and atomic numbers. Alpha: uranium-238 becomes thorium-234 plus helium-4. Beta minus: carbon-14 becomes nitrogen-14 plus an electron and an antineutrino.',
      'Worked example of mass defect: binding energy equals Δm times c squared. A mass defect of 0.03 u releases about 0.03 times 931.5 MeV, about 28 MeV.',
      'Background radiation comes from radon gas, rocks, cosmic rays, food and medical sources. Subtract it from count rates in experiments.',
      'At HL, the decay constant λ relates to half-life: λ equals ln 2 over T½. Activity A equals λN.',
    ],
    [
      ['Alpha decay effect', 'A decreases by 4, Z by 2.'],
      ['Beta-minus decay effect', 'A unchanged, Z increases by 1.'],
      ['Atomic mass unit energy', '1 u ≈ 931.5 MeV/c².'],
      ['Background radiation sources', 'Radon, rocks, cosmic rays, food, medical.'],
    ],
    [
      ['Uranium-238 (Z = 92) emits an alpha particle. The new nucleus is…', 'Thorium-234 (Z = 90)', ['Uranium-234 (Z = 92)', 'Protactinium-238 (Z = 91)', 'Thorium-238 (Z = 90)'], 'A − 4, Z − 2.'],
      ['Carbon-14 (Z = 6) undergoes beta-minus decay to…', 'Nitrogen-14 (Z = 7)', ['Boron-14 (Z = 5)', 'Carbon-13', 'Oxygen-18'], 'A neutron becomes a proton.'],
      ['A mass defect of 0.01 u corresponds to about…', '9.3 MeV', ['0.93 MeV', '93 MeV', '931 MeV'], '0.01 × 931.5.'],
      ['The biggest source of natural background radiation in many places is…', 'Radon gas', ['Mobile phones', 'Microwaves', 'Visible light'], 'It seeps from rocks.'],
    ],
  ),
  'E.4': M(
    [
      'A typical fission reaction: uranium-235 absorbs a neutron, becomes unstable uranium-236, and splits into barium-141 and krypton-92 plus three neutrons and about 200 MeV of energy.',
      'Energy released comes from the mass defect: the products have slightly less mass than the reactants, and E equals mc squared.',
      'Reactor parts: fuel rods of enriched uranium; a moderator, like water or graphite; control rods of boron or cadmium; a coolant to carry heat to make steam; and shielding.',
      'Evaluate: nuclear power is low-carbon and reliable, but has high build costs, long-lived waste and accident risks, like Chernobyl in 1986 and Fukushima in 2011.',
    ],
    [
      ['Energy per U-235 fission', 'About 200 MeV.'],
      ['Enriched uranium', 'Increased proportion of U-235, typically 3–5% for reactors.'],
      ['Coolant', 'Removes heat from the reactor core to make steam.'],
      ['Critical mass', 'Minimum mass of fissile material needed for a sustained chain reaction.'],
    ],
    [
      ['Energy released per fission of U-235 is about…', '200 MeV', ['2 MeV', '2000 MeV', '20 eV'], 'Much more than chemical reactions.'],
      ['Control rods are often made of…', 'Boron or cadmium', ['Graphite', 'Water', 'Uranium'], 'They absorb neutrons well.'],
      ['Reactor-grade uranium is enriched to about…', '3–5% U-235', ['100% U-235', '0.7% U-235', '50% U-235'], 'Natural uranium is only 0.7% U-235.'],
      ['The energy from fission comes from…', 'A decrease in mass (mass defect)', ['Chemical bonds breaking', 'Electrons moving', 'Gravity'], 'E = mc².'],
    ],
  ),
  'E.5': M(
    [
      'In the Sun, the proton–proton chain fuses hydrogen into helium. Every second, the Sun converts about 4 million tonnes of mass into energy.',
      'Luminosity equals σ A T⁴; apparent brightness b equals L over 4π d squared. Comparing b and L lets astronomers find distances.',
      'Worked example: parallax of 0.1 arcseconds gives a distance of 10 parsecs. One parsec is about 3.26 light years.',
      'Massive stars fuse heavier elements up to iron in shells. Elements heavier than iron form in supernovae and neutron star mergers.',
    ],
    [
      ['Apparent brightness', 'b = L ÷ 4πd².'],
      ['Parsec', 'Distance at which parallax is 1 arcsecond; about 3.26 light years.'],
      ['Proton–proton chain', 'Fusion of hydrogen into helium in Sun-like stars.'],
      ['Where heavy elements form', 'Supernovae and neutron star mergers.'],
    ],
    [
      ['A star has parallax 0.1 arcsec. Its distance is…', '10 pc', ['0.1 pc', '1 pc', '100 pc'], 'd = 1/p.'],
      ['If a star is twice as far away, its apparent brightness is…', 'A quarter', ['Half', 'Double', 'The same'], 'b ∝ 1/d².'],
      ['Elements heavier than iron are formed mainly in…', 'Supernovae and neutron star mergers', ['The Sun’s core', 'Red dwarfs', 'Planets'], 'Fusion beyond iron absorbs energy.'],
      ['Main sequence stars fuse…', 'Hydrogen into helium in their cores', ['Helium into hydrogen', 'Iron into gold', 'Carbon into hydrogen'], 'This is the longest stage of a star’s life.'],
    ],
  ),
};

export default more;
