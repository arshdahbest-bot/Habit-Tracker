import type { SubjectContentFile } from '../types';
import { C } from './helpers';

const content: SubjectContentFile = {
  units: {
    TH: [
      'Hindi B, like all Language B courses, is built around five prescribed themes: identities, experiences, human ingenuity, social organization and sharing the planet.',
      'Learn vocabulary, opinions and examples for each theme, including examples from India and Hindi-speaking communities.',
    ],
    LG: [
      'This unit covers the grammar, connectives, idioms and text types you need for accurate, varied Hindi.',
      'Pay special attention to gender agreement, postpositions and the use of ने in the past tense.',
    ],
    AS: [
      'Assessment is Paper 1, writing; Paper 2, listening and reading; and the individual oral.',
      'At HL you also study two literary works, and the HL oral is based on an extract from one of them.',
    ],
  },
  chapters: {
    TH1: C(
      [
        'The theme identities, पहचान, covers lifestyles, health and well-being, beliefs and values, subcultures, and language and identity.',
        'Useful words: जीवनशैली, lifestyle; स्वास्थ्य, health; विश्वास, belief; मातृभाषा, mother tongue.',
        'Discuss how language and culture shape identity, for example growing up bilingual in Hindi and English.',
        'To give an opinion, use मेरे विचार में, in my opinion, or मुझे लगता है कि, I feel that.',
      ],
      [
        ['पहचान', 'identity'],
        ['जीवनशैली', 'lifestyle'],
        ['स्वास्थ्य', 'health'],
        ['मातृभाषा', 'mother tongue'],
      ],
      [
        ['“स्वास्थ्य” means…', ['education', 'health', 'festival', 'environment'], 1, 'स्वास्थ्य = health.'],
        ['“मेरे विचार में” means…', ['in my opinion', 'on the other hand', 'in conclusion', 'moreover'], 0, 'Used to give an opinion.'],
        ['Which topic belongs to the identities theme?', ['Lifestyles', 'Globalisation', 'Technology', 'The working world'], 0, 'Lifestyles are part of identities.'],
      ],
    ),
    TH2: C(
      [
        'The theme experiences, अनुभव, covers leisure, holidays and travel, life stories, rites of passage, customs and traditions, and migration.',
        'Useful words: यात्रा, journey; छुट्टियाँ, holidays; त्योहार, festival; परंपरा, tradition; प्रवास, migration.',
        'Describe festivals like दिवाली, दीपों का त्योहार, the festival of lights, and होली, the festival of colours.',
        'Use the past tense to narrate: पिछली छुट्टियों में हम जयपुर गए थे, last holidays we had gone to Jaipur.',
      ],
      [
        ['त्योहार', 'festival'],
        ['परंपरा', 'tradition'],
        ['यात्रा', 'journey / travel'],
        ['छुट्टियाँ', 'holidays'],
      ],
      [
        ['Which word means “festival”?', ['परिवार', 'त्योहार', 'पर्यावरण', 'शिक्षा'], 1, 'त्योहार = festival.'],
        ['होली is known as the festival of…', ['lights', 'colours', 'harvest', 'kites'], 1, 'Holi is the festival of colours.'],
        ['“परंपरा” means…', ['tradition', 'travel', 'family', 'language'], 0, 'परंपरा = tradition.'],
      ],
    ),
    TH3: C(
      [
        'The theme human ingenuity covers entertainment, artistic expression, communication and media, technology and scientific innovation.',
        'Useful words: प्रौद्योगिकी, technology; मनोरंजन, entertainment; कला, art; संचार, communication; आविष्कार, invention.',
        'Discuss the effects of technology: सोशल मीडिया से लोग जुड़ते हैं, लेकिन इसके नुकसान भी हैं, social media connects people, but it also has drawbacks.',
        'Examples could include Bollywood cinema, Indian space missions, or digital payments in India.',
      ],
      [
        ['प्रौद्योगिकी', 'technology'],
        ['मनोरंजन', 'entertainment'],
        ['आविष्कार', 'invention'],
        ['संचार', 'communication'],
      ],
      [
        ['“मनोरंजन” means…', ['entertainment', 'education', 'invention', 'health'], 0, 'मनोरंजन = entertainment.'],
        ['Which word means “invention”?', ['कला', 'आविष्कार', 'यात्रा', 'समाज'], 1, 'आविष्कार = invention.'],
        ['“लेकिन” means…', ['and', 'but', 'because', 'so'], 1, 'लेकिन = but.'],
      ],
    ),
    TH4: C(
      [
        'The theme social organization covers social relationships, community, social engagement, education, the working world, and law and order.',
        'Useful words: समाज, society; समुदाय, community; शिक्षा, education; नौकरी, job; कानून, law.',
        'Discuss issues like education and youth employment: युवाओं के लिए अच्छी शिक्षा बहुत ज़रूरी है, good education is very important for young people.',
        'Use ज़रूरी है कि, it is necessary that, to make suggestions.',
      ],
      [
        ['समाज', 'society'],
        ['शिक्षा', 'education'],
        ['नौकरी', 'job'],
        ['कानून', 'law'],
      ],
      [
        ['“शिक्षा” means…', ['health', 'education', 'society', 'job'], 1, 'शिक्षा = education.'],
        ['Which word means “community”?', ['समुदाय', 'कानून', 'नौकरी', 'कला'], 0, 'समुदाय = community.'],
        ['“ज़रूरी” means…', ['necessary', 'difficult', 'beautiful', 'quick'], 0, 'ज़रूरी = necessary.'],
      ],
    ),
    TH5: C(
      [
        'The theme sharing the planet covers the environment, human rights, peace and conflict, equality, globalisation, ethics, and urban and rural environments.',
        'Useful words: पर्यावरण, environment; प्रदूषण, pollution; मानवाधिकार, human rights; समानता, equality; वैश्वीकरण, globalisation.',
        'Discuss problems and solutions: शहरों में प्रदूषण बढ़ रहा है, pollution is increasing in cities; हमें पेड़ लगाने चाहिए, we should plant trees.',
        'Use चाहिए with the infinitive to say should: हमें पानी बचाना चाहिए, we should save water.',
      ],
      [
        ['पर्यावरण', 'environment'],
        ['प्रदूषण', 'pollution'],
        ['मानवाधिकार', 'human rights'],
        ['समानता', 'equality'],
      ],
      [
        ['“पर्यावरण” means…', ['festival', 'environment', 'family', 'education'], 1, 'पर्यावरण = environment.'],
        ['“हमें पानी बचाना चाहिए” means…', ['We saved water', 'We should save water', 'We have no water', 'Water is expensive'], 1, 'चाहिए expresses “should”.'],
        ['Which word means “pollution”?', ['प्रदूषण', 'समानता', 'शिक्षा', 'परंपरा'], 0, 'प्रदूषण = pollution.'],
      ],
    ),
    LG1: C(
      [
        'Hindi verbs change with tense, gender and number. The present habitual uses the verb stem plus ता, ती or ते, with हूँ, है or हैं: मैं स्कूल जाता हूँ, I go to school.',
        'The present continuous uses रहा, रही or रहे: वह पढ़ रही है, she is studying.',
        'The simple past uses forms like गया, गई and गए: मैं बाज़ार गया, I went to the market.',
        'The future adds ऊँगा, एगा and so on: मैं कल आऊँगा, I will come tomorrow. The verb agrees with the subject’s gender.',
      ],
      [
        ['Present habitual (masc.)', 'मैं जाता हूँ — I go'],
        ['Present continuous (fem.)', 'वह पढ़ रही है — she is studying'],
        ['Simple past', 'मैं गया — I went'],
        ['Future', 'मैं आऊँगा — I will come'],
      ],
      [
        ['“वह पढ़ रही है” means…', ['He studied', 'She is studying', 'She will study', 'He studies'], 1, 'Continuous, feminine subject.'],
        ['How does a girl say “I will go”?', ['मैं जाऊँगा', 'मैं जाऊँगी', 'मैं गया', 'मैं जाता हूँ'], 1, 'Feminine future ending: ऊँगी.'],
        ['“मैं बाज़ार गया” is in the…', ['Present', 'Past', 'Future', 'Continuous'], 1, 'गया is past tense.'],
      ],
    ),
    LG2: C(
      [
        'Hindi nouns are masculine or feminine, and adjectives ending in आ agree: अच्छा लड़का, a good boy; अच्छी लड़की, a good girl; अच्छे लड़के, good boys.',
        'Postpositions come after the noun: में, in; पर, on; से, from or with; को, to; के लिए, for.',
        'The possessive का, की, के agrees with the thing possessed: राम की किताब, Ram’s book, because किताब is feminine.',
        'With transitive verbs in the perfective past, the subject takes ने and the verb agrees with the object: राम ने किताब पढ़ी, Ram read the book.',
      ],
      [
        ['Adjective agreement', 'अच्छा (m. sg.), अच्छी (f.), अच्छे (m. pl.)'],
        ['Postposition “in”', 'में'],
        ['Possessive agreement', 'का/की/के agree with the possessed noun.'],
        ['ने construction', 'Subject + ने with transitive verbs in the perfective past.'],
      ],
      [
        ['राम ___ किताब पढ़ी।', ['को', 'ने', 'से', 'में'], 1, 'Transitive perfective past takes ने.'],
        ['सीता ___ घर बड़ा है। (Sita’s house is big)', ['का', 'की', 'के', 'को'], 0, 'घर is masculine singular, so का.'],
        ['The plural of लड़का is…', ['लड़की', 'लड़कों', 'लड़के', 'लड़का'], 2, 'Masculine -आ nouns become -ए in the plural.'],
      ],
    ),
    LG3: C(
      [
        'Connectives link ideas: और, and; लेकिन or परंतु, but; क्योंकि, because; इसलिए, therefore; हालाँकि, although.',
        'Discourse markers for essays: इसके अलावा, moreover; दूसरी ओर, on the other hand; निष्कर्ष में, in conclusion.',
        'Idioms, मुहावरे, make writing richer: मुँह में पानी आना means to make one’s mouth water; नौ दो ग्यारह होना means to run away.',
        'Use idioms naturally and correctly; a well-placed idiom impresses examiners, but forcing one in can sound odd.',
      ],
      [
        ['क्योंकि', 'because'],
        ['इसलिए', 'therefore'],
        ['हालाँकि', 'although'],
        ['नौ दो ग्यारह होना', 'to run away (idiom)'],
      ],
      [
        ['“क्योंकि” means…', ['but', 'because', 'therefore', 'although'], 1, 'क्योंकि = because.'],
        ['Which phrase means “in conclusion”?', ['इसके अलावा', 'दूसरी ओर', 'निष्कर्ष में', 'मेरे विचार में'], 2, 'निष्कर्ष में = in conclusion.'],
        ['“मुँह में पानी आना” describes…', ['being thirsty', 'food that makes your mouth water', 'swimming', 'crying'], 1, 'An idiom for tempting food.'],
      ],
    ),
    LG4: C(
      [
        'Paper 1 text types include personal texts, like diaries and informal letters; professional texts, like formal letters and reports; and mass media texts, like articles, speeches and blogs.',
        'A formal letter, औपचारिक पत्र, includes the sender’s address, date, a subject line, विषय, a respectful greeting like आदरणीय महोदय, and a formal closing like भवदीय.',
        'An informal letter, अनौपचारिक पत्र, uses a warm greeting like प्रिय मित्र and a friendly closing like तुम्हारा मित्र.',
        'A diary, डायरी, includes the date and personal feelings; a speech, भाषण, addresses the audience directly, such as आदरणीय प्रधानाचार्य जी और मेरे प्रिय साथियो.',
      ],
      [
        ['औपचारिक पत्र', 'formal letter'],
        ['आदरणीय महोदय', 'Respected Sir (formal greeting)'],
        ['प्रिय मित्र', 'Dear friend (informal greeting)'],
        ['भाषण', 'speech'],
      ],
      [
        ['A formal letter to a principal should use…', ['तू', 'तुम', 'आप', 'no pronoun'], 2, 'आप is respectful and formal.'],
        ['“विषय” in a formal letter is the…', ['date', 'subject line', 'closing', 'address'], 1, 'It states the letter’s subject.'],
        ['Which is an informal greeting?', ['आदरणीय महोदय', 'प्रिय मित्र', 'भवदीय', 'विषय'], 1, 'Dear friend.'],
      ],
    ),
    AS1: C(
      [
        'Paper 1 is productive writing: choose one of three tasks and write in the required text type.',
        'SL students write 250 to 400 words; HL students write 450 to 600 words.',
        'You are assessed on language, message and conceptual understanding: using the right text type, register and purpose.',
        'Plan first, use varied tenses and connectives, and check gender agreement and matras.',
      ],
      [
        ['Paper 1 SL word range', '250–400 words'],
        ['Paper 1 HL word range', '450–600 words'],
        ['Criteria', 'Language, message, conceptual understanding.'],
        ['Checking tip', 'Check gender agreement and matras (vowel signs).'],
      ],
      [
        ['HL Paper 1 word range is…', ['250–400', '450–600', '100–200', '1000+'], 1, 'HL writes more.'],
        ['How many tasks do you answer?', ['One', 'Two', 'Three', 'All'], 0, 'Choose one of three.'],
        ['“Conceptual understanding” includes…', ['Handwriting', 'Correct text type and register', 'Word count only', 'Length of title'], 1, 'Audience, purpose, text type.'],
      ],
    ),
    AS2: C(
      [
        'Paper 2 includes listening comprehension based on audio passages in Hindi.',
        'Read the questions first and predict what information you need.',
        'Listen for key words, numbers and negatives like नहीं and कभी नहीं, and watch for speakers correcting themselves.',
        'Practise with Hindi news, podcasts and films with Hindi subtitles.',
      ],
      [
        ['Before listening', 'Read the questions first.'],
        ['नहीं', 'not / no'],
        ['कभी नहीं', 'never'],
        ['Practice resources', 'Hindi news, podcasts, films with subtitles.'],
      ],
      [
        ['“मैं कभी दिल्ली नहीं गया” means…', ['I often go to Delhi', 'I have never been to Delhi', 'I went to Delhi', 'I will go to Delhi'], 1, 'कभी नहीं = never.'],
        ['A good strategy before listening is to…', ['Read the questions', 'Close your eyes', 'Write a plan for an essay', 'Translate everything'], 0, 'It focuses your listening.'],
        ['“नहीं” means…', ['yes', 'not / no', 'maybe', 'always'], 1, 'Negation.'],
      ],
    ),
    AS3: C(
      [
        'Paper 2 reading uses several texts with question types like true or false with justification, matching, gap-filling and short answers.',
        'For true or false, quote the words from the text that justify your answer.',
        'Skim for the main idea, then scan for details. Use context and word roots to guess unfamiliar words.',
        'Read widely: Hindi newspapers, magazines and online articles build vocabulary.',
      ],
      [
        ['True/false questions', 'Justify with words from the text.'],
        ['Skimming', 'Reading for the main idea.'],
        ['Scanning', 'Looking for specific details.'],
        ['Unknown words', 'Use context and word roots.'],
      ],
      [
        ['For true/false you must…', ['Only tick', 'Justify with text evidence', 'Translate the passage', 'Write a summary'], 1, 'Justification is required.'],
        ['Reading quickly for the gist is…', ['Scanning', 'Skimming', 'Dictation', 'Parsing'], 1, 'Skimming gives the main idea.'],
        ['A good way to build reading vocabulary is…', ['Only using a dictionary', 'Reading Hindi newspapers and articles', 'Memorising grammar only', 'Avoiding Hindi texts'], 1, 'Wide reading helps.'],
      ],
    ),
    AS4: C(
      [
        'The individual oral lasts 12 to 15 minutes, after 15 minutes of preparation.',
        'At SL, it is based on a visual stimulus linked to a theme. At HL, it is based on an extract from a literary work studied.',
        'It has three parts: a presentation of 3 to 4 minutes, a discussion of the stimulus, and a general conversation on at least one other theme.',
        'Describe and interpret the stimulus, link it to Hindi-speaking cultures, and justify your opinions using क्योंकि and इसलिए.',
      ],
      [
        ['Oral length', '12–15 minutes, after 15 minutes of preparation.'],
        ['SL stimulus', 'A visual stimulus with a caption.'],
        ['HL stimulus', 'An extract from a literary work studied.'],
        ['Three parts', 'Presentation, discussion, general conversation.'],
      ],
      [
        ['The HL oral is based on…', ['A photo', 'A literary extract', 'A listening passage', 'A formal letter'], 1, 'HL uses a literary extract.'],
        ['The presentation lasts about…', ['1 minute', '3–4 minutes', '10 minutes', '20 minutes'], 1, 'Then discussion follows.'],
        ['Justifying opinions with “because” uses…', ['लेकिन', 'क्योंकि', 'और', 'हालाँकि'], 1, 'क्योंकि = because.'],
      ],
    ),
    AS5: C(
      [
        'HL students read two literary works in Hindi, such as stories, novels, plays or poetry.',
        'Well-known Hindi writers include Premchand, whose stories portray village life and social issues, and poets like Harivansh Rai Bachchan.',
        'Literature builds reading skills, vocabulary and cultural understanding.',
        'Know each work’s plot, characters, themes and key passages, and be ready to discuss an extract in the HL oral.',
      ],
      [
        ['Number of literary works (HL)', 'Two'],
        ['Premchand', 'Famous Hindi writer of stories about village life and social issues.'],
        ['Where literature is assessed', 'In the HL individual oral.'],
        ['What to know', 'Plot, characters, themes, key passages.'],
      ],
      [
        ['How many literary works do HL students study?', ['One', 'Two', 'Five', 'None'], 1, 'Two works.'],
        ['Premchand is famous for…', ['Science fiction', 'Stories about village life and social issues', 'Poetry only', 'Plays in English'], 1, 'E.g. “Idgah”, “Godaan”.'],
        ['HL literature is assessed through…', ['Paper 1', 'The individual oral', 'Paper 2 listening', 'The EE'], 1, 'An extract forms the basis of the oral.'],
      ],
    ),
  },
};

export default content;
