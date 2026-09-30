import type { MoreContent } from '../../types';
import { M } from '../helpers';

// Lesson 2 (model sentences, vocabulary, common mistakes, exam technique) plus extra
// flashcards and questions for every French B chapter.
const more: Record<string, MoreContent> = {
  TH1: M(
    [
      'Modèle: Pour moi, le bien-être, c’est trouver un équilibre entre les études, le sport et les amis. In English: for me, well-being means finding a balance between studies, sport and friends.',
      'Plus de vocabulaire: l’estime de soi, self-esteem; la pression des pairs, peer pressure; une alimentation saine, a healthy diet; le mode de vie sédentaire, a sedentary lifestyle.',
      'Francophone identity: in Québec, French is protected by law, and many Quebecers see the language as central to their identity.',
      'Common mistake: “Je suis 17 ans”. In French, use avoir for age: J’ai 17 ans.',
    ],
    [
      ['l’estime de soi', 'self-esteem'],
      ['la pression des pairs', 'peer pressure'],
      ['une alimentation saine', 'a healthy diet'],
      ['J’ai 17 ans', 'I am 17 (French uses avoir for age)'],
    ],
    [
      ['“peer pressure” in French is…', 'la pression des pairs', ['le bien-être', 'l’estime de soi', 'le mode de vie'], 'Les pairs are people your own age.'],
      ['Which is correct?', 'J’ai seize ans.', ['Je suis seize ans.', 'J’ai seize.', 'Je seize ans.'], 'Age uses avoir.'],
      ['“une alimentation saine” means…', 'a healthy diet', ['a healthy person', 'food shopping', 'a sports club'], 'Sain(e) = healthy.'],
      ['In which Canadian province is French protected by law?', 'Québec', ['Ontario', 'Alberta', 'British Columbia'], 'French is the official language of Québec.'],
    ],
  ),
  TH2: M(
    [
      'Modèle: L’été dernier, je suis allé au Sénégal avec ma famille. Il faisait très chaud et nous avons visité l’île de Gorée. Past actions use the passé composé; the weather description uses the imparfait.',
      'Plus de vocabulaire: l’hébergement, accommodation; dépaysant, disorienting in an exciting way; un souvenir inoubliable, an unforgettable memory; le tourisme durable, sustainable tourism.',
      'Francophone festivals: le Carnaval de Québec in winter, la Fête de la Musique on 21 June in France, and Tabaski celebrated in West Africa.',
      'Exam tip: when narrating, add opinions and reasons: C’était génial parce que… or J’ai trouvé ça fascinant car…',
    ],
    [
      ['l’hébergement', 'accommodation'],
      ['un souvenir inoubliable', 'an unforgettable memory'],
      ['la Fête de la Musique', 'French music festival on 21 June'],
      ['le tourisme durable', 'sustainable tourism'],
    ],
    [
      ['“L’été dernier, je ___ au Sénégal.” (aller)', 'suis allé(e)', ['allais', 'vais', 'irai'], 'A completed action uses the passé composé with être.'],
      ['La Fête de la Musique takes place on…', '21 June', ['14 July', '1 May', '25 December'], 'The summer solstice.'],
      ['“Il faisait très chaud” uses which tense?', 'Imparfait', ['Passé composé', 'Futur', 'Conditionnel'], 'Descriptions in the past use the imparfait.'],
      ['“l’hébergement” means…', 'accommodation', ['luggage', 'a flight', 'a tour guide'], 'Hotels, hostels and campsites.'],
    ],
  ),
  TH3: M(
    [
      'Modèle: Même si les réseaux sociaux nous permettent de rester en contact, ils peuvent aussi provoquer de l’anxiété chez les jeunes.',
      'Plus de vocabulaire: le harcèlement en ligne, online bullying; la vie privée, privacy; les fausses informations, fake news; la dépendance aux écrans, screen addiction.',
      'French innovation: the Minitel, launched in France in the early 1980s, was an early online service before the internet became widespread.',
      'Useful structure for balanced arguments: Certes… mais…, admittedly… but…; Il est vrai que… cependant…, it is true that… however…',
    ],
    [
      ['le harcèlement en ligne', 'online bullying'],
      ['la vie privée', 'privacy'],
      ['les fausses informations', 'fake news'],
      ['Certes… mais…', 'Admittedly… but…'],
    ],
    [
      ['“la vie privée” means…', 'privacy', ['private life insurance', 'a private school', 'a secret'], 'Often used about data protection.'],
      ['“online bullying” in French is…', 'le harcèlement en ligne', ['la vie privée', 'les réseaux sociaux', 'une découverte'], 'Harceler = to harass.'],
      ['Which expression introduces a concession?', 'Certes', ['Donc', 'Ensuite', 'Parce que'], 'Certes = admittedly.'],
      ['The Minitel was an early French…', 'Online service', ['Car', 'Film camera', 'Satellite'], 'Launched in the early 1980s.'],
    ],
  ),
  TH4: M(
    [
      'Modèle: Il faut que le gouvernement crée plus d’emplois pour les jeunes, car le chômage des jeunes reste élevé dans certains pays francophones.',
      'Plus de vocabulaire: l’égalité des chances, equal opportunities; le système éducatif, the education system; un stage, an internship; la discrimination à l’embauche, hiring discrimination.',
      'In France, le baccalauréat is the final school exam; many students then study at universities or grandes écoles.',
      'Common mistake: after il faut que, use the subjunctive: il faut que nous soyons, not il faut que nous sommes.',
    ],
    [
      ['l’égalité des chances', 'equal opportunities'],
      ['un stage', 'an internship / work placement'],
      ['le baccalauréat', 'French final school exam'],
      ['la discrimination à l’embauche', 'hiring discrimination'],
    ],
    [
      ['“un stage” means…', 'an internship', ['a stage in a theatre', 'a salary', 'a school'], 'A work placement.'],
      ['Il faut que nous ___ à l’heure. (être)', 'soyons', ['sommes', 'étions', 'serons'], 'Subjunctive after il faut que.'],
      ['The French final school exam is called…', 'le baccalauréat', ['le brevet only', 'la licence', 'le concours'], 'Often called le bac.'],
      ['“l’égalité des chances” means…', 'equal opportunities', ['a game of chance', 'equality of pay only', 'good luck'], 'Fair access for everyone.'],
    ],
  ),
  TH5: M(
    [
      'Modèle: Si chaque citoyen réduisait sa consommation de plastique, nous pourrions protéger les océans. The si clause uses the imparfait and the main clause the conditionnel.',
      'Plus de vocabulaire: les énergies renouvelables, renewable energy; la déforestation, deforestation; les réfugiés climatiques, climate refugees; l’inégalité, inequality.',
      'Francophone examples: rising sea levels threaten coastal areas of Senegal; the Great Green Wall project across the Sahel aims to stop desertification.',
      'Exam tip: in persuasive texts, use imperatives and inclusive language: Agissons maintenant! Let’s act now!',
    ],
    [
      ['les énergies renouvelables', 'renewable energy'],
      ['les réfugiés climatiques', 'climate refugees'],
      ['la Grande Muraille Verte', 'Great Green Wall across the Sahel'],
      ['Agissons maintenant !', 'Let’s act now!'],
    ],
    [
      ['Si nous recyclions plus, nous ___ moins de déchets. (produire)', 'produirions', ['produisons', 'produirons', 'avons produit'], 'Si + imparfait → conditionnel.'],
      ['“les énergies renouvelables” means…', 'renewable energy', ['nuclear energy', 'fossil fuels', 'energy bills'], 'Solar, wind, hydro.'],
      ['The Great Green Wall aims to stop…', 'Desertification in the Sahel', ['Flooding in Paris', 'Air pollution in Québec', 'Overfishing'], 'A belt of trees across Africa.'],
      ['“Agissons !” is in the…', 'Imperative', ['Subjunctive', 'Conditional', 'Imparfait'], 'The nous form commands.'],
    ],
  ),
  LG1: M(
    [
      'Choosing between passé composé and imparfait: “Je regardais la télé quand mon frère est arrivé.” The ongoing action uses the imparfait; the interrupting event uses the passé composé.',
      'The plus-que-parfait shows an action before another past action: imparfait of avoir or être plus past participle. Il avait déjà mangé quand je suis arrivé.',
      'Past participle agreement with être: Elles sont parties. With avoir, the participle agrees with a preceding direct object: Les photos que j’ai prises.',
      'Irregular futur stems: être becomes ser-, avoir aur-, aller ir-, faire fer-, pouvoir pourr-, vouloir voudr-.',
    ],
    [
      ['Plus-que-parfait', 'Had done: imparfait of avoir/être + past participle.'],
      ['Futur stem of faire', 'fer- (je ferai).'],
      ['Futur stem of pouvoir', 'pourr- (je pourrai).'],
      ['Imparfait vs passé composé', 'Background/ongoing vs completed/interrupting action.'],
    ],
    [
      ['Je ___ la télé quand il est arrivé. (regarder)', 'regardais', ['ai regardé', 'regarderai', 'regarde'], 'Ongoing background action.'],
      ['Elle ___ déjà ___ quand je suis arrivé. (partir)', 'était… partie', ['avait… parti', 'est… partie', 'a… partie'], 'Plus-que-parfait with être.'],
      ['Demain, je ___ mes devoirs. (faire, futur simple)', 'ferai', ['faisais', 'ai fait', 'fais'], 'Irregular stem fer-.'],
      ['Les photos que j’ai ___ sont belles. (prendre)', 'prises', ['pris', 'prise', 'prendre'], 'Agreement with preceding direct object (les photos).'],
    ],
  ),
  LG2: M(
    [
      'Subjunctive triggers: expressions of necessity, il faut que; wishing, je veux que; emotion, je suis content que; doubt, je doute que; and conjunctions like pour que, avant que and bien que.',
      'The conditional perfect expresses what would have happened: conditional of avoir or être plus past participle. J’aurais aimé voyager, I would have liked to travel.',
      'Three si-clause patterns: si + présent, futur; si + imparfait, conditionnel; si + plus-que-parfait, conditionnel passé.',
      'Example: Si j’avais su, je serais venu. If I had known, I would have come.',
    ],
    [
      ['Si + plus-que-parfait', '→ conditionnel passé (would have).'],
      ['Conditionnel passé', 'Conditional of avoir/être + past participle.'],
      ['pour que', 'so that — followed by the subjunctive.'],
      ['Subjunctive of aller (je)', 'que j’aille.'],
    ],
    [
      ['Si j’avais su, je ___ venu. (être)', 'serais', ['suis', 'étais', 'serai'], 'Si + plus-que-parfait → conditionnel passé.'],
      ['Je travaille pour que mes parents ___ fiers. (être)', 'soient', ['sont', 'seront', 'étaient'], 'pour que + subjunctive.'],
      ['Si tu viens, nous ___ au cinéma. (aller)', 'irons', ['irions', 'allions', 'sommes allés'], 'Si + présent → futur.'],
      ['Il faut que j’___ à la banque. (aller)', 'aille', ['vais', 'irai', 'allais'], 'Irregular subjunctive.'],
    ],
  ),
  LG3: M(
    [
      'More connectives: bien que, although, followed by the subjunctive; tandis que, whereas; afin de, in order to; grâce à, thanks to; à cause de, because of.',
      'Lequel, laquelle, lesquels and lesquelles are used after prepositions: la raison pour laquelle, the reason for which.',
      'Ce qui and ce que mean “what”: Ce qui m’inquiète, c’est le chômage. Ce que je préfère, c’est la musique.',
      'Exam tip: vary sentence openings with connectives and relative clauses to show a sophisticated range of structures.',
    ],
    [
      ['tandis que', 'whereas / while'],
      ['grâce à', 'thanks to'],
      ['à cause de', 'because of'],
      ['ce qui / ce que', 'what (subject / object)'],
    ],
    [
      ['___ m’inquiète, c’est la pollution.', 'Ce qui', ['Ce que', 'Qui', 'Que'], 'Ce qui is the subject of the verb.'],
      ['C’est la raison pour ___ je suis venu.', 'laquelle', ['que', 'qui', 'dont'], 'Lequel form after a preposition.'],
      ['“grâce à” means…', 'thanks to', ['because of (negative)', 'although', 'whereas'], 'Used for positive causes.'],
      ['Which connective takes the subjunctive?', 'bien que', ['parce que', 'tandis que', 'donc'], 'Bien que = although.'],
    ],
  ),
  LG4: M(
    [
      'Blog conventions: a catchy title, date, informal and personal tone, questions to readers, and an invitation to comment.',
      'Formal email or letter: Madame, Monsieur, as a greeting; a clear purpose; vous throughout; and a formal closing like Je vous prie d’agréer, Madame, Monsieur, l’expression de mes salutations distinguées.',
      'Speech: greet the audience, Mesdames et Messieurs, chers camarades; use rhetorical questions and repetition; end with thanks: Merci de votre attention.',
      'Brochure or leaflet: headings, bullet points, persuasive imperatives like Découvrez! and practical information such as dates and contact details.',
    ],
    [
      ['Merci de votre attention', 'Thank you for your attention (end of a speech)'],
      ['Découvrez !', 'Discover! (imperative, persuasive)'],
      ['Madame, Monsieur', 'Formal greeting when the recipient is unknown'],
      ['Blog conventions', 'Title, date, informal tone, questions to readers'],
    ],
    [
      ['A leaflet heading “Découvrez Paris !” uses the…', 'Imperative', ['Subjunctive', 'Conditional', 'Passé composé'], 'Persuasive command.'],
      ['A speech should usually end with…', 'Merci de votre attention', ['Bisous', 'À plus', 'Cordialement'], 'Formal thanks.'],
      ['Which is typical of a blog?', 'Questions addressed to readers', ['Formal closing formula', 'A bibliography', 'A table of contents'], 'Blogs invite interaction.'],
      ['Writing to an unknown official, you begin with…', 'Madame, Monsieur', ['Salut', 'Coucou', 'Cher ami'], 'A formal greeting.'],
    ],
  ),
  AS1: M(
    [
      'Paper 1 lasts 1 hour 15 minutes at both SL and HL. You choose one of three tasks and must pick an appropriate text type.',
      'Plan: identify audience, purpose, context and text type. Brainstorm vocabulary and connectives, and plan paragraphs before writing.',
      'Show range: include different tenses, the subjunctive, conditional, relative pronouns and idiomatic expressions, but accuracy matters more than complexity.',
      'Common mistakes to check: gender agreement, verb endings, accents and word order with pronouns, like je le lui ai donné.',
    ],
    [
      ['Paper 1 time', '1 hour 15 minutes (SL and HL).'],
      ['Planning checklist', 'Audience, purpose, context, text type.'],
      ['Range vs accuracy', 'Use a range of structures, but accuracy comes first.'],
      ['Final check', 'Agreements, verb endings, accents, pronoun order.'],
    ],
    [
      ['How long is Paper 1?', '1 hour 15 minutes', ['2 hours', '45 minutes', '1 hour 30 minutes'], 'The same at SL and HL.'],
      ['What should you identify first when planning?', 'Audience, purpose, context and text type', ['The word count only', 'Difficult vocabulary', 'Your conclusion'], 'These shape register and format.'],
      ['Which order is correct?', 'Je le lui ai donné.', ['Je lui le ai donné.', 'Je ai le lui donné.', 'Le je lui ai donné.'], 'Le before lui.'],
      ['Showing range means using…', 'Varied tenses and structures accurately', ['Only simple sentences', 'Only English words', 'As many rare words as possible'], 'Accuracy plus variety.'],
    ],
  ),
  AS2: M(
    [
      'Listening question types: multiple choice, gap-filling, short answers and matching. Answers usually follow the order of the recording.',
      'Numbers and dates are common: learn soixante-dix, 70; quatre-vingts, 80; quatre-vingt-dix, 90; and months and years like deux mille vingt-six.',
      'Listen for negatives and qualifiers: ne… plus, no longer; ne… jamais, never; presque, almost; seulement, only.',
      'Answer in the required language and form. If the question asks in French, answer in French; spelling needs to be understandable.',
    ],
    [
      ['quatre-vingt-dix', '90'],
      ['soixante-dix', '70'],
      ['ne… plus', 'no longer'],
      ['seulement', 'only'],
    ],
    [
      ['“quatre-vingt-dix-sept” is…', '97', ['87', '77', '67'], '4 × 20 + 17.'],
      ['“Il ne fume plus” means…', 'He no longer smokes', ['He never smokes', 'He smokes more', 'He smokes a little'], 'Ne… plus = no longer.'],
      ['Listening answers usually…', 'Follow the order of the recording', ['Come in random order', 'Are all at the end', 'Are only numbers'], 'Track your place.'],
      ['“presque” means…', 'almost', ['always', 'never', 'quickly'], 'Watch qualifiers.'],
    ],
  ),
  AS3: M(
    [
      'Reading tips: underline key words in the question, find the matching part of the text, and look for synonyms, as questions rarely repeat the text’s exact words.',
      'Pronouns and references: questions may ask what a word like “celui-ci” or “y” refers to. Look back to the nearest logical noun.',
      'Word families help with unknown words: la chasse, hunting; chasser, to hunt; un chasseur, a hunter.',
      'Paper 2 lasts 1 hour 45 minutes at SL and 2 hours at HL, covering listening and reading.',
    ],
    [
      ['celui-ci', 'this one / the latter'],
      ['y (pronoun)', 'there / about it (replaces à + thing or place)'],
      ['Word families', 'Using known roots to guess new words.'],
      ['Synonyms in questions', 'Questions often paraphrase the text.'],
    ],
    [
      ['In “J’y vais demain”, y means…', 'there', ['him', 'some', 'it (object)'], 'Y replaces a place.'],
      ['If you know “chasser” (to hunt), “un chasseur” is probably…', 'a hunter', ['a hat', 'a chase scene', 'a shop'], 'Use word families.'],
      ['Reading questions usually…', 'Use synonyms of words in the text', ['Copy the text exactly', 'Ask about grammar only', 'Have no link to the text'], 'Look for paraphrases.'],
      ['“celui-ci” usually refers to…', 'The most recently mentioned noun', ['The first noun in the text', 'The author', 'The reader'], 'This one / the latter.'],
    ],
  ),
  AS4: M(
    [
      'Useful phrases for describing a photo: Sur cette photo, on voit…; Au premier plan, in the foreground; À l’arrière-plan, in the background; Il semble que…, it seems that…',
      'Interpret: go beyond description. Say what the image suggests about the theme and link it to francophone culture and your own experience.',
      'Discussion fillers to buy time naturally: C’est une bonne question; Laissez-moi réfléchir; À vrai dire, to tell the truth.',
      'Assessment criteria: language, message, and interactive skills. Keep the conversation going by developing answers with examples and reasons.',
    ],
    [
      ['Au premier plan', 'In the foreground'],
      ['À l’arrière-plan', 'In the background'],
      ['Laissez-moi réfléchir', 'Let me think'],
      ['Oral criteria', 'Language, message, interactive skills.'],
    ],
    [
      ['“In the background” in French is…', 'À l’arrière-plan', ['Au premier plan', 'Au milieu', 'À côté'], 'Arrière = behind.'],
      ['“Laissez-moi réfléchir” is useful to…', 'Buy time naturally', ['End the oral', 'Greet the teacher', 'Describe a photo'], 'A natural filler.'],
      ['A strong oral goes beyond description by…', 'Interpreting and linking to culture', ['Listing objects only', 'Reading notes aloud', 'Answering in one word'], 'Show depth.'],
      ['Which is an oral criterion?', 'Interactive skills', ['Handwriting', 'Word count', 'Referencing'], 'Keeping the conversation going.'],
    ],
  ),
  AS5: M(
    [
      'Examples of works studied: L’Étranger by Albert Camus, Le Petit Prince by Antoine de Saint-Exupéry, and Une si longue lettre by Mariama Bâ, from Senegal.',
      'For the HL oral, you get an extract of up to 300 words and 15 minutes’ preparation, then present it for 3 to 4 minutes, discuss it, and have a general conversation.',
      'Analyse character, narrative voice, themes and style, and connect the work to the prescribed themes, like identity or social organisation.',
      'Literary vocabulary: le narrateur, the narrator; le personnage principal, the main character; l’intrigue, the plot; le dénouement, the ending.',
    ],
    [
      ['l’intrigue', 'the plot'],
      ['le personnage principal', 'the main character'],
      ['le dénouement', 'the ending / resolution'],
      ['Une si longue lettre', 'Novel by Mariama Bâ (Senegal).'],
    ],
    [
      ['“l’intrigue” means…', 'the plot', ['the intrigue of spies only', 'the setting', 'the author'], 'Literary vocabulary.'],
      ['Who wrote L’Étranger?', 'Albert Camus', ['Victor Hugo', 'Mariama Bâ', 'Molière'], 'Published in 1942.'],
      ['The HL oral extract is up to about…', '300 words', ['50 words', '1000 words', 'A whole chapter'], 'Followed by discussion.'],
      ['“le dénouement” is…', 'the ending', ['the beginning', 'a character', 'a chapter title'], 'How the plot is resolved.'],
    ],
  ),
};

export default more;
