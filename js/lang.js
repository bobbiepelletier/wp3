function Language(game) {
	this.game = game;
	this.current = this.en;
}


Language.prototype = {
	set: function set(lang) {
		if (this[lang] != null)	{
			this.game.save.savegame.lang = lang;
			this.current = this[lang];
			return true;
		} else {
			return false;
		}
	}
};


Language.prototype.en = {
	menu: {
		start: "Start Game",
		continue: "Continue",
		credits: "Credits",
		tw: "Trigger Warning",
		lang: "Language",
		why: "Why",
		back: "Back to Hypnotic Owl",
		reset: "Reset Game"
	},

	backToMenu: "Back to Menu",
	continue: "Continue",
	resetGame: "Reset Game",

	tw: {
		tw: "Trigger Warning",
		para1: [
			"This is difficult. On the one hand, this experience works best if left unspoiled and unhinted at. I can't, however, let people who might have a strong and distressing emotional reaction to it play it without warning them.",
			"So let's get this out of the way first:",
			"If you just clicked the link here out of curiosity or you know for sure that there are no topics that might cause you emotional distress, please turn back and play the game first. These are major spoilers, and you can always come back later if you're so inclined."
		],
		para2: [
			"But if you are concerned about certain topics coming up, screw the spoilers. Your personal well-being is way more important, and if these are a triggering topics for you, then you really don't wanna play this. Trust me.",
			"To spoil as little as possible, in case it's not triggering for you, I will tell you what the topics are in two steps: First the general areas, then in more detail how they appear in the game.",
			"Remember, these are still major spoilers, so turn back as soon as you feel certain that it won't affect you. But if you have even the slightest doubt whether it might, seriously, screw the spoilers. It's not worth it."
		],
		readTW: "Read Trigger Warning",
		warning: [
			"TW: R*pe",
			"If this is not a distressing topic for you, return to the menu.",
			"If this is distressing to you, in any shape or form, quit the game. You're not missing anything.",
			"If this might be distressing, depending on how it comes up, I will outline that in more detail in the next stage. Please be aware that, while I try to describe it in plain and simple terms, this could still be triggering for you."
		],
		readFull: "Read Full Outline",
		full: [
			"<b>The Day the Laughter Stopped</b> is a game about rape, told from the perspective of a 14-year-old girl. She describes, in a detached, almost analytical manner, how she meets an older boy in school, whom she becomes friends with and who one evening takes it further than she is ready for. It's not violent in a physical sense; she freezes, is too scared to speak, and he doesn't stop. It does, however, put you in her place and, given I've done my job right, provokes a strong reaction.<br/><br/>",
			"You can read more about why I did this <a href='http://hypnoticowl.com/the-day-the-laughter-stopped/' target='_blank'>here</a>, but for now, just know that this is loosely based on the experience of someone I know, and though she would certainly be the most valuable source for feedback on how accurately I described it and how effectively it tells the story, I don't want her anywhere near this game.",
			"What I'm trying to say is, if you're a survivor, I'd rather you didn't play it. Or have someone you trust play it first and tell you if they'd recommend it for you. Or, if you're really curious, have them describe the game to you. Just take care of yourself, m'kay?"
		],
		contact: "If you have comments or questions, feel free to contact me:"
	},

	credits: {
		written: "written by"
	},

	story: {
		start: {
			para1: [
				"It was a rainy day in late September when he first noticed me. My friends and I were coming from gym class and hurried across the school yard to get out of the cold. I saw him standing in front of the southern entrance, where the 10th graders were allowed to smoke.",
				"I noticed that he was looking at me all the way from the gym hall to the building. My heart skipped a beat. He was tall, handsome, and all of my friends had a crush on him. I always thought he was way too cool for me. He was almost a grown man, and I was only 14.",
				"Before I entered the school building, I stopped for a moment and looked back at him. There he stood, a cigarette in his hand, his eyes still fixed on me."
			],
			opt1: "Wave",
			optPara1: [
				"I started to raise a hand, shyly and briefly, and attempted an ultimately awkward smile. He smiled back at me, and my heart jumped."
			],
			opt2: "Keep Walking",
			optPara2: [
				"As I was about to turn to head inside, he smiled at me and gave me the slightest nod. My ears were burning when I went up the stairs."
			]
		},

		invitation: {
			para1: [
				"A few weeks later, my best friend and I ran into him in the hall on our way to science class. It was the first time he spoke to any of us. We stood there and chatted for a while. My friend did most of the talking. I was too nervous to even look at him.",
				"When the bell rang, he told us about a party at a friend's house the coming weekend. He said he liked talking to us. He said we were cooler than he thought. Then he asked us if we wanted to come."
			],
			opt1: "Accept",
			optPara1: [
				"Hesitantly, I agreed. These guys were so much older than us and we wouldn't know anybody there, but my friend said it would be fine."
			],
			opt2: "Decline",
			optPara2: [
				"I wasn't comfortable with the idea. These guys were so much older than us and we wouldn't know anybody there, but before I could say anything, my friend accepted for the both of us."
			],
			para2: [
				"I told her I wasn't sure my parents would allow it, and she suggested telling our parents we were staying at each other's place. I didn't like lying to my parents, but she convinced me it was for the best. And, after all, the important part was that he thought we were cool, and that he wanted to hang out with us.",
				"I nodded, and spent the rest of my classes daydreaming about the weekend."
			]
		},

		party: {
			para1: [
				"We arrived at the party at 8.30pm. Someone we never met opened the door and let us in. There were fifteen or twenty people present. We tried to blend in as best as we could, but it seemed pointless; it was obvious we didn't belong. The minutes we spent standing awkwardly in the corridor felt like an eternity.",
				"I was about to beg my friend to leave when he found us. A big, warm smile on his face, he came over and hugged us. I didn't know what to do. I was caught off-guard and just stood there, stiff as a board.",
				"He guided us toward the couch and offered us the last free seats. We sat down, and he handed us each a drink."
			],
			opt1: "Drink",
			optPara1: [
				"My friend took the drink without hesitation, and I followed suit. I was nervous. I had never tried alcohol before.",
				"The first sip tasted strange. I tried to suppress a shudder. My friend looked like she had done it a thousand times."
			],
			opt2: "Don't Drink",
			optPara2: [
				"I didn't want to look like a loser and took the drink. I brought it up to my mouth and the smell alone made my stomach turn. I tried desperately to look relaxed, holding the drink casually in my hand as if I had just taken a sip."
			],
			para2: [
				"We started talking. I did my best to keep the conversation going, hoping it would distract them from the glass in my hand, hoping they wouldn't notice.",
				"But he was nice. He introduced us to some of his friends, and they joked and goofed around, and I slowly started to relax and feel comfortable around them."
			]
		},

		balcony: {
			para1: [
				"Later that night, after we had joined some of the guys out on the balcony for their smoke, he and I stayed behind alone. We talked for a long time. I told him about the situation with my parents, and he told me about his ex-girlfriend and how she had left him for his best friend.",
				"Suddenly, he leaned in and tried to kiss me."
			],
			opt1: "Let Him",
			optPara1: [
				"Before I knew what was happening, his lips were pressed against mine. I didn't know what to do. I was shocked and embarrassed and confused all at once. The force of the kiss made me lose my balance, and I stumbled back."
			],
			opt2: "Pull Back",
			optPara2: [
				"In a knee-jerk reaction, I stumbled back and stared at him, shocked. I didn't understand what had just happened; all I knew was that I suddenly felt very self-conscious and ashamed."
			],
			para2: [
				"He laughed. He said that he was drunk and that he didn't mean anything by it. He said he understood if I didn't want to do this and that he respected me even more for it. He said he appreciated me as a friend. Though still confused and ashamed, I was also relieved he said it.",
				"Quickly, I changed the topic and prayed it wouldn't come up again."
			]
		},

		card: {
			para1: [
				"Whenever I saw him in school during the next weeks, I was anxious he would mention our encounter on the balcony. But he didn't. We just chatted in the halls about our classes, and teachers, and grades, and upcoming exams. He was nice, and I slowly started to forget what had happened. Sometimes I even wondered if it truly did happen, or if I had just imagined it.",
				"The day before Christmas break, I found a card in my locker. It had a picture of a cute little kitten in a red Santa hat that said:",
				"'This made me think of you, and I wanted to wish you a purrrfect Christmas. I hope you get everything you wished for!'",
				"My head was glowing red. My best friend saw me and snatched the card out of my hands. She started giggling and teased me about my secret lover. I told her we were just friends. She asked me if I was going to send him something back."
			],
			opt1: "Send a Card",
			optPara1: [
				"I hadn't thought about it until now, and now it was too late to buy a card. Instead, I decided to make him one in class.",
				"I thought long about what I could write and started over at least a hundred times. In the end, I just drew a picture of us standing under a huge Christmas tree and wrote, 'Merry Christmas!'",
				"I felt stupid and childish when I got home."
			],
			opt2: "Don't Send a Card",
			optPara2: [
				"I hadn't thought about it until now, but it was too late to buy a card anyway. During my last classes, I tried to write him a note instead. I started over at least a hundred times, but nothing good came of it and I went home without responding at all."
			]
		},

		holdinghands: {
			para1: [
				"During the winter months, we started to see more of each other. He came to hang out with us on the school yard and tagged along when we went shopping in the city. My friends liked him. He was witty and charming and we all had a lot of fun together. It felt good having him around. At times, I was a little intimidated because he was so smart and mature, but he always made me feel at ease and acted like he didn't care that I was not.",
				"Sometimes, when we were alone, he tried to hold my hand."
			],
			opt1: "Let Him",
			optPara1: [
				"I didn't know what to do. It felt strange at first, and again I felt uncomfortable and a little embarrassed. But he acted like it was no big deal, and eventually I became more relaxed. It was just something we did."
			],
			opt2: "Pull Away",
			optPara2: [
				"I didn't know what to do. I was uncomfortable and a little embarrassed, but I didn't want him to think I was a scared little child. I let him hold it for a while before pretending to look for something in my jacket. Afterward I kept my hands in my pockets so he couldn't grab it again, and prayed he wouldn't ask me about it."
			]
		},

		kiss: {
			para1: [
				"Spring came and the school year was about to end. We were spending a lot of time together, taking walks and talking for hours. For the first time in my life, I felt like somebody understood me. Not even my best friend knew what was going on inside me sometimes. I tried to talk to her about the sadness and the longing for something I couldn't name or explain, but she didn't understand. She tried, but her attempts at comforting me just left me feeling more alone than ever. But he understood. He felt the same way. He said it was an integral part of growing up, realizing what the world is truly like and longing for the bliss and the beauty of childhood innocence and the world they promised us. He said not many understood this and that I had a gentle soul.",
				"In school we saw each other more than ever, and tried to cross paths between every period. I had stopped trying to explain to my friends that we were not a couple, that what we had was so much more than that, more special than love. They teased me from time to time, but I didn't mind. They just didn't understand.",
				"His birthday came, and he invited all of us to the party at the lake he wanted to throw the next weekend. The weather was slowly getting warmer, and he said it was time to open party season. We had heard of the infamous lake parties, but had never been invited to one. We were still children then.",
				"After he talked to my friends, he held me back until they were gone and told me to meet him behind the school after my last period."
			],
			opt1: "Meet Him",
			optPara1: [
				"I was nervous when I went around the building to the spot he wanted to meet. There he stood, a cigarette in his hand, smiling as he watched me approach. He put the cigarette out."
			],
			opt2: "Go Home",
			optPara2: [
				"I was nervous. Something in the way he had said it made me uncomfortable, but I was afraid of what he would say the next day if I didn't show up.",
				"After class, I headed outside. I had decided to go home and tell him something had happened that made me forget, that I had gotten a bad grade or that my parents called me and told me to come home straight away.",
				"I was halfway across the school yard when I heard him call my name, and a moment later, he was next to me. He said he had been waiting for me, and before I could say anything, he took my hand and guided me to the back of the school building."
				],
			para2: [
				"We stood there awkwardly for a moment, facing each other. He said that he was the luckiest guy in the world. He said that I was the best thing that ever happened to him, and that this was the best birthday present ever.",
				"Then he kissed me."
			],
			opt3: "Let Him",
			opt4: "Pull Back",
			para3: [
				"I was in shock. Before I knew what was happening, he had pushed his tongue into my mouth. It tasted bitter and salty, and saliva was running down his tongue onto mine. My stomach turned and I tried to pull away, but my back was against the wall. He was pressed against me and I felt something strange on my leg.",
				"An eternity passed before he stopped, took my hand, and walked me to the bus stop."
			]
		},

		theday: {
			para1: [
				"The rest of the week I tried to wrap my head around what had happened. I didn't understand why he did it; I thought we were just friends. I tried to understand what I had done wrong, what I had missed. I avoided him as best as I could and hoped the weekend would never come.",
				"Then it was there. My best friend had come by to pick me up. She chattered the entire time, about the boy she had a crush on and about the excitement of finally being invited to a real, grown-up party. She told me she hoped her crush would be there and how she imagined they would end up together, snuggling under the stars after everyone had left.",
				"I felt sick. I was afraid of seeing him, afraid of what he might say. I didn't know what I was supposed to do now, what was expected of me. I didn't like kissing him, but I didn't want to lose my best friend. I hoped that it might not mean anything, that it was just because it was his birthday, something we did as friends, like holding hands.",
				"When we arrived at the lake, I felt light-headed and I could hear my heart pounding in my ears. There were many people there. Some from our school, some I recognized from the party, my friends. I sat with them and tried to act normal.",
				"After a while he found us. We congratulated him and he sat with us, talked, made jokes, laughed. Slowly, I started to calm down. He didn't mention anything that had happened and hadn't even touched or paid any special attention to me. It was almost like it never happened, like it was no big deal after all.",
				"When the sun began to set, his friends started barbecuing on the hibachis they brought. The air was soon filled with the smell of roasted beef and sausages, a smell that always made me think of the summers in my grandparents' garden. My friends were scattered among the many smaller groups that had formed, and while everyone else was busy, he came to me and asked me take a walk."
			],
			opt1: "Go With Him",
			optPara1: [
				"I was immediately scared he wanted to kiss me again or talk about what happened. My heart in my throat, I got up and followed him to the footpath that surrounded the lake."
			],
			opt2: "Refuse",
			optPara2: [
				"I was immediately scared he wanted to kiss me again or talk about what happened. My heart in my throat, I said I needed to check on my friends, but he said it wouldn't take long, that he just wanted to talk. He took my hand and guided me to the footpath that surrounded the lake."
			],
			para2: [
				"He held my hand tight as we walked along the path. I didn't want to be here. I was afraid of what he was going to say. I didn't want to talk, didn't want to talk about the kiss, about the thing I had felt pressed against my leg. I was ashamed. I wished we could just walk quietly like this forever. I wished we didn't have to talk.",
				"Suddenly he stopped and faced me. A moment later, his lips were pressed against mine."
			],
			opt3: "Let Him",
			optPara3: [
				"I froze. Before I knew what was happening, his tongue was in my mouth, bitter and salty, and I felt sick."
			],
			opt4: "Pull Away",
			optPara4: [
				"Before I knew what was happening, his tongue was in my mouth, bitter and salty, and I felt sick. I tried to pull away, but he held my head between his hands and kept it pressed against his."
			],
			para3: [
				"Then we were on the ground. He lay on top of me and continued to push his tongue down my throat. I felt something pressed against my leg."
			],
			opt5: "Stop Him",
			opt6: "Stay Still",
			optPara6: [
				"His hands went under my sweater and reached for my breasts, grabbing them hard. He started to breath harder and I felt him getting more and more excited."
			],
			opt7: "Push Him Away",
			opt8: "Remain Still",
			optPara8: [
				"He stopped and sat up. He opened the button of his pants and started to pull down mine. The ground was cold and damp. It was getting dark. He took off my slip and pulled his thing out of his pants."
			],
			opt9: "Fight Him Off",
			opt10: "Freeze Up",
			optPara10: [
				"I felt a sharp pain in my crotch as he entered me. I couldn't move. He started to push in and out. I heard laughing in the distance. I wondered what my parents would say if I got pregnant. He was panting heavily and drops of sweat fell onto my face. I just lay there, still and unmoving, as hours, days, years went by.",
				"And then it was over.",
				"He got up and put on his pants. I slowly sat up and looked for the clothes he had thrown aside. As he was buttoning up, he said, without looking at me, \"How about next time you loosen up a little?\"",
				"I put my pants on one leg at a time."
			]
		},

		end: {
			para1: [
				"I don't remember how I got home. My family was just about to eat dinner when I walked into the kitchen. My mom asked me why I was back so early. I told her I was tired. She set another plate for me.",
				"My dad and my brother were arguing. I ate bread. They asked me something. I must've answered; they kept talking. I wondered what my brother would say. I wondered what my mom would think of me. I wondered if my dad would still love me.",
				"I wondered if I should tell them."
			],
			opt1: "Tell Them What Happened",
			opt2: "Stay Silent",
			para2: [
				"After dinner I went up to my room. For a while, I just stood there silently amidst the lavender walls, the N*SYNC, Avril Lavigne, and Josh Hartnett posters, the bed with the dolls and teddy bears I had since I was four, the TV and the shelf with the video tapes, the desk and the dresser, decorated with photos, drawings, and stickers, the puzzle we had started on Christmas but never finished, the clothes scattered on the ground. I knew this room. I had seen it before. But it wasn't mine. It belonged to someone who didn't live here anymore. Someone I had known for a long time. Someone who had left, and left me behind.",
				"I stood in the middle of the room, until my parents went to sleep, until the lights went dark in the homes around us, until my legs wouldn't carry me no more and I couldn't hold back the tears any longer."
			],
			opt3: "Start Over",
			optPara3: [
				"There is no starting over. This happened."
			]
		}
	}
};

