import type { SubjectContentFile } from '../types';
import { C } from './helpers';

const content: SubjectContentFile = {
  units: {
    PS: [
      'Paper 1 is a source-based paper on one of five prescribed subjects. You answer four questions on four sources.',
      'You must understand the sources’ content, analyse their origin, purpose, content, value and limitations, compare and contrast them, and use them with your own knowledge in a final essay-style answer.',
    ],
    WH: [
      'Paper 2 has essay questions on world history topics. You study two of the twelve topics, choosing examples from at least two regions of the world.',
      'Questions test key concepts: change, continuity, causation, consequence, significance and perspectives. Plan every essay with a clear argument.',
    ],
    HL: [
      'HL students take Paper 3 on one regional option: Africa and the Middle East, the Americas, Asia and Oceania, or Europe.',
      'Each option has eighteen sections; schools usually study three. Paper 3 needs detailed regional knowledge and strong essay skills.',
    ],
    SK: [
      'These skills run through the whole course: analysing sources, writing well-argued essays, and carrying out your own historical investigation for the internal assessment.',
    ],
  },
  chapters: {
    PS1: C(
      [
        'Prescribed subject 1, military leaders, studies two leaders: Genghis Khan, around 1200 to 1227, and Richard I of England, 1173 to 1199.',
        'For each, you study their leadership, campaigns and the impact of their rule.',
        'Genghis Khan united the Mongol tribes and created a vast empire through organised, highly mobile armies and tactics like feigned retreats.',
        'Richard I, the Lionheart, is known for his role in the Third Crusade and his conflicts with the French king Philip II. Sources often reflect the bias of their chroniclers.',
      ],
      [
        ['Genghis Khan', 'United the Mongol tribes and founded the Mongol Empire (c. 1206).'],
        ['Richard I', 'King of England who led the Third Crusade.'],
        ['Mongol military strengths', 'Mobility, discipline, archery, feigned retreats.'],
        ['Source caution', 'Medieval chroniclers often had religious or political bias.'],
      ],
      [
        ['Richard I is most associated with…', ['The First Crusade', 'The Third Crusade', 'The Hundred Years War', 'Magna Carta'], 1, 'He fought Saladin in the Third Crusade.'],
        ['A key Mongol military tactic was…', ['Trench warfare', 'Feigned retreat', 'Naval blockade', 'Siege towers only'], 1, 'They lured enemies into traps.'],
        ['Why must medieval chronicles be used carefully?', ['They are always accurate', 'Authors often had bias and wrote long after events', 'They are too short', 'They are modern'], 1, 'Evaluate origin and purpose.'],
      ],
    ),
    PS2: C(
      [
        'Prescribed subject 2, conquest and its impact, has two case studies: the final stages of the Muslim rule in Spain, 1482 to 1502, and the conquest of Mexico and Peru, 1519 to 1551.',
        'In Spain, Ferdinand and Isabella captured Granada in 1492, ending Muslim rule, followed by forced conversions and expulsions.',
        'In the Americas, Cortés conquered the Aztec Empire and Pizarro the Inca Empire, helped by local allies, disease and technology.',
        'You study the motives, key events and impact of conquest on the conquered peoples.',
      ],
      [
        ['Fall of Granada', '1492, captured by Ferdinand and Isabella.'],
        ['Hernán Cortés', 'Led the Spanish conquest of the Aztec Empire (1519–21).'],
        ['Francisco Pizarro', 'Led the Spanish conquest of the Inca Empire.'],
        ['Factors in Spanish success', 'Local allies, disease (e.g. smallpox), weapons, divisions.'],
      ],
      [
        ['Granada fell to Spanish forces in…', ['1453', '1492', '1519', '1588'], 1, 'Ending Muslim rule in Spain.'],
        ['A major reason for the collapse of Aztec resistance was…', ['Naval defeat', 'Smallpox and Tlaxcalan allies', 'Famine only', 'British support'], 1, 'Disease and local allies were crucial.'],
        ['Who conquered the Inca Empire?', ['Cortés', 'Pizarro', 'Columbus', 'Magellan'], 1, 'Pizarro captured Atahualpa in 1532.'],
      ],
    ),
    PS3: C(
      [
        'Prescribed subject 3, the move to global war, has two case studies: Japanese expansion in East Asia, 1931 to 1941, and German and Italian expansion, 1933 to 1940.',
        'Japan invaded Manchuria in 1931 and China in 1937, then attacked Pearl Harbor in December 1941.',
        'Italy invaded Abyssinia in 1935. Germany remilitarised the Rhineland in 1936, annexed Austria in 1938, took the Sudetenland after the Munich Agreement, and invaded Poland in 1939.',
        'You study causes, events and international responses, including the failure of the League of Nations and appeasement.',
      ],
      [
        ['Manchurian crisis', '1931: Japan invaded Manchuria.'],
        ['Abyssinian crisis', '1935: Italy invaded Abyssinia (Ethiopia).'],
        ['Munich Agreement', '1938: Britain and France let Germany take the Sudetenland.'],
        ['Appeasement', 'Giving concessions to avoid war.'],
      ],
      [
        ['Germany remilitarised the Rhineland in…', ['1933', '1936', '1938', '1939'], 1, 'March 1936, breaking the Treaty of Versailles.'],
        ['The Munich Agreement allowed Germany to take…', ['Austria', 'The Sudetenland', 'Poland', 'The Rhineland'], 1, 'Part of Czechoslovakia.'],
        ['Italy’s invasion of Abyssinia showed…', ['The League’s strength', 'The League’s weakness', 'US involvement', 'Japanese power'], 1, 'Sanctions were weak and ineffective.'],
      ],
    ),
    PS4: C(
      [
        'Prescribed subject 4, rights and protest, has two case studies: civil rights in the United States, 1954 to 1965, and apartheid South Africa, 1948 to 1964.',
        'In the US, key events include Brown versus Board of Education in 1954, the Montgomery Bus Boycott, the March on Washington in 1963, and the Civil Rights and Voting Rights Acts.',
        'In South Africa, the apartheid government passed laws enforcing segregation. Resistance included the Defiance Campaign, the Freedom Charter, and the response to the Sharpeville massacre in 1960.',
        'You study the nature of protest, the role of leaders and organisations, and government responses.',
      ],
      [
        ['Brown v. Board of Education', '1954: US Supreme Court ruled school segregation unconstitutional.'],
        ['Civil Rights Act', '1964: outlawed segregation in public places and employment discrimination.'],
        ['Sharpeville massacre', '1960: police killed 69 protesters in South Africa.'],
        ['Freedom Charter', '1955: statement of principles by the Congress Alliance.'],
      ],
      [
        ['The Montgomery Bus Boycott began after the arrest of…', ['Martin Luther King Jr.', 'Rosa Parks', 'Malcolm X', 'Nelson Mandela'], 1, 'In December 1955.'],
        ['Apartheid formally began after the 1948 election victory of the…', ['ANC', 'National Party', 'Liberal Party', 'Communist Party'], 1, 'The National Party introduced apartheid laws.'],
        ['The Voting Rights Act was passed in…', ['1954', '1960', '1965', '1968'], 2, 'It banned discriminatory voting practices.'],
      ],
    ),
    PS5: C(
      [
        'Prescribed subject 5, conflict and intervention, has two case studies: the Rwandan genocide, 1990 to 1998, and the Kosovo conflict, 1989 to 2002.',
        'In Rwanda, ethnic tension between Hutu and Tutsi escalated; in 1994 around 800,000 people, mostly Tutsi, were killed in about 100 days. The international community failed to intervene effectively.',
        'In Kosovo, tension between Serbs and Kosovar Albanians led to conflict; NATO launched air strikes in 1999 without UN Security Council authorisation.',
        'You study causes, the course of conflict, the role of international actors and the aftermath, including justice through international tribunals.',
      ],
      [
        ['Rwandan genocide', '1994: about 800 000 killed in roughly 100 days.'],
        ['UNAMIR', 'UN peacekeeping mission in Rwanda.'],
        ['NATO in Kosovo', 'Air campaign in 1999 against Yugoslavia.'],
        ['ICTR / ICTY', 'International tribunals for Rwanda and the former Yugoslavia.'],
      ],
      [
        ['The Rwandan genocide took place in…', ['1990', '1994', '1998', '2002'], 1, 'April to July 1994.'],
        ['NATO intervened in Kosovo in 1999 mainly through…', ['Ground invasion', 'Air strikes', 'Sanctions only', 'Peace talks only'], 1, 'A 78-day bombing campaign.'],
        ['A key criticism of the international response in Rwanda is that…', ['It intervened too forcefully', 'It failed to act effectively', 'It was led by NATO', 'It stopped the genocide quickly'], 1, 'UN peacekeepers were withdrawn or limited.'],
      ],
    ),
    WH1: C(
      [
        'World history topic 1, society and economy from 750 to 1400, studies how medieval societies were organised and how they changed.',
        'Themes include economic systems like feudalism and trade networks, such as the Silk Roads, and the role of religion in society.',
        'It also covers intellectual and cultural developments, such as the Islamic Golden Age, and the impact of plague, especially the Black Death in the 1340s.',
        'Use examples from at least two regions, such as Europe and the Islamic world, and compare them.',
      ],
      [
        ['Feudalism', 'Land exchanged for military service and loyalty.'],
        ['Silk Roads', 'Trade routes linking China, Central Asia, the Middle East and Europe.'],
        ['Black Death', 'Plague pandemic of the 1340s–50s.'],
        ['Islamic Golden Age', 'Period of scientific and cultural flourishing in the Islamic world.'],
      ],
      [
        ['The Black Death reached Europe in the…', ['1240s', '1340s', '1440s', '1540s'], 1, 'It arrived around 1347.'],
        ['A key economic consequence of the Black Death in Europe was…', ['Lower wages', 'Labour shortages and higher wages', 'More serfdom', 'No change'], 1, 'Fewer workers strengthened their bargaining power.'],
        ['The Silk Roads mainly connected…', ['Europe and the Americas', 'East Asia and the Mediterranean', 'Africa and Australia', 'Only China internally'], 1, 'Overland and maritime trade routes.'],
      ],
    ),
    WH2: C(
      [
        'Topic 2, causes and effects of medieval wars from 750 to 1500, examines why wars broke out and what they changed.',
        'Causes can be economic, religious, dynastic, territorial or ideological. Examples include the Crusades, the Hundred Years War and the Mongol invasions.',
        'You study the nature of warfare, like sieges and cavalry, the role of technology and leadership, and the effects on society and politics.',
        'Compare wars from different regions and analyse both short-term and long-term effects.',
      ],
      [
        ['Types of causes', 'Economic, religious, dynastic, territorial, ideological.'],
        ['Hundred Years War', 'England and France, 1337–1453.'],
        ['Crusades', 'Religious wars for control of the Holy Land, from 1096.'],
        ['Effects of war', 'Political change, economic cost, social change.'],
      ],
      [
        ['The Hundred Years War was fought between…', ['Spain and Portugal', 'England and France', 'Venice and Genoa', 'Byzantium and Persia'], 1, 'From 1337 to 1453.'],
        ['The First Crusade began in…', ['1066', '1096', '1187', '1204'], 1, 'Called by Pope Urban II in 1095.'],
        ['A dynastic cause of war is…', ['A dispute over who should inherit a throne', 'A trade dispute', 'A religious difference', 'Famine'], 0, 'Dynastic means relating to ruling families.'],
      ],
    ),
    WH3: C(
      [
        'Topic 3, dynasties and rulers from 750 to 1500, studies how rulers gained, kept and used power.',
        'Themes include the legitimacy of rulers, the role of religion and law, and how they governed large territories.',
        'Examples include the Abbasid Caliphate, the Tang and Song dynasties in China, Charlemagne, and the Ottoman sultans.',
        'You analyse the successes and failures of rulers and the reasons dynasties rose or declined.',
      ],
      [
        ['Legitimacy', 'The right to rule, often based on religion, inheritance or law.'],
        ['Charlemagne', 'Crowned Emperor in 800.'],
        ['Abbasid Caliphate', 'Islamic dynasty centred on Baghdad from 750.'],
        ['Dynastic decline factors', 'Weak rulers, succession disputes, rebellion, invasion.'],
      ],
      [
        ['Charlemagne was crowned emperor in…', ['750', '800', '1066', '1200'], 1, 'By Pope Leo III on Christmas Day.'],
        ['The Abbasid capital was…', ['Damascus', 'Baghdad', 'Cairo', 'Istanbul'], 1, 'Founded in the 760s.'],
        ['Rulers often claimed legitimacy through…', ['Elections', 'Religion and inheritance', 'Referendums', 'Newspapers'], 1, 'Divine sanction and bloodlines.'],
      ],
    ),
    WH4: C(
      [
        'Topic 4, societies in transition from 1400 to 1700, studies social, economic and cultural change in the early modern world.',
        'Themes include the Renaissance, the Reformation, changes in trade and early globalisation, and the growth of towns.',
        'It considers social groups, like peasants, merchants and elites, and how their positions changed.',
        'You might study examples from Europe, the Ottoman Empire, Ming China or Mughal India.',
      ],
      [
        ['Renaissance', 'Revival of classical learning and art in Europe.'],
        ['Reformation', 'Religious movement from 1517 that split Western Christianity.'],
        ['Mughal Empire', 'Empire in South Asia from 1526.'],
        ['Early globalisation', 'Growing global trade networks after 1500.'],
      ],
      [
        ['Martin Luther’s 95 Theses (1517) began the…', ['Renaissance', 'Reformation', 'Enlightenment', 'Industrial Revolution'], 1, 'It challenged the Catholic Church.'],
        ['The Mughal Empire was founded in…', ['1453', '1526', '1600', '1700'], 1, 'By Babur.'],
        ['The Renaissance began in…', ['England', 'Italy', 'Spain', 'Russia'], 1, 'Especially Florence.'],
      ],
    ),
    WH5: C(
      [
        'Topic 5, early modern states from 1450 to 1789, examines how states became more powerful and centralised.',
        'Themes include absolutism, the relationship between rulers and nobles, taxation, armies and bureaucracy.',
        'Examples include Louis XIV of France, Peter the Great of Russia, the Tokugawa shogunate in Japan and the Ottoman Empire.',
        'You analyse challenges to rulers, such as rebellion and religious conflict, and how states responded.',
      ],
      [
        ['Absolutism', 'A ruler with unrestricted power.'],
        ['Louis XIV', 'French king, “the Sun King”, symbol of absolutism.'],
        ['Peter the Great', 'Russian tsar who modernised Russia.'],
        ['Tokugawa shogunate', 'Japanese government 1603–1868.'],
      ],
      [
        ['Which ruler is linked to the Palace of Versailles?', ['Peter the Great', 'Louis XIV', 'Suleiman', 'Elizabeth I'], 1, 'The Sun King.'],
        ['Peter the Great founded which city?', ['Moscow', 'St Petersburg', 'Kiev', 'Warsaw'], 1, 'Founded in 1703.'],
        ['Absolutism means…', ['Power shared with parliament', 'A ruler with unrestricted power', 'Democracy', 'Anarchy'], 1, 'The monarch holds full authority.'],
      ],
    ),
    WH6: C(
      [
        'Topic 6, causes and effects of early modern wars from 1500 to 1750, studies conflict in the early modern period.',
        'Causes include religion, dynastic claims, territory and trade. Examples include the Thirty Years War, the Anglo-Spanish War and the Ottoman–Habsburg wars.',
        'Warfare changed with gunpowder, new fortifications and larger armies: the “military revolution”.',
        'You analyse effects such as the Peace of Westphalia in 1648, which shaped the idea of sovereign states.',
      ],
      [
        ['Thirty Years War', '1618–1648, mainly in central Europe.'],
        ['Peace of Westphalia', '1648 treaties ending the Thirty Years War.'],
        ['Military revolution', 'Changes in warfare from gunpowder and larger armies.'],
        ['Spanish Armada', '1588 failed Spanish invasion of England.'],
      ],
      [
        ['The Thirty Years War ended in…', ['1588', '1618', '1648', '1700'], 2, 'With the Peace of Westphalia.'],
        ['The Spanish Armada was sent against…', ['France', 'England', 'The Netherlands', 'Portugal'], 1, 'In 1588.'],
        ['The Peace of Westphalia is linked to the idea of…', ['Absolutism', 'State sovereignty', 'Feudalism', 'Colonialism'], 1, 'States control their own territory.'],
      ],
    ),
    WH7: C(
      [
        'Topic 7, industrialisation from 1750 to 2005, studies the origins, development and impact of industrialisation.',
        'Causes include agricultural change, population growth, capital, resources like coal, technology and government support.',
        'Britain industrialised first, followed by countries like Germany, the United States and Japan.',
        'Impacts include urbanisation, new social classes, working conditions, labour movements and environmental change.',
      ],
      [
        ['Industrial Revolution', 'Shift to machine and factory production, starting in Britain c. 1750.'],
        ['Urbanisation', 'Growth of towns and cities.'],
        ['Steam engine', 'Key technology, improved by James Watt.'],
        ['Meiji Restoration', 'Japan’s rapid industrialisation from 1868.'],
      ],
      [
        ['Which country industrialised first?', ['Germany', 'Britain', 'USA', 'Japan'], 1, 'From the mid-18th century.'],
        ['A major social effect of industrialisation was…', ['Ruralisation', 'Urbanisation', 'Less trade', 'Fewer factories'], 1, 'People moved to cities for work.'],
        ['Japan industrialised rapidly after the…', ['Meiji Restoration', 'Tokugawa founding', 'Opium Wars', 'Russian Revolution'], 0, 'From 1868.'],
      ],
    ),
    WH8: C(
      [
        'Topic 8, independence movements from 1800 to 2000, studies how colonies gained independence.',
        'Themes include the origins of nationalism, the role of leaders, methods such as non-violence or armed struggle, and the impact of wars.',
        'Examples include Latin American independence under Bolívar, India under Gandhi, and African independence movements such as Ghana and Algeria.',
        'You also study the challenges new states faced after independence.',
      ],
      [
        ['Simón Bolívar', 'Leader of independence in northern South America.'],
        ['Indian independence', '1947, with partition into India and Pakistan.'],
        ['Ghana', 'First sub-Saharan African colony to gain independence, 1957.'],
        ['Methods of independence', 'Non-violent protest, negotiation, armed struggle.'],
      ],
      [
        ['India gained independence in…', ['1919', '1947', '1957', '1962'], 1, 'In August 1947.'],
        ['Gandhi’s main method was…', ['Armed revolution', 'Non-violent civil disobedience', 'Foreign invasion', 'Monarchy'], 1, 'Satyagraha.'],
        ['Algeria won independence from France after…', ['Peaceful talks only', 'A long armed struggle', 'A referendum in 1900', 'British help'], 1, 'The war lasted from 1954 to 1962.'],
      ],
    ),
    WH9: C(
      [
        'Topic 9, evolution and development of democratic states from 1848 to 2000, studies how democracies emerged and developed.',
        'Themes include the extension of voting rights, political parties, constitutions and the role of social and economic policies.',
        'Examples include the United States, the United Kingdom, India, Germany’s Weimar Republic, and South Africa after 1994.',
        'You analyse challenges to democracy, such as economic crises and extremism, and how democracies responded.',
      ],
      [
        ['Suffrage', 'The right to vote.'],
        ['Weimar Republic', 'German democracy 1919–1933.'],
        ['Welfare state', 'Government provision of social security, health and education.'],
        ['South Africa 1994', 'First democratic election with universal suffrage.'],
      ],
      [
        ['South Africa held its first fully democratic election in…', ['1948', '1961', '1994', '2000'], 2, 'Nelson Mandela became president.'],
        ['The Weimar Republic ended when…', ['Hitler came to power in 1933', 'WWI ended', 'Germany reunified', 'The Kaiser returned'], 0, 'Democracy collapsed.'],
        ['Extending the vote to more people is called…', ['Suffrage expansion', 'Absolutism', 'Appeasement', 'Mercantilism'], 0, 'Suffrage is the right to vote.'],
      ],
    ),
    WH10: C(
      [
        'Topic 10, authoritarian states in the 20th century, studies how authoritarian leaders emerged, consolidated power, and ruled.',
        'Conditions for their rise include economic crisis, weak democracy, war and social division.',
        'Leaders used propaganda, terror, legal methods and charismatic leadership. Examples include Hitler, Stalin, Mussolini, Mao and Castro.',
        'You analyse domestic policies, such as the economy, education and treatment of minorities, and how successful they were.',
      ],
      [
        ['Authoritarian state', 'A state where power is concentrated in a leader or party with limited freedoms.'],
        ['Methods of consolidation', 'Propaganda, terror, legal changes, removing opponents.'],
        ['Stalin’s Five-Year Plans', 'Rapid industrialisation of the USSR.'],
        ['Mao’s Great Leap Forward', '1958–62 campaign causing a devastating famine.'],
      ],
      [
        ['Which leader introduced Five-Year Plans?', ['Hitler', 'Stalin', 'Mussolini', 'Castro'], 1, 'Starting in 1928.'],
        ['The Great Leap Forward was launched by…', ['Stalin', 'Mao', 'Hitler', 'Ho Chi Minh'], 1, 'In 1958.'],
        ['A common condition for authoritarian rise was…', ['Economic crisis', 'Strong democracy', 'Peace and prosperity', 'Free press'], 0, 'Crisis made people seek strong leadership.'],
      ],
    ),
    WH11: C(
      [
        'Topic 11, causes and effects of 20th-century wars, studies why wars broke out and their consequences.',
        'Types include total war, like the World Wars; civil wars, like the Spanish and Chinese civil wars; and guerrilla wars.',
        'Causes can be long-term and short-term: economic, ideological, political and territorial.',
        'You study the practices of war, the role of technology and civilians, and effects such as peace settlements, political change and the role of women.',
      ],
      [
        ['Total war', 'War involving the whole society and economy.'],
        ['Guerrilla warfare', 'Small, mobile groups using irregular tactics.'],
        ['Spanish Civil War', '1936–1939.'],
        ['Treaty of Versailles', '1919 peace treaty with Germany after WWI.'],
      ],
      [
        ['The Spanish Civil War lasted from…', ['1914–1918', '1936–1939', '1939–1945', '1946–1949'], 1, 'Franco’s Nationalists won.'],
        ['Total war means…', ['Only armies are involved', 'The whole society and economy are mobilised', 'A short war', 'A civil war'], 1, 'Civilians and industry are part of the war effort.'],
        ['The Chinese Civil War ended with the victory of…', ['The Nationalists', 'The Communists', 'Japan', 'The USA'], 1, 'The PRC was founded in 1949.'],
      ],
    ),
    WH12: C(
      [
        'The Cold War was a period of rivalry between the United States and the Soviet Union from around 1945 to 1991.',
        'Ideological differences were central: American capitalism and liberal democracy against Soviet communism and a one-party state.',
        'At the Yalta and Potsdam conferences in 1945, disagreements over the future of Germany and Eastern Europe grew. In 1947, the Truman Doctrine promised support to countries resisting communism, and the Marshall Plan offered economic aid.',
        'Crises included the Berlin Blockade, the Korean War and the Cuban Missile Crisis. Periods of détente were followed by renewed tension, until the USSR collapsed in 1991.',
        'Exam tip: IB essays reward historiography. Mention orthodox, revisionist and post-revisionist views on who was responsible.',
      ],
      [
        ['Truman Doctrine (1947)', 'US pledge to support free peoples resisting communism: the start of containment.'],
        ['Marshall Plan', 'US economic aid (about $13 billion) to rebuild Western Europe.'],
        ['Berlin Blockade', 'June 1948 – May 1949.'],
        ['Orthodox vs revisionist view', 'Orthodox blames the USSR; revisionist blames the USA.'],
      ],
      [
        ['Which conference took place in February 1945?', ['Potsdam', 'Yalta', 'Tehran', 'Versailles'], 1, 'Yalta: February 1945; Potsdam: July–August 1945.'],
        ['The policy of stopping the spread of communism was called…', ['Détente', 'Appeasement', 'Containment', 'Glasnost'], 2, 'Containment, linked to Kennan and the Truman Doctrine.'],
        ['The Cuban Missile Crisis took place in…', ['1956', '1962', '1968', '1979'], 1, 'October 1962.'],
      ],
    ),
    HL1: C(
      [
        'The HL option History of Africa and the Middle East covers regions from North Africa and the Middle East to sub-Saharan Africa, roughly from the late 18th to the 21st century.',
        'Sections include topics such as the Ottoman Empire’s decline, European imperialism in Africa, African independence movements, and post-independence politics.',
        'Other sections cover the Middle East, like the Arab-Israeli conflict, Iran from 1953 onwards, and social and cultural change.',
        'Schools choose three sections. Paper 3 questions test detailed regional knowledge, so learn specific examples, dates and historians’ views.',
      ],
      [
        ['Scramble for Africa', 'Rapid European colonisation of Africa, c. 1880–1914.'],
        ['Berlin Conference', '1884–85 meeting that regulated European colonisation in Africa.'],
        ['Iranian Revolution', '1979: overthrow of the Shah.'],
        ['Paper 3 tip', 'Use precise regional examples and historiography.'],
      ],
      [
        ['The Berlin Conference took place in…', ['1815', '1884–85', '1919', '1945'], 1, 'It set rules for colonising Africa.'],
        ['The Iranian Revolution happened in…', ['1953', '1967', '1979', '1991'], 2, 'The Shah was overthrown.'],
        ['HL students study how many sections of their regional option?', ['One', 'Three', 'Six', 'All eighteen'], 1, 'Schools typically choose three.'],
      ],
    ),
    HL2: C(
      [
        'The HL option History of the Americas covers North, Central and South America and the Caribbean, from independence movements to the late 20th century.',
        'Sections include the independence movements, the US Civil War, the Mexican Revolution, the Great Depression and the Americas, and the Cold War in the Americas.',
        'Other sections include civil rights and social movements, and political developments in Latin America, such as Castro’s Cuba and military regimes.',
        'Schools choose three sections. Use detailed case studies and compare countries across the region.',
      ],
      [
        ['US Civil War', '1861–1865.'],
        ['Mexican Revolution', 'Began in 1910.'],
        ['New Deal', 'Roosevelt’s response to the Great Depression.'],
        ['Cuban Revolution', '1959: Castro came to power.'],
      ],
      [
        ['The US Civil War began in…', ['1776', '1861', '1914', '1929'], 1, 'It ended in 1865.'],
        ['The New Deal was introduced by…', ['Hoover', 'Franklin D. Roosevelt', 'Truman', 'Lincoln'], 1, 'In response to the Depression.'],
        ['Castro took power in Cuba in…', ['1945', '1959', '1962', '1979'], 1, 'After the Cuban Revolution.'],
      ],
    ),
    HL3: C(
      [
        'The HL option History of Asia and Oceania covers East, South and Southeast Asia, and Oceania, from the late 18th century to the 21st.',
        'Sections include the decline of imperial China, Japan’s modernisation and expansion, British rule in India and independence, and the Chinese Communist revolution.',
        'Others cover the Korean and Vietnam wars, Australia and New Zealand, and social and economic change in the region.',
        'Schools choose three sections. Compare developments across countries and use historians’ interpretations.',
      ],
      [
        ['Opium Wars', 'Wars between Britain and China, 1839–42 and 1856–60.'],
        ['Meiji Restoration', '1868: start of Japan’s rapid modernisation.'],
        ['People’s Republic of China', 'Founded in 1949.'],
        ['Vietnam War', 'Ended in 1975 with the fall of Saigon.'],
      ],
      [
        ['The People’s Republic of China was founded in…', ['1911', '1937', '1949', '1976'], 2, 'Mao declared it on 1 October 1949.'],
        ['The Meiji Restoration began in…', ['1853', '1868', '1905', '1941'], 1, 'Restoring imperial rule and modernising Japan.'],
        ['The first Opium War was fought between China and…', ['Japan', 'Britain', 'Russia', 'France only'], 1, '1839–1842.'],
      ],
    ),
    HL4: C(
      [
        'The HL option History of Europe covers Europe from the late 18th century to the early 21st century.',
        'Sections include the French Revolution and Napoleon, the unification of Italy and Germany, imperial Russia and the revolutions of 1917, and the causes of World War One.',
        'Others include interwar Europe, Nazi Germany, Stalin’s USSR, post-war Western and Eastern Europe, and the end of the Cold War.',
        'Schools choose three sections. Paper 3 rewards detailed knowledge and awareness of historiography.',
      ],
      [
        ['French Revolution', 'Began in 1789.'],
        ['German unification', '1871, led by Bismarck.'],
        ['Russian Revolutions', 'February and October 1917.'],
        ['Fall of the Berlin Wall', 'November 1989.'],
      ],
      [
        ['Germany was unified in…', ['1848', '1871', '1918', '1990'], 1, 'Under Prussian leadership.'],
        ['The Bolsheviks seized power in…', ['February 1917', 'October 1917', '1905', '1924'], 1, 'The October Revolution.'],
        ['The Berlin Wall fell in…', ['1961', '1985', '1989', '1991'], 2, 'November 1989.'],
      ],
    ),
    SK1: C(
      [
        'Source analysis is essential for Paper 1. Start by understanding what a source says and identifying its main message.',
        'Evaluate origin, purpose and content to judge value and limitations. Ask: who made it, when, why, and for whom?',
        'A source’s limitation doesn’t make it useless: a biased speech is valuable evidence of the speaker’s views.',
        'When comparing sources, point out specific similarities and differences, and in the final question, integrate sources with your own knowledge.',
      ],
      [
        ['OPCVL', 'Origin, Purpose, Content, Value, Limitation.'],
        ['Origin', 'Who created the source, when and where.'],
        ['Purpose', 'Why the source was created.'],
        ['Value of a biased source', 'It shows the author’s perspective.'],
      ],
      [
        ['A propaganda poster is most valuable for showing…', ['Objective facts', 'How a government wanted people to think', 'Military statistics', 'Nothing'], 1, 'Its purpose reveals government aims.'],
        ['Which is part of a source’s origin?', ['Its date and author', 'Its argument', 'Its value', 'Its limitations'], 0, 'Origin covers who, when and where.'],
        ['In a compare-and-contrast question you should…', ['Summarise each source separately', 'Link specific similarities and differences', 'Only use your own knowledge', 'Evaluate origin only'], 1, 'Examiners want direct comparison.'],
      ],
    ),
    SK2: C(
      [
        'Start with a clear introduction that defines key terms and states your argument directly.',
        'Each body paragraph should open with an analytical topic sentence that links back to the question.',
        'Support every point with specific evidence: dates, names, statistics and events.',
        'Weigh different perspectives and include historians’ views where they genuinely support your analysis. Finish with a conclusion that answers the question and does not introduce new evidence.',
      ],
      [
        ['Analytical topic sentence', 'Opens a paragraph by making a point linked to the question.'],
        ['Specific evidence', 'Precise dates, names, statistics and events.'],
        ['Historiography', 'Different historians’ interpretations.'],
        ['Good conclusion', 'Directly answers the question; no new evidence.'],
      ],
      [
        ['A good IB history essay conclusion should…', ['Add new evidence', 'Answer the question', 'Repeat the introduction word for word', 'Be skipped'], 1, 'Conclude with a direct, supported judgement.'],
        ['Which is the strongest evidence?', ['“Many people died”', '“Around 20 million Soviet citizens died in WWII”', '“Things got worse”', '“It was important”'], 1, 'Specific and precise.'],
        ['Mentioning historians’ views is most effective when…', ['Listed at the end', 'Used to support your analysis', 'Replacing your argument', 'Avoided entirely'], 1, 'They should strengthen your argument.'],
      ],
    ),
    SK3: C(
      [
        'The internal assessment is a historical investigation of up to 2,200 words on a topic of your choice.',
        'It has three sections: identification and evaluation of sources, the investigation itself, and a reflection on the methods historians use.',
        'Choose a focused research question, and analyse two key sources in detail, considering origin, purpose and content.',
        'The reflection should discuss challenges historians face, such as bias, selection of evidence and the nature of historical truth.',
      ],
      [
        ['IA word limit', '2,200 words.'],
        ['Section 1', 'Identification and evaluation of sources.'],
        ['Section 2', 'The investigation.'],
        ['Section 3', 'Reflection on historians’ methods and challenges.'],
      ],
      [
        ['The history IA is limited to…', ['1,500 words', '2,200 words', '4,000 words', '1,600 words'], 1, 'The historical investigation is 2,200 words.'],
        ['A good research question is…', ['Very broad', 'Focused and answerable', 'A yes/no question with no analysis', 'About the future'], 1, 'Narrow questions allow depth.'],
        ['The reflection section discusses…', ['Your personal life', 'Methods and challenges historians face', 'Only the conclusion', 'Future events'], 1, 'It links to TOK-style thinking.'],
      ],
    ),
  },
};

export default content;
