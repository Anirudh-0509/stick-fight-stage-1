class Game {
  constructor(){

  }

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

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    //create player here
    if(gameState === 1){
      player1 = createSprite(400, 500, 10, 10)
    player1.addImage(player1Image);
    player1Image.position(displayWidth / 2, displayHeight/2)
    }
  }

  play(){
    form.hide();
    
    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      background(rgb(198,135,103));
      
      
     
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 175 ;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        
       
        

       
        if (index === player.index){
          stroke(10);
          fill("red");
          ellipse(x,y,60,60);
          /*cars[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y;*/
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    /*if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }

    if(player.distance > 4550){
      gameState = 2;
      game.update(2)

    }*/
   
    drawSprites();
  }

  end(){
    console.log("Game Ended");
    Player.getPlayerInfo();
    var y = 30
    var greeting1 = createElement('h2')
    var greeting2 = createElement('h2')
    var greeting3 = createElement('h2')
    var greeting4 = createElement('h2')

      
  }
}
