class Player {
  constructor(){
    this.index=null;
    this.name = null;
    this.distance=0;
    this.rank = 0;
  }

  getCount(){
    
    var playerCountRef = database.ref('playerCount');
    
    playerCountRef.on("value",function(data){
      
      playerCount = data.val();
     
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,distance:this.distance
    });
  }

  static getPlayerInfo(){
    database.ref("players").on("value",function(data){
    allPlayers=data.val();      
    })
  }

  getCarsAtEnd(){
    database.ref('CarsAtEnd').on("value",function(data){
      this.rank=data.val();
    })
  }

  static updateCarsatEnd(rank){
      database.ref('/').update({CarsAtEnd:rank});
  }
}














