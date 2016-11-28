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

			this.createParagraph(this.game.lang.current.story.start.head),

			[
			[
			this.createChoice("nothingmuch",
					  this.game.lang.current.story.start.opt1,
				          this.createParagraph(this.game.lang.current.story.start.optPara1)
					)
			],
			this.createParagraph(this.game.lang.current.story.start.tail)
			],

			this.createContinue("II")
		);

		this.createPage(
			"II",

			this.createParagraph(this.game.lang.current.story.II.head),

			[
			[
			this.createChoice("off",
					  this.game.lang.current.story.II.opt1,
				          this.createParagraph(this.game.lang.current.story.II.optPara1)
					),
			this.createChoice("saynothing",
					  this.game.lang.current.story.II.opt2,
				          this.createParagraph(this.game.lang.current.story.II.optPara2)
					)
			],
			this.createParagraph(this.game.lang.current.story.II.tail)
			],

			this.createContinue("III")
		);

		this.createPage(
			"III",

			this.createParagraph(this.game.lang.current.story.III.head),

			[
			[
			this.createChoice("whatdoyoumean",
					  this.game.lang.current.story.III.opt1,
				          this.createParagraph(this.game.lang.current.story.III.optPara1)
					)
			],
			this.createParagraph(this.game.lang.current.story.III.tail)
			],

			this.createContinue("IV")
		);

		this.createPage(
			"IV",

			this.createParagraph(this.game.lang.current.story.IV.head),

			[
			[
			this.createChoice("ohmygod",
					  this.game.lang.current.story.IV.opt1,
				          this.createParagraph(this.game.lang.current.story.IV.optPara1)
					),
			this.createChoice("youknow",
					  this.game.lang.current.story.V.opt2,
				          this.createParagraph(this.game.lang.current.story.IV.optPara2)
					)
			],
			this.createParagraph(this.game.lang.current.story.IV.tail)
			],

			this.createContinue("V")
		);

		this.createPage(
			"V",

			this.createParagraph(this.game.lang.current.story.V.head),

			[
			[
			this.createChoice("whatdick",
					  this.game.lang.current.story.V.opt1,
				          this.createParagraph(this.game.lang.current.story.V.optPara1)
					),
			this.createChoice("howami",
					  this.game.lang.current.story.V.opt2,
				          this.createParagraph(this.game.lang.current.story.V.optPara2)
					)
			],
			this.createParagraph(this.game.lang.current.story.V.tail)
			],

			this.createContinue("VI")
		);

		this.createPage(
			"VI",

			this.createParagraph(this.game.lang.current.story.VI.head),

			[
			[
			this.createChoice("ugh",
					  this.game.lang.current.story.VI.opt1,
				          this.createParagraph(this.game.lang.current.story.VI.optPara1)
					),
			this.createChoice("alotofguys",
					  this.game.lang.current.story.VI.opt2,
				          this.createParagraph(this.game.lang.current.story.VI.optPara2)
					)
			],
			this.createParagraph(this.game.lang.current.story.VI.tail),
			],

			//this.createContinue("end")
			this.createContinue("final", "Log out", this.ending)
		);

		/*this.createPage(
			/*
			"end",
			this.createParagraph(this.game.lang.current.story.end.head),
			null,
			this.createContinue("menu", this.game.lang.current.story.end.opt1, this.exit)
			"end",
			this.createParagraph(this.game.lang.current.story.end.head),
			[
			 [
			  null,
			  null
			 ],
			 this.createParagraph(this.game.lang.current.story.end.head),
			 [
			  null
			 ],
			 null
			],
			this.createContinue("menu", "Log out", "final")
		);*/
		this.createPage(
			"final",

			this.createParagraph(this.game.lang.current.story.start.head),

			[
			[
			this.createChoice("nothingmuch",
					  this.game.lang.current.story.start.opt1,
				          this.createParagraph(this.game.lang.current.story.start.optPara1)
					)
			],
			this.createParagraph(this.game.lang.current.story.start.tail)
			],

			//this.createContinue("end")
			this.createContinue("menu", "Log out", this.exit)
		);

	},

	handleChoice: function handleChoice(e) {

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
					break;

					default:
					break;
				}

				this.savepointer = 0;
				this.current = next;

				if (next != "start")
				//$(this.game.content).append($(this.breaker).clone().attr("id", next));
				
				$(this.game.content).append(this.pages[this.current].time);
				$(this.game.content).append(this.pages[this.current].head);

				$(".disposable").remove();
				var choices = this.pages[this.current].choices[0];

				var div = document.createElement("div");
				$(div).addClass("choices");

				for (var c = 0; c < choices.length; c++)
				$(div).append(choices[c].button);

				$(this.game.content).append(div);

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
		$(this.game.content).empty();
		$(this.game.content).remove();
		this.game.startMenu(true);
	},

	ending: function() {
		$(this.game.content).empty();
		
		for (var i = 0; i < (this.game.lang.current.story.fin.pars).length; i++){
	 	 var test = document.createElement("div");
		 $(test).addClass("finalpar");
		 $(test).html(this.game.lang.current.story.fin.pars[i]);
		 $(this.game.content).append(test);
		}

		var butdiv = document.createElement("div");
		var button = document.createElement("button");
		$(button).text("Back to menu");
		$(button).attr("continue", "menu");
		$(button).addClass("choices");
		$(button).addClass("disposable");
		$(button).on("mouseup touchend", (this.exit).bind(this));
		
		$(butdiv).append(button);
		$(butdiv).attr("id", "button");
		$(butdiv).addClass("finalpar");
		
		$(this.game.content).append(butdiv);
	},

	createPage: function createPage(id, head, choices, next) {
		if (this.pages[id] != null)
		console.warn("Overwriting page " + id);

		this.pages[id] = {
			head: head,
			choices: choices,
			next: next,
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
		var butdiv = document.createElement("div");
		var button = document.createElement("button");
		$(button).text(name == null ? this.game.lang.current.continue : name);
		$(button).attr("continue", target);
		$(button).addClass("choices");
		$(button).addClass("disposable");
		$(button).on("mouseup touchend", callback == null? this.handleChoice.bind(this) : callback.bind(this));
		
		$(butdiv).append(button);
		$(butdiv).attr("id", "button");

		return butdiv;
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

		var table = document.createElement("table");		

		for (var i = 0; i < parts.length; i+=3){
		var tr = document.createElement("tr");
		$(tr).append($(document.createElement("td")).html(parts[i]));
		$(tr).append($(document.createElement("td")).html(parts[i+1]));
		$(tr).append($(document.createElement("td")).html(parts[i+2]));
		$(table).append(tr);
		}

		$(paragraph).append(table);
		$(paragraph).addClass("timehead");

		return paragraph;
	}
};
