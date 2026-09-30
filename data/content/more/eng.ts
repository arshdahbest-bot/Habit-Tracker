import type { MoreContent } from '../../types';
import { M } from '../helpers';

// Lesson 2 (worked analysis, model sentences, common mistakes, exam technique) plus extra
// flashcards and questions for every English A: Language & Literature chapter.
const more: Record<string, MoreContent> = {
  AE0: M(
    [
      'Using the concepts in writing: “Through its portrayal of migrant workers, the text raises questions of representation, since their voices are filtered through a single, privileged narrator.”',
      'Creativity asks how writers make new meaning; communication asks how meaning reaches readers; perspective asks whose point of view shapes a text and whose is missing.',
      'The concepts link across the course: a poem and an advertisement may both explore identity, but through very different forms and for different audiences.',
      'Exam tip: you don’t need to name all seven. Choose the one or two that genuinely illuminate the text and weave them into your argument.',
    ],
    [
      ['Identity (concept)', 'How texts shape and reflect personal and group identity.'],
      ['Creativity (concept)', 'How writers make new meaning through original choices.'],
      ['Communication (concept)', 'How meaning passes between writer, text and reader.'],
      ['Culture (concept)', 'How texts express and shape shared values and practices.'],
    ],
    [
      ['Asking whose point of view shapes a text relates to…', 'Perspective', ['Creativity', 'Transformation', 'Culture only'], 'Perspective considers viewpoint and bias.'],
      ['A novel exploring what it means to be bilingual most relates to…', 'Identity', ['Transformation', 'Communication only', 'Representation only'], 'It explores who we are.'],
      ['The best way to use course concepts in an essay is to…', 'Weave one or two meaningfully into the argument', ['List all seven', 'Put them in the title only', 'Avoid them'], 'Depth beats coverage.'],
      ['Which concept asks how meaning passes from writer to reader?', 'Communication', ['Identity', 'Culture', 'Transformation'], 'It focuses on the process of meaning-making.'],
    ],
  ),
  AE1: M(
    [
      'Model analysis: “The writer’s use of the second person, ‘you’, draws the reader directly into the scene, creating intimacy and implicating us in the character’s guilt.”',
      'Always connect three things: the technique, the specific evidence and the effect on the reader. This is sometimes called “what, how, why”.',
      'Consider how form shapes meaning: a story told in letters, an epistolary novel, creates a different relationship with the reader than third-person narration.',
      'Common mistake: writing “this makes the reader want to read on”. Be precise about the effect: does it create suspense, sympathy, unease or irony?',
    ],
    [
      ['What, how, why', 'Technique, evidence, effect — a model for analytical sentences.'],
      ['Epistolary form', 'A text told through letters, diaries or documents.'],
      ['Second-person narration', 'Addressing the reader as “you”.'],
      ['Implied reader', 'The reader a text seems to expect or address.'],
    ],
    [
      ['A novel written as a series of letters is…', 'Epistolary', ['Stream of consciousness', 'Dramatic', 'Allegorical'], 'It uses letters or documents.'],
      ['Which is the most precise effect?', 'It creates unease by withholding the character’s motive', ['It makes the reader want to read on', 'It is effective', 'It adds interest'], 'Specific effects score higher.'],
      ['Using “you” to address the reader is…', 'Second-person narration', ['First-person narration', 'Third-person omniscient', 'Free indirect speech'], 'It directly involves the reader.'],
      ['A good analytical sentence links technique, evidence and…', 'Effect', ['Word count', 'Biography', 'Summary'], 'Explain why the choice matters.'],
    ],
  ),
  AE2: M(
    [
      'Model sentence: “Published in 1818, at a time of rapid scientific progress, Frankenstein reflects anxieties about the limits of human ambition.”',
      'Avoid simply listing biographical facts. Use context only when it helps explain the text’s choices and meanings.',
      'Consider how different audiences read a text: a colonial-era novel may be read today through a postcolonial lens, revealing assumptions its first readers accepted.',
      'Non-literary texts also have contexts: a public health poster from the 1980s AIDS crisis uses fear-based messaging that would be judged differently today.',
    ],
    [
      ['Postcolonial reading', 'Interpreting texts with attention to empire, race and power.'],
      ['Relevant context', 'Context that explains the text’s choices, not unrelated biography.'],
      ['Changing reception', 'Audiences in different times interpret texts differently.'],
      ['Historical context', 'Events and ideas of the time a text was produced.'],
    ],
    [
      ['Reading an old novel with attention to empire and race is a…', 'Postcolonial reading', ['Formalist reading', 'Reader-response only', 'Biographical reading'], 'It examines power and colonialism.'],
      ['Context is best used in an essay to…', 'Explain the text’s choices and meanings', ['Fill space with facts', 'Replace analysis', 'Summarise the author’s life'], 'It must support analysis.'],
      ['Frankenstein (1818) reflects anxieties about…', 'Scientific ambition', ['Social media', 'Space travel', 'World War II'], 'It was written amid scientific change.'],
      ['A 1980s health poster judged differently today shows…', 'Changing reception over time', ['Context of production only', 'Intertextuality', 'Genre'], 'Audiences and values change.'],
    ],
  ),
  AE3: M(
    [
      'Examples: Jean Rhys’s Wide Sargasso Sea retells Jane Eyre from the perspective of Bertha Mason; memes remix images and captions from films and news.',
      'Allusion is a brief reference to another text, figure or event, like calling someone “a Romeo”. It adds meaning quickly by relying on shared knowledge.',
      'When comparing texts, explore how each uses form, perspective and style to address a shared theme, not just what each is about.',
      'Paper 2 tip: plan paragraphs around points of comparison, such as “both texts use setting to reflect isolation”, and discuss both works in each paragraph.',
    ],
    [
      ['Allusion', 'A brief reference to another text, person or event.'],
      ['Pastiche', 'Imitation of another text’s style, often as homage.'],
      ['Wide Sargasso Sea', 'Jean Rhys’s response to Jane Eyre, told from Bertha’s view.'],
      ['Adaptation', 'Transforming a text into a new form or medium.'],
    ],
    [
      ['Calling a lovesick boy “a Romeo” is an…', 'Allusion', ['Irony', 'Anaphora', 'Juxtaposition'], 'It refers to Shakespeare’s character.'],
      ['Wide Sargasso Sea responds to…', 'Jane Eyre', ['Hamlet', 'Frankenstein', 'The Great Gatsby'], 'It gives Bertha a voice.'],
      ['A film version of a novel is an…', 'Adaptation', ['Allusion', 'Parody', 'Epistolary text'], 'It changes medium.'],
      ['Imitating a style respectfully as a tribute is…', 'Pastiche', ['Parody', 'Plagiarism', 'Satire'], 'Parody mocks; pastiche imitates.'],
    ],
  ),
  TX1: M(
    [
      'Model analysis of an advert: “The low camera angle positions the athlete as heroic, while the minimalist slogan ‘Just do it’ uses the imperative to challenge the viewer directly.”',
      'Visual vocabulary: salience, what the eye is drawn to first; vectors, lines that guide the eye; gaze, whether a figure looks at the viewer, a demand, or away, an offer.',
      'Speeches: look for direct address, inclusive pronouns like “we”, repetition, rhetorical questions and a call to action at the end.',
      'Infographics combine data, icons and short text; analyse how visual hierarchy and colour make statistics persuasive or memorable.',
    ],
    [
      ['Salience', 'The element that attracts attention first.'],
      ['Demand vs offer (gaze)', 'A figure looking at the viewer demands engagement; looking away offers them to be observed.'],
      ['Vectors', 'Lines in an image that lead the eye.'],
      ['Call to action', 'A final instruction urging the audience to act.'],
    ],
    [
      ['A model staring directly at the viewer creates a…', 'Demand', ['Offer', 'Vector', 'Caption'], 'It invites a direct relationship.'],
      ['“Join us today to save a life” is a…', 'Call to action', ['Slogan only', 'Rhetorical question', 'Caption'], 'It tells the audience what to do.'],
      ['A low camera angle usually makes the subject seem…', 'Powerful', ['Weak', 'Distant', 'Funny'], 'The viewer looks up to them.'],
      ['Using “we” in a speech creates…', 'Inclusion and unity', ['Distance', 'Formality only', 'Confusion'], 'Inclusive pronouns build solidarity.'],
    ],
  ),
  TX2: M(
    [
      'Free indirect discourse blends the narrator’s voice with a character’s thoughts, as Jane Austen does, letting irony creep in without direct comment.',
      'Pathetic fallacy gives nature human emotions to reflect mood, like a storm during a moment of conflict.',
      'Narrative structure: in medias res starts in the middle of the action; a frame narrative sets one story inside another, like in Frankenstein.',
      'Model sentence: “The fragmented, non-chronological structure mirrors the narrator’s traumatised memory, forcing the reader to piece events together.”',
    ],
    [
      ['Free indirect discourse', 'Third-person narration that slips into a character’s thoughts.'],
      ['Pathetic fallacy', 'Weather or nature reflecting human emotion.'],
      ['In medias res', 'Starting a story in the middle of the action.'],
      ['Frame narrative', 'A story told within another story.'],
    ],
    [
      ['A storm breaking out as two characters argue is…', 'Pathetic fallacy', ['Foreshadowing only', 'Irony', 'Allusion'], 'Nature mirrors emotion.'],
      ['Starting a novel in the middle of a battle is…', 'In medias res', ['Flashback', 'Frame narrative', 'Epilogue'], 'The reader joins mid-action.'],
      ['Frankenstein’s story within Walton’s letters is a…', 'Frame narrative', ['Monologue', 'Soliloquy', 'Stream of consciousness'], 'One story frames another.'],
      ['Third-person narration that slips into a character’s thoughts is…', 'Free indirect discourse', ['First person', 'Omniscient only', 'Dialogue'], 'It blends voices.'],
    ],
  ),
  TX3: M(
    [
      'Model analysis: “The volta in line nine shifts the sonnet from grief to consolation, as the speaker turns from loss to memory.”',
      'Meter: iambic pentameter has five pairs of unstressed and stressed syllables, like a heartbeat. Breaking the pattern draws attention to key words.',
      'Free verse has no regular rhyme or meter, giving poets freedom to shape rhythm through line breaks and white space.',
      'Tone and voice: identify the speaker, who is not always the poet, and how their attitude shifts across the poem.',
    ],
    [
      ['Volta', 'A turn or shift in thought in a poem, often in a sonnet.'],
      ['Iambic pentameter', 'Five iambs per line: da-DUM × 5.'],
      ['Free verse', 'Poetry without regular rhyme or meter.'],
      ['Speaker (persona)', 'The voice in a poem, not necessarily the poet.'],
    ],
    [
      ['A shift in argument in line 9 of a Petrarchan sonnet is the…', 'Volta', ['Caesura', 'Couplet', 'Refrain'], 'The turn between octave and sestet.'],
      ['Poetry with no regular rhyme or meter is…', 'Free verse', ['Blank verse', 'A sonnet', 'A ballad'], 'Blank verse is unrhymed iambic pentameter.'],
      ['“Shall I compare thee to a summer’s day?” is written in…', 'Iambic pentameter', ['Free verse', 'Trochaic tetrameter', 'Prose'], 'Five iambs.'],
      ['The voice speaking in a poem is the…', 'Speaker', ['Author always', 'Narrator of a novel', 'Chorus'], 'It may be a persona.'],
    ],
  ),
  TX4: M(
    [
      'Aside: a character speaks briefly to the audience without other characters hearing. Monologue: a long speech to other characters.',
      'Catharsis, from Aristotle, is the release of emotion the audience experiences through tragedy.',
      'Brecht’s epic theatre uses the alienation effect, like placards and actors breaking character, to make audiences think critically rather than just feel.',
      'Model sentence: “The stage direction ‘[a long pause]’ lets silence speak, exposing the unspoken tension between father and son.”',
    ],
    [
      ['Aside', 'Brief remark to the audience unheard by other characters.'],
      ['Catharsis', 'Emotional release the audience feels through tragedy.'],
      ['Alienation effect (Brecht)', 'Techniques that stop the audience losing themselves in the story.'],
      ['Hamartia', 'The fatal flaw of a tragic hero.'],
    ],
    [
      ['A character’s quick comment to the audience that others don’t hear is an…', 'Aside', ['Soliloquy', 'Monologue', 'Stage direction'], 'It is short and secret.'],
      ['Macbeth’s ambition is his…', 'Hamartia', ['Catharsis', 'Aside', 'Chorus'], 'The flaw that causes his downfall.'],
      ['Brecht wanted audiences to…', 'Think critically rather than simply empathise', ['Cry throughout', 'Forget they are in a theatre', 'Sing along'], 'The alienation effect.'],
      ['The emotional release after a tragedy is…', 'Catharsis', ['Hubris', 'Denouement', 'Pathos only'], 'Aristotle’s term.'],
    ],
  ),
  TX5: M(
    [
      'Hyperbole is deliberate exaggeration: “I’ve told you a million times.” Litotes is deliberate understatement using a negative: “not bad at all”.',
      'Antithesis puts contrasting ideas in balanced phrases: “It was the best of times, it was the worst of times.”',
      'Semantic field is a group of words linked by meaning, like war imagery in a love poem, which can build into an extended metaphor.',
      'Model analysis: “The semantic field of imprisonment, ‘caged’, ‘chained’, ‘locked’, presents marriage as a trap rather than a union.”',
    ],
    [
      ['Hyperbole', 'Deliberate exaggeration for effect.'],
      ['Litotes', 'Understatement using a negative, e.g. “not bad”.'],
      ['Antithesis', 'Contrasting ideas placed in balanced phrases.'],
      ['Semantic field', 'A group of words related by meaning.'],
    ],
    [
      ['“It was the best of times, it was the worst of times” is an example of…', 'Antithesis', ['Anaphora only', 'Litotes', 'Hyperbole'], 'Contrasting balanced phrases.'],
      ['“I’ve told you a million times” is…', 'Hyperbole', ['Litotes', 'Metaphor', 'Tricolon'], 'Deliberate exaggeration.'],
      ['Words like “caged”, “chained” and “locked” form a…', 'Semantic field', ['Rhetorical question', 'Tricolon', 'Refrain'], 'Linked by meaning.'],
      ['“She’s not unfriendly” uses…', 'Litotes', ['Hyperbole', 'Oxymoron', 'Allusion'], 'Understatement with a negative.'],
    ],
  ),
  AS1: M(
    [
      'Timing: SL writes one analysis in 1 hour 15 minutes; HL writes two, one on each text, in 2 hours 15 minutes. Spend about a quarter of your time reading and planning.',
      'Introduction model: “This charity advertisement, aimed at young adults, uses stark imagery and direct address to provoke guilt and urge donations.”',
      'Structure options: by technique, like visuals then language, or by effect or idea, which often leads to more analytical, less list-like essays.',
      'Criteria reward understanding and interpretation, analysis and evaluation, focus and organisation, and language. Precise vocabulary for techniques matters.',
    ],
    [
      ['Paper 1 SL timing', '1 hour 15 minutes, one text.'],
      ['Paper 1 HL timing', '2 hours 15 minutes, two texts (one essay each).'],
      ['Structuring by idea', 'Organising paragraphs around effects or ideas rather than listing devices.'],
      ['Planning time', 'About a quarter of the exam time.'],
    ],
    [
      ['How long is SL Paper 1?', '1 hour 15 minutes', ['2 hours 15 minutes', '45 minutes', '1 hour 45 minutes'], 'SL analyses one text.'],
      ['A strong Paper 1 introduction includes…', 'Text type, audience, purpose and a thesis', ['A biography of the author', 'A list of every device', 'A summary of the text only'], 'It frames the analysis.'],
      ['Organising paragraphs around effects or ideas tends to…', 'Produce more analytical essays', ['Lose marks', 'Ignore evidence', 'Reduce focus'], 'It avoids device-spotting.'],
      ['Which is a Paper 1 criterion?', 'Analysis and evaluation', ['Creativity of title', 'Word count', 'Handwriting'], 'Criteria assess understanding, analysis, organisation and language.'],
    ],
  ),
  AS2: M(
    [
      'Paper 2 lasts 1 hour 45 minutes for SL and HL. You choose one of four questions and write about two literary works studied in class.',
      'Thesis model: “While both works present isolation as destructive, the novel explores it as a social condition, whereas the play treats it as a personal choice.”',
      'Integrated comparison uses connectives like “similarly”, “in contrast”, “whereas” and “both”, and discusses both works in every paragraph.',
      'Prepare by memorising short, flexible quotations and key moments for each work, and practise applying them to different question types.',
    ],
    [
      ['Paper 2 length', '1 hour 45 minutes (SL and HL).'],
      ['Comparative connectives', 'Similarly, whereas, in contrast, both, likewise.'],
      ['Flexible quotations', 'Short quotations usable for several themes.'],
      ['Paper 2 texts', 'Two literary works studied in class.'],
    ],
    [
      ['How long is Paper 2?', '1 hour 45 minutes', ['1 hour 15 minutes', '2 hours 15 minutes', '1 hour'], 'The same for SL and HL.'],
      ['Which is a comparative connective?', 'Whereas', ['Therefore', 'Firstly', 'Finally'], 'It signals contrast between texts.'],
      ['Paper 2 essays compare…', 'Two literary works', ['A poem and an advert', 'Unseen texts', 'One novel only'], 'Both must be literary works studied.'],
      ['The best Paper 2 preparation includes…', 'Short, flexible quotations for each work', ['Memorising whole essays', 'Reading only summaries', 'Learning author birthdays'], 'Adaptable evidence helps any question.'],
    ],
  ),
  AS3: M(
    [
      'Choose one literary and one non-literary text, and two extracts of about 40 lines, or equivalent, that both show the same global issue.',
      'Structure: introduce the global issue, analyse the first extract, then the second, linking each to the wider work, and conclude by comparing their presentations.',
      'Example global issue: “the pressure on young people to conform to beauty standards”, explored through a novel extract and a skincare advertisement.',
      'You may bring a brief outline of up to 10 bullet points but no script. Practise speaking naturally and using precise analytical vocabulary.',
    ],
    [
      ['Oral outline', 'Up to 10 bullet points; no script.'],
      ['Extract length', 'About 40 lines or equivalent.'],
      ['Oral structure', 'Issue → text 1 → text 2 → comparison → conclusion.'],
      ['Linking extract and work', 'Show how the extract connects to the whole text.'],
    ],
    [
      ['What can you bring into the individual oral?', 'An outline of up to 10 bullet points', ['A full script', 'Nothing at all', 'Your essays'], 'Notes must be brief.'],
      ['A strong global issue is…', 'The pressure on young people to conform to beauty standards', ['Love', 'Nature', 'War in general'], 'It is specific and transnational.'],
      ['The oral should analyse…', 'Both extracts and their wider works', ['Only the literary text', 'Only the advert', 'The author’s biography'], 'Link extracts to whole works.'],
      ['The follow-up questions in the oral last about…', '5 minutes', ['10 minutes', '15 minutes', '1 minute'], 'After 10 minutes of speaking.'],
    ],
  ),
  AS4: M(
    [
      'Example line of inquiry: “How does Carol Ann Duffy use dramatic monologue to give voice to women silenced in history in The World’s Wife?”',
      'Choose a focused angle: a technique, a character, a theme or a course concept, rather than a broad topic.',
      'Draft, get one round of written teacher feedback, and revise. Plan your argument before writing, with a clear thesis and topic sentences.',
      'Include a works cited list and use one referencing style consistently. Secondary sources are optional but must be cited if used.',
    ],
    [
      ['Good line of inquiry', 'Focused question on a technique, theme or concept in one text.'],
      ['Teacher feedback on HL essay', 'One round of written feedback on a draft.'],
      ['Works cited', 'List of sources in a consistent referencing style.'],
      ['Weighting of HL essay', '20% of the HL grade.'],
    ],
    [
      ['Which is the best line of inquiry?', 'How does Duffy use dramatic monologue to voice silenced women?', ['Poetry is interesting', 'A summary of a novel', 'All about Shakespeare'], 'It is focused and analytical.'],
      ['The HL essay is worth…', '20%', ['35%', '10%', '50%'], 'Of the final HL grade.'],
      ['How much written teacher feedback do you get on a draft?', 'One round', ['None', 'Unlimited', 'Two full rewrites'], 'IB rules limit feedback.'],
      ['If you use secondary sources you must…', 'Cite them consistently', ['Hide them', 'Only use Wikipedia', 'Copy their conclusions'], 'Academic honesty.'],
    ],
  ),
  AS5: M(
    [
      'Useful entries: a reflection after each text, notes on context, annotated extracts, comparisons of texts, and ideas for global issues.',
      'Creative responses, like rewriting a scene from another character’s perspective, can deepen understanding of perspective and voice.',
      'Before the individual oral, use your portfolio to find texts that share a global issue and to track your ideas.',
      'Regular reflection builds your analytical vocabulary and helps you see connections for Paper 2.',
    ],
    [
      ['Reflection entry', 'Your thoughts on how a text created meaning for you.'],
      ['Creative response', 'E.g. rewriting a scene from another viewpoint.'],
      ['Portfolio for the oral', 'Helps pair texts around a global issue.'],
      ['Portfolio format', 'Can be written, visual, audio or digital.'],
    ],
    [
      ['Rewriting a scene from a minor character’s view helps you explore…', 'Perspective', ['Grammar only', 'Word counts', 'Referencing'], 'It shows how viewpoint shapes meaning.'],
      ['The learner portfolio can be…', 'Written, visual, audio or digital', ['Only handwritten', 'Only typed essays', 'Only exam papers'], 'Format is flexible.'],
      ['A key use of the portfolio is preparing for…', 'The individual oral', ['The TOK exhibition', 'Maths Paper 1', 'The EE viva only'], 'It helps pair texts by global issue.'],
      ['Which statement about the portfolio is true?', 'It is a record of your learning and is not directly graded', ['It is worth 20%', 'It is an exam paper', 'It is marked by the IB'], 'It supports all assessments.'],
    ],
  ),
};

export default more;
