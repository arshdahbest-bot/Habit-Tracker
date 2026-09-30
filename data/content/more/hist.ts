import type { MoreContent } from '../../types';
import { M } from '../helpers';

// Lesson 2 (key evidence, historiography, common mistakes, exam technique) plus extra
// flashcards and questions for every History chapter.
const more: Record<string, MoreContent> = {
  PS1: M(
    [
      'Genghis Khan, born Temüjin, was proclaimed Great Khan in 1206. He promoted officers on merit, used a decimal army organization of tens, hundreds and thousands, and relied on fast horse archers.',
      'He also introduced a legal code called the Yassa and a relay messenger system, the Yam, which helped hold the empire together.',
      'Richard I captured Acre in 1191 and won at Arsuf, but failed to retake Jerusalem. The Treaty of Jaffa in 1192 allowed Christian pilgrims access to the city. On his way home he was captured and held for ransom.',
      'Exam tip: Paper 1 sources include chronicles written long after events, often by enemies or admirers. Always ask who wrote the source, when, and why, before trusting its numbers.',
    ],
    [
      ['Temüjin', 'Genghis Khan’s birth name; became Great Khan in 1206.'],
      ['Yam', 'Mongol relay messenger and supply system.'],
      ['Treaty of Jaffa (1192)', 'Truce between Richard I and Saladin allowing pilgrims into Jerusalem.'],
      ['Siege of Acre', 'Crusader victory in 1191 involving Richard I.'],
    ],
    [
      ['Genghis Khan was proclaimed Great Khan in…', '1206', ['1066', '1291', '1453'], 'The kurultai assembly proclaimed him in 1206.'],
      ['The Mongol army was organized in units of…', 'Tens, hundreds and thousands', ['Legions and cohorts', 'Regiments only', 'Knights and squires'], 'The decimal system aided command and control.'],
      ['Richard I’s main opponent in the Third Crusade was…', 'Saladin', ['Genghis Khan', 'Philip II only', 'Mehmed II'], 'Saladin had recaptured Jerusalem in 1187.'],
      ['The Treaty of Jaffa allowed…', 'Christian pilgrims access to Jerusalem', ['Crusaders to rule Jerusalem', 'The Mongols to enter Europe', 'Richard to become emperor'], 'Jerusalem stayed under Muslim control.'],
    ],
  ),
  PS2: M(
    [
      'The Granada War lasted from 1482 to 1492. Castile and Aragon used artillery, sieges and divisions among the Nasrid rulers. The Treaty of Granada promised religious tolerance to Muslims.',
      'Those promises were soon broken: forced conversions followed from 1499 to 1502, and the Moriscos, converted Muslims, were expelled from Spain in 1609.',
      'In Mexico, Cortés arrived in 1519 and allied with the Tlaxcalans against the Aztecs. Tenochtitlan fell in 1521 after a siege worsened by smallpox. Pizarro captured the Inca emperor Atahualpa at Cajamarca in 1532.',
      'Historiography: older accounts stressed Spanish courage and technology; historians such as Matthew Restall highlight indigenous allies, disease and existing divisions, challenging the “myths of the conquest”.',
    ],
    [
      ['Treaty of Granada (1491)', 'Surrender terms promising Muslims religious freedom — later broken.'],
      ['Moriscos', 'Muslims converted to Christianity; expelled from Spain in 1609.'],
      ['Tlaxcalans', 'Indigenous allies of Cortés against the Aztecs.'],
      ['Atahualpa', 'Inca emperor captured by Pizarro at Cajamarca in 1532.'],
    ],
    [
      ['Tenochtitlan fell in…', '1521', ['1492', '1532', '1519'], 'Cortés captured the Aztec capital after a long siege.'],
      ['Which historian wrote about the “myths of the Spanish conquest”?', 'Matthew Restall', ['E.H. Carr', 'A.J.P. Taylor', 'Eric Hobsbawm'], 'Restall stresses indigenous allies and other factors.'],
      ['Atahualpa was captured at…', 'Cajamarca', ['Cuzco', 'Tenochtitlan', 'Granada'], 'Pizarro ambushed him in 1532.'],
      ['The Treaty of Granada originally promised…', 'Religious tolerance for Muslims', ['Expulsion of all Muslims', 'Independence for Granada', 'Conversion within a year'], 'These terms were later broken.'],
    ],
  ),
  PS3: M(
    [
      'Japanese expansion was driven by the Great Depression, military influence in government and a need for raw materials. The Mukden Incident of 1931 was staged by Japanese officers as a pretext.',
      'The Lytton Report condemned Japan’s actions in Manchuria, and Japan left the League of Nations in 1933. In 1937 the Marco Polo Bridge Incident began full war with China.',
      'For Italy, the Hoare-Laval Pact of 1935 secretly offered Mussolini much of Abyssinia, discrediting Britain and France. League sanctions left out oil, so they had little effect.',
      'Historiography: A.J.P. Taylor argued Hitler was an opportunist; others, like Hugh Trevor-Roper, argued he followed a long-term plan. Use this debate in essays on the causes of war in Europe.',
    ],
    [
      ['Mukden Incident (1931)', 'Staged railway explosion used by Japan to justify seizing Manchuria.'],
      ['Lytton Report', 'League of Nations report condemning Japan over Manchuria.'],
      ['Hoare-Laval Pact (1935)', 'Secret Anglo-French plan to give Italy much of Abyssinia.'],
      ['Marco Polo Bridge Incident (1937)', 'Clash that started full-scale Sino-Japanese war.'],
    ],
    [
      ['Japan left the League of Nations in…', '1933', ['1931', '1937', '1941'], 'It left after the Lytton Report criticised it.'],
      ['Why were League sanctions on Italy ineffective?', 'They did not include oil', ['Italy was not a member', 'The US enforced them', 'Italy had no army'], 'Oil was vital to Italy’s war effort.'],
      ['A.J.P. Taylor argued that Hitler was…', 'An opportunist reacting to events', ['Following a strict timetable', 'A pacifist', 'Controlled by Mussolini'], 'Taylor’s view was controversial and challenged by others.'],
      ['Japan attacked Pearl Harbor in…', 'December 1941', ['September 1939', 'July 1937', 'August 1945'], 'The attack brought the US into the war.'],
    ],
  ),
  PS4: M(
    [
      'US protest methods included legal challenges by the NAACP, boycotts, sit-ins starting in Greensboro in 1960, Freedom Rides in 1961, and marches like Washington in 1963 and Selma in 1965.',
      'Key leaders: Martin Luther King Jr. promoted non-violence; Malcolm X argued for Black self-defence and pride. Grassroots organisations like SNCC mobilised young people.',
      'In South Africa, the ANC’s Defiance Campaign of 1952 used non-violence. After Sharpeville in 1960, the ANC and PAC were banned and Umkhonto we Sizwe began sabotage. Mandela was imprisoned from 1962 to 1990.',
      'Exam tip: for Paper 1, link each source to its context. A 1963 speech has different purposes from a government report, and both reveal different perspectives.',
    ],
    [
      ['Greensboro sit-in (1960)', 'Students sat at a whites-only lunch counter, sparking a wave of sit-ins.'],
      ['Freedom Rides (1961)', 'Activists rode buses to challenge segregation in interstate travel.'],
      ['Umkhonto we Sizwe', 'The ANC’s armed wing, formed in 1961.'],
      ['Defiance Campaign (1952)', 'ANC non-violent campaign against unjust apartheid laws.'],
    ],
    [
      ['The Greensboro sit-in began in…', '1960', ['1955', '1963', '1968'], 'Four students started it in February 1960.'],
      ['Umkhonto we Sizwe was formed after…', 'The Sharpeville massacre and banning of the ANC', ['Mandela’s release', 'The 1994 election', 'The Soweto Uprising'], 'Non-violent protest had been crushed.'],
      ['Nelson Mandela was released from prison in…', '1990', ['1994', '1985', '1976'], 'He became president after the 1994 election.'],
      ['Malcolm X differed from King mainly by…', 'Rejecting strict non-violence and promoting Black self-defence', ['Supporting segregation', 'Refusing to speak publicly', 'Working for the government'], 'He emphasised self-defence and Black nationalism.'],
    ],
  ),
  PS5: M(
    [
      'Rwanda: Belgian colonial rule had issued ethnic identity cards, hardening Hutu and Tutsi divisions. The civil war from 1990 and hate propaganda, like the radio station RTLM, prepared the ground for genocide.',
      'The genocide began after President Habyarimana’s plane was shot down on 6 April 1994. It ended when the Tutsi-led Rwandan Patriotic Front took control in July 1994.',
      'Kosovo: Serbia removed Kosovo’s autonomy in 1989. The Kosovo Liberation Army fought Serbian forces; the Račak massacre in 1999 pushed NATO to launch a 78-day bombing campaign.',
      'Evaluate intervention: NATO acted without UN Security Council approval. Supporters stress humanitarian need; critics stress legality and civilian casualties from bombing.',
    ],
    [
      ['RTLM', 'Rwandan radio station that spread anti-Tutsi hate propaganda.'],
      ['Rwandan Patriotic Front (RPF)', 'Tutsi-led force that ended the genocide in July 1994.'],
      ['Kosovo Liberation Army (KLA)', 'Albanian armed group fighting Serbian rule.'],
      ['Račak massacre (1999)', 'Killing of Kosovar Albanians that prompted NATO action.'],
    ],
    [
      ['The genocide in Rwanda began after…', 'President Habyarimana’s plane was shot down', ['A UN vote', 'The Arusha Accords were signed', 'An election'], 'The killings began on the night of 6 April 1994.'],
      ['Who ended the genocide in Rwanda?', 'The Rwandan Patriotic Front', ['UN peacekeepers', 'French troops', 'NATO'], 'The RPF took control in July 1994.'],
      ['NATO’s Kosovo campaign was controversial because…', 'It lacked UN Security Council authorisation', ['It used ground troops only', 'It supported Serbia', 'It lasted ten years'], 'Russia and China opposed it in the Security Council.'],
      ['Belgian colonial rule contributed to division by…', 'Issuing ethnic identity cards', ['Banning all ethnic groups', 'Holding free elections', 'Uniting Hutu and Tutsi'], 'Fixed identities deepened divisions.'],
    ],
  ),
  WH1: M(
    [
      'Feudalism linked land and loyalty: kings granted land to lords, lords to knights, and peasants worked the land. Historians debate whether “feudalism” describes a real, uniform system.',
      'Trade networks: the Silk Roads, Indian Ocean trade and trans-Saharan routes moved goods, ideas, religions and diseases. The Mali Empire grew rich on gold, famously shown by Mansa Musa’s 1324 pilgrimage.',
      'The Black Death, from 1347 to 1351, killed perhaps a third to a half of Europe’s population. Labour shortages raised wages and weakened serfdom, contributing to revolts like the English Peasants’ Revolt of 1381.',
      'Exam tip: compare two regions. For example, contrast feudal Europe with the Abbasid Caliphate, where trade, cities and learning flourished.',
    ],
    [
      ['Mansa Musa', 'Ruler of Mali whose 1324 pilgrimage to Mecca displayed immense wealth in gold.'],
      ['Peasants’ Revolt (1381)', 'English uprising partly caused by labour changes after the Black Death.'],
      ['Serfdom', 'Peasants bound to the land and their lord.'],
      ['Trans-Saharan trade', 'Trade in gold, salt and slaves across the Sahara.'],
    ],
    [
      ['Mansa Musa ruled which empire?', 'Mali', ['Ghana', 'Songhai', 'Aksum'], 'His pilgrimage in 1324 made Mali famous.'],
      ['The English Peasants’ Revolt took place in…', '1381', ['1066', '1215', '1453'], 'It followed labour changes after the Black Death.'],
      ['Roughly what share of Europe’s population died in the Black Death?', 'A third to a half', ['One tenth', 'Three quarters', 'Almost none'], 'Estimates range from 30% to 50%.'],
      ['Which goods were central to trans-Saharan trade?', 'Gold and salt', ['Silk and tea', 'Spices and porcelain', 'Coffee and sugar'], 'West African gold was exchanged for Saharan salt.'],
    ],
  ),
  WH2: M(
    [
      'The Hundred Years War lasted from 1337 to 1453. Its causes included English claims to the French throne, control of Gascony and the Flanders wool trade.',
      'Key battles: English longbowmen won at Crécy in 1346 and Agincourt in 1415. Joan of Arc helped lift the siege of Orléans in 1429, and French cannons helped win at Castillon in 1453.',
      'Effects: the war strengthened national identity in both countries, increased royal taxation and armies, and showed the declining role of mounted knights.',
      'Other examples: the Mongol invasions of the 13th century and the Reconquista in Iberia. In essays, compare causes and effects across two wars from different regions.',
    ],
    [
      ['Battle of Agincourt (1415)', 'English victory under Henry V, won largely by longbowmen.'],
      ['Joan of Arc', 'Helped lift the siege of Orléans in 1429.'],
      ['Battle of Castillon (1453)', 'Final battle of the Hundred Years War; French artillery decisive.'],
      ['Reconquista', 'Christian reconquest of Iberia from Muslim rule, ending in 1492.'],
    ],
    [
      ['Which battle did Henry V win in 1415?', 'Agincourt', ['Crécy', 'Hastings', 'Castillon'], 'English longbowmen defeated a larger French army.'],
      ['Joan of Arc is linked to the siege of…', 'Orléans', ['Paris', 'Calais', 'Acre'], 'Her involvement boosted French morale in 1429.'],
      ['A long-term effect of the Hundred Years War was…', 'Stronger national identity in England and France', ['The end of the Crusades', 'The unification of Italy', 'The fall of Rome'], 'War encouraged a sense of nationhood.'],
      ['A territorial cause of the Hundred Years War was…', 'Control of Gascony', ['The spread of Protestantism', 'Colonies in America', 'The Industrial Revolution'], 'English kings held land in France.'],
    ],
  ),
  WH3: M(
    [
      'Rulers built legitimacy through religion, like the Abbasid caliphs as leaders of Muslims; through the Mandate of Heaven in China; through law codes; and through military success.',
      'The Tang dynasty, 618 to 907, expanded civil service exams, and the Song dynasty, 960 to 1279, saw printing, paper money and a flourishing economy.',
      'Charlemagne ruled the Franks and was crowned Emperor by the Pope in 800. After his death his empire was divided by the Treaty of Verdun in 843.',
      'Exam tip: for questions on dynastic decline, organize causes into political, economic, military and succession factors, and assess which mattered most.',
    ],
    [
      ['Mandate of Heaven', 'Chinese idea that rulers govern with divine approval, lost if they rule badly.'],
      ['Treaty of Verdun (843)', 'Divided Charlemagne’s empire among his grandsons.'],
      ['Song dynasty achievements', 'Printing, paper money, gunpowder use and trade growth.'],
      ['Civil service examinations', 'Tests for government officials in imperial China.'],
    ],
    [
      ['The Mandate of Heaven was used to legitimise rulers in…', 'China', ['France', 'the Abbasid Caliphate', 'Mali'], 'Rulers who lost it could be overthrown.'],
      ['Charlemagne’s empire was divided by the…', 'Treaty of Verdun', ['Treaty of Westphalia', 'Magna Carta', 'Peace of Augsburg'], 'The 843 treaty split it into three parts.'],
      ['Which dynasty introduced widespread paper money?', 'Song', ['Tang', 'Han', 'Ming'], 'The Song used paper money to support trade.'],
      ['Succession disputes often weakened dynasties because they…', 'Caused civil wars and divided loyalties', ['Strengthened the army', 'Increased tax revenue', 'Ended trade'], 'Rival claimants split the state.'],
    ],
  ),
  WH4: M(
    [
      'The printing press, developed by Gutenberg around 1440, spread ideas quickly. It helped both the Renaissance and the Reformation by making books and pamphlets cheaper.',
      'The Reformation split Western Christianity. The Counter-Reformation, including the Council of Trent from 1545 to 1563 and the Jesuits, was the Catholic response.',
      'Global exchanges, like the Columbian Exchange, moved crops, animals and diseases between the Americas and the rest of the world, transforming diets and populations.',
      'Exam tip: for societies in transition, explain both change and continuity. For example, the Reformation changed religion, but peasants’ daily lives changed slowly.',
    ],
    [
      ['Gutenberg printing press', 'Movable-type printing in Europe around 1440.'],
      ['Council of Trent', 'Catholic council (1545–1563) central to the Counter-Reformation.'],
      ['Columbian Exchange', 'Transfer of crops, animals and diseases between the Americas and Afro-Eurasia.'],
      ['Jesuits', 'Catholic order founded in 1540, active in education and missions.'],
    ],
    [
      ['The Catholic response to the Reformation is called…', 'The Counter-Reformation', ['The Enlightenment', 'The Renaissance', 'The Reconquista'], 'It reformed and defended the Catholic Church.'],
      ['Which invention helped spread Reformation ideas?', 'The printing press', ['The steam engine', 'The telegraph', 'Gunpowder'], 'Pamphlets reached many readers quickly.'],
      ['Potatoes and maize spread to Europe through…', 'The Columbian Exchange', ['The Silk Roads', 'The Crusades', 'The trans-Saharan trade'], 'Crops moved from the Americas after 1492.'],
      ['The Jesuit order was founded in…', '1540', ['1492', '1517', '1648'], 'It became central to Catholic education and missions.'],
    ],
  ),
  WH5: M(
    [
      'Louis XIV, “the Sun King”, ruled from 1643 to 1715. He weakened the nobility by keeping them at Versailles and revoked the Edict of Nantes in 1685, removing tolerance for Protestants.',
      'Peter the Great modernised Russia: he reformed the army and navy, created the Table of Ranks, reduced the Church’s power and founded St Petersburg in 1703.',
      'The Tokugawa shogunate, from 1603, brought peace to Japan through strict social order, the alternate attendance system for lords, and limited foreign contact.',
      'Exam tip: compare how two rulers controlled nobles, religion and finances, and judge how successful each was.',
    ],
    [
      ['Edict of Nantes', 'Granted French Protestants toleration in 1598; revoked by Louis XIV in 1685.'],
      ['Table of Ranks', 'Peter the Great’s system promoting nobles by service.'],
      ['Alternate attendance (sankin-kōtai)', 'Tokugawa rule requiring lords to spend time in Edo.'],
      ['Sun King', 'Nickname of Louis XIV.'],
    ],
    [
      ['Louis XIV revoked the Edict of Nantes in…', '1685', ['1598', '1648', '1715'], 'This ended toleration for Huguenots.'],
      ['Peter the Great founded St Petersburg in…', '1703', ['1682', '1721', '1613'], 'It became Russia’s “window on the West”.'],
      ['How did the Tokugawa control regional lords?', 'Alternate attendance in Edo', ['Elections', 'Abolishing the samurai', 'Open foreign trade'], 'Lords spent alternate years in Edo, draining their wealth.'],
      ['Louis XIV kept nobles at Versailles mainly to…', 'Reduce their political power', ['Train them as soldiers', 'Tax them less', 'Make them Protestant'], 'Court life kept them under the king’s watch.'],
    ],
  ),
  WH6: M(
    [
      'The Thirty Years War, 1618 to 1648, began as a religious conflict in the Holy Roman Empire but became a dynastic power struggle, with Catholic France fighting Catholic Habsburgs.',
      'It devastated central Europe: some German regions lost a third or more of their population through fighting, famine and disease.',
      'The Spanish Armada of 1588 failed due to English tactics, fireships at Gravelines and storms. It protected Protestant England and weakened Spain’s naval reputation.',
      'The military revolution thesis, from historian Michael Roberts, argues that gunpowder, drill and larger armies transformed states. Geoffrey Parker extended it; others debate its timing.',
    ],
    [
      ['Defenestration of Prague (1618)', 'Event that sparked the Thirty Years War.'],
      ['Battle of Gravelines (1588)', 'English victory over the Spanish Armada using fireships.'],
      ['Michael Roberts', 'Historian who proposed the “military revolution” thesis.'],
      ['Trace italienne', 'Star-shaped fortifications designed to resist cannon fire.'],
    ],
    [
      ['The Thirty Years War began with…', 'The Defenestration of Prague', ['The fall of Constantinople', 'The Spanish Armada', 'The Peace of Augsburg'], 'Protestant nobles threw royal officials out of a window in 1618.'],
      ['Catholic France fighting the Catholic Habsburgs shows the war became…', 'A dynastic power struggle', ['Purely religious', 'A civil war in France', 'A colonial war'], 'Political interests outweighed religion.'],
      ['The “military revolution” thesis was proposed by…', 'Michael Roberts', ['A.J.P. Taylor', 'E.H. Carr', 'Karl Marx'], 'Roberts studied Sweden’s army reforms.'],
      ['Star-shaped fortresses were built to resist…', 'Cannon fire', ['Cavalry charges', 'Archers', 'Naval blockades'], 'Angled walls deflected artillery.'],
    ],
  ),
  WH7: M(
    [
      'Why Britain first? Coal and iron deposits, colonial markets and raw materials, capital from trade, an agricultural revolution, stable government, and inventions like Watt’s improved steam engine in 1769.',
      'Second industrial revolution, from about 1870: steel, chemicals, electricity and oil. Germany and the United States led, using research labs and large corporations.',
      'Russia and Japan industrialised with heavy state involvement. Japan’s Meiji government built railways and factories and then sold many to private firms like Mitsubishi.',
      'Exam tip: for impact questions, cover economic, social and political effects: urban growth, working conditions, trade unions, and new political ideas like socialism.',
    ],
    [
      ['Second Industrial Revolution', 'From c. 1870: steel, electricity, chemicals, oil.'],
      ['Zaibatsu', 'Large Japanese family-controlled business conglomerates, e.g. Mitsubishi.'],
      ['Factory Acts', 'British laws regulating working hours and child labour.'],
      ['Agricultural revolution', 'Improvements in farming that freed labour for industry.'],
    ],
    [
      ['Which countries led the Second Industrial Revolution?', 'Germany and the United States', ['Spain and Portugal', 'China and India', 'Italy and Greece'], 'They led in steel, chemicals and electricity.'],
      ['Japan’s large family-controlled companies are called…', 'Zaibatsu', ['Daimyo', 'Samurai', 'Shogunates'], 'Examples include Mitsubishi and Mitsui.'],
      ['A political effect of industrialisation was…', 'The growth of trade unions and socialism', ['The return of feudalism', 'The end of cities', 'Less demand for voting rights'], 'Workers organized to improve conditions.'],
      ['Britain industrialised first partly because of…', 'Plentiful coal and iron', ['Lack of trade', 'A planned economy', 'Small colonies'], 'Energy and raw materials were close together.'],
    ],
  ),
  WH8: M(
    [
      'Causes of independence movements: nationalism, economic grievances, the impact of the World Wars weakening colonial powers, and ideas like self-determination.',
      'Methods: mass non-violent protest, like Gandhi’s Salt March of 1930; negotiation; and armed struggle, like in Algeria from 1954 to 1962 or Kenya’s Mau Mau uprising.',
      'Kwame Nkrumah led Ghana to become the first sub-Saharan African colony to win independence, in 1957, using strikes and his Convention People’s Party.',
      'Post-independence challenges: partition and communal violence in India and Pakistan, economic dependence, ethnic tensions and building national institutions.',
    ],
    [
      ['Salt March (1930)', 'Gandhi’s protest against the British salt tax.'],
      ['Kwame Nkrumah', 'Led Ghana to independence in 1957.'],
      ['Mau Mau uprising', 'Armed revolt in Kenya against British rule (1950s).'],
      ['Partition of India (1947)', 'Division into India and Pakistan, causing mass migration and violence.'],
    ],
    [
      ['Ghana gained independence in…', '1957', ['1947', '1962', '1960'], 'It was the first sub-Saharan African colony to do so.'],
      ['Gandhi’s Salt March was a protest against…', 'The British tax on salt', ['Partition', 'World War II', 'Land reform'], 'It was a symbol of civil disobedience.'],
      ['The Mau Mau uprising took place in…', 'Kenya', ['Ghana', 'India', 'Algeria'], 'It was a 1950s revolt against British rule.'],
      ['A major challenge after Indian independence was…', 'Violence during partition', ['A lack of leaders', 'Invasion by Britain', 'No political parties'], 'Up to a million people died amid mass migration.'],
    ],
  ),
  WH9: M(
    [
      'In the United Kingdom, voting rights expanded through the Reform Acts of 1832, 1867 and 1884, and women gained the vote in 1918 for some and 1928 for all adults.',
      'The Weimar Republic, from 1919, faced hyperinflation in 1923, political violence, and the Great Depression. Article 48 let the president rule by decree, which helped undermine democracy.',
      'India has been the world’s largest democracy since its 1950 constitution, despite challenges like the Emergency from 1975 to 1977 under Indira Gandhi.',
      'Exam tip: when evaluating a democracy’s success, look at elections, rights, the rule of law, and how it responded to crises.',
    ],
    [
      ['Article 48 (Weimar)', 'Allowed the president to rule by emergency decree.'],
      ['UK women’s suffrage', 'Some women in 1918; equal voting rights in 1928.'],
      ['Indian Emergency (1975–1977)', 'Indira Gandhi suspended civil liberties and elections.'],
      ['Hyperinflation (Germany 1923)', 'Prices rose so fast that money became almost worthless.'],
    ],
    [
      ['Which article of the Weimar constitution allowed rule by decree?', 'Article 48', ['Article 1', 'Article 231', 'Article 10'], 'It was used heavily from 1930.'],
      ['All UK women over 21 gained the vote in…', '1928', ['1918', '1832', '1945'], 'In 1918 only women over 30 meeting conditions could vote.'],
      ['Germany’s hyperinflation peaked in…', '1923', ['1919', '1929', '1933'], 'It followed the occupation of the Ruhr.'],
      ['Indira Gandhi’s Emergency suspended…', 'Civil liberties and elections', ['The army', 'Trade', 'The constitution permanently'], 'It lasted from 1975 to 1977.'],
    ],
  ),
  WH10: M(
    [
      'Hitler came to power legally in January 1933, then used the Reichstag Fire, the Enabling Act and the Night of the Long Knives in 1934 to consolidate power.',
      'Stalin used purges, show trials and the gulag system; collectivisation from 1929 contributed to famine, including the Holodomor in Ukraine in 1932 to 1933.',
      'Mao used mass campaigns and the Cultural Revolution from 1966 to reassert power; the Great Leap Forward caused a famine that killed tens of millions.',
      'Exam tip: compare two leaders from different regions, for example Stalin and Mao, on how they rose, consolidated power and controlled society.',
    ],
    [
      ['Enabling Act (1933)', 'Allowed Hitler to pass laws without the Reichstag.'],
      ['Night of the Long Knives (1934)', 'Hitler purged the SA leadership and rivals.'],
      ['Holodomor', 'Famine in Ukraine (1932–1933) linked to Stalin’s policies.'],
      ['Cultural Revolution', 'Mao’s campaign from 1966 using the Red Guards to attack opponents.'],
    ],
    [
      ['Which law allowed Hitler to make laws without parliament?', 'The Enabling Act', ['The Nuremberg Laws', 'Article 48', 'The Treaty of Versailles'], 'Passed in March 1933.'],
      ['The Cultural Revolution began in…', '1966', ['1949', '1958', '1976'], 'Mao mobilised the Red Guards.'],
      ['Stalin’s collectivisation policy started in…', '1929', ['1917', '1924', '1945'], 'It forced peasants onto collective farms.'],
      ['The Night of the Long Knives mainly targeted…', 'The SA leadership', ['Communists', 'The army', 'Jewish businesses'], 'Ernst Röhm and others were killed.'],
    ],
  ),
  WH11: M(
    [
      'World War I causes are often summarised as militarism, alliances, imperialism and nationalism, with the assassination of Archduke Franz Ferdinand in June 1914 as the trigger.',
      'Fritz Fischer argued Germany deliberately sought war; Christopher Clark, in The Sleepwalkers, argues many powers shared responsibility.',
      'The Chinese Civil War, from 1927 and then 1946 to 1949, ended with Communist victory, helped by peasant support, guerrilla tactics and Nationalist corruption and weakness.',
      'Exam tip: organize effects of wars into political, economic, social and territorial. Use specific treaties, casualty figures and changes to borders.',
    ],
    [
      ['Fritz Fischer', 'Historian who blamed Germany for World War I.'],
      ['Christopher Clark’s The Sleepwalkers', 'Argues shared responsibility for World War I.'],
      ['Assassination of Franz Ferdinand (1914)', 'Trigger for World War I, in Sarajevo.'],
      ['Long March (1934–1935)', 'Communist retreat that built Mao’s leadership.'],
    ],
    [
      ['Franz Ferdinand was assassinated in…', 'Sarajevo', ['Vienna', 'Berlin', 'Belgrade'], 'Gavrilo Princip shot him in June 1914.'],
      ['Which historian argued Germany deliberately sought war in 1914?', 'Fritz Fischer', ['Christopher Clark', 'A.J.P. Taylor', 'Eric Hobsbawm'], 'His thesis caused major debate in the 1960s.'],
      ['A reason for Communist victory in China was…', 'Strong peasant support', ['US support for Mao', 'Nationalist unity', 'Soviet invasion'], 'Land reform won rural support.'],
      ['The Long March helped Mao by…', 'Establishing his leadership of the party', ['Defeating Japan', 'Ending the war immediately', 'Uniting with the Nationalists permanently'], 'Survivors formed the core of the party.'],
    ],
  ),
  WH12: M(
    [
      'Détente in the 1970s eased tensions: SALT I in 1972 limited nuclear weapons, and the Helsinki Accords of 1975 recognised European borders and human rights.',
      'The Soviet invasion of Afghanistan in 1979 ended détente. Reagan’s arms build-up and the Strategic Defence Initiative raised pressure on the USSR.',
      'Gorbachev’s reforms, glasnost, openness, and perestroika, restructuring, plus his refusal to use force in Eastern Europe, led to the revolutions of 1989 and the USSR’s collapse in 1991.',
      'Exam tip: explain why the Cold War ended by weighing Soviet economic weakness, Gorbachev’s choices, Reagan’s pressure and popular movements like Solidarity in Poland.',
    ],
    [
      ['Détente', 'Easing of Cold War tensions in the 1970s.'],
      ['SALT I (1972)', 'Treaty limiting US and Soviet strategic nuclear weapons.'],
      ['Glasnost', 'Gorbachev’s policy of openness.'],
      ['Perestroika', 'Gorbachev’s policy of economic restructuring.'],
    ],
    [
      ['The USSR invaded Afghanistan in…', '1979', ['1968', '1985', '1956'], 'The invasion ended the period of détente.'],
      ['Gorbachev’s policy of openness was called…', 'Glasnost', ['Perestroika', 'Détente', 'Containment'], 'It allowed more freedom of speech.'],
      ['The Soviet Union dissolved in…', '1991', ['1989', '1985', '1993'], 'It split into 15 independent states.'],
      ['Solidarity was a trade union movement in…', 'Poland', ['Hungary', 'East Germany', 'Czechoslovakia'], 'Led by Lech Wałęsa, it challenged communist rule.'],
    ],
  ),
  HL1: M(
    [
      'The Berlin Conference of 1884 to 1885 set rules for European claims in Africa without African representatives. By 1914, only Ethiopia and Liberia remained independent.',
      'Ethiopia defeated Italy at the Battle of Adwa in 1896, a powerful symbol of African resistance to colonialism.',
      'In the Middle East, the collapse of the Ottoman Empire after World War I led to British and French mandates. The Sykes-Picot Agreement of 1916 and the Balfour Declaration of 1917 shaped later conflicts.',
      'Paper 3 technique: questions test detailed regional knowledge. Plan with evidence for three or four clear arguments and include counter-arguments.',
    ],
    [
      ['Battle of Adwa (1896)', 'Ethiopian victory over Italy, preserving independence.'],
      ['Sykes-Picot Agreement (1916)', 'Secret British-French plan to divide Ottoman Arab lands.'],
      ['Balfour Declaration (1917)', 'British support for a Jewish national home in Palestine.'],
      ['Mandate system', 'League of Nations territories run by Britain and France after WWI.'],
    ],
    [
      ['Which African country defeated Italy at Adwa in 1896?', 'Ethiopia', ['Liberia', 'Egypt', 'Sudan'], 'It kept Ethiopia independent.'],
      ['The Balfour Declaration was issued in…', '1917', ['1916', '1948', '1884'], 'It supported a Jewish national home in Palestine.'],
      ['By 1914 which two African states were still independent?', 'Ethiopia and Liberia', ['Egypt and Morocco', 'Ghana and Kenya', 'Congo and Nigeria'], 'The rest were under European rule.'],
      ['The Sykes-Picot Agreement divided…', 'Ottoman Arab lands between Britain and France', ['Africa between all powers', 'India and Pakistan', 'Germany after WWII'], 'It was a secret wartime agreement.'],
    ],
  ),
  HL2: M(
    [
      'The US Civil War, from 1861 to 1865, followed disputes over slavery and states’ rights. Lincoln’s Emancipation Proclamation of 1863 and the 13th Amendment of 1865 ended slavery.',
      'The Mexican Revolution began in 1910 against Porfirio Díaz. Leaders like Zapata and Villa fought for land reform; the 1917 Constitution promised land and labour rights.',
      'The Great Depression hit Latin America through falling export prices. Leaders like Getúlio Vargas in Brazil used import substitution and populism.',
      'Paper 3 tip: compare countries within the region, for example Roosevelt’s New Deal with Vargas’s Estado Novo, when a question asks about responses to the Depression.',
    ],
    [
      ['Emancipation Proclamation (1863)', 'Lincoln’s order freeing enslaved people in Confederate states.'],
      ['Emiliano Zapata', 'Mexican revolutionary leader demanding land reform.'],
      ['Getúlio Vargas', 'Brazilian leader who created the Estado Novo (1937).'],
      ['13th Amendment (1865)', 'Abolished slavery in the United States.'],
    ],
    [
      ['Slavery was abolished in the US by the…', '13th Amendment', ['Emancipation Proclamation alone', '1st Amendment', 'Civil Rights Act'], 'The amendment was ratified in 1865.'],
      ['The Mexican Revolution began against…', 'Porfirio Díaz', ['Fidel Castro', 'Juan Perón', 'Getúlio Vargas'], 'Díaz had ruled for over 30 years.'],
      ['Zapata’s main demand was…', 'Land reform', ['Industrialisation', 'US annexation', 'Monarchy'], '“Land and liberty” was his slogan.'],
      ['Vargas’s authoritarian regime in Brazil was called…', 'The Estado Novo', ['The New Deal', 'The Porfiriato', 'The Alliance for Progress'], 'It began in 1937.'],
    ],
  ),
  HL3: M(
    [
      'The Opium Wars of 1839 to 1842 and 1856 to 1860 forced China to open ports and cede Hong Kong under unequal treaties, weakening the Qing dynasty.',
      'The Meiji Restoration of 1868 ended the Tokugawa shogunate. Japan abolished the samurai class, created a conscript army and industrialised rapidly, defeating Russia in 1905.',
      'The Vietnam War: after French defeat at Dien Bien Phu in 1954, Vietnam was divided. US involvement grew after 1964, and the North unified the country in 1975.',
      'Paper 3 tip: explain causes and consequences with detailed evidence from specific countries, and compare, such as Chinese and Japanese responses to Western pressure.',
    ],
    [
      ['Treaty of Nanjing (1842)', 'Ended the First Opium War; China ceded Hong Kong.'],
      ['Russo-Japanese War (1904–1905)', 'Japan defeated Russia, becoming a major power.'],
      ['Dien Bien Phu (1954)', 'Vietnamese victory that ended French rule in Indochina.'],
      ['Unequal treaties', 'Treaties forced on China and Japan by Western powers.'],
    ],
    [
      ['Hong Kong was ceded to Britain by the…', 'Treaty of Nanjing', ['Treaty of Versailles', 'Treaty of Portsmouth', 'Treaty of Paris'], 'It ended the First Opium War in 1842.'],
      ['Japan defeated Russia in…', '1905', ['1868', '1894', '1941'], 'The victory shocked the world.'],
      ['French rule in Vietnam ended after…', 'Dien Bien Phu', ['The Tet Offensive', 'Pearl Harbor', 'The Korean War'], 'The 1954 defeat led to the Geneva Accords.'],
      ['Vietnam was reunified in…', '1975', ['1954', '1968', '1980'], 'North Vietnam captured Saigon.'],
    ],
  ),
  HL4: M(
    [
      'The French Revolution began in 1789. Causes included financial crisis, Enlightenment ideas and social inequality. It moved through constitutional monarchy, the Terror in 1793 to 1794, and Napoleon’s rise in 1799.',
      'German unification under Bismarck used “blood and iron”: wars against Denmark in 1864, Austria in 1866 and France in 1870 to 1871. The German Empire was proclaimed at Versailles in 1871.',
      'Italian unification involved Cavour’s diplomacy and Garibaldi’s Expedition of the Thousand in 1860. Italy became a kingdom in 1861, and Rome joined in 1870.',
      'Paper 3 tip: use historiography where relevant, for example debates about whether Bismarck planned unification or reacted to events.',
    ],
    [
      ['Reign of Terror (1793–1794)', 'Radical phase of the French Revolution under Robespierre.'],
      ['Otto von Bismarck', 'Prussian leader who unified Germany through wars and diplomacy.'],
      ['Giuseppe Garibaldi', 'Led the Expedition of the Thousand in Italian unification.'],
      ['Count Cavour', 'Piedmontese prime minister who used diplomacy to unify Italy.'],
    ],
    [
      ['The French Revolution began in…', '1789', ['1799', '1815', '1848'], 'The storming of the Bastille was on 14 July 1789.'],
      ['The German Empire was proclaimed at…', 'Versailles', ['Berlin', 'Frankfurt', 'Vienna'], 'It happened in January 1871.'],
      ['Garibaldi’s Expedition of the Thousand took place in…', '1860', ['1848', '1870', '1815'], 'He conquered Sicily and Naples.'],
      ['Which war completed German unification?', 'The Franco-Prussian War', ['The Crimean War', 'The Austro-Prussian War', 'World War I'], 'Southern German states joined after victory over France.'],
    ],
  ),
  SK1: M(
    [
      'OPCVL stands for origin, purpose, content, value and limitation. Paper 1 question 3 asks for value and limitations of one source with reference to origin, purpose and content.',
      'Worked example: a 1938 British newspaper cartoon about Munich. Origin: a British cartoonist in 1938. Purpose: to criticise appeasement. Value: shows some public opinion at the time. Limitation: one newspaper’s view, designed to persuade.',
      'Paper 1 question 4 asks you to use sources and your own knowledge to answer a question. Refer to all four sources and add specific outside knowledge.',
      'Common mistake: saying a source is “biased so unreliable”. Explain what the bias reveals and what it hides.',
    ],
    [
      ['Paper 1 question 3', 'Evaluate one source’s value and limitations using origin, purpose and content.'],
      ['Paper 1 question 4', 'Use all sources plus own knowledge to answer a question.'],
      ['Content (OPCVL)', 'What the source says or shows.'],
      ['Contemporary source', 'Created at the time of the events.'],
    ],
    [
      ['Which part of OPCVL asks why the source was made?', 'Purpose', ['Origin', 'Content', 'Value'], 'Purpose is the reason the source was created.'],
      ['A diary written by a soldier in 1916 about the Somme is valuable because…', 'It gives a first-hand account from the time', ['It is completely objective', 'It covers the whole war', 'It was written by a historian'], 'Contemporary eyewitness evidence has value.'],
      ['In Paper 1 question 4 you should…', 'Use all the sources and your own knowledge', ['Only use one source', 'Ignore the sources', 'Only describe the sources'], 'Integrate sources with outside evidence.'],
      ['A limitation of a government propaganda poster is that it…', 'Shows the intended message, not actual public opinion', ['Is always false', 'Has no value', 'Is too recent'], 'It tells us what the government wanted people to think.'],
    ],
  ),
  SK2: M(
    [
      'Paper 2 has two essays from two different topics in 1 hour 30 minutes. Paper 3, HL only, has three essays in 2 hours 30 minutes from your regional option.',
      'Plan before writing: decode the command term, identify the key concepts in the question, and list three or four arguments with evidence.',
      'Structure: introduction with a thesis, thematic body paragraphs rather than a narrative, a counter-argument, and a conclusion that directly answers the question.',
      'Common mistake: telling the story of events. Examiners reward analysis: explaining why and how, weighing factors and reaching a judgement.',
    ],
    [
      ['Paper 2 format', 'Two essays from two different world history topics.'],
      ['Paper 3 format (HL)', 'Three essays on the regional option.'],
      ['Thematic structure', 'Paragraphs organized by factor or argument, not by date.'],
      ['Thesis statement', 'Your clear answer to the question, stated in the introduction.'],
    ],
    [
      ['A thematic essay structure organizes paragraphs by…', 'Factors or arguments', ['Date order only', 'Source number', 'Word count'], 'Themes enable analysis and comparison.'],
      ['How many essays do HL students write in Paper 3?', 'Three', ['Two', 'One', 'Four'], 'Paper 3 is 2 hours 30 minutes.'],
      ['The most common weakness in history essays is…', 'Narrative instead of analysis', ['Using evidence', 'Having a thesis', 'Including counter-arguments'], 'Telling the story doesn’t answer the question.'],
      ['A question beginning “To what extent” requires…', 'A judgement weighing different arguments', ['A list of dates', 'Only one side', 'A description of events'], 'You must reach a supported conclusion.'],
    ],
  ),
  SK3: M(
    [
      'Choosing a topic: pick something with accessible sources, ideally ending at least 10 years ago. The topic doesn’t have to be from your syllabus.',
      'Section 1, about 500 words, evaluates two sources using origin, purpose and content. Section 2, about 1,300 words, is the analytical investigation. Section 3, about 400 words, is the reflection.',
      'Good research questions are focused, such as: “To what extent was the 1936 Olympics a propaganda success for Nazi Germany?”',
      'Reflection ideas: problems with sources, the role of interpretation, bias in archives, and how your investigation shows the methods historians use.',
    ],
    [
      ['IA Section 1 word guide', 'About 500 words: evaluation of two sources.'],
      ['IA Section 2 word guide', 'About 1,300 words: the investigation.'],
      ['IA Section 3 word guide', 'About 400 words: reflection.'],
      ['IA weighting', '25% of the grade at SL and 20% at HL.'],
    ],
    [
      ['Section 2 of the history IA is…', 'The investigation', ['The source evaluation', 'The reflection', 'The bibliography'], 'It is the longest section.'],
      ['Which is the most focused research question?', 'To what extent was the 1936 Olympics a propaganda success for Nazi Germany?', ['What happened in World War II?', 'Why is history important?', 'What was Nazi Germany like?'], 'It is specific and answerable.'],
      ['The IA reflection should discuss…', 'Methods and challenges historians face', ['Your favourite historian', 'A summary of the investigation', 'Future career plans'], 'It links your experience to historical methods.'],
      ['The history IA is worth what percentage at HL?', '20%', ['25%', '30%', '10%'], 'At SL it is worth 25%.'],
    ],
  ),
};

export default more;