Language.prototype.de =
{
menu: {
start: "Spiel starten",
continue: "Spiel fortsetzen",
credits: "Credits",
tw: "Warnhinweise",
lang: "Spracheinstellungen",
why: "Warum?",
back: "Zurck zu Hypnotic Owl"
},

backToMenu: "Zurck zum Men",
continue: "Weiter",

tw: {
tw: "Warnhinweise",
para1: [
"Das ist schwierig. Einerseits funktioniert das Spielerlebnis am besten, wenn nichts zuvor verraten oder angedeutet wird. Allerdings kann ich diejenigen, die mglicherweise eine sehr heftige emotionale Reaktion dazu haben knnten, nicht einfach spielen lassen, ohne sie zu warnen.",
"Also machen wir es so:",
"Falls du nur aus Neugierde auf die Warnung geklickt hast oder dir sicher bist, dass es nichts gibt, was dich in ein emotionales Loch reien knnte, dann hr an dieser Stelle auf zu lesen und spiel zuerst das Spiel. Es folgen groe Spoiler, die du auch immer noch spter lesen kannst, wenn es dich interessiert."
],
para2: [
"Falls du dir aber Sorgen machst, dass Themen aufkommen knnten, die dich in eine Krise strzen knnten, dann vergiss die Spoiler. Dein persnliches Wohlempfinden ist wesentlich wichtiger, und falls diese Themen Auslser fr dich sein sollten, dann willst du das hier auch nicht spielen, glaub mir.",
"Um so wenig wie mglich zu verraten, fr den Fall, dass es doch kein Auslser fr dich ist, teile ich die Warnung in zwei Schritte auf: Als erstes die grobe Richtung, in die es geht, und dann etwas ausfhrlicher, wie genau sie im Spiel behandelt werden.",
"Trotzdem sind das immer noch massive Spoiler, also hr am besten auf zu lesen sobald du dir sicher bist, dass es keine schlimmere Wirkung auf dich haben wird. Falls du allerdings den noch so geringsten Zweifel hast, ernsthaft, vergiss die Spoiler. Das ist es nicht wert."
],
readTW: "Warnung lesen",
warning: [
"TW: V*rgew*ltigung",
"Falls das kein traumatisches Thema fr dich ist, gehe zurck zum Men.",
"Falls das doch ein traumatisches Thema fr dich ist, beende das Spiel. Du verpasst hier nichts.",
"Falls es traumatisch fr dich sein knnte, abhngig davon, wie es vorkommt, werde ich auf der nchsten Seite eine ausfhrlichere Zusammenfassung des Spiels geben. Sei dir aber bitte bewusst, dass auch wenn ich versuche, es so schlicht und einfach wie mglich zu beschreiben, es trotzdem triggernd fr dich sein knnte."
],
readFull: "Ausfhrliche Zusammenfassung lesen",
full: [
"<b>The Day the Laughter Stopped</b> ist ein Spiel, das sich mit Vergewaltigung beschftigt, erzhlt aus der Perspektive eines 14-jhrigen Mdchens. Sie beschreibt, auf eine distanzierte, fast schon analytische Weise, wie sie in der Schule einen lteren Jungen kennenlernt, mit dem sie sich anfreundet und der eines Abends weiter geht, als sie bereit ist. Es ist nicht brutal im physischen Sinne; sie erstarrt, ist zu verngstigt um sich zu wehren, und er hrt nicht auf. Es versetzt den Spieler allerdings in ihre Lage und knnte, sofern ich meinen Job ordentlich gemacht habe, eine starke emotionale Reaktion hervorrufen.<br/><br/>",
"Du kannst mehr ber die Idee und meine Beweggrnde <a href='http://hypnoticowl.com/the-day-the-laughter-stopped/' target='_blank'>hier</a> nachlesen, aber fr jetzt solltest du wissen, dass es grob auf der Erfahrung einer Bekannten basiert und obwohl sie die das beste Feedback geben knnte, wie akkurat ich das Gefhl eingefangen habe und wie effektiv die Geschichte erzhlt wird, mchte ich sie nicht mal in der Nhe dieses Spiels sehen.",
"Was ich damit sagen will, ist, falls dir etwas hnliches zugestoen ist, wre es mir lieber, du spielst es nicht. Oder du lsst jemandem, dem du vertraust, zuerst spielen und entscheiden, ob sie es dir empfehlen wrden oder nicht. Oder lsst es dir von ihnen beschreiben, wenn du wirklich neugierig bist. Hauptsache du passt auf dich auf, m'kay?"
],
contact: "Bei Fragen oder Anmerkungen bin ich hier zu erreichen:"
},

credits: {
written: "Text & Programmierung",
translation: "Deutsche bersetzung",
author: "S. Morche"
},

story: {
start: {
para1: [
"Er bemerkte mich das erste Mal an einem verregneten Septembertag. Meine Freunde und ich kamen gerade vom Sportunterricht und rannten ber den Schulhof um ins Warme zu kommen, als ich ihn am hinteren Eingang stehen sah, wo die 10.-Klssler in der Pause rauchen durften.",
"Ich bemerkte, dass er mich den ganzen Weg von der Sporthalle bis zum Schulgebude beobachtete. Mein Herz setzte einen Schlag aus. Er war gro, gutaussehend und der Schwarm vieler meiner Freundinnen. Ich dachte immer, er wre viel zu cool fr mich. Er war schon fast erwachsen und ich war gerade mal 14.",
"Bevor ich hinein ging, blieb ich einen Moment stehen und schaute zu ihm hinber. Da stand er, die Zigarette in der Hand, den Blick unbeirrt auf mich gerichtet."
],
opt1: "Winken",
optPara1: [
"Ich hob schchtern die Hand und bemhte mich um ein im Endeffekt unbeholfenes Lcheln. Er lchelte zurck und mein Herz begann zu rasen."
],
opt2: "Weitergehen",
optPara2: [
"Als ich gerade hinein gehen wollte, lchelte er und nickte mir fast unmerklich zu. Meine Ohren glhten als ich die Stufen hinaufging."
]
},

invitation: {
para1: [
"Ein paar Wochen spter begegneten meine beste Freundin und ich ihm auf dem Weg zum Chemieunterricht. Es war das erste Mal, dass er berhaupt mit einer von uns sprach. Wir standen im Gang und unterhielten uns eine Weile. Meine Freundin redete die meiste Zeit. Ich war zu nervs um ihm berhaupt ins Gesicht zu schauen.",
"Als die Glocke leutete, erzhlte er uns von einer Party, die am kommenden Wochenende im Haus eines Freundes stattfinden sollte. Er sagte, dass er sich gerne mit uns unterhielt. Er sagte, wir seien cooler als er erwartet htte. Und dann fragte er uns, ob wir Lust htten mitzukommen."
],
opt1: "Zusagen",
optPara1: [
"Ich willigte zgernd ein. Diese Jungs waren so viel lter als wir und wir wrden niemanden kennen, aber meine Freundin meinte, es wre kein Problem."
],
opt2: "Ablehnen",
optPara2: [
"Die Idee gefiel mir nicht. Diese Jungs waren so viel lter als wir und wir wrden niemanden kennen, aber bevor ich etwas sagen konnte, hatte meine Freundin schon fr uns beide zugesagt."
],
para2: [
"Ich sagte ihr, dass ich nicht sicher war, ob meine Eltern mir das erlauben wrden, aber sie schlug vor, unseren Eltern einfach zu erzhlen, wir wrden bei der jeweils anderen bernachten. Mir gefiel der Gedanke nicht, meine Eltern anzulgen, doch sie berzeugte mich, dass es so am besten war. Und berhaupt war das, was wirklich zhlte, die Tatsache, dass er uns cool fand und Zeit mit uns verbringen wollte.",
"Ich nickte und verbrachte den Rest das Tages damit vom kommenden Wochenende zu trumen."
]
},

party: {
para1: [
"Halb neun kamen wir auf der Party an. Irgendwer, den wir nicht kannten, ffnete uns die Tr und lie uns ins Haus. Fnfzehn oder zwanzig Leute hatten sich dort versammelt. Wir versuchten unser Bestes um dazuzugehren, aber es war zwecklos; es war offensichtlich, dass wir hier nicht hergehrten. Die Minuten, in denen wir peinlich berhrt auf dem Flur herumstanden, fhlten sich wie eine Unendlichkeit an.",
"Gerade als ich meine Freundin darum bitten wollte, ob wir nicht wieder gehen knnten, entdeckte er uns. Mit einem breiten, warmherzigen Lcheln kam er auf uns zu und umarmte uns. Ich wusste nicht was ich tun sollte. Ich war vllig berrumpelt und stand einfach nur da, starr wie ein Brett.",
"Er lotste uns zur Couch und bot uns die letzten freien Sitzpltze an. Wir setzen uns und er brachte jeder von uns ein stark riechendes Getrnk."
],
opt1: "Trinken",
optPara1: [
"Meine Freundin nahm das Glas ohne zu zgern und ich tat es ihr gleich. Ich war nervs. Ich hatte noch nie zuvor Alkohol getrunken.",
"Der erste Schluck schmeckte seltsam. Ich versuchte ein Schaudern zu unterdrcken. Meine Freundin hingegen gab sich, als htte sie es schon tausend Mal getan."
],
opt2: "Nicht trinken",
optPara2: [
"Ich wollte nicht wie ein Versager aussehen und nahm das Glas. Ich hielt es in die Nhe meiner Lippen und allein beim Geruch drehte sich mir der Magen um. Ich versuchte verzweifelt, entspannt auszusehen und balancierte das Glas ganz zwanglos in der Hand, als htte ich gerade einen Schluck genommen."
],
para2: [
"Wir fingen an zu reden. Ich bemhte mich, die Unterhaltung am Laufen zu halten, in der Hoffnung, dass es von dem Glas in meiner Hand ablenken wrde, dass keiner bemerken wrde, dass ich nicht trank.",
"Aber er war nett. Er stellte uns seinen Freunde vor, sie scherzten und alberten herum, und ich fing an, mich zu entspannen und mich in ihrer Gegenwart wohl zu fhlen."
]
},

balcony: {
para1: [
"Spter am Abend, nachdem wir den Jungs beim Rauchen auf dem Balkon Gesellschaft geleistet hatten, blieben er und ich allein zurck. Wir redeten eine ganze Weile. Ich erzhlte ihm von der Situation mit meinen Eltern und er erzhlte mir von seiner Exfreundin und wie sie ihn fr seinen besten Freund verlassen hatte.",
"Pltzlich beugte er sich runter und versuchte mich zu kssen."
],
opt1: "Zulassen",
optPara1: [
"Bevor ich berhaupt wusste was passiert, presste er seine Lippen auf meine. Ich wusste nicht was ich tun sollte. Ich war schockiert und verlegen und verwirrt zugleich. Durch die Heftigkeit des Kusses verlor ich das Gleichgewicht und stolperte nach hinten."
],
opt2: "Ausweichen",
optPara2: [
"Ich stolperte reflexartig nach hinten und starrte ihn schockiert an. Ich verstand nicht was gerade passiert war. Alles was ich wusste, war, dass ich mich pltzlich verlegen und beschmt fhlte."
],
para2: [
"Er lachte. Er sagte, dass er betrunken sei und sich nichts dabei gedacht hatte. Er sagte, er verstnde, wenn ich das nicht tun wolle, dass er mich dafr umso mehr respektieren wrde. Er sagte, dass er mich als Mensch schtzen wrde. Obwohl ich immer noch verwirrt und beschmt war, fhlte ich mich durch seine Worte erleichtert.",
"Ich wechselte rasch das Thema und betete, dass es nicht wieder zur Sprache kommen wrde."
]
},

card: {
para1: [
"Wann immer ich ihn whrend der nchsten Wochen in der Schule sah, hatte ich Angst, er wrde auf den Vorfall auf dem Balkon zu sprechen kommen. Aber das tat er nicht. Wenn wir uns auf dem Flur trafen, unterhielten wir uns ber unsere Fcher, Lehrer, Noten oder anstehende Prfungen. Er war nett und langsam begann ich den Vorfall zu vergessen. Manchmal fragte ich mich sogar insgeheim, ob das alles wirklich passiert war oder ob ich es mir nur eingebildet hatte.",
"Am Tag vor den Weihnachtsferien fand ich eine Karte in meinem Spind. Darauf war ein Bild von einem sen Ktzchen, das eine Weihnachtsmannmtze auf dem Kopf hatte und worauf stand:",
"'Musste bei dieser Karte an dich denken und wollte dir schnurrige  Weihnachten wnschten. Ich hoffe, dass du alles bekommst, was du dir wnschst!'",
"Meine Wangen fingen sofort an rot zu glhen. Meine beste Freundin sah mich und riss mir die Karte aus der Hand. Sie fing an zu kichern und mich mit meinem heimlichen Liebhaber aufzuziehen. Ich sagte ihr, dass wir nur Freunde wren. Sie fragte mich, ob ich ihm etwas als Antwort schicken wrde."
],
opt1: "Karte schicken",
optPara1: [
"Ich hatte darber noch gar nicht nachgedacht und nun war es zu spt, um eine Karte zu kaufen. Ich entschied mich, ihm stattdessen whrend des Unterrichts eine selbst zu basteln.",
"Ich dachte lange darber nach, was ich ihm schreiben knnte und fing bestimmt hundert mal von vorne an. Letztendlich malte ich einfach einen groen Weihnachtsbaum und schrieb 'Frohe Weihnachten!' darunter.",
"Ich kam mir dumm und kindisch vor als ich nach Hause ging."
],
opt2: "Keine Karte schicken",
optPara2: [
"Ich hatte darber noch gar nicht darber nachgedacht, aber nun war es ohnehin zu spt um eine Karte zu kaufen. Whrend der letzten Stunde versuchte ich ihm stattdessen einen Brief zu schreiben. Ich fing bestimmt hundert mal von vorne an, aber es kam nie etwas Gescheites dabei heraus. Ich ging ohne ihm geantwortet zu haben nach Hause."
]
},

holdinghands: {
para1: [
"Whrend der Wintermonate sahen wir uns immer fter. Auf dem Schulhof stand er oft bei uns oder begleitete uns, wenn wir in der Stadt shoppen gingen. Meine Freunde mochte ihn. Er war witzig und charmant und wir hatten viel Spa zusammen. Es war schn ihn dabei zu haben. Gelegentlich war ich ein wenig eingeschchtert, weil er soviel klger und erwachsener war als ich, aber er nahm mir meine Befangenheit und tat einfach so, als wrde es ihn nicht stren.",
"Manchmal, wenn wir allein waren, versuchte er meine Hand zu halten."
],
opt1: "Zulassen",
optPara1: [
"Ich wusste nicht was ich tun sollte. Am Anfang war es seltsam und ich fhlte mich wieder unbehaglich und ein wenig peinlich berhrt. Aber er benahm sich, als wre es nichts Ungewhnliches und mit der Zeit wurde ich entspannter. Es war einfach etwas, das wir taten."
],
opt2: "Wegziehen",
optPara2: [
"Ich wusste nicht was ich tun sollte. Ich fhlte mich unbehaglich und peinlich berhrt, aber ich wollte auch nicht, dass er mich fr ein ngstliches kleines Kind hielt. Ich lie ihn meine Hand fr eine Weile halten, bevor ich vorgab, nach etwas in meiner Jackentasche zu suchen. Danach lie ich die Hnde einfach in den Taschen, sodass er sie nicht fassen konnte und betete, dass er mich nicht darauf ansprechen wrde."
]
},

kiss: {
para1: [
"Der Frhling kam und das Schuljahr neigte sich dem Ende zu. Wir verbrachten viel Zeit miteinander, gingen spazieren und redeten stundenlang. Zum ersten Mal in meinem Leben hatte ich das Gefhl, dass mich jemand wirklich verstand. Nicht mal meine beste Freundin wusste immer, was in mir vorging. Ich hatte oft versucht mit ihr darber zu reden, ber die Traurigkeit und die Sehnsucht nach etwas, das ich nicht ganz fassen oder erklren konnte, aber sie verstand mich nicht. Sie gab sich Mhe, aber ihre Aufmunterungsversuche fhrten nur dazu, dass ich mich hinterher noch einsamer fhlte. Aber er verstand mich. Ihm ging es genauso. Er sagte, es sei ein wichtiger Teil des Erwachsenwerdens, dass man erkannte wie die Welt wirklich war und sich nach dem Glck und der Schnheit kindlicher Unschuld und nach der Welt, die einem als Kind versprochen wurde, zurcksehnte. Er sagte, dass nicht viele das begriffen und dass ich eine feinfhlige Seele htte.",
"In der Schule sahen wir uns immer mehr und versuchten, uns mglichst oft zwischen den Stunden auf den Fluren zu begegnen. Ich hatte es aufgegeben, meinen Freunden zu erklren, dass wir kein Paar waren, dass das, was wir hatten, mehr war als das, besonderer als Liebe. Sie zogen mich von Zeit zu Zeit damit auf, aber mir war es egal. Sie konnten es einfach nicht verstehen.",
"Als sein Geburtstag anstand, lud er uns alle zu der Party am See ein, die er am kommenden Wochenende schmeien wollte. Das Wetter wurde allmhlich wrmer und er sagte, dass es Zeit war die Partysaison zu erffnen. Wir hatten von den berchtigten Feiern am See gehrt, waren aber nie dazu eingeladen worden. Wir waren damals noch Kinder gewesen.",
"Nachdem er mit meinen Freunden geredet hatte, hielt er mich zurck und bat mich, ihn nach meiner letzten Stunde hinter dem Schulgebude zu treffen."
],
opt1: "Treffen",
optPara1: [
"Ich war nervs als ich um das Gebude herum zu dem Treffpunkt ging, den er mir beschrieben hatte. Dort stand er, eine Zigarette in der Hand, und lchelte als er mich kommen sah. Er drckte die Zigarette aus."
],
opt2: "Nach Hause gehen",
optPara2: [
"Ich war nervs. Etwas in der Art und Weise wie er geklungen hatte, lste in mir ein mulmiges Gefhl aus, aber ich hatte auch Angst vor dem, was er am nchsten Tag sagen knnte, wenn ich nicht auftauchen wrde.",
"Nach Schulschluss ging ich nach drauen. Ich hatte beschlossen ihm weis zu machen, ich htte unser Treffen wegen irgendeiner anderen Sache vergessen, dass ich eine schlechte Note bekommen htte oder einen Anruf von meinen Eltern, mit der Anweisung sofort nach Hause zu kommen.",
"Ich war schon auf halbem Weg ber den Schulhof, als ich ihn meinen Namen rufen hrte, und nur einen Augenblick spter stand er neben mir. Er sagte, er htte auf mich gewartet und bevor ich irgendetwas sagen konnte, nahm er meine Hand und fhrte mich hinter das Schulgebude."
],
para2: [
"Wir standen uns fr einen Moment betreten gegenber. Er sagte, er sei der grte Glckspilz der Welt. Er sagte, ich sei das Beste, was ihm je passiert wre und dass dies das beste Geburtstagsgeschenk aller Zeiten sei.",
"Dann ksste er mich."
],
opt3: "Zulassen",
opt4: "Zurckweichen",
para3: [
"Ich stand unter Schock. Bevor ich wusste was passierte, schob er mir die Zunge in den Mund. Es schmeckte bitter und salzig und Speichel floss von seiner Zunge auf meine. Mir drehte sich der Magen um. Ich versuchte mich ihm irgendwie zu entziehen, aber ich war mit dem Rcken gegen die Wand gedrckt. Er hatte sich an mich gepresst und ich fhlte etwas Seltsames an meinem Bein.",
"Nach einer gefhlten Ewigkeit lie er von mir ab, nahm meine Hand und begleitete mich zur Bushaltestelle."
]
},

theday: {
para1: [
"Den Rest der Woche versuchte ich zu begreifen was geschehen war. Ich verstand nicht, warum er das getan hatte. Ich dachte, wir wren nur Freunde gewesen. Ich versuchte zu verstehen, was ich falsch gemacht, was ich bersehen hatte. Ich mied ihn so gut es ging und hoffte, dass das Wochenende nie kommen wrde.",
"Dann war es soweit. Meine beste Freundin war vorbeigekommen um mich abzuholen. Unterwegs schnatterte sie ohne Pause, ber den Jungen in den sie verknallt war und wie aufregend es war, bei einer richtigen, erwachsenen Party eingeladen zu sein. Sie vertraute mir an, dass sie hoffte, ihr Schwarm wrde auch da sein und dass sie davon trumte, wie sie am Ende, nachdem alle anderen gegangen waren, alleine unter den Sternen kuscheln wrden.",
"Mir war schlecht. Ich hatte Angst ihn zu sehen, Angst davor, was er sagen wrde. Ich wusste nicht, was ich jetzt machen sollte, was von mir erwartet wurde. Mir gefiel es nicht ihn zu kssen, aber ich wollte meinen besten Freund nicht verlieren. Ich hoffte, dass es einfach nichts zu bedeuten hatte, dass es nur so eine Geburtstagssache gewesen wre, etwas, was man als Freunde so machte, genau wie Hndchen halten.",
"Als wir am See ankamen, fhlte ich mich benommen und mein Herz schlug so laut, dass ich mir sicher war, dass meine Freundin es hren konnte. Es waren viele Leute da. Manche von unserer Schule, andere von der Party, meine Freunde. Ich setzte mich zu ihnen und versuchte, mich zu verhalten als ob nichts wre.",
"Nach einer Weile fand er uns. Wir gratulierten ihm und er setzte sich dazu, redete, machte Witze, lachte. Ich fing langsam an mich zu beruhigen. Er erwhnte nichts von dem, was passiert war und hatte mich noch nicht einmal berhrt oder mir in irgendeiner Weise besondere Aufmerksamkeit geschenkt.",
"Als die Sonne langsam unterging, begannen seine Freunde ihren tragbaren Grill anzufeuern. Bald danach war die Luft erfllt vom Duft nach gebratenem Fleisch und Wrstchen, ein Geruch, der mich immer an die Sommer im Garten meiner Groeltern erinnerte. Meine Freunde waren ber die vielen kleineren Grppenchen, die sich gebildet hatten, verteilt, und whrend alle anderen beschftigt waren, kam er zu mir und bat mich, ihn auf einen Spaziergang zu begleiten."
],
opt1: "Mitgehen",
optPara1: [
"Ich bekam sofort Angst, dass er mich wieder kssen oder mit mir ber das, was passiert war, reden wollen wrde. Mit einem Klumpen im Hals stand ich auf und folgte ihm auf den Trampelpfad, der um den See herum fhrte."
],
opt2: "Ablehnen",
optPara2: [
"Ich bekam sofort Angst, dass er mich wieder kssen oder mit mir ber das, was passiert war, reden wollen wrde. Mit einem Klumpen im Hals erwiderte ich, dass ich nach meinen Freunden sehen msste, aber er sagte, es wrde nicht lange dauern und dass er nur reden wolle. Er nahm meine Hand und fhrte mich zu dem Trampelpfad, der um den See herumfhrte."
],
para2: [
"Er hielt meine Hand fest in seiner als wir den Weg entlang liefen. Ich wollte nicht hier sein. Ich hatte Angst vor dem, was er sagen wrde. Ich wollte nicht reden, nicht ber den Kuss, nicht ber das Ding, das sich gegen mein Bein gepresst hatte. Ich schmte mich, ich wnschte mir, wir knnten einfach fr immer still nebeneinanderher laufen. Ich wnschte mir, dass wir einfach nicht reden mssten.",
"Pltzlich blieb er stehen und sah mich an. Einen Moment spter presste er seine Lippen auf meine."
],
opt3: "Zulassen",
optPara3: [
"Ich erstarrte. Bevor ich wusste, was geschah war seine Zunge in meinem Mund, bitter und salzig und mir wurde bel."
],
opt4: "Zurckweichen",
optPara4: [
"Bevor ich wusste, was geschah war seine Zunge in meinem Mund, bitter und salzig und mir wurde bel. Ich versuchte zurckzuweichen, aber er hatte meinen Kopf mit beiden Hnden fest im Griff und hielt ihn gegen seinen gepresst."
],
para3: [
"Dann waren wir auf dem Boden. Er lag auf mir und schob mir unaufhrlich seine Zunge in meinen Rachen. Ich fhlte etwas gegen mein Bein gedrckt."
],
opt5: "Stoppen",
opt6: "Stillhalten",
optPara6: [
"Seine Hnde wanderten unter meinen Pullover, griffen nach meinen Brsten und drckten fest zu. Sein Atmen wurde schwerer und ich merkte, wie er immer erregter wurde."
],
opt7: "Wegstoen",
opt8: "Still bleiben",
optPara8: [
"Er hielt inne und setzte sich auf. Er ffnete den Knopf an seiner Hose und begann, mir meine auszuziehen. Der Boden war kalt und feucht. Es wurde dunkler. Er zog meinen Slip aus und holte sein Ding aus seiner Hose."
],
opt9: "Abwehren",
opt10: "Erstarren",
optPara10: [
"Ich fhlte einen scharfen Schmerz im Schritt als er in mich eindrang. Ich konnte mich nicht bewegen. Er begann, sich vor und zurck zu schieben. In der Ferne hrte ich Gelchter. Ich fragte mich, was meine Eltern wohl sagen wrden, wenn ich schwanger werden wrde. Er schnaufte und mir fielen Schweitropfen auf's Gesicht. Ich lag nur da, still und unbeweglich, whrend Stunden, Tage, Jahre an mir vorbeizogen.",
"Und dann war es vorbei.",
"Er stand auf und zog seine Hose an. Ich setzte mich langsam auf und suchte meine Sachen zusammen, die er beiseite geworfen hatte. Whrend er sich anzog, sagte er, ohne mich dabei anzusehen: \"Wie wr's, wenn du dich beim nchsten Mal ein bisschen locker machst.\"",
"Langsam zog ich erst das eine, dann das andere Hosenbein an."
]
},

end: {
para1: [
"Ich wei nicht mehr wie ich nach Hause gekommen bin. Meine Famile wollte gerade mit dem Abendessen anfangen, als ich in die Kche trat. Meine Mutter fragte mich, warum ich so frh schon wieder da war. Ich sagte, ich sei mde. Sie stellte mir einen Teller hin.",
"Mein Vater und mein Bruder stritten sich. Ich a Brot. Sie fragten mich etwas. Ich muss geantwortet haben; sie redeten weiter. Ich fragte mich, was mein Bruder sagen wrde. Ich fragte mich, was meine Mutter von mir denken wrde. Ich fragte mich, ob mein Vater mich noch lieb haben wrde.",
"Ich fragte mich, ob ich es ihnen erzhlen sollte."
],
opt1: "Erzhlen",
opt2: "Nichts sagen",
para2: [
"Nach dem Abendessen ging ich in mein Zimmer. Ich stand fr eine Weile einfach in der Mitte des lavendelfarbenen Raums mit den N*SYNC-, Avril Lavigne- und Josh Hartnett-Postern an der Wand, den Puppen und den Teddybren, die ich hatte seit ich 4 war, dem Fernseher und dem Regal mit den Videokassetten, dem Schreibtisch, dem Schrank, der mit Fotos, Zeichnungen und Stickern beklebt war, dem Puzzle, das wir an Weihnachten begonnen doch nie zu Ende gemacht hatten, den Anziehsachen, die auf dem Fuboden verteilt waren. Ich kannte dieses Zimmer, ich hatte es schon mal gesehen. Aber es war nicht meins. Es gehrte jemandem, der hier nicht mehr lebte. Jemandem, den ich lange gekannt hatte. Jemandem, der fortgegangen war und mich zurckgelassen hatte.",
"Ich stand in der Mitte des Raumes bis meine Eltern schlafen gingen, bis die Lichter in den Husern um uns herum erloschen, bis meine Beine mich nicht mehr tragen wollten und ich die Trnen nicht lnger zurckhalten konnte."
],
opt3: "Neu anfangen",
optPara3: [
"Es gibt keinen Neuanfang. Es ist passiert."
]
}
}
};

