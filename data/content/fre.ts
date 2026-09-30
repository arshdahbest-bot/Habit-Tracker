import type { SubjectContentFile } from '../types';
import { C } from './helpers';

const content: SubjectContentFile = {
  units: {
    TH: [
      'French B is built around five prescribed themes: Identités, Expériences, Ingéniosité humaine, Organisation sociale and Partage de la planète.',
      'Each theme has recommended topics. Learn vocabulary and opinions for each, with examples from French-speaking countries.',
    ],
    LG: [
      'This unit covers the grammar and text types you need to write and speak accurately.',
      'Examiners reward range and accuracy: mix tenses, use complex structures like the subjunctive, and follow text-type conventions.',
    ],
    AS: [
      'Assessment is Paper 1, writing; Paper 2, listening and reading; and the individual oral.',
      'At HL, you also study two literary works in French, and the HL oral is based on an extract from one of them.',
    ],
  },
  chapters: {
    TH1: C(
      [
        'Identités explores who we are: lifestyles, health and well-being, beliefs and values, subcultures, and language and identity.',
        'Useful vocabulary: le mode de vie, lifestyle; la santé, health; le bien-être, well-being; les croyances, beliefs; la langue maternelle, mother tongue.',
        'Discuss how language and culture shape identity, for example in bilingual families or francophone communities like Québec.',
        'To give opinions, use phrases like À mon avis, in my opinion, and Je suis convaincu que, I am convinced that.',
      ],
      [
        ['le mode de vie', 'lifestyle'],
        ['le bien-être', 'well-being'],
        ['les croyances', 'beliefs'],
        ['la langue maternelle', 'mother tongue'],
      ],
      [
        ['“la santé” means…', ['holidays', 'health', 'identity', 'language'], 1, 'La santé = health.'],
        ['Which topic belongs to Identités?', ['Globalisation', 'Lifestyles', 'Technology', 'The working world'], 1, 'Lifestyles are part of Identities.'],
        ['“À mon avis” means…', ['In my opinion', 'On the other hand', 'However', 'Therefore'], 0, 'Used to give an opinion.'],
      ],
    ),
    TH2: C(
      [
        'Expériences covers leisure activities, holidays and travel, life stories, rites of passage, customs and traditions, and migration.',
        'Vocabulary: les loisirs, leisure; les vacances, holidays; un voyage, a trip; les coutumes, customs; la migration, migration.',
        'Use the passé composé and imparfait to narrate experiences: Quand j’étais petit, je passais les vacances en Bretagne, et un jour, je suis tombé.',
        'Compare traditions, like la fête nationale on 14 July in France, with those in your own culture.',
      ],
      [
        ['les loisirs', 'leisure activities'],
        ['les coutumes', 'customs'],
        ['un rite de passage', 'a rite of passage'],
        ['la fête nationale (France)', '14 July (le 14 juillet)'],
      ],
      [
        ['Which tense describes habits in the past?', ['Passé composé', 'Imparfait', 'Futur simple', 'Présent'], 1, 'L’imparfait describes repeated past actions.'],
        ['“les vacances” means…', ['holidays', 'vacancies', 'customs', 'travel agents'], 0, 'A false friend: vacances = holidays.'],
        ['France’s national day is…', ['1 May', '14 July', '25 December', '11 November'], 1, 'Le 14 juillet.'],
      ],
    ),
    TH3: C(
      [
        'Ingéniosité humaine covers entertainment, artistic expressions, communication and media, technology and scientific innovation.',
        'Vocabulary: les réseaux sociaux, social media; l’intelligence artificielle, artificial intelligence; une découverte, a discovery; les médias, the media.',
        'Debate the benefits and risks of technology: Les réseaux sociaux nous rapprochent, mais ils peuvent aussi isoler les jeunes.',
        'Use linking phrases like d’une part… d’autre part, on the one hand… on the other hand, to build balanced arguments.',
      ],
      [
        ['les réseaux sociaux', 'social media'],
        ['l’intelligence artificielle', 'artificial intelligence'],
        ['une découverte', 'a discovery'],
        ['d’une part… d’autre part', 'on the one hand… on the other hand'],
      ],
      [
        ['“les réseaux sociaux” means…', ['social networks / social media', 'social workers', 'social classes', 'television'], 0, 'Réseaux sociaux = social media.'],
        ['Which topic belongs to Ingéniosité humaine?', ['Human rights', 'Scientific innovation', 'Education', 'Migration'], 1, 'Innovation is human ingenuity.'],
        ['“une découverte” is…', ['a discovery', 'a cover', 'a disaster', 'a decision'], 0, 'From découvrir, to discover.'],
      ],
    ),
    TH4: C(
      [
        'Organisation sociale covers social relationships, community, social engagement, education, the working world, and law and order.',
        'Vocabulary: le bénévolat, volunteering; le chômage, unemployment; l’enseignement, education or teaching; la loi, the law.',
        'Discuss issues like youth unemployment or the value of volunteering: Faire du bénévolat permet de s’engager dans sa communauté.',
        'Use expressions of necessity: il faut que plus the subjunctive, for example Il faut que les jeunes soient mieux préparés au monde du travail.',
      ],
      [
        ['le bénévolat', 'volunteering'],
        ['le chômage', 'unemployment'],
        ['le monde du travail', 'the working world'],
        ['la loi', 'the law'],
      ],
      [
        ['“le bénévolat” means…', ['benefit', 'volunteering', 'kindness', 'charity shop'], 1, 'Un bénévole is a volunteer.'],
        ['“le chômage” means…', ['cheese', 'unemployment', 'change', 'heating'], 1, 'Être au chômage = to be unemployed.'],
        ['Which topic belongs to Organisation sociale?', ['Education', 'Holidays', 'Artistic expression', 'The environment'], 0, 'Education is part of Social organisation.'],
      ],
    ),
    TH5: C(
      [
        'Partage de la planète covers the environment, human rights, peace and conflict, equality, globalisation, ethics, and urban and rural environments.',
        'Vocabulary: le réchauffement climatique, global warming; le développement durable, sustainable development; les droits de l’homme, human rights; la mondialisation, globalisation.',
        'Propose solutions using the conditional: Si on utilisait plus les transports en commun, on réduirait la pollution.',
        'Refer to francophone examples, such as climate impacts in West Africa or recycling policies in France.',
      ],
      [
        ['le réchauffement climatique', 'global warming'],
        ['le développement durable', 'sustainable development'],
        ['les droits de l’homme', 'human rights'],
        ['la mondialisation', 'globalisation'],
      ],
      [
        ['“la mondialisation” means…', ['globalisation', 'the world cup', 'fashion', 'worldwide weather'], 0, 'From le monde.'],
        ['Which theme covers the environment and human rights?', ['Identités', 'Expériences', 'Organisation sociale', 'Partage de la planète'], 3, 'Sharing the planet.'],
        ['“le développement durable” means…', ['hard development', 'sustainable development', 'lasting pain', 'slow growth'], 1, 'Durable = sustainable.'],
      ],
    ),
    LG1: C(
      [
        'Use a range of tenses. The présent describes now: je mange. The futur proche uses aller plus infinitive: je vais manger.',
        'The passé composé describes completed past actions. Most verbs use avoir; verbs of movement and reflexive verbs use être, and the past participle agrees: elle est allée.',
        'The imparfait describes background, feelings and habits in the past: il faisait beau, nous jouions au foot.',
        'The futur simple adds endings to the infinitive: je parlerai, tu finiras. Irregular stems include ir from aller and fer from faire.',
      ],
      [
        ['Passé composé with être', 'Movement and reflexive verbs; participle agrees: elle est partie.'],
        ['Imparfait use', 'Descriptions, feelings and habits in the past.'],
        ['Futur proche', 'aller + infinitive: je vais partir.'],
        ['Futur simple of aller', 'j’irai'],
      ],
      [
        ['Hier, elle ___ au cinéma. (aller)', ['a allé', 'est allée', 'allait allé', 'va'], 1, 'Aller takes être, with agreement.'],
        ['Quand j’étais petit, je ___ au parc tous les jours. (jouer)', ['ai joué', 'jouais', 'jouerai', 'joue'], 1, 'A past habit uses the imparfait.'],
        ['Demain, nous ___ la tour Eiffel. (visiter, futur simple)', ['visiterons', 'visitons', 'avons visité', 'visitions'], 0, 'Infinitive + -ons.'],
      ],
    ),
    LG2: C(
      [
        'The subjunctive expresses necessity, wishes, emotion and doubt. It follows expressions like il faut que, je veux que, bien que and pour que.',
        'Form it from the ils form of the present, minus ent, plus e, es, e, ions, iez, ent: qu’ils finissent becomes que je finisse.',
        'Common irregulars: être becomes que je sois; avoir, que j’aie; faire, que je fasse; aller, que j’aille.',
        'The conditional expresses would: infinitive plus imperfect endings, je voudrais. In si clauses: si plus imparfait, then conditionnel: Si j’avais de l’argent, je voyagerais.',
      ],
      [
        ['Triggers of the subjunctive', 'il faut que, bien que, pour que, je veux que…'],
        ['Subjunctive of être (je)', 'que je sois'],
        ['Subjunctive of faire (je)', 'que je fasse'],
        ['Si clause pattern', 'Si + imparfait → conditionnel'],
      ],
      [
        ['Il faut que tu ___ tes devoirs. (faire)', ['fais', 'fasses', 'feras', 'faisais'], 1, 'Il faut que triggers the subjunctive.'],
        ['Si j’avais le temps, je ___ plus. (lire)', ['lis', 'lirai', 'lirais', 'lisais'], 2, 'Si + imparfait takes the conditional.'],
        ['Bien qu’il ___ malade, il est venu. (être)', ['est', 'soit', 'était', 'sera'], 1, 'Bien que + subjunctive.'],
      ],
    ),
    LG3: C(
      [
        'Connectives make writing flow and show complex thought. Contrast: cependant, however; néanmoins, nevertheless; en revanche, on the other hand.',
        'Addition: de plus, furthermore; en outre, moreover. Consequence: par conséquent, as a result; donc, so.',
        'Relative pronouns link ideas: qui is the subject, que the object, où where or when, and dont replaces de plus a noun: le livre dont je parle.',
        'Complex sentences with a range of connectives and pronouns score well for language in Paper 1 and the oral.',
      ],
      [
        ['néanmoins', 'nevertheless'],
        ['par conséquent', 'as a result / consequently'],
        ['en revanche', 'on the other hand'],
        ['dont', 'of which / whose (replaces de + noun)'],
      ],
      [
        ['“néanmoins” means…', ['therefore', 'nevertheless', 'moreover', 'because'], 1, 'It introduces contrast.'],
        ['Le film ___ je t’ai parlé est excellent.', ['qui', 'que', 'dont', 'où'], 2, 'Parler de → dont.'],
        ['Which connective shows consequence?', ['cependant', 'par conséquent', 'bien que', 'en revanche'], 1, 'Par conséquent = as a result.'],
      ],
    ),
    LG4: C(
      [
        'Paper 1 tests text types, grouped as personal, professional and mass media texts.',
        'Personal texts include blogs, diaries and informal letters or emails. Professional texts include formal letters, reports and proposals. Mass media texts include articles, speeches, brochures and reviews.',
        'Each type has conventions: an article has a title and often a byline; a formal letter has a formal greeting, like Madame, Monsieur, and a closing formula; a speech addresses the audience directly.',
        'Match register to audience: tu and informal language for friends, vous and formal language for officials.',
      ],
      [
        ['Three groups of text types', 'Personal, professional, mass media.'],
        ['Formal letter greeting', 'Madame, Monsieur,'],
        ['Formal closing', 'Veuillez agréer, Madame, Monsieur, l’expression de mes salutations distinguées.'],
        ['Speech convention', 'Directly addresses the audience: Mesdames et Messieurs…'],
      ],
      [
        ['A letter to a mayor should use…', ['tu and slang', 'vous and a formal closing', 'no greeting', 'emojis'], 1, 'Formal register.'],
        ['A newspaper article is a…', ['Personal text', 'Mass media text', 'Diary', 'Poem'], 1, 'It addresses a wide audience.'],
        ['A diary entry is usually written…', ['Very formally', 'Informally, in the first person', 'As a speech', 'Without dates'], 1, 'It is personal.'],
      ],
    ),
    AS1: C(
      [
        'Paper 1 is productive writing: you choose one task from three, each linked to a theme, and write in a specified text type.',
        'SL students write 250 to 400 words; HL students write 450 to 600 words.',
        'Criteria are language, message and conceptual understanding, which includes using the correct text type and register for the audience and purpose.',
        'Plan before writing, stay within the word range, and leave time to check agreement, accents and tenses.',
      ],
      [
        ['Paper 1 SL word range', '250–400 words'],
        ['Paper 1 HL word range', '450–600 words'],
        ['Paper 1 criteria', 'Language, message, conceptual understanding.'],
        ['Number of task choices', 'Three; choose one.'],
      ],
      [
        ['HL Paper 1 requires…', ['250–400 words', '450–600 words', '1000 words', '150 words'], 1, 'HL writes more.'],
        ['“Conceptual understanding” includes…', ['Spelling only', 'Using the right text type and register', 'Handwriting', 'Word count'], 1, 'It covers audience, context, purpose and text type.'],
        ['How many tasks do you answer in Paper 1?', ['One', 'Two', 'Three', 'All'], 0, 'Choose one of three.'],
      ],
    ),
    AS2: C(
      [
        'Paper 2 has a listening comprehension section based on audio passages.',
        'Read the questions before listening, and predict the kind of answer needed: a number, a name, or an opinion.',
        'Listen for key words, but be careful of distractors: speakers may mention something and then change their mind.',
        'Practise with French podcasts, radio and videos, like RFI’s Journal en français facile.',
      ],
      [
        ['Before listening', 'Read the questions and predict answers.'],
        ['Distractor', 'Information that seems right but is corrected later.'],
        ['Practice resource', 'e.g. RFI Journal en français facile.'],
        ['Listening tip', 'Focus on key words and negations like ne… pas.'],
      ],
      [
        ['A good listening strategy is to…', ['Ignore the questions', 'Read the questions first', 'Write everything down', 'Translate every word'], 1, 'It tells you what to listen for.'],
        ['“Je ne suis jamais allé en Espagne” means…', ['I often go to Spain', 'I have never been to Spain', 'I went to Spain', 'I will go to Spain'], 1, 'Ne… jamais = never.'],
        ['A speaker says “le lundi… non, pardon, le mardi”. The answer is…', ['Monday', 'Tuesday', 'Both', 'Neither'], 1, 'Watch for corrections.'],
      ],
    ),
    AS3: C(
      [
        'The Paper 2 reading section has several texts with questions.',
        'Question types include true or false with justification, matching, gap-filling, short answers, and identifying who or what a word refers to.',
        'For true or false, you must quote the words from the text that justify your answer.',
        'Skim for the gist first, then scan for specific details. Use context to guess unknown words.',
      ],
      [
        ['True/false questions', 'You must justify with words from the text.'],
        ['Skimming', 'Reading quickly for the general idea.'],
        ['Scanning', 'Searching for specific details.'],
        ['Unknown words', 'Use context and cognates to guess meaning.'],
      ],
      [
        ['For a true/false question you must…', ['Only tick a box', 'Justify with words from the text', 'Write an essay', 'Translate the text'], 1, 'Justification is required.'],
        ['“Ils” in a sentence usually refers to…', ['A plural noun mentioned earlier', 'The reader', 'The author only', 'Nothing'], 0, 'Find the antecedent.'],
        ['Reading quickly for the general idea is…', ['Scanning', 'Skimming', 'Translating', 'Summarising'], 1, 'Skimming gives the gist.'],
      ],
    ),
    AS4: C(
      [
        'The individual oral lasts 12 to 15 minutes, after 15 minutes of preparation.',
        'At SL, it is based on a visual stimulus, a photo with a caption linked to one of the themes. At HL, it is based on an extract from a literary work studied.',
        'It has three parts: a presentation of 3 to 4 minutes, a follow-up discussion on the stimulus, and a general conversation on at least one other theme.',
        'Describe, interpret and link the stimulus to francophone culture, and give opinions with justifications.',
      ],
      [
        ['Oral length', '12–15 minutes, after 15 minutes of preparation.'],
        ['SL stimulus', 'A visual image with a caption.'],
        ['HL stimulus', 'An extract from a literary work studied.'],
        ['Three parts', 'Presentation, follow-up discussion, general conversation.'],
      ],
      [
        ['The SL individual oral is based on…', ['A literary extract', 'A visual stimulus', 'A listening passage', 'An essay'], 1, 'A photo with a caption.'],
        ['The presentation part lasts about…', ['1 minute', '3–4 minutes', '10 minutes', '15 minutes'], 1, 'Then discussion follows.'],
        ['The general conversation covers…', ['Only the same theme', 'At least one other theme', 'Grammar rules', 'The literary works only'], 1, 'It widens the discussion.'],
      ],
    ),
    AS5: C(
      [
        'HL students study two literary works in French, such as novels, plays or collections of poems or short stories.',
        'Literature develops advanced reading skills and exposes you to rich language and cultural perspectives.',
        'The HL individual oral uses an extract from one of these works: you present the extract, discuss it, then have a general conversation on another theme.',
        'Know the plot, characters, themes and key passages, and be ready to link them to the course themes.',
      ],
      [
        ['Number of literary works (HL)', 'Two'],
        ['How literature is assessed', 'Through the HL individual oral.'],
        ['What to know', 'Plot, characters, themes and key passages.'],
        ['Link to themes', 'Connect the work to the five prescribed themes.'],
      ],
      [
        ['How many literary works do HL students study?', ['One', 'Two', 'Four', 'None'], 1, 'Two works in the target language.'],
        ['Literature in French B HL is assessed mainly through…', ['Paper 1', 'The individual oral', 'The extended essay', 'Paper 2 reading'], 1, 'The HL oral uses an extract.'],
        ['Which should you prepare about each work?', ['Only the title', 'Themes, characters and key passages', 'The author’s birthday only', 'Nothing'], 1, 'Detailed knowledge helps the discussion.'],
      ],
    ),
  },
};

export default content;
