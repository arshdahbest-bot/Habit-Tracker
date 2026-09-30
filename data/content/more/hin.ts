import type { MoreContent } from '../../types';
import { M } from '../helpers';

// Lesson 2 (model sentences, vocabulary, common mistakes, exam technique) plus extra
// flashcards and questions for every Hindi B chapter.
const more: Record<string, MoreContent> = {
  TH1: M(
    [
      'Model sentence: स्वस्थ रहने के लिए मैं रोज़ योग करता हूँ और संतुलित भोजन खाता हूँ। To stay healthy, I do yoga every day and eat a balanced diet.',
      'More vocabulary: आत्मविश्वास, self-confidence; तनाव, stress; संतुलित भोजन, balanced diet; व्यायाम, exercise.',
      'Identity and language: many young people in India speak Hindi, English and a regional language, and switch between them, which is called code-switching.',
      'Common mistake: verb agreement with gender. A girl says मैं खाती हूँ, not मैं खाता हूँ.',
    ],
    [
      ['आत्मविश्वास', 'self-confidence'],
      ['तनाव', 'stress'],
      ['संतुलित भोजन', 'balanced diet'],
      ['व्यायाम', 'exercise'],
    ],
    [
      ['“तनाव” means…', 'stress', ['health', 'exercise', 'lifestyle'], 'Often used with पढ़ाई का तनाव, study stress.'],
      ['A girl says “I eat”:', 'मैं खाती हूँ', ['मैं खाता हूँ', 'मैं खाते हैं', 'मैं खाया'], 'Feminine verb ending ती.'],
      ['“आत्मविश्वास” means…', 'self-confidence', ['self-respect only', 'belief in God', 'selfishness'], 'आत्म = self, विश्वास = trust.'],
      ['“संतुलित भोजन” means…', 'balanced diet', ['fast food', 'a feast', 'a restaurant'], 'संतुलित = balanced.'],
    ],
  ),
  TH2: M(
    [
      'Model sentence: पिछले साल हम केरल घूमने गए थे। वहाँ का मौसम बहुत सुहावना था। Last year we went to visit Kerala. The weather there was very pleasant.',
      'More vocabulary: यादगार, memorable; पर्यटक, tourist; रीति-रिवाज, customs; मेला, fair.',
      'Festivals across India: होली, the festival of colours; ईद, celebrated by Muslims after Ramadan; पोंगल, a harvest festival in Tamil Nadu; गुरपुरब, celebrating Sikh gurus.',
      'Exam tip: add feelings and opinions to narratives: यह मेरी ज़िंदगी का सबसे यादगार अनुभव था। It was the most memorable experience of my life.',
    ],
    [
      ['यादगार', 'memorable'],
      ['पर्यटक', 'tourist'],
      ['रीति-रिवाज', 'customs and traditions'],
      ['मेला', 'fair'],
    ],
    [
      ['“यादगार” means…', 'memorable', ['forgotten', 'boring', 'expensive'], 'याद = memory.'],
      ['पोंगल is a harvest festival mainly celebrated in…', 'Tamil Nadu', ['Punjab', 'Gujarat', 'Kashmir'], 'It marks the harvest season.'],
      ['“हम केरल घूमने गए थे” is in the…', 'Past tense', ['Present tense', 'Future tense', 'Imperative'], 'गए थे = had gone / went.'],
      ['“पर्यटक” means…', 'tourist', ['guide', 'driver', 'hotel'], 'पर्यटन = tourism.'],
    ],
  ),
  TH3: M(
    [
      'Model sentence: इंटरनेट ने शिक्षा को आसान बना दिया है, लेकिन इसका ज़्यादा इस्तेमाल स्वास्थ्य के लिए हानिकारक है। The internet has made education easier, but using it too much is harmful to health.',
      'More vocabulary: वैज्ञानिक, scientist; अंतरिक्ष, space; खोज, discovery; हानिकारक, harmful.',
      'Indian achievements: चंद्रयान-3 landed near the Moon’s south pole in 2023; UPI digital payments have transformed how people pay in India.',
      'Useful structure for balance: एक ओर… दूसरी ओर…, on one hand… on the other hand…',
    ],
    [
      ['अंतरिक्ष', 'space (outer space)'],
      ['खोज', 'discovery / search'],
      ['हानिकारक', 'harmful'],
      ['एक ओर… दूसरी ओर…', 'on one hand… on the other hand…'],
    ],
    [
      ['“अंतरिक्ष” means…', 'space', ['science', 'technology', 'the internet'], 'Used for space missions.'],
      ['Chandrayaan-3 landed near the Moon’s south pole in…', '2023', ['2008', '2019', '2014'], 'An Indian space achievement.'],
      ['“हानिकारक” means…', 'harmful', ['helpful', 'useful', 'modern'], 'हानि = harm.'],
      ['Which phrase means “on the other hand”?', 'दूसरी ओर', ['इसलिए', 'क्योंकि', 'और'], 'Used to contrast ideas.'],
    ],
  ),
  TH4: M(
    [
      'Model sentence: हर बच्चे को अच्छी शिक्षा मिलनी चाहिए, चाहे वह गाँव में रहता हो या शहर में। Every child should get a good education, whether they live in a village or a city.',
      'More vocabulary: बेरोज़गारी, unemployment; स्वयंसेवा, volunteering; परिवार, family; रिश्ते, relationships.',
      'Social issues in India: the joint family, संयुक्त परिवार, is becoming less common in cities; the Right to Education Act of 2009 made schooling free and compulsory for ages 6 to 14.',
      'Common mistake: चाहिए with ने or को. Use को with the person: मुझे जाना चाहिए, I should go.',
    ],
    [
      ['बेरोज़गारी', 'unemployment'],
      ['संयुक्त परिवार', 'joint family'],
      ['स्वयंसेवा', 'volunteering'],
      ['रिश्ते', 'relationships'],
    ],
    [
      ['“बेरोज़गारी” means…', 'unemployment', ['employment', 'education', 'poverty'], 'बे = without, रोज़गार = employment.'],
      ['“I should go” in Hindi is…', 'मुझे जाना चाहिए', ['मैं जाना चाहिए', 'मैंने जाना चाहिए', 'मुझे जाता चाहिए'], 'चाहिए takes the person with को (मुझे).'],
      ['The Right to Education Act (2009) covers children aged…', '6 to 14', ['3 to 18', '10 to 16', '5 to 10'], 'Free and compulsory schooling.'],
      ['“संयुक्त परिवार” means…', 'joint family', ['nuclear family', 'broken family', 'family business'], 'Several generations living together.'],
    ],
  ),
  TH5: M(
    [
      'Model sentence: अगर हम पेड़ लगाएँ, तो हवा साफ़ होगी। If we plant trees, the air will be clean.',
      'More vocabulary: जलवायु परिवर्तन, climate change; वनों की कटाई, deforestation; नवीकरणीय ऊर्जा, renewable energy; गरीबी, poverty.',
      'Examples: the Chipko movement of the 1970s, when villagers hugged trees to stop logging, and the Swachh Bharat Abhiyan cleanliness campaign launched in 2014.',
      'Exam tip: in persuasive writing, use आइए with a verb to invite action: आइए, हम मिलकर पर्यावरण बचाएँ। Let’s save the environment together.',
    ],
    [
      ['जलवायु परिवर्तन', 'climate change'],
      ['वनों की कटाई', 'deforestation'],
      ['चिपको आंदोलन', 'Chipko movement — villagers hugging trees to stop logging'],
      ['आइए…', 'Let’s… (invitation to act)'],
    ],
    [
      ['“जलवायु परिवर्तन” means…', 'climate change', ['air pollution', 'weather forecast', 'water shortage'], 'जलवायु = climate.'],
      ['In the Chipko movement, villagers…', 'Hugged trees to stop logging', ['Built dams', 'Planted rice', 'Cleaned rivers'], 'Chipko means to cling.'],
      ['अगर हम पेड़ लगाएँ, तो हवा साफ़ ___।', 'होगी', ['थी', 'है', 'हुई'], 'Future result.'],
      ['“आइए, हम पानी बचाएँ” means…', 'Let’s save water', ['We saved water', 'Water is saved', 'Don’t waste water'], 'An invitation to act.'],
    ],
  ),
  LG1: M(
    [
      'Past continuous uses रहा था, रही थी or रहे थे: मैं पढ़ रहा था, I was studying.',
      'Past habitual uses ता था: बचपन में मैं रोज़ क्रिकेट खेलता था। In childhood I used to play cricket every day.',
      'Perfect tenses: मैंने खाना खा लिया है, I have eaten; मैंने खाना खा लिया था, I had eaten.',
      'Subjunctive for wishes and possibilities: शायद वह आए, perhaps he may come; मैं चाहता हूँ कि तुम जीतो, I want you to win.',
    ],
    [
      ['Past continuous (m.)', 'रहा था — मैं पढ़ रहा था।'],
      ['Past habitual', 'ता था — मैं खेलता था (I used to play).'],
      ['Present perfect', 'मैंने खा लिया है (I have eaten).'],
      ['Subjunctive', 'शायद वह आए (perhaps he may come).'],
    ],
    [
      ['“I used to play cricket” (boy)', 'मैं क्रिकेट खेलता था', ['मैं क्रिकेट खेल रहा हूँ', 'मैं क्रिकेट खेलूँगा', 'मैंने क्रिकेट खेला'], 'Past habitual.'],
      ['“वह पढ़ रही थी” means…', 'She was studying', ['She studies', 'She will study', 'She has studied'], 'Past continuous.'],
      ['Which expresses possibility?', 'शायद वह आए', ['वह आया', 'वह आएगा', 'वह आता है'], 'Subjunctive.'],
      ['“मैंने खाना खा लिया है” means…', 'I have eaten', ['I will eat', 'I am eating', 'I used to eat'], 'Present perfect.'],
    ],
  ),
  LG2: M(
    [
      'Oblique case: before a postposition, masculine nouns ending in आ change to ए: लड़का becomes लड़के को; कमरा becomes कमरे में.',
      'Feminine plurals: लड़की becomes लड़कियाँ; किताब becomes किताबें.',
      'More postpositions: के बारे में, about; के साथ, with; के लिए, for; के बाद, after; से पहले, before.',
      'Common mistake: with ने, the verb agrees with the object, not the subject: लड़के ने चाय पी। The boy drank tea; पी agrees with चाय, which is feminine.',
    ],
    [
      ['Oblique of कमरा', 'कमरे (e.g. कमरे में).'],
      ['Plural of किताब', 'किताबें.'],
      ['के बारे में', 'about'],
      ['के साथ', 'with (together with)'],
    ],
    [
      ['“in the room” is…', 'कमरे में', ['कमरा में', 'कमरों में', 'कमरी में'], 'Oblique form before a postposition.'],
      ['The plural of लड़की is…', 'लड़कियाँ', ['लड़कियों', 'लड़कीयें', 'लड़के'], 'Feminine ई → इयाँ.'],
      ['लड़के ने चाय ___। (drank)', 'पी', ['पिया', 'पिए', 'पीता'], 'Agrees with चाय (feminine).'],
      ['“about” in Hindi is…', 'के बारे में', ['के साथ', 'के लिए', 'के बाद'], 'E.g. पर्यावरण के बारे में.'],
    ],
  ),
  LG3: M(
    [
      'More connectives: जबकि, whereas; फिर भी, even so; इसके बावजूद, despite this; ताकि, so that; यदि… तो…, if… then…',
      'Relative clauses use जो… वह: जो मेहनत करता है, वह सफल होता है। Whoever works hard succeeds.',
      'More idioms: आसमान सिर पर उठाना, to create a huge fuss; आँखों का तारा, the apple of one’s eye; हाथ-पाँव फूलना, to panic.',
      'Proverbs, लोकोक्तियाँ, are also valued: जैसी करनी वैसी भरनी, as you sow, so shall you reap.',
    ],
    [
      ['जबकि', 'whereas'],
      ['ताकि', 'so that'],
      ['आँखों का तारा', 'the apple of one’s eye'],
      ['जैसी करनी वैसी भरनी', 'As you sow, so shall you reap.'],
    ],
    [
      ['“ताकि” means…', 'so that', ['because', 'although', 'but'], 'It introduces purpose.'],
      ['“जो मेहनत करता है, वह सफल होता है” uses…', 'A relative clause (जो… वह)', ['A question', 'An idiom', 'The future tense'], 'Whoever… he/she…'],
      ['“आँखों का तारा” means…', 'someone very dear', ['a bright star', 'an eye doctor', 'someone angry'], 'The apple of one’s eye.'],
      ['“जैसी करनी वैसी भरनी” means…', 'As you sow, so shall you reap', ['Hard work is useless', 'Time is money', 'Health is wealth'], 'A well-known proverb.'],
    ],
  ),
  LG4: M(
    [
      'Formal letter structure: sender’s address and date, recipient’s designation and address, विषय, the subject, आदरणीय महोदय, the body, and closing with भवदीय or आपका आज्ञाकारी शिष्य for a student.',
      'Informal letter closing: तुम्हारा मित्र or तुम्हारी सहेली, with the writer’s name.',
      'Article, लेख: a title, the writer’s name, an introduction, paragraphs with subheadings and a conclusion.',
      'Speech, भाषण: begin with आदरणीय प्रधानाचार्य जी, शिक्षकगण और मेरे प्यारे साथियो; end with धन्यवाद.',
    ],
    [
      ['भवदीय', 'Yours faithfully (formal closing)'],
      ['आपका आज्ञाकारी शिष्य', 'Your obedient student (closing to a teacher)'],
      ['तुम्हारी सहेली', 'Your friend (female, informal closing)'],
      ['लेख', 'article'],
    ],
    [
      ['A formal letter should end with…', 'भवदीय', ['तुम्हारा दोस्त', 'बाय', 'प्यार सहित'], 'Formal closing.'],
      ['A speech usually ends with…', 'धन्यवाद', ['नमस्ते only', 'भवदीय', 'विषय'], 'Thank you.'],
      ['“लेख” is a…', 'article', ['letter', 'diary', 'speech'], 'Mass media text.'],
      ['A girl writing to a friend closes with…', 'तुम्हारी सहेली', ['भवदीय', 'आपका आज्ञाकारी शिष्य', 'महोदय'], 'Informal, feminine.'],
    ],
  ),
  AS1: M(
    [
      'Paper 1 lasts 1 hour 15 minutes at SL and HL. Choose the task you can write best, not the one that sounds most impressive.',
      'Plan with a quick outline: introduction, 2 or 3 body paragraphs with examples, and a conclusion that fits the text type.',
      'Show range: different tenses, चाहिए, the subjunctive, relative clauses, connectives and one or two idioms used correctly.',
      'Final check: gender agreement, the ने construction, spellings with matras, and postpositions with the oblique case.',
    ],
    [
      ['Paper 1 time', '1 hour 15 minutes.'],
      ['Planning outline', 'Introduction, body paragraphs, conclusion suited to text type.'],
      ['Showing range', 'Tenses, चाहिए, subjunctive, relative clauses, idioms.'],
      ['Final checklist', 'Gender, ने construction, matras, oblique case.'],
    ],
    [
      ['How long is Paper 1?', '1 hour 15 minutes', ['2 hours', '45 minutes', '1 hour 30 minutes'], 'For SL and HL.'],
      ['Which task should you choose?', 'The one you can write best', ['The longest one', 'The first one always', 'The one with most vocabulary'], 'Play to your strengths.'],
      ['Checking the ने construction means checking…', 'Verb agreement with the object in past transitive sentences', ['Spelling of names', 'Word count', 'Punctuation only'], 'A common error.'],
      ['Using one or two idioms correctly shows…', 'Range of language', ['Poor register', 'Plagiarism', 'Errors'], 'Accuracy and variety are rewarded.'],
    ],
  ),
  AS2: M(
    [
      'Numbers in Hindi are irregular up to 100, so practise them: पच्चीस, 25; पचास, 50; पचहत्तर, 75; सौ, 100; हज़ार, 1,000; लाख, 100,000.',
      'Listen for time words: कल can mean yesterday or tomorrow, so use the verb tense to decide.',
      'Be alert to corrections by speakers: नहीं, मेरा मतलब है…, no, I mean…',
      'Answer briefly and precisely; you don’t need full sentences unless the question asks for them.',
    ],
    [
      ['कल', 'yesterday or tomorrow (tense decides)'],
      ['लाख', '100,000'],
      ['पचास', '50'],
      ['मेरा मतलब है', 'I mean (a correction signal)'],
    ],
    [
      ['“मैं कल आऊँगा” means…', 'I will come tomorrow', ['I came yesterday', 'I come every day', 'I came today'], 'Future tense shows कल = tomorrow.'],
      ['“लाख” equals…', '100,000', ['1,000', '10,000', '1,000,000'], 'Used in the Indian numbering system.'],
      ['“पचहत्तर” is…', '75', ['57', '70', '85'], 'Practise irregular numbers.'],
      ['“मेरा मतलब है” signals…', 'A correction or clarification', ['A greeting', 'A question', 'The end'], 'Listen for the corrected information.'],
    ],
  ),
  AS3: M(
    [
      'Reading strategies: read the title and first paragraph for context, then read each question and locate the matching paragraph.',
      'Watch for synonyms: the text may say प्रसन्न while the question uses खुश; both mean happy.',
      'Formal and Sanskrit-based words appear in newspapers: शिक्षा for education, स्वास्थ्य for health, सरकार for government.',
      'For questions on what a pronoun like वह or उन्हें refers to, find the nearest suitable noun.',
    ],
    [
      ['प्रसन्न', 'happy (formal, = खुश)'],
      ['सरकार', 'government'],
      ['Synonyms', 'Questions often paraphrase the text.'],
      ['उन्हें', 'to them / him (respectful)'],
    ],
    [
      ['“प्रसन्न” has the same meaning as…', 'खुश', ['दुखी', 'गुस्सा', 'थका'], 'Both mean happy.'],
      ['“सरकार” means…', 'government', ['society', 'school', 'army'], 'Common in news texts.'],
      ['A good first step in reading is to…', 'Read the title and first paragraph for context', ['Translate every word', 'Answer without reading', 'Read only the last line'], 'Get the gist first.'],
      ['Questions in reading papers usually…', 'Use synonyms of words in the text', ['Copy text exactly', 'Test only grammar', 'Ignore the text'], 'Look for paraphrases.'],
    ],
  ),
  AS4: M(
    [
      'Describing a photo: इस तस्वीर में हम देख सकते हैं कि…, in this picture we can see that…; सामने, in front; पीछे, behind; ऐसा लगता है कि…, it seems that…',
      'Interpret and connect: explain what the image says about the theme, compare with Hindi-speaking communities, and add your own experience.',
      'Fillers to gain time: यह एक अच्छा सवाल है, that’s a good question; मुझे सोचने दीजिए, let me think.',
      'Criteria reward language, message and interactive skills, so develop answers with reasons and examples.',
    ],
    [
      ['इस तस्वीर में', 'in this picture'],
      ['ऐसा लगता है कि', 'it seems that'],
      ['मुझे सोचने दीजिए', 'let me think'],
      ['पीछे', 'behind / in the background'],
    ],
    [
      ['“ऐसा लगता है कि” means…', 'it seems that', ['I don’t know', 'in my family', 'finally'], 'Useful for interpreting images.'],
      ['“मुझे सोचने दीजिए” helps you…', 'Gain time politely', ['End the oral', 'Greet the examiner', 'Describe the photo'], 'A natural filler.'],
      ['“पीछे” means…', 'behind', ['in front', 'above', 'inside'], 'Useful for describing images.'],
      ['A strong oral answer includes…', 'Reasons and examples', ['One-word answers', 'Reading from notes', 'Silence'], 'Develop your ideas.'],
    ],
  ),
  AS5: M(
    [
      'Premchand’s story ईदगाह tells of Hamid, a poor boy who spends his Eid money on tongs for his grandmother so she won’t burn her hands, showing love and sacrifice.',
      'Other writers: Mahadevi Varma, known for poetry and memoirs; Harivansh Rai Bachchan, author of मधुशाला; and Bhisham Sahni, author of तमस about Partition.',
      'Literary vocabulary: कहानी, story; उपन्यास, novel; कविता, poem; पात्र, character; विषय-वस्तु, theme.',
      'For the HL oral, practise summarising an extract, explaining its context in the work and discussing its themes.',
    ],
    [
      ['ईदगाह', 'Premchand story about Hamid buying tongs for his grandmother.'],
      ['उपन्यास', 'novel'],
      ['पात्र', 'character'],
      ['मधुशाला', 'Famous poem by Harivansh Rai Bachchan.'],
    ],
    [
      ['In ईदगाह, Hamid buys…', 'Tongs for his grandmother', ['Toys for himself', 'Sweets', 'A book'], 'A story of love and sacrifice.'],
      ['“उपन्यास” means…', 'novel', ['poem', 'play', 'essay'], 'A long prose work.'],
      ['मधुशाला was written by…', 'Harivansh Rai Bachchan', ['Premchand', 'Mahadevi Varma', 'Bhisham Sahni'], 'A celebrated Hindi poem.'],
      ['“पात्र” means…', 'character', ['plot', 'author', 'setting'], 'People in a story.'],
    ],
  ),
};

export default more;
