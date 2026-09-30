import type { SubjectContentFile } from '../types';
import { C } from './helpers';

const content: SubjectContentFile = {
  units: {
    '1': [
      'Unit 1 introduces economics as the study of how societies use scarce resources to meet unlimited wants.',
      'You will meet the key concepts that run through the whole course: scarcity, choice, efficiency, equity, economic well-being, sustainability, change, interdependence and intervention.',
      'You will also see how economists build models, use the ceteris paribus assumption, and why their conclusions can differ.',
    ],
    '2': [
      'Unit 2, microeconomics, looks at individual markets: how consumers and producers behave and how prices are set.',
      'You will study demand, supply, equilibrium and elasticities, then why markets sometimes fail, through externalities, public goods and, at HL, asymmetric information, market power and inequity.',
      'Diagrams are essential here. Every answer should include a fully labelled diagram explained in words.',
    ],
    '3': [
      'Unit 3, macroeconomics, looks at the whole economy: output, unemployment, inflation and inequality.',
      'You will use the aggregate demand and aggregate supply model and evaluate monetary, fiscal and supply-side policies.',
      'Strong answers link theory to real-world examples with recent data.',
    ],
    '4': [
      'Unit 4, the global economy, covers international trade, exchange rates and the balance of payments.',
      'It then turns to development: how it is measured, what holds countries back, and which strategies promote growth and sustainable development.',
      'Many Paper 2 and Paper 3 questions draw on this unit, so practise applying it to specific countries.',
    ],
  },
  chapters: {
    '1.1': C(
      [
        'Economics studies how individuals, firms and governments make choices about allocating scarce resources. Scarcity exists because human wants are unlimited while resources are limited.',
        'The factors of production are land, labour, capital and entrepreneurship. Their rewards are rent, wages, interest and profit.',
        'Because resources are scarce, every choice has an opportunity cost: the value of the next best alternative given up.',
        'A production possibilities curve, PPC, shows the maximum combinations of two goods an economy can produce. Points inside the curve show unemployed resources; an outward shift shows economic growth.',
        'Every economy must answer three basic questions: what to produce, how to produce it, and for whom.',
      ],
      [
        ['Scarcity', 'Unlimited wants but limited resources, so choices must be made.'],
        ['Opportunity cost', 'The value of the next best alternative forgone.'],
        ['Four factors of production', 'Land, labour, capital, entrepreneurship.'],
        ['Point inside a PPC', 'Unemployed or inefficiently used resources.'],
      ],
      [
        ['A student chooses to study instead of working a $50 shift. The opportunity cost is…', ['Nothing, studying is free', 'The $50 wage given up', 'The cost of textbooks', 'Tuition fees'], 1, 'Opportunity cost is the next best alternative forgone: the lost wage.'],
        ['An outward shift of the PPC shows…', ['Unemployment', 'Economic growth', 'Inflation', 'Allocative efficiency'], 1, 'More of both goods can now be produced.'],
        ['Which is capital as a factor of production?', ['A factory machine', 'Money in a bank', 'A forest', 'A manager’s ideas'], 0, 'Capital means man-made goods used to produce other goods.'],
      ],
    ),
    '1.2': C(
      [
        'Economists use models, simplified representations of reality, to explain and predict. Models rely on assumptions such as ceteris paribus: all other things being equal.',
        'Positive statements are factual and testable, like “unemployment rose to 5 percent”. Normative statements are value judgements, like “the government should cut unemployment”.',
        'Economic thinking has evolved: classical economists trusted free markets, Keynes argued for government intervention, and behavioural economics adds insights from psychology.',
        'The course’s key concepts, such as equity, sustainability and intervention, help you evaluate: always consider who gains, who loses, and over what time frame.',
      ],
      [
        ['Ceteris paribus', 'All other things being equal.'],
        ['Positive statement', 'A factual claim that can be tested with evidence.'],
        ['Normative statement', 'A value judgement about what ought to be.'],
        ['Economic model', 'A simplified representation used to explain or predict.'],
      ],
      [
        ['“Minimum wages should be raised” is…', ['Positive', 'Normative', 'A model', 'An assumption'], 1, 'It is a value judgement about what ought to happen.'],
        ['Why do economists use ceteris paribus?', ['To make models realistic', 'To isolate the effect of one variable', 'To avoid using data', 'To predict exactly'], 1, 'Holding other factors constant lets us see one cause and effect.'],
        ['Which school of thought emphasised government spending to fight recessions?', ['Classical', 'Keynesian', 'Mercantilist', 'Behavioural'], 1, 'Keynes argued demand management could end recessions.'],
      ],
    ),
    '2.1': C(
      [
        'Demand is the quantity of a good consumers are willing and able to buy at each price, in a given time period, ceteris paribus.',
        'The law of demand says that as price rises, quantity demanded falls. It is explained by the income effect, the substitution effect and diminishing marginal utility.',
        'A change in the good’s own price causes a movement along the demand curve. A change in a non-price determinant shifts the whole curve.',
        'Non-price determinants include income, tastes, prices of substitutes and complements, the number of consumers, and expectations.',
        'For a normal good, demand rises when income rises. For an inferior good, demand falls when income rises.',
      ],
      [
        ['Law of demand', 'As price rises, quantity demanded falls, ceteris paribus.'],
        ['Movement vs shift', 'Own price change → movement along D; non-price determinant → shift of D.'],
        ['Complements', 'Goods used together; if the price of one rises, demand for the other falls.'],
        ['Inferior good', 'Demand falls as income rises, e.g. bus travel.'],
      ],
      [
        ['The price of coffee rises. Demand for sugar (a complement)…', ['Shifts right', 'Shifts left', 'Moves along the curve', 'Is unaffected'], 1, 'Less coffee is bought, so less sugar is needed at every price.'],
        ['A fall in a good’s own price causes…', ['A shift right', 'A shift left', 'An extension along the curve', 'No change'], 2, 'Own-price changes cause movements along the curve.'],
        ['Incomes rise and demand for bus travel falls. Bus travel is…', ['A normal good', 'An inferior good', 'A luxury', 'A complement'], 1, 'Demand for inferior goods falls as income rises.'],
      ],
      { 0: 'demand', 2: 'demand-shift' },
    ),
    '2.2': C(
      [
        'Supply is the quantity producers are willing and able to sell at each price, in a given time period, ceteris paribus.',
        'The law of supply says that as price rises, quantity supplied rises, because higher prices make production more profitable and cover rising marginal costs.',
        'Non-price determinants shift the supply curve: costs of factors of production, technology, prices of related goods, expectations, indirect taxes and subsidies, and the number of firms.',
        'A rise in costs or a new tax shifts supply left. Better technology or a subsidy shifts it right.',
      ],
      [
        ['Law of supply', 'As price rises, quantity supplied rises, ceteris paribus.'],
        ['Effect of a subsidy on supply', 'Supply shifts right (down) because costs fall.'],
        ['Effect of higher wages on supply', 'Supply shifts left because costs rise.'],
        ['Why supply slopes upward', 'Higher prices give more profit incentive and cover rising marginal costs.'],
      ],
      [
        ['New technology cuts production costs. Supply…', ['Shifts left', 'Shifts right', 'Contracts', 'Is unchanged'], 1, 'Lower costs mean more is supplied at every price.'],
        ['An indirect tax on producers causes…', ['Supply to shift left', 'Demand to shift right', 'Supply to shift right', 'A movement along demand only'], 0, 'The tax raises costs, reducing supply at each price.'],
        ['A rise in the good’s own price leads to…', ['A shift right in supply', 'An extension along the supply curve', 'A shift left in supply', 'Lower quantity supplied'], 1, 'Own price changes cause movements along the curve.'],
      ],
      { 0: 'supply' },
    ),
    '2.3': C(
      [
        'Market equilibrium is where quantity demanded equals quantity supplied. At this price there is no shortage or surplus.',
        'If price is above equilibrium there is excess supply, so sellers cut prices. If price is below equilibrium there is excess demand, so prices are bid up.',
        'Prices send signals and create incentives, allocating resources to where they are most wanted. This is the price mechanism.',
        'Consumer surplus is the extra value consumers get above the price they pay. Producer surplus is the extra revenue producers receive above the minimum they would accept.',
        'At the competitive equilibrium, total surplus is maximised: this is allocative efficiency, where marginal benefit equals marginal cost.',
      ],
      [
        ['Equilibrium', 'Where Qd = Qs; no excess demand or supply.'],
        ['Excess demand', 'Qd > Qs at a price below equilibrium; a shortage.'],
        ['Consumer surplus', 'Area below demand and above price.'],
        ['Allocative efficiency', 'Where marginal benefit = marginal cost; social surplus is maximised.'],
      ],
      [
        ['At a price below equilibrium there is…', ['Excess supply', 'Excess demand', 'Allocative efficiency', 'A surplus'], 1, 'Qd exceeds Qs, so there is a shortage.'],
        ['Demand rises and supply is unchanged. Equilibrium price and quantity…', ['Both fall', 'Both rise', 'Price rises, quantity falls', 'Price falls, quantity rises'], 1, 'A rightward shift of demand raises both.'],
        ['Producer surplus is the area…', ['Below demand, above price', 'Above supply, below price', 'Under the supply curve', 'Between demand and supply to the right of equilibrium'], 1, 'It is the difference between the price received and the minimum acceptable price.'],
      ],
      { 0: 'equilibrium', 1: 'surplus' },
    ),
    '2.4': C(
      [
        'Standard theory assumes consumers are rational, have complete information and maximise utility, while firms maximise profit.',
        'Behavioural economics challenges this. People use rules of thumb, are biased by anchoring and framing, value losses more than gains, and have limited self-control.',
        'Choice architecture uses these insights: default options, such as automatic pension enrolment, and nudges that guide choices without banning options.',
        'Firms may also pursue other goals besides profit: corporate social responsibility, market share, revenue maximisation or satisficing.',
      ],
      [
        ['Bounded rationality', 'People make decisions with limited information, time and brainpower.'],
        ['Nudge', 'A change in choice architecture that guides behaviour without restricting options.'],
        ['Default choice', 'The option that happens if a person does nothing, e.g. automatic enrolment.'],
        ['Satisficing', 'Aiming for a satisfactory result rather than the maximum.'],
      ],
      [
        ['Automatically enrolling workers into a pension scheme is an example of…', ['A tax', 'A default choice nudge', 'A price ceiling', 'A subsidy'], 1, 'People can opt out, but the default guides the choice.'],
        ['Rational consumer choice assumes consumers…', ['Have perfect information and maximise utility', 'Always buy the cheapest good', 'Follow habits', 'Are influenced by framing'], 0, 'Standard theory assumes full information and utility maximisation.'],
        ['A firm aiming for a “good enough” profit is…', ['Revenue maximising', 'Satisficing', 'Profit maximising', 'Growth maximising'], 1, 'Satisficing means achieving a satisfactory level.'],
      ],
    ),
    '2.5': C(
      [
        'Price elasticity of demand, PED, measures how responsive quantity demanded is to a change in the price of the good, ceteris paribus.',
        'PED equals the percentage change in quantity demanded divided by the percentage change in price. Price and quantity demanded move in opposite directions, so PED is negative, and economists compare its absolute value.',
        'Worked example, calculations are assessed at HL: a coffee rises from 4 dollars to 5 dollars, a 25 percent rise, and sales fall from 200 to 150 cups, a 25 percent fall. PED equals minus 25 percent divided by 25 percent, which is minus 1, so demand is unit elastic.',
        'If the absolute value of PED is greater than one, demand is elastic. If it is between zero and one, demand is inelastic. In the diagrams, the same price rise from P1 to P2 causes a big fall in quantity on the flatter curve, and only a small fall on the steeper one.',
        'Special cases: perfectly inelastic demand has PED equal to zero and is a vertical line. Perfectly elastic demand has an infinite PED and is a horizontal line.',
        'PED is not the same as slope. Along a straight-line demand curve, PED changes: it is elastic at high prices, unit elastic at the midpoint, and inelastic at low prices.',
        'Determinants of PED: the number and closeness of substitutes, whether the good is a necessity, the proportion of income spent on it, how habit-forming it is, and the time period considered.',
        'PED and total revenue: if demand is inelastic, raising the price increases total revenue. If demand is elastic, cutting the price increases total revenue. Governments tax goods with inelastic demand because tax revenue is high while consumption falls only a little.',
        'Income elasticity of demand, YED, is the percentage change in quantity demanded divided by the percentage change in income. YED is positive for normal goods, above one for luxuries, and negative for inferior goods.',
      ],
      [
        ['PED formula', '%Δ quantity demanded ÷ %Δ price'],
        ['|PED| > 1 means…', 'Price elastic demand: quantity changes proportionally more than price.'],
        ['0 < |PED| < 1 means…', 'Price inelastic demand: quantity changes proportionally less than price.'],
        ['Determinants of PED', 'Substitutes, necessity vs luxury, share of income, habit-forming, time period.'],
        ['PED and total revenue', 'Inelastic: raise price → TR rises. Elastic: cut price → TR rises.'],
        ['YED values', 'Normal good: YED > 0; luxury: YED > 1; inferior good: YED < 0.'],
      ],
      [
        ['Price rises 10%, quantity demanded falls 20%. PED is…', ['−0.5, inelastic', '−2, elastic', '−2, inelastic', '−0.5, elastic'], 1, 'PED = −20% ÷ 10% = −2. Because |−2| > 1, demand is price elastic.'],
        ['Price rises from $4 to $5 and quantity falls from 200 to 150. PED is…', ['−0.25', '−1 (unit elastic)', '−4', '−0.8'], 1, '%ΔQd = −50/200 = −25%; %ΔP = 1/4 = +25%; PED = −25% ÷ 25% = −1.'],
        ['A firm selling a good with inelastic demand raises its price. Total revenue…', ['Falls', 'Rises', 'Stays the same', 'Becomes zero'], 1, 'Quantity falls proportionally less than price rises, so P × Q increases.'],
        ['A perfectly inelastic demand curve is…', ['Horizontal', 'Vertical', 'Downward sloping with slope −1', 'Upward sloping'], 1, 'PED = 0: quantity demanded does not change at any price.'],
        ['Along a straight-line demand curve, PED is…', ['The same everywhere', 'Elastic at high prices and inelastic at low prices', 'Inelastic at high prices and elastic at low prices', 'Always −1'], 1, 'Slope is constant, but %ΔQ/%ΔP changes: elastic above the midpoint, inelastic below it.'],
        ['Incomes rise 10% and demand for a good falls 5%. The good is…', ['A luxury', 'A normal necessity', 'An inferior good', 'Price elastic'], 2, 'YED = −5% ÷ 10% = −0.5. Negative YED means an inferior good.'],
      ],
      { 3: 'ped', 4: 'ped-extremes', 5: 'ped-linear', 7: 'revenue' },
    ),
    '2.6': C(
      [
        'Price elasticity of supply, PES, measures how responsive quantity supplied is to a change in price. PES equals the percentage change in quantity supplied divided by the percentage change in price.',
        'PES is positive because price and quantity supplied move in the same direction. If PES is greater than one, supply is elastic; between zero and one, it is inelastic.',
        'Determinants include time, how easily resources can be moved between uses, spare capacity, and the ability to store stock.',
        'Primary commodities like coffee usually have inelastic supply in the short run, because crops take time to grow. Manufactured goods tend to have more elastic supply.',
      ],
      [
        ['PES formula', '%Δ quantity supplied ÷ %Δ price'],
        ['PES > 1', 'Elastic supply: quantity supplied responds more than proportionally.'],
        ['Why commodities have low PES', 'Production takes time and is hard to expand quickly.'],
        ['Determinants of PES', 'Time period, spare capacity, stocks, mobility of factors.'],
      ],
      [
        ['Price rises 20% and quantity supplied rises 10%. PES is…', ['2', '0.5', '−0.5', '10'], 1, '10% ÷ 20% = 0.5, so supply is inelastic.'],
        ['Which usually has the most elastic supply?', ['Coffee beans in the short run', 'Rare paintings', 'Mass-produced T-shirts', 'Land in city centres'], 2, 'Factories can increase output quickly using spare capacity.'],
        ['Supply becomes more elastic…', ['In the short run', 'Over a longer time period', 'When there is no spare capacity', 'When goods cannot be stored'], 1, 'Given time, firms can adjust all their inputs.'],
      ],
    ),
    '2.7': C(
      [
        'Governments intervene in markets to raise revenue, support firms or households, influence consumption and production, and correct market failure.',
        'An indirect tax shifts supply up by the amount of the tax. The price rises by less than the tax, so the burden is shared between consumers and producers, depending on PED and PES.',
        'A subsidy shifts supply down, lowering price and raising output, at a cost to the government.',
        'A price ceiling, or maximum price, set below equilibrium creates a shortage. A price floor, or minimum price, set above equilibrium creates a surplus.',
        'Evaluate each intervention: who gains, who loses, and whether there are unintended consequences such as black markets or welfare loss.',
      ],
      [
        ['Indirect tax effect', 'Supply shifts up; price rises; quantity falls; welfare loss created.'],
        ['Price ceiling', 'A maximum price below equilibrium; causes a shortage.'],
        ['Price floor', 'A minimum price above equilibrium; causes a surplus.'],
        ['Tax incidence', 'How the tax burden is shared; the more inelastic side pays more.'],
      ],
      [
        ['Rent control set below equilibrium leads to…', ['A surplus of housing', 'A shortage of housing', 'Higher rents', 'No change'], 1, 'At the low price, Qd exceeds Qs.'],
        ['If demand is very inelastic, the burden of an indirect tax falls mostly on…', ['Producers', 'Consumers', 'The government', 'No one'], 1, 'Consumers keep buying, so producers can pass most of the tax on.'],
        ['A minimum wage above equilibrium in the labour market can cause…', ['Excess demand for labour', 'Unemployment', 'Lower wages', 'A shortage of workers'], 1, 'More people want work than firms want to hire.'],
      ],
    ),
    '2.8': C(
      [
        'Market failure happens when a free market does not allocate resources efficiently, so society’s welfare is not maximised.',
        'A negative production externality is a cost to third parties, such as pollution from a factory, that the producer does not pay for.',
        'Because firms ignore this external cost, the marginal social cost, MSC, lies above the marginal private cost, MPC.',
        'The market produces at Q m, where MPC meets marginal private benefit. The socially optimal output is lower, at Q star, where MSC meets marginal social benefit. Too much is produced.',
        'The shaded triangle is the welfare loss. Governments can respond with a carbon tax, regulation or tradable permits. Evaluate the strengths and limitations of each.',
        'Positive externalities, like education or vaccinations, have MSB above MPB, so the market under-produces them. Subsidies or direct provision can help.',
        'Common pool resources, like fish stocks, are rivalrous but non-excludable, so they are overused. This is the tragedy of the commons, and it threatens sustainability.',
      ],
      [
        ['Negative production externality', 'MSC > MPC: the good is over-produced.'],
        ['Positive consumption externality', 'MSB > MPB: the good is under-consumed, e.g. vaccines.'],
        ['Common pool resource', 'Rivalrous but non-excludable, e.g. fish in the ocean.'],
        ['Tradable permits', 'A cap on pollution with permits that firms can buy and sell.'],
      ],
      [
        ['With a negative production externality, the free-market output is…', ['Below the social optimum', 'Above the social optimum', 'Equal to the social optimum', 'Zero'], 1, 'Firms ignore the external cost (MSC > MPC), so Qm > Q*.'],
        ['Which policy best corrects a positive consumption externality?', ['An indirect tax', 'A subsidy', 'A price ceiling', 'A ban'], 1, 'A subsidy raises consumption towards the social optimum.'],
        ['Overfishing in international waters is an example of…', ['A public good', 'The tragedy of the commons', 'Asymmetric information', 'A merit good'], 1, 'Fish stocks are a common pool resource that gets overused.'],
      ],
      { 2: 'externality', 3: 'externality', 4: 'externality' },
    ),
    '2.9': C(
      [
        'Public goods are non-rivalrous, one person’s use doesn’t reduce another’s, and non-excludable, people can’t be stopped from using them.',
        'Examples include street lighting, national defence and flood defences.',
        'Because people can benefit without paying, the free rider problem means private firms won’t supply them. The market fails completely.',
        'Governments usually provide public goods directly, funded by taxation, or contract private firms to supply them.',
      ],
      [
        ['Non-rivalrous', 'One person’s consumption does not reduce availability for others.'],
        ['Non-excludable', 'It is impossible or too costly to stop people using it.'],
        ['Free rider problem', 'People benefit without paying, so private firms won’t supply.'],
        ['Example of a public good', 'Street lighting, national defence, lighthouses.'],
      ],
      [
        ['Which is a public good?', ['A cinema ticket', 'National defence', 'A private school', 'A toll road'], 1, 'Defence is non-rivalrous and non-excludable.'],
        ['Public goods are under-provided by markets because of…', ['Asymmetric information', 'The free rider problem', 'Economies of scale', 'Price floors'], 1, 'Firms cannot charge people who can use the good anyway.'],
        ['A good that is rivalrous and excludable is a…', ['Public good', 'Private good', 'Common pool resource', 'Merit good'], 1, 'Private goods are both rivalrous and excludable.'],
      ],
    ),
    '2.10': C(
      [
        'Asymmetric information exists when one party to a transaction knows more than the other.',
        'Adverse selection happens before a deal, like a seller of a used car hiding faults, so good products leave the market.',
        'Moral hazard happens after a deal, when someone takes more risk because they are protected, such as a driver being careless because they are insured.',
        'Responses include regulation, licensing, warranties, independent reviews and compulsory disclosure of information.',
      ],
      [
        ['Asymmetric information', 'One side of a transaction has more information than the other.'],
        ['Adverse selection', 'Hidden information before a deal, e.g. selling a faulty used car.'],
        ['Moral hazard', 'Riskier behaviour after a deal because someone else bears the cost.'],
        ['Screening and signalling', 'Ways to reduce information gaps, e.g. qualifications, warranties.'],
      ],
      [
        ['A bank takes big risks expecting a government bailout. This is…', ['Adverse selection', 'Moral hazard', 'A public good', 'A negative externality'], 1, 'Protection from losses encourages riskier behaviour.'],
        ['Mainly unhealthy people buying health insurance is…', ['Moral hazard', 'Adverse selection', 'Signalling', 'Free riding'], 1, 'The buyer has hidden information before the deal.'],
        ['Which reduces asymmetric information?', ['Mandatory product labelling', 'A price ceiling', 'An indirect tax', 'Tariffs'], 0, 'Labelling gives consumers the information sellers have.'],
      ],
    ),
    '2.11': C(
      [
        'Market power is a firm’s ability to set its price above marginal cost. It exists when there are few firms or barriers to entry.',
        'Market structures range from perfect competition, with many firms and no market power, through monopolistic competition and oligopoly, to monopoly.',
        'Firms maximise profit where marginal cost equals marginal revenue. A monopoly restricts output and charges a higher price than a competitive market, causing a welfare loss.',
        'Oligopolies are interdependent: firms may collude, formally in a cartel or tacitly, or compete through non-price competition.',
        'Governments respond with competition law, breaking up monopolies, regulating prices, and blocking mergers.',
      ],
      [
        ['Profit maximisation', 'Produce where marginal cost (MC) = marginal revenue (MR).'],
        ['Barriers to entry', 'Obstacles to new firms, e.g. economies of scale, legal barriers, brand loyalty.'],
        ['Oligopoly', 'A few large, interdependent firms.'],
        ['Collusion', 'Firms agreeing to fix prices or output, usually illegal.'],
      ],
      [
        ['Compared with perfect competition, a monopoly usually has…', ['Higher output and lower price', 'Lower output and higher price', 'The same price', 'No barriers to entry'], 1, 'The monopolist restricts output to raise price.'],
        ['A market with a few interdependent firms is…', ['Perfect competition', 'Monopolistic competition', 'Oligopoly', 'Monopoly'], 2, 'Oligopolists must consider rivals’ reactions.'],
        ['All firms maximise profit where…', ['AC = AR', 'MC = MR', 'P = AVC', 'TR is highest'], 1, 'Producing where MC = MR maximises profit.'],
      ],
    ),
    '2.12': C(
      [
        'Markets allocate goods to those who can pay, so they may not produce an equitable distribution of income and wealth.',
        'Equality means everyone has the same; equity means fairness, which is a normative judgement.',
        'Governments can reduce inequity through progressive taxes, transfer payments, and providing merit goods like education and health care.',
        'This chapter links to unit 3.4, where you measure inequality with the Lorenz curve and Gini coefficient.',
      ],
      [
        ['Equity vs equality', 'Equity is fairness (normative); equality means identical shares.'],
        ['Merit good', 'A good that is under-consumed and beneficial, e.g. education.'],
        ['Transfer payment', 'Money paid by the government with no output in return, e.g. pensions.'],
        ['Why markets may be inequitable', 'They allocate by ability to pay, not need.'],
      ],
      [
        ['Which is a transfer payment?', ['A teacher’s salary', 'Unemployment benefit', 'A tariff', 'A corporate tax'], 1, 'It is paid without any production in return.'],
        ['“Income should be shared more fairly” is…', ['A positive statement', 'A normative statement', 'A definition of equality', 'A market outcome'], 1, 'Fairness is a value judgement.'],
        ['Government provision of free health care is justified mainly because it is a…', ['Public good', 'Merit good', 'Inferior good', 'Luxury good'], 1, 'Health care is under-consumed and has positive externalities.'],
      ],
    ),
    '3.1': C(
      [
        'The circular flow of income shows money flowing between households and firms, with leakages, saving, taxes and imports, and injections, investment, government spending and exports.',
        'Gross domestic product, GDP, measures the value of all final goods and services produced in a country in a year. It can be measured by the output, income or expenditure method.',
        'Real GDP adjusts for inflation; GDP per capita divides by population; GNI adds net income from abroad.',
        'GDP is a limited measure of well-being: it ignores inequality, unpaid work, the informal economy and environmental damage. Alternatives include the Happy Planet Index and the OECD Better Life Index.',
        'The business cycle shows fluctuations in real GDP around its long-term trend: expansion, peak, contraction and trough.',
      ],
      [
        ['GDP', 'Total value of final goods and services produced in a country in a year.'],
        ['Real vs nominal GDP', 'Real GDP is adjusted for inflation.'],
        ['GNI', 'GDP plus net income from abroad.'],
        ['Recession', 'Two consecutive quarters of negative real GDP growth.'],
      ],
      [
        ['Which is an injection into the circular flow?', ['Saving', 'Taxes', 'Exports', 'Imports'], 2, 'Exports bring money in from abroad.'],
        ['To compare living standards across countries, the best simple measure is…', ['Nominal GDP', 'Real GDP per capita at PPP', 'Total exports', 'Government spending'], 1, 'Per capita at purchasing power parity adjusts for population and prices.'],
        ['A weakness of GDP as a measure of well-being is that it…', ['Includes all production', 'Ignores unpaid work and environmental costs', 'Is adjusted for inflation', 'Uses money values'], 1, 'Many things that affect well-being aren’t counted.'],
      ],
    ),
    '3.2': C(
      [
        'Aggregate demand, AD, is total spending on an economy’s goods and services: consumption plus investment plus government spending plus net exports.',
        'AD slopes down, and it shifts when its components change, for example through consumer confidence, interest rates, government budgets or exchange rates.',
        'Short-run aggregate supply, SRAS, shifts with changes in costs such as wages and oil prices. Long-run aggregate supply, LRAS, depends on the quantity and quality of factors of production.',
        'In the monetarist or new classical view, LRAS is vertical at full employment output. In the Keynesian view, AS is flat at low output, then rises steeply near full capacity.',
        'Short-run equilibrium can be below full employment, creating a deflationary or recessionary gap, or above it, creating an inflationary gap.',
      ],
      [
        ['AD formula', 'AD = C + I + G + (X − M)'],
        ['SRAS shifts when…', 'Costs of production change, e.g. wages, oil prices, taxes.'],
        ['LRAS shifts when…', 'The quantity or quality of factors of production changes.'],
        ['Recessionary gap', 'Real output below full employment output.'],
      ],
      [
        ['A fall in interest rates is likely to…', ['Shift AD left', 'Shift AD right', 'Shift LRAS left', 'Shift SRAS left'], 1, 'Cheaper borrowing raises consumption and investment.'],
        ['A sharp rise in oil prices causes…', ['SRAS to shift left', 'AD to shift right', 'LRAS to shift right', 'SRAS to shift right'], 0, 'Higher costs reduce short-run supply: cost-push pressure.'],
        ['In the Keynesian model, at low output the AS curve is…', ['Vertical', 'Horizontal or flat', 'Downward sloping', 'Undefined'], 1, 'Spare capacity lets output rise without price increases.'],
      ],
    ),
    '3.3': C(
      [
        'The main macroeconomic objectives are low unemployment, low and stable inflation, stable economic growth, and, increasingly, reduced inequality and sustainable debt.',
        'Unemployment types: structural, frictional, seasonal and cyclical or demand-deficient. The unemployment rate is the unemployed divided by the labour force, times 100.',
        'Inflation is a sustained rise in the average price level, usually measured by a consumer price index. It can be demand-pull or cost-push. Deflation is a sustained fall in prices.',
        'Economic growth is an increase in real GDP. It raises living standards but can harm the environment and increase inequality.',
        'There can be trade-offs between objectives. The short-run Phillips curve suggests lower unemployment comes with higher inflation.',
      ],
      [
        ['Unemployment rate', '(Number unemployed ÷ labour force) × 100'],
        ['Demand-pull inflation', 'Caused by AD growing faster than AS.'],
        ['Cost-push inflation', 'Caused by rising production costs shifting SRAS left.'],
        ['Structural unemployment', 'Caused by a mismatch of skills or location with available jobs.'],
      ],
      [
        ['Workers laid off because their industry has declined are…', ['Frictionally unemployed', 'Structurally unemployed', 'Seasonally unemployed', 'Voluntarily unemployed'], 1, 'Their skills no longer match the jobs available.'],
        ['A rise in AD near full employment causes mainly…', ['Cost-push inflation', 'Demand-pull inflation', 'Deflation', 'Structural unemployment'], 1, 'Excess demand pulls prices up.'],
        ['The short-run Phillips curve shows a trade-off between…', ['Growth and debt', 'Inflation and unemployment', 'Exports and imports', 'Taxes and spending'], 1, 'Lower unemployment tends to come with higher inflation in the short run.'],
      ],
    ),
    '3.4': C(
      [
        'Inequality can be in income, a flow, or wealth, a stock. It is measured with the Lorenz curve and the Gini coefficient.',
        'The further the Lorenz curve bows away from the line of equality, the more unequal the distribution. A Gini coefficient of zero means perfect equality, and one means perfect inequality.',
        'Poverty can be absolute, below a fixed minimum such as the World Bank’s international poverty line, or relative, below a share of median income.',
        'Causes of inequality include differences in education, discrimination, unequal wealth and power, and globalisation. Policies include progressive taxes, transfer payments, and investment in education and health.',
      ],
      [
        ['Gini coefficient', '0 = perfect equality, 1 = perfect inequality.'],
        ['Lorenz curve', 'Shows the cumulative share of income received by the cumulative share of population.'],
        ['Absolute poverty', 'Income below a fixed level needed for basic needs.'],
        ['Progressive tax', 'The tax rate rises as income rises.'],
      ],
      [
        ['A Gini coefficient rising from 0.30 to 0.45 means…', ['More equality', 'More inequality', 'Less poverty', 'Higher growth'], 1, 'Higher Gini values mean a more unequal distribution.'],
        ['Relative poverty is measured…', ['Against a fixed dollar amount', 'Relative to typical incomes in that country', 'By GDP growth', 'By the inflation rate'], 1, 'It is defined as a share of median income.'],
        ['Which tax best reduces income inequality?', ['A regressive tax', 'A progressive income tax', 'A flat sales tax', 'A tariff'], 1, 'Higher earners pay a larger share of income.'],
      ],
    ),
    '3.5': C(
      [
        'Monetary policy is run by the central bank, which changes interest rates or the money supply to influence aggregate demand.',
        'Lowering interest rates makes borrowing cheaper and saving less attractive, raising consumption and investment. This is expansionary monetary policy.',
        'Raising interest rates reduces AD and helps control inflation. Many central banks target inflation, often around 2 percent.',
        'Other tools include open market operations, reserve requirements and quantitative easing.',
        'Strengths: it is quick to change and independent of politics. Limitations: time lags, and it may not work when confidence is very low or rates are near zero.',
      ],
      [
        ['Expansionary monetary policy', 'Lower interest rates or more money supply to raise AD.'],
        ['Contractionary monetary policy', 'Higher interest rates to reduce AD and inflation.'],
        ['Quantitative easing', 'The central bank buys assets to increase the money supply.'],
        ['Inflation targeting', 'The central bank aims for a set inflation rate, often about 2%.'],
      ],
      [
        ['To fight high inflation, a central bank would…', ['Cut interest rates', 'Raise interest rates', 'Increase government spending', 'Cut taxes'], 1, 'Higher rates reduce borrowing and spending.'],
        ['Who runs monetary policy?', ['The finance ministry', 'The central bank', 'Parliament', 'Commercial banks'], 1, 'Monetary policy is the central bank’s responsibility.'],
        ['A limitation of cutting interest rates in a deep recession is…', ['It works instantly', 'Low confidence may stop people borrowing', 'It raises taxes', 'It always causes deflation'], 1, 'If confidence is low, cheap credit may not boost spending.'],
      ],
    ),
    '3.6': C(
      [
        'Fiscal policy uses government spending and taxation to influence aggregate demand.',
        'Expansionary fiscal policy, higher spending or lower taxes, raises AD in a recession but can increase the budget deficit and public debt.',
        'The Keynesian multiplier means an initial injection causes a larger final rise in national income. The multiplier equals one divided by the marginal propensity to withdraw.',
        'Automatic stabilisers, such as unemployment benefits and progressive taxes, reduce fluctuations without new decisions.',
        'Limitations: time lags, political pressure, crowding out of private investment, and rising debt.',
      ],
      [
        ['Budget deficit', 'Government spending exceeds tax revenue in a year.'],
        ['Multiplier formula', '1 ÷ (1 − MPC), or 1 ÷ MPW'],
        ['Automatic stabilisers', 'Spending and taxes that change automatically with the cycle.'],
        ['Crowding out', 'Government borrowing raises interest rates and reduces private investment.'],
      ],
      [
        ['If the MPC is 0.8, the multiplier is…', ['0.8', '1.25', '5', '8'], 2, 'Multiplier = 1 ÷ (1 − 0.8) = 5.'],
        ['Which is expansionary fiscal policy?', ['Raising income tax', 'Cutting government spending', 'Increasing infrastructure spending', 'Raising interest rates'], 2, 'Higher government spending increases AD.'],
        ['Unemployment benefits rising automatically in a recession are an example of…', ['Discretionary policy', 'Automatic stabilisers', 'Monetary policy', 'Supply-side policy'], 1, 'They change without any new government decision.'],
      ],
    ),
    '3.7': C(
      [
        'Supply-side policies aim to increase long-run aggregate supply, the economy’s productive capacity.',
        'Interventionist policies include investment in education, training, health, infrastructure, research and development, and industrial policies.',
        'Market-based policies include deregulation, privatisation, lower income and corporate taxes, weaker trade union power, and reducing unemployment benefits.',
        'By shifting LRAS right, they can raise growth, lower unemployment and reduce inflationary pressure at the same time. But they take a long time to work, and some may increase inequality.',
      ],
      [
        ['Aim of supply-side policies', 'Increase LRAS: the economy’s productive potential.'],
        ['Interventionist supply-side policy', 'e.g. government spending on education and infrastructure.'],
        ['Market-based supply-side policy', 'e.g. deregulation, privatisation, tax cuts.'],
        ['Main limitation', 'Long time lags; some policies can increase inequality.'],
      ],
      [
        ['Government spending on vocational training is…', ['Demand-side only', 'Interventionist supply-side policy', 'Monetary policy', 'Protectionism'], 1, 'It improves labour quality, raising LRAS.'],
        ['Supply-side policies shift…', ['AD left', 'LRAS right', 'SRAS left', 'The Phillips curve up'], 1, 'They increase productive capacity.'],
        ['A drawback of cutting unemployment benefits is that it may…', ['Raise LRAS', 'Increase inequality', 'Reduce the budget deficit', 'Lower wages'], 1, 'It hurts the poorest households.'],
      ],
    ),
    '4.1': C(
      [
        'International trade lets countries buy goods they can’t make, gain from economies of scale, increase competition and choice, and access resources.',
        'Absolute advantage means a country can produce more of a good with the same resources. Comparative advantage means it can produce at a lower opportunity cost.',
        'According to the theory of comparative advantage, both countries gain by specialising in what they have the lowest opportunity cost in, and trading.',
        'The theory assumes no transport costs, perfect mobility of factors within countries, and constant costs, which limits its real-world accuracy.',
      ],
      [
        ['Absolute advantage', 'Producing more with the same resources.'],
        ['Comparative advantage', 'Producing at a lower opportunity cost.'],
        ['Gains from trade', 'Lower prices, more choice, economies of scale, efficiency.'],
        ['Limitation of comparative advantage', 'Assumes no transport costs and constant costs.'],
      ],
      [
        ['Trade is based on comparative advantage when countries specialise in goods with…', ['The highest price', 'The lowest opportunity cost', 'The most workers', 'The highest demand'], 1, 'Lower opportunity cost is comparative advantage.'],
        ['Country A makes 10 cars or 20 phones; country B makes 5 cars or 20 phones. B has comparative advantage in…', ['Cars', 'Phones', 'Both', 'Neither'], 1, 'For B, 1 phone costs ¼ car; for A, 1 phone costs ½ car.'],
        ['Which is a benefit of trade?', ['Less choice', 'Economies of scale', 'Higher transport costs', 'Less competition'], 1, 'Larger markets allow lower average costs.'],
      ],
    ),
    '4.2': C(
      [
        'Trade protection means restricting imports to protect domestic producers.',
        'A tariff is a tax on imports. It raises the domestic price, increases domestic production and government revenue, but reduces consumption and creates welfare loss.',
        'A quota is a limit on the quantity of imports. Production subsidies lower domestic firms’ costs, and administrative barriers, like strict standards, slow imports.',
        'Each measure helps domestic producers but usually hurts consumers and can invite retaliation.',
      ],
      [
        ['Tariff', 'A tax on imported goods.'],
        ['Quota', 'A physical limit on the quantity of imports.'],
        ['Administrative barrier', 'Rules or paperwork that make importing harder.'],
        ['Main loser from a tariff', 'Domestic consumers, who pay higher prices.'],
      ],
      [
        ['A tariff causes domestic production to…', ['Fall', 'Rise', 'Stay the same', 'Stop'], 1, 'Higher domestic prices encourage home producers.'],
        ['Unlike a tariff, a quota does not…', ['Raise prices', 'Earn tax revenue for the government', 'Protect producers', 'Reduce imports'], 1, 'Quota rents go to importers, not the government.'],
        ['Which group gains from a tariff?', ['Domestic consumers', 'Foreign producers', 'Domestic producers', 'Exporters in other industries'], 2, 'They sell more at a higher price.'],
      ],
    ),
    '4.3': C(
      [
        'Arguments for protection include protecting infant industries, national security, jobs, preventing dumping, and raising government revenue.',
        'Arguments against include higher prices for consumers, less choice, inefficiency, misallocation of resources, and the risk of retaliation and trade wars.',
        'Protection can also hurt developing countries by limiting their access to rich markets.',
        'The World Trade Organization works to reduce trade barriers and settle trade disputes between members.',
      ],
      [
        ['Infant industry argument', 'New industries need temporary protection to grow and compete.'],
        ['Dumping', 'Selling exports below cost of production.'],
        ['Retaliation', 'Other countries responding with their own trade barriers.'],
        ['WTO', 'World Trade Organization: promotes free trade and settles disputes.'],
      ],
      [
        ['Protecting a new domestic industry until it can compete is the…', ['Anti-dumping argument', 'Infant industry argument', 'Retaliation argument', 'Revenue argument'], 1, 'Young industries may need time to reach economies of scale.'],
        ['A key argument against protection is that it…', ['Raises consumer choice', 'Leads to inefficiency and higher prices', 'Increases exports', 'Lowers taxes'], 1, 'Protected firms face less competition.'],
        ['Which body settles trade disputes between countries?', ['IMF', 'World Bank', 'WTO', 'OPEC'], 2, 'The WTO has a dispute settlement process.'],
      ],
    ),
    '4.4': C(
      [
        'Economic integration means countries reducing barriers to trade between them. It ranges from preferential trade agreements to full economic union.',
        'A free trade area removes barriers between members, but each keeps its own external tariffs. A customs union adds a common external tariff.',
        'A common market adds free movement of labour and capital. An economic and monetary union adds a single currency, like the eurozone.',
        'Integration causes trade creation, more efficient producers, and trade diversion, trade moving from cheaper outside producers to members.',
      ],
      [
        ['Free trade area', 'No barriers among members; separate external tariffs.'],
        ['Customs union', 'Free trade area plus a common external tariff.'],
        ['Common market', 'Customs union plus free movement of labour and capital.'],
        ['Trade diversion', 'Trade shifts from a cheaper non-member to a more expensive member.'],
      ],
      [
        ['A customs union differs from a free trade area because it has…', ['No tariffs', 'A common external tariff', 'A single currency', 'Free labour movement'], 1, 'Members agree the same tariffs on outsiders.'],
        ['The eurozone is an example of…', ['A free trade area', 'A customs union', 'An economic and monetary union', 'A bilateral agreement'], 2, 'Members share the euro and a central bank.'],
        ['Buying from a higher-cost member instead of a lower-cost outsider is…', ['Trade creation', 'Trade diversion', 'Dumping', 'Comparative advantage'], 1, 'The union diverts trade away from the efficient producer.'],
      ],
    ),
    '4.5': C(
      [
        'An exchange rate is the value of one currency in terms of another.',
        'In a floating system, the rate is set by demand and supply for the currency. Demand comes from foreigners buying exports, investing or speculating; supply from domestic buyers of imports and foreign assets.',
        'Higher interest rates, strong export demand or inflows of investment cause appreciation. The opposite causes depreciation.',
        'Under a fixed system the central bank holds the rate at a set level, using reserves and interest rates. Managed floats sit in between.',
        'A depreciation makes exports cheaper and imports dearer, which can boost net exports but raise inflation.',
      ],
      [
        ['Appreciation', 'A rise in a currency’s value in a floating system.'],
        ['Depreciation effect on exports', 'Exports become cheaper for foreigners, so they may rise.'],
        ['Fixed exchange rate', 'Kept at a set level by the central bank.'],
        ['Cause of appreciation', 'e.g. higher interest rates, more demand for exports, investment inflows.'],
      ],
      [
        ['A country raises interest rates. Its currency will likely…', ['Depreciate', 'Appreciate', 'Stay fixed', 'Be devalued'], 1, 'Higher returns attract foreign money, raising demand for the currency.'],
        ['A depreciation makes imports…', ['Cheaper', 'More expensive', 'Unchanged', 'Illegal'], 1, 'More domestic currency is needed to buy foreign goods.'],
        ['In a floating system the exchange rate is set by…', ['The government', 'Demand and supply for the currency', 'The WTO', 'The IMF'], 1, 'Market forces determine floating rates.'],
      ],
    ),
    '4.6': C(
      [
        'The balance of payments records all transactions between a country and the rest of the world.',
        'The current account includes trade in goods and services, income such as interest and profits, and current transfers. The capital account and financial account record flows of assets and investment.',
        'Overall the accounts balance: a current account deficit must be matched by a surplus on the capital and financial accounts.',
        'Persistent current account deficits may cause depreciation and debt. They can be tackled with expenditure-switching policies, like tariffs, or expenditure-reducing policies, like contractionary fiscal policy.',
        'The Marshall-Lerner condition says a depreciation improves the current account only if the sum of PED for exports and imports is greater than one. The J-curve shows it can worsen first.',
      ],
      [
        ['Current account', 'Trade in goods and services, primary income, secondary income.'],
        ['Financial account', 'Direct investment, portfolio investment, reserve assets.'],
        ['Marshall-Lerner condition', 'Depreciation improves the current account if PEDx + PEDm > 1.'],
        ['J-curve', 'After a depreciation the current account worsens before it improves.'],
      ],
      [
        ['Exports of services appear in the…', ['Capital account', 'Current account', 'Financial account', 'Reserves'], 1, 'Trade in goods and services is in the current account.'],
        ['A current account deficit must be balanced by…', ['A budget surplus', 'A capital and financial account surplus', 'Higher tariffs', 'Inflation'], 1, 'The accounts balance overall.'],
        ['The J-curve suggests that after a depreciation the current account…', ['Improves immediately', 'Worsens first, then improves', 'Never changes', 'Always worsens'], 1, 'Demand takes time to respond to new prices.'],
      ],
    ),
    '4.7': C(
      [
        'Sustainable development meets the needs of the present without compromising the ability of future generations to meet their own needs.',
        'The UN’s 17 Sustainable Development Goals, SDGs, set targets for 2030, such as ending poverty, quality education, gender equality and climate action.',
        'There is a link between poverty and environmental damage: poor households may overuse local resources because they have no alternatives.',
        'Economists evaluate policies by whether they balance economic growth, social equity and environmental protection.',
      ],
      [
        ['Sustainable development', 'Meeting present needs without compromising future generations.'],
        ['SDGs', 'The UN’s 17 Sustainable Development Goals for 2030.'],
        ['Three pillars', 'Economic, social and environmental sustainability.'],
        ['Poverty–environment link', 'Poverty can lead to overuse of local resources.'],
      ],
      [
        ['How many SDGs are there?', ['8', '10', '17', '20'], 2, 'The UN set 17 goals in 2015.'],
        ['Sustainable development means…', ['Maximum growth now', 'Meeting present needs without harming future generations', 'Zero growth', 'Only protecting the environment'], 1, 'It balances present and future needs.'],
        ['Which is an SDG?', ['Maximise GDP', 'Climate action', 'Remove all taxes', 'Fixed exchange rates'], 1, 'Goal 13 is climate action.'],
      ],
    ),
    '4.8': C(
      [
        'Economic development is a broad improvement in well-being, including health, education, freedom and equality, not just higher income.',
        'Single indicators include GDP or GNI per capita at purchasing power parity, life expectancy, literacy and access to clean water.',
        'Composite indicators combine several measures. The Human Development Index, HDI, uses life expectancy, education and GNI per capita.',
        'Other composite measures include the inequality-adjusted HDI, the Gender Inequality Index and the Multidimensional Poverty Index.',
      ],
      [
        ['HDI components', 'Life expectancy, education (mean and expected years of schooling), GNI per capita.'],
        ['Why PPP?', 'It adjusts for differences in the cost of living between countries.'],
        ['Growth vs development', 'Growth is higher real output; development is broader well-being.'],
        ['Multidimensional Poverty Index', 'Measures deprivation in health, education and living standards.'],
      ],
      [
        ['Which is NOT part of the HDI?', ['Life expectancy', 'Education', 'GNI per capita', 'Carbon emissions'], 3, 'HDI covers health, education and income only.'],
        ['A country with high GDP but low HDI may have…', ['High inequality or poor health and education', 'Low income', 'No growth', 'High literacy'], 0, 'Income alone does not guarantee development.'],
        ['Economic development is broader than growth because it includes…', ['Only income', 'Health, education and freedom', 'Only exports', 'Only inflation'], 1, 'Development covers overall well-being.'],
      ],
    ),
    '4.9': C(
      [
        'Many factors can hold back growth and development. Economic barriers include poverty traps, lack of infrastructure, low human capital, dependence on primary commodities, and debt.',
        'A poverty cycle arises when low income leads to low saving, low investment, low productivity and so low income again.',
        'Political and social barriers include corruption, weak institutions, conflict, gender inequality and poor access to credit.',
        'Trade barriers in rich countries and volatile commodity prices can also limit poorer economies.',
      ],
      [
        ['Poverty cycle', 'Low income → low saving → low investment → low income.'],
        ['Human capital', 'The skills, knowledge and health of the workforce.'],
        ['Commodity dependence', 'Relying on a few primary exports with volatile prices.'],
        ['Institutional barrier', 'e.g. corruption, weak rule of law, poor property rights.'],
      ],
      [
        ['Which is a barrier to development?', ['Strong institutions', 'Corruption', 'Good infrastructure', 'High literacy'], 1, 'Corruption diverts resources and discourages investment.'],
        ['Relying on coffee exports makes a country vulnerable because…', ['Coffee is a luxury', 'Commodity prices are volatile', 'Coffee has elastic supply', 'It raises HDI'], 1, 'Export earnings swing with world prices.'],
        ['A poverty cycle begins with…', ['High saving', 'Low income', 'High investment', 'Economic growth'], 1, 'Low income limits saving and investment.'],
      ],
    ),
    '4.10': C(
      [
        'Strategies for growth and development can be market-oriented or interventionist, and most countries use a mix.',
        'Trade strategies include export promotion, diversification away from commodities, and joining trade agreements. Import substitution protects domestic industry.',
        'Other strategies include foreign direct investment, foreign aid, microfinance, debt relief, and investing in education, health and women’s empowerment.',
        'Each has advantages and drawbacks. For example, FDI brings capital and technology but profits may leave the country.',
      ],
      [
        ['Import substitution', 'Protecting domestic industry to replace imports.'],
        ['Export promotion', 'Encouraging export industries to drive growth.'],
        ['FDI', 'Foreign direct investment: long-term investment by foreign firms.'],
        ['Microfinance', 'Small loans to poor people without collateral.'],
      ],
      [
        ['A drawback of FDI is that…', ['It brings technology', 'Profits may be sent abroad', 'It creates jobs', 'It raises tax revenue'], 1, 'Repatriated profits leave the host economy.'],
        ['Small loans to low-income entrepreneurs are called…', ['Aid', 'Microfinance', 'Tariffs', 'Remittances'], 1, 'Microfinance gives access to credit for the poor.'],
        ['Diversification helps a developing country by…', ['Increasing reliance on one export', 'Reducing vulnerability to commodity price swings', 'Raising tariffs', 'Cutting education'], 1, 'A wider export base spreads risk.'],
      ],
    ),
  },
};

export default content;
