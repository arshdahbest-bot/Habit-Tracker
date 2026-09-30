import type { SubjectContentFile } from '../types';
import { C } from './helpers';

const content: SubjectContentFile = {
  units: {
    '1': [
      'Topic 1, number and algebra, focuses on using numbers in real contexts: scientific notation, sequences, financial maths, approximation and solving equations with technology.',
      'At HL it adds laws of logarithms, complex numbers, matrices, and eigenvalues and eigenvectors.',
      'Maths AI expects you to use your GDC confidently, especially the finance and equation solvers.',
    ],
    '2': [
      'Topic 2, functions, is about modelling real situations.',
      'You will choose and fit linear, quadratic, cubic, exponential, sinusoidal and variation models, and reflect on how good they are. HL adds logistic and piecewise models and linearising data with logarithms.',
    ],
    '3': [
      'Topic 3, geometry and trigonometry, covers 3D shapes, trigonometry and a distinctive AI topic: Voronoi diagrams.',
      'At HL it adds matrix transformations, vectors and kinematics, and graph theory with algorithms like Kruskal, Prim and the travelling salesman.',
    ],
    '4': [
      'Topic 4, statistics and probability, is the heart of Maths AI.',
      'You will summarise data, measure correlation, work with probability and distributions, and carry out hypothesis tests such as chi-squared and t-tests. HL adds confidence intervals, the Poisson distribution and Markov chains.',
    ],
    '5': [
      'Topic 5, calculus, introduces derivatives and integrals, with a focus on applications like optimisation and approximating areas.',
      'At HL it extends to further differentiation and integration, kinematics, differential equations, slope fields, Euler’s method and phase portraits.',
    ],
  },
  chapters: {
    '1.1-1.3': C(
      [
        'Scientific notation writes numbers as a times ten to the power k, where a is at least one and less than ten. It is used for very large or small quantities.',
        'An arithmetic sequence adds a common difference d. Its nth term is u one plus n minus one times d, and it models simple interest and linear growth.',
        'A geometric sequence multiplies by a common ratio r. Its nth term is u one times r to the n minus one, and it models percentage growth and decay.',
        'Use the sum formulas from the booklet, or your GDC’s sequence and sum functions, to answer real-world questions.',
      ],
      [
        ['nth term, arithmetic', 'uₙ = u₁ + (n − 1)d'],
        ['nth term, geometric', 'uₙ = u₁rⁿ⁻¹'],
        ['Arithmetic sequence models', 'Simple interest, linear growth.'],
        ['Geometric sequence models', 'Percentage growth and decay.'],
      ],
      [
        ['Seats per row: 20, 23, 26, … How many in row 15?', ['62', '65', '59', '42'], 0, '20 + 14 × 3 = 62.'],
        ['A population of 800 grows 5% per year. After 2 years it is', ['880', '882', '840', '1000'], 1, '800 × 1.05² = 882.'],
        ['4.2 × 10³ × 2 × 10⁴ =', ['8.4 × 10⁷', '8.4 × 10¹²', '6.2 × 10⁷', '8.4 × 10⁶'], 0, 'Multiply 4.2 × 2 and add the powers.'],
      ],
    ),
    '1.4': C(
      [
        'Compound interest adds interest to the principal each period, so money grows geometrically.',
        'Future value equals present value times one plus r over 100 k, to the power k n, where k is the number of compounding periods per year and n the number of years.',
        'Annual depreciation reduces value by a fixed percentage: V equals V zero times one minus r over 100, to the power n.',
        'In Maths AI you should use the TVM solver on your GDC. Remember that money paid out is entered as negative.',
      ],
      [
        ['Compound interest', 'FV = PV(1 + r/(100k))^(kn)'],
        ['Depreciation', 'V = V₀(1 − r/100)ⁿ'],
        ['TVM sign convention', 'Money you pay out is negative; money you receive is positive.'],
        ['k for quarterly compounding', '4'],
      ],
      [
        ['$2000 at 3% compounded annually for 2 years', ['$2120.00', '$2121.80', '$2060.00', '$2180.00'], 1, '2000 × 1.03² = 2121.80.'],
        ['A laptop worth $1500 depreciates 20% per year. Value after 2 years', ['$960', '$900', '$1200', '$1080'], 0, '1500 × 0.8² = 960.'],
        ['Interest compounded quarterly means k =', ['1', '2', '4', '12'], 2, 'Four quarters per year.'],
      ],
    ),
    '1.5': C(
      [
        'Laws of exponents apply to integer powers: multiply by adding powers, divide by subtracting, and a power of a power multiplies the powers.',
        'A negative exponent means a reciprocal: a to the minus n equals one over a to the n.',
        'A logarithm is the inverse of an exponent. Log base 10 of 1000 equals 3 because 10 cubed is 1000. Natural log, ln, uses base e.',
        'Use logs, or your GDC, to solve equations like 2 to the x equals 50.',
      ],
      [
        ['aᵐ × aⁿ', 'aᵐ⁺ⁿ'],
        ['a⁻ⁿ', '1/aⁿ'],
        ['log₁₀ 1000', '3'],
        ['Natural log', 'ln x = logₑ x'],
      ],
      [
        ['2³ × 2⁴ =', ['2⁷', '2¹²', '4⁷', '2¹'], 0, 'Add powers.'],
        ['5⁻² =', ['−25', '1/25', '−10', '1/10'], 1, 'Reciprocal of 25.'],
        ['Solve 2ˣ = 50 (3 s.f.)', ['5.64', '25', '6.25', '5.00'], 0, 'x = ln 50 / ln 2 ≈ 5.64.'],
      ],
    ),
    '1.6': C(
      [
        'Approximation rounds numbers to decimal places or significant figures. State answers to three significant figures unless told otherwise.',
        'Upper and lower bounds give the range a rounded value could come from: 5.4 to one decimal place lies between 5.35 and 5.45.',
        'Percentage error equals the absolute value of approximate minus exact, over exact, times 100.',
        'Estimation helps check whether a calculator answer is reasonable.',
      ],
      [
        ['Percentage error', '|v_A − v_E| / |v_E| × 100%'],
        ['Bounds of 5.4 (1 d.p.)', '5.35 ≤ x < 5.45'],
        ['Default accuracy in IB', 'Three significant figures.'],
        ['Why estimate?', 'To check calculator answers are reasonable.'],
      ],
      [
        ['Exact 50, estimate 48. Percentage error', ['2%', '4%', '4.17%', '96%'], 1, '2/50 × 100.'],
        ['0.004 567 to 3 s.f.', ['0.00457', '0.005', '0.0046', '0.004567'], 0, 'First three significant digits: 4, 5, 6 → 457.'],
        ['Lower bound of 120 cm to the nearest 10 cm', ['115 cm', '119.5 cm', '110 cm', '125 cm'], 0, 'Half of 10 below 120.'],
      ],
    ),
    '1.7': C(
      [
        'A loan is amortized when it is paid off in regular instalments that cover interest and part of the principal.',
        'An annuity is a series of equal payments at regular intervals, such as a pension or savings plan.',
        'Use the TVM solver with N the number of payments, I percent the annual rate, PV, PMT, FV, and payments and compounding per year.',
        'An amortization table shows how each payment splits between interest and principal: early payments are mostly interest.',
      ],
      [
        ['Amortization', 'Paying off a loan through regular instalments.'],
        ['Annuity', 'A series of equal regular payments.'],
        ['TVM variables', 'N, I%, PV, PMT, FV, P/Y, C/Y'],
        ['Early loan payments', 'Mostly interest.'],
      ],
      [
        ['For a loan, PV on the TVM solver is entered as', ['Negative', 'Positive (money received)', 'Zero', 'The payment'], 1, 'You receive the loan amount.'],
        ['When a loan is fully repaid, FV =', ['PV', '0', 'PMT', 'N'], 1, 'Nothing is left owing.'],
        ['A 5-year loan with monthly payments has N =', ['5', '12', '60', '365'], 2, '5 × 12.'],
      ],
    ),
    '1.8': C(
      [
        'Systems of linear equations can be solved with your GDC’s simultaneous equation solver, for up to three unknowns in SL.',
        'Polynomial equations of degree up to four can also be solved with technology.',
        'Set up equations from a context first: define variables, then form one equation per piece of information.',
        'Check solutions make sense in context, for example a number of tickets can’t be negative.',
      ],
      [
        ['Tool for simultaneous equations', 'GDC equation solver.'],
        ['First step with word problems', 'Define the variables.'],
        ['Polynomial solver', 'Finds real roots of polynomials with technology.'],
        ['Checking', 'Make sure solutions fit the context.'],
      ],
      [
        ['Adult tickets $10, child $6. 20 tickets cost $160. Adults?', ['10', '8', '12', '15'], 0, 'a + c = 20, 10a + 6c = 160 ⇒ a = 10.'],
        ['Solve x² − x − 6 = 0', ['x = 3, −2', 'x = −3, 2', 'x = 6, −1', 'x = 1, 6'], 0, '(x − 3)(x + 2) = 0.'],
        ['A system with 3 unknowns generally needs', ['1 equation', '2 equations', '3 equations', '4 equations'], 2, 'One equation per unknown.'],
      ],
    ),
    '1.9-1.11': C(
      [
        'Laws of logarithms: log of x y is log x plus log y; log of x over y is log x minus log y; log of x to the m is m log x.',
        'Rational exponents: a to the one over n is the nth root of a, and a to the m over n is the nth root of a to the m.',
        'An infinite geometric series converges when the absolute value of r is less than one; its sum is u one over one minus r.',
        'These are used to simplify expressions and to model long-term totals, like the total distance a bouncing ball travels.',
      ],
      [
        ['log(xy)', 'log x + log y'],
        ['a^(m/n)', 'ⁿ√(aᵐ)'],
        ['Sum to infinity', 'u₁/(1 − r), |r| < 1'],
        ['log(xᵐ)', 'm log x'],
      ],
      [
        ['27^(2/3) =', ['9', '18', '3', '81'], 0, 'Cube root of 27 is 3; 3² = 9.'],
        ['Sum to infinity of 10 + 5 + 2.5 + …', ['17.5', '20', '15', 'Diverges'], 1, '10/(1 − 0.5).'],
        ['log 2 + log 5 =', ['log 7', 'log 10 = 1', 'log 2.5', '10'], 1, 'log(2 × 5) = log 10.'],
      ],
    ),
    '1.12-1.13': C(
      [
        'A complex number is z equals a plus b i, where i squared equals minus one.',
        'On an Argand diagram, the modulus r is the distance from the origin and the argument theta is the angle from the positive real axis.',
        'Polar form is r cis theta; exponential form is r e to the i theta. Multiply by multiplying moduli and adding arguments.',
        'In Maths AI, complex numbers model sinusoidal quantities like AC circuits, where adding waves becomes adding complex numbers.',
      ],
      [
        ['i²', '−1'],
        ['Modulus of a + bi', '√(a² + b²)'],
        ['Exponential form', 're^(iθ)'],
        ['Multiplying in polar form', 'Multiply moduli, add arguments.'],
      ],
      [
        ['(3 + 2i) + (1 − 5i) =', ['4 − 3i', '2 + 7i', '4 + 3i', '3 − 10i'], 0, 'Add real and imaginary parts.'],
        ['|6 + 8i| =', ['10', '14', '100', '2'], 0, '√(36 + 64).'],
        ['2e^(iπ/6) × 3e^(iπ/3) =', ['6e^(iπ/2)', '5e^(iπ/2)', '6e^(iπ/18)', '6e^(iπ/6)'], 0, 'Multiply moduli, add arguments.'],
      ],
    ),
    '1.14': C(
      [
        'A matrix is a rectangular array of numbers, described by its order: rows by columns.',
        'Matrices of the same order can be added. To multiply A B, the number of columns of A must equal the number of rows of B.',
        'The identity matrix I has ones on the diagonal. The inverse A to the minus one satisfies A times A inverse equals I, and exists only if the determinant is not zero.',
        'Systems of linear equations can be written A x equals b and solved by x equals A inverse b.',
      ],
      [
        ['Condition to multiply AB', 'Columns of A = rows of B.'],
        ['Determinant of [[a, b], [c, d]]', 'ad − bc'],
        ['Inverse exists when', 'det A ≠ 0'],
        ['Solving Ax = b', 'x = A⁻¹b'],
      ],
      [
        ['det [[2, 1], [4, 3]] =', ['2', '10', '6', '−2'], 0, '6 − 4.'],
        ['A is 2 × 3 and B is 3 × 4. AB has order', ['2 × 4', '3 × 3', '4 × 2', 'Not defined'], 0, 'Outer dimensions.'],
        ['A matrix with determinant 0 is', ['Invertible', 'Singular (no inverse)', 'The identity', 'Symmetric'], 1, 'No inverse exists.'],
      ],
    ),
    '1.15': C(
      [
        'An eigenvector v of a matrix A is a non-zero vector that A only scales: A v equals lambda v. Lambda is the eigenvalue.',
        'Find eigenvalues by solving the characteristic equation: the determinant of A minus lambda I equals zero.',
        'For each eigenvalue, solve A minus lambda I, times v, equals zero to find eigenvectors.',
        'Diagonalisation, A equals P D P inverse, makes powers easy: A to the n equals P D to the n P inverse. This is used for long-term behaviour, like Markov chains and population models.',
      ],
      [
        ['Eigenvector definition', 'Av = λv, v ≠ 0'],
        ['Characteristic equation', 'det(A − λI) = 0'],
        ['Diagonalisation', 'A = PDP⁻¹'],
        ['Powers of A', 'Aⁿ = PDⁿP⁻¹'],
      ],
      [
        ['Eigenvalues of [[2, 0], [0, 5]]', ['2 and 5', '0 and 7', '10', '7'], 0, 'A diagonal matrix’s eigenvalues are its diagonal entries.'],
        ['The characteristic equation is', ['det(A) = λ', 'det(A − λI) = 0', 'A = λI', 'Av = 0'], 1, 'It gives the eigenvalues.'],
        ['Diagonalisation is useful for finding', ['Determinants', 'High powers of a matrix', 'Transposes', 'Inverses of vectors'], 1, 'Dⁿ is easy to compute.'],
      ],
    ),
    '2.1': C(
      [
        'The gradient of a line is the change in y divided by the change in x. In context it is a rate, like cost per kilometre.',
        'Line equations: y equals m x plus c; a x plus b y plus d equals zero; and y minus y one equals m times x minus x one.',
        'Parallel lines have equal gradients; perpendicular gradients multiply to minus one.',
        'Interpret the y-intercept in context, such as a fixed starting cost.',
      ],
      [
        ['Gradient formula', 'm = (y₂ − y₁)/(x₂ − x₁)'],
        ['Gradient-intercept form', 'y = mx + c'],
        ['Perpendicular gradients', 'm₁m₂ = −1'],
        ['Meaning of c in a cost model', 'The fixed cost.'],
      ],
      [
        ['A taxi charges C = 2.5d + 4. The fixed charge is', ['$2.50', '$4', '$6.50', '$0'], 1, 'The y-intercept.'],
        ['Gradient through (0, 1) and (2, 7)', ['3', '4', '6', '½'], 0, '6/2.'],
        ['A line parallel to y = −2x + 5 has gradient', ['2', '−2', '½', '5'], 1, 'Parallel lines share gradients.'],
      ],
    ),
    '2.2-2.4': C(
      [
        'A function assigns each input exactly one output. The domain is the set of inputs; the range is the set of outputs.',
        'In context, the domain is often restricted, for example time can’t be negative.',
        'Use your GDC to draw graphs and find key features: intercepts, maxima and minima, and asymptotes.',
        'Find where two graphs intersect with technology, and interpret the result in context.',
      ],
      [
        ['Function', 'Each input gives exactly one output.'],
        ['Domain in context', 'The realistic allowed inputs.'],
        ['Key features', 'Intercepts, max/min, asymptotes, zeros.'],
        ['Intersection of graphs', 'Where both functions have the same value.'],
      ],
      [
        ['A model h(t) for a ball’s height. A sensible domain is', ['t < 0', '0 ≤ t ≤ time it lands', 'All real t', 't = 0 only'], 1, 'Time starts at 0 and ends when the ball lands.'],
        ['The maximum of h(t) = −5t² + 20t is', ['20', '4', '2', '10'], 0, 'At t = 2, h = −20 + 40 = 20.'],
        ['Where do y = x² and y = 4 meet?', ['x = ±2', 'x = 4', 'x = 16', 'x = 2 only'], 0, 'x² = 4.'],
      ],
    ),
    '2.5': C(
      [
        'Maths AI emphasises choosing the right model. Linear models suit constant rates of change; quadratic models suit projectiles and areas.',
        'Exponential models, a times b to the x plus c, suit growth or decay by a constant percentage. Direct variation is y equals k x to the n; inverse variation is y equals k over x to the n.',
        'Cubic models can fit data with a turning point pattern; sinusoidal models, a sin of b x plus c plus d, fit periodic data like tides and temperatures.',
        'Use your GDC’s regression functions to fit models to data, then interpret the parameters.',
      ],
      [
        ['Linear model', 'Constant rate of change.'],
        ['Exponential model', 'Constant percentage growth or decay.'],
        ['Sinusoidal model', 'Periodic data, e.g. tides.'],
        ['Inverse variation', 'y = k/xⁿ'],
      ],
      [
        ['Daily hours of daylight across a year are best modelled by', ['Linear', 'Quadratic', 'Sinusoidal', 'Exponential'], 2, 'The pattern repeats each year.'],
        ['A bacteria population doubling every hour is', ['Linear', 'Exponential', 'Cubic', 'Inverse'], 1, 'Constant percentage growth.'],
        ['In y = 3sin(x) + 10, the principal axis is', ['y = 3', 'y = 10', 'y = 13', 'y = 7'], 1, 'The vertical shift d.'],
      ],
    ),
    '2.6': C(
      [
        'Modelling is a cycle: understand the situation, choose a model, fit it, test it, and reflect.',
        'Make assumptions clear, such as ignoring air resistance or assuming constant growth.',
        'Test a model by comparing predictions with data. Consider whether it makes sense beyond the data range.',
        'Reflect: refine the model if it fits poorly, or explain its limitations. This process is also the basis of your internal assessment.',
      ],
      [
        ['Modelling cycle', 'Develop, fit, test, reflect, refine.'],
        ['Assumption', 'A simplification made so the model is manageable.'],
        ['Testing a model', 'Compare predictions with real data.'],
        ['Limitation of a model', 'Where it stops being realistic, e.g. extrapolation.'],
      ],
      [
        ['A linear model predicts negative sales in 20 years. This shows', ['A good model', 'A limitation when extrapolating', 'Correct data', 'Perfect fit'], 1, 'Models may fail outside the data range.'],
        ['Which step compares predictions to data?', ['Develop', 'Test', 'Assume', 'Define'], 1, 'Testing checks the fit.'],
        ['Assuming no air resistance is', ['A result', 'A modelling assumption', 'An error', 'A variable'], 1, 'It simplifies the model.'],
      ],
    ),
    '2.7-2.8': C(
      [
        'A composite function f of g of x applies g first, then f. An inverse function undoes the original; find it by swapping x and y and solving.',
        'The graph of an inverse is the reflection in the line y equals x.',
        'Transformations: f of x plus b is a vertical translation; f of x minus a is horizontal; p f of x is a vertical stretch; f of q x is a horizontal stretch by factor one over q.',
        'Reflections: minus f of x in the x-axis, f of minus x in the y-axis.',
      ],
      [
        ['(f ∘ g)(x)', 'f(g(x))'],
        ['Inverse graph', 'Reflection in y = x'],
        ['y = f(x − a)', 'Translate a units right.'],
        ['y = pf(x)', 'Vertical stretch, factor p.'],
      ],
      [
        ['f(x) = x + 1, g(x) = 3x. f(g(2)) =', ['7', '9', '6', '5'], 0, 'g(2) = 6, f(6) = 7.'],
        ['The inverse of f(x) = 2x + 4 is', ['(x − 4)/2', '2x − 4', 'x/2 + 4', '1/(2x + 4)'], 0, 'Swap and solve.'],
        ['y = f(x) − 3 is a translation', ['3 up', '3 down', '3 left', '3 right'], 1, 'Subtracting outside shifts down.'],
      ],
    ),
    '2.9': C(
      [
        'Exponential models, like f of x equals k a to the x plus c, or k e to the r x plus c, model growth and decay, such as cooling and depreciation.',
        'Logistic models, L over one plus C e to the minus k x, model growth that levels off at a carrying capacity L, such as populations or the spread of a product.',
        'Piecewise models use different functions over different intervals, like tax bands or phone tariffs.',
        'Choose the model that fits the context and data, and interpret each parameter.',
      ],
      [
        ['Logistic model', 'f(x) = L/(1 + Ce^(−kx))'],
        ['L in a logistic model', 'Carrying capacity: the long-term limit.'],
        ['Piecewise model', 'Different rules over different intervals.'],
        ['Newton’s law of cooling model', 'T = ke^(−rt) + c, where c is room temperature.'],
      ],
      [
        ['A population levels off at 1000. Which model fits?', ['Linear', 'Logistic', 'Quadratic', 'Cubic'], 1, 'Logistic models have a limiting value.'],
        ['Tax bands are best modelled by a', ['Sinusoidal model', 'Piecewise model', 'Exponential model', 'Logistic model'], 1, 'Different rates for different ranges.'],
        ['In T = 70e^(−0.1t) + 20, the room temperature is', ['70', '20', '90', '0.1'], 1, 'The asymptote c.'],
      ],
    ),
    '2.10': C(
      [
        'Logarithmic scales, like the Richter scale and decibels, handle quantities that vary over many orders of magnitude.',
        'Linearising data: if y equals a x to the n, then log y equals n log x plus log a, so a log-log graph is a straight line with gradient n.',
        'If y equals a b to the x, then log y equals x log b plus log a, so a semi-log graph of log y against x is a straight line.',
        'Use linear regression on the transformed data, then convert back to find the original parameters.',
      ],
      [
        ['Power model linearised', 'log y = n log x + log a (log-log graph)'],
        ['Exponential model linearised', 'log y = x log b + log a (semi-log graph)'],
        ['Why use log scales', 'To show data covering many orders of magnitude.'],
        ['Gradient of log-log line', 'The power n.'],
      ],
      [
        ['A log-log graph is a straight line with gradient 3. The model is', ['y = ax³', 'y = a3ˣ', 'y = 3x + a', 'y = a + log x'], 0, 'Power model with n = 3.'],
        ['Plotting ln y against x gives a straight line. The model is', ['Power', 'Exponential', 'Linear', 'Quadratic'], 1, 'Semi-log linearises exponentials.'],
        ['An earthquake of magnitude 6 has how many times the amplitude of magnitude 4?', ['2', '20', '100', '1000'], 2, 'Each unit is ×10: 10² = 100.'],
      ],
    ),
    '3.1': C(
      [
        'In 3D, distance between points is the square root of the sum of squared differences in x, y and z; the midpoint averages coordinates.',
        'Use formulas for volume and surface area of prisms, cylinders, pyramids, cones, spheres and hemispheres, and combinations of them.',
        'The angle between a line and a plane is found using a right-angled triangle formed with the plane.',
        'Real-world problems include the capacity of containers and the amount of material needed.',
      ],
      [
        ['Volume of a cylinder', 'πr²h'],
        ['Volume of a pyramid', '⅓ × base area × height'],
        ['Surface area of a cone', 'πr² + πrl'],
        ['3D midpoint', 'Average each of x, y, z.'],
      ],
      [
        ['Volume of a cylinder r = 2, h = 5', ['20π', '10π', '40π', '4π'], 0, 'π × 4 × 5.'],
        ['Distance from (1, 1, 1) to (4, 5, 1)', ['5', '7', '25', '√7'], 0, '√(9 + 16 + 0).'],
        ['Volume of a square pyramid, base 6 × 6, height 5', ['60', '180', '30', '90'], 0, '⅓ × 36 × 5.'],
      ],
    ),
    '3.2-3.3': C(
      [
        'Right-angled triangles use Pythagoras and SOH CAH TOA.',
        'For any triangle, use the sine rule when you know a side and its opposite angle, and the cosine rule when you know two sides and the included angle, or all three sides.',
        'The area of a triangle is one half a b sin C.',
        'Apply these to angles of elevation and depression, and to navigation with bearings, measured clockwise from north.',
      ],
      [
        ['Sine rule', 'a/sin A = b/sin B'],
        ['Cosine rule', 'c² = a² + b² − 2ab cos C'],
        ['Angle of elevation', 'Angle measured up from the horizontal.'],
        ['Bearing of south-west', '225°'],
      ],
      [
        ['From 50 m away, the top of a tower has elevation 30°. Height ≈', ['28.9 m', '25 m', '86.6 m', '43.3 m'], 0, '50 tan 30° ≈ 28.9 m.'],
        ['Bearing of due west', ['090°', '180°', '270°', '360°'], 2, 'Clockwise from north.'],
        ['Area with sides 8 and 5 and angle 90° between', ['20', '40', '13', '10'], 0, '½ × 8 × 5 × sin 90°.'],
      ],
    ),
    '3.4': C(
      [
        'In Maths AI SL, arcs and sectors use angles in degrees.',
        'Arc length equals theta over 360 times 2 pi r.',
        'Sector area equals theta over 360 times pi r squared.',
        'Use these for problems like pizza slices, running tracks, and sprinkler coverage.',
      ],
      [
        ['Arc length (degrees)', '(θ/360) × 2πr'],
        ['Sector area (degrees)', '(θ/360) × πr²'],
        ['Full circle', '360°'],
        ['Perimeter of a sector', 'Arc length + 2r'],
      ],
      [
        ['Arc length for r = 6, θ = 60°', ['2π', '6π', 'π', '12π'], 0, '(60/360) × 12π.'],
        ['Sector area for r = 10, θ = 90°', ['25π', '100π', '50π', '10π'], 0, '¼ × 100π.'],
        ['Perimeter of that sector (r = 10, θ = 90°)', ['5π + 20', '25π', '10π + 10', '20π'], 0, 'Arc 5π plus two radii.'],
      ],
    ),
    '3.5-3.6': C(
      [
        'The perpendicular bisector of a line segment is the set of points equidistant from both ends. It passes through the midpoint with gradient minus one over the segment’s gradient.',
        'A Voronoi diagram divides a region into cells, one for each site, containing all points closest to that site. Cell edges lie on perpendicular bisectors between sites.',
        'Nearest neighbour interpolation estimates a value at a point using the value at its nearest site.',
        'The toxic waste dump problem finds the point furthest from all sites, which lies at a vertex of the diagram or on the boundary.',
      ],
      [
        ['Perpendicular bisector', 'Points equidistant from two points; through the midpoint.'],
        ['Voronoi cell', 'All points closer to one site than any other.'],
        ['Voronoi edge', 'Part of a perpendicular bisector between two sites.'],
        ['Toxic waste dump problem', 'Find the point furthest from all sites.'],
      ],
      [
        ['Perpendicular bisector of (0, 0) and (4, 0)', ['x = 2', 'y = 2', 'y = x', 'x = 4'], 0, 'Vertical line through the midpoint.'],
        ['A point in a Voronoi cell is closest to', ['All sites equally', 'That cell’s site', 'The boundary', 'The furthest site'], 1, 'That’s the definition of a cell.'],
        ['Rainfall at a location is estimated from the nearest station. This is', ['Regression', 'Nearest neighbour interpolation', 'Extrapolation', 'Correlation'], 1, 'Use the nearest site’s value.'],
      ],
    ),
    '3.7-3.8': C(
      [
        'A radian is the angle where arc length equals the radius; pi radians equals 180 degrees.',
        'Arc length is r theta and sector area is one half r squared theta, with theta in radians.',
        'On the unit circle, cos theta and sin theta are the x and y coordinates. The Pythagorean identity is sin squared plus cos squared equals one.',
        'Solve trigonometric equations graphically with your GDC, finding all solutions in the given interval.',
      ],
      [
        ['π radians', '180°'],
        ['Arc length (radians)', 'rθ'],
        ['Sector area (radians)', '½r²θ'],
        ['Unit circle point', '(cos θ, sin θ)'],
      ],
      [
        ['60° in radians', ['π/3', 'π/6', 'π/2', '2π/3'], 0, '60/180 × π.'],
        ['Sector area for r = 4, θ = 1 rad', ['8', '4', '16', '2'], 0, '½ × 16 × 1.'],
        ['sin²(0.7) + cos²(0.7) =', ['0.7', '1', '1.4', '0'], 1, 'Pythagorean identity.'],
      ],
    ),
    '3.9': C(
      [
        'Geometric transformations can be represented by 2 by 2 matrices acting on position vectors.',
        'Examples: reflection in the x-axis is 1, 0, 0, minus 1; rotation by theta anticlockwise about the origin is cos theta, minus sin theta, sin theta, cos theta; enlargement by k is k, 0, 0, k.',
        'Combined transformations multiply matrices; the order matters, and the first transformation is on the right.',
        'The absolute value of the determinant gives the area scale factor.',
      ],
      [
        ['Rotation matrix (θ anticlockwise)', '[[cos θ, −sin θ], [sin θ, cos θ]]'],
        ['Enlargement scale factor k', '[[k, 0], [0, k]]'],
        ['Area scale factor', '|det T|'],
        ['Combined transformation “A then B”', 'Matrix BA'],
      ],
      [
        ['The matrix [[1, 0], [0, −1]] is a reflection in', ['The y-axis', 'The x-axis', 'y = x', 'The origin'], 1, 'y changes sign.'],
        ['[[3, 0], [0, 3]] scales areas by', ['3', '6', '9', '1'], 2, 'det = 9.'],
        ['To apply A then B, use', ['AB', 'BA', 'A + B', 'A − B'], 1, 'The first transformation goes on the right.'],
      ],
    ),
    '3.10-3.13': C(
      [
        'Vectors have magnitude and direction. Add them component by component; the magnitude is the root of the sum of squares.',
        'The vector equation of a line is r equals a plus lambda b. In kinematics, position equals initial position plus t times velocity, and speed is the magnitude of velocity.',
        'The scalar product finds angles between vectors: v dot w equals the magnitudes times cos theta. Zero means perpendicular.',
        'The vector product gives a vector perpendicular to both, with magnitude equal to the area of the parallelogram they span.',
      ],
      [
        ['Line equation', 'r = a + λb'],
        ['Position with constant velocity', 'r = r₀ + tv'],
        ['Speed', '|v|'],
        ['Perpendicular vectors', 'v·w = 0'],
      ],
      [
        ['A boat at (2, 1) moves with v = (3, 4) km/h. Position after 2 h', ['(8, 9)', '(5, 5)', '(6, 8)', '(4, 2)'], 0, '(2, 1) + 2(3, 4).'],
        ['Speed of v = (3, 4)', ['5', '7', '12', '25'], 0, '√(9 + 16).'],
        ['(2, 3)·(3, −2) =', ['0', '12', '−6', '5'], 0, '6 − 6: perpendicular.'],
      ],
    ),
    '3.14-3.15': C(
      [
        'A graph has vertices joined by edges. The degree of a vertex is the number of edges meeting there; the sum of degrees is twice the number of edges.',
        'Graphs can be simple, complete, weighted or directed. A tree is connected with no cycles; a subgraph is part of a graph.',
        'An adjacency matrix records the number of edges between each pair of vertices.',
        'The number of walks of length k between two vertices is the corresponding entry of the adjacency matrix to the power k. Transition matrices describe probabilities of moving between vertices.',
      ],
      [
        ['Degree of a vertex', 'Number of edges meeting at it.'],
        ['Handshaking lemma', 'Sum of degrees = 2 × number of edges.'],
        ['Tree', 'Connected graph with no cycles.'],
        ['Walks of length k', 'Entries of Aᵏ (A = adjacency matrix).'],
      ],
      [
        ['A complete graph on 4 vertices has how many edges?', ['4', '6', '8', '12'], 1, '4 × 3 / 2.'],
        ['A graph has degrees 2, 3, 3, 2. Number of edges', ['5', '10', '4', '6'], 0, '10 / 2.'],
        ['A tree with 7 vertices has how many edges?', ['6', '7', '8', '14'], 0, 'A tree has n − 1 edges.'],
      ],
    ),
    '3.16': C(
      [
        'Kruskal’s and Prim’s algorithms find a minimum spanning tree: connecting all vertices with the smallest total weight.',
        'Kruskal adds the smallest edges that don’t form a cycle. Prim grows the tree from a vertex, always adding the cheapest edge to a new vertex.',
        'The Chinese postman problem finds the shortest route travelling every edge. Pair up odd-degree vertices and repeat the shortest connecting paths.',
        'The travelling salesman problem visits every vertex. Use nearest neighbour for an upper bound and deleted vertex for a lower bound.',
      ],
      [
        ['Minimum spanning tree', 'Connects all vertices with minimum total weight, no cycles.'],
        ['Kruskal’s algorithm', 'Add the shortest edges that don’t make a cycle.'],
        ['Chinese postman', 'Shortest route covering every edge.'],
        ['Travelling salesman bounds', 'Nearest neighbour: upper; deleted vertex: lower.'],
      ],
      [
        ['A snowplough must clear every street. Which problem?', ['Travelling salesman', 'Chinese postman', 'Minimum spanning tree', 'Shortest path'], 1, 'It covers every edge.'],
        ['Nearest neighbour gives a TSP', ['Lower bound', 'Upper bound', 'Exact answer', 'Spanning tree'], 1, 'It gives a valid tour, not necessarily the best.'],
        ['Laying cable to connect all towns cheaply uses', ['Chinese postman', 'A minimum spanning tree', 'TSP', 'Voronoi'], 1, 'Kruskal or Prim.'],
      ],
    ),
    '4.1-4.3': C(
      [
        'A population is the whole group; a sample is a subset. Sampling techniques include simple random, convenience, systematic, quota and stratified. Bias makes a sample unrepresentative.',
        'Data may be discrete or continuous. Present it with histograms, cumulative frequency graphs and box plots, and identify outliers.',
        'Central tendency: mean, median and mode. Spread: range, interquartile range and standard deviation.',
        'Use your GDC’s one-variable statistics to calculate these quickly, and compare data sets using both a measure of centre and a measure of spread.',
      ],
      [
        ['Systematic sampling', 'Select every kth member from a list.'],
        ['IQR', 'Q3 − Q1'],
        ['Outlier', 'Beyond Q1 − 1.5 IQR or Q3 + 1.5 IQR'],
        ['Comparing data sets', 'Compare a measure of centre and a measure of spread.'],
      ],
      [
        ['Mean of 4, 6, 8, 10, 12', ['8', '6', '10', '40'], 0, '40 / 5.'],
        ['Choosing every 10th name on a list is', ['Random', 'Systematic', 'Quota', 'Convenience'], 1, 'A fixed interval.'],
        ['Q1 = 15, Q3 = 27. IQR', ['12', '42', '21', '6'], 0, '27 − 15.'],
      ],
    ),
    '4.4': C(
      [
        'Scatter diagrams show the relationship between two variables.',
        'Pearson’s correlation coefficient r measures linear correlation from minus one to one. Values near the extremes show strong correlation.',
        'The regression line of y on x predicts y from x. Interpret the gradient as the change in y per unit x.',
        'Interpolation within the data is reliable if correlation is strong; extrapolation outside is not. Correlation doesn’t prove causation.',
      ],
      [
        ['Pearson’s r', 'Measures strength of linear correlation, −1 to 1.'],
        ['Interpreting the gradient', 'Change in y for each one-unit increase in x.'],
        ['Interpolation', 'Predicting within the data range.'],
        ['Correlation vs causation', 'A correlation doesn’t prove one causes the other.'],
      ],
      [
        ['r = 0.15 suggests', ['Strong positive', 'Weak or no linear correlation', 'Strong negative', 'Perfect correlation'], 1, 'Close to zero.'],
        ['y = 2.5x + 10. Predicted y at x = 4', ['20', '14', '10', '25'], 0, '2.5 × 4 + 10.'],
        ['Ice cream sales and sunburn are correlated. This shows', ['Ice cream causes sunburn', 'A possible third variable (sunshine)', 'No link', 'Causation'], 1, 'Both depend on sunny weather.'],
      ],
    ),
    '4.5-4.6': C(
      [
        'Probability of an event is favourable outcomes over total equally likely outcomes; the complement is one minus P.',
        'Use Venn diagrams, tree diagrams, sample space diagrams and tables of outcomes to organise events.',
        'Combined events: P of A or B equals P A plus P B minus P of A and B. Conditional probability is P of A and B over P of B.',
        'Independent events satisfy P of A and B equals P A times P B. Expected number of occurrences is n times p.',
      ],
      [
        ['Complement', 'P(A′) = 1 − P(A)'],
        ['P(A ∪ B)', 'P(A) + P(B) − P(A ∩ B)'],
        ['Conditional probability', 'P(A|B) = P(A ∩ B)/P(B)'],
        ['Independence', 'P(A ∩ B) = P(A)P(B)'],
      ],
      [
        ['Two fair coins. P(two heads)', ['½', '¼', '¾', '⅓'], 1, '½ × ½.'],
        ['P(A) = 0.6, P(B) = 0.3, P(A ∩ B) = 0.1. P(A ∪ B)', ['0.9', '0.8', '0.7', '1'], 1, '0.6 + 0.3 − 0.1.'],
        ['30 of 100 students play tennis. Expected number in a group of 20', ['3', '6', '10', '30'], 1, '20 × 0.3.'],
      ],
    ),
    '4.7-4.8': C(
      [
        'A discrete random variable has a probability distribution whose probabilities sum to one.',
        'Expected value is the sum of x times P of x. A game is fair if the expected gain is zero.',
        'The binomial distribution, B of n and p, counts successes in n independent trials with constant probability p.',
        'Its mean is n p and variance n p times one minus p. Use binomial pdf and cdf on your GDC.',
      ],
      [
        ['E(X)', 'Σ x P(X = x)'],
        ['Fair game', 'Expected gain = 0'],
        ['Binomial mean', 'np'],
        ['Binomial variance', 'np(1 − p)'],
      ],
      [
        ['A game costs $2; you win $10 with probability 0.2. Expected gain', ['$0', '$2', '−$2', '$8'], 0, '0.2 × 10 − 2 = 0: fair.'],
        ['X ~ B(15, 0.4). E(X)', ['6', '9', '0.4', '15'], 0, '15 × 0.4.'],
        ['Which is binomial?', ['Heights of students', 'Number of heads in 10 coin tosses', 'Time until a bus arrives', 'Temperature'], 1, 'Fixed trials, two outcomes, constant p.'],
      ],
    ),
    '4.9': C(
      [
        'Many natural measurements, like heights and exam scores, follow a normal distribution: symmetric and bell-shaped.',
        'It is described by the mean mu and standard deviation sigma. About 68, 95 and 99.7 percent of values lie within one, two and three standard deviations.',
        'Use normal cdf on your GDC to find probabilities, and inverse normal to find a value for a given probability.',
        'Always sketch the curve and shade the region you need.',
      ],
      [
        ['Normal distribution notation', 'X ~ N(μ, σ²)'],
        ['Within 1σ', '≈ 68%'],
        ['Within 2σ', '≈ 95%'],
        ['Inverse normal', 'Finds x for a cumulative probability.'],
      ],
      [
        ['Heights ~ N(170, 10²). About what % are between 160 and 180?', ['50%', '68%', '95%', '99.7%'], 1, 'Within one standard deviation.'],
        ['P(X < μ) =', ['0.25', '0.5', '0.68', '0.95'], 1, 'Symmetric about the mean.'],
        ['To find the height exceeded by the tallest 10% you use', ['Normal cdf', 'Inverse normal', 'Binomial pdf', 'Regression'], 1, 'You know the probability, not the value.'],
      ],
    ),
    '4.10': C(
      [
        'Spearman’s rank correlation coefficient measures how well two variables are related by a monotonic relationship, one that always increases or always decreases.',
        'Rank each variable separately, then find Pearson’s r of the ranks. Tied values share the average of their ranks.',
        'It ranges from minus one to one. It is useful when data are ranks, or when the relationship isn’t linear.',
        'It is less affected by outliers than Pearson’s r.',
      ],
      [
        ['Spearman’s rank', 'Pearson’s r applied to the ranks of the data.'],
        ['Monotonic relationship', 'Always increasing or always decreasing.'],
        ['Tied ranks', 'Share the average of the ranks they would take.'],
        ['Advantage over Pearson', 'Works for non-linear monotonic data; less affected by outliers.'],
      ],
      [
        ['Two judges rank contestants identically. Spearman’s coefficient', ['0', '1', '−1', '0.5'], 1, 'Perfect agreement.'],
        ['Values 4, 7, 7, 9 in order get ranks', ['1, 2, 3, 4', '1, 2.5, 2.5, 4', '1, 2, 2, 4', '1, 3, 3, 4'], 1, 'Tied values share the average of ranks 2 and 3.'],
        ['y = x³ for positive x has Spearman’s coefficient', ['1', '0.8', '0', '−1'], 0, 'It is perfectly monotonic.'],
      ],
    ),
    '4.11': C(
      [
        'A hypothesis test starts with a null hypothesis, H0, of no effect or no association, and an alternative, H1.',
        'The p-value is the probability of getting results at least this extreme if H0 is true. If it is below the significance level, often 5 percent, reject H0.',
        'The chi-squared test for independence uses a contingency table of observed and expected frequencies. The goodness of fit test compares data to a claimed distribution. Expected frequencies should be at least 5.',
        'The t-test compares the means of two groups, assuming normally distributed data. Always state conclusions in context.',
      ],
      [
        ['Null hypothesis', 'No effect, no difference, or independence.'],
        ['Reject H₀ when', 'p-value < significance level'],
        ['Degrees of freedom (χ² independence)', '(rows − 1)(columns − 1)'],
        ['Expected frequency (contingency table)', '(row total × column total) ÷ grand total'],
      ],
      [
        ['A test gives p = 0.03 at the 5% level. Conclusion', ['Accept H₀', 'Reject H₀', 'Inconclusive', 'Change the level'], 1, '0.03 < 0.05.'],
        ['Degrees of freedom for a 3 × 4 table', ['12', '6', '7', '5'], 1, '2 × 3.'],
        ['Row total 40, column total 50, grand total 200. Expected frequency', ['10', '20', '45', '90'], 0, '40 × 50 / 200.'],
      ],
    ),
    '4.12-4.13': C(
      [
        'Good data collection needs a clear method. Reliability means consistent results; validity means measuring what you intend to.',
        'When numerical data is used in a chi-squared test, it may need grouping into categories with enough expected frequency.',
        'Non-linear regression fits models such as quadratic, cubic, exponential, power and sine to data using technology.',
        'Compare models using the coefficient of determination, R squared, which shows the proportion of variation explained, and the sum of square residuals, where smaller is better.',
      ],
      [
        ['Reliability', 'Consistent results when repeated.'],
        ['Validity', 'Measuring what you intend to measure.'],
        ['R²', 'Proportion of variation in y explained by the model.'],
        ['Sum of square residuals', 'Smaller means a better fit.'],
      ],
      [
        ['A model has R² = 0.94. This means', ['94% of data is correct', '94% of variation is explained by the model', 'r = 0.94', 'The model is linear'], 1, 'R² is explained variation.'],
        ['Which model fits better?', ['SSres = 12.5', 'SSres = 3.2', 'They are equal', 'Cannot compare'], 1, 'Smaller residual sum is better.'],
        ['Getting the same result when repeating a survey shows', ['Validity', 'Reliability', 'Bias', 'Correlation'], 1, 'Consistency is reliability.'],
      ],
    ),
    '4.14-4.16': C(
      [
        'For a linear transformation, E of a X plus b equals a E of X plus b, and Var of a X plus b equals a squared Var of X. For sums of independent variables, means add and variances add.',
        'Unbiased estimates of the population mean and variance come from sample data, using n minus one in the variance.',
        'The central limit theorem: the mean of a large sample, n at least 30, is approximately normal, with mean mu and variance sigma squared over n, whatever the population shape.',
        'A confidence interval gives a range likely to contain the population mean, using the normal distribution if sigma is known, or the t-distribution if not.',
      ],
      [
        ['Var(aX + b)', 'a² Var(X)'],
        ['Var(X + Y), independent', 'Var(X) + Var(Y)'],
        ['Central limit theorem', 'X̄ ≈ N(μ, σ²/n) for large n'],
        ['Confidence interval uses t when', 'The population standard deviation is unknown.'],
      ],
      [
        ['Var(X) = 4. Var(3X − 1)', ['11', '12', '36', '35'], 2, '9 × 4.'],
        ['σ = 10, n = 25. Standard deviation of the sample mean', ['2', '10', '0.4', '5'], 0, '10/√25.'],
        ['A 95% confidence interval means', ['95% of data lies in it', 'The method captures μ in 95% of samples', 'μ is certainly inside', '5% error in each value'], 1, 'It describes the long-run success of the method.'],
      ],
    ),
    '4.17': C(
      [
        'The Poisson distribution models the number of events in a fixed interval of time or space, when events occur randomly, independently and at a constant average rate.',
        'X following Po of m has mean m and variance m: the mean equals the variance.',
        'Examples include calls to a helpline per hour, or typos per page.',
        'If rates are scaled, scale m: 3 per hour means 6 per two hours. The sum of independent Poisson variables is Poisson.',
      ],
      [
        ['Poisson conditions', 'Random, independent events at a constant average rate.'],
        ['Mean and variance of Po(m)', 'Both equal m.'],
        ['Scaling the interval', '3 per hour → 6 per 2 hours.'],
        ['Sum of independent Poissons', 'Po(m₁ + m₂)'],
      ],
      [
        ['Calls average 4 per hour. For 30 minutes, m =', ['4', '2', '8', '0.5'], 1, 'Half the interval.'],
        ['X ~ Po(5). Var(X)', ['5', '25', '√5', '2.5'], 0, 'Mean equals variance.'],
        ['Which suits a Poisson model?', ['Heights', 'Number of emails per hour', 'Exam scores out of 100', 'Coin tosses in 10 trials'], 1, 'Random events in a time interval.'],
      ],
    ),
    '4.18': C(
      [
        'A test can use a critical region: the values of the test statistic that lead to rejecting H0.',
        'Tests at HL include tests for a population mean using t or z, tests for a binomial proportion or Poisson mean, and testing whether Pearson’s correlation coefficient is significant.',
        'Tests can be one-tailed or two-tailed, depending on H1.',
        'A type I error is rejecting a true H0; its probability equals the significance level. A type II error is failing to reject a false H0.',
      ],
      [
        ['Critical region', 'Values of the test statistic that lead to rejecting H₀.'],
        ['Type I error', 'Rejecting H₀ when it is true.'],
        ['Type II error', 'Not rejecting H₀ when it is false.'],
        ['P(type I error)', 'Equal to the significance level (for continuous tests).'],
      ],
      [
        ['Convicting an innocent person is like a', ['Type I error', 'Type II error', 'Correct decision', 'Critical value'], 0, 'Rejecting a true null (innocent).'],
        ['H₁: μ > 50 is a', ['Two-tailed test', 'One-tailed test', 'Null hypothesis', 'Confidence interval'], 1, 'Only one direction.'],
        ['At the 1% level, P(type I error) is', ['1%', '5%', '99%', '0'], 0, 'It equals the significance level.'],
      ],
    ),
    '4.19': C(
      [
        'A Markov chain models moving between states, where the next state depends only on the current state.',
        'A transition matrix T holds the probabilities of moving from each state to each other state; each column, or row depending on convention, sums to one.',
        'The state after n steps is found by multiplying the initial state vector by T to the power n.',
        'The steady state is the long-term distribution, found by solving T s equals s, or with eigenvectors for eigenvalue one.',
      ],
      [
        ['Markov property', 'The next state depends only on the current state.'],
        ['Transition matrix', 'Probabilities of moving between states.'],
        ['State after n steps', 'sₙ = Tⁿs₀'],
        ['Steady state', 'Ts = s (eigenvector for eigenvalue 1)'],
      ],
      [
        ['Each column of a (column-stochastic) transition matrix sums to', ['0', '1', 'The number of states', '100'], 1, 'All probabilities from a state add to 1.'],
        ['The long-term distribution is the', ['Initial state', 'Steady state', 'Transition matrix', 'Determinant'], 1, 'It no longer changes.'],
        ['The steady state is an eigenvector with eigenvalue', ['0', '1', '−1', '2'], 1, 'Ts = 1 × s.'],
      ],
    ),
    '5.1-5.4': C(
      [
        'The derivative gives the gradient of a curve and the rate of change. It is the limit of the gradient of a chord as the chord shrinks.',
        'For a x to the n, the derivative is a n x to the n minus one.',
        'If the derivative is positive, the function is increasing; if negative, decreasing.',
        'The tangent at a point has gradient f prime of a; the normal is perpendicular, with gradient minus one over f prime of a.',
      ],
      [
        ['d/dx (axⁿ)', 'anxⁿ⁻¹'],
        ['Derivative meaning', 'Gradient / instantaneous rate of change.'],
        ['Increasing', 'f′(x) > 0'],
        ['Normal gradient', '−1/f′(a)'],
      ],
      [
        ['Differentiate f(x) = 5x²', ['10x', '5x', '10x²', '2x'], 0, '2 × 5x.'],
        ['Gradient of y = x³ at x = 2', ['8', '12', '6', '4'], 1, '3x² = 12.'],
        ['A cost C(x) has C′(50) = 3. This means', ['Total cost is 3', 'Cost rises about 3 per extra unit at x = 50', 'Cost is falling', '50 units cost 3'], 1, 'Derivative is the rate of change.'],
      ],
    ),
    '5.5': C(
      [
        'Integration is the reverse of differentiation. The integral of a x to the n is a over n plus one times x to the n plus one, plus C.',
        'Given a derivative and one point, you can find the particular function by working out C.',
        'Definite integrals give areas under curves; in Maths AI SL, use technology to evaluate them.',
        'Areas under a velocity graph give distance; areas under a rate graph give a total amount.',
      ],
      [
        ['∫ axⁿ dx', 'a xⁿ⁺¹/(n + 1) + C'],
        ['Constant of integration', 'C: found using a known point.'],
        ['Definite integral', 'Area under a curve between limits.'],
        ['Area under v–t graph', 'Distance travelled.'],
      ],
      [
        ['∫ 6x dx =', ['3x² + C', '6x² + C', '6 + C', 'x⁶ + C'], 0, '6x²/2.'],
        ['f′(x) = 2x, f(1) = 5. f(x) =', ['x² + 4', 'x² + 5', '2x + 3', 'x²'], 0, 'x² + C, and 1 + C = 5.'],
        ['∫₀³ 2 dx =', ['2', '3', '6', '9'], 2, 'Rectangle 3 × 2.'],
      ],
    ),
    '5.6-5.7': C(
      [
        'Local maximum and minimum points occur where the derivative is zero.',
        'Check whether it is a maximum or minimum using the sign of the derivative either side, or a graph.',
        'Optimisation problems find the best value: maximum profit, minimum cost, largest area.',
        'Form an equation for the quantity, differentiate, set it to zero, solve, and interpret the answer in context, including checking endpoints.',
      ],
      [
        ['Stationary point', 'f′(x) = 0'],
        ['Maximum test (sign)', 'f′ changes from + to −.'],
        ['Optimisation steps', 'Model, differentiate, set to 0, solve, interpret.'],
        ['Check endpoints', 'The max/min might be at the edge of the domain.'],
      ],
      [
        ['Profit P = −2x² + 40x. Maximum at x =', ['10', '20', '40', '5'], 0, 'P′ = −4x + 40 = 0.'],
        ['Maximum profit in that model', ['200', '400', '100', '800'], 0, 'P(10) = −200 + 400.'],
        ['If f′ changes from negative to positive, the point is a', ['Maximum', 'Minimum', 'Point of inflection', 'Root'], 1, 'Decreasing then increasing.'],
      ],
    ),
    '5.8': C(
      [
        'The trapezoidal rule approximates the area under a curve by splitting it into trapezoids.',
        'With strip width h, area is approximately h over 2 times the first y plus the last y, plus twice the sum of all the middle y values.',
        'More strips give a more accurate approximation.',
        'If the curve is concave up, the trapezoidal rule overestimates; if concave down, it underestimates.',
      ],
      [
        ['Trapezoidal rule', '(h/2)[y₀ + yₙ + 2(y₁ + … + yₙ₋₁)]'],
        ['Strip width h', '(b − a)/n'],
        ['Concave up curve', 'Trapezoidal rule overestimates.'],
        ['Improving accuracy', 'Use more strips.'],
      ],
      [
        ['y-values 1, 3, 5 with h = 1. Trapezoidal estimate', ['6', '8', '9', '4'], 0, '½ × (1 + 5 + 2 × 3) = 6.'],
        ['For y = x² (concave up), the rule gives', ['An underestimate', 'An overestimate', 'The exact value', 'Zero'], 1, 'Chords lie above the curve.'],
        ['Interval 0 to 10 with 5 strips has h =', ['2', '5', '10', '0.5'], 0, '10/5.'],
      ],
    ),
    '5.9-5.10': C(
      [
        'Standard derivatives: sin x gives cos x, cos x gives minus sin x, tan x gives sec squared x, e to the x stays e to the x, and ln x gives one over x.',
        'The chain rule differentiates composite functions; the product and quotient rules handle products and quotients.',
        'Related rates link changing quantities through the chain rule.',
        'The second derivative shows concavity: positive means concave up, negative concave down. Points of inflection are where concavity changes.',
      ],
      [
        ['d/dx (eˣ)', 'eˣ'],
        ['Chain rule', 'dy/dx = dy/du × du/dx'],
        ['Quotient rule', '(u/v)′ = (vu′ − uv′)/v²'],
        ['Concave up', 'f″(x) > 0'],
      ],
      [
        ['d/dx (sin 3x) =', ['cos 3x', '3cos 3x', '−3cos 3x', '3sin 3x'], 1, 'Chain rule.'],
        ['d/dx (x² eˣ) =', ['2x eˣ', 'x² eˣ + 2x eˣ', 'x² eˣ', '2x + eˣ'], 1, 'Product rule.'],
        ['f″(x) < 0 means the curve is', ['Concave up', 'Concave down', 'Linear', 'Increasing'], 1, 'The gradient is decreasing.'],
      ],
    ),
    '5.11-5.12': C(
      [
        'Integrate standard functions: x to the n, sin, cos, one over cos squared, one over x and e to the x.',
        'Integration by inspection or substitution reverses the chain rule for expressions like f of g of x times g prime of x.',
        'The area between a curve and the y-axis uses integration with respect to y.',
        'Volumes of revolution: rotating about the x-axis gives pi times the integral of y squared d x; about the y-axis, pi times the integral of x squared d y.',
      ],
      [
        ['∫ cos x dx', 'sin x + C'],
        ['∫ 1/cos²x dx', 'tan x + C'],
        ['Volume about x-axis', 'π∫ y² dx'],
        ['Volume about y-axis', 'π∫ x² dy'],
      ],
      [
        ['∫ eˣ dx =', ['eˣ + C', 'xeˣ + C', 'eˣ⁺¹ + C', 'ln x + C'], 0, 'eˣ integrates to itself.'],
        ['∫ 1/x dx =', ['ln|x| + C', 'x⁻² + C', '1/x² + C', 'eˣ + C'], 0, 'Standard integral.'],
        ['Rotating y = 2 from x = 0 to 3 about the x-axis gives', ['12π', '6π', '4π', '18π'], 0, 'A cylinder: π × 4 × 3.'],
      ],
    ),
    '5.13': C(
      [
        'Kinematics links displacement s, velocity v and acceleration a: v is the derivative of s, and a is the derivative of v.',
        'Integrating velocity gives displacement; the total distance is the integral of the absolute value of velocity.',
        'Velocity and acceleration can also be given as functions of time from data or models.',
        'Speed is the magnitude of velocity; a particle speeds up when v and a have the same sign.',
      ],
      [
        ['v from s', 'v = ds/dt'],
        ['a from v', 'a = dv/dt'],
        ['Displacement from v', '∫ v dt'],
        ['Distance travelled', '∫ |v| dt'],
      ],
      [
        ['v = 3t². Displacement from t = 0 to 2', ['8', '12', '6', '4'], 0, '[t³]₀² = 8.'],
        ['s = 5t − t². At rest when t =', ['2.5', '5', '0', '1'], 0, 'v = 5 − 2t = 0.'],
        ['Distance differs from displacement when the particle', ['Accelerates', 'Changes direction', 'Starts at rest', 'Moves fast'], 1, 'Backwards motion cancels in displacement.'],
      ],
    ),
    '5.14-5.15': C(
      [
        'A differential equation relates a quantity to its rate of change, like d P by d t equals k P for population growth.',
        'Solve separable equations by separating variables and integrating both sides, then using an initial condition to find the constant.',
        'A slope field shows short line segments with the gradient given by the differential equation at many points.',
        'Solution curves follow the slope field; sketching one from an initial point shows how the system behaves.',
      ],
      [
        ['Differential equation', 'An equation involving a derivative.'],
        ['Separation of variables', 'Put y terms with dy and x terms with dx, then integrate.'],
        ['Slope field', 'A grid of gradient segments from a DE.'],
        ['dP/dt = kP solution', 'P = P₀eᵏᵗ'],
      ],
      [
        ['dy/dx = 2x with y(0) = 3 gives', ['y = x² + 3', 'y = 2x + 3', 'y = x²', 'y = 3eˣ'], 0, 'Integrate and use the initial condition.'],
        ['dP/dt = 0.05P describes', ['Linear growth', 'Exponential growth', 'Logistic growth', 'Decay'], 1, 'Growth proportional to size.'],
        ['A slope field shows', ['Areas', 'Gradients at points', 'Probabilities', 'Matrices'], 1, 'Each segment is the gradient there.'],
      ],
    ),
    '5.16-5.18': C(
      [
        'Euler’s method approximates solutions numerically: the next y equals current y plus step size h times the gradient at the current point.',
        'It extends to coupled systems, like predator-prey models, updating both variables each step.',
        'Phase portraits show the behaviour of coupled linear systems; eigenvalues of the coefficient matrix decide whether trajectories spiral, move towards or away from equilibrium.',
        'Second-order differential equations, like simple harmonic motion, can be rewritten as a coupled first-order system and solved with Euler’s method.',
      ],
      [
        ['Euler’s method', 'yₙ₊₁ = yₙ + h f(xₙ, yₙ)'],
        ['Coupled system', 'Two linked DEs, e.g. predator-prey.'],
        ['Complex eigenvalues', 'Trajectories spiral.'],
        ['Negative real eigenvalues', 'Trajectories approach the equilibrium (stable).'],
      ],
      [
        ['dy/dx = y, y(0) = 1, h = 0.5. Euler estimate of y(0.5)', ['1.5', '1.65', '2', '0.5'], 0, '1 + 0.5 × 1.'],
        ['Smaller step size h generally makes Euler’s method', ['Less accurate', 'More accurate', 'Unchanged', 'Undefined'], 1, 'Smaller steps follow the curve more closely.'],
        ['Eigenvalues ±2i suggest trajectories that', ['Spiral in', 'Form closed loops (circles/ellipses)', 'Move straight out', 'Stay still'], 1, 'Purely imaginary eigenvalues give cycles.'],
      ],
    ),
  },
};

export default content;
