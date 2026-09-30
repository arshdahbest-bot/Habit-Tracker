import type { SubjectContentFile } from '../types';
import { C } from './helpers';

const content: SubjectContentFile = {
  units: {
    '1': [
      'Topic 1, foundation, gives you the tools used across ESS: environmental perspectives, systems thinking and sustainability.',
      'Every later topic uses these ideas, so make sure you can draw system diagrams and explain feedback loops.',
    ],
    '2': [
      'Topic 2, ecology, covers how ecosystems work: populations and communities, energy flow, nutrient cycles, biomes, and succession.',
    ],
    '3': [
      'Topic 3 covers biodiversity: how it arises through evolution, how humans threaten it, and how it can be conserved and restored.',
    ],
    '4': [
      'Topic 4, water, covers the hydrological cycle, access to fresh water, aquatic food production and water pollution.',
    ],
    '5': [
      'Topic 5, land, covers soil systems and the agricultural systems that feed the world, and how both can be managed sustainably.',
    ],
    '6': [
      'Topic 6 covers the atmosphere: its structure, climate change causes, impacts, mitigation and adaptation, and stratospheric ozone.',
    ],
    '7': [
      'Topic 7, natural resources, covers how we use and manage resources, energy choices and the management of solid waste.',
    ],
    '8': [
      'Topic 8 covers human populations and urban systems: population dynamics, sustainable cities and urban air pollution.',
    ],
    HL: [
      'HL students apply three lenses across the course: environmental law, environmental economics and environmental ethics.',
      'They help explain why environmental problems persist and how societies can respond.',
    ],
  },
  chapters: {
    '1.1': C(
      [
        'An environmental value system, EVS, is a worldview that shapes how people see and respond to environmental issues.',
        'EVSs range from ecocentric, nature-centred, through anthropocentric, human-centred, to technocentric, believing technology can solve problems.',
        'EVSs are shaped by culture, religion, economics, education and media, and can change over time.',
        'Historical events, like Rachel Carson’s Silent Spring in 1962 and the Chernobyl disaster, shaped the environmental movement.',
      ],
      [
        ['Environmental value system', 'A worldview shaping how people view the environment.'],
        ['Ecocentric', 'Nature-centred; values nature for its own sake.'],
        ['Technocentric', 'Believes technology can solve environmental problems.'],
        ['Silent Spring', 'Rachel Carson’s 1962 book on pesticide harm.'],
      ],
      [
        ['Someone who believes new technology will solve climate change is…', ['Ecocentric', 'Anthropocentric', 'Technocentric', 'Deep ecologist'], 2, 'They trust technological solutions.'],
        ['Silent Spring highlighted the harm of…', ['Plastic', 'Pesticides like DDT', 'Nuclear power', 'Deforestation'], 1, 'It raised awareness of pesticides.'],
        ['An EVS can be influenced by…', ['Only genetics', 'Culture, religion and education', 'Nothing', 'Only age'], 1, 'Many social factors shape EVSs.'],
      ],
    ),
    '1.2': C(
      [
        'A system is a set of interacting parts with inputs, outputs, stores and flows. Using a systems approach lets us see how environmental and human factors connect.',
        'Open systems exchange both energy and matter with their surroundings, like a forest. Closed systems exchange energy but not matter; the Earth is close to a closed system. Isolated systems exchange neither.',
        'Flows can be transfers, which move energy or matter to a new place, or transformations, which change their form or state.',
        'Negative feedback counteracts change and keeps a system stable. Positive feedback amplifies change. A tipping point is where a small change pushes a system into a new state.',
      ],
      [
        ['Open system', 'Exchanges both energy and matter with its surroundings.'],
        ['Closed system', 'Exchanges energy but not matter.'],
        ['Negative feedback', 'Counteracts change and stabilises the system.'],
        ['Tipping point', 'A threshold beyond which a system shifts to a new state.'],
      ],
      [
        ['A forest ecosystem is best described as…', ['An isolated system', 'A closed system', 'An open system', 'A static system'], 2, 'It exchanges both energy and matter.'],
        ['Melting ice lowering albedo and causing more warming is…', ['Negative feedback', 'Positive feedback', 'Steady state', 'A transfer'], 1, 'The change amplifies itself.'],
        ['Photosynthesis is an example of a…', ['Transfer', 'Transformation', 'Store', 'Output only'], 1, 'Light energy is transformed into chemical energy.'],
      ],
    ),
    '1.3': C(
      [
        'Sustainability is the use of resources at a rate that allows natural regeneration and minimises environmental damage.',
        'It has environmental, social and economic dimensions. The UN Sustainable Development Goals set targets for 2030.',
        'Natural capital is the stock of natural resources; natural income is the sustainable yield from it.',
        'Tools for measuring sustainability include ecological footprints, carbon and water footprints, and planetary boundaries. The doughnut economics model combines planetary boundaries with social needs.',
      ],
      [
        ['Sustainability', 'Using resources at a rate that allows natural regeneration.'],
        ['Natural capital', 'The stock of natural resources.'],
        ['Ecological footprint', 'Area needed to supply a population’s resources and absorb its waste.'],
        ['Planetary boundaries', 'Limits within which humanity can operate safely.'],
      ],
      [
        ['Harvesting fish at the rate they reproduce is…', ['Unsustainable', 'Sustainable', 'Illegal', 'Positive feedback'], 1, 'It uses only natural income.'],
        ['A large ecological footprint means…', ['Low resource use', 'High resource use and waste', 'High biodiversity', 'Renewable energy only'], 1, 'More land is needed to support that lifestyle.'],
        ['Doughnut economics combines planetary boundaries with…', ['GDP growth', 'Social foundations', 'Carbon taxes', 'Tariffs'], 1, 'A safe and just space for humanity.'],
      ],
    ),
    '2.1': C(
      [
        'An individual organism belongs to a species; a population is all members of a species in an area; a community is all populations there; an ecosystem includes the community and its abiotic environment.',
        'Biotic factors are living, such as predation and competition; abiotic factors are non-living, such as temperature and light.',
        'Populations are limited by carrying capacity, which leads to S-shaped growth. J-shaped curves show boom and bust.',
        'Interactions include predation, herbivory, parasitism, mutualism and competition. Keystone species have large effects on their community.',
      ],
      [
        ['Population', 'All members of one species in an area.'],
        ['Carrying capacity', 'Maximum population an environment can sustain.'],
        ['S-curve', 'Population growth that levels off at carrying capacity.'],
        ['Mutualism', 'Both species benefit.'],
      ],
      [
        ['Temperature is a…', ['Biotic factor', 'Abiotic factor', 'Keystone species', 'Community'], 1, 'It is non-living.'],
        ['A population that grows rapidly then crashes shows a…', ['S-curve', 'J-curve', 'Flat line', 'Sigmoid plateau'], 1, 'Boom and bust.'],
        ['Bees pollinating flowers while feeding is…', ['Parasitism', 'Mutualism', 'Competition', 'Predation'], 1, 'Both benefit.'],
      ],
    ),
    '2.2': C(
      [
        'Energy enters ecosystems through photosynthesis by producers and flows through food chains to consumers.',
        'Only about 10 percent of energy passes to the next trophic level; most is lost as heat through respiration. This limits food chain length.',
        'Pyramids of numbers, biomass and productivity show trophic levels. Pyramids of productivity are never inverted.',
        'Gross primary productivity is total energy fixed by producers; net primary productivity is what remains after respiration and is available to consumers.',
      ],
      [
        ['Energy transfer between trophic levels', 'About 10%.'],
        ['GPP', 'Gross primary productivity: total energy fixed by producers.'],
        ['NPP', 'GPP − respiration.'],
        ['Why food chains are short', 'Energy is lost as heat at each level.'],
      ],
      [
        ['Producers fix 10 000 kJ. Energy reaching primary consumers is about…', ['10 000 kJ', '1000 kJ', '100 kJ', '10 kJ'], 1, 'About 10% transfers.'],
        ['NPP equals…', ['GPP + respiration', 'GPP − respiration', 'Respiration only', 'Biomass × area'], 1, 'Energy available after respiration.'],
        ['Which pyramid can never be inverted?', ['Numbers', 'Biomass', 'Productivity (energy)', 'All of them'], 2, 'Energy always decreases up the chain.'],
      ],
    ),
    '2.3': C(
      [
        'Matter cycles through ecosystems in biogeochemical cycles, moving between stores like the atmosphere, oceans, soil and organisms.',
        'In the carbon cycle, photosynthesis removes carbon dioxide; respiration, decomposition and combustion return it. Oceans and fossil fuels are major stores.',
        'In the nitrogen cycle, bacteria carry out nitrogen fixation, nitrification and denitrification. Plants absorb nitrates.',
        'Humans disrupt these cycles by burning fossil fuels, deforestation and using fertilisers, which cause climate change and eutrophication.',
      ],
      [
        ['Carbon sink', 'A store that absorbs more carbon than it releases, e.g. oceans, forests.'],
        ['Nitrogen fixation', 'Bacteria convert atmospheric nitrogen into usable compounds.'],
        ['Denitrification', 'Bacteria convert nitrates back into nitrogen gas.'],
        ['Human impact on nitrogen cycle', 'Fertiliser use, leading to eutrophication.'],
      ],
      [
        ['Which process removes CO₂ from the atmosphere?', ['Respiration', 'Combustion', 'Photosynthesis', 'Decomposition'], 2, 'Producers fix carbon.'],
        ['Converting N₂ gas into ammonia by bacteria is…', ['Denitrification', 'Nitrogen fixation', 'Nitrification', 'Leaching'], 1, 'It makes nitrogen available to plants.'],
        ['Excess fertiliser running into lakes can cause…', ['Eutrophication', 'Ozone depletion', 'Acid rain', 'Desertification'], 0, 'Algal blooms and oxygen depletion.'],
      ],
    ),
    '2.4': C(
      [
        'Climate, especially temperature and precipitation, determines the distribution of biomes.',
        'Major biomes include tropical rainforest, desert, temperate forest, grassland, tundra and aquatic biomes.',
        'Global patterns are shaped by the tri-cellular model of atmospheric circulation, including Hadley cells, which explains wet tropics and dry subtropical deserts.',
        'Climate change is shifting biomes, for example moving tree lines towards the poles and up mountains.',
      ],
      [
        ['Biome', 'A large community shaped by climate.'],
        ['Main factors for biomes', 'Temperature and precipitation.'],
        ['Hadley cell', 'Atmospheric circulation between the equator and about 30° latitude.'],
        ['Tundra', 'Cold biome with permafrost and low productivity.'],
      ],
      [
        ['Deserts often form around 30° latitude because…', ['Air rises and cools', 'Descending dry air of Hadley cells', 'They are near oceans', 'High rainfall'], 1, 'Sinking air suppresses rain.'],
        ['The biome with the highest productivity is usually…', ['Desert', 'Tundra', 'Tropical rainforest', 'Grassland'], 2, 'Warm, wet and sunny all year.'],
        ['Climate change is expected to shift biomes…', ['Towards the equator', 'Towards the poles and uphill', 'Nowhere', 'Into oceans'], 1, 'Following suitable temperatures.'],
      ],
    ),
    '2.5': C(
      [
        'Zonation is the change in community along an environmental gradient, such as altitude on a mountain or a rocky shore.',
        'Succession is the change in community over time. Primary succession starts on bare ground, like after a volcano; secondary succession occurs where soil remains, like after a fire.',
        'Pioneer species colonise first, changing conditions so other species can move in, leading to a climax community.',
        'Human activities can stop succession, creating a plagioclimax, such as grazed grassland or managed forests.',
      ],
      [
        ['Zonation', 'Change in community along a spatial gradient.'],
        ['Succession', 'Change in community over time.'],
        ['Pioneer species', 'First organisms to colonise bare ground, e.g. lichens.'],
        ['Plagioclimax', 'A community stopped from reaching climax by human activity.'],
      ],
      [
        ['Lichens growing on bare rock after a lava flow start…', ['Secondary succession', 'Primary succession', 'Zonation', 'A plagioclimax'], 1, 'There is no soil yet.'],
        ['Heather moorland kept by burning is a…', ['Climax community', 'Plagioclimax', 'Pioneer community', 'Zonation'], 1, 'Human management stops succession.'],
        ['Different plants at different heights on a mountain show…', ['Succession', 'Zonation', 'Eutrophication', 'Biomagnification'], 1, 'Change along an altitude gradient.'],
      ],
    ),
    '3.1': C(
      [
        'Biodiversity includes genetic diversity, species diversity and habitat diversity.',
        'It arises through evolution by natural selection, and speciation when populations become isolated.',
        'Mass extinctions have happened five times in Earth’s history; many scientists argue a sixth, caused by humans, is under way.',
        'Biodiversity hotspots have high numbers of endemic species and face major threats.',
      ],
      [
        ['Three levels of biodiversity', 'Genetic, species, habitat.'],
        ['Speciation', 'Formation of new species, often through isolation.'],
        ['Biodiversity hotspot', 'Area with many endemic species under threat.'],
        ['Endemic species', 'Found naturally in only one place.'],
      ],
      [
        ['How many past mass extinctions are recognised?', ['2', '3', '5', '10'], 2, 'Five major mass extinctions.'],
        ['Species found only in Madagascar are…', ['Invasive', 'Endemic', 'Extinct', 'Keystone'], 1, 'Unique to that place.'],
        ['New species often form when populations are…', ['Mixed', 'Isolated', 'Larger', 'Identical'], 1, 'Isolation allows divergence.'],
      ],
    ),
    '3.2': C(
      [
        'Human activities are the main cause of biodiversity loss: habitat destruction, overexploitation, pollution, invasive species and climate change.',
        'Species at risk are listed on the IUCN Red List, with categories from least concern to extinct.',
        'Species are more vulnerable if they have a small population, a narrow range, low reproductive rate or specialised needs.',
        'Tropical rainforests and coral reefs are especially threatened.',
      ],
      [
        ['IUCN Red List', 'Global list assessing species’ extinction risk.'],
        ['Main cause of biodiversity loss', 'Habitat destruction.'],
        ['Invasive species', 'A non-native species that spreads and harms native species.'],
        ['Traits of vulnerable species', 'Small population, narrow range, slow reproduction.'],
      ],
      [
        ['The leading cause of biodiversity loss is…', ['Tourism', 'Habitat destruction', 'Seed banks', 'Volcanoes'], 1, 'Land conversion destroys habitats.'],
        ['Which species is most vulnerable?', ['Rapidly breeding generalist', 'Slow-breeding specialist with a small range', 'Common widespread bird', 'Invasive plant'], 1, 'It can’t recover or adapt easily.'],
        ['Cane toads in Australia are an example of…', ['An endemic species', 'An invasive species', 'A keystone species', 'A climax species'], 1, 'They harm native wildlife.'],
      ],
    ),
    '3.3': C(
      [
        'Conservation can be in situ, protecting habitats like national parks and nature reserves, or ex situ, like zoos, botanic gardens and seed banks.',
        'Protected area design matters: larger, connected reserves with wildlife corridors and fewer edge effects support more species.',
        'International agreements, like CITES and the Convention on Biological Diversity, and NGOs like WWF support conservation.',
        'Regeneration and rewilding restore ecosystems, for example reintroducing wolves to Yellowstone.',
      ],
      [
        ['In situ conservation', 'Protecting species in their natural habitat.'],
        ['Ex situ conservation', 'Outside the natural habitat, e.g. seed banks.'],
        ['Wildlife corridor', 'Connects habitats so species can move between them.'],
        ['Rewilding', 'Restoring natural processes, often by reintroducing species.'],
      ],
      [
        ['A seed bank is…', ['In situ conservation', 'Ex situ conservation', 'Rewilding', 'A corridor'], 1, 'Seeds are stored away from the wild.'],
        ['CITES controls…', ['Carbon emissions', 'International trade in endangered species', 'Ozone-depleting gases', 'Fishing quotas'], 1, 'It regulates wildlife trade.'],
        ['Reintroducing wolves to Yellowstone is an example of…', ['Ex situ conservation', 'Rewilding', 'Deforestation', 'Zonation'], 1, 'It restored trophic interactions.'],
      ],
    ),
    '4.1': C(
      [
        'The hydrological cycle moves water between stores, like oceans, ice caps, groundwater and the atmosphere, through flows such as evaporation, precipitation and runoff.',
        'Only a tiny fraction of Earth’s water is accessible fresh water.',
        'Human activities, like urbanisation, deforestation and agriculture, alter flows, increasing runoff and flood risk.',
        'Ocean circulation, driven by temperature and salinity differences, redistributes heat around the planet.',
      ],
      [
        ['Hydrological cycle', 'Movement of water between stores via flows.'],
        ['Transformation in the water cycle', 'e.g. evaporation (liquid to gas).'],
        ['Effect of urbanisation', 'More impermeable surfaces → more runoff.'],
        ['Thermohaline circulation', 'Ocean currents driven by temperature and salinity.'],
      ],
      [
        ['Most of Earth’s water is stored in…', ['Rivers', 'Oceans', 'Groundwater', 'The atmosphere'], 1, 'About 97% is saltwater.'],
        ['Urbanisation usually increases…', ['Infiltration', 'Surface runoff', 'Groundwater storage', 'Transpiration'], 1, 'Concrete stops water soaking in.'],
        ['Evaporation is a…', ['Transfer', 'Transformation', 'Store', 'Input only'], 1, 'Water changes state.'],
      ],
    ),
    '4.2': C(
      [
        'Water security means reliable access to enough safe water for health, livelihoods and production.',
        'Water scarcity can be physical, not enough water, or economic, lack of investment in infrastructure.',
        'Demand is rising because of population growth, agriculture, industry and changing diets.',
        'Solutions include reducing leaks, rainwater harvesting, desalination, water recycling and fair international agreements over shared rivers.',
      ],
      [
        ['Water security', 'Reliable access to sufficient, safe water.'],
        ['Physical scarcity', 'Not enough water to meet demand.'],
        ['Economic scarcity', 'Lack of investment prevents access.'],
        ['Desalination', 'Removing salt from seawater; energy-intensive.'],
      ],
      [
        ['The largest use of fresh water globally is…', ['Domestic', 'Agriculture', 'Industry', 'Recreation'], 1, 'Irrigation uses about 70%.'],
        ['A region with water but no pipes or treatment faces…', ['Physical scarcity', 'Economic scarcity', 'No scarcity', 'Flooding only'], 1, 'The problem is investment.'],
        ['A drawback of desalination is…', ['Low cost', 'High energy use', 'It creates fresh rivers', 'It removes CO₂'], 1, 'It needs lots of energy.'],
      ],
    ),
    '4.3': C(
      [
        'Aquatic food production includes wild fisheries and aquaculture, fish farming.',
        'Overfishing has depleted many fish stocks. Maximum sustainable yield is the largest catch that can be taken without reducing future stocks.',
        'Management includes quotas, size limits, marine protected areas and certification schemes.',
        'Aquaculture reduces pressure on wild fish but can cause pollution, disease and habitat loss, such as mangrove clearing for shrimp farms.',
      ],
      [
        ['Maximum sustainable yield', 'Largest catch possible without depleting the stock.'],
        ['Aquaculture', 'Farming of fish and other aquatic organisms.'],
        ['Marine protected area', 'Ocean area where human activity is restricted.'],
        ['Bycatch', 'Unwanted species caught while fishing.'],
      ],
      [
        ['Catching more than the maximum sustainable yield leads to…', ['Stock growth', 'Stock decline', 'No change', 'More biodiversity'], 1, 'Reproduction can’t keep up.'],
        ['Dolphins caught in tuna nets are…', ['Target species', 'Bycatch', 'Aquaculture', 'Quotas'], 1, 'Unintended catch.'],
        ['A problem with shrimp farming can be…', ['Mangrove destruction', 'More coral reefs', 'Lower prices only', 'Cleaner water'], 0, 'Mangroves are cleared for ponds.'],
      ],
    ),
    '4.4': C(
      [
        'Water pollution comes from point sources, like a factory pipe, and non-point sources, like farm runoff.',
        'Pollutants include organic matter, nutrients, toxic metals, pathogens, plastics and heat.',
        'Water quality is measured by biochemical oxygen demand, indicator species, and chemical tests. High BOD means lots of organic pollution.',
        'Eutrophication happens when excess nutrients cause algal blooms, which die and decompose, using up oxygen and killing fish.',
      ],
      [
        ['Point source pollution', 'From a single identifiable source.'],
        ['BOD', 'Biochemical oxygen demand: oxygen used by microorganisms decomposing organic matter.'],
        ['Indicator species', 'Species whose presence shows water quality.'],
        ['Eutrophication sequence', 'Nutrients → algal bloom → decomposition → low oxygen → death.'],
      ],
      [
        ['High BOD indicates…', ['Clean water', 'High organic pollution', 'Low temperature', 'High biodiversity'], 1, 'Decomposers use lots of oxygen.'],
        ['Fertiliser runoff from many farms is…', ['Point source', 'Non-point source', 'Thermal pollution', 'Radioactive'], 1, 'It comes from a wide area.'],
        ['Mayfly larvae in a stream suggest…', ['Heavy pollution', 'Clean water', 'Eutrophication', 'High BOD'], 1, 'They need high oxygen levels.'],
      ],
    ),
    '5.1': C(
      [
        'Soil is a system of minerals, organic matter, water, air and organisms. It forms slowly from weathered rock and organic material.',
        'Soil profiles show layers called horizons. Soil texture depends on proportions of sand, silt and clay; loam is ideal for farming.',
        'Soil degradation includes erosion by wind and water, salinisation, loss of nutrients and desertification.',
        'Soil conservation methods include terracing, contour ploughing, cover crops, windbreaks and adding organic matter.',
      ],
      [
        ['Soil components', 'Minerals, organic matter, water, air, organisms.'],
        ['Loam', 'Balanced mix of sand, silt and clay; good for crops.'],
        ['Salinisation', 'Build-up of salts in soil, often from irrigation.'],
        ['Terracing', 'Steps cut into slopes to reduce erosion.'],
      ],
      [
        ['Contour ploughing helps to…', ['Increase erosion', 'Reduce soil erosion on slopes', 'Add salt', 'Remove organic matter'], 1, 'Furrows slow water runoff.'],
        ['Salinisation is often caused by…', ['Rainfall', 'Poorly managed irrigation', 'Forests', 'Cover crops'], 1, 'Evaporation leaves salts behind.'],
        ['Which soil is best for most crops?', ['Pure sand', 'Pure clay', 'Loam', 'Gravel'], 2, 'It drains well yet holds nutrients.'],
      ],
    ),
    '5.2': C(
      [
        'Agricultural systems vary: commercial or subsistence, intensive or extensive, and arable, pastoral or mixed.',
        'Food production faces challenges: a growing population, food waste, inequality of access, and environmental impacts.',
        'Intensive farming produces high yields but can cause soil degradation, pollution and biodiversity loss. Eating lower on the food chain is more energy-efficient.',
        'Sustainable approaches include organic farming, agroforestry, reducing food waste, and alternative proteins.',
      ],
      [
        ['Intensive farming', 'High inputs per area for high yields.'],
        ['Subsistence farming', 'Growing food mainly for the farmer’s family.'],
        ['Why plant-based diets are efficient', 'Less energy is lost through trophic levels.'],
        ['Agroforestry', 'Growing trees alongside crops or livestock.'],
      ],
      [
        ['Which diet has the smallest land footprint?', ['Beef-heavy', 'Plant-based', 'Pork-heavy', 'Dairy-only'], 1, 'Fewer trophic levels.'],
        ['A drawback of intensive farming is…', ['Low yields', 'Pollution from fertilisers and pesticides', 'High labour needs', 'No machinery'], 1, 'High chemical inputs.'],
        ['About how much food is wasted globally?', ['Almost none', 'Roughly a third', 'Over 90%', 'Exactly 50%'], 1, 'Around one-third is lost or wasted.'],
      ],
    ),
    '6.1': C(
      [
        'The atmosphere is a dynamic system of gases, mainly nitrogen and oxygen, with small amounts of argon, carbon dioxide and water vapour.',
        'Its layers include the troposphere, where weather occurs, and the stratosphere, which contains the ozone layer.',
        'The greenhouse effect is natural and keeps Earth warm enough for life.',
        'Human activities have changed the atmosphere’s composition, increasing greenhouse gases and releasing pollutants.',
      ],
      [
        ['Main atmospheric gases', 'Nitrogen (~78%) and oxygen (~21%).'],
        ['Troposphere', 'Lowest layer, where weather occurs.'],
        ['Stratosphere', 'Contains the ozone layer.'],
        ['Natural greenhouse effect', 'Keeps Earth warm enough for life.'],
      ],
      [
        ['The most abundant gas in the atmosphere is…', ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Argon'], 1, 'About 78%.'],
        ['Weather occurs in the…', ['Stratosphere', 'Troposphere', 'Mesosphere', 'Thermosphere'], 1, 'The lowest layer.'],
        ['Without the natural greenhouse effect, Earth would be…', ['Warmer', 'Much colder', 'The same', 'Wetter'], 1, 'Around −18 °C on average.'],
      ],
    ),
    '6.2': C(
      [
        'Climate change is caused mainly by the enhanced greenhouse effect: extra carbon dioxide, methane and nitrous oxide from burning fossil fuels, farming and deforestation.',
        'Impacts include rising temperatures, sea-level rise, more extreme weather, ocean acidification, and shifts in ecosystems.',
        'Feedback loops, like melting ice reducing albedo and thawing permafrost releasing methane, can accelerate change and push systems past tipping points.',
        'Impacts are unequal: poorer and low-lying countries are often most vulnerable, raising issues of climate justice.',
      ],
      [
        ['Enhanced greenhouse effect', 'Extra greenhouse gases from human activity trap more heat.'],
        ['Ocean acidification', 'Oceans absorb CO₂, lowering pH.'],
        ['Permafrost feedback', 'Thawing releases methane, causing more warming.'],
        ['Climate justice', 'Those least responsible often suffer most.'],
      ],
      [
        ['Ocean acidification is caused by oceans absorbing…', ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Ozone'], 1, 'CO₂ forms carbonic acid.'],
        ['Melting ice speeds warming because it…', ['Reflects more sunlight', 'Reduces albedo', 'Releases oxygen', 'Cools the sea'], 1, 'Dark water absorbs more heat.'],
        ['Which gas is released by rice paddies and cattle?', ['CO₂', 'Methane', 'Ozone', 'CFCs'], 1, 'Methane comes from anaerobic processes.'],
      ],
    ),
    '6.3': C(
      [
        'Mitigation reduces the causes of climate change: cutting emissions, switching to renewable energy, improving efficiency, and increasing carbon sinks through reforestation.',
        'Carbon capture and storage, geoengineering and carbon pricing are further options, each with risks and costs.',
        'Adaptation reduces the harm of climate change: sea walls, drought-resistant crops, flood defences and changing building design.',
        'International agreements include the Kyoto Protocol and the Paris Agreement, which aims to limit warming to well below 2 degrees Celsius.',
      ],
      [
        ['Mitigation', 'Reducing the causes of climate change.'],
        ['Adaptation', 'Adjusting to reduce the harm of climate change.'],
        ['Paris Agreement', '2015: limit warming to well below 2 °C, aiming for 1.5 °C.'],
        ['Carbon capture and storage', 'Capturing CO₂ from emissions and storing it underground.'],
      ],
      [
        ['Building sea walls is…', ['Mitigation', 'Adaptation', 'Geoengineering', 'Carbon capture'], 1, 'It reduces harm from rising seas.'],
        ['Switching to solar power is…', ['Mitigation', 'Adaptation', 'Pollution', 'Feedback'], 0, 'It cuts emissions.'],
        ['The Paris Agreement was signed in…', ['1997', '2009', '2015', '2021'], 2, 'At COP21.'],
      ],
    ),
    '6.4': C(
      [
        'The stratospheric ozone layer absorbs harmful ultraviolet radiation from the Sun.',
        'Ozone-depleting substances, such as CFCs from old refrigerants and aerosols, release chlorine that breaks down ozone, especially over Antarctica.',
        'Increased UV causes skin cancer, cataracts and damage to phytoplankton and crops.',
        'The Montreal Protocol of 1987 phased out CFCs, and the ozone layer is slowly recovering: a successful example of international cooperation.',
      ],
      [
        ['Role of stratospheric ozone', 'Absorbs harmful UV radiation.'],
        ['CFCs', 'Chlorofluorocarbons: ozone-depleting chemicals.'],
        ['Montreal Protocol', '1987 agreement phasing out ozone-depleting substances.'],
        ['Effect of more UV', 'Skin cancer, cataracts, damage to phytoplankton.'],
      ],
      [
        ['The Montreal Protocol targeted…', ['CO₂', 'CFCs', 'Methane', 'Plastic'], 1, 'Ozone-depleting substances.'],
        ['The ozone hole is most severe over…', ['The Sahara', 'Antarctica', 'The Amazon', 'Europe'], 1, 'Cold polar conditions speed depletion.'],
        ['Ozone depletion increases…', ['Infrared radiation', 'UV radiation reaching Earth', 'Rainfall', 'Oxygen levels'], 1, 'Less ozone absorbs less UV.'],
      ],
    ),
    '7.1': C(
      [
        'Natural resources provide goods and services. They can be renewable, like forests, replenishable, like groundwater, or non-renewable, like oil.',
        'Natural capital provides natural income, such as timber or clean water, and ecosystem services, like pollination and flood control.',
        'The value of resources changes with technology, culture and economics: for example lithium became more valuable with electric cars.',
        'Sustainable management uses resources within their natural income and considers future generations.',
      ],
      [
        ['Renewable resource', 'Can be naturally replaced within a human lifetime.'],
        ['Non-renewable resource', 'Finite; not replaced on human timescales.'],
        ['Ecosystem services', 'Benefits from nature, e.g. pollination, clean water.'],
        ['Why resource value changes', 'Technology, culture and economics change.'],
      ],
      [
        ['Oil is a…', ['Renewable resource', 'Non-renewable resource', 'Replenishable resource', 'Ecosystem service'], 1, 'It forms over millions of years.'],
        ['Pollination by bees is an example of…', ['A non-renewable resource', 'An ecosystem service', 'Pollution', 'Natural income decline'], 1, 'Nature provides it for free.'],
        ['Lithium’s value rose because of…', ['Coal power', 'Electric vehicle batteries', 'Farming', 'Fishing'], 1, 'Technology created demand.'],
      ],
    ),
    '7.2': C(
      [
        'Energy sources can be non-renewable, like coal, oil, natural gas and nuclear, or renewable, like solar, wind, hydro, geothermal and biomass.',
        'Choices depend on availability, cost, technology, energy security, and environmental impact.',
        'Fossil fuels are reliable and energy-dense but release greenhouse gases. Renewables have low emissions but can be intermittent and need storage.',
        'Energy efficiency and conservation reduce demand. The energy mix differs between countries.',
      ],
      [
        ['Renewable energy examples', 'Solar, wind, hydro, geothermal, biomass.'],
        ['Energy security', 'Reliable access to affordable energy.'],
        ['Intermittency', 'Supply varies, e.g. solar at night.'],
        ['Energy mix', 'The combination of sources a country uses.'],
      ],
      [
        ['A disadvantage of wind power is…', ['High CO₂ emissions', 'Intermittent supply', 'It is non-renewable', 'It causes acid rain'], 1, 'It depends on the wind.'],
        ['Which is non-renewable?', ['Hydroelectric', 'Natural gas', 'Solar', 'Wind'], 1, 'It is a fossil fuel.'],
        ['A country relying on imported oil has low…', ['Emissions', 'Energy security', 'Renewables', 'Efficiency'], 1, 'Supply could be disrupted.'],
      ],
    ),
    '7.3': C(
      [
        'Solid domestic waste includes paper, plastics, glass, metals, food waste and electronic waste.',
        'Waste disposal options include landfill, incineration, composting and recycling. Each has environmental impacts.',
        'The waste hierarchy prioritises: reduce, reuse, recycle, then recover energy, with disposal as the last resort.',
        'A circular economy keeps materials in use, designing out waste. Plastic pollution in oceans is a major global issue.',
      ],
      [
        ['Waste hierarchy', 'Reduce, reuse, recycle, recover, dispose.'],
        ['Landfill problem', 'Releases methane and can leach pollutants.'],
        ['Composting', 'Turning organic waste into fertiliser.'],
        ['Circular economy', 'Keeps materials in use; designs out waste.'],
      ],
      [
        ['The most preferred option in the waste hierarchy is…', ['Recycle', 'Reduce', 'Landfill', 'Incineration'], 1, 'Avoiding waste is best.'],
        ['Landfill sites release which greenhouse gas?', ['Ozone', 'Methane', 'CFCs', 'Nitrogen'], 1, 'From decomposing organic waste.'],
        ['Designing products to be repaired and reused supports…', ['A linear economy', 'A circular economy', 'Landfill', 'Incineration'], 1, 'Materials stay in use.'],
      ],
    ),
    '8.1': C(
      [
        'Human population has grown rapidly, especially since the Industrial Revolution, to over eight billion.',
        'Key measures include birth rate, death rate, total fertility rate and natural increase. Doubling time is about 70 divided by the growth rate in percent.',
        'The demographic transition model describes how birth and death rates change as countries develop, through five stages.',
        'Population pyramids show age and sex structure. Policies can be pro-natalist, encouraging births, or anti-natalist, reducing them.',
      ],
      [
        ['Crude birth rate', 'Births per 1000 people per year.'],
        ['Doubling time', '≈ 70 ÷ growth rate (%)'],
        ['Demographic transition model', 'Shows changing birth and death rates as countries develop.'],
        ['Pro-natalist policy', 'Encourages people to have more children.'],
      ],
      [
        ['A population growing at 2% per year doubles in about…', ['2 years', '35 years', '70 years', '140 years'], 1, '70 ÷ 2 = 35.'],
        ['A pyramid with a wide base shows…', ['An ageing population', 'High birth rates', 'Low birth rates', 'No migration'], 1, 'Many young people.'],
        ['Paying families to have more children is…', ['Anti-natalist', 'Pro-natalist', 'Migration policy', 'Neutral'], 1, 'It encourages births.'],
      ],
    ),
    '8.2': C(
      [
        'Urbanisation is the increasing proportion of people living in towns and cities. Over half the world’s population is urban.',
        'Cities are systems with inputs, like food, water and energy, and outputs, like waste and pollution.',
        'Urban problems include congestion, informal settlements, pollution and the urban heat island effect.',
        'Sustainable urban planning includes public transport, green spaces, energy-efficient buildings and mixed-use development.',
      ],
      [
        ['Urbanisation', 'Increasing proportion of people living in urban areas.'],
        ['Urban heat island', 'Cities are warmer than surrounding areas.'],
        ['Informal settlement', 'Unplanned housing, often lacking services.'],
        ['Sustainable city features', 'Public transport, green space, efficient buildings.'],
      ],
      [
        ['Cities are warmer than the countryside because of…', ['Ozone', 'The urban heat island effect', 'More rainfall', 'Wind'], 1, 'Concrete absorbs heat.'],
        ['Which makes a city more sustainable?', ['Urban sprawl', 'Good public transport', 'More car parks', 'Landfill growth'], 1, 'It reduces emissions and congestion.'],
        ['Roughly what share of the world lives in urban areas today?', ['About 20%', 'Over 50%', 'About 90%', 'Under 10%'], 1, 'More than half, and rising.'],
      ],
    ),
    '8.3': C(
      [
        'Urban air pollution comes from vehicles, industry and energy production. Primary pollutants are emitted directly, like carbon monoxide and particulates.',
        'Secondary pollutants form in the air, like tropospheric ozone and photochemical smog, created when sunlight reacts with nitrogen oxides and hydrocarbons.',
        'Temperature inversions trap pollution near the ground, worsening smog.',
        'Solutions include cleaner vehicles, low-emission zones, public transport and catalytic converters. Acid deposition from sulfur and nitrogen oxides also damages ecosystems.',
      ],
      [
        ['Primary pollutant', 'Emitted directly, e.g. CO, particulates.'],
        ['Photochemical smog', 'Formed when sunlight reacts with NOₓ and hydrocarbons.'],
        ['Temperature inversion', 'Warm air above cool air traps pollution.'],
        ['Tropospheric ozone', 'A harmful secondary pollutant at ground level.'],
      ],
      [
        ['Ground-level ozone is a…', ['Primary pollutant', 'Secondary pollutant', 'Greenhouse gas only', 'Natural gas'], 1, 'It forms from reactions in sunlight.'],
        ['Smog gets worse during a temperature inversion because…', ['Wind increases', 'Pollution is trapped near the ground', 'It rains', 'Ozone rises'], 1, 'Warm air above acts like a lid.'],
        ['Catalytic converters reduce…', ['Noise', 'Harmful exhaust gases', 'Fuel use only', 'Tyre wear'], 1, 'They convert pollutants into less harmful gases.'],
      ],
    ),
    'HL.a': C(
      [
        'Environmental law uses rules and agreements to protect the environment at local, national and international levels.',
        'International agreements include the Montreal Protocol, CITES, the Convention on Biological Diversity and the Paris Agreement.',
        'Laws are only effective if they are enforced; international treaties rely on countries choosing to comply.',
        'Emerging ideas include giving legal rights to nature, such as rivers, and recognising the crime of ecocide.',
      ],
      [
        ['Environmental law', 'Rules and agreements protecting the environment.'],
        ['Enforcement challenge', 'International law relies on voluntary compliance.'],
        ['Rights of nature', 'Legal rights granted to natural entities, e.g. rivers.'],
        ['Ecocide', 'Proposed crime of mass environmental destruction.'],
      ],
      [
        ['New Zealand’s Whanganui River was granted…', ['A dam', 'Legal personhood', 'A fishing ban', 'National park status only'], 1, 'An example of rights of nature.'],
        ['A key weakness of international environmental law is…', ['Too much enforcement', 'Limited enforcement', 'No agreements', 'Global government'], 1, 'Compliance is often voluntary.'],
        ['Which is an international environmental agreement?', ['NATO', 'The Paris Agreement', 'WTO rules', 'The Geneva Convention'], 1, 'It addresses climate change.'],
      ],
    ),
    'HL.b': C(
      [
        'Environmental economics studies how economic activity affects the environment and how economic tools can protect it.',
        'Market failure occurs when environmental costs, like pollution, aren’t included in prices: these are externalities.',
        'Tools include carbon taxes, cap-and-trade permits, subsidies for clean technology, and payments for ecosystem services.',
        'Valuing nature in money can support conservation but is controversial: some argue nature has value beyond price.',
      ],
      [
        ['Externality', 'A cost or benefit to third parties not reflected in price.'],
        ['Carbon tax', 'A tax on greenhouse gas emissions.'],
        ['Cap and trade', 'A limit on emissions with tradable permits.'],
        ['Payments for ecosystem services', 'Paying landowners to protect nature.'],
      ],
      [
        ['A factory polluting a river without paying is an example of…', ['A subsidy', 'A negative externality', 'A public good', 'A tax'], 1, 'Costs fall on third parties.'],
        ['Cap and trade works by…', ['Banning all emissions', 'Setting a limit and allowing permit trading', 'Taxing income', 'Subsidising oil'], 1, 'Firms buy and sell allowances.'],
        ['A criticism of putting a price on nature is that…', ['It is easy', 'Nature may have value beyond money', 'It always works', 'It raises GDP'], 1, 'Intrinsic value is hard to price.'],
      ],
    ),
    'HL.c': C(
      [
        'Environmental ethics asks what our moral duties are towards the environment, other species and future generations.',
        'Perspectives include anthropocentric ethics, valuing nature for human benefit, and biocentric and ecocentric ethics, valuing all life or whole ecosystems.',
        'Ethical theories apply too: consequentialism judges actions by outcomes; deontology by duties and rules; virtue ethics by character.',
        'Questions of environmental justice ask who bears the costs of environmental harm and who benefits.',
      ],
      [
        ['Biocentrism', 'All living things have intrinsic value.'],
        ['Anthropocentrism', 'Nature is valued for its use to humans.'],
        ['Intergenerational equity', 'Fairness to future generations.'],
        ['Environmental justice', 'Fair distribution of environmental costs and benefits.'],
      ],
      [
        ['Believing a forest should be protected because it has value in itself is…', ['Anthropocentric', 'Ecocentric', 'Technocentric', 'Economic'], 1, 'Value independent of humans.'],
        ['Protecting resources for future generations relates to…', ['Intergenerational equity', 'Cap and trade', 'Pollution', 'Urbanisation'], 0, 'Fairness across generations.'],
        ['Judging a policy by its outcomes is…', ['Deontology', 'Consequentialism', 'Virtue ethics', 'Relativism'], 1, 'Outcomes matter most.'],
      ],
    ),
  },
};

export default content;
