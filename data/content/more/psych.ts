import type { MoreContent } from '../../types';
import { M } from '../helpers';

// Lesson 2 (key studies, evaluation, common mistakes, exam technique) plus extra flashcards
// and questions for every Psychology chapter.
const more: Record<string, MoreContent> = {
  F1: M(
    [
      'Worked example of causality: studies show people who sleep less report more stress. But does poor sleep cause stress, does stress cause poor sleep, or does a third variable, like workload, cause both?',
      'Bias can come from the researcher, like confirmation bias in interpreting data, or from participants, like demand characteristics, where participants guess the aim and change their behaviour.',
      'Change asks how behaviour and knowledge develop over time, for example how theories of memory changed from the multi-store model to the working memory model.',
      'Exam tip: use at least one concept explicitly in every answer, such as “This raises an issue of measurement because…”. The concepts are central to the course’s assessment.',
    ],
    [
      ['Demand characteristics', 'Cues that lead participants to guess the aim and change behaviour.'],
      ['Third variable problem', 'An unmeasured variable may cause both correlated variables.'],
      ['Researcher bias', 'The researcher’s expectations affect how results are collected or interpreted.'],
      ['Perspective (concept)', 'Recognising that behaviour can be explained from different frameworks and viewpoints.'],
    ],
    [
      ['Participants act the way they think the researcher wants. This is…', 'Demand characteristics', ['Researcher bias', 'Random sampling', 'Informed consent'], 'Participants change behaviour based on cues about the aim.'],
      ['Ice cream sales and drowning are correlated because of hot weather. This shows…', 'The third variable problem', ['Causation', 'Reliability', 'Operationalisation'], 'Heat increases both, so one doesn’t cause the other.'],
      ['Protecting participants from harm relates to which concept?', 'Responsibility', ['Measurement', 'Change', 'Causality'], 'Responsibility covers ethical treatment.'],
      ['Using a double-blind procedure reduces…', 'Researcher and participant bias', ['Sample size', 'Ecological validity', 'Ethical concerns'], 'Neither side knows the condition, reducing expectations.'],
    ],
  ),
  F2: M(
    [
      'Key study: Maguire and colleagues in 2000 used MRI and found London taxi drivers had larger posterior hippocampi than controls, and size correlated with years of driving. This supports neuroplasticity.',
      'Key study: Caspi and colleagues in 2003 found people with short versions of the serotonin transporter gene were more likely to become depressed after stressful life events. This shows gene–environment interaction.',
      'Hormones: cortisol rises under stress; oxytocin is linked to bonding and trust. Pheromones are chemical signals whose role in human behaviour is still debated.',
      'Evaluation: brain imaging is non-invasive but correlational; animal research allows control but raises generalisation and ethical issues; biological explanations can be reductionist.',
    ],
    [
      ['Maguire et al. (2000)', 'Taxi drivers had larger posterior hippocampi — evidence of neuroplasticity.'],
      ['Caspi et al. (2003)', 'Serotonin transporter gene interacts with stress to predict depression.'],
      ['Oxytocin', 'Hormone linked to bonding, trust and social behaviour.'],
      ['Gene–environment interaction', 'Genes affect behaviour depending on environmental conditions.'],
    ],
    [
      ['Caspi et al. showed depression risk depends on…', 'Both genes and stressful life events', ['Genes alone', 'Stress alone', 'Diet only'], 'Gene–environment interaction.'],
      ['Which hormone is linked to trust and bonding?', 'Oxytocin', ['Cortisol', 'Adrenaline', 'Melatonin'], 'Oxytocin is released during social bonding.'],
      ['A limitation of brain imaging studies is that they…', 'Often show correlation, not causation', ['Are always invasive', 'Can’t show brain structure', 'Are never reliable'], 'Activity may accompany rather than cause behaviour.'],
      ['Explaining complex behaviour only through neurotransmitters is criticised as…', 'Reductionist', ['Holistic', 'Ethical', 'Ecologically valid'], 'It reduces behaviour to one level of explanation.'],
    ],
  ),
  F3: M(
    [
      'Key study: Bartlett in 1932 had British participants recall a Native American story, “The War of the Ghosts”. They changed unfamiliar details to fit their own schemas, showing memory is reconstructive.',
      'Glanzer and Cunitz in 1966 found a serial position effect: words at the start and end of a list are recalled best, supporting separate short- and long-term memory stores.',
      'Kahneman described System 1, fast and intuitive thinking, and System 2, slow and logical thinking. Heuristics like availability come from System 1 and can cause errors.',
      'Evaluation: cognitive research often uses lab tasks with high control but low ecological validity, and mental processes must be inferred from behaviour.',
    ],
    [
      ['Bartlett (1932)', '“War of the Ghosts”: memory reconstructed to fit schemas.'],
      ['Serial position effect', 'Better recall of the first (primacy) and last (recency) items in a list.'],
      ['System 1 vs System 2', 'Kahneman: fast intuitive thinking vs slow deliberate thinking.'],
      ['Reconstructive memory', 'Memories are rebuilt at recall and can be distorted.'],
    ],
    [
      ['Better recall of the last words in a list is the…', 'Recency effect', ['Primacy effect', 'Leading question effect', 'Bystander effect'], 'The last items are still in short-term memory.'],
      ['Bartlett’s study supports…', 'Schema theory and reconstructive memory', ['Localisation of function', 'Operant conditioning', 'Social identity theory'], 'Participants changed details to fit their culture.'],
      ['Fast, automatic thinking in Kahneman’s model is…', 'System 1', ['System 2', 'Working memory', 'The central executive'], 'System 1 relies on heuristics.'],
      ['A key criticism of lab memory studies is…', 'Low ecological validity', ['Too little control', 'No replication', 'No numerical data'], 'Artificial tasks may not reflect everyday memory.'],
    ],
  ),
  F4: M(
    [
      'Key study: Tajfel in 1971 put schoolboys into groups on trivial grounds. They still favoured their own group when allocating points. This minimal group paradigm supports social identity theory.',
      'Key study: Bandura, Ross and Ross in 1961 found children who watched an adult attack a Bobo doll were more likely to imitate the aggression.',
      'Conformity: Asch in 1951 found participants conformed to a clearly wrong group answer on about a third of trials. Cultural research suggests conformity is higher in collectivist cultures.',
      'Evaluation: sociocultural studies often use artificial situations and Western samples. Cultural explanations must avoid stereotyping and treat culture as dynamic.',
    ],
    [
      ['Tajfel (1971)', 'Minimal groups: people favour their in-group even on trivial grounds.'],
      ['Bandura et al. (1961)', 'Children imitated aggression modelled on a Bobo doll.'],
      ['Asch (1951)', 'Participants conformed to a wrong majority on about a third of trials.'],
      ['Stereotype', 'A generalised belief about members of a group.'],
    ],
    [
      ['The minimal group paradigm showed that…', 'In-group favouritism arises even with trivial groups', ['People never discriminate', 'Groups need conflict to form', 'Only adults favour their group'], 'Tajfel’s boys favoured their group.'],
      ['In Asch’s study, conformity occurred on about…', 'A third of critical trials', ['All trials', 'No trials', 'Two thirds of trials'], 'Around 32% of responses conformed.'],
      ['A criticism of the Bobo doll study is that…', 'Hitting a doll may not reflect real aggression', ['It used adults only', 'It had no control group', 'It was a field study'], 'Ecological validity is limited.'],
      ['Learning your own culture’s norms as you grow up is…', 'Enculturation', ['Acculturation', 'Conformity', 'Reinforcement'], 'Enculturation happens within your own culture.'],
    ],
  ),
  F5: M(
    [
      'Experimental designs: independent samples, different people in each condition; repeated measures, the same people in all conditions; matched pairs, similar people matched across conditions.',
      'Controls include random allocation, counterbalancing to avoid order effects, and standardised procedures. Confounding variables threaten internal validity.',
      'Qualitative research relies on credibility, triangulation, reflexivity and transferability rather than statistical generalisation.',
      'Statistics: descriptive statistics summarise data, such as mean and standard deviation; inferential tests, like a t-test, tell you whether a difference is likely due to chance, usually at p less than 0.05.',
    ],
    [
      ['Repeated measures design', 'The same participants take part in all conditions.'],
      ['Counterbalancing', 'Varying the order of conditions to control order effects.'],
      ['Triangulation', 'Using several methods, researchers or sources to check findings.'],
      ['p < 0.05', 'Less than 5% probability the result is due to chance.'],
    ],
    [
      ['A key weakness of repeated measures designs is…', 'Order effects like practice or fatigue', ['Participant variables', 'Needing more participants', 'No control'], 'Doing both conditions can change performance.'],
      ['Using interviews and observations to confirm the same finding is…', 'Triangulation', ['Counterbalancing', 'Random allocation', 'Operationalisation'], 'Multiple methods increase credibility.'],
      ['A result with p < 0.05 means…', 'There is less than a 5% probability the result is due to chance', ['The hypothesis is proven', 'The study is ethical', '95% of participants agreed'], 'It is statistically significant at the 5% level.'],
      ['Random allocation to conditions helps control…', 'Participant variables', ['Order effects', 'Demand characteristics fully', 'Sample size'], 'Individual differences are spread evenly.'],
    ],
  ),
  C1: M(
    [
      'Key study: Brown and Harris in 1978 found working-class women in London with young children and no close confidant were more likely to become depressed, a social explanation of depression.',
      'Stress: Selye’s general adaptation syndrome describes three stages: alarm, resistance and exhaustion. Chronic stress raises cortisol, which can weaken immune function.',
      'Health promotion uses models like the health belief model: people change behaviour if they feel susceptible, see serious consequences, see benefits and few barriers, and get cues to action.',
      'Evaluation: treatments are often compared in randomised controlled trials. Combining medication and CBT is often more effective than either alone, but individual differences matter.',
    ],
    [
      ['Brown and Harris (1978)', 'Social factors like lack of a confidant increased depression risk.'],
      ['General adaptation syndrome', 'Alarm, resistance, exhaustion (Selye).'],
      ['Health belief model', 'Behaviour change depends on perceived susceptibility, severity, benefits, barriers and cues.'],
      ['Randomised controlled trial', 'Participants randomly assigned to treatment or control to test effectiveness.'],
    ],
    [
      ['The three stages of Selye’s GAS are…', 'Alarm, resistance, exhaustion', ['Denial, anger, acceptance', 'Input, storage, retrieval', 'Attention, retention, motivation'], 'Chronic stress leads to exhaustion.'],
      ['Brown and Harris’s study supports a…', 'Sociocultural explanation of depression', ['Purely genetic explanation', 'Cognitive explanation only', 'Explanation based on hormones'], 'Social circumstances increased risk.'],
      ['In the health belief model, a text reminder to get vaccinated is a…', 'Cue to action', ['Barrier', 'Perceived severity', 'Relapse'], 'Cues prompt people to act.'],
      ['The best way to test if a therapy works is…', 'A randomised controlled trial', ['A single case study', 'A questionnaire about opinions', 'An interview with the therapist'], 'Randomisation allows causal conclusions.'],
    ],
  ),
  C2: M(
    [
      'Piaget’s stages: sensorimotor, from birth to about 2, object permanence; preoperational, about 2 to 7, egocentrism; concrete operational, about 7 to 11, conservation; formal operational, 11 plus, abstract reasoning.',
      'Vygotsky stressed social interaction and language. Scaffolding, support that is gradually withdrawn, helps children work within their zone of proximal development.',
      'Ainsworth’s Strange Situation identified secure, insecure-avoidant and insecure-resistant attachment. Van IJzendoorn and Kroonenberg in 1988 found secure attachment was most common across cultures, but proportions varied.',
      'Poverty and stress can affect brain development, but interventions like early education programmes can help. Development reflects the interaction of nature and nurture.',
    ],
    [
      ['Object permanence', 'Understanding objects exist when out of sight — sensorimotor stage.'],
      ['Scaffolding', 'Support from an expert that is gradually withdrawn.'],
      ['Egocentrism (Piaget)', 'Difficulty seeing from another’s viewpoint — preoperational stage.'],
      ['Van IJzendoorn & Kroonenberg (1988)', 'Cross-cultural meta-analysis of attachment types.'],
    ],
    [
      ['Understanding that hidden objects still exist develops in the…', 'Sensorimotor stage', ['Preoperational stage', 'Concrete operational stage', 'Formal operational stage'], 'It develops in infancy.'],
      ['A teacher giving hints and then removing them is…', 'Scaffolding', ['Conditioning', 'Conservation', 'Imprinting'], 'Vygotsky’s idea of support in the ZPD.'],
      ['Across cultures, the most common attachment type was…', 'Secure', ['Insecure-avoidant', 'Insecure-resistant', 'Disorganised'], 'Secure attachment was most common in all countries studied.'],
      ['Abstract and hypothetical reasoning develops in the…', 'Formal operational stage', ['Sensorimotor stage', 'Preoperational stage', 'Concrete operational stage'], 'From about age 11.'],
    ],
  ),
  C3: M(
    [
      'Key study: Darley and Latané in 1968 found participants who thought others also heard someone having a seizure were slower to help, showing diffusion of responsibility.',
      'Sherif’s Robbers Cave study in 1954 created conflict between two groups of boys through competition, then reduced it with superordinate goals that required cooperation.',
      'Relationships: attraction is linked to proximity, similarity and familiarity. Communication patterns, like Gottman’s research on criticism and contempt, predict whether relationships last.',
      'Evaluation: many studies are lab-based or use Western students. Field studies increase ecological validity but reduce control.',
    ],
    [
      ['Darley and Latané (1968)', 'More bystanders led to slower helping (diffusion of responsibility).'],
      ['Robbers Cave (Sherif, 1954)', 'Competition created conflict; superordinate goals reduced it.'],
      ['Superordinate goal', 'A goal that requires groups to cooperate.'],
      ['Gottman’s research', 'Criticism, contempt, defensiveness and stonewalling predict relationship breakdown.'],
    ],
    [
      ['Sherif reduced conflict between groups using…', 'Superordinate goals', ['Competition', 'Punishment', 'Separation'], 'Shared goals required cooperation.'],
      ['In Darley and Latané’s study, help was slowest when…', 'Participants believed many others were present', ['They were alone', 'The victim was a friend', 'They were paid'], 'Responsibility was diffused.'],
      ['Which factor increases attraction?', 'Similarity', ['Distance', 'Unfamiliarity', 'Conflict'], 'People are drawn to those like themselves.'],
      ['A limitation of lab studies of helping is…', 'Low ecological validity', ['Too little control', 'No ethics', 'Too much realism'], 'Real emergencies may differ.'],
    ],
  ),
  C4: M(
    [
      'Key study: Loftus and Palmer in 1974 showed participants a car crash. Those asked how fast the cars “smashed” gave higher speed estimates and were more likely to falsely recall broken glass.',
      'Operant conditioning, from Skinner: positive reinforcement adds a reward, negative reinforcement removes something unpleasant, and punishment reduces behaviour.',
      'Technology and cognition: multitasking with phones reduces attention and learning; retrieval practice, like flashcards, and spacing improve long-term memory.',
      'Apply it: this app’s flashcards and quizzes use the testing effect, where actively recalling information strengthens memory more than rereading.',
    ],
    [
      ['Negative reinforcement', 'Removing something unpleasant to increase a behaviour.'],
      ['Testing effect', 'Recalling information strengthens memory more than rereading.'],
      ['Spacing effect', 'Spreading study over time improves long-term retention.'],
      ['Loftus and Palmer (1974)', 'Leading questions distorted speed estimates and memory.'],
    ],
    [
      ['Taking painkillers to remove a headache, which makes you take them again, is…', 'Negative reinforcement', ['Positive reinforcement', 'Punishment', 'Classical conditioning'], 'Removing something unpleasant strengthens the behaviour.'],
      ['Which revision method uses the testing effect?', 'Self-quizzing with flashcards', ['Highlighting notes', 'Rereading the textbook', 'Copying notes'], 'Active recall strengthens memory.'],
      ['In Loftus and Palmer’s follow-up, the “smashed” group was more likely to report…', 'Broken glass that wasn’t there', ['No crash at all', 'Slower speeds', 'Accurate details'], 'The verb altered their memory.'],
      ['Studying a little every day rather than cramming uses the…', 'Spacing effect', ['Recency effect', 'Bystander effect', 'Overjustification effect'], 'Distributed practice improves long-term memory.'],
    ],
  ),
  HL1: M(
    [
      'Henrich and colleagues in 2010 pointed out that most psychology research uses WEIRD participants: Western, educated, industrialised, rich and democratic. Findings may not generalise.',
      'Culture affects cognition: Masuda and Nisbett in 2001 found Japanese participants noticed more background and context in scenes than Americans, who focused on central objects.',
      'Emic approaches study a culture from the inside using its own concepts; etic approaches compare cultures using universal concepts. Good research often combines both.',
      'Evaluation: cultural dimensions are useful but broad. Individuals within a culture vary, and cultures change over time.',
    ],
    [
      ['Masuda and Nisbett (2001)', 'Japanese participants attended more to context than Americans.'],
      ['Emic approach', 'Studying a culture from within, using its own concepts.'],
      ['Etic approach', 'Comparing cultures using universal concepts.'],
      ['Henrich et al. (2010)', 'Critiqued reliance on WEIRD samples in psychology.'],
    ],
    [
      ['WEIRD stands for Western, educated, industrialised, rich and…', 'Democratic', ['Diverse', 'Developed', 'Digital'], 'Most research samples come from such societies.'],
      ['Studying a culture using its own concepts is…', 'An emic approach', ['An etic approach', 'Ethnocentrism', 'Acculturation'], 'Emic research is from the inside.'],
      ['Masuda and Nisbett found Japanese participants…', 'Noticed more contextual details', ['Remembered fewer objects overall', 'Were less attentive', 'Focused only on the main fish'], 'Culture shaped attention.'],
      ['A limitation of Hofstede’s dimensions is that…', 'They overlook individual differences within cultures', ['They were never tested', 'They only apply to animals', 'They ignore national cultures'], 'Averages can create stereotypes.'],
    ],
  ),
  HL2: M(
    [
      'Key study: Lepper, Greene and Nisbett in 1973 found children who expected a reward for drawing later spent less free time drawing than children who got no reward, the overjustification effect.',
      'Deci and Ryan’s self-determination theory names three needs: autonomy, competence and relatedness. Schools and workplaces that meet them increase intrinsic motivation.',
      'Biological motivation includes dopamine’s role in reward and anticipation, which is also linked to addiction and to habit-forming apps and games.',
      'Evaluation: motivation is hard to measure directly, so researchers use behaviour, self-report or brain activity, each with limitations.',
    ],
    [
      ['Lepper et al. (1973)', 'Expected rewards reduced children’s intrinsic interest in drawing.'],
      ['Autonomy (SDT)', 'Feeling in control of your own actions.'],
      ['Competence (SDT)', 'Feeling capable and effective.'],
      ['Dopamine and motivation', 'Linked to reward, anticipation and wanting.'],
    ],
    [
      ['In Lepper et al., children who expected a reward later…', 'Drew less in free time', ['Drew more in free time', 'Stopped drawing permanently', 'Refused rewards'], 'Extrinsic rewards undermined intrinsic interest.'],
      ['Feeling close and connected to others is which SDT need?', 'Relatedness', ['Autonomy', 'Competence', 'Achievement'], 'Relatedness is one of the three basic needs.'],
      ['Which neurotransmitter is most linked to reward?', 'Dopamine', ['Cortisol', 'Oxytocin', 'Melatonin'], 'Dopamine signals reward and anticipation.'],
      ['A challenge in motivation research is that motivation…', 'Must be inferred rather than directly observed', ['Is easy to measure', 'Never changes', 'Only exists in animals'], 'Researchers use indirect measures.'],
    ],
  ),
  HL3: M(
    [
      'Key study: Sparrow, Liu and Wegner in 2011 found people who expected information to be saved on a computer remembered it less well but remembered where it was stored better.',
      'Research on social media and well-being shows small average correlations. Effects depend on how technology is used, for example active chatting versus passive scrolling.',
      'Technology enables new methods: fMRI and EEG, eye-tracking, online experiments with large samples, and smartphone data. These raise ethical issues around privacy and consent.',
      'Evaluation: rapid technological change means findings can quickly date, and much research is correlational and relies on self-report.',
    ],
    [
      ['Sparrow et al. (2011)', 'The Google effect: people remember where information is stored rather than the information.'],
      ['Passive vs active social media use', 'Scrolling vs interacting; passive use is more linked to lower well-being.'],
      ['EEG', 'Measures electrical activity of the brain through scalp electrodes.'],
      ['Ethical issue in digital research', 'Privacy and informed consent with online data.'],
    ],
    [
      ['Sparrow et al. found people remembered better…', 'Where information was saved', ['The information itself', 'Nothing at all', 'Only numbers'], 'The internet acts as external memory.'],
      ['Which use of social media is more linked to lower well-being?', 'Passive scrolling', ['Messaging close friends', 'Video calls with family', 'Joining study groups'], 'How it is used matters more than time spent.'],
      ['Which technology records electrical brain activity?', 'EEG', ['MRI', 'PET', 'CT'], 'Electrodes on the scalp record activity.'],
      ['Why can technology research date quickly?', 'Technology and how people use it change rapidly', ['Brains change every year', 'Studies are never published', 'Ethics forbid replication'], 'Findings about one platform may not apply to new ones.'],
    ],
  ),
};

export default more;