Language.prototype.fr =
{
menu: {
start: "Commencer",
continue: "Continuer",
credits: "Crdits",
tw: "Avertissement  lire",
lang: "Langues",
why: "Pourquoi ?",
back: "Revenir  Hypnotic Owl"
},

backToMenu: "Revenir au menu",
continue: "Continuer",

tw: {
tw: "Avertissement  lire",
para1: [
"Un avertissement compliqu  crire. D'un ct, cette exprience a plus d'impact sans spoilers ni indices sur son contenu. Mais d'un autre ct, je ne peux pas laisser ceux dont la sensibilit pourrait tre violemment heurte jouer  ce jeu sans les avertir.",
"Donc disons-le une bonne fois :",
"Si vous avez cliqu sur ce lien par curiosit, ou si vous tes certain qu'il n'y a aucun sujet pouvant heurter votre sensibilit, veuillez revenir au menu et jouer dabord au jeu. De gros spoilers sur le jeu vont suivre, et vous pourrez toujours revenir sur cette page plus tard si vous le souhaitez."
],
para2: [
"Mais si vous craignez que certains thmes puissent tre abords, alors merde aux spoilers. Votre bien-tre est le plus important, et s'il y a certains sujets que vous prfrez viter, alors il vaut mieux que vous ne jouiez pas  ce jeu, croyez-moi.",
"Pour ne pas trop en dire, et dans le cas o cela ne heurtera finalement pas votre sensibilit, je vais vous prsenter les sujets abords en deux temps : d'abord en voquant leur aspect gnral, puis un peu plus en dtail, en dcrivant la manire dont ils apparaissent dans le jeu.",
"N'oubliez pas, de gros spoilers vont suivre, donc revenez en arrire si vous tes certain qu'ils ne vous affecteront pas. Mais si vous avez le moindre doute, alors merde aux spoilers. a nen vaut pas la peine."
],
readTW: "Lire l'avertissement",
warning: [
"Avt : Viol",
"Si ce n'est pas un sujet sensible pour vous, revenez au menu.",
"Si ce sujet peut vous heurter de quelque manire que ce soit, je vais entrer un peu plus dans les dtails. Prenez garde : je vais dcrire le jeu avec des mots simples et directs, mais ce qui va suivre risque quand mme de vous dranger."
],
readFull: "Lire le rsum complet",
full: [
"<b>The Day the Laughter Stopped</b> (\"Le jour o le rire s'est arrt\") est un jeu sur le thme du viol, racont du point de vue d'une adolescente de 14 ans. Elle dcrit de manire dtache, presque analytique, sa rencontre avec un garon plus g  l'cole, avec qui elle est devenue amie et qui, une nuit, est all plus loin alors qu'elle n'tait pas prte. Il n'y a pas eu de lutte physique ; elle est reste paralyse, trop effraye pour parler, et il ne s'est pas arrt. Vous allez cependant tre dans la peau de cette adolescente, et si j'ai bien fait mon travail, cela devrait provoquer une forte raction de votre part.<br/><br/>",
"Vous pourrez lire <a href='http://hypnoticowl.com/the-day-the-laughter-stopped/' target='_blank'>ici</a> les raisons qui mont pouss  raliser ce projet, mais pour le moment, gardez  l'esprit que le jeu est librement inspir d'une exprience vcue par quelqu'un que je connais ; et mme si cette personne pourrait offrir de prcieuses critiques concernant la justesse des descriptions et la pertinence du rcit, je ne veux absolument pas qu'elle touche  ce jeu.",
"Ce que j'essaie de dire, c'est que si vous avez vcu un viol, j'aimerais mieux que vous ne jouiez pas  ce jeu. Ou demandez  quelqu'un de confiance d'y jouer d'abord, et de vous dire s'il vous recommande d'y jouer ou non. Ou, si vous tes vraiment curieux, demandez  ce qu'on vous dcrive le jeu avant toute chose. Prenez soin de vous, d'accord ?"
],
contact: "Si vous avez des commentaires ou des questions, n'hsitez pas  me contacter :"
},

credits: {
written: "Scnario de",
translation: "Traduction franaise de",
author: "Galejade (<a href='https://twitter.com/lecrivaillante/' target='_blank'>@lecrivaillante</a>)",
thanks: "Remerciements ",
thanksTo: "M. Clanet et P. Paquet"
},

story: {
start: {
para1: [
"Ctait un jour pluvieux de la fin du mois de septembre lorsquil ma repre pour la premire fois. Mes copines et moi, on sortait du cours de sport et on traversait la cour pour aller s'abriter. Je lai vu debout  l'entre sud, o les lycens de seconde taient autoriss  fumer.",
"J'ai ralis qu'il m'avait mat pendant que je courais du gymnase jusqu'au btiment. Mon cur a fait un bond dans ma poitrine. Il tait grand, beau, et toutes mes copines voulaient sortir avec lui. Je m'tais toujours dit qu'il tait trop cool pour moi. Ctait presque un homme, et moi j'avais  peine quatorze ans.",
"Avant d'entrer dans le btiment, je me suis arrte un instant pour le regarder. Il tait toujours l, sa cigarette  la main, les yeux rivs sur moi."
],
opt1: "Lui faire un signe",
optPara1: [
"J'ai d'abord fait un geste de la main, rapide et bref, puis j'ai tent un sourire maladroit. Il m'a souri en retour, et mon cur s'est mis  battre la chamade."
],
opt2: "Continuer  marcher",
optPara2: [
"Alors que j'allais me retourner pour rentrer, il m'a souri et fait un petit signe de tte. Je me suis sentie rougir jusqu'aux oreilles en montant les escaliers."
]
},

invitation: {
para1: [
"Quelques semaines plus tard, ma meilleure amie et moi sommes tombes sur lui dans le couloir en allant en cours de sciences. C'tait la premire fois qu'il nous adressait la parole. On est rests l  discuter pendant un moment. Mon amie faisait presque toute la conversation. J'tais trop nerveuse pour ne serait-ce qu'oser le regarder.",
"Quand la cloche a sonn, il nous a parl d'une fte le week-end suivant chez un de ses potes. Il a dit qu'il aimait bien discuter avec nous. Qu'on tait plus cool que ce qu'il imaginait. Enfin, il nous a demand si on voulait venir  la fte."
],
opt1: "Accepter",
optPara1: [
"Hsitante, j'ai fini par accepter. Ces mecs taient bien plus vieux que nous et on ne connatrait personne l-bas, mais mon amie me disait que tout irait bien."
],
opt2: "Refuser",
optPara2: [
"Je n'tais pas emballe par l'ide. Ces mecs taient bien plus vieux que nous et on ne connatrait personne l-bas. Mais je n'ai pas eu le temps d'ouvrir la bouche pour parler : mon amie avait dj accept pour nous deux."
],
para2: [
"J'ai dit  mon amie que mes parents ne me laisseraient peut-tre pas y aller, et elle m'a suggr de dire chacune  nos parents qu'on dormait l'une chez l'autre. Je navais pas envie de mentir  mes parents, mais elle a fini par me convaincre que a en valait la peine. Aprs tout, l'important tait qu'il nous trouvait cool et voulait traner avec nous.",
"J'ai acquiesc, et j'ai pass le reste des cours  rvasser  ce week-end."
]
},

party: {
para1: [
"On est arrives  la fte  huit heures et demie. Quelqu'un qu'on navait jamais vu nous a ouvert la porte et nous a laiss entrer. Il y avait dj quinze ou vingt personnes  la fte. On a essay de se fondre dans la masse, en vain ; a se voyait qu'on n'avait rien  voir avec eux. Les minutes quon a passes debout  ne pas savoir o se mettre mont paru durer des heures. ", 
"J'allais supplier mon amie de partir lorsqu'il nous a trouves. Il est arriv vers nous, un grand sourire chaleureux sur son visage, et nous a serres dans ses bras. Je n'ai pas su comment ragir. Prise de court, je suis donc reste plante l, raide comme un piquet.",
"Il nous a emmenes jusqu'au canap et nous a laiss les dernires places libres. On s'est assises, et il nous a servi un verre  chacune."
],
opt1: "Boire",
optPara1: [
"Mon amie a pris le verre sans hsitation, et j'ai fait comme elle. J'tais nerveuse. Je n'avais jamais bu d'alcool auparavant.",
"La premire gorge ma laiss un got bizarre. J'ai rprim un frisson. Mon amie, elle, a eu l'air de celle qui avait dj fait a des milliers de fois."
],
opt2: "Ne pas boire",
optPara2: [
"Ne voulant pas passer pour une mauviette, j'ai pris le verre. Je l'ai port  mes lvres, mais rien que l'odeur m'a retourn l'estomac. J'ai fait semblant d'tre  laise en tenant mon verre, l'air de rien, comme si je venais den boire une gorge."
],
para2: [
"On a commenc  discuter. J'ai fait de mon mieux pour alimenter la conversation, en priant pour que a dtourne leur attention de mon verre, et en esprant qu'ils n'aient rien remarqu.",
"Mais il tait sympa. Il nous a prsentes  des potes  lui. Comme ils faisaient des blagues et se marraient bien, je me suis sentie peu  peu plus dtendue, plus  l'aise avec eux."
]
},

balcony: {
para1: [
"Un peu plus tard cette nuit-l, aprs avoir rejoint des mecs sortis fumer sur le balcon, lui et moi sommes rests un peu  l'cart, en tte--tte. On a parl longtemps. Je lui ai racont ce qui se passait avec mes parents, et il m'a parl de son ex-petite amie, qui l'avait quitt pour son meilleur ami.",
"Soudain, il s'est pench vers moi et a essay de m'embrasser."
],
opt1: "Le laisser faire",
optPara1: [
"Avant mme de comprendre ce qui se passait, j'ai senti ses lvres presses contre les miennes. Je ne savais pas comment ragir. J'tais  la fois choque et embarrasse. La force de son baiser m'a fait perdre l'quilibre, et j'ai recul d'un pas."
],
opt2: "Le repousser",
optPara2: [
"Comme par rflexe, j'ai fait un pas en arrire et je l'ai dvisag. Choque, je ne comprenais pas ce qui venait d'arriver ; tout ce que je savais, c'tait que je me sentais soudain trs mal  l'aise et honteuse."
],
para2: [
"Il a ri. Il a dit qu'il tait bourr et que a ne signifiait rien pour lui. Qu'il comprenait que je ne veuille pas le faire et me respectait mme encore plus pour a. Qu'il m'apprciait en tant qu'amie. Mme si j'tais encore trouble et honteuse, j'ai t soulage qu'il me dise tout a.",
"J'ai rapidement chang de sujet et j'ai pri pour que a ne se reproduise pas."
]
},

card: {
para1: [
"Lors des semaines qui ont suivi,  chaque fois que je le croisais entre les cours, je craignais qu'il me parle de ce qui s'tait pass sur le balcon. Mais il ne l'a jamais fait. On discutait juste dans les couloirs : des cours, des profs, des notes, et des examens  venir. Il tait gentil, et j'ai peu  peu oubli ce qui s'tait pass. Parfois, je me demandais mme si a s'tait rellement produit, ou si je n'avais pas juste tout imagin.",
"La veille des vacances de Nol, j'ai trouv une carte dans mon casier. C'tait l'image d'un petit chat mignon avec un bonnet du Pre-Nol, qui disait :",
"\"Chat m'a fait penser  toi, et je te souhaite un Chat-cr<br/>Nol ! J'espre que tu seras bien gte pour les ftes.\"",
"J'ai piqu un fard. Ma meilleure amie s'en est aperue et m'a pris la carte des mains. Elle a commenc  glousser et s'est moque de mon admirateur secret. Je lui ai rpondu qu'on tait juste amis. Elle m'a demand si j'allais lui rpondre."
],
opt1: "Envoyer une carte",
optPara1: [
"Je n'y avais pas pens jusque-l, mais il tait dsormais trop tard pour lui acheter une carte. J'ai donc dcid de lui en faire une en cours  la place.", 
"Je me suis creus la tte pendant des heures pour trouver quoi lui crire et j'ai recommenc la carte une centaine de fois. J'ai fini par juste nous dessiner tous les deux  ct d'un norme sapin de Nol et j'ai crit : \"Joyeux Nol !\"",
"Je me suis sentie gamine et idiote en rentrant chez moi."
],
opt2: "Ne pas envoyer de carte",
optPara2: [
"Je n'y avais pas pens jusque-l, mais il tait dsormais trop tard pour lui acheter une carte. Pendant les cours, j'ai essay de lui crire un mot  la place. J'ai recommenc une centaine de fois, mais je n'avais pas d'inspiration et je suis rentre chez moi sans lui rpondre quoique ce soit."
]
},

holdinghands: {
para1: [
"Pendant l'hiver, on a commenc  se voir plus souvent. Il venait traner avec nous dans la cour et nous accompagnait quand on allait faire du shopping en ville. Mes amis l'aimaient bien. Il tait malin et charmant, on s'amusait bien. a nous faisait plaisir de passer du temps avec lui. Parfois, j'tais un peu intimide car il tait tellement intelligent et mature, mais il faisait toujours en sorte de me mettre  l'aise, et quand il pouvait voir que jtais gne, il faisait comme si de rien n'tait.",
"Parfois, quand on tait seuls, il essayait de me prendre la main."
],
opt1: "Le laisser faire",
optPara1: [
"Je me demandais comment ragir. a me faisait bizarre au dbut : encore une fois, je ne me sentais pas trs  l'aise et un peu gne. Mais il n'avait pas l'air d'en faire une histoire, et j'ai fini par me dtendre. Je me suis dit que c'tait juste quelque chose dinsignifiant."
],
opt2: "La retirer",
optPara2: [
"Je me demandais comment ragir. Je ne me sentais pas trs  l'aise et un peu gne, mais je ne voulais pas qu'il me prenne pour une trouillarde. Je le laissais faire pendant un moment, avant de faire semblant de chercher un truc dans ma veste. Aprs a, je gardais mes mains dans mes poches pour ne pas qu'il puisse la reprendre, et je priais pour qu'il ne fasse pas de commentaires."
]
},

kiss: {
para1: [
"Ctait le printemps, et l'anne scolaire tait bientt termine. On passait beaucoup de temps ensemble,  se balader et  discuter pendant des heures. Pour la premire fois de ma vie, j'avais l'impression que quelqu'un me comprenait. Mme ma meilleure amie ne savait pas toujours ce qui me passait par la tte. J'essayais de lui parler de la tristesse ainsi que du dsir innommable et indescriptible qui me hantaient, mais elle ne comprenait pas. Elle essayait, mais  chaque fois quelle tentait me rconforter, cela ne faisait que renforcer ma solitude. Mais lui comprenait. Il ressentait la mme chose. Il me disait que c'tait a grandir : voir le monde tel qu'il tait, faire le deuil de lenfance innocente, pleine de joie et de beaut, et du monde que les adultes nous avaient promis. Il me disait que peu de gens comprenaient a et que j'avais une belle me.",
"La journe, on se voyait encore plus souvent qu'avant, et on essayait de se croiser entre chaque cours. J'avais renonc  faire comprendre  mes amis qu'on ntait pas un couple, qu'on tait bien plus que a, que c'tait plus spcial que de l'amour. Ils me taquinaient parfois, mais je m'en moquais.",
" lapproche de son anniversaire, il nous a tous invits  une fte quil pensait organiser le week-end suivant, au bord du lac. La mto sadoucissait de jour en jour, et il a dclar quil tait temps de refaire la fte. On avait entendu parler de ces soires notoires au bord du lac, mais on ny avait jamais t invits jusque-l. On tait encore des enfants.",
"Aprs avoir parl  mes amis, il m'a retenue jusqu' ce qu'ils soient tous partis, et m'a demand de le retrouver derrire le btiment aprs les cours."
],
opt1: "Aller au rendez-vous",
optPara1: [
"J'tais nerveuse quand je l'ai retrouv derrire le btiment,  notre point de rendez-vous. Il se tenait l, une cigarette  la main, et a souri en me voyant arriver. Puis il a jet sa cigarette par terre."
],
opt2: "Rentrer  la maison",
optPara2: [
"J'tais nerveuse. Quelque chose dans la manire dont il m'avait parl me mettait mal  l'aise, mais je craignais sa raction le lendemain si je n'y allais pas.",
"Aprs les cours, je me suis dirige vers la sortie. J'avais dcid que je rentrerais chez moi et lui dirais qu'un truc m'avait fait oublier le rendez-vous, que j'avais eu une mauvaise note ou que mes parents m'avaient appele et demand de rentrer directement  la maison.",
"J'tais  mi-chemin lorsque je l'ai entendu m'appeler par mon prnom ; une seconde plus tard, il tait  ct de moi. Il m'a dit qu'il m'avait attendue, et avant que je puisse dire quoique ce soit, il m'a pris par la main et m'a emmene  l'arrire du btiment."
],
para2: [
"On est rests debout pendant un moment, l'un en face de l'autre et mal  l'aise. Il a dit qu'il tait le mec le plus chanceux du monde. Il a dit que j'tais la meilleure chose qui lui soit arrive, et que a allait tre le meilleur cadeau d'anniversaire qu'il ait jamais reu.",
"Puis il m'a embrasse."
],
opt3: "Le laisser faire",
opt4: "Reculer",
para3: [
"J'tais sous le choc. Avant que je comprenne ce qui tait en train de se passer, il a gliss sa langue dans ma bouche. Elle avait un got amer et sal, et sa salive a ruissel de sa langue jusqu' la mienne. J'ai senti mon estomac se tordre et j'ai essay de reculer, mais jtais dos au mur. Il tait contre moi et j'ai senti une chose trange sur ma jambe.",
"Il s'est pass une ternit avant qu'il arrte, prenne ma main, et me ramne  l'arrt de bus."
]
},

theday: {
para1: [
"Toute la semaine, j'ai essay de comprendre ce qui s'tait pass. Je ne comprenais pas pourquoi il avait fait a ; je pensais qu'on tait juste amis. J'ai essay de comprendre ce que j'avais fait de mal, ce que j'avais rat. Jai fait de mon mieux pour l'viter et jai espr que le week-end n'arrive jamais.",
"Il est finalement arriv. Ma meilleure amie est passe me chercher. Puis elle na pas arrt de parler d'un garon qui lui plaisait, et de leuphorie quelle ressentait  lide d'tre invite  une vraie fte avec des gens plus vieux. Elle ma dit quelle esprait voir celui qui lui plaisait l-bas, et s'imaginait filer avec lui  la fin de la soire sous les toiles, aprs le dpart de tout le monde.",
"Je me sentais mal. J'avais peur de le revoir, peur de ce qu'il pourrait dire. Je ne savais plus quoi faire dsormais, ou ce qui tait attendu de moi. Je n'avais pas aim l'embrasser, mais je ne voulais pas perdre mon meilleur ami. J'esprais que a ne veuille rien dire pour lui, que c'tait juste parce que c'tait son anniversaire, juste un truc qu'on faisait en tant qu'amis, comme se tenir la main.",
"Arrive au lac, jai eu le tournis et mon cur sest mis  battre  tout rompre. Il y avait tellement de monde. Des gens du collge, dautres de la dernire fte, et mes amis. Je me suis assise avec eux et j'ai essay de faire comme si de rien n'tait.",
" un moment, il a fini par venir  notre rencontre. On lui a souhait son anniversaire et il s'est assis avec nous, il a discut, fait des blagues, sest marr. Je me suis peu  peu calme. Il n'a pas du tout parl de ce qui s'tait pass ; il ne faisait mme pas particulirement attention  moi. C'tait presque comme si rien ne s'tait pass, comme s'il n'y avait finalement pas de quoi en faire une histoire.",
"Lorsque le soleil a commenc  dcliner, ses potes ont lanc le barbecue sur le grill qu'ils avaient apport. L'air s'est empli du fumet de buf rti et des saucisses, une odeur qui me faisait toujours penser aux ts dans le jardin de mes grands-parents. Mes amis se sont disperss dans les groupes plus petits qui s'taient forms, et pendant que tout le monde tait occup, il est venu vers moi et m'a demand daller marcher avec lui."
],
opt1: "Le suivre",
optPara1: [
"Aussitt, jai redout quil veuille m'embrasser encore ou parler de ce qui s'tait pass. La gorge noue, je me suis leve et je l'ai suivi sur le chemin qui entourait le lac."
],
opt2: "Refuser",
optPara2: [
"Aussitt, jai redout quil veuille m'embrasser encore ou parler de ce qui s'tait pass. La gorge noue, je lui ai dit que je voulais aller parler  mes amis, mais il m'a dit que a ne prendrait qu'une minute, qu'il voulait juste discuter. Il a pris ma main et m'a emmene sur le chemin qui entourait le lac."
],
para2: [
"Il a serr ma main dans la sienne alors qu'on marchait sur le chemin. Je ne voulais pas tre l. J'avais peur de ce qu'il allait dire. Je ne voulais pas parler, je ne voulais pas parler du baiser, de cette chose que j'avais sentie contre ma jambe. J'avais honte. J'aurais voulu que cette balade silencieuse ne sarrte jamais. J'aurais voulu quon nait pas  se parler.",
"Soudain, il s'est arrt et m'a fait face. Une seconde aprs, ses lvres taient  nouveau presses contre les miennes."
],
opt3: "Le laisser faire",
optPara3: [
"Je suis reste ptrifie. Avant que je comprenne ce qui tait en train de se passer, sa langue amre et sale tait dans ma bouche, et je me suis sentie mal."
],
opt4: "Le repousser",
optPara4: [
"Avant que je comprenne ce qui tait en train de se passer, sa langue amre et sale tait dans ma bouche, et je me suis sentie mal. J'ai essay de le repousser, mais il tenait ma tte entre ses mains et la gardait presse contre la sienne."
],
para3: [
"Puis on s'est retrouvs par terre. Il sest allong sur moi et a continu  enfoncer sa langue dans ma gorge. J'ai senti quelque chose contre ma jambe."
],
opt5: "L'arrter",
opt6: "Ne pas bouger",
optPara6: [
"Ses mains ont gliss sous mon sweat jusqu' mes seins, pour les saisir fermement. Il a commenc  respirer bruyamment et j'ai senti qu'il tait de plus en plus excit."
],
opt7: "Le repousser",
opt8: "Rester ptrifie",
optPara8: [
"Il s'est arrt et s'est assis. Il a ouvert son pantalon et a commenc  retirer le mien. Le sol tait froid et humide. Il allait bientt faire nuit. Il a enlev ma culotte et a sorti sa chose de son pantalon."
],
opt9: "Se dbattre",
opt10: "Se figer",
optPara10: [
"J'ai ressenti une vive douleur dans mon entrejambe quand il est entr en moi. Je ne pouvais plus bouger. Il a commenc  faire des va-et-vient. J'ai entendu des rires au loin. Quallaient dire mes parents si je tombais enceinte ? Il haletait bruyamment et des gouttes de sa sueur tombaient sur mon visage. Je suis juste reste tendue l, immobile, tandis que les heures, les jours, les annes s'coulaient.",
"Puis tout s'est arrt.",
"Il s'est relev et a remis son pantalon. Je me suis assise avec lenteur, et j'ai rcupr les vtements qu'il avait jets un peu plus loin. Tandis qu'il se rhabillait, il a dit, sans me regarder : \"Et si tu te lchais un peu plus la prochaine fois ?\"",
"J'ai remis mon pantalon une jambe aprs l'autre."
]
},

end: {
para1: [
"Je ne me souviens plus comment je suis rentre chez moi. Ma famille allait dner quand je suis entre dans la cuisine. Ma mre m'a demande pourquoi je rentrais si tt. Je lui ai rpondu que j'tais fatigue. Elle a mis une autre assiette pour moi sur la table.",
"Mon pre et mon frre dbattaient. J'ai mang du pain. Ils m'ont demand quelque chose. J'ai probablement rpondu ; ils ont repris leur conversation. Je me suis demand ce que mon frre dirait. Je me suis demand ce que ma mre penserait de moi. Je me suis demand si mon pre m'aimerait toujours.",
"Je me suis demand si je devais leur en parler."
],
opt1: "Leur en parler",
opt2: "Garder le silence",
para2: [
"Aprs le dner, je suis alle dans ma chambre. Pendant un bon moment, je suis simplement reste debout, entre ces quatre murs couleur lavande, avec mes posters d'N*SYNC, d'Avril Lavigne et de Josh Hartnett, le lit recouvert de poupes et d'ours en peluche que j'avais depuis mes quatre ans, la tl et ltagre remplie de cassettes, le bureau et la commode, dcors avec des photos, des dessins et des autocollants, le puzzle qu'on avait commenc  Nol sans jamais le terminer, les vtements rpandus sur le sol. Je connaissais cette chambre. Je l'avais dj vue auparavant. Mais elle n'tait plus  moi. Elle appartenait  quelqu'un qui ne vivait plus ici dsormais.  quelqu'un que je connaissais depuis longtemps.  quelqu'un qui tait parti, et m'avait abandonne.", 
"Je suis reste debout au milieu de la pice, jusqu' ce que mes parents aillent se coucher, jusqu' ce que les lampes s'teignent chez les voisins, jusqu' ce que mes jambes ne puissent plus me porter, et que je sois incapable de retenir mes larmes plus longtemps."
],
opt3: "Recommencer",
optPara3: [
"Il n'y a pas de recommencement. Ces vnements ont eu lieu."
]
}
}
};

