function Audioplayer(game) {
this.game = game;

this.bgm = {};
this.ambience = {};

this.audio = {
bgm1: new Audio(),
bgm2: new Audio(),
amb1: new Audio(),
amb2: new Audio(),
sound: {}
};

this.helper = {
vol1: $(document.createElement("div")).css("opacity", 1),
vol2: $(document.createElement("div")).css("opacity", 1)
};
}

Audioplayer.prototype =
{
load: function load()
{
var bgm = new Audio();
var ext;

if (bgm.canPlayType != null && bgm.canPlayType("audio/ogg"))
ext = "ogg";
else
ext = "mp3";

this.addBGM("amb", "sound/amb." + ext);
this.addBGM("end", "sound/end." + ext);
this.addSound("click", "sound/click." + ext);
},

addBGM: function addBGM(id, path)
{
this.bgm[id] = path;
},

addAmbient: function addAmbient(id, path)
{
this.ambience[id] = path;
},

addSound: function addSound(id, path)
{
this.audio.sound[id] = new Audio(path);
},

playBGM: function playBGM(id, fade)
{
if (this.bgm[id] == null)
{
console.error("BGM " + id + " does not exist.");
return;
}

try
{
var running = 0;

if (!this.audio.bgm1.paused)
running += 1;
if (!this.audio.bgm2.paused)
running += 2;

var loaded = 0;

if (this.audio.bgm1.getAttribute("src") == this.bgm[id])
loaded = 1;
if (this.audio.bgm2.getAttribute("src") == this.bgm[id])
loaded = 2;

var from, to;

switch (running)
{
case 0:
switch (loaded)
{
case 0:
case 1:
to = this.audio.bgm1;
break;

case 2:
to = this.audio.bgm2;
break;
}
break;

case 1:
switch (loaded)
{

case 0:
case 2:
to = this.audio.bgm2;
from = this.audio.bgm1;
break;

case 1:
to = this.audio.bgm1;
//console.warn("BGM " + id + " already running");
return;
break;
}
break;

case 2:
switch (loaded)
{

case 0:
case 1:
to = this.audio.bgm1;
from = this.audio.bgm2;
break;

case 2:
to = this.audio.bgm2;
//console.warn("BGM " + id + " already running");
return;
break;
}
break;

case 3:
switch (loaded)
{

case 0:
this.stopBGM();
to = this.audio.bgm1;
break;

case 1:
to = this.audio.bgm1;
from = this.audio.bgm2;
break;

case 2:
to = this.audio.bgm2;
from = this.audio.bgm1;
break;
}
break;
}


to.setAttribute("src", this.bgm[id]);
to.load();
to.loop = true;

if (typeof fade == "number")
{
to.volume = 0;

if (from == null)
this.fadeIn(to, fade);
else
this.crossfade(from, to, fade);
}
else
{
if (from == null)
this.stopBGM();

to.volume = 1;
}

to.play();
}
catch(err)
{
console.error(err);
}
},

stopBGM: function stopBGM(fade)
{
try
{
if (!this.audio.bgm1.paused)
{
if (typeof fade == "number")
this.fadeOut(this.audio.bgm1, fade);
else
{
this.audio.bgm1.pause();
this.audio.currentTime = 0;
}
}

if (!this.audio.bgm2.paused)
{
if (typeof fade == "number")
this.fadeOut(this.audio.bgm2, fade);
else
{
this.audio.bgm2.pause();
this.audio.currentTime = 0;
}
}
}
catch(err)
{
console.error(err);
}
},

playAmbience: function playAmbience(id, fade)
{
if (this.amb[id] == null)
{
console.error("Ambience " + id + " does not exist.");
return;
}

try
{
var running = 0;

if (!this.audio.amb1.paused)
running += 1;
if (!this.audio.amb2.paused)
running += 2;

var loaded = 0;

if (this.audio.amb1.getAttribute("src") == this.amb[id])
loaded = 1;
if (this.audio.amb2.getAttribute("src") == this.amb[id])
loaded = 2;

var from, to;

switch (running)
{
case 0:
switch (loaded)
{
case 0:
case 1:
to = this.audio.amb1;
break;

case 2:
to = this.audio.amb2;
break;
}
break;

case 1:
switch (loaded)
{

case 0:
case 2:
to = this.audio.amb2;
from = this.audio.amb1;
break;

case 1:
to = this.audio.amb1;
console.warn("BGM " + id + " already running");
break;
}
break;

case 2:
switch (loaded)
{

case 0:
case 1:
to = this.audio.amb1;
from = this.audio.amb2;
break;

case 2:
to = this.audio.amb1;
break;
}
break;

case 3:
switch (loaded)
{

case 0:
this.stopAmbient();
to = this.audio.amb1;
break;

case 1:
to = this.audio.amb1;
from = this.audio.amb2;
break;

case 2:
to = this.audio.amb2;
from = this.audio.amb1;
break;
}
break;
}


to.setAttribute("src", this.amb[id]);
to.load();
to.loop = true;

if (typeof fade == "number")
{
to.volume = 0;

if (from == null)
this.fadeIn(to, fade);
else
this.crossfade(from, to, fade);
}
else
{
if (from == null)
this.stopAmbient();

to.volume = 1;
}

to.play();
}
catch(err)
{
console.error(err);
}
},

stopAmbience: function stopAmbience(fade)
{
try
{
if (!this.audio.amb1.paused)
{
if (typeof fade == "number")
this.fadeOut(this.audio.amb1, fade);
else
{
this.audio.amb1.pause();
this.audio.currentTime = 0;
}
}

if (!this.audio.amb2.paused)
{
if (typeof fade == "number")
this.fadeOut(this.audio.amb2, fade);
else
{
this.audio.amb2.pause();
this.audio.currentTime = 0;
}
}
}
catch(err)
{
console.error(err);
}
},

crossfade: function crossfade(from, to, fade)
{
try
{
this.fadeOut(from, fade);
this.fadeIn(to, fade);
}
catch(err)
{
console.error(err);
}
},

fadeIn: function fadeIn(audio, fade)
{
try
{
$(this.helper.vol2).css("opacity", 0);

$(this.helper.vol2).animate({ opacity: 1 }, {
duration: fade,
easing: "linear",
step: function step(now, fx) {
audio.volume = now;
}
});
}
catch(err)
{
console.error(err);
}
},

fadeOut: function fadeOut(audio, fade)
{
try
{
$(this.helper.vol1).css("opacity", 1);

$(this.helper.vol1).animate({ opacity: 0 }, {
duration: fade,
easing: "linear",
step: function step(now, fx) {
audio.volume = now;

if (now == 0)
{
audio.pause();
audio.currentTime = 0;
}
}
});
}
catch(err)
{
console.error(err);
}
},

playSound: function playSound(id)
{
if (this.audio.sound[id] == null)
{
console.error("Sound " + id + " does not exist.");
return;
}

try
{
this.audio.sound[id].play();
}
catch(err)
{
console.error(err);
}
}
};
