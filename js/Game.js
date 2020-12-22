class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      
      player.getCount();
      form = new Form();
      form.display();
    }
    car1=createSprite(100,200);
    car2=createSprite(300,200);
    car3=createSprite(500,200);
    car4=createSprite(700,200);
    car1.addImage(c1);
    car2.addImage(c2);
    car3.addImage(c3);
    car4.addImage(c4);
        cars=[car1,car2,car3,car4]
  }
  play(){
   form.hide();
   //text(" Game Start",120,100);
   Player.getPlayerInfo();
   
   console.log(player.rank);
   if(allPlayers){
    
    console.log(player.index);
    background(ground);
    image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
    var x,y;
    x=200;
    var index=0;
     for(var plr in allPlayers){
       index+=1;
       x+=200;
       y=displayHeight-100-allPlayers[plr].distance
       cars[index-1].x=x
       cars[index-1].y=y
      if(index===player.index){
        stroke(10);
        fill("red");
        ellipse(x,y,60,60);
        cars[index-1].shapeColor="red";
        camera.position.x=displayWidth/2
        camera.position.y=cars[index-1].y
        player.getCarsAtEnd();
      }
     }
     if(keyIsDown(UP_ARROW)&&player.index!==null){
       player.distance+=50;
       player.update();
       }

       if(player.distance>4460){
         gameState=2;
         player.rank+=1;
         Player.updateCarsatEnd(player.rank);
       }

     drawSprites();
   }
   
  }
  end(){
     alert("game Ended.You have got a rank of " + player.rank);

  }
}
