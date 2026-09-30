import type { MoreContent } from '../../types';
import { M } from '../helpers';

// Lesson 2 (case studies, fieldwork, common mistakes, exam technique) plus extra flashcards
// and questions for every ESS chapter.
const more: Record<string, MoreContent> = {
  '1.1': M(
    [
      'EVS spectrum: deep ecologists and self-reliance soft ecologists are ecocentric; environmental managers are anthropocentric; cornucopians are technocentric, trusting technology and markets.',
      'Historical influences on the environmental movement include Silent Spring in 1962, the Minamata mercury poisoning in Japan, the Chernobyl disaster in 1986, and the Rio Earth Summit in 1992.',
      'Indigenous perspectives often see humans as part of nature, with responsibilities to land and future generations. Many conservation successes involve indigenous land management.',
      'Exam tip: when asked to justify a response to an issue, show how different EVSs lead to different solutions, like a dam supported by a technocentrist but opposed by an ecocentrist.',
    ],
    [
      ['Cornucopian', 'Believes technology and markets can solve environmental problems; strongly technocentric.'],
      ['Deep ecologist', 'Believes nature has value equal to or above humans; strongly ecocentric.'],
      ['Anthropocentric', 'Human-centred; manages the environment for human benefit.'],
      ['Minamata disease', 'Mercury poisoning in Japan from industrial waste in the 1950s.'],
    ],
    [
      ['Someone who says “new technology will solve climate change” holds a…', 'Technocentric view', ['Ecocentric view', 'Deep ecologist view', 'Biocentric view'], 'They trust human innovation.'],
      ['The Rio Earth Summit took place in…', '1992', ['1962', '1986', '2015'], 'It produced Agenda 21 and biodiversity agreements.'],
      ['Which event raised awareness of industrial mercury pollution?', 'Minamata disease', ['Chernobyl', 'The Dust Bowl', 'Silent Spring'], 'Contaminated fish poisoned people in Japan.'],
      ['An environmental manager believes…', 'Humans should manage nature sustainably for human benefit', ['Nature must never be used', 'Technology solves all problems', 'Only markets matter'], 'It is an anthropocentric view.'],
    ],
  ),
  '1.2': M(
    [
      'Systems diagrams show storages as boxes and flows as arrows. Flows are transfers, a change in location, like water flowing downhill, or transformations, a change in state or chemical nature, like photosynthesis.',
      'Positive feedback amplifies change and pushes a system away from equilibrium, like melting Arctic ice reducing albedo and causing more warming.',
      'Resilience is a system’s ability to recover after disturbance. Diverse systems with large storages, like rainforests, resist small disturbances well, but once cleared a rainforest recovers slowly because its nutrients are stored in biomass.',
      'Models simplify reality to help predictions, but they depend on assumptions and may miss important factors.',
    ],
    [
      ['Transfer vs transformation', 'Transfer: change in location. Transformation: change in state or chemical form.'],
      ['Positive feedback', 'Amplifies change, moving a system away from equilibrium.'],
      ['Resilience', 'Ability of a system to return to its original state after disturbance.'],
      ['Isolated system', 'Exchanges neither matter nor energy — does not occur naturally on Earth.'],
    ],
    [
      ['Photosynthesis in a systems diagram is a…', 'Transformation', ['Transfer', 'Storage', 'Output only'], 'Energy and matter change form.'],
      ['Melting ice reducing albedo and causing more warming is…', 'Positive feedback', ['Negative feedback', 'Steady state', 'Resilience'], 'Change is amplified.'],
      ['Which usually resists small disturbances best?', 'A diverse tropical rainforest', ['A monoculture crop', 'A small pond', 'A desert oasis'], 'Diversity and large storages buffer change, though cleared rainforest recovers slowly.'],
      ['A limitation of models is that they…', 'Simplify reality and depend on assumptions', ['Are always accurate', 'Cannot be used for prediction', 'Include every variable'], 'Simplification can miss key factors.'],
    ],
  ),
  '1.3': M(
    [
      'Doughnut economics sets a social foundation, like food, water and education, and an ecological ceiling, the planetary boundaries. A safe and just space lies between them.',
      'Environmental impact assessments, EIAs, predict the effects of projects like dams or mines before approval, and suggest ways to reduce harm.',
      'Worked example: if a country’s ecological footprint is 5 global hectares per person but its biocapacity is 2, it uses resources unsustainably and relies on imports or depletes stocks.',
      'By 2025, seven of the nine planetary boundaries had been crossed, including climate change, biosphere integrity, biogeochemical flows of nitrogen and phosphorus, and ocean acidification.',
    ],
    [
      ['Environmental impact assessment', 'Report predicting a project’s environmental effects before approval.'],
      ['Biocapacity', 'Area’s capacity to produce resources and absorb waste.'],
      ['Doughnut economics', 'Meeting social needs within the ecological ceiling.'],
      ['Global hectare', 'Unit of ecological footprint based on average productivity.'],
    ],
    [
      ['A footprint larger than biocapacity means a population…', 'Is living unsustainably', ['Is sustainable', 'Has no impact', 'Has spare resources'], 'Demand exceeds what the land can supply.'],
      ['An EIA is carried out…', 'Before a project is approved', ['Only after damage occurs', 'Instead of laws', 'Only for small projects'], 'It predicts impacts and mitigation.'],
      ['Which planetary boundary has been crossed?', 'Biogeochemical flows (nitrogen)', ['Stratospheric ozone (fully recovered)', 'None have', 'Ocean salinity'], 'Fertiliser use has overloaded the nitrogen cycle.'],
      ['The inner ring of the doughnut represents…', 'The social foundation', ['The ecological ceiling', 'GDP', 'Carrying capacity'], 'Everyone’s basic needs.'],
    ],
  ),
  '2.1': M(
    [
      'Fieldwork: estimate plant abundance with quadrats, measuring percentage cover or density. Estimate animal populations with capture–mark–release–recapture using the Lincoln index.',
      'Worked example: 50 beetles are marked; later 40 are caught, 10 marked. Population equals 50 times 40 divided by 10, which is 200.',
      'J-curves show exponential growth followed by a crash; S-curves level off at carrying capacity. Limiting factors include food, space and disease.',
      'Species interactions: competition, predation, herbivory, parasitism and mutualism. Keystone species have a disproportionate effect on their ecosystem.',
    ],
    [
      ['Lincoln index', 'N = (n₁ × n₂) ÷ m₂.'],
      ['J-curve', 'Exponential growth followed by a population crash.'],
      ['Percentage cover', 'Proportion of a quadrat covered by a species.'],
      ['Keystone species', 'Has a large effect on the ecosystem relative to its abundance.'],
    ],
    [
      ['50 marked; 40 recaptured, 10 marked. Population estimate?', '200', ['90', '2000', '80'], '50 × 40 ÷ 10.'],
      ['Which method estimates plant abundance?', 'Quadrat sampling', ['Lincoln index', 'Kick sampling', 'Pitfall traps'], 'Quadrats sample fixed areas.'],
      ['A population that grows exponentially then crashes shows a…', 'J-curve', ['S-curve', 'Straight line', 'Plateau'], 'It overshoots its resources.'],
      ['A tapeworm in a human is an example of…', 'Parasitism', ['Mutualism', 'Competition', 'Predation'], 'One benefits, the host is harmed.'],
    ],
  ),
  '2.2': M(
    [
      'Pyramids of numbers, biomass and energy show trophic levels. Pyramids of energy are always pyramid-shaped; numbers can be inverted, like many insects on one tree.',
      'Worked example: if producers fix 30,000 kJ/m²/yr, primary consumers get about 3,000 and secondary consumers about 300, with most energy lost as heat.',
      'Bioaccumulation is the build-up of a persistent pollutant in an organism over time; biomagnification is the increase in concentration up a food chain, like DDT and mercury.',
      'Productivity is highest in tropical rainforests and coral reefs, and lowest in deserts and the open ocean.',
    ],
    [
      ['Pyramid of energy', 'Always pyramid-shaped; shows energy flow per year.'],
      ['Bioaccumulation', 'Build-up of a pollutant in one organism over time.'],
      ['Biomagnification', 'Increasing pollutant concentration at higher trophic levels.'],
      ['Most productive biome', 'Tropical rainforest (on land).'],
    ],
    [
      ['Which ecological pyramid is always pyramid-shaped?', 'Pyramid of energy', ['Pyramid of numbers', 'Pyramid of biomass in oceans', 'All can be inverted'], 'Energy is always lost between levels.'],
      ['Producers fix 20,000 kJ. Secondary consumers receive about…', '200 kJ', ['2,000 kJ', '20 kJ', '10,000 kJ'], '10% of 10%.'],
      ['DDT concentration being highest in eagles shows…', 'Biomagnification', ['Bioaccumulation only', 'Eutrophication', 'Succession'], 'Concentrations increase up the chain.'],
      ['Which has the lowest net primary productivity?', 'Desert', ['Tropical rainforest', 'Coral reef', 'Temperate forest'], 'Water limits growth.'],
    ],
  ),
  '2.3': M(
    [
      'Carbon stores include the atmosphere, oceans, fossil fuels, soils and biomass. Flows include photosynthesis, respiration, combustion, decomposition and ocean absorption.',
      'Human impacts: burning fossil fuels, deforestation and cement production add carbon dioxide; agriculture and landfills add methane.',
      'The nitrogen cycle: fixation by bacteria and lightning, nitrification to nitrates, uptake by plants, ammonification in decomposition, and denitrification back to nitrogen gas.',
      'The Haber process makes nitrogen fertilisers, doubling food production but causing runoff and eutrophication, and producing nitrous oxide, a greenhouse gas.',
    ],
    [
      ['Nitrification', 'Bacteria convert ammonium into nitrites and nitrates.'],
      ['Ammonification', 'Decomposers release ammonium from dead matter.'],
      ['Largest active carbon store', 'The oceans.'],
      ['Nitrous oxide', 'A greenhouse gas released from fertilised soils.'],
    ],
    [
      ['Converting ammonium to nitrates is…', 'Nitrification', ['Denitrification', 'Nitrogen fixation', 'Ammonification'], 'Nitrifying bacteria carry it out.'],
      ['Which human activity adds most CO₂ to the atmosphere?', 'Burning fossil fuels', ['Photosynthesis', 'Composting', 'Reforestation'], 'It releases long-stored carbon.'],
      ['Waterlogged soils lose nitrogen through…', 'Denitrification', ['Nitrogen fixation', 'Nitrification', 'Photosynthesis'], 'Anaerobic bacteria release N₂.'],
      ['Cement production contributes to climate change by releasing…', 'Carbon dioxide', ['Ozone', 'Nitrogen', 'Water vapour only'], 'Heating limestone releases CO₂.'],
    ],
  ),
  '2.4': M(
    [
      'The tricellular model: Hadley, Ferrel and polar cells explain global wind patterns and rainfall. Rising air near the equator brings heavy rain; sinking air near 30° creates deserts.',
      'Worked example: tropical rainforests have high temperature and rainfall all year, high NPP and biodiversity, but nutrient-poor soils because nutrients are stored in plants.',
      'Climate change shifts biomes towards the poles and uphill. Arctic tundra is shrinking as shrubs spread north.',
      'Ocean currents redistribute heat: the Gulf Stream keeps north-west Europe warmer than other places at the same latitude.',
    ],
    [
      ['Why deserts form near 30° latitude', 'Sinking dry air from Hadley cells.'],
      ['Gulf Stream', 'Warm ocean current keeping north-west Europe mild.'],
      ['Rainforest soils', 'Nutrient-poor; nutrients are stored in biomass.'],
      ['Biome shift', 'Movement of biomes towards poles or uphill as climate warms.'],
    ],
    [
      ['The Sahara lies near 30° N because of…', 'Sinking dry air in the Hadley cell', ['Ocean currents', 'High mountains', 'Low temperatures'], 'Descending air suppresses rain.'],
      ['Why are rainforest soils often poor?', 'Nutrients are held in biomass and leached by rain', ['There is no rain', 'It is too cold', 'There are no decomposers'], 'Heavy rain leaches soil nutrients.'],
      ['The Gulf Stream makes the UK…', 'Warmer than expected for its latitude', ['Colder than Canada', 'A desert', 'Tropical'], 'It carries warm water from the Caribbean.'],
      ['As the climate warms, biomes tend to move…', 'Towards the poles', ['Towards the equator', 'Underground', 'Nowhere'], 'Species track suitable temperatures.'],
    ],
  ),
  '2.5': M(
    [
      'Primary succession begins on bare ground with no soil, like after a volcanic eruption; secondary succession starts where soil remains, like after a forest fire.',
      'Seres change over time: pioneer species build soil, increasing moisture and nutrients, so larger plants replace them. Biodiversity, biomass and complexity usually increase.',
      'Early stages have high productivity relative to biomass; the climax community has high biomass and gross productivity but net productivity close to zero.',
      'Fieldwork: measure zonation along a transect, such as a sand dune or rocky shore, recording abiotic factors like soil moisture or exposure alongside species.',
    ],
    [
      ['Primary succession', 'Starts on bare ground with no soil.'],
      ['Secondary succession', 'Starts where soil remains after disturbance.'],
      ['Sere', 'A stage in succession.'],
      ['Climax community', 'Stable final stage of succession in equilibrium with the climate.'],
    ],
    [
      ['Succession after a forest fire is…', 'Secondary succession', ['Primary succession', 'Zonation', 'Speciation'], 'Soil remains.'],
      ['Lichens colonising bare rock are…', 'Pioneer species', ['Climax species', 'Invasive species', 'Keystone species'], 'They start soil formation.'],
      ['During succession, biodiversity usually…', 'Increases', ['Decreases', 'Stays the same', 'Becomes zero'], 'More niches develop.'],
      ['Grazing that keeps land as grassland creates a…', 'Plagioclimax', ['Climax community', 'Pioneer stage', 'Biome'], 'Human activity stops succession.'],
    ],
  ),
  '3.1': M(
    [
      'Natural selection drives evolution: variation, overproduction, competition and survival of the best adapted. Plate tectonics isolated populations, leading to speciation.',
      'Mass extinctions: there have been five major ones, like the end-Cretaceous 66 million years ago. Many scientists say a sixth is underway due to human activity.',
      'Simpson’s diversity index measures diversity using richness and evenness. Higher values mean more diverse, often healthier ecosystems.',
      'Worked example: two woodlands each have 5 species. Woodland A has equal numbers of each; B is dominated by one. A has greater evenness and higher diversity.',
    ],
    [
      ['Species richness', 'Number of different species.'],
      ['Evenness', 'How similar the population sizes of species are.'],
      ['Plate tectonics and speciation', 'Moving continents isolate populations.'],
      ['Sixth mass extinction', 'The current wave of extinctions caused by humans.'],
    ],
    [
      ['Two sites have the same richness, but one has more even populations. It has…', 'Higher diversity', ['Lower diversity', 'The same diversity', 'No diversity'], 'Evenness increases diversity indices.'],
      ['The dinosaurs went extinct about…', '66 million years ago', ['6,600 years ago', '660 million years ago', '6 million years ago'], 'An asteroid impact was a major cause.'],
      ['Continents drifting apart can lead to speciation through…', 'Geographical isolation', ['Hybridisation', 'Pollution', 'Photosynthesis'], 'Populations evolve separately.'],
      ['Simpson’s index combines…', 'Richness and evenness', ['Temperature and rainfall', 'Biomass and energy', 'Birth and death rates'], 'It measures overall diversity.'],
    ],
  ),
  '3.2': M(
    [
      'HIPPO summarises threats: habitat loss, invasive species, pollution, human population growth and overexploitation. Climate change is now a major added threat.',
      'Case study: the Amazon rainforest loses forest to cattle ranching, soy farming, logging and mining. Deforestation reduces rainfall and threatens many endemic species.',
      'Case study: Lake Victoria’s introduced Nile perch drove many native cichlid fish species to extinction.',
      'Tropical rainforests and coral reefs are especially vulnerable because they contain many specialised, endemic species with narrow niches.',
    ],
    [
      ['HIPPO', 'Habitat loss, invasive species, pollution, population, overexploitation.'],
      ['Nile perch in Lake Victoria', 'Introduced predator causing extinction of many cichlids.'],
      ['Main driver of Amazon deforestation', 'Cattle ranching.'],
      ['Habitat fragmentation', 'Breaking habitats into small isolated patches.'],
    ],
    [
      ['The main driver of Amazon deforestation is…', 'Cattle ranching', ['Tourism', 'Urban growth only', 'Fishing'], 'Forest is cleared for pasture.'],
      ['Nile perch in Lake Victoria is an example of…', 'An invasive species', ['A keystone species', 'A pioneer species', 'In situ conservation'], 'It was introduced and devastated native fish.'],
      ['Habitat fragmentation harms species because…', 'Populations become small and isolated', ['Habitats become larger', 'Food increases', 'Predators disappear'], 'Small populations lose genetic diversity.'],
      ['Which trait makes a species vulnerable to extinction?', 'A narrow niche', ['Fast reproduction', 'Large range', 'Generalist diet'], 'Specialists can’t adapt easily.'],
    ],
  ),
  '3.3': M(
    [
      'Protected area design: large reserves are better than small ones, connected ones better than isolated ones, and a buffer zone reduces edge effects.',
      'International agreements include CITES, which regulates trade in endangered species, and the Convention on Biological Diversity, including the target to protect 30% of land and sea by 2030.',
      'Species-based conservation uses captive breeding, reintroduction and flagship species like pandas; habitat-based conservation protects whole ecosystems.',
      'Case study: reintroducing wolves to Yellowstone in 1995 changed elk behaviour, allowing trees to regrow and benefiting other species.',
    ],
    [
      ['CITES', 'Treaty regulating international trade in endangered species.'],
      ['30 by 30', 'Target to protect 30% of land and sea by 2030.'],
      ['Buffer zone', 'Area around a reserve reducing human impact at its edge.'],
      ['Flagship species', 'Charismatic species used to raise support, e.g. pandas.'],
    ],
    [
      ['CITES regulates…', 'International trade in endangered species', ['Carbon emissions', 'Ozone depletion', 'Fishing quotas only'], 'It bans or limits trade in threatened species.'],
      ['Which reserve design is best?', 'One large reserve connected by corridors', ['Many small isolated reserves', 'A long thin strip', 'A reserve with no buffer'], 'It supports larger populations.'],
      ['Wolves reintroduced to Yellowstone led to…', 'Regrowth of trees along rivers', ['More elk overgrazing', 'Loss of all beavers', 'Desertification'], 'This is a trophic cascade.'],
      ['Pandas are used in campaigns as…', 'Flagship species', ['Pioneer species', 'Keystone species', 'Invasive species'], 'They attract public support.'],
    ],
  ),
  '4.1': M(
    [
      'Only about 2.5% of Earth’s water is fresh, and most of that is locked in ice caps and groundwater. Lakes and rivers hold a tiny fraction.',
      'Human impacts on the water cycle: withdrawals for irrigation, dams, deforestation reducing transpiration, and urbanisation increasing runoff and flooding.',
      'Ocean circulation: surface currents are driven by wind; deep currents by temperature and salinity. The global conveyor belt redistributes heat.',
      'El Niño events warm the eastern Pacific, altering rainfall patterns, causing droughts in Australia and floods in South America.',
    ],
    [
      ['Share of Earth’s water that is fresh', 'About 2.5%.'],
      ['El Niño', 'Periodic warming of the eastern Pacific altering global weather.'],
      ['Global conveyor belt', 'Deep ocean circulation redistributing heat.'],
      ['Infiltration', 'Water soaking into the soil.'],
    ],
    [
      ['Most of Earth’s fresh water is found in…', 'Ice caps and glaciers', ['Rivers', 'Lakes', 'The atmosphere'], 'Around two thirds of fresh water is ice.'],
      ['Deforestation affects the water cycle by…', 'Reducing transpiration and increasing runoff', ['Increasing rainfall', 'Stopping evaporation', 'Adding groundwater'], 'Fewer trees return less water to the air.'],
      ['El Niño often brings drought to…', 'Australia', ['Peru', 'Ecuador', 'California only'], 'Rainfall patterns shift across the Pacific.'],
      ['Water soaking into the ground is…', 'Infiltration', ['Runoff', 'Evaporation', 'Condensation'], 'It depends on soil type and cover.'],
    ],
  ),
  '4.2': M(
    [
      'Agriculture uses about 70% of global fresh water withdrawals. Industry and domestic use share the rest.',
      'Case study: the Aral Sea shrank dramatically after rivers were diverted for cotton irrigation in the Soviet era, collapsing fisheries and causing dust storms.',
      'Solutions: drip irrigation, rainwater harvesting, reducing leaks, greywater recycling, desalination and water pricing.',
      'Water conflicts can occur where rivers cross borders, like the Nile, shared by Ethiopia, Sudan and Egypt, disputing the Grand Ethiopian Renaissance Dam.',
    ],
    [
      ['Share of fresh water used by agriculture', 'About 70%.'],
      ['Aral Sea disaster', 'Shrinking caused by river diversion for cotton irrigation.'],
      ['Drip irrigation', 'Delivers water directly to plant roots, reducing waste.'],
      ['Greywater', 'Used water from sinks and showers that can be reused.'],
    ],
    [
      ['Which sector uses the most fresh water globally?', 'Agriculture', ['Industry', 'Households', 'Energy'], 'Irrigation dominates.'],
      ['The Aral Sea shrank because…', 'Rivers were diverted for irrigation', ['Of rising sea levels', 'It was drained for housing', 'Of an earthquake'], 'Cotton farming took its inflows.'],
      ['Which method saves most irrigation water?', 'Drip irrigation', ['Flood irrigation', 'Sprinklers at midday', 'Open channels'], 'Water goes straight to roots.'],
      ['The Grand Ethiopian Renaissance Dam is disputed by…', 'Ethiopia, Sudan and Egypt', ['India and Pakistan', 'Turkey and Iraq only', 'The US and Mexico'], 'They share the Nile.'],
    ],
  ),
  '4.3': M(
    [
      'Global fish catches rose rapidly until the 1990s and then levelled off, even as fishing effort increased, showing many stocks are fully exploited or overfished.',
      'Case study: the Grand Banks cod fishery off Canada collapsed in 1992 after overfishing, and a moratorium put about 30,000 people out of work.',
      'Sustainable approaches: catch quotas, minimum net mesh sizes, no-take zones, and certification like the Marine Stewardship Council label.',
      'Aquaculture now supplies about half of fish eaten, but can cause pollution, disease, and loss of mangroves, especially shrimp farming.',
    ],
    [
      ['Grand Banks cod collapse', '1992 collapse from overfishing off Canada.'],
      ['Marine Stewardship Council', 'Certification for sustainable wild-caught seafood.'],
      ['No-take zone', 'Area where all fishing is banned.'],
      ['Mesh size regulation', 'Larger holes let young fish escape.'],
    ],
    [
      ['The Grand Banks cod fishery collapsed in…', '1992', ['1962', '2008', '1945'], 'A moratorium followed.'],
      ['Increasing net mesh size helps because…', 'Young fish can escape and reproduce', ['More fish are caught', 'Nets last longer', 'Bycatch increases'], 'Stocks can recover.'],
      ['A drawback of shrimp aquaculture is…', 'Destruction of mangroves', ['Increasing wild fish stocks', 'No pollution', 'Lower food supply'], 'Mangroves are cleared for ponds.'],
      ['The MSC label shows seafood is…', 'From a sustainable fishery', ['Farmed', 'Organic', 'Local only'], 'Fisheries are independently certified.'],
    ],
  ),
  '4.4': M(
    [
      'Pollution sources: sewage, agricultural fertilisers and pesticides, industrial waste, oil spills and plastics. Non-point source pollution, like farm runoff, is harder to control.',
      'Measuring water quality: dissolved oxygen, BOD, nitrates, phosphates, pH, turbidity and temperature. Biotic indices use indicator species like mayfly larvae for clean water.',
      'Management strategies follow three levels: change the human activity, regulate release of pollutants, or clean up and restore damaged ecosystems.',
      'Case study: the Gulf of Mexico has a “dead zone” each summer caused by fertiliser runoff from the Mississippi River basin.',
    ],
    [
      ['Non-point source pollution', 'Comes from many diffuse sources, e.g. farm runoff.'],
      ['Mayfly larvae', 'Indicator species of clean, well-oxygenated water.'],
      ['Dead zone', 'Area of water with too little oxygen to support most life.'],
      ['Biotic index', 'Rating of water quality based on indicator species present.'],
    ],
    [
      ['Farm fertiliser washing into rivers is…', 'Non-point source pollution', ['Point source pollution', 'Thermal pollution', 'Noise pollution'], 'It comes from a wide area.'],
      ['Many mayfly larvae in a stream suggest…', 'Clean water with high oxygen', ['Heavy pollution', 'Low oxygen', 'High BOD'], 'They are pollution-sensitive.'],
      ['A high BOD indicates…', 'Much organic pollution', ['Clean water', 'High oxygen', 'Low nutrients'], 'Microorganisms use lots of oxygen.'],
      ['The Gulf of Mexico dead zone is caused mainly by…', 'Fertiliser runoff', ['Oil spills only', 'Overfishing', 'Plastic waste'], 'Nutrients cause algal blooms and low oxygen.'],
    ],
  ),
  '5.1': M(
    [
      'Soil profiles have horizons: O, organic litter; A, topsoil rich in humus; B, subsoil; and C, weathered parent rock.',
      'Soil texture affects properties: sandy soils drain quickly but hold few nutrients; clay soils hold water and nutrients but drain poorly; loam balances both.',
      'Soil degradation includes erosion, nutrient loss, salinisation, compaction and desertification. Soil forms extremely slowly, about 1 cm in hundreds of years.',
      'Conservation methods: contour ploughing, terracing, windbreaks, cover crops, crop rotation and adding organic matter.',
    ],
    [
      ['O horizon', 'Top layer of organic litter.'],
      ['Sandy soil', 'Drains fast; low nutrient retention.'],
      ['Contour ploughing', 'Ploughing across slopes to reduce erosion.'],
      ['Desertification', 'Productive land turning into desert.'],
    ],
    [
      ['Which soil holds the most water?', 'Clay', ['Sand', 'Gravel', 'Loam'], 'Tiny particles hold water tightly.'],
      ['The humus-rich topsoil is the…', 'A horizon', ['C horizon', 'B horizon', 'Bedrock'], 'It supports most plant roots.'],
      ['Planting rows of trees to reduce wind erosion creates…', 'Windbreaks', ['Terraces', 'Irrigation', 'Salinisation'], 'They slow wind speed.'],
      ['Soil is considered non-renewable on human timescales because…', 'It forms extremely slowly', ['It never erodes', 'It is made in factories', 'It contains no life'], 'Centimetres take centuries.'],
    ],
  ),
  '5.2': M(
    [
      'Food systems vary: commercial versus subsistence, intensive versus extensive, and arable versus pastoral. Each has different inputs, outputs and impacts.',
      'The Green Revolution from the 1960s boosted yields with high-yield varieties, fertilisers, pesticides and irrigation, but increased water use and pollution.',
      'Food waste: about a third of all food produced is lost or wasted. In richer countries most waste happens with consumers; in poorer countries, in storage and transport.',
      'Sustainable options: reducing meat consumption, integrated pest management, organic farming, agroforestry, and reducing food waste.',
    ],
    [
      ['Green Revolution', '1960s boost in yields using new seeds, fertilisers and irrigation.'],
      ['Share of food wasted globally', 'About one third.'],
      ['Integrated pest management', 'Combining biological, cultural and limited chemical pest control.'],
      ['Extensive farming', 'Low inputs over large areas, e.g. ranching.'],
    ],
    [
      ['About how much of all food produced is lost or wasted?', 'One third', ['One tenth', 'Half', 'Almost none'], 'Waste happens at all stages.'],
      ['A drawback of the Green Revolution was…', 'Increased water use and pollution', ['Lower yields', 'Less fertiliser use', 'More forests'], 'Intensive inputs had environmental costs.'],
      ['Using ladybirds to control aphids is part of…', 'Integrated pest management', ['Monoculture', 'Salinisation', 'Slash and burn'], 'Biological control reduces pesticide use.'],
      ['Eating less meat reduces environmental impact because…', 'Less energy is lost through trophic levels', ['Meat is fattening', 'Crops need no land', 'Animals produce oxygen'], 'Feeding crops to animals is inefficient.'],
    ],
  ),
  '6.1': M(
    [
      'The atmosphere is a dynamic system. Its layers are the troposphere, stratosphere, mesosphere and thermosphere. Most air mass and all weather is in the troposphere.',
      'Albedo varies: fresh snow reflects about 80 to 90% of sunlight, forests about 10 to 20%, and oceans less than 10%.',
      'The atmosphere has changed over Earth’s history: early photosynthesising organisms added oxygen, allowing the ozone layer to form.',
      'Human activity has increased carbon dioxide from about 280 ppm before the Industrial Revolution to over 420 ppm today.',
    ],
    [
      ['Albedo of fresh snow', 'About 80–90%.'],
      ['Pre-industrial CO₂', 'About 280 ppm.'],
      ['Mesosphere', 'Layer above the stratosphere where meteors burn up.'],
      ['Origin of atmospheric oxygen', 'Photosynthesis by early organisms.'],
    ],
    [
      ['Pre-industrial CO₂ was about…', '280 ppm', ['420 ppm', '100 ppm', '1,000 ppm'], 'It is now above 420 ppm.'],
      ['Which surface has the highest albedo?', 'Fresh snow', ['Ocean', 'Forest', 'Asphalt'], 'It reflects most sunlight.'],
      ['Clouds and rain form in which layer?', 'Troposphere', ['Stratosphere', 'Mesosphere', 'Thermosphere'], 'It holds most water vapour.'],
      ['Oxygen in the atmosphere originally came from…', 'Photosynthesis', ['Volcanoes', 'Comets', 'Respiration'], 'Cyanobacteria released oxygen.'],
    ],
  ),
  '6.2': M(
    [
      'Evidence of climate change: rising average temperatures of about 1.3 °C since pre-industrial times, with 2024 alone about 1.55 °C above, shrinking glaciers and sea ice, rising sea levels and more extreme weather.',
      'Global warming potential compares gases with carbon dioxide: methane traps about 28 times more heat over 100 years, or 27 to 30 in the latest IPCC report; nitrous oxide about 273 times.',
      'Impacts vary: low-lying countries like Bangladesh and small island states face flooding; Africa’s Sahel faces drought and food insecurity.',
      'Climate models project future warming under different emissions scenarios, but uncertainty remains over feedbacks, tipping points and human choices.',
    ],
    [
      ['Global warming potential', 'How much heat a gas traps compared with CO₂.'],
      ['GWP of methane', 'About 28 times CO₂ over 100 years.'],
      ['Warming since pre-industrial times', 'About 1.3 °C.'],
      ['Sea-level rise causes', 'Thermal expansion of water and melting land ice.'],
    ],
    [
      ['Methane’s 100-year GWP is about…', '28', ['1', '273', '1,000'], 'It traps much more heat per molecule than CO₂.'],
      ['Sea levels rise mainly due to…', 'Thermal expansion and melting land ice', ['Melting sea ice only', 'More rain', 'Earthquakes'], 'Warm water expands.'],
      ['Which country is highly vulnerable to sea-level rise?', 'Bangladesh', ['Switzerland', 'Mongolia', 'Nepal'], 'Much of it is low-lying delta.'],
      ['Warming since pre-industrial times is about…', '1.3 °C', ['5 °C', '0.1 °C', '10 °C'], 'Most has occurred since 1950; 2024 alone was about 1.55 °C.'],
    ],
  ),
  '6.3': M(
    [
      'Mitigation examples: renewable energy, energy efficiency, electric transport, reforestation, carbon pricing and carbon capture. Adaptation examples: flood defences, drought-resistant crops and early warning systems.',
      'The Kyoto Protocol of 1997 set binding targets for developed countries; the Paris Agreement of 2015 asks all countries to set nationally determined contributions.',
      'Geoengineering ideas include solar radiation management and direct air capture, but they carry risks and uncertainties.',
      'Evaluate strategies using effectiveness, cost, fairness, and whether they address causes or just symptoms.',
    ],
    [
      ['Kyoto Protocol (1997)', 'Binding emission targets for developed countries.'],
      ['Nationally determined contributions', 'Each country’s own emissions targets under the Paris Agreement.'],
      ['Geoengineering', 'Large-scale deliberate intervention in the climate system.'],
      ['Direct air capture', 'Removing CO₂ directly from the air.'],
    ],
    [
      ['Building sea walls is an example of…', 'Adaptation', ['Mitigation', 'Geoengineering', 'Carbon pricing'], 'It reduces harm without cutting emissions.'],
      ['Under the Paris Agreement, countries set…', 'Nationally determined contributions', ['Identical targets', 'No targets', 'Only adaptation plans'], 'Each country chooses its own targets.'],
      ['Replacing coal plants with wind farms is…', 'Mitigation', ['Adaptation', 'Geoengineering', 'Carbon capture'], 'It reduces emissions.'],
      ['Reflecting sunlight with particles in the stratosphere is…', 'Solar radiation management', ['Reforestation', 'Carbon tax', 'Adaptation'], 'It is a proposed geoengineering method.'],
    ],
  ),
  '6.4': M(
    [
      'Ozone forms and breaks down naturally in the stratosphere, absorbing UV-B and UV-C. Chlorine and bromine radicals from CFCs and halons speed up its destruction.',
      'The ozone hole over Antarctica forms each spring because very cold polar stratospheric clouds help release chlorine, which destroys ozone when sunlight returns.',
      'The Montreal Protocol is considered the most successful environmental treaty. The ozone layer is expected to recover to 1980 levels by around 2066 over Antarctica.',
      'Replacements for CFCs, like HFCs, don’t harm ozone but are powerful greenhouse gases, so the Kigali Amendment of 2016 phases them down.',
    ],
    [
      ['Antarctic ozone hole', 'Seasonal thinning each spring over Antarctica.'],
      ['Kigali Amendment (2016)', 'Phases down HFCs, powerful greenhouse gases.'],
      ['HFCs', 'CFC replacements that don’t harm ozone but warm the climate.'],
      ['Expected Antarctic ozone recovery', 'Around 2066.'],
    ],
    [
      ['The ozone hole forms over Antarctica in…', 'Spring', ['Summer', 'Autumn', 'Winter only'], 'Returning sunlight activates chlorine.'],
      ['The Kigali Amendment targets…', 'HFCs', ['CFCs', 'CO₂', 'Methane'], 'HFCs are strong greenhouse gases.'],
      ['Stratospheric ozone mainly absorbs…', 'Ultraviolet radiation', ['Infrared radiation', 'Radio waves', 'Visible light'], 'It protects life from UV damage.'],
      ['The Antarctic ozone layer is expected to recover around…', '2066', ['2025', '2200', 'Never'], 'Thanks to the Montreal Protocol.'],
    ],
  ),
  '7.1': M(
    [
      'Natural resources can be valued for their use, like timber, for ecological functions, like flood control, or for intrinsic and cultural value.',
      'Sustainable yield is the rate of harvest that can continue indefinitely: the natural increase in the resource.',
      'Case study: Easter Island is often cited as a society that overused its forests, though historians debate the role of rats and European contact.',
      'Management tools include quotas, protected areas, certification schemes like the Forest Stewardship Council, and community management.',
    ],
    [
      ['Sustainable yield', 'Harvest rate equal to the natural increase of a resource.'],
      ['Forest Stewardship Council', 'Certifies sustainably managed forest products.'],
      ['Intrinsic value', 'Value of nature for its own sake.'],
      ['Provisioning service', 'Ecosystem service providing goods like food and timber.'],
    ],
    [
      ['The FSC label shows timber is…', 'From sustainably managed forests', ['Imported', 'Recycled only', 'Cheap'], 'Forests are independently certified.'],
      ['Harvesting a resource at its sustainable yield means…', 'The stock stays the same over time', ['The stock falls', 'The resource is wasted', 'No harvest occurs'], 'Harvest equals natural increase.'],
      ['Wetlands reducing floods is an example of a…', 'Regulating service', ['Provisioning service', 'Cultural service', 'Non-renewable resource'], 'It regulates water flow.'],
      ['Valuing a forest simply because it exists is…', 'Intrinsic value', ['Use value', 'Market value', 'Economic value'], 'It is not based on usefulness to humans.'],
    ],
  ),
  '7.2': M(
    [
      'Global energy is still dominated by fossil fuels, about 80% of primary energy, though solar and wind are growing fastest.',
      'Factors affecting a country’s energy choices: resources available, cost, technology, politics, energy security and environmental commitments.',
      'Case study: Iceland produces nearly all its electricity from geothermal and hydropower; Germany’s Energiewende expanded renewables but kept coal longer after closing nuclear plants.',
      'Evaluate sources: fossil fuels are reliable but polluting; renewables are low-carbon but intermittent and need storage; nuclear is low-carbon but produces radioactive waste.',
    ],
    [
      ['Share of global primary energy from fossil fuels', 'About 80%.'],
      ['Energiewende', 'Germany’s energy transition to renewables.'],
      ['Energy storage', 'Batteries or pumped hydro to balance intermittent renewables.'],
      ['Iceland’s electricity', 'Nearly all from geothermal and hydropower.'],
    ],
    [
      ['Iceland’s electricity comes mainly from…', 'Geothermal and hydropower', ['Coal', 'Nuclear', 'Oil'], 'Its volcanic geology provides heat.'],
      ['A key challenge for solar and wind power is…', 'Intermittency', ['High emissions', 'Radioactive waste', 'Limited fuel supply'], 'Supply varies with weather.'],
      ['Pumped hydro storage helps by…', 'Storing energy for when demand is high', ['Burning fuel', 'Making nuclear waste', 'Cooling reactors'], 'Water is pumped uphill and released later.'],
      ['Globally, the fastest-growing electricity sources are…', 'Solar and wind', ['Coal and oil', 'Nuclear only', 'Peat'], 'Costs have fallen sharply.'],
    ],
  ),
  '7.3': M(
    [
      'Solid domestic waste includes food, paper, plastics, glass, metals and e-waste. Richer countries produce more waste per person.',
      'Disposal options: landfill, incineration, which can generate energy but emits pollutants, composting and recycling. Each has costs and benefits.',
      'E-waste contains valuable metals and toxic substances. Much is exported to countries like Ghana, where informal recycling harms health.',
      'Plastic pollution: only about 9% of plastic ever made has been recycled. Solutions include bans on single-use plastics, deposit schemes and better product design.',
    ],
    [
      ['Incineration', 'Burning waste, sometimes to generate energy.'],
      ['E-waste', 'Discarded electronic devices containing valuable and toxic materials.'],
      ['Share of plastic recycled', 'Only about 9%.'],
      ['Deposit return scheme', 'Refundable charge on containers to encourage return.'],
    ],
    [
      ['Roughly what share of plastic ever made has been recycled?', 'About 9%', ['About 50%', 'About 90%', 'About 1%'], 'Most is landfilled, burned or lost.'],
      ['A benefit of incineration is…', 'Generating energy from waste', ['No air pollution', 'No ash', 'It creates compost'], 'Heat can generate electricity.'],
      ['Refunds for returning bottles are a…', 'Deposit return scheme', ['Landfill tax', 'Carbon tax', 'Quota'], 'It encourages recycling.'],
      ['E-waste is hazardous because it contains…', 'Toxic metals like lead and mercury', ['Only paper', 'Food waste', 'Pure water'], 'Informal recycling releases toxins.'],
    ],
  ),
  '8.1': M(
    [
      'Worked example: a population with birth rate 30 and death rate 10 per 1,000 has a natural increase of 20 per 1,000, 2%. Doubling time is about 70 divided by 2, 35 years.',
      'Population pyramids show age and sex structure: wide bases mean high birth rates; narrow bases and wide tops show ageing populations, like Japan.',
      'The demographic transition model has five stages, from high birth and death rates to low ones. Some countries now have natural decrease.',
      'Policies: China’s one-child policy from 1980 to 2015 was anti-natalist; countries like France offer child benefits as pro-natalist policies.',
    ],
    [
      ['Natural increase rate', '(Birth rate − death rate) ÷ 10, as a percentage.'],
      ['Ageing population', 'Rising proportion of elderly people.'],
      ['Anti-natalist policy', 'Aims to reduce birth rates, e.g. China’s one-child policy.'],
      ['Total fertility rate', 'Average number of children born per woman.'],
    ],
    [
      ['Birth rate 30, death rate 10 per 1,000. The growth rate is…', '2%', ['20%', '3%', '0.2%'], '(30 − 10) ÷ 10.'],
      ['A population growing at 3.5% doubles in about…', '20 years', ['35 years', '70 years', '10 years'], '70 ÷ 3.5.'],
      ['China’s one-child policy is an example of…', 'An anti-natalist policy', ['A pro-natalist policy', 'Migration policy', 'An ageing policy'], 'It aimed to reduce births.'],
      ['A population pyramid with a narrow base and wide top shows…', 'An ageing population', ['A rapidly growing population', 'High birth rates', 'High infant mortality'], 'Few births and many elderly people.'],
    ],
  ),
  '8.2': M(
    [
      'Urban systems have inputs like food, water, energy and people, and outputs like waste, emissions and sewage. Cities depend on large surrounding areas.',
      'Rapid urbanisation in lower-income countries often outpaces planning, leading to informal settlements with poor sanitation. Over half the world now lives in cities.',
      'Case study: Curitiba in Brazil pioneered bus rapid transit and green spaces, often cited as a model sustainable city.',
      'Sustainable urban planning includes mixed land use, public transport, green roofs, efficient buildings and waste recycling.',
    ],
    [
      ['Share of world population in cities', 'Over half (about 57%).'],
      ['Bus rapid transit', 'Dedicated bus lanes and stations, pioneered in Curitiba.'],
      ['Green roof', 'Vegetated roof that reduces runoff and insulates buildings.'],
      ['Suburbanisation', 'Movement of people from city centres to outer areas.'],
    ],
    [
      ['Which city is famous for pioneering bus rapid transit?', 'Curitiba', ['Los Angeles', 'Dubai', 'Lagos'], 'It is a model for sustainable transport.'],
      ['Green roofs help cities by…', 'Reducing runoff and heat', ['Increasing pollution', 'Raising temperatures', 'Stopping recycling'], 'Plants absorb water and cool buildings.'],
      ['Over half the world’s population now lives in…', 'Urban areas', ['Rural areas', 'Coastal villages only', 'Deserts'], 'The share keeps rising.'],
      ['A city importing food and energy from far away shows it…', 'Depends on a large ecological footprint', ['Is self-sufficient', 'Has no waste', 'Is a closed system'], 'Its footprint extends beyond its borders.'],
    ],
  ),
  '8.3': M(
    [
      'Sources of urban air pollution: vehicles, industry, power stations, and burning of fuels for cooking and heating. Key pollutants are particulates, nitrogen oxides, sulfur dioxide and carbon monoxide.',
      'Health impacts: air pollution causes an estimated several million premature deaths each year, mainly through heart and lung disease.',
      'Case study: Delhi experiences severe smog in winter from traffic, industry, crop burning in nearby states and temperature inversions.',
      'Solutions: low-emission zones, like London’s ULEZ, electric vehicles, better public transport, cleaner fuels and industrial filters.',
    ],
    [
      ['PM2.5', 'Fine particulates small enough to enter lungs and blood.'],
      ['Secondary pollutant', 'Formed by reactions in the air, e.g. ground-level ozone.'],
      ['ULEZ', 'London’s Ultra Low Emission Zone charging polluting vehicles.'],
      ['Catalytic converter', 'Reduces harmful gases from car exhausts.'],
    ],
    [
      ['Crop burning and inversions contribute to winter smog in…', 'Delhi', ['Reykjavik', 'Wellington', 'Oslo'], 'Smoke is trapped near the ground.'],
      ['Which pollutant is most harmful to lungs?', 'PM2.5', ['Nitrogen gas', 'Oxygen', 'Argon'], 'Fine particles penetrate deep into lungs.'],
      ['London’s ULEZ reduces pollution by…', 'Charging the most polluting vehicles', ['Banning bicycles', 'Closing parks', 'Building more roads'], 'It discourages dirty vehicles.'],
      ['Ozone formed near the ground from NOₓ and sunlight is a…', 'Secondary pollutant', ['Primary pollutant', 'Greenhouse-free gas', 'Particulate'], 'It forms from reactions in sunlight.'],
    ],
  ),
  'HL.a': M(
    [
      'Environmental law exists at international, national and local levels. International treaties include the Paris Agreement, CITES and the Montreal Protocol.',
      'Many international laws are “soft law”, relying on goodwill and peer pressure; “hard law” is legally binding with penalties.',
      'Case study: in 2017 New Zealand gave the Whanganui River legal personhood, recognising Māori views of the river as an ancestor.',
      'Evaluate law: it can drive change, like the Clean Air Acts, but enforcement, political will and loopholes limit its effectiveness.',
    ],
    [
      ['Soft law', 'Non-binding agreements relying on goodwill.'],
      ['Hard law', 'Legally binding rules with penalties.'],
      ['Whanganui River', 'Granted legal personhood in New Zealand in 2017.'],
      ['Precautionary principle', 'Act to prevent harm even without full scientific certainty.'],
    ],
    [
      ['Which river was granted legal personhood in 2017?', 'Whanganui River', ['Amazon', 'Thames', 'Mississippi'], 'It reflects Māori beliefs.'],
      ['A non-binding international agreement is…', 'Soft law', ['Hard law', 'A tax', 'A court ruling'], 'It relies on voluntary compliance.'],
      ['Acting to prevent harm before scientific certainty is the…', 'Precautionary principle', ['Polluter pays principle', 'Free market principle', 'Tragedy of the commons'], 'It favours caution with serious risks.'],
      ['The Paris Agreement is mostly an example of…', 'Soft law with voluntary national targets', ['Hard law with fines', 'A national law', 'A trade treaty'], 'Countries set their own targets and face no penalties for missing them.'],
    ],
  ),
  'HL.b': M(
    [
      'Market failure: environmental harm is an externality not reflected in prices, so markets overproduce pollution. The polluter pays principle aims to correct this.',
      'Valuation methods include contingent valuation, asking willingness to pay, and hedonic pricing, using house prices near parks or pollution.',
      'Case study: Costa Rica’s payments for ecosystem services pay landowners to protect forests, helping forest cover recover from about 25% in the 1980s to over 50% today.',
      'Green growth argues economies can grow while cutting emissions; degrowth argues rich countries must reduce consumption. Doughnut economics offers a middle view.',
    ],
    [
      ['Polluter pays principle', 'Those who cause pollution should pay for the damage.'],
      ['Contingent valuation', 'Asking people how much they would pay to protect nature.'],
      ['Green growth', 'Economic growth decoupled from environmental harm.'],
      ['Degrowth', 'Planned reduction of consumption in rich countries.'],
    ],
    [
      ['A factory paying for the damage its emissions cause follows the…', 'Polluter pays principle', ['Precautionary principle', 'Free rider principle', 'Doughnut model'], 'Costs are internalised.'],
      ['Asking people how much they’d pay to protect a lake is…', 'Contingent valuation', ['Hedonic pricing', 'Cap and trade', 'GDP'], 'It estimates non-market values.'],
      ['Costa Rica increased forest cover mainly through…', 'Payments for ecosystem services', ['Logging', 'Cattle subsidies', 'Mining'], 'Landowners were paid to protect forests.'],
      ['Degrowth argues that rich countries should…', 'Reduce consumption', ['Increase consumption', 'Ignore the environment', 'Expand fossil fuels'], 'It challenges endless growth.'],
    ],
  ),
  'HL.c': M(
    [
      'Ethical theories: utilitarianism judges actions by consequences for the greatest number; deontology by duties and rights; virtue ethics by character.',
      'Aldo Leopold’s land ethic argued that something is right when it preserves the integrity, stability and beauty of the biotic community.',
      'Environmental justice examines who bears pollution and who benefits. Case study: the Flint water crisis from 2014 mostly affected a low-income, majority Black city.',
      'Exam tip: evaluate an issue from at least two ethical perspectives, then give a justified judgement, for example on whether to build a dam that displaces communities.',
    ],
    [
      ['Utilitarianism', 'Judges actions by their consequences for the greatest good.'],
      ['Deontology', 'Judges actions by duties and rules.'],
      ['Aldo Leopold’s land ethic', 'Right actions preserve the integrity of the biotic community.'],
      ['Flint water crisis', 'Lead-contaminated water in a low-income US city from 2014.'],
    ],
    [
      ['Judging a dam by whether it benefits the most people is…', 'Utilitarian', ['Deontological', 'Virtue ethics', 'Biocentric only'], 'It focuses on consequences.'],
      ['Who proposed the land ethic?', 'Aldo Leopold', ['Rachel Carson', 'Kate Raworth', 'James Lovelock'], 'In A Sand County Almanac (1949).'],
      ['The Flint water crisis is an example of…', 'Environmental injustice', ['Rewilding', 'Sustainable yield', 'Carbon capture'], 'Harm fell mostly on a disadvantaged community.'],
      ['Considering the rights of future generations reflects…', 'Intergenerational equity', ['Anthropocentrism only', 'Free markets', 'Technocentrism'], 'Fairness across generations.'],
    ],
  ),
};

export default more;
