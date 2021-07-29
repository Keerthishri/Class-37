var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;
var allPlayers;
var distance = 0

function preload(){
  startImage = loadImage("images/startbg.png")
  playImage = loadImage("images/background.jpg")
}


function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  
}



function draw(){
  background(startImage)
  if(playerCount=== 4){
    game.update(1)
  }
  if(gameState === 1){
    game.play()
  }
}
