import type { SubjectContentFile } from '../types';
import { C } from './helpers';

const content: SubjectContentFile = {
  units: {
    '1': [
      'Topic 1, number and algebra, covers sequences and series, exponents and logarithms, financial maths, proof and the binomial theorem.',
      'At HL it extends to counting principles, partial fractions, complex numbers, proof by induction and systems of equations.',
      'Know the formula booklet well, but practise choosing the right formula and showing clear working.',
    ],
    '2': [
      'Topic 2, functions, is about understanding functions and their graphs.',
      'You will work with lines, quadratics, rational, exponential and logarithmic functions, composite and inverse functions, and transformations. HL adds polynomials, more rational functions and inequalities.',
      'Sketching graphs accurately, with intercepts and asymptotes labelled, earns many marks.',
    ],
    '3': [
      'Topic 3, geometry and trigonometry, covers 3D shapes, trigonometry in triangles, radians, the unit circle, identities and trigonometric equations.',
      'At HL it adds reciprocal and compound angle identities, and vectors, lines and planes in three dimensions.',
    ],
    '4': [
      'Topic 4, statistics and probability, covers collecting and summarising data, correlation and regression, probability, and the binomial and normal distributions.',
      'HL adds Bayes’ theorem and continuous random variables. Use your GDC efficiently for statistics.',
    ],
    '5': [
      'Topic 5, calculus, is the largest topic. It covers differentiation and its applications, integration and areas, and kinematics.',
      'At HL it extends to limits and continuity, implicit differentiation, further integration techniques, volumes of revolution, differential equations and Maclaurin series.',
    ],
  },
  chapters: {
    '1.1-1.3': C(
      [
        'Scientific notation writes numbers as a times ten to the power k, where a is at least 1 and less than 10.',
        'An arithmetic sequence adds a common difference d each time. The nth term is u one plus n minus one times d, and the sum of n terms is n over two times the first plus last term.',
        'A geometric sequence multiplies by a common ratio r. The nth term is u one times r to the power n minus one. The sum of n terms is u one times r to the n minus one, over r minus one.',
        'Sigma notation is a compact way to write a series. Always check whether a question describes an arithmetic or a geometric situation.',
      ],
      [
        ['nth term of an arithmetic sequence', 'uₙ = u₁ + (n − 1)d'],
        ['Sum of an arithmetic series', 'Sₙ = n/2 (2u₁ + (n − 1)d) = n/2 (u₁ + uₙ)'],
        ['nth term of a geometric sequence', 'uₙ = u₁rⁿ⁻¹'],
        ['Sum of a geometric series', 'Sₙ = u₁(rⁿ − 1)/(r − 1), r ≠ 1'],
      ],
      [
        ['The 10th term of 3, 7, 11, … is', ['39', '40', '43', '37'], 0, '3 + 9 × 4 = 39.'],
        ['The sum of the first 5 terms of 2, 6, 18, … is', ['242', '162', '80', '728'], 0, 'S₅ = 2(3⁵ − 1)/(3 − 1) = 242.'],
        ['0.000 45 in scientific notation is', ['4.5 × 10⁻⁴', '45 × 10⁻⁵', '4.5 × 10⁴', '0.45 × 10⁻³'], 0, 'a must be between 1 and 10.'],
      ],
    ),
    '1.4': C(
      [
        'Compound interest is a geometric sequence: the future value is the present value times one plus r over 100 k, to the power k n, where k is the number of compounding periods per year.',
        'Depreciation reduces value by a fixed percentage each year: value equals initial value times one minus r over 100 to the power n.',
        'Your GDC’s finance solver, TVM, finds unknowns like the number of years or the interest rate.',
        'Always state answers with suitable units, usually to two decimal places for money, and interpret them in context.',
      ],
      [
        ['Compound interest formula', 'FV = PV × (1 + r/(100k))^(kn)'],
        ['Depreciation formula', 'V = V₀(1 − r/100)ⁿ'],
        ['k in compound interest', 'Number of compounding periods per year.'],
        ['Tool for finance problems', 'The TVM solver on your GDC.'],
      ],
      [
        ['$1000 at 5% compounded annually for 2 years becomes', ['$1100', '$1102.50', '$1050', '$1125'], 1, '1000 × 1.05² = 1102.50.'],
        ['A car worth $20 000 depreciates 10% a year. After 1 year it is worth', ['$18 000', '$2000', '$22 000', '$19 000'], 0, '20 000 × 0.9.'],
        ['Monthly compounding means k =', ['1', '4', '12', '365'], 2, 'Twelve periods per year.'],
      ],
    ),
    '1.5-1.7': C(
      [
        'Laws of exponents: a to the m times a to the n is a to the m plus n; a to the m over a to the n is a to the m minus n; and a to the m, all to the n, is a to the m n. Also a to the minus n is one over a to the n, and a to the one over n is the nth root.',
        'A logarithm is the inverse of an exponent: log base a of b equals x means a to the x equals b. Natural log, ln, uses base e.',
        'Laws of logarithms: log of x y is log x plus log y; log of x over y is log x minus log y; log of x to the m is m log x. The change of base formula is log base a of x equals log x over log a.',
        'Solve exponential equations by taking logs of both sides. A simple deductive proof uses LHS equals RHS reasoning, step by step.',
      ],
      [
        ['Definition of a logarithm', 'logₐ b = x ⇔ aˣ = b'],
        ['Log of a product', 'log(xy) = log x + log y'],
        ['Log of a power', 'log(xᵐ) = m log x'],
        ['Change of base', 'logₐ x = log_b x / log_b a'],
      ],
      [
        ['log₂ 8 =', ['2', '3', '4', '16'], 1, '2³ = 8.'],
        ['Solve 3ˣ = 20 (3 s.f.)', ['2.73', '6.67', '1.30', '0.367'], 0, 'x = ln 20 / ln 3 ≈ 2.73.'],
        ['8^(2/3) =', ['4', '16', '5.33', '2'], 0, 'Cube root of 8 is 2; 2² = 4.'],
      ],
    ),
    '1.8': C(
      [
        'An infinite geometric series converges, has a finite sum, only when the absolute value of r is less than one.',
        'The sum to infinity is u one divided by one minus r.',
        'If the absolute value of r is one or more, the terms don’t shrink and the series diverges.',
        'Recurring decimals can be written as infinite geometric series, which is a neat way to convert them to fractions.',
      ],
      [
        ['Condition for convergence', '|r| < 1'],
        ['Sum to infinity', 'S∞ = u₁ / (1 − r)'],
        ['0.333… as a series', '0.3 + 0.03 + 0.003 + …, sum = 1/3'],
        ['Diverges when', '|r| ≥ 1'],
      ],
      [
        ['Sum to infinity of 8 + 4 + 2 + …', ['14', '16', '12', 'It diverges'], 1, '8 / (1 − ½) = 16.'],
        ['Which series converges?', ['r = 1.1', 'r = −2', 'r = −0.5', 'r = 1'], 2, '|−0.5| < 1.'],
        ['0.777… as a fraction is', ['7/10', '7/9', '77/100', '7/99'], 1, '0.7 / (1 − 0.1) = 7/9.'],
      ],
    ),
    '1.9': C(
      [
        'The binomial theorem expands a plus b to the power n, for positive integer n.',
        'The coefficients are binomial coefficients, n choose r, found using Pascal’s triangle or the formula n factorial over r factorial times n minus r factorial.',
        'The general term is n choose r times a to the n minus r times b to the r.',
        'Use it to find a specific coefficient without expanding everything, like the coefficient of x squared in 2 plus x to the fifth.',
      ],
      [
        ['Binomial coefficient', 'ⁿCᵣ = n! / (r!(n − r)!)'],
        ['General term of (a + b)ⁿ', 'ⁿCᵣ aⁿ⁻ʳ bʳ'],
        ['Pascal’s triangle row 4', '1 4 6 4 1'],
        ['Number of terms in (a + b)ⁿ', 'n + 1'],
      ],
      [
        ['Coefficient of x² in (1 + x)⁵', ['5', '10', '20', '1'], 1, '⁵C₂ = 10.'],
        ['Coefficient of x in (2 + x)³', ['3', '6', '12', '8'], 2, '³C₁ × 2² = 12.'],
        ['⁶C₂ =', ['12', '15', '30', '36'], 1, '6! / (2! 4!) = 15.'],
      ],
    ),
    '1.10': C(
      [
        'The counting principle: if one choice can be made in m ways and another in n ways, together there are m times n ways.',
        'Permutations count arrangements where order matters: n P r equals n factorial over n minus r factorial. Combinations count selections where order doesn’t matter: n C r.',
        'Treat restrictions carefully, for example by grouping items that must stay together.',
        'The binomial theorem extends to negative and fractional powers as an infinite series, valid when the absolute value of x is less than one.',
      ],
      [
        ['Permutations', 'ⁿPᵣ = n!/(n − r)! (order matters)'],
        ['Combinations', 'ⁿCᵣ = n!/(r!(n − r)!) (order doesn’t matter)'],
        ['Arrangements of n distinct objects', 'n!'],
        ['Extended binomial validity', 'Converges for |x| < 1'],
      ],
      [
        ['How many ways to arrange the letters of MATHS?', ['25', '60', '120', '720'], 2, '5! = 120.'],
        ['Choose 3 students from 10:', ['30', '120', '720', '1000'], 1, '¹⁰C₃ = 120.'],
        ['(1 + x)^(−1) ≈ 1 − x + x² − … is valid for', ['All x', '|x| < 1', 'x > 1', 'x = −1'], 1, 'The series converges only for |x| < 1.'],
      ],
    ),
    '1.11': C(
      [
        'Partial fractions split a rational expression into simpler fractions.',
        'For distinct linear factors: a fraction over x minus a times x minus b becomes A over x minus a plus B over x minus b.',
        'Find A and B by multiplying through and substituting convenient values of x, or comparing coefficients.',
        'Partial fractions are useful for integration and for binomial expansions.',
      ],
      [
        ['Form for distinct linear factors', 'A/(x − a) + B/(x − b)'],
        ['Cover-up method', 'Substitute the root of each factor to find its constant.'],
        ['Why use partial fractions', 'To integrate or expand rational functions.'],
        ['Degree requirement', 'Numerator degree must be less than denominator degree.'],
      ],
      [
        ['1/((x − 1)(x + 1)) = A/(x − 1) + B/(x + 1). A =', ['1', '½', '−½', '2'], 1, 'Set x = 1: 1 = 2A, so A = ½.'],
        ['In the same problem, B =', ['½', '−½', '1', '−1'], 1, 'Set x = −1: 1 = −2B, so B = −½.'],
        ['Partial fractions help mainly with', ['Differentiation of polynomials', 'Integration of rational functions', 'Solving quadratics', 'Trigonometry'], 1, 'Each part integrates to a logarithm.'],
      ],
    ),
    '1.12-1.14': C(
      [
        'Complex numbers have the form z equals a plus b i, where i squared equals minus one. They are added, multiplied and divided using the conjugate.',
        'On an Argand diagram, z has modulus r, its distance from the origin, and argument theta, its angle. Polar form is r cis theta; Euler form is r e to the i theta.',
        'Multiplying complex numbers multiplies moduli and adds arguments. De Moivre’s theorem: r cis theta to the power n is r to the n cis n theta.',
        'Use De Moivre to find nth roots: they are equally spaced around a circle. Polynomials with real coefficients have complex roots in conjugate pairs.',
      ],
      [
        ['i²', '−1'],
        ['Modulus of a + bi', '√(a² + b²)'],
        ['De Moivre’s theorem', '(r cis θ)ⁿ = rⁿ cis(nθ)'],
        ['Complex conjugate roots', 'Real polynomials have roots in pairs a ± bi.'],
      ],
      [
        ['(2 + 3i)(1 − i) =', ['5 + i', '−1 + i', '2 − 3i', '5 − i'], 0, '2 − 2i + 3i − 3i² = 5 + i.'],
        ['The modulus of 3 + 4i is', ['5', '7', '25', '1'], 0, '√(9 + 16) = 5.'],
        ['(cis 30°)⁶ =', ['cis 180° = −1', 'cis 36°', '6 cis 30°', '1'], 0, 'De Moivre: cis(6 × 30°) = cis 180° = −1.'],
      ],
    ),
    '1.15': C(
      [
        'Proof by induction proves a statement for all positive integers in three steps: show it’s true for n equals one; assume it’s true for n equals k; show it’s then true for n equals k plus one.',
        'Finish with a conclusion: since it is true for n equals one, and true for k implies true for k plus one, it is true for all positive integers.',
        'Proof by contradiction assumes the opposite and shows this leads to something impossible, like proving the square root of 2 is irrational.',
        'A single counterexample is enough to disprove a statement.',
      ],
      [
        ['Steps of induction', 'Base case, assume P(k), prove P(k + 1), conclusion.'],
        ['Proof by contradiction', 'Assume the opposite and reach an impossibility.'],
        ['Counterexample', 'One example that shows a statement is false.'],
        ['Classic contradiction proof', '√2 is irrational.'],
      ],
      [
        ['The first step of induction is to', ['Assume P(k)', 'Prove P(1)', 'Prove P(k + 1)', 'Find a counterexample'], 1, 'The base case comes first.'],
        ['“All primes are odd” is disproved by', ['3', '2', '9', '1'], 1, '2 is prime and even.'],
        ['Proving √2 is irrational usually uses', ['Induction', 'Contradiction', 'Counterexample', 'Direct substitution'], 1, 'Assume √2 = p/q in lowest terms and reach a contradiction.'],
      ],
    ),
    '1.16': C(
      [
        'A system of linear equations can have a unique solution, no solution, or infinitely many solutions.',
        'Solve systems of up to three equations in three unknowns by elimination, row reduction, or your GDC.',
        'Geometrically, three equations in three unknowns represent planes: they can meet at a point, along a line, or not at all.',
        'If a system has infinitely many solutions, express them in terms of a parameter, such as x equals 2 plus lambda.',
      ],
      [
        ['Possible numbers of solutions', 'One, none, or infinitely many.'],
        ['Geometric meaning of 3 equations in 3 unknowns', 'Three planes.'],
        ['Infinitely many solutions', 'Written using a parameter, e.g. λ.'],
        ['Method', 'Elimination / row reduction or GDC.'],
      ],
      [
        ['x + y = 3 and 2x + 2y = 6 have', ['One solution', 'No solution', 'Infinitely many solutions', 'Two solutions'], 2, 'The second equation is twice the first.'],
        ['x + y = 3 and x + y = 5 have', ['One solution', 'No solution', 'Infinitely many', 'x = 4'], 1, 'The lines are parallel.'],
        ['Solve x + y = 5, x − y = 1', ['x = 3, y = 2', 'x = 2, y = 3', 'x = 4, y = 1', 'x = 1, y = 4'], 0, 'Adding gives 2x = 6.'],
      ],
    ),
    '2.1': C(
      [
        'A straight line has gradient m equals change in y over change in x.',
        'Forms of a line: gradient-intercept y equals m x plus c; general form a x plus b y plus d equals zero; point-gradient y minus y one equals m times x minus x one.',
        'Parallel lines have equal gradients. Perpendicular lines have gradients that multiply to minus one.',
        'Use these to find equations of lines through given points, and to find intersections.',
      ],
      [
        ['Gradient', 'm = (y₂ − y₁)/(x₂ − x₁)'],
        ['Point-gradient form', 'y − y₁ = m(x − x₁)'],
        ['Parallel lines', 'Equal gradients.'],
        ['Perpendicular lines', 'm₁ × m₂ = −1'],
      ],
      [
        ['Gradient through (1, 2) and (3, 8)', ['2', '3', '6', '½'], 1, '(8 − 2)/(3 − 1) = 3.'],
        ['A line perpendicular to y = 2x + 1 has gradient', ['2', '−2', '½', '−½'], 3, '2 × (−½) = −1.'],
        ['The y-intercept of y = 4x − 7 is', ['4', '−7', '7', '7/4'], 1, 'c = −7.'],
      ],
    ),
    '2.2-2.4': C(
      [
        'A function maps each input in its domain to exactly one output. The range is the set of outputs.',
        'Graphs can be sketched by hand or drawn with technology. Key features include intercepts, maximum and minimum points, symmetry, the vertex, zeros and asymptotes.',
        'Vertical asymptotes occur where a function is undefined; horizontal asymptotes show long-term behaviour.',
        'The graph of an inverse function is the reflection of the original in the line y equals x.',
      ],
      [
        ['Function', 'Each input maps to exactly one output.'],
        ['Domain', 'The set of allowed inputs.'],
        ['Range', 'The set of outputs.'],
        ['Graph of f⁻¹', 'Reflection of f in the line y = x.'],
      ],
      [
        ['The domain of f(x) = √(x − 2) is', ['x ≥ 2', 'x > 0', 'All real x', 'x ≤ 2'], 0, 'The expression under the root must be non-negative.'],
        ['The range of f(x) = x² is', ['All real numbers', 'y ≥ 0', 'y > 0', 'y ≤ 0'], 1, 'Squares are never negative.'],
        ['f(x) = 1/(x − 3) has a vertical asymptote at', ['x = 0', 'x = 3', 'y = 3', 'y = 0'], 1, 'It is undefined at x = 3.'],
      ],
    ),
    '2.5': C(
      [
        'A composite function f of g of x means apply g first, then f.',
        'Order matters: f of g is usually different from g of f.',
        'The inverse function undoes f. To find it, swap x and y and solve for y. f of f inverse of x equals x.',
        'Only one-to-one functions have inverses; the domain of the inverse is the range of the original.',
      ],
      [
        ['(f ∘ g)(x)', 'f(g(x)): apply g first.'],
        ['Finding an inverse', 'Swap x and y, then solve for y.'],
        ['Domain of f⁻¹', 'The range of f.'],
        ['Identity property', 'f(f⁻¹(x)) = x'],
      ],
      [
        ['f(x) = 2x, g(x) = x + 3. (f ∘ g)(1) =', ['5', '8', '6', '4'], 1, 'g(1) = 4, f(4) = 8.'],
        ['The inverse of f(x) = 3x − 6 is', ['(x + 6)/3', '3x + 6', 'x/3 − 6', '1/(3x − 6)'], 0, 'y = 3x − 6 ⇒ x = (y + 6)/3.'],
        ['(g ∘ f)(1) with the same functions is', ['5', '8', '6', '4'], 0, 'f(1) = 2, g(2) = 5.'],
      ],
    ),
    '2.6-2.7': C(
      [
        'Quadratic functions can be written in standard form a x squared plus b x plus c, factorised form a times x minus p times x minus q, or vertex form a times x minus h squared plus k.',
        'The vertex is at x equals minus b over 2 a, which is also the axis of symmetry.',
        'Solve quadratic equations by factorising, completing the square, the quadratic formula, or technology.',
        'The discriminant, b squared minus 4 a c, tells you the number of real roots: positive gives two, zero gives one, negative gives none. Solve quadratic inequalities using a sketch.',
      ],
      [
        ['Quadratic formula', 'x = (−b ± √(b² − 4ac)) / 2a'],
        ['Discriminant', 'Δ = b² − 4ac'],
        ['Axis of symmetry', 'x = −b/(2a)'],
        ['Vertex form', 'y = a(x − h)² + k, vertex (h, k)'],
      ],
      [
        ['How many real roots does x² + 2x + 5 = 0 have?', ['0', '1', '2', '3'], 0, 'Δ = 4 − 20 < 0.'],
        ['The vertex of y = (x − 3)² + 2 is', ['(3, 2)', '(−3, 2)', '(2, 3)', '(3, −2)'], 0, 'Vertex form gives (h, k).'],
        ['Solve x² − 5x + 6 = 0', ['x = 2, 3', 'x = −2, −3', 'x = 1, 6', 'x = 5, 6'], 0, '(x − 2)(x − 3) = 0.'],
      ],
    ),
    '2.8-2.9': C(
      [
        'The reciprocal function one over x has asymptotes at x equals zero and y equals zero, and is its own inverse.',
        'Rational functions of the form a x plus b over c x plus d have a vertical asymptote at x equals minus d over c and a horizontal asymptote at y equals a over c.',
        'Exponential functions, like a to the x or e to the x, grow or decay and have a horizontal asymptote. Logarithmic functions are their inverses, with a vertical asymptote.',
        'Exponential models describe growth and decay, like populations and radioactive decay.',
      ],
      [
        ['Vertical asymptote of (ax + b)/(cx + d)', 'x = −d/c'],
        ['Horizontal asymptote of (ax + b)/(cx + d)', 'y = a/c'],
        ['Inverse of eˣ', 'ln x'],
        ['Asymptote of y = eˣ', 'y = 0'],
      ],
      [
        ['y = (2x + 1)/(x − 4) has a horizontal asymptote at', ['y = 2', 'y = 4', 'x = 4', 'y = ½'], 0, 'y = a/c = 2/1.'],
        ['The domain of ln x is', ['x > 0', 'x ≥ 0', 'All real x', 'x < 0'], 0, 'Logs are only defined for positive numbers.'],
        ['The graph of y = eˣ passes through', ['(0, 0)', '(0, 1)', '(1, 0)', '(1, 1)'], 1, 'e⁰ = 1.'],
      ],
    ),
    '2.10-2.11': C(
      [
        'Equations can be solved analytically, using algebra, or graphically, by finding intersections with technology.',
        'Transformations of graphs: f of x plus b translates up by b; f of x minus a translates right by a.',
        'p times f of x stretches vertically by factor p; f of q x stretches horizontally by factor one over q.',
        'Minus f of x reflects in the x-axis; f of minus x reflects in the y-axis. Apply several transformations in a careful order.',
      ],
      [
        ['y = f(x − a)', 'Translation a units right.'],
        ['y = f(x) + b', 'Translation b units up.'],
        ['y = f(qx)', 'Horizontal stretch, scale factor 1/q.'],
        ['y = −f(x)', 'Reflection in the x-axis.'],
      ],
      [
        ['y = f(x + 2) is a translation of', ['2 right', '2 left', '2 up', '2 down'], 1, 'f(x − a) moves right, so f(x + 2) moves left.'],
        ['y = 3f(x) is', ['Vertical stretch factor 3', 'Horizontal stretch factor 3', 'Translation up 3', 'Reflection'], 0, 'Multiplying outputs stretches vertically.'],
        ['y = f(−x) is a reflection in', ['The x-axis', 'The y-axis', 'y = x', 'The origin'], 1, 'Inputs are negated.'],
      ],
    ),
    '2.12': C(
      [
        'Polynomial functions have the form a n x to the n plus lower powers. Their graphs are smooth, with at most n roots and n minus one turning points.',
        'The factor theorem: if p of a equals zero, then x minus a is a factor. The remainder theorem: the remainder when dividing by x minus a is p of a.',
        'Repeated roots touch the x-axis; a triple root is a point of inflection on the axis.',
        'For a polynomial, the sum of the roots is minus a n minus one over a n, and the product of the roots is minus one to the n times a zero over a n.',
      ],
      [
        ['Factor theorem', 'p(a) = 0 ⇔ (x − a) is a factor.'],
        ['Remainder theorem', 'Remainder of p(x) ÷ (x − a) is p(a).'],
        ['Sum of roots', '−aₙ₋₁/aₙ'],
        ['Double root on a graph', 'The graph touches the x-axis.'],
      ],
      [
        ['p(x) = x³ − 2x² − x + 2. Is (x − 1) a factor?', ['Yes', 'No', 'Only if x = 2', 'Cannot tell'], 0, 'p(1) = 1 − 2 − 1 + 2 = 0.'],
        ['Remainder when x² + 3 is divided by (x − 2)', ['7', '5', '3', '1'], 0, 'p(2) = 4 + 3 = 7.'],
        ['Sum of roots of 2x³ − 6x² + x − 1 = 0', ['3', '−3', '½', '6'], 0, '−(−6)/2 = 3.'],
      ],
    ),
    '2.13-2.14': C(
      [
        'Rational functions with a quadratic denominator can have two vertical asymptotes. If the numerator degree is one more than the denominator, there is an oblique asymptote.',
        'A function is even if f of minus x equals f of x, symmetric in the y-axis, like x squared and cos x.',
        'A function is odd if f of minus x equals minus f of x, with rotational symmetry about the origin, like x cubed and sin x.',
        'A self-inverse function is its own inverse, like one over x. To find an inverse, the domain may need restricting so the function is one-to-one.',
      ],
      [
        ['Even function', 'f(−x) = f(x); symmetric about the y-axis.'],
        ['Odd function', 'f(−x) = −f(x); rotational symmetry about the origin.'],
        ['Self-inverse function', 'f(f(x)) = x, e.g. 1/x.'],
        ['Oblique asymptote', 'When numerator degree is one more than denominator degree.'],
      ],
      [
        ['Which is odd?', ['x²', 'cos x', 'x³', '|x|'], 2, '(−x)³ = −x³.'],
        ['Which is even?', ['sin x', 'x⁴', 'x³', 'eˣ'], 1, '(−x)⁴ = x⁴.'],
        ['Which is self-inverse?', ['2x', '1/x', 'x²', 'x + 1'], 1, '1/(1/x) = x.'],
      ],
    ),
    '2.15-2.16': C(
      [
        'Solve inequalities like g of x greater than or equal to f of x by finding intersection points, then reading off where one graph lies above the other.',
        'The graph of the absolute value of f of x reflects any part below the x-axis upward.',
        'The graph of f of absolute x reflects the right-hand side onto the left.',
        'The graph of one over f of x has vertical asymptotes where f is zero, and f squared, and f of a x plus b, are further transformations to recognise.',
      ],
      [
        ['y = |f(x)|', 'Reflect parts below the x-axis upward.'],
        ['y = f(|x|)', 'Reflect the part for x ≥ 0 into the left half.'],
        ['y = 1/f(x)', 'Vertical asymptotes where f(x) = 0.'],
        ['Solving g(x) ≥ f(x)', 'Find intersections, then see where g is above f.'],
      ],
      [
        ['Solve |x − 2| < 3', ['−1 < x < 5', 'x < 5', '−5 < x < 1', 'x > −1'], 0, '−3 < x − 2 < 3.'],
        ['y = |x² − 4| has no part', ['Above the x-axis', 'Below the x-axis', 'On the y-axis', 'At x = 0'], 1, 'Absolute values are non-negative.'],
        ['y = 1/(x − 1) has a vertical asymptote at', ['x = 0', 'x = 1', 'x = −1', 'y = 1'], 1, 'f(x) = x − 1 is zero at x = 1.'],
      ],
    ),
    '3.1': C(
      [
        'In three dimensions, the distance between two points is the square root of the differences in x, y and z, each squared and added. The midpoint averages each coordinate.',
        'Know the volume and surface area formulas for prisms, cylinders, pyramids, cones and spheres, from the formula booklet.',
        'To find the angle between a line and a plane, drop a perpendicular to form a right-angled triangle.',
        'Draw clear 3D diagrams and identify right-angled triangles to use Pythagoras and trigonometry.',
      ],
      [
        ['3D distance', '√((x₂ − x₁)² + (y₂ − y₁)² + (z₂ − z₁)²)'],
        ['Volume of a cone', '⅓πr²h'],
        ['Volume of a sphere', '4/3 πr³'],
        ['Surface area of a sphere', '4πr²'],
      ],
      [
        ['Distance from (0, 0, 0) to (2, 3, 6)', ['7', '11', '√11', '49'], 0, '√(4 + 9 + 36) = 7.'],
        ['Volume of a sphere with radius 3', ['36π', '12π', '27π', '9π'], 0, '4/3 × π × 27 = 36π.'],
        ['Midpoint of (1, 2, 3) and (3, 4, 5)', ['(2, 3, 4)', '(4, 6, 8)', '(1, 1, 1)', '(2, 2, 2)'], 0, 'Average each coordinate.'],
      ],
    ),
    '3.2-3.3': C(
      [
        'In right-angled triangles, use SOH CAH TOA and Pythagoras.',
        'In any triangle, the sine rule is a over sin A equals b over sin B, used with a side and its opposite angle. The cosine rule is a squared equals b squared plus c squared minus 2 b c cos A.',
        'The area of a triangle is one half a b sin C.',
        'Applications include angles of elevation and depression, and bearings, measured clockwise from north as three figures.',
      ],
      [
        ['Sine rule', 'a/sin A = b/sin B = c/sin C'],
        ['Cosine rule', 'a² = b² + c² − 2bc cos A'],
        ['Area of a triangle', '½ab sin C'],
        ['Bearing', 'Angle measured clockwise from north, written as three figures.'],
      ],
      [
        ['Triangle with b = 5, c = 8, A = 60°. a² =', ['49', '89', '39', '129'], 0, '25 + 64 − 80 × 0.5 = 49, so a = 7.'],
        ['Area with a = 6, b = 10, C = 30°', ['15', '30', '60', '7.5'], 0, '½ × 6 × 10 × 0.5 = 15.'],
        ['Due east as a bearing is', ['090°', '270°', '180°', '045°'], 0, 'Clockwise from north.'],
      ],
    ),
    '3.4-3.5': C(
      [
        'A radian is the angle at the centre when the arc equals the radius. Pi radians equals 180 degrees.',
        'Arc length is r theta and sector area is one half r squared theta, with theta in radians.',
        'On the unit circle, a point at angle theta has coordinates cos theta, sin theta, and tan theta equals sin over cos.',
        'Know exact values for 0, pi over 6, pi over 4, pi over 3 and pi over 2. The ambiguous case of the sine rule can give two possible triangles.',
      ],
      [
        ['π radians', '180°'],
        ['Arc length', 'l = rθ (θ in radians)'],
        ['Sector area', 'A = ½r²θ'],
        ['sin(π/6), cos(π/3)', 'Both equal ½'],
      ],
      [
        ['90° in radians is', ['π', 'π/2', 'π/4', '2π'], 1, '90/180 × π.'],
        ['Arc length for r = 4, θ = π/2', ['2π', '4π', 'π', '8π'], 0, '4 × π/2 = 2π.'],
        ['cos(π/4) =', ['½', '√2/2', '√3/2', '1'], 1, 'cos 45° = √2/2.'],
      ],
    ),
    '3.6': C(
      [
        'The Pythagorean identity is cos squared theta plus sin squared theta equals one.',
        'The double angle identities are sin 2 theta equals 2 sin theta cos theta, and cos 2 theta equals cos squared minus sin squared, which can also be written 2 cos squared minus one, or one minus 2 sin squared.',
        'Tan theta equals sin theta over cos theta.',
        'Use identities to simplify expressions, prove results, and find exact values, for example finding cos theta when sin theta is known.',
      ],
      [
        ['Pythagorean identity', 'sin²θ + cos²θ = 1'],
        ['sin 2θ', '2 sin θ cos θ'],
        ['cos 2θ', 'cos²θ − sin²θ = 2cos²θ − 1 = 1 − 2sin²θ'],
        ['tan θ', 'sin θ / cos θ'],
      ],
      [
        ['If sin θ = 3/5 and θ is acute, cos θ =', ['4/5', '3/4', '5/4', '2/5'], 0, 'cos²θ = 1 − 9/25 = 16/25.'],
        ['Using the same θ, sin 2θ =', ['24/25', '12/25', '6/5', '7/25'], 0, '2 × 3/5 × 4/5 = 24/25.'],
        ['1 − 2sin²θ equals', ['sin 2θ', 'cos 2θ', 'tan θ', '1'], 1, 'It is a form of cos 2θ.'],
      ],
    ),
    '3.7-3.8': C(
      [
        'The graphs of sin x and cos x have period 2 pi and amplitude 1. Tan x has period pi and vertical asymptotes.',
        'For y equals a sin of b times x plus c, plus d: amplitude is the absolute value of a, period is 2 pi over b, and d is the principal axis. These model tides, daylight and Ferris wheels.',
        'Solve trigonometric equations in a given interval: find the principal value, then use symmetry of the graph or unit circle for other solutions.',
        'Some equations are quadratic in sin or cos: factorise them, and remember sin and cos lie between minus one and one.',
      ],
      [
        ['Period of sin(bx)', '2π/b'],
        ['Amplitude of a sin x', '|a|'],
        ['Period of tan x', 'π'],
        ['Solutions of sin x = k in [0, 2π]', 'x and π − x'],
      ],
      [
        ['Period of y = 3sin(2x)', ['π', '2π', '3', '4π'], 0, '2π/2 = π.'],
        ['Solve sin x = ½ for 0 ≤ x ≤ 2π', ['π/6, 5π/6', 'π/3, 2π/3', 'π/6 only', 'π/6, 7π/6'], 0, 'sin is positive in the first and second quadrants.'],
        ['2sin²x − sin x − 1 = 0 gives sin x =', ['1 or −½', '−1 or ½', '2 or −1', '1 only'], 0, '(2sin x + 1)(sin x − 1) = 0.'],
      ],
    ),
    '3.9-3.11': C(
      [
        'The reciprocal functions are sec equals one over cos, cosec equals one over sin, and cot equals one over tan. They give identities like one plus tan squared equals sec squared.',
        'The inverse functions arcsin, arccos and arctan have restricted domains and ranges so they are one-to-one.',
        'Compound angle identities: sin of A plus B equals sin A cos B plus cos A sin B; cos of A plus B equals cos A cos B minus sin A sin B; and a similar identity for tan.',
        'Use symmetry properties, like sin of pi minus theta equals sin theta, to simplify and solve.',
      ],
      [
        ['1 + tan²θ', 'sec²θ'],
        ['sin(A + B)', 'sin A cos B + cos A sin B'],
        ['cos(A + B)', 'cos A cos B − sin A sin B'],
        ['Range of arcsin x', '−π/2 ≤ y ≤ π/2'],
      ],
      [
        ['sec(π/3) =', ['2', '½', '√3', '2/√3'], 0, '1/cos(π/3) = 1/½ = 2.'],
        ['sin 75° = sin(45° + 30°) =', ['(√6 + √2)/4', '(√6 − √2)/4', '√3/2', '1'], 0, 'Using the compound angle formula.'],
        ['arctan(1) =', ['π/4', 'π/2', '0', 'π'], 0, 'tan(π/4) = 1.'],
      ],
    ),
    '3.12-3.13': C(
      [
        'Vectors have magnitude and direction. They can be written as column vectors or with unit vectors i, j and k.',
        'Add vectors by adding components; the magnitude is the square root of the sum of squared components. A unit vector has magnitude one.',
        'The scalar, or dot, product is v dot w equals v1 w1 plus v2 w2 plus v3 w3, which also equals the product of magnitudes times cos theta.',
        'If the scalar product is zero, the vectors are perpendicular. Use it to find the angle between two vectors.',
      ],
      [
        ['Magnitude of (a, b, c)', '√(a² + b² + c²)'],
        ['Scalar product', 'v·w = v₁w₁ + v₂w₂ + v₃w₃ = |v||w| cos θ'],
        ['Perpendicular vectors', 'v·w = 0'],
        ['Unit vector', 'A vector of magnitude 1: v / |v|'],
      ],
      [
        ['(1, 2, 3)·(4, 0, −1) =', ['1', '4', '0', '7'], 0, '4 + 0 − 3 = 1.'],
        ['Magnitude of (2, −1, 2)', ['3', '9', '√5', '5'], 0, '√(4 + 1 + 4) = 3.'],
        ['(1, 2)·(2, −1) = 0 means the vectors are', ['Parallel', 'Perpendicular', 'Equal', 'Unit vectors'], 1, 'A zero dot product means 90°.'],
      ],
    ),
    '3.14-3.15': C(
      [
        'The vector equation of a line is r equals a plus lambda b, where a is a point on the line and b is a direction vector.',
        'It can be written in parametric or Cartesian form. Lines can model motion with constant velocity: position equals start plus t times velocity.',
        'The angle between two lines is the angle between their direction vectors.',
        'In 3D, two lines can be coincident, parallel, intersecting, or skew: not parallel and never meeting.',
      ],
      [
        ['Vector equation of a line', 'r = a + λb'],
        ['Direction vector', 'b, gives the line’s direction.'],
        ['Skew lines', 'Not parallel and do not intersect (only in 3D).'],
        ['Angle between lines', 'Use the scalar product of the direction vectors.'],
      ],
      [
        ['Which point lies on r = (1, 2, 3) + λ(1, 0, 2)?', ['(2, 2, 5)', '(2, 3, 5)', '(1, 2, 5)', '(0, 0, 0)'], 0, 'λ = 1 gives (2, 2, 5).'],
        ['Two lines in 3D that never meet and aren’t parallel are', ['Coincident', 'Skew', 'Perpendicular', 'Intersecting'], 1, 'Skew lines exist only in 3D.'],
        ['Lines with direction vectors (1, 2, 3) and (2, 4, 6) are', ['Perpendicular', 'Parallel or coincident', 'Skew', 'Intersecting'], 1, 'One direction is a multiple of the other.'],
      ],
    ),
    '3.16-3.18': C(
      [
        'The vector, or cross, product v cross w gives a vector perpendicular to both. Its magnitude is the product of magnitudes times sin theta, which is the area of a parallelogram.',
        'A plane can be written as r equals a plus lambda b plus mu c, or using a normal vector n: r dot n equals a dot n, which gives the Cartesian form a x plus b y plus c z equals d.',
        'Find the intersection of a line and a plane by substituting the line into the plane equation. Two planes meet in a line.',
        'Three planes can meet at a point, in a line, or not at all. Angles between a line and a plane, or two planes, use normals.',
      ],
      [
        ['Vector product magnitude', '|v × w| = |v||w| sin θ'],
        ['Direction of v × w', 'Perpendicular to both v and w.'],
        ['Cartesian equation of a plane', 'ax + by + cz = d, normal (a, b, c)'],
        ['Area of a parallelogram', '|v × w|'],
      ],
      [
        ['(1, 0, 0) × (0, 1, 0) =', ['(0, 0, 1)', '(0, 0, −1)', '(1, 1, 0)', '0'], 0, 'i × j = k.'],
        ['The normal to 2x − y + 3z = 5 is', ['(2, −1, 3)', '(2, 1, 3)', '(5, 0, 0)', '(1, 1, 1)'], 0, 'Coefficients of x, y, z.'],
        ['Two non-parallel planes intersect in', ['A point', 'A line', 'A plane', 'Nothing'], 1, 'Their intersection is a line.'],
      ],
    ),
    '4.1-4.3': C(
      [
        'A population is the whole group; a sample is part of it. Sampling methods include simple random, convenience, systematic, quota and stratified. Poor sampling causes bias.',
        'Data can be discrete or continuous. Present data with frequency tables, histograms, cumulative frequency graphs and box-and-whisker plots.',
        'Measures of central tendency are mean, median and mode. Measures of dispersion are range, interquartile range, variance and standard deviation.',
        'An outlier is more than 1.5 times the IQR below Q1 or above Q3. Adding a constant to all data shifts the mean but not the standard deviation.',
      ],
      [
        ['Interquartile range', 'IQR = Q3 − Q1'],
        ['Outlier rule', 'Below Q1 − 1.5 × IQR or above Q3 + 1.5 × IQR'],
        ['Stratified sampling', 'Sample from each subgroup in proportion to its size.'],
        ['Effect of adding k to all data', 'Mean increases by k; standard deviation unchanged.'],
      ],
      [
        ['Median of 3, 7, 8, 12, 15', ['7', '8', '9', '12'], 1, 'The middle value.'],
        ['Q1 = 10, Q3 = 20. Upper outlier boundary', ['25', '30', '35', '40'], 2, '20 + 1.5 × 10 = 35.'],
        ['Every value is multiplied by 2. Standard deviation…', ['Is unchanged', 'Doubles', 'Quadruples', 'Halves'], 1, 'Spread scales by the same factor.'],
      ],
    ),
    '4.4/4.10': C(
      [
        'Scatter diagrams show bivariate data. Pearson’s correlation coefficient r measures the strength of linear correlation, from minus one to one.',
        'r close to one is strong positive, close to minus one strong negative, and near zero no linear correlation. Correlation doesn’t imply causation.',
        'The least squares regression line of y on x predicts y from x. Use it for interpolation within the data range; extrapolation outside is unreliable.',
        'To predict x from y, use the regression line of x on y instead. Both lines pass through the mean point.',
      ],
      [
        ['Range of Pearson’s r', '−1 ≤ r ≤ 1'],
        ['Regression of y on x', 'Used to predict y from a given x.'],
        ['Interpolation vs extrapolation', 'Inside vs outside the data range.'],
        ['Point on both regression lines', '(x̄, ȳ)'],
      ],
      [
        ['r = −0.92 means', ['Strong positive', 'Strong negative', 'Weak negative', 'No correlation'], 1, 'Close to −1.'],
        ['To predict x from y you should use', ['y on x line', 'x on y line', 'Either', 'Neither'], 1, 'Each line predicts one variable.'],
        ['Predicting far outside the data range is', ['Interpolation', 'Extrapolation', 'Always accurate', 'Correlation'], 1, 'Extrapolation is unreliable.'],
      ],
    ),
    '4.5-4.6/4.11': C(
      [
        'Probability of an event is the number of favourable outcomes over total equally likely outcomes. The complement: P of A prime equals one minus P of A.',
        'Combined events: P of A or B equals P A plus P B minus P of A and B. Mutually exclusive events can’t happen together.',
        'Conditional probability: P of A given B equals P of A and B over P of B. Events are independent if P of A given B equals P of A, or P of A and B equals P A times P B.',
        'Venn diagrams, tree diagrams and sample space diagrams organise the outcomes. The expected number of occurrences is n times p.',
      ],
      [
        ['P(A ∪ B)', 'P(A) + P(B) − P(A ∩ B)'],
        ['Conditional probability', 'P(A | B) = P(A ∩ B) / P(B)'],
        ['Independent events', 'P(A ∩ B) = P(A) × P(B)'],
        ['Mutually exclusive', 'P(A ∩ B) = 0'],
      ],
      [
        ['P(A) = 0.4, P(B) = 0.5, independent. P(A ∩ B) =', ['0.9', '0.2', '0.1', '0.45'], 1, '0.4 × 0.5.'],
        ['P(A ∩ B) = 0.12, P(B) = 0.3. P(A | B) =', ['0.4', '0.036', '0.18', '0.25'], 0, '0.12 / 0.3.'],
        ['A fair die is rolled 60 times. Expected number of sixes', ['6', '10', '12', '60'], 1, '60 × 1/6.'],
      ],
    ),
    '4.7-4.8': C(
      [
        'A discrete random variable takes countable values, each with a probability. The probabilities must add to one.',
        'The expected value is the sum of x times P of x. A game is fair if the expected gain is zero.',
        'The binomial distribution models the number of successes in n independent trials, each with the same probability p.',
        'For X following B of n and p: the mean is n p and the variance is n p times one minus p. Use your GDC for binomial probabilities, pdf for exactly and cdf for at most.',
      ],
      [
        ['Expected value', 'E(X) = Σ x P(X = x)'],
        ['Conditions for binomial', 'Fixed n, independent trials, two outcomes, constant p.'],
        ['Binomial mean', 'np'],
        ['Binomial variance', 'np(1 − p)'],
      ],
      [
        ['X ~ B(20, 0.3). E(X) =', ['6', '3', '14', '0.3'], 0, '20 × 0.3.'],
        ['Variance of B(10, 0.5)', ['5', '2.5', '0.25', '10'], 1, '10 × 0.5 × 0.5.'],
        ['P(X = 1) + P(X = 2) + P(X = 3) = 1 with P(X = 1) = 0.2, P(X = 2) = 0.5. P(X = 3) =', ['0.3', '0.7', '0.2', '1'], 0, 'Probabilities sum to 1.'],
      ],
    ),
    '4.9/4.12': C(
      [
        'The normal distribution is a symmetric, bell-shaped continuous distribution described by its mean mu and standard deviation sigma.',
        'About 68 percent of data lies within one standard deviation of the mean, 95 percent within two, and 99.7 percent within three.',
        'Use your GDC’s normal cdf to find probabilities and inverse normal to find values from probabilities.',
        'The standardised value z equals x minus mu over sigma, which counts standard deviations from the mean. Use z-values to find an unknown mean or standard deviation.',
      ],
      [
        ['Standardising', 'z = (x − μ)/σ'],
        ['Within 1σ of the mean', 'About 68%'],
        ['Within 2σ of the mean', 'About 95%'],
        ['Inverse normal', 'Finds x for a given cumulative probability.'],
      ],
      [
        ['X ~ N(50, 10²). z for x = 65', ['1.5', '6.5', '15', '0.15'], 0, '(65 − 50)/10.'],
        ['P(X > μ) for any normal distribution', ['0.25', '0.5', '0.68', '1'], 1, 'It is symmetric about the mean.'],
        ['About what percentage lies within 2σ?', ['68%', '95%', '99.7%', '50%'], 1, 'The empirical rule.'],
      ],
    ),
    '4.13': C(
      [
        'Bayes’ theorem reverses conditional probabilities: P of B given A equals P of B times P of A given B, divided by P of A.',
        'P of A can be found with the law of total probability: P B times P A given B plus P B prime times P A given B prime.',
        'Tree diagrams make Bayes’ theorem easier: find the probability of the path you want, divided by the total probability of the outcome.',
        'A classic example is medical testing: a positive result from a rare disease is often a false positive.',
      ],
      [
        ['Bayes’ theorem', 'P(B|A) = P(B)P(A|B) / P(A)'],
        ['Law of total probability', 'P(A) = P(B)P(A|B) + P(B′)P(A|B′)'],
        ['Why tree diagrams help', 'They show all paths to an outcome.'],
        ['False positive', 'A positive test for someone without the condition.'],
      ],
      [
        ['1% have a disease. The test is positive for 90% of those with it and 5% of those without. P(positive) =', ['0.0585', '0.09', '0.95', '0.05'], 0, '0.01 × 0.9 + 0.99 × 0.05 = 0.0585.'],
        ['In the same example, P(disease | positive) ≈', ['0.15', '0.90', '0.01', '0.50'], 0, '0.009 / 0.0585 ≈ 0.154.'],
        ['Bayes’ theorem is used to find', ['P(A ∪ B)', 'A reversed conditional probability', 'The mean', 'Variance'], 1, 'It turns P(A|B) into P(B|A).'],
      ],
    ),
    '4.14': C(
      [
        'A continuous random variable is described by a probability density function f of x, which is never negative and has total area one.',
        'Probabilities are areas: P of a less than X less than b is the integral of f from a to b.',
        'The mean is the integral of x f of x. The variance is the integral of x squared f of x, minus the mean squared. The mode is where f is greatest, and the median splits the area in half.',
        'For linear transformations: E of a X plus b equals a E of X plus b, and Var of a X plus b equals a squared Var of X.',
      ],
      [
        ['Condition for a pdf', 'f(x) ≥ 0 and total area = 1'],
        ['E(X) for a continuous RV', '∫ x f(x) dx'],
        ['Var(X)', 'E(X²) − [E(X)]²'],
        ['Var(aX + b)', 'a² Var(X)'],
      ],
      [
        ['f(x) = kx for 0 ≤ x ≤ 2. k =', ['½', '1', '2', '¼'], 0, '∫₀² kx dx = 2k = 1.'],
        ['Var(3X + 2) if Var(X) = 4', ['12', '14', '36', '38'], 2, '3² × 4 = 36.'],
        ['E(2X − 1) if E(X) = 5', ['9', '10', '4', '11'], 0, '2 × 5 − 1.'],
      ],
    ),
    '5.1-5.4': C(
      [
        'The derivative measures the gradient of a curve, or rate of change. It is the limit of the gradient of a chord as the second point approaches the first.',
        'The power rule: the derivative of x to the n is n x to the n minus one. If f prime is positive, f is increasing; if negative, decreasing.',
        'The tangent at a point has gradient f prime of a and passes through the point.',
        'The normal is perpendicular to the tangent, so its gradient is minus one over f prime of a.',
      ],
      [
        ['d/dx (xⁿ)', 'nxⁿ⁻¹'],
        ['Increasing function', 'f′(x) > 0'],
        ['Tangent gradient at x = a', 'f′(a)'],
        ['Normal gradient', '−1/f′(a)'],
      ],
      [
        ['Differentiate y = 4x³', ['12x²', '4x²', '12x³', 'x⁴'], 0, '3 × 4x².'],
        ['Gradient of y = x² at x = 3', ['3', '6', '9', '2'], 1, 'dy/dx = 2x = 6.'],
        ['If the tangent gradient is 2, the normal gradient is', ['−2', '½', '−½', '2'], 2, '−1/2.'],
      ],
    ),
    '5.6': C(
      [
        'Standard derivatives: sin x becomes cos x; cos x becomes minus sin x; e to the x stays e to the x; ln x becomes one over x.',
        'The chain rule: the derivative of f of g of x is f prime of g of x times g prime of x.',
        'The product rule: the derivative of u v is u v prime plus v u prime.',
        'The quotient rule: the derivative of u over v is v u prime minus u v prime, all over v squared.',
      ],
      [
        ['d/dx (sin x)', 'cos x'],
        ['d/dx (ln x)', '1/x'],
        ['Chain rule', 'dy/dx = dy/du × du/dx'],
        ['Product rule', '(uv)′ = uv′ + vu′'],
      ],
      [
        ['Differentiate e^(3x)', ['e^(3x)', '3e^(3x)', 'e^(3x)/3', '3xe^(3x)'], 1, 'Chain rule: 3e^(3x).'],
        ['Differentiate x sin x', ['cos x', 'sin x + x cos x', 'x cos x', 'sin x − x cos x'], 1, 'Product rule.'],
        ['Differentiate ln(2x)', ['1/(2x)', '1/x', '2/x', '2x'], 1, '(1/(2x)) × 2 = 1/x.'],
      ],
    ),
    '5.7-5.8': C(
      [
        'The second derivative, f double prime, measures how the gradient changes, and shows concavity.',
        'Stationary points occur where f prime equals zero. If f double prime is positive, it is a local minimum; if negative, a local maximum.',
        'A point of inflection is where concavity changes, where f double prime changes sign.',
        'Optimisation: write the quantity to maximise or minimise as a function of one variable, differentiate, set equal to zero and check it is a max or min.',
      ],
      [
        ['Stationary point', 'f′(x) = 0'],
        ['Local minimum test', 'f″(x) > 0'],
        ['Point of inflection', 'Where f″ changes sign.'],
        ['Optimisation steps', 'Form a function, differentiate, set to zero, verify.'],
      ],
      [
        ['If f″(a) < 0 at a stationary point, it is a', ['Minimum', 'Maximum', 'Point of inflection', 'Root'], 1, 'Concave down.'],
        ['Stationary point of y = x² − 6x', ['x = 3', 'x = 6', 'x = −3', 'x = 0'], 0, '2x − 6 = 0.'],
        ['y = x³ has at x = 0', ['A maximum', 'A minimum', 'A point of inflection', 'No stationary point'], 2, 'Gradient is zero but concavity changes.'],
      ],
    ),
    '5.9': C(
      [
        'In kinematics, velocity is the derivative of displacement, and acceleration is the derivative of velocity.',
        'Going the other way, displacement is the integral of velocity.',
        'The distance travelled is the integral of the absolute value of velocity, which accounts for changes in direction.',
        'The particle is at rest when velocity is zero, and speeding up when velocity and acceleration have the same sign.',
      ],
      [
        ['v in terms of s', 'v = ds/dt'],
        ['a in terms of v', 'a = dv/dt'],
        ['Distance travelled', '∫|v| dt'],
        ['Speeding up', 'v and a have the same sign.'],
      ],
      [
        ['s = t³ − 3t. Velocity at t = 2', ['9', '2', '6', '12'], 0, 'v = 3t² − 3 = 9.'],
        ['Acceleration in the same case at t = 2', ['6', '12', '9', '3'], 1, 'a = 6t = 12.'],
        ['A particle is at rest when', ['s = 0', 'v = 0', 'a = 0', 't = 0'], 1, 'Velocity is zero.'],
      ],
    ),
    '5.5/5.10-5.11': C(
      [
        'Integration is the reverse of differentiation. The integral of x to the n is x to the n plus one over n plus one, plus C, for n not equal to minus one.',
        'Standard integrals: sin x gives minus cos x, cos x gives sin x, e to the x stays e to the x, and one over x gives ln of absolute x.',
        'Definite integrals give the area under a curve. Areas below the x-axis come out negative, so use the absolute value.',
        'The area between two curves is the integral of the top curve minus the bottom curve. Integration by inspection reverses the chain rule, like integrating 2 x times e to the x squared.',
      ],
      [
        ['∫ xⁿ dx', 'xⁿ⁺¹/(n + 1) + C, n ≠ −1'],
        ['∫ 1/x dx', 'ln|x| + C'],
        ['∫ cos x dx', 'sin x + C'],
        ['Area between curves', '∫ (top − bottom) dx'],
      ],
      [
        ['∫ 3x² dx =', ['x³ + C', '6x + C', '3x³ + C', 'x² + C'], 0, '3x³/3 = x³.'],
        ['∫₀² 2x dx =', ['2', '4', '8', '1'], 1, '[x²]₀² = 4.'],
        ['∫ 2x e^(x²) dx =', ['e^(x²) + C', '2e^(x²) + C', 'x²e^(x²) + C', 'e^(2x) + C'], 0, 'Reverse chain rule.'],
      ],
    ),
    '5.12-5.13': C(
      [
        'A function is continuous if its graph has no breaks. It is differentiable if it has a well-defined gradient, so no corners or cusps.',
        'Differentiation from first principles: f prime of x is the limit, as h tends to zero, of f of x plus h minus f of x, over h.',
        'Limits of rational functions at infinity depend on the highest powers of x.',
        'L’Hôpital’s rule: if a limit gives zero over zero or infinity over infinity, take the limit of f prime over g prime instead.',
      ],
      [
        ['First principles', 'f′(x) = lim(h→0) [f(x + h) − f(x)]/h'],
        ['Differentiable implies', 'Continuous (but not vice versa).'],
        ['L’Hôpital’s rule applies to', '0/0 or ∞/∞ forms'],
        ['|x| at x = 0', 'Continuous but not differentiable (a corner).'],
      ],
      [
        ['lim(x→0) sin x / x =', ['0', '1', '∞', 'Undefined'], 1, 'By L’Hôpital: cos 0 / 1 = 1.'],
        ['lim(x→∞) (3x² + 1)/(x² − 4) =', ['0', '3', '∞', '−¼'], 1, 'Ratio of leading coefficients.'],
        ['y = |x| at x = 0 is', ['Differentiable', 'Continuous but not differentiable', 'Discontinuous', 'Undefined'], 1, 'It has a corner.'],
      ],
    ),
    '5.14': C(
      [
        'Implicit differentiation finds d y by d x when y isn’t written explicitly: differentiate every term with respect to x, multiplying y terms by d y by d x.',
        'For example, for x squared plus y squared equals 25, 2 x plus 2 y d y by d x equals zero, so d y by d x equals minus x over y.',
        'Related rates link rates of change of connected quantities using the chain rule, like how fast a balloon’s radius grows as its volume increases.',
        'Write the relationship, differentiate with respect to time, substitute known values, then solve.',
      ],
      [
        ['d/dx (y²)', '2y dy/dx'],
        ['Implicit differentiation of x² + y² = r²', 'dy/dx = −x/y'],
        ['Related rates', 'Use the chain rule with respect to time.'],
        ['d/dt (V) for a sphere', '4πr² dr/dt'],
      ],
      [
        ['For x² + y² = 25, dy/dx at (3, 4) is', ['¾', '−¾', '4/3', '−4/3'], 1, '−x/y = −3/4.'],
        ['d/dx (xy) =', ['y', 'x dy/dx', 'y + x dy/dx', 'x + y'], 2, 'Product rule.'],
        ['A circle’s radius grows at 2 cm/s. When r = 5, dA/dt =', ['20π', '10π', '4π', '25π'], 0, 'dA/dt = 2πr × dr/dt = 20π.'],
      ],
    ),
    '5.15-5.16': C(
      [
        'Further derivatives include tan x giving sec squared x, a to the x giving a to the x ln a, and arcsin, arccos and arctan.',
        'Integration by substitution replaces part of the expression with u, converts dx, and integrates in u. Change limits for definite integrals.',
        'Integration by parts: the integral of u d v equals u v minus the integral of v d u. Choose u to become simpler when differentiated.',
        'Sometimes you need repeated integration by parts, or partial fractions before integrating.',
      ],
      [
        ['d/dx (tan x)', 'sec²x'],
        ['d/dx (arctan x)', '1/(1 + x²)'],
        ['Integration by parts', '∫u dv = uv − ∫v du'],
        ['d/dx (aˣ)', 'aˣ ln a'],
      ],
      [
        ['∫ x eˣ dx =', ['x eˣ − eˣ + C', 'x eˣ + C', 'eˣ + C', 'x² eˣ/2 + C'], 0, 'By parts with u = x.'],
        ['∫ 1/(1 + x²) dx =', ['ln(1 + x²) + C', 'arctan x + C', 'arcsin x + C', '1/x + C'], 1, 'Standard integral.'],
        ['d/dx (2ˣ) =', ['x2ˣ⁻¹', '2ˣ ln 2', '2ˣ', 'ln 2'], 1, 'aˣ ln a.'],
      ],
    ),
    '5.17': C(
      [
        'The area between a curve and the y-axis is the integral of x with respect to y.',
        'The volume of revolution when a curve is rotated 360 degrees about the x-axis is pi times the integral of y squared d x.',
        'About the y-axis, it is pi times the integral of x squared d y.',
        'Sketch the region first and check the limits carefully.',
      ],
      [
        ['Volume about the x-axis', 'V = π∫ y² dx'],
        ['Volume about the y-axis', 'V = π∫ x² dy'],
        ['Area with the y-axis', '∫ x dy'],
        ['Tip', 'Sketch the region and identify the limits.'],
      ],
      [
        ['Rotate y = x from 0 to 3 about the x-axis. V =', ['9π', '3π', '27π', '9'], 0, 'π∫₀³ x² dx = 9π.'],
        ['Volume about the y-axis uses', ['∫ y² dx', '∫ x² dy', '∫ x dy', '∫ y dx'], 1, 'π∫x² dy.'],
        ['Rotating y = √x from 0 to 4 about the x-axis gives', ['8π', '16π', '4π', '2π'], 0, 'π∫₀⁴ x dx = 8π.'],
      ],
    ),
    '5.18': C(
      [
        'A differential equation relates a function to its derivatives. First order equations involve only the first derivative.',
        'Separable equations: rearrange so y terms are with d y and x terms with d x, then integrate both sides.',
        'Homogeneous equations use the substitution y equals v x. Linear equations use an integrating factor, e to the integral of P of x.',
        'Euler’s method approximates solutions step by step: y n plus one equals y n plus h times f of x n, y n. Slope fields show the gradient at many points.',
      ],
      [
        ['Separable DE', 'dy/dx = f(x)g(y): separate and integrate.'],
        ['Integrating factor', 'e^(∫P(x) dx) for dy/dx + P(x)y = Q(x)'],
        ['Euler’s method', 'yₙ₊₁ = yₙ + h f(xₙ, yₙ)'],
        ['Homogeneous DE substitution', 'y = vx'],
      ],
      [
        ['The general solution of dy/dx = ky is', ['y = kx + C', 'y = Ae^(kx)', 'y = e^x', 'y = kx²'], 1, 'Separate: ln y = kx + c.'],
        ['Euler with h = 0.1, dy/dx = x + y, from (0, 1). y₁ =', ['1.1', '1.0', '1.2', '0.1'], 0, '1 + 0.1 × (0 + 1).'],
        ['For dy/dx + 2y = x, the integrating factor is', ['e^(2x)', 'e^(x²)', '2x', 'e^x'], 0, 'e^(∫2 dx).'],
      ],
    ),
    '5.19': C(
      [
        'A Maclaurin series writes a function as an infinite polynomial: f of zero plus f prime of zero times x plus f double prime of zero over 2 factorial times x squared, and so on.',
        'Standard series: e to the x is 1 plus x plus x squared over 2 factorial plus x cubed over 3 factorial and so on; sin x is x minus x cubed over 3 factorial plus x to the fifth over 5 factorial.',
        'New series can be built by substitution, multiplication, differentiation or integration of known ones.',
        'Maclaurin series are used for approximations near zero and to evaluate limits.',
      ],
      [
        ['Maclaurin series', 'f(0) + f′(0)x + f″(0)x²/2! + …'],
        ['eˣ series', '1 + x + x²/2! + x³/3! + …'],
        ['sin x series', 'x − x³/3! + x⁵/5! − …'],
        ['cos x series', '1 − x²/2! + x⁴/4! − …'],
      ],
      [
        ['The x² coefficient in the series for eˣ', ['1', '½', '2', '⅙'], 1, '1/2!.'],
        ['The series for e^(2x) starts', ['1 + 2x + 2x² + …', '1 + x + x²/2 + …', '2 + 2x + …', '1 + 2x + x² + …'], 0, 'Substitute 2x: (2x)²/2 = 2x².'],
        ['Near x = 0, sin x ≈', ['1', 'x', 'x²', '1 − x'], 1, 'The first term is x.'],
      ],
    ),
  },
};

export default content;
