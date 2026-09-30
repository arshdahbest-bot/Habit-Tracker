import type { SubjectContentFile } from '../types';
import { C } from './helpers';

const content: SubjectContentFile = {
  units: {
    '1': [
      'Unit 1 introduces what businesses are, the different legal forms they take, their objectives, their stakeholders, and how they grow.',
      'It sets up the four key concepts of the course: change, creativity, ethics and sustainability. Use them to evaluate every decision.',
    ],
    '2': [
      'Unit 2, human resource management, is about the people in an organization: workforce planning, structure, leadership, motivation and communication.',
      'At HL it adds organizational culture and industrial relations. Link theories like Maslow and Herzberg to real case examples.',
    ],
    '3': [
      'Unit 3, finance and accounts, covers sources of finance, costs and revenues, final accounts, ratios, cash flow and investment appraisal.',
      'HL adds debt and efficiency ratios and budgets. Calculations are common in Paper 2, so practise them carefully.',
    ],
    '4': [
      'Unit 4, marketing, covers marketing planning, market research and the seven Ps of the marketing mix.',
      'HL adds sales forecasting and international marketing. Always tailor marketing decisions to the specific business and its target market.',
    ],
    '5': [
      'Unit 5, operations management, is about how businesses produce goods and services efficiently.',
      'It covers production methods, location and break-even analysis. HL adds lean production, quality, production planning, crisis management, R and D and management information systems.',
    ],
    TK: [
      'The business management toolkit is a set of analytical tools used throughout the course and in the internal assessment.',
      'They include SWOT, STEEPLE, the Ansoff and BCG matrices, decision trees, force field analysis, Gantt charts and critical path analysis. Some tools are HL only, so check the guide.',
    ],
  },
  chapters: {
    '1.1': C(
      [
        'A business combines human, physical and financial resources to produce goods or services that meet customer needs.',
        'Businesses operate in the primary sector, extracting raw materials; the secondary sector, manufacturing; the tertiary sector, services; and the quaternary sector, knowledge-based services like IT and research.',
        'Entrepreneurs set up businesses to earn profit, gain independence, or pursue an idea. Intrapreneurs innovate inside existing organizations.',
        'New businesses face challenges such as raising finance, building a customer base, and competition. A business plan helps secure funding.',
      ],
      [
        ['Primary sector', 'Extracting natural resources, e.g. farming, mining.'],
        ['Tertiary sector', 'Providing services, e.g. banking, retail.'],
        ['Entrepreneur', 'Someone who takes risks to start a business.'],
        ['Business plan', 'A document setting out objectives, strategy and finances.'],
      ],
      [
        ['A software research company is in the…', ['Primary sector', 'Secondary sector', 'Tertiary sector', 'Quaternary sector'], 3, 'Knowledge-based services are quaternary.'],
        ['Which is a common challenge for start-ups?', ['Too many customers', 'Raising finance', 'Too much cash', 'No competition'], 1, 'Lenders see new businesses as risky.'],
        ['An employee who develops a new product inside a large firm is an…', ['Entrepreneur', 'Intrapreneur', 'Shareholder', 'Investor'], 1, 'Intrapreneurs innovate within organizations.'],
      ],
    ),
    '1.2': C(
      [
        'Businesses can be in the private sector, owned by individuals, or the public sector, owned by the government.',
        'Sole traders and partnerships usually have unlimited liability: owners are personally responsible for all debts.',
        'Privately held and publicly held companies have limited liability and are owned by shareholders. Publicly held companies can sell shares on a stock exchange.',
        'Social enterprises, like cooperatives and non-profit organizations, put social or environmental goals first, while still earning revenue.',
      ],
      [
        ['Unlimited liability', 'Owners are personally responsible for all business debts.'],
        ['Limited liability', 'Owners can lose only what they invested.'],
        ['Publicly held company', 'Shares are traded on a stock exchange.'],
        ['Social enterprise', 'A business with social or environmental aims as its priority.'],
      ],
      [
        ['A sole trader has…', ['Limited liability', 'Unlimited liability', 'Shareholders', 'A board of directors'], 1, 'The owner is personally liable.'],
        ['Which can sell shares to the general public?', ['Sole trader', 'Partnership', 'Publicly held company', 'Privately held company'], 2, 'Its shares trade on a stock exchange.'],
        ['A cooperative owned by its members is an example of a…', ['Public sector body', 'Social enterprise', 'Sole trader', 'Multinational'], 1, 'Cooperatives serve their members’ interests.'],
      ],
    ),
    '1.3': C(
      [
        'Organizations set a vision statement, their long-term aspiration, and a mission statement, their core purpose.',
        'Aims are general goals; objectives are specific, measurable targets. Strategic objectives are long-term; tactical and operational ones are shorter-term.',
        'Good objectives are SMART: specific, measurable, achievable, realistic and time-bound.',
        'Many businesses now set ethical objectives and corporate social responsibility goals, such as reducing emissions, which can build reputation but add costs.',
      ],
      [
        ['Vision statement', 'The organization’s long-term aspiration.'],
        ['Mission statement', 'The organization’s core purpose.'],
        ['SMART objectives', 'Specific, Measurable, Achievable, Realistic, Time-bound.'],
        ['Corporate social responsibility', 'A business’s commitment to acting ethically towards society and the environment.'],
      ],
      [
        ['“Increase sales by 10% within 12 months” is…', ['A vision', 'A SMART objective', 'A mission statement', 'An aim'], 1, 'It is specific, measurable and time-bound.'],
        ['A long-term objective set by senior management is…', ['Operational', 'Tactical', 'Strategic', 'Daily'], 2, 'Strategic objectives shape the whole business.'],
        ['A drawback of ethical objectives is that they may…', ['Improve reputation', 'Increase costs', 'Attract customers', 'Motivate staff'], 1, 'Ethical sourcing can cost more.'],
      ],
    ),
    '1.4': C(
      [
        'Stakeholders are individuals or groups with an interest in a business.',
        'Internal stakeholders include employees, managers and shareholders. External stakeholders include customers, suppliers, the government, pressure groups and the local community.',
        'Stakeholders often have conflicting interests: shareholders may want higher profits, while employees want higher wages.',
        'Stakeholder mapping ranks stakeholders by their power and interest, to decide how much attention each needs.',
      ],
      [
        ['Stakeholder', 'A person or group with an interest in a business.'],
        ['Internal stakeholders', 'Employees, managers, shareholders.'],
        ['Stakeholder conflict', 'Different stakeholders want different outcomes.'],
        ['Stakeholder mapping', 'Ranks stakeholders by power and interest.'],
      ],
      [
        ['Which is an external stakeholder?', ['Employees', 'Managers', 'Suppliers', 'Shareholders'], 2, 'Suppliers are outside the organization.'],
        ['A factory closure is likely to conflict most with the interests of…', ['Shareholders', 'Local community and employees', 'Competitors', 'Government only'], 1, 'Jobs and the local economy are affected.'],
        ['A stakeholder with high power and high interest should be…', ['Ignored', 'Kept informed only', 'Managed closely', 'Monitored minimally'], 2, 'They can strongly influence decisions.'],
      ],
    ),
    '1.5': C(
      [
        'Businesses grow to gain economies of scale, market share and profit. Economies of scale are falling average costs as output rises, such as bulk buying.',
        'Diseconomies of scale are rising average costs when a firm gets too large, due to poor communication and coordination.',
        'Internal, organic growth uses the firm’s own resources. External, inorganic growth includes mergers, acquisitions, joint ventures, strategic alliances and franchising.',
        'Small businesses can still succeed through flexibility, personal service and serving niche markets.',
      ],
      [
        ['Economies of scale', 'Lower average costs as output increases.'],
        ['Diseconomies of scale', 'Higher average costs when a firm grows too large.'],
        ['Organic growth', 'Growth using the firm’s own resources.'],
        ['Franchising', 'Allowing others to trade under your brand for fees and royalties.'],
      ],
      [
        ['Bulk-buying discounts are a…', ['Diseconomy of scale', 'Purchasing economy of scale', 'Merger', 'Franchise'], 1, 'Larger orders lower unit costs.'],
        ['Two firms agreeing to join as one is a…', ['Takeover', 'Merger', 'Joint venture', 'Franchise'], 1, 'A merger is by mutual agreement.'],
        ['Poor communication in a very large firm is an example of…', ['Economies of scale', 'Diseconomies of scale', 'Organic growth', 'Synergy'], 1, 'It raises average costs.'],
      ],
    ),
    '1.6': C(
      [
        'A multinational company, MNC, operates in more than one country.',
        'MNCs can bring host countries jobs, investment, skills, technology and tax revenue.',
        'They may also cause problems: local firms face stronger competition, profits may be sent home, and they may exploit weaker labour or environmental rules.',
        'Host governments often negotiate with MNCs, balancing the benefits of investment against their influence.',
      ],
      [
        ['Multinational company (MNC)', 'A company operating in more than one country.'],
        ['Benefit to host country', 'Jobs, investment, technology, tax revenue.'],
        ['Drawback to host country', 'Competition for local firms; profits leave the country.'],
        ['Why MNCs expand abroad', 'New markets, lower costs, avoiding trade barriers.'],
      ],
      [
        ['A benefit of an MNC to a host country is…', ['Profit repatriation', 'Job creation', 'Local firms closing', 'Pollution'], 1, 'MNCs create employment.'],
        ['An MNC might locate abroad to…', ['Pay higher costs', 'Avoid trade barriers', 'Reduce market size', 'Increase tariffs'], 1, 'Producing inside a market avoids tariffs.'],
        ['A criticism of MNCs is that they may…', ['Train workers', 'Exploit weak regulations', 'Pay taxes', 'Bring technology'], 1, 'They may take advantage of lax rules.'],
      ],
    ),
    '2.1': C(
      [
        'Human resource management plans, recruits, trains and supports the workforce. Workforce planning forecasts future staffing needs.',
        'Labour turnover is the rate at which staff leave: number leaving divided by average number employed, times 100. High turnover increases recruitment costs.',
        'Recruitment can be internal, promoting existing staff, or external, hiring from outside. Training can be induction, on-the-job or off-the-job.',
        'New trends include flexible working, gig economy contracts, outsourcing and offshoring, and technology in HR.',
      ],
      [
        ['Labour turnover', '(Number leaving ÷ average number employed) × 100'],
        ['Internal recruitment', 'Filling a job from existing staff.'],
        ['Induction training', 'Introductory training for new employees.'],
        ['Outsourcing', 'Using an external firm to do a business function.'],
      ],
      [
        ['20 staff leave; average workforce 200. Labour turnover =', ['5%', '10%', '20%', '40%'], 1, '20 ÷ 200 × 100.'],
        ['An advantage of internal recruitment is…', ['New ideas', 'Lower cost and known candidates', 'Larger pool', 'No training needed'], 1, 'The candidate is already known.'],
        ['Training while doing the job is…', ['Off-the-job', 'On-the-job', 'Induction', 'Outsourcing'], 1, 'Learning happens in the workplace.'],
      ],
    ),
    '2.2': C(
      [
        'Organizational structure shows how authority and communication flow. Organization charts show hierarchy and chains of command.',
        'The span of control is the number of subordinates a manager directly supervises. Tall structures have many levels and narrow spans; flat structures have few levels and wide spans.',
        'Delegation passes authority to subordinates. Centralisation keeps decisions at the top; decentralisation spreads them.',
        'Other structures include structures by product or region, and matrix structures for project teams.',
      ],
      [
        ['Span of control', 'Number of people a manager directly supervises.'],
        ['Tall structure', 'Many levels, narrow spans of control.'],
        ['Delegation', 'Passing authority down to subordinates.'],
        ['Matrix structure', 'Project teams drawn from different departments.'],
      ],
      [
        ['A flat structure usually has…', ['Many levels', 'Wide spans of control', 'Slow communication', 'Narrow spans'], 1, 'Few levels mean each manager has more staff.'],
        ['Decentralisation means…', ['All decisions at the top', 'Decisions spread through the organization', 'No managers', 'Only one department'], 1, 'Authority is delegated.'],
        ['A disadvantage of a tall structure is…', ['Close supervision', 'Slow communication', 'Clear promotion routes', 'Small spans'], 1, 'Messages pass through many levels.'],
      ],
    ),
    '2.3': C(
      [
        'Management focuses on planning, organizing, commanding, coordinating and controlling. Leadership is about inspiring and influencing people.',
        'Leadership styles include autocratic, making decisions alone; paternalistic, deciding in employees’ best interests; democratic, involving staff; laissez-faire, leaving staff to decide; and situational, adapting to circumstances.',
        'The best style depends on the task, the workforce and the situation: autocratic can work in a crisis; democratic suits skilled, creative teams.',
        'Good leaders also consider ethics and culture.',
      ],
      [
        ['Autocratic leadership', 'The leader makes decisions alone.'],
        ['Democratic leadership', 'Employees are involved in decisions.'],
        ['Laissez-faire', 'Employees are given freedom to decide.'],
        ['Situational leadership', 'Adapting style to the situation.'],
      ],
      [
        ['In an emergency, which style is often most effective?', ['Laissez-faire', 'Autocratic', 'Democratic', 'None'], 1, 'Quick decisions are needed.'],
        ['A manager asks the team to vote on a new schedule. This is…', ['Autocratic', 'Paternalistic', 'Democratic', 'Laissez-faire'], 2, 'Staff are involved in the decision.'],
        ['Laissez-faire leadership works best with…', ['Unskilled new staff', 'Highly skilled, motivated staff', 'Staff in a crisis', 'Large factories'], 1, 'They can work independently.'],
      ],
    ),
    '2.4': C(
      [
        'Motivation is the drive to work hard. Content theories include Taylor’s scientific management, focusing on pay; Maslow’s hierarchy of needs; and Herzberg’s two-factor theory of hygiene factors and motivators.',
        'Process theories include Adams’ equity theory, workers compare their rewards with others, and Pink’s drive theory of autonomy, mastery and purpose.',
        'Financial rewards include salary, wages, commission, profit-related pay, performance-related pay, share ownership and fringe benefits.',
        'Non-financial rewards include job enrichment, job rotation, empowerment, teamwork and purpose. Demotivation leads to absenteeism and high labour turnover.',
      ],
      [
        ['Maslow’s hierarchy', 'Physiological, safety, social, esteem, self-actualisation.'],
        ['Herzberg’s hygiene factors', 'Pay, conditions, security: prevent dissatisfaction but don’t motivate.'],
        ['Pink’s drive theory', 'Autonomy, mastery, purpose.'],
        ['Job enrichment', 'Giving more challenging, responsible tasks.'],
      ],
      [
        ['According to Herzberg, salary is a…', ['Motivator', 'Hygiene factor', 'Self-actualisation need', 'Non-financial reward'], 1, 'Pay prevents dissatisfaction but doesn’t motivate long-term.'],
        ['The top level of Maslow’s hierarchy is…', ['Safety', 'Esteem', 'Self-actualisation', 'Social'], 2, 'Reaching one’s full potential.'],
        ['Letting workers choose how to do their tasks relates to Pink’s…', ['Purpose', 'Autonomy', 'Mastery', 'Equity'], 1, 'Autonomy means self-direction.'],
      ],
    ),
    '2.5': C(
      [
        'Organizational culture is the shared values, beliefs and norms of an organization: “the way things are done around here”.',
        'Handy’s cultures include power, role, task and person cultures.',
        'Culture clashes can occur after mergers, or when leadership changes, lowering morale and productivity.',
        'Individuals influence culture, and culture influences individuals. Changing culture is slow and needs strong leadership.',
      ],
      [
        ['Organizational culture', 'Shared values and norms of an organization.'],
        ['Handy’s cultures', 'Power, role, task, person.'],
        ['Culture clash', 'Conflict when different cultures meet, e.g. after a merger.'],
        ['Task culture', 'Focus on teams and projects.'],
      ],
      [
        ['Two firms merge and staff resist new ways of working. This is…', ['Economies of scale', 'A culture clash', 'Delegation', 'Outsourcing'], 1, 'Different values and norms conflict.'],
        ['A culture built around project teams is a…', ['Power culture', 'Role culture', 'Task culture', 'Person culture'], 2, 'Task cultures focus on getting jobs done.'],
        ['Changing organizational culture is usually…', ['Quick and easy', 'Slow and difficult', 'Unnecessary', 'Automatic'], 1, 'Values and habits take time to shift.'],
      ],
    ),
    '2.6': C(
      [
        'Communication is the transfer of information between people. It can be formal or informal, verbal or written, and internal or external.',
        'Barriers include language, jargon, cultural differences, information overload, noise and poor technology.',
        'Technology like email, messaging and video calls speeds up communication but can cause overload.',
        'Effective communication improves coordination, morale and decision-making.',
      ],
      [
        ['Formal communication', 'Official channels, e.g. reports, meetings.'],
        ['Barrier to communication', 'e.g. jargon, language, overload, noise.'],
        ['Informal communication', 'Unofficial, e.g. conversations, the grapevine.'],
        ['Benefit of effective communication', 'Better coordination and morale.'],
      ],
      [
        ['Using technical words the receiver doesn’t understand is…', ['Jargon', 'Feedback', 'Delegation', 'Culture'], 0, 'Jargon is a common barrier.'],
        ['Too many emails causing important ones to be missed is…', ['Information overload', 'Informal communication', 'Motivation', 'Hierarchy'], 0, 'It overwhelms the receiver.'],
        ['The “grapevine” is an example of…', ['Formal communication', 'Informal communication', 'External communication', 'Written communication'], 1, 'Unofficial word of mouth.'],
      ],
    ),
    '2.7': C(
      [
        'Industrial or employee relations is the relationship between management and employees, often represented by trade unions.',
        'Employee methods of industrial action include negotiations, work-to-rule, go-slows, overtime bans and strikes.',
        'Employer methods include threats of redundancy, changes of contract, closure, and lockouts.',
        'Conflict resolution approaches include conciliation, arbitration, and changes to reward systems. Good relations raise productivity and reduce disputes.',
      ],
      [
        ['Trade union', 'An organization representing workers in negotiations.'],
        ['Work-to-rule', 'Doing only the minimum set out in the contract.'],
        ['Arbitration', 'An independent third party makes a binding decision.'],
        ['Conciliation', 'A third party helps both sides reach agreement.'],
      ],
      [
        ['Employees doing exactly what their contract says, no more, is…', ['A strike', 'Work-to-rule', 'A lockout', 'Arbitration'], 1, 'It slows work without stopping it.'],
        ['An independent third party whose decision both sides must accept is…', ['Conciliation', 'Arbitration', 'Negotiation', 'A go-slow'], 1, 'Binding arbitration decides the outcome.'],
        ['Which is an employer’s method of action?', ['Strike', 'Overtime ban', 'Lockout', 'Go-slow'], 2, 'Employers can lock workers out.'],
      ],
    ),
    '3.1': C(
      [
        'Businesses need finance for capital expenditure, spending on long-term assets like machinery and buildings, and revenue expenditure, day-to-day costs like wages and rent.',
        'Capital expenditure is recorded on the balance sheet; revenue expenditure on the profit and loss account.',
        'Finance is needed to start up, to fund growth, and to cover cash shortfalls.',
        'Choosing the right finance depends on the purpose, the amount, the cost and the business’s legal form.',
      ],
      [
        ['Capital expenditure', 'Spending on long-term assets, e.g. machinery.'],
        ['Revenue expenditure', 'Spending on day-to-day costs, e.g. wages.'],
        ['Where capital expenditure appears', 'The statement of financial position (balance sheet).'],
        ['Why businesses need finance', 'Start-up, growth, and covering cash shortfalls.'],
      ],
      [
        ['Buying a delivery van is…', ['Revenue expenditure', 'Capital expenditure', 'A liability', 'Revenue'], 1, 'It is a long-term asset.'],
        ['Paying monthly electricity bills is…', ['Capital expenditure', 'Revenue expenditure', 'An asset', 'Equity'], 1, 'It is a day-to-day cost.'],
        ['Which factor affects the choice of finance?', ['The purpose of the finance', 'The company logo', 'The CEO’s age', 'The weather'], 0, 'Long-term needs suit long-term finance.'],
      ],
    ),
    '3.2': C(
      [
        'Internal sources of finance include personal funds, retained profit and the sale of assets.',
        'External sources include share capital, loan capital, overdrafts, trade credit, grants, subsidies, debt factoring, leasing, microfinance and business angels.',
        'Short-term finance, like overdrafts and trade credit, covers day-to-day needs. Long-term finance, like loans and share capital, funds major investment.',
        'Each source has costs and drawbacks: loans need interest; issuing shares dilutes ownership.',
      ],
      [
        ['Retained profit', 'Profit kept in the business rather than paid to owners.'],
        ['Share capital', 'Money raised by selling shares.'],
        ['Trade credit', 'Buying now and paying suppliers later.'],
        ['Debt factoring', 'Selling debts owed to the business to a third party for cash now.'],
      ],
      [
        ['Which is an internal source of finance?', ['Bank loan', 'Retained profit', 'Overdraft', 'Share issue'], 1, 'It comes from within the business.'],
        ['A drawback of issuing new shares is…', ['Interest payments', 'Dilution of ownership and control', 'Must be repaid', 'Short-term only'], 1, 'More owners share control.'],
        ['The best source for a short-term cash gap is often…', ['Share capital', 'An overdraft', 'A 20-year loan', 'Selling the factory'], 1, 'Overdrafts are flexible and short-term.'],
      ],
    ),
    '3.3': C(
      [
        'Fixed costs don’t change with output, like rent. Variable costs change with output, like raw materials. Total cost equals fixed plus variable.',
        'Direct costs can be linked to a specific product; indirect costs, or overheads, cannot.',
        'Total revenue equals price times quantity sold. Businesses may have several revenue streams, such as sales, subscriptions, advertising and licensing.',
        'Profit equals total revenue minus total cost.',
      ],
      [
        ['Fixed cost', 'Doesn’t change with output, e.g. rent.'],
        ['Variable cost', 'Changes with output, e.g. raw materials.'],
        ['Total revenue', 'Price × quantity sold'],
        ['Revenue stream', 'A source of revenue, e.g. sales, subscriptions.'],
      ],
      [
        ['Which is a fixed cost?', ['Raw materials', 'Rent', 'Packaging', 'Commission'], 1, 'Rent stays the same regardless of output.'],
        ['Price $8, quantity 500. Total revenue =', ['$508', '$4000', '$62.50', '$400'], 1, '8 × 500.'],
        ['TR $10 000, FC $3000, VC $4000. Profit =', ['$3000', '$7000', '$10 000', '$1000'], 0, '10 000 − 7000.'],
      ],
    ),
    '3.4': C(
      [
        'Final accounts show a business’s financial performance and position.',
        'The statement of profit or loss shows revenue, cost of sales, gross profit, expenses and profit over a period. Gross profit equals sales revenue minus cost of sales.',
        'The statement of financial position, or balance sheet, shows assets, liabilities and equity at one point in time. Net assets equal equity.',
        'Depreciation spreads the cost of an asset over its life, using the straight-line method or, at HL, units of production. Stakeholders use accounts to judge performance.',
      ],
      [
        ['Gross profit', 'Sales revenue − cost of sales'],
        ['Statement of financial position', 'Shows assets, liabilities and equity at a point in time.'],
        ['Current asset', 'Expected to become cash within a year, e.g. inventory.'],
        ['Straight-line depreciation', '(Cost − residual value) ÷ useful life'],
      ],
      [
        ['A machine costs $10 000, residual value $2000, life 4 years. Annual depreciation', ['$2000', '$2500', '$3000', '$8000'], 0, '(10 000 − 2000) ÷ 4.'],
        ['Which is a current liability?', ['A 10-year loan', 'Money owed to suppliers (payables)', 'Buildings', 'Share capital'], 1, 'Due within a year.'],
        ['Sales $50 000, cost of sales $30 000. Gross profit', ['$80 000', '$20 000', '$30 000', '$50 000'], 1, '50 000 − 30 000.'],
      ],
    ),
    '3.5': C(
      [
        'Ratio analysis helps judge performance. Profitability ratios include the gross profit margin and the profit margin.',
        'Gross profit margin equals gross profit over sales revenue, times 100. Profit margin equals profit before interest and tax over sales revenue, times 100.',
        'Return on capital employed, ROCE, equals profit before interest and tax over capital employed, times 100: how efficiently capital generates profit.',
        'Liquidity ratios: the current ratio is current assets over current liabilities, ideally between 1.5 and 2; the acid test excludes inventory, ideally around 1.',
      ],
      [
        ['Gross profit margin', '(Gross profit ÷ sales revenue) × 100'],
        ['ROCE', '(Profit before interest and tax ÷ capital employed) × 100'],
        ['Current ratio', 'Current assets ÷ current liabilities'],
        ['Acid test ratio', '(Current assets − inventory) ÷ current liabilities'],
      ],
      [
        ['Gross profit $40 000, sales $100 000. GPM =', ['40%', '60%', '2.5%', '140%'], 0, '40 000 ÷ 100 000 × 100.'],
        ['Current assets $30 000, current liabilities $20 000. Current ratio', ['0.67', '1.5', '10', '50'], 1, '30 000 ÷ 20 000.'],
        ['The acid test excludes…', ['Cash', 'Inventory', 'Receivables', 'Payables'], 1, 'Inventory may not sell quickly.'],
      ],
    ),
    '3.6': C(
      [
        'Efficiency ratios show how well a business manages its resources.',
        'Stock turnover shows how quickly inventory is sold: cost of sales divided by average stock, or in days.',
        'Debtor days is how long customers take to pay; creditor days is how long the business takes to pay suppliers.',
        'The gearing ratio, non-current liabilities over capital employed, shows how much finance comes from long-term debt. Above 50 percent is highly geared and riskier.',
      ],
      [
        ['Stock turnover (times)', 'Cost of sales ÷ average stock'],
        ['Debtor days', '(Debtors ÷ total sales revenue) × 365'],
        ['Creditor days', '(Creditors ÷ cost of sales) × 365'],
        ['Gearing ratio', '(Non-current liabilities ÷ capital employed) × 100'],
      ],
      [
        ['A gearing ratio of 65% means the business is…', ['Low geared', 'Highly geared', 'Very liquid', 'Unprofitable'], 1, 'Over half its capital is long-term debt.'],
        ['Cost of sales $60 000, average stock $10 000. Stock turnover', ['6 times', '0.17 times', '60 times', '10 times'], 0, '60 000 ÷ 10 000.'],
        ['Reducing debtor days improves…', ['Gearing', 'Cash flow', 'Gross profit', 'Market share'], 1, 'Customers pay sooner.'],
      ],
    ),
    '3.7': C(
      [
        'Profit and cash flow are different: a profitable business can still fail if it runs out of cash.',
        'A cash flow forecast shows expected cash inflows and outflows each month, the net cash flow, and opening and closing balances.',
        'Working capital is current assets minus current liabilities; the working capital cycle is the time between paying for materials and receiving cash from sales.',
        'To fix cash flow problems: reduce outflows, like delaying payments, or increase inflows, like chasing debtors, cutting prices for quick sales, or using an overdraft.',
      ],
      [
        ['Net cash flow', 'Cash inflows − cash outflows'],
        ['Closing balance', 'Opening balance + net cash flow'],
        ['Working capital', 'Current assets − current liabilities'],
        ['Profit vs cash flow', 'Profit can exist without cash available.'],
      ],
      [
        ['Opening balance $5000, inflows $8000, outflows $10 000. Closing balance', ['$3000', '$7000', '$13 000', '−$2000'], 0, '5000 + (8000 − 10 000).'],
        ['Which improves cash flow?', ['Paying suppliers earlier', 'Chasing customers who owe money', 'Buying more stock', 'Offering longer credit to customers'], 1, 'It brings cash in sooner.'],
        ['A profitable business can fail because of…', ['High profit', 'Poor cash flow', 'Low costs', 'Strong sales'], 1, 'It can’t pay its bills on time.'],
      ],
    ),
    '3.8': C(
      [
        'Investment appraisal judges whether an investment is worth it.',
        'The payback period is how long it takes for net cash flows to repay the initial cost. Shorter payback means less risk.',
        'Average rate of return, ARR, is the average annual profit divided by the initial cost, times 100.',
        'Net present value, NPV, discounts future cash flows to today’s value: a positive NPV means the project is worthwhile. Consider non-financial factors too.',
      ],
      [
        ['Payback period', 'Time taken to recover the initial investment.'],
        ['ARR', '(Average annual profit ÷ initial investment) × 100'],
        ['NPV', 'Sum of discounted future cash flows − initial cost'],
        ['Positive NPV means…', 'The investment adds value.'],
      ],
      [
        ['Cost $10 000; net inflows $2500 per year. Payback =', ['2 years', '4 years', '2.5 years', '5 years'], 1, '10 000 ÷ 2500.'],
        ['Total profit over 5 years $5000, cost $10 000. ARR =', ['10%', '50%', '20%', '5%'], 0, 'Average profit 1000; 1000 ÷ 10 000 × 100.'],
        ['NPV discounts future cash flows because…', ['Money today is worth more than money later', 'Inflation is zero', 'Profit is certain', 'Costs rise'], 0, 'Time value of money.'],
      ],
    ),
    '3.9': C(
      [
        'A budget is a financial plan for the future. Income budgets and expenditure budgets help control spending.',
        'Budgets can be held by cost centres, which incur costs, and profit centres, which generate revenue as well.',
        'Variance analysis compares budgeted and actual figures. A favourable variance improves profit; an adverse variance reduces it.',
        'Budgets help planning, coordination and motivation, but can be inflexible or based on inaccurate forecasts.',
      ],
      [
        ['Budget', 'A financial plan for a future period.'],
        ['Variance', 'Difference between budgeted and actual figures.'],
        ['Adverse variance', 'Actual results worse than budget.'],
        ['Profit centre', 'Part of a business that earns revenue and incurs costs.'],
      ],
      [
        ['Budgeted costs $5000, actual costs $6000. The variance is', ['$1000 favourable', '$1000 adverse', '$11 000', 'Zero'], 1, 'Higher costs reduce profit.'],
        ['Budgeted sales $8000, actual $9000. Variance', ['$1000 favourable', '$1000 adverse', '$17 000', 'Zero'], 0, 'Higher revenue improves profit.'],
        ['A department that only incurs costs is a…', ['Profit centre', 'Cost centre', 'Revenue stream', 'Subsidiary'], 1, 'e.g. HR department.'],
      ],
    ),
    '4.1': C(
      [
        'Marketing identifies and meets customer needs profitably.',
        'A market-oriented business researches customers first; a product-oriented business focuses on making a good product.',
        'Market share is the firm’s sales divided by total market sales, times 100. Market growth measures how fast the market is expanding.',
        'Marketing of goods differs from services, and social marketing promotes behaviour that benefits society, like anti-smoking campaigns.',
      ],
      [
        ['Market orientation', 'Focus on customer needs first.'],
        ['Market share', '(Firm’s sales ÷ total market sales) × 100'],
        ['Social marketing', 'Marketing to change behaviour for social good.'],
        ['Product orientation', 'Focus on the product’s quality and features first.'],
      ],
      [
        ['A firm sells $2m in a $20m market. Market share', ['2%', '10%', '20%', '40%'], 1, '2 ÷ 20 × 100.'],
        ['A firm that designs products based on customer surveys is…', ['Product-oriented', 'Market-oriented', 'Asset-led', 'Cost-led'], 1, 'Customer needs come first.'],
        ['An anti-smoking campaign is an example of…', ['Guerrilla marketing', 'Social marketing', 'Price skimming', 'Market research'], 1, 'It aims to change behaviour for social benefit.'],
      ],
    ),
    '4.2': C(
      [
        'A marketing plan sets objectives and strategies. The four Ps, product, price, promotion and place, form the basic marketing mix.',
        'Market segmentation divides the market into groups by demographics, geography, psychographics or behaviour. The business then chooses a target market.',
        'Mass marketing sells to the whole market; niche marketing targets a small segment.',
        'A position map places brands by two features, like price and quality, to find gaps. A unique selling point, USP, differentiates a product from competitors.',
      ],
      [
        ['Market segmentation', 'Dividing a market into groups with similar characteristics.'],
        ['Niche market', 'A small, specialised segment.'],
        ['Position map', 'Plots brands on two features to find gaps.'],
        ['USP', 'Unique selling point: what makes a product different.'],
      ],
      [
        ['Grouping customers by age and income is…', ['Psychographic segmentation', 'Demographic segmentation', 'Geographic segmentation', 'Mass marketing'], 1, 'Age and income are demographic.'],
        ['A luxury electric sports car targets a…', ['Mass market', 'Niche market', 'Public sector', 'Commodity market'], 1, 'A small, specialised segment.'],
        ['A gap on a position map may show…', ['No customers', 'A market opportunity', 'Overcrowding', 'A loss'], 1, 'An unmet combination of features.'],
      ],
    ),
    '4.3': C(
      [
        'Sales forecasting predicts future sales to plan production, finance and staffing.',
        'Moving averages smooth out fluctuations to reveal the trend.',
        'Variations include seasonal, cyclical and random variations, which are the differences between actual values and the trend.',
        'Forecasts are useful but uncertain; they rely on past data and assume conditions stay similar.',
      ],
      [
        ['Moving average', 'Average of consecutive periods to reveal the trend.'],
        ['Seasonal variation', 'Regular changes at certain times of year.'],
        ['Random variation', 'Unpredictable changes from one-off events.'],
        ['Limitation of forecasting', 'Assumes the past predicts the future.'],
      ],
      [
        ['Sales of 10, 14, 12. Three-period moving average', ['12', '36', '14', '10'], 0, '36 ÷ 3.'],
        ['Higher ice cream sales every summer are…', ['Random variation', 'Seasonal variation', 'Cyclical variation', 'The trend'], 1, 'They repeat each year.'],
        ['Moving averages are used to…', ['Hide the trend', 'Identify the trend', 'Set prices', 'Measure profit'], 1, 'They smooth out short-term fluctuations.'],
      ],
    ),
    '4.4': C(
      [
        'Market research collects information about customers, competitors and markets.',
        'Primary research gathers new data, through surveys, interviews, focus groups and observation. Secondary research uses existing data, like reports and government statistics.',
        'Sampling methods include quota, random, stratified, cluster, snowballing and convenience sampling.',
        'Qualitative data explores opinions and reasons; quantitative data is numerical. Ethical research needs consent and honesty, and results can suffer from bias.',
      ],
      [
        ['Primary research', 'New data collected first-hand.'],
        ['Secondary research', 'Existing data collected by others.'],
        ['Qualitative data', 'Opinions and reasons, non-numerical.'],
        ['Quota sampling', 'Selecting set numbers from each group.'],
      ],
      [
        ['A focus group is…', ['Secondary research', 'Primary research', 'Quantitative only', 'A sampling error'], 1, 'New data from a discussion group.'],
        ['Government population statistics are…', ['Primary data', 'Secondary data', 'Qualitative data', 'A focus group'], 1, 'Collected by someone else.'],
        ['An advantage of secondary research is that it is…', ['Tailored exactly', 'Cheap and quick', 'Always current', 'Confidential'], 1, 'The data already exists.'],
      ],
    ),
    '4.5': C(
      [
        'The seven Ps marketing mix is product, price, promotion, place, people, processes and physical evidence. The last three matter especially for services.',
        'Product: the product life cycle has development, launch, growth, maturity and decline; extension strategies prolong maturity. Branding builds recognition and loyalty.',
        'Price strategies include cost-plus, penetration, skimming, psychological, loss leader, price discrimination, dynamic and competitive pricing.',
        'Promotion can be above the line, like TV ads, or below the line, like sponsorship and social media. Place covers distribution channels.',
      ],
      [
        ['Seven Ps', 'Product, price, promotion, place, people, processes, physical evidence.'],
        ['Price skimming', 'Launching at a high price, then lowering it.'],
        ['Penetration pricing', 'Launching at a low price to gain market share.'],
        ['Extension strategy', 'Actions to prolong a product’s maturity stage.'],
      ],
      [
        ['A new games console launched at a high price is using…', ['Penetration pricing', 'Price skimming', 'Loss leader', 'Cost-plus'], 1, 'Early adopters pay more.'],
        ['Adding new flavours to an old snack is…', ['A launch', 'An extension strategy', 'A decline', 'Penetration pricing'], 1, 'It prolongs the life cycle.'],
        ['In a restaurant, the décor is part of…', ['Price', 'Physical evidence', 'Place', 'Processes'], 1, 'Tangible cues for a service.'],
      ],
    ),
    '4.6': C(
      [
        'International marketing sells products in other countries.',
        'Methods of entry include exporting, joint ventures, franchising, licensing, strategic alliances and direct investment.',
        'Opportunities include larger markets and spreading risk. Threats include cultural differences, language, legal requirements, exchange rate risk and political instability.',
        'Businesses must decide whether to standardise their marketing mix globally or adapt it to local markets: “think global, act local”.',
      ],
      [
        ['International marketing', 'Marketing products in other countries.'],
        ['Methods of entry', 'Exporting, franchising, licensing, joint ventures, direct investment.'],
        ['Cultural difference', 'Differences in values or customs affecting marketing.'],
        ['Glocalisation', 'Adapting a global product to local markets.'],
      ],
      [
        ['A fast-food chain offering vegetarian menus in India is…', ['Standardisation', 'Glocalisation', 'Price skimming', 'Exporting'], 1, 'Adapting to local tastes.'],
        ['A risk of international marketing is…', ['Larger markets', 'Exchange rate changes', 'More customers', 'Economies of scale'], 1, 'Currency changes affect revenue and costs.'],
        ['Allowing a foreign firm to use your patent for a fee is…', ['Franchising', 'Licensing', 'Joint venture', 'Exporting'], 1, 'Licensing grants rights to intellectual property.'],
      ],
    ),
    '5.1': C(
      [
        'Operations management organizes the production of goods and services, turning inputs into outputs efficiently.',
        'It links closely with other functions: marketing forecasts demand, finance funds resources, and HR provides staff.',
        'Operations are increasingly judged on sustainability: economic, social and environmental.',
        'Good operations management balances cost, quality, speed and flexibility.',
      ],
      [
        ['Operations management', 'Organizing the production of goods and services.'],
        ['Inputs to production', 'Land, labour, capital, enterprise.'],
        ['Sustainability in operations', 'Economic, social and environmental.'],
        ['Operations trade-offs', 'Cost, quality, speed, flexibility.'],
      ],
      [
        ['Operations management mainly deals with…', ['Advertising', 'Producing goods and services', 'Setting share prices', 'Recruiting only'], 1, 'Turning inputs into outputs.'],
        ['Reducing packaging waste improves…', ['Environmental sustainability', 'Gearing', 'Market share only', 'Liquidity'], 0, 'Less environmental impact.'],
        ['Operations depends on marketing for…', ['Demand forecasts', 'Salaries', 'Accounts', 'Loans'], 0, 'Production must match expected demand.'],
      ],
    ),
    '5.2': C(
      [
        'Job production makes one-off, customised products, like a wedding dress. It is high quality but costly.',
        'Batch production makes groups of identical products, like bread, allowing some flexibility.',
        'Mass or flow production makes large volumes continuously, like cars, with low unit costs but little flexibility.',
        'Mass customisation combines flexible technology with mass production, letting customers personalise products. Businesses often combine methods.',
      ],
      [
        ['Job production', 'One-off, customised products.'],
        ['Batch production', 'Groups of identical items produced together.'],
        ['Mass production', 'Large volumes produced continuously.'],
        ['Mass customisation', 'Mass production with personalisation options.'],
      ],
      [
        ['A tailor making a bespoke suit uses…', ['Batch production', 'Job production', 'Mass production', 'Flow production'], 1, 'One-off, made to order.'],
        ['A bakery making 200 loaves then switching to cakes uses…', ['Job production', 'Batch production', 'Flow production', 'Mass customisation'], 1, 'Groups of identical products.'],
        ['Choosing colours and engraving for a mass-produced phone is…', ['Job production', 'Mass customisation', 'Batch production', 'Outsourcing'], 1, 'Personalisation at scale.'],
      ],
    ),
    '5.3': C(
      [
        'Lean production aims to reduce waste of all kinds: time, materials, space and effort.',
        'Methods include continuous improvement, kaizen; just-in-time stock control, where materials arrive only when needed; kanban signals; and Andon cords to stop production when problems appear.',
        'Quality control inspects finished products; quality assurance builds quality into every stage. Total quality management involves everyone.',
        'Benchmarking compares performance with the best. National and international quality standards, like ISO, build customer confidence.',
      ],
      [
        ['Kaizen', 'Continuous small improvements.'],
        ['Just-in-time (JIT)', 'Materials arrive only when needed; minimal stock.'],
        ['Quality assurance', 'Preventing faults by checking at every stage.'],
        ['Benchmarking', 'Comparing performance with industry leaders.'],
      ],
      [
        ['A risk of just-in-time is…', ['High storage costs', 'Disruption if a supplier is late', 'Too much stock', 'Low quality'], 1, 'There is no buffer stock.'],
        ['Checking products only at the end of production is…', ['Quality assurance', 'Quality control', 'Kaizen', 'TQM'], 1, 'It detects faults after they occur.'],
        ['Kaizen means…', ['Mass production', 'Continuous improvement', 'Just-in-time', 'Outsourcing'], 1, 'Small ongoing improvements.'],
      ],
    ),
    '5.4': C(
      [
        'Location decisions consider quantitative factors, like costs of land, labour and transport, and qualitative factors, like quality of life, infrastructure and government support.',
        'Reorganizing production can involve outsourcing, contracting out tasks; offshoring, moving operations abroad; insourcing; and reshoring, bringing them back.',
        'Offshoring can cut costs but may cause quality, communication and ethical concerns.',
        'Global supply chains increase efficiency but can be disrupted by crises.',
      ],
      [
        ['Offshoring', 'Moving operations to another country.'],
        ['Reshoring', 'Bringing operations back to the home country.'],
        ['Quantitative location factor', 'e.g. cost of land or labour.'],
        ['Qualitative location factor', 'e.g. quality of life, political stability.'],
      ],
      [
        ['Moving a call centre abroad is…', ['Reshoring', 'Offshoring', 'Insourcing', 'Downsizing'], 1, 'Operations move overseas.'],
        ['Which is a qualitative location factor?', ['Rent', 'Wage rates', 'Local quality of life', 'Transport costs'], 2, 'It can’t easily be measured in money.'],
        ['A firm bringing manufacturing back home is…', ['Offshoring', 'Reshoring', 'Outsourcing', 'Franchising'], 1, 'Reversing offshoring.'],
      ],
    ),
    '5.5': C(
      [
        'Break-even is the level of output where total revenue equals total costs, so the business makes neither a profit nor a loss.',
        'Contribution per unit is price minus average variable cost. It is the amount each unit sold contributes towards paying fixed costs.',
        'Break-even quantity equals fixed costs divided by contribution per unit. For example, fixed costs of 10,000 dollars, a price of 25 and a variable cost of 15 gives 10,000 divided by 10, which is 1,000 units.',
        'The margin of safety is actual output minus break-even output. Target profit output is fixed costs plus the target profit, divided by contribution per unit.',
        'Evaluate its limitations: it assumes all output is sold, costs and prices stay constant, and it suits single-product firms best.',
      ],
      [
        ['Contribution per unit', 'Price − average variable cost'],
        ['Break-even quantity', 'Fixed costs ÷ contribution per unit'],
        ['Margin of safety', 'Actual output − break-even output'],
        ['Target profit output', '(Fixed costs + target profit) ÷ contribution per unit'],
      ],
      [
        ['Fixed costs $10 000, price $25, variable cost $15 per unit. Break-even quantity?', ['400', '667', '1000', '2500'], 2, '10 000 ÷ (25 − 15) = 1000 units.'],
        ['Output 1400 units, break-even 1000 units. Margin of safety?', ['400 units', '1000 units', '2400 units', '1.4'], 0, '1400 − 1000 = 400 units.'],
        ['If the price rises, the break-even quantity…', ['Rises', 'Falls', 'Stays the same', 'Becomes zero'], 1, 'Contribution per unit increases.'],
      ],
    ),
    '5.6': C(
      [
        'Production planning ensures the right materials are available at the right time.',
        'Stock control charts show the buffer stock, the reorder level, the lead time and the reorder quantity. Just-in-case keeps extra stock as a safety buffer.',
        'Capacity utilisation equals actual output over productive capacity, times 100. Productivity measures output per worker or per machine.',
        'Make-or-buy decisions compare the cost of producing a component in-house with buying it: cost to buy equals price times quantity; cost to make equals fixed plus variable costs.',
      ],
      [
        ['Buffer stock', 'Minimum stock held for emergencies.'],
        ['Lead time', 'Time between ordering and receiving stock.'],
        ['Capacity utilisation', '(Actual output ÷ productive capacity) × 100'],
        ['Labour productivity', 'Output ÷ number of workers'],
      ],
      [
        ['A factory can make 1000 units and makes 800. Capacity utilisation', ['80%', '125%', '20%', '800%'], 0, '800 ÷ 1000 × 100.'],
        ['Stock should be reordered when it reaches the…', ['Buffer level', 'Reorder level', 'Maximum level', 'Zero'], 1, 'Allowing for the lead time.'],
        ['10 workers make 500 units. Labour productivity', ['50 units per worker', '5000 units', '10 units', '0.02'], 0, '500 ÷ 10.'],
      ],
    ),
    '5.7': C(
      [
        'Crisis management responds to unexpected events that threaten a business, such as product recalls, cyberattacks or natural disasters.',
        'Effective crisis management needs transparency, clear communication, speed and control.',
        'Contingency planning prepares for crises in advance, identifying risks and planning responses.',
        'Contingency plans cost time and money, and may date quickly, but can reduce damage and speed recovery.',
      ],
      [
        ['Crisis management', 'Responding to an unexpected threatening event.'],
        ['Contingency planning', 'Preparing responses to possible crises in advance.'],
        ['Key factors in crisis management', 'Transparency, communication, speed, control.'],
        ['Drawback of contingency planning', 'Costly and may become outdated.'],
      ],
      [
        ['Preparing a plan for a possible data breach is…', ['Crisis management', 'Contingency planning', 'Lean production', 'Marketing'], 1, 'It happens before the crisis.'],
        ['Hiding information during a product recall usually…', ['Builds trust', 'Damages reputation', 'Speeds recovery', 'Has no effect'], 1, 'Transparency is key in a crisis.'],
        ['A limitation of contingency plans is that they…', ['Are free', 'Can become outdated', 'Guarantee success', 'Remove all risk'], 1, 'Risks change over time.'],
      ],
    ),
    '5.8': C(
      [
        'Research and development, R and D, creates new products and processes to meet customer needs and stay competitive.',
        'Intellectual property, such as patents, copyrights and trademarks, protects innovations.',
        'Innovation can be incremental, small improvements, or disruptive, creating new markets. Adaptive and innovative creativity both matter.',
        'R and D is costly and risky, but can give a competitive advantage. Pirating and imitation are threats to intellectual property.',
      ],
      [
        ['R&D', 'Research and development of new products and processes.'],
        ['Patent', 'Legal right to exclusively make and sell an invention for a period.'],
        ['Incremental innovation', 'Small improvements to existing products.'],
        ['Disruptive innovation', 'Innovation that creates new markets and displaces old ones.'],
      ],
      [
        ['Streaming services replacing DVD rentals is…', ['Incremental innovation', 'Disruptive innovation', 'Price skimming', 'Kaizen'], 1, 'It transformed the market.'],
        ['A patent protects…', ['A brand name', 'An invention', 'A song', 'A logo'], 1, 'Trademarks protect brands; copyright protects creative works.'],
        ['A drawback of R&D is that it is…', ['Cheap and certain', 'Costly and risky', 'Always profitable', 'Unnecessary'], 1, 'Many projects fail.'],
      ],
    ),
    '5.9': C(
      [
        'Management information systems collect and analyse data to help managers make decisions.',
        'Technologies include data analytics, big data, databases, cloud computing, artificial intelligence, the Internet of Things, virtual reality and customer loyalty programmes.',
        'Data mining finds patterns in large data sets, helping target marketing and predict demand.',
        'There are ethical issues: data privacy, cybersecurity, and the effect of AI on employment.',
      ],
      [
        ['Management information system', 'A system that collects and analyses data for decision-making.'],
        ['Big data', 'Very large data sets analysed for patterns.'],
        ['Data mining', 'Finding patterns and relationships in large data sets.'],
        ['Ethical concern', 'Privacy and security of customer data.'],
      ],
      [
        ['A supermarket using loyalty card data to predict demand uses…', ['Data mining', 'Job production', 'Kaizen', 'Arbitration'], 0, 'It analyses purchasing patterns.'],
        ['A main ethical issue with big data is…', ['Faster decisions', 'Customer privacy', 'Lower costs', 'Better targeting'], 1, 'Personal data must be protected.'],
        ['Storing data on remote servers accessed via the internet is…', ['Cloud computing', 'Batch production', 'Outsourcing labour', 'Benchmarking'], 0, 'Data is held in the cloud.'],
      ],
    ),
    TK1: C(
      [
        'A SWOT analysis lists a business’s internal strengths and weaknesses, and external opportunities and threats.',
        'A STEEPLE analysis examines the external environment: social, technological, economic, environmental, political, legal and ethical factors.',
        'The Ansoff matrix shows four growth strategies: market penetration, product development, market development and diversification, from least to most risky.',
        'The Boston Consulting Group matrix classifies products by market share and market growth as stars, cash cows, question marks and dogs.',
      ],
      [
        ['SWOT', 'Strengths, weaknesses (internal); opportunities, threats (external).'],
        ['STEEPLE', 'Social, technological, economic, environmental, political, legal, ethical.'],
        ['Ansoff: most risky strategy', 'Diversification (new products, new markets).'],
        ['BCG cash cow', 'High market share in a low-growth market.'],
      ],
      [
        ['A new competitor entering the market is a…', ['Strength', 'Weakness', 'Opportunity', 'Threat'], 3, 'It is an external negative factor.'],
        ['Selling existing products in a new country is…', ['Market penetration', 'Product development', 'Market development', 'Diversification'], 2, 'Existing product, new market.'],
        ['A product with low share in a fast-growing market is a…', ['Star', 'Cash cow', 'Question mark', 'Dog'], 2, 'It needs investment to grow share.'],
      ],
    ),
    TK2: C(
      [
        'Decision trees show choices, uncertain outcomes with probabilities, and payoffs. The expected value of each option helps choose the best.',
        'Force field analysis weighs driving forces for a change against restraining forces against it, each given a score.',
        'Porter’s generic strategies are cost leadership, differentiation, and focus on a niche.',
        'Hofstede’s cultural dimensions, like power distance and individualism, help businesses understand cultural differences in international markets.',
      ],
      [
        ['Expected value (decision tree)', 'Σ probability × outcome, minus cost.'],
        ['Force field analysis', 'Compares driving forces and restraining forces for a change.'],
        ['Porter’s generic strategies', 'Cost leadership, differentiation, focus.'],
        ['Hofstede’s dimensions', 'e.g. power distance, individualism, uncertainty avoidance.'],
      ],
      [
        ['An option has 0.6 chance of $100 000 and 0.4 of $20 000. Expected value', ['$60 000', '$68 000', '$120 000', '$80 000'], 1, '60 000 + 8000.'],
        ['Competing on being the cheapest producer is…', ['Differentiation', 'Cost leadership', 'Focus', 'Diversification'], 1, 'Porter’s cost leadership.'],
        ['Staff resistance to a change is a…', ['Driving force', 'Restraining force', 'Probability', 'Payoff'], 1, 'It works against the change.'],
      ],
    ),
    TK3: C(
      [
        'A Gantt chart shows tasks as bars on a timeline, making it easy to see what happens when.',
        'Critical path analysis finds the sequence of tasks that determines the minimum project time. Tasks on the critical path have zero float.',
        'Float is how long a task can be delayed without delaying the whole project.',
        'Descriptive statistics, like mean, median, mode and charts, summarise data. Circular business models aim to keep resources in use for as long as possible.',
      ],
      [
        ['Gantt chart', 'Bar chart showing tasks over time.'],
        ['Critical path', 'The longest sequence of dependent tasks; sets the minimum project time.'],
        ['Total float', 'How long a task can be delayed without delaying the project.'],
        ['Circular business model', 'Reusing, repairing and recycling to keep resources in use.'],
      ],
      [
        ['Tasks on the critical path have float of…', ['Zero', 'One day', 'Maximum', 'Negative'], 0, 'Any delay delays the project.'],
        ['A chart showing tasks as bars across a timeline is a…', ['Decision tree', 'Gantt chart', 'Position map', 'BCG matrix'], 1, 'It schedules tasks visually.'],
        ['A phone maker offering repairs and refurbishing supports a…', ['Linear model', 'Circular business model', 'Cost-plus model', 'Tall structure'], 1, 'Products stay in use longer.'],
      ],
    ),
  },
};

export default content;
