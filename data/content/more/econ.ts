import type { MoreContent } from '../../types';
import { M } from '../helpers';

// Lesson 2 (worked examples, real-world cases, common mistakes, exam technique) plus extra
// flashcards and questions for every Economics chapter.
const more: Record<string, MoreContent> = {
  '1.1': M(
    [
      'Worked example: a farmer can grow 100 tonnes of wheat or 50 tonnes of rice on the same land. The opportunity cost of one tonne of rice is two tonnes of wheat.',
      'A PPC is usually drawn bowed outwards, concave to the origin. This shows increasing opportunity cost, because resources are not equally good at producing both goods.',
      'Economic systems answer the basic questions differently: a free market economy uses prices, a planned economy uses government decisions, and most real economies are mixed.',
      'Exam tip: when you draw a PPC, label both axes with the goods, mark points A and B, and show growth with an outward shift arrow. Always explain the opportunity cost in words.',
    ],
    [
      ['Why a PPC is concave (bowed out)', 'Increasing opportunity cost: resources are not equally suited to producing both goods.'],
      ['Free goods vs economic goods', 'Free goods have zero opportunity cost (e.g. air); economic goods use scarce resources.'],
      ['Mixed economy', 'Uses both markets and government to allocate resources — most real economies.'],
      ['Movement along a PPC', 'Reallocating resources from one good to another; shows the opportunity cost.'],
    ],
    [
      ['What causes the PPC to shift inwards?', 'A natural disaster destroying factories', ['Lower unemployment', 'A move along the curve', 'A fall in the price of a good'], 'Destroying capital reduces productive capacity, so the maximum possible output falls.'],
      ['A straight-line PPC shows…', 'Constant opportunity cost', ['Increasing opportunity cost', 'Zero opportunity cost', 'Economic growth'], 'If resources are equally suited to both goods, each extra unit costs the same amount of the other good.'],
      ['Which is a free good?', 'Sunlight', ['Bottled water', 'A public library book', 'Electricity'], 'A free good has no opportunity cost to produce; it is not scarce.'],
      ['Which question does every economy have to answer?', 'For whom to produce', ['How much to tax', 'Which currency to use', 'Whether to trade'], 'The three basic economic questions are what, how and for whom to produce.'],
    ],
  ),
  '1.2': M(
    [
      'The IB course is built around nine key concepts: scarcity, choice, efficiency, equity, economic well-being, sustainability, change, interdependence and intervention. Examiners reward answers that link to them.',
      'Economists often disagree because they hold different value judgements or use different assumptions. Keynesians focus on demand and government action; monetarists and the new classical school trust markets more.',
      'Behavioural economics has added psychology to models, while circular economics and doughnut economics, from Kate Raworth, put sustainability at the centre.',
      'Exam tip: in Paper 1 part b answers, make one clear evaluation point by questioning a model’s assumptions, such as ceteris paribus or rational behaviour.',
    ],
    [
      ['Nine IB key concepts', 'Scarcity, choice, efficiency, equity, economic well-being, sustainability, change, interdependence, intervention.'],
      ['Doughnut economics', 'Kate Raworth’s model: meet everyone’s social foundation without overshooting the ecological ceiling.'],
      ['Circular economy', 'Keep resources in use by reusing, repairing and recycling instead of “take, make, waste”.'],
      ['Why economists disagree', 'Different assumptions, different value judgements and incomplete data.'],
    ],
    [
      ['“Unemployment was 5% last year” is…', 'A positive statement', ['A normative statement', 'A value judgement', 'An assumption'], 'It can be checked against data, so it is positive.'],
      ['Doughnut economics was developed by…', 'Kate Raworth', ['John Maynard Keynes', 'Adam Smith', 'Milton Friedman'], 'Raworth proposed the doughnut: a safe and just space between a social floor and an ecological ceiling.'],
      ['Which is one of the nine IB key concepts?', 'Interdependence', ['Profitability', 'Globalisation', 'Taxation'], 'The nine concepts include interdependence, along with scarcity, choice, efficiency and others.'],
      ['Adam Smith is best known for the idea of…', 'The “invisible hand” of the market', ['The multiplier', 'Doughnut economics', 'Nudge theory'], 'Smith argued that self-interested market decisions can benefit society as a whole.'],
    ],
  ),
  '2.1': M(
    [
      'Worked example: at $2, students buy 300 smoothies a day; at $3 they buy 200. The rise in price causes a movement up the demand curve, a contraction in quantity demanded.',
      'Demand shifts right with higher income for normal goods, a rise in the price of a substitute, a fall in the price of a complement, favourable tastes, or a larger population.',
      'Why does demand slope down? The income effect, a lower price increases real income, the substitution effect, the good becomes cheaper than alternatives, and diminishing marginal utility.',
      'Common mistake: saying “demand increases” when price falls. A price change only changes quantity demanded. Only non-price factors shift demand.',
    ],
    [
      ['Substitutes', 'Goods used in place of each other; a rise in the price of one increases demand for the other.'],
      ['Diminishing marginal utility', 'Each extra unit consumed gives less additional satisfaction.'],
      ['Income effect', 'A price fall raises real income, so consumers can buy more.'],
      ['Joint demand', 'Another name for complements — goods demanded together, like printers and ink.'],
    ],
    [
      ['The price of tea rises. What happens to demand for coffee?', 'It shifts right', ['It shifts left', 'Quantity demanded falls', 'Nothing'], 'Tea and coffee are substitutes, so consumers switch to coffee.'],
      ['Which would shift demand for electric cars to the right?', 'A government subsidy for buyers', ['A rise in the price of electric cars', 'Higher electricity prices', 'A fall in consumer incomes'], 'A buyer subsidy lowers the effective cost and increases demand at every price.'],
      ['The demand curve slopes downward partly because of…', 'Diminishing marginal utility', ['Increasing costs', 'The law of supply', 'Economies of scale'], 'Each extra unit gives less satisfaction, so consumers pay less for more units.'],
      ['A successful advertising campaign for a brand causes…', 'A rightward shift in its demand', ['A movement along its demand curve', 'A leftward shift in supply', 'A fall in its price'], 'Tastes and preferences are a non-price determinant, so demand shifts.'],
    ],
  ),
  '2.2': M(
    [
      'Worked example: a bakery supplies 500 loaves at $2 and 700 at $3. A rise in the price of flour shifts the whole supply curve to the left, so fewer loaves are supplied at every price.',
      'Supply determinants to remember: costs of factors of production, technology, prices of related goods, producer expectations, taxes and subsidies, number of firms, and weather or shocks.',
      'Marginal cost explains the shape: producing more usually raises marginal cost, so firms need a higher price to supply extra units.',
      'Exam tip: always label the shift clearly, S1 to S2, with an arrow, and state the new equilibrium. Never shift demand when the cause is a cost change.',
    ],
    [
      ['Joint supply', 'Producing one good also produces another, e.g. beef and leather.'],
      ['Competitive supply', 'Producing more of one good means producing less of another from the same resources.'],
      ['Supply shock', 'A sudden event, like a drought, that shifts supply.'],
      ['Marginal cost', 'The extra cost of producing one more unit.'],
    ],
    [
      ['A drought destroys much of the wheat harvest. Supply of wheat…', 'Shifts left', ['Shifts right', 'Is unchanged', 'Becomes perfectly elastic'], 'The shock reduces the quantity producers can offer at every price.'],
      ['More firms enter the market. Supply…', 'Shifts right', ['Shifts left', 'Contracts along the curve', 'Becomes vertical'], 'More firms mean more output at every price.'],
      ['Beef and leather are an example of…', 'Joint supply', ['Complements in demand', 'Competitive supply', 'Substitutes'], 'Producing beef also produces hides for leather.'],
      ['Why does the supply curve usually slope upward?', 'Marginal cost rises as output rises', ['Consumers want more at higher prices', 'Taxes rise with output', 'Technology improves'], 'Higher prices are needed to cover the rising cost of extra units.'],
    ],
  ),
  '2.3': M(
    [
      'Worked example: demand is Qd = 100 − 10P and supply is Qs = −20 + 20P. Setting them equal gives 100 − 10P = −20 + 20P, so P = 4 and Q = 60.',
      'At HL you calculate consumer surplus as a triangle: one half times base times height. With a maximum willingness to pay of $10, price $4 and quantity 60, consumer surplus is one half times 60 times 6, which is $180.',
      'The price mechanism has three functions: signalling to producers and consumers, providing incentives, and rationing scarce goods.',
      'Exam tip: when both demand and supply shift, the change in one variable, price or quantity, is uncertain. Say which depends on the relative size of the shifts.',
    ],
    [
      ['Rationing function of price', 'Higher prices reduce quantity demanded so scarce goods go to those willing to pay most.'],
      ['Signalling function', 'Price changes tell producers and consumers about shortages and surpluses.'],
      ['Incentive function', 'Higher prices encourage firms to produce more.'],
      ['Consumer surplus (calculation)', '½ × quantity × (max willingness to pay − price).'],
    ],
    [
      ['Qd = 50 − 5P and Qs = 10 + 5P. The equilibrium price is…', '$4', ['$5', '$6', '$10'], '50 − 5P = 10 + 5P gives 40 = 10P, so P = 4 (and Q = 30).'],
      ['Supply rises and demand rises by the same amount. Price…', 'Stays the same and quantity rises', ['Rises and quantity falls', 'Falls and quantity falls', 'Rises and quantity is unchanged'], 'Equal rightward shifts raise quantity; the price effects cancel out.'],
      ['Higher prices encouraging firms to produce more is the…', 'Incentive function', ['Rationing function', 'Signalling function', 'Allocation failure'], 'Price rises create an incentive to supply more.'],
      ['Total social surplus is maximised when…', 'The market is at competitive equilibrium', ['There is a price ceiling', 'There is excess demand', 'Output is below equilibrium'], 'At equilibrium, marginal benefit equals marginal cost: allocative efficiency.'],
    ],
  ),
  '2.4': M(
    [
      'Behavioural biases you should name: availability, judging by recent examples; anchoring, relying on the first number seen; framing, reacting to how a choice is presented; and present bias, over-valuing now versus later.',
      'Real-world case: the UK’s automatic enrolment into workplace pensions raised participation among eligible private-sector workers from about 42% in 2012 to over 85%. A default did what incentives had not.',
      'Nudges are cheap and keep freedom of choice, but critics say they can be manipulative and may not change deep habits. Businesses also use nudges, for example “only 2 left” messages.',
      'Exam tip: evaluate rational choice theory by explaining a specific bias, then say whether the government should use nudges, taxes or information to respond.',
    ],
    [
      ['Anchoring', 'Relying too heavily on the first piece of information seen, e.g. a “was $99” price.'],
      ['Framing', 'Choices change depending on how options are presented (“90% fat-free” vs “10% fat”).'],
      ['Present bias', 'Over-valuing immediate rewards compared with future ones.'],
      ['Availability bias', 'Judging likelihood by how easily examples come to mind.'],
    ],
    [
      ['A shop shows a “was $80, now $50” label. This uses…', 'Anchoring', ['Moral hazard', 'Diminishing returns', 'Free riding'], 'The $80 anchor makes $50 seem like a bargain.'],
      ['Choosing to scroll social media instead of revising for tomorrow’s test shows…', 'Present bias', ['Rational choice', 'Utility maximisation', 'Perfect information'], 'Immediate pleasure is over-valued compared with future benefits.'],
      ['A strength of nudges compared with taxes is that they…', 'Preserve freedom of choice at low cost', ['Raise government revenue', 'Always change behaviour', 'Work without any information'], 'Nudges steer behaviour without banning options or changing prices.'],
      ['“Surgery has a 90% survival rate” vs “10% mortality rate” shows…', 'Framing', ['Anchoring', 'Satisficing', 'Signalling'], 'The same information presented differently leads to different choices.'],
    ],
  ),
  '2.5': M(
    [
      'Real-world case: petrol and cigarettes have inelastic demand, which is why governments tax them heavily. Revenue stays high because quantity falls only a little.',
      'Firms use PED for pricing. Airlines charge business travellers, whose demand is inelastic, more than holiday-makers, whose demand is elastic. This is price discrimination.',
      'Primary commodities often have low PED and low YED. As world incomes grow, demand for manufactured goods and services grows faster, a reason commodity exporters fall behind.',
      'Common mistake: calling a good with PED of minus 0.5 “elastic” because the number is negative. Always use the absolute value; the minus sign only shows the inverse relationship.',
    ],
    [
      ['Unit elastic demand', '|PED| = 1: revenue is unchanged when price changes.'],
      ['Why governments tax goods with inelastic demand', 'Quantity falls little, so tax revenue stays high.'],
      ['Luxury good (YED)', 'YED > 1: demand rises more than proportionally with income.'],
      ['Price discrimination', 'Charging different prices to groups with different PEDs for the same product.'],
    ],
    [
      ['If PED = −2 and price falls 5%, quantity demanded…', 'Rises 10%', ['Falls 10%', 'Rises 2.5%', 'Rises 5%'], '%ΔQd = PED × %ΔP = −2 × −5% = +10%.'],
      ['A good with YED of +2.5 is…', 'A luxury (income elastic) good', ['An inferior good', 'A necessity', 'A Giffen good'], 'YED greater than 1 means demand is income elastic.'],
      ['Demand for a specific brand of cola is likely to be…', 'Price elastic', ['Perfectly inelastic', 'Price inelastic', 'Unit elastic'], 'There are many close substitutes, so buyers switch easily.'],
      ['Governments prefer to tax goods with inelastic demand because…', 'Tax revenue stays high as quantity falls little', ['Consumers stop buying them', 'Producers pay all of the tax', 'Prices fall'], 'Inelastic demand means the tax base barely shrinks.'],
    ],
  ),
  '2.6': M(
    [
      'Worked example: price of phones rises from $200 to $220, 10%, and quantity supplied rises from 1000 to 1150, 15%. PES is 15 divided by 10, which is 1.5: elastic.',
      'Diagrams: a supply curve through the origin always has unit elasticity. A vertical supply curve is perfectly inelastic, PES zero, like tickets for one concert.',
      'Manufactured goods usually have more elastic supply than primary commodities, because factories can add shifts quickly and goods can be stored.',
      'Exam tip: link PES to price volatility. When supply is inelastic, a demand shift causes a large price change — explain this for commodity markets.',
    ],
    [
      ['Perfectly inelastic supply', 'PES = 0; vertical supply curve, e.g. seats at a concert.'],
      ['Straight-line supply from origin', 'Always has PES = 1.'],
      ['Spare capacity and PES', 'More spare capacity makes supply more elastic.'],
      ['Stocks (inventories) and PES', 'Firms with stored goods can respond quickly, so supply is more elastic.'],
    ],
    [
      ['Price rises from $10 to $12 and quantity supplied rises from 100 to 110. PES is…', '0.5', ['2', '1', '0.2'], '%ΔQs = 10%, %ΔP = 20%, so PES = 0.5.'],
      ['Supply of seats in a stadium for tonight’s game is…', 'Perfectly inelastic', ['Perfectly elastic', 'Unit elastic', 'Elastic'], 'The number of seats cannot change in the short run.'],
      ['Why are cocoa prices more volatile than smartphone prices?', 'Cocoa supply is price inelastic', ['Cocoa demand is elastic', 'Smartphones have no substitutes', 'Cocoa is a luxury good'], 'With inelastic supply, shifts cause big price changes.'],
      ['A straight-line supply curve from the origin has PES…', 'Equal to 1', ['Equal to 0', 'Greater than 1', 'That varies from 0 to infinity'], 'Any straight supply line through the origin is unit elastic.'],
    ],
  ),
  '2.7': M(
    [
      'Worked example: a $2 tax per unit shifts supply up by $2. If price rises from $5 to $6.50, consumers pay $1.50 of the tax and producers pay $0.50. Government revenue is $2 times the new quantity.',
      'A subsidy of $1 per unit shifts supply down by $1. Government spending equals the subsidy times the new quantity. Consumers gain a lower price and producers receive more per unit.',
      'Price floors in agriculture create surpluses that the government must buy and store, like the EU’s past “butter mountains”. Minimum wages are a price floor in the labour market.',
      'Evaluate with stakeholders: consumers, producers, workers, the government budget and society. Also mention black markets under price ceilings and welfare loss.',
    ],
    [
      ['Specific tax vs ad valorem tax', 'Specific: a fixed amount per unit (parallel shift). Ad valorem: a percentage of price (pivot).'],
      ['Government revenue from a tax', 'Tax per unit × quantity sold after the tax.'],
      ['Black market', 'Illegal trade at prices above a price ceiling.'],
      ['Cost of a subsidy', 'Subsidy per unit × new quantity.'],
    ],
    [
      ['A $3 per unit tax raises price from $10 to $12. Producers’ share of the tax per unit is…', '$1', ['$2', '$3', '$0'], 'Consumers pay $2 more, so producers bear the remaining $1.'],
      ['A subsidy of $2 per unit, with 500 units sold after the subsidy, costs the government…', '$1000', ['$500', '$250', '$2000'], 'Cost = $2 × 500 = $1000.'],
      ['A likely consequence of a price ceiling on bread is…', 'A black market and queues', ['A surplus of bread', 'Higher producer revenue', 'Lower demand'], 'The shortage leads to rationing, queues and illegal resale.'],
      ['An ad valorem tax shifts the supply curve…', 'Upward and becomes steeper', ['Upward in parallel', 'Downward in parallel', 'To the right'], 'A percentage tax adds more at higher prices, so the curve pivots.'],
    ],
  ),
  '2.8': M(
    [
      'Worked example: a factory’s marginal private cost is $10 per unit but pollution adds $4 of external cost. The marginal social cost is $14. A Pigouvian tax of $4 makes the firm pay the full social cost.',
      'Negative consumption externalities, such as smoking or loud music, have marginal social benefit below marginal private benefit. The market over-consumes; answers include taxes, bans and education.',
      'Carbon taxes and cap-and-trade schemes, like the EU Emissions Trading System, put a price on carbon. International cooperation, like the Paris Agreement, is needed because pollution crosses borders.',
      'The tragedy of the commons: each user of a common pool resource gains from using more, but the resource is depleted for everyone. Solutions include quotas, licences and community management.',
    ],
    [
      ['Pigouvian tax', 'A tax equal to the external cost, so the market reaches the socially optimal output.'],
      ['Negative consumption externality', 'Consumption harms third parties, e.g. second-hand smoke; MSB < MPB.'],
      ['Tragedy of the commons', 'Individual overuse depletes a shared resource for everyone.'],
      ['Cap and trade', 'Government caps total emissions and firms trade permits.'],
    ],
    [
      ['MPC is $20, the external cost is $5. MSC is…', '$25', ['$15', '$20', '$5'], 'MSC = MPC + external cost.'],
      ['Second-hand smoke is an example of…', 'A negative consumption externality', ['A positive production externality', 'A public good', 'Asymmetric information'], 'Consumption by smokers harms third parties.'],
      ['An advantage of tradable permits over a carbon tax is that…', 'The total level of pollution is capped with certainty', ['They raise more revenue', 'They are simpler to run', 'Prices never change'], 'The cap fixes emissions; the permit price varies.'],
      ['With a positive consumption externality, the market…', 'Under-consumes the good', ['Over-consumes the good', 'Reaches the social optimum', 'Creates a surplus'], 'Consumers ignore external benefits, so MSB > MPB and output is too low.'],
    ],
  ),
  '2.9': M(
    [
      'Quasi-public goods have some public good features but are not pure. A toll road is non-rivalrous until congested and excludable with a toll.',
      'Real-world case: lighthouses were long used as the textbook public good, but some were once funded by port fees. This shows that public goods can sometimes be provided privately.',
      'Governments provide public goods either directly or by contracting private firms, paid for from taxes. The difficulty is deciding how much to provide without prices to reveal demand.',
      'Exam tip: classify goods using a two-by-two grid of rivalry and excludability: private goods, common pool resources, club goods and public goods.',
    ],
    [
      ['Quasi-public good', 'Has some but not all public good features, e.g. a road that can get congested.'],
      ['Club good', 'Excludable but non-rivalrous, e.g. a streaming service.'],
      ['Why public goods are hard to value', 'No prices, so people don’t reveal how much they value them.'],
      ['Rivalry and excludability grid', 'Private, club, common pool and public goods.'],
    ],
    [
      ['A streaming service is best described as…', 'A club good', ['A public good', 'A common pool resource', 'A merit good'], 'Non-subscribers can be excluded, but one viewer doesn’t reduce another’s use.'],
      ['A busy toll road is…', 'Rivalrous and excludable', ['Non-rivalrous and non-excludable', 'A pure public good', 'A common pool resource'], 'When congested, use is rivalrous, and the toll excludes.'],
      ['Why is it hard for governments to decide how much of a public good to provide?', 'People don’t reveal their valuation through prices', ['Public goods are too cheap', 'Everyone pays for them directly', 'Markets already provide enough'], 'Without markets there is no price signal of demand.'],
      ['National defence is non-excludable because…', 'No resident can be prevented from benefiting', ['It is provided by the government', 'It is expensive', 'Only citizens pay for it'], 'Protection covers everyone in the country.'],
    ],
  ),
  '2.10': M(
    [
      'George Akerlof’s “market for lemons” shows adverse selection: if buyers can’t tell good used cars from bad ones, they offer an average price, so owners of good cars leave the market.',
      'Signalling is when the informed party reveals quality, like a degree or a warranty. Screening is when the uninformed party finds out, like an insurer requiring a medical check.',
      'Real-world case: the 2008 financial crisis involved moral hazard. Banks took large risks, partly expecting to be rescued because they were “too big to fail”.',
      'Evaluate responses: regulation and disclosure help, but cost money to enforce, and some information gaps, like hidden effort, are hard to close.',
    ],
    [
      ['Market for lemons', 'Akerlof: hidden quality in used cars drives good cars out of the market.'],
      ['Signalling', 'Informed party reveals information, e.g. qualifications, warranties.'],
      ['Screening', 'Uninformed party gathers information, e.g. medical checks, credit scores.'],
      ['Too big to fail', 'Large banks expect bailouts, which encourages risky behaviour (moral hazard).'],
    ],
    [
      ['A used-car seller offers a 2-year warranty. This is…', 'Signalling', ['Screening', 'Moral hazard', 'Adverse selection'], 'The informed seller signals the car’s quality.'],
      ['An insurer requiring a health check before cover is…', 'Screening', ['Signalling', 'Moral hazard', 'A nudge'], 'The uninformed insurer gathers information.'],
      ['Once insured, a driver becomes more careless. This is…', 'Moral hazard', ['Adverse selection', 'Signalling', 'A free rider problem'], 'Behaviour changes after the contract because the risk is covered.'],
      ['In Akerlof’s model, the used-car market…', 'Is left with mostly low-quality cars', ['Has only high-quality cars', 'Always reaches efficiency', 'Has perfectly informed buyers'], 'Owners of good cars won’t sell at the average price.'],
    ],
  ),
  '2.11': M(
    [
      'Worked example: a monopolist maximises profit where MC equals MR, at 100 units. It then reads the price from the demand curve, say $30, above the MC of $12. The gap shows market power.',
      'Monopolies cause allocative inefficiency, price above MC, and often productive inefficiency. But they may fund research and gain economies of scale, as with a natural monopoly like a water network.',
      'Game theory explains oligopoly: in the prisoner’s dilemma, each firm is better off cutting prices whatever its rival does, even though both would earn more by colluding.',
      'Evaluation: regulators like the EU’s competition authority have fined Google billions of euros for abusing dominance. Regulation must balance lower prices against incentives to innovate.',
    ],
    [
      ['Natural monopoly', 'One firm can supply the market at lower average cost than several, e.g. water pipes.'],
      ['Prisoner’s dilemma', 'Each firm’s best choice leads to a worse outcome for both than cooperation.'],
      ['Monopolistic competition', 'Many firms selling differentiated products, e.g. restaurants.'],
      ['Concentration ratio', 'Market share of the largest firms, e.g. CR4 of the top four.'],
    ],
    [
      ['Where does a monopolist set output?', 'Where MC = MR', ['Where P = MC', 'Where AC is lowest', 'Where demand is unit elastic'], 'Profit is maximised where marginal cost equals marginal revenue.'],
      ['A water supply network is often a…', 'Natural monopoly', ['Perfectly competitive market', 'Monopolistic competition', 'Cartel'], 'Duplicating pipes would be wasteful, so one firm has the lowest costs.'],
      ['Restaurants in a city are an example of…', 'Monopolistic competition', ['Perfect competition', 'Monopoly', 'Oligopoly'], 'Many firms sell differentiated products with low barriers to entry.'],
      ['The prisoner’s dilemma explains why oligopolists…', 'Find collusion hard to sustain', ['Always collude', 'Never compete on price', 'Have no rivals'], 'Each firm has an incentive to cheat on an agreement.'],
    ],
  ),
  '2.12': M(
    [
      'Merit goods, like education and health care, are under-consumed in a free market because people underestimate their benefits and some cannot afford them. Governments provide or subsidise them.',
      'Demerit goods, like cigarettes, are over-consumed. Responses include taxes, bans, regulation and awareness campaigns.',
      'Markets reward ownership of factors of production, so people with little education, capital or land earn low incomes. Inherited wealth passes advantages across generations.',
      'Exam tip: link market failure to equity. Explain why an efficient market can still be unfair, and evaluate trade-offs between efficiency and equity in any policy.',
    ],
    [
      ['Demerit good', 'A good that is over-consumed and harmful, e.g. cigarettes.'],
      ['Efficiency–equity trade-off', 'Policies that make outcomes fairer may reduce incentives or efficiency.'],
      ['Universal basic income', 'A regular payment to every citizen regardless of income.'],
      ['Why merit goods are under-consumed', 'Imperfect information about benefits and inability to pay.'],
    ],
    [
      ['Cigarettes are an example of a…', 'Demerit good', ['Merit good', 'Public good', 'Club good'], 'They are harmful and over-consumed in a free market.'],
      ['Why is education considered a merit good?', 'People underestimate its benefits and it creates positive externalities', ['It is non-rivalrous', 'It is always free', 'It has no substitutes'], 'Merit goods are under-consumed in a free market.'],
      ['High taxes on the rich to fund benefits may reduce efficiency because…', 'They may reduce incentives to work and invest', ['They lower government revenue', 'They create public goods', 'They cause deflation'], 'This is the classic efficiency–equity trade-off.'],
      ['Which best explains unequal market incomes?', 'Unequal ownership of factors of production', ['Perfect competition', 'Price ceilings', 'Public goods'], 'Markets reward those who own skills, capital and land.'],
    ],
  ),
  '3.1': M(
    [
      'The three approaches to GDP give the same total: the output method adds value added, the income method adds wages, rent, interest and profit, and the expenditure method adds C plus I plus G plus X minus M.',
      'Worked example: nominal GDP rises from $500 billion to $540 billion, 8%, while prices rise 5%. Real GDP growth is roughly 8 minus 5, about 3%.',
      'GNI equals GDP plus income earned abroad by residents minus income paid to foreigners. For countries with many foreign-owned firms, like Ireland, GNI is much lower than GDP.',
      'Alternative measures of well-being include the OECD Better Life Index, the Happy Planet Index and the World Happiness Report. Use them to evaluate GDP.',
    ],
    [
      ['Expenditure method', 'GDP = C + I + G + (X − M).'],
      ['Real GDP growth (approx.)', 'Nominal growth − inflation rate.'],
      ['GNI formula', 'GNI = GDP + income earned abroad by residents − income paid to foreigners.'],
      ['Green GDP', 'GDP minus the cost of environmental damage and resource depletion.'],
    ],
    [
      ['Nominal GDP grows 6% and inflation is 4%. Real GDP grows about…', '2%', ['10%', '6%', '4%'], 'Real growth ≈ nominal growth − inflation.'],
      ['Which is a leakage from the circular flow?', 'Taxes', ['Exports', 'Government spending', 'Investment'], 'Leakages are savings, taxes and imports.'],
      ['Ireland’s GNI is much lower than its GDP because…', 'Much income goes to foreign-owned firms', ['It has high inflation', 'It exports little', 'It uses the euro'], 'Profits sent abroad count in GDP but not GNI.'],
      ['The trough of the business cycle is when…', 'Real GDP is at its lowest point', ['Inflation is highest', 'Growth is fastest', 'Unemployment is lowest'], 'It is the bottom of a downturn before recovery.'],
    ],
  ),
  '3.2': M(
    [
      'AD components: consumption, investment, government spending and net exports. Consumption is the largest, often 50 to 70% of GDP. Its determinants include income, wealth, confidence, interest rates and debt.',
      'Investment depends on interest rates, business confidence, technology and corporate taxes. It is the most volatile component of AD.',
      'The Keynesian AS curve has three parts: flat at low output with spare capacity, upward sloping as bottlenecks appear, and vertical at full employment. An AD increase then raises output, prices, or only prices.',
      'Exam tip: always say which model you are using, and show the output gap. A rise in AD in the flat Keynesian section raises output with no inflation.',
    ],
    [
      ['Largest component of AD', 'Consumption (household spending).'],
      ['Most volatile component of AD', 'Investment.'],
      ['Inflationary gap', 'Real GDP above potential output.'],
      ['Keynesian AS shape', 'Flat, then upward sloping, then vertical at full employment.'],
    ],
    [
      ['Consumer confidence falls sharply. This causes…', 'AD to shift left', ['SRAS to shift left', 'LRAS to shift right', 'A movement along AD'], 'Lower confidence reduces consumption.'],
      ['Better education improving productivity shifts…', 'LRAS to the right', ['AD to the left', 'SRAS to the left', 'Nothing in the long run'], 'Better human capital raises potential output.'],
      ['An inflationary gap exists when…', 'Output is above potential output', ['Output is below potential', 'There is deflation', 'LRAS shifts right'], 'Real GDP exceeds full-employment output.'],
      ['In the flat part of the Keynesian AS curve, a rise in AD mainly increases…', 'Real output', ['The price level', 'Unemployment', 'Interest rates'], 'Spare capacity lets output rise without inflation.'],
    ],
  ),
  '3.3': M(
    [
      'Worked example: the labour force is 50 million and 3 million are unemployed. The unemployment rate is 3 divided by 50, times 100, which is 6%.',
      'Worked example: a basket costs $200 in the base year and $210 this year. The price index is 105, so inflation is 5%.',
      'Deflation is a sustained fall in the price level. It can cause consumers to delay spending and raise the real value of debt, which can deepen a recession.',
      'Other costs to know: unemployment brings lost output, lower tax revenue and social problems. Inflation erodes savings, creates uncertainty and harms export competitiveness.',
    ],
    [
      ['Price index formula', '(Cost of basket this year ÷ cost in base year) × 100.'],
      ['Deflation', 'A sustained fall in the average price level.'],
      ['Hidden unemployment', 'People who want work but are not counted, e.g. discouraged workers.'],
      ['Natural rate of unemployment', 'Structural + frictional + seasonal unemployment at full employment.'],
    ],
    [
      ['Labour force 40 million, 2 million unemployed. The unemployment rate is…', '5%', ['2%', '20%', '4%'], '2 ÷ 40 × 100 = 5%.'],
      ['A price index rises from 120 to 126. The inflation rate is…', '5%', ['6%', '4.8%', '126%'], '(126 − 120) ÷ 120 × 100 = 5%.'],
      ['Why can deflation be harmful?', 'Consumers delay spending, reducing AD', ['It raises interest rates automatically', 'It reduces the real value of debt', 'It always increases exports'], 'Expecting lower prices, people wait, and demand falls.'],
      ['Students taking a few weeks to find their first job are…', 'Frictionally unemployed', ['Structurally unemployed', 'Cyclically unemployed', 'Seasonally unemployed'], 'Frictional unemployment is short-term, between jobs.'],
    ],
  ),
  '3.4': M(
    [
      'Worked example: in a Lorenz curve, if the poorest 50% of households receive 20% of income, the curve lies below the line of equality at that point. A Gini of 0 is perfect equality; 1 is perfect inequality.',
      'Tax types: progressive taxes take a higher percentage from higher incomes; regressive taxes take a higher percentage from lower incomes, like sales tax in effect; proportional taxes take the same percentage.',
      'Real-world case: South Africa has one of the world’s highest Gini coefficients, around 0.63, while Nordic countries are around 0.25 to 0.28 after taxes and transfers.',
      'Evaluate policies: higher progressive taxes and transfers reduce inequality but may reduce incentives. Universal education and health care tackle causes rather than symptoms.',
    ],
    [
      ['Regressive tax', 'Takes a larger share of income from the poor, e.g. sales tax.'],
      ['Proportional (flat) tax', 'Same percentage of income from everyone.'],
      ['Wealth vs income', 'Wealth is a stock of assets; income is a flow of earnings.'],
      ['Intergenerational mobility', 'How much a child’s income depends on their parents’.'],
    ],
    [
      ['A sales tax is usually…', 'Regressive', ['Progressive', 'Proportional', 'A transfer payment'], 'Lower-income households spend a larger share of income, so pay a larger share in tax.'],
      ['A Lorenz curve moving closer to the line of equality means…', 'Inequality has fallen', ['Inequality has risen', 'GDP has risen', 'Poverty has risen'], 'The closer the curve to the diagonal, the more equal the distribution.'],
      ['Which is a stock rather than a flow?', 'Wealth', ['Income', 'Wages', 'Interest received'], 'Wealth is the value of assets owned at a point in time.'],
      ['A policy tackling the root causes of inequality is…', 'Free quality education', ['A one-off cash gift', 'A price ceiling on food', 'A regressive tax'], 'Education raises human capital and earning potential.'],
    ],
  ),
  '3.5': M(
    [
      'The transmission mechanism: a lower interest rate reduces the cost of borrowing, raises asset prices, weakens the currency and boosts confidence. Together these raise consumption, investment and net exports.',
      'Real-world case: after 2022, central banks such as the US Federal Reserve raised rates quickly to bring inflation down from around 9% back towards the 2% target.',
      'Limitations: a liquidity trap when rates are near zero, time lags of 18 months or more, and low confidence meaning people won’t borrow even when it’s cheap.',
      'Exam tip: evaluate by comparing monetary with fiscal policy: monetary policy is flexible and independent but weak in deep recessions; fiscal policy is powerful but slow and political.',
    ],
    [
      ['Monetary transmission mechanism', 'Interest rate changes affect borrowing, asset prices, the exchange rate and confidence, then AD.'],
      ['Liquidity trap', 'Interest rates near zero so further cuts don’t boost spending.'],
      ['Central bank independence', 'Free from political control, making inflation targets more credible.'],
      ['Real interest rate', 'Nominal interest rate − inflation rate.'],
    ],
    [
      ['A cut in interest rates is likely to make the currency…', 'Depreciate', ['Appreciate', 'Stay fixed', 'Be devalued by law'], 'Lower returns reduce demand for the currency.'],
      ['Nominal interest rate 5%, inflation 3%. The real interest rate is…', '2%', ['8%', '3%', '5%'], 'Real rate = nominal − inflation.'],
      ['Near-zero interest rates failing to boost spending is a…', 'Liquidity trap', ['Crowding out', 'Multiplier effect', 'J-curve'], 'Further cuts have little effect.'],
      ['Why are independent central banks thought to control inflation better?', 'Their decisions are free from short-term political pressure', ['They set tax rates', 'They can print unlimited money', 'They control wages'], 'Independence makes inflation targets credible.'],
    ],
  ),
  '3.6': M(
    [
      'Worked example: the government spends an extra $10 billion and the MPC is 0.75. The multiplier is 1 divided by 1 minus 0.75, which is 4, so real GDP rises by up to $40 billion.',
      'The multiplier is smaller when leakages are bigger. Using marginal propensities: the multiplier equals 1 divided by the sum of MPS, MPT and MPM.',
      'Government debt is the total borrowed over time; the budget deficit is one year’s gap. High debt can raise interest costs and limit future policy options.',
      'Evaluate: fiscal policy can target specific areas, like infrastructure in poorer regions, but faces time lags, political pressure and possible crowding out.',
    ],
    [
      ['Multiplier with leakages', '1 ÷ (MPS + MPT + MPM).'],
      ['Budget deficit vs national debt', 'Deficit: one year’s shortfall. Debt: the total accumulated borrowing.'],
      ['Discretionary fiscal policy', 'Deliberate changes in taxes or spending.'],
      ['Balanced budget', 'Government revenue equals government spending.'],
    ],
    [
      ['MPS = 0.1, MPT = 0.2 and MPM = 0.2. The multiplier is…', '2', ['5', '1.5', '10'], '1 ÷ (0.1 + 0.2 + 0.2) = 1 ÷ 0.5 = 2.'],
      ['An extra $5 billion of spending with a multiplier of 3 raises GDP by up to…', '$15 billion', ['$5 billion', '$8 billion', '$1.67 billion'], 'ΔGDP = multiplier × injection = 3 × 5.'],
      ['Crowding out happens when…', 'Government borrowing raises interest rates and reduces private investment', ['Exports rise', 'Taxes fall', 'The central bank cuts rates'], 'Competition for loans pushes up interest rates.'],
      ['The total amount a government owes is its…', 'National debt', ['Budget deficit', 'Current account', 'Multiplier'], 'The deficit is one year; debt is the accumulated total.'],
    ],
  ),
  '3.7': M(
    [
      'Supply-side policies can be shown on an AD–AS diagram as a rightward shift of LRAS, and in the Keynesian model as a rightward shift of the vertical section.',
      'Real-world examples: Singapore’s SkillsFuture credits fund lifelong training; privatisation of telecoms in many countries increased competition; and India’s GST reform simplified taxes.',
      'Industrial policies support specific sectors, for example subsidies for semiconductor factories. Supporters say they build strategic industries; critics warn about picking losers and wasting money.',
      'Evaluate: supply-side policies work in the long run and are non-inflationary, but they are slow, can be costly, and market-based ones may increase inequality.',
    ],
    [
      ['Industrial policy', 'Government support for specific strategic sectors.'],
      ['Labour market reform', 'E.g. weakening minimum wages or unions to increase flexibility.'],
      ['Why supply-side policies are non-inflationary', 'They increase capacity rather than just demand.'],
      ['Privatisation', 'Selling state-owned firms to the private sector.'],
    ],
    [
      ['Which is a market-based supply-side policy?', 'Cutting corporate taxes', ['Building public schools', 'Funding public research', 'Nationalising railways'], 'It works through market incentives.'],
      ['A major drawback of interventionist supply-side policies is that they…', 'Are costly and take a long time to have effects', ['Cause immediate inflation', 'Lower LRAS', 'Reduce education'], 'Investment in education or infrastructure pays off slowly.'],
      ['Supply-side policies can reduce inflation because they…', 'Increase productive capacity', ['Reduce AD', 'Raise interest rates', 'Cut exports'], 'More capacity lowers cost pressure.'],
      ['Subsidies for a national semiconductor industry are an example of…', 'Industrial policy', ['Monetary policy', 'Deregulation', 'Trade liberalisation'], 'Government support targets a strategic sector.'],
    ],
  ),
  '4.1': M(
    [
      'Worked example: Country A can make 10 cars or 20 phones; country B can make 5 cars or 20 phones. A’s opportunity cost of one car is 2 phones; B’s is 4 phones. A has the comparative advantage in cars, B in phones.',
      'Gains from trade include lower prices, more choice, economies of scale, more competition, access to resources and technology transfer.',
      'The World Trade Organization estimates that trade opening has lifted hundreds of millions out of poverty, especially in East Asia, but gains are unevenly distributed.',
      'Exam tip: always show opportunity cost ratios in a table before saying who specialises. State the terms of trade that make both countries better off.',
    ],
    [
      ['Terms of trade', 'The rate at which exports exchange for imports.'],
      ['Economies of scale from trade', 'Larger markets let firms produce more at lower average cost.'],
      ['How to find comparative advantage', 'Compare opportunity costs; the lower opportunity cost has the comparative advantage.'],
      ['Specialisation', 'Concentrating on producing goods with the lowest opportunity cost.'],
    ],
    [
      ['A: 12 shirts or 6 hats. B: 8 shirts or 8 hats. Who has comparative advantage in hats?', 'Country B', ['Country A', 'Neither', 'Both'], 'B’s opportunity cost of a hat is 1 shirt; A’s is 2 shirts.'],
      ['Comparative advantage depends on…', 'Opportunity cost', ['Absolute output', 'Exchange rates only', 'Population size'], 'The country giving up less has comparative advantage.'],
      ['Trade can lead to lower prices because…', 'It increases competition and specialisation', ['It raises tariffs', 'It reduces choice', 'It limits supply'], 'Specialisation and competition cut costs.'],
      ['A limitation of comparative advantage theory is that it assumes…', 'No transport costs', ['Countries have no resources', 'Trade is banned', 'All goods are public goods'], 'Real trade involves transport costs, which reduce gains.'],
    ],
  ),
  '4.2': M(
    [
      'Worked example: a tariff of $5 per unit raises the domestic price from $20 to $25. Domestic producers expand, imports fall, and the government collects $5 times the remaining imports.',
      'Welfare loss from a tariff has two triangles: a production inefficiency, as high-cost domestic firms produce more, and a consumption loss, as consumers buy less.',
      'Other forms of protection include export subsidies, administrative barriers like strict safety standards, and voluntary export restraints.',
      'Real-world case: in 2018 the US placed tariffs on steel and on many Chinese goods. China retaliated, and studies found US consumers and firms bore most of the cost.',
    ],
    [
      ['Tariff revenue', 'Tariff per unit × quantity of imports after the tariff.'],
      ['Welfare loss from a tariff', 'Production inefficiency triangle + consumption loss triangle.'],
      ['Export subsidy', 'Payment to domestic firms to help them sell abroad.'],
      ['Voluntary export restraint', 'An exporting country agrees to limit its exports.'],
    ],
    [
      ['A tariff of $4 per unit with 1000 units imported after the tariff raises…', '$4000', ['$1000', '$250', '$400'], 'Revenue = $4 × 1000.'],
      ['Strict product standards that foreign firms find hard to meet are…', 'An administrative barrier', ['A tariff', 'A quota', 'An export subsidy'], 'They restrict imports through rules and paperwork.'],
      ['Who gains from a quota?', 'Domestic producers and foreign firms granted import licences', ['Domestic consumers', 'The government through tax revenue', 'Nobody'], 'Import licence holders sell at the higher domestic price.'],
      ['A production subsidy for domestic firms…', 'Keeps consumer prices at world levels', ['Raises the domestic price', 'Raises tariff revenue', 'Reduces domestic production'], 'Unlike a tariff, it doesn’t raise the price consumers pay.'],
    ],
  ),
  '4.3': M(
    [
      'Arguments for protection can be economic, like protecting jobs, correcting a trade deficit and preventing dumping, or non-economic, like national security, health and environmental standards.',
      'Evaluate each argument: infant industries may never “grow up”, protecting jobs in one industry often costs jobs elsewhere, and retaliation can start a trade war.',
      'Real-world case: the WTO allows anti-dumping duties if a firm sells abroad below its home price and harms domestic firms. The EU has used them against steel and solar panels.',
      'Exam tip: a strong answer weighs arguments by stakeholder, including consumers, domestic producers, workers, foreign producers and government, and considers short and long run effects.',
    ],
    [
      ['Anti-dumping duty', 'A tariff on goods sold abroad below their home price or cost.'],
      ['Trade war', 'Countries retaliate against each other’s protection, raising barriers further.'],
      ['Strategic industry argument', 'Protecting industries vital for national security, like defence or food.'],
      ['Why protecting jobs may fail', 'Higher costs and retaliation can destroy jobs in other industries.'],
    ],
    [
      ['An argument for protection based on national security applies to…', 'Defence equipment and food supplies', ['Luxury handbags', 'Video games', 'Fashion clothing'], 'Countries may want to avoid depending on others for essentials.'],
      ['A key weakness of the infant industry argument is that…', 'Protected firms may never become efficient', ['It lowers prices', 'It increases imports', 'It is banned by all countries'], 'Without competition, firms may lack incentives to improve.'],
      ['The WTO permits anti-dumping duties when…', 'Goods are sold below normal value and harm domestic producers', ['Imports rise at all', 'A country has a deficit', 'Consumers complain'], 'They must prove dumping and material injury.'],
      ['Protection may cost jobs in other industries because…', 'Input prices rise and trading partners retaliate', ['Exports rise', 'Imports become cheaper', 'The currency depreciates'], 'Higher-cost inputs and retaliation hurt exporters.'],
    ],
  ),
  '4.4': M(
    [
      'Levels of integration from least to most: preferential trade agreement, free trade area, customs union, common market, economic and monetary union, and complete economic integration.',
      'Real-world examples: USMCA is a free trade area; the EU is a common market, and its eurozone members form a monetary union; ASEAN and the African Continental Free Trade Area are growing agreements.',
      'Monetary union removes exchange rate risk and transaction costs, but members lose independent monetary policy. Greece in the 2010s could not devalue its currency to regain competitiveness.',
      'Bilateral agreements are between two countries; multilateral ones involve many, often through the WTO. Critics say regional deals can undermine the multilateral system.',
    ],
    [
      ['Preferential trade agreement', 'Lower barriers on certain goods between members.'],
      ['Monetary union', 'Members share a currency and central bank, e.g. the eurozone.'],
      ['Cost of monetary union', 'Losing independent monetary and exchange rate policy.'],
      ['Bilateral vs multilateral', 'Two countries vs many countries.'],
    ],
    [
      ['USMCA (US, Mexico, Canada) is a…', 'Free trade area', ['Monetary union', 'Customs union', 'Common market'], 'Members remove barriers but keep their own external tariffs.'],
      ['A key cost of joining a monetary union is losing…', 'Independent interest rate policy', ['Access to trade', 'Fiscal policy completely', 'Membership of the WTO'], 'The shared central bank sets one interest rate.'],
      ['Which level adds free movement of labour and capital?', 'Common market', ['Free trade area', 'Customs union', 'Preferential trade agreement'], 'A common market goes beyond goods to factors of production.'],
      ['Trade creation occurs when…', 'Higher-cost domestic production is replaced by cheaper imports from a member', ['Imports from a cheaper non-member are replaced', 'Tariffs rise', 'Exports fall'], 'Integration shifts buying to more efficient producers.'],
    ],
  ),
  '4.5': M(
    [
      'Worked example: $1 buys 80 rupees. If it then buys 90 rupees, the dollar has appreciated and the rupee has depreciated. A $10 American good now costs 900 rupees instead of 800.',
      'Managed exchange rates are a middle ground: the currency floats, but the central bank intervenes to smooth sharp swings, as India and Singapore do.',
      'Effects of depreciation: exports become more competitive, imports dearer, which can cause imported inflation. Firms with foreign debts see those debts grow in local currency.',
      'Exam tip: draw a currency market diagram with the price of the currency in terms of another on the vertical axis. Explain which curve shifts and why.',
    ],
    [
      ['Managed float', 'Currency floats but the central bank intervenes to limit big swings.'],
      ['Revaluation vs appreciation', 'Revaluation: a fixed rate is raised by the government. Appreciation: a floating rate rises.'],
      ['Imported inflation', 'Higher import prices after a depreciation push up the price level.'],
      ['Speculation', 'Buying a currency expecting its value to rise.'],
    ],
    [
      ['$1 = 80 rupees changes to $1 = 90 rupees. The rupee has…', 'Depreciated', ['Appreciated', 'Been revalued', 'Not changed'], 'More rupees are needed to buy a dollar.'],
      ['A depreciation can cause inflation because…', 'Imported goods and raw materials become more expensive', ['Exports fall', 'Interest rates fall', 'Imports become cheaper'], 'Higher import prices raise costs and prices.'],
      ['Tourists flooding into Thailand will cause the baht to…', 'Appreciate', ['Depreciate', 'Be devalued', 'Stay the same'], 'Tourists increase demand for baht.'],
      ['Under a fixed exchange rate, a government raising the rate is a…', 'Revaluation', ['Depreciation', 'Devaluation', 'Appreciation'], 'Revaluation is an official increase in a fixed rate.'],
    ],
  ),
  '4.6': M(
    [
      'The four parts of the current account: trade in goods, trade in services, primary income, like wages and dividends, and secondary income, like remittances and aid.',
      'Worked example: exports of goods $50 billion, imports of goods $60 billion, service surplus $4 billion, net income $1 billion. The current account balance is minus $5 billion.',
      'Correcting a current account deficit: expenditure-switching policies, like depreciation or tariffs, and expenditure-reducing policies, like contractionary fiscal or monetary policy, plus supply-side policies.',
      'Evaluate: a deficit isn’t always bad. It can reflect strong consumer demand or imports of capital goods that raise future productivity.',
    ],
    [
      ['Remittances', 'Money sent home by workers abroad; part of secondary income.'],
      ['Expenditure-switching policy', 'Makes domestic goods relatively cheaper, e.g. a depreciation.'],
      ['Expenditure-reducing policy', 'Lowers national income so imports fall, e.g. higher taxes.'],
      ['Capital account', 'Records capital transfers and non-produced assets, e.g. debt forgiveness.'],
    ],
    [
      ['Money sent home by migrant workers appears in…', 'The current account (secondary income)', ['The financial account', 'The capital account', 'Trade in goods'], 'Remittances are current transfers.'],
      ['Goods exports $30bn, goods imports $40bn, service surplus $6bn. The trade balance on goods and services is…', '−$4bn', ['−$10bn', '+$6bn', '−$16bn'], '30 − 40 + 6 = −4.'],
      ['Raising income taxes to cut a current account deficit is…', 'Expenditure-reducing', ['Expenditure-switching', 'A supply-side policy', 'A devaluation'], 'It lowers spending, including on imports.'],
      ['The Marshall-Lerner condition requires…', 'The sum of PED for exports and imports to be greater than 1', ['Exports to equal imports', 'Inelastic demand for exports', 'A fixed exchange rate'], 'Then a depreciation improves the current account.'],
    ],
  ),
  '4.7': M(
    [
      'Real-world case: Costa Rica gets almost all its electricity from renewable sources and has paid landowners to protect forests, showing growth and sustainability can go together.',
      'Environmental Kuznets curve: some argue pollution first rises then falls as countries get richer. Critics note that carbon emissions often keep rising and pollution can be “exported”.',
      'Sustainability requires working across the three pillars: economic, social and environmental. Policies include carbon pricing, green investment, education for girls and access to clean energy.',
      'Exam tip: link sustainable development to specific SDGs, such as SDG 7, affordable and clean energy, or SDG 13, climate action, and to a named country.',
    ],
    [
      ['Environmental Kuznets curve', 'Pollution may rise then fall as income per head rises.'],
      ['SDG 13', 'Climate action.'],
      ['SDG 4', 'Quality education.'],
      ['Natural capital', 'The stock of natural resources such as forests, fish and fresh water.'],
    ],
    [
      ['SDG 1 is…', 'No poverty', ['Zero hunger', 'Quality education', 'Climate action'], 'SDG 1 aims to end poverty in all its forms.'],
      ['The environmental Kuznets curve suggests pollution…', 'Rises then falls as incomes rise', ['Always rises with income', 'Always falls with income', 'Is unrelated to income'], 'It is an inverted U-shape.'],
      ['Which best promotes sustainable development?', 'Investing in renewable energy', ['Clearing rainforest for cattle', 'Subsidising coal', 'Overfishing to boost exports'], 'It meets present needs without harming future generations.'],
      ['Forests, fish stocks and fresh water are examples of…', 'Natural capital', ['Human capital', 'Physical capital', 'Financial capital'], 'They are natural resources that provide goods and services.'],
    ],
  ),
  '4.8': M(
    [
      'Worked example: the HDI combines life expectancy, expected and mean years of schooling, and GNI per capita at PPP. Norway and Switzerland score above 0.95; Niger and Chad score below 0.4.',
      'PPP adjusts for price differences. $1,000 buys much more in India than in Switzerland, so comparing incomes at market exchange rates understates living standards in poorer countries.',
      'Other indicators: the Gender Inequality Index, the Happy Planet Index, and single indicators like infant mortality, literacy rates and access to clean water.',
      'Evaluate: composite indicators capture more than GDP but use arbitrary weights and averages hide inequality within countries.',
    ],
    [
      ['Inequality-adjusted HDI', 'HDI reduced to account for inequality within a country.'],
      ['Gender Inequality Index', 'Measures gender gaps in health, empowerment and the labour market.'],
      ['Happy Planet Index', 'Combines well-being and life expectancy with ecological footprint.'],
      ['Infant mortality rate', 'Deaths of children under one year old per 1,000 live births.'],
    ],
    [
      ['Why use PPP when comparing incomes?', 'It adjusts for differences in the cost of living', ['It adjusts for inflation over time', 'It includes inequality', 'It counts unpaid work'], 'The same money buys different amounts in different countries.'],
      ['The HDI education component measures…', 'Mean and expected years of schooling', ['Literacy only', 'University spending', 'Test scores'], 'Both expected and actual years of schooling are used.'],
      ['A limitation of the HDI is that it…', 'Hides inequality within a country', ['Includes too many indicators', 'Ignores income completely', 'Uses only GDP'], 'National averages mask differences between groups.'],
      ['Which is a single indicator of development?', 'Infant mortality rate', ['HDI', 'Gender Inequality Index', 'Multidimensional Poverty Index'], 'Single indicators measure one aspect of well-being.'],
    ],
  ),
  '4.9': M(
    [
      'Barriers include lack of access to credit, poor infrastructure, low human capital, dependence on primary commodities, informal economies, corruption and unequal land ownership.',
      'Real-world case: Zambia depends heavily on copper exports, so falling copper prices sharply cut government revenue and the value of the kwacha.',
      'Gender barriers matter: when girls miss school, fertility rates stay high and productivity stays low. Educating girls is one of the most effective development strategies.',
      'Exam tip: explain one barrier with a chain of reasoning, for example weak property rights lead to less investment, less capital and lower productivity, then apply it to a country.',
    ],
    [
      ['Informal economy', 'Unregistered economic activity that is untaxed and unprotected.'],
      ['Property rights', 'Legal ownership of assets; weak rights discourage investment.'],
      ['Capital flight', 'Money leaving a country because of instability or low returns.'],
      ['Gender barrier to development', 'Unequal access to education and work for women and girls.'],
    ],
    [
      ['Weak property rights hold back development mainly because they…', 'Discourage investment', ['Raise exports', 'Increase tax revenue', 'Lower interest rates'], 'Owners won’t invest if assets could be taken.'],
      ['Wealthy citizens moving savings to foreign banks is…', 'Capital flight', ['Foreign direct investment', 'Remittance', 'Aid'], 'It reduces funds available for domestic investment.'],
      ['Zambia’s dependence on copper exports means…', 'Its revenue swings with copper prices', ['It is protected from shocks', 'It has high diversification', 'Its currency is fixed'], 'Commodity dependence creates volatility.'],
      ['Why does educating girls promote development?', 'It raises productivity and lowers fertility rates', ['It reduces the labour force', 'It increases inequality', 'It has no economic effect'], 'Educated women earn more and invest in their children.'],
    ],
  ),
  '4.10': M(
    [
      'Market-oriented strategies include trade liberalisation, privatisation and attracting FDI. Interventionist strategies include investment in health, education and infrastructure, and social safety nets.',
      'Real-world cases: South Korea used export promotion and heavy investment in education to grow rapidly after the 1960s. Bangladesh’s Grameen Bank made microfinance famous.',
      'Aid can be humanitarian, like disaster relief, or development aid, like funding for clinics. It can be bilateral or multilateral, through the World Bank. Critics worry about dependency and corruption.',
      'Exam tip: evaluate any strategy with “it depends”: on institutions, on how it is managed, and on who benefits. Use a named country and data to support your judgement.',
    ],
    [
      ['Humanitarian aid', 'Emergency help after disasters or conflict.'],
      ['Tied aid', 'Aid that must be spent on goods from the donor country.'],
      ['Fair trade', 'Guaranteed minimum prices for producers in developing countries.'],
      ['Conditional cash transfer', 'Cash paid to poor families if they meet conditions like school attendance.'],
    ],
    [
      ['Aid that must be spent on the donor country’s goods is…', 'Tied aid', ['Humanitarian aid', 'Multilateral aid', 'Microfinance'], 'Tied aid benefits donor firms and may be less effective.'],
      ['Mexico paying families if children attend school is…', 'A conditional cash transfer', ['Tied aid', 'Import substitution', 'Fair trade'], 'Payments depend on conditions like school attendance.'],
      ['South Korea’s rapid growth is often linked to…', 'Export promotion and investment in education', ['Import substitution only', 'Rejecting trade', 'Dependence on aid'], 'It became a major exporter of manufactured goods.'],
      ['A criticism of aid is that it can…', 'Create dependency and be misused through corruption', ['Always raise growth', 'Reduce imports', 'Replace all FDI'], 'Effectiveness depends on governance and design.'],
    ],
  ),
};

export default more;