Language.prototype.es =
{
menu: {
start: "Comenzar juego",
continue: "Continuar",
credits: "Crditos",
tw: "Aviso de contenido sensible",
lang: "Idioma",
why: "Por qu?",
back: "Volver a Hypnotic Owl"
},

backToMenu: "Volver al men",
continue: "Continuar",

tw: {
tw: "Aviso de contenido sensible",
para1: [
"Esto es difcil. Por un lado, esta experiencia funciona mejor sin dar indicios ni decir nada que pueda arruinarla. No puedo, sin embargo, dejar que una persona que pueda tener una reaccin fuerte y angustiante juegue sin advertirle.",
"Entonces, saquemos esto del medio primero.",
"Si simplemente hiciste click en este sitio por curiosidad o ests seguro que no hay temas que vayan a causarte un sufrimiento emocional, por favor regresa y juega primero. Estos son spoilers mayores y puedes regresar ms tarde si ests interesado."
],
para2: [
"Pero si te preocupa que surjan ciertos temas, al diablo con los spoilers. Tu bienestar es ms importante, y si estos temas actan como disparadores para t, entonces no quieres jugar esto. Confa en m.",
"Para arruinarte lo menos posible el juego, en caso que no sea un desencadenante para t, voy a referirme a los temas en dos pasos: primero las reas generales, luego como aparecen en el juego con ms detalle.", 
"Recuerda, estos son importantes spoilers, as que deja de leer en cuanto ests seguro que no te afectar. Pero si tienes la menor duda si podra hacerlo, seriamente, al demonio con los spoilers. No lo vale."
],
readTW: "Leer el aviso de contenido sensible",
warning: [
"Aviso: Violacin", 
"Si este no es un tema angustiante para t, regresa al men principal.",
"Si esto es angustiante para t, con cualquier formato o contenido, deja el juego. No te ests perdiendo de nada.",
"Si esto podra ser angustiante, dependiendo de la forma en la que sea tratado, lo desarrollar en ms detalle en la prxima etapa. Por favor ten en mente que, aunque intentar describirlo en trminos simples y sencillos, esto podra alcanzar para desencadenar una respuesta emocional."
],
readFull: "Leer el resumen completo",
full: [
"<b>The Day the Laughter Stopped</b> (\"El da que las risas se terminaron\") es un juego sobre violacin, contado desde la perspectiva de una nia de 14 aos. Ella describe en una forma desapegada, casi analtica, cmo conoce a un chico mayor en el colegio del cual se hace amiga y que, una noche, lleva las cosas ms lejos de lo que ella estaba preparada. No es violento en el sentido fsico; ella se paraliza, est demasiado asustada para hablar y l no se detiene. Te coloca, sin embargo, en su lugar y aceptando que hice bien mi trabajo, provoca una reaccin fuerte.<br/><br/>",
"Puedes leer ms sobre por qu hice esto <a href='http://hypnoticowl.com/the-day-the-laughter-stopped/' target='_blank'>aqu</a>, pero por ahora alcanza con saber que est vagamente basado en la experiencia de alguien que conozco, y aunque ella sera ciertamente la fuente ms valiosa de devolucin sobre qu tan bien logr describirlo y cun eficientemente se cuenta la historia, no la quiero siquiera cerca de este juego.",
"Lo que estoy tratando de decir es que, si eres un/a sobreviviente, preferira que no jugaras. O pdele a alguien en quien confes que lo haga primero y que te diga si lo recomienda para t. O, si sientes mucha curiosidad, pdele que te describa el juego. Solo, cudate, est bien?"
],
contact: "Si tienes comentarios o preguntas, sintete libre de contactarme:"
},

credits: {
written: "Escrito por",
translation: "Traduccin al espaol por",
author: "Victoria (para <a href='https://putxrevista.wordpress.com/' target='_blank'>Revista Putx</a>)"
},

story: {
start: {
para1: [
"Era un da lluvioso a fines de septiembre cuando se fij en m por primera vez. Mis amigas y yo volvamos de la clase de educacin fsica y nos apresurbamos a cruzar el patio del colegio para salir del fro. Lo vi parado frente a la puerta sur, en dnde los de tercer ao tenan permitido fumar.", 
"Not que me estaba siguiendo con la vista, desde el gimnasio hasta el edificio principal de la escuela. Mi corazn se aceler. Era alto, lindo y todas mis amigas gustaban de l. Yo siempre pens que l era demasiado genial para m. Era casi un adulto, y yo slo tena 14 aos.",
"Antes de entrar al colegio me detuve por un minuto, y di la vuelta para mirarlo. Ah estaba, con el cigarrillo en la mano, sus ojos todava fijos en m."
],
opt1: "Saludar con la mano",
optPara1: [
"Empec a levantar la mano, tmida y brevemente; esbozando una sonrisa que result bastante torpe. El me respondi con una sonrisa, y mi corazn di un brinco."
],
opt2: "Seguir caminando",
optPara2: [
"Cuando estaba por volverme para entrar al edificio, me sonri e hizo un leve gesto de asentimiento con su cabeza. Mis orejas estaban prendidas fuego mientras suba las escaleras."
]
},

invitation: {
para1: [
"Unas semanas ms tarde mi mejor amiga y yo nos cruzamos con l cuando bamos a la clase de ciencia. Fue la primera vez que nos hablaba, a cualquiera de nosotras. Nos paramos a conversar un rato. Mi amiga habl la mayor parte. Yo estaba demasiado nerviosa para siquiera mirarlo.",
"Cuando son el timbre, nos coment sobre una fiesta en la casa de su amigo el prximo fin de semana. Dijo que le gustaba hablar con nosotras. Dijo que ramos ms geniales que lo que pensaba. Entonces, nos pregunt si queramos ir."
],
opt1: "Aceptar",
optPara1: [
"Dudando, dije que s. Estos chicos eran mucho ms grandes que nosotras y no bamos a conocer a nadie ah, pero mi amiga dijo que iba a estar todo bien."
],
opt2: "Declinar",
optPara2: [
"No estaba cmoda con la idea. Estos chicos eran mucho ms grandes que nosotras y no bamos a conocer a nadie ah, pero antes que pudiera decir nada, mi amiga acept por las dos."
],
para2: [
"Le dije que no estaba segura que mis padres me fueran a dar permiso, y ella sugiri decirles que nos bamos a quedar a dormir en la casa de la otra. No me gustaba mentirle a mis padres, pero ella me convenci de que era la mejor opcin. Y, despus de todo, la parte importante era que l pensaba que ramos cool, y quera pasar tiempo con nosotras.",
"Yo asent, y me pas el resto de las horas de clase fantaseando sobre el fin de semana."
]
},

party: {
para1: [
"Llegamos a la fiesta a las 20:30. Alguien que nunca habamos visto abri la puerta y nos dej pasar. Haba 15 o 20 personas presentes. Tratamos de mezclarnos lo mejor que pudimos, pero pareca intil; era obvio que no encajbamos. Los minutos que pasamos paradas en el pasillo parecieron una eternidad.",
"Estaba a punto de rogarle a mi amiga que nos furamos cuando l nos encontr. Con una sonrisa enorme y clida en su rostro, se acerc y nos abraz. No saba que hacer. Me tom por sorpresa y slo me qued ah parada, rgida como una estatua.",
"Nos guo hasta el silln y nos ofreci los ltimos asientos libres. Nos sentamos y nos pas a cada un trago."
],
opt1: "Tomar",
optPara1: [
"Mi amiga agarr el trago sin dudar, y yo segu su ejemplo. Estaba nerviosa. Nunca antes haba probado el alcohol.", 
"El primer sorbo me supo raro. Intent no estremecerme. Mi amiga se vea como si lo hubiese hecho miles de veces."
],
opt2: "No tomar",
optPara2: [
"No quera verme como una perdedora y agarr el trago. Me lo llev a la boca y el olor me hizo revolver el estmago. Trat desesperadamente de lucir relajada, sosteniendo el vaso en la mano como si acabara de tomar un trago."
],
para2: [
"Empezamos a conversar. Hice lo mejor que pude para mantener la conversacin viva, esperando que eso los iba a distraer del vaso en mi mano, esperando que no fueran a notarlo.",
"Pero l era agradable. Nos present a algunos de sus amigos, y ellos hacan chistes y bromeaban, y lentamente comenc a relajarme y sentirme ms cmoda con ellos."
]
},

balcony: {
para1: [
"Ms tarde, despus de acompaar a algunos de los chicos a fumar, l y yo nos quedamos solos en el balcn. Hablamos por un largo rato. Le cont sobre la situacin con mis paps y l me habl de su ex-novia, y de cmo lo haba dejado por su mejor amigo.",
"De pronto, se inclin e intent besarme."
],
opt1: "Permitirlo",
optPara1: [
"Antes de que supiera qu estaba pasando, sus labios estaban presionados contra los mos. No saba que hacer. Estaba sorprendida y avergonzada y confundida, todo a la vez. La fuerza del beso me hizo perder el equilibrio, y trastabill."
],
opt2: "Retroceder",
optPara2: [
"Como una reaccin instintiva retroced tambaleando y lo mir fijo, asombrada. No entenda que acababa de pasar; slo saba que de pronto me senta avergonzada."
],
para2: [
"El se ri. Dijo que estaba borracho y que esto no quera decir nada. Dijo que entenda si no quera hacerlo y que me respetaba an ms por ello. Dijo que me apreciaba como amiga. Aunque todava estaba confundida y avergonzada, me sent aliviada de que lo hubiera dicho.",
"Rpidamente cambi el tema, y rogu el asunto no volviera a salir."
]
},

card: {
para1: [
"Cada vez que lo vea en el colegio en las semanas que le siguieron, estaba nerviosa de que fuera a mencionar el episodio en el balcn. Pero no lo hizo. Simplemente nos quedbamos charlando en el pasillo sobre las materias, los profesores, las notas y los prximos exmenes. l era agradable, y de a poco me fui olvidando de lo que haba pasado. A veces, incluso, me preguntaba si en verdad haba ocurrido o si simplemente me lo haba imaginado.", 
"Lleg la vspera de Navidad, y encontr una tarjeta en mi armario. Tena una foto de un gatito adorable con un gorrito de Santa Claus y deca:",
"\"Me hizo pensar en t y quise desearte una Feliz Navidad. Espero que recibas todo lo que pediste!\"",
"Estaba roja como un tomate. Mi mejor amiga me vi y me sac la tarjeta de las manos. Empez a rerse y a bromear sobre mi amante secreto. Le dije que ramos slo amigos. Me pregunt si yo iba a mandarle algo."
],
opt1: "Enviar una tarjeta",
optPara1: [
"No lo haba pensado hasta entonces y ahora ya era demasiado tarde para comprar una tarjeta. En su lugar, decid hacerle una durante la clase.",
"Pens largo rato sobre qu escribir y habr empezado al menos cien veces. Al final slo dibuj una imagen de nosotros dos debajo de un enorme rbol de Navidad y escrib: \"Feliz Navidad!\"",
"Cuando llegu a casa me sent estpida e infantil."
],
opt2: "No enviar una tarjeta",
optPara2: [
"No lo haba pensado hasta entonces y de todas formas ya era demasiado tarde para comprar una tarjeta. Durante la ltima hora, intent escribirle una nota en su lugar. Empec al menos cien veces, pero no se me ocurri nada bueno y termin yendo a casa sin responderle en absoluto."
]
},

holdinghands: {
para1: [
"Durante los meses del invierno, empezamos a vernos ms seguido. Empez a juntarse con nosotras en el patio del colegio y a venir cuando bamos de compras al centro. A mis amigas les caa bien. El era ocurrente y encantador y la pasbamos muy bien todos juntos. A veces, me senta un poco intimidada porque l era tan inteligente y maduro, pero siempre me tranquilizaba y actuaba como si no le importase que yo no lo era.",
"A veces, cuando estbamos solos, intentaba tomarme de la mano."
],
opt1: "Dejarlo",
optPara1: [
"No saba qu hacer. Era raro al principio, y otra vez me haca sentir incmoda y un poco avergonzada. Pero l actuaba como si no fuera importante y, eventualmente, yo empec a relajarme. Se volvi algo nuestro."
],
opt2: "Quitar la mano",
optPara2: [
"No saba que hacer. Estaba incmoda y un poco avergonzada, pero tampoco quera que pensara que era una niita miedosa. Dej que me tomara la mano un rato y en algn momento fing que tena que buscar algo en mi chaqueta. Despus mantuve las manos en los bolsillos as no poda sujetarme de nuevo, y rec para que no me preguntara al respecto."
]
},

kiss: {
para1: [
"Lleg la primavera y el ao escolar estaba a punto de terminar. Estbamos pasando mucho tiempo juntos, tomando caminatas largas y hablando por horas. Por primera vez en mi vida senta que alguien me entenda. Haba veces que ni siquiera mi mejor amiga saba lo que pasaba dentro mo. Intentaba hablarle de la tristeza y ese sentimiento de anhelo por algo a lo cual no poda ponerle un nombre o explicarlo, pero ella no entenda. Intentaba de hacerlo, pero sus intentos de consolarme acababan hacindome sentir ms sola que nunca. Pero l entenda. Se senta igual que yo. Me deca que era una parte inherente de crecer, darse cuenta cmo es realmente el mundo y aorar la belleza e inocencia de la infancia y aqul mundo que nos haba sido prometido. Dijo que no mucha gente comprenda esto, y que yo tena un alma gentil.", 
"En el colegio nos veamos ms que nunca, y hacamos un esfuerzo por encontrarnos en todos los recesos. Ya haba dejado de intentar explicar a mis amigas que no ramos una pareja, que lo que tenamos era mucho ms que eso, ms especial que el amor. Se burlaban, de tanto en tanto, pero no me importaba. Ellas, simplemente no entendan.",
"Lleg el da de su cumpleaos y nos invit a todos a una una fiesta en el lago para el fin de semana siguiente. El clima empezaba a ponerse ms clido y l dijo que era hora de abrir la 'temporada de fiestas'. Nosotras habamos escuchado hablar de esas famosas fiestas en el lago, pero nunca nos haban invitado a una. En ese entonces ramos nias.",
"Despus de hablar con mis amigas, me retuvo hasta que se fueran y me pidi que me encontrase con l atrs del colegio cuando terminara mis clases."
],
opt1: "Encontrarse con l",
optPara1: [
"Estaba nerviosa cuando daba la vuelta al edificio para llegar al lugar en dnde quera que nos encontrsemos. Estaba ah parado, cigarrillo en mano, sonriendo mientras me miraba acercarme. Apag el cigarrillo."
],
opt2: "Irse a casa",
optPara2: [
"Estaba nerviosa. Algo en la forma en que me lo dijo me hizo sentir incmoda, pero estaba un poco preocupada por lo que me podra decir al da siguiente si no iba.",
"Despus de clase, sal del edificio. Haba decidido irme a casa y decirle que haba pasado algo que me haba hecho olvidar. Que me haba sacado una mala nota o que mis padres me haban llamado y me haban dicho que fuera derecho a casa.",
"Ya estaba a mitad del patio cuando lo escuch que me llamaba, y un minuto despus estaba parado a mi lado. Me dijo que me haba estado esperando, y antes de que pudiera decir nada, me tom de la mano y me llev de vuelta al colegio."
],
para2: [
"Nos quedamos parados frente a frente por unos instantes, incmodamente. Dijo era el chico con ms suerte del mundo. Dijo que yo era lo mejor que le haba pasado, y que este era el mejor regalo de cumpleaos del mundo.",
"Entonces, me bes."
],
opt3: "Dejarlo",
opt4: "Retroceder",
para3: [
"Estaba en shock. Antes de que supiera qu estaba pasando l haba metido su lengua en mi boca. Tena un gusto amargo y salado, y la saliva corra desde su lengua a la ma. Me hizo revolver el estmago e intent retroceder, pero mi espalda estaba contra la pared. l se apret contra m y sent algo extrao contra mi pierna.",
"Pas una eternidad hasta que se detuvo, me sujet la mano, y me acompa a la parada del colectivo."
]
},

theday: {
para1: [
"El resto de la semana pens mucho en el asunto tratando de comprender qu haba pasado. No entenda por qu lo haba hecho; pensaba que ramos slo amigos. Trat de entender qu haba hecho mal, qu me haba perdido. Lo evit lo mejor pude y dese que el fin de semana no llegara nunca.",
"Finalmente lleg el da. Mi mejor amiga haba pasado por m. Habl hasta por los codos del chico que le gustaba y sobre lo emocionada que estaba de finalmente haber sido invitada a una fiesta real, de gente grande. Me dijo que tena esperanzas que el chico que le gustaba estuviera ah y que terminaran juntos, acurrucados bajo las estrellas despus de que todos los dems se hubieran ido.",
"Yo me senta enferma. Tena miedo de verlo, miedo de lo que me pudiera decir. No saba que se supona que tena que hacer, que se esperaba de m. No me gustaba besarlo, pero no quera perder a mi mejor amigo. Esperaba que quizs no significara nada, que era porque haba sido su cumpleaos, que era algo que hacamos como amigos, como tomarnos de la mano.",
"Cuando llegamos al lago, me sent mareada y poda escuchar el latido de mi corazn resonando en mis odos. Haba mucha gente. Algunos del colegio, a otros los reconoca de la fiesta, mis amigas. Me sent con ellos y trat de actuar normal.",
"Despus de algn tiempo, nos encontr. Lo felicitamos y se sent con nosotros; convers, hizo bromas, se ro. Poco a poco, me empec a calmar. No mencion nada, ni siquiera me toc o me prest especial atencin. Era casi como si nunca hubiera pasado, como si despus de todo no fuera una gran cosa.",
"Cuando el sol se empez a poner, sus amigos empezaron a hacer el asado. El aire pronto se llen del olor a carne a las brasas y salchichas, un aroma que siempre me haca pensar en los veranos en el jardn de mis abuelos. Mis amigos estaban dispersos entre los muchos grupitos que se haban armado, y mientras todo el mundo estaba ocupado, l se acerc y me pidi que diramos un paseo."
],
opt1: "Ir con l",
optPara1: [
"De inmediato sent miedo de que quisiera volver a besarme, o hablar de lo que haba pasado. Con el corazn en la boca, me levant y lo segu por el sendero que rodeaba el lago."
],
opt2: "Rechazar",
optPara2: [
"De inmediato sent miedo de que quisiera volver a besarme, o hablar de lo que haba pasado. Con el corazn en la boca, dije que necesitaba encontrar a mis amigas, pero l respondi que no iba a llevar mucho tiempo, que slo quera dar una vuelta. Me tom de la mano y me condujo por el sendero que rodeaba el lago."
],
para2: [
"Sujeto mi mano con firmeza mientras recorramos el sendero. Yo no quera estar ah. Tena miedo de lo que fuera a decirme. No quera hablar, ni sobre el beso, ni sobre la cosa que sent presionada contra mi pierna. Senta vergenza. Deseaba que pudiramos simplemente caminar en silencio, para siempre. Deseaba que no tuviramos que hablar.",
"De pronto se detuvo y se puso frente a m. Un instante despus, sus labios estaban apretados contra los mos."
],
opt3: "Dejarlo",
optPara3: [
"Me paraliz. Antes que supiera lo que pasaba, su lengua estaba dentro de mi boca, amarga y salada. Sent nuseas."
],
opt4: "Apartarse",
optPara4: [
"Antes que supiera lo que pasaba, su lengua estaba dentro de mi boca, amarga y salada. Sent nuseas. Trat de alejarme, pero l sostena mi cabeza entre sus manos y la mantena presionada contra la suya."
],
para3: [
"Entonces, estbamos en el suelo. l estaba recostado sobre m y segua metiendo su lengua hasta mi garganta. Sent algo presionado sobre mi pierna."
],
opt5: "Deternerlo",
opt6: "Quedarse quieta",
optPara6: [
"Sus manos se metieron por debajo de mi sweater, buscando mis pechos, agarrndolos con fuerza. Comenz a respirar con ms intensidad y poda sentir como se excitaba ms y ms."
],
opt7: "Empujarlo",
opt8: "Seguir sin moverse",
optPara8: [
"Se detuvo y se sent. Se abri la cremallera del pantaln y comenz a bajarme los mos. El suelo estaba fro y hmedo. Se estaba poniendo oscuro. Me quit la bragueta y sac su cosa de sus pantalones."
],
opt9: "Defenderse",
opt10: "Paralizarse",
optPara10: [
"Sent un dolor agudo en la entrepierna cuando la introdujo. No pude moverme. Comenz a empujar hacia adentro y hacia afuera. Escuch risas en la distancia. Me pregunt que diran mis padres si quedara embarazada. El jadeaba, fuerte, y sobre mi cara cayeron gotas de sudor. Yo solo me qued ah, echada, inmvil mientras pasaban las horas, los das, los aos.",
"Y entonces, se termin.",
"l se levant y se puso los pantalones. Yo me sent lentamente y busqu la ropa que l haba desechado. Mientras se levantaba la cremallera de su pantaln me dijo, sin mirarme, \"Qu tal si la prxima te relajas un poco?\"",
"Me puse mis pantalones, una pierna por vez."
]
},

end: {
para1: [
"No recuerdo cmo volv a casa. Mi familia estaba apunto de cenar cuando entr a la cocina. Mi mam me pregunt por qu haba regresado tan temprano. Le dije que estaba cansada. Puso un plato en la mesa para m.",
"Mi pap y mi hermano estaban discutiendo. Com pan. Me preguntaron algo. Debo haber respondido; siguieron conversando. Me pregunt que dira mi hermano. Me pregunt qu pensara mi mam de m. Me pregunt si mi pap me seguira queriendo.",
"Me pregunt si debera contarles."
],
opt1: "Contarles lo que pas",
opt2: "Quedarse en silencio",
para2: [
"Despus de la cena sub a mi habitacin. Por un momento, me qued parada en silencio entre las paredes lavanda, los posters de N*SYNC, Avril Lavigne y Josh Hartnett, la cama con muecas y osos de felpa que tena desde los cuatro aos, la tele y el estante de los videos, el escritorio y la cajonera, decoradas con fotos, dibujos y stickers, el rompecabezas que habamos empezado en Navidad y nunca habamos terminado, la ropa tirada en el piso. Conoca esta habitacin. La haba visto antes. Pero no era ma. Perteneca a alguien que ya no viva ah. Alguien a quien conoca desde haca mucho tiempo. Alguien que se haba ido, y me haba dejado ah.",
"Me qued parada en la mitad de la habitacin, hasta que mis padres se fueron a dormir, hasta que las luces de las casas vecinas se apagaron, hasta que las piernas dejaron de sostenerme y no pude aguantar las lgrimas."
],
opt3: "Empezar de nuevo",
optPara3: [
"No se puede empezar de nuevo. Esto pas."
]
}
}
};

