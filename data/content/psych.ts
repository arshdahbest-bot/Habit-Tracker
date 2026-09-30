import type { SubjectContentFile } from '../types';
import { C } from './helpers';

const content: SubjectContentFile = {
  units: {
    F: [
      'The psychology course is built on concepts, frameworks and research methods.',
      'The six concepts are bias, causality, change, measurement, perspective and responsibility. The three frameworks are biological, cognitive and sociocultural.',
      'Research methods and data analysis underpin everything, so you can evaluate studies critically.',
    ],
    C: [
      'The four contexts apply the frameworks to real human experiences: health and well-being, human development, human relationships, and learning and cognition.',
      'For each context, use research studies and explain behaviour from more than one framework.',
    ],
    HL: [
      'HL students study three extensions that cut across all contexts: culture, motivation and technology.',
      'They deepen your analysis by asking how culture shapes behaviour, what drives behaviour, and how technology affects it.',
    ],
  },
  chapters: {
    F1: C(
      [
        'The course is organised around six concepts that help you think critically about psychology.',
        'Bias concerns distortions in research and in thinking. Causality asks whether one variable truly causes another. Change looks at how behaviour and understanding develop.',
        'Measurement concerns how psychological variables are defined and quantified. Perspective recognises that behaviour can be explained in different ways.',
        'Responsibility covers ethics: how psychologists treat participants and how findings are applied in society.',
      ],
      [
        ['Six concepts', 'Bias, causality, change, measurement, perspective, responsibility.'],
        ['Causality', 'Whether one variable directly causes a change in another.'],
        ['Measurement', 'How variables are defined (operationalised) and quantified.'],
        ['Responsibility', 'Ethical treatment of participants and use of findings.'],
      ],
      [
        ['Which concept asks if a correlation reflects cause and effect?', ['Bias', 'Causality', 'Change', 'Perspective'], 1, 'Causality examines cause and effect.'],
        ['Defining “stress” as cortisol level is an issue of…', ['Measurement', 'Responsibility', 'Change', 'Perspective'], 0, 'It concerns operationalisation.'],
        ['Explaining depression both biologically and socially shows…', ['Bias', 'Multiple perspectives', 'Causality', 'Measurement'], 1, 'Different frameworks give different explanations.'],
      ],
    ),
    F2: C(
      [
        'The biological framework explains behaviour through the brain, the nervous system, hormones, genes and evolution.',
        'Localisation of function says specific brain areas have specific jobs, such as Broca’s area for speech production. Neuroplasticity means the brain can change with experience.',
        'Neurotransmitters, like serotonin and dopamine, and hormones, like cortisol, influence mood and behaviour.',
        'Genetics research uses twin and adoption studies. Methods include brain scans like fMRI. Critics warn against reductionism: explaining complex behaviour only in biological terms.',
      ],
      [
        ['Localisation of function', 'Specific brain areas have specific functions.'],
        ['Neuroplasticity', 'The brain’s ability to change structure and function with experience.'],
        ['Twin studies', 'Compare identical and non-identical twins to estimate genetic influence.'],
        ['Reductionism', 'Explaining complex behaviour by one simple level, e.g. only biology.'],
      ],
      [
        ['London taxi drivers having a larger hippocampus supports…', ['Localisation only', 'Neuroplasticity', 'Reductionism', 'Conformity'], 1, 'Experience changed brain structure (Maguire, 2000).'],
        ['Identical twins share about what percentage of their DNA?', ['25%', '50%', '100%', '75%'], 2, 'Monozygotic twins are genetically identical.'],
        ['fMRI measures brain activity by detecting…', ['Electrical waves', 'Changes in blood oxygen', 'Hormone levels', 'Bone density'], 1, 'Active areas use more oxygen.'],
      ],
    ),
    F3: C(
      [
        'The cognitive framework explains behaviour through mental processes: perception, memory, thinking and decision-making.',
        'The multi-store model describes sensory memory, short-term memory and long-term memory. The working memory model divides short-term memory into components like the phonological loop and visuospatial sketchpad.',
        'Schemas are mental frameworks that shape how we interpret information, and can lead to memory distortion.',
        'Thinking can be fast and intuitive or slow and deliberate. Cognitive biases, like confirmation bias, affect decisions. Emotion also affects cognition, as in flashbulb memories.',
      ],
      [
        ['Multi-store model', 'Sensory memory → short-term memory → long-term memory.'],
        ['Working memory model', 'Central executive, phonological loop, visuospatial sketchpad, episodic buffer.'],
        ['Schema', 'A mental framework that organises knowledge.'],
        ['Confirmation bias', 'Seeking information that supports existing beliefs.'],
      ],
      [
        ['Remembering a story in a way that fits your culture shows…', ['Schema influence', 'Neuroplasticity', 'Obedience', 'Localisation'], 0, 'Bartlett’s War of the Ghosts study.'],
        ['The phonological loop is part of…', ['The multi-store model', 'The working memory model', 'Social identity theory', 'Maslow’s hierarchy'], 1, 'It handles sound-based information.'],
        ['Only noticing evidence that supports your opinion is…', ['Framing', 'Confirmation bias', 'Anchoring', 'Priming'], 1, 'A common cognitive bias.'],
      ],
    ),
    F4: C(
      [
        'The sociocultural framework explains behaviour through social and cultural influences.',
        'Social identity theory says we categorise ourselves into groups, identify with our in-group, and compare it favourably with out-groups, which can cause prejudice.',
        'Social learning theory says we learn by observing models, as in Bandura’s Bobo doll study.',
        'Culture shapes behaviour through norms and values. Cultural dimensions, like individualism versus collectivism, and enculturation and acculturation explain differences.',
      ],
      [
        ['Social identity theory', 'Categorisation, identification, comparison with groups.'],
        ['Social learning theory', 'Learning by observing and imitating models.'],
        ['Enculturation', 'Learning the norms of your own culture.'],
        ['Acculturation', 'Adapting to a new culture.'],
      ],
      [
        ['Children imitating an aggressive adult supports…', ['Social learning theory', 'Localisation', 'Working memory', 'Neuroplasticity'], 0, 'Bandura’s Bobo doll study.'],
        ['Favouring your own group over others relates to…', ['Social identity theory', 'Multi-store model', 'Hormones', 'Schema theory'], 0, 'In-group favouritism.'],
        ['An immigrant adapting to a new country’s customs is…', ['Enculturation', 'Acculturation', 'Conformity only', 'Obedience'], 1, 'Adjusting to a second culture.'],
      ],
    ),
    F5: C(
      [
        'In an experiment, the researcher manipulates the independent variable and measures its effect on the dependent variable while controlling other variables. Only experiments can establish cause and effect.',
        'Correlational studies measure the relationship between two variables that are not manipulated. A correlation never proves causation, because a third variable might explain both.',
        'Qualitative methods, such as interviews, observations and case studies, collect rich, detailed data about people’s experiences, but are harder to generalise.',
        'Sampling matters: random samples reduce bias, while opportunity and self-selected samples are quicker but less representative.',
        'Ethics are essential: informed consent, the right to withdraw, protection from harm, confidentiality and debriefing, especially when deception is used.',
      ],
      [
        ['Independent variable (IV)', 'The variable the researcher manipulates.'],
        ['Dependent variable (DV)', 'The variable that is measured.'],
        ['Correlation ≠ …', 'Causation — a third variable could explain the relationship.'],
        ['Ecological validity', 'How well findings apply to real-life settings.'],
      ],
      [
        ['Which method can establish cause and effect?', ['Case study', 'Correlational study', 'True experiment', 'Interview'], 2, 'Only manipulating the IV under controlled conditions shows causation.'],
        ['Asking whoever is nearby to take part is…', ['Random sampling', 'Opportunity sampling', 'Stratified sampling', 'Snowball sampling'], 1, 'Opportunity sampling uses people who are available.'],
        ['Which is an ethical requirement after using deception?', ['Paying participants', 'Debriefing', 'Publishing names', 'Repeating the study'], 1, 'Participants must be told the true aim afterwards.'],
      ],
    ),
    C1: C(
      [
        'The health and well-being context studies what affects physical and mental health.',
        'Topics include stress, addiction, health promotion, and mental health conditions such as depression and anxiety.',
        'Explanations come from all frameworks: biological, like genetics and neurotransmitters; cognitive, like negative thinking patterns; and sociocultural, like poverty and social support.',
        'Treatments include medication, cognitive behavioural therapy and community interventions. Evaluate their effectiveness and consider cultural factors in diagnosis.',
      ],
      [
        ['Biopsychosocial approach', 'Health explained by biological, psychological and social factors together.'],
        ['CBT', 'Cognitive behavioural therapy: changing negative thoughts and behaviours.'],
        ['Stress hormone', 'Cortisol.'],
        ['Health promotion', 'Campaigns to encourage healthier behaviour.'],
      ],
      [
        ['CBT treats depression mainly by…', ['Changing brain structure with surgery', 'Challenging negative thoughts', 'Increasing dopamine directly', 'Genetic testing'], 1, 'It targets cognition and behaviour.'],
        ['Which hormone is linked to the stress response?', ['Insulin', 'Cortisol', 'Oxytocin', 'Melatonin'], 1, 'Released by the adrenal glands.'],
        ['Explaining depression using genes, thinking and social factors together is…', ['Reductionist', 'Biopsychosocial', 'Purely cognitive', 'Behaviourist'], 1, 'It combines frameworks.'],
      ],
    ),
    C2: C(
      [
        'The human development context studies how people change across the lifespan.',
        'Topics include cognitive development, such as Piaget’s stages and Vygotsky’s zone of proximal development, and the development of identity and attachment.',
        'Attachment research includes Bowlby’s theory and Ainsworth’s Strange Situation, which identified secure and insecure attachment types.',
        'Development is influenced by biology, like brain maturation, and environment, like poverty and parenting. The nature-nurture debate runs through this context.',
      ],
      [
        ['Piaget’s stages', 'Sensorimotor, preoperational, concrete operational, formal operational.'],
        ['Zone of proximal development', 'What a child can do with help but not alone (Vygotsky).'],
        ['Strange Situation', 'Ainsworth’s method for classifying attachment types.'],
        ['Nature vs nurture', 'Debate about genetic versus environmental influences.'],
      ],
      [
        ['Vygotsky emphasised…', ['Fixed stages', 'Social interaction and scaffolding', 'Genes only', 'Reinforcement only'], 1, 'Learning happens through guided interaction.'],
        ['The Strange Situation measures…', ['Intelligence', 'Attachment type', 'Memory capacity', 'Obedience'], 1, 'Infants’ responses to separation and reunion.'],
        ['Understanding conservation develops in Piaget’s…', ['Sensorimotor stage', 'Concrete operational stage', 'Formal operational stage', 'Preoperational stage'], 1, 'Around ages 7–11.'],
      ],
    ),
    C3: C(
      [
        'The human relationships context studies how people form, maintain and end relationships, and how groups interact.',
        'Topics include attraction and romantic relationships, communication, prosocial behaviour and conflict between groups.',
        'Bystander research, like Latané and Darley’s studies, shows that people are less likely to help when others are present, due to diffusion of responsibility.',
        'Prejudice and intergroup conflict can be explained by social identity theory, and reduced by contact under the right conditions.',
      ],
      [
        ['Bystander effect', 'Less likely to help when others are present.'],
        ['Diffusion of responsibility', 'Each person feels less responsible in a group.'],
        ['Prosocial behaviour', 'Actions that benefit others, like helping.'],
        ['Contact hypothesis', 'Positive contact between groups can reduce prejudice.'],
      ],
      [
        ['Fewer people help in an emergency when many are watching. This is…', ['Conformity', 'The bystander effect', 'Obedience', 'Attraction'], 1, 'Responsibility is spread across the crowd.'],
        ['Reducing prejudice through cooperative contact supports…', ['The contact hypothesis', 'Localisation', 'Working memory', 'Piaget'], 0, 'Equal-status cooperative contact helps.'],
        ['Donating to charity is an example of…', ['Prosocial behaviour', 'Prejudice', 'Conformity', 'Stress'], 0, 'It benefits others.'],
      ],
    ),
    C4: C(
      [
        'The learning and cognition context studies how people learn and think.',
        'Learning theories include classical conditioning, learning by association as in Pavlov’s dogs, and operant conditioning, learning through reinforcement and punishment.',
        'Cognitive processes include memory, attention and decision-making. Technology and culture influence how we learn.',
        'Apply these to real situations such as education, habits and reliability of eyewitness memory, as in Loftus and Palmer’s study on leading questions.',
      ],
      [
        ['Classical conditioning', 'Learning by association (Pavlov).'],
        ['Operant conditioning', 'Learning through reinforcement and punishment (Skinner).'],
        ['Positive reinforcement', 'Adding a reward to increase a behaviour.'],
        ['Leading questions', 'Questions that suggest an answer and can distort memory.'],
      ],
      [
        ['A dog salivating at a bell after pairing with food is…', ['Operant conditioning', 'Classical conditioning', 'Social learning', 'Insight learning'], 1, 'Pavlov’s association learning.'],
        ['Loftus and Palmer found that the verb “smashed” led to…', ['Lower speed estimates', 'Higher speed estimates', 'No effect', 'Forgetting the event'], 1, 'Leading questions altered memory.'],
        ['Giving praise to increase homework completion is…', ['Positive reinforcement', 'Negative punishment', 'Classical conditioning', 'Extinction'], 0, 'A reward is added.'],
      ],
    ),
    HL1: C(
      [
        'The HL extension on culture asks how culture shapes behaviour and mental processes in every context.',
        'Cultural dimensions, such as Hofstede’s individualism versus collectivism, describe differences between cultures.',
        'Culture influences cognition, like memory and perception, emotion expression, and the diagnosis and treatment of mental disorders.',
        'Researchers must avoid ethnocentrism: judging other cultures by your own standards. Much research is based on WEIRD samples: Western, educated, industrialised, rich and democratic.',
      ],
      [
        ['Individualism vs collectivism', 'Focus on self versus focus on the group.'],
        ['Ethnocentrism', 'Judging other cultures by the standards of your own.'],
        ['WEIRD samples', 'Western, Educated, Industrialised, Rich, Democratic.'],
        ['Emic vs etic', 'Studying a culture from inside vs applying universal concepts.'],
      ],
      [
        ['A study only using American university students risks…', ['Ethnocentric bias / WEIRD sampling', 'High generalisability', 'No bias', 'Better ecological validity'], 0, 'Findings may not apply to other cultures.'],
        ['Collectivist cultures emphasise…', ['Personal achievement', 'Group harmony and duty', 'Competition', 'Independence'], 1, 'Interdependence is valued.'],
        ['Judging another culture’s behaviour as abnormal by your own norms is…', ['Acculturation', 'Ethnocentrism', 'Enculturation', 'Globalisation'], 1, 'It is a form of cultural bias.'],
      ],
    ),
    HL2: C(
      [
        'The HL extension on motivation asks what drives behaviour.',
        'Biological explanations include drives like hunger and hormones; cognitive explanations include goals and expectations; sociocultural explanations include social rewards and norms.',
        'Intrinsic motivation comes from enjoyment of the task itself; extrinsic motivation comes from external rewards like money or grades.',
        'Self-determination theory says motivation grows when people feel autonomy, competence and relatedness. Apply motivation to health, learning and relationships.',
      ],
      [
        ['Intrinsic motivation', 'Doing something for its own sake.'],
        ['Extrinsic motivation', 'Doing something for an external reward.'],
        ['Self-determination theory', 'Autonomy, competence, relatedness.'],
        ['Overjustification effect', 'External rewards can reduce intrinsic motivation.'],
      ],
      [
        ['Reading because you love books is…', ['Extrinsic motivation', 'Intrinsic motivation', 'Negative reinforcement', 'Conformity'], 1, 'The activity itself is rewarding.'],
        ['Self-determination theory lists…', ['Autonomy, competence, relatedness', 'Id, ego, superego', 'Fight or flight', 'Encoding, storage, retrieval'], 0, 'Three basic psychological needs.'],
        ['Paying children to draw may reduce their enjoyment. This is…', ['The overjustification effect', 'The bystander effect', 'Social loafing', 'Conformity'], 0, 'Extrinsic rewards can undermine intrinsic motivation.'],
      ],
    ),
    HL3: C(
      [
        'The HL extension on technology examines how technology affects behaviour and mental processes, and how it is used to study them.',
        'Topics include the effects of digital technology on attention, memory and learning, social media and well-being, and online relationships.',
        'Technology also changes research: brain imaging, online experiments, apps for data collection, and big data.',
        'Evaluate carefully: many studies are correlational, so it is hard to say whether technology causes changes, and effects differ between people.',
      ],
      [
        ['Google effect', 'Remembering where to find information rather than the information itself.'],
        ['Social media and well-being', 'Links found, but mostly correlational.'],
        ['Technology in research', 'e.g. fMRI, online surveys, tracking apps.'],
        ['Key evaluation point', 'Correlation does not show causation.'],
      ],
      [
        ['Relying on a phone to store facts rather than memorising them relates to…', ['The Google effect / cognitive offloading', 'Neuroplasticity only', 'Obedience', 'The bystander effect'], 0, 'We remember where information is stored.'],
        ['A study finds heavy social media users report lower well-being. You can conclude…', ['Social media causes low well-being', 'There is a correlation', 'Well-being causes social media use', 'Nothing at all'], 1, 'Correlation, not necessarily causation.'],
        ['Which is a technology used to study the brain?', ['fMRI', 'Questionnaire only', 'Case study', 'Interview'], 0, 'It images brain activity.'],
      ],
    ),
  },
};

export default content;
