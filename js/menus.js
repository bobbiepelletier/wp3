function Menus(game) {
	this.game = game;
}

Menus.prototype = {
	triggerWarning: function triggerWarning() {
		$(this.game.content).detach();

		$("html, body").scrollTop(0);
		$(this.game.content).empty();

		var warning = document.createElement("div");
		$(warning).append($(document.createElement("p")).attr("id", "headline").text(this.game.lang.current.tw.tw));
		$(warning).append(this.createParagraph(this.game.lang.current.tw.para1));
		$(warning).append($(this.createButton(this.game.lang.current.backToMenu, this.exit)).addClass("menu"));
		$(warning).append(this.createParagraph(this.game.lang.current.tw.para2));
		var buttons = document.createElement("div");
		$(buttons).addClass("menu");
		$(buttons).append(this.createButton(this.game.lang.current.backToMenu, this.exit));
		$(buttons).append(this.createButton(this.game.lang.current.tw.readTW, this.showTopic));
		$(warning).append(buttons);

		$(this.game.content).append(warning);
		$(this.game.content).appendTo(this.game.container);
	},

	showTopic: function showTopic() {
		$(this.game.content).detach();

		$("html, body").scrollTop(0);
		$(this.game.content).empty();

		var warning = document.createElement("div");
		$(warning).append($(document.createElement("p")).attr("id", "headline").text(this.game.lang.current.tw.tw));
		$(warning).append(this.createParagraph(this.game.lang.current.tw.warning));

		var buttons = document.createElement("div");
		$(buttons).addClass("menu");
		$(buttons).append(this.createButton(this.game.lang.current.backToMenu, this.exit));
		$(buttons).append(this.createButton(this.game.lang.current.tw.readFull, this.showFull));
		$(warning).append(buttons);

		$(this.game.content).append(warning);
		$(this.game.content).appendTo(this.game.container);
	},

	showFull: function showFull() {
		$(this.game.content).detach();

		$("html, body").scrollTop(0);
		$(this.game.content).empty();

		var warning = document.createElement("div");
		$(warning).append($(document.createElement("p")).attr("id", "headline").text(this.game.lang.current.tw.tw));
			$(warning).append(this.createParagraph(this.game.lang.current.tw.full));
			$(warning).append($(this.createParagraph([
			"<br/>" + this.game.lang.current.tw.contact + "<br/><br/>",
			"eMail: <a href='mailto:rpelleti@asu.edu'>rpelleti@asu.edu</a>",
			])).attr("id", "contact"));
			$(warning).append($(this.createButton(this.game.lang.current.backToMenu, this.exit)).addClass("menu"));

			$(this.game.content).append(warning);
			$(this.game.content).appendTo(this.game.container);
	},

	credits: function credits() {
		$(this.game.content).detach();

		$("html, body").scrollTop(0);
		$(this.game.content).empty();

		var credits = document.createElement("div");
		$(credits).attr("id", "credits");
		$(credits).append($(document.createElement("p")).attr("id", "headline").text(this.game.lang.current.menu.credits));
		$(credits).append($(this.createParagraph([
		"<b>" + this.game.lang.current.credits.written + "</b>",
		"Bobbie Pelletier"
		])).addClass("credits"));

		if (this.game.lang.current.credits.translation && this.game.lang.current.credits.author) {
			$(credits).append($(this.createParagraph([
			"<b>" + this.game.lang.current.credits.translation + "</b>",
			this.game.lang.current.credits.author
			])).addClass("credits"));
		}

		if (this.game.lang.current.credits.thanks && this.game.lang.current.credits.thanksTo) {
			$(credits).append($(this.createParagraph([
			"<b>" + this.game.lang.current.credits.thanks + "</b>",
			this.game.lang.current.credits.thanksTo
			])).addClass("credits"));
		}

		$(credits).append($(this.createParagraph([
		//this.game.lang.current.tw.contact,
		"eMail: <a href='mailto:rpelleti@asu.edu'>rpelleti@asu.edu</a>",
		])).attr("id", "contact"));
		$(credits).append($(this.createButton(this.game.lang.current.backToMenu, this.exit)).addClass("menu"));

		$(this.game.content).append(credits);
		$(this.game.content).appendTo(this.game.container);
	},

	language: function Language() {
		$(this.game.content).detach();

		$("html, body").scrollTop(0);
		$(this.game.content).empty();

		var lang = document.createElement("div");
		$(lang).append($(document.createElement("p")).attr("id", "headline").text(this.game.lang.current.menu.lang));
		$(lang).append($(this.createButton("Deutsch", this.setLanguage, "de")));
		$(lang).append($(this.createButton("English", this.setLanguage, "en")));
		$(lang).append($(this.createButton("Espanol", this.setLanguage, "es")));
		$(lang).append($(this.createButton("Francais", this.setLanguage, "fr")));
		$(lang).append($(this.createButton("Portugues", this.setLanguage, "pt")));


		$(lang).append($(this.createButton(this.game.lang.current.backToMenu, this.exit)).addClass("menu"));

		$(this.game.content).append(lang);
		$(this.game.content).appendTo(this.game.container);
	},

	resetGame: function resetGame() {
		$(this.game.content).detach();

		$("html, body").scrollTop(0);
		$(this.game.content).empty();

		var reset = document.createElement("div")
		$(reset).attr("id", "reset");
		$(reset).append($(document.createElement("p")).attr("id", "headline").text(this.game.lang.current.menu.reset));
		$(reset).append($(this.createButton("Reset game?", this.game.save.reset)));

		$(reset).append($(this.createButton(this.game.lang.current.backToMenu, this.exit)).addClass("menu"));

		$(this.game.content).append(reset);
		$(this.game.content).appendTo(this.game.container);
	},

	setLanguage: function setLanguage(evt) {
		this.game.lang.set(evt.data.args);
		window.localStorage.setItem("dayLang", evt.data.args)
		this.exit();
	},

	createButton: function createButton(label, callback, args) {
		var button = document.createElement("button");
		$(button).text(label);
		$(button).on("click", { args: args }, callback.bind(this));

		return button;
	},

	createParagraph: function createParagraph(parts) {
		var paragraph = document.createElement("div");

		for (var i = 0; i < parts.length; i++)
			$(paragraph).append($(document.createElement("p")).html(parts[i]));

		return paragraph;
	},

	exit: function exit() {
		$(this.game.content).empty();
		this.game.startMenu(true);
	}
};
