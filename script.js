// Animations

const jigglingREar = document.getElementById('r-outer-ear');
const jigglingLEar = document.getElementById('l-outer-ear');

jigglingREar.addEventListener('click', () => {
  jigglingREar.style.animationPlayState = 'paused';
});

document.addEventListener("click", function (event){
  if(!jigglingREar.contains(event.target)){
    jigglingREar.style.animationPlayState= 'running';
  }
})

jigglingLEar.addEventListener('click', () => {
  jigglingLEar.style.animationPlayState = 'paused';
});

document.addEventListener("click", function (event){
  if(!jigglingLEar.contains(event.target)){
    jigglingLEar.style.animationPlayState= 'running';
  }
})

//End of Animations 

//Speech Bubbles
var socials = document.getElementById("r-outer-ear");
var socialMedia = document.getElementById("socials-bubble");
var playStore = document.getElementById("l-outer-ear");
var playStoreGame = document.getElementById("download-game");

// show speech bubble on click
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

//Banner
var downloadEP = document.getElementById('banner')

downloadEP.addEventListener("click", function(){
  const link = 'https://open.spotify.com/?';

  window.open(link, '_blank');
})