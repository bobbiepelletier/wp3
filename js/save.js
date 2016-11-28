function Save(game) {
	this.game = game;

	this.savegame = {
		start: null,
		invitation: null,
		party: null,
		balcony: null,
		card: null,
		holdinghands: null,
		kiss: null,
		theday: null,
		end: null,
		click: [],
		lang: "en"
	};
}

Save.prototype = {
	load: function load() {
		if (window.localStorage.getItem("dGhlZGF5") != null) {
			try {
				this.savegame = JSON.parse(atob(window.sessionStorage.getItem("dGhlZGF5")));
			}
			catch(err) {}
		}
	},

	save: function save() {
		window.sessionStorage.setItem("dGhlZGF5", btoa(JSON.stringify(this.savegame)));
	},
	
	reset: function reset() {
		window.sessionStorage.removeItem("dGhlZGF5");
		window.sessionStorage.removeItem("dayLang");
		var game = new Game();
		game.init();
	} 
};
