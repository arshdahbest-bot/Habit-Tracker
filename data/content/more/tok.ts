import type { MoreContent } from '../../types';
import { M } from '../helpers';

// Lesson 2 (real-life situations, knowledge questions, common mistakes, assessment technique)
// plus extra flashcards and questions for every TOK chapter.
const more: Record<string, MoreContent> = {
  K1: M(
    [
      'Real-life situation: two students read the same news story about a protest. One trusts it and one dismisses it, because of their political views and friends’ opinions. This raises questions about perspective and bias.',
      'Personal vs shared knowledge: personal knowledge, like knowing how to ride a bike, comes from your experience; shared knowledge, like the periodic table, is built by communities.',
      'Knowledge claims should be supported by justification. Ask: what counts as good evidence, and who decides?',
      'Common mistake: writing about “the knower” without examples. Always ground ideas in specific real-life situations.',
    ],
    [
      ['Personal knowledge', 'Knowledge from your own experience and skills.'],
      ['Shared knowledge', 'Knowledge built and checked by communities.'],
      ['Knowledge claim', 'A statement that something is known, needing justification.'],
      ['Real-life situation (RLS)', 'A specific example used to explore TOK ideas.'],
    ],
    [
      ['Knowing how to swim is an example of…', 'Personal knowledge', ['Shared knowledge', 'A knowledge question', 'Historiography'], 'It comes from your own experience.'],
      ['The periodic table is an example of…', 'Shared knowledge', ['Personal knowledge', 'Opinion', 'Revelation'], 'Built by a scientific community.'],
      ['A good TOK answer is grounded in…', 'Specific real-life situations', ['General statements only', 'Personal opinions only', 'Dictionary definitions'], 'Examples make ideas concrete.'],
      ['“Water boils at 100 °C at sea level” is a…', 'Knowledge claim', ['Knowledge question', 'Perspective', 'Value judgement'], 'A statement that something is known.'],
    ],
  ),
  K2: M(
    [
      'Applying the framework to history: scope, understanding the human past; perspectives, whose story is told; methods, source analysis; ethics, how to represent victims respectfully.',
      'The twelve TOK concepts are evidence, certainty, truth, interpretation, power, justification, explanation, objectivity, perspective, culture, values and responsibility.',
      'Using concepts well: “The concept of power is central here, because those who control archives decide which evidence survives.”',
      'Exam tip: comparing how two areas of knowledge use methods, like proof in mathematics versus experiment in science, makes strong essays.',
    ],
    [
      ['Objectivity', 'Knowledge not distorted by personal feelings or bias.'],
      ['Justification', 'The reasons that support a knowledge claim.'],
      ['Ethics (framework)', 'Moral questions about producing and using knowledge.'],
      ['Perspectives (framework)', 'How different viewpoints shape an area of knowledge.'],
    ],
    [
      ['“Who controls which evidence survives?” relates to the concept of…', 'Power', ['Certainty', 'Explanation', 'Culture only'], 'Power shapes knowledge.'],
      ['How many TOK concepts are there?', '12', ['4', '6', '35'], 'Evidence, certainty, truth and nine more.'],
      ['Asking whether researchers should use animals in experiments relates to…', 'Ethics', ['Scope', 'Methods only', 'Perspectives only'], 'A moral question about knowledge production.'],
      ['Knowledge free from personal bias is described as…', 'Objective', ['Subjective', 'Revealed', 'Provisional'], 'Objectivity is a key concept.'],
    ],
  ),
  OT1: M(
    [
      'Real-life situation: generative AI tools can write essays and create images. This raises questions about authorship, reliability and whether a machine can “know” anything.',
      'Deepfakes are realistic fake videos made with AI. They make it harder to trust audio-visual evidence, which was once seen as strong proof.',
      'Big data lets scientists find patterns in huge data sets, but correlation found by algorithms may not explain causation.',
      'Knowledge question: “To what extent does technology change what counts as evidence?”',
    ],
    [
      ['Deepfake', 'AI-generated fake video or audio that looks real.'],
      ['Generative AI', 'AI that creates text, images or audio.'],
      ['Big data', 'Very large data sets analysed for patterns.'],
      ['Digital literacy', 'Skills for finding, evaluating and using online information.'],
    ],
    [
      ['A realistic fake video of a politician made by AI is a…', 'Deepfake', ['Filter bubble', 'Primary source', 'Peer review'], 'It challenges trust in video evidence.'],
      ['A key knowledge issue with generative AI is…', 'Reliability and authorship', ['It is always accurate', 'It can’t produce text', 'It has no data'], 'Who is the author, and can we trust it?'],
      ['Algorithms finding patterns in huge data sets may reveal correlation but not…', 'Causation', ['Numbers', 'Trends', 'Data'], 'Patterns don’t explain why.'],
      ['Checking the source and date of online information is part of…', 'Digital literacy', ['Censorship', 'Propaganda', 'Revelation'], 'Evaluating online knowledge.'],
    ],
  ),
  OT2: M(
    [
      'Real-life situation: the popular claim that Inuit languages have hundreds of words for snow is often exaggerated, but languages really do differ in their words for colours or family relationships. Does having more words mean speakers notice more distinctions?',
      'Euphemisms soften reality, like “collateral damage” for civilian deaths, showing how language can hide or shape knowledge.',
      'Scientific and mathematical language aims to be precise and universal, while poetic language uses ambiguity to create meaning.',
      'Knowledge question: “To what extent does the language we speak limit what we can know?”',
    ],
    [
      ['Euphemism', 'A mild word used to soften something unpleasant.'],
      ['Linguistic relativity', 'The idea that language influences thought.'],
      ['Technical language', 'Precise vocabulary used by experts in a field.'],
      ['Ambiguity', 'When a word or statement has more than one meaning.'],
    ],
    [
      ['Calling civilian deaths “collateral damage” is a…', 'Euphemism', ['Metaphor', 'Proof', 'Paradigm'], 'It softens reality.'],
      ['Mathematical language aims to be…', 'Precise and unambiguous', ['Poetic', 'Emotional', 'Vague'], 'It avoids ambiguity.'],
      ['The idea that language influences thought is called…', 'Linguistic relativity', ['Falsifiability', 'Empiricism', 'Relativism of truth'], 'Also linked to Sapir-Whorf.'],
      ['Poets often use ambiguity to…', 'Create multiple meanings', ['Avoid meaning', 'Prove theorems', 'Report facts'], 'Ambiguity can be a strength in the arts.'],
    ],
  ),
  OT3: M(
    [
      'Real-life situation: during the COVID-19 pandemic, governments made decisions based on scientific advice, but the advice changed as evidence grew, and trust divided along political lines.',
      'Expert knowledge and democracy: should experts or voters decide complex issues like climate policy? This involves questions of authority and legitimacy.',
      'Michel Foucault argued that power and knowledge are closely linked: institutions define what counts as normal or true.',
      'Knowledge question: “How does the distribution of power affect who is recognised as an expert?”',
    ],
    [
      ['Michel Foucault', 'Argued that power and knowledge are closely linked.'],
      ['Legitimacy', 'Accepted right to hold authority.'],
      ['Misinformation vs disinformation', 'Mis: false info shared by mistake. Dis: false info spread deliberately.'],
      ['Expert authority', 'Trust given to specialists’ knowledge.'],
    ],
    [
      ['Deliberately spreading false information is…', 'Disinformation', ['Misinformation', 'Peer review', 'Justification'], 'It is intentional.'],
      ['Which thinker linked power and knowledge?', 'Michel Foucault', ['Karl Popper', 'Thomas Kuhn', 'René Descartes'], 'Power shapes what counts as true.'],
      ['Changing public health advice during a pandemic illustrates…', 'Knowledge developing as evidence grows', ['Certainty in science', 'Censorship only', 'Revelation'], 'Knowledge is provisional.'],
      ['Whether experts or voters should decide climate policy is a question about…', 'Authority and legitimacy', ['Grammar', 'Mathematical proof', 'Art criticism'], 'Who has the right to decide?'],
    ],
  ),
  OT4: M(
    [
      'Real-life situation: many scientists are religious, and some religious traditions encourage scientific study. This challenges the idea that science and religion must conflict.',
      'Religious knowledge can be personal, through experience, and shared, through communities, rituals and texts. Interpretation of sacred texts varies within traditions.',
      'Stephen Jay Gould proposed “non-overlapping magisteria”: science deals with facts about the world, religion with meaning and values.',
      'Knowledge question: “What role does faith play in different areas of knowledge?”',
    ],
    [
      ['Non-overlapping magisteria', 'Gould: science and religion answer different kinds of questions.'],
      ['Sacred text', 'A writing regarded as holy, e.g. the Bible, Qur’an, Bhagavad Gita.'],
      ['Religious experience', 'A personal experience interpreted as spiritual.'],
      ['Interpretation of scripture', 'Different readings of sacred texts within a tradition.'],
    ],
    [
      ['“Science deals with facts, religion with meaning” describes…', 'Non-overlapping magisteria', ['Falsifiability', 'Paradigm shift', 'Relativism'], 'Proposed by Stephen Jay Gould.'],
      ['Different groups reading the same sacred text differently shows…', 'The role of interpretation', ['Certainty', 'Proof', 'Objectivity'], 'Interpretation shapes religious knowledge.'],
      ['Which is a sacred text?', 'The Bhagavad Gita', ['The periodic table', 'Newton’s Principia', 'The Magna Carta'], 'A Hindu scripture.'],
      ['Religion as an optional theme in TOK is…', 'Knowledge and religion', ['An area of knowledge', 'A compulsory essay', 'Part of maths'], 'It is one of five optional themes.'],
    ],
  ),
  OT5: M(
    [
      'Real-life situation: Māori navigators crossed the Pacific using stars, winds, currents and birds, knowledge passed on orally over generations.',
      'Validation: indigenous knowledge is often validated through community elders, practical success and long-term observation, rather than laboratory experiments.',
      'Collaboration: scientists increasingly combine traditional ecological knowledge with scientific data, for example in fire management and fisheries.',
      'Knowledge question: “Who should own and control knowledge that has been developed by a community over generations?”',
    ],
    [
      ['Māori and Polynesian wayfinding', 'Navigation by stars, currents and wildlife, passed on orally.'],
      ['Community validation', 'Knowledge accepted through elders and practical success.'],
      ['Biopiracy', 'Companies patenting indigenous knowledge without consent or benefit sharing.'],
      ['Two-eyed seeing', 'Combining indigenous and Western knowledge perspectives.'],
    ],
    [
      ['Patenting a traditional plant remedy without the community’s consent is…', 'Biopiracy', ['Peer review', 'Oral tradition', 'Revelation'], 'It raises ownership and ethics issues.'],
      ['Polynesian navigators crossed the Pacific using…', 'Stars, currents and wildlife', ['GPS', 'Printed maps', 'Compasses only'], 'Traditional wayfinding knowledge.'],
      ['Combining indigenous and Western knowledge is sometimes called…', 'Two-eyed seeing', ['Falsification', 'Relativism', 'Censorship'], 'A term from Mi’kmaw elder Albert Marshall.'],
      ['Indigenous knowledge is often validated through…', 'Elders and long-term practical success', ['Only lab experiments', 'Only written exams', 'Mathematical proof'], 'Different methods of justification.'],
    ],
  ),
  AOK1: M(
    [
      'E.H. Carr, in What Is History?, argued that historians select facts; facts don’t “speak for themselves”.',
      'Real-life situation: statues of colonial figures, like Edward Colston’s in Bristol, toppled in 2020, show how views of the past change with present values.',
      'Hindsight bias: knowing how events ended can make them seem inevitable, but people at the time didn’t know the outcome.',
      'Knowledge question: “How does the present influence our knowledge of the past?”',
    ],
    [
      ['E.H. Carr', 'Argued historians select which facts matter.'],
      ['Hindsight bias', 'Seeing past events as more predictable than they were.'],
      ['Revisionism', 'Reinterpreting history in light of new evidence or perspectives.'],
      ['Secondary source', 'A later interpretation of the past, e.g. a history book.'],
    ],
    [
      ['A textbook written in 2020 about WWI is a…', 'Secondary source', ['Primary source', 'Artefact', 'Diary'], 'It interprets the past later.'],
      ['Who wrote What Is History?', 'E.H. Carr', ['Karl Popper', 'Thomas Kuhn', 'Herodotus'], 'He stressed the historian’s selection.'],
      ['Believing an outcome was obvious after it happened is…', 'Hindsight bias', ['Confirmation bias', 'Anchoring', 'Objectivity'], 'The past seems inevitable in retrospect.'],
      ['The toppling of Colston’s statue shows…', 'Present values changing views of the past', ['History never changes', 'Facts speak for themselves', 'Statues are primary sources only'], 'Interpretations shift over time.'],
    ],
  ),
  AOK2: M(
    [
      'Real-life situation: the replication crisis in psychology found many famous studies failed to produce the same results when repeated, raising questions about reliability.',
      'Economic models assume rational behaviour, but behavioural economics shows people often act irrationally, which limits predictions.',
      'Reflexivity: in the human sciences, publishing a prediction, like a coming stock market crash, can change behaviour and affect the outcome.',
      'Knowledge question: “How reliable are predictions in the human sciences compared with the natural sciences?”',
    ],
    [
      ['Replication crisis', 'Many human science studies fail to reproduce when repeated.'],
      ['Reflexivity', 'Predictions about people can change the behaviour being predicted.'],
      ['Hawthorne effect', 'People change behaviour because they know they are being observed.'],
      ['Qualitative data', 'Descriptive data about experiences and meanings.'],
    ],
    [
      ['A forecast of a bank run causing people to withdraw money illustrates…', 'Reflexivity', ['Replication', 'Falsification', 'Objectivity'], 'The prediction changes the outcome.'],
      ['Many famous psychology results failing to reproduce is the…', 'Replication crisis', ['Paradigm shift', 'Hawthorne effect', 'Scientific revolution'], 'It raised concerns about reliability.'],
      ['Changing behaviour because you are being watched is the…', 'Hawthorne effect', ['Placebo effect', 'Bystander effect', 'Halo effect'], 'Named after the Hawthorne Works studies.'],
      ['Interviews about people’s experiences produce mainly…', 'Qualitative data', ['Quantitative data', 'Mathematical proofs', 'Laws of nature'], 'Descriptive and interpretive.'],
    ],
  ),
  AOK3: M(
    [
      'Thomas Kuhn argued that science goes through periods of “normal science” and occasional revolutions, paradigm shifts, like the move from an Earth-centred to a Sun-centred universe.',
      'The problem of induction: however many white swans we observe, we can’t prove all swans are white. Karl Popper’s answer was falsification: one black swan is enough to disprove it.',
      'Real-life situation: continental drift was proposed by Alfred Wegener in 1912 but rejected until plate tectonics evidence emerged in the 1960s.',
      'Knowledge question: “To what extent is the scientific community’s acceptance needed for something to count as scientific knowledge?”',
    ],
    [
      ['Thomas Kuhn', 'Proposed paradigm shifts and scientific revolutions.'],
      ['Problem of induction', 'General conclusions from particular observations can’t be proven certain.'],
      ['Alfred Wegener', 'Proposed continental drift in 1912; accepted decades later.'],
      ['Hypothesis', 'A testable prediction.'],
    ],
    [
      ['Who proposed the idea of paradigm shifts?', 'Thomas Kuhn', ['Karl Popper', 'Isaac Newton', 'E.H. Carr'], 'In The Structure of Scientific Revolutions.'],
      ['One black swan disproving “all swans are white” illustrates…', 'Falsification', ['Deduction', 'Paradigm shift', 'Peer review'], 'Popper: a single counterexample can refute a universal claim.'],
      ['Wegener’s continental drift was accepted after evidence for…', 'Plate tectonics', ['Relativity', 'Evolution', 'Quantum theory'], 'In the 1960s.'],
      ['A testable prediction in science is a…', 'Hypothesis', ['Law', 'Paradigm', 'Axiom'], 'It can be tested by experiment.'],
    ],
  ),
  AOK4: M(
    [
      'Real-life situation: Marcel Duchamp’s Fountain, 1917, a urinal signed “R. Mutt”, challenged what counts as art and who decides.',
      'Art can challenge power: Picasso’s Guernica, 1937, shows the horror of the bombing of a Basque town and became a symbol against war.',
      'Artistic knowledge may be validated by critics, audiences, time and influence rather than by experiment or proof.',
      'Knowledge question: “Can art provide knowledge that other areas cannot?”',
    ],
    [
      ['Duchamp’s Fountain (1917)', 'A urinal presented as art, challenging definitions of art.'],
      ['Guernica (1937)', 'Picasso’s painting showing the horror of war.'],
      ['Aesthetic judgement', 'Judgement about beauty or artistic value.'],
      ['Validation in the arts', 'Through critics, audiences, time and influence.'],
    ],
    [
      ['Duchamp’s Fountain is famous for challenging…', 'What counts as art', ['Scientific method', 'Mathematical proof', 'Historical sources'], 'It was a readymade object.'],
      ['Picasso’s Guernica depicts…', 'The horror of a wartime bombing', ['A peaceful landscape', 'A portrait of a king', 'A scientific discovery'], 'It became an anti-war symbol.'],
      ['Knowledge in the arts is often validated by…', 'Critics, audiences and time', ['Laboratory experiments', 'Formal proof', 'Surveys only'], 'Different methods of justification.'],
      ['A judgement about beauty is an…', 'Aesthetic judgement', ['Empirical claim', 'Axiom', 'Historical fact'], 'It concerns artistic value.'],
    ],
  ),
  AOK5: M(
    [
      'Real-life situation: Andrew Wiles proved Fermat’s Last Theorem in 1994, after mathematicians had tried for over 350 years. The proof was checked by peers and corrected before being accepted.',
      'Non-Euclidean geometry shows that changing an axiom, the parallel postulate, gives different but consistent mathematical systems, later used in Einstein’s general relativity.',
      'Gödel’s incompleteness theorems showed that in any consistent system rich enough for arithmetic, some true statements cannot be proved within that system.',
      'Knowledge question: “If mathematical knowledge is certain, why do mathematicians still disagree?”',
    ],
    [
      ['Fermat’s Last Theorem', 'Proved by Andrew Wiles in 1994.'],
      ['Non-Euclidean geometry', 'Geometry where the parallel postulate is changed.'],
      ['Gödel’s incompleteness theorems', 'Some true statements can’t be proved within a system.'],
      ['Conjecture', 'A statement believed true but not yet proved.'],
    ],
    [
      ['Fermat’s Last Theorem was proved by…', 'Andrew Wiles', ['Kurt Gödel', 'Euclid', 'Isaac Newton'], 'In 1994.'],
      ['Changing Euclid’s parallel postulate leads to…', 'Non-Euclidean geometry', ['Calculus', 'Statistics', 'Algebra'], 'Used in general relativity.'],
      ['A statement believed true but not yet proved is a…', 'Conjecture', ['Theorem', 'Axiom', 'Proof'], 'E.g. the Goldbach conjecture.'],
      ['Gödel showed that…', 'Some true statements cannot be proved within a system', ['All maths is invented', 'Maths is always complete', 'Proof is unnecessary'], 'The incompleteness theorems.'],
    ],
  ),
  AS1: M(
    [
      'Example: prompt “How can we know that current knowledge is an improvement upon past knowledge?” Objects: an old medical textbook, a smartphone map app, and a revised museum label.',
      'For each object, explain its specific real-world context, how it links to the prompt, and justify why it was chosen, with evidence and TOK concepts.',
      'Objects can be physical or digital, and should be your own or specific, like “my grandfather’s 1970s school atlas”, rather than a general category.',
      'The exhibition is marked by your teacher and moderated by the IB; it is worth one third of the TOK grade.',
    ],
    [
      ['Exhibition weighting', 'One third of the TOK grade.'],
      ['Object context', 'The specific real-world situation of each object.'],
      ['Specific object', 'E.g. “my grandfather’s 1970s atlas”, not “an atlas”.'],
      ['Exhibition marking', 'Marked internally, moderated by the IB.'],
    ],
    [
      ['The TOK exhibition is worth…', 'One third of the TOK grade', ['Two thirds', 'Half', 'Nothing'], 'The essay is worth two thirds.'],
      ['Which is the most specific object?', 'My grandfather’s 1970s school atlas', ['An atlas', 'Maps', 'Geography'], 'Specific objects score better.'],
      ['All three objects in the exhibition must link to…', 'The same IA prompt', ['Three different prompts', 'An essay title', 'A subject syllabus'], 'One prompt connects them.'],
      ['The exhibition is…', 'Marked internally and moderated by the IB', ['Marked only by the IB', 'Not assessed', 'Peer marked'], 'Teachers mark, IB moderates.'],
    ],
  ),
  AS2: M(
    [
      'Choose a title you can answer with two areas of knowledge and strong examples. Unpack key terms and identify tensions or assumptions in the title.',
      'Structure: introduction with your interpretation and a thesis; then sections on each area of knowledge, each with a claim, example, counterclaim and mini-conclusion; then a conclusion with implications.',
      'Use specific, less common examples rather than overused ones, and explain how each example supports your argument.',
      'The essay is worth two thirds of the TOK grade and is marked by IB examiners. You get one round of written teacher feedback on a draft.',
    ],
    [
      ['TOK essay weighting', 'Two thirds of the TOK grade.'],
      ['Essay section structure', 'Claim, example, counterclaim, mini-conclusion.'],
      ['Unpacking the title', 'Defining terms and identifying assumptions.'],
      ['Teacher feedback on the essay', 'One round of written comments on a draft.'],
    ],
    [
      ['The TOK essay is worth…', 'Two thirds of the TOK grade', ['One third', 'Half', 'All of it'], 'The exhibition is the other third.'],
      ['A strong essay section includes…', 'A claim, example, counterclaim and mini-conclusion', ['Only a definition', 'A summary of the title', 'A personal story only'], 'Balanced argument.'],
      ['The best examples are…', 'Specific and explained', ['The most famous ones only', 'Hypothetical only', 'Without explanation'], 'Explanation shows understanding.'],
      ['How many rounds of written teacher feedback are allowed on a draft?', 'One', ['None', 'Three', 'Unlimited'], 'IB rules on feedback.'],
    ],
  ),
};

export default more;
