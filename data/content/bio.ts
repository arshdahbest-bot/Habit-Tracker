import type { SubjectContentFile } from '../types';
import { C } from './helpers';

const content: SubjectContentFile = {
  units: {
    A: [
      'Theme A, unity and diversity, asks what all living things have in common and how they differ.',
      'It moves from molecules, water and nucleic acids, to cells, organisms and whole ecosystems, ending with evolution, classification and conservation.',
      'Look for the big idea: shared molecules and cell structures point to common ancestry, while variation and natural selection explain diversity.',
    ],
    B: [
      'Theme B, form and function, explores how structure is linked to function at every level.',
      'You will study carbohydrates, lipids and proteins, membranes and organelles, specialised cells, gas exchange and transport systems, and how organisms are adapted to their niches.',
      'In the exam, always explain how a structure helps carry out its function.',
    ],
    C: [
      'Theme C, interaction and interdependence, covers how molecules, cells, organisms and species interact.',
      'It includes enzymes and metabolism, respiration and photosynthesis, signalling in the body, defence against disease, and energy and matter in ecosystems.',
      'Many long-answer questions link these topics together, such as photosynthesis and respiration in the carbon cycle.',
    ],
    D: [
      'Theme D, continuity and change, is about how life is maintained and how it changes over time.',
      'You will study DNA replication, protein synthesis, mutation, cell division, reproduction, inheritance, homeostasis, natural selection and climate change.',
      'Genetics problems and data-based questions are common, so practise them regularly.',
    ],
  },
  chapters: {
    'A1.1': C(
      [
        'Water is essential for life. Its molecules are polar: oxygen is slightly negative and hydrogen slightly positive, so water molecules form hydrogen bonds with each other.',
        'Hydrogen bonding gives water cohesion, which lets water move up xylem, and adhesion to other polar surfaces, which causes capillary action.',
        'Water is an excellent solvent for polar and charged substances, so it is the medium for metabolism and transport. Non-polar substances like fats are hydrophobic.',
        'Water has a high specific heat capacity, so it resists temperature change, which gives stable habitats. Its high latent heat of vaporisation makes sweating an effective way to cool down.',
      ],
      [
        ['Why water is polar', 'Oxygen attracts electrons more strongly, making O slightly negative and H slightly positive.'],
        ['Cohesion', 'Water molecules sticking to each other by hydrogen bonds.'],
        ['Adhesion', 'Water sticking to other polar surfaces, e.g. xylem walls.'],
        ['High specific heat capacity', 'Water resists temperature change, stabilising habitats.'],
      ],
      [
        ['Water rising through xylem depends mainly on…', ['Cohesion and adhesion', 'Active transport', 'Diffusion of glucose', 'Osmosis only'], 0, 'Hydrogen bonds hold the water column together and to xylem walls.'],
        ['Sweating cools the body because water has a high…', ['Density', 'Latent heat of vaporisation', 'Viscosity', 'Surface tension'], 1, 'Evaporating water absorbs a lot of heat.'],
        ['Which substance is hydrophobic?', ['Glucose', 'Sodium chloride', 'Triglyceride (fat)', 'Amino acid'], 2, 'Fats are non-polar and do not dissolve in water.'],
      ],
    ),
    'A1.2': C(
      [
        'Nucleic acids, DNA and RNA, store and express genetic information. Both are polymers of nucleotides, each made of a phosphate, a pentose sugar and a nitrogenous base.',
        'DNA has deoxyribose and the bases adenine, thymine, cytosine and guanine. RNA has ribose and uracil instead of thymine, and is usually single-stranded.',
        'DNA is a double helix of two antiparallel strands, held by hydrogen bonds between complementary bases: A with T, C with G.',
        'Complementary base pairing allows accurate replication and transcription. The sequence of bases is the genetic code, and it is universal across living things.',
      ],
      [
        ['Nucleotide', 'Phosphate + pentose sugar + nitrogenous base.'],
        ['DNA vs RNA sugar', 'DNA: deoxyribose. RNA: ribose.'],
        ['Base pairing in DNA', 'A–T and C–G, held by hydrogen bonds.'],
        ['Antiparallel', 'The two DNA strands run in opposite directions (5′→3′ and 3′→5′).'],
      ],
      [
        ['Which base is found in RNA but not DNA?', ['Adenine', 'Thymine', 'Uracil', 'Guanine'], 2, 'RNA uses uracil in place of thymine.'],
        ['If a DNA sample has 30% adenine, the percentage of guanine is…', ['30%', '20%', '40%', '70%'], 1, 'A = T = 30%, so C + G = 40%, and G = 20%.'],
        ['The two strands of DNA are held together by…', ['Covalent bonds', 'Hydrogen bonds between bases', 'Ionic bonds', 'Peptide bonds'], 1, 'Complementary bases form hydrogen bonds.'],
      ],
    ),
    'A2.1': C(
      [
        'Cells are the basic units of life. Cell theory says all living things are made of cells, the cell is the smallest unit of life, and cells come only from pre-existing cells.',
        'The first cells must have arisen from non-living material. This needed simple organic molecules, self-replicating molecules, and membranes to enclose them.',
        'The Miller-Urey experiment showed amino acids could form from simple gases with energy from sparks. RNA can both store information and act as a catalyst, supporting an RNA world.',
        'All living things share features inherited from the last universal common ancestor, LUCA, such as the genetic code and ATP. At HL, study the endosymbiotic theory and evidence for LUCA in more depth.',
      ],
      [
        ['Cell theory', 'All organisms are made of cells; cells are the smallest unit of life; cells come from pre-existing cells.'],
        ['Miller-Urey experiment', 'Showed amino acids can form from simple gases with electrical energy.'],
        ['RNA world hypothesis', 'RNA may have been the first self-replicating, catalytic molecule.'],
        ['LUCA', 'The last universal common ancestor of all life.'],
      ],
      [
        ['The Miller-Urey experiment produced…', ['DNA', 'Amino acids', 'Whole cells', 'Proteins'], 1, 'Simple organic molecules formed from inorganic gases.'],
        ['Why is RNA thought to have come before DNA?', ['It is double-stranded', 'It can store information and catalyse reactions', 'It contains thymine', 'It is more stable'], 1, 'Ribozymes show RNA can act as an enzyme.'],
        ['Evidence that all life shares a common ancestor includes…', ['The universal genetic code', 'Different cell sizes', 'Different habitats', 'Varied colours'], 0, 'Almost all organisms use the same codons.'],
      ],
    ),
    'A2.2': C(
      [
        'Cell theory has three main ideas: all living things are made of cells, the cell is the smallest unit of life, and cells only come from pre-existing cells.',
        'Prokaryotic cells, like bacteria, have no nucleus. Their DNA is a naked loop in a region called the nucleoid, and they have 70S ribosomes.',
        'Eukaryotic cells have a nucleus and membrane-bound organelles such as mitochondria, the Golgi apparatus and the rough endoplasmic reticulum. Their ribosomes are 80S.',
        'Plant cells also have a cellulose cell wall, chloroplasts and a large vacuole. Animal cells have centrioles and no cell wall. Fungal cells have chitin walls.',
        'Light microscopes let us see living cells; electron microscopes give much higher resolution. Magnification equals image size divided by actual size.',
      ],
      [
        ['Ribosome size in prokaryotes', '70S (eukaryotes have 80S in the cytoplasm).'],
        ['Nucleoid', 'Region in a prokaryote where the circular DNA is found.'],
        ['Magnification formula', 'Magnification = image size ÷ actual size.'],
        ['Plant cell features not in animal cells', 'Cellulose cell wall, chloroplasts, large permanent vacuole.'],
      ],
      [
        ['Which organelle is the site of aerobic respiration?', ['Ribosome', 'Mitochondrion', 'Golgi apparatus', 'Lysosome'], 1, 'Mitochondria carry out the Krebs cycle and oxidative phosphorylation.'],
        ['Prokaryotic DNA is found in the…', ['Nucleus', 'Nucleolus', 'Nucleoid', 'Vacuole'], 2, 'Prokaryotes have no nucleus.'],
        ['An image is 50 mm long and the cell is 25 μm. Magnification is…', ['×2', '×200', '×2000', '×20 000'], 2, '50 mm = 50 000 μm; 50 000 ÷ 25 = 2000.'],
      ],
    ),
    'A2.3': C(
      [
        'Viruses are not cells. They consist of genetic material, DNA or RNA, inside a protein coat called a capsid, and some have a lipid envelope.',
        'They have no metabolism of their own and can only reproduce inside a host cell, using its enzymes and ribosomes.',
        'In the lytic cycle, a virus replicates and bursts the host cell. In the lysogenic cycle, viral DNA joins the host’s DNA and is copied with it until activated.',
        'Viruses probably have several origins and evolve rapidly, which is why new influenza vaccines are needed each year and HIV is hard to treat.',
      ],
      [
        ['Capsid', 'The protein coat of a virus.'],
        ['Lytic cycle', 'The virus replicates and bursts the host cell.'],
        ['Lysogenic cycle', 'Viral DNA integrates into the host genome and lies dormant.'],
        ['Why viruses evolve quickly', 'High mutation rates and very short generation times.'],
      ],
      [
        ['Viruses are not considered cells because they…', ['Contain DNA', 'Have no metabolism and cannot reproduce alone', 'Have a protein coat', 'Are small'], 1, 'They need a host cell to reproduce.'],
        ['In which cycle is the host cell destroyed quickly?', ['Lysogenic', 'Lytic', 'Calvin', 'Krebs'], 1, 'Lysis bursts the cell to release new viruses.'],
        ['A new flu vaccine is needed most years because…', ['Antibodies never form', 'The virus evolves rapidly', 'Viruses are cells', 'Vaccines stop working'], 1, 'Mutations change the viral antigens.'],
      ],
    ),
    'A3.1': C(
      [
        'A species is often defined as a group of organisms that can interbreed to produce fertile offspring, but this definition doesn’t work for asexual organisms or fossils.',
        'Variation exists within species. Chromosome number is a species characteristic: humans have 46, chimpanzees 48.',
        'Karyotyping arranges chromosomes by size and shape to detect abnormalities. The genome is all the genetic information of an organism, and whole genome sequencing is now fast and cheap.',
        'Dichotomous keys identify organisms using a series of paired choices. DNA barcoding identifies species from short standard DNA sequences.',
      ],
      [
        ['Biological species concept', 'Organisms that can interbreed to produce fertile offspring.'],
        ['Karyotype', 'An image of an organism’s chromosomes arranged in pairs by size.'],
        ['Genome', 'All the genetic information of an organism.'],
        ['Dichotomous key', 'An identification key using a series of two-way choices.'],
      ],
      [
        ['A horse and a donkey produce an infertile mule. This shows…', ['They are the same species', 'They are different species', 'Mules are a species', 'Hybrids are always fertile'], 1, 'Offspring must be fertile for the same species.'],
        ['Karyotyping can be used to detect…', ['Blood type', 'Chromosome abnormalities like trisomy 21', 'Enzyme activity', 'Protein structure'], 1, 'It shows chromosome number and structure.'],
        ['A limitation of the biological species concept is that it doesn’t apply to…', ['Mammals', 'Asexual organisms', 'Birds', 'Insects'], 1, 'Asexual organisms don’t interbreed.'],
      ],
    ),
    'A3.2': C(
      [
        'Classification organises organisms into a hierarchy: domain, kingdom, phylum, class, order, family, genus and species.',
        'The three domains are Bacteria, Archaea and Eukarya, based on differences such as ribosomal RNA sequences.',
        'Cladistics groups organisms into clades: an ancestor and all its descendants. A cladogram shows shared derived characteristics and likely evolutionary relationships.',
        'Molecular evidence, differences in DNA or protein sequences, can be used as a molecular clock. Cladograms sometimes lead to reclassification, like the figwort family.',
      ],
      [
        ['Three domains', 'Bacteria, Archaea, Eukarya.'],
        ['Clade', 'A group containing a common ancestor and all its descendants.'],
        ['Cladogram node', 'A branching point representing a common ancestor.'],
        ['Molecular clock', 'Using the number of sequence differences to estimate time since divergence.'],
      ],
      [
        ['Which is the correct order from broadest to narrowest?', ['Kingdom, phylum, class, order', 'Phylum, kingdom, order, class', 'Class, order, phylum, kingdom', 'Order, family, class, genus'], 0, 'Domain, kingdom, phylum, class, order, family, genus, species.'],
        ['A clade must include…', ['Only living species', 'A common ancestor and all its descendants', 'Organisms that look similar', 'Only animals'], 1, 'Clades are monophyletic groups.'],
        ['Fewer differences in a protein sequence between two species suggests…', ['A more distant relationship', 'A more recent common ancestor', 'No relationship', 'Convergent evolution'], 1, 'Fewer mutations have accumulated since they diverged.'],
      ],
    ),
    'A4.1': C(
      [
        'Evolution is the change in the heritable characteristics of a population over time.',
        'Evidence comes from base sequences and amino acid sequences, selective breeding, homologous structures such as the pentadactyl limb, fossils and vestigial structures.',
        'Convergent evolution produces analogous structures, like the wings of birds and insects, with similar functions but different origins.',
        'Speciation happens when populations become reproductively isolated and diverge. Isolation can be geographical, allopatric, or behavioural or temporal, sympatric. At HL, polyploidy can cause rapid speciation in plants.',
      ],
      [
        ['Evolution', 'Change in heritable characteristics of a population over time.'],
        ['Homologous structures', 'Similar structure, different functions; evidence of common ancestry, e.g. pentadactyl limb.'],
        ['Analogous structures', 'Similar function, different origin; result of convergent evolution.'],
        ['Allopatric speciation', 'Speciation after geographical separation.'],
      ],
      [
        ['The pentadactyl limb in bats, whales and humans is evidence of…', ['Convergent evolution', 'Common ancestry', 'Speciation', 'Extinction'], 1, 'Homologous structures come from a shared ancestor.'],
        ['Populations separated by a mountain range may undergo…', ['Sympatric speciation', 'Allopatric speciation', 'Hybridisation', 'Polyploidy'], 1, 'Geographical isolation leads to allopatric speciation.'],
        ['Bird and insect wings are…', ['Homologous', 'Analogous', 'Vestigial', 'Identical'], 1, 'Similar function, different evolutionary origin.'],
      ],
    ),
    'A4.2': C(
      [
        'Biodiversity exists at three levels: ecosystem diversity, species diversity and genetic diversity.',
        'Human activities are causing a biodiversity crisis: habitat loss, overexploitation, pollution, invasive species and climate change.',
        'Biodiversity can be measured with the Simpson reciprocal index, which considers both richness and evenness of species.',
        'Conservation can be in situ, protecting habitats in nature reserves, or ex situ, like zoos, botanic gardens and seed banks. The EDGE of Existence programme prioritises evolutionarily distinct, endangered species.',
      ],
      [
        ['Three levels of biodiversity', 'Ecosystem, species and genetic diversity.'],
        ['In situ conservation', 'Protecting species in their natural habitat.'],
        ['Ex situ conservation', 'Conservation outside the natural habitat, e.g. seed banks, zoos.'],
        ['Simpson’s reciprocal index', 'A measure of diversity that combines species richness and evenness.'],
      ],
      [
        ['A seed bank is an example of…', ['In situ conservation', 'Ex situ conservation', 'Habitat restoration', 'Rewilding'], 1, 'Seeds are stored away from the natural habitat.'],
        ['Which is a major cause of biodiversity loss?', ['Nature reserves', 'Habitat destruction', 'Seed banks', 'Captive breeding'], 1, 'Habitat loss is the leading driver.'],
        ['A higher Simpson reciprocal index means…', ['Lower diversity', 'Higher diversity', 'Fewer individuals', 'One dominant species'], 1, 'Higher values show greater richness and evenness.'],
      ],
    ),
    'B1.1': C(
      [
        'Carbohydrates contain carbon, hydrogen and oxygen. Monosaccharides like glucose join by condensation reactions, forming glycosidic bonds, to make disaccharides and polysaccharides.',
        'Starch and glycogen are energy stores. They are compact, insoluble and branched, so glucose can be released quickly. Cellulose, with beta-glucose, forms strong fibres in plant cell walls.',
        'Lipids include triglycerides, made from glycerol and three fatty acids joined by ester bonds. Saturated fatty acids have no double bonds; unsaturated ones do, which makes them liquid at room temperature.',
        'Fats store about twice as much energy per gram as carbohydrates and also insulate. Phospholipids form bilayers because they have hydrophilic heads and hydrophobic tails. Steroids like testosterone are also lipids.',
      ],
      [
        ['Condensation reaction', 'Joins monomers and releases water.'],
        ['Glycosidic bond', 'The bond between two monosaccharides.'],
        ['Triglyceride', 'Glycerol + 3 fatty acids joined by ester bonds.'],
        ['Unsaturated fatty acid', 'Has at least one C=C double bond; tends to be liquid (oil).'],
      ],
      [
        ['Cellulose is made of…', ['Alpha-glucose', 'Beta-glucose', 'Fructose', 'Amino acids'], 1, 'Beta-glucose chains form straight, strong fibres.'],
        ['Why are lipids good for long-term energy storage?', ['They dissolve in water', 'They release about twice as much energy per gram', 'They are made of glucose', 'They are proteins'], 1, 'Lipids are more energy-dense than carbohydrates.'],
        ['Breaking a disaccharide into monosaccharides is…', ['Condensation', 'Hydrolysis', 'Denaturation', 'Oxidation'], 1, 'Hydrolysis uses water to break bonds.'],
      ],
    ),
    'B1.2': C(
      [
        'Proteins are polymers of amino acids joined by peptide bonds in condensation reactions. There are 20 amino acids in living things, differing in their R groups.',
        'The primary structure is the amino acid sequence. Secondary structure is alpha helices and beta pleated sheets, held by hydrogen bonds.',
        'Tertiary structure is the 3D folding due to interactions between R groups, including hydrogen, ionic and disulfide bonds and hydrophobic interactions. Quaternary structure involves more than one polypeptide, as in haemoglobin.',
        'Structure determines function. High temperatures or extreme pH can denature a protein, changing its shape so it stops working.',
      ],
      [
        ['Peptide bond', 'The bond between two amino acids, formed by condensation.'],
        ['Primary structure', 'The sequence of amino acids.'],
        ['Denaturation', 'Loss of 3D shape due to heat or pH, so function is lost.'],
        ['Quaternary structure', 'More than one polypeptide chain, e.g. haemoglobin.'],
      ],
      [
        ['Alpha helices are held together mainly by…', ['Peptide bonds', 'Hydrogen bonds', 'Disulfide bonds', 'Ionic bonds'], 1, 'Secondary structure is stabilised by hydrogen bonds.'],
        ['What varies between different amino acids?', ['The amine group', 'The carboxyl group', 'The R group', 'The peptide bond'], 2, 'The R group gives each amino acid its properties.'],
        ['Cooking an egg white turns it solid because the proteins are…', ['Hydrolysed', 'Denatured', 'Synthesised', 'Replicated'], 1, 'Heat breaks the bonds holding the 3D shape.'],
      ],
    ),
    'B2.1': C(
      [
        'Cell membranes are phospholipid bilayers with proteins, described by the fluid mosaic model. Cholesterol regulates fluidity in animal cells.',
        'Simple diffusion moves small or non-polar molecules from high to low concentration. Facilitated diffusion uses channel or carrier proteins.',
        'Osmosis is the net movement of water across a partially permeable membrane, often through aquaporins, towards a higher solute concentration.',
        'Active transport uses ATP and pump proteins to move substances against a concentration gradient, like the sodium-potassium pump. Endocytosis and exocytosis move large substances in vesicles.',
      ],
      [
        ['Fluid mosaic model', 'A fluid phospholipid bilayer with proteins scattered through it.'],
        ['Facilitated diffusion', 'Passive movement through channel or carrier proteins.'],
        ['Osmosis', 'Net movement of water across a partially permeable membrane to a higher solute concentration.'],
        ['Active transport', 'Movement against a concentration gradient using ATP and pumps.'],
      ],
      [
        ['Which requires ATP?', ['Osmosis', 'Simple diffusion', 'Facilitated diffusion', 'Active transport'], 3, 'It moves substances against the gradient.'],
        ['Oxygen enters cells by…', ['Active transport', 'Simple diffusion', 'Endocytosis', 'Exocytosis'], 1, 'It is small and non-polar.'],
        ['Aquaporins are channels for…', ['Glucose', 'Water', 'Sodium ions', 'Proteins'], 1, 'They speed up osmosis.'],
      ],
    ),
    'B2.2': C(
      [
        'Eukaryotic cells are compartmentalised: organelles separate incompatible processes and concentrate enzymes and substrates.',
        'The nucleus stores DNA and is surrounded by a double membrane with pores. Ribosomes make proteins; those on rough ER make proteins for secretion or membranes.',
        'The Golgi apparatus modifies and packages proteins into vesicles. Lysosomes contain digestive enzymes kept separate from the cytoplasm.',
        'Mitochondria and chloroplasts have double membranes, their own circular DNA and 70S ribosomes, which supports the endosymbiotic theory.',
      ],
      [
        ['Why compartmentalisation helps', 'Separates processes and concentrates enzymes and substrates.'],
        ['Rough ER', 'Has ribosomes; makes proteins for secretion or membranes.'],
        ['Golgi apparatus', 'Modifies, sorts and packages proteins into vesicles.'],
        ['Endosymbiotic theory evidence', 'Mitochondria and chloroplasts have double membranes, own DNA and 70S ribosomes.'],
      ],
      [
        ['Which organelle packages proteins into vesicles?', ['Nucleus', 'Golgi apparatus', 'Lysosome', 'Mitochondrion'], 1, 'The Golgi processes and packages proteins.'],
        ['Why are digestive enzymes kept in lysosomes?', ['To make them work faster', 'To protect the rest of the cell', 'To make ATP', 'To store DNA'], 1, 'They would digest the cell’s own components.'],
        ['Mitochondria have 70S ribosomes. This supports…', ['Cell theory', 'The endosymbiotic theory', 'Spontaneous generation', 'The fluid mosaic model'], 1, 'They resemble prokaryotes that were engulfed.'],
      ],
    ),
    'B2.3': C(
      [
        'In a multicellular organism, cells become specialised by expressing different genes, a process called differentiation.',
        'Stem cells can divide and differentiate. Totipotent cells can become any cell, pluripotent cells almost any, and multipotent cells a limited range.',
        'Cell size is limited by the surface area to volume ratio. As a cell grows, volume rises faster than surface area, so exchange becomes too slow.',
        'Specialised cells show adaptations: red blood cells have no nucleus and a biconcave shape; sperm cells have a flagellum and many mitochondria; alveolar cells are very thin.',
      ],
      [
        ['Differentiation', 'Cells becoming specialised by expressing some genes and not others.'],
        ['Stem cell', 'An unspecialised cell that can divide and differentiate.'],
        ['Why cells are small', 'A high surface area to volume ratio allows efficient exchange.'],
        ['Totipotent vs pluripotent', 'Totipotent: any cell type including placenta; pluripotent: almost any body cell.'],
      ],
      [
        ['As a cell gets bigger, its surface area to volume ratio…', ['Increases', 'Decreases', 'Stays the same', 'Doubles'], 1, 'Volume increases faster than surface area.'],
        ['Cells from an early embryo that can become almost any cell type are…', ['Multipotent', 'Pluripotent', 'Unipotent', 'Differentiated'], 1, 'Embryonic stem cells are pluripotent.'],
        ['Red blood cells lack a nucleus so that…', ['They divide faster', 'They can carry more haemoglobin', 'They live longer', 'They make proteins'], 1, 'More space for oxygen-carrying haemoglobin.'],
      ],
    ),
    'B3.1': C(
      [
        'Gas exchange surfaces are thin, moist, permeable and have a large surface area. A steep concentration gradient is maintained by ventilation and blood flow.',
        'In human lungs, millions of alveoli give a huge surface area. Type 1 pneumocytes are very thin; type 2 secrete surfactant that stops alveoli sticking together.',
        'Ventilation changes the volume and pressure of the thorax: in inhalation, the diaphragm and external intercostal muscles contract. Lung volumes are measured with a spirometer.',
        'In plants, gas exchange happens through stomata in leaves. Transpiration is the loss of water vapour, and it increases with temperature and wind. Haemoglobin’s oxygen dissociation curve is HL content.',
      ],
      [
        ['Features of gas exchange surfaces', 'Large surface area, thin, moist, steep concentration gradient.'],
        ['Surfactant', 'Secreted by type 2 pneumocytes; reduces surface tension in alveoli.'],
        ['Inhalation', 'Diaphragm and external intercostals contract; volume up, pressure down.'],
        ['Stomata', 'Pores in leaves for gas exchange, controlled by guard cells.'],
      ],
      [
        ['During inhalation, pressure in the lungs…', ['Rises above atmospheric', 'Falls below atmospheric', 'Stays equal', 'Becomes zero'], 1, 'Increased volume lowers pressure, so air flows in.'],
        ['Type 1 pneumocytes are adapted by being…', ['Very thick', 'Extremely thin', 'Full of mitochondria', 'Covered in cilia'], 1, 'A short diffusion distance speeds gas exchange.'],
        ['Transpiration rate increases when…', ['Humidity rises', 'Temperature rises', 'Stomata close', 'Light falls'], 1, 'Warmer air speeds evaporation.'],
      ],
    ),
    'B3.2': C(
      [
        'Large organisms need transport systems because diffusion is too slow over long distances.',
        'Arteries carry blood away from the heart at high pressure, so they have thick muscular and elastic walls. Veins have thinner walls, a wide lumen and valves. Capillaries have walls one cell thick for exchange.',
        'The heart pumps blood in a double circulation. Coronary arteries supply heart muscle; blockage causes coronary heart disease.',
        'In plants, xylem carries water and minerals upward, driven by transpiration pull and cohesion. Phloem translocates sugars from sources to sinks.',
      ],
      [
        ['Artery structure', 'Thick muscular, elastic walls to withstand high pressure.'],
        ['Vein structure', 'Thin walls, wide lumen, valves to prevent backflow.'],
        ['Capillary', 'Wall one cell thick for efficient exchange.'],
        ['Xylem vs phloem', 'Xylem: water up by transpiration pull. Phloem: sugars from source to sink.'],
      ],
      [
        ['Which vessel has valves?', ['Artery', 'Vein', 'Capillary', 'Aorta only'], 1, 'Valves stop backflow at low pressure.'],
        ['Water moves up xylem mainly by…', ['Active transport', 'Transpiration pull and cohesion', 'Gravity', 'Phloem pressure'], 1, 'Evaporation from leaves pulls the water column up.'],
        ['Blockage of which vessels causes a heart attack?', ['Pulmonary veins', 'Coronary arteries', 'Vena cava', 'Capillaries in the lungs'], 1, 'They supply oxygen to heart muscle.'],
      ],
    ),
    'B3.3': C(
      [
        'Movement needs muscles, which can only contract, so they work in antagonistic pairs, like the biceps and triceps.',
        'Skeletal muscle is made of fibres containing myofibrils divided into sarcomeres. Contraction follows the sliding filament model: actin and myosin filaments slide past each other.',
        'When calcium ions are released from the sarcoplasmic reticulum, binding sites on actin are exposed. Myosin heads bind, pull, and use ATP to detach and re-cock.',
        'Titin acts as a spring in sarcomeres. Synovial joints allow movement, and animals move for reasons such as finding food, escaping predators and migrating.',
      ],
      [
        ['Sarcomere', 'The contractile unit of a myofibril, between two Z lines.'],
        ['Sliding filament model', 'Actin filaments slide over myosin, shortening the sarcomere.'],
        ['Role of calcium ions', 'Expose binding sites on actin so myosin can attach.'],
        ['Role of ATP in contraction', 'Detaches myosin heads and re-cocks them for the next stroke.'],
      ],
      [
        ['During contraction, sarcomeres…', ['Lengthen', 'Shorten', 'Stay the same', 'Divide'], 1, 'Filaments slide, bringing Z lines closer.'],
        ['Antagonistic muscles are needed because muscles…', ['Only contract', 'Only relax', 'Are attached to one bone', 'Have no ATP'], 0, 'A second muscle pulls the joint back.'],
        ['What releases calcium ions in muscle fibres?', ['Mitochondria', 'Sarcoplasmic reticulum', 'Nucleus', 'Golgi'], 1, 'It stores Ca²⁺ and releases it after a nerve impulse.'],
      ],
    ),
    'B4.1': C(
      [
        'Adaptations are features that make an organism suited to its habitat. They result from natural selection.',
        'Abiotic factors, such as temperature, water, light and soil, limit where species can live. Each species has a range of tolerance.',
        'For example, marram grass has rolled leaves and sunken stomata to reduce water loss on sand dunes, and mangroves have adaptations for salty, waterlogged soils.',
        'Biomes, like tropical rainforest, desert, tundra and grassland, are determined by temperature and rainfall patterns, and their organisms show matching adaptations.',
      ],
      [
        ['Adaptation', 'A feature that increases survival and reproduction in a habitat.'],
        ['Range of tolerance', 'The range of an abiotic factor a species can survive in.'],
        ['Biome', 'A large community shaped by climate, e.g. desert, tundra.'],
        ['Xerophyte', 'A plant adapted to dry conditions, e.g. marram grass, cacti.'],
      ],
      [
        ['Sunken stomata in marram grass help to…', ['Increase photosynthesis', 'Reduce water loss', 'Absorb salt', 'Attract pollinators'], 1, 'Humid air trapped around stomata reduces transpiration.'],
        ['Biome distribution is mainly determined by…', ['Temperature and rainfall', 'Soil colour', 'Predators', 'Day length only'], 0, 'Climate decides which communities can form.'],
        ['Which is an abiotic factor?', ['Competition', 'Temperature', 'Predation', 'Disease'], 1, 'Abiotic means non-living.'],
      ],
    ),
    'B4.2': C(
      [
        'An ecological niche is the role of a species in its ecosystem: where it lives, how it feeds and how it interacts with others.',
        'Organisms can be obligate aerobes, obligate anaerobes or facultative anaerobes. Nutrition can be autotrophic, making food from inorganic substances, or heterotrophic.',
        'Heterotrophs include holozoic animals, saprotrophs that digest externally, and parasites. Mixotrophs, like Euglena, can do both.',
        'The competitive exclusion principle says two species cannot share exactly the same niche. The fundamental niche is what a species could occupy; the realised niche is what it actually does, because of competition.',
      ],
      [
        ['Ecological niche', 'The role of a species: habitat, feeding and interactions.'],
        ['Fundamental vs realised niche', 'Potential range vs actual range after competition.'],
        ['Competitive exclusion', 'Two species can’t occupy the same niche indefinitely.'],
        ['Saprotroph', 'Feeds by secreting enzymes onto dead matter and absorbing the products.'],
      ],
      [
        ['A fungus digesting dead leaves is a…', ['Autotroph', 'Saprotroph', 'Parasite', 'Mixotroph'], 1, 'It digests dead matter externally.'],
        ['The realised niche is usually smaller than the fundamental niche because of…', ['Photosynthesis', 'Competition', 'Mutation', 'Migration'], 1, 'Competitors restrict where a species can live.'],
        ['An organism that can respire with or without oxygen is…', ['An obligate aerobe', 'A facultative anaerobe', 'An obligate anaerobe', 'An autotroph'], 1, 'It can switch between respiration types.'],
      ],
    ),
    'C1.1': C(
      [
        'Enzymes are biological catalysts: proteins that speed up reactions by lowering the activation energy, without being used up.',
        'The substrate binds to the active site. The induced fit model says the active site changes shape slightly to fit the substrate.',
        'Rate depends on temperature, pH and substrate concentration. Too much heat or the wrong pH denatures the enzyme, changing the active site.',
        'Metabolism is all the reactions in an organism: anabolic reactions build molecules, catabolic reactions break them down. At HL, competitive and non-competitive inhibition and end-product inhibition control metabolic pathways.',
      ],
      [
        ['Enzyme', 'A protein catalyst that lowers activation energy.'],
        ['Induced fit model', 'The active site changes shape slightly as the substrate binds.'],
        ['Denaturation', 'Change in active site shape, e.g. by high temperature or extreme pH.'],
        ['Competitive inhibitor', 'Binds to the active site, competing with the substrate.'],
      ],
      [
        ['Enzymes speed up reactions by…', ['Raising temperature', 'Lowering activation energy', 'Adding energy', 'Being used up'], 1, 'They provide an alternative pathway with lower activation energy.'],
        ['Above the optimum temperature, rate falls because the enzyme…', ['Runs out', 'Denatures', 'Becomes a substrate', 'Is inhibited competitively'], 1, 'Heat disrupts the bonds holding the active site shape.'],
        ['Increasing substrate concentration can overcome…', ['Denaturation', 'Competitive inhibition', 'Non-competitive inhibition', 'Loss of the active site'], 1, 'More substrate out-competes the inhibitor.'],
      ],
    ),
    'C1.2': C(
      [
        'Cell respiration releases energy from organic compounds to make ATP, which cells use for active transport, movement and synthesis.',
        'Aerobic respiration needs oxygen and produces carbon dioxide, water and a large amount of ATP. Anaerobic respiration gives a small ATP yield quickly.',
        'In humans, anaerobic respiration makes lactate. In yeast, it makes ethanol and carbon dioxide, used in baking and brewing.',
        'At HL, respiration has four stages: glycolysis in the cytoplasm, the link reaction and Krebs cycle in the matrix, and oxidative phosphorylation using an electron transport chain and chemiosmosis on the inner membrane.',
      ],
      [
        ['ATP', 'The molecule that releases energy for cell processes.'],
        ['Aerobic respiration products', 'Carbon dioxide, water and a large amount of ATP.'],
        ['Anaerobic respiration in humans', 'Glucose → lactate, small ATP yield.'],
        ['Anaerobic respiration in yeast', 'Glucose → ethanol + carbon dioxide.'],
      ],
      [
        ['Which gives the most ATP per glucose?', ['Anaerobic in yeast', 'Anaerobic in humans', 'Aerobic respiration', 'Fermentation'], 2, 'Aerobic respiration completely oxidises glucose.'],
        ['Bread rises because yeast produces…', ['Oxygen', 'Carbon dioxide', 'Lactate', 'Water'], 1, 'CO₂ from anaerobic respiration forms bubbles.'],
        ['Glycolysis happens in the…', ['Mitochondrial matrix', 'Cytoplasm', 'Inner membrane', 'Nucleus'], 1, 'It is the first stage and doesn’t need mitochondria.'],
      ],
    ),
    'C1.3': C(
      [
        'Photosynthesis converts light energy into chemical energy: carbon dioxide and water make glucose and oxygen.',
        'Chlorophyll absorbs mainly red and blue light and reflects green. Pigments can be separated by chromatography, and an action spectrum shows which wavelengths drive photosynthesis.',
        'The rate is limited by light intensity, carbon dioxide concentration and temperature. Whichever factor is in shortest supply limits the rate.',
        'At HL, study the light-dependent reactions on thylakoids, making ATP and reduced NADP by photolysis and chemiosmosis, and the Calvin cycle in the stroma, which fixes CO₂ using Rubisco.',
      ],
      [
        ['Photosynthesis equation', 'Carbon dioxide + water → glucose + oxygen (light energy, chlorophyll).'],
        ['Absorption spectrum of chlorophyll', 'Absorbs red and blue light, reflects green.'],
        ['Limiting factors', 'Light intensity, CO₂ concentration, temperature.'],
        ['Source of oxygen released', 'Photolysis (splitting) of water.'],
      ],
      [
        ['The oxygen released in photosynthesis comes from…', ['Carbon dioxide', 'Water', 'Glucose', 'Chlorophyll'], 1, 'Photolysis splits water.'],
        ['Leaves look green because chlorophyll…', ['Absorbs green light', 'Reflects green light', 'Absorbs all light', 'Emits green light'], 1, 'Green light is reflected, not absorbed.'],
        ['On a cold, bright day the likely limiting factor is…', ['Light intensity', 'Temperature', 'Water', 'Oxygen'], 1, 'Low temperature slows the enzymes.'],
      ],
    ),
    'C2.1': C(
      [
        'Cells communicate using chemical signals called ligands, which bind to specific receptors.',
        'Signals include hormones, neurotransmitters, cytokines and calcium ions. Quorum sensing in bacteria uses signals to coordinate behaviour.',
        'Receptors can be transmembrane, for hydrophilic signals like insulin, or intracellular, for hydrophobic signals like steroid hormones that pass through membranes.',
        'Binding starts a signal transduction pathway, for example via G protein-coupled receptors and second messengers, which amplifies the signal and changes cell activity.',
      ],
      [
        ['Ligand', 'A signalling molecule that binds to a receptor.'],
        ['Transmembrane receptor', 'Receptor in the membrane for hydrophilic signals.'],
        ['Intracellular receptor', 'Receptor inside the cell for hydrophobic signals like steroids.'],
        ['Signal transduction', 'The chain of events inside a cell after a signal binds.'],
      ],
      [
        ['Steroid hormones bind to receptors…', ['On the membrane', 'Inside the cell', 'On ribosomes', 'In the blood'], 1, 'They are lipid-soluble and cross the membrane.'],
        ['Quorum sensing is used by…', ['Plants', 'Bacteria', 'Viruses', 'Red blood cells'], 1, 'Bacteria sense population density.'],
        ['Insulin binds to…', ['An intracellular receptor', 'A transmembrane receptor', 'DNA', 'Haemoglobin'], 1, 'It is a hydrophilic protein hormone.'],
      ],
    ),
    'C2.2': C(
      [
        'Neurons carry electrical impulses. A resting neuron has a resting potential of about minus 70 millivolts, maintained by the sodium-potassium pump.',
        'An action potential starts when the membrane depolarises past the threshold: sodium channels open and sodium ions rush in. Then potassium ions leave, repolarising the membrane.',
        'Myelination allows saltatory conduction, where impulses jump between nodes of Ranvier, making transmission much faster.',
        'At a synapse, calcium ions trigger release of neurotransmitter, such as acetylcholine, which diffuses across and binds to receptors on the next neuron. It is then broken down or reabsorbed.',
      ],
      [
        ['Resting potential', 'About −70 mV, maintained by the Na⁺/K⁺ pump.'],
        ['Depolarisation', 'Na⁺ channels open and Na⁺ enters the axon.'],
        ['Saltatory conduction', 'Impulse jumps between nodes of Ranvier in myelinated axons.'],
        ['Neurotransmitter', 'Chemical released at a synapse, e.g. acetylcholine.'],
      ],
      [
        ['Depolarisation is caused by…', ['K⁺ leaving', 'Na⁺ entering', 'Ca²⁺ leaving', 'Cl⁻ entering'], 1, 'Sodium influx makes the inside positive.'],
        ['Myelin speeds up conduction because…', ['It adds more Na⁺', 'Impulses jump between nodes', 'It releases neurotransmitters', 'It shortens the axon'], 1, 'Saltatory conduction skips myelinated sections.'],
        ['What triggers neurotransmitter release at a synapse?', ['K⁺ influx', 'Ca²⁺ influx', 'Glucose', 'ATP breakdown only'], 1, 'Calcium ions cause vesicles to fuse with the membrane.'],
      ],
    ),
    'C3.1': C(
      [
        'Body systems must be integrated to work together. The nervous system gives fast, short-lived responses; the endocrine system gives slower, longer-lasting ones.',
        'The brain integrates information. The cerebellum coordinates movement, the hypothalamus links the nervous and endocrine systems, and the pituitary releases many hormones.',
        'Reflexes are rapid, involuntary responses. A reflex arc runs from receptor, to sensory neuron, relay neuron in the spinal cord, motor neuron and effector.',
        'Plants also integrate responses using hormones. Auxin causes phototropism by making cells on the shaded side elongate, so the shoot bends towards light.',
      ],
      [
        ['Nervous vs endocrine', 'Nervous: fast, short-lived. Endocrine: slower, longer-lasting.'],
        ['Reflex arc', 'Receptor → sensory neuron → relay neuron → motor neuron → effector.'],
        ['Hypothalamus', 'Links the nervous and endocrine systems via the pituitary.'],
        ['Phototropism', 'Growth towards light, caused by auxin on the shaded side.'],
      ],
      [
        ['Which structure coordinates balance and movement?', ['Cerebellum', 'Medulla', 'Hypothalamus', 'Pituitary'], 0, 'The cerebellum fine-tunes movement.'],
        ['In phototropism, auxin collects on the…', ['Lit side', 'Shaded side', 'Roots', 'Leaves'], 1, 'Cells on the shaded side elongate, bending the shoot to the light.'],
        ['Pulling your hand from a hot object is…', ['A conscious decision', 'A reflex', 'A hormonal response', 'Learned behaviour'], 1, 'It is rapid and involuntary.'],
      ],
    ),
    'C3.2': C(
      [
        'Pathogens include bacteria, viruses, fungi and protists. The skin and mucous membranes are the first line of defence.',
        'If pathogens get in, blood clots seal wounds, and phagocytes engulf pathogens as part of innate, non-specific immunity.',
        'Adaptive immunity is specific. Lymphocytes recognise antigens; activated B cells multiply and become plasma cells that make antibodies, and memory cells give long-term immunity.',
        'Vaccines expose the body to harmless antigens so memory cells form. Herd immunity protects those who can’t be vaccinated. Antibiotics kill bacteria but not viruses, and misuse causes resistance.',
      ],
      [
        ['Antigen', 'A molecule that triggers an immune response.'],
        ['Antibody', 'A protein made by plasma cells that binds a specific antigen.'],
        ['Memory cells', 'Long-lived lymphocytes giving faster response on reinfection.'],
        ['Why antibiotics don’t work on viruses', 'Viruses have no bacterial structures or metabolism to target.'],
      ],
      [
        ['Antibodies are made by…', ['Phagocytes', 'Plasma cells', 'Red blood cells', 'Platelets'], 1, 'Plasma cells come from activated B lymphocytes.'],
        ['Vaccination works by producing…', ['Antibiotics', 'Memory cells', 'Pathogens', 'Blood clots'], 1, 'Memory cells respond quickly on real infection.'],
        ['Why shouldn’t antibiotics be used for flu?', ['Flu is a bacterium', 'Flu is a virus', 'Antibiotics cause flu', 'They only work on fungi'], 1, 'Antibiotics target bacteria only.'],
      ],
    ),
    'C4.1': C(
      [
        'A population is all individuals of one species in an area; a community is all the populations living and interacting there.',
        'Population size can be estimated by random quadrat sampling for plants, or capture-mark-release-recapture for mobile animals, using the Lincoln index.',
        'Populations often show sigmoid growth: exponential growth, then slowing as limiting factors like food and space take effect, until the carrying capacity is reached.',
        'Interactions between species include competition, predation, herbivory, parasitism and mutualism. Predator and prey numbers often rise and fall in linked cycles.',
      ],
      [
        ['Lincoln index', 'Population = (number marked first × number caught second) ÷ number marked in second catch.'],
        ['Carrying capacity', 'The maximum population an environment can sustain.'],
        ['Mutualism', 'Both species benefit, e.g. coral and zooxanthellae.'],
        ['Community', 'All the populations of different species in an area.'],
      ],
      [
        ['30 snails are marked; later 40 are caught, 10 marked. Estimated population?', ['70', '120', '300', '1200'], 1, '(30 × 40) ÷ 10 = 120.'],
        ['The plateau of a sigmoid curve is the…', ['Exponential phase', 'Carrying capacity', 'Lag phase', 'Extinction point'], 1, 'Births and deaths balance at carrying capacity.'],
        ['A tapeworm living in a human is an example of…', ['Mutualism', 'Parasitism', 'Competition', 'Predation'], 1, 'The parasite benefits at the host’s expense.'],
      ],
    ),
    'C4.2': C(
      [
        'Ecosystems need a continuous input of energy, usually sunlight, but chemical elements are recycled.',
        'Energy passes along food chains from producers to consumers. Only about 10 percent passes to the next trophic level; the rest is lost mainly as heat from respiration.',
        'This limits the length of food chains and is shown by pyramids of energy.',
        'Carbon is recycled by photosynthesis, respiration, feeding, decomposition and combustion. Fossil fuels form when decomposition is incomplete. The Keeling curve shows rising atmospheric CO₂.',
      ],
      [
        ['Energy transfer efficiency', 'About 10% passes to the next trophic level.'],
        ['Why food chains are short', 'Too little energy remains at high trophic levels.'],
        ['Carbon cycle processes', 'Photosynthesis, respiration, feeding, decomposition, combustion.'],
        ['Keeling curve', 'Record of rising atmospheric CO₂ measured at Mauna Loa.'],
      ],
      [
        ['Most energy lost between trophic levels is lost as…', ['Light', 'Heat from respiration', 'Sound', 'Chemical energy in faeces only'], 1, 'Respiration releases heat to the environment.'],
        ['Which process removes CO₂ from the atmosphere?', ['Respiration', 'Combustion', 'Photosynthesis', 'Decomposition'], 2, 'Plants fix CO₂ into sugars.'],
        ['Producers have 10 000 kJ. How much reaches secondary consumers?', ['1000 kJ', '100 kJ', '10 kJ', '5000 kJ'], 1, 'About 10% per step: 10 000 → 1000 → 100.'],
      ],
    ),
    'D1.1': C(
      [
        'DNA replication is semi-conservative: each new DNA molecule keeps one original strand and gains one newly built strand.',
        'Helicase unwinds the double helix by breaking the hydrogen bonds between complementary bases.',
        'DNA polymerase adds free nucleotides following base pairing rules, always building the new strand in the 5 prime to 3 prime direction.',
        'The polymerase chain reaction, PCR, copies DNA in a lab by cycles of heating and cooling with Taq polymerase. Gel electrophoresis separates DNA fragments by size, for example in DNA profiling.',
        'At HL, the lagging strand is built in short Okazaki fragments started by primers and joined by DNA ligase, and DNA polymerase proofreads to fix errors.',
      ],
      [
        ['Semi-conservative replication', 'Each new molecule has one old strand and one new strand.'],
        ['Helicase', 'Unwinds DNA by breaking hydrogen bonds between bases.'],
        ['PCR', 'Lab technique that amplifies DNA using heating cycles and Taq polymerase.'],
        ['Gel electrophoresis', 'Separates DNA fragments by size; small fragments move further.'],
      ],
      [
        ['DNA replication is described as…', ['Conservative', 'Dispersive', 'Semi-conservative', 'Random'], 2, 'Each new molecule has one old strand and one new strand.'],
        ['In gel electrophoresis, the smallest fragments…', ['Stay near the wells', 'Travel furthest', 'Don’t move', 'Move towards the negative electrode'], 1, 'Small fragments move more easily through the gel.'],
        ['Which enzyme joins Okazaki fragments?', ['Helicase', 'DNA ligase', 'RNA primase', 'Amylase'], 1, 'Ligase seals the sugar-phosphate backbone.'],
      ],
    ),
    'D1.2': C(
      [
        'Protein synthesis has two stages. In transcription, RNA polymerase makes mRNA from a DNA template in the nucleus.',
        'In translation, ribosomes read mRNA codons, groups of three bases. Each tRNA carries a specific amino acid and has a complementary anticodon.',
        'The genetic code is degenerate, more than one codon can code for the same amino acid, and universal, used by almost all organisms. Start and stop codons mark where translation begins and ends.',
        'At HL, eukaryotic mRNA is modified by removing introns, splicing, and adding a cap and tail. Alternative splicing lets one gene code for several proteins.',
      ],
      [
        ['Transcription', 'DNA → mRNA, by RNA polymerase, in the nucleus.'],
        ['Translation', 'mRNA → polypeptide, at ribosomes.'],
        ['Codon', 'Three mRNA bases that code for one amino acid.'],
        ['Anticodon', 'Three bases on tRNA complementary to a codon.'],
      ],
      [
        ['The DNA template reads TAC. The mRNA codon is…', ['ATG', 'AUG', 'UAC', 'TAC'], 1, 'Complementary RNA bases: T→A, A→U, C→G.'],
        ['Which molecule carries amino acids to the ribosome?', ['mRNA', 'tRNA', 'rRNA', 'DNA'], 1, 'Each tRNA carries a specific amino acid.'],
        ['The code is “degenerate” because…', ['It changes over time', 'Several codons can code for one amino acid', 'It only works in bacteria', 'It has no stop codons'], 1, 'There are 64 codons for 20 amino acids.'],
      ],
    ),
    'D1.3': C(
      [
        'A mutation is a change in the base sequence of DNA. Substitutions change one base; insertions and deletions can cause a frameshift.',
        'Mutations can be caused by mutagens, like UV light and some chemicals, or by errors in replication. Most are neutral, some harmful, and a few beneficial.',
        'Sickle cell anaemia is caused by a single base substitution changing glutamic acid to valine in haemoglobin.',
        'Mutations in body cells can lead to cancer; mutations in gametes can be inherited. Gene knockout and CRISPR-Cas9 allow scientists to edit genes precisely.',
      ],
      [
        ['Base substitution', 'One base is replaced by another.'],
        ['Frameshift mutation', 'An insertion or deletion shifts the reading frame.'],
        ['Mutagen', 'An agent that increases mutation rate, e.g. UV radiation.'],
        ['CRISPR-Cas9', 'A gene-editing tool that cuts DNA at a chosen sequence.'],
      ],
      [
        ['Sickle cell anaemia is caused by…', ['A frameshift', 'A base substitution', 'A chromosome deletion', 'Non-disjunction'], 1, 'One base change alters one amino acid.'],
        ['Which mutation is usually most harmful?', ['A silent substitution', 'An insertion causing a frameshift', 'A change in an intron', 'A substitution coding for the same amino acid'], 1, 'Frameshifts change every codon after the mutation.'],
        ['Which is a mutagen?', ['Water', 'UV radiation', 'Glucose', 'Oxygen'], 1, 'UV damages DNA bases.'],
      ],
    ),
    'D2.1': C(
      [
        'Cells divide for growth, repair and reproduction. Before division, DNA is replicated so each chromosome has two sister chromatids.',
        'Mitosis produces two genetically identical diploid cells. Its phases are prophase, metaphase, anaphase and telophase, followed by cytokinesis.',
        'Meiosis produces four genetically different haploid cells for sexual reproduction. Crossing over and random orientation of homologous pairs create variation.',
        'Uncontrolled cell division causes tumours. The mitotic index, cells in mitosis divided by total cells, can indicate how fast a tissue is dividing.',
      ],
      [
        ['Mitosis', 'Produces two identical diploid cells.'],
        ['Meiosis', 'Produces four genetically different haploid cells.'],
        ['Sources of variation in meiosis', 'Crossing over and random orientation of chromosome pairs.'],
        ['Mitotic index', 'Number of cells in mitosis ÷ total number of cells.'],
      ],
      [
        ['Chromatids separate to opposite poles in…', ['Prophase', 'Metaphase', 'Anaphase', 'Telophase'], 2, 'Spindle fibres pull chromatids apart in anaphase.'],
        ['A human egg cell has how many chromosomes?', ['46', '23', '92', '44'], 1, 'Gametes are haploid.'],
        ['Crossing over happens during…', ['Mitosis', 'Prophase I of meiosis', 'Cytokinesis', 'Interphase'], 1, 'Homologous chromosomes exchange sections in prophase I.'],
      ],
    ),
    'D2.2': C(
      [
        'Gene expression is how the information in a gene is used to make a product. Every cell has the same genes, but different cells express different ones.',
        'Transcription is controlled by transcription factors binding to promoters and enhancers.',
        'Epigenetics changes gene expression without changing the base sequence: DNA methylation usually silences genes, and histone modification changes how tightly DNA is packed.',
        'Epigenetic marks can be influenced by the environment and sometimes inherited. Hormones and other signals can also switch genes on or off.',
      ],
      [
        ['Gene expression', 'Using a gene’s information to make a functional product.'],
        ['Transcription factor', 'A protein that binds DNA and regulates transcription.'],
        ['DNA methylation', 'Adding methyl groups to DNA, usually silencing genes.'],
        ['Epigenetics', 'Heritable changes in gene expression without changing the DNA sequence.'],
      ],
      [
        ['Heavy DNA methylation of a gene usually…', ['Increases transcription', 'Silences the gene', 'Causes a mutation', 'Doubles the DNA'], 1, 'Methylation blocks transcription.'],
        ['Epigenetic changes alter…', ['The base sequence', 'Gene expression without changing the sequence', 'The number of chromosomes', 'The genetic code'], 1, 'They affect which genes are read.'],
        ['Tightly packed DNA around histones is…', ['Easier to transcribe', 'Harder to transcribe', 'Mutated', 'Replicated faster'], 1, 'Transcription machinery can’t reach it easily.'],
      ],
    ),
    'D2.3': C(
      [
        'Water potential, Ψ, measures the tendency of water to move. Water moves from higher water potential to lower water potential.',
        'Pure water has a water potential of zero. Adding solutes lowers it, making it negative. This is solute potential.',
        'Pressure potential comes from the pressure of the cell wall pushing back. In plant cells, water potential equals solute potential plus pressure potential.',
        'Plant cells in pure water become turgid; in a strong solution they lose water and become plasmolysed. Animal cells in pure water can burst because they have no cell wall.',
      ],
      [
        ['Water potential of pure water', 'Zero (the maximum).'],
        ['Direction of water movement', 'From higher (less negative) to lower (more negative) water potential.'],
        ['Plant water potential equation', 'Ψ = Ψs + Ψp'],
        ['Plasmolysis', 'Cell membrane pulls away from the cell wall due to water loss.'],
      ],
      [
        ['Water moves from a cell at −200 kPa to one at…', ['−100 kPa', '0 kPa', '−400 kPa', '+50 kPa'], 2, 'Water moves to the more negative water potential.'],
        ['A plant cell placed in pure water becomes…', ['Plasmolysed', 'Turgid', 'Lysed', 'Flaccid'], 1, 'Water enters and the wall stops it bursting.'],
        ['Adding solute to water makes its water potential…', ['Higher', 'Lower (more negative)', 'Zero', 'Unchanged'], 1, 'Solutes lower water potential.'],
      ],
    ),
    'D3.1': C(
      [
        'Asexual reproduction produces genetically identical offspring from one parent. Sexual reproduction combines gametes from two parents, producing variation.',
        'In humans, the menstrual cycle is controlled by hormones: FSH and LH from the pituitary, and oestrogen and progesterone from the ovaries.',
        'Fertilisation joins haploid sperm and egg to form a diploid zygote. IVF uses hormones to stimulate egg production before fertilisation outside the body.',
        'Flowering plants reproduce sexually: pollination transfers pollen to the stigma, and seeds are dispersed. Cross-pollination increases genetic variation.',
      ],
      [
        ['FSH', 'Stimulates follicle development in the ovary.'],
        ['LH surge', 'Triggers ovulation.'],
        ['Progesterone', 'Maintains the uterus lining.'],
        ['Pollination', 'Transfer of pollen from anther to stigma.'],
      ],
      [
        ['Ovulation is triggered by a surge in…', ['FSH', 'LH', 'Progesterone', 'Insulin'], 1, 'High LH causes the follicle to release the egg.'],
        ['An advantage of sexual reproduction is…', ['Identical offspring', 'Genetic variation', 'Only one parent is needed', 'It is faster'], 1, 'Variation helps populations adapt.'],
        ['A zygote is…', ['Haploid', 'Diploid', 'A gamete', 'A pollen grain'], 1, 'It has chromosomes from both gametes.'],
      ],
    ),
    'D3.2': C(
      [
        'Genes come in different versions called alleles. The genotype is the combination of alleles; the phenotype is the observable trait.',
        'Dominant alleles are expressed when present; recessive alleles only when homozygous. Punnett squares predict offspring ratios, such as 3 to 1 for two heterozygotes.',
        'Some traits show codominance, like ABO blood groups, or are sex-linked, carried on the X chromosome, like red-green colour blindness and haemophilia.',
        'Many traits are polygenic and show continuous variation, like height. Pedigree charts trace inheritance through families. At HL, study dihybrid crosses and the chi-squared test.',
      ],
      [
        ['Allele', 'A version of a gene.'],
        ['Homozygous vs heterozygous', 'Two identical alleles vs two different alleles.'],
        ['Codominance', 'Both alleles are expressed, e.g. blood group AB.'],
        ['Sex-linked trait', 'A gene carried on the X chromosome, e.g. haemophilia.'],
      ],
      [
        ['Two heterozygous parents (Aa × Aa). Ratio of dominant to recessive phenotype?', ['1 : 1', '3 : 1', '1 : 2 : 1', '9 : 3 : 3 : 1'], 1, 'AA, Aa, Aa show dominant; aa shows recessive.'],
        ['Why are sex-linked disorders more common in males?', ['Males have two X chromosomes', 'Males have only one X chromosome', 'The Y chromosome carries the allele', 'Males have more genes'], 1, 'One recessive allele on the single X is expressed.'],
        ['A person with blood group AB shows…', ['Dominance', 'Codominance', 'Recessiveness', 'Polygenic inheritance'], 1, 'Both A and B antigens are expressed.'],
      ],
    ),
    'D3.3': C(
      [
        'Homeostasis is keeping the internal environment within narrow limits, such as body temperature, blood glucose and water balance.',
        'It uses negative feedback: a change is detected and responses reverse it.',
        'Blood glucose is controlled by the pancreas. When glucose is high, insulin makes cells take up glucose and the liver store it as glycogen. When it is low, glucagon makes the liver release glucose.',
        'Body temperature is controlled by the hypothalamus using sweating, vasodilation, vasoconstriction and shivering. At HL, the kidney controls water and removes waste using ADH.',
      ],
      [
        ['Homeostasis', 'Maintaining the internal environment within narrow limits.'],
        ['Negative feedback', 'A change triggers responses that reverse it.'],
        ['Insulin', 'Lowers blood glucose; made by β cells of the pancreas.'],
        ['Glucagon', 'Raises blood glucose; made by α cells of the pancreas.'],
      ],
      [
        ['After a sugary meal, the pancreas releases…', ['Glucagon', 'Insulin', 'Adrenaline', 'ADH'], 1, 'Insulin lowers high blood glucose.'],
        ['When too hot, skin blood vessels…', ['Constrict', 'Dilate', 'Close completely', 'Shrink permanently'], 1, 'Vasodilation increases heat loss.'],
        ['Type 1 diabetes is caused by…', ['Cells ignoring insulin', 'Not producing insulin', 'Too much glucagon', 'Low blood glucose'], 1, 'The β cells are destroyed by the immune system.'],
      ],
    ),
    'D4.1': C(
      [
        'Natural selection is the main mechanism of evolution. Populations produce more offspring than can survive, and there is variation between individuals.',
        'Variation comes from mutation, meiosis and sexual reproduction. Some variations are heritable.',
        'Individuals better adapted to their environment are more likely to survive and reproduce, passing on their alleles. Over time, allele frequencies change.',
        'Examples include antibiotic resistance in bacteria and changes in the beak size of Galápagos finches. At HL, study the Hardy-Weinberg principle and types of selection.',
      ],
      [
        ['Natural selection', 'Better-adapted individuals survive and reproduce more, passing on alleles.'],
        ['Sources of variation', 'Mutation, meiosis, random fertilisation.'],
        ['Fitness', 'Ability to survive and reproduce in an environment.'],
        ['Antibiotic resistance', 'Resistant bacteria survive treatment and multiply.'],
      ],
      [
        ['Antibiotic resistance spreads because…', ['Antibiotics cause mutations', 'Resistant bacteria survive and reproduce', 'Bacteria learn', 'Viruses spread it'], 1, 'Selection favours resistant bacteria.'],
        ['Natural selection acts on…', ['Genotypes directly', 'Phenotypes', 'Acquired characteristics', 'Only mutations'], 1, 'Selection acts on observable traits.'],
        ['Which is NOT required for natural selection?', ['Variation', 'Overproduction', 'Inheritance', 'Individuals choosing to change'], 3, 'Individuals don’t change by choice.'],
      ],
    ),
    'D4.2': C(
      [
        'Stable ecosystems can persist for long periods. Stability depends on biodiversity, a supply of energy, nutrient recycling and the absence of major disturbance.',
        'Tipping points occur when a small change pushes an ecosystem into a different state, like deforestation turning rainforest into savanna.',
        'Mesocosms are small experimental ecosystems used to study stability. Keystone species, like sea otters, have a large effect on community structure.',
        'Human impacts include overharvesting, eutrophication from fertilisers, biomagnification of pollutants like mercury, and plastic pollution. Rewilding restores natural processes.',
      ],
      [
        ['Keystone species', 'A species with a large effect on its ecosystem relative to its numbers.'],
        ['Eutrophication', 'Nutrient enrichment causing algal blooms and oxygen depletion.'],
        ['Biomagnification', 'Increase in concentration of a pollutant up the food chain.'],
        ['Rewilding', 'Restoring ecosystems by reintroducing species and natural processes.'],
      ],
      [
        ['Fertiliser runoff causing algal blooms is…', ['Biomagnification', 'Eutrophication', 'Succession', 'Rewilding'], 1, 'Excess nutrients cause algae to grow rapidly.'],
        ['Mercury is most concentrated in…', ['Plankton', 'Small fish', 'Top predators', 'Water'], 2, 'It accumulates at each trophic level.'],
        ['Removing sea otters leads to urchins destroying kelp. Sea otters are a…', ['Producer', 'Keystone species', 'Invasive species', 'Decomposer'], 1, 'They have a disproportionately large effect.'],
      ],
    ),
    'D4.3': C(
      [
        'Climate change is caused mainly by rising carbon dioxide and methane from burning fossil fuels, deforestation and agriculture, which enhance the greenhouse effect.',
        'Effects include melting ice and permafrost, sea-level rise, more extreme weather and changes to ecosystems.',
        'Positive feedback loops speed it up: melting ice lowers albedo, and thawing permafrost releases methane.',
        'Species respond by shifting ranges towards the poles or uphill, and by changes in timing, like earlier flowering, which can cause mismatches with pollinators. Coral bleaching occurs when ocean warming expels zooxanthellae.',
      ],
      [
        ['Enhanced greenhouse effect', 'Extra greenhouse gases trap more heat, warming Earth.'],
        ['Main greenhouse gases', 'Carbon dioxide, methane, water vapour, nitrous oxide.'],
        ['Albedo feedback', 'Less ice → less reflection → more warming.'],
        ['Coral bleaching', 'Corals expel zooxanthellae when water is too warm.'],
      ],
      [
        ['Thawing permafrost worsens warming because it releases…', ['Oxygen', 'Methane', 'Nitrogen', 'Water'], 1, 'Methane is a powerful greenhouse gas.'],
        ['Species moving towards the poles is an example of…', ['A range shift', 'Speciation', 'Bleaching', 'Eutrophication'], 0, 'Warming moves suitable habitat poleward.'],
        ['Melting ice speeds warming because…', ['Ice is dark', 'Less sunlight is reflected', 'Ice releases CO₂', 'Oceans cool'], 1, 'Lower albedo means more heat is absorbed.'],
      ],
    ),
  },
};

export default content;
