// https://api.themoviedb.org/3/person/${person_id}/tv_credits?api_key=${api_key}&language=en-US

/*
  search for :
  .cast.credit_id === '...' -> 'episode_count

  -> ${credit_id}
*/

const person_tv_credits = {
  "cast": [
    {
      "credit_id": "52534dc019c2957940103d15",
      "original_name": "The Tony Danza Show",
      "id": 319,
      "genre_ids": [
        10767
      ],
      "character": "",
      "name": "The Tony Danza Show",
      "poster_path": "/6w7n6O6UNZKvL1liVFKYmTXFdNH.jpg",
      "vote_count": 0,
      "vote_average": 0,
      "popularity": 25.316,
      "episode_count": 2,
      "original_language": "en",
      "first_air_date": "2004-09-13",
      "backdrop_path": null,
      "overview": "The Tony Danza Show was a daytime variety talk show that premiered on September 13, 2004 in syndication and was distributed by Buena Vista Television.",
      "origin_country": [
        "US"
      ]
    },
    {
      "credit_id": "52541cfe19c29570ba0121f2",
      "original_name": "Eli Stone",
      "id": 1365,
      "genre_ids": [
        18,
        10765
      ],
      "character": "Jeremy Stone",
      "name": "Eli Stone",
      "poster_path": "/5U3wuaojWJwibdOAwg7yD6adhOn.jpg",
      "vote_count": 36,
      "vote_average": 7,
      "popularity": 13.5,
      "episode_count": 7,
      "original_language": "en",
      "first_air_date": "2008-01-31",
      "backdrop_path": "/wVAAROgx9TIaa2H8xhpLWQLINg0.jpg",
      "overview": "Many lawyers consider themselves prophets, but Eli Stone may be the real deal. Eli has built a successful career at a top law firm in San Francisco representing only the biggest and richest corporations that make a habit of screwing over the little guy. But after experiencing a series of odd hallucinations, Eli seeks to find a deeper meaning to life while trying not to lose his job and destroy his relationship with the bosses' daughter. When Eli discovers an aneurysm in his brain, he wonders if his condition is truly medical or if perhaps he now has a higher calling.",
      "origin_country": [
        "US"
      ]
    },
    {
      "credit_id": "52570f08760ee3776a0a950e",
      "original_name": "Providence",
      "original_language": "en",
      "id": 1638,
      "character": "",
      "name": "Providence",
      "origin_country": [
        "US"
      ],
      "vote_count": 12,
      "backdrop_path": null,
      "popularity": 15.182,
      "episode_count": 7,
      "genre_ids": [
        18
      ],
      "first_air_date": "1999-01-08",
      "vote_average": 5.9,
      "overview": "Providence is an American television drama series",
      "poster_path": "/720tV0QbG7s4EKxfcBRXMURPgBA.jpg"
    },
    {
      "credit_id": "52571723760ee3776a153400",
      "original_name": "Jack & Bobby",
      "original_language": "en",
      "id": 1859,
      "character": "",
      "name": "Jack & Bobby",
      "origin_country": [
        "US"
      ],
      "vote_count": 3,
      "backdrop_path": null,
      "popularity": 4.056,
      "episode_count": 2,
      "genre_ids": [
        18
      ],
      "first_air_date": "2004-09-12",
      "vote_average": 8.3,
      "overview": "If \"greatness is thrust upon us,\" as Winston Churchill once said, then it stands to reason that those who are destined for greatness are rarely aware of it. Take Jack and Bobby McCallister for example: two bright young brothers growing up under the watchful eye of their eccentric single mother Grace McCallister. Grace's personality is a force of nature destined to shape both of these young men's lives and secure one a place in the history books - as President of the United States.",
      "poster_path": "/qIskK1N4jypJhd9pUuJMiYgpfHX.jpg"
    },
    {
      "credit_id": "52571afe19c29571140d74de",
      "original_name": "Live with Regis and Kathie Lee",
      "id": 1900,
      "genre_ids": [],
      "character": "",
      "name": "Live with Regis and Kathie Lee",
      "poster_path": null,
      "vote_count": 7,
      "vote_average": 5.2,
      "popularity": 23.249,
      "episode_count": 1,
      "original_language": "en",
      "first_air_date": "1983-04-04",
      "backdrop_path": null,
      "overview": "Live! with Kelly and Michael is an American syndicated morning talk show, hosted by Kelly Ripa and Michael Strahan. Executive-produced by Michael Gelman, the show has aired since 1983 locally on WABC-TV in New York City and 1988 nationwide. With roots in A.M. Los Angeles and A.M. New York, Live! began as The Morning Show, hosted by Regis Philbin and Cyndy Garvey; the show rose to national prominence as Live with Regis and Kathie Lee, which ran for 12 years and continuing as Live! with Regis and Kelly for another decade before Ripa, after hosting with guest co-hosts for nearly a year, was paired with former NFL defensive end Michael Strahan.\n\nThe franchise has had longstanding success and has won the Daytime Emmy Award for Outstanding Talk Show and Outstanding Talk Show Hosts.",
      "origin_country": [
        "US"
      ]
    },
    {
      "credit_id": "52571b96760ee3776a1a529a",
      "original_name": "Ed",
      "id": 1926,
      "genre_ids": [
        35,
        18
      ],
      "character": "Ed Stevens",
      "name": "Ed",
      "poster_path": "/dkbqibIYSx2wtQRCF37O5Vnnjx8.jpg",
      "vote_count": 25,
      "vote_average": 7.6,
      "popularity": 7.734,
      "episode_count": 83,
      "original_language": "en",
      "first_air_date": "2000-10-08",
      "backdrop_path": null,
      "overview": "After his wife leaves him and he's fired from his job at a high-profile New York city law firm, Ed Stevens moves back to his small hometown of Stuckeyville where he buys the local bowling alley and attempts to win the heart of his high school crush.",
      "origin_country": [
        "US"
      ]
    },
    {
      "credit_id": "52572a2e760ee3776a2c69c3",
      "original_name": "The Daily Show with Trevor Noah",
      "id": 2224,
      "genre_ids": [
        35,
        10763
      ],
      "character": "",
      "name": "The Daily Show with Trevor Noah",
      "poster_path": "/qRjwk0yzkftRHgKJlonm8Gaj7n.jpg",
      "vote_count": 282,
      "vote_average": 6.4,
      "popularity": 58.364,
      "episode_count": 2,
      "original_language": "en",
      "first_air_date": "1996-07-22",
      "backdrop_path": "/uyilhJ7MBLjiaQXboaEwe44Z0jA.jpg",
      "overview": "Trevor Noah and The World's Fakest News Team tackle the biggest stories in news, politics and pop culture.",
      "origin_country": [
        "US"
      ]
    },
    {
      "credit_id": "52577134760ee36aaa494977",
      "original_name": "Late Night with Conan O'Brien",
      "original_language": "en",
      "id": 4573,
      "character": "",
      "name": "Late Night with Conan O'Brien",
      "origin_country": [
        "US"
      ],
      "vote_count": 73,
      "backdrop_path": null,
      "popularity": 22.934,
      "episode_count": 5,
      "genre_ids": [
        35,
        10767
      ],
      "first_air_date": "1993-09-13",
      "vote_average": 7.3,
      "overview": "Late Night with Conan O'Brien is an American late-night talk show hosted by Conan O'Brien that aired 2,725 episodes on NBC between 1993 and 2009. The show featured varied comedic material, celebrity interviews, and musical and comedy performances. Late Night aired weeknights at 12:37 am Eastern/11:37 pm Central and 12:37 am Mountain in the United States. From 1993 until 2000, Andy Richter served as O'Brien's sidekick; following his departure, O'Brien was the show's sole featured performer. The show's house musical act was The Max Weinberg 7, led by E Street Band drummer Max Weinberg.\n\nThe second incarnation of NBC's Late Night franchise, O'Brien's debuted in 1993 after David Letterman, who hosted the first incarnation of Late Night, moved to CBS to host Late Show opposite The Tonight Show. In 2004, as part of a deal to secure a new contract, NBC announced that O'Brien would leave Late Night in 2009 to succeed Jay Leno as the host of The Tonight Show. Jimmy Fallon began hosting his version of Late Night on March 2, 2009.",
      "poster_path": "/rz0QVhcZ01BjFomNXOHMTF8OyyP.jpg"
    },
    {
      "credit_id": "525869aa760ee3466119bf7f",
      "original_name": "The Outer Limits",
      "id": 21561,
      "genre_ids": [
        18,
        10765
      ],
      "character": "",
      "name": "The Outer Limits",
      "poster_path": "/pi6uo8huONeyuxcliK7o6jAc4k4.jpg",
      "vote_count": 104,
      "vote_average": 7.9,
      "popularity": 11.235,
      "episode_count": 1,
      "original_language": "en",
      "first_air_date": "1995-03-26",
      "backdrop_path": "/h8Xtv63fpib02lCvPStQqsGzPIv.jpg",
      "overview": "The Outer Limits is an anthology series of distinct story episodes, sometimes with a plot twist at the end. Unlike the original incarnation of the series, which was a pure anthology with each episode completely unrelated to the others, the revival series maintained an anthology format, but occasionally featured recurring story elements that were often tied together during season-finale clip shows.",
      "origin_country": [
        "CA",
        "US"
      ]
    },
    {
      "credit_id": "5253897319c29579402368d7",
      "original_name": "Cold Squad",
      "id": 597,
      "genre_ids": [
        18
      ],
      "character": "",
      "name": "Cold Squad",
      "poster_path": "/osBRrzhK7RntjQyagnkK5fyb1xP.jpg",
      "vote_count": 3,
      "vote_average": 6,
      "popularity": 8.952,
      "episode_count": 1,
      "original_language": "en",
      "first_air_date": "1998-01-23",
      "backdrop_path": null,
      "overview": "Cold Squad is a Canadian police procedural television series first broadcast in 1998 that followed the investigations of a part of the Vancouver Police Department Homicide Division tasked with solving cold cases, the titular Cold Squad, as led by Sergeant Ali McCormick.\n\nThe cast of Cold Squad was diverse and changing, McCormick being the only character to appear in all 7 seasons. Some notable series regulars include Detective Tony Logozzo in seasons 1-2, Sgt. Frank Coscarella in seasons 3-4, Sgt. Len Harper in seasons 5-7, Insp. Vince Schneider season 1, Insp. Simon Ross season 2, Insp. Andrew Pawlachuk seasons 3-7, Det. Mickey Kollander seasons 3-6, Det. Nicco Sevallis seasons 3-6, Christine Wren seasons 4-7, as well as Det. Samantha Walters and Const. Ray Chase in season 7.\n\nBetween the second and third seasons, almost the entire on-screen cast other than Julie Stewart were replaced. This along with the new sets, a significant revamp of the credits and theme music, and even having McCormick's hair change from auburn to dirty-blonde all contributed to a considerable reworking of the series.",
      "origin_country": [
        "CA"
      ]
    },
    {
      "credit_id": "52571e7e760ee3776a1d751b",
      "original_name": "Sports Night",
      "original_language": "en",
      "id": 2003,
      "character": "",
      "name": "Sports Night",
      "origin_country": [
        "US"
      ],
      "vote_count": 22,
      "backdrop_path": null,
      "popularity": 5.289,
      "episode_count": 1,
      "genre_ids": [
        35
      ],
      "first_air_date": "1998-09-22",
      "vote_average": 7.4,
      "overview": "The offbeat cast and crew of a sports news show deal with professional, personal, and ethical challenges while functioning in a pressure-cooker work environment.",
      "poster_path": "/zIQdj3rmx036qCNYcZlLvmqcCPW.jpg"
    },
    {
      "credit_id": "52572824760ee3776a28bb78",
      "original_name": "The View",
      "id": 2221,
      "genre_ids": [
        10767
      ],
      "character": "Himself",
      "name": "The View",
      "poster_path": "/zn5ZtKXYo8XOoXUgtQxw7q2CjVt.jpg",
      "vote_count": 45,
      "vote_average": 4.1,
      "popularity": 21.455,
      "episode_count": 3,
      "original_language": "en",
      "first_air_date": "1997-08-11",
      "backdrop_path": "/dxmA9vD0yXhS2PJLA8R51PIzJLC.jpg",
      "overview": "ABC Daytime's morning chatfest, currently featuring Whoopi Goldberg, Joy Behar, Sunny Hostin, Meghan McCain, and Abby Huntsman, discussing the most exciting events of the day. Hot topics in the news, the best experts in their field, celebrity interviews and general entertainment are all part of The View.",
      "origin_country": [
        "US"
      ]
    },
    {
      "credit_id": "52576861760ee36aaa3a7554",
      "original_name": "Love Monkey",
      "id": 4412,
      "genre_ids": [
        35,
        18
      ],
      "character": "",
      "name": "Love Monkey",
      "poster_path": "/v7LxXX1mEK26dAJP15ASyUmIynb.jpg",
      "vote_count": 4,
      "vote_average": 7.5,
      "popularity": 2.212,
      "episode_count": 8,
      "original_language": "en",
      "first_air_date": "2006-01-17",
      "backdrop_path": null,
      "overview": "Love Monkey is a television series created by Michael Rauch and based on a book of the same name, by Kyle Smith. It starred Tom Cavanagh as a 30-something, single, record executive who navigated the tumultuous and highly amusing waters of work and dating in New York City.\n\nIts first episode aired on January 17, 2006 on CBS, attracting an audience of about 8.6 million viewers. By its third episode on February 7, viewership was down to 6.2 million, and CBS pulled it from the schedule, with no plans for its return.\n\nAt the end of March, VH1 announced plans to re-broadcast the three episodes broadcast on CBS and air the five remaining unaired episodes. The last episode aired on May 16, 2006 on VH1.\n\nCBS has one episode available free for online viewing via its new Innertube website and intends to make the other 7 episodes available for viewing there as well.\n\nAs it was bought for syndication by VH1, it now airs on MuchMoreMusic in Canada.\n\nIn the summers of 2009 and 2010, the series was shown on the Universal HD cable network.\n\nIt was a co-production of Paramount Television and Sony Pictures Television.",
      "origin_country": [
        "US"
      ]
    },
    {
      "credit_id": "52585099760ee34661046d53",
      "original_name": "Trust Me",
      "original_language": "en",
      "id": 17271,
      "character": "",
      "name": "Trust Me",
      "origin_country": [
        "US"
      ],
      "vote_count": 4,
      "backdrop_path": null,
      "popularity": 2.791,
      "episode_count": 13,
      "genre_ids": [
        18,
        35
      ],
      "first_air_date": "2009-01-26",
      "vote_average": 7.5,
      "overview": "The series revolves around Rothman, Greene, and Moore, a fictional advertising firm. The storylines center on the difficulties of securing accounts and the characters' personal lives.",
      "poster_path": null
    },
    {
      "credit_id": "52588f6e760ee346614fc68f",
      "original_name": "The Capture of the Green River Killer",
      "id": 28599,
      "genre_ids": [
        99,
        18
      ],
      "character": "Dave Reichert",
      "name": "The Capture of the Green River Killer",
      "poster_path": "/tawUkWbLQ4ZGOAfLeX9rEVR1LP1.jpg",
      "vote_count": 10,
      "vote_average": 7.1,
      "popularity": 2.806,
      "episode_count": 2,
      "original_language": "en",
      "first_air_date": "2008-03-30",
      "backdrop_path": "/xVbeUz4W2Z8WJMiYhKZRZKfjU8Z.jpg",
      "overview": "The Capture of the Green River Killer is a 2008 2-part television film that first aired on Lifetime Television and tells the story of the Green River killer serial murders between 1982 and 1998.\n\nThe film was named one of the top 10 television productions of 2008 by Variety and was twice nominated for a 2008 Gemini Award for best direction and for best costuming. Lifetime's premiere of The Capture of the Green River Killer miniseries delivered two million viewers, making it 10-year-old Lifetime Movie Network's most-watched telecast ever.",
      "origin_country": [
        "CA"
      ]
    },
    {
      "credit_id": "53cc90adc3a36877670021b1",
      "original_name": "Blue Bloods",
      "id": 32692,
      "genre_ids": [
        80,
        18
      ],
      "character": "Mickey",
      "name": "Blue Bloods",
      "poster_path": "/9J2yrEANuY6bnyVweI4k039Q45T.jpg",
      "vote_count": 315,
      "vote_average": 7.3,
      "popularity": 40.796,
      "episode_count": 1,
      "original_language": "en",
      "first_air_date": "2010-09-24",
      "backdrop_path": "/jKyyvxBFpss1Ww0bIUQvDqQqIAI.jpg",
      "overview": "A drama about a multi-generational family of cops dedicated to New York City law enforcement. Frank Reagan is the New York Police Commissioner and heads both the police force and the Reagan brood. He runs his department as diplomatically as he runs his family, even when dealing with the politics that plagued his unapologetically bold father, Henry, during his stint as Chief.",
      "origin_country": [
        "US"
      ]
    },
    {
      "credit_id": "551a4878c3a36824f8000aa9",
      "original_name": "The Following",
      "id": 45094,
      "genre_ids": [
        80,
        18
      ],
      "character": "Kingston Tanner",
      "name": "The Following",
      "poster_path": "/jNuBdkD4EP1FzTafwdHt4cJ6VQy.jpg",
      "vote_count": 259,
      "vote_average": 6.7,
      "popularity": 20.283,
      "episode_count": 4,
      "original_language": "en",
      "first_air_date": "2013-01-21",
      "backdrop_path": "/2HpYUipbaIgYhcO3PkllGF9xy5D.jpg",
      "overview": "Notorious serial killer Joe Carroll, after being found guilty of murdering 14 female students on the Virginia college campus where he taught literature, escapes from death row. The FBI calls former agent Ryan Hardy to consult on the case, as he was the one responsible for Carroll’s capture in 2003. Ryan, working closely with an FBI team, including Mike Weston and FBI Specialist Debra Parker, piece together the ever-growing web of murders orchestrated by the devious Carroll.",
      "origin_country": [
        "US"
      ]
    },
    {
      "credit_id": "52577016760ee36aaa46e8ed",
      "original_name": "Scrubs",
      "id": 4556,
      "genre_ids": [
        35
      ],
      "character": "Dan Dorian",
      "name": "Scrubs",
      "poster_path": "/u1z05trCA7AuSuDhi365grwdos1.jpg",
      "vote_count": 801,
      "vote_average": 7.9,
      "popularity": 46.651,
      "episode_count": 7,
      "original_language": "en",
      "first_air_date": "2001-10-02",
      "backdrop_path": "/cqkGeSKrX7hKGYdsr3qiq8THyDo.jpg",
      "overview": "In the unreal world of Sacred Heart Hospital, John \"J.D\" Dorian learns the ways of medicine, friendship and life.",
      "origin_country": [
        "US"
      ]
    },
    {
      "credit_id": "537524bfc3a3681edb00015f",
      "original_name": "The Flash",
      "id": 60735,
      "genre_ids": [
        18,
        10765
      ],
      "character": "Harrison Wells",
      "name": "The Flash",
      "poster_path": "/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg",
      "vote_count": 5004,
      "vote_average": 7.4,
      "popularity": 106.699,
      "episode_count": 133,
      "original_language": "en",
      "first_air_date": "2014-10-07",
      "backdrop_path": "/jC1KqsFx8ZyqJyQa2Ohi7xgL7XC.jpg",
      "overview": "After a particle accelerator causes a freak storm, CSI Investigator Barry Allen is struck by lightning and falls into a coma. Months later he awakens with the power of super speed, granting him the ability to move through Central City like an unseen guardian angel. Though initially excited by his newfound powers, Barry is shocked to discover he is not the only \"meta-human\" who was created in the wake of the accelerator explosion -- and not everyone is using their new powers for good. Barry partners with S.T.A.R. Labs and dedicates his life to protect the innocent. For now, only a few close friends and associates know that Barry is literally the fastest man alive, but it won't be long before the world learns what Barry Allen has become...The Flash.",
      "origin_country": [
        "US"
      ]
    },
    {
      "credit_id": "58dbb7f5c3a3687d4700b9ff",
      "original_name": "Stories from the Vaults",
      "id": 16642,
      "genre_ids": [
        99
      ],
      "character": "Himself - Host",
      "name": "Stories from the Vaults",
      "poster_path": null,
      "vote_count": 0,
      "vote_average": 0,
      "popularity": 0.688,
      "episode_count": 8,
      "original_language": "en",
      "first_air_date": "2007-09-03",
      "backdrop_path": null,
      "overview": "Hosted by actor Tom Cavanagh, Stories from the Vaults is a series of 30-minute shows featuring a behind-the-scenes look at the Smithsonian Institution, the world's largest museum complex. The new series, produced by Caragol Wells Productions, showcases the Smithsonian's rarest treasures as Tom Cavanagh meets with the experts behind the Smithsonian and discusses what it takes to preserve these precious artifacts for the generations to come. Stories from the Vaults debuted September 2007 on Smithsonian Networks. The second season premiered Sunday July 12th, 2009.",
      "origin_country": []
    },
    {
      "credit_id": "5a0f829f92514138ea01de81",
      "original_name": "Supergirl",
      "id": 62688,
      "genre_ids": [
        28,
        12,
        18,
        878
      ],
      "character": "Harrison Wells",
      "name": "Supergirl",
      "poster_path": "/4ka8vAzAFUZFKxWyfGfwVcSXuZo.jpg",
      "vote_count": 1932,
      "vote_average": 6.8,
      "popularity": 62.668,
      "episode_count": 1,
      "original_language": "en",
      "first_air_date": "2015-10-26",
      "backdrop_path": "/mmprryb2r0X8u9JkZCnaJIzyYX4.jpg",
      "overview": "Twenty-four-year-old Kara Zor-El, who was taken in by the Danvers family when she was 13 after being sent away from Krypton, must learn to embrace her powers after previously hiding them. The Danvers teach her to be careful with her powers, until she has to reveal them during an unexpected disaster, setting her on her journey of heroism.",
      "origin_country": [
        "US"
      ]
    },
    {
      "credit_id": "5a10ae00c3a3686289038052",
      "original_name": "Arrow",
      "id": 1412,
      "genre_ids": [
        80,
        18,
        9648,
        10759
      ],
      "character": "Dr. Harry Wells / Eobard Thawne / Reverse-Flash",
      "name": "Arrow",
      "poster_path": "/gKG5QGz5Ngf8fgWpBsWtlg5L2SF.jpg",
      "vote_count": 3668,
      "vote_average": 6.3,
      "popularity": 98.941,
      "episode_count": 1,
      "original_language": "en",
      "first_air_date": "2012-10-10",
      "backdrop_path": "/fFT7T9y9NVRdcdVh81roVrJBcDh.jpg",
      "overview": "Spoiled billionaire playboy Oliver Queen is missing and presumed dead when his yacht is lost at sea. He returns five years later a changed man, determined to clean up the city as a hooded vigilante armed with a bow.",
      "origin_country": [
        "US"
      ]
    },
    {
      "credit_id": "5a1781a2925141032400a15e",
      "original_name": "DC's Legends of Tomorrow",
      "id": 62643,
      "genre_ids": [
        18,
        10759,
        10765
      ],
      "character": "Harrison Wells",
      "name": "DC's Legends of Tomorrow",
      "poster_path": "/yJ3xE11IDIe29LJsSbhzwt5Oxtd.jpg",
      "vote_count": 1172,
      "vote_average": 6.9,
      "popularity": 43.701,
      "episode_count": 2,
      "original_language": "en",
      "first_air_date": "2016-01-21",
      "backdrop_path": "/be8fOACxsVyaX6lZLlQOWNqF0g2.jpg",
      "overview": "When heroes alone are not enough ... the world needs legends. Having seen the future, one he will desperately try to prevent from happening, time-traveling rogue Rip Hunter is tasked with assembling a disparate group of both heroes and villains to confront an unstoppable threat — one in which not only is the planet at stake, but all of time itself. Can this ragtag team defeat an immortal threat unlike anything they have ever known?",
      "origin_country": [
        "US"
      ]
    },
    {
      "credit_id": "5c107dde92514147aa0df727",
      "original_name": "Arrow",
      "id": 1412,
      "genre_ids": [
        80,
        18,
        9648,
        10759
      ],
      "character": "Eobard Thawne / Reverse-Flash",
      "name": "Arrow",
      "poster_path": "/gKG5QGz5Ngf8fgWpBsWtlg5L2SF.jpg",
      "vote_count": 3668,
      "vote_average": 6.3,
      "popularity": 98.941,
      "episode_count": 1,
      "original_language": "en",
      "first_air_date": "2012-10-10",
      "backdrop_path": "/fFT7T9y9NVRdcdVh81roVrJBcDh.jpg",
      "overview": "Spoiled billionaire playboy Oliver Queen is missing and presumed dead when his yacht is lost at sea. He returns five years later a changed man, determined to clean up the city as a hooded vigilante armed with a bow.",
      "origin_country": [
        "US"
      ]
    },
    {
      "credit_id": "5de51535a7e36300196d65e2",
      "original_name": "Supergirl",
      "id": 62688,
      "genre_ids": [
        28,
        12,
        18,
        878
      ],
      "character": "Harrison 'Nash' Wells / Pariah",
      "name": "Supergirl",
      "poster_path": "/4ka8vAzAFUZFKxWyfGfwVcSXuZo.jpg",
      "vote_count": 1932,
      "vote_average": 6.8,
      "popularity": 62.668,
      "episode_count": 2,
      "original_language": "en",
      "first_air_date": "2015-10-26",
      "backdrop_path": "/mmprryb2r0X8u9JkZCnaJIzyYX4.jpg",
      "overview": "Twenty-four-year-old Kara Zor-El, who was taken in by the Danvers family when she was 13 after being sent away from Krypton, must learn to embrace her powers after previously hiding them. The Danvers teach her to be careful with her powers, until she has to reveal them during an unexpected disaster, setting her on her journey of heroism.",
      "origin_country": [
        "US"
      ]
    },
    {
      "credit_id": "5de5a6df3faba00015110718",
      "original_name": "Batwoman",
      "original_language": "en",
      "id": 89247,
      "character": "Harrison 'Nash' Wells (uncredited)",
      "name": "Batwoman",
      "origin_country": [
        "US"
      ],
      "vote_count": 535,
      "backdrop_path": "/spc5mNkW2daK1ob7Z7jqNkSlKS2.jpg",
      "popularity": 19.627,
      "episode_count": 1,
      "genre_ids": [
        10759,
        10765,
        9648,
        80
      ],
      "first_air_date": "2019-10-06",
      "vote_average": 7.2,
      "overview": "Kate Kane, armed with a passion for social justice and a flair for speaking her mind, soars onto the streets of Gotham as Batwoman, an out lesbian and highly trained street fighter primed to snuff out the failing city's criminal resurgence. But don't call her a hero yet. In a city desperate for a savior, Kate must overcome her own demons before embracing the call to be Gotham's symbol of hope",
      "poster_path": "/jnaimWkIVSD9IInmZPyLYarSvvc.jpg"
    },
    {
      "credit_id": "5e0c6d3c68b1ea00187c3f93",
      "original_name": "American Dad!",
      "id": 1433,
      "genre_ids": [
        16,
        35
      ],
      "character": "",
      "name": "American Dad!",
      "poster_path": "/1aklTBd36LFiFNroOSiherLvLdu.jpg",
      "vote_count": 933,
      "vote_average": 6.4,
      "popularity": 72.604,
      "episode_count": 1,
      "original_language": "en",
      "first_air_date": "2005-02-06",
      "backdrop_path": "/2OeS0YPFpqCmi7SA5W6aOPIChc3.jpg",
      "overview": "The series focuses on an eccentric motley crew that is the Smith family and their three housemates: Father, husband, and breadwinner Stan Smith; his better half housewife, Francine Smith; their college-aged daughter, Hayley Smith; and their high-school-aged son, Steve Smith. Outside of the Smith family, there are three additional main characters, including Hayley's boyfriend turned husband, Jeff Fischer; the family's man-in-a-goldfish-body pet, Klaus; and most notably the family's zany alien, Roger, who is \"full of masquerades, brazenness, and shocking antics.\"",
      "origin_country": [
        "US"
      ]
    },
    {
      "credit_id": "5e2d31e2532acb0019537cc6",
      "original_name": "The Flash",
      "id": 60735,
      "genre_ids": [
        18,
        10765
      ],
      "character": "Pariah",
      "name": "The Flash",
      "poster_path": "/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg",
      "vote_count": 5004,
      "vote_average": 7.4,
      "popularity": 106.699,
      "episode_count": 1,
      "original_language": "en",
      "first_air_date": "2014-10-07",
      "backdrop_path": "/jC1KqsFx8ZyqJyQa2Ohi7xgL7XC.jpg",
      "overview": "After a particle accelerator causes a freak storm, CSI Investigator Barry Allen is struck by lightning and falls into a coma. Months later he awakens with the power of super speed, granting him the ability to move through Central City like an unseen guardian angel. Though initially excited by his newfound powers, Barry is shocked to discover he is not the only \"meta-human\" who was created in the wake of the accelerator explosion -- and not everyone is using their new powers for good. Barry partners with S.T.A.R. Labs and dedicates his life to protect the innocent. For now, only a few close friends and associates know that Barry is literally the fastest man alive, but it won't be long before the world learns what Barry Allen has become...The Flash.",
      "origin_country": [
        "US"
      ]
    },
    {
      "credit_id": "5e8e16519f0e190018f46caf",
      "original_name": "The Sentinel",
      "id": 1654,
      "genre_ids": [
        80,
        18,
        10759
      ],
      "character": "Bill Collins",
      "name": "The Sentinel",
      "poster_path": "/pfw3BfbhLcrEMxNvKj9rnxndvlg.jpg",
      "vote_count": 17,
      "vote_average": 6.8,
      "popularity": 7.596,
      "episode_count": 1,
      "original_language": "en",
      "first_air_date": "1996-03-20",
      "backdrop_path": null,
      "overview": "The Sentinel is a Canadian-produced television series.  In the jungles of peru, the fight for survival heightened his senses. Now, Detective Jim Ellison is a sentinel in the fight for justice. Anthropologist Blair Sandburg works side by side with Jim, helping him develop these senses.",
      "origin_country": [
        "US",
        "CA"
      ]
    }
  ],
  "crew": [
    {
      "id": 1926,
      "department": "Directing",
      "original_language": "en",
      "episode_count": 3,
      "job": "Director",
      "overview": "After his wife leaves him and he's fired from his job at a high-profile New York city law firm, Ed Stevens moves back to his small hometown of Stuckeyville where he buys the local bowling alley and attempts to win the heart of his high school crush.",
      "origin_country": [
        "US"
      ],
      "original_name": "Ed",
      "genre_ids": [
        35,
        18
      ],
      "name": "Ed",
      "first_air_date": "2000-10-08",
      "backdrop_path": null,
      "popularity": 7.734,
      "vote_count": 25,
      "vote_average": 7.6,
      "poster_path": "/dkbqibIYSx2wtQRCF37O5Vnnjx8.jpg",
      "credit_id": "52571b78760ee3776a1a340b"
    },
    {
      "id": 60735,
      "department": "Directing",
      "original_language": "en",
      "episode_count": 3,
      "job": "Director",
      "overview": "After a particle accelerator causes a freak storm, CSI Investigator Barry Allen is struck by lightning and falls into a coma. Months later he awakens with the power of super speed, granting him the ability to move through Central City like an unseen guardian angel. Though initially excited by his newfound powers, Barry is shocked to discover he is not the only \"meta-human\" who was created in the wake of the accelerator explosion -- and not everyone is using their new powers for good. Barry partners with S.T.A.R. Labs and dedicates his life to protect the innocent. For now, only a few close friends and associates know that Barry is literally the fastest man alive, but it won't be long before the world learns what Barry Allen has become...The Flash.",
      "origin_country": [
        "US"
      ],
      "original_name": "The Flash",
      "genre_ids": [
        18,
        10765
      ],
      "name": "The Flash",
      "first_air_date": "2014-10-07",
      "backdrop_path": "/jC1KqsFx8ZyqJyQa2Ohi7xgL7XC.jpg",
      "popularity": 106.699,
      "vote_count": 5004,
      "vote_average": 7.4,
      "poster_path": "/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg",
      "credit_id": "58dbb643c3a3687d6300b0a8"
    }
  ],
  "id": 59216
};