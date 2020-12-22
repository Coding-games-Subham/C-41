var canvas, backgroundImage;
var gameState = 0;
var playerCount;
var database;
var form, player, game;
var allPlayers;
var car1,car2,car3,car4;
var cars;
var reset = 0;
var CarsAtEnd;
function preload(){
  c1=loadImage("images/car1.png");
  c2=loadImage("images/car2.png");
  c3=loadImage("images/car3.png");
  c4=loadImage("images/car4.png");
  ground=loadImage("images/ground.png");
  track=loadImage("images/track.jpg");
}
function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  console.log(gameState);
  game.start();
  database.ref('reset').on("value" , function(data){
    reset = data.val();

    if(reset===1){
      clear();
      alert("the game has been reset ");
       database.ref('/').update({reset:0});
      form.input.show();
      form.button.show();
      form.greeting.hide();
     }

  })

}


function draw(){
  if(playerCount===4){
    game.update(1);
   console.log(gameState);
  }
  if(gameState===1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end();
    form.reset.show();
  }

  
}
