import type { MoreContent } from '../../types';
import { M } from '../helpers';

// Lesson 2 (applications, practicals, common mistakes, exam technique) plus extra flashcards
// and questions for every Biology chapter.
const more: Record<string, MoreContent> = {
  'A1.1': M(
    [
      'Water’s thermal properties matter for life: its high specific heat capacity keeps lakes and oceans at stable temperatures, and its high latent heat of vaporisation makes sweating an effective way to cool down.',
      'Ice is less dense than liquid water because hydrogen bonds hold molecules in an open lattice. Ice floats and insulates the water below, so aquatic life survives winter.',
      'Water’s cohesion creates surface tension, which lets small organisms like pond skaters walk on water. Adhesion to cellulose helps capillary action in plant cell walls and xylem.',
      'Exam tip: always link a property to the hydrogen bonds and then to a specific biological consequence, for example “cohesion allows transpiration pull in xylem”.',
    ],
    [
      ['Latent heat of vaporisation', 'Large amount of energy needed to evaporate water, so sweating cools the body.'],
      ['Why ice floats', 'Hydrogen bonds hold molecules in an open lattice, so ice is less dense than water.'],
      ['Surface tension', 'Cohesion at the water surface; supports small organisms.'],
      ['Hydrophilic', 'Attracted to water; polar or charged substances.'],
    ],
    [
      ['Ice floating on lakes helps aquatic life because it…', 'Insulates the water beneath', ['Increases the water temperature to 10 °C', 'Absorbs all sunlight', 'Makes water more acidic'], 'Water below stays liquid.'],
      ['Pond skaters can walk on water because of…', 'Surface tension from cohesion', ['Adhesion to their legs', 'High specific heat', 'Buoyancy of ice'], 'Hydrogen bonds between surface molecules resist breaking.'],
      ['Which property explains why coastal climates are milder?', 'High specific heat capacity', ['Low density of ice', 'Adhesion', 'Surface tension'], 'Oceans heat and cool slowly.'],
      ['Glucose dissolves in water because it is…', 'Polar', ['Non-polar', 'A lipid', 'Hydrophobic'], 'Its –OH groups form hydrogen bonds with water.'],
    ],
  ),
  'A1.2': M(
    [
      'Nucleotides join by covalent phosphodiester bonds between the phosphate of one nucleotide and the sugar of the next, forming a sugar-phosphate backbone.',
      'Chargaff’s rules: in DNA, the amount of adenine equals thymine and cytosine equals guanine. Worked example: 20% cytosine means 20% guanine, so A plus T is 60%, 30% each.',
      'Watson and Crick built their double helix model in 1953 using Rosalind Franklin’s X-ray diffraction images, showing how models are built from evidence.',
      'At HL, know purines, adenine and guanine, with two rings, pair with pyrimidines, cytosine and thymine or uracil, with one ring, keeping the helix a constant width.',
    ],
    [
      ['Phosphodiester bond', 'Covalent bond linking nucleotides in a strand.'],
      ['Chargaff’s rules', 'In DNA, A = T and C = G.'],
      ['Rosalind Franklin', 'Produced X-ray diffraction images that revealed DNA’s helical structure.'],
      ['Purines vs pyrimidines', 'Purines (A, G) have two rings; pyrimidines (C, T, U) have one.'],
    ],
    [
      ['A DNA sample is 18% guanine. What percentage is thymine?', '32%', ['18%', '36%', '64%'], 'G = C = 18%, so A + T = 64%, T = 32%.'],
      ['Nucleotides in one strand are joined by…', 'Covalent phosphodiester bonds', ['Hydrogen bonds', 'Peptide bonds', 'Ionic bonds'], 'They form the sugar-phosphate backbone.'],
      ['Which scientist’s X-ray images helped reveal DNA’s structure?', 'Rosalind Franklin', ['Gregor Mendel', 'Charles Darwin', 'Louis Pasteur'], 'Her Photo 51 showed a helix.'],
      ['Which base is a purine?', 'Adenine', ['Cytosine', 'Thymine', 'Uracil'], 'Adenine and guanine are purines.'],
    ],
  ),
  'A2.1': M(
    [
      'Conditions on early Earth likely included no free oxygen, high temperatures, lightning and UV radiation, which could drive reactions between simple molecules.',
      'Key steps for the origin of cells: synthesis of simple organic molecules, assembly into polymers, self-replicating molecules like RNA, and membranes enclosing them.',
      'Fatty acids can spontaneously form vesicles in water, suggesting how the first membranes arose. Deep-sea hydrothermal vents are another proposed site for the origin of life.',
      'Evidence for LUCA includes the universal genetic code, shared metabolic pathways, and genes found in all living organisms.',
    ],
    [
      ['Spontaneous vesicle formation', 'Fatty acids form bilayer vesicles in water — a model for the first membranes.'],
      ['Hydrothermal vents', 'Deep-sea vents proposed as a possible site where life began.'],
      ['Ribozyme', 'RNA that acts as an enzyme — supports the RNA world hypothesis.'],
      ['Early Earth atmosphere', 'Little or no free oxygen; methane, ammonia, water vapour and hydrogen.'],
    ],
    [
      ['Which supports the RNA world hypothesis?', 'RNA can act as an enzyme (ribozyme)', ['DNA is double-stranded', 'Proteins store genes', 'Lipids replicate themselves'], 'RNA can store information and catalyse reactions.'],
      ['The early Earth atmosphere lacked…', 'Free oxygen', ['Water vapour', 'Methane', 'Hydrogen'], 'Oxygen came later from photosynthesis.'],
      ['Fatty acids forming vesicles in water suggests how…', 'The first membranes formed', ['DNA first replicated', 'Photosynthesis began', 'Eukaryotes evolved'], 'Vesicles can enclose molecules.'],
      ['Which is evidence for LUCA?', 'The universal genetic code', ['All organisms are the same size', 'All cells have a cell wall', 'All organisms photosynthesise'], 'The same codons code for the same amino acids.'],
    ],
  ),
  'A2.2': M(
    [
      'Worked example: a mitochondrion is 2 μm long and its image measures 40 mm. Convert 40 mm to 40,000 μm. Magnification equals image size over actual size, so 40,000 divided by 2 is 20,000 times.',
      'Freeze-fracture, cryogenic electron microscopy and fluorescent stains let scientists see membrane structure, proteins and specific molecules in cells.',
      'Atypical cells: red blood cells lack nuclei; skeletal muscle fibres have many nuclei; phloem sieve tubes have no nucleus; aseptate fungal hyphae have many nuclei without cross walls.',
      'Exam tip: when drawing cells, use single clear lines, label with ruled lines, and don’t shade. Include a title and scale if possible.',
    ],
    [
      ['Converting units', '1 mm = 1,000 μm; 1 μm = 1,000 nm.'],
      ['Resolution', 'The ability to distinguish two points as separate.'],
      ['Multinucleate cell example', 'Skeletal muscle fibre.'],
      ['Cryogenic electron microscopy', 'Imaging frozen samples to reveal protein structure.'],
    ],
    [
      ['An image is 30 mm and the real object is 6 μm. The magnification is…', '×5,000', ['×5', '×500', '×50,000'], '30 mm = 30,000 μm; 30,000 ÷ 6 = 5,000.'],
      ['Electron microscopes give more detail mainly because of higher…', 'Resolution', ['Colour', 'Magnification only', 'Brightness'], 'Electrons have a shorter wavelength than light.'],
      ['Which cell lacks a nucleus when mature?', 'Red blood cell', ['Skeletal muscle fibre', 'Neuron', 'Liver cell'], 'It has more space for haemoglobin.'],
      ['A cell structure present in both prokaryotes and eukaryotes is…', 'Ribosomes', ['Mitochondria', 'Nucleus', 'Golgi apparatus'], 'Both have ribosomes (70S vs 80S).'],
    ],
  ),
  'A2.3': M(
    [
      'Viruses vary: they may have DNA or RNA, single- or double-stranded, and some have an envelope from the host membrane, like influenza and HIV.',
      'Bacteriophage lambda shows both cycles: in the lysogenic cycle its DNA integrates into the host chromosome as a prophage; stress can switch it to the lytic cycle.',
      'HIV is a retrovirus: it uses reverse transcriptase to make DNA from its RNA, which integrates into host helper T cells. Its high mutation rate makes vaccines difficult.',
      'Origins: viruses may have evolved from escaped cell genes, from reduced cells, or before cells. Their diversity suggests more than one origin, called convergent evolution of viruses.',
    ],
    [
      ['Enveloped virus', 'Has an outer membrane taken from the host cell, e.g. influenza.'],
      ['Prophage', 'Viral DNA integrated into the host chromosome.'],
      ['Reverse transcriptase', 'Enzyme making DNA from an RNA template — used by retroviruses like HIV.'],
      ['Bacteriophage', 'A virus that infects bacteria.'],
    ],
    [
      ['HIV uses reverse transcriptase to…', 'Make DNA from its RNA genome', ['Make proteins', 'Copy host DNA', 'Build its capsid'], 'The DNA then integrates into the host genome.'],
      ['A virus that infects bacteria is a…', 'Bacteriophage', ['Retrovirus', 'Prion', 'Protist'], 'Phages inject genetic material into bacteria.'],
      ['Viral DNA integrated into a bacterial chromosome is called a…', 'Prophage', ['Capsid', 'Plasmid', 'Ribosome'], 'It is copied along with the host DNA.'],
      ['An envelope around some viruses comes from…', 'The host cell membrane', ['The virus’s own ribosomes', 'The capsid only', 'The bacterial cell wall'], 'The virus buds out through the membrane.'],
    ],
  ),
  'A3.1': M(
    [
      'Worked example: humans have 46 chromosomes, 23 pairs; chimpanzees have 48. One human chromosome, number 2, formed by the fusion of two ancestral chromosomes.',
      'Genome size varies widely and is not linked to complexity: some plants and amoebae have much larger genomes than humans.',
      'Species concepts have limits: the biological species concept doesn’t work for asexual organisms or fossils, so morphological and phylogenetic concepts are also used.',
      'DNA barcoding and environmental DNA let scientists identify species from short DNA sequences, even from water or soil samples.',
    ],
    [
      ['Human chromosome 2', 'Formed from the fusion of two ancestral ape chromosomes.'],
      ['Environmental DNA (eDNA)', 'DNA collected from soil or water to identify species present.'],
      ['Morphological species concept', 'Species defined by shared physical features.'],
      ['Diploid number in humans', '46 (2n = 46).'],
    ],
    [
      ['Humans have 46 chromosomes; chimpanzees have…', '48', ['46', '44', '23'], 'Human chromosome 2 is a fusion of two ape chromosomes.'],
      ['Detecting fish species from DNA in a water sample uses…', 'Environmental DNA', ['Karyotyping', 'A dichotomous key', 'The Lincoln index'], 'Organisms shed DNA into their environment.'],
      ['Genome size…', 'Does not reliably indicate complexity', ['Is largest in humans', 'Is the same in all mammals', 'Depends on body size'], 'Some plants have far larger genomes than humans.'],
      ['Fossils are classified using the…', 'Morphological species concept', ['Biological species concept', 'Lincoln index', 'Karyotype'], 'Interbreeding can’t be tested for extinct organisms.'],
    ],
  ),
  'A3.2': M(
    [
      'Carl Woese discovered Archaea in the 1970s by comparing ribosomal RNA sequences, leading to the three-domain system.',
      'Worked example of a cladogram: if species A and B share a node more recently than with C, A and B are more closely related to each other than to C.',
      'Cladistics has led to reclassification. For example, figworts were split into several families after DNA evidence showed they were not one clade.',
      'Exam tip: a clade is monophyletic, an ancestor and all its descendants. Reptiles, as traditionally defined, are not a clade unless birds are included.',
    ],
    [
      ['Carl Woese', 'Used rRNA sequences to identify Archaea and propose three domains.'],
      ['Monophyletic group', 'An ancestor and all of its descendants (a clade).'],
      ['Reclassification of figworts', 'Example of cladistics changing plant families.'],
      ['Outgroup', 'A species outside the group studied, used to root a cladogram.'],
    ],
    [
      ['The three-domain system was proposed by…', 'Carl Woese', ['Carl Linnaeus', 'Charles Darwin', 'Gregor Mendel'], 'He compared ribosomal RNA sequences.'],
      ['A clade is…', 'An ancestor and all its descendants', ['Any group of similar-looking species', 'Only living species', 'A single species'], 'Clades are monophyletic.'],
      ['Traditional “reptiles” are not a clade because they exclude…', 'Birds', ['Snakes', 'Turtles', 'Lizards'], 'Birds share a common ancestor with crocodiles.'],
      ['Which evidence led to reclassifying figworts?', 'DNA sequence comparisons', ['Flower colour alone', 'Leaf size', 'Habitat'], 'Molecular evidence showed they were not one clade.'],
    ],
  ),
  'A4.1': M(
    [
      'Selective breeding is evidence of evolution: humans bred wild cabbage into kale, broccoli and cauliflower in relatively few generations.',
      'Adaptive radiation happens when one ancestral species rapidly diversifies to fill many niches, like Darwin’s finches in the Galápagos.',
      'Sympatric speciation happens without geographical separation, for example through polyploidy in plants, where errors in meiosis double chromosome numbers.',
      'Exam tip: always name the mechanism of isolation: geographical, behavioural or temporal, and explain how gene flow is stopped.',
    ],
    [
      ['Adaptive radiation', 'One ancestor diversifies rapidly into many species filling different niches.'],
      ['Sympatric speciation', 'Speciation without geographical separation.'],
      ['Polyploidy', 'Having more than two sets of chromosomes; common in plant speciation.'],
      ['Temporal isolation', 'Populations breed at different times, so they don’t interbreed.'],
    ],
    [
      ['Darwin’s finches are an example of…', 'Adaptive radiation', ['Convergent evolution', 'Artificial selection', 'Extinction'], 'One ancestor diversified to fill different niches.'],
      ['Speciation by polyploidy is usually…', 'Sympatric', ['Allopatric', 'Artificial', 'Convergent'], 'It can happen within the same area.'],
      ['Broccoli and cauliflower evolving from wild cabbage shows…', 'Selective breeding', ['Natural selection', 'Speciation', 'Genetic drift'], 'Humans chose which plants to breed.'],
      ['Two frog species breeding in different months is…', 'Temporal isolation', ['Geographical isolation', 'Behavioural isolation', 'Polyploidy'], 'Different timing prevents gene flow.'],
    ],
  ),
  'A4.2': M(
    [
      'Worked example of Simpson’s reciprocal index: D equals N times N minus 1, divided by the sum of n times n minus 1. For species counts 10, 10 and 5, N is 25: 600 divided by 90 plus 90 plus 20, which is 200, gives D of 3.',
      'The sixth mass extinction: current extinction rates are far above background rates, driven by human activity. Past mass extinctions had natural causes, like the asteroid 66 million years ago.',
      'Causes of loss can be remembered as HIPPO: habitat loss, invasive species, pollution, human population growth and overharvesting.',
      'Conservation examples: rewilding projects, captive breeding like the California condor, and the Svalbard Global Seed Vault for plant diversity.',
    ],
    [
      ['HIPPO', 'Habitat loss, invasive species, pollution, population, overharvesting.'],
      ['Svalbard Global Seed Vault', 'Norwegian store of crop seeds — ex situ conservation.'],
      ['Background extinction rate', 'The normal rate of extinction without human impact.'],
      ['Captive breeding', 'Breeding endangered species in zoos to release into the wild.'],
    ],
    [
      ['Species counts 5, 5 (N = 10). Simpson’s reciprocal index is…', '2.25', ['2', '1', '10'], '10 × 9 = 90; Σn(n−1) = 20 + 20 = 40; 90 ÷ 40 = 2.25.'],
      ['Cane toads spreading in Australia are an example of…', 'An invasive species', ['A keystone species', 'An endemic species', 'Captive breeding'], 'They were introduced and spread rapidly.'],
      ['The Svalbard Seed Vault is…', 'Ex situ conservation', ['In situ conservation', 'Rewilding', 'A nature reserve'], 'Seeds are stored outside their habitats.'],
      ['The current extinction crisis is mainly caused by…', 'Human activities', ['An asteroid', 'Volcanic eruptions', 'Ice ages'], 'Habitat loss and overexploitation dominate.'],
    ],
  ),
  'B1.1': M(
    [
      'Glucose exists as alpha and beta forms. Starch and glycogen are made of alpha glucose; cellulose is made of beta glucose, which forms straight chains linked by hydrogen bonds into strong fibres.',
      'Amylose is unbranched; amylopectin and glycogen are branched, so enzymes can release glucose quickly from many ends. Glycogen is more branched than amylopectin.',
      'Phospholipids have a hydrophilic phosphate head and two hydrophobic tails, so they form bilayers in water. Steroids, like cholesterol and testosterone, have four fused rings.',
      'Saturated fatty acids have no carbon–carbon double bonds and pack tightly, so fats are solid at room temperature. Cis-unsaturated fatty acids have kinks, making oils liquid.',
    ],
    [
      ['Alpha vs beta glucose', 'Differ in the position of the –OH on carbon 1; starch uses alpha, cellulose beta.'],
      ['Amylopectin', 'Branched starch molecule of alpha glucose.'],
      ['Phospholipid structure', 'Hydrophilic phosphate head, two hydrophobic fatty acid tails.'],
      ['Saturated fatty acid', 'No C=C double bonds; packs tightly, solid at room temperature.'],
    ],
    [
      ['Cellulose is strong because beta glucose chains…', 'Are straight and linked by hydrogen bonds', ['Are branched', 'Contain double bonds', 'Are coiled into helices'], 'Chains form microfibrils.'],
      ['Why is glycogen highly branched?', 'Glucose can be released quickly from many ends', ['To make it soluble in fat', 'To store water', 'To form membranes'], 'Enzymes act on branch ends.'],
      ['Oils are liquid at room temperature because they contain…', 'Unsaturated fatty acids with kinks', ['Only saturated fatty acids', 'Glycogen', 'Cellulose'], 'Kinks stop tight packing.'],
      ['Cholesterol is an example of a…', 'Steroid', ['Triglyceride', 'Polysaccharide', 'Protein'], 'Steroids have four fused rings.'],
    ],
  ),
  'B1.2': M(
    [
      'There are 20 amino acids commonly found in proteins. Some are essential, meaning humans must get them from food because we cannot make them.',
      'R groups can be hydrophobic or hydrophilic, and some are charged. In a globular protein, hydrophobic R groups tend to be inside and hydrophilic ones on the surface, making it soluble.',
      'Fibrous proteins, like collagen and keratin, are long and insoluble, used for structure. Globular proteins, like enzymes, insulin and haemoglobin, are compact and soluble.',
      'Haemoglobin is a conjugated protein with four subunits and a non-protein haem group containing iron, an example of quaternary structure with a prosthetic group.',
    ],
    [
      ['Essential amino acid', 'Must be obtained from the diet.'],
      ['Globular protein', 'Compact, soluble proteins like enzymes and haemoglobin.'],
      ['Fibrous protein', 'Long, insoluble structural proteins like collagen.'],
      ['Conjugated protein', 'Protein with a non-protein group, e.g. haemoglobin with haem.'],
    ],
    [
      ['Collagen is an example of a…', 'Fibrous protein', ['Globular protein', 'Carbohydrate', 'Lipid'], 'It provides strength in skin and tendons.'],
      ['How many amino acids are commonly used in proteins?', '20', ['4', '64', '100'], 'Twenty amino acids are encoded by the genetic code.'],
      ['In globular proteins, hydrophobic R groups are usually…', 'On the inside', ['On the surface', 'Removed', 'Bound to water'], 'This makes the protein soluble.'],
      ['Haemoglobin has quaternary structure because it…', 'Has four polypeptide chains', ['Has one chain', 'Contains glucose', 'Is fibrous'], 'Multiple polypeptides combine.'],
    ],
  ),
  'B2.1': M(
    [
      'Membrane proteins can be integral, spanning the bilayer, or peripheral, attached to the surface. Glycoproteins and glycolipids form the glycocalyx, used in cell recognition.',
      'Cholesterol sits between phospholipids in animal membranes and regulates fluidity, reducing it at high temperatures and preventing stiffening at low ones.',
      'Bulk transport: endocytosis takes material in by folding the membrane into vesicles; exocytosis releases material, like hormones, by vesicles fusing with the membrane.',
      'Practical: estimate the osmolarity of potato tissue by placing cylinders in sucrose solutions and finding the concentration where mass doesn’t change.',
    ],
    [
      ['Integral protein', 'Embedded in and often spanning the membrane.'],
      ['Glycocalyx', 'Carbohydrate layer of glycoproteins and glycolipids used in cell recognition.'],
      ['Role of cholesterol in membranes', 'Regulates fluidity.'],
      ['Endocytosis', 'Taking substances into a cell in vesicles formed from the membrane.'],
    ],
    [
      ['Hormones like insulin leave cells by…', 'Exocytosis', ['Endocytosis', 'Osmosis', 'Simple diffusion'], 'Vesicles fuse with the plasma membrane.'],
      ['Potato cylinders in 0.3 mol/dm³ sucrose show no mass change. This means…', 'The tissue has the same solute concentration', ['The potato is dead', 'Water left the cells', 'Active transport stopped'], 'No net water movement: isotonic.'],
      ['Cell recognition depends on…', 'Glycoproteins and glycolipids', ['Cholesterol only', 'Phospholipid tails', 'Ribosomes'], 'Their carbohydrate chains act as markers.'],
      ['Cholesterol in membranes…', 'Regulates fluidity', ['Transports glucose', 'Makes ATP', 'Stores DNA'], 'It keeps membranes stable over temperature changes.'],
    ],
  ),
  'B2.2': M(
    [
      'Protein secretion pathway: proteins are made on ribosomes on rough ER, transported in vesicles to the Golgi apparatus, modified and packaged, then released by exocytosis.',
      'The nuclear envelope has pores that let mRNA leave and proteins enter. Separating transcription from translation lets eukaryotes modify mRNA before it is used.',
      'Endosymbiotic theory: mitochondria and chloroplasts were once free-living prokaryotes engulfed by a larger cell. Evidence includes double membranes, circular DNA, 70S ribosomes and division by binary fission.',
      'Exam tip: when describing an organelle, give both its structure and how that structure suits its function, for example the folded inner membrane of mitochondria increases surface area for ATP production.',
    ],
    [
      ['Protein secretion pathway', 'Rough ER → vesicle → Golgi → vesicle → exocytosis.'],
      ['Nuclear pores', 'Let mRNA out and proteins in.'],
      ['Cristae', 'Folds of the inner mitochondrial membrane increasing surface area.'],
      ['Lysosome', 'Vesicle of digestive enzymes that breaks down waste and pathogens.'],
    ],
    [
      ['Which organelle modifies and packages proteins?', 'Golgi apparatus', ['Rough ER', 'Nucleus', 'Mitochondrion'], 'It adds carbohydrates and sorts proteins into vesicles.'],
      ['Cristae increase the surface area for…', 'ATP production', ['Photosynthesis', 'Protein packaging', 'DNA replication'], 'They hold the electron transport chain.'],
      ['Which is evidence for endosymbiosis?', 'Chloroplasts have their own circular DNA', ['Chloroplasts have 80S ribosomes', 'Mitochondria have one membrane', 'Mitochondria contain chlorophyll'], 'They resemble prokaryotes.'],
      ['mRNA leaves the nucleus through…', 'Nuclear pores', ['The Golgi', 'Lysosomes', 'The cell wall'], 'Pores in the nuclear envelope allow transport.'],
    ],
  ),
  'B2.3': M(
    [
      'Worked example: a cube with 1 cm sides has surface area 6 cm² and volume 1 cm³, ratio 6 to 1. A 3 cm cube has 54 cm² and 27 cm³, ratio 2 to 1. Bigger cells have relatively less surface for exchange.',
      'Stem cell uses: bone marrow transplants for leukaemia, and research on therapies for diseases like type 1 diabetes. Embryonic stem cell use raises ethical issues.',
      'Adaptations of specialised cells: sperm have a flagellum and many mitochondria; egg cells have food stores; alveolar cells are thin; root hair cells have a large surface area.',
      'Some cells are unusually large, like striated muscle fibres and egg cells, while cells like red blood cells stay small and flexible.',
    ],
    [
      ['SA:V of a 1 cm cube', '6 : 1.'],
      ['Bone marrow transplant', 'Uses adult stem cells to treat leukaemia.'],
      ['Sperm cell adaptations', 'Flagellum, many mitochondria, acrosome with enzymes.'],
      ['Root hair cell adaptation', 'Long extension increasing surface area for water uptake.'],
    ],
    [
      ['A 2 cm cube has a surface area to volume ratio of…', '3 : 1', ['6 : 1', '2 : 1', '1 : 3'], 'SA = 24, V = 8, so 24 : 8 = 3 : 1.'],
      ['Why do sperm cells have many mitochondria?', 'To release energy for swimming', ['To store food', 'To make hormones', 'To photosynthesise'], 'Their flagellum needs ATP.'],
      ['Bone marrow transplants use…', 'Adult (multipotent) stem cells', ['Totipotent embryo cells', 'Red blood cells', 'Nerve cells'], 'They produce blood cells.'],
      ['An ethical concern with embryonic stem cells is that…', 'An embryo is destroyed to obtain them', ['They cannot divide', 'They are too small', 'They only form skin'], 'This raises questions about the status of embryos.'],
    ],
  ),
  'B3.1': M(
    [
      'Lung volumes: tidal volume is air breathed in a normal breath; vital capacity is the maximum volume exhaled after a maximum inhalation. They can be measured with a spirometer.',
      'In the leaf, the spongy mesophyll has air spaces for diffusion, and guard cells open and close stomata. Transpiration can be measured with a potometer.',
      'Haemoglobin shows cooperative binding: as each oxygen binds, it becomes easier for the next to bind, giving an S-shaped dissociation curve. At HL, fetal haemoglobin has a higher affinity for oxygen.',
      'The Bohr shift: higher carbon dioxide in respiring tissues lowers haemoglobin’s oxygen affinity, so more oxygen is released where it’s needed.',
    ],
    [
      ['Tidal volume', 'Volume of air breathed in or out in a normal breath.'],
      ['Vital capacity', 'Maximum volume exhaled after maximum inhalation.'],
      ['Bohr shift', 'High CO₂ reduces haemoglobin’s oxygen affinity, releasing more O₂ to tissues.'],
      ['Potometer', 'Apparatus for measuring water uptake (transpiration) by a shoot.'],
    ],
    [
      ['Maximum volume exhaled after a maximum breath in is the…', 'Vital capacity', ['Tidal volume', 'Residual volume', 'Ventilation rate'], 'It is measured with a spirometer.'],
      ['The Bohr shift helps because…', 'More oxygen is released in active tissues', ['Less oxygen reaches muscles', 'CO₂ binds oxygen', 'Blood clots faster'], 'High CO₂ lowers haemoglobin’s affinity for O₂.'],
      ['Fetal haemoglobin has…', 'A higher affinity for oxygen than adult haemoglobin', ['A lower affinity', 'No iron', 'No oxygen binding'], 'It takes oxygen from the mother’s blood.'],
      ['A potometer measures…', 'Water uptake by a plant shoot', ['Photosynthesis rate directly', 'Lung volume', 'Heart rate'], 'It estimates transpiration.'],
    ],
  ),
  'B3.2': M(
    [
      'The cardiac cycle: the sinoatrial node, the pacemaker, starts each beat. The atria contract, then the impulse passes through the atrioventricular node to the ventricles, which contract and push blood into arteries.',
      'Blood pressure is measured as systolic over diastolic pressure, for example 120 over 80 mmHg. High blood pressure increases the risk of coronary heart disease.',
      'Tissue fluid forms when pressure forces plasma out of capillaries; most returns to capillaries and the rest drains into lymph vessels.',
      'In phloem, sugar is moved by translocation from sources, like leaves, to sinks, like roots and fruits, driven by active loading and a pressure gradient.',
    ],
    [
      ['Sinoatrial node', 'The heart’s pacemaker that starts each heartbeat.'],
      ['Systolic pressure', 'Blood pressure when the ventricles contract.'],
      ['Tissue fluid', 'Plasma forced out of capillaries that bathes cells.'],
      ['Translocation', 'Movement of sugars in phloem from sources to sinks.'],
    ],
    [
      ['Which structure is the heart’s natural pacemaker?', 'Sinoatrial node', ['Atrioventricular node', 'Aorta', 'Vena cava'], 'It sets the heart rate.'],
      ['Sugar moving from leaves to roots in phloem is…', 'Translocation', ['Transpiration', 'Osmosis', 'Diffusion'], 'Phloem carries sugars from sources to sinks.'],
      ['Blood pressure of 130/85: the 130 is the…', 'Systolic pressure', ['Diastolic pressure', 'Heart rate', 'Pulse'], 'Systolic is the higher reading.'],
      ['Arteries have thick elastic walls because…', 'They carry blood at high pressure', ['They carry blood to the heart', 'They exchange gases', 'They have valves'], 'Elastic walls stretch and recoil.'],
    ],
  ),
  'B3.3': M(
    [
      'In a sarcomere, the light band contains only actin; the dark band contains myosin. During contraction, the light band and H zone shorten while the dark band stays the same length.',
      'Contraction cycle: myosin heads bind actin to form cross-bridges, pivot in the power stroke, then ATP binding releases them and ATP hydrolysis re-cocks the heads.',
      'Motor units are a motor neuron and the muscle fibres it controls. More motor units recruited gives a stronger contraction.',
      'Movement in other organisms: sessile animals like corals move parts but not their whole body; motile animals use muscles with skeletons, like exoskeletons in insects.',
    ],
    [
      ['Cross-bridge', 'Attachment of a myosin head to actin.'],
      ['Motor unit', 'A motor neuron and all the muscle fibres it stimulates.'],
      ['Exoskeleton', 'External skeleton, e.g. in insects.'],
      ['Power stroke', 'Myosin head pivots, pulling actin towards the centre of the sarcomere.'],
    ],
    [
      ['During contraction, which band stays the same length?', 'The dark (A) band', ['The light (I) band', 'The H zone', 'The whole sarcomere'], 'Myosin filaments don’t change length.'],
      ['ATP is needed to…', 'Release myosin heads from actin', ['Bind calcium to myosin', 'Build new actin', 'Form the Z line'], 'Without ATP, muscles lock (rigor mortis).'],
      ['A stronger contraction is produced by…', 'Recruiting more motor units', ['Fewer impulses', 'Longer sarcomeres', 'Removing calcium'], 'More fibres contract together.'],
      ['Insects move using muscles attached to…', 'An exoskeleton', ['Bones', 'Cartilage only', 'A hydrostatic skeleton only'], 'Muscles attach inside the exoskeleton.'],
    ],
  ),
  'B4.1': M(
    [
      'Hydrophytes, plants adapted to water, have air spaces for buoyancy and stomata on upper leaf surfaces. Xerophytes, like cacti, have spines, thick cuticles and CAM photosynthesis.',
      'Coral reefs need warm, clear, shallow water for photosynthesis by their algae, showing how abiotic factors limit where species live.',
      'Practical: use quadrats and transects to correlate the distribution of a species with an abiotic factor, such as light intensity or soil moisture.',
      'Climographs show average temperature and rainfall for a location and help explain which biome occurs there.',
    ],
    [
      ['Hydrophyte', 'Plant adapted to living in water.'],
      ['CAM photosynthesis', 'Stomata open at night to reduce water loss — used by cacti.'],
      ['Transect', 'A line along which samples are taken to study change in distribution.'],
      ['Climograph', 'Graph of monthly temperature and rainfall for a place.'],
    ],
    [
      ['Cacti open their stomata at night to…', 'Reduce water loss', ['Absorb more light', 'Release oxygen faster', 'Attract pollinators'], 'Night-time air is cooler and more humid.'],
      ['Studying how plants change from a pond to a field uses a…', 'Transect', ['Mark-release-recapture', 'Potometer', 'Karyotype'], 'Samples are taken along a line.'],
      ['Coral reefs are limited to shallow water because their algae need…', 'Light for photosynthesis', ['Cold temperatures', 'High pressure', 'Darkness'], 'Light decreases with depth.'],
      ['A climograph shows…', 'Temperature and rainfall over a year', ['Population growth', 'Energy flow', 'Genetic diversity'], 'It helps explain biome distribution.'],
    ],
  ),
  'B4.2': M(
    [
      'Modes of nutrition: autotrophs make their own food by photosynthesis or chemosynthesis; heterotrophs consume others. Mixotrophs, like Euglena, can do both.',
      'Worked example of competition: Gause’s experiments with Paramecium showed that when two species competed for the same food, one was driven out.',
      'Adaptations of predators and prey: teeth, speed and camouflage in predators; warning colours, toxins and group living in prey. Herbivores have adaptations like grinding teeth.',
      'Exam tip: use the terms fundamental and realised niche precisely. A realised niche is the part actually occupied because of competition and other interactions.',
    ],
    [
      ['Chemoautotroph', 'Makes food using energy from chemical reactions, e.g. at hydrothermal vents.'],
      ['Mixotroph', 'Organism that can be autotrophic and heterotrophic, e.g. Euglena.'],
      ['Gause’s experiment', 'Paramecium competition showing competitive exclusion.'],
      ['Holozoic nutrition', 'Ingesting and digesting food internally, like animals.'],
    ],
    [
      ['Bacteria at hydrothermal vents that make food from sulfur compounds are…', 'Chemoautotrophs', ['Photoautotrophs', 'Saprotrophs', 'Parasites'], 'They use chemical energy.'],
      ['Gause’s Paramecium experiments supported…', 'The competitive exclusion principle', ['Mutualism', 'Natural selection only', 'The endosymbiotic theory'], 'One species outcompeted the other.'],
      ['Euglena can photosynthesise and eat other organisms. It is a…', 'Mixotroph', ['Saprotroph', 'Chemoautotroph', 'Parasite'], 'It uses both modes of nutrition.'],
      ['Bright warning colours on poison dart frogs are a…', 'Prey adaptation', ['Predator adaptation', 'Form of mutualism', 'Type of niche'], 'They warn predators the frog is toxic.'],
    ],
  ),
  'C1.1': M(
    [
      'Practical: measure the effect of temperature on catalase by timing oxygen production from hydrogen peroxide at different temperatures, keeping enzyme and substrate amounts constant.',
      'Worked example of rate: 30 cm³ of oxygen produced in 60 seconds gives a rate of 0.5 cm³ per second.',
      'At HL, non-competitive inhibitors bind to an allosteric site and change the active site shape, so adding more substrate doesn’t overcome them. End-product inhibition controls metabolic pathways.',
      'Metabolic pathways can be chains or cycles. Enzymes are either intracellular, like in respiration, or extracellular, like digestive enzymes.',
    ],
    [
      ['Catalase', 'Enzyme breaking down hydrogen peroxide into water and oxygen.'],
      ['Non-competitive inhibitor', 'Binds away from the active site and changes its shape.'],
      ['End-product inhibition', 'The final product of a pathway inhibits an earlier enzyme.'],
      ['Activation energy', 'Energy needed to start a reaction; enzymes lower it.'],
    ],
    [
      ['24 cm³ of gas is produced in 40 seconds. The rate is…', '0.6 cm³/s', ['1.67 cm³/s', '64 cm³/s', '16 cm³/s'], '24 ÷ 40 = 0.6.'],
      ['A non-competitive inhibitor…', 'Binds to an allosteric site', ['Binds to the active site', 'Is overcome by more substrate', 'Speeds up the reaction'], 'It changes the enzyme’s shape.'],
      ['Isoleucine inhibiting the first enzyme in its own pathway is…', 'End-product inhibition', ['Competitive inhibition', 'Denaturation', 'Induced fit'], 'It controls the pathway’s output.'],
      ['In an enzyme temperature investigation, a control variable is…', 'Enzyme concentration', ['Temperature', 'Rate of reaction', 'Time for oxygen'], 'It must be kept constant.'],
    ],
  ),
  'C1.2': M(
    [
      'Practical: measure respiration rate with a respirometer. Soda lime absorbs carbon dioxide, so the movement of a liquid drop shows oxygen consumption by seeds or small invertebrates.',
      'Aerobic respiration yields about 30 to 32 ATP per glucose; anaerobic respiration yields only 2, but it is fast and doesn’t need oxygen, useful in short bursts of exercise.',
      'At HL, the link reaction converts pyruvate to acetyl CoA in the mitochondrial matrix. The Krebs cycle releases carbon dioxide and produces reduced NAD and FAD.',
      'Oxidative phosphorylation on the inner membrane uses an electron transport chain and chemiosmosis: protons flow through ATP synthase, and oxygen is the final electron acceptor forming water.',
    ],
    [
      ['Respirometer', 'Measures oxygen uptake during respiration.'],
      ['Chemiosmosis', 'Protons flow through ATP synthase, producing ATP.'],
      ['Final electron acceptor', 'Oxygen, which forms water.'],
      ['ATP yield of anaerobic respiration', '2 ATP per glucose.'],
    ],
    [
      ['In a respirometer, soda lime is used to…', 'Absorb carbon dioxide', ['Release oxygen', 'Heat the tube', 'Kill the seeds'], 'Then oxygen uptake moves the drop.'],
      ['What is the final electron acceptor in aerobic respiration?', 'Oxygen', ['Carbon dioxide', 'Glucose', 'NAD'], 'It combines with electrons and protons to form water.'],
      ['The Krebs cycle takes place in the…', 'Mitochondrial matrix', ['Cytoplasm', 'Inner membrane', 'Nucleus'], 'Glycolysis is in the cytoplasm.'],
      ['Why do sprinters build up lactate?', 'Muscles respire anaerobically when oxygen is short', ['They breathe too much', 'Lactate is made in lungs', 'They digest faster'], 'Anaerobic respiration makes lactate.'],
    ],
  ),
  'C1.3': M(
    [
      'Practical: separate photosynthetic pigments by chromatography and calculate Rf values: distance moved by the pigment divided by distance moved by the solvent.',
      'An action spectrum shows the rate of photosynthesis at each wavelength; an absorption spectrum shows light absorbed by pigments. They match closely, showing pigments drive photosynthesis.',
      'At HL, the Calvin cycle in the stroma uses the enzyme RuBisCo to fix carbon dioxide to RuBP, then uses ATP and reduced NADP to make triose phosphate.',
      'Rising carbon dioxide levels may increase photosynthesis in some crops, but experiments like FACE studies show benefits are limited by nutrients, water and temperature.',
    ],
    [
      ['Rf value', 'Distance moved by pigment ÷ distance moved by solvent.'],
      ['Action spectrum', 'Rate of photosynthesis at different wavelengths.'],
      ['RuBisCo', 'Enzyme that fixes CO₂ in the Calvin cycle.'],
      ['Stroma', 'Fluid in chloroplasts where the Calvin cycle occurs.'],
    ],
    [
      ['A pigment moves 3 cm while the solvent moves 6 cm. Its Rf is…', '0.5', ['2', '3', '18'], '3 ÷ 6 = 0.5.'],
      ['The enzyme that fixes carbon dioxide is…', 'RuBisCo', ['ATP synthase', 'Catalase', 'Helicase'], 'It is the most abundant protein on Earth.'],
      ['The Calvin cycle takes place in the…', 'Stroma', ['Thylakoid membrane', 'Cytoplasm', 'Mitochondria'], 'The light-dependent reactions are on the thylakoids.'],
      ['An action spectrum shows…', 'The rate of photosynthesis at each wavelength', ['Which pigments are present', 'Chlorophyll’s structure', 'The amount of CO₂'], 'It matches the absorption spectrum.'],
    ],
  ),
  'C2.1': M(
    [
      'Examples of receptors: acetylcholine binds a ligand-gated ion channel at synapses; adrenaline binds a G protein-coupled receptor; insulin binds a tyrosine kinase receptor.',
      'Adrenaline’s signal is amplified by second messengers: its G protein receptor activates an enzyme making cyclic AMP, which triggers a cascade that releases glucose from glycogen.',
      'Oestradiol and other steroids pass through the membrane and bind receptors in the cytoplasm or nucleus, directly changing gene transcription.',
      'Signals can be stopped by breaking down the ligand, like acetylcholinesterase, or by receptor changes. Many drugs work by blocking or mimicking ligands.',
    ],
    [
      ['Second messenger', 'Molecule inside the cell that relays and amplifies a signal, e.g. cyclic AMP.'],
      ['G protein-coupled receptor', 'Transmembrane receptor that activates a G protein.'],
      ['Tyrosine kinase receptor', 'Receptor that adds phosphate groups when activated, e.g. insulin receptor.'],
      ['Ligand-gated ion channel', 'Channel that opens when a ligand binds, e.g. acetylcholine receptor.'],
    ],
    [
      ['Cyclic AMP is an example of a…', 'Second messenger', ['Hormone', 'Receptor', 'Neurotransmitter'], 'It relays the signal inside the cell.'],
      ['Adrenaline binds to…', 'A G protein-coupled receptor', ['An intracellular receptor', 'DNA directly', 'A ribosome'], 'This activates a cascade.'],
      ['Oestradiol can enter cells because it is…', 'Lipid-soluble', ['A large protein', 'Charged', 'A carbohydrate'], 'Steroids cross the membrane.'],
      ['Acetylcholinesterase ends a signal by…', 'Breaking down acetylcholine', ['Making acetylcholine', 'Blocking calcium', 'Opening sodium channels'], 'This stops continued stimulation.'],
    ],
  ),
  'C2.2': M(
    [
      'Resting potential is about minus 70 millivolts, maintained by the sodium-potassium pump, which moves three sodium ions out for every two potassium ions in, using ATP.',
      'Action potential sequence: sodium channels open and sodium rushes in, depolarisation; then potassium channels open and potassium leaves, repolarisation; a brief hyperpolarisation follows.',
      'Excitatory neurotransmitters depolarise the next neuron; inhibitory ones hyperpolarise it. Summation of many signals decides whether threshold is reached.',
      'Drugs and toxins act at synapses: neonicotinoid pesticides bind acetylcholine receptors in insects; cocaine blocks dopamine reuptake.',
    ],
    [
      ['Resting potential value', 'About −70 mV.'],
      ['Sodium-potassium pump', 'Moves 3 Na⁺ out and 2 K⁺ in using ATP.'],
      ['Repolarisation', 'K⁺ leaves the neuron, restoring a negative inside.'],
      ['Summation', 'Adding together signals to reach threshold.'],
    ],
    [
      ['The sodium-potassium pump moves…', '3 Na⁺ out and 2 K⁺ in', ['2 Na⁺ out and 3 K⁺ in', '3 K⁺ out and 2 Na⁺ in', 'Only Na⁺ in'], 'It uses ATP.'],
      ['Repolarisation is caused by…', 'Potassium ions leaving the neuron', ['Sodium entering', 'Calcium entering', 'Chloride leaving'], 'The inside becomes negative again.'],
      ['Cocaine increases dopamine at synapses by…', 'Blocking its reuptake', ['Destroying receptors', 'Making neurons myelinated', 'Stopping calcium entry'], 'Dopamine stays in the synapse longer.'],
      ['An inhibitory neurotransmitter causes…', 'Hyperpolarisation', ['Depolarisation', 'An action potential', 'Myelination'], 'The neuron becomes less likely to fire.'],
    ],
  ),
  'C3.1': M(
    [
      'Examples of integration: during exercise, the nervous system raises heart and breathing rate while hormones like adrenaline boost glucose release.',
      'The hypothalamus links the nervous and endocrine systems, controlling the pituitary gland, the “master gland”, which releases hormones like ADH and growth hormone.',
      'Pain reflex arc: receptor, sensory neuron, relay neuron in the spinal cord, motor neuron, effector muscle. It is fast because it bypasses conscious thought.',
      'Plant hormones: auxin causes cell elongation on the shaded side, bending the shoot towards light. Other plant hormones include gibberellins for growth and ethylene for fruit ripening.',
    ],
    [
      ['Pituitary gland', 'Releases hormones controlled by the hypothalamus.'],
      ['Relay neuron', 'Connects sensory and motor neurons in the spinal cord.'],
      ['Ethylene', 'Plant hormone that triggers fruit ripening.'],
      ['Effector', 'A muscle or gland that responds to a signal.'],
    ],
    [
      ['Which hormone ripens fruit?', 'Ethylene', ['Auxin', 'Insulin', 'Adrenaline'], 'Ethylene gas triggers ripening.'],
      ['The correct order in a reflex arc is…', 'Receptor → sensory → relay → motor → effector', ['Effector → motor → relay → receptor', 'Brain → receptor → effector', 'Motor → sensory → receptor'], 'Signals travel from receptor to effector.'],
      ['The gland controlled directly by the hypothalamus is the…', 'Pituitary', ['Pancreas', 'Thyroid', 'Adrenal gland'], 'It links the nervous and endocrine systems.'],
      ['A shoot bends towards light because auxin…', 'Makes cells on the shaded side elongate more', ['Kills cells on the lit side', 'Moves to the lit side', 'Stops all growth'], 'Uneven growth bends the shoot.'],
    ],
  ),
  'C3.2': M(
    [
      'Clotting: platelets release clotting factors, leading to thrombin converting soluble fibrinogen into insoluble fibrin, which traps blood cells to form a clot.',
      'Adaptive immunity: B lymphocytes are activated by helper T cells, then divide to form plasma cells, which make antibodies, and memory cells for faster future responses.',
      'Zoonoses are diseases that pass from animals to humans, like COVID-19, Ebola and rabies. They are a growing risk with habitat destruction and wildlife trade.',
      'Herd immunity: when enough people are immune, transmission falls and those who cannot be vaccinated are protected. The threshold for measles is around 95%.',
    ],
    [
      ['Fibrin', 'Insoluble protein forming the mesh of a blood clot.'],
      ['Plasma cell', 'Activated B lymphocyte that secretes antibodies.'],
      ['Zoonosis', 'Disease transmitted from animals to humans.'],
      ['Herd immunity', 'Indirect protection when enough of a population is immune.'],
    ],
    [
      ['Which converts fibrinogen into fibrin?', 'Thrombin', ['Platelets directly', 'Insulin', 'Antibodies'], 'Thrombin is an enzyme in the clotting cascade.'],
      ['Ebola spreading from bats to humans is a…', 'Zoonosis', ['Genetic disease', 'Deficiency disease', 'Autoimmune disease'], 'It crosses from animals to humans.'],
      ['Herd immunity protects…', 'People who cannot be vaccinated', ['Only vaccinated people', 'Bacteria', 'Nobody'], 'Low transmission shields vulnerable people.'],
      ['Antibodies are secreted by…', 'Plasma cells', ['Red blood cells', 'Platelets', 'Phagocytes'], 'Plasma cells come from activated B cells.'],
    ],
  ),
  'C4.1': M(
    [
      'Worked example of the Lincoln index: 40 beetles marked, 50 caught later of which 8 are marked. Population equals 40 times 50 divided by 8, which is 250.',
      'Assumptions of capture–mark–recapture: marks don’t affect survival, marked individuals mix fully, and there is no migration, birth or death between samples.',
      'Predator–prey cycles, like lynx and snowshoe hares, show populations rising and falling out of step, a form of top-down control.',
      'Limiting factors: density-dependent factors, like competition, disease and predation, increase with population size; density-independent factors, like floods, don’t.',
    ],
    [
      ['Lincoln index formula', '(First sample × second sample) ÷ marked recaptured.'],
      ['Density-dependent factor', 'Its effect increases with population density, e.g. disease.'],
      ['Top-down control', 'Predators control prey populations.'],
      ['Bottom-up control', 'Resources like food limit population size.'],
    ],
    [
      ['20 marked; later 30 caught, 6 marked. The estimated population is…', '100', ['36', '180', '56'], '20 × 30 ÷ 6 = 100.'],
      ['Which is a density-independent factor?', 'A flood', ['Disease', 'Competition for food', 'Predation'], 'Its effect doesn’t depend on population size.'],
      ['An assumption of mark–recapture is that…', 'Marks don’t affect survival', ['All animals are caught', 'Populations are growing', 'Animals never move'], 'Otherwise the estimate is biased.'],
      ['Lynx and hare numbers rising and falling in cycles show…', 'Predator–prey interaction', ['Mutualism', 'Parasitism only', 'Competitive exclusion'], 'Prey numbers affect predators and vice versa.'],
    ],
  ),
  'C4.2': M(
    [
      'Worked example: producers fix 20,000 kJ; primary consumers get 10%, 2,000 kJ; secondary consumers get 200 kJ; tertiary consumers only 20 kJ.',
      'Energy is lost between levels through respiration as heat, uneaten parts, and faeces. This is why higher levels have less biomass.',
      'Gross primary production is the total energy fixed by producers; net primary production is what is left after producers’ respiration and is available to consumers.',
      'The Keeling curve shows atmospheric carbon dioxide rising from about 315 ppm in 1958 to over 420 ppm today, with yearly zigzags from seasonal photosynthesis.',
    ],
    [
      ['Gross primary production', 'Total energy fixed by producers.'],
      ['Net primary production', 'GPP minus producers’ respiration.'],
      ['Why the Keeling curve zigzags', 'Seasonal changes in photosynthesis in the Northern Hemisphere.'],
      ['Biomass', 'Mass of living material, often measured as dry mass.'],
    ],
    [
      ['GPP is 5,000 kJ and producer respiration is 2,000 kJ. NPP is…', '3,000 kJ', ['7,000 kJ', '2,000 kJ', '2.5 kJ'], 'NPP = GPP − R.'],
      ['Atmospheric CO₂ today is above…', '420 ppm', ['280 ppm', '315 ppm', '1,000 ppm'], 'It was about 315 ppm when measurements began in 1958.'],
      ['Energy is lost between trophic levels mainly through…', 'Respiration as heat', ['Photosynthesis', 'Decomposition only', 'Reproduction'], 'Organisms use energy to stay alive.'],
      ['Burning fossil fuels in the carbon cycle is…', 'Combustion', ['Photosynthesis', 'Fossilisation', 'Absorption'], 'It releases stored carbon as CO₂.'],
    ],
  ),
  'D1.1': M(
    [
      'Meselson and Stahl in 1958 grew bacteria in heavy nitrogen, then light nitrogen. After one generation DNA had intermediate density, supporting semi-conservative replication.',
      'DNA polymerase III adds nucleotides only in the 5 prime to 3 prime direction. On the lagging strand, primase makes RNA primers, DNA polymerase I replaces them with DNA and ligase joins fragments.',
      'PCR cycle: denature at about 95 °C to separate strands; anneal primers at about 55 °C; extend with Taq polymerase at about 72 °C. Each cycle doubles the DNA.',
      'Applications: DNA profiling for crime scenes and paternity testing uses PCR and gel electrophoresis to compare lengths of repeated sequences.',
    ],
    [
      ['Meselson and Stahl', 'Used nitrogen isotopes to show DNA replication is semi-conservative.'],
      ['Taq polymerase', 'Heat-stable DNA polymerase used in PCR.'],
      ['Primase', 'Makes RNA primers to start replication.'],
      ['DNA profiling', 'Comparing DNA fragment patterns to identify individuals.'],
    ],
    [
      ['After 3 PCR cycles, one DNA molecule becomes…', '8 molecules', ['3 molecules', '6 molecules', '9 molecules'], 'It doubles each cycle: 2³ = 8.'],
      ['Taq polymerase is used in PCR because it…', 'Is stable at high temperatures', ['Works only at 37 °C', 'Breaks DNA', 'Makes RNA'], 'It comes from a hot-spring bacterium.'],
      ['Meselson and Stahl’s results after one generation showed…', 'DNA of intermediate density', ['Only heavy DNA', 'Only light DNA', 'No DNA'], 'Each molecule had one old and one new strand.'],
      ['DNA polymerase adds nucleotides in which direction?', '5′ to 3′', ['3′ to 5′', 'Both directions equally', 'Randomly'], 'This is why the lagging strand is made in fragments.'],
    ],
  ),
  'D1.2': M(
    [
      'Worked example: DNA template 3 prime TAC GGA 5 prime is transcribed to mRNA AUG CCU. AUG is the start codon for methionine.',
      'There are 64 codons: 61 code for amino acids and 3 are stop codons, UAA, UAG and UGA. The code is universal, almost the same in all organisms.',
      'Translation: initiation at the start codon, elongation as tRNAs bring amino acids and peptide bonds form, and termination at a stop codon.',
      'Insulin can be made by bacteria because the genetic code is universal: the human gene is transcribed and translated in the bacterial cell.',
    ],
    [
      ['Start codon', 'AUG, which codes for methionine.'],
      ['Stop codons', 'UAA, UAG, UGA.'],
      ['Universal genetic code', 'The same codons code for the same amino acids in nearly all organisms.'],
      ['Stages of translation', 'Initiation, elongation, termination.'],
    ],
    [
      ['How many codons code for amino acids?', '61', ['64', '20', '3'], '3 of the 64 are stop codons.'],
      ['The start codon is…', 'AUG', ['UAA', 'UGA', 'GGG'], 'It codes for methionine.'],
      ['Bacteria can make human insulin because…', 'The genetic code is universal', ['Bacteria have nuclei', 'Insulin is a lipid', 'Bacteria lack ribosomes'], 'The same codons are read the same way.'],
      ['Which enzyme carries out transcription?', 'RNA polymerase', ['DNA polymerase', 'Ligase', 'Helicase'], 'It makes mRNA from a DNA template.'],
    ],
  ),
  'D1.3': M(
    [
      'Mutations can be silent, when a codon changes but codes the same amino acid; missense, changing one amino acid; or nonsense, creating a stop codon.',
      'Gene knockout, switching off a gene in a model organism like a mouse, helps scientists work out what the gene does.',
      'CRISPR-Cas9 uses a guide RNA to lead the Cas9 enzyme to a specific DNA sequence, where it cuts; the cell then repairs the cut, allowing genes to be removed or changed.',
      'Conserved sequences are almost the same across species because mutations there are usually harmful, while highly variable sequences change quickly.',
    ],
    [
      ['Silent mutation', 'Changes a codon but not the amino acid.'],
      ['Nonsense mutation', 'Creates a stop codon, shortening the protein.'],
      ['Gene knockout', 'Inactivating a gene to study its function.'],
      ['Guide RNA', 'Directs Cas9 to the target DNA sequence.'],
    ],
    [
      ['A mutation creating a stop codon is…', 'Nonsense', ['Silent', 'Missense', 'Neutral'], 'The protein is cut short.'],
      ['In CRISPR, the guide RNA…', 'Targets a specific DNA sequence', ['Cuts DNA itself', 'Makes proteins', 'Joins DNA fragments'], 'Cas9 cuts where the guide RNA binds.'],
      ['A mutation that changes GAA to GAG (both glutamic acid) is…', 'Silent', ['Nonsense', 'Frameshift', 'Missense'], 'The code is degenerate.'],
      ['Scientists switching off a gene in mice to see its role are using…', 'Gene knockout', ['PCR', 'Karyotyping', 'Gel electrophoresis'], 'The missing function reveals what the gene does.'],
    ],
  ),
  'D2.1': M(
    [
      'Phases of mitosis: prophase, chromosomes condense and spindle forms; metaphase, chromosomes line up at the equator; anaphase, chromatids pulled to poles; telophase, nuclei reform. Cytokinesis then divides the cytoplasm.',
      'Worked example of mitotic index: 30 cells in mitosis out of 200 cells gives 30 divided by 200, which is 0.15. A high index in tissue can indicate a tumour.',
      'Non-disjunction in meiosis happens when chromosomes fail to separate, causing gametes with an extra or missing chromosome, as in Down syndrome, trisomy 21.',
      'Cell cycle control uses cyclins and checkpoints; mutations in genes controlling the cycle, like proto-oncogenes, can lead to cancer.',
    ],
    [
      ['Metaphase', 'Chromosomes line up at the cell’s equator.'],
      ['Non-disjunction', 'Chromosomes fail to separate in meiosis.'],
      ['Trisomy 21', 'Three copies of chromosome 21 — Down syndrome.'],
      ['Cyclins', 'Proteins that control progression through the cell cycle.'],
    ],
    [
      ['Chromosomes line up at the equator during…', 'Metaphase', ['Prophase', 'Anaphase', 'Telophase'], 'Spindle fibres attach to centromeres.'],
      ['50 of 400 cells are in mitosis. The mitotic index is…', '0.125', ['8', '0.5', '0.25'], '50 ÷ 400 = 0.125.'],
      ['Down syndrome is caused by…', 'Non-disjunction giving three copies of chromosome 21', ['A point mutation', 'Crossing over', 'A virus'], 'It is trisomy 21.'],
      ['Which process makes cells for growth and repair?', 'Mitosis', ['Meiosis', 'Fertilisation', 'Non-disjunction'], 'It produces identical diploid cells.'],
    ],
  ),
  'D2.2': M(
    [
      'Gene expression is controlled at several levels: transcription, mRNA processing, translation and protein modification.',
      'Evidence of epigenetic inheritance: in the Dutch Hunger Winter of 1944 to 1945, children of mothers who were pregnant during the famine had higher rates of health problems later in life.',
      'Identical twins have the same DNA but their epigenetic marks diverge with age and environment, which can explain differences in disease between twins.',
      'At HL, genomic imprinting means some genes are expressed depending on whether they came from the mother or the father, controlled by methylation.',
    ],
    [
      ['Dutch Hunger Winter', 'Famine whose effects on unborn children suggest epigenetic effects.'],
      ['Genomic imprinting', 'Gene expression depends on the parent it came from.'],
      ['Histone acetylation', 'Loosens chromatin, usually increasing gene expression.'],
      ['Epigenetic differences in twins', 'Increase with age and different environments.'],
    ],
    [
      ['Adding acetyl groups to histones usually…', 'Increases gene expression', ['Silences genes', 'Changes the base sequence', 'Destroys DNA'], 'It loosens DNA packing.'],
      ['Identical twins becoming more different with age is partly due to…', 'Epigenetic changes', ['Different DNA sequences', 'Different chromosome numbers', 'Mutations only'], 'Environment affects epigenetic marks.'],
      ['Genomic imprinting means expression depends on…', 'Which parent the gene came from', ['The organism’s age', 'The temperature', 'The number of chromosomes'], 'Methylation silences one copy.'],
      ['The Dutch Hunger Winter is evidence for…', 'Environmental effects on gene expression', ['Natural selection', 'Mendel’s laws', 'Endosymbiosis'], 'Famine affected offspring health.'],
    ],
  ),
  'D2.3': M(
    [
      'Water potential equation: Ψ equals Ψs plus Ψp. Solute potential is always zero or negative; pressure potential is usually positive in plant cells.',
      'Worked example: a cell has Ψs of minus 600 kPa and Ψp of 200 kPa, so Ψ is minus 400 kPa. Water moves into it from a solution at minus 300 kPa.',
      'Animal cells have no wall, so in pure water they swell and can burst, lysis; in concentrated solutions they shrink, crenation. Blood plasma is kept isotonic to protect cells.',
      'In medicine, intravenous drips use saline isotonic to blood. Organs for transplant are stored in isotonic solutions.',
    ],
    [
      ['Water potential equation', 'Ψ = Ψs + Ψp.'],
      ['Solute potential', 'Always zero or negative; more solute makes it more negative.'],
      ['Lysis (in osmosis)', 'Animal cell bursting in a hypotonic solution.'],
      ['Isotonic saline', 'Solution with the same solute concentration as blood plasma.'],
    ],
    [
      ['Ψs = −700 kPa, Ψp = +300 kPa. Ψ is…', '−400 kPa', ['−1000 kPa', '+400 kPa', '−300 kPa'], 'Ψ = Ψs + Ψp.'],
      ['A red blood cell placed in pure water will…', 'Swell and burst', ['Shrink', 'Stay the same', 'Become plasmolysed'], 'It has no wall to resist expansion.'],
      ['Why are IV drips isotonic?', 'To prevent blood cells gaining or losing water', ['To add sugar only', 'To kill bacteria', 'To raise blood pressure'], 'Isotonic solutions cause no net water movement.'],
      ['Solute potential can never be…', 'Positive', ['Zero', 'Negative', 'Measured in kPa'], 'Solutes only lower water potential.'],
    ],
  ),
  'D3.1': M(
    [
      'Hormones in the menstrual cycle: FSH stimulates follicle growth; the follicle secretes oestradiol; an LH surge triggers ovulation around day 14; the corpus luteum secretes progesterone to maintain the uterus lining.',
      'Negative and positive feedback: rising oestradiol normally inhibits FSH, but high levels cause positive feedback, the LH surge. Falling progesterone leads to menstruation.',
      'IVF steps: hormone treatment to stop the normal cycle, then FSH injections to produce many eggs, egg collection, fertilisation in a dish, and transfer of embryos to the uterus.',
      'In plants, self-pollination reduces genetic variation. Many plants prevent it through separate male and female flowers or self-incompatibility.',
    ],
    [
      ['Corpus luteum', 'What remains of the follicle after ovulation; secretes progesterone.'],
      ['Positive feedback in the cycle', 'High oestradiol triggers the LH surge.'],
      ['IVF', 'In vitro fertilisation — fertilisation outside the body.'],
      ['Self-incompatibility', 'Mechanisms stopping a plant fertilising itself.'],
    ],
    [
      ['The corpus luteum secretes…', 'Progesterone', ['FSH', 'LH', 'Testosterone'], 'Progesterone maintains the uterus lining.'],
      ['Menstruation begins when…', 'Progesterone levels fall', ['LH surges', 'FSH rises', 'Oestradiol peaks'], 'Without progesterone the lining breaks down.'],
      ['In IVF, FSH injections are given to…', 'Stimulate many follicles to develop', ['Stop ovulation permanently', 'Fertilise the egg', 'Prevent implantation'], 'More eggs can be collected.'],
      ['Self-incompatibility in plants promotes…', 'Cross-pollination and genetic variation', ['Self-pollination', 'Asexual reproduction', 'Fewer seeds'], 'Pollen from the same plant is rejected.'],
    ],
  ),
  'D3.2': M(
    [
      'Worked example of a sex-linked cross: a carrier mother, XᴴXʰ, and an unaffected father, XᴴY. Each son has a 50% chance of haemophilia; daughters are either unaffected or carriers.',
      'Blood groups: Iᴬ and Iᴮ are codominant and i is recessive. A parent with IᴬIᴬ and one with IᴮIᴮ produce children with blood group AB.',
      'Pedigree charts: an affected child from two unaffected parents suggests a recessive trait. If affected males pass the trait to all daughters, suspect X-linked dominant.',
      'At HL, the chi-squared test checks whether observed ratios differ significantly from expected ratios, for example in dihybrid crosses.',
    ],
    [
      ['Carrier', 'Heterozygous for a recessive allele, not affected but can pass it on.'],
      ['Pedigree chart', 'Diagram showing inheritance of a trait through a family.'],
      ['Chi-squared test', 'Tests whether observed results differ significantly from expected.'],
      ['Test cross', 'Crossing with a homozygous recessive to find an unknown genotype.'],
    ],
    [
      ['A carrier mother and unaffected father: chance a son has haemophilia is…', '50%', ['25%', '0%', '100%'], 'Sons get one X from the mother.'],
      ['Parents with blood groups A (IᴬIᴬ) and B (IᴮIᴮ) will have children with group…', 'AB', ['O', 'A only', 'B only'], 'All children are IᴬIᴮ.'],
      ['Crossing an unknown with a homozygous recessive is a…', 'Test cross', ['Dihybrid cross', 'Pedigree', 'Self-cross'], 'The offspring reveal the unknown genotype.'],
      ['Two unaffected parents have an affected child. The trait is probably…', 'Recessive', ['Dominant', 'Codominant', 'Y-linked'], 'Both parents must be carriers.'],
    ],
  ),
  'D3.3': M(
    [
      'Insulin lowers blood glucose by making cells take up glucose and the liver store it as glycogen. Glucagon raises it by triggering glycogen breakdown.',
      'Type 2 diabetes is caused by cells becoming resistant to insulin, linked to obesity, diet and inactivity. It is often treated with diet, exercise and drugs; type 1 needs insulin injections.',
      'Thermoregulation: when cold, vasoconstriction, shivering and raising body hairs conserve heat; brown adipose tissue in babies generates heat.',
      'At HL, the kidney controls water balance: ADH from the pituitary increases water reabsorption in collecting ducts by adding aquaporins, producing concentrated urine.',
    ],
    [
      ['Type 2 diabetes', 'Cells become resistant to insulin.'],
      ['Vasoconstriction', 'Narrowing of skin blood vessels to conserve heat.'],
      ['ADH', 'Hormone that increases water reabsorption in the kidney.'],
      ['Brown adipose tissue', 'Fat that generates heat, especially in babies.'],
    ],
    [
      ['Which hormone raises blood glucose?', 'Glucagon', ['Insulin', 'ADH', 'Oxytocin'], 'It triggers glycogen breakdown in the liver.'],
      ['Type 2 diabetes is mainly due to…', 'Insulin resistance', ['Destruction of beta cells', 'Too much glucagon', 'A virus'], 'Cells respond poorly to insulin.'],
      ['When cold, skin blood vessels…', 'Constrict', ['Dilate', 'Burst', 'Stay the same'], 'This reduces heat loss.'],
      ['When dehydrated, ADH levels…', 'Rise', ['Fall', 'Stay the same', 'Become zero'], 'More water is reabsorbed by the kidneys.'],
    ],
  ),
  'D4.1': M(
    [
      'Darwin’s observations: more offspring are produced than survive, there is variation, and some variation is inherited. His inference was that better-adapted individuals leave more offspring.',
      'Types of selection: directional, favouring one extreme; stabilising, favouring the average, like human birth mass; and disruptive, favouring both extremes.',
      'Sexual selection explains traits like the peacock’s tail: they reduce survival but increase mating success. Guppy experiments by John Endler showed brighter colours evolved where predators were fewer.',
      'At HL, the Hardy-Weinberg equation, p squared plus 2pq plus q squared equals 1, is used to estimate allele frequencies and test whether a population is evolving.',
    ],
    [
      ['Stabilising selection', 'Favours the average phenotype, e.g. human birth mass.'],
      ['Disruptive selection', 'Favours both extremes of a trait.'],
      ['Sexual selection', 'Selection for traits that increase mating success.'],
      ['Hardy-Weinberg equation', 'p² + 2pq + q² = 1.'],
    ],
    [
      ['Human birth mass being kept near the average is…', 'Stabilising selection', ['Directional selection', 'Disruptive selection', 'Sexual selection'], 'Very low and very high masses are less likely to survive.'],
      ['Endler’s guppies became more colourful where…', 'There were fewer predators', ['Food was scarce', 'Water was cold', 'Predators were many'], 'Sexual selection outweighed predation.'],
      ['If q² = 0.04, q (recessive allele frequency) is…', '0.2', ['0.04', '0.16', '0.8'], 'q = √0.04 = 0.2.'],
      ['Peacock tails are explained mainly by…', 'Sexual selection', ['Stabilising selection', 'Genetic drift', 'Artificial selection'], 'Females prefer showy males.'],
    ],
  ),
  'D4.2': M(
    [
      'Tipping point example: the Amazon rainforest could turn into savanna if deforestation passes about 20 to 25%, because less forest means less rainfall.',
      'Eutrophication sequence: fertiliser runoff adds nitrates and phosphates, algae bloom, algae die and decompose, bacteria use up oxygen, and fish die.',
      'Biomagnification: DDT concentrations increased along food chains and thinned bird eggshells. Mercury builds up in top predators like tuna.',
      'Plastic pollution breaks into microplastics, which are eaten by animals and can enter food chains. Restoration projects, like rewilding with beavers or wolves in Yellowstone, can restore stability.',
    ],
    [
      ['Tipping point', 'Threshold after which an ecosystem shifts to a new state.'],
      ['Algal bloom', 'Rapid algae growth from excess nutrients.'],
      ['DDT', 'Pesticide that biomagnified and thinned eggshells of birds of prey.'],
      ['Microplastics', 'Plastic fragments under 5 mm entering food chains.'],
    ],
    [
      ['In eutrophication, fish die mainly because…', 'Oxygen is used up by decomposing bacteria', ['Algae are poisonous', 'Water gets too warm', 'Fertiliser is toxic'], 'Decomposition consumes oxygen.'],
      ['DDT caused bird population declines by…', 'Thinning eggshells', ['Killing insects only', 'Increasing prey', 'Warming water'], 'Eggs broke during incubation.'],
      ['Reintroducing wolves to Yellowstone is an example of…', 'Rewilding', ['Eutrophication', 'Biomagnification', 'Deforestation'], 'Wolves changed deer behaviour and helped vegetation recover.'],
      ['A tipping point in an ecosystem is…', 'A threshold after which it shifts to a new state', ['A peak in population', 'The top of a food chain', 'A type of niche'], 'Changes may be hard to reverse.'],
    ],
  ),
  'D4.3': M(
    [
      'Evidence: ice cores show carbon dioxide and temperature have risen together over hundreds of thousands of years; today’s levels, above 420 ppm, are the highest for at least 800,000 years.',
      'Ocean acidification: seawater absorbs carbon dioxide, forming carbonic acid, which reduces carbonate ions that corals and shellfish need to build shells and skeletons.',
      'Phenology changes: warming shifts timing of events like flowering and migration, causing mismatches, for example birds hatching after their insect food peaks.',
      'Carbon sequestration methods include reforestation, restoring peatlands and wetlands, and experimental technologies for capturing carbon dioxide.',
    ],
    [
      ['Ocean acidification', 'Falling ocean pH as seawater absorbs CO₂.'],
      ['Phenology', 'Timing of seasonal biological events.'],
      ['Ice core evidence', 'Bubbles of trapped air show past CO₂ levels.'],
      ['Carbon sequestration', 'Capturing and storing carbon, e.g. in forests or peat.'],
    ],
    [
      ['Ocean acidification harms corals because…', 'Fewer carbonate ions are available for skeletons', ['Water becomes too salty', 'Oxygen increases', 'Algae grow faster'], 'Calcifying organisms struggle to build shells.'],
      ['Birds hatching after caterpillar numbers peak is a…', 'Phenological mismatch', ['Positive feedback', 'Biomagnification', 'Keystone effect'], 'Warming shifts timings differently.'],
      ['Past CO₂ levels are measured using…', 'Air bubbles in ice cores', ['Tree heights', 'Current weather', 'Fossil teeth only'], 'Ice traps ancient air.'],
      ['Restoring peatlands helps the climate by…', 'Storing carbon', ['Releasing methane', 'Increasing albedo', 'Warming soils'], 'Peat is a major carbon sink.'],
    ],
  ),
};

export default more;
