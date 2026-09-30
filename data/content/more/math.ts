import type { MoreContent } from '../../types';
import { M } from '../helpers';

// Lesson 2 (worked examples, GDC tips, common mistakes, exam technique) plus extra flashcards
// and questions for every Maths: Analysis & Approaches chapter.
const more: Record<string, MoreContent> = {
  '1.1-1.3': M(
    [
      'Worked example: an arithmetic sequence has u₃ = 11 and u₇ = 27. Then 4d = 16, so d = 4 and u₁ = 3. The sum of the first 20 terms is 20 over 2 times (2 times 3 plus 19 times 4), which is 10 times 82, 820.',
      'Worked example: a geometric sequence has u₁ = 5 and r = 3. The 6th term is 5 times 3 to the 5, which is 1215. To find when terms exceed 10,000, solve 5 times 3 to the n minus 1 > 10,000 with logs or a GDC table.',
      'Real-world use: arithmetic sequences model steady changes, like saving the same extra amount each week; geometric sequences model percentage changes, like population growth.',
      'Common mistake: using n instead of n minus 1 in the nth-term formula. Check with u₁: substituting n = 1 should give the first term.',
    ],
    [
      ['Common difference from two terms', 'd = (uₘ − uₙ) ÷ (m − n).'],
      ['Sum formula using last term', 'Sₙ = n/2 (u₁ + uₙ).'],
      ['Common ratio', 'r = uₙ₊₁ ÷ uₙ.'],
      ['Scientific notation rule', 'a × 10ᵏ with 1 ≤ a < 10 and k an integer.'],
    ],
    [
      ['u₃ = 11 and u₇ = 27 in an arithmetic sequence. d =', '4', ['16', '3', '8'], '4d = 27 − 11 = 16.'],
      ['Sum of the first 10 terms of 4, 7, 10, …', '175', ['130', '31', '155'], 'S₁₀ = 5(8 + 27) = 175.'],
      ['u₁ = 5, r = 3. u₆ =', '1215', ['405', '3645', '90'], '5 × 3⁵ = 1215.'],
      ['(3 × 10⁴) × (5 × 10³) in scientific notation is', '1.5 × 10⁸', ['15 × 10⁷', '1.5 × 10⁷', '8 × 10⁷'], '15 × 10⁷ = 1.5 × 10⁸.'],
    ],
  ),
  '1.4': M(
    [
      'Worked example: $5,000 is invested at 4% per year compounded quarterly for 3 years. FV = 5000 times (1 + 4 over 400) to the 12, which is about $5,634.13.',
      'Worked example: a laptop bought for $1,200 depreciates 15% a year. After 4 years it is worth 1200 times 0.85 to the 4, about $626.41.',
      'With the TVM solver: N is the number of periods, I% the annual rate, PV the present value entered as negative for money paid out, and P/Y and C/Y the payments and compounding periods per year.',
      'Common mistake: forgetting to multiply the number of years by k, or dividing the rate by 100 twice. Check if your answer is reasonable.',
    ],
    [
      ['FV with compounding', 'FV = PV × (1 + r/(100k))^(kn).'],
      ['Value after depreciation', 'V = V₀ × (1 − r/100)ⁿ.'],
      ['Quarterly compounding', 'k = 4.'],
      ['PV sign on the TVM solver', 'Money you pay out is entered as negative.'],
    ],
    [
      ['$5000 at 4% compounded quarterly for 3 years. Value ≈', '$5634.13', ['$5624.32', '$5600.00', '$6000.00'], '5000 × 1.01¹² ≈ 5634.13.'],
      ['$1200 depreciating 15% a year for 4 years ≈', '$626.41', ['$480.00', '$720.00', '$1020.00'], '1200 × 0.85⁴.'],
      ['For monthly compounding over 5 years, the exponent is', '60', ['5', '12', '17'], 'kn = 12 × 5.'],
      ['How many years for $1000 at 6% annual interest to double (nearest year)?', '12', ['6', '10', '17'], '1.06ⁿ = 2 gives n ≈ 11.9.'],
    ],
  ),
  '1.5-1.7': M(
    [
      'Worked example: solve 2 to the x + 1 = 32. Since 32 = 2 to the 5, x + 1 = 5, so x = 4.',
      'Worked example: solve 5 times e to the 2x = 40. Divide: e to the 2x = 8. Take ln: 2x = ln 8, so x = ln 8 over 2, about 1.04.',
      'Worked example: simplify log₃ 18 minus log₃ 2. This is log₃ 9, which equals 2.',
      'A simple deductive proof uses LHS to RHS: start from one side and use algebra to reach the other, for example proving that the sum of two consecutive integers is odd: n plus n + 1 = 2n + 1.',
    ],
    [
      ['log of a quotient', 'log(x/y) = log x − log y.'],
      ['ln x', 'Natural logarithm, log base e.'],
      ['Negative exponent', 'a⁻ⁿ = 1/aⁿ.'],
      ['Fractional exponent', 'a^(m/n) = (ⁿ√a)ᵐ.'],
    ],
    [
      ['Solve 2^(x + 1) = 32', 'x = 4', ['x = 5', 'x = 16', 'x = 3'], '32 = 2⁵.'],
      ['log₃ 18 − log₃ 2 =', '2', ['9', '16', '3'], 'log₃ 9 = 2.'],
      ['Solve 5e^(2x) = 40 (3 s.f.)', '1.04', ['2.08', '0.693', '4.00'], 'x = ln 8 ÷ 2.'],
      ['Simplify (x³)² × x⁻⁴', 'x²', ['x⁵', 'x¹⁰', 'x⁻²'], 'x⁶ × x⁻⁴ = x².'],
    ],
  ),
  '1.8': M(
    [
      'Worked example: find the sum to infinity of 12 − 6 + 3 − 1.5 + …. Here r = minus a half, so S∞ = 12 over 1 plus a half, which is 8.',
      'Worked example: write 0.454545… as a fraction. It is 0.45 + 0.0045 + …, with first term 0.45 and r = 0.01. S∞ = 0.45 over 0.99, which is 5 over 11.',
      'When r contains x, like the series 1 + 2x + 4x squared + …, it converges only when the absolute value of 2x is less than 1, so minus a half < x < a half.',
      'Exam tip: always state the convergence condition before using the sum to infinity formula.',
    ],
    [
      ['Convergence condition', '|r| < 1.'],
      ['0.4545… as a fraction', '5/11.'],
      ['Series in x converges when', '|common ratio in terms of x| < 1.'],
      ['Sum to infinity with negative r', 'Still u₁ ÷ (1 − r); alternating terms.'],
    ],
    [
      ['Sum to infinity of 12 − 6 + 3 − …', '8', ['24', '6', '4'], 'r = −½, so 12 ÷ 1.5.'],
      ['0.4545… as a fraction is', '5/11', ['45/99', '9/20', '4/9'], '0.45 ÷ 0.99 = 45/99 = 5/11.'],
      ['1 + 2x + 4x² + … converges when', '−½ < x < ½', ['−2 < x < 2', 'x < 1', 'All x'], 'Need |2x| < 1.'],
      ['S∞ = 20 and u₁ = 5. r =', '0.75', ['0.25', '4', '−0.75'], '5 ÷ (1 − r) = 20 gives r = 0.75.'],
    ],
  ),
  '1.9': M(
    [
      'Worked example: find the coefficient of x cubed in (2 + x) to the 5. The term is 5C3 times 2 squared times x cubed, which is 10 times 4, 40.',
      'Worked example: find the term independent of x in (x + 2 over x) to the 4. The general term is 4Cr times x to the 4 − r times 2 to the r times x to the minus r, so 4 − 2r = 0, r = 2: 6 times 4 = 24.',
      'Watch negative signs: in (1 − 2x) to the 4, the x squared term is 4C2 times (minus 2x) squared, which is 6 times 4 x squared, 24 x squared.',
      'On a GDC, use nCr to find binomial coefficients quickly.',
    ],
    [
      ['Term independent of x', 'The term where the power of x is zero.'],
      ['ⁿCᵣ formula', 'n! ÷ (r!(n − r)!).'],
      ['Pascal’s triangle row 5', '1, 5, 10, 10, 5, 1.'],
      ['Symmetry of binomial coefficients', 'ⁿCᵣ = ⁿCₙ₋ᵣ.'],
    ],
    [
      ['Coefficient of x³ in (2 + x)⁵', '40', ['10', '80', '20'], '⁵C₃ × 2² = 40.'],
      ['Term independent of x in (x + 2/x)⁴', '24', ['6', '16', '8'], 'r = 2: ⁴C₂ × 2² = 24.'],
      ['Coefficient of x² in (1 − 2x)⁴', '24', ['−24', '6', '−8'], '⁴C₂ × (−2)² = 24.'],
      ['⁷C₃ =', '35', ['21', '210', '7'], '7! ÷ (3! × 4!) = 35.'],
    ],
  ),
  '1.10': M(
    [
      'Worked example: how many 4-digit codes can be made from the digits 1 to 9 without repetition? Permutations: 9 times 8 times 7 times 6, which is 3,024.',
      'Worked example: a committee of 5 is chosen from 6 boys and 4 girls, with exactly 2 girls. Choose 4C2 girls times 6C3 boys: 6 times 20 = 120 ways.',
      'Arrangements with repeated letters: the word LEVEL has 5 letters with two L’s and two E’s, giving 5 factorial over 2 factorial times 2 factorial, which is 30.',
      'Extended binomial: (1 + x) to the n for negative or fractional n gives 1 + nx + n(n − 1) over 2 factorial times x squared + …, valid for |x| < 1.',
    ],
    [
      ['ⁿPᵣ', 'n! ÷ (n − r)! — arrangements of r from n.'],
      ['Arrangements with repeats', 'n! divided by the factorials of each repeat count.'],
      ['Items that must stay together', 'Treat them as one block, then arrange within the block.'],
      ['(1 + x)^½ first terms', '1 + ½x − ⅛x² + …'],
    ],
    [
      ['4-digit codes from 1–9 without repetition', '3024', ['6561', '126', '24'], '9 × 8 × 7 × 6.'],
      ['Committees of 5 from 6 boys and 4 girls with exactly 2 girls', '120', ['252', '60', '210'], '⁴C₂ × ⁶C₃ = 6 × 20.'],
      ['Arrangements of LEVEL', '30', ['120', '60', '20'], '5! ÷ (2! 2!).'],
      ['The x² coefficient in (1 + x)^(−2)', '3', ['−3', '1', '−2'], '(−2)(−3) ÷ 2 = 3.'],
    ],
  ),
  '1.11': M(
    [
      'Worked example: express (5x + 1) over (x + 1)(x − 1) as partial fractions. 5x + 1 = A(x − 1) + B(x + 1). With x = 1: 6 = 2B, B = 3. With x = −1: −4 = −2A, A = 2.',
      'So the answer is 2 over (x + 1) plus 3 over (x − 1). Check by recombining.',
      'If the numerator’s degree is equal to or higher than the denominator’s, divide first to get a polynomial plus a proper fraction.',
      'At HL, partial fractions let you integrate: the integral of 2 over (x + 1) + 3 over (x − 1) is 2 ln|x + 1| + 3 ln|x − 1| + c.',
    ],
    [
      ['Substitution method', 'Choose x values that make one bracket zero.'],
      ['Proper fraction', 'Numerator degree less than denominator degree.'],
      ['Checking partial fractions', 'Recombine over a common denominator.'],
      ['∫ A/(x − a) dx', 'A ln|x − a| + c.'],
    ],
    [
      ['(5x + 1)/((x + 1)(x − 1)) = A/(x + 1) + B/(x − 1). B =', '3', ['2', '5', '1'], 'x = 1 gives 6 = 2B.'],
      ['In the same problem, A =', '2', ['3', '−2', '4'], 'x = −1 gives −4 = −2A.'],
      ['Before splitting (x² + 1)/(x² − 1) you must', 'Divide first', ['Differentiate', 'Integrate', 'Factorise the numerator'], 'Degrees are equal.'],
      ['∫ 3/(x − 2) dx =', '3 ln|x − 2| + c', ['3/(x − 2)² + c', 'ln|3x − 6| + c only', '3(x − 2) + c'], 'Standard log integral.'],
    ],
  ),
  '1.12-1.14': M(
    [
      'Worked example: divide (3 + 4i) by (1 − 2i). Multiply by the conjugate: (3 + 4i)(1 + 2i) over 5, which is (3 + 6i + 4i − 8) over 5, so minus 1 + 2i.',
      'Polar form: z = r cis θ = r e to the iθ. For 1 + i, r = root 2 and θ = π over 4, so z = root 2 e to the iπ/4.',
      'Worked example of roots: solve z cubed = 8. One root is 2; the others are 2 cis 2π over 3 and 2 cis 4π over 3, equally spaced around a circle of radius 2.',
      'Euler’s identity, e to the iπ + 1 = 0, links five key constants. Use exponential form for quick multiplication and powers.',
    ],
    [
      ['Dividing complex numbers', 'Multiply top and bottom by the conjugate of the denominator.'],
      ['Euler’s form', 'z = re^(iθ).'],
      ['nth roots of a complex number', 'n roots equally spaced at angles 2π/n.'],
      ['Euler’s identity', 'e^(iπ) + 1 = 0.'],
    ],
    [
      ['(3 + 4i)/(1 − 2i) =', '−1 + 2i', ['3 − 2i', '1 + 2i', '−1 − 2i'], 'Multiply by the conjugate 1 + 2i.'],
      ['The argument of 1 + i is', 'π/4', ['π/2', 'π/3', '1'], 'tan θ = 1.'],
      ['How many roots does z⁵ = 1 have?', '5', ['1', '2', '10'], 'n roots for zⁿ.'],
      ['e^(iπ) =', '−1', ['1', 'i', '0'], 'Euler’s identity.'],
    ],
  ),
  '1.15': M(
    [
      'Worked induction: prove 1 + 3 + 5 + … + (2n − 1) = n squared. Base case n = 1: 1 = 1 squared. Assume true for n = k. Then adding 2k + 1 gives k squared + 2k + 1 = (k + 1) squared, true for n = k + 1.',
      'Conclusion: since it is true for n = 1, and true for n = k implies true for n = k + 1, it is true for all positive integers n by induction.',
      'Divisibility example: prove 6 to the n − 1 is divisible by 5. For n = k + 1: 6 to the k + 1 − 1 = 6(6 to the k − 1) + 5, which is divisible by 5.',
      'Proof by contradiction: to show there are infinitely many primes, assume there is a largest prime and multiply all primes together and add one. This new number has no prime factor on the list, a contradiction.',
    ],
    [
      ['Induction conclusion sentence', 'True for n = 1 and P(k) ⇒ P(k + 1), so true for all n ∈ ℤ⁺.'],
      ['Inductive hypothesis', 'Assuming the statement is true for n = k.'],
      ['Infinitely many primes proof', 'Classic proof by contradiction (Euclid).'],
      ['Proof by contradiction first step', 'Assume the opposite of what you want to prove.'],
    ],
    [
      ['In induction, assuming the statement is true for n = k is the…', 'Inductive hypothesis', ['Base case', 'Conclusion', 'Counterexample'], 'It is used to prove n = k + 1.'],
      ['“n² + n + 41 is always prime” is disproved by n =', '40', ['1', '2', '10'], '40² + 40 + 41 = 41².'],
      ['Euclid’s proof of infinitely many primes uses', 'Contradiction', ['Induction', 'Counterexample', 'Calculus'], 'Assume a largest prime exists.'],
      ['The base case for sums starting at n = 1 checks', 'n = 1', ['n = 0 always', 'n = k', 'n = k + 1'], 'Start where the statement begins.'],
    ],
  ),
  '1.16': M(
    [
      'Worked example: solve x + y + z = 6, 2x − y + z = 3, x + 2y − z = 2. A GDC gives x = 1, y = 2, z = 3. Check by substituting into all three equations.',
      'Row reduction: subtract multiples of equations to eliminate variables, aiming for a triangular form, then back-substitute.',
      'If elimination gives 0 = 0, there are infinitely many solutions; if it gives 0 = a non-zero number, there is no solution.',
      'Worked example of infinitely many solutions: with z = λ as a parameter, write x and y in terms of λ. This represents a line of intersection of planes.',
    ],
    [
      ['0 = 0 after elimination', 'Infinitely many solutions.'],
      ['0 = 5 after elimination', 'No solution (inconsistent).'],
      ['Back-substitution', 'Solve the last equation, then work upwards.'],
      ['Parameter', 'A variable like λ used to describe infinitely many solutions.'],
    ],
    [
      ['Solve x + y + z = 6, 2x − y + z = 3, x + 2y − z = 2', 'x = 1, y = 2, z = 3', ['x = 2, y = 1, z = 3', 'x = 3, y = 2, z = 1', 'No solution'], 'Check: 1 + 2 + 3 = 6 ✓.'],
      ['Elimination gives 0 = 4. The system has', 'No solution', ['One solution', 'Infinitely many', 'Two solutions'], 'The equations are inconsistent.'],
      ['Three planes meeting in a line means the system has', 'Infinitely many solutions', ['No solution', 'A unique solution', 'Three solutions'], 'Every point on the line works.'],
      ['2x + y = 7 and x − y = 2. x =', '3', ['1', '2', '5'], 'Adding gives 3x = 9.'],
    ],
  ),
  '2.1': M(
    [
      'Worked example: find the line through (2, 5) perpendicular to y = 2x − 3. The gradient is minus a half: y − 5 = minus a half (x − 2), so y = minus a half x + 6.',
      'Worked example: find where y = 3x − 1 and 2x + y = 9 intersect. Substitute: 2x + 3x − 1 = 9, so x = 2 and y = 5.',
      'General form ax + by + d = 0 must have integer coefficients. Convert y = minus a half x + 6 to x + 2y − 12 = 0.',
      'Common mistake: using the negative gradient instead of the negative reciprocal for perpendicular lines.',
    ],
    [
      ['Perpendicular gradient rule', 'm₁ × m₂ = −1.'],
      ['General form of a line', 'ax + by + d = 0.'],
      ['Midpoint formula', '((x₁ + x₂)/2, (y₁ + y₂)/2).'],
      ['Intersection of two lines', 'Solve their equations simultaneously.'],
    ],
    [
      ['A line through (2, 5) perpendicular to y = 2x − 3 is', 'y = −½x + 6', ['y = 2x + 1', 'y = −2x + 9', 'y = ½x + 4'], 'Gradient −½ through (2, 5).'],
      ['y = 3x − 1 and 2x + y = 9 meet at', '(2, 5)', ['(1, 2)', '(3, 3)', '(5, 2)'], 'Substitute and solve.'],
      ['Midpoint of (−2, 4) and (6, 8)', '(2, 6)', ['(4, 12)', '(8, 4)', '(2, 2)'], 'Average the coordinates.'],
      ['The x-intercept of 3x + 4y − 12 = 0 is', '(4, 0)', ['(0, 3)', '(3, 0)', '(−4, 0)'], 'Set y = 0.'],
    ],
  ),
  '2.2-2.4': M(
    [
      'Worked example: for f(x) = 2 over (x − 1) + 3, the vertical asymptote is x = 1 and the horizontal asymptote is y = 3. The domain is x ≠ 1 and the range is y ≠ 3.',
      'Use a GDC to find zeros, maximum and minimum points and intersections. Give coordinates to 3 significant figures unless told otherwise.',
      'A function’s range depends on its domain. For f(x) = x squared with domain −1 ≤ x ≤ 3, the range is 0 ≤ y ≤ 9, not 1 ≤ y ≤ 9.',
      'Exam tip: when sketching, label intercepts, turning points and asymptotes with equations, and show the correct behaviour near asymptotes.',
    ],
    [
      ['Vertical line test', 'A graph is a function if no vertical line crosses it more than once.'],
      ['Zeros of a function', 'x-values where f(x) = 0 (x-intercepts).'],
      ['Horizontal asymptote', 'A line y = c that the graph approaches as x → ±∞.'],
      ['Range on a restricted domain', 'Check endpoints and turning points.'],
    ],
    [
      ['f(x) = 2/(x − 1) + 3 has range', 'y ≠ 3', ['y ≠ 1', 'y > 3', 'All real numbers'], 'The horizontal asymptote is y = 3.'],
      ['Range of x² for −1 ≤ x ≤ 3', '0 ≤ y ≤ 9', ['1 ≤ y ≤ 9', '−1 ≤ y ≤ 9', '0 ≤ y ≤ 3'], 'The minimum is at x = 0.'],
      ['Which is NOT a function?', 'x² + y² = 4', ['y = x²', 'y = 3x + 1', 'y = eˣ'], 'A circle fails the vertical line test.'],
      ['The domain of f(x) = ln(x + 3) is', 'x > −3', ['x ≥ −3', 'x > 3', 'x > 0'], 'The argument of ln must be positive.'],
    ],
  ),
  '2.5': M(
    [
      'Worked example: f(x) = 3x − 2 and g(x) = x squared. Then f of g of x = 3x squared − 2, while g of f of x = (3x − 2) squared. They differ.',
      'Worked example: find the inverse of f(x) = (2x + 1) over (x − 3). Swap: x = (2y + 1) over (y − 3). Rearrange: xy − 3x = 2y + 1, so y = (3x + 1) over (x − 2).',
      'Restricting the domain can create an inverse: f(x) = x squared has an inverse root x only if the domain is x ≥ 0.',
      'Check: f of f inverse of x should equal x. The graphs of f and its inverse are reflections in y = x. For an increasing function, they can only meet on that line.',
    ],
    [
      ['Inverse of (2x + 1)/(x − 3)', '(3x + 1)/(x − 2).'],
      ['Restricting a domain for an inverse', 'Make the function one-to-one, e.g. x ≥ 0 for x².'],
      ['Range of f⁻¹', 'Equals the domain of f.'],
      ['f ∘ f⁻¹', 'Equals x.'],
    ],
    [
      ['f(x) = 3x − 2, g(x) = x². (g ∘ f)(2) =', '16', ['10', '4', '14'], 'f(2) = 4, g(4) = 16.'],
      ['The inverse of f(x) = (2x + 1)/(x − 3) is', '(3x + 1)/(x − 2)', ['(x − 3)/(2x + 1)', '(2x − 1)/(x + 3)', '(3x − 1)/(x + 2)'], 'Swap x and y and rearrange.'],
      ['f(x) = x² has an inverse if the domain is restricted to', 'x ≥ 0', ['All real x', 'x ≠ 0', '−1 ≤ x ≤ 1'], 'The function must be one-to-one.'],
      ['If f(3) = 7, then f⁻¹(7) =', '3', ['7', '1/7', '−3'], 'The inverse reverses the mapping.'],
    ],
  ),
  '2.6-2.7': M(
    [
      'Worked example: complete the square for y = x squared − 6x + 5. This is (x − 3) squared − 4, so the vertex is (3, −4).',
      'Worked example: find k if x squared + kx + 9 = 0 has equal roots. Discriminant = k squared − 36 = 0, so k = ±6.',
      'Worked example: solve x squared − x − 6 > 0. The roots are −2 and 3, and the parabola opens upwards, so x < −2 or x > 3.',
      'Intercept form y = a(x − p)(x − q) shows the x-intercepts p and q directly; the axis of symmetry is halfway between them.',
    ],
    [
      ['Equal (repeated) roots', 'Discriminant = 0.'],
      ['No real roots', 'Discriminant < 0.'],
      ['Intercept form', 'y = a(x − p)(x − q).'],
      ['Solving a quadratic inequality', 'Find roots, sketch, choose the correct region.'],
    ],
    [
      ['x² + kx + 9 = 0 has equal roots. k =', '±6', ['±3', '9', '±9'], 'k² − 36 = 0.'],
      ['Vertex of y = x² − 6x + 5', '(3, −4)', ['(−3, 4)', '(6, 5)', '(3, 5)'], '(x − 3)² − 4.'],
      ['Solve x² − x − 6 > 0', 'x < −2 or x > 3', ['−2 < x < 3', 'x > 3 only', 'x < 3'], 'Upward parabola is positive outside its roots.'],
      ['Axis of symmetry of y = 2(x − 1)(x − 5)', 'x = 3', ['x = 1', 'x = 5', 'x = 6'], 'Midway between the roots.'],
    ],
  ),
  '2.8-2.9': M(
    [
      'Worked example: a bacteria colony grows by P = 200 e to the 0.3t. After 5 hours, P = 200 e to the 1.5, about 896. To find when P = 1000, solve e to the 0.3t = 5: t = ln 5 over 0.3, about 5.36 hours.',
      'Exponential decay: a drug in the blood follows C = 50 e to the minus 0.2t. The horizontal asymptote C = 0 shows it never fully disappears in the model.',
      'For y = (ax + b) over (cx + d), the vertical asymptote is x = minus d over c and the horizontal asymptote is y = a over c.',
      'Logarithmic functions are the inverses of exponentials: y = ln x reflects y = e to the x in y = x, so its vertical asymptote is x = 0.',
    ],
    [
      ['Exponential growth model', 'P = P₀e^(kt), k > 0.'],
      ['Exponential decay model', 'P = P₀e^(−kt), k > 0.'],
      ['Asymptote of y = ln x', 'x = 0 (vertical).'],
      ['Solving e^(kt) = c', 't = ln c ÷ k.'],
    ],
    [
      ['P = 200e^(0.3t). When does P reach 1000 (3 s.f.)?', '5.36', ['3.33', '16.7', '1.61'], 't = ln 5 ÷ 0.3.'],
      ['Vertical asymptote of y = (3x + 1)/(2x − 4)', 'x = 2', ['x = −2', 'x = 1.5', 'x = 4'], '2x − 4 = 0.'],
      ['y = 50e^(−0.2t) has a horizontal asymptote at', 'y = 0', ['y = 50', 'y = −0.2', 'y = 1'], 'e^(−0.2t) → 0.'],
      ['The inverse of y = eˣ is', 'y = ln x', ['y = 1/eˣ', 'y = −eˣ', 'y = log₁₀ x'], 'They reflect in y = x.'],
    ],
  ),
  '2.10-2.11': M(
    [
      'Worked example: y = 2 f(x − 1) + 3 means: translate right by 1, stretch vertically by factor 2, then translate up by 3. The point (4, 5) on f moves to (5, 13).',
      'Order matters for combined transformations: vertical changes follow the order of operations on f, stretch before translation when the translation is outside.',
      'Solving equations graphically: to solve e to the x = 3 − x, find where y = e to the x and y = 3 − x intersect on a GDC: x is about 0.792.',
      'Exam tip: describe transformations precisely: “a horizontal stretch with scale factor one half, parallel to the x-axis” or “a translation by the vector (2, 0)”.',
    ],
    [
      ['Translation by vector (h, k)', 'y = f(x − h) + k.'],
      ['Horizontal stretch factor for f(qx)', '1/q.'],
      ['Solving f(x) = g(x) graphically', 'Find x-coordinates of intersection points.'],
      ['Order of transformations', 'Inside changes (x) and outside changes (y) are applied in the correct sequence.'],
    ],
    [
      ['Under y = 2f(x − 1) + 3, the point (4, 5) maps to', '(5, 13)', ['(3, 13)', '(5, 8)', '(4, 10)'], 'x + 1, then 2y + 3.'],
      ['y = f(2x) is a horizontal stretch with scale factor', '½', ['2', '−2', '−½'], 'x-values are halved.'],
      ['Solve eˣ = 3 − x (3 s.f.)', '0.792', ['1.10', '0.500', '1.00'], 'Use the GDC intersection.'],
      ['y = f(x) − 4 is a translation', '4 units down', ['4 units up', '4 units right', '4 units left'], 'Subtract 4 from every y-value.'],
    ],
  ),
  '2.12': M(
    [
      'Worked example: p(x) = x cubed + 2x squared − 5x − 6. p(2) = 8 + 8 − 10 − 6 = 0, so x − 2 is a factor. Dividing gives x squared + 4x + 3 = (x + 1)(x + 3). Roots: 2, −1, −3.',
      'Worked example: when p(x) = 2x cubed + ax + 5 is divided by x − 1, the remainder is 4. So p(1) = 2 + a + 5 = 4, and a = minus 3.',
      'Sum and product of roots: for a cubic ax cubed + bx squared + cx + d, the sum is minus b over a and the product is minus d over a.',
      'Sketching polynomials: a positive leading coefficient with odd degree goes from bottom left to top right. Single roots cross the axis; double roots touch.',
    ],
    [
      ['Product of roots of a cubic', '−d/a.'],
      ['Degree n polynomial', 'Has at most n real roots.'],
      ['End behaviour, positive cubic', 'From bottom left to top right.'],
      ['Polynomial division', 'Divide to find the remaining quadratic factor.'],
    ],
    [
      ['p(x) = x³ + 2x² − 5x − 6. Which is a factor?', 'x − 2', ['x + 2', 'x − 1', 'x − 3'], 'p(2) = 0.'],
      ['p(x) = 2x³ + ax + 5 leaves remainder 4 when divided by (x − 1). a =', '−3', ['3', '−1', '1'], 'p(1) = 7 + a = 4.'],
      ['Product of roots of x³ − 4x² + x + 6 = 0', '−6', ['6', '4', '1'], '−d/a = −6.'],
      ['At a double root, the graph', 'Touches the x-axis', ['Crosses the x-axis', 'Has an asymptote', 'Is undefined'], 'It turns back without crossing.'],
    ],
  ),
  '2.13-2.14': M(
    [
      'Worked example: y = (x squared + 1) over (x − 1). Dividing gives x + 1 + 2 over (x − 1), so there is a vertical asymptote at x = 1 and an oblique asymptote y = x + 1.',
      'Worked example: f(x) = x cubed − x. f(minus x) = minus x cubed + x = minus f(x), so f is odd, with rotational symmetry of order 2 about the origin.',
      'Worked example: f(x) = (x + 3) over (x − 1). Show it is self-inverse by finding the inverse: swapping and solving gives (x + 3) over (x − 1) again.',
      'Graphs of self-inverse functions are symmetric about y = x.',
    ],
    [
      ['Finding an oblique asymptote', 'Divide the polynomial; the quotient (without remainder) gives the asymptote.'],
      ['Test for even', 'f(−x) = f(x).'],
      ['Test for odd', 'f(−x) = −f(x).'],
      ['Self-inverse graph', 'Symmetric about y = x.'],
    ],
    [
      ['The oblique asymptote of (x² + 1)/(x − 1) is', 'y = x + 1', ['y = x', 'y = x − 1', 'x = 1'], 'Division gives x + 1 + 2/(x − 1).'],
      ['f(x) = x³ − x is', 'Odd', ['Even', 'Neither', 'Both'], 'f(−x) = −f(x).'],
      ['f(x) = cos x is', 'Even', ['Odd', 'Neither', 'Self-inverse'], 'cos(−x) = cos x.'],
      ['Which of these functions is self-inverse?', '(x + 3)/(x − 1)', ['x + 3', '2x', 'x²'], 'Its inverse is the same function.'],
    ],
  ),
  '2.15-2.16': M(
    [
      'Worked example: solve |2x − 1| ≥ 5. Either 2x − 1 ≥ 5, so x ≥ 3, or 2x − 1 ≤ minus 5, so x ≤ minus 2.',
      'Worked example: solve (x − 1)(x + 2) over (x − 3) < 0 with a sign chart: critical values −2, 1 and 3 give solutions x < −2 or 1 < x < 3.',
      'Sketching 1 over f(x): where f has a root, 1 over f has a vertical asymptote; where f has a maximum, 1 over f has a minimum; where f is large, 1 over f approaches zero.',
      'Squared graphs: y = [f(x)] squared is never negative, and roots of f become points where the graph touches the x-axis.',
    ],
    [
      ['|x − a| < b', 'a − b < x < a + b.'],
      ['Sign chart', 'Tracks positive/negative between critical values.'],
      ['Maximum of f and 1/f', 'A maximum of f becomes a minimum of 1/f (when f > 0).'],
      ['y = [f(x)]²', 'Never negative; roots of f become touching points.'],
    ],
    [
      ['Solve |2x − 1| ≥ 5', 'x ≤ −2 or x ≥ 3', ['−2 ≤ x ≤ 3', 'x ≥ 3 only', 'x ≤ 2'], 'Split into two cases.'],
      ['Solve |x − 4| ≤ 1', '3 ≤ x ≤ 5', ['x ≤ 3 or x ≥ 5', '−5 ≤ x ≤ −3', '4 ≤ x ≤ 5'], 'Within 1 of 4.'],
      ['If f has a root at x = 2, then 1/f has', 'A vertical asymptote at x = 2', ['A root at x = 2', 'A maximum at x = 2', 'Nothing special'], 'Division by zero.'],
      ['y = f(|x|) is always', 'Symmetric about the y-axis', ['Above the x-axis', 'Odd', 'Undefined for x < 0'], 'It depends only on |x|.'],
    ],
  ),
  '3.1': M(
    [
      'Worked example: a cone has radius 3 cm and slant height 5 cm. Its height is 4 cm by Pythagoras. Volume = one third π times 9 times 4 = 12π, about 37.7 cm cubed. Curved surface area = π times 3 times 5 = 15π.',
      'Worked example: a cuboid is 6 by 4 by 3. The space diagonal is root (36 + 16 + 9) = root 61, about 7.81.',
      'The angle between a space diagonal and the base: use the base diagonal root 52 and height 3, tan θ = 3 over root 52, so θ is about 22.6°.',
      'Common mistake: mixing up slant height and vertical height for cones and pyramids.',
    ],
    [
      ['Curved surface area of a cone', 'πrl (l = slant height).'],
      ['Space diagonal of a cuboid', '√(a² + b² + c²).'],
      ['Volume of a pyramid', '⅓ × base area × height.'],
      ['Volume of a cylinder', 'πr²h.'],
    ],
    [
      ['A cone has r = 3 and slant height 5. Its volume is', '12π', ['15π', '45π', '9π'], 'h = 4, V = ⅓π(9)(4).'],
      ['Space diagonal of a 6 × 4 × 3 cuboid (3 s.f.)', '7.81', ['13.0', '8.54', '6.71'], '√61.'],
      ['Volume of a square-based pyramid with base 6 and height 5', '60', ['180', '30', '90'], '⅓ × 36 × 5.'],
      ['Curved surface area of a cone with r = 4, l = 10', '40π', ['160π', '20π', '56π'], 'πrl.'],
    ],
  ),
  '3.2-3.3': M(
    [
      'Worked example: in triangle ABC, a = 7, b = 5 and angle A = 60°. Sin B = 5 sin 60° over 7, about 0.619, so B is about 38.2°.',
      'The ambiguous case: when you know two sides and a non-included angle, there may be two possible triangles, because sin B = sin (180° − B). Check if the obtuse angle also works.',
      'Worked example of a bearing: a ship sails 10 km on a bearing of 060°, then 8 km on 150°. The angle between the paths is 90°, so the distance from start is root 164, about 12.8 km.',
      'Exam tip: always draw and label a diagram, including north lines for bearings.',
    ],
    [
      ['Ambiguous case', 'Two possible triangles when using the sine rule for an angle.'],
      ['Angle of elevation', 'Measured upward from the horizontal.'],
      ['Angle of depression', 'Measured downward from the horizontal.'],
      ['Cosine rule for an angle', 'cos C = (a² + b² − c²) ÷ 2ab.'],
    ],
    [
      ['a = 7, b = 5, A = 60°. Angle B (3 s.f.)', '38.2°', ['45.0°', '60.0°', '81.8°'], 'sin B = 5 sin 60° ÷ 7.'],
      ['Sides 3, 5, 7. The largest angle is', '120°', ['90°', '100°', '135°'], 'cos C = (9 + 25 − 49) ÷ 30 = −½.'],
      ['From the top of a cliff, the angle down to a boat is the angle of', 'Depression', ['Elevation', 'Bearing', 'Reflex'], 'Measured below the horizontal.'],
      ['10 km on 060° then 8 km on 150°. Distance from start (3 s.f.)', '12.8 km', ['18.0 km', '2.00 km', '14.1 km'], 'The paths meet at 90°.'],
    ],
  ),
  '3.4-3.5': M(
    [
      'Worked example: a sector has radius 6 cm and angle 2π over 3. Arc length = 6 times 2π over 3 = 4π. Area = one half times 36 times 2π over 3 = 12π.',
      'The perimeter of a sector is the arc length plus two radii: 4π + 12, about 24.6 cm.',
      'Area of a segment: sector area minus triangle area, one half r squared (θ − sin θ).',
      'Using the unit circle: sin is positive in quadrants 1 and 2, cos in quadrants 1 and 4, tan in quadrants 1 and 3. For example, cos 2π over 3 = minus one half.',
    ],
    [
      ['Area of a segment', '½r²(θ − sin θ).'],
      ['Perimeter of a sector', 'rθ + 2r.'],
      ['cos(2π/3)', '−½.'],
      ['Degrees to radians', 'Multiply by π/180.'],
    ],
    [
      ['Area of a sector with r = 6, θ = 2π/3', '12π', ['4π', '24π', '6π'], '½ × 36 × 2π/3.'],
      ['Perimeter of the same sector (3 s.f.)', '24.6 cm', ['12.6 cm', '37.7 cm', '16.0 cm'], '4π + 12.'],
      ['sin(5π/6) =', '½', ['−½', '√3/2', '−√3/2'], 'Second quadrant: sin is positive.'],
      ['150° in radians is', '5π/6', ['2π/3', '3π/4', '5π/3'], '150 × π/180.'],
    ],
  ),
  '3.6': M(
    [
      'Worked example: if cos θ = minus 5 over 13 and θ is obtuse, then sin θ = 12 over 13, positive in the second quadrant.',
      'Then sin 2θ = 2 times 12 over 13 times minus 5 over 13 = minus 120 over 169.',
      'Solving with identities: solve 2 sin squared x = 1 − cos x. Replace sin squared x with 1 − cos squared x, then solve the quadratic in cos x.',
      'Proof example: show (sin x + cos x) squared = 1 + sin 2x. Expand: sin squared x + cos squared x + 2 sin x cos x = 1 + sin 2x.',
    ],
    [
      ['cos 2θ (three forms)', 'cos²θ − sin²θ = 2cos²θ − 1 = 1 − 2sin²θ.'],
      ['Finding sin from cos', 'Use sin²θ + cos²θ = 1 and the quadrant for the sign.'],
      ['(sin x + cos x)²', '1 + sin 2x.'],
      ['sin²θ in terms of cos 2θ', '(1 − cos 2θ) ÷ 2.'],
    ],
    [
      ['cos θ = −5/13, θ obtuse. sin θ =', '12/13', ['−12/13', '5/12', '13/12'], 'sin is positive in quadrant 2.'],
      ['With the same θ, sin 2θ =', '−120/169', ['120/169', '−60/169', '24/13'], '2 × 12/13 × −5/13.'],
      ['2cos²θ − 1 equals', 'cos 2θ', ['sin 2θ', '1', 'cos θ'], 'A form of the double angle identity.'],
      ['cos θ = 0.6, θ acute. cos 2θ =', '−0.28', ['0.28', '1.2', '0.36'], '2(0.36) − 1.'],
    ],
  ),
  '3.7-3.8': M(
    [
      'Worked example: y = 3 sin(2(x − π over 4)) + 1 has amplitude 3, period π, a horizontal shift of π over 4 to the right, and principal axis y = 1. Its maximum is 4 and minimum is −2.',
      'Modelling: the depth of water in a harbour is d = 5 + 2 cos(πt over 6), with t in hours. The depth ranges from 3 m to 7 m and the period is 12 hours.',
      'Worked example: solve 2 cos x = 1 for 0 ≤ x ≤ 2π. cos x = one half gives x = π over 3 or 5π over 3.',
      'For equations like sin 2x = one half with 0 ≤ x ≤ 2π, solve for 2x over 0 to 4π first, then divide by 2: four solutions.',
    ],
    [
      ['Principal axis of y = a sin(bx) + d', 'y = d.'],
      ['Maximum of y = a sin x + d', 'd + |a|.'],
      ['Period of a cos(bx)', '2π/b.'],
      ['Solving sin(2x) = k on [0, 2π]', 'Solve 2x on [0, 4π], then halve.'],
    ],
    [
      ['Max of y = 3sin(2x) + 1', '4', ['3', '1', '7'], '1 + 3.'],
      ['Period of d = 5 + 2cos(πt/6)', '12', ['6', 'π', '2'], '2π ÷ (π/6).'],
      ['Solve 2cos x = 1, 0 ≤ x ≤ 2π', 'π/3, 5π/3', ['π/6, 5π/6', 'π/3, 2π/3', 'π/6, 11π/6'], 'cos x = ½.'],
      ['How many solutions has sin 2x = ½ for 0 ≤ x ≤ 2π?', '4', ['2', '1', '8'], '2x has 4 solutions in [0, 4π].'],
    ],
  ),
  '3.9-3.11': M(
    [
      'Worked example: find the exact value of cos 15°. cos(45° − 30°) = cos 45 cos 30 + sin 45 sin 30 = (root 6 + root 2) over 4.',
      'Worked example: solve sec squared x = 2 tan x + 4. Replace sec squared x with 1 + tan squared x: tan squared x − 2 tan x − 3 = 0, so tan x = 3 or −1.',
      'Double angle for tan: tan 2θ = 2 tan θ over 1 − tan squared θ.',
      'Inverse trig graphs: arcsin has domain −1 to 1 and range −π over 2 to π over 2; arccos has range 0 to π; arctan has horizontal asymptotes y = ±π over 2.',
    ],
    [
      ['cos 15°', '(√6 + √2)/4.'],
      ['tan 2θ', '2tanθ ÷ (1 − tan²θ).'],
      ['1 + cot²θ', 'cosec²θ.'],
      ['Range of arccos x', '0 ≤ y ≤ π.'],
    ],
    [
      ['cos 15° =', '(√6 + √2)/4', ['(√6 − √2)/4', '√3/2', '½'], 'cos(45° − 30°).'],
      ['tan θ = ½. tan 2θ =', '4/3', ['1', '¾', '2'], '1 ÷ (1 − ¼).'],
      ['sec²x = 2tan x + 4 leads to tan x =', '3 or −1', ['1 or −3', '2 or 4', '0 or 2'], 'tan²x − 2tan x − 3 = 0.'],
      ['arccos(−1) =', 'π', ['0', '−π', 'π/2'], 'cos π = −1.'],
    ],
  ),
  '3.12-3.13': M(
    [
      'Worked example: find the angle between a = (1, 2, 2) and b = (2, −1, 2). a · b = 2 − 2 + 4 = 4. |a| = 3, |b| = 3. cos θ = 4 over 9, so θ is about 63.6°.',
      'Position vectors: the vector from A to B is b − a. For A(1, 2, 3) and B(4, 6, 3), AB = (3, 4, 0) and its length is 5.',
      'Find k so that (k, 2, 1) is perpendicular to (1, 3, −2): k + 6 − 2 = 0, so k = −4.',
      'Unit vectors divide a vector by its magnitude: (3, 4, 0) has unit vector (0.6, 0.8, 0).',
    ],
    [
      ['Angle between vectors', 'cos θ = (a · b) ÷ (|a||b|).'],
      ['Vector AB', 'b − a.'],
      ['Unit vector formula', 'v̂ = v ÷ |v|.'],
      ['Parallel vectors', 'One is a scalar multiple of the other.'],
    ],
    [
      ['Angle between (1, 2, 2) and (2, −1, 2) (3 s.f.)', '63.6°', ['90.0°', '26.4°', '45.0°'], 'cos θ = 4/9.'],
      ['A(1, 2, 3), B(4, 6, 3). |AB| =', '5', ['7', '25', '√13'], 'AB = (3, 4, 0).'],
      ['(k, 2, 1) ⟂ (1, 3, −2). k =', '−4', ['4', '−8', '2'], 'k + 6 − 2 = 0.'],
      ['The unit vector in the direction of (3, 4, 0) is', '(0.6, 0.8, 0)', ['(3, 4, 0)', '(0.3, 0.4, 0)', '(1, 1, 0)'], 'Divide by 5.'],
    ],
  ),
  '3.14-3.15': M(
    [
      'Worked example: find the line through A(1, 0, 2) and B(3, 4, 6). The direction is (2, 4, 4), or simplified (1, 2, 2). r = (1, 0, 2) + λ(1, 2, 2).',
      'Intersection of two lines: set the position vectors equal, solve two equations for λ and μ, and check the third. If it fails, the lines are skew or parallel.',
      'Kinematics: r = (2, 1) + t(3, −4) describes a boat starting at (2, 1) with velocity (3, −4), so its speed is 5 units per hour.',
      'Shortest distance from a point to a line: find the point on the line where the connecting vector is perpendicular to the direction vector.',
    ],
    [
      ['Direction vector from two points', 'AB = b − a.'],
      ['Checking intersection', 'Solve two components; verify the third.'],
      ['Speed from a velocity vector', 'Magnitude of the velocity vector.'],
      ['Parallel lines', 'Direction vectors are scalar multiples.'],
    ],
    [
      ['A line through (1, 0, 2) and (3, 4, 6) has direction', '(1, 2, 2)', ['(4, 4, 8)', '(2, 0, 4)', '(3, 4, 6)'], '(2, 4, 4) ÷ 2.'],
      ['r = (2, 1) + t(3, −4). The speed is', '5', ['7', '1', '25'], '√(9 + 16).'],
      ['Two lines give consistent λ and μ in all three equations. They', 'Intersect', ['Are skew', 'Are parallel', 'Are perpendicular'], 'They share a point.'],
      ['At t = 2, where is r = (2, 1) + t(3, −4)?', '(8, −7)', ['(5, −3)', '(6, −8)', '(2, 1)'], '(2 + 6, 1 − 8).'],
    ],
  ),
  '3.16-3.18': M(
    [
      'Worked example: find the plane through A(1, 0, 0), B(0, 2, 0) and C(0, 0, 3). AB = (−1, 2, 0), AC = (−1, 0, 3). AB × AC = (6, 3, 2), so the plane is 6x + 3y + 2z = 6.',
      'Line meets plane: substitute r = (1, 1, 1) + λ(1, 0, 1) into x + y + z = 7: 3 + 2λ = 7, so λ = 2, giving the point (3, 1, 3).',
      'Angle between a line and a plane: find the angle θ between the direction and the normal, then subtract from 90°.',
      'Area of triangle ABC is one half |AB × AC|; for the example above it is one half root 49, which is 3.5.',
    ],
    [
      ['Plane through three points', 'Normal = AB × AC; use a point to find d.'],
      ['Angle between line and plane', '90° minus the angle between the line and the normal.'],
      ['Area of a triangle with vectors', '½|AB × AC|.'],
      ['Line of intersection of two planes', 'Direction = n₁ × n₂.'],
    ],
    [
      ['A plane through (1, 0, 0), (0, 2, 0), (0, 0, 3) is', '6x + 3y + 2z = 6', ['x + y + z = 1', '2x + 3y + 6z = 6', '6x + 3y + 2z = 0'], 'Normal from the cross product.'],
      ['r = (1, 1, 1) + λ(1, 0, 1) meets x + y + z = 7 at', '(3, 1, 3)', ['(2, 1, 2)', '(1, 1, 1)', '(4, 1, 4)'], 'λ = 2.'],
      ['The direction of the line where two planes meet is', 'n₁ × n₂', ['n₁ + n₂', 'n₁ · n₂', 'n₁ − n₂'], 'It is perpendicular to both normals.'],
      ['Area of the triangle with AB × AC = (6, 3, 2)', '3.5', ['7', '11', '49'], '½ × √49.'],
    ],
  ),
  '4.1-4.3': M(
    [
      'Worked example: find the mean of grouped data using mid-interval values. Heights 150–160 (10 students) and 160–170 (15 students): mean = (155 times 10 + 165 times 15) over 25 = 161.',
      'Box-and-whisker plots show minimum, Q1, median, Q3 and maximum. Compare distributions using median for centre and IQR for spread.',
      'Cumulative frequency graphs estimate the median at half the total frequency and quartiles at one quarter and three quarters.',
      'Sampling bias: a convenience sample of students in the library may not represent all students. Random and stratified samples are more representative.',
    ],
    [
      ['Mid-interval value', 'Midpoint of a class, used for grouped mean estimates.'],
      ['Box plot five numbers', 'Minimum, Q1, median, Q3, maximum.'],
      ['Median from cumulative frequency', 'Read at n/2 on the vertical axis.'],
      ['Effect of multiplying data by k', 'Mean × k; SD × |k|.'],
    ],
    [
      ['10 values at 155 and 15 at 165. Mean =', '161', ['160', '162', '165'], '(1550 + 2475) ÷ 25.'],
      ['Adding 5 to every value changes the standard deviation by', 'Nothing', ['+5', '×5', '−5'], 'Spread is unchanged.'],
      ['With 80 values, the median on a cumulative frequency graph is read at', '40', ['20', '60', '80'], 'Half the total.'],
      ['Q1 = 12, Q3 = 20. The lower outlier boundary is', '0', ['8', '4', '12'], '12 − 1.5 × 8 = 0.'],
    ],
  ),
  '4.4/4.10': M(
    [
      'Worked example: a regression line y = 2.5x + 10 for study hours x and test score y. For 6 hours the prediction is 25. This is reliable only if 6 is within the data range and r is strong.',
      'Interpret the gradient in context: each extra hour of study is associated with 2.5 more marks. The intercept, 10, is the predicted score with no study.',
      'Correlation does not imply causation: ice cream sales and sunburn correlate because both depend on sunshine.',
      'At HL, the regression line of x on y is used to predict x from y. The two lines are different unless r = ±1.',
    ],
    [
      ['Interpreting the gradient', 'Change in y for each one-unit increase in x.'],
      ['Correlation ≠ causation', 'A third variable may explain the link.'],
      ['When regression lines coincide', 'Only when r = ±1.'],
      ['r² (coefficient of determination)', 'Proportion of variation in y explained by x.'],
    ],
    [
      ['y = 2.5x + 10. Prediction for x = 6', '25', ['16', '15', '35'], '2.5 × 6 + 10.'],
      ['In y = 2.5x + 10, the 2.5 means', 'Each extra unit of x adds 2.5 to y on average', ['y starts at 2.5', 'r = 2.5', 'x increases by 2.5'], 'It is the gradient.'],
      ['r = 0.9 gives r² =', '0.81', ['0.9', '0.18', '1.8'], '81% of the variation is explained.'],
      ['The two regression lines are the same when', 'r = ±1', ['r = 0', 'r = 0.5', 'Always'], 'Perfect correlation.'],
    ],
  ),
  '4.5-4.6/4.11': M(
    [
      'Worked example: in a class, P(plays football) = 0.6, P(plays tennis) = 0.3 and P(both) = 0.1. P(football or tennis) = 0.6 + 0.3 − 0.1 = 0.8.',
      'Worked example with a tree diagram: a bag has 3 red and 2 blue balls; two are taken without replacement. P(both red) = 3 over 5 times 2 over 4 = 3 over 10.',
      'Test for independence: check whether P(A ∩ B) = P(A) times P(B). In the football example, 0.6 times 0.3 = 0.18, not 0.1, so they are not independent.',
      'Conditional from a table: P(tennis given football) = 0.1 over 0.6 = one sixth.',
    ],
    [
      ['Without replacement', 'Probabilities change on the second pick.'],
      ['Independence test', 'P(A ∩ B) = P(A)P(B).'],
      ['Complement', 'P(A′) = 1 − P(A).'],
      ['Expected frequency', 'n × P(event).'],
    ],
    [
      ['P(F) = 0.6, P(T) = 0.3, P(F ∩ T) = 0.1. P(F ∪ T) =', '0.8', ['0.9', '0.7', '0.18'], '0.6 + 0.3 − 0.1.'],
      ['3 red, 2 blue, two drawn without replacement. P(both red) =', '3/10', ['9/25', '6/25', '1/2'], '3/5 × 2/4.'],
      ['P(T | F) with the values above', '1/6', ['1/3', '0.1', '0.3'], '0.1 ÷ 0.6.'],
      ['P(A) = 0.3. P(not A) =', '0.7', ['0.3', '1.3', '0'], 'Complement rule.'],
    ],
  ),
  '4.7-4.8': M(
    [
      'Worked example: a game costs $2. You win $10 with probability 0.1, $5 with probability 0.2, and nothing otherwise. E(winnings) = 1 + 1 = $2, so the expected profit is zero: a fair game.',
      'Worked example: X ~ B(10, 0.3). P(X = 2) = 10C2 times 0.3 squared times 0.7 to the 8, about 0.233. Use binompdf on a GDC.',
      'P(X ≤ 3) uses binomcdf. P(X ≥ 4) = 1 minus P(X ≤ 3). Be careful with “at least”, “more than” and “fewer than”.',
      'Check binomial conditions in context: fixed n, two outcomes, constant p and independent trials. Drawing without replacement from a small group breaks independence.',
    ],
    [
      ['binompdf vs binomcdf', 'pdf: P(X = k). cdf: P(X ≤ k).'],
      ['P(X ≥ k)', '1 − P(X ≤ k − 1).'],
      ['Fair game', 'Expected gain is zero.'],
      ['Sum of probabilities', 'Must equal 1.'],
    ],
    [
      ['X ~ B(10, 0.3). P(X = 2) (3 s.f.)', '0.233', ['0.0282', '0.300', '0.383'], '¹⁰C₂(0.3)²(0.7)⁸.'],
      ['For X ~ B(n, p), P(X > 3) equals', '1 − P(X ≤ 3)', ['1 − P(X ≤ 4)', 'P(X ≤ 3)', '1 − P(X = 3)'], '“More than 3” means 4 or more.'],
      ['Win $10 with p = 0.1 and $5 with p = 0.2. Expected winnings', '$2', ['$1', '$15', '$3'], '1 + 1.'],
      ['Which breaks a binomial condition?', 'Probability of success changes each trial', ['Fixed number of trials', 'Two outcomes', 'Independent trials'], 'p must be constant.'],
    ],
  ),
  '4.9/4.12': M(
    [
      'Worked example: heights are N(170, 8 squared). P(height > 180) is normalcdf(180, a very large number, 170, 8), about 0.106.',
      'Worked example of inverse normal: the tallest 5% are above invNorm(0.95, 170, 8), about 183 cm.',
      'At HL, find an unknown mean or SD using z-scores: if P(X < 60) = 0.9 and σ = 5, then (60 − μ) over 5 = 1.2816, so μ is about 53.6.',
      'Sketch the bell curve and shade the region before calculating; it helps avoid using the wrong tail.',
    ],
    [
      ['normalcdf', 'Finds P(a < X < b) for a normal distribution.'],
      ['invNorm', 'Finds x for a given cumulative probability.'],
      ['Within 3σ of the mean', 'About 99.7%.'],
      ['Finding an unknown μ or σ', 'Use z = (x − μ)/σ with invNorm.'],
    ],
    [
      ['X ~ N(170, 8²). P(X > 180) (3 s.f.)', '0.106', ['0.894', '0.211', '0.0500'], 'z = 1.25.'],
      ['Tallest 5% above (X ~ N(170, 8²)), nearest cm', '183 cm', ['178 cm', '186 cm', '175 cm'], 'invNorm(0.95, 170, 8).'],
      ['P(X < 60) = 0.9, σ = 5. μ ≈', '53.6', ['66.4', '58.8', '55.0'], '60 − 1.2816 × 5.'],
      ['About what percentage lies within 3σ?', '99.7%', ['95%', '68%', '100%'], 'The empirical rule.'],
    ],
  ),
  '4.13': M(
    [
      'Worked example: 1% of people have a disease. A test detects it 95% of the time and gives a false positive 5% of the time. P(positive) = 0.01 times 0.95 + 0.99 times 0.05 = 0.059.',
      'P(disease given positive) = 0.0095 over 0.059, about 0.161. Only 16% of positive results are true, because the disease is rare.',
      'With three or more categories, extend the law of total probability: add P(Bᵢ) times P(A given Bᵢ) over all categories.',
      'Exam tip: define events clearly with letters, draw the tree, and write the Bayes formula before substituting numbers.',
    ],
    [
      ['Base rate', 'The prior probability of the condition in the population.'],
      ['Prior vs posterior', 'Probability before vs after new evidence.'],
      ['Why rare diseases give many false positives', 'The small base rate means most positives come from healthy people.'],
      ['Total probability (3 categories)', 'P(A) = Σ P(Bᵢ)P(A | Bᵢ).'],
    ],
    [
      ['1% prevalence, 95% detection, 5% false positive. P(positive) =', '0.059', ['0.0095', '0.05', '0.95'], '0.0095 + 0.0495.'],
      ['Same example: P(disease | positive) ≈', '0.161', ['0.95', '0.01', '0.5'], '0.0095 ÷ 0.059.'],
      ['The probability before new evidence is the', 'Prior', ['Posterior', 'Likelihood', 'Complement'], 'Bayes updates the prior.'],
      ['Machines A, B make 60% and 40% of items; defect rates 2% and 5%. P(defective) =', '0.032', ['0.07', '0.035', '0.012'], '0.012 + 0.020.'],
    ],
  ),
  '4.14': M(
    [
      'Worked example: f(x) = 3x squared over 8 for 0 ≤ x ≤ 2. Check: the integral from 0 to 2 is x cubed over 8, which is 1. E(X) = integral of 3x cubed over 8 = 3 times 16 over 32 = 1.5.',
      'P(X < 1) is the integral from 0 to 1 of 3x squared over 8, which is one eighth.',
      'The median m solves the integral from the lower limit to m of f(x) = 0.5. Here m cubed over 8 = 0.5, so m = cube root 4, about 1.59.',
      'The mode is where f(x) is greatest. For a linear transformation: E(aX + b) = aE(X) + b and Var(aX + b) = a squared times Var(X).',
    ],
    [
      ['Median of a continuous RV', 'Solve ∫ f(x) dx from the lower limit to m = 0.5.'],
      ['Mode of a continuous RV', 'x-value where f(x) is maximum.'],
      ['Var(X) shortcut', 'E(X²) − [E(X)]².'],
      ['Var(aX + b)', 'a²Var(X).'],
    ],
    [
      ['f(x) = 3x²/8 on [0, 2]. E(X) =', '1.5', ['1', '2', '0.75'], '∫ 3x³/8 dx from 0 to 2.'],
      ['Same pdf: P(X < 1) =', '1/8', ['1/2', '3/8', '1/4'], '[x³/8] from 0 to 1.'],
      ['Same pdf: the median is', '∛4 ≈ 1.59', ['1', '1.5', '2'], 'm³/8 = 0.5.'],
      ['Var(X) = 4. Var(3X − 1) =', '36', ['11', '12', '35'], '3² × 4; subtracting 1 does not change the spread.'],
    ],
  ),
  '5.1-5.4': M(
    [
      'Worked example: find the tangent to y = x cubed − 2x at x = 1. y = −1 and dy/dx = 3x squared − 2 = 1. The tangent is y + 1 = 1(x − 1), so y = x − 2.',
      'The normal at the same point has gradient −1: y + 1 = −(x − 1), so y = −x.',
      'Limits and the derivative: the gradient of a chord between x and x + h approaches the gradient of the tangent as h approaches 0.',
      'Increasing and decreasing: f is increasing where f′(x) > 0. For y = x squared − 4x, dy/dx = 2x − 4 > 0 when x > 2.',
    ],
    [
      ['Decreasing function', 'f′(x) < 0.'],
      ['Tangent equation', 'y − y₁ = f′(a)(x − x₁).'],
      ['Derivative of a constant', '0.'],
      ['Gradient of a chord', '(f(x + h) − f(x)) ÷ h.'],
    ],
    [
      ['Tangent to y = x³ − 2x at x = 1', 'y = x − 2', ['y = x + 2', 'y = −x', 'y = 3x − 4'], 'Point (1, −1), gradient 1.'],
      ['Normal to the same curve at x = 1', 'y = −x', ['y = x − 2', 'y = −x − 2', 'y = x'], 'Gradient −1 through (1, −1).'],
      ['y = x² − 4x is increasing for', 'x > 2', ['x < 2', 'x > 4', 'x > 0'], '2x − 4 > 0.'],
      ['d/dx (5x⁴ − 3x + 7) =', '20x³ − 3', ['20x³ − 3x', '5x³ − 3', '20x⁴ − 3'], 'Power rule term by term.'],
    ],
  ),
  '5.6': M(
    [
      'Worked example of the chain rule: y = (3x squared + 1) to the 5. dy/dx = 5(3x squared + 1) to the 4 times 6x = 30x(3x squared + 1) to the 4.',
      'Worked example of the product rule: y = x squared e to the x. dy/dx = 2x e to the x + x squared e to the x = x e to the x (x + 2).',
      'Worked example of the quotient rule: y = sin x over x. dy/dx = (x cos x − sin x) over x squared.',
      'Tip: simplify before differentiating when you can. For example, ln(x squared) = 2 ln x, so its derivative is 2 over x.',
    ],
    [
      ['Quotient rule', '(vu′ − uv′) ÷ v².'],
      ['d/dx (cos x)', '−sin x.'],
      ['d/dx (e^(f(x)))', 'f′(x)e^(f(x)).'],
      ['d/dx (ln f(x))', 'f′(x) ÷ f(x).'],
    ],
    [
      ['d/dx (3x² + 1)⁵ =', '30x(3x² + 1)⁴', ['5(3x² + 1)⁴', '30x(3x² + 1)⁵', '6x(3x² + 1)⁴'], 'Chain rule.'],
      ['d/dx (x²eˣ) =', 'xeˣ(x + 2)', ['2xeˣ', 'x²eˣ', '2x + eˣ'], 'Product rule.'],
      ['d/dx (sin x / x) =', '(x cos x − sin x)/x²', ['cos x', '(sin x − x cos x)/x²', 'cos x / x'], 'Quotient rule.'],
      ['d/dx ln(x² + 1) =', '2x/(x² + 1)', ['1/(x² + 1)', '2x', 'ln 2x'], 'f′/f.'],
    ],
  ),
  '5.7-5.8': M(
    [
      'Worked example: y = x cubed − 3x squared − 9x + 5. dy/dx = 3x squared − 6x − 9 = 3(x − 3)(x + 1), so stationary points are at x = 3 and x = −1.',
      'Second derivative: 6x − 6. At x = 3 it is 12, positive, a minimum at (3, −22). At x = −1 it is −12, negative, a maximum at (−1, 10).',
      'Optimisation example: a rectangle has perimeter 40. Area A = x(20 − x). dA/dx = 20 − 2x = 0 gives x = 10, a 10 by 10 square with area 100.',
      'Inflection: 6x − 6 = 0 at x = 1, and concavity changes there, so (1, −6) is a point of inflection.',
    ],
    [
      ['Concave up', 'f″(x) > 0; the gradient is increasing.'],
      ['Concave down', 'f″(x) < 0; the gradient is decreasing.'],
      ['Checking an inflection point', 'f″ = 0 AND the sign of f″ changes.'],
      ['Optimisation conclusion', 'Justify max/min with f″ or a sign test.'],
    ],
    [
      ['Stationary points of y = x³ − 3x² − 9x + 5 are at x =', '3 and −1', ['−3 and 1', '0 and 3', '1 and 9'], '3(x − 3)(x + 1) = 0.'],
      ['The local minimum of that curve is at', '(3, −22)', ['(−1, 10)', '(3, 22)', '(1, −6)'], '27 − 27 − 27 + 5 = −22.'],
      ['A rectangle with perimeter 40 has maximum area', '100', ['400', '80', '40'], 'A 10 × 10 square.'],
      ['y = x⁴ at x = 0 has f″(0) = 0. It is', 'A minimum, not an inflection', ['An inflection point', 'A maximum', 'Undefined'], 'f″ doesn’t change sign.'],
    ],
  ),
  '5.9': M(
    [
      'Worked example: v = t squared − 4t + 3 for 0 ≤ t ≤ 4. The particle is at rest when v = 0: t = 1 and t = 3. It changes direction at those times.',
      'Distance travelled from t = 0 to t = 4 is the integral of |v|, which is four thirds + four thirds + four thirds = 4 m, while the displacement is only four thirds m.',
      'Acceleration a = 2t − 4. At t = 1, v = 0 and a = −2. Speeding up requires v and a to have the same sign.',
      'Use the GDC to integrate |v| directly: this avoids splitting the interval by hand.',
    ],
    [
      ['Changing direction', 'Velocity changes sign.'],
      ['Displacement vs distance', '∫v dt vs ∫|v| dt.'],
      ['Initial conditions', 'Use s(0) or v(0) to find the constant of integration.'],
      ['Slowing down', 'Velocity and acceleration have opposite signs.'],
    ],
    [
      ['v = t² − 4t + 3. The particle is at rest at t =', '1 and 3', ['0 and 4', '2', '−1 and −3'], '(t − 1)(t − 3) = 0.'],
      ['Distance travelled from t = 0 to 4 for that v', '4', ['4/3', '0', '8'], 'Integrate |v|.'],
      ['Displacement from t = 0 to 4 for that v', '4/3', ['4', '0', '16/3'], 'Integrate v.'],
      ['v = 2t and s(0) = 5. s(t) =', 't² + 5', ['t²', '2', 't² − 5'], 'Integrate and use s(0).'],
    ],
  ),
  '5.5/5.10-5.11': M(
    [
      'Worked example: find the area between y = x squared and y = x + 2. They meet at x = −1 and x = 2. Area = integral from −1 to 2 of (x + 2 − x squared) = 4.5.',
      'Worked example by reverse chain rule: the integral of (2x + 1) to the 4 is (2x + 1) to the 5 over 10 + c.',
      'Finding a curve from its gradient: dy/dx = 6x − 2 and the curve passes through (1, 4). y = 3x squared − 2x + c, and 4 = 1 + c, so c = 3.',
      'Remember + c for indefinite integrals, and treat areas below the x-axis as positive when finding total area.',
    ],
    [
      ['∫ (ax + b)ⁿ dx', '(ax + b)ⁿ⁺¹ ÷ (a(n + 1)) + c.'],
      ['∫ eᵃˣ dx', 'eᵃˣ/a + c.'],
      ['Limits for area between curves', 'The x-coordinates of the intersection points.'],
      ['Constant of integration', 'Found from a known point on the curve.'],
    ],
    [
      ['Area between y = x² and y = x + 2', '4.5', ['4', '9', '2.5'], '∫ from −1 to 2 of (x + 2 − x²).'],
      ['∫ (2x + 1)⁴ dx =', '(2x + 1)⁵/10 + c', ['(2x + 1)⁵/5 + c', '4(2x + 1)³ + c', '(2x + 1)⁵ + c'], 'Divide by 5 and by 2.'],
      ['dy/dx = 6x − 2, through (1, 4). y =', '3x² − 2x + 3', ['3x² − 2x + 4', '6x² − 2x', '3x² − 2x'], 'c = 3.'],
      ['∫ e^(3x) dx =', 'e^(3x)/3 + c', ['3e^(3x) + c', 'e^(3x) + c', 'e^(4x)/4 + c'], 'Divide by the coefficient of x.'],
    ],
  ),
  '5.12-5.13': M(
    [
      'Worked example from first principles: for f(x) = x squared, (f(x + h) − f(x)) over h = (2xh + h squared) over h = 2x + h, which tends to 2x as h tends to 0.',
      'Worked L’Hôpital example: the limit as x → 0 of (e to the x − 1) over x is 0 over 0. Differentiate top and bottom: e to the x over 1 → 1.',
      'Sometimes you need L’Hôpital’s rule more than once, for example the limit as x → 0 of (1 − cos x) over x squared = one half.',
      'Continuity check for piecewise functions: the left and right limits must equal the function value at the join; differentiability needs the gradients to match too.',
    ],
    [
      ['First principles for x²', 'Limit of 2x + h as h → 0 = 2x.'],
      ['lim (eˣ − 1)/x as x → 0', '1.'],
      ['lim (1 − cos x)/x² as x → 0', '½.'],
      ['Piecewise differentiability', 'Values and gradients must both match at the join.'],
    ],
    [
      ['lim(x→0) (eˣ − 1)/x =', '1', ['0', 'e', '∞'], 'L’Hôpital: eˣ/1 at 0.'],
      ['lim(x→0) (1 − cos x)/x² =', '½', ['0', '1', '2'], 'Apply L’Hôpital twice.'],
      ['From first principles, (f(x + h) − f(x))/h for f(x) = x² simplifies to', '2x + h', ['2x', 'x + h', 'h'], 'Then let h → 0.'],
      ['L’Hôpital’s rule does NOT apply directly to', 'lim (x + 1)/(x + 2) as x → 0', ['lim sin x / x as x → 0', 'lim (eˣ − 1)/x as x → 0', 'lim ln x / x as x → ∞'], 'It is not an indeterminate form.'],
    ],
  ),
  '5.14': M(
    [
      'Worked example: find dy/dx for x squared y + y cubed = 10. Differentiate: 2xy + x squared dy/dx + 3y squared dy/dx = 0, so dy/dx = minus 2xy over (x squared + 3y squared).',
      'Related rates: a spherical balloon’s volume grows at 50 cm³/s. When r = 5, dV/dr = 4πr squared = 100π, so dr/dt = 50 over 100π, about 0.159 cm/s.',
      'Ladder problem: a 10 m ladder slides down a wall. With x squared + y squared = 100, 2x dx/dt + 2y dy/dt = 0. Substitute known values to find the unknown rate.',
      'Always identify what is changing, write an equation linking the variables, differentiate with respect to time, then substitute the given moment.',
    ],
    [
      ['d/dx (x²y)', '2xy + x² dy/dx (product rule).'],
      ['Chain rule for rates', 'dy/dt = dy/dx × dx/dt.'],
      ['dV/dr for a sphere', '4πr².'],
      ['Ladder relation', 'x² + y² = L².'],
    ],
    [
      ['For x²y + y³ = 10, dy/dx =', '−2xy/(x² + 3y²)', ['2xy/(x² + 3y²)', '−x²/(3y²)', '−2x/(3y²)'], 'Implicit differentiation.'],
      ['dV/dt = 50 cm³/s for a sphere; when r = 5, dr/dt ≈', '0.159 cm/s', ['0.5 cm/s', '1.59 cm/s', '0.0159 cm/s'], '50 ÷ (4π × 25).'],
      ['A 10 m ladder: x = 6, dx/dt = 1 m/s. dy/dt =', '−0.75 m/s', ['0.75 m/s', '−1.33 m/s', '−6 m/s'], 'y = 8; 12 + 16 dy/dt = 0.'],
      ['d/dx (sin y) =', 'cos y · dy/dx', ['cos y', '−cos y', 'sin y · dy/dx'], 'Chain rule.'],
    ],
  ),
  '5.15-5.16': M(
    [
      'Worked example of substitution: the integral of x times (x squared + 1) to the 3. Let u = x squared + 1, du = 2x dx. The integral becomes one half u to the 3 du = (x squared + 1) to the 4 over 8 + c.',
      'Worked example of parts: the integral of x cos x. Let u = x and dv = cos x. The result is x sin x − the integral of sin x = x sin x + cos x + c.',
      'Repeated parts: the integral of x squared e to the x is e to the x (x squared − 2x + 2) + c.',
      'Standard results: the integral of 1 over root (a squared − x squared) is arcsin (x over a) + c; the integral of 1 over (a squared + x squared) is one over a arctan (x over a) + c.',
    ],
    [
      ['Integration by substitution', 'Replace part of the integrand with u and dx with du.'],
      ['LIATE', 'Order for choosing u in parts: logs, inverse trig, algebraic, trig, exponential.'],
      ['∫ 1/√(a² − x²) dx', 'arcsin(x/a) + c.'],
      ['∫ ln x dx', 'x ln x − x + c.'],
    ],
    [
      ['∫ x(x² + 1)³ dx =', '(x² + 1)⁴/8 + c', ['(x² + 1)⁴/4 + c', '(x² + 1)⁴ + c', 'x²(x² + 1)⁴/8 + c'], 'Substitute u = x² + 1.'],
      ['∫ x cos x dx =', 'x sin x + cos x + c', ['x sin x − cos x + c', '−x sin x + c', 'sin x + c'], 'By parts with u = x.'],
      ['∫ ln x dx =', 'x ln x − x + c', ['1/x + c', 'x ln x + c', 'ln x / x + c'], 'By parts with dv = dx.'],
      ['∫ 1/(4 + x²) dx =', '½ arctan(x/2) + c', ['arctan(x/2) + c', '2 arctan(2x) + c', 'ln(4 + x²) + c'], 'a = 2.'],
    ],
  ),
  '5.17': M(
    [
      'Worked example: rotate y = root x from x = 0 to 4 about the x-axis. V = π times the integral of x from 0 to 4 = 8π.',
      'Worked example about the y-axis: rotate y = x squared from y = 0 to 4 about the y-axis. x squared = y, so V = π times the integral of y from 0 to 4 = 8π.',
      'Volume between two curves rotated about the x-axis: π times the integral of (outer squared − inner squared), a washer shape.',
      'Area with respect to y: the area between x = y squared and the y-axis from y = 0 to 2 is the integral of y squared dy = 8 over 3.',
    ],
    [
      ['Washer method', 'V = π∫(R² − r²) dx.'],
      ['Rotating about the y-axis', 'Express x² in terms of y and integrate with respect to y.'],
      ['Limits for y-axis rotation', 'Use y-values, not x-values.'],
      ['Volume of revolution unit', 'Cubic units.'],
    ],
    [
      ['Rotate y = √x, 0 ≤ x ≤ 4, about the x-axis. V =', '8π', ['16π', '4π', '2π'], 'π∫x dx from 0 to 4.'],
      ['Rotate y = x², 0 ≤ y ≤ 4, about the y-axis. V =', '8π', ['16π', '32π/5', '4π'], 'π∫y dy from 0 to 4.'],
      ['Area between x = y² and the y-axis, 0 ≤ y ≤ 2', '8/3', ['4', '2', '8'], '∫y² dy.'],
      ['The volume between y = 2 and y = 1 rotated about the x-axis for 0 ≤ x ≤ 1 is', '3π', ['π', '4π', '2π'], 'π∫(4 − 1) dx.'],
    ],
  ),
  '5.18': M(
    [
      'Worked separable example: dy/dx = xy with y(0) = 2. Separate: dy over y = x dx. ln|y| = x squared over 2 + c, so y = 2e to the x squared over 2.',
      'Worked integrating factor example: dy/dx + y over x = x. The factor is e to the integral of 1 over x = x. Then d/dx (xy) = x squared, so xy = x cubed over 3 + c.',
      'Euler’s method with two steps: dy/dx = x + y, from (0, 1) with h = 0.1. y₁ = 1.1, then y₂ = 1.1 + 0.1(0.1 + 1.1) = 1.22.',
      'Modelling: Newton’s law of cooling, dT/dt = −k(T − Tₐ), and logistic growth are common exam contexts.',
    ],
    [
      ['After multiplying by the integrating factor I', 'd/dx (Iy) = I·Q(x), then integrate both sides.'],
      ['Newton’s law of cooling', 'dT/dt = −k(T − Tₐ).'],
      ['Particular solution', 'Uses an initial condition to find the constant.'],
      ['Euler step', 'yₙ₊₁ = yₙ + h f(xₙ, yₙ); xₙ₊₁ = xₙ + h.'],
    ],
    [
      ['dy/dx = xy, y(0) = 2. y =', '2e^(x²/2)', ['e^(x²/2)', '2eˣ', 'x²/2 + 2'], 'Separate variables.'],
      ['Euler, dy/dx = x + y, (0, 1), h = 0.1. y₂ =', '1.22', ['1.21', '1.2', '1.1'], 'y₁ = 1.1, y₂ = 1.1 + 0.12.'],
      ['The integrating factor for dy/dx + y/x = x (x > 0) is', 'x', ['eˣ', '1/x', 'ln x'], 'e^(ln x).'],
      ['In Newton’s law of cooling, Tₐ is the', 'Ambient (surrounding) temperature', ['Initial temperature', 'Time', 'Rate constant'], 'The object cools towards it.'],
    ],
  ),
  '5.19': M(
    [
      'Worked example: the series for ln(1 + x) is x − x squared over 2 + x cubed over 3 − …, valid for −1 < x ≤ 1.',
      'Worked example of substitution: e to the minus x squared = 1 − x squared + x to the 4 over 2 − …, found by replacing x with minus x squared in the e to the x series.',
      'Multiplying series: e to the x sin x starts x + x squared + x cubed over 3 + …, found by multiplying the two series and collecting terms.',
      'Using series for limits: the limit as x → 0 of (e to the x − 1 − x) over x squared = one half, since e to the x − 1 − x is about x squared over 2.',
    ],
    [
      ['ln(1 + x) series', 'x − x²/2 + x³/3 − … (−1 < x ≤ 1).'],
      ['e^(−x²) series', '1 − x² + x⁴/2 − …'],
      ['Using series for limits', 'Replace functions with their first few terms.'],
      ['arctan x series', 'x − x³/3 + x⁵/5 − …'],
    ],
    [
      ['The x² term in the series for ln(1 + x) is', '−x²/2', ['x²/2', 'x²', '−x²'], 'Alternating signs.'],
      ['e^(−x²) ≈', '1 − x² + x⁴/2', ['1 + x² + x⁴/2', '1 − x + x²/2', '1 − x²/2'], 'Substitute −x² into eˣ.'],
      ['lim(x→0) (eˣ − 1 − x)/x² =', '½', ['1', '0', '2'], 'eˣ − 1 − x ≈ x²/2.'],
      ['The first two non-zero terms of eˣ sin x are', 'x + x²', ['1 + x', 'x − x³/6', 'x + x³'], 'Multiply the series.'],
    ],
  ),
};

export default more;
