class Form {
  constructor() {
    this.input=createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h3');
    this.reset = createButton('Reset');
    ///this.reset.hide();
  }

  display(){
    
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(displayWidth/2-50,0);
    
    
    this.input.position(displayWidth/2-40, displayHeight/2-80);
    this.button.position(displayWidth/2+30,  displayHeight/2);
    this.reset.position(displayWidth-100,30);

    this.button.mousePressed(()=>{
     this.input.hide();
     this.button.hide();

     player.name = this.input.value();
      
      playerCount+=1;
      player.index=playerCount;
      console.log(playerCount);
      player.update();
      player.updateCount(playerCount);
      
      this.greeting.html("Hello " + player.name )
      this.greeting.position(displayWidth/2-70, displayHeight/4);
    });
   
    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
      database.ref('players').remove();
      database.ref('/').update({reset:1});
    });

  }
  hide(){
   this.input.hide();
   this.button.hide();
   this.greeting.hide();
   
  }
  showReset(){
    this.reset.show();
  }
   
   

}
