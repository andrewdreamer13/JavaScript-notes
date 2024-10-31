// play, pause, show current time

const musicPlay = document.querySelector('.play');
const musicPaused = document.querySelector('.paused');
const showTime = document.querySelector('.current-time')
const audio = new Audio();

musicPlay.addEventListener('click', musicOn);
musicPaused.addEventListener('click', musicOff);
audio.addEventListener('timeupdate', timeUpdate);

function musicOn () {
  audio.preload = 'auto';
  audio.src = 'sound/summer-music.mp3';
  audio.value = .2
  audio.play();
  audio.currentSrc = 'sound/summer-music.mp3';
}
 

function musicOff () {
  audio.src = 'sound/summer-music.mp3';
  audio.paused;
}

function timeUpdate () {
  let minutes = Math.floor(audio.currentTime / 60);
  if (minutes < 10) {
    minutes = '0' + String(minutes);
  }
  let seconds = Math.floor(audio.currentTime % 60);
  if (seconds < 10) {
    seconds = '0' + String(seconds);
  }
  showTime.innerHTML = `${minutes}:${seconds}`;

  //showTime.innerHTML = audio.currentTime; // shows milliseconds
}

