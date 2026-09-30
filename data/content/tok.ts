import type { SubjectContentFile } from '../types';
import { C } from './helpers';

const content: SubjectContentFile = {
  units: {
    CORE: [
      'Theory of Knowledge asks how we know what we claim to know. The core theme, knowledge and the knower, looks at you as a knower and the communities you belong to.',
      'The knowledge framework, scope, perspectives, methods and tools, and ethics, gives you a structure for analysing any theme or area of knowledge.',
    ],
    OT: [
      'You study two of five optional themes: knowledge and technology, language, politics, religion, or indigenous societies.',
      'Each theme is explored using the knowledge framework and real-world examples.',
    ],
    AOK: [
      'The five areas of knowledge are history, the human sciences, the natural sciences, the arts and mathematics.',
      'You compare how each produces and justifies knowledge, using the same four elements of the knowledge framework.',
    ],
    AS: [
      'TOK is assessed by an exhibition, marked internally, and an essay on a prescribed title, marked externally.',
      'Together with the Extended Essay, TOK can earn up to three bonus points towards the Diploma.',
    ],
  },
  chapters: {
    K1: C(
      [
        'Knowledge and the knower focuses on you: how your background, experiences and communities shape what you know.',
        'We belong to knowledge communities, like a school, a culture or a scientific community, which share assumptions and methods.',
        'Our perspectives are shaped by factors like culture, language, emotions and beliefs, which can lead to bias.',
        'A knowledge question is open, contestable and about knowledge itself. For example: “To what extent does our culture shape what we accept as knowledge?”',
      ],
      [
        ['Knowledge community', 'A group sharing assumptions and methods for gaining knowledge.'],
        ['Knowledge question', 'An open, contestable question about knowledge itself.'],
        ['Perspective', 'A viewpoint shaped by background, culture and beliefs.'],
        ['Confirmation bias', 'Favouring evidence that supports what we already believe.'],
      ],
      [
        ['Which is a knowledge question?', ['What caused World War I?', 'How reliable is eyewitness testimony as a source of knowledge?', 'What is the boiling point of water?', 'Who wrote Hamlet?'], 1, 'It is about how we know.'],
        ['Scientists sharing peer review methods form a…', ['Knowledge community', 'Political party', 'Theme', 'Exhibition'], 0, 'They share methods and standards.'],
        ['Why might two people disagree about the same evidence?', ['One must be lying', 'Different perspectives shape interpretation', 'Evidence never matters', 'Knowledge is fixed'], 1, 'Background shapes interpretation.'],
      ],
    ),
    K2: C(
      [
        'The knowledge framework has four elements used to analyse any theme or area of knowledge.',
        'Scope asks what the area is about and what problems it tries to solve. Perspectives asks whose views are represented.',
        'Methods and tools asks how knowledge is produced and tested. Ethics asks what responsibilities knowers have.',
        'TOK also uses twelve concepts: evidence, certainty, truth, interpretation, power, justification, explanation, objectivity, perspective, culture, values and responsibility.',
      ],
      [
        ['Knowledge framework', 'Scope, perspectives, methods and tools, ethics.'],
        ['Methods and tools', 'How knowledge is produced and verified.'],
        ['Twelve TOK concepts', 'Evidence, certainty, truth, interpretation, power, justification, explanation, objectivity, perspective, culture, values, responsibility.'],
        ['Scope', 'What an area of knowledge covers and its purpose.'],
      ],
      [
        ['Which is NOT part of the knowledge framework?', ['Scope', 'Perspectives', 'Methods and tools', 'Word count'], 3, 'The fourth element is ethics.'],
        ['Asking “how do historians verify sources?” relates to…', ['Scope', 'Methods and tools', 'Ethics', 'Perspectives only'], 1, 'It concerns how knowledge is produced.'],
        ['Which is one of the twelve TOK concepts?', ['Evidence', 'Probability', 'Grammar', 'Nationality'], 0, 'Evidence is a core concept.'],
      ],
    ),
    OT1: C(
      [
        'Knowledge and technology explores how technology changes how we produce, store and share knowledge.',
        'Examples include the internet, search engines, social media algorithms and artificial intelligence.',
        'Technology can extend our knowledge, like telescopes and data analysis, but can also spread misinformation and create filter bubbles.',
        'Ethical questions include privacy, bias in algorithms, and who controls information. A knowledge question: “Can a machine know something?”',
      ],
      [
        ['Filter bubble', 'Algorithms show us information that matches our existing views.'],
        ['Algorithmic bias', 'Systematic unfairness in computer decisions.'],
        ['Technology as a tool', 'Extends our ability to observe and analyse.'],
        ['Example knowledge question', 'Can a machine know something?'],
      ],
      [
        ['Social media showing you only similar opinions creates…', ['A filter bubble', 'A paradigm shift', 'A primary source', 'A controlled experiment'], 0, 'Algorithms narrow what you see.'],
        ['An AI hiring tool favouring one group shows…', ['Objectivity', 'Algorithmic bias', 'Perfect fairness', 'Certainty'], 1, 'Bias in data carries into decisions.'],
        ['A telescope is an example of technology that…', ['Limits knowledge', 'Extends our senses', 'Creates bias', 'Replaces reasoning'], 1, 'It lets us observe more.'],
      ],
    ),
    OT2: C(
      [
        'Knowledge and language explores how language shapes what we know and how we share it.',
        'Language lets us communicate and build knowledge together, but words can be ambiguous, loaded or persuasive.',
        'The Sapir-Whorf hypothesis suggests language influences how we think.',
        'Translation can change meaning, and some ideas are hard to express across languages. A knowledge question: “To what extent does language limit what we can know?”',
      ],
      [
        ['Sapir-Whorf hypothesis', 'Language influences thought.'],
        ['Loaded language', 'Words carrying strong emotional connotations.'],
        ['Translation problem', 'Meaning can be lost or changed between languages.'],
        ['Example knowledge question', 'To what extent does language limit what we can know?'],
      ],
      [
        ['Calling protesters “freedom fighters” or “rioters” shows…', ['Loaded language', 'Neutral description', 'Translation', 'Grammar'], 0, 'Word choice frames the event.'],
        ['The idea that language shapes thought is the…', ['Hardy-Weinberg principle', 'Sapir-Whorf hypothesis', 'Scientific method', 'Placebo effect'], 1, 'Linguistic relativity.'],
        ['A key problem with translation is…', ['It is always exact', 'Meaning can shift', 'It removes bias', 'It needs no context'], 1, 'Some meanings don’t transfer.'],
      ],
    ),
    OT3: C(
      [
        'Knowledge and politics explores the relationship between knowledge and power.',
        'Governments and powerful groups can shape what counts as knowledge, through education, media and censorship.',
        'Political knowledge is often contested and linked to values, such as views on justice and freedom.',
        'Activism and whistleblowing can challenge official knowledge. A knowledge question: “Who decides what counts as truth in politics?”',
      ],
      [
        ['Knowledge and power', 'Those with power can shape what counts as knowledge.'],
        ['Propaganda', 'Information used to promote a political cause.'],
        ['Censorship', 'Suppressing information or ideas.'],
        ['Example knowledge question', 'Who decides what counts as truth in politics?'],
      ],
      [
        ['A government removing books from schools is an example of…', ['Peer review', 'Censorship', 'Translation', 'Empiricism'], 1, 'It restricts access to knowledge.'],
        ['Propaganda is mainly designed to…', ['Present all sides fairly', 'Promote a political cause', 'Test hypotheses', 'Measure data'], 1, 'It persuades rather than informs.'],
        ['Whistleblowers can…', ['Only support governments', 'Challenge official knowledge', 'Never be trusted', 'Create filter bubbles'], 1, 'They reveal hidden information.'],
      ],
    ),
    OT4: C(
      [
        'Knowledge and religion explores how religious communities produce and justify knowledge.',
        'Religious knowledge often draws on sacred texts, revelation, tradition, faith and personal experience.',
        'Religious and scientific claims may be seen as conflicting, independent or complementary.',
        'Religion also shapes ethical knowledge and identity. A knowledge question: “Can faith be a valid way of knowing?”',
      ],
      [
        ['Revelation', 'Knowledge believed to come from a divine source.'],
        ['Faith', 'Belief without complete empirical evidence.'],
        ['Relationship with science', 'Seen as conflicting, separate or complementary.'],
        ['Example knowledge question', 'Can faith be a valid way of knowing?'],
      ],
      [
        ['Knowledge believed to come from a divine source is…', ['Empirical', 'Revelation', 'Hypothesis', 'Consensus'], 1, 'It is revealed rather than discovered.'],
        ['Is religion one of the five areas of knowledge?', ['Yes', 'No, it is an optional theme', 'Only at HL', 'It replaced history'], 1, 'It is an optional theme.'],
        ['Believing something without complete evidence is…', ['Faith', 'Deduction', 'Measurement', 'Falsification'], 0, 'Faith goes beyond empirical proof.'],
      ],
    ),
    OT5: C(
      [
        'Knowledge and indigenous societies explores knowledge held by indigenous communities.',
        'Indigenous knowledge is often passed on orally, through stories, songs and practices, and is closely tied to land and community.',
        'Examples include traditional ecological knowledge used in land management and medicine.',
        'Issues include the protection of indigenous knowledge, appropriation, and the value of different knowledge systems. A knowledge question: “How is knowledge preserved without writing?”',
      ],
      [
        ['Indigenous knowledge', 'Knowledge developed by indigenous communities over generations.'],
        ['Oral tradition', 'Passing knowledge by speech, story and song.'],
        ['Traditional ecological knowledge', 'Indigenous understanding of local ecosystems.'],
        ['Cultural appropriation', 'Taking elements of another culture without permission or credit.'],
      ],
      [
        ['Indigenous knowledge is often transmitted through…', ['Peer-reviewed journals', 'Oral tradition', 'Patents', 'Laboratory tests'], 1, 'Stories, songs and practice.'],
        ['Traditional fire management by Aboriginal Australians is an example of…', ['Traditional ecological knowledge', 'Propaganda', 'Algorithmic bias', 'Censorship'], 0, 'Knowledge of land management.'],
        ['Using indigenous designs commercially without permission raises issues of…', ['Appropriation', 'Falsification', 'Deduction', 'Translation'], 0, 'Knowledge ownership and respect.'],
      ],
    ),
    AOK1: C(
      [
        'History studies the past through surviving evidence, mainly sources.',
        'Historians select, interpret and evaluate sources, so accounts of the past differ. This is historiography.',
        'Challenges include bias in sources, incomplete evidence, and the historian’s own perspective; “history is written by the victors”.',
        'A knowledge question: “How can we know about the past if we cannot observe it directly?”',
      ],
      [
        ['Historiography', 'The study of how history has been written and interpreted.'],
        ['Primary source', 'Created at the time of the events.'],
        ['Selection problem', 'Historians choose which evidence to include.'],
        ['Example knowledge question', 'How can we know about the past if we cannot observe it?'],
      ],
      [
        ['A letter written by a soldier in 1916 is…', ['A secondary source', 'A primary source', 'A hypothesis', 'A model'], 1, 'Created at the time.'],
        ['Different historians interpreting the same events differently shows…', ['History is fake', 'Interpretation shapes historical knowledge', 'Sources are useless', 'Only one view is allowed'], 1, 'Selection and interpretation matter.'],
        ['“History is written by the victors” suggests…', ['All history is accurate', 'Power influences historical knowledge', 'Losers write more', 'Sources are neutral'], 1, 'Power shapes whose story is told.'],
      ],
    ),
    AOK2: C(
      [
        'The human sciences, like psychology, economics and anthropology, study human behaviour and societies.',
        'Methods include experiments, surveys, observation and statistical models.',
        'Human behaviour is complex and influenced by culture and free will, making prediction harder than in the natural sciences. The observer effect can change behaviour.',
        'A knowledge question: “To what extent can human behaviour be studied scientifically?”',
      ],
      [
        ['Human sciences', 'Study human behaviour and societies, e.g. psychology, economics.'],
        ['Observer effect', 'People change behaviour when they know they’re observed.'],
        ['Why prediction is hard', 'Human behaviour is complex and influenced by culture and choice.'],
        ['Example knowledge question', 'To what extent can human behaviour be studied scientifically?'],
      ],
      [
        ['Workers improving because they know they’re being studied shows…', ['The Hawthorne or observer effect', 'Placebo only', 'Falsification', 'Deduction'], 0, 'Observation changes behaviour.'],
        ['Economics is part of…', ['The natural sciences', 'The human sciences', 'The arts', 'Mathematics'], 1, 'It studies human behaviour.'],
        ['A key challenge in the human sciences is…', ['Behaviour is simple', 'Humans are complex and culturally varied', 'No data exists', 'Experiments are impossible'], 1, 'This makes universal laws hard.'],
      ],
    ),
    AOK3: C(
      [
        'The natural sciences, like physics, chemistry and biology, study the natural world through observation and experiment.',
        'The scientific method involves hypotheses, experiments, data and peer review. Karl Popper argued good theories must be falsifiable.',
        'Scientific knowledge is provisional: it can change with new evidence, sometimes through paradigm shifts, as Thomas Kuhn described.',
        'A knowledge question: “If scientific knowledge can change, how can we be confident in it?”',
      ],
      [
        ['Falsifiability', 'A theory must be testable and capable of being proven wrong (Popper).'],
        ['Paradigm shift', 'A major change in scientific thinking (Kuhn).'],
        ['Peer review', 'Experts evaluate research before publication.'],
        ['Provisional knowledge', 'Knowledge that may change with new evidence.'],
      ],
      [
        ['Popper said a scientific theory must be…', ['Proven true', 'Falsifiable', 'Popular', 'Old'], 1, 'It must be testable.'],
        ['The move from Newtonian physics to relativity is an example of…', ['Peer review', 'A paradigm shift', 'Confirmation bias', 'Observer effect'], 1, 'A fundamental change in theory.'],
        ['Scientific knowledge is described as provisional because…', ['It is always wrong', 'It can be revised with new evidence', 'It is never tested', 'It is opinion'], 1, 'Science self-corrects.'],
      ],
    ),
    AOK4: C(
      [
        'The arts, like literature, music, visual art, film and dance, create and share knowledge through creative expression.',
        'Art can convey emotional and experiential knowledge that is hard to express otherwise.',
        'Interpretation is central: meaning may depend on the artist’s intention, the audience or the context.',
        'Questions include: What counts as art? Who decides? A knowledge question: “Can art tell us truths that other areas of knowledge cannot?”',
      ],
      [
        ['Knowledge in the arts', 'Emotional, experiential and interpretive knowledge.'],
        ['Artist’s intention', 'What the creator meant the work to express.'],
        ['Interpretation', 'Audiences may find different meanings.'],
        ['Example knowledge question', 'Can art tell us truths other areas cannot?'],
      ],
      [
        ['A novel helping readers understand grief shows the arts provide…', ['Experiential and emotional knowledge', 'Only facts', 'Statistical proof', 'Falsifiable theories'], 0, 'Art conveys lived experience.'],
        ['If a painting means different things to different viewers, this shows…', ['The painting failed', 'Interpretation plays a key role', 'Art has no meaning', 'Only the artist is right'], 1, 'Meaning is open to interpretation.'],
        ['“Who decides what counts as art?” is…', ['A knowledge question', 'A factual question', 'A maths problem', 'A history date'], 0, 'It is open and about knowledge.'],
      ],
    ),
    AOK5: C(
      [
        'Mathematics produces knowledge through proof, reasoning from axioms using deductive logic.',
        'Mathematical proofs give a high degree of certainty, unlike the provisional knowledge of the sciences.',
        'Debate continues over whether mathematics is discovered, existing independently, or invented by humans.',
        'Mathematics is powerful in describing the world, which raises the question of why it works so well. A knowledge question: “Is mathematical knowledge certain?”',
      ],
      [
        ['Axiom', 'A basic statement accepted without proof.'],
        ['Deductive reasoning', 'Drawing certain conclusions from premises.'],
        ['Discovered vs invented', 'Debate about whether maths exists independently of humans.'],
        ['Example knowledge question', 'Is mathematical knowledge certain?'],
      ],
      [
        ['Mathematical knowledge is mainly justified through…', ['Experiments', 'Proof', 'Opinion polls', 'Revelation'], 1, 'Deductive proof from axioms.'],
        ['A statement accepted as a starting point without proof is…', ['A theorem', 'An axiom', 'A hypothesis', 'A conjecture'], 1, 'Axioms are foundational.'],
        ['The debate over whether maths is discovered or invented concerns…', ['Its nature and origin', 'Its difficulty', 'Its history only', 'Calculators'], 0, 'A classic TOK debate.'],
      ],
    ),
    AS1: C(
      [
        'For the TOK exhibition, you choose one of the 35 IA prompts provided by the IB.',
        'You select three objects that show how TOK manifests in the world around you, each with a commentary.',
        'The total commentary is up to 950 words. Explain each object’s real-world context and link it clearly to the prompt.',
        'Choose specific objects, like a particular photo or tweet, rather than generic ones, and justify why each was included.',
      ],
      [
        ['Number of objects', 'Three.'],
        ['Number of IA prompts', '35, choose one.'],
        ['Word limit', 'Up to 950 words in total.'],
        ['Marking', 'Assessed internally by teachers, moderated by the IB.'],
      ],
      [
        ['How many objects does a TOK exhibition include?', ['One', 'Two', 'Three', 'Five'], 2, 'Three objects linked to one prompt.'],
        ['The exhibition commentary is limited to…', ['650 words', '950 words', '1,600 words', '4,000 words'], 1, 'Up to 950 words.'],
        ['A strong object choice is…', ['A generic “book”', 'A specific item with real-world context', 'An imaginary object', 'Anything random'], 1, 'Specific objects make stronger links.'],
      ],
    ),
    AS2: C(
      [
        'The TOK essay answers one of six prescribed titles released by the IB for each exam session.',
        'The limit is 1,600 words. It is marked externally.',
        'Unpack the title: define key terms and identify the knowledge questions it raises. Explore it using two areas of knowledge, unless the title says otherwise.',
        'Use real examples, weigh claims against counterclaims, and reach a nuanced conclusion that considers implications.',
      ],
      [
        ['TOK essay word limit', '1,600 words.'],
        ['Number of prescribed titles', 'Six per session.'],
        ['Claim and counterclaim', 'Present an argument, then consider an opposing view.'],
        ['Marking', 'Externally assessed by the IB.'],
      ],
      [
        ['The TOK essay limit is…', ['950 words', '1,200 words', '1,600 words', '4,000 words'], 2, 'Up to 1,600 words.'],
        ['How many prescribed titles are released each session?', ['Three', 'Five', 'Six', 'Ten'], 2, 'You choose one of six.'],
        ['A strong TOK essay includes…', ['Only one-sided argument', 'Claims, counterclaims and real examples', 'No examples', 'Personal diary entries'], 1, 'Balance and evidence are rewarded.'],
      ],
    ),
  },
};

export default content;
