function Story(game) {
	this.game = game;

	this.current = "start";
	this.pages = {};
	this.savepointer = 0;

	this.breaker = document.createElement("p");
	$(this.breaker).text("* * *");
	$(this.breaker).addClass("pagebreak");

	this.transition = 2;
}

Story.prototype = {
	setup: function setup() {
		this.current = "start";
		this.pages = {};
		this.savepointer = 0;

		this.createPage(
			"start",

			this.createParagraph(this.game.lang.current.story.start.para1),

			[
				[
					this.createChoice(
						"wave",
						this.game.lang.current.story.start.opt1,
						this.createParagraph(this.game.lang.current.story.start.optPara1)
					),

					this.createChoice(
						"keepwalking",
						this.game.lang.current.story.start.opt2,
						this.createParagraph(this.game.lang.current.story.start.optPara2)
					)
				],

			null
			],

			this.createContinue("invitation")
		);

		this.createPage(
			"invitation",

			this.createParagraph(this.game.lang.current.story.invitation.para1),

			[
				[
					this.createChoice(
						"accept",
						this.game.lang.current.story.invitation.opt1,
						this.createParagraph(this.game.lang.current.story.invitation.optPara1)
					),

					this.createChoice(
						"decline",
						this.game.lang.current.story.invitation.opt2,
						this.createParagraph(this.game.lang.current.story.invitation.optPara2)
					)
				],

				this.createParagraph(this.game.lang.current.story.invitation.para2)
			],

			this.createContinue("party")
		);

		this.createPage(
			"party",

			this.createParagraph(this.game.lang.current.story.party.para1),

			[
				[
					this.createChoice(
						"drink",
						this.game.lang.current.story.party.opt1,
						this.createParagraph(this.game.lang.current.story.party.optPara1)
					),

					this.createChoice(
						"dontdrink",
						this.game.lang.current.story.party.opt2,
						this.createParagraph(this.game.lang.current.story.party.optPara2)
					)
				],

				this.createParagraph(this.game.lang.current.story.party.para2)
			],

			this.createContinue("balcony")
		);

		this.createPage(
			"balcony",

			this.createParagraph(this.game.lang.current.story.balcony.para1),

			[
				[
					this.createChoice(
						"lethim",
						this.game.lang.current.story.balcony.opt1,
						this.createParagraph(this.game.lang.current.story.balcony.optPara1)
					),

					this.createChoice(
						"pullback",
						this.game.lang.current.story.balcony.opt2,
						this.createParagraph(this.game.lang.current.story.balcony.optPara2)
					)
				],

				this.createParagraph(this.game.lang.current.story.balcony.para2)
			],

			this.createContinue("card")
		);

		this.createPage(
			"card",

			this.createParagraph(this.game.lang.current.story.card.para1),

			[
				[
					this.createChoice(
						"sendacard",
						this.game.lang.current.story.card.opt1,
						this.createParagraph(this.game.lang.current.story.card.optPara1)
					),

					this.createChoice(
						"dontsendacard",
						this.game.lang.current.story.card.opt2,
						this.createParagraph(this.game.lang.current.story.card.optPara2)
					)
				],

				null
			],

			this.createContinue("holdinghands")
		);

		this.createPage(
			"holdinghands",

			this.createParagraph(this.game.lang.current.story.holdinghands.para1),

			[
				[
					this.createChoice(
						"lethim",
						this.game.lang.current.story.holdinghands.opt1,
						this.createParagraph(this.game.lang.current.story.holdinghands.optPara1)
					),

					this.createChoice(
						"pullaway",
						this.game.lang.current.story.holdinghands.opt2,
						this.createParagraph(this.game.lang.current.story.holdinghands.optPara2)
					)
				],

			null
			],

			this.createContinue("kiss")
		);

		this.createPage(
			"kiss",

			this.createParagraph(this.game.lang.current.story.kiss.para1),

			[
				[
					this.createChoice(
						"meethim",
						this.game.lang.current.story.kiss.opt1,
						this.createParagraph(this.game.lang.current.story.kiss.optPara1)
					),

					this.createChoice(
						"gohome",
						this.game.lang.current.story.kiss.opt2,
						this.createParagraph(this.game.lang.current.story.kiss.optPara2)
					)
				],

				this.createParagraph(this.game.lang.current.story.kiss.para2),

				[
					this.createChoice(
						"lethim",
						this.game.lang.current.story.kiss.opt3,
						null
					),

					this.createChoice(
						"pullback",
						this.game.lang.current.story.kiss.opt4,
						null
					)
				],

				this.createParagraph(this.game.lang.current.story.kiss.para3),
			],

			this.createContinue("theday")
		);

		this.createPage(
			"theday",

			this.createParagraph(this.game.lang.current.story.theday.para1),

			[
				[
					this.createChoice(
						"gowithhim",
						this.game.lang.current.story.theday.opt1,
						this.createParagraph(this.game.lang.current.story.theday.optPara1)
					),

					this.createChoice(
						"refuse",
						this.game.lang.current.story.theday.opt2,
						this.createParagraph(this.game.lang.current.story.theday.optPara2)
					)
				],

				this.createParagraph(this.game.lang.current.story.theday.para2),

				[
					this.createChoice(
						"lethim",
						this.game.lang.current.story.theday.opt3,
						this.createParagraph(this.game.lang.current.story.theday.optPara3)
					),

					this.createChoice(
						"pullaway",
						this.game.lang.current.story.theday.opt4,
						this.createParagraph(this.game.lang.current.story.theday.optPara4)
					)
				],

				this.createParagraph(this.game.lang.current.story.theday.para3),

				[
					this.createChoice(
						"0",
						this.game.lang.current.story.theday.opt5,
						null
					),

					this.createChoice(
						"staystill",
						this.game.lang.current.story.theday.opt6,
						this.createParagraph(this.game.lang.current.story.theday.optPara6)
					)
				],

				null,

				[
					this.createChoice(
						"1",
						this.game.lang.current.story.theday.opt7,
						null
					),

					this.createChoice(
						"remainstill",
						this.game.lang.current.story.theday.opt8,
						this.createParagraph(this.game.lang.current.story.theday.optPara8)
					)
				],

				null,

				[
					this.createChoice(
						"2",
						this.game.lang.current.story.theday.opt9,
						null
					),

					this.createChoice(
						"freezeup",
						this.game.lang.current.story.theday.opt10,
						this.createParagraph(this.game.lang.current.story.theday.optPara10)
					)
				],

				null
			],

			this.createContinue("end")
		);

		this.createPage(
			"end",

			this.createParagraph(this.game.lang.current.story.end.para1),

			[
				[
					this.createChoice(
						"3",
						this.game.lang.current.story.end.opt1,
						null
					),

					this.createChoice(
						"staysilent",
						this.game.lang.current.story.end.opt2,
						null
					)
				],

				this.createParagraph(this.game.lang.current.story.end.para2),

				[
					this.createChoice(
						"startover",
						this.game.lang.current.story.end.opt3,
						this.createParagraph(this.game.lang.current.story.end.optPara3)
					)
				],

				null
			],

		//	this.createReset("menu", this.game.lang.current.backToMenu, this.game.save.reset)
			this.createContinue("menu", this.game.lang.current.backToMenu, this.exit)
		//	this.createContinue("menu", this.game.lang.current.resetGame, this.save.reset)
		);
	},

	handleChoice: function handleChoice(e) {
		this.game.audioplayer.playSound("click");

		var choice = $(e.target).attr("choice");

		if (choice != null && choice.length > 1) {
			if (this.game.save.savegame[this.current] == null)
			this.game.save.savegame[this.current] = [];

			var curChoice = this.savepointer;

			if (curChoice * 2 > this.pages[this.current].choices.length - 1) {
				if (this.game.loading)
				this.game.loading = false;
				return;
			}

			var dest = $(".disposable").offset().top + 0;

			$(".disposable").remove();
			var choices = this.pages[this.current].choices[curChoice * 2];

			for (var i = 0; i < choices.length; i++) {
				if ($(choices[i].button).attr("choice") == choice) {
					$(this.game.content).append(choices[i].text);

					if (this.pages[this.current].choices[(curChoice * 2) + 1] != null)
					$(this.game.content).append(this.pages[this.current].choices[(curChoice * 2) + 1].text);

					this.game.save.savegame[this.current][curChoice] = choice;
					this.game.save.save();

					break;
				}
			}

			curChoice = ++this.savepointer;

			if ((curChoice * 2) < this.pages[this.current].choices.length) {
				$(this.game.content).append(this.pages[this.current].choices[(curChoice * 2) - 1]);

				choices = this.pages[this.current].choices[curChoice * 2];

				var div = document.createElement("div");
				$(div).addClass("choices");

				for (var c = 0; c < choices.length; c++)
					$(div).append(choices[c].button);

				$(this.game.content).append(div);
			} else {
				$(this.game.content).append(this.pages[this.current].choices[(curChoice * 2) - 1]);
				$(this.game.content).append(this.pages[this.current].next);
			}

			if ($(e.target).attr("loading") != "true") {
				if (choice == "startover")
					this.game.sendStatistics();
				else
					this.goTo(dest);
			}
		}
		if (choice != null && choice.length == 1) {
			if (this.game.save.savegame.click == null)
			this.game.save.savegame.click = [];

			if (this.game.save.savegame.click[parseInt(choice)] == null)
			this.game.save.savegame.click[parseInt(choice)] = 0;

			this.game.save.savegame.click[parseInt(choice)]++;
		} else {
			var next = $(e.target).attr("continue");

			if (next != null && next.length > 0) {
				switch(next) {
					case "end":
					this.game.audioplayer.playBGM("end", 2000);
					break;

					default:
					this.game.audioplayer.playBGM("amb", 2000);
					break;
				}

				this.savepointer = 0;
				this.current = next;

				if (next != "start")
				$(this.game.content).append($(this.breaker).clone().attr("id", next));

				$(this.game.content).append(this.pages[this.current].head);

				$(".disposable").remove();
				var choices = this.pages[this.current].choices[0];

				var div = document.createElement("div");
				$(div).addClass("choices");

				for (var c = 0; c < choices.length; c++)
				$(div).append(choices[c].button);

				$(this.game.content).append(div);

				if ($(e.target).attr("loading") != "true")
				this.goTo($("#" + next).offset().top);
			}
		}
	},
		
	goTo: function(dest) {
		dest -= 50;

		if(dest > $(document).height() - $(window).height())
		dest = $(document).height() - $(window).height() - 1;

		$(document).scrollTop($(document).scrollTop() - 1);

		var speed = dest - $(document).scrollTop();
		speed *= this.transition;

		if (speed < 400)
		speed = 400;

		if (speed > 1000)
		speed = 1000;

		$("html, body").animate({ scrollTop: dest }, speed, 'swing');
	},

	exit: function() {
		this.game.audioplayer.stopBGM(5000);
		$(this.game.content).empty();
		$(this.game.content).remove();
		this.game.startMenu(true);
	},

	createPage: function createPage(id, head, choices, next) {
		if (this.pages[id] != null)
		console.warn("Overwriting page " + id);

		this.pages[id] = {
			head: head,
			choices: choices,
			next: next
		};
	},

	createChoice: function createChoice(id, label, text) {
		var button = document.createElement("button");
		$(button).text(label);
		$(button).attr("choice", id);
		$(button).addClass("disposable");
		$(button).on("mouseup touchend", this.handleChoice.bind(this));

		return {
			button: button,
			text: text
		};
	},

	createContinue: function createChoice(target, name, callback) {
		var button = document.createElement("button");
		$(button).text(name == null ? this.game.lang.current.continue : name);
		$(button).attr("continue", target);
		$(button).addClass("choices");
		$(button).addClass("disposable");
		$(button).on("mouseup touchend", callback == null? this.handleChoice.bind(this) : callback.bind(this));

		return button;
	},

	createReset: function createReset(target, name, callback) {
		var button = document.createElement("button");
		$(button).text(name == null ? this.game.lang.current.resetGame : name);
		$(button).attr("reset", target);
		$(button).addClass("choices");
		$(button).addClass("disposable");
		$(button).on("mouseup touchend", callback == null ? this.handleChoice.bind(this) : callback.bind(this));

		return button;
	},

	createParagraph: function createParagraph(parts) {
		var paragraph = document.createElement("div");

		for (var i = 0; i < parts.length; i++)
		$(paragraph).append($(document.createElement("p")).html(parts[i]));

		return paragraph;
	}
};
