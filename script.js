document.cookie = "mycookie=cookievalue; SameSite=None; Secure";

// Animations

const jigglingREar = document.getElementById('r-outer-ear');
const jigglingLEar = document.getElementById('l-outer-ear');
const topHF = document.getElementById("top-hf");
const Leye = document.getElementById("leye");

jigglingREar.addEventListener('click', () => {
  jigglingREar.style.animationPlayState = 'paused';
});

document.addEventListener("click", function (event) {
  if (!jigglingREar.contains(event.target)) {
    jigglingREar.style.animationPlayState = 'running';
  }
});

jigglingLEar.addEventListener('click', () => {
  jigglingLEar.style.animationPlayState = 'paused';
});

document.addEventListener("click", function (event) {
  if (!jigglingLEar.contains(event.target)) {
    jigglingLEar.style.animationPlayState = 'running';
  }
});

topHF.addEventListener("click", () => {
  topHF.style.animationPlayState = 'paused';
});

document.addEventListener('click', function (event) {
  if (!topHF.contains(event.target)) {
    topHF.style.animationPlayState = 'running';
  }
});

Leye.addEventListener('click', () => {
  Leye.style.animationPlayState = 'paused';
});

document.addEventListener('click', function (event) {
  if (!Leye.contains(event.target)) {
    Leye.style.animationPlayState = 'running';
  }
});


//End of Animations 

//Speech Bubbles
var socials = document.getElementById("r-outer-ear");
var socialMedia = document.getElementById("socials-bubble");
var playStore = document.getElementById("l-outer-ear");
var playStoreGame = document.getElementById("download-game");
var merch = document.getElementById("top-hf");
var punk = document.getElementById("merch");


// show speech bubble on click
merch.addEventListener("click", function () {
  punk.style.display = "inline-block";
});

// hide speech bubble on click outside of SVG
//Socials
document.addEventListener("click", function (event) {
  if (!merch.contains(event.target)) {
    punk.style.display = "none";
  }
});


//Socials
socials.addEventListener("click", function () {
  socialMedia.style.display = "inline-block";
});

// hide speech bubble on click outside of SVG
//Socials
document.addEventListener("click", function (event) {
  if (!socials.contains(event.target)) {
    socialMedia.style.display = "none";
  }
});

//Play Store Game
playStore.addEventListener("click", function () {
  playStoreGame.style.display = "inline-block";
});

document.addEventListener("click", function (event) {
  if (!playStore.contains(event.target)) {
    playStoreGame.style.display = "none";
  }
});

//Spotify Playlist

const playlist = document.getElementById("playlist");

Leye.addEventListener("click", function () {
  playlist.style.display = "inline-block";
});

document.addEventListener("click", function (event) {
  if (!Leye.contains(event.target)) {
    playlist.style.display = "none";
  }
});

//EP Download
const EPdownload = document.getElementById("download-ep");
const banner = document.getElementById("banner");
const download = document.getElementById("continue");
const exit = document.getElementById("decline");

banner.addEventListener("click", function () {
  EPdownload.style.display = "inline-block";
});

document.addEventListener("click", function (event) {
  if (!banner.contains(event.target)) {
    EPdownload.style.display = "none";
  }
});

document.addEventListener("click", function (event) {
  if (exit.contains(event.target)) {
    EPdownload.style.display = "none";
  }
});



