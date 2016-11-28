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
		reset: "Reset Game?"
	},

	backToMenu: "Back to Menu",
	continue: "Continue",
	resetGame: "Reset Game",

	credits: {
		written: "written by"
	},

	story: {
		start: {
			head: [
				"11:32:19", "P1", "Hey, @user (you)",
                                "11:32:20", "P2", "Hey @user, sup?"
			],
			opt1: "Nothing much... just got home from work",
			optPara1: [
				"11:32:31",
				"You",
				"Nothing much... just got home"
			],
			tail: [
				"11:32:32",
				"P1",
				"Cool, cool"
			]
		},

		II: {
			head: [
				"11:32:33", "P2", "So what was that you were saying @P1",
				"11:32:34", "P1", "Yeah, so, there I was, at this party saturday",
				"11:32:35", "P1", "And I saw this girl just standing there by herself...",
				"11:32:36", "P2", "\"So I pounced on my prey\" right? :p",
				"11:32:37", "P1", "Of-fucking-course! I went there to get laid, didn't I?",
				"11:32:38", "P1", "So yeah, I went over and started to talk to her, and maybe I was just a little too drunk, cause I didn't think anything was off about her..."
			],
			opt1: "Off? What do you mean?",
			optPara1: [
				"11:32:39", "User", "Off? What do you mean?",
				"11:32:40", "P1", "Well, just listen to this..."
			],
			opt2: "Say nothing and let P1 continue",
			optPara2: [],
			tail: [
				"11:32:41", "P2", "Oh, you know what that means (;"
			]
		},

		III: {
			head: [
				"11:32:42", "P1", "Yeah, exactly lol... and it just so happened that she and I began making out right there",
				"11:32:43", "P1", "So I pulled back and started leading her back to the room which she mentioned was hers while we were talking.",
				"11:32:44", "P2", "Lol, P1, you're not someone to take it slowly :p",
				"11:32:45", "P1", "fuck no :P",
				"11:32:46", "P1", "But here's what I meant when I said \"something off\"",
				"11:32:47", "P1", "She sat on down on the bed and I started to take off some of her clothes:",
				"11:32:48", "P2", "Oh shit, no way o_O",
				"11:32:49", "P1", "yeah... well... let's just say that there was a bit more 'volume' under that skirt than I signed up for"
			],
			opt1: "What do you mean?",
			optPara1: [
				"11:32:50", "User", "What do you mean?",
				"11:32:51", "P1", "She was a tranny!"
			],
			tail: [
  				"11:32:52", "P1", "I just backed off and said \"fuck no, I'm not gay, I'm not having sex with a dude.\"" 
			]
		},

		IV: {
			head: [
				"11:32:53", "P2", "Holy shit...",
				"11:32:54", "P1", "Yeah, <em>he</em> just started crying but I was out of there..."
			],
			opt1: "Oh my god, you shouldn't have said something so mean",
			optPara1: [
				"11:32:55", "User", "Oh my god, you shouldn't have said something so mean",
				"11:32:56", "P1", "Huh? I mean, she's a guy and I'm not about to have sex with one...",
				"11:32:57", "User", "I'm trans, and I'm not a guy... and neither is she..."
			],
			opt2: "You know, I'm trans, and that is really offensive",
			optPara2: [
				"11:32:58", "User", "You know, I'm trans, and that is really offensive.",
				"11:32:59", "P1", "Dude, chill... I'm just not into having sex with a dude.",
				"11:33:00", "User", "I'm not a dude, and neither is she."
			],
			tail: [
				"11:33:01", "User", "It shouldn't matter that you don't want to have sex with her, you shouldn't be so rude about it",
				"11:33:02", "User", "She's probably incredibly self-conscious about that and you had to reject her about something she can't change"
			]
		},

		V: {
			head: [
				"11:33:03", "P1", "Wow, don't be such a bitch about it.",
				"11:33:04", "P2", "Yeah, seriously... just chill",
				"11:33:05", "P1", "I mean, still, he--she--whatever... they shouldn't have lead me on like that",
				"11:33:06", "P2", "Yeah, kind of a dick move to make you think that they were a girl.",
				"11:33:07", "User", "<em>She</em> is a girl!"
			],
			opt1: "What dick move did she make? she just wanted sex like you",
			optPara1: [
				"11:33:08", "User", "What dick move did she make? she just wanted sex like you",
				"11:33:09", "P1", "But she's a he when it comes to that stuff..."
			],
			opt2: "How am I being a bitch?? I was just defending a girl you hurt emotionally!",
			optPara2: [
				"11:33:10", "User", "How am I being a bitch?? I was just defending a girl you hurt emotionally!",
				"11:33:11", "P1", "But it was totally her fault, I mean... she's a he when it comes to that kind of stuff"
			],
			tail: [
				"11:33:12", "P1", "I mean, why do you and other trannys even do it?"
			]
		},

		VI: {
			head: [
				 "11:33:13", "P1", "Who even wants to have sex with you?",
				 "11:33:14", "P2", "Yeah lol? I mean, you're too much of a girl for gay guys but you're too much of a guy for straight guys."
			],
			opt1: "Ugh, I'm not even into guys...",
			optPara1: [
				 "11:33:15", "User", "Ugh, I'm not even into guys..."
			],
			opt2: "There are a lot of guys into transgirls",
			optPara2: [
				 "11:33:16", "User", "There are a lot of guys into transgirls",
				 "11:33:17", "P1", "I'm sure they're all weird tho lol",
				 "11:33:18", "User", "I'm sure they're not...",
				 "11:33:19", "P1", "Have you ever dated any?",
				 "11:33:20", "User", "No, I'm not even into guys"
			],
			tail: [
				 "11:33:21", "P1", "Ohhh, I get it."
			]
		},

		end: {
			head: [
  				"11:33:22", "User", "Omg, why am I even talking to you..."
			],
			opt1: "Log out",
			optPara1: [
			
			],
			tail: [
			]
		}
	}
};

