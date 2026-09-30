import type { MoreContent } from '../../types';
import { M } from '../helpers';

// Lesson 2 (worked examples in context, GDC tips, common mistakes, exam technique) plus extra
// flashcards and questions for every Maths: Applications & Interpretation chapter.
const more: Record<string, MoreContent> = {
  '1.1-1.3': M(
    [
      'Worked example: a gym charges $40 in month 1 and increases by $2 each month. The total paid in the first year is S12 = 12 over 2 times (2 times 40 + 11 times 2) = 6 times 102 = $612.',
      'Worked example: a phone loses 15% of its battery charge capacity each year. Starting at 4,000 mAh, after 3 years it is 4000 times 0.85 cubed, about 2,457 mAh.',
      'Scientific notation in context: the distance to the Sun is about 1.5 times 10 to the 11 metres; light takes 1.5 times 10 to the 11 divided by 3 times 10 to the 8, which is 500 seconds, to reach us.',
      'GDC tip: use the sequence or table function to find when a term first passes a value, instead of solving with logs.',
    ],
    [
      ['Sum of an arithmetic series', 'Sₙ = n/2 (2u₁ + (n − 1)d).'],
      ['Sum of a geometric series', 'Sₙ = u₁(rⁿ − 1)/(r − 1).'],
      ['Percentage decrease as a ratio', 'Decrease by 15% → r = 0.85.'],
      ['Finding when a term exceeds a value', 'Use a GDC table or solve with logs.'],
    ],
    [
      ['A gym charges $40 in month 1, rising $2 a month. Total for 12 months', '$612', ['$480', '$624', '$552'], 'S₁₂ = 6(80 + 22).'],
      ['4000 × 0.85³ ≈', '2457', ['3400', '2890', '1740'], 'Three years of 15% decrease.'],
      ['(1.5 × 10¹¹) ÷ (3 × 10⁸) =', '500', ['5000', '50', '4.5 × 10¹⁹'], '0.5 × 10³.'],
      ['A geometric sequence has u₁ = 2 and r = 3. S₄ =', '80', ['54', '162', '26'], '2(81 − 1)/2 = 80.'],
    ],
  ),
  '1.4': M(
    [
      'Worked example with the TVM solver: to find how long $3,000 takes to reach $4,000 at 5% compounded monthly, enter I% = 5, PV = −3000, FV = 4000, P/Y = C/Y = 12, then solve for N: about 69.2 months, so 70 months.',
      'Inflation reduces the real value of money. A real interest rate is roughly the nominal rate minus the inflation rate.',
      'Worked example of depreciation: a car bought for $25,000 is worth $16,000 after 3 years. Solve 25000(1 − r over 100) cubed = 16000 to get r, about 13.8% per year.',
      'Common mistake: rounding N down. If 69.2 months are needed, the target is only reached after 70 whole months.',
    ],
    [
      ['Real interest rate (approx.)', 'Nominal rate − inflation rate.'],
      ['Rounding N in finance', 'Round up to the next whole period to reach a target.'],
      ['Finding a depreciation rate', 'Solve V₀(1 − r/100)ⁿ = V for r.'],
      ['C/Y on the TVM solver', 'Number of compounding periods per year.'],
    ],
    [
      ['$25 000 car worth $16 000 after 3 years. Annual depreciation rate ≈', '13.8%', ['12.0%', '36.0%', '10.5%'], '(16/25)^(1/3) ≈ 0.862.'],
      ['Nominal rate 6%, inflation 4%. Real rate ≈', '2%', ['10%', '1.5%', '24%'], 'Subtract inflation.'],
      ['The TVM solver gives N = 69.2 months to reach a target. The answer is', '70 months', ['69 months', '69.2 years', '6 years'], 'You need whole periods.'],
      ['$2000 at 3% compounded monthly for 1 year ≈', '$2060.83', ['$2060.00', '$2600.00', '$2183.93'], '2000(1 + 3/1200)¹².'],
    ],
  ),
  '1.5': M(
    [
      'Worked example: the pH scale is logarithmic: pH = minus log [H⁺]. Lemon juice with [H⁺] = 10 to the minus 2 has pH 2, which is 100 times more acidic than pH 4.',
      'Worked example: solve 3 times 1.2 to the x = 20. Divide: 1.2 to the x = 20 over 3. Take logs: x = log(6.67) over log(1.2), about 10.4.',
      'Exponent laws in context: 10 to the 6 times 10 to the 3 = 10 to the 9, so a million thousands is a billion.',
      'Common mistake: log(a + b) is NOT log a + log b. The log laws apply to products and quotients, not sums.',
    ],
    [
      ['(aᵐ)ⁿ', 'aᵐⁿ.'],
      ['a⁰', '1 (for a ≠ 0).'],
      ['log₁₀ 1', '0.'],
      ['log of a sum', 'No simple rule: log(a + b) ≠ log a + log b.'],
    ],
    [
      ['Solve 3 × 1.2ˣ = 20 (3 s.f.)', '10.4', ['6.67', '5.55', '12.0'], 'x = log(20/3) ÷ log 1.2.'],
      ['pH 3 compared with pH 5 is', '100 times more acidic', ['2 times more acidic', '10 times more acidic', '1000 times more acidic'], 'Each pH unit is ×10.'],
      ['(2³)² =', '64', ['32', '12', '256'], '2⁶.'],
      ['log₁₀ 0.01 =', '−2', ['2', '−0.01', '0.2'], '10⁻² = 0.01.'],
    ],
  ),
  '1.6': M(
    [
      'Worked example: a room is 4.3 m by 5.2 m, each to 1 d.p. The upper bound of the area is 4.35 times 5.25 = 22.8375 m squared; the lower bound is 4.25 times 5.15 = 21.8875 m squared.',
      'Worked example: π approximated as 3.14. Percentage error = |3.14 − π| over π times 100, about 0.0507%.',
      'Estimation: 48.7 times 21.3 is about 50 times 20 = 1,000, so an exact answer of 1,037.31 is reasonable.',
      'IB default: give exact answers or answers to 3 significant figures unless told otherwise. Don’t round early in multi-step calculations.',
    ],
    [
      ['Upper bound of a product', 'Multiply the upper bounds.'],
      ['Upper bound of a difference a − b', 'Upper bound of a − lower bound of b.'],
      ['Rounding early', 'Causes accumulated errors — keep full values until the end.'],
      ['Significant figures of 0.00305', 'Three: 3, 0, 5.'],
    ],
    [
      ['Upper bound of the area of a 4.3 m × 5.2 m room (1 d.p.)', '22.8375 m²', ['22.36 m²', '21.8875 m²', '23.0 m²'], '4.35 × 5.25.'],
      ['Percentage error of using 3.14 for π (3 s.f.)', '0.0507%', ['0.159%', '0.00159%', '5.07%'], '|3.14 − π| ÷ π × 100.'],
      ['Estimate 48.7 × 21.3', '1000', ['100', '10 000', '700'], '50 × 20.'],
      ['A length is 25 cm to the nearest cm. Its upper bound is', '25.5 cm', ['26 cm', '25.4 cm', '25.05 cm'], 'Add half a unit.'],
    ],
  ),
  '1.7': M(
    [
      'Worked example: a $15,000 car loan at 6% per year, repaid monthly over 4 years. TVM: N = 48, I% = 6, PV = 15000, FV = 0, P/Y = C/Y = 12. PMT is about −$352.28.',
      'Total repaid is 48 times 352.28, about $16,909, so the interest paid is about $1,909.',
      'Worked annuity example: saving $200 a month at 4% for 10 years gives FV, with PV = 0 and PMT = −200, of about $29,450.',
      'Comparing loans: a longer loan has smaller payments but more total interest. Always compare total cost, not just the monthly payment.',
    ],
    [
      ['Total interest on a loan', 'Total of all payments − amount borrowed.'],
      ['Annuity FV', 'Value of regular savings plus interest at the end.'],
      ['Longer loan term', 'Smaller payments but more total interest.'],
      ['PMT sign', 'Payments you make are negative on the TVM solver.'],
    ],
    [
      ['$15 000 at 6% over 48 months. Monthly payment ≈', '$352.28', ['$312.50', '$375.00', '$290.00'], 'Use the TVM solver.'],
      ['48 payments of $352.28 on a $15 000 loan. Total interest ≈', '$1909', ['$352', '$900', '$15 000'], '48 × 352.28 − 15 000.'],
      ['Which loan costs more in total interest (same rate)?', 'The longer loan', ['The shorter loan', 'They cost the same', 'The loan with higher payments'], 'Interest accumulates longer.'],
      ['Saving $200 a month for 10 years at 4%. FV ≈', '$29 450', ['$24 000', '$35 000', '$20 000'], 'More than the $24 000 deposited because of interest.'],
    ],
  ),
  '1.8': M(
    [
      'Worked example: a café sells coffee at $3 and muffins at $2. On Monday it sells 120 items for $310. Let c and m be the numbers: c + m = 120 and 3c + 2m = 310. The GDC gives c = 70, m = 50.',
      'Worked example of a polynomial: a box is made from a 20 by 20 card by cutting squares of side x from the corners. Volume = x(20 − 2x) squared. Solve x(20 − 2x) squared = 500 with the GDC.',
      'Three unknowns: a school buys pens, pencils and erasers in three orders with known totals; enter the 3 by 3 system into the simultaneous equation solver.',
      'Interpret: reject negative or non-integer solutions when counting items, and state answers with units.',
    ],
    [
      ['Defining variables', 'Say what each letter represents, with units.'],
      ['Rejecting solutions', 'Discard values that don’t fit the context, e.g. negatives.'],
      ['Box volume from a square sheet', 'V = x(L − 2x)².'],
      ['GDC polynomial solver', 'Finds real roots of polynomial equations up to degree 4 or higher.'],
    ],
    [
      ['Coffee $3, muffins $2. 120 items for $310. Coffees sold', '70', ['50', '60', '80'], 'c + m = 120, 3c + 2m = 310.'],
      ['Solve x³ − 6x² + 11x − 6 = 0', 'x = 1, 2, 3', ['x = −1, −2, −3', 'x = 1, 3', 'x = 6'], 'Use the polynomial solver.'],
      ['A solution x = −4 for a box’s side length should be', 'Rejected', ['Kept', 'Doubled', 'Rounded to 4'], 'Lengths can’t be negative.'],
      ['2x + y = 11 and x − y = 1. y =', '3', ['4', '5', '1'], 'x = 4, y = 3.'],
    ],
  ),
  '1.9-1.11': M(
    [
      'Worked example: simplify log 8 + log 125. This is log 1000 = 3.',
      'Worked example: a ball dropped from 2 m bounces to 60% of its previous height. Total distance = 2 + 2 times (1.2 + 0.72 + …) = 2 + 2 times 1.2 over 0.4 = 8 m.',
      'Rational exponents in models: the metabolic rate of animals is roughly proportional to mass to the three quarters.',
      'Change of base: log base 2 of 20 = log 20 over log 2, about 4.32.',
    ],
    [
      ['Change of base', 'logₐ b = log b ÷ log a.'],
      ['Total bounce distance', 'Drop + 2 × (sum to infinity of rebound heights).'],
      ['a^(3/4)', '(⁴√a)³.'],
      ['Convergence', '|r| < 1 for a finite sum to infinity.'],
    ],
    [
      ['log 8 + log 125 =', '3', ['2.1', '133', '1000'], 'log 1000.'],
      ['A ball dropped from 2 m rebounds to 60% each time. Total distance', '8 m', ['5 m', '3.2 m', '10 m'], '2 + 2 × 1.2/0.4.'],
      ['log₂ 20 (3 s.f.)', '4.32', ['1.30', '10.0', '3.00'], 'log 20 ÷ log 2.'],
      ['16^(3/4) =', '8', ['12', '4', '64'], '(⁴√16)³ = 2³.'],
    ],
  ),
  '1.12-1.13': M(
    [
      'Worked example: convert z = 1 + root 3 i to polar form. r = 2 and θ = π over 3, so z = 2 cis(π over 3) = 2 e to the iπ/3.',
      'Dividing in polar form: divide the moduli and subtract the arguments. 6 cis(π/2) divided by 2 cis(π/6) = 3 cis(π/3).',
      'Application: in AC circuits, voltages with the same frequency are added as complex numbers. Adding 3 cis 0 and 4 cis(π/2) gives modulus 5.',
      'Powers: z to the n = r to the n cis(nθ). For 2 cis(π/3) cubed: 8 cis π = −8.',
    ],
    [
      ['Dividing in polar form', 'Divide moduli, subtract arguments.'],
      ['zⁿ in polar form', 'rⁿ cis(nθ).'],
      ['Argand diagram', 'Real part on the x-axis, imaginary part on the y-axis.'],
      ['Conjugate of a + bi', 'a − bi.'],
    ],
    [
      ['1 + √3 i in polar form', '2 cis(π/3)', ['√3 cis(π/6)', '2 cis(π/6)', '4 cis(π/3)'], 'r = 2, θ = π/3.'],
      ['6 cis(π/2) ÷ 2 cis(π/6) =', '3 cis(π/3)', ['3 cis(2π/3)', '12 cis(π/3)', '4 cis(π/3)'], 'Divide moduli, subtract arguments.'],
      ['(2 cis(π/3))³ =', '−8', ['8', '8i', '−8i'], '8 cis π.'],
      ['The conjugate of 5 − 2i is', '5 + 2i', ['−5 + 2i', '−5 − 2i', '2 − 5i'], 'Change the sign of the imaginary part.'],
    ],
  ),
  '1.14': M(
    [
      'Worked example: solve 2x + y = 7 and x + 3y = 11 with matrices. A = [[2, 1], [1, 3]], det A = 5. A inverse times b gives x = 2, y = 3.',
      'Matrix multiplication is not commutative: AB is usually not equal to BA.',
      'Application: matrices can store data, like sales of three products in two shops, and multiplying by a price vector gives each shop’s revenue.',
      'Inverse of a 2 by 2 matrix: swap a and d, change the signs of b and c, and divide by the determinant.',
    ],
    [
      ['Inverse of [[a, b], [c, d]]', '1/(ad − bc) × [[d, −b], [−c, a]].'],
      ['AB vs BA', 'Usually not equal: matrix multiplication isn’t commutative.'],
      ['Identity matrix', 'AI = IA = A.'],
      ['Singular matrix', 'Determinant 0; no inverse.'],
    ],
    [
      ['Solve 2x + y = 7, x + 3y = 11', 'x = 2, y = 3', ['x = 3, y = 1', 'x = 1, y = 5', 'x = 4, y = −1'], 'Use A⁻¹b.'],
      ['The inverse of [[2, 1], [1, 3]] has determinant factor', '1/5', ['1/7', '5', '1/6'], 'det = 6 − 1.'],
      ['Matrix multiplication is generally', 'Not commutative', ['Commutative', 'Undefined', 'Always zero'], 'AB ≠ BA in general.'],
      ['[[1, 2], [3, 4]] × [[1], [1]] =', '[[3], [7]]', ['[[2], [6]]', '[[4], [6]]', '[[1], [3]]'], '1 + 2 and 3 + 4.'],
    ],
  ),
  '1.15': M(
    [
      'Worked example: A = [[4, 1], [2, 3]]. The characteristic equation is (4 − λ)(3 − λ) − 2 = 0, which gives λ squared − 7λ + 10 = 0, so λ = 2 or 5.',
      'For λ = 5, solve (A − 5I)v = 0: −x + y = 0, so an eigenvector is (1, 1).',
      'Application: in a population model, the largest eigenvalue gives the long-term growth rate, and its eigenvector gives the stable proportions.',
      'Check: the sum of the eigenvalues equals the trace, 4 + 3 = 7, and their product equals the determinant, 12 − 2 = 10.',
    ],
    [
      ['Trace', 'Sum of the diagonal entries = sum of eigenvalues.'],
      ['Product of eigenvalues', 'Equals the determinant.'],
      ['Finding an eigenvector', 'Solve (A − λI)v = 0.'],
      ['Largest eigenvalue in growth models', 'Long-term growth factor.'],
    ],
    [
      ['Eigenvalues of [[4, 1], [2, 3]]', '2 and 5', ['4 and 3', '1 and 10', '−2 and −5'], 'λ² − 7λ + 10 = 0.'],
      ['An eigenvector for λ = 5 is', '(1, 1)', ['(1, −2)', '(2, 1)', '(0, 1)'], '−x + y = 0.'],
      ['The sum of the eigenvalues equals the', 'Trace', ['Determinant', 'Inverse', 'Largest entry'], 'Diagonal sum.'],
      ['Eigenvalues 3 and −1. The determinant is', '−3', ['2', '3', '−2'], 'Product of eigenvalues.'],
    ],
  ),
  '2.1': M(
    [
      'Worked example: a plumber charges $60 plus $45 per hour. C = 45h + 60. For a 3-hour job, C = $195. The gradient, 45, is the hourly rate.',
      'Worked example: a line passes through (2, 3) and (6, 11). Gradient = 8 over 4 = 2. y − 3 = 2(x − 2), so y = 2x − 1.',
      'Break-even: two phone plans cost 20 + 0.1m and 35 + 0.05m for m minutes. Setting them equal: 0.05m = 15, so m = 300 minutes.',
      'Exam tip: interpret the gradient and intercept with units in context.',
    ],
    [
      ['Break-even point', 'Where two linear models give equal values.'],
      ['Gradient in context', 'Rate of change, e.g. cost per hour.'],
      ['Point-gradient form', 'y − y₁ = m(x − x₁).'],
      ['Horizontal line', 'Gradient 0, equation y = c.'],
    ],
    [
      ['C = 45h + 60. Cost of a 3-hour job', '$195', ['$135', '$180', '$240'], '45 × 3 + 60.'],
      ['The line through (2, 3) and (6, 11) is', 'y = 2x − 1', ['y = 2x + 3', 'y = 4x − 5', 'y = x + 1'], 'Gradient 2.'],
      ['Plans 20 + 0.1m and 35 + 0.05m cost the same when m =', '300', ['150', '550', '700'], '0.05m = 15.'],
      ['A line perpendicular to one with gradient 4 has gradient', '−¼', ['4', '−4', '¼'], 'Negative reciprocal.'],
    ],
  ),
  '2.2-2.4': M(
    [
      'Worked example: a ball’s height is h(t) = −4.9t squared + 14.7t + 2. The GDC gives a maximum of about 13.0 m at t = 1.5 s, and it hits the ground at about t = 3.13 s.',
      'The domain in context is 0 ≤ t ≤ 3.13, and the range is 0 ≤ h ≤ 13.0.',
      'Asymptotes in models: a cooling cup of tea approaches room temperature, a horizontal asymptote, but never quite reaches it.',
      'Exam tip: when sketching from a GDC, show intercepts, turning points and asymptotes with coordinates, and label axes with variables and units.',
    ],
    [
      ['Domain in a projectile model', 'From launch time to landing time.'],
      ['Range in context', 'The set of realistic output values.'],
      ['Asymptote in a cooling model', 'The room temperature.'],
      ['GDC “zero” function', 'Finds x-intercepts.'],
    ],
    [
      ['h = −4.9t² + 14.7t + 2 has its maximum at t =', '1.5 s', ['3 s', '1 s', '2 s'], 't = −b/2a = 14.7/9.8.'],
      ['The maximum height of that ball (3 s.f.)', '13.0 m', ['14.7 m', '11.0 m', '2.00 m'], 'h(1.5) ≈ 13.0.'],
      ['A cooling model approaches 20 °C. This value is a', 'Horizontal asymptote', ['Vertical asymptote', 'Maximum', 'y-intercept'], 'The model levels off.'],
      ['Where do y = 2x + 1 and y = x² − 2 meet (positive x)?', 'x = 3', ['x = 1', 'x = 2', 'x = −1'], 'x² − 2x − 3 = 0.'],
    ],
  ),
  '2.5': M(
    [
      'Worked example of a sinusoidal model: a Ferris wheel of diameter 40 m, lowest point 2 m above ground, completing a turn every 10 minutes. h(t) = −20 cos(36t°) + 22.',
      'Worked example of an exponential model: a car worth $30,000 loses 12% each year: V = 30000 times 0.88 to the t.',
      'Direct variation: y = kx to the n. The distance fallen is proportional to time squared; if 20 m in 2 s, then k = 5 and in 3 s it falls 45 m.',
      'Use regression on the GDC, then judge the model: does the shape fit the data, and does it make sense beyond the data?',
    ],
    [
      ['Sinusoidal model form', 'f(x) = a sin(b(x − c)) + d.'],
      ['Amplitude in context', 'Half the difference between maximum and minimum.'],
      ['Direct variation', 'y = kxⁿ.'],
      ['Period in degrees', '360 ÷ b.'],
    ],
    [
      ['A Ferris wheel of diameter 40 m has amplitude', '20 m', ['40 m', '10 m', '22 m'], 'Half the diameter.'],
      ['Distance ∝ time². 20 m in 2 s. Distance in 3 s', '45 m', ['30 m', '60 m', '90 m'], 'k = 5, 5 × 9.'],
      ['V = 30 000 × 0.88ᵗ. Annual depreciation', '12%', ['88%', '0.88%', '30%'], '1 − 0.88.'],
      ['Temperatures over a day with a max of 30 °C and min of 14 °C. The principal axis is', '22 °C', ['16 °C', '8 °C', '30 °C'], 'Average of max and min.'],
    ],
  ),
  '2.6': M(
    [
      'Worked example: a linear model for phone sales fits 2015 to 2022 data well, but predicts negative sales by 2040. This shows the model is only valid over a limited domain.',
      'Choosing a model: look at the shape of the scatter graph, the context, and R squared from regression. A logistic or exponential model may fit growth better than linear.',
      'Assumptions to state: constant growth rate, no competitors, stable prices, or ignoring air resistance.',
      'In your IA or exam answers, reflect on strengths and limitations and suggest how to refine the model with more data or a different function.',
    ],
    [
      ['Valid domain', 'The range of inputs over which a model is reasonable.'],
      ['Refining a model', 'Changing the function or parameters after testing against data.'],
      ['R² in model choice', 'Closer to 1 means a better fit.'],
      ['Stating assumptions', 'Makes the model’s limits clear.'],
    ],
    [
      ['A model predicts negative population. The best response is', 'Restrict the domain or change the model', ['Accept the prediction', 'Ignore the data', 'Increase R²'], 'Models have limited validity.'],
      ['Which R² suggests the best fit?', '0.97', ['0.52', '0.70', '0.10'], 'Closest to 1.'],
      ['Assuming a price stays constant is', 'A modelling assumption', ['A result', 'A test', 'A limitation only'], 'It simplifies the model.'],
      ['The final stage of the modelling cycle is to', 'Reflect and refine the model', ['Choose variables', 'Collect data', 'Draw axes'], 'Improve the model if needed.'],
    ],
  ),
  '2.7-2.8': M(
    [
      'Worked example: a shop converts prices: f(x) = 1.2x converts euros to dollars, and g(x) = x + 5 adds a delivery charge. g of f of 50 = 60 + 5 = $65.',
      'Worked example: the inverse of f(x) = 1.2x is x over 1.2, which converts dollars back into euros.',
      'Transforming a model: if daylight hours follow f(t), then f(t − 10) shifts the model 10 days later, and f(t) + 1 adds an hour.',
      'Order matters: applying a 10% discount then a $5 coupon differs from the coupon then the discount.',
    ],
    [
      ['Inverse in context', 'Reverses the process, e.g. converting back.'],
      ['f(t − 10)', 'Shift the graph 10 units right (later).'],
      ['Composite order', 'f(g(x)): apply g first.'],
      ['Reflection in y = x', 'Graph of the inverse function.'],
    ],
    [
      ['f(x) = 1.2x, g(x) = x + 5. g(f(50)) =', '65', ['66', '55', '72'], 'f first, then g.'],
      ['The inverse of f(x) = 1.2x is', 'x/1.2', ['1.2/x', 'x − 1.2', '−1.2x'], 'Divide by 1.2.'],
      ['10% off then $5 off a $100 item costs', '$85', ['$85.50', '$90', '$95'], '90 − 5.'],
      ['$5 off then 10% off a $100 item costs', '$85.50', ['$85', '$90', '$95'], '95 × 0.9.'],
    ],
  ),
  '2.9': M(
    [
      'Worked example: a logistic model for a rumour spreading in a school of 1,200: N(t) = 1200 over (1 + 99e to the −0.8t). At t = 0, N = 12; it approaches 1,200.',
      'Newton’s law of cooling as an exponential model: T = 70e to the −0.1t + 20. After 10 minutes, T = 70e to the −1 + 20, about 45.8 °C.',
      'Piecewise example: a taxi charges $3 for the first 2 km, then $1.50 per km after that. For d > 2, C = 3 + 1.5(d − 2).',
      'Choose logistic over exponential when growth must level off because of limited resources or a fixed population.',
    ],
    [
      ['Logistic initial value', 'L ÷ (1 + C).'],
      ['Why logistic, not exponential', 'Growth is limited by a maximum capacity.'],
      ['Piecewise continuity', 'Pieces should join where the rule changes, if the context requires.'],
      ['Exponential decay to an asymptote', 'y = ke^(−at) + c approaches c.'],
    ],
    [
      ['N = 1200/(1 + 99e^(−0.8t)). N(0) =', '12', ['1200', '99', '0'], '1200 ÷ 100.'],
      ['T = 70e^(−0.1t) + 20. T after 10 minutes (3 s.f.)', '45.8 °C', ['27.0 °C', '90.0 °C', '20.0 °C'], '70e⁻¹ + 20.'],
      ['A taxi: $3 for the first 2 km, then $1.50/km. Cost for 6 km', '$9', ['$12', '$7.50', '$10.50'], '3 + 1.5 × 4.'],
      ['The long-term value of that rumour model is', '1200', ['12', '99', '0.8'], 'The carrying capacity L.'],
    ],
  ),
  '2.10': M(
    [
      'Worked example: data follows y = a x to the n. Plot ln y against ln x; the line ln y = 1.5 ln x + 0.7 means n = 1.5 and a = e to the 0.7, about 2.01.',
      'Worked example: data follows y = a b to the x. Plot ln y against x; the line ln y = 0.3x + 2 means b = e to the 0.3, about 1.35, and a = e squared, about 7.39.',
      'Log scales: each step on the Richter scale is a 10 times increase in amplitude, so magnitude 7 is 1,000 times the amplitude of magnitude 4.',
      'Decibels: an increase of 10 dB is 10 times the intensity. 80 dB is 100 times more intense than 60 dB.',
    ],
    [
      ['ln y vs ln x straight line', 'Power model y = axⁿ.'],
      ['ln y vs x straight line', 'Exponential model y = abˣ.'],
      ['Richter scale step', 'Each unit is ×10 in amplitude.'],
      ['Decibel step of 10 dB', '×10 in intensity.'],
    ],
    [
      ['ln y = 1.5 ln x + 0.7. The model is y =', '2.01x^1.5', ['0.7x^1.5', '1.5x^0.7', 'e^(1.5x)'], 'a = e^0.7.'],
      ['ln y = 0.3x + 2. b ≈', '1.35', ['0.3', '7.39', '2'], 'b = e^0.3.'],
      ['Magnitude 7 vs 4 earthquake: amplitude ratio', '1000', ['3', '30', '100'], '10³.'],
      ['80 dB vs 60 dB: intensity ratio', '100', ['20', '2', '1000'], 'Two 10 dB steps.'],
    ],
  ),
  '3.1': M(
    [
      'Worked example: a cylindrical can holds 330 cm cubed and has radius 3 cm. Height = 330 over π times 9, about 11.7 cm.',
      'Worked example: a cone-shaped paper cup has radius 4 cm and height 9 cm. Slant height = root 97, about 9.85 cm; curved surface area = π times 4 times 9.85, about 124 cm squared.',
      'Composite shapes: a silo is a cylinder with a hemisphere on top. Add the volumes: π r squared h + two thirds π r cubed.',
      'Units: convert before calculating. 1 litre = 1,000 cm cubed and 1 m cubed = 1,000 litres.',
    ],
    [
      ['Volume of a hemisphere', '⅔πr³.'],
      ['1 litre', '1000 cm³.'],
      ['1 m³', '1000 litres.'],
      ['Slant height of a cone', 'l = √(r² + h²).'],
    ],
    [
      ['A 330 cm³ can with radius 3 cm has height (3 s.f.)', '11.7 cm', ['36.7 cm', '3.89 cm', '9.00 cm'], '330 ÷ 9π.'],
      ['A cone with r = 4 and h = 9 has slant height (3 s.f.)', '9.85 cm', ['13.0 cm', '5.00 cm', '97.0 cm'], '√(16 + 81).'],
      ['2.5 m³ in litres', '2500', ['250', '25 000', '25'], '× 1000.'],
      ['Volume of a hemisphere with r = 3', '18π', ['36π', '9π', '27π'], '⅔π × 27.'],
    ],
  ),
  '3.2-3.3': M(
    [
      'Worked example: a ship travels 12 km on a bearing of 040°, then 9 km on 130°. The angle between the paths is 90°, so it is root 225 = 15 km from the start.',
      'Worked example with the cosine rule: two sides of a field are 50 m and 70 m with an included angle of 110°. The third side is root (2500 + 4900 − 7000 cos 110°), about 99.0 m.',
      'Area of the same field: one half times 50 times 70 times sin 110°, about 1,644 m squared.',
      'Exam tip: always draw a diagram with north lines for bearings and mark the angle you are finding.',
    ],
    [
      ['Bearing rules', 'Measured clockwise from north, written with three digits.'],
      ['Back bearing', 'Add or subtract 180°.'],
      ['Angle of depression = angle of elevation', 'Alternate angles between parallel horizontal lines.'],
      ['Choosing the cosine rule', 'Two sides and the included angle, or three sides.'],
    ],
    [
      ['12 km on 040° then 9 km on 130°. Distance from start', '15 km', ['21 km', '3 km', '10.8 km'], 'The paths meet at 90°.'],
      ['Sides 50 m and 70 m with 110° between. Third side (3 s.f.)', '99.0 m', ['86.0 m', '120 m', '74.2 m'], 'Cosine rule: √(7400 + 2394).'],
      ['The back bearing of 070° is', '250°', ['110°', '290°', '160°'], '070 + 180.'],
      ['Area with sides 50 m, 70 m and angle 110° (3 s.f.)', '1640 m²', ['1750 m²', '3290 m²', '1200 m²'], '½ × 50 × 70 × sin 110°.'],
    ],
  ),
  '3.4': M(
    [
      'Worked example: a sprinkler waters a sector of radius 8 m and angle 120°. Area = 120 over 360 times π times 64, about 67.0 m squared.',
      'Worked example: a running track bend is a semicircle of radius 36.5 m. Its length is half of 2π times 36.5, about 114.7 m.',
      'Finding the angle from arc length: an arc of 10 cm on a circle of radius 6 cm has θ = 10 over 12π times 360, about 95.5°.',
      'Common mistake: forgetting to add the two radii when finding the perimeter of a sector.',
    ],
    [
      ['Finding θ from arc length', 'θ = (arc ÷ 2πr) × 360.'],
      ['Semicircle arc length', 'πr.'],
      ['Quarter circle area', '¼πr².'],
      ['Sector perimeter', 'Arc length + 2r.'],
    ],
    [
      ['A sprinkler sector, r = 8 m, θ = 120°. Area (3 s.f.)', '67.0 m²', ['201 m²', '16.8 m²', '33.5 m²'], '⅓ × 64π.'],
      ['Semicircular bend with r = 36.5 m. Length (4 s.f.)', '114.7 m', ['229.3 m', '73.0 m', '57.3 m'], 'π × 36.5.'],
      ['Arc 10 cm on r = 6 cm. θ (3 s.f.)', '95.5°', ['60.0°', '1.67°', '47.7°'], '10 ÷ 12π × 360.'],
      ['Arc length for r = 12, θ = 30°', '2π', ['6π', '12π', 'π'], '30/360 × 24π.'],
    ],
  ),
  '3.5-3.6': M(
    [
      'Worked example: find the perpendicular bisector of A(2, 1) and B(6, 5). Midpoint (4, 3), gradient of AB = 1, so the bisector has gradient −1: y = −x + 7.',
      'Adding a site to a Voronoi diagram: draw perpendicular bisectors between the new site and neighbouring sites, then remove edges that are now closer to the new site.',
      'Real-world uses: Voronoi diagrams show which hospital, school or phone mast is nearest to each location.',
      'The toxic waste dump problem: the largest empty circle is centred on a vertex of the Voronoi diagram or on the boundary, as far as possible from all sites.',
    ],
    [
      ['Perpendicular bisector through the midpoint', 'Gradient is the negative reciprocal of the segment’s gradient.'],
      ['Voronoi vertex', 'Point equidistant from three or more sites.'],
      ['Adding a site', 'Draw new perpendicular bisectors and update the cells.'],
      ['Uses of Voronoi diagrams', 'Nearest hospitals, phone masts, rainfall stations.'],
    ],
    [
      ['Perpendicular bisector of (2, 1) and (6, 5)', 'y = −x + 7', ['y = x − 1', 'y = x + 3', 'y = −x + 3'], 'Midpoint (4, 3), gradient −1.'],
      ['A Voronoi vertex is equidistant from', 'Three or more sites', ['One site', 'The boundary only', 'No sites'], 'Where three cells meet.'],
      ['Which question can a Voronoi diagram of hospitals answer?', 'Which hospital is nearest to a house', ['How many beds each has', 'Which is best rated', 'Their opening hours'], 'Cells show nearest sites.'],
      ['The toxic waste dump location is often at', 'A Voronoi vertex', ['A site', 'The centre of a cell', 'Any edge midpoint'], 'It maximises the distance to the nearest site.'],
    ],
  ),
  '3.7-3.8': M(
    [
      'Worked example: convert 135° to radians: 135 times π over 180 = 3π over 4.',
      'Worked example: a pendulum swings through 0.3 radians on a 1.2 m string. The arc length is 1.2 times 0.3 = 0.36 m.',
      'Solve 2 sin x = 1 for 0 ≤ x ≤ 2π using the GDC: graph y = 2 sin x and y = 1 and find the intersections at about 0.524 and 2.62.',
      'Exact values: sin(π/6) = one half, cos(π/3) = one half, tan(π/4) = 1.',
    ],
    [
      ['135° in radians', '3π/4.'],
      ['Arc length in radians', 's = rθ.'],
      ['tan(π/4)', '1.'],
      ['Solving trig equations with a GDC', 'Graph both sides and find all intersections in the interval.'],
    ],
    [
      ['135° in radians', '3π/4', ['2π/3', '5π/6', '3π/2'], '135 × π/180.'],
      ['Arc length for r = 1.2 m, θ = 0.3 rad', '0.36 m', ['0.25 m', '4 m', '1.5 m'], 's = rθ.'],
      ['Solutions of 2sin x = 1 for 0 ≤ x ≤ 2π', 'π/6 and 5π/6', ['π/3 and 2π/3', 'π/6 only', 'π/6 and 7π/6'], 'sin x = ½.'],
      ['1 radian in degrees (3 s.f.)', '57.3°', ['90.0°', '180°', '3.14°'], '180/π.'],
    ],
  ),
  '3.9': M(
    [
      'Worked example: rotate the point (2, 1) by 90° anticlockwise about the origin using [[0, −1], [1, 0]]. The image is (−1, 2).',
      'A stretch parallel to the x-axis with factor 3 is [[3, 0], [0, 1]]. A shape of area 5 becomes area 15.',
      'Combined: reflect in y = x, [[0, 1], [1, 0]], then enlarge by 2, [[2, 0], [0, 2]]. The single matrix is the enlargement times the reflection: [[0, 2], [2, 0]].',
      'Inverse matrices undo transformations: the inverse of a rotation by θ is a rotation by minus θ.',
    ],
    [
      ['Rotation by 90° anticlockwise', '[[0, −1], [1, 0]].'],
      ['Reflection in y = x', '[[0, 1], [1, 0]].'],
      ['Stretch parallel to x-axis, factor k', '[[k, 0], [0, 1]].'],
      ['Undoing a transformation', 'Apply the inverse matrix.'],
    ],
    [
      ['(2, 1) rotated 90° anticlockwise is', '(−1, 2)', ['(1, −2)', '(−2, −1)', '(1, 2)'], '[[0, −1], [1, 0]] × (2, 1).'],
      ['A stretch factor 3 applied to a shape of area 5 gives area', '15', ['45', '8', '5'], 'det = 3.'],
      ['Reflect in y = x then enlarge by 2. The single matrix', '[[0, 2], [2, 0]]', ['[[2, 0], [0, 2]]', '[[0, 1], [1, 0]]', '[[2, 2], [2, 2]]'], 'Enlargement × reflection.'],
      ['The matrix [[0, 1], [1, 0]] represents', 'Reflection in y = x', ['Rotation by 90°', 'Reflection in the x-axis', 'Enlargement'], 'It swaps x and y.'],
    ],
  ),
  '3.10-3.13': M(
    [
      'Worked example: two ships start at A(0, 0) with velocity (4, 3) and B(10, 0) with velocity (−2, 5). At time t, their positions are (4t, 3t) and (10 − 2t, 5t). The distance squared is (10 − 6t) squared + (2t) squared.',
      'Minimising that distance with the GDC gives t = 1.5 hours and a closest distance of root 10, about 3.16 km.',
      'Angle between vectors (3, 4) and (4, 3): cos θ = 24 over 25, so θ is about 16.3°.',
      'Vector product in context: the area of a parallelogram of land with sides given by vectors is the magnitude of their cross product.',
    ],
    [
      ['Position at time t', 'r = r₀ + tv.'],
      ['Closest approach', 'Minimise the distance between positions at time t.'],
      ['Angle between vectors', 'cos θ = (v · w) ÷ (|v||w|).'],
      ['Area of a parallelogram', '|a × b|.'],
    ],
    [
      ['Ship at (0, 0) with velocity (4, 3). Position after 2 h', '(8, 6)', ['(4, 3)', '(6, 8)', '(2, 1.5)'], 'r = 2v.'],
      ['Angle between (3, 4) and (4, 3) (3 s.f.)', '16.3°', ['45.0°', '90.0°', '36.9°'], 'cos θ = 24/25.'],
      ['Closest distance for the two ships example (3 s.f.)', '3.16 km', ['10.0 km', '2.00 km', '6.00 km'], '√10 at t = 1.5.'],
      ['Area of a parallelogram with a × b = (0, 0, 12)', '12', ['6', '144', '24'], 'Magnitude of the cross product.'],
    ],
  ),
  '3.14-3.15': M(
    [
      'Walks and paths: a walk may repeat vertices and edges; a trail repeats no edges; a path repeats no vertices; a cycle is a closed path.',
      'Eulerian circuits use every edge exactly once and exist when every vertex has even degree. Hamiltonian cycles visit every vertex exactly once.',
      'Worked example: if A squared has a 3 in row 1, column 2, there are three walks of length 2 from vertex 1 to vertex 2.',
      'Transition matrices for graphs: web pages linking to each other form a directed graph, the basis of Google’s PageRank algorithm.',
    ],
    [
      ['Eulerian circuit condition', 'Every vertex has even degree (connected graph).'],
      ['Semi-Eulerian trail', 'Exactly two vertices of odd degree.'],
      ['Hamiltonian cycle', 'Visits every vertex exactly once and returns to the start.'],
      ['Complete graph Kₙ edges', 'n(n − 1)/2.'],
    ],
    [
      ['A connected graph has all vertices of even degree. It has', 'An Eulerian circuit', ['No Eulerian trail', 'Exactly two odd vertices', 'No cycles'], 'Every edge can be used once, returning to the start.'],
      ['A complete graph K₆ has how many edges?', '15', ['30', '12', '6'], '6 × 5 ÷ 2.'],
      ['A route visiting every vertex once and returning is a', 'Hamiltonian cycle', ['Eulerian circuit', 'Tree', 'Walk of length 1'], 'It focuses on vertices, not edges.'],
      ['Entry (1, 2) of A³ gives', 'The number of walks of length 3 from vertex 1 to 2', ['The degree of vertex 1', 'The edge weight', 'The number of vertices'], 'Powers of the adjacency matrix count walks.'],
    ],
  ),
  '3.16': M(
    [
      'Worked Kruskal example: list edges by weight, then add the smallest one each time unless it forms a cycle, until all n vertices are joined by n − 1 edges.',
      'Chinese postman: find the odd-degree vertices, pair them to minimise the extra distance, and add that to the total weight of all edges. With two odd vertices, add the shortest path between them.',
      'Travelling salesman bounds: nearest neighbour gives an upper bound. For a lower bound, delete a vertex, find the minimum spanning tree of the rest, then add the two shortest edges from the deleted vertex.',
      'The optimal TSP tour length lies between the lower and upper bounds. Improve the bounds by trying different starting or deleted vertices.',
    ],
    [
      ['Edges in a spanning tree', 'n − 1 for n vertices.'],
      ['Chinese postman with two odd vertices', 'Total edge weight + shortest path between the odd vertices.'],
      ['TSP lower bound method', 'Delete a vertex, MST of the rest, add two shortest edges to it.'],
      ['Nearest neighbour algorithm', 'Gives an upper bound for the TSP.'],
    ],
    [
      ['A minimum spanning tree on 8 vertices has how many edges?', '7', ['8', '28', '6'], 'n − 1.'],
      ['Total edge weight 50, odd vertices B and E with shortest path 7. Chinese postman route', '57', ['50', '43', '64'], 'Repeat the shortest path once.'],
      ['Upper bound 45 and lower bound 38. The optimal TSP tour is', 'Between 38 and 45', ['Exactly 45', 'Less than 38', 'More than 45'], 'Bounds trap the optimum.'],
      ['Prim’s algorithm starts from', 'Any vertex and grows the tree by the cheapest edge', ['The largest edge', 'Odd vertices only', 'The adjacency matrix determinant'], 'Adds the cheapest connecting edge each time.'],
    ],
  ),
  '4.1-4.3': M(
    [
      'Worked example: estimate the mean of grouped data. Times of 0–10 min (8 people), 10–20 (12) and 20–30 (5). Mean ≈ (5 times 8 + 15 times 12 + 25 times 5) over 25 = 345 over 25 = 13.8 minutes.',
      'Comparing distributions: “Class A has a higher median (72 vs 65) so did better on average, but a larger IQR (18 vs 10) so its results were more varied.”',
      'Sampling techniques: simple random, convenience, systematic, quota and stratified. A stratified sample of 50 from 600 boys and 400 girls takes 30 boys and 20 girls.',
      'Bias can come from the sampling method, non-response or leading questions. Larger random samples reduce sampling error.',
    ],
    [
      ['Stratified sample size', '(Group size ÷ population) × sample size.'],
      ['Grouped mean', 'Use mid-interval values × frequencies.'],
      ['Comparing two data sets', 'Compare a measure of centre and a measure of spread in context.'],
      ['Quota sampling', 'Choose a set number from each group, not randomly.'],
    ],
    [
      ['Grouped data: 8 at 5, 12 at 15, 5 at 25. Mean', '13.8', ['15', '12.5', '14.2'], '345 ÷ 25.'],
      ['Stratified sample of 50 from 600 boys and 400 girls. Girls chosen', '20', ['30', '25', '40'], '400/1000 × 50.'],
      ['A larger IQR means data are', 'More spread out', ['Higher on average', 'Less spread out', 'Symmetrical'], 'IQR measures spread.'],
      ['Median of 2, 5, 7, 9, 11, 14', '8', ['7', '9', '8.5'], '(7 + 9) ÷ 2.'],
    ],
  ),
  '4.4': M(
    [
      'Worked example: hours of revision x and scores y give r = 0.87 and y = 6.2x + 35. Strong positive correlation. For 5 hours, predict about 66 marks.',
      'Extrapolation warning: predicting 20 hours gives 159 marks, impossible if the test is out of 100. Stay within the data range.',
      'r is only for linear relationships: a curved pattern can have r near 0 even with a strong relationship.',
      'Outliers can change r and the regression line a lot. Check the scatter diagram first.',
    ],
    [
      ['Strength of r', '|r| > 0.75 strong; 0.5–0.75 moderate; < 0.5 weak (guideline).'],
      ['Extrapolation', 'Predicting outside the data range — unreliable.'],
      ['Effect of outliers', 'Can distort r and the regression line.'],
      ['r for curved data', 'May be near 0 despite a strong non-linear relationship.'],
    ],
    [
      ['y = 6.2x + 35. Predicted score for 5 hours', '66', ['41.2', '31', '70'], '6.2 × 5 + 35.'],
      ['Predicting a score of 159 out of 100 shows the danger of', 'Extrapolation', ['Interpolation', 'Stratified sampling', 'Rounding'], 'The model breaks down.'],
      ['r = −0.85 describes', 'Strong negative correlation', ['Weak negative correlation', 'Strong positive correlation', 'No correlation'], 'Close to −1.'],
      ['Data forming a U-shape may have r close to', '0', ['1', '−1', '0.9'], 'r measures only linear relationships.'],
    ],
  ),
  '4.5-4.6': M(
    [
      'Worked example from a table: of 200 students, 80 study French, 50 study Spanish and 20 study both. P(French or Spanish) = (80 + 50 − 20) over 200 = 0.55.',
      'P(Spanish given French) = 20 over 80 = 0.25. Since P(Spanish) = 0.25 too, the events are independent here.',
      'Tree diagram without replacement: 4 red and 6 blue counters, two drawn. P(one of each) = 4/10 times 6/9 + 6/10 times 4/9 = 48 over 90 = 8 over 15.',
      'Expected frequency: if P(rain) = 0.3 each day, expect about 0.3 times 30 = 9 rainy days in a 30-day month.',
    ],
    [
      ['P(one of each) with two draws', 'Add both orders from the tree diagram.'],
      ['Independence check with conditional probability', 'P(A | B) = P(A).'],
      ['Mutually exclusive', 'P(A ∩ B) = 0.'],
      ['Sample space diagram', 'Grid showing all outcomes of two events.'],
    ],
    [
      ['80 French, 50 Spanish, 20 both, of 200. P(French or Spanish)', '0.55', ['0.65', '0.40', '0.10'], '110 ÷ 200.'],
      ['4 red, 6 blue; two drawn without replacement. P(one of each)', '8/15', ['12/25', '4/15', '1/2'], '2 × (4/10 × 6/9).'],
      ['P(rain) = 0.3 per day. Expected rainy days in 30', '9', ['3', '10', '0.3'], '0.3 × 30.'],
      ['Two dice are rolled. P(sum = 7)', '1/6', ['1/12', '7/36', '1/36'], '6 of 36 outcomes.'],
    ],
  ),
  '4.7-4.8': M(
    [
      'Worked example: 12% of phones from a factory are faulty. In a box of 20, X ~ B(20, 0.12). P(X = 3) is about 0.224 and P(X ≤ 2) is about 0.563.',
      'P(at least one faulty) = 1 − P(X = 0) = 1 − 0.88 to the 20, about 0.922.',
      'Expected value in games: a raffle ticket costs $5, with a 1 in 500 chance of winning $1,000. Expected gain = 2 − 5 = −$3, so on average players lose $3.',
      'Check that a table is a valid distribution: probabilities between 0 and 1 and adding to 1. Use this to find unknown probabilities.',
    ],
    [
      ['P(at least one)', '1 − P(none).'],
      ['Valid probability distribution', 'Each P between 0 and 1; total = 1.'],
      ['Expected gain', 'E(winnings) − cost.'],
      ['binomcdf', 'P(X ≤ k) for a binomial distribution.'],
    ],
    [
      ['X ~ B(20, 0.12). P(X ≥ 1) (3 s.f.)', '0.922', ['0.0776', '0.120', '0.880'], '1 − 0.88²⁰.'],
      ['A $5 ticket with a 1/500 chance of $1000. Expected gain', '−$3', ['$2', '−$5', '$0'], '1000/500 − 5.'],
      ['P(X = 1) = 0.2, P(X = 2) = k, P(X = 3) = 0.5. k =', '0.3', ['0.7', '0.5', '0.2'], 'Probabilities sum to 1.'],
      ['X ~ B(20, 0.12). E(X) =', '2.4', ['12', '0.12', '17.6'], 'np.'],
    ],
  ),
  '4.9': M(
    [
      'Worked example: bags of rice have mass N(1000, 15 squared) grams. P(mass < 980) = normalcdf with upper bound 980, about 0.0912, so about 9% are underweight.',
      'Worked example: the heaviest 2% weigh more than invNorm(0.98, 1000, 15), about 1030.8 g.',
      'Expected number: in a batch of 500 bags, about 500 times 0.0912, roughly 46 bags, are under 980 g.',
      'Normal models only approximate reality. Masses can’t be negative, and real data may be skewed.',
    ],
    [
      ['normalcdf inputs', 'Lower bound, upper bound, mean, standard deviation.'],
      ['invNorm input', 'Area to the left of the value.'],
      ['Expected number from a probability', 'n × P.'],
      ['Symmetry of the normal', 'P(X > μ + a) = P(X < μ − a).'],
    ],
    [
      ['Rice ~ N(1000, 15²). P(mass < 980) (3 s.f.)', '0.0912', ['0.909', '0.180', '0.0500'], 'normalcdf.'],
      ['Heaviest 2% of those bags weigh more than (1 d.p.)', '1030.8 g', ['1020.0 g', '1045.0 g', '1015.0 g'], 'invNorm(0.98, 1000, 15).'],
      ['500 bags, P(underweight) = 0.0912. Expected underweight', 'About 46', ['About 9', 'About 91', 'About 500'], '500 × 0.0912.'],
      ['X ~ N(60, 5²). P(X > 65) equals', 'P(X < 55)', ['P(X < 65)', 'P(X > 55)', '0.5'], 'Symmetry about the mean.'],
    ],
  ),
  '4.10': M(
    [
      'Worked example: two judges rank 5 dancers. Judge A: 1, 2, 3, 4, 5. Judge B: 2, 1, 4, 3, 5. The GDC gives Spearman’s coefficient 0.8, strong agreement.',
      'Tied ranks: values 12, 15, 15, 18 get ranks 1, 2.5, 2.5, 4. Each tied value takes the average of the ranks they share.',
      'Spearman vs Pearson: for y = e to the x, Spearman’s coefficient is 1, because the relationship is perfectly increasing, but Pearson’s r is less than 1, because it isn’t linear.',
      'Interpretation: close to 1 means strong agreement in order; close to −1 means reversed order; near 0 means little association.',
    ],
    [
      ['Tied ranks', 'Give each the average of the ranks they would occupy.'],
      ['Spearman = 1', 'Perfectly increasing (monotonic) relationship.'],
      ['Spearman = −1', 'Perfectly decreasing relationship.'],
      ['When to use Spearman', 'Ranked data or non-linear monotonic relationships.'],
    ],
    [
      ['Ranks A: 1, 2, 3, 4, 5 and B: 2, 1, 4, 3, 5. Spearman’s coefficient', '0.8', ['1', '0.5', '−0.8'], 'Strong agreement.'],
      ['Values 12, 15, 15, 18 receive ranks', '1, 2.5, 2.5, 4', ['1, 2, 3, 4', '1, 2, 2, 4', '1, 3, 3, 4'], 'Average the tied positions.'],
      ['For y = eˣ, Spearman’s coefficient is', '1', ['0', 'Less than 0', 'Undefined'], 'The relationship is perfectly increasing.'],
      ['Judges ranking in exactly opposite order give', '−1', ['0', '1', '0.5'], 'Perfect negative rank correlation.'],
    ],
  ),
  '4.11': M(
    [
      'Worked χ² independence example: H0: preferred sport is independent of gender. With a 2 by 3 table, degrees of freedom = 1 times 2 = 2. If the p-value is 0.018 at 5%, reject H0.',
      'Conclusion in context: “There is sufficient evidence at the 5% level that sport preference depends on gender.”',
      'Goodness of fit: test whether a die is fair. Expected frequencies are equal. Degrees of freedom = number of categories − 1.',
      'Validity: all expected frequencies should be at least 5. If not, combine categories.',
    ],
    [
      ['χ² goodness of fit df', 'Number of categories − 1 (for a given distribution).'],
      ['Expected frequency condition', 'All expected frequencies ≥ 5.'],
      ['Conclusion when p > significance level', 'Do not reject H₀.'],
      ['t-test', 'Compares two means, assuming normal data.'],
    ],
    [
      ['A goodness of fit test for a six-sided die has df =', '5', ['6', '1', '36'], '6 − 1.'],
      ['p = 0.12 at the 5% level. Conclusion', 'Do not reject H₀', ['Reject H₀', 'Accept H₁', 'The test failed'], 'p > 0.05.'],
      ['If an expected frequency is 3, you should', 'Combine categories', ['Ignore it', 'Double the sample', 'Use a larger df'], 'The test needs expected values ≥ 5.'],
      ['Degrees of freedom for a 2 × 3 table', '2', ['6', '5', '3'], '(2 − 1)(3 − 1).'],
    ],
  ),
  '4.12-4.13': M(
    [
      'Worked example: data on the cooling of coffee fits an exponential model with R squared = 0.99 and a quadratic with R squared = 0.95. The exponential fits better and suits the context.',
      'The sum of square residuals, SSres, measures total squared distance from data points to the model. Smaller SSres means a better fit for the same data.',
      'Reliability tests: test-retest checks consistency over time; parallel forms compare two versions of a test. Validity: content validity asks if a test covers the right material; criterion validity compares with an established measure.',
      'Grouping continuous data for a χ² test: choose class intervals so each expected frequency is at least 5.',
    ],
    [
      ['Test-retest reliability', 'Same test given twice gives consistent results.'],
      ['Content validity', 'A test measures all relevant parts of what it claims to.'],
      ['SSres', 'Sum of square residuals; smaller means better fit.'],
      ['Residual', 'Observed value − predicted value.'],
    ],
    [
      ['Exponential R² = 0.99, quadratic R² = 0.95. Better fit', 'Exponential', ['Quadratic', 'They are equal', 'Neither'], 'Higher R² for the same data.'],
      ['Observed 12, predicted 10. The residual is', '2', ['−2', '22', '1.2'], 'Observed − predicted.'],
      ['Giving the same survey twice to check consistency tests', 'Reliability', ['Validity', 'Bias', 'Significance'], 'Test-retest method.'],
      ['A maths test with no algebra questions lacks', 'Content validity', ['Reliability', 'Sample size', 'Significance'], 'It doesn’t cover all content.'],
    ],
  ),
  '4.14-4.16': M(
    [
      'Worked example: X ~ N(50, 8 squared). The mean of a sample of 16 has standard deviation 8 over root 16 = 2, so X̄ ~ N(50, 2 squared).',
      'P(X̄ > 53) = normalcdf(53, large number, 50, 2), about 0.0668.',
      'Confidence interval example: a sample of 40 has mean 72.3 and known σ = 6. The 95% interval is 72.3 ± 1.96 times 6 over root 40, about 70.4 to 74.2.',
      'Linear combinations: if X and Y are independent, E(X + Y) = E(X) + E(Y) and Var(X + Y) = Var(X) + Var(Y). Var(X − Y) is also Var(X) + Var(Y).',
    ],
    [
      ['Standard deviation of X̄', 'σ ÷ √n.'],
      ['95% CI with known σ', 'x̄ ± 1.96σ/√n.'],
      ['Var(X − Y), independent', 'Var(X) + Var(Y).'],
      ['Unbiased variance estimate', 's²ₙ₋₁ = n/(n − 1) × s²ₙ.'],
    ],
    [
      ['X ~ N(50, 8²), n = 16. SD of X̄', '2', ['8', '0.5', '4'], '8 ÷ √16.'],
      ['Using that, P(X̄ > 53) (3 s.f.)', '0.0668', ['0.354', '0.933', '0.500'], 'z = 1.5.'],
      ['x̄ = 72.3, σ = 6, n = 40. 95% CI (1 d.p.)', '70.4 to 74.2', ['66.3 to 78.3', '71.3 to 73.3', '60.5 to 84.1'], '1.96 × 6/√40 ≈ 1.86.'],
      ['Var(X) = 9, Var(Y) = 16, independent. SD of X − Y', '5', ['7', '25', '1'], '√25.'],
    ],
  ),
  '4.17': M(
    [
      'Worked example: a shop gets 3 complaints a day on average. X ~ Po(3). P(X = 0) = e to the −3, about 0.0498. P(X ≤ 2) is about 0.423.',
      'Scaling: in a 5-day week, the number of complaints is Po(15). P(more than 20) = 1 − P(X ≤ 20), about 0.0830.',
      'Combining: if one shop has Po(3) and another Po(2) complaints, independently, the total is Po(5).',
      'Check the Poisson conditions: events are random, independent, occur at a constant average rate, and can’t happen simultaneously.',
    ],
    [
      ['P(X = 0) for Po(m)', 'e^(−m).'],
      ['Poisson approximation check', 'Mean ≈ variance in the data.'],
      ['Po(3) over 5 days', 'Po(15).'],
      ['Po(a) + Po(b), independent', 'Po(a + b).'],
    ],
    [
      ['X ~ Po(3). P(X = 0) (3 s.f.)', '0.0498', ['0.149', '0.224', '0.00'], 'e⁻³.'],
      ['3 complaints a day. Distribution for a 5-day week', 'Po(15)', ['Po(3)', 'Po(8)', 'B(5, 3)'], 'Scale the mean.'],
      ['Shops with Po(3) and Po(2) independently. Total', 'Po(5)', ['Po(6)', 'Po(1)', 'B(5, 0.5)'], 'Means add.'],
      ['Data with mean 4.1 and variance 4.0 suggest', 'A Poisson model may fit', ['A normal model only', 'No model fits', 'A binomial with p = 1'], 'Poisson has mean = variance.'],
    ],
  ),
  '4.18': M(
    [
      'Worked example: a coin is tested for bias towards heads. H0: p = 0.5, H1: p > 0.5, with 20 tosses at 5%. The critical region is X ≥ 15, because P(X ≥ 15) is about 0.021 but P(X ≥ 14) is about 0.058.',
      'The actual significance level is P(X ≥ 15) = 0.021, which is the probability of a type I error.',
      'Type II error: failing to reject H0 when it is false. If the coin actually has p = 0.7, P(type II) = P(X ≤ 14 given p = 0.7), about 0.584.',
      'Testing a correlation: H0: ρ = 0 against H1: ρ > 0, using the p-value from the GDC for Pearson’s r.',
    ],
    [
      ['Critical value', 'The boundary of the critical region.'],
      ['Actual significance level', 'P(test statistic in the critical region | H₀ true).'],
      ['P(type II error)', 'P(not in critical region | H₁ true).'],
      ['Testing correlation', 'H₀: ρ = 0.'],
    ],
    [
      ['20 tosses, H₁: p > 0.5 at 5%. Critical region', 'X ≥ 15', ['X ≥ 14', 'X ≥ 10', 'X ≤ 5'], 'P(X ≥ 15) ≈ 0.021 < 0.05.'],
      ['Failing to reject a false H₀ is a', 'Type II error', ['Type I error', 'Correct decision', 'Critical value'], 'A missed effect.'],
      ['The actual significance level of that coin test is about', '0.021', ['0.05', '0.058', '0.5'], 'P(X ≥ 15 | p = 0.5).'],
      ['To test whether two variables are positively correlated, H₀ is', 'ρ = 0', ['ρ > 0', 'ρ = 1', 'r = 0.5'], 'No correlation in the population.'],
    ],
  ),
  '4.19': M(
    [
      'Worked example: a gym member either attends (A) or skips (S) each week. If A, next week A with 0.8; if S, next week A with 0.4. T = [[0.8, 0.4], [0.2, 0.6]].',
      'Starting with an attending member, s0 = (1, 0). After one week: (0.8, 0.2). After two weeks: T squared s0 = (0.72, 0.28).',
      'Steady state: solve 0.8a + 0.4(1 − a) = a, giving a = two thirds. In the long run, a member attends two thirds of weeks.',
      'Markov chains model weather, brand switching, and population movement between regions.',
    ],
    [
      ['State after 2 steps', 'T²s₀.'],
      ['Steady state equation', 'Ts = s, with entries summing to 1.'],
      ['Regular Markov chain', 'Some power of T has all positive entries; has a unique steady state.'],
      ['Initial state vector', 'Probabilities of each state at the start.'],
    ],
    [
      ['T = [[0.8, 0.4], [0.2, 0.6]], s₀ = (1, 0). s₁ =', '(0.8, 0.2)', ['(0.4, 0.6)', '(1, 0)', '(0.6, 0.4)'], 'First column of T.'],
      ['Using the same T, s₂ =', '(0.72, 0.28)', ['(0.64, 0.36)', '(0.8, 0.2)', '(0.56, 0.44)'], 'T × (0.8, 0.2).'],
      ['The long-run proportion attending is', '2/3', ['0.8', '1/2', '0.4'], 'Solve Ts = s.'],
      ['A steady state vector s satisfies', 'Ts = s', ['Ts = 0', 'T = s', 's = 2Ts'], 'It doesn’t change after a step.'],
    ],
  ),
  '5.1-5.4': M(
    [
      'Worked example: the height of a plant is h(t) = 0.5t squared + 2t cm after t weeks. h′(t) = t + 2. At t = 4, it grows at 6 cm per week.',
      'Tangent example: y = x squared − 3x at x = 1. y = −2 and gradient −1, so the tangent is y = −x − 1.',
      'Increasing and decreasing: f(x) = x cubed − 12x has f′(x) = 3x squared − 12, which is negative for −2 < x < 2, so f decreases there.',
      'In context, units of the derivative are output units per input unit, like cm per week or dollars per item.',
    ],
    [
      ['Units of a derivative', 'Output units per input unit.'],
      ['Rate of change at a point', 'Value of the derivative there.'],
      ['Tangent line', 'y − y₁ = m(x − x₁) with m = f′(x₁).'],
      ['Decreasing interval', 'Where f′(x) < 0.'],
    ],
    [
      ['h(t) = 0.5t² + 2t. Growth rate at t = 4', '6 cm/week', ['16 cm/week', '4 cm/week', '10 cm/week'], 'h′(4) = 4 + 2.'],
      ['Tangent to y = x² − 3x at x = 1', 'y = −x − 1', ['y = x − 3', 'y = −x + 1', 'y = −2x'], 'Point (1, −2), gradient −1.'],
      ['f(x) = x³ − 12x is decreasing for', '−2 < x < 2', ['x > 2', 'x < −2', 'All x'], '3x² − 12 < 0.'],
      ['P(x) is profit in $ and x is items. Units of P′(x)', '$ per item', ['Items per $', '$', 'Items'], 'Output per input.'],
    ],
  ),
  '5.5': M(
    [
      'Worked example: water flows into a tank at r(t) = 3t + 2 litres per minute. The volume added in the first 4 minutes is the integral from 0 to 4, which is 1.5 times 16 + 8 = 32 litres.',
      'Worked example: f′(x) = 3x squared − 4 and f(2) = 5. f(x) = x cubed − 4x + c, and 8 − 8 + c = 5, so c = 5.',
      'Area on the GDC: find the area under y = 4 − x squared between x = −2 and x = 2 using the integral function: 32 over 3, about 10.7.',
      'Interpret areas with units: area under a speed–time graph gives distance; under a rate graph gives a total amount.',
    ],
    [
      ['Area under a rate graph', 'Total amount accumulated.'],
      ['Finding c', 'Substitute a known point after integrating.'],
      ['∫ from a to b', 'Evaluate at b minus evaluate at a.'],
      ['GDC integral', 'Use fnInt or ∫f(x)dx for definite integrals.'],
    ],
    [
      ['Flow rate 3t + 2 L/min. Volume in first 4 minutes', '32 L', ['14 L', '24 L', '40 L'], '∫₀⁴(3t + 2)dt.'],
      ['f′(x) = 3x² − 4 and f(2) = 5. f(x) =', 'x³ − 4x + 5', ['x³ − 4x', '6x', 'x³ + 5'], 'c = 5.'],
      ['Area under y = 4 − x² from −2 to 2 (3 s.f.)', '10.7', ['16.0', '8.00', '5.33'], '32/3.'],
      ['The area under a speed–time graph represents', 'Distance travelled', ['Acceleration', 'Speed', 'Time'], 'Speed × time.'],
    ],
  ),
  '5.6-5.7': M(
    [
      'Worked example: an open box from a 30 cm square sheet with corners of side x cut out. V = x(30 − 2x) squared. V′ = 0 at x = 5, giving a maximum volume of 5 times 400 = 2,000 cm cubed.',
      'Domain in optimisation: here 0 < x < 15. Always check the answer is inside the domain.',
      'Worked example of minimum cost: C(x) = 2x + 800 over x for a delivery route. C′(x) = 2 − 800 over x squared = 0 gives x = 20, minimum cost 80.',
      'Justify max or min with the sign of f′ on either side, or with f″ at HL. State the answer in context with units.',
    ],
    [
      ['Open box volume', 'V = x(L − 2x)² for a square sheet of side L.'],
      ['Domain for a box cut-out', '0 < x < L/2.'],
      ['Justifying a maximum', 'f′ changes from positive to negative.'],
      ['Optimisation answer', 'State the value and what it means in context.'],
    ],
    [
      ['Box from a 30 cm sheet: V = x(30 − 2x)². Maximum volume', '2000 cm³', ['1800 cm³', '2250 cm³', '1000 cm³'], 'x = 5.'],
      ['C(x) = 2x + 800/x has a minimum at x =', '20', ['40', '10', '400'], '2 = 800/x².'],
      ['The minimum value of that C(x)', '80', ['40', '60', '100'], '40 + 40.'],
      ['If f′ changes from + to −, the point is a', 'Local maximum', ['Local minimum', 'Point of inflection', 'Asymptote'], 'The graph rises then falls.'],
    ],
  ),
  '5.8': M(
    [
      'Worked example: estimate the area under a curve from data: x = 0, 2, 4, 6 with y = 3, 7, 8, 5. h = 2, so area ≈ 1 times (3 + 5 + 2 times (7 + 8)) = 38.',
      'Real use: surveyors estimate the area of an irregular field or the volume of a river cross-section using measured depths.',
      'Error: compare with the exact integral when possible. The percentage error shows how good the approximation is.',
      'Concavity decides the direction of error: trapezia sit above a concave-up curve, overestimating, and below a concave-down curve, underestimating.',
    ],
    [
      ['Trapezoidal rule formula', '(h/2)[y₀ + yₙ + 2(y₁ + … + yₙ₋₁)].'],
      ['h', '(b − a) ÷ n.'],
      ['Concave down curve', 'The trapezoidal rule underestimates.'],
      ['Use with data tables', 'Estimate areas from measured values.'],
    ],
    [
      ['x = 0, 2, 4, 6 and y = 3, 7, 8, 5. Trapezoidal estimate', '38', ['46', '23', '76'], '1 × (3 + 5 + 2(15)).'],
      ['For a concave-down curve, the trapezoidal rule', 'Underestimates', ['Overestimates', 'Is exact', 'Cannot be used'], 'Trapezia sit below the curve.'],
      ['Interval 0 to 3 with 6 strips. h =', '0.5', ['2', '3', '6'], '3 ÷ 6.'],
      ['Estimate 20, exact 19. Percentage error (3 s.f.)', '5.26%', ['5.00%', '1.00%', '95.0%'], '1 ÷ 19 × 100.'],
    ],
  ),
  '5.9-5.10': M(
    [
      'Worked chain rule example: C(t) = 50e to the −0.2t mg of a drug. C′(t) = −10e to the −0.2t. At t = 5, the concentration falls at 10e to the −1, about 3.68 mg per hour.',
      'Worked product rule example: d/dx of x ln x = ln x + 1.',
      'Related rates: a square’s side grows at 0.5 cm per second. dA/dt = 2s ds/dt. When s = 10, dA/dt = 10 cm squared per second.',
      'Points of inflection mark where the rate of change is greatest or least, like the fastest spread of a disease in a logistic model.',
    ],
    [
      ['d/dx (eᵏˣ)', 'keᵏˣ.'],
      ['d/dx (x ln x)', 'ln x + 1.'],
      ['Related rates for a square', 'dA/dt = 2s × ds/dt.'],
      ['Inflection in a logistic model', 'Where growth is fastest.'],
    ],
    [
      ['C = 50e^(−0.2t). Rate at t = 5 (3 s.f.)', '−3.68 mg/h', ['−10.0 mg/h', '18.4 mg/h', '−0.200 mg/h'], 'C′ = −10e^(−0.2t).'],
      ['d/dx (x ln x) =', 'ln x + 1', ['1/x', 'ln x', 'x/ln x'], 'Product rule.'],
      ['A square’s side grows at 0.5 cm/s. dA/dt when s = 10', '10 cm²/s', ['5 cm²/s', '20 cm²/s', '100 cm²/s'], '2 × 10 × 0.5.'],
      ['d/dx (cos 2x) =', '−2 sin 2x', ['2 sin 2x', '−sin 2x', 'sin 2x'], 'Chain rule.'],
    ],
  ),
  '5.11-5.12': M(
    [
      'Worked substitution example: the integral of 2x(x squared + 3) to the 4 is (x squared + 3) to the 5 over 5 + c.',
      'Worked volume example: rotate y = root(x) from x = 0 to 9 about the x-axis. V = π times the integral of x from 0 to 9 = 40.5π, about 127.',
      'Area with respect to y: the region between x = y squared, the y-axis and y = 3 has area 9.',
      'Context: volumes of revolution model vases, bowls and bottles designed from a profile curve.',
    ],
    [
      ['∫ f′(x)[f(x)]ⁿ dx', '[f(x)]ⁿ⁺¹/(n + 1) + c.'],
      ['∫ eᵏˣ dx', 'eᵏˣ/k + c.'],
      ['∫ sin x dx', '−cos x + c.'],
      ['Volume model use', 'Designing vases, bowls and bottles.'],
    ],
    [
      ['∫ 2x(x² + 3)⁴ dx =', '(x² + 3)⁵/5 + c', ['(x² + 3)⁵ + c', '2(x² + 3)⁵ + c', '(x² + 3)⁴/4 + c'], 'Reverse chain rule.'],
      ['Rotate y = √x, 0 ≤ x ≤ 9, about the x-axis. V =', '40.5π', ['81π', '9π', '27π'], 'π∫x dx.'],
      ['Area between x = y², the y-axis and y = 3', '9', ['27', '3', '4.5'], '∫₀³ y² dy.'],
      ['∫ sin x dx =', '−cos x + c', ['cos x + c', '−sin x + c', 'sin x + c'], 'Derivative of −cos x is sin x.'],
    ],
  ),
  '5.13': M(
    [
      'Worked example: v(t) = 6t − 3t squared m/s for 0 ≤ t ≤ 3. At rest when t = 0 or t = 2. Displacement from 0 to 3 is the integral of v: 27 − 27 = 0 m.',
      'Distance travelled: the integral of |v| from 0 to 3 is 4 + 4 = 8 m. The particle goes forward 4 m, then back 4 m.',
      'Acceleration a = 6 − 6t. At t = 1, a = 0 and velocity is at its maximum, 3 m/s.',
      'Using the GDC: graph v(t) and integrate |v(t)| directly to find the distance.',
    ],
    [
      ['Maximum velocity', 'Where a = 0 and a changes sign.'],
      ['Returning to the start', 'Displacement = 0.'],
      ['Speed', '|v|.'],
      ['Velocity from acceleration', 'v = ∫a dt + c.'],
    ],
    [
      ['v = 6t − 3t². Displacement from 0 to 3', '0 m', ['8 m', '4 m', '3 m'], '[3t² − t³] from 0 to 3.'],
      ['Distance travelled from 0 to 3', '8 m', ['0 m', '4 m', '12 m'], '4 m forward and 4 m back.'],
      ['Maximum velocity for 0 ≤ t ≤ 3', '3 m/s', ['6 m/s', '0 m/s', '9 m/s'], 'At t = 1.'],
      ['a = 2 and v(0) = 3. v(t) =', '2t + 3', ['2t', '3t + 2', 't² + 3'], 'Integrate and use v(0).'],
    ],
  ),
  '5.14-5.15': M(
    [
      'Worked example: dy/dx = y over x, with y(1) = 2. Separate: dy over y = dx over x. ln|y| = ln|x| + c, so y = 2x.',
      'Worked growth example: dP/dt = 0.03P with P(0) = 5,000. P = 5000e to the 0.03t. After 10 years, P is about 6,749.',
      'Slope field reading: where the segments are horizontal, dy/dx = 0; these form equilibrium solutions, like y = 0 in dy/dx = ky.',
      'Newton’s law of cooling as a DE: dT/dt = −k(T − 20). The solution is T = 20 + Ae to the −kt.',
    ],
    [
      ['Equilibrium solution', 'A constant solution where dy/dx = 0.'],
      ['Solution of dT/dt = −k(T − Tₐ)', 'T = Tₐ + Ae^(−kt).'],
      ['Separable DE steps', 'Separate, integrate both sides, apply the initial condition.'],
      ['Horizontal slope field segments', 'dy/dx = 0 at those points.'],
    ],
    [
      ['dy/dx = y/x with y(1) = 2. y =', '2x', ['x + 1', 'x²', '2eˣ'], 'ln y = ln x + c.'],
      ['dP/dt = 0.03P, P(0) = 5000. P after 10 years (nearest whole)', '6749', ['6500', '5150', '15 000'], '5000e^0.3.'],
      ['dy/dx = y(1 − y) has equilibrium solutions', 'y = 0 and y = 1', ['y = 1 only', 'y = 0.5', 'None'], 'Where dy/dx = 0.'],
      ['The solution of dT/dt = −k(T − 20) approaches', '20', ['0', 'k', 'Infinity'], 'The room temperature.'],
    ],
  ),
  '5.16-5.18': M(
    [
      'Worked Euler example: dy/dx = x − y, y(0) = 1, h = 0.1. y₁ = 1 + 0.1(0 − 1) = 0.9. y₂ = 0.9 + 0.1(0.1 − 0.9) = 0.82.',
      'Coupled predator–prey example: dx/dt = 0.5x − 0.02xy and dy/dt = −0.3y + 0.01xy. Euler’s method updates x and y together at each step.',
      'Phase portraits for dX/dt = AX: real positive eigenvalues give an unstable node, trajectories moving away; real negative give a stable node; opposite signs give a saddle; purely imaginary give closed loops.',
      'Second-order DEs, like x″ + 4x = 0, can be written as a coupled system with v = x′, giving eigenvalues ±2i and oscillation with period π.',
    ],
    [
      ['Saddle point', 'Eigenvalues of opposite sign.'],
      ['Stable node', 'Both eigenvalues real and negative.'],
      ['Spiral', 'Complex eigenvalues with non-zero real part.'],
      ['Converting a second-order DE', 'Let v = dx/dt to create a coupled system.'],
    ],
    [
      ['dy/dx = x − y, y(0) = 1, h = 0.1. y₂ =', '0.82', ['0.81', '0.9', '0.8'], 'y₁ = 0.9, then 0.9 − 0.08.'],
      ['Eigenvalues 3 and −2 give a', 'Saddle point', ['Stable node', 'Unstable node', 'Centre'], 'Opposite signs.'],
      ['Eigenvalues −1 and −4 give a', 'Stable node', ['Saddle', 'Unstable node', 'Spiral'], 'Both negative.'],
      ['Eigenvalues −1 ± 2i give trajectories that', 'Spiral inwards', ['Spiral outwards', 'Move straight out', 'Form closed loops'], 'Negative real part means decay.'],
    ],
  ),
};

export default more;
