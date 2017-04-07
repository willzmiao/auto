var level13State = {
  
    preload: function() { 
        // This function will be executed at the beginning     
        // That's where we load the images and sounds 
        game.load.image('speech1', 'assets/speech1.png'); 
        game.load.image('speech2', 'assets/speech2.png');
        game.load.image('speech3', 'assets/speech3.png');
        
        game.load.audio('wife1','assets/level13/wife1.wav');
        game.load.audio('wife2','assets/level13/wife2.wav');
        game.load.audio('womp1','assets/level13/womp1.wav');
        game.load.audio('womp2','assets/level13/womp2.wav');
        game.load.audio('womp3','assets/level13/womp3.wav');
        game.load.audio('womp4','assets/level13/womp4.wav');
        game.load.audio('womp5','assets/level13/womp5.wav');        
    
        
    },
    
       
    
create: function() { 
    // Change the background color of the game to blue
    game.stage.backgroundColor = '#71c5cf';

    // Set the physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);


    this.cursor = game.input.keyboard.createCursorKeys();
        
//    items = game.add.group();
//    items.create(100,400,'speech1');
//    items.create(150,200,'speech2');
//    items.create(250,50,'speech3');
          
    var label = game.add.text(game.width/5, game.height/7,
    'I should\'ve upgraded \nto machines long ago', { font: '40px Arial', fill: 'rgba(0,0,0,1)'});
    
    this.speech1 = game.add.sprite(300, 1100, 'speech1');
    this.speech2 = game.add.sprite(350, 850, 'speech2');
    this.speech3 = game.add.sprite(500, 650, 'speech3');
    this.speech4 = game.add.sprite(450, 450, 'speech3');
    this.speech5 = game.add.sprite(600, 250, 'speech3');
    
    //game.physics.arcade.enable(this.speech1);
    this.speech1.alpha = 0;
    this.speech2.alpha = 0;
    this.speech3.alpha = 0;
    this.speech4.alpha = 0;
    this.speech5.alpha = 0;
   
    this.womp1 = game.add.audio('womp1');
    this.womp2 = game.add.audio('womp2');
    this.womp3 = game.add.audio('womp3');
    this.womp4 = game.add.audio('womp4');
    this.womp5 = game.add.audio('womp5');
    this.wife1 = game.add.audio('wife2');
    this.wife2 = game.add.audio('wife2');
    
    this.timer39 = this.game.time.events.add(1000, this.wifeText, this);
    
    var flipFlop;
    
    
    },
    
update: function() {
    
    //restart level and next level
    var rKey = game.input.keyboard.addKey(Phaser.Keyboard.R);
    var nKey = game.input.keyboard.addKey(Phaser.Keyboard.N);
    //var rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    
    rKey.onDown.add(this.restartGame, this);
    nKey.onDown.add(this.nextState, this);
    
    if(this.speech1.alpha === 0){
        this.display1();
    }
    
    else if(this.speech2.alpha === 0){
        this.display2();
    }
    
    else if(this.speech3.alpha === 0){
        this.display3();
    }
    
    else if(this.speech4.alpha === 0){
        this.display4();
    }
    
    else if(this.speech5.alpha === 0){
        this.display5();
    }
},

wifeText: function(){
  this.wife1.play();  
},
    
display1: function(){
    if(this.cursor.right.isDown){
        if(!flipFlop){
        this.speech1.alpha = 1; 
        this.womp1.play();
            flipFlop = true;
        }
    }
    
    if (this.cursor.right.isUp){
        flipFlop = false;
    }
},
    
display2: function(){
    if(this.cursor.right.isDown){
        if(!flipFlop){
        this.speech2.alpha = 1;
        this.womp2.play();
            flipFlop = true;
        }
    }
    if (this.cursor.right.isUp){
        flipFlop = false;
    }
},

display3: function(){
    if(this.cursor.right.isDown){
        if(!flipFlop){
        this.speech3.alpha = 1;  
        this.womp3.play();
            flipFlop = true;
        }
    }
    if (this.cursor.right.isUp){
        flipFlop = false;
    }
},
    
display4: function(){
    if(this.cursor.right.isDown){
        if(!flipFlop){
        this.speech4.alpha = 1; 
        this.womp4.play();
            flipFlop = true;
        }
    }
    if (this.cursor.right.isUp){
        flipFlop = false;
    }
},
    
display5: function(){
    if(this.cursor.right.isDown){
        if(!flipFlop){
        this.speech5.alpha = 1;
        this.womp5.play();
            flipFlop = true;
        }
    }
    if (this.cursor.right.isUp){
        flipFlop = false;
    }
},




nextState: function(){
    game.state.start('level14');
},
    
// Restart the game
restartGame: function() {
    // Start the 'main' state, which restarts the game
    game.state.start('menu');
},
    
};
