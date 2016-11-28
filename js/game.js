function Game() {
	window.onresize = function onresize() {
		$(this.content).css("margin-bottom", (window.innerHeight / 4) + "px");
	}.bind(this);
}

Game.prototype = {
	init: function init() {
		this.container = document.createElement("div");
		$(this.container).attr("id", "container");
		$("body").append(this.container);

		this.lang = new Language(this);
		this.audioplayer = new Audioplayer(this);
		this.story = new Story(this);
		this.save = new Save(this);
		this.menus = new Menus(this);

		if (!this.lang.set(getQuery("lang")) && window.localStorage.getItem("dayLang") != null)
		this.lang.set(window.localStorage.getItem("dayLang"));

		//this.audioplayer.load();

		if( !$('.title').length ) 
		$(this.container).append($(document.createElement("div")).text("Bobbie's original and not plagiarized WP3 ").addClass("title"));

		this.startMenu();
	},

	startMenu: function startMenu(back) {
		if (back != null)

		this.save.load();

		if ($("#content").length > 0)
		$("#content").remove();

		this.content = document.createElement("div");
		$(this.content).attr("id", "content");
		$(this.content).append(this.createButton((this.save.savegame.start == null ? this.lang.current.menu.start : this.lang.current.menu.continue), this.newGame));
		$(this.content).append(this.createButton(this.lang.current.menu.lang, this.language));
		$(this.content).append(this.createButton(this.lang.current.menu.tw, this.triggerWarning));
		$(this.content).append(this.createButton(this.lang.current.menu.credits, this.credits));
		$(this.content).append(this.createButton(this.lang.current.menu.reset, this.resets));

		if (this.save.savegame.end != null && this.save.savegame.end.length > 1)
		$(this.content).append($(this.createButton(this.lang.current.menu.why, function() { window.open('http://hypnoticowl.com/the-day-the-laughter-stopped/', '_blank'); })).css("margin-top", "50px"));

		$(this.content).append($(this.createButton(this.lang.current.menu.back, function() { window.location = 'http://hypnoticowl.com/games/theday/'; })).css("margin-top", "25px").css("border", "none").css("background", "none"));

		$(this.container).append(this.content);
	},

	createButton: function createChoice(label, callback) {
		var button = document.createElement("button");
		$(button).text(label);
		$(button).on("click", callback.bind(this));

		return button;
	},

	newGame: function newGame() {
		this.story.setup();
		this.save.load();

		$(this.content).empty();
		$(this.content).css("margin-bottom", (window.innerHeight / 4) + "px");

		var div = document.createElement("div");
		$(div).attr("loading", true);
		$(div).attr("continue", "start");

		var e = {};
		e.target = div;

		this.story.savepointer = 0;
		this.story.handleChoice(e);
		this.loading = true;

		while (this.loading) {
			if (this.save.savegame[this.story.current] == null)
			break;
			else {
				var l = this.save.savegame[this.story.current].length;

				var chosen = false;

				for (var i = 0; i < l; i++)
				{
					$(div).attr("choice", this.save.savegame[this.story.current][i]);
					$(div).attr("continue", null);
					e.target = div;
					this.story.handleChoice(e);

					chosen = true;
				}

				if (chosen && this.save.savegame[this.story.current].length < this.story.pages[this.story.current].choices.length / 2)
				break;

				if (this.save.savegame[this.story.current].length == this.story.pages[this.story.current].choices.length / 2 && this.story.current != "end") {
					$(div).attr("choice", null);
					$(div).attr("continue", $(this.story.pages[this.story.current].next).attr("continue"));
					e.target = div;
					this.story.handleChoice(e);
				}
			}
		}

		if ($("button[continue=menu]").length > 0)
		$("html, body").scrollTop($("button[continue=menu]").offset().top);
		else if ($("#" + this.story.current).length > 0)
		$("html, body").scrollTop($("#" + this.story.current).offset().top - 50);
		else
		$("html, body").scrollTop(0);
	},

	triggerWarning: function triggerWarning() {
		this.menus.triggerWarning();
	},

	language: function language() {
		this.menus.language();
	},

	credits: function credits() {
		this.menus.credits();
	},
	
	resets: function resets() {
		this.menus.resetGame();
	},

	sendStatistics: function sendStatistics() {
		$.ajax({
			url: 'savestats.php',
			type: 'POST',
			data: {
				savedata: JSON.stringify(this.save.savegame),
				lang: this.lang.current
			}
		});
	}
};

function getQuery(s) {
	var query = window.location.search.substring(1);
	var vars = query.split("&");

	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split("=");
		if (pair[0] == s)
		return pair[1];
	}
	return(false);
}
