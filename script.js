// Remember to add all the constants up here!
const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nestBtn = document.getElementById('prev');

// Music
const songs = [
  {
    name: 'song1',
    displayName: 'Jamming',
    artist: 'Bob Marley',
  },
  {
    name: 'song2',
    displayName: 'Miami - Original Mix',
    artist: 'Jasper Byrne',
  },
  {
    name: 'song3',
    displayName: 'Higher Power',
    artist: 'Anyma, Argy, MAGNUS',
  },
  {
    name: 'song4',
    displayName: 'Butter',
    artist: 'The Low End Theory',
  },
  {
    name: 'song5',
    displayName: 'Voyager',
    artist: 'Daft Punk',
  },
  {
    name: 'song6',
    displayName: 'Ageispolis',
    artist: 'Aphex Twin',
  },
  {
    name: 'song7',
    displayName: '3AM',
    artist: 'Thundercat',
  },
  {
    name: 'song8',
    displayName: 'BIRDS OF A FEATHER',
    artist: 'Billie Eilish',
  },
];

// Check if Playing
let isPlaying = false;

// Play
function playSong() {
  isPlaying = true;
  playBtn.classList.replace('fa-play', 'fa-pause');
  playBtn.setAttribute('title', 'Pause')
  music.play();
}

// Pause
function pauseSong() {
  isPlaying = false;
  playBtn.classList.replace('fa-pause', 'fa-play');
  playBtn.setAttribute('title', 'Play')
  music.pause();
}

// Play or Pause Event Listener
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));

//Update DOM
function loadSong(song) {
  title.innerHTML = song.displayName;
  artist.textContent = song.artist;
  music.src = `music/${song.name}.mp3`;
  image.src = `images/${song.name}.png`;
}

// Current Song


// Previous Song

// Next Song

// On Load - Select First Song
loadSong(songs[2]);

// Update Progress Bar & Time


// Set Progress Bar


// Event Listeners
