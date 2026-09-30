import type { MoreContent } from '../../types';
import { M } from '../helpers';

// Lesson 2 (worked examples, real-world cases, common mistakes, exam technique) plus extra
// flashcards and questions for every Business Management chapter.
const more: Record<string, MoreContent> = {
  '1.1': M(
    [
      'Business functions work together: human resources manages people, finance and accounts manages money, marketing finds and keeps customers, and operations produces the goods or services.',
      'Value is added when the selling price is higher than the cost of bought-in materials. A coffee shop turns $0.50 of beans and milk into a $4 latte through skills, location and brand.',
      'Economies go through sectoral change: as countries develop, employment moves from the primary sector to the secondary and then to the tertiary and quaternary sectors.',
      'Exam tip: when a case study asks about a start-up’s problems, name specific ones, such as lack of finance, cash flow, building a customer base or competition, and link each to the case.',
    ],
    [
      ['Quaternary sector', 'Knowledge-based activities such as research, IT and consultancy.'],
      ['Added value', 'Selling price minus the cost of bought-in materials.'],
      ['Sectoral change', 'The shift in output and jobs between primary, secondary and tertiary sectors.'],
      ['Intrapreneur', 'An employee who acts like an entrepreneur inside an existing organization.'],
    ],
    [
      ['A café sells a sandwich for $6 made with $2 of ingredients. The added value is…', '$4', ['$8', '$2', '$6'], 'Added value = price − cost of bought-in materials.'],
      ['As economies develop, employment usually shifts towards…', 'The tertiary sector', ['The primary sector', 'Agriculture', 'Mining'], 'This is called deindustrialisation or sectoral change.'],
      ['Which business function recruits and trains staff?', 'Human resources', ['Marketing', 'Operations', 'Finance'], 'HR manages the workforce.'],
      ['A car factory is in the…', 'Secondary sector', ['Primary sector', 'Tertiary sector', 'Quaternary sector'], 'It manufactures goods from materials.'],
    ],
  ),
  '1.2': M(
    [
      'Choosing a legal form is a trade-off between control, risk and access to finance. A sole trader keeps all profit and control but carries unlimited liability.',
      'Going public through an initial public offering raises large finance, but the firm must publish accounts, can face takeover, and may be pushed towards short-term profits.',
      'Real-world case: the John Lewis Partnership in the UK is owned by its employees, who share profits. It shows how a cooperative-style business can operate at large scale.',
      'Exam tip: recommend a legal form by weighing two or three factors from the case: the owner’s attitude to risk, the finance needed and how much control they want to keep.',
    ],
    [
      ['Initial public offering (IPO)', 'When a company first sells shares to the public on a stock exchange.'],
      ['Partnership deed', 'A legal agreement setting out partners’ roles and profit shares.'],
      ['Non-governmental organization (NGO)', 'A non-profit group independent of government, e.g. Red Cross.'],
      ['Public sector organization', 'Owned and controlled by the government.'],
    ],
    [
      ['A key disadvantage of becoming a publicly held company is…', 'Risk of takeover and loss of control', ['Unlimited liability', 'No access to finance', 'Owners must share nothing'], 'Anyone can buy shares, including rivals.'],
      ['Who owns a cooperative?', 'Its members', ['The government', 'Outside shareholders only', 'One sole trader'], 'Members such as workers or customers own and run it.'],
      ['Which legal form is best for someone who wants full control and has little capital?', 'Sole trader', ['Publicly held company', 'Cooperative', 'Multinational'], 'It is simple to set up and the owner decides everything.'],
      ['A partnership deed sets out…', 'How profits and responsibilities are shared', ['The firm’s share price', 'Its tax rate', 'Its marketing mix'], 'It avoids disputes between partners.'],
    ],
  ),
  '1.3': M(
    [
      'The hierarchy goes from vision to mission, then aims, strategic objectives, tactical objectives, and finally operational objectives for daily work.',
      'Worked example: a strategic objective could be “become the top electric scooter brand in Europe by 2030”. A tactical objective: “open 20 stores in Germany in two years”. Operational: “reply to all emails within 24 hours”.',
      'Objectives change when the internal or external environment changes: a recession may shift the aim from growth to survival.',
      'Real-world case: Patagonia’s mission, “We’re in business to save our home planet”, drives decisions like donating profits to environmental causes.',
    ],
    [
      ['Tactical objective', 'Medium-term goal for a department or area.'],
      ['Operational objective', 'Short-term, day-to-day target for teams or individuals.'],
      ['Why objectives change', 'Changes in the economy, competition, technology, leadership or the firm’s stage.'],
      ['Aims vs objectives', 'Aims are broad intentions; objectives are specific and measurable.'],
    ],
    [
      ['“Process all orders within 24 hours” is…', 'An operational objective', ['A vision statement', 'A strategic objective', 'A mission statement'], 'It is a short-term, day-to-day target.'],
      ['During a severe recession a firm’s main objective may become…', 'Survival', ['Rapid expansion', 'Market leadership', 'Diversification'], 'Objectives adapt to the external environment.'],
      ['Which is the “M” in SMART?', 'Measurable', ['Motivating', 'Managed', 'Market-based'], 'Objectives must be measurable to track progress.'],
      ['A mission statement mainly describes…', 'The purpose of the organization', ['Next month’s sales target', 'Its balance sheet', 'Its share price'], 'It explains why the business exists.'],
    ],
  ),
  '1.4': M(
    [
      'Mendelow’s matrix maps stakeholders on power and interest: keep satisfied, high power and low interest; manage closely, high power and high interest; keep informed, low power and high interest; monitor, low on both.',
      'Worked example: a supermarket wants to open 24 hours. Local residents, high interest but low power, should be kept informed; the local council, high power, must be managed closely.',
      'Stakeholder conflict is often resolved by compromise, negotiation or prioritising the most powerful. Some firms adopt a stakeholder approach rather than focusing only on shareholders.',
      'Exam tip: name specific stakeholders from the case, explain how each is affected, and show where interests conflict or overlap.',
    ],
    [
      ['Keep satisfied (Mendelow)', 'High power, low interest stakeholders.'],
      ['Keep informed (Mendelow)', 'Low power, high interest stakeholders.'],
      ['Shareholder vs stakeholder approach', 'Maximise returns for owners vs balance all groups’ interests.'],
      ['Mutual benefit', 'When a decision helps several stakeholders at once, e.g. training.'],
    ],
    [
      ['Local residents opposing a new factory, with little influence, should be…', 'Kept informed', ['Managed closely', 'Ignored', 'Kept satisfied'], 'They are high interest but low power.'],
      ['Which is an internal stakeholder?', 'Managers', ['Suppliers', 'Local community', 'Government'], 'Internal stakeholders work in or own the business.'],
      ['Shareholders and employees may conflict over…', 'Wage increases that reduce profits', ['Company name', 'Office colour', 'Tax rates'], 'Higher wages raise costs and reduce dividends.'],
      ['Stakeholder mapping is useful because it helps a firm…', 'Prioritise which groups to engage with', ['Calculate profit', 'Set prices', 'Hire staff'], 'It shows power and interest levels.'],
    ],
  ),
  '1.5': M(
    [
      'Types of external growth: mergers and acquisitions, takeovers, joint ventures, strategic alliances and franchising. Each gives speed but costs money and risks culture clash.',
      'Integration types: horizontal, a firm buying a competitor; vertical backward, buying a supplier; vertical forward, buying a customer or retailer; and conglomerate, buying an unrelated firm.',
      'Real-world case: Disney’s acquisition of Pixar in 2006 was a successful horizontal integration, combining Disney’s distribution with Pixar’s animation talent.',
      'Evaluate growth: bigger isn’t always better. Diseconomies of scale, loss of control and culture clash can outweigh economies of scale. Small firms can compete through flexibility.',
    ],
    [
      ['Horizontal integration', 'Joining with a firm at the same stage of production, e.g. a competitor.'],
      ['Backward vertical integration', 'Buying a supplier.'],
      ['Conglomerate merger', 'Joining with a firm in an unrelated industry.'],
      ['Joint venture', 'Two firms create a new, jointly owned business for a project.'],
    ],
    [
      ['A chocolate maker buying a cocoa farm is…', 'Backward vertical integration', ['Forward vertical integration', 'Horizontal integration', 'Conglomerate'], 'It buys a supplier earlier in the supply chain.'],
      ['A car maker buying a rival car maker is…', 'Horizontal integration', ['Backward vertical integration', 'Conglomerate', 'A joint venture'], 'Both firms are at the same stage.'],
      ['A main benefit of a strategic alliance over a merger is that…', 'Firms cooperate without losing their independence', ['It creates one new company', 'It removes all competition', 'It costs nothing'], 'Firms work together on specific goals but stay separate.'],
      ['Franchising allows a business to grow…', 'Quickly with other people’s capital', ['Only through retained profit', 'Without any brand', 'By buying competitors'], 'Franchisees pay to use the brand and fund new outlets.'],
    ],
  ),
  '1.6': M(
    [
      'Real-world case: when Toyota opened factories in the UK, it created thousands of jobs and brought lean production methods that local suppliers adopted.',
      'MNCs may use transfer pricing to shift profits to low-tax countries, which reduces tax paid in host countries. Global tax agreements, like the OECD minimum corporate tax, aim to limit this.',
      'Host countries may offer incentives, like tax breaks or free land, to attract MNCs, but must weigh these costs against benefits such as jobs and technology transfer.',
      'Exam tip: evaluate the impact of an MNC from the host country’s viewpoint and from the MNC’s viewpoint, and consider short- and long-term effects.',
    ],
    [
      ['Transfer pricing', 'Setting internal prices between subsidiaries to shift profits to low-tax countries.'],
      ['Technology transfer', 'Spread of knowledge and skills from MNCs to local firms and workers.'],
      ['Host country', 'The country where an MNC operates a subsidiary.'],
      ['Home country', 'The country where an MNC has its headquarters.'],
    ],
    [
      ['An MNC shifting profits to a low-tax country uses…', 'Transfer pricing', ['Price skimming', 'Franchising', 'Offshoring'], 'Internal prices move profits to where tax is lowest.'],
      ['Local workers learning new skills from an MNC is an example of…', 'Technology transfer', ['Brain drain', 'Transfer pricing', 'Dumping'], 'Knowledge spreads to the host country.'],
      ['Why might host governments offer tax breaks to MNCs?', 'To attract investment and jobs', ['To reduce competition', 'To raise tariffs', 'To increase imports'], 'Incentives compete for foreign investment.'],
      ['A risk to host countries from MNCs is that…', 'Profits may be sent back to the home country', ['Unemployment always rises', 'Exports stop', 'Taxes rise automatically'], 'This is called profit repatriation.'],
    ],
  ),
  '2.1': M(
    [
      'Workforce planning forecasts the number and type of staff needed, considering demographic change, migration, flexible working patterns and the firm’s objectives.',
      'The recruitment process: identify the vacancy, write a job description and person specification, advertise, shortlist, interview or test, then appoint and induct.',
      'Training types: induction, on-the-job, like mentoring or job shadowing, off-the-job, like courses, and cognitive or behavioural training. Appraisals review performance and development.',
      'Changing work patterns include teleworking, flexitime, portfolio careers, gig work and outsourcing. They cut costs but can reduce loyalty and job security.',
    ],
    [
      ['Job description', 'Describes the tasks and responsibilities of a role.'],
      ['Person specification', 'Describes the skills and qualities needed for a role.'],
      ['Appraisal', 'Formal review of an employee’s performance.'],
      ['Gig economy', 'Short-term, task-based work often arranged through apps.'],
    ],
    [
      ['A document listing the qualities an ideal candidate needs is a…', 'Person specification', ['Job description', 'Contract', 'Appraisal'], 'It describes the person rather than the job.'],
      ['Which is off-the-job training?', 'A college course', ['Mentoring', 'Job shadowing', 'Coaching at work'], 'It happens away from the workplace.'],
      ['A drawback of gig-economy contracts for workers is…', 'Lack of job security and benefits', ['Too much holiday', 'Guaranteed hours', 'Higher pensions'], 'Gig workers usually lack sick pay and stability.'],
      ['High labour turnover usually leads to…', 'Higher recruitment and training costs', ['Lower costs', 'Better morale', 'More experienced staff'], 'Replacing staff is expensive.'],
    ],
  ),
  '2.2': M(
    [
      'Levels of hierarchy are the layers of management. A chain of command is the path orders travel down; bureaucracy is the rules and procedures that slow decisions.',
      'Delayering removes levels of management. It cuts costs and speeds communication, but increases managers’ spans of control and can reduce promotion opportunities.',
      'Charles Handy’s shamrock organization has three groups: core staff, contract workers and a flexible, part-time or temporary workforce.',
      'Exam tip: recommend a structure for the case by linking it to the firm’s size, culture, leadership style and need for flexibility.',
    ],
    [
      ['Chain of command', 'The line through which orders pass from top to bottom.'],
      ['Delayering', 'Removing layers of management to flatten a structure.'],
      ['Handy’s shamrock organization', 'Core workers, contractors and a flexible workforce.'],
      ['Bureaucracy', 'Formal rules and procedures in an organization.'],
    ],
    [
      ['Removing a layer of middle management is…', 'Delayering', ['Delegation', 'Centralisation', 'Outsourcing'], 'It flattens the hierarchy.'],
      ['A drawback of delayering is that it…', 'Increases managers’ span of control', ['Adds levels', 'Raises costs', 'Slows decisions'], 'Each manager supervises more people.'],
      ['In Handy’s shamrock, the flexible workforce is…', 'Part-time and temporary staff', ['Senior managers', 'Shareholders', 'Suppliers'], 'They are brought in as demand changes.'],
      ['A wide span of control usually means…', 'Less close supervision', ['More layers', 'Tighter control', 'More managers'], 'Each manager oversees many workers.'],
    ],
  ),
  '2.3': M(
    [
      'Management functions come from Henri Fayol: planning, organizing, commanding, coordinating and controlling. Peter Drucker added setting objectives, communicating and developing people.',
      'Worked example: in a start-up with creative, experienced designers, a laissez-faire or democratic style may fit. In a fast-food chain with new, young staff, a more autocratic style may work.',
      'Real-world case: Satya Nadella changed Microsoft’s culture after 2014 with a more collaborative, “learn-it-all” leadership approach, which is linked to its later success.',
      'Exam tip: avoid saying one style is always best. Justify a style using the situation, the workers’ skills, the urgency of the task and the culture.',
    ],
    [
      ['Paternalistic leadership', 'Leader decides but in the best interests of employees, like a parent.'],
      ['Fayol’s functions of management', 'Planning, organizing, commanding, coordinating, controlling.'],
      ['Leadership vs management', 'Leaders inspire and set direction; managers plan and control.'],
      ['Ethical leadership', 'Leading with honesty, fairness and respect for stakeholders.'],
    ],
    [
      ['A leader who decides alone but cares about staff welfare is…', 'Paternalistic', ['Laissez-faire', 'Democratic', 'Situational'], 'Paternalistic leaders act like a caring parent.'],
      ['Which is one of Fayol’s management functions?', 'Coordinating', ['Inspiring', 'Voting', 'Recruiting'], 'Fayol listed planning, organizing, commanding, coordinating and controlling.'],
      ['A democratic style is less suitable when…', 'A quick decision is needed', ['Staff are skilled', 'Creativity matters', 'Time is available'], 'Consultation takes time.'],
      ['Situational leadership means…', 'Adapting the style to the circumstances', ['Always being autocratic', 'Never changing style', 'Letting staff decide everything'], 'The best style depends on the situation.'],
    ],
  ),
  '2.4': M(
    [
      'Taylor’s scientific management said workers are motivated by money: piece-rate pay, work measurement and close supervision. Critics say it ignores social and psychological needs.',
      'Herzberg separated hygiene factors, like pay and working conditions, which prevent dissatisfaction, from motivators, like recognition, responsibility and achievement, which motivate.',
      'Real-world case: Google’s “20% time” let engineers spend part of their week on their own projects, linked to Pink’s ideas of autonomy and mastery; Gmail began this way.',
      'Exam tip: apply theories to the case. Don’t just describe Maslow; explain which need the workers in the case are missing and what the firm could do.',
    ],
    [
      ['Taylor’s scientific management', 'Money motivates; piece rates, efficiency and supervision.'],
      ['Adams’ equity theory', 'Workers compare their input and rewards with others; unfairness demotivates.'],
      ['Job rotation', 'Moving workers between tasks to add variety.'],
      ['Empowerment', 'Giving workers authority to make decisions about their work.'],
    ],
    [
      ['Paying workers per item produced reflects…', 'Taylor’s scientific management', ['Herzberg’s motivators', 'Maslow’s self-actualisation', 'Pink’s autonomy'], 'Taylor believed money was the main motivator.'],
      ['According to Herzberg, which is a motivator?', 'Recognition for achievement', ['Salary', 'Working conditions', 'Company policy'], 'Motivators come from the job itself.'],
      ['A worker feels underpaid compared with a colleague doing the same job. This relates to…', 'Adams’ equity theory', ['Taylor', 'Maslow', 'Herzberg’s hygiene factors'], 'Perceived unfairness reduces motivation.'],
      ['Pink’s three elements of motivation are…', 'Autonomy, mastery and purpose', ['Pay, security and status', 'Safety, love and esteem', 'Money, rules and supervision'], 'Pink says intrinsic motivation drives creative work.'],
    ],
  ),
  '2.5': M(
    [
      'Signs of culture include how people dress, how decisions are made, stories staff tell, office layout and rituals like team celebrations.',
      'Handy’s four cultures: power, one central person decides; role, clear rules and job descriptions; task, teams solve problems; and person, individuals with shared resources, like a law practice.',
      'Real-world case: when Daimler merged with Chrysler in 1998, clashes between German and American business cultures contributed to the merger’s failure in 2007.',
      'Exam tip: when discussing culture change, explain why it is hard, such as staff resistance and deep beliefs, and suggest how leadership, training and communication can help.',
    ],
    [
      ['Power culture', 'Control lies with one central figure or small group.'],
      ['Role culture', 'Rules, procedures and clear job roles dominate.'],
      ['Person culture', 'Organization exists to serve individuals, e.g. a group of doctors.'],
      ['Why culture change is hard', 'Deeply held values and resistance from staff.'],
    ],
    [
      ['A large government department with strict procedures has a…', 'Role culture', ['Task culture', 'Power culture', 'Person culture'], 'Rules and job descriptions guide behaviour.'],
      ['A small firm where the founder makes every decision has a…', 'Power culture', ['Role culture', 'Task culture', 'Person culture'], 'Power is concentrated in one person.'],
      ['The DaimlerChrysler merger is often cited as an example of…', 'Culture clash', ['Economies of scale', 'A successful joint venture', 'Organic growth'], 'Different national and corporate cultures conflicted.'],
      ['Which is an observable sign of organizational culture?', 'The dress code', ['The share price', 'The tax rate', 'The exchange rate'], 'Culture shows in how people behave and present themselves.'],
    ],
  ),
  '2.6': M(
    [
      'Communication methods: written, like emails and reports; oral, like meetings and phone calls; visual, like charts; and non-verbal, like body language. Choose based on urgency, detail and audience.',
      'Communication networks include the chain, where messages pass along a line, the wheel, with a central person, and the circle or connected network, where everyone can talk to everyone.',
      'Cultural differences matter: in some cultures direct feedback is normal, in others it is seen as rude. MNCs train staff in cross-cultural communication.',
      'Exam tip: suggest practical fixes for barriers: clear language, the right medium, feedback loops, fewer layers of hierarchy and training.',
    ],
    [
      ['Non-verbal communication', 'Body language, gestures and facial expressions.'],
      ['Feedback in communication', 'The receiver’s response that shows the message was understood.'],
      ['Information overload', 'Receiving so much information that key messages are missed.'],
      ['Vertical communication', 'Messages passing up or down the hierarchy.'],
    ],
    [
      ['A manager emailing a detailed policy to all staff uses…', 'Formal written communication', ['Informal oral communication', 'The grapevine', 'Non-verbal communication'], 'It is official and written.'],
      ['Why is feedback important in communication?', 'It confirms the message was understood', ['It saves money', 'It removes hierarchy', 'It replaces meetings'], 'Two-way communication reduces misunderstandings.'],
      ['Which reduces communication barriers in a tall structure?', 'Delayering', ['Adding managers', 'More jargon', 'Longer reports'], 'Fewer layers mean messages are less distorted.'],
      ['A frown during a meeting is an example of…', 'Non-verbal communication', ['Formal communication', 'Written communication', 'Vertical communication'], 'Body language sends messages without words.'],
    ],
  ),
  '2.7': M(
    [
      'Sources of conflict include pay, working conditions, job security, changes in working practices and redundancies. Change management reduces conflict through consultation.',
      'Industrial action by employees: collective bargaining, work-to-rule, go-slows, overtime bans and strikes. Employers may use lockouts, closures or changes to contracts.',
      'Real-world case: in 2023 Hollywood writers and actors held long strikes over pay and the use of AI, showing how technology creates new sources of conflict.',
      'Approaches to resolution: negotiation, conciliation, where a third party helps both sides talk, and arbitration, where a third party decides, which may be binding.',
    ],
    [
      ['Collective bargaining', 'Unions negotiate with employers on behalf of all workers.'],
      ['Lockout', 'An employer stops workers from entering the workplace.'],
      ['Go-slow', 'Workers deliberately work at a slower pace.'],
      ['No-strike agreement', 'Union agrees not to strike, often in return for arbitration.'],
    ],
    [
      ['A union negotiating pay for all its members is…', 'Collective bargaining', ['Arbitration', 'Conciliation', 'A lockout'], 'The union bargains collectively.'],
      ['An employer preventing workers entering the factory is a…', 'Lockout', ['Strike', 'Go-slow', 'Work-to-rule'], 'It is an employer’s form of industrial action.'],
      ['A third party who helps both sides talk but doesn’t decide is using…', 'Conciliation', ['Arbitration', 'Collective bargaining', 'A lockout'], 'Conciliators help find common ground.'],
      ['A likely cause of industrial conflict is…', 'Planned redundancies', ['A new logo', 'Higher sales', 'A new product launch'], 'Job losses directly affect workers.'],
    ],
  ),
  '3.1': M(
    [
      'Worked example: a bakery buys a new oven for $20,000, capital expenditure, and pays $1,500 a month for flour and electricity, revenue expenditure.',
      'Capital expenditure is recorded as a non-current asset on the statement of financial position and depreciated. Revenue expenditure is recorded as a cost in the statement of profit or loss.',
      'Matching finance to purpose: long-term assets should use long-term finance, like loans or share capital; short-term needs should use short-term finance, like an overdraft.',
      'Exam tip: in questions about finance, always say whether the need is capital or revenue expenditure, and whether it is short or long term.',
    ],
    [
      ['Matching principle for finance', 'Use long-term finance for long-term assets and short-term finance for short-term needs.'],
      ['Where revenue expenditure appears', 'In the statement of profit or loss as a cost.'],
      ['Example of capital expenditure', 'Buying machinery, vehicles or buildings.'],
      ['Example of revenue expenditure', 'Wages, rent, utilities and raw materials.'],
    ],
    [
      ['Which is capital expenditure?', 'Buying new factory machinery', ['Paying wages', 'Buying stationery', 'Paying rent'], 'It is a long-term asset.'],
      ['A firm needs finance to buy a building. The best source is likely…', 'A long-term loan or mortgage', ['An overdraft', 'Trade credit', 'Debt factoring'], 'Long-term assets should be financed long term.'],
      ['Revenue expenditure is recorded in…', 'The statement of profit or loss', ['The statement of financial position only', 'The cash flow forecast only', 'The share register'], 'It is a day-to-day cost.'],
      ['Which is revenue expenditure?', 'Monthly wages', ['A new delivery truck', 'A new warehouse', 'Computer servers'], 'Wages are a recurring running cost.'],
    ],
  ),
  '3.2': M(
    [
      'More external sources: loan capital from banks, crowdfunding from many small investors, leasing to use an asset without buying it, microfinance for small firms, and business angels.',
      'Worked example: a start-up needs $50,000. A bank loan keeps control but adds interest; a business angel may give money and advice in return for 20% of the business.',
      'Leasing avoids a large upfront payment and includes maintenance, but costs more over time and the firm never owns the asset.',
      'Exam tip: recommend a source by comparing at least two using cost, control, risk, time to repay and the firm’s legal form. A sole trader cannot sell shares.',
    ],
    [
      ['Crowdfunding', 'Raising small amounts from many people, often online.'],
      ['Business angel', 'A wealthy individual who invests in start-ups for a share of ownership.'],
      ['Leasing', 'Paying to use an asset without owning it.'],
      ['Overdraft', 'Short-term borrowing by withdrawing more than is in the bank account.'],
    ],
    [
      ['A start-up raising $30,000 from 600 online backers uses…', 'Crowdfunding', ['Debt factoring', 'A mortgage', 'Retained profit'], 'Many small investors fund the project.'],
      ['A key advantage of leasing is…', 'No large upfront payment', ['Owning the asset', 'Lower total cost', 'No monthly payments'], 'The firm pays in instalments to use the asset.'],
      ['Why can’t a sole trader issue share capital?', 'It is not a company', ['It has limited liability', 'It is too large', 'It is a cooperative'], 'Only companies have shares.'],
      ['Selling unpaid customer invoices to a specialist firm is…', 'Debt factoring', ['Trade credit', 'Leasing', 'An overdraft'], 'It gives immediate cash but at a discount.'],
    ],
  ),
  '3.3': M(
    [
      'Worked example: a phone case maker has fixed costs of $4,000 a month and variable costs of $3 per case. Making 1,000 cases costs $4,000 plus $3,000, total cost $7,000.',
      'Semi-variable costs have a fixed and a variable part, like a phone bill with a line rental plus call charges.',
      'Revenue streams are the different ways a firm earns money: product sales, subscriptions, advertising, licensing or commission. Spotify earns from subscriptions and ads.',
      'Common mistake: confusing profit with revenue. Revenue is money from sales; profit is what is left after all costs.',
    ],
    [
      ['Total cost', 'Fixed costs + variable costs.'],
      ['Semi-variable cost', 'Has fixed and variable parts, e.g. a phone bill.'],
      ['Average cost', 'Total cost ÷ output.'],
      ['Indirect cost (overhead)', 'Cost not linked to one product, e.g. rent, admin salaries.'],
    ],
    [
      ['Fixed costs $2,000 and variable cost $5 per unit. Total cost of 400 units is…', '$4,000', ['$2,000', '$2,005', '$7,000'], 'TC = 2,000 + 5 × 400 = 4,000.'],
      ['Which is a variable cost for a bakery?', 'Flour', ['Rent', 'Insurance', 'Manager’s salary'], 'Flour use rises with output.'],
      ['Total cost $6,000 for 1,500 units. Average cost is…', '$4', ['$6', '$0.25', '$9,000'], 'AC = 6,000 ÷ 1,500.'],
      ['A streaming service earning from subscriptions and ads has…', 'Multiple revenue streams', ['Only fixed costs', 'No variable costs', 'One revenue stream'], 'Different sources of income are revenue streams.'],
    ],
  ),
  '3.4': M(
    [
      'Statement of profit or loss layout: sales revenue minus cost of sales gives gross profit; minus expenses gives profit before interest and tax; minus interest and tax gives profit for the period; then dividends and retained profit.',
      'Statement of financial position: non-current assets plus current assets minus current liabilities minus non-current liabilities equals net assets, which equals equity: share capital plus retained earnings.',
      'Intangible assets, like brands, patents and goodwill, have value but no physical form. HL students should know their valuation is subjective.',
      'Worked example of units of production depreciation at HL: a $50,000 machine expected to make 100,000 units, with no residual value, depreciates $0.50 per unit; 20,000 units in year one gives $10,000.',
    ],
    [
      ['Profit before interest and tax', 'Gross profit − expenses.'],
      ['Net assets', 'Total assets − total liabilities = equity.'],
      ['Intangible asset', 'Non-physical asset such as a brand, patent or goodwill.'],
      ['Retained profit', 'Profit kept in the business after tax and dividends.'],
    ],
    [
      ['Gross profit $40,000, expenses $15,000. Profit before interest and tax is…', '$25,000', ['$55,000', '$40,000', '$15,000'], 'PBIT = gross profit − expenses.'],
      ['Which is an intangible asset?', 'A patent', ['A delivery van', 'Inventory', 'Cash'], 'It has value but no physical form.'],
      ['Net assets equal…', 'Total assets minus total liabilities', ['Revenue minus costs', 'Current assets only', 'Share capital minus cash'], 'Net assets equal equity.'],
      ['Profit after tax $20,000, dividends $8,000. Retained profit is…', '$12,000', ['$28,000', '$20,000', '$8,000'], 'Retained profit = profit after tax − dividends.'],
    ],
  ),
  '3.5': M(
    [
      'Net profit margin equals profit before interest and tax divided by sales revenue, times 100. It shows how well the firm controls expenses, not just cost of sales.',
      'Worked example: sales $200,000, gross profit $80,000, profit before interest and tax $30,000. GPM is 40% and NPM is 15%.',
      'A current ratio between about 1.5 and 2 is often considered healthy. Too low risks cash problems; too high may mean idle assets. The acid test should be around 1.',
      'Exam tip: always compare ratios with previous years, competitors or industry averages, and suggest strategies, like raising prices or cutting costs, to improve them.',
    ],
    [
      ['Net profit margin', '(Profit before interest and tax ÷ sales revenue) × 100.'],
      ['Healthy current ratio', 'Roughly 1.5–2.'],
      ['Acid test formula', '(Current assets − stock) ÷ current liabilities.'],
      ['How to improve GPM', 'Raise prices or cut cost of sales, e.g. cheaper suppliers.'],
    ],
    [
      ['Sales $100,000, PBIT $12,000. The net profit margin is…', '12%', ['88%', '8.3%', '1.2%'], '12,000 ÷ 100,000 × 100.'],
      ['Current assets $40,000, stock $10,000, current liabilities $20,000. Acid test ratio is…', '1.5', ['2', '0.5', '3'], '(40 − 10) ÷ 20 = 1.5.'],
      ['A current ratio of 0.6 suggests…', 'Possible liquidity problems', ['Excess idle cash', 'High profitability', 'Low gearing'], 'Current liabilities exceed current assets.'],
      ['A strategy to improve net profit margin is…', 'Reducing overhead expenses', ['Increasing stock levels', 'Taking a bigger overdraft', 'Paying higher dividends'], 'Lower expenses raise profit on each sale.'],
    ],
  ),
  '3.6': M(
    [
      'Worked example: cost of sales $120,000 and average stock $20,000 gives stock turnover of 6 times a year, about every 61 days.',
      'Debtor days equals debtors divided by total sales revenue, times 365. Creditor days equals creditors divided by cost of sales, times 365.',
      'A gearing ratio above 50% is high: the business relies on borrowing, which raises interest costs and risk, especially if interest rates rise.',
      'Exam tip: explain what the ratio means for the business in the case, for example, high debtor days mean cash is tied up, so the firm might offer early-payment discounts.',
    ],
    [
      ['Debtor days formula', '(Debtors ÷ total sales revenue) × 365.'],
      ['Creditor days formula', '(Creditors ÷ cost of sales) × 365.'],
      ['High gearing risk', 'Heavy interest payments and vulnerability to rate rises.'],
      ['Stock turnover in days', '(Average stock ÷ cost of sales) × 365.'],
    ],
    [
      ['Debtors $10,000, sales $73,000. Debtor days are…', '50 days', ['73 days', '7.3 days', '100 days'], '10,000 ÷ 73,000 × 365 = 50.'],
      ['A gearing ratio of 30% is usually considered…', 'Low', ['High', 'Dangerous', 'Impossible'], 'Below about 25–50% is generally low to moderate.'],
      ['Why might a business want to increase creditor days?', 'To keep cash longer', ['To pay suppliers faster', 'To reduce stock', 'To increase gearing'], 'Paying later improves cash flow, but may upset suppliers.'],
      ['A high stock turnover for a supermarket suggests…', 'Stock is sold quickly', ['Stock is sold slowly', 'Too much stock is held', 'Gearing is high'], 'Fast turnover means less money tied up in stock.'],
    ],
  ),
  '3.7': M(
    [
      'Worked example: January opening balance $2,000, cash in $6,000, cash out $7,500. Net cash flow is minus $1,500 and the closing balance, which becomes February’s opening balance, is $500.',
      'Causes of cash flow problems: overtrading, when a firm expands too fast without enough cash, poor credit control, overstocking, and unexpected costs.',
      'Strategies: reduce outflows by delaying payments or leasing; improve inflows by chasing debtors, offering discounts for cash, or selling unused assets; or find extra finance like an overdraft.',
      'Common mistake: saying a business with a profit has plenty of cash. Profit includes sales made on credit, but cash only arrives when customers pay.',
    ],
    [
      ['Overtrading', 'Growing too fast so cash runs out even though sales rise.'],
      ['Opening balance', 'Cash at the start of the period = last period’s closing balance.'],
      ['Credit control', 'Managing how much credit customers get and chasing late payers.'],
      ['Cash inflow examples', 'Cash sales, payments from debtors, loans, asset sales.'],
    ],
    [
      ['Closing balance in March is $3,000. April’s opening balance is…', '$3,000', ['$0', 'April’s inflows', 'Unknown'], 'The closing balance carries forward.'],
      ['A fast-growing firm running out of cash is suffering from…', 'Overtrading', ['Overcapacity', 'Deflation', 'Low gearing'], 'Expansion uses up cash before sales revenue arrives.'],
      ['Which improves cash inflows?', 'Offering discounts for prompt payment', ['Buying more stock', 'Extending credit to customers', 'Paying suppliers earlier'], 'Customers pay sooner.'],
      ['Working capital cycle refers to…', 'The time between paying for inputs and receiving cash from sales', ['The life of a product', 'A budget period', 'A marketing plan'], 'Shorter cycles improve liquidity.'],
    ],
  ),
  '3.8': M(
    [
      'Worked example of payback with uneven flows: cost $50,000; year 1 $20,000, year 2 $20,000, year 3 $15,000. After 2 years $40,000 is repaid; the remaining $10,000 takes 10 out of 15 of year 3, 8 months. Payback is 2 years 8 months.',
      'ARR worked example: total net returns $80,000 over 5 years, cost $50,000. Total profit is $30,000; average annual profit $6,000; ARR is 6,000 divided by 50,000, 12%.',
      'NPV: multiply each year’s cash flow by the discount factor for the given rate, add them up and subtract the cost. A positive NPV means the investment earns more than the discount rate.',
      'Evaluate: qualitative factors matter too, like fit with objectives, staff morale, environmental impact and risk of forecasts being wrong.',
    ],
    [
      ['ARR formula', '(Total returns − cost) ÷ years of use ÷ cost × 100.'],
      ['Discount factor', 'The value today of $1 received in a future year at a given interest rate.'],
      ['Limitation of payback', 'Ignores cash flows after the payback period and profitability.'],
      ['Qualitative factors in investment', 'Objectives, ethics, staff, environment, risk.'],
    ],
    [
      ['Cost $30,000; inflows $10,000 in year 1 and $20,000 in year 2. Payback is…', '2 years', ['1.5 years', '3 years', '1 year'], 'After two years $30,000 is recovered.'],
      ['Returns $60,000 over 4 years on a $40,000 investment. ARR is…', '12.5%', ['50%', '25%', '5%'], 'Profit 20,000 ÷ 4 = 5,000; 5,000 ÷ 40,000 = 12.5%.'],
      ['A negative NPV means the project…', 'Returns less than the chosen discount rate', ['Is very profitable', 'Pays back quickly', 'Has no risk'], 'Discounted inflows are less than the cost.'],
      ['A key advantage of NPV over payback is that it…', 'Considers the time value of money', ['Is simpler to calculate', 'Ignores risk', 'Only uses year 1'], 'Future cash is worth less than cash today.'],
    ],
  ),
  '3.9': M(
    [
      'Budgets are set for departments and cost or profit centres. Zero-based budgeting starts every budget from nothing, so each cost must be justified; historical budgeting adjusts last year’s figures.',
      'Worked example: budgeted sales revenue $50,000, actual $46,000: a $4,000 adverse variance. Budgeted wages $12,000, actual $11,000: a $1,000 favourable variance.',
      'Causes of adverse variances include higher raw material prices, lower demand, or inefficiency. Managers use variance analysis to investigate and take action.',
      'Evaluate: budgets help control and coordinate, but can be unrealistic, time-consuming and may cause managers to spend unused money at the year-end.',
    ],
    [
      ['Zero-based budgeting', 'Every budget starts from zero and must be justified.'],
      ['Favourable variance', 'Actual results are better than budget: higher revenue or lower costs.'],
      ['Cost centre', 'A part of the business that incurs costs, e.g. HR department.'],
      ['Flexible budget', 'Adjusts for the actual level of output.'],
    ],
    [
      ['Budgeted revenue $20,000, actual $18,000. The variance is…', '$2,000 adverse', ['$2,000 favourable', '$38,000 adverse', 'No variance'], 'Revenue lower than budget is adverse.'],
      ['Budgeted costs $9,000, actual $8,000. The variance is…', '$1,000 favourable', ['$1,000 adverse', '$17,000 favourable', 'No variance'], 'Costs lower than budget are favourable.'],
      ['Starting each budget from nothing is…', 'Zero-based budgeting', ['Historical budgeting', 'Flexible budgeting', 'Variance analysis'], 'Each cost must be justified.'],
      ['A drawback of budgets is that they can…', 'Encourage spending of unused funds at year-end', ['Improve coordination', 'Help control costs', 'Set targets'], 'Managers fear their budget will be cut.'],
    ],
  ),
  '4.1': M(
    [
      'Market size is total sales in a market, in value or volume. Market growth is the percentage change in market size. Market share shows a firm’s position.',
      'Worked example: a market grows from $50 million to $55 million, 10% growth. Firm X’s sales rise from $5 million to $5.2 million, so its market share falls from 10% to about 9.5%.',
      'Marketing services differs from goods because services are intangible, can’t be stored, are produced and consumed together, and vary with the people delivering them.',
      'Exam tip: calculate market share accurately and interpret it — a rising revenue can still mean a falling share if the market grows faster.',
    ],
    [
      ['Market growth', '(Change in market size ÷ original size) × 100.'],
      ['Intangibility of services', 'Services can’t be touched or stored.'],
      ['Market leader', 'The firm with the largest market share.'],
      ['Customer loyalty', 'Customers repeatedly buying from the same brand.'],
    ],
    [
      ['A market grows from $200m to $240m. Market growth is…', '20%', ['40%', '16.7%', '24%'], '40 ÷ 200 × 100 = 20%.'],
      ['A firm’s sales grow 5% while its market grows 10%. Its market share…', 'Falls', ['Rises', 'Stays the same', 'Doubles'], 'Competitors are growing faster.'],
      ['Which is a feature of services?', 'They cannot be stored', ['They are always tangible', 'They are made in factories', 'They last for years'], 'Services are consumed as they are produced.'],
      ['A firm whose products are designed around new technology without asking customers is…', 'Product oriented', ['Market oriented', 'Socially oriented', 'Customer focused'], 'It focuses on the product first.'],
    ],
  ),
  '4.2': M(
    [
      'A marketing plan includes objectives, market research, target market, the marketing mix, a budget and ways to measure success.',
      'Target market choices: mass marketing for broad appeal, niche marketing for a specialist segment, and differentiated marketing for several segments with different mixes.',
      'Consumer profiles describe the typical customer by age, gender, income, location, lifestyle and buying habits, helping a firm target its promotion.',
      'Real-world case: Tesla initially targeted a niche of wealthy early adopters with the Roadster before moving to the mass market with the Model 3.',
    ],
    [
      ['Consumer profile', 'Description of the typical customer: age, income, lifestyle and habits.'],
      ['Psychographic segmentation', 'Dividing customers by lifestyle, values or personality.'],
      ['Mass marketing', 'Selling the same product to the whole market.'],
      ['Marketing plan contents', 'Objectives, research, target market, mix, budget, evaluation.'],
    ],
    [
      ['Grouping customers by lifestyle and values is…', 'Psychographic segmentation', ['Demographic segmentation', 'Geographic segmentation', 'Mass marketing'], 'It focuses on how people live and think.'],
      ['A key advantage of niche marketing is…', 'Less competition and loyal customers', ['Huge sales volumes', 'Economies of scale', 'Low risk from demand changes'], 'Specialist segments are easier to dominate.'],
      ['A USP helps a firm by…', 'Differentiating it from competitors', ['Lowering costs', 'Increasing gearing', 'Removing competitors'], 'A unique selling point gives customers a reason to choose it.'],
      ['Tesla launching an expensive sports car first targeted…', 'A niche market', ['The mass market', 'Everyone equally', 'Only businesses'], 'It aimed at wealthy early adopters.'],
    ],
  ),
  '4.3': M(
    [
      'Worked example of a three-period moving average: sales of 10, 14, 12 and 16. The first average is 10 plus 14 plus 12, over 3, which is 12; the next is 14 plus 12 plus 16, over 3, which is 14.',
      'Seasonal variation is the difference between actual sales and the trend. Averaging seasonal variations lets you adjust a trend forecast for each season.',
      'Other forecasting methods include market research, expert opinion and extrapolation of a line of best fit.',
      'Evaluate: forecasts help plan stock, staffing and cash, but assume the past predicts the future and can be upset by shocks, like a pandemic.',
    ],
    [
      ['Trend', 'The underlying long-term direction of sales.'],
      ['Seasonal variation (calculation)', 'Actual sales − trend value.'],
      ['Extrapolation', 'Extending a trend line into the future.'],
      ['Cyclical variation', 'Changes linked to the business cycle over several years.'],
    ],
    [
      ['Sales: 20, 26, 23. The three-period moving average is…', '23', ['26', '69', '21.5'], '(20 + 26 + 23) ÷ 3 = 23.'],
      ['Actual sales 120, trend 110. The seasonal variation is…', '+10', ['−10', '230', '1.09'], 'Actual − trend = 120 − 110.'],
      ['A sudden fall in sales due to a factory fire is a…', 'Random variation', ['Seasonal variation', 'Cyclical variation', 'Trend'], 'It is unpredictable.'],
      ['Extending a trend line into the future is…', 'Extrapolation', ['Interpolation', 'Sampling', 'Segmentation'], 'It assumes past patterns continue.'],
    ],
  ),
  '4.4': M(
    [
      'Primary research methods: surveys, interviews, focus groups and observation. Secondary sources: government statistics, market reports, academic journals, competitors’ websites and newspapers.',
      'Sampling methods: random, everyone has an equal chance; stratified, the sample reflects groups in the population; quota, a set number from each group; cluster, from one area; snowball, participants recruit others; convenience, whoever is easy to reach.',
      'Sampling error happens when the sample doesn’t represent the population. Larger, well-chosen samples reduce it but cost more.',
      'Ethical research needs informed consent, confidentiality and honesty about the purpose. Online data collection raises privacy concerns.',
    ],
    [
      ['Stratified sampling', 'Sample reflects the proportions of groups in the population.'],
      ['Snowball sampling', 'Participants recruit other participants.'],
      ['Sampling error', 'Results differ from the population because the sample isn’t representative.'],
      ['Convenience sampling', 'Choosing people who are easiest to reach.'],
    ],
    [
      ['A survey where every customer has an equal chance of selection uses…', 'Random sampling', ['Quota sampling', 'Snowball sampling', 'Convenience sampling'], 'Each member of the population has an equal chance.'],
      ['Interviewing shoppers who happen to walk past is…', 'Convenience sampling', ['Stratified sampling', 'Random sampling', 'Cluster sampling'], 'People are chosen because they are easy to reach.'],
      ['A disadvantage of primary research is that it…', 'Is expensive and time-consuming', ['Is always out of date', 'Is not specific', 'Is available to competitors'], 'Collecting new data takes resources.'],
      ['Which is quantitative data?', '65% of customers prefer the new design', ['“I like the colour”', 'Comments from a focus group', 'An interview transcript'], 'Quantitative data is numerical.'],
    ],
  ),
  '4.5': M(
    [
      'Product: the product life cycle and the BCG matrix guide decisions about which products to support. Extension strategies include new features, new markets, repackaging and price changes.',
      'Promotion: above-the-line uses mass media like TV and social media ads; below-the-line includes sales promotions, sponsorship and direct marketing. Viral and social media marketing are cheap but hard to control.',
      'Place: distribution channels can be direct to customers, through a retailer, or through a wholesaler and retailer. E-commerce lets small firms reach global markets.',
      'People, processes and physical evidence matter most in services: well-trained staff, smooth systems for booking and payment, and a clean, branded environment.',
    ],
    [
      ['Above-the-line promotion', 'Paid mass media advertising, e.g. TV, online ads.'],
      ['Below-the-line promotion', 'Targeted methods, e.g. sales promotions, sponsorship, direct mail.'],
      ['Distribution channel', 'The route a product takes from producer to consumer.'],
      ['Physical evidence (7Ps)', 'Tangible signs of a service’s quality, e.g. décor, uniforms, website.'],
    ],
    [
      ['A “buy one get one free” offer is…', 'Below-the-line promotion', ['Above-the-line promotion', 'Price skimming', 'Physical evidence'], 'It is a sales promotion, not mass-media advertising.'],
      ['Selling directly to customers through the firm’s website is a…', 'Direct distribution channel', ['Wholesaler channel', 'Retail channel', 'Franchise'], 'There are no intermediaries.'],
      ['Setting a price just below a round number, like $9.99, is…', 'Psychological pricing', ['Cost-plus pricing', 'Penetration pricing', 'Predatory pricing'], 'It makes the price seem lower.'],
      ['In the product life cycle, sales grow fastest during…', 'Growth', ['Launch', 'Maturity', 'Decline'], 'The product gains wide acceptance.'],
    ],
  ),
  '4.6': M(
    [
      'Methods of entry range from low risk and low control, like exporting, to high risk and high control, like direct investment in a foreign subsidiary.',
      'Real-world case: McDonald’s adapts its menu to local cultures: the McAloo Tikki in India, and the Teriyaki Burger in Japan, while keeping a standard brand.',
      'Risks include legal differences, political instability, exchange rate changes and cultural misunderstandings. Tariffs and quotas can also raise costs.',
      'Exam tip: a strong recommendation weighs global standardisation, cheaper and consistent, against local adaptation, more appealing to local customers.',
    ],
    [
      ['Global standardisation', 'Using the same marketing mix worldwide.'],
      ['Foreign direct investment (entry)', 'Setting up or buying a subsidiary abroad.'],
      ['Exchange rate risk', 'Revenue and costs change value when currencies move.'],
      ['Licensing', 'Allowing a foreign firm to use a brand or patent for a fee.'],
    ],
    [
      ['The lowest-risk way to enter a foreign market is usually…', 'Exporting', ['Opening a subsidiary', 'Acquisition', 'A joint venture'], 'It requires little investment abroad.'],
      ['McDonald’s selling different burgers in India is an example of…', 'Glocalisation', ['Global standardisation', 'Price skimming', 'Dumping'], 'It adapts globally to local tastes.'],
      ['A benefit of global standardisation is…', 'Economies of scale in marketing', ['Better fit with local tastes', 'Avoiding all risks', 'Higher prices everywhere'], 'One campaign can be used everywhere.'],
      ['Exchange rate changes are a risk because…', 'Revenues earned abroad may fall when converted', ['Tariffs disappear', 'Costs are fixed', 'Products become identical'], 'Currency movements alter profits.'],
    ],
  ),
  '5.1': M(
    [
      'Operations transforms inputs, like labour, materials and capital, into outputs, adding value. It covers goods, like cars, and services, like banking.',
      'The triple bottom line judges performance on people, planet and profit. Examples: fair wages in the supply chain, lower emissions, and efficient production.',
      'Real-world case: IKEA aims to use only renewable or recycled materials by 2030 and runs a buy-back scheme for used furniture, making operations part of its sustainability strategy.',
      'Exam tip: link operations decisions to other functions, for example a new production method may need finance for machinery, HR training and marketing of improved quality.',
    ],
    [
      ['Transformation process', 'Converting inputs into outputs that add value.'],
      ['Triple bottom line', 'People, planet and profit.'],
      ['Environmental sustainability in operations', 'Reducing waste, emissions and resource use.'],
      ['Productivity', 'Output per unit of input.'],
    ],
    [
      ['“People, planet, profit” refers to…', 'The triple bottom line', ['The marketing mix', 'SWOT', 'Porter’s strategies'], 'It measures social, environmental and economic performance.'],
      ['Which is an input in operations?', 'Raw materials', ['Customer satisfaction', 'Profit', 'Market share'], 'Inputs are transformed into outputs.'],
      ['Reducing energy use in a factory improves mainly…', 'Environmental sustainability', ['Market share', 'Gearing', 'Liquidity only'], 'It lowers resource use and emissions.'],
      ['A bank providing loans is an example of…', 'Operations in the service sector', ['Primary production', 'Manufacturing', 'Mining'], 'Operations applies to services too.'],
    ],
  ),
  '5.2': M(
    [
      'Choosing a method depends on the size of the market, the product’s nature, available technology and finance, and customer demand for customisation.',
      'Cell production organizes workers into teams, or cells, each making a complete part. It improves motivation and quality compared with a long assembly line.',
      'Real-world case: Nike By You lets customers design their own trainers online. Flexible machines and digital systems make this mass customisation possible.',
      'Exam tip: when recommending a method, use both costs and customer needs: job production suits unique high-value items; flow production suits standardised high-volume goods.',
    ],
    [
      ['Cell production', 'Teams produce a complete unit or component.'],
      ['Flow production advantage', 'Very low unit costs from high volume and automation.'],
      ['Job production drawback', 'High unit costs and skilled labour needed.'],
      ['Choosing a production method', 'Depends on market size, product, technology and finance.'],
    ],
    [
      ['A key disadvantage of flow production is…', 'High set-up cost and low flexibility', ['High unit costs', 'Low output', 'Only one-off products'], 'Assembly lines are expensive and hard to change.'],
      ['A shipbuilder making one cruise ship uses…', 'Job production', ['Flow production', 'Batch production', 'Mass customisation'], 'Each ship is a unique project.'],
      ['Teams making complete components use…', 'Cell production', ['Flow production', 'Job production', 'Offshoring'], 'Workers in a cell share responsibility.'],
      ['Batch production is suitable when…', 'Groups of similar products are made in turn', ['Each product is unique', 'Only one product is made', 'Demand is huge and constant'], 'Machines switch between batches.'],
    ],
  ),
  '5.3': M(
    [
      'Lean methods: kaizen, continuous small improvements; just-in-time, stock arrives exactly when needed; kanban, cards or signals that trigger production; andon, a signal to stop the line if there’s a problem.',
      'Total quality management involves every employee in quality at every stage. Quality circles are small groups of workers who meet to solve problems.',
      'Real-world case: Toyota’s production system created kaizen and JIT. But in 2021 the global chip shortage showed the risk of JIT when supply chains are disrupted.',
      'Quality standards, like ISO 9001, show customers a firm meets international quality systems, helping sales and exports, but certification is costly.',
    ],
    [
      ['Kanban', 'A signalling system that triggers production or delivery when stock is needed.'],
      ['Andon', 'A signal that lets workers stop production when a problem appears.'],
      ['Total quality management (TQM)', 'Everyone in the organization is responsible for quality.'],
      ['ISO 9001', 'International standard for quality management systems.'],
    ],
    [
      ['A card signalling that more parts are needed is…', 'Kanban', ['Kaizen', 'Andon', 'Benchmarking'], 'It controls the flow of materials.'],
      ['Involving every employee in quality is…', 'Total quality management', ['Quality control', 'Just-in-case', 'Outsourcing'], 'TQM makes quality everyone’s job.'],
      ['JIT failed for many car makers in 2021 because of…', 'Supply chain disruption', ['Too much stock', 'Low demand', 'Too many workers'], 'Without buffer stock, shortages stop production.'],
      ['A benefit of ISO 9001 certification is…', 'Customer confidence in quality systems', ['Lower costs immediately', 'No need for training', 'Guaranteed profits'], 'It signals reliable quality management.'],
    ],
  ),
  '5.4': M(
    [
      'Quantitative factors include land and labour costs, transport costs, government grants and tax. Qualitative factors include infrastructure, political stability, culture and quality of life for staff.',
      'Insourcing brings tasks back in-house; outsourcing contracts them to external firms. Offshoring moves them abroad; reshoring brings them back home.',
      'Real-world case: many firms moved production from China to Vietnam and India after 2018 to reduce costs and tariff risks, a strategy called “China plus one”.',
      'Evaluate supply chains: global supply chains cut costs but are vulnerable to disruption. Firms now balance efficiency with resilience by diversifying suppliers.',
    ],
    [
      ['Insourcing', 'Bringing previously outsourced work back in-house.'],
      ['“China plus one” strategy', 'Adding production in another country to reduce reliance on China.'],
      ['Supply chain resilience', 'Ability to keep operating when disruptions occur.'],
      ['Government incentives (location)', 'Grants or tax breaks to attract firms to an area.'],
    ],
    [
      ['A firm moving customer support back from an external provider is…', 'Insourcing', ['Outsourcing', 'Offshoring', 'Franchising'], 'The work returns in-house.'],
      ['Which is a quantitative location factor?', 'Cost of land', ['Political stability', 'Quality of life', 'Local culture'], 'It can be measured in numbers.'],
      ['Adding factories in Vietnam to reduce reliance on China is…', 'Diversifying the supply chain', ['Reshoring', 'Insourcing', 'Vertical integration'], 'It spreads risk across countries.'],
      ['A risk of offshoring is…', 'Quality and communication problems', ['Higher labour costs', 'Less access to markets', 'No cost savings'], 'Distance and culture can cause problems.'],
    ],
  ),
  '5.5': M(
    [
      'Worked example: price $20, variable cost $12, fixed costs $16,000. Contribution per unit is $8; break-even is 16,000 divided by 8, 2,000 units. Break-even revenue is 2,000 times $20, $40,000.',
      'Target profit output: fixed costs plus target profit, divided by contribution per unit. To make $8,000 profit: 24,000 divided by 8, 3,000 units.',
      'On a break-even chart, fixed costs are a horizontal line, total cost starts at fixed costs, and total revenue starts at zero. Where TR crosses TC is break-even.',
      'Changes to know: a higher price or lower variable cost raises contribution and lowers break-even; higher fixed costs raise break-even.',
    ],
    [
      ['Break-even revenue', 'Break-even quantity × price.'],
      ['Total contribution', 'Contribution per unit × units sold.'],
      ['Profit (using contribution)', 'Total contribution − fixed costs.'],
      ['Effect of higher fixed costs', 'Break-even quantity rises.'],
    ],
    [
      ['Price $50, variable cost $30, fixed costs $40,000. Break-even is…', '2,000 units', ['800 units', '1,333 units', '4,000 units'], '40,000 ÷ (50 − 30) = 2,000.'],
      ['Contribution $5 per unit, 3,000 units sold, fixed costs $12,000. Profit is…', '$3,000', ['$15,000', '$12,000', '−$3,000'], '5 × 3,000 − 12,000 = 3,000.'],
      ['Fixed costs $10,000, contribution $4, target profit $6,000. Units needed:', '4,000', ['2,500', '1,500', '16,000'], '(10,000 + 6,000) ÷ 4 = 4,000.'],
      ['If variable costs per unit rise, break-even quantity…', 'Rises', ['Falls', 'Stays the same', 'Becomes zero'], 'Contribution per unit falls, so more units are needed.'],
    ],
  ),
  '5.6': M(
    [
      'Just-in-case stock control holds buffer stock to avoid running out. It is safer but costs more for storage, insurance and risk of waste.',
      'Worked example: a firm uses 100 units a day and lead time is 5 days, with buffer stock of 200. The reorder level is 100 times 5 plus 200, which is 700 units.',
      'Capacity utilisation near 100% spreads fixed costs but leaves no room for extra orders or maintenance. Very low utilisation raises average costs.',
      'Productivity rates: labour productivity is output per worker; capital productivity is output per machine. Improving productivity lowers unit costs.',
    ],
    [
      ['Reorder level', '(Daily usage × lead time) + buffer stock.'],
      ['Just-in-case', 'Holding buffer stock in case of delays or demand spikes.'],
      ['Capital productivity', 'Output per unit of capital (machine).'],
      ['Make-or-buy decision', 'Compare cost of making in-house with buying from a supplier.'],
    ],
    [
      ['Usage 50 units per day, lead time 4 days, buffer stock 100. The reorder level is…', '300', ['200', '154', '250'], '50 × 4 + 100 = 300.'],
      ['A drawback of very high capacity utilisation is…', 'No flexibility to take extra orders', ['High average costs', 'Idle staff', 'Wasted fixed costs'], 'The firm is working at its limit.'],
      ['Holding buffer stock in case of delays is…', 'Just-in-case', ['Just-in-time', 'Kanban', 'Outsourcing'], 'Stock is held as insurance.'],
      ['Make cost $12 per unit, buy price $10 per unit. On cost alone the firm should…', 'Buy', ['Make', 'Stop production', 'Raise prices'], 'Buying is $2 cheaper per unit, though quality and control matter too.'],
    ],
  ),
  '5.7': M(
    [
      'Examples of crises include product recalls, data breaches, natural disasters, pandemics, fraud and social media scandals.',
      'Four factors of crisis management: transparency, communication, speed and control. Honest, fast communication protects reputation.',
      'Real-world case: in 1982, Johnson & Johnson recalled all Tylenol after a poisoning incident. Quick, open action protected trust and the brand recovered.',
      'Exam tip: distinguish crisis management, reacting when it happens, from contingency planning, preparing in advance. Evaluate plans by cost, likelihood of the risk, and the impact if unprepared.',
    ],
    [
      ['Four factors of crisis management', 'Transparency, communication, speed, control.'],
      ['Product recall', 'Asking customers to return a faulty or dangerous product.'],
      ['Benefit of contingency planning', 'Faster, calmer response and less damage in a crisis.'],
      ['Business continuity', 'Keeping essential operations running during a disruption.'],
    ],
    [
      ['Which is most important in the first hours of a crisis?', 'Fast, honest communication', ['Cutting prices', 'Delaying a response', 'Hiding information'], 'Transparency and speed protect reputation.'],
      ['Johnson & Johnson’s Tylenol recall is an example of…', 'Effective crisis management', ['Contingency failure', 'Price skimming', 'Delayering'], 'Quick and transparent action protected trust.'],
      ['Contingency planning happens…', 'Before a crisis', ['During a crisis only', 'After a crisis only', 'Never'], 'It prepares responses in advance.'],
      ['A cost of contingency planning is…', 'Time and money spent on unlikely events', ['Lower preparedness', 'Slower responses', 'Loss of reputation'], 'Resources go into plans that may never be used.'],
    ],
  ),
  '5.8': M(
    [
      'R and D spending varies by industry: pharmaceutical and tech firms spend heavily because new products drive competition.',
      'Types of innovation: product innovation, new or improved products; process innovation, better ways to produce; positioning innovation, repositioning a product; and paradigm innovation, a change in how an industry works.',
      'Real-world case: Kodak invented the first digital camera in 1975 but didn’t pursue it for fear of hurting film sales. Disruptive innovation by others later pushed Kodak into bankruptcy in 2012.',
      'Adaptive creativity improves existing ideas; innovative creativity creates new ones. Firms need both, supported by culture and investment.',
    ],
    [
      ['Process innovation', 'A new or better way of producing.'],
      ['Paradigm innovation', 'A change in the whole model of an industry.'],
      ['Copyright', 'Protects original creative work like music and books.'],
      ['Trademark', 'Protects brand names and logos.'],
    ],
    [
      ['A new faster way to assemble phones is…', 'Process innovation', ['Product innovation', 'Positioning innovation', 'A trademark'], 'It changes how products are made.'],
      ['Kodak’s decline is an example of…', 'Failing to respond to disruptive innovation', ['Successful R&D', 'A patent dispute', 'A culture of innovation'], 'Digital photography replaced film.'],
      ['A brand logo is protected by…', 'A trademark', ['A patent', 'Copyright', 'A licence'], 'Trademarks protect names and logos.'],
      ['Why do pharmaceutical firms spend heavily on R&D?', 'New drugs are protected by patents and earn high returns', ['R&D is cheap', 'Governments require no testing', 'Demand never changes'], 'Patents give temporary monopolies.'],
    ],
  ),
  '5.9': M(
    [
      'Key technologies: databases, cloud computing, artificial intelligence, the internet of things, virtual reality and customer loyalty programmes. They support decisions and efficiency.',
      'Critical infrastructure refers to the systems a business depends on, like networks and data centres. Cybersecurity protects them from hacking and data theft.',
      'Real-world case: supermarkets like Tesco use Clubcard data to personalise offers and plan stock, but face questions about how much customer data they should collect.',
      'Evaluate: MIS improves decisions and efficiency but has costs, cyber risks and ethical issues, like privacy, surveillance of employees and job losses from automation.',
    ],
    [
      ['Cloud computing', 'Storing and processing data on remote servers over the internet.'],
      ['Internet of things', 'Everyday devices connected to the internet and sharing data.'],
      ['Cybersecurity', 'Protecting systems and data from attacks.'],
      ['Artificial intelligence in business', 'Machines performing tasks like predictions and customer service chatbots.'],
    ],
    [
      ['Smart sensors on machines sending performance data are part of…', 'The internet of things', ['Cloud storage only', 'Market research', 'Delayering'], 'Connected devices share data.'],
      ['A business risk of storing customer data is…', 'Data breaches from cyber attacks', ['Lower sales', 'More paperwork', 'Higher tariffs'], 'Hackers can steal sensitive information.'],
      ['Using software to predict which customers will leave is…', 'Data analytics', ['Job rotation', 'Kaizen', 'Break-even analysis'], 'Analysing data reveals patterns.'],
      ['An ethical concern about employee monitoring software is…', 'Invasion of privacy', ['Higher productivity', 'Better security', 'Lower costs'], 'Monitoring may harm trust and privacy.'],
    ],
  ),
  TK1: M(
    [
      'Worked example of a SWOT for a café chain: strengths, loyal customers; weaknesses, high rent; opportunities, delivery apps; threats, new competitors and rising coffee prices.',
      'Ansoff matrix: market penetration, existing product in existing market, is least risky; product development and market development are medium risk; diversification is most risky.',
      'BCG matrix: stars, high share and high growth; cash cows, high share and low growth; question marks, low share and high growth; dogs, low share and low growth. Cash cows often fund stars and question marks.',
      'Exam tip: tools don’t make decisions. Use SWOT or STEEPLE to organize evidence from the case, then make and justify a recommendation.',
    ],
    [
      ['Ansoff: least risky strategy', 'Market penetration.'],
      ['BCG star', 'High market share in a high-growth market.'],
      ['BCG dog', 'Low market share in a low-growth market.'],
      ['Internal vs external factors in SWOT', 'Strengths/weaknesses are internal; opportunities/threats are external.'],
    ],
    [
      ['A new government regulation is in which part of STEEPLE?', 'Legal', ['Social', 'Technological', 'Ethical'], 'Laws and regulations are legal factors.'],
      ['A product with high share in a low-growth market is a…', 'Cash cow', ['Star', 'Question mark', 'Dog'], 'It generates steady cash.'],
      ['Launching a new product in a new market is…', 'Diversification', ['Market penetration', 'Product development', 'Market development'], 'Both product and market are new: the riskiest option.'],
      ['Which is a strength in a SWOT analysis?', 'A strong brand', ['A recession', 'New competitors', 'Rising taxes'], 'Strengths are internal advantages.'],
    ],
  ),
  TK2: M(
    [
      'Worked example of a decision tree: Option A costs $50,000, with a 70% chance of $120,000 and 30% chance of $40,000. EV is 84,000 plus 12,000, $96,000; net gain $46,000.',
      'Force field analysis: list driving and restraining forces, score them, and decide if the change can go ahead or how to strengthen drivers and weaken restraints.',
      'Porter’s strategies: cost leadership, like Ryanair; differentiation, like Apple; and focus, cost focus or differentiation focus on a niche, like Rolls-Royce.',
      'Hofstede’s dimensions include power distance, individualism, masculinity, uncertainty avoidance, long-term orientation and indulgence. They help MNCs manage across cultures.',
    ],
    [
      ['Net gain (decision tree)', 'Expected value − cost of the option.'],
      ['Cost leadership example', 'Ryanair: lowest-cost producer in its industry.'],
      ['Power distance (Hofstede)', 'How far people accept unequal distribution of power.'],
      ['Differentiation focus', 'A unique product aimed at a niche market.'],
    ],
    [
      ['EV $80,000, cost $30,000. The net gain is…', '$50,000', ['$110,000', '$80,000', '$30,000'], 'Net gain = EV − cost.'],
      ['Rolls-Royce cars follow…', 'Differentiation focus', ['Cost leadership', 'Cost focus', 'Market penetration'], 'A unique luxury product for a niche.'],
      ['A culture where employees expect managers to make all decisions has high…', 'Power distance', ['Individualism', 'Indulgence', 'Uncertainty avoidance'], 'Hierarchy is accepted.'],
      ['A limitation of decision trees is that…', 'Probabilities and values are estimates', ['They ignore money', 'They can’t show choices', 'They are always accurate'], 'Outcomes depend on forecasts that may be wrong.'],
    ],
  ),
  TK3: M(
    [
      'In critical path analysis each node shows the earliest start time and latest finish time. Tasks with zero total float are on the critical path.',
      'Worked example: task B takes 4 days, can start on day 3 at the earliest, and must finish by day 10. Total float is 10 minus 4 minus 3, which is 3 days.',
      'Descriptive statistics help summarise data: mean for average, median for the middle value, mode for the most common, and charts like bar charts, pie charts and infographics.',
      'The circular business model keeps products and materials in use: product life extension, sharing platforms, product as a service and resource recovery.',
    ],
    [
      ['Total float formula', 'Latest finish time − duration − earliest start time.'],
      ['Median', 'The middle value when data is in order.'],
      ['Product as a service', 'Customers pay to use a product rather than own it.'],
      ['Earliest start time (EST)', 'The earliest a task can begin.'],
    ],
    [
      ['LFT 12, duration 5, EST 4. Total float is…', '3 days', ['7 days', '1 day', '9 days'], '12 − 5 − 4 = 3.'],
      ['The median of 3, 8, 5, 9, 4 is…', '5', ['8', '5.8', '4'], 'Ordered: 3, 4, 5, 8, 9 — the middle value is 5.'],
      ['Leasing lighting to offices instead of selling bulbs is…', 'Product as a service', ['Price skimming', 'Market penetration', 'Offshoring'], 'Customers pay for the service, the maker keeps ownership.'],
      ['Delaying a task on the critical path…', 'Delays the whole project', ['Has no effect', 'Shortens the project', 'Only affects costs'], 'Critical tasks have zero float.'],
    ],
  ),
};

export default more;