Language.prototype.pt =
{
menu: {
start: "Iniciar Jogo",
continue: "Continuar",
credits: "Crditos",
tw: "Alerta de contedo",
lang: "Idioma",
why: "Por qu?",
back: "Voltar para Hypnotic Owl"
},

backToMenu: "Voltar para o menu",
continue: "Continuar",

tw: {
tw: "Alerta de contedo - gatilho emocional",
para1: [
" difcil de dizer. Por um lado, essa experincia funciona melhor se no houverem spoilers ou se no contarem nada sobre ela. Eu no posso, porm, deixar que pessoas que possam ter traumas  joguem este jogo sem avis-las antes.",
"Ento vamos por partes:",
"Se voc s clicou no link por curiosidade ou se voc tem certeza de que no h tpicos que possam te afligir, por favor volte e jogue o jogo primeiro. As revelaes do enredo contidas aqui so grandes, mas voc pode voltar mais tarde se voc estiver a fim."
],
para2: [
"Mas se voc est preocupada sobre certos assuntos aparecerem ou no, danem-se os spoilers. Seu bem-estar pessoal  muito mais importante, e se esse  um assunto disparador de emoes suas, ento voc realmente no ir querer jogar esse jogo. Confie em mim.",
"Para contar a histria o mnimo possvel, em caso de no ser algo que relembre traumas seus, eu vou contar sobre o que esse jogo trata em dois passos: Primeiro de forma geral, e depois de forma mais detalhada como os assuntos aparecem no jogo.",
"Lembre-se, ainda so grandes revelaes sobre o enredo, ento volte para o site assim que voc sentir que no ir te afetar. Mas mesmo se voc tiver a menor dvida sobre se te afetar ou no, srio, danem-se os spoilers. No vale a pena voc olhar."
],
readTW: "Ler o alerta",
warning: [
"Aviso de contedo: Estupro",
"Se esse assunto no  algo que te afeta emocionalmente, volte para o Menu principal.",
"Se esse assunto te afeta, de qualquer modo ou forma, saia do jogo. Voc no vai se prejudicar em nada.",
"Se isso ainda pode te incomodar, dependendo de como  apresentado, eu tentarei delinear de forma mais detalhada no prximo estgio. Por favor tenha conscincia de que, ao mesmo tempo em que vou tentar descrever em termos simples e claros, isso ainda pode ser um disparador para voc."
],
readFull: "Ler descrio completa",
full: [
"<b>The Day the Laughter Stopped</b> (\"O Dia em que o Riso Acabou\")  um jogo sobre estupro, contado a partir da perspectiva de uma garota de 14 anos. Ela descreve, de forma detalhada, quase analtica, como ela conhece um garoto mais velho no colgio, de quem ela se torna amiga e em uma noite leva as coisas alm do que ela est preparada. No  violento no sentido fsico; ela congela, fica muito assustada para falar, e ele no para. Porm, ele te coloca no lugar dela e, dado que eu fiz o que tinha que fazer da maneira correta, provoca uma reao forte.<br/><br/>",
"Voc pode ler mais sobre o porqu eu fiz isso <a href='http://hypnoticowl.com/the-day-the-laughter-stopped/' target='_blank'>aqui</a>, mas por enquanto, s saiba que esse jogo  baseado de certa forma com a experincia de algum que eu conheo, e apesar de ela ser com certeza a fonte mais valiosa de um retorno sobre se eu descrevi de forma correta e condizente com a realidade e se ele conta a histria efetivamente, eu no quero que ela se aproxime de alguma forma desse jogo.",
"O que eu estou tentando dizer  que, se voc  uma sobrevivente, eu recomendaria que voc no o jogasse. Ou pea para algum que voc confia jogue o jogo primeiro e te diga se recomendaria ou no o jogo para voc. Ou, se voc est realmente curiosa, deixe que essa pessoa descreva o jogo para voc. O importante  que voc se cuide, tudo bem?"
],
contact: "Se voc tiver comentrios ou questes, sinta-se livre para entrar em contato comigo:"
},

credits: {
written: "Escrito por",
translation: "Traduo em portugus por",
author: "Pedro Augusto (<a href='https://www.facebook.com/pedroaugustochiiip' target='_blank'>fb</a>)<br/>Lara Luccas (<a href='https://www.facebook.com/lara.luccas' target='_blank'>fb</a>)"
},

story: {
start: {
para1: [
"Era um dia chuvoso em meados de Setembro quando ele me notou pela primeira vez. Eu e minhas amigas estvamos saindo da aula de Educao Fsica e atravessando com pressa a rea externa do colgio para no ficarmos no frio. Eu o vi em frente  entrada sul, onde os alunos do 3 ano tinham permisso para fumar.",
"Eu reparei que ele estava olhando para mim durante todo o percurso do ginsio em direo ao prdio principal do colgio. Meu corao acelerou. Ele era alto, bonito, e todas as minhas amigas tinham uma queda por ele. Eu sempre o achei um cara legal demais para algum como eu. Ele era praticamente um adulto, e eu s tinha 14 anos.",
"Antes de entrar no prdio principal, eu parei por um momento e olhei de volta para ele. L estava ele, com um cigarro na mo, e com os olhos ainda fixos em mim."
],
opt1: "Acenar",
optPara1: [
"Eu comecei a levantar a mo, de um jeito tmido e devagar, e tentei dar um sorriso meio constrangedor. Ele sorriu de volta para mim, e meu corao deu um salto."
],
opt2: "Continuar andando",
optPara2: [
"Quando eu estava prestes a continuar meu caminho, ele sorriu para mim e me deu um leve aceno com a cabea. Minhas bochechas ficaram vermelhas quando eu comecei a subir as escadas."
]
},

invitation: {
para1: [
"Algumas semanas depois, minha melhor amiga e eu nos encontramos com ele nos corredores durante nossa ida  aula de Cincias. Era a primeira vez que ele falava conosco. Ns ficamos por l e conversamos por um tempo. Minha amiga praticamente falou sozinha. Eu estava muito nervosa para sequer olhar para ele.",
"Quando o sinal tocou, ele nos contou sobre uma festa que aconteceria na casa de um amigo dele naquele fim de semana. Ele disse que gostou de conversar com a gente. Ele disse que ramos mais legais do que ele pensava. Ento ele perguntou se queramos ir  festa."
],
opt1: "Aceitar",
optPara1: [
"Hesitante, eu concordei em ir. Os amigos dele eram bem mais velhos do que ns e no conheceramos ningum l, mas minha amiga disse que tudo seria tranquilo."
],
opt2: "Recusar",
optPara2: [
"Eu no estava confortvel com a ideia. Os amigos dele eram bem mais velhos do que ns e no conheceramos ningum l, mas antes que eu pudesse dizer algo, minha amiga aceitou o convite por ns duas."
],
para2: [
"Eu disse para ela que no tinha certeza se meus pais me deixariam ir, e ela sugeriu que dissssemos que iramos dormir uma na casa da outra. Eu no gostei da ideia de mentir para os meus pais, mas ela me convenceu que valeria a pena. E afinal, o que importava era que ele achava que ramos legais, e ele queria sair com a gente.",
"Eu balancei positivamente a cabea, e passei o resto das minhas aulas sonhando acordada com o fim de semana."
]
},

party: {
para1: [
"Ns chegamos na festa aproximadamente s 8:30 da noite. Algum que ns nunca vimos antes abriu a porta e nos deixou entrar. Havia quinze ou vinte pessoas presentes. Tentamos nos enturmar da melhor maneira possvel, mas no tinha como; estava na cara que ns no pertencamos quele grupo. O tempo que passamos paradas no corredor da casa pareceu uma eternidade.",
"Eu estava prestes a pedir para irmos embora com minha amiga quando ele nos encontrou. Com um sorriso grande e caloroso no rosto, ele veio e nos abraou. Eu no sabia o que fazer. Eu fui pega de surpresa e fiquei l parada, dura que nem uma tbua.",
"Ele nos guiou em direo ao sof e nos ofereceu os ltimos assentos disponveis. Sentamos, e ele entregou bebidas para ns duas."
],
opt1: "Beber",
optPara1: [
"Minha amiga tomou a bebida sem hesitar, e eu o fiz em seguida. Eu estava nervosa. Eu nunca tinha bebido antes.",
"O primeiro gole pareceu estranho. Eu tentei segurar um calafrio. Minha amiga dava a impresso de que ela j tinha bebido mil vezes anteriormente."
],
opt2: "No beber",
optPara2: [
"Eu no queria parecer uma perdedora e aceitei a bebida. Eu a levei direto  minha boca e o cheiro fez o meu estmago se revirar. Eu tentei desesperadamente parecer relaxada, segurando o copo casualmente em minhas mos como se tivesse acabado de tomar um gole."
],
para2: [
"Ns comeamos a conversar. Eu fiz o meu melhor para que a conversa continuasse, esperando que isso os distrasse do copo na minha mo, com esperana de que eles no notariam que eu no estava bebendo.",
"Mas ele era gentil. Ele nos apresentou a alguns dos seus amigos, que contavam piadas e faziam coisas engraadas, e eu lentamente comecei a relaxar e me sentir confortvel por perto deles."
]
},

balcony: {
para1: [
"Mais tarde ainda naquela noite, depois de termos nos juntado a alguns dos amigos que estavam fumando na varanda, eu e ele ficamos distantes deles e sozinhos. Ns conversamos por um bom tempo. Eu falei sobre a minha situao com meus pais, e ele me contou sobre sua ex-namorada e como ela tinha o trocado por seu melhor amigo.",
"De repente, ele se curvou e tentou me beijar."
],
opt1: "Deixar que ele o faa",
optPara1: [
"Antes de eu entender o que estava acontecendo, os lbios dele se pressionaram contra os meus. Eu no sabia o que fazer. Eu estava chocada e envergonhada e confusa ao mesmo tempo. A fora do beijo me fez perder o equilbrio, e eu recuei."
],
opt2: "Recuar",
optPara2: [
"Como resposta imediata, eu recuei e fiquei encarando ele, chocada. Eu no entendi o que tinha acabado de acontecer; tudo que eu sabia era que eu de repente me senti consciente do que tinha acontecido e envergonhada."
],
para2: [
"Ele riu. Ele falou que estava bbado e que isso no queria dizer nada. Ele disse que estava tudo bem se eu no queria beijar e que me respeitava ainda mais por causa disso. Ele disse que me apreciava como uma amiga. Apesar de ainda estar confusa e envergonhada, eu tambm estava um pouco mais tranquila por ele ter dito isso.",
"Rapidamente, eu mudei de assunto e torci para que esse isso no voltasse  conversa."
]
},

card: {
para1: [
"Sempre que eu o via na escola nas semanas seguintes, eu esperava que ele mencionasse o nosso encontro na varanda. Mas ele no disse nada. Ns s conversamos nos corredores sobre nossas aulas,  professores, notas, e provas que estavam por vir. Ele foi gentil, e eu fui lentamente comeando a me esquecer do que aconteceu. s vezes eu at me perguntava se realmente isso tinha acontecido, ou se era s minha imaginao.",
"No dia anterior ao recesso de Natal, eu encontrei um carto no meu armrio. Ele tinha uma figura de um gatinho bonitinho com um chapu de Papai Noel que dizia:",
"\"Esse carto me lembrou de voc, e eu gostaria de te desejar um Natal peRRRRfeito. Eu espero que tudo que voc desejou acontea!\"",
"Meu rosto estava vermelho. Minha melhor amiga me viu e tomou o carto das minhas mos. Ela comeou a dar risinhos e me questionar sobre 'o meu amor secreto'. Eu disse para ela que ramos apenas amigos. Ela me perguntou se eu iria enviar algo para ele tambm."
],
opt1: "Enviar um carto",
optPara1: [
"Eu no tinha pensado sobre isso at agora, ento era tarde demais para comprar um carto. Ao invs de comprar, eu decidi que iria fazer um eu mesma para ele durante a aula.",
"Eu pensei bastante sobre o que eu poderia escrever, e acabei fazendo e refazendo o carto umas 100 vezes. Por fim, eu s desenhei uma imagem de ns dois embaixo de uma rvore de Natal gigante e escrevi, \"Feliz Natal!\"",
"Eu me senti estpida e infantil quando cheguei em casa."
],
opt2: "No enviar um carto",
optPara2: [
"Eu no tinha pensado sobre isso at agora, mas era tarde demais para comprar um carto de uma forma ou de outra. Ao invs disso, eu tentei escrever um bilhete para ele durante minhas ltimas aulas. Eu fiz e refiz umas 100 vezes, mas eu no conseguia escrever nada bom e eu fui embora pra casa sem dar uma resposta."
]
},

holdinghands: {
para1: [
"Durante os meses de inverno, ns comeamos a nos ver mais. Ele comeou a andar com a gente na sada da escola e colava quando amos ao shopping na cidade. Minhas amigas gostavam dele. Ele era extrovertido e encantador e todos ns nos divertamos muito juntos. Era timo ter ele ao nosso lado. De vez em quando, eu ficava um pouco acanhada porque ele era to esperto e maduro, mas ele sempre fazia com que eu relaxasse e agia como se ele no ligasse por eu no ser to boa quanto ele.",
"s vezes, quando estvamos sozinhos, ele tentava segurar minha mo."
],
opt1: "Deixar ele segurar",
optPara1: [
"Eu no sabia o que fazer. Pareceu estranho no comeo, e novamente eu me senti desconfortvel e um pouco envergonhada. Mas ele agia como se no fosse nada demais, e eventualmente, eu fiquei mais relaxada. Era s algo que fazamos."
],
opt2: "No deixar ele segurar",
optPara2: [
"Eu no sabia o que fazer. Eu me sentia desconfortvel e um pouco embaraada, mas eu no queria que ele pensasse que eu era uma criancinha assustada. Eu deixei ele segurar por um tempo antes de fingir que estava procurando algo no meu casaco. Depois, eu mantive minhas mos nos bolsos para que ele no pudesse peg-las novamente, e torcia para que ele no me perguntasse nada sobre isso."
]
},

kiss: {
para1: [
"A primavera chegou e o ano letivo estava perto de acabar. A gente estava passando um tempo enorme juntos, fazendo caminhadas e conversando por horas. Pela primeira vez na minha vida, eu senti como se algum me entendesse. Nem a minha melhor amiga entendia o que se passava dentro de minha cabea s vezes. Eu tentei falar com ela sobre a tristeza e a nsia de algo que eu no conseguia dizer o que era ou explicar, mas ela no conseguiu entender. Ela tentou, mas suas tentativas em me consolar s faziam eu me sentir mais solitria do que nunca. Mas ele entendia. Ele se sentia do mesmo jeito. Ele disse que era um processo de quando crescamos, de percebermos como o mundo realmente  e procurarmos a alegria e beleza da inocncia de quando ramos crianas e o mundo que tinham nos prometido. Ele disse que nem todos entendiam isso e que eu tinha uma alma nobre.",
"Na escola ns nos vamos mais do que nunca, e tentvamos nos encontrar durante todos os perodos. Eu parei de tentar explicar para minhas amigas que ns no ramos um casal, que o que ns tnhamos era muito mais do que isso, mais especial do que amor. Elas me zoavam por causa disso uma vez ou outra, mas eu no me importava. Elas s no conseguiam entender.",
"O aniversrio dele chegou, e ele convidou todas ns para a festa no lago que ele queria fazer no prximo fim de semana. O tempo estava lentamente comeando a ficar mais quente, e ele disse que era poca de fazer festas ao ar livre. Ns j tnhamos ouvido falar das tais festas do lago, mas nunca fomos convidadas para uma. At ento ns ramos crianas.",
"Depois que ele falou com minhas amigas, ele me pediu para esper-lo at que elas fossem embora e me disse para encontr-lo atrs do colgio depois da minha ltima aula."
],
opt1: "Encontrar-se com ele",
optPara1: [
"Eu estava nervosa quando eu dei a volta no prdio para ir ao lugar que ele queria me encontrar. L estava ele, com um cigarro na mo, sorrindo enquanto via eu me aproximando. Ele apagou o cigarro."
],
opt2: "Ir para casa",
optPara2: [
"Eu estava nervosa. Algo no jeito que ele disse isso fez com que eu me sentisse desconfortvel, mas eu estava preocupada com o que ele ia dizer no dia seguinte se eu no aparecesse.",
"Depois da aula, eu sa do colgio. Eu decidi ir para casa e contar que algo havia acontecido que me fez esquecer sobre o encontro, que eu tinha tirado uma nota ruim ou que meus pais tinham me ligado e dito para eu vir direto para casa.",
"Eu estava na metade do caminho para a sada quando eu ouvi ele chamar pelo meu nome, e logo depois, ele estava do meu lado. Ele disse que estava esperando por mim, e antes que eu pudesse dizer qualquer coisa, ele pegou a minha mo e me guiou para o fundo do prdio do colgio."
],
para2: [
"Ns ficamos l, constrangidos por um momento, um encarando o outro. Ele disse que ele era o cara mais sortudo do mundo. Ele disse que eu era a melhor coisa que j tinha acontecido a ele, e que esse era o melhor presente de aniversrio de todos.",
"Ento ele me beijou."
],
opt3: "Permitir",
opt4: "Se afastar",
para3: [
"Eu estava em choque. Antes de eu saber o que estava acontecendo, ele botou sua lngua na minha boca. O gosto era amargo e salgado, e sua saliva vinha para a minha boca. Meu estmago se revirou e eu tentei me afastar, mas minhas costas estavam contra a parede. Ele estava pressionado contra mim e eu senti algo estranho na minha perna.",
"Uma eternidade se passou antes dele parar, pegar na minha mo, e me levar em direo ao ponto de nibus."
]
},

theday: {
para1: [
"Eu passei o resto da semana tentando entender o que havia acontecido. Eu no conseguia compreender porque ele tinha feito isso; eu achava que ramos apenas amigos. Eu quis entender o que eu tinha feito de errado, onde eu falhei. Eu o evitei o mximo que pude e esperei que o fim de semana nunca chegasse.",
"E ele tinha chegado. Minha melhor amiga tinha vindo para me buscar. Ela tagarelou o tempo inteiro sobre o garoto por quem ela tinha uma queda, e a sensao de finalmente ser convidada para uma verdadeira festa de gente grande. Ela me disse que esperava que o garoto estivesse l e imaginando como seria no final, eles dois juntinhos embaixo da escada depois que todo mundo tivesse ido embora.",
"Eu me senti horrvel. Eu estava com medo de v-lo, com medo do que ele pudesse dizer. Eu no sabia o que eu deveria fazer agora, o que ele esperava de mim. Eu no gostei de ter beijado ele, mas eu no queria perder meu melhor amigo. Eu esperava que no tivesse significado nada, que era s pelo fato de ser aniversrio dele, algo que fizemos como amigos, que nem andar de mos dadas.",
"Quando chegamos ao lago, eu me sentia atordoada e conseguia ouvir a minha pulsao. Havia muitas pessoas l. Algumas do colgio, algumas eu reconheci por causa da outra festa, e minhas amigas. Eu sentei com elas e tentei agir normalmente.",
"Depois de um tempo ele nos encontrou. Ns o parabenizamos e ele sentou conosco, conversou, contou piadas, riu. Devagar, eu comecei a me acalmar. Ele no mencionou nada do que tinha acontecido e no estava em contato prximo comigo ou no me deu ateno especial. Era como se no tivesse acontecido nada, como se afinal no importasse.",
"Quando o sol comeou a se pr, os amigos dele comearam a fazer churrasco com as grelhas que eles trouxeram. O ar logo ficou empesteado com o cheiro de bife e linguia assados, um cheiro que sempre me fez lembrar dos veres no jardim dos meus avs. Minhas amigas logo estavam dispersas nos pequenos grupos que tinham se formado, e enquanto todo mundo estava ocupado, ele veio at mim e me convidou para dar uma volta."
],
opt1: "Ir com ele",
optPara1: [
"Eu imediatamente fiquei com medo dele me beijar de novo ou de querer conversar sobre o acontecido. Com o corao na boca, eu me levantei e segui com ele pela trilha ao redor do lago."
],
opt2: "Recusar",
optPara2: [
"Eu imediatamente fiquei com medo dele me beijar de novo ou de querer conversar sobre o acontecido. Com o corao na boca, eu disse que precisava falar uma coisa com minhas amigas, mas ele disse que no demoraria, que ele s queria conversar. Ele pegou a minha mo e me guiou pela trilha ao redor do lago."
],
para2: [
"Ele segurou apertado a minha mo enquanto andvamos pela trilha. Eu no queria estar ali. Eu estava com medo do que ele iria dizer. Eu no queria conversar, no queria conversar sobre o beijo, sobre o que eu tinha sentido pressionar a minha perna. Eu estava envergonhada. Eu queria que pudssemos somente andar silenciosamente que nem desse jeito para sempre. Eu desejei que no tivssemos que conversar.",
"De repente ele parou e comeou a me encarar. Logo depois, os seus lbios estavam se pressionando contra os meus."
],
opt3: "Deix-lo continuar",
optPara3: [
"Eu congelei. Antes que eu percebesse o que estava acontecendo, a lngua dele estava na minha boca, amarga e salgada, e eu me senti muito mal."
],
opt4: "Afastar-se",
optPara4: [
"Antes que eu percebesse o que estava acontecendo, a lngua dele estava na minha boca, amarga e salgada, e eu me senti muito mal. Eu tentei me afastar, mas ele segurou a minha cabea com a suas mos e a manteve pressionada contra a dele."
],
para3: [
"Ento fomos para o cho. Ele se deitou por cima de mim e continuava a enfiar sua lngua dentro da minha garganta. Eu senti algo contra a minha perna."
],
opt5: "Impedi-lo",
opt6: "Ficar imvel",
optPara6: [
"Suas mos entraram por baixo do meu suter e alcanaram os meus seios, agarrando eles forte. Ele comeou a respirar de forma ofegante e eu percebi ele ficando mais e mais excitado."
],
opt7: "Empurr-lo para trs",
opt8: "Continuar imvel",
optPara8: [
"Ele parou e se sentou. Ele abriu o zper de suas calas e comeou a abaixar as minhas. O cho estava frio e mido. Estava comeando a escurecer. Ele puxou a minha calcinha e tirou a sua coisa de dentro da cueca."
],
opt9: "Combat-lo",
opt10: "Congelar",
optPara10: [
"Eu senti uma dor aguda nas minhas entranhas quando ele entrou em mim. Eu no conseguia me mover. Ele comeou um vai e vem. Eu ouvi risadas  distncia. Eu imaginei o que meus pais iriam dizer se eu dissesse que fiquei grvida. Ele estava arduamente ofegante e gotas de suor caram no meu rosto. Eu s fiquei deitada, parada e imvel, enquanto horas, dias, anos se passavam.",
"E ento tinha acabado.",
"Ele se levantou e vestiu suas calas. Eu lentamente me sentei e olhei as roupas que ele tinha espalhado ao redor. Enquanto ele se vestia, ele disse, sem olhar para mim, \"Que tal se voc relaxasse um pouco mais na prxima?\"",
"Eu coloquei minhas calas uma perna de cada vez."
]
},

end: {
para1: [
"Eu no lembro como eu voltei para casa. Minha famlia estava prestes a comear a jantar quando eu entrei na cozinha. Minha me perguntou porque eu tinha voltado to cedo. Eu disse a ela que eu estava cansada. Ela colocou um prato para mim.",
"Meu pai e meu irmo estavam discutindo. Eu comi um po. Eles me perguntaram alguma coisa. Eu devo ter respondido, porque eles continuaram a conversar. Eu pensei o que meu irmo diria sobre isso. Eu imaginei o que minha me pensaria de mim. Eu me perguntei se meu pai ainda me amaria.",
"Eu me perguntei se deveria contar para eles."
],
opt1: "Contar o que aconteceu",
opt2: "Ficar quieta",
para2: [
"Depois do jantar eu fui para o meu quarto. Por um momento, eu s fiquei em silncio entre as paredes de cor lils, os psteres de N*SYNC, Avril Lavigne e Josh Hartnett, a cama com as bonecas e os ursinhos de pelcia que eu tinha desde os quatro anos, a TV e a prateleira com os filmes, a mesa e a cmoda, decoradas com fotos, desenhos, e adesivos, o quebra-cabea que comeamos no Natal mas nunca terminamos, as roupas espalhadas no cho. Eu conhecia esse quarto. Eu j tinha visto antes. Mas ele no era meu. Ele pertencia a algum que no vivia mais aqui. Algum que eu conheci por um bom tempo. Algum que tinha ido embora, e me deixado para trs.",
"Eu fiquei em p no meio do quarto, at que meus pais foram dormir, at que as luzes das casas ao redor se apagassem, at que minhas pernas no conseguissem mais me aguentar e eu no pudesse segurar mais nenhum instante as minhas lgrimas."
],
opt3: "Comear De Novo",
optPara3: [
"No h como recomear. Isso aconteceu."
]
}
}
};
