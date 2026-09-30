import type { SubjectContentFile } from '../types';
import { C } from './helpers';

const content: SubjectContentFile = {
  units: {
    AE: [
      'English A: Language and Literature is organised around three areas of exploration and seven course concepts.',
      'The areas are readers, writers and texts; time and space; and intertextuality. You study both literary works and non-literary texts through them.',
    ],
    TX: [
      'This unit covers the text types and forms you will analyse: non-literary texts like adverts and speeches, and literary forms like prose, poetry and drama.',
      'It also builds your toolkit of stylistic and rhetorical devices, so you can explain how writers create meaning.',
    ],
    AS: [
      'The assessments are Paper 1, guided textual analysis; Paper 2, a comparative essay on literary works; the individual oral; and, at HL, the HL essay.',
      'Your learner portfolio records your reading and thinking throughout the course and prepares you for all of them.',
    ],
  },
  chapters: {
    AE0: C(
      [
        'The course has seven concepts: identity, culture, creativity, communication, perspective, transformation and representation.',
        'Identity and culture ask how texts shape and reflect who we are. Creativity looks at originality and imagination.',
        'Communication explores how meaning passes between writer and reader. Perspective considers point of view.',
        'Transformation looks at how texts change and are changed by other texts; representation asks how texts portray reality. Use these concepts to frame your analysis.',
      ],
      [
        ['Seven course concepts', 'Identity, culture, creativity, communication, perspective, transformation, representation.'],
        ['Representation', 'How a text portrays people, places or ideas.'],
        ['Perspective', 'The point of view from which a text is presented.'],
        ['Transformation', 'How texts change or are changed by other texts or readers.'],
      ],
      [
        ['How an advert portrays teenagers relates mostly to…', ['Creativity', 'Representation', 'Transformation', 'Communication'], 1, 'It is about how a group is shown.'],
        ['A modern retelling of a Shakespeare play is an example of…', ['Transformation', 'Identity', 'Perspective only', 'Culture only'], 0, 'One text transforms another.'],
        ['How many course concepts are there?', ['Five', 'Six', 'Seven', 'Nine'], 2, 'Identity, culture, creativity, communication, perspective, transformation, representation.'],
      ],
    ),
    AE1: C(
      [
        'Readers, writers and texts focuses on how texts create meaning and how readers respond.',
        'You explore the choices writers make, like structure, style and language, and how they shape the reader’s response.',
        'Different readers may interpret the same text differently depending on their background and context.',
        'Key questions include: why and how do we study texts? How are we affected by them? How does language create meaning?',
      ],
      [
        ['Focus of readers, writers and texts', 'How writers create meaning and how readers respond.'],
        ['Authorial choice', 'A decision a writer makes about language, structure or style.'],
        ['Reader response', 'How individual readers interpret a text.'],
        ['Guiding question', 'How does language create meaning?'],
      ],
      [
        ['Readers, writers and texts mainly explores…', ['Historical context only', 'How meaning is created and received', 'Only poetry', 'Grammar rules'], 1, 'It centres on the text and its reception.'],
        ['Two readers interpreting a poem differently shows…', ['One is wrong', 'Interpretation depends on the reader', 'The poem is poor', 'No meaning exists'], 1, 'Readers bring their own experiences.'],
        ['A writer choosing short sentences to build tension is…', ['Reader response', 'An authorial choice', 'Context', 'Intertextuality'], 1, 'It is a deliberate stylistic decision.'],
      ],
    ),
    AE2: C(
      [
        'Time and space looks at texts in their contexts: when and where they were written and read.',
        'Historical, cultural, political and social contexts shape what writers say and how readers understand it.',
        'A text can take on new meanings when read in a different time or place.',
        'Key questions include: how do texts reflect or challenge their context? How do readers from other times and places respond?',
      ],
      [
        ['Context of production', 'When, where and why a text was created.'],
        ['Context of reception', 'When and where a text is read.'],
        ['Focus of time and space', 'How context shapes texts and their reception.'],
        ['Cultural context', 'Values and beliefs of the society a text comes from.'],
      ],
      [
        ['Reading a 1950s advert today and finding it sexist shows the influence of…', ['Context of reception', 'Rhyme', 'Structure', 'Genre only'], 0, 'Today’s values shape our reading.'],
        ['Time and space is mainly about…', ['Formatting', 'Context', 'Punctuation', 'Word count'], 1, 'Texts are shaped by their time and place.'],
        ['A war poem written during WWI reflects its…', ['Context of production', 'Intertextuality only', 'Target audience only', 'Font'], 0, 'It was shaped by when it was written.'],
      ],
    ),
    AE3: C(
      [
        'Intertextuality: connecting texts explores the relationships between texts.',
        'Texts can refer to, borrow from, parody or respond to other texts, and they belong to genres and traditions.',
        'Comparing texts reveals similarities and differences in how they treat themes and use conventions.',
        'Key questions include: how do texts follow or break conventions? How can comparing texts deepen understanding? This area prepares you for Paper 2.',
      ],
      [
        ['Intertextuality', 'Relationships and references between texts.'],
        ['Parody', 'An imitation of a text for comic or critical effect.'],
        ['Genre conventions', 'Typical features of a type of text.'],
        ['Link to assessment', 'Prepares for the comparative essay (Paper 2).'],
      ],
      [
        ['A novel that retells a fairy tale from the villain’s view uses…', ['Intertextuality', 'Rhyme', 'Enjambment', 'Register'], 0, 'It connects to an earlier text.'],
        ['Breaking the usual features of a genre is called…', ['Following conventions', 'Subverting conventions', 'Plagiarism', 'Context'], 1, 'It challenges expectations.'],
        ['Which assessment most draws on intertextuality?', ['Paper 1', 'Paper 2', 'Learner portfolio only', 'None'], 1, 'Paper 2 compares two works.'],
      ],
    ),
    TX1: C(
      [
        'Non-literary texts include adverts, speeches, articles, blogs, infographics, cartoons, websites and letters.',
        'Analyse the text type, audience, purpose and context first.',
        'Look at visual elements: layout, images, colour, typography and the relationship between image and text.',
        'Look at language: tone, register, persuasive techniques and rhetorical devices. Always explain the effect on the audience.',
      ],
      [
        ['GAP / TAP', 'Genre (text type), Audience, Purpose.'],
        ['Visual features', 'Layout, images, colour, typography.'],
        ['Tone', 'The attitude conveyed by the text.'],
        ['Anchorage', 'Text that fixes the meaning of an image.'],
      ],
      [
        ['A caption under a photo that tells you how to read it provides…', ['Anchorage', 'Rhyme', 'Enjambment', 'Pathos only'], 0, 'It anchors the image’s meaning.'],
        ['Bold, large fonts in a headline mainly…', ['Hide information', 'Grab attention', 'Show dialogue', 'Add rhythm'], 1, 'Typography directs attention.'],
        ['The first thing to identify in a non-literary text is…', ['Its rhyme scheme', 'Its audience and purpose', 'Its word count', 'The author’s age'], 1, 'Everything else depends on this.'],
      ],
    ),
    TX2: C(
      [
        'Prose fiction includes novels and short stories.',
        'Key features include narrative voice, first or third person, reliable or unreliable narrators, and point of view.',
        'Analyse characterisation, setting, structure, like flashbacks and chronology, and themes.',
        'Look closely at language: imagery, symbolism, dialogue and sentence structure, and explain how they build meaning.',
      ],
      [
        ['Unreliable narrator', 'A narrator whose account can’t be fully trusted.'],
        ['Characterisation', 'How a writer creates and develops characters.'],
        ['Symbolism', 'Using objects or images to represent ideas.'],
        ['Flashback', 'A scene set earlier than the main narrative.'],
      ],
      [
        ['A narrator who is clearly biased or mistaken is…', ['Omniscient', 'Unreliable', 'Third person', 'Objective'], 1, 'Readers must question their account.'],
        ['A green light that represents hope is an example of…', ['Setting', 'Symbolism', 'Dialogue', 'Flashback'], 1, 'An object standing for an idea.'],
        ['Using “I” to tell the story is…', ['First-person narration', 'Third-person narration', 'Second person', 'Omniscient'], 0, 'The narrator is a character.'],
      ],
    ),
    TX3: C(
      [
        'Poetry uses compressed, patterned language. Analyse form, like sonnets and free verse, and structure, like stanzas and line breaks.',
        'Sound devices include rhyme, rhythm, meter, alliteration, assonance and onomatopoeia.',
        'Imagery includes metaphor, simile and personification. Enjambment and caesura control pace.',
        'Always link features to meaning: how does the form or sound reinforce the poem’s ideas and tone?',
      ],
      [
        ['Enjambment', 'A sentence continuing over a line break.'],
        ['Caesura', 'A pause in the middle of a line.'],
        ['Sonnet', 'A 14-line poem, often with a set rhyme scheme.'],
        ['Assonance', 'Repetition of vowel sounds.'],
      ],
      [
        ['A 14-line poem is a…', ['Haiku', 'Sonnet', 'Limerick', 'Ballad'], 1, 'Sonnets have 14 lines.'],
        ['“The fair breeze blew, the white foam flew” mainly uses…', ['Alliteration', 'Onomatopoeia', 'Enjambment', 'Caesura'], 0, 'Repeated “f” and “b” sounds.'],
        ['A full stop in the middle of a line creates…', ['Enjambment', 'Caesura', 'Rhyme', 'Meter'], 1, 'A mid-line pause.'],
      ],
    ),
    TX4: C(
      [
        'Drama is written to be performed. Analyse dialogue, stage directions, setting and dramatic structure.',
        'Dramatic devices include soliloquy, a character speaking thoughts alone, aside, and dramatic irony, where the audience knows more than the characters.',
        'Consider how staging, lighting and performance choices shape meaning.',
        'Structure often includes exposition, rising action, climax and resolution, and tragedies centre on a tragic hero’s downfall.',
      ],
      [
        ['Soliloquy', 'A character speaks their thoughts alone on stage.'],
        ['Dramatic irony', 'The audience knows something the characters don’t.'],
        ['Stage directions', 'Instructions about action, setting or delivery.'],
        ['Tragic hero', 'A protagonist whose flaw leads to downfall.'],
      ],
      [
        ['Hamlet’s “To be or not to be” speech is a…', ['Aside', 'Soliloquy', 'Stage direction', 'Chorus'], 1, 'He speaks his thoughts alone.'],
        ['The audience knowing Juliet is alive while Romeo doesn’t is…', ['Dramatic irony', 'Symbolism', 'Exposition', 'Resolution'], 0, 'The audience knows more.'],
        ['Instructions in italics telling actors to exit are…', ['Dialogue', 'Stage directions', 'Soliloquies', 'Asides'], 1, 'They guide performance.'],
      ],
    ),
    TX5: C(
      [
        'Stylistic and rhetorical devices are the tools you name and explain in analysis.',
        'Rhetorical appeals are ethos, credibility; pathos, emotion; and logos, logic.',
        'Other devices include anaphora, tricolon or the rule of three, rhetorical questions, juxtaposition, hyperbole, irony and direct address.',
        'Never just list devices. Explain precisely how each creates an effect on the audience and supports the writer’s purpose.',
      ],
      [
        ['Ethos, pathos, logos', 'Appeals to credibility, emotion and logic.'],
        ['Anaphora', 'Repetition at the start of successive clauses.'],
        ['Tricolon', 'A list of three for emphasis.'],
        ['Juxtaposition', 'Placing contrasting ideas side by side.'],
      ],
      [
        ['A charity advert showing a crying child mainly uses…', ['Ethos', 'Pathos', 'Logos', 'Kairos'], 1, 'An appeal to emotion.'],
        ['“We will fight… we will fight… we will fight…” is…', ['Anaphora', 'Oxymoron', 'Hyperbole', 'Enjambment'], 0, 'Repeated clause openings.'],
        ['“Government of the people, by the people, for the people” uses…', ['Tricolon', 'Caesura', 'Onomatopoeia', 'Flashback'], 0, 'A group of three.'],
      ],
    ),
    AS1: C(
      [
        'In Paper 1 you analyse unseen non-literary texts. SL students write about one text; HL students write about both texts in separate essays.',
        'Start with the guiding question, but you don’t have to follow it. Identify text type, audience, purpose and context.',
        'Annotate for structure, tone, register, rhetorical appeals, imagery, and visual features.',
        'Write a clear thesis. Each paragraph makes one point, quotes precise evidence, names the technique and explains its effect. Examiners reward analysis of effects over lists of features.',
      ],
      [
        ['Paper 1 texts', 'Unseen non-literary texts.'],
        ['SL vs HL Paper 1', 'SL: one text. HL: two texts, two separate analyses.'],
        ['Guiding question', 'Optional prompt suggesting a focus.'],
        ['Good paragraph', 'Point, evidence, technique, effect.'],
      ],
      [
        ['In Paper 1, the guiding question is…', ['Compulsory', 'Optional', 'Only for HL', 'Worth extra marks'], 1, 'You may choose your own focus.'],
        ['HL Paper 1 requires…', ['One analysis', 'Two separate analyses', 'A comparative essay', 'An oral'], 1, 'One on each text.'],
        ['The best Paper 1 paragraphs focus on…', ['Listing devices', 'Summarising', 'Explaining effects on the audience', 'Personal opinion'], 2, 'Analysis of effect is rewarded.'],
      ],
    ),
    AS2: C(
      [
        'Paper 2 is a comparative essay. You answer one of four general questions using two literary works you have studied.',
        'You must compare and contrast how the two works address the question.',
        'Plan a thesis that covers both works. Integrate comparison throughout, rather than writing about one then the other.',
        'Support points with remembered quotations and references, and discuss how authorial choices create meaning.',
      ],
      [
        ['Paper 2 task', 'A comparative essay on two literary works.'],
        ['Number of questions to choose from', 'Four general questions.'],
        ['Integrated comparison', 'Comparing works throughout, not separately.'],
        ['Evidence', 'Remembered quotations and specific references.'],
      ],
      [
        ['Paper 2 compares…', ['Two non-literary texts', 'Two literary works you have studied', 'An unseen poem and a novel', 'Your own writing'], 1, 'Works from the course.'],
        ['The strongest structure for Paper 2 usually…', ['Discusses one work, then the other', 'Integrates comparison throughout', 'Ignores the question', 'Summarises plots'], 1, 'Comparison should be continuous.'],
        ['You bring the texts into the Paper 2 exam?', ['Yes', 'No', 'Only at HL', 'Only one text'], 1, 'You rely on memory.'],
      ],
    ),
    AS3: C(
      [
        'The individual oral explores a global issue through one literary work and one non-literary body of work.',
        'It lasts 15 minutes: 10 minutes of prepared speaking, followed by 5 minutes of questions from your teacher.',
        'A global issue is significant, transnational and felt in everyday life, like identity, power or the environment.',
        'Choose short extracts from each text, and analyse how each presents the issue through authorial choices.',
      ],
      [
        ['Individual oral length', '15 minutes: 10 minutes speaking + 5 minutes questions.'],
        ['Texts in the oral', 'One literary work and one non-literary body of work.'],
        ['Global issue', 'Significant, transnational, and present in everyday life.'],
        ['Focus', 'How each text presents the global issue.'],
      ],
      [
        ['The individual oral lasts…', ['5 minutes', '10 minutes', '15 minutes', '30 minutes'], 2, '10 minutes plus 5 minutes of questions.'],
        ['The oral uses…', ['Two poems', 'One literary and one non-literary text', 'Only non-literary texts', 'Unseen texts'], 1, 'One of each.'],
        ['A global issue must be…', ['Local only', 'Significant and transnational', 'Fictional', 'Historical only'], 1, 'It affects people across countries.'],
      ],
    ),
    AS4: C(
      [
        'The HL essay is a formal essay of 1,200 to 1,500 words on a line of inquiry you develop.',
        'It focuses on one literary or non-literary text or body of work studied in class.',
        'Create a focused line of inquiry, often linked to a course concept, and build a clear, sustained argument.',
        'Use academic conventions: a clear structure, precise evidence, and correct referencing.',
      ],
      [
        ['HL essay length', '1,200–1,500 words.'],
        ['Line of inquiry', 'A focused question or angle to explore.'],
        ['HL essay focus', 'One text or body of work studied in class.'],
        ['Key requirement', 'A sustained, well-supported argument.'],
      ],
      [
        ['The HL essay is…', ['1,000–1,200 words', '1,200–1,500 words', '2,000 words', '4,000 words'], 1, 'Within that word range.'],
        ['The HL essay is based on…', ['Two unseen texts', 'One text or body of work studied', 'A global issue in two texts', 'Only poetry'], 1, 'One text studied in class.'],
        ['Who takes the HL essay?', ['All students', 'HL students only', 'SL students only', 'No one'], 1, 'It is HL-only.'],
      ],
    ),
    AS5: C(
      [
        'The learner portfolio is a personal collection of your work throughout the course.',
        'It can include notes, annotations, reflections, creative responses, mind maps and recordings.',
        'It is not directly assessed, but it builds ideas for Paper 1, Paper 2, the individual oral and the HL essay.',
        'Use it to track your developing understanding of texts, global issues and course concepts.',
      ],
      [
        ['Learner portfolio', 'A personal record of reading, thinking and responses.'],
        ['Is it assessed?', 'Not directly, but it supports all assessments.'],
        ['Possible contents', 'Notes, reflections, creative pieces, annotations.'],
        ['Main purpose', 'To develop and track your ideas across the course.'],
      ],
      [
        ['The learner portfolio is…', ['Externally marked', 'A personal record that supports assessments', 'The HL essay', 'Paper 1'], 1, 'It isn’t directly assessed.'],
        ['Which could be in a learner portfolio?', ['Reflections on a text', 'Your passport', 'Maths homework only', 'Nothing'], 0, 'Reflections are a key part.'],
        ['A good use of the portfolio is to…', ['Ignore it', 'Collect ideas for the individual oral', 'Replace the exam', 'Store other subjects'], 1, 'It helps plan assessments.'],
      ],
    ),
  },
};

export default content;
