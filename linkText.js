var linkData = {
    all: {
      wikiPolicies: [
        `<span class="link" onclick="highlightText(['comment8-sentence3', 'comment11-sentence4', 'comment13-sentence6', 'comment18-sentence2', 'comment2-sentence1'])">
          WP:WEIGHT [<a href="https://en.wikipedia.org/wiki/Wikipedia:DUE" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
            Neutrality requires that mainspace articles and pages fairly represent all significant viewpoints that have been published by reliable sources, in proportion to the prominence of each viewpoint in those sources. Giving due weight and avoiding giving undue weight means articles should not give minority views or aspects as much of or as detailed a description as more widely held views or widely supported aspects. Generally, the views of tiny minorities should not be included at all, except perhaps in a "see also" to an article about those specific views. For example, the article on the Earth does not directly mention modern support for the flat Earth concept, the view of a distinct (and minuscule) minority; to do so would give undue weight to it.
          </span>
        </span>`,

        `<span class="link" onclick="highlightText(['comment11-sentence5', 'comment13-sentence12', 'comment17-sentence7'])">
          WP:OR [<a href="https://en.wikipedia.org/wiki/Wikipedia:No_original_research" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
            Wikipedia articles must not contain original research. On Wikipedia, original research means material—such as facts, allegations, and ideas—for which no reliable, published source exists. This includes any analysis or synthesis of published material that reaches or implies a conclusion not stated by the sources. To demonstrate that you are not adding original research, you must be able to cite reliable, published sources that are directly related to the topic of the article and directly support the material being presented.
          </span>
        </span>`,

        `<span class="link" onclick="highlightText(['comment2-sentence3', 'comment8-sentence1'])">
          WP:NOTCENSORED [<a href="https://en.wikipedia.org/wiki/Wikipedia:NOTCENSORED" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
            Wikipedia may contain content that some readers consider objectionable or offensive‍—‌even exceedingly so. Attempting to ensure that articles and images will be acceptable to all readers, or will adhere to general social or religious norms, is incompatible with the purposes of an encyclopedia.
          </span>
        </span>`,

        `<span class="link" onclick="highlightText(['comment11-sentence9', 'comment13-sentence8', 'comment2-sentence2'])">
          WP:V [<a href="https://en.wikipedia.org/wiki/Wikipedia:Verifiability" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
            In the English Wikipedia, verifiability means that people are able to check that information comes from a reliable source. Its content is determined by published information rather than editors' beliefs, experiences, or previously unpublished ideas or information. Even if you are sure something is true, it must have been previously published in a reliable source before you can add it. If reliable sources disagree with each other, then maintain a neutral point of view and present what the various sources say, giving each side its due weight.
          </span>
        </span>`,

        `<span class="link" onclick="highlightText(['comment10-sentence6'])">
          WP:PA [<a href="https://en.wikipedia.org/wiki/Wikipedia:PA" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
            Do not make personal attacks anywhere on Wikipedia. Comment on content, not on the contributor. Personal attacks harm the Wikipedia community and the collaborative atmosphere needed to create a good encyclopedia. Derogatory comments about other editors may be removed by any editor. Repeated or egregious personal attacks may lead to sanctions including blocks or even bans.
          </span>
        </span>`,

        `<span class="link" onclick="highlightText(['comment13-sentence2'])">
          WP:INDISCRIMINATE [<a href="https://en.wikipedia.org/wiki/Wikipedia:NOT#INDISCRIMINATE" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
            To provide encyclopedic value, data should be put in context with explanations referenced to independent sources. As explained in § Encyclopedic content above, merely being true, or even verifiable, does not automatically make something suitable for inclusion in the encyclopedia. Wikipedia articles should not be:
          </span>
        </span>`,

        `<span class="link" onclick="highlightText(['comment13-sentence8'])">
          WP:NPOV [<a href="https://en.wikipedia.org/wiki/Wikipedia:NPOV" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
            All encyclopedic content on Wikipedia must be written from a neutral point of view (NPOV), which means representing fairly, proportionately, and, as far as possible, without editorial bias, all the significant views that have been published by reliable sources on a topic.
          </span>
        </span>`,

        `<span class="link" onclick="highlightText(['comment25-sentence3'])">
          WP:BALANCE [<a href="https://en.wikipedia.org/wiki/Wikipedia:BALANCE" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
            Neutrality assigns weight to viewpoints in proportion to their prominence in reliable sources. However, when reputable sources contradict one another and are relatively equal in prominence, describe both points of view and work for balance. This involves describing the opposing views clearly, drawing on secondary or tertiary sources that describe the disagreement from a disinterested viewpoint.
          </span>
        </span>`,

        `<span class="link" onclick="highlightText(['comment24-sentence1'])">
          WP:CIRCULAR [<a href="https://en.wikipedia.org/wiki/Wikipedia:Circular" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
            Do not use articles from Wikipedia (whether English Wikipedia or Wikipedias in other languages) as sources, since Wikipedia is a user-generated source. Also, do not use websites mirroring Wikipedia content or publications relying on material from Wikipedia as sources. Content from a Wikipedia article is not considered reliable unless it is backed up by citing reliable sources. Confirm that these sources support the content, then use them directly.
          </span>
        </span>`
      ],
      
      wikiGuidelines: [
        `<span class="link" onclick="highlightText(['comment23-sentence3', 'comment23-sentence4', 'comment8-sentence3'])">
          WP:N [<a href="https://en.wikipedia.org/wiki/Wikipedia:NOTABLE" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
            On Wikipedia, notability is a test used by editors to decide whether a given topic warrants its own article.
          </span>
        </span>`,

        `<span class="link" onclick="highlightText(['comment16-sentence1', 'comment17-sentence6', 'comment17-sentence7'])">
          WP:UGC [<a href="https://en.wikipedia.org/wiki/Wikipedia:UGC" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
            Websites whose content is largely user-generated are generally unacceptable as sources. Sites with user-generated content include personal websites, personal and group blogs (excluding newspaper and magazine blogs), content farms, Internet forums, social media sites, fansites, video and image hosting services, most wikis and other collaboratively created websites.
          </span>
        </span>`,

        `<span class="link" onclick="highlightText(['comment13-sentence8', 'comment21-sentence3'])">
          WP:RS [<a href="https://en.wikipedia.org/wiki/Wikipedia:RS" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
            Wikipedia articles should be based on reliable, published sources, making sure that all majority and significant minority views that have appeared in those sources are covered (see Wikipedia:Neutral point of view). If no reliable sources can be found on a topic, Wikipedia should not have an article on it.
          </span>
        </span>`,

        `<span class="link" onclick="highlightText(['comment17-sentence7'])">
          MOS:LABEL [<a href="https://en.wikipedia.org/wiki/MOS:LABEL" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
            Value-laden labels – such as calling an organization a cult, an individual a racist, sexist, terrorist, or freedom fighter, or a sexual practice a perversion – may express contentious opinion and are best avoided unless widely used by reliable sources to describe the subject, in which case use in-text attribution. Avoid myth in its informal sense, and establish the scholarly context for any formal use of the term.
          </span>
        </span>`
      ],

      wikiEssays: [
        `
        <span class="link" onclick="highlightText(['comment3-sentence2'])">
          WP:1AM [<a href="https://en.wikipedia.org/wiki/Wikipedia:1AM" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
            Sometimes on Wikipedia you find yourself in a "one-against-many" disagreement about the content of an article. You know that you are right (everybody always knows that they are right), but there are several other editors who just don't see it that way. What do you do? This page attempts to give some practical advice for dealing with this situation.
          </span>
        </span>
        `
      ],

      interWikiLinks: [
        `<span class="link" onclick="highlightText(['comment1-sentence1'])">
          File: Slave Labour ahead of 2022 FIFA World Cup.jpg [<a href="https://en.wikipedia.org/wiki/File:Slave_Labour_ahead_of_2022_FIFA_World_Cup.jpg" target="_blank" rel="noopener noreferrer">↗</a>]
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment2-sentence2'])">
          Orientalism [<a href="https://en.wikipedia.org/wiki/Orientalism" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
            In art history, literature, and cultural studies, Orientalism is the imitation or depiction of aspects of the Eastern world (or "Orient") by writers, designers, and artists from the Western world. Orientalist painting, particularly of the Middle East, was one of the many specialties of 19th-century academic art, and Western literature was influenced by a similar interest in Oriental themes.
          </span>
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment2-sentence3'])">
          Pickaninny [<a href="https://en.wikipedia.org/wiki/Pickaninny" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
            Pickaninny (also picaninny, piccaninny or pickininnie) is a racial slur for African-American children and a pejorative term for Aboriginal children of the Americas, Australia, and New Zealand. The origins of the term are disputed. Along with several words for children in pidgin and creole languages, such as piccanin and pikinini, it may derive from the Portuguese pequenino ('boy, child, very small, tiny').
          </span>
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment2-sentence3'])">
          File: Picaninny Freeze.jpg [<a href="https://en.wikipedia.org/wiki/File:Picaninny_Freeze.jpg" target="_blank" rel="noopener noreferrer">↗</a>]
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment5-sentence1'])">
          Commons jpg file deletion request [<a href="https://commons.wikimedia.org/wiki/Commons:Deletion_requests/File:Slave_Labour_ahead_of_2022_FIFA_World_Cup.jpg" target="_blank" rel="noopener noreferrer">↗</a>]
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment5-sentence2'])">
          Talk: World Cup cartoon removal [<a href="https://en.wikipedia.org/w/index.php?title=Talk:List_of_2022_FIFA_World_Cup_controversies&oldid=1257410099#Removal_of_non-notable,_unencyclopedic_self-published_cartoon" target="_blank" rel="noopener noreferrer">↗</a>]
        </span>`,

        `<span class="link" onclick="highlightText(['comment7-sentence1'])">
          File: Foreign workers at Pearl, 2018.jpg [<a href="https://en.wikipedia.org/wiki/File:Foreign_workers_at_a_construction_site_of_The_Pearl,_2018.jpg" target="_blank" rel="noopener noreferrer">↗</a>]
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment7-sentence1'])">
          File: Migrant workers in West Bay, Doha.jpg [<a href="https://en.wikipedia.org/wiki/File:Migrant_workers_in_West_Bay_Doha.jpg" target="_blank" rel="noopener noreferrer">↗</a>]
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment8-sentence1'])">
          WP:IMG [<a href="https://en.wikipedia.org/wiki/Wikipedia:IMAGE" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
            Images are one of the many types of media used on Wikipedia and may be photos, drawings, logos, or graphs.
          </span>
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment8-sentence1'])">
          2022 FIFA controversy version 1 [<a href="https://en.wikipedia.org/w/index.php?title=2022_FIFA_World_Cup_controversies&oldid=1124922864" target="_blank" rel="noopener noreferrer">↗</a>]
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment8-sentence1'])">
          2022 FIFA controversy version 2 [<a href="https://en.wikipedia.org/w/index.php?title=2022_FIFA_World_Cup_controversies&oldid=1125016940" target="_blank" rel="noopener noreferrer">↗</a>]
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment8-sentence1'])">
          2022 FIFA controversy version 3 [<a href="https://en.wikipedia.org/w/index.php?title=2022_FIFA_World_Cup_controversies&oldid=1125389779" target="_blank" rel="noopener noreferrer">↗</a>]
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment8-sentence3'])">
          Human rights in Qatar [<a href="https://en.wikipedia.org/wiki/Human_rights_in_Qatar" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
          The state of human rights in Qatar is a concern for several non-governmental organisations, such as the Human Rights Watch (HRW), which reported in 2012 that hundreds of thousands of mostly South Asian migrant workers in construction in Qatar risk serious exploitation and abuse, sometimes amounting to forced labour. Qatar is an authoritarian and de facto absolute monarchy under the House of Thani. Qatari law also does not permit the establishment of political bodies or trade unions. Awareness of human rights abuses in Qatar grew internationally after Qatar's controversial selection to stage the 2022 FIFA World Cup.
          </span>
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment8-sentence3'])">
          Slavery in Qatar [<a href="https://en.wikipedia.org/wiki/Slavery_in_Qatar" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
          For most of its history, Qatar practiced slavery until its abolition in 1952. Many members of the Afro-Arabian minority are descendants of the former slaves. Chattel slavery was succeeded by the Kafala system. The kafala system has been abolished in Qatar since December 2016. However, concerns still remain about workers' rights and employers retaining considerable power over workers.
          </span>
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment10-sentence4'])">
          Bogotá [<a href="https://en.wikipedia.org/wiki/Bogot%C3%A1" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
          Bogotá (/ˌboʊɡəˈtɑː/, also UK: /ˌbɒɡ-/, US: /ˈboʊɡətɑː/, Spanish pronunciation: [boɣoˈta] ⓘ), officially Bogotá, Distrito Capital, abbreviated Bogotá, D.C., and formerly known as Santa Fe de Bogotá (Spanish: [ˌsanta ˈfe ðe βoɣoˈta]; lit. 'Holy Faith of Bogotá') during the Spanish Imperial period and between 1991 and 2000, is the capital and largest city of Colombia, and one of the largest cities in the world. The city is administered as the Capital District, as well as the capital of, though not politically part of, the surrounding department of Cundinamarca. Bogotá is a territorial entity of the first order, with the same administrative status as the departments of Colombia. It is the main political, economic, administrative, industrial, cultural, aeronautical, technological, scientific, medical and educational center of the country and northern South America.
          </span>
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment13-sentence1'])">
          Turkeys voting for Christmas [<a href="https://en.wikipedia.org/wiki/Turkeys_voting_for_Christmas" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
          Turkeys voting for Christmas is an English idiom used as a metaphor for a situation in which a choice made is clearly against one's self-interest. In the United Kingdom, turkeys are commonly eaten as part of the English Christmas dinner.
          </span>
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment16-sentence1'])">
          Editorial cartoonist [<a href="https://en.wikipedia.org/wiki/Editorial_cartoonist" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
          An editorial cartoonist, also known as a political cartoonist, is an artist who draws editorial cartoons that contain some level of political or social commentary. Their cartoons are used to convey and question an aspect of daily news or current affairs in a national or international context. Political cartoonists generally adopt a caricaturist style of drawing, to capture the likeness of a politician or subject. They may also employ humor or satire to ridicule an individual or group, emphasize their point of view or comment on a particular event.
          </span>
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment17-sentence1'])">
          Commons: Self-published work [<a href="https://commons.wikimedia.org/wiki/Category:Self-published_work" target="_blank" rel="noopener noreferrer">↗</a>]
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment17-sentence3'])">
          Political cartoon [<a href="https://en.wikipedia.org/wiki/Political_cartoon" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
          A political cartoon, also known as an editorial cartoon, is a cartoon graphic with caricatures of public figures, expressing the artist's opinion. An artist who writes and draws such images is known as an editorial cartoonist. They typically combine artistic skill, hyperbole and satire in order to either question authority or draw attention to corruption, political violence and other social ills.
          </span>
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment17-sentence3'])">
          Commons jpg file [<a href="https://commons.wikimedia.org/wiki/File:Slave_Labour_ahead_of_2022_FIFA_World_Cup.jpg" target="_blank" rel="noopener noreferrer">↗</a>]
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment17-sentence4', 'comment17-sentence6', 'comment17-sentence7'])">
          Slave labour [<a href="https://en.wikipedia.org/wiki/Slave_labour" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
          Slavery is the ownership of a person as property, especially in regards to their labour. Slavery typically involves compulsory work, with the slave's location of work and residence dictated by the party that holds them in bondage. Enslavement is the placement of a person into slavery, and the person is called a slave or an enslaved person (see § Terminology).
          </span>
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment17-sentence6'])">
          Subject-matter expert [<a href="https://en.wikipedia.org/wiki/Subject-matter_expert" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
          A subject-matter expert (SME) is a person who has accumulated great knowledge in a particular field or topic and this level of knowledge is demonstrated by the person's degree, licensure, and/or through years of professional experience with the subject. For example, a PhD in chemistry could be easily declared as a SME in chemistry, or a person with a Second Class Radiotelegraph License or equivalent issued by the national licensing body could be considered a SME in radiotelegraphy. A person with a master's degree in electronic engineering could be considered a subject-matter expert in electronics, or a person with many years of experience in machining could be considered a SME in machining.
          </span>
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment17-sentence7'])">
          Loaded language [<a href="https://en.wikipedia.org/wiki/Loaded_language" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
          Loaded language is rhetoric used to influence an audience by using words and phrases with strong connotations. This type of language is very often made vague to more effectively invoke an emotional response and/or exploit stereotypes. Loaded words and phrases have significant emotional implications and involve strongly positive or negative reactions beyond their literal meaning.
          </span>
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment17-sentence7'])">
          Wikimedia Commons [<a href="https://en.wikipedia.org/wiki/Wikimedia_Commons" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
          Wikimedia Commons, or simply Commons, is a wiki-based media repository of free-to-use images, sounds, videos and other media. It is a project of the Wikimedia Foundation.
          </span>
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment18-sentence1'])">
          2022 FIFA World Cup [<a href="https://en.wikipedia.org/wiki/2022_FIFA_World_Cup" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
          The 2022 FIFA World Cup was the 22nd FIFA World Cup, the quadrennial world championship for national football teams organized by FIFA. It took place in Qatar from 20 November to 18 December 2022, after the country was awarded the hosting rights in 2010. It was the first World Cup to be held in the Middle East and Persian Gulf countries, and the second in an Asian country after the 2002 tournament in South Korea and Japan.
          </span>
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment18-sentence1'])">
          Human rights issues involving 2022 World Cup [<a href="https://en.wikipedia.org/wiki/Human_rights_issues_involving_the_2022_FIFA_World_Cup" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
          There have been several criticisms and controversies of perceived human rights violations related to the organisation and hosting of the 2022 FIFA World Cup in Qatar. There have long been concerns for the state of human rights in Qatar, with the state accused of sportswashing in hosting the World Cup.
          </span>
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment18-sentence1'])">
          List of 2022 FIFA World Cup controversies [<a href="https://en.wikipedia.org/wiki/List_of_2022_FIFA_World_Cup_controversies" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
          The decision of FIFA to host the 2022 FIFA World Cup in Qatar sparked a number of concerns and controversies regarding both Qatar's suitability as a host country and the fairness of the FIFA World Cup bidding process. Some media outlets, sporting experts, and human rights groups have criticised Qatar's record of human rights violations; Qatar's limited football history; the high expected cost; the local climate; and alleged bribery in the bidding process. Not all nations competing have put focus on concerns.
          </span>
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment18-sentence2'])">
          WP:Choosing appropriate illustrations [<a href="https://en.wikipedia.org/wiki/Wikipedia:Choosing_appropriate_illustrations" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
          This page has a few suggested guidelines for choosing the type of illustration that would be most appropriate for various circumstances. Many times, a Wikipedia article needs an illustration, but it is not immediately clear what kind of illustration is needed. Should it be a photograph or a drawing? Should it be detailed or simple? You are not obligated in the least to follow these suggestions, but you may find them useful in choosing what kind of image to use for a particular article.
          </span>
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment20-sentence2'])">
          WP:RFCBRIEF [<a href="https://en.wikipedia.org/wiki/Wikipedia:RFCNEUTRAL" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
          The initial RfC statement (and heading) should be neutrally worded and brief. Statements are often phrased as questions, for example: "Should this article say in the lead that John Smith was a contender for the Pulitzer Prize?" There is no actual rule saying that editors who start RfCs must make their initial explanations look like they are responses to the question (e.g., by placing them inside a ===Discussion=== subsection) or otherwise making them less prominent.
          </span>
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment21-sentence2'])">
          WP:RFC/A [<a href="https://en.wikipedia.org/wiki/Wikipedia:RFC/A" target="_blank" rel="noopener noreferrer">↗</a>]
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment23-sentence1'])">
          Duval County, Florida [<a href="https://en.wikipedia.org/wiki/Duval_County,_Florida" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
          Duval County (/djuːˈvɔːl/ dew-VAWL), officially the City of Jacksonville and Duval County, is a county in the northeastern part of the U.S. state of Florida. As of the 2020 census, its population was 995,567, making it the sixth-most populous county in Florida. Its county seat is Jacksonville, with which the Duval County government has been consolidated since 1968. Duval County was established in 1822 and is named for William Pope Duval, Governor of Florida Territory from 1822 to 1834. Duval County is the central county of the Jacksonville, Florida Metropolitan Statistical Area.
          </span>
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment23-sentence1'])">
          Paxon School for Advanced Studies [<a href="https://en.wikipedia.org/wiki/Paxon_School_for_Advanced_Studies" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
          Paxon School for Advanced Studies (PSAS) is one of four International Baccalaureate senior high schools (the others being Stanton College Preparatory School, Wolfson High School, and Terry Parker High School) in Duval County, Florida, US. According to the College Board's Advanced Placement Report, Paxon has one of the strongest math and science Advanced Placement programs in the state of Florida, and is one of a group of Florida schools invited to apply for the Siemens Advanced Placement High School Award. Only ten to fifteen schools per state are invited to apply. Some valedictorians have been accepted to the United States Naval Academy and different Ivy League schools.
          </span>
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment25-sentence1'])">
          Self-immolation [<a href="https://en.wikipedia.org/wiki/Self-immolation" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
          Self-immolation is the act of setting oneself on fire. It is mostly done for political or religious reasons, often as a form of protest or in acts of martyrdom, and known for its disturbing and violent nature.
          </span>
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment25-sentence1'])">
          Buddhist crisis [<a href="https://en.wikipedia.org/wiki/Buddhist_crisis" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
          The Buddhist crisis (Vietnamese: Biến cố Phật giáo) was a period of political and religious tension in South Vietnam between May and November 1963, characterized by a series of repressive acts by the South Vietnamese government and a campaign of civil resistance, led mainly by Buddhist monks.
          </span>
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment31-sentence1'])">
          Gianni Infantino [<a href="https://en.wikipedia.org/wiki/Gianni_Infantino" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
          Giovanni Vincenzo Infantino (Italian pronunciation: [dʒoˈvanni vinˈtʃɛntso ˈdʒanni iɱfanˈtiːno]); (born 23 March 1970) is a Swiss-Italian football administrator and the president of the Fédération Internationale de Football Association (FIFA) since 26 February 2016. He was re-elected on 5 June 2019 and on 16 March 2023. On 10 January 2020, he was also elected a member of the International Olympic Committee (IOC).
          </span>
        </span>
        `
      ],

      externalSources: [
        `<span class="link" onclick="highlightText(['comment10-sentence2'])">
          “La Primera Tarjeta Roja del Mundial es para su Anfitrión" [<a href="https://www.revistalevel.com.co/contenido/la-primera-tarjeta-roja-del-mundial-es-para-su-anfitrion" target="_blank" rel="noopener noreferrer">↗</a>]
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment10-sentence5'])">
          Archived: Revista Level [<a href="https://web.archive.org/web/20221002191929/https://www.revistalevel.com.co/contenido/la-primera-tarjeta-roja-del-mundial-es-para-su-anfitrion" target="_blank" rel="noopener noreferrer">↗</a>]
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment16-sentence3'])">
          Amnesty: Qatar and FIFA [<a href="https://www.amnesty.org/en/latest/news/2023/11/qatar-inaction-by-qatar-and-fifa-a-year-on-from-the-world-cup-puts-legacy-for-workers-in-peril" target="_blank" rel="noopener noreferrer">↗</a>]
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment23-sentence1'])">
          The Copenhagen Post [<a href="https://cphpost.dk/2021-01-07/news/sport/sports-round-up-never-mind-the-grinch-denmark-is-trying-to-steal-the-world-cup" target="_blank" rel="noopener noreferrer">↗</a>]
        </span>
        `,
        
        `<span class="link" onclick="highlightText(['comment23-sentence1'])">
          POV International [<a href="https://pov.international/fremtiden-for-fodbold-ligger-hos-fans" target="_blank" rel="noopener noreferrer">↗</a>]
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment23-sentence1'])">
          Zeta [<a href="https://www.zeta.vision/2022/11/mondiali-qatar-tifosi" target="_blank" rel="noopener noreferrer">↗</a>]
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment23-sentence1'])">
          The Eagle Talon [<a href="https://www.eagletalonpaper.com/articles/the-problem-with-qatar-and-their-world-cup-of-mistakes" target="_blank" rel="noopener noreferrer">↗</a>]
        </span>
        `
      ]
    },
  
    thread1: {
      wikiPolicies: [
        `<span class="link" onclick="highlightText(['comment2-sentence1'])">
          WP:WEIGHT [<a href="https://en.wikipedia.org/wiki/Wikipedia:DUE" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
            Neutrality requires that mainspace articles and pages fairly represent all significant viewpoints that have been published by reliable sources, in proportion to the prominence of each viewpoint in those sources. Giving due weight and avoiding giving undue weight means articles should not give minority views or aspects as much of or as detailed a description as more widely held views or widely supported aspects. Generally, the views of tiny minorities should not be included at all, except perhaps in a "see also" to an article about those specific views. For example, the article on the Earth does not directly mention modern support for the flat Earth concept, the view of a distinct (and minuscule) minority; to do so would give undue weight to it.
          </span>
        </span>`,
        
        `<span class="link" onclick="highlightText(['comment2-sentence3'])">
          WP:NOTCENSORED [<a href="https://en.wikipedia.org/wiki/Wikipedia:NOTCENSORED" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
            Wikipedia may contain content that some readers consider objectionable or offensive‍—‌even exceedingly so. Attempting to ensure that articles and images will be acceptable to all readers, or will adhere to general social or religious norms, is incompatible with the purposes of an encyclopedia.
          </span>
        </span>`,

        `<span class="link" onclick="highlightText(['comment2-sentence2'])">
          WP:V [<a href="https://en.wikipedia.org/wiki/Wikipedia:Verifiability" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
            In the English Wikipedia, verifiability means that people are able to check that information comes from a reliable source. Its content is determined by published information rather than editors' beliefs, experiences, or previously unpublished ideas or information. Even if you are sure something is true, it must have been previously published in a reliable source before you can add it. If reliable sources disagree with each other, then maintain a neutral point of view and present what the various sources say, giving each side its due weight.
          </span>
        </span>`        
      ],
      
      wikiGuidelines: [],

      wikiEssays: [],

      interWikiLinks: [
        `<span class="link" onclick="highlightText(['comment1-sentence1'])">
          File: Slave Labour ahead of 2022 FIFA World Cup.jpg [<a href="https://en.wikipedia.org/wiki/File:Slave_Labour_ahead_of_2022_FIFA_World_Cup.jpg" target="_blank" rel="noopener noreferrer">↗</a>]
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment2-sentence2'])">
          Orientalism [<a href="https://en.wikipedia.org/wiki/Orientalism" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
            In art history, literature, and cultural studies, Orientalism is the imitation or depiction of aspects of the Eastern world (or "Orient") by writers, designers, and artists from the Western world. Orientalist painting, particularly of the Middle East, was one of the many specialties of 19th-century academic art, and Western literature was influenced by a similar interest in Oriental themes.
          </span>
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment2-sentence3'])">
          Pickaninny [<a href="https://en.wikipedia.org/wiki/Pickaninny" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
            Pickaninny (also picaninny, piccaninny or pickininnie) is a racial slur for African-American children and a pejorative term for Aboriginal children of the Americas, Australia, and New Zealand. The origins of the term are disputed. Along with several words for children in pidgin and creole languages, such as piccanin and pikinini, it may derive from the Portuguese pequenino ('boy, child, very small, tiny').
          </span>
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment2-sentence3'])">
          File: Picaninny Freeze.jpg [<a href="https://en.wikipedia.org/wiki/File:Picaninny_Freeze.jpg" target="_blank" rel="noopener noreferrer">↗</a>]
        </span>
        `
      ],

      externalSources: []
    },

    thread2: {
      wikiPolicies: [],
      
      wikiGuidelines: [],

      wikiEssays: [
        `
        <span class="link" onclick="highlightText(['comment3-sentence2'])">
          WP:1AM [<a href="https://en.wikipedia.org/wiki/Wikipedia:1AM" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
            Sometimes on Wikipedia you find yourself in a "one-against-many" disagreement about the content of an article. You know that you are right (everybody always knows that they are right), but there are several other editors who just don't see it that way. What do you do? This page attempts to give some practical advice for dealing with this situation.
          </span>
        </span>
        `
      ],

      interWikiLinks: [
        `<span class="link" onclick="highlightText(['comment5-sentence1'])">
          Commons jpg file deletion request [<a href="https://commons.wikimedia.org/wiki/Commons:Deletion_requests/File:Slave_Labour_ahead_of_2022_FIFA_World_Cup.jpg" target="_blank" rel="noopener noreferrer">↗</a>]
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment5-sentence2'])">
          Talk: World Cup cartoon removal [<a href="https://en.wikipedia.org/w/index.php?title=Talk:List_of_2022_FIFA_World_Cup_controversies&oldid=1257410099#Removal_of_non-notable,_unencyclopedic_self-published_cartoon" target="_blank" rel="noopener noreferrer">↗</a>]
        </span>
        `
      ],

      externalSources: []
    },

    thread3: {
      wikiPolicies: [],
      
      wikiGuidelines: [],

      wikiEssays: [],

      interWikiLinks: [
        `<span class="link" onclick="highlightText(['comment7-sentence1'])">
          File: Foreign workers at Pearl, 2018.jpg [<a href="https://en.wikipedia.org/wiki/File:Foreign_workers_at_a_construction_site_of_The_Pearl,_2018.jpg" target="_blank" rel="noopener noreferrer">↗</a>]
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment7-sentence1'])">
          File: Migrant workers in West Bay, Doha.jpg [<a href="https://en.wikipedia.org/wiki/File:Migrant_workers_in_West_Bay_Doha.jpg" target="_blank" rel="noopener noreferrer">↗</a>]
        </span>
        `
      ],

      externalSources: []
    },

    thread4: {
      wikiPolicies: [
        `<span class="link" onclick="highlightText(['comment8-sentence3'])">
          WP:WEIGHT [<a href="https://en.wikipedia.org/wiki/Wikipedia:DUE" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
            Neutrality requires that mainspace articles and pages fairly represent all significant viewpoints that have been published by reliable sources, in proportion to the prominence of each viewpoint in those sources. Giving due weight and avoiding giving undue weight means articles should not give minority views or aspects as much of or as detailed a description as more widely held views or widely supported aspects. Generally, the views of tiny minorities should not be included at all, except perhaps in a "see also" to an article about those specific views. For example, the article on the Earth does not directly mention modern support for the flat Earth concept, the view of a distinct (and minuscule) minority; to do so would give undue weight to it.
          </span>
        </span>`,

        `<span class="link" onclick="highlightText(['comment8-sentence1'])">
          WP:NOTCENSORED [<a href="https://en.wikipedia.org/wiki/Wikipedia:NOTCENSORED" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
            Wikipedia may contain content that some readers consider objectionable or offensive‍—‌even exceedingly so. Attempting to ensure that articles and images will be acceptable to all readers, or will adhere to general social or religious norms, is incompatible with the purposes of an encyclopedia.
          </span>
        </span>`,

        `<span class="link" onclick="highlightText(['comment10-sentence6'])">
          WP:PA [<a href="https://en.wikipedia.org/wiki/Wikipedia:PA" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
            Do not make personal attacks anywhere on Wikipedia. Comment on content, not on the contributor. Personal attacks harm the Wikipedia community and the collaborative atmosphere needed to create a good encyclopedia. Derogatory comments about other editors may be removed by any editor. Repeated or egregious personal attacks may lead to sanctions including blocks or even bans.
          </span>
        </span>`
      ],
      
      wikiGuidelines: [
        `<span class="link" onclick="highlightText(['comment23-sentence3', 'comment23-sentence4', 'comment8-sentence3'])">
          WP:N [<a href="https://en.wikipedia.org/wiki/Wikipedia:NOTABLE" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
            On Wikipedia, notability is a test used by editors to decide whether a given topic warrants its own article.
          </span>
        </span>`
      ],

      wikiEssays: [],

      interWikiLinks: [
        `<span class="link" onclick="highlightText(['comment8-sentence1'])">
          WP:IMG [<a href="https://en.wikipedia.org/wiki/Wikipedia:IMAGE" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
            Images are one of the many types of media used on Wikipedia and may be photos, drawings, logos, or graphs.
          </span>
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment8-sentence1'])">
          2022 FIFA controversy version 1 [<a href="https://en.wikipedia.org/w/index.php?title=2022_FIFA_World_Cup_controversies&oldid=1124922864" target="_blank" rel="noopener noreferrer">↗</a>]
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment8-sentence1'])">
          2022 FIFA controversy version 2 [<a href="https://en.wikipedia.org/w/index.php?title=2022_FIFA_World_Cup_controversies&oldid=1125016940" target="_blank" rel="noopener noreferrer">↗</a>]
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment8-sentence1'])">
          2022 FIFA controversy version 3 [<a href="https://en.wikipedia.org/w/index.php?title=2022_FIFA_World_Cup_controversies&oldid=1125389779" target="_blank" rel="noopener noreferrer">↗</a>]
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment8-sentence3'])">
          Human rights in Qatar [<a href="https://en.wikipedia.org/wiki/Human_rights_in_Qatar" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
          The state of human rights in Qatar is a concern for several non-governmental organisations, such as the Human Rights Watch (HRW), which reported in 2012 that hundreds of thousands of mostly South Asian migrant workers in construction in Qatar risk serious exploitation and abuse, sometimes amounting to forced labour. Qatar is an authoritarian and de facto absolute monarchy under the House of Thani. Qatari law also does not permit the establishment of political bodies or trade unions. Awareness of human rights abuses in Qatar grew internationally after Qatar's controversial selection to stage the 2022 FIFA World Cup.
          </span>
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment8-sentence3'])">
          Slavery in Qatar [<a href="https://en.wikipedia.org/wiki/Slavery_in_Qatar" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
          For most of its history, Qatar practiced slavery until its abolition in 1952. Many members of the Afro-Arabian minority are descendants of the former slaves. Chattel slavery was succeeded by the Kafala system. The kafala system has been abolished in Qatar since December 2016. However, concerns still remain about workers' rights and employers retaining considerable power over workers.
          </span>
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment10-sentence4'])">
          Bogotá [<a href="https://en.wikipedia.org/wiki/Bogot%C3%A1" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
          Bogotá (/ˌboʊɡəˈtɑː/, also UK: /ˌbɒɡ-/, US: /ˈboʊɡətɑː/, Spanish pronunciation: [boɣoˈta] ⓘ), officially Bogotá, Distrito Capital, abbreviated Bogotá, D.C., and formerly known as Santa Fe de Bogotá (Spanish: [ˌsanta ˈfe ðe βoɣoˈta]; lit. 'Holy Faith of Bogotá') during the Spanish Imperial period and between 1991 and 2000, is the capital and largest city of Colombia, and one of the largest cities in the world. The city is administered as the Capital District, as well as the capital of, though not politically part of, the surrounding department of Cundinamarca. Bogotá is a territorial entity of the first order, with the same administrative status as the departments of Colombia. It is the main political, economic, administrative, industrial, cultural, aeronautical, technological, scientific, medical and educational center of the country and northern South America.
          </span>
        </span>
        `
      ],

      externalSources: [
        `<span class="link" onclick="highlightText(['comment10-sentence2'])">
          “La Primera Tarjeta Roja del Mundial es para su Anfitrión" [<a href="https://www.revistalevel.com.co/contenido/la-primera-tarjeta-roja-del-mundial-es-para-su-anfitrion" target="_blank" rel="noopener noreferrer">↗</a>]
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment10-sentence5'])">
          Archived: Revista Level [<a href="https://web.archive.org/web/20221002191929/https://www.revistalevel.com.co/contenido/la-primera-tarjeta-roja-del-mundial-es-para-su-anfitrion" target="_blank" rel="noopener noreferrer">↗</a>]
        </span>
        `
      ]
    },

    thread5: {
      wikiPolicies: [
        `<span class="link" onclick="highlightText(['comment11-sentence4', 'comment13-sentence6'])">
          WP:UNDUE [<a href="https://en.wikipedia.org/wiki/Wikipedia:DUE" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
            Neutrality requires that mainspace articles and pages fairly represent all significant viewpoints that have been published by reliable sources, in proportion to the prominence of each viewpoint in those sources. Giving due weight and avoiding giving undue weight means articles should not give minority views or aspects as much of or as detailed a description as more widely held views or widely supported aspects. Generally, the views of tiny minorities should not be included at all, except perhaps in a "see also" to an article about those specific views. For example, the article on the Earth does not directly mention modern support for the flat Earth concept, the view of a distinct (and minuscule) minority; to do so would give undue weight to it.
          </span>
        </span>`,

        `<span class="link" onclick="highlightText(['comment11-sentence5', 'comment13-sentence12'])">
          WP:NOR [<a href="https://en.wikipedia.org/wiki/Wikipedia:No_original_research" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
            Wikipedia articles must not contain original research. On Wikipedia, original research means material—such as facts, allegations, and ideas—for which no reliable, published source exists. This includes any analysis or synthesis of published material that reaches or implies a conclusion not stated by the sources. To demonstrate that you are not adding original research, you must be able to cite reliable, published sources that are directly related to the topic of the article and directly support the material being presented.
          </span>
        </span>`,

        `<span class="link" onclick="highlightText(['comment11-sentence9', 'comment13-sentence8'])">
          WP:V [<a href="https://en.wikipedia.org/wiki/Wikipedia:Verifiability" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
            In the English Wikipedia, verifiability means that people are able to check that information comes from a reliable source. Its content is determined by published information rather than editors' beliefs, experiences, or previously unpublished ideas or information. Even if you are sure something is true, it must have been previously published in a reliable source before you can add it. If reliable sources disagree with each other, then maintain a neutral point of view and present what the various sources say, giving each side its due weight.
          </span>
        </span>`,

        `<span class="link" onclick="highlightText(['comment13-sentence8'])">
          WP:NPOV [<a href="https://en.wikipedia.org/wiki/Wikipedia:NPOV" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
            All encyclopedic content on Wikipedia must be written from a neutral point of view (NPOV), which means representing fairly, proportionately, and, as far as possible, without editorial bias, all the significant views that have been published by reliable sources on a topic.
          </span>
        </span>`,

        `<span class="link" onclick="highlightText(['comment13-sentence2'])">
          WP:INDISCRIMINATE [<a href="https://en.wikipedia.org/wiki/Wikipedia:NOT#INDISCRIMINATE" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
            To provide encyclopedic value, data should be put in context with explanations referenced to independent sources. As explained in § Encyclopedic content above, merely being true, or even verifiable, does not automatically make something suitable for inclusion in the encyclopedia. Wikipedia articles should not be:
          </span>
        </span>`
        ],

      wikiGuidelines: [
        `<span class="link" onclick="highlightText(['comment13-sentence8'])">
          WP:RS [<a href="https://en.wikipedia.org/wiki/Wikipedia:RS" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
            Wikipedia articles should be based on reliable, published sources, making sure that all majority and significant minority views that have appeared in those sources are covered (see Wikipedia:Neutral point of view). If no reliable sources can be found on a topic, Wikipedia should not have an article on it.
          </span>
        </span>`
        ],

      wikiEssays: [
        ],

      interWikiLinks: [
        `<span class="link" onclick="highlightText(['comment13-sentence1'])">
          Turkeys voting for Christmas [<a href="https://en.wikipedia.org/wiki/Turkeys_voting_for_Christmas" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
          Turkeys voting for Christmas is an English idiom used as a metaphor for a situation in which a choice made is clearly against one's self-interest. In the United Kingdom, turkeys are commonly eaten as part of the English Christmas dinner.
          </span>
        </span>
        `
        ],

      externalSources: [
      ]
    },

    thread6: {
      wikiPolicies: [],
      
      wikiGuidelines: [],

      wikiEssays: [],

      interWikiLinks: [],

      externalSources: []
    },

    thread7: {
      wikiPolicies: [
        `<span class="link" onclick="highlightText(['comment18-sentence2'])">
          WP:WEIGHT [<a href="https://en.wikipedia.org/wiki/Wikipedia:DUE" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
            Neutrality requires that mainspace articles and pages fairly represent all significant viewpoints that have been published by reliable sources, in proportion to the prominence of each viewpoint in those sources. Giving due weight and avoiding giving undue weight means articles should not give minority views or aspects as much of or as detailed a description as more widely held views or widely supported aspects. Generally, the views of tiny minorities should not be included at all, except perhaps in a "see also" to an article about those specific views. For example, the article on the Earth does not directly mention modern support for the flat Earth concept, the view of a distinct (and minuscule) minority; to do so would give undue weight to it.
          </span>
        </span>`,

        `<span class="link" onclick="highlightText(['comment17-sentence7'])">
          WP:OR [<a href="https://en.wikipedia.org/wiki/Wikipedia:No_original_research" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
            Wikipedia articles must not contain original research. On Wikipedia, original research means material—such as facts, allegations, and ideas—for which no reliable, published source exists. This includes any analysis or synthesis of published material that reaches or implies a conclusion not stated by the sources. To demonstrate that you are not adding original research, you must be able to cite reliable, published sources that are directly related to the topic of the article and directly support the material being presented.
          </span>
        </span>
        `
      ],
      
      wikiGuidelines: [
        `<span class="link" onclick="highlightText(['comment16-sentence1', 'comment17-sentence6', 'comment17-sentence7'])">
          WP:UGC [<a href="https://en.wikipedia.org/wiki/Wikipedia:UGC" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
            Websites whose content is largely user-generated are generally unacceptable as sources. Sites with user-generated content include personal websites, personal and group blogs (excluding newspaper and magazine blogs), content farms, Internet forums, social media sites, fansites, video and image hosting services, most wikis and other collaboratively created websites.
          </span>
        </span>`,

        `<span class="link" onclick="highlightText(['comment17-sentence7'])">
          MOS:LABEL [<a href="https://en.wikipedia.org/wiki/MOS:LABEL" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
            Value-laden labels – such as calling an organization a cult, an individual a racist, sexist, terrorist, or freedom fighter, or a sexual practice a perversion – may express contentious opinion and are best avoided unless widely used by reliable sources to describe the subject, in which case use in-text attribution. Avoid myth in its informal sense, and establish the scholarly context for any formal use of the term.
          </span>
        </span>
        `
      ],

      wikiEssays: [],

      interWikiLinks: [
        `<span class="link" onclick="highlightText(['comment16-sentence1'])">
          Editorial cartoonist [<a href="https://en.wikipedia.org/wiki/Editorial_cartoonist" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
          An editorial cartoonist, also known as a political cartoonist, is an artist who draws editorial cartoons that contain some level of political or social commentary. Their cartoons are used to convey and question an aspect of daily news or current affairs in a national or international context. Political cartoonists generally adopt a caricaturist style of drawing, to capture the likeness of a politician or subject. They may also employ humor or satire to ridicule an individual or group, emphasize their point of view or comment on a particular event.
          </span>
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment17-sentence1'])">
          Commons: Self-published work [<a href="https://commons.wikimedia.org/wiki/Category:Self-published_work" target="_blank" rel="noopener noreferrer">↗</a>]
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment17-sentence3'])">
          Political cartoon [<a href="https://en.wikipedia.org/wiki/Political_cartoon" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
          A political cartoon, also known as an editorial cartoon, is a cartoon graphic with caricatures of public figures, expressing the artist's opinion. An artist who writes and draws such images is known as an editorial cartoonist. They typically combine artistic skill, hyperbole and satire in order to either question authority or draw attention to corruption, political violence and other social ills.
          </span>
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment17-sentence3'])">
          Commons jpg file [<a href="https://commons.wikimedia.org/wiki/File:Slave_Labour_ahead_of_2022_FIFA_World_Cup.jpg" target="_blank" rel="noopener noreferrer">↗</a>]
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment17-sentence4', 'comment17-sentence6', 'comment17-sentence7'])">
          Slave labour [<a href="https://en.wikipedia.org/wiki/Slave_labour" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
          Slavery is the ownership of a person as property, especially in regards to their labour. Slavery typically involves compulsory work, with the slave's location of work and residence dictated by the party that holds them in bondage. Enslavement is the placement of a person into slavery, and the person is called a slave or an enslaved person (see § Terminology).
          </span>
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment17-sentence6'])">
          Subject-matter expert [<a href="https://en.wikipedia.org/wiki/Subject-matter_expert" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
          A subject-matter expert (SME) is a person who has accumulated great knowledge in a particular field or topic and this level of knowledge is demonstrated by the person's degree, licensure, and/or through years of professional experience with the subject. For example, a PhD in chemistry could be easily declared as a SME in chemistry, or a person with a Second Class Radiotelegraph License or equivalent issued by the national licensing body could be considered a SME in radiotelegraphy. A person with a master's degree in electronic engineering could be considered a subject-matter expert in electronics, or a person with many years of experience in machining could be considered a SME in machining.
          </span>
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment17-sentence7'])">
          Loaded language [<a href="https://en.wikipedia.org/wiki/Loaded_language" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
          Loaded language is rhetoric used to influence an audience by using words and phrases with strong connotations. This type of language is very often made vague to more effectively invoke an emotional response and/or exploit stereotypes. Loaded words and phrases have significant emotional implications and involve strongly positive or negative reactions beyond their literal meaning.
          </span>
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment17-sentence7'])">
          Wikimedia Commons [<a href="https://en.wikipedia.org/wiki/Wikimedia_Commons" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
          Wikimedia Commons, or simply Commons, is a wiki-based media repository of free-to-use images, sounds, videos and other media. It is a project of the Wikimedia Foundation.
          </span>
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment18-sentence1'])">
          2022 FIFA World Cup [<a href="https://en.wikipedia.org/wiki/2022_FIFA_World_Cup" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
          The 2022 FIFA World Cup was the 22nd FIFA World Cup, the quadrennial world championship for national football teams organized by FIFA. It took place in Qatar from 20 November to 18 December 2022, after the country was awarded the hosting rights in 2010. It was the first World Cup to be held in the Middle East and Persian Gulf countries, and the second in an Asian country after the 2002 tournament in South Korea and Japan.
          </span>
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment18-sentence1'])">
          Human rights issues involving 2022 World Cup [<a href="https://en.wikipedia.org/wiki/Human_rights_issues_involving_the_2022_FIFA_World_Cup" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
          There have been several criticisms and controversies of perceived human rights violations related to the organisation and hosting of the 2022 FIFA World Cup in Qatar. There have long been concerns for the state of human rights in Qatar, with the state accused of sportswashing in hosting the World Cup.
          </span>
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment18-sentence1'])">
          List of 2022 FIFA World Cup controversies [<a href="https://en.wikipedia.org/wiki/List_of_2022_FIFA_World_Cup_controversies" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
          The decision of FIFA to host the 2022 FIFA World Cup in Qatar sparked a number of concerns and controversies regarding both Qatar's suitability as a host country and the fairness of the FIFA World Cup bidding process. Some media outlets, sporting experts, and human rights groups have criticised Qatar's record of human rights violations; Qatar's limited football history; the high expected cost; the local climate; and alleged bribery in the bidding process. Not all nations competing have put focus on concerns.
          </span>
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment18-sentence2'])">
          WP:Choosing appropriate illustrations [<a href="https://en.wikipedia.org/wiki/Wikipedia:Choosing_appropriate_illustrations" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
          This page has a few suggested guidelines for choosing the type of illustration that would be most appropriate for various circumstances. Many times, a Wikipedia article needs an illustration, but it is not immediately clear what kind of illustration is needed. Should it be a photograph or a drawing? Should it be detailed or simple? You are not obligated in the least to follow these suggestions, but you may find them useful in choosing what kind of image to use for a particular article.
          </span>
        </span>
        `
      ],

      externalSources: [
        `<span class="link" onclick="highlightText(['comment16-sentence3'])">
          Amnesty: Qatar and FIFA [<a href="https://www.amnesty.org/en/latest/news/2023/11/qatar-inaction-by-qatar-and-fifa-a-year-on-from-the-world-cup-puts-legacy-for-workers-in-peril" target="_blank" rel="noopener noreferrer">↗</a>]
        </span>
        `
      ]
    },

    thread8: {
      wikiPolicies: [
        `<span class="link" onclick="highlightText(['comment25-sentence3'])">
          WP:BALANCE [<a href="https://en.wikipedia.org/wiki/Wikipedia:BALANCE" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
            Neutrality assigns weight to viewpoints in proportion to their prominence in reliable sources. However, when reputable sources contradict one another and are relatively equal in prominence, describe both points of view and work for balance. This involves describing the opposing views clearly, drawing on secondary or tertiary sources that describe the disagreement from a disinterested viewpoint.
          </span>
        </span>`,

        `<span class="link" onclick="highlightText(['comment24-sentence1'])">
          WP:CIRCULAR [<a href="https://en.wikipedia.org/wiki/Wikipedia:Circular" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
            Do not use articles from Wikipedia (whether English Wikipedia or Wikipedias in other languages) as sources, since Wikipedia is a user-generated source. Also, do not use websites mirroring Wikipedia content or publications relying on material from Wikipedia as sources. Content from a Wikipedia article is not considered reliable unless it is backed up by citing reliable sources. Confirm that these sources support the content, then use them directly.
          </span>
        </span>`
        ],

      wikiGuidelines: [
        `<span class="link" onclick="highlightText(['comment23-sentence3', 'comment23-sentence4'])">
          WP:N [<a href="https://en.wikipedia.org/wiki/Wikipedia:NOTABLE" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
            On Wikipedia, notability is a test used by editors to decide whether a given topic warrants its own article.
          </span>
        </span>`,

        `<span class="link" onclick="highlightText(['comment21-sentence3'])">
          WP:RS [<a href="https://en.wikipedia.org/wiki/Wikipedia:RS" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
            Wikipedia articles should be based on reliable, published sources, making sure that all majority and significant minority views that have appeared in those sources are covered (see Wikipedia:Neutral point of view). If no reliable sources can be found on a topic, Wikipedia should not have an article on it.
          </span>
        </span>`
        ],

      wikiEssays: [
        ],

      interWikiLinks: [
        `<span class="link" onclick="highlightText(['comment20-sentence2'])">
          WP:RFCNEUTRAL [<a href="https://en.wikipedia.org/wiki/Wikipedia:RFCNEUTRAL" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
          The initial RfC statement (and heading) should be neutrally worded and brief. Statements are often phrased as questions, for example: "Should this article say in the lead that John Smith was a contender for the Pulitzer Prize?" There is no actual rule saying that editors who start RfCs must make their initial explanations look like they are responses to the question (e.g., by placing them inside a ===Discussion=== subsection) or otherwise making them less prominent.
          </span>
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment21-sentence2'])">
          WP:RFC/A [<a href="https://en.wikipedia.org/wiki/Wikipedia:RFC/A" target="_blank" rel="noopener noreferrer">↗</a>]
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment23-sentence1'])">
          Duval County, Florida [<a href="https://en.wikipedia.org/wiki/Duval_County,_Florida" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
          Duval County (/djuːˈvɔːl/ dew-VAWL), officially the City of Jacksonville and Duval County, is a county in the northeastern part of the U.S. state of Florida. As of the 2020 census, its population was 995,567, making it the sixth-most populous county in Florida. Its county seat is Jacksonville, with which the Duval County government has been consolidated since 1968. Duval County was established in 1822 and is named for William Pope Duval, Governor of Florida Territory from 1822 to 1834. Duval County is the central county of the Jacksonville, Florida Metropolitan Statistical Area.
          </span>
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment23-sentence1'])">
          Paxon School for Advanced Studies [<a href="https://en.wikipedia.org/wiki/Paxon_School_for_Advanced_Studies" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
          Paxon School for Advanced Studies (PSAS) is one of four International Baccalaureate senior high schools (the others being Stanton College Preparatory School, Wolfson High School, and Terry Parker High School) in Duval County, Florida, US. According to the College Board's Advanced Placement Report, Paxon has one of the strongest math and science Advanced Placement programs in the state of Florida, and is one of a group of Florida schools invited to apply for the Siemens Advanced Placement High School Award. Only ten to fifteen schools per state are invited to apply. Some valedictorians have been accepted to the United States Naval Academy and different Ivy League schools.
          </span>
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment25-sentence1'])">
          Self-immolation [<a href="https://en.wikipedia.org/wiki/Self-immolation" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
          Self-immolation is the act of setting oneself on fire. It is mostly done for political or religious reasons, often as a form of protest or in acts of martyrdom, and known for its disturbing and violent nature.
          </span>
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment25-sentence1'])">
          Buddhist crisis [<a href="https://en.wikipedia.org/wiki/Buddhist_crisis" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
          The Buddhist crisis (Vietnamese: Biến cố Phật giáo) was a period of political and religious tension in South Vietnam between May and November 1963, characterized by a series of repressive acts by the South Vietnamese government and a campaign of civil resistance, led mainly by Buddhist monks.
          </span>
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment31-sentence1'])">
          Gianni Infantino [<a href="https://en.wikipedia.org/wiki/Gianni_Infantino" target="_blank" rel="noopener noreferrer">↗</a>]
          <span class="link-tooltip">
          Giovanni Vincenzo Infantino (Italian pronunciation: [dʒoˈvanni vinˈtʃɛntso ˈdʒanni iɱfanˈtiːno]); (born 23 March 1970) is a Swiss-Italian football administrator and the president of the Fédération Internationale de Football Association (FIFA) since 26 February 2016. He was re-elected on 5 June 2019 and on 16 March 2023. On 10 January 2020, he was also elected a member of the International Olympic Committee (IOC).
          </span>
        </span>
        `
        ],

      externalSources: [
        `<span class="link" onclick="highlightText(['comment23-sentence1'])">
          The Copenhagen Post [<a href="https://cphpost.dk/2021-01-07/news/sport/sports-round-up-never-mind-the-grinch-denmark-is-trying-to-steal-the-world-cup" target="_blank" rel="noopener noreferrer">↗</a>]
        </span>
        `,
        
        `<span class="link" onclick="highlightText(['comment23-sentence1'])">
          POV International [<a href="https://pov.international/fremtiden-for-fodbold-ligger-hos-fans" target="_blank" rel="noopener noreferrer">↗</a>]
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment23-sentence1'])">
          Zeta [<a href="https://www.zeta.vision/2022/11/mondiali-qatar-tifosi" target="_blank" rel="noopener noreferrer">↗</a>]
        </span>
        `,

        `<span class="link" onclick="highlightText(['comment23-sentence1'])">
          The Eagle Talon [<a href="https://www.eagletalonpaper.com/articles/the-problem-with-qatar-and-their-world-cup-of-mistakes" target="_blank" rel="noopener noreferrer">↗</a>]
        </span>
        `
      ]
    },
  
    selected: {
      wikiPolicies: [],
      interWikiLinks: [],
      externalSources: []
    }
  };
  