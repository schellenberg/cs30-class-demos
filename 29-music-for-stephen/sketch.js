// Music for Stephen

let theSongs = [];
let song0, song1, song2, song3, song4;
let chosenSong;

function preload() {
  song0 = loadSound("assets/0.wav");
  song1 = loadSound("assets/1.wav");
  song2 = loadSound("assets/2.wav");
  song3 = loadSound("assets/3.wav");
  song4 = loadSound("assets/4.wav");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  theSongs.push(song0);
  theSongs.push(song1);
  theSongs.push(song2);
  theSongs.push(song3);
  theSongs.push(song4);

  //start initial song
  chosenSong = random(theSongs);
  chosenSong.play();
  console.log(chosenSong);
}

function draw() {
  background(220);
  
  makeBeautifulMusic();  
}

function makeBeautifulMusic() {
  if (!chosenSong.isPlaying()) {
    chosenSong = random(theSongs);
    chosenSong.play();
    console.log(chosenSong);
  }
}