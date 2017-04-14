var level13State = {
  
    preload: function() { 
        // This function will be executed at the beginning     
        // That's where we load the images and sounds 

        game.load.image('speech1', 'assets/level13/speech1.png');
        game.load.image('speech2', 'assets/level13/speech2.png');
        game.load.image('speech3', 'assets/level13/speech3.png');
        game.load.image('speech4', 'assets/level13/speech4.png');
        game.load.image('speech5', 'assets/level13/speech5.png');
        game.load.image('background', 'assets/level13/background.png');
        
        game.load.image('wifespeech1','assets/level13/wifespeech1.png');
        
        game.load.image('beginning', 'assets/level13/beginning.png');
        game.load.image('mid', 'assets/level13/middle.png');
        
        game.load.audio('wife1','assets/level13/wife1.wav');
        game.load.audio('wife2','assets/level13/wife2.wav');
        game.load.audio('womp1','assets/level13/womp1.wav');
        game.load.audio('womp2','assets/level13/womp2.wav');
        game.load.audio('womp3','assets/level13/womp3.wav');
        game.load.audio('womp4','assets/level13/womp4.wav');
        game.load.audio('womp5','assets/level13/womp5.wav');        
        
        game.load.image('up', 'assets/ui/up_arrow.png');
        game.load.image('down', 'assets/ui/down_arrow.png');
        game.load.image('left', 'assets/ui/left_arrow.png');
        game.load.image('right', 'assets/ui/right_arrow.png');

        
    },
    
       
    
create: function() { 
    // Change the background color of the game to blue
    //game.stage.backgroundColor = '#71c5cf';

    // Set the physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);


    this.cursor = game.input.keyboard.createCursorKeys();
        
//    items = game.add.group();
//    items.create(100,400,'speech1');
//    items.create(150,200,'speech2');
//    items.create(250,50,'speech3');
          
//    var label = game.add.text(game.width/5, game.height/7,
//    'I should\'ve upgraded \nlong ago', { font: '40px Arial', fill: 'rgba(0,0,0,1)'});
    
    //this.background = game.add.sprite(0, 0, 'background');
    
    this.speech1 = game.add.sprite(350, 1500, 'speech1');
    this.speech2 = game.add.sprite(400, 1380, 'speech2');
    this.speech3 = game.add.sprite(450, 1260, 'speech3');
    this.speech4 = game.add.sprite(500, 1140, 'speech4');
    this.speech5 = game.add.sprite(550, 1020, 'speech5');

    
    //game.physics.arcade.enable(this.speech1);
    this.speech1.alpha = 0;
    this.speech2.alpha = 0;
    this.speech3.alpha = 0;
    this.speech4.alpha = 0;
    this.speech5.alpha = 0;
   
    this.speech1.scale.setTo(1.5,1.5);
    this.speech2.scale.setTo(1.5,1.5);
    this.speech3.scale.setTo(1.5,1.5);
    this.speech4.scale.setTo(1.5,1.5);
    this.speech5.scale.setTo(1.5,1.5);
    
    this.womp1 = game.add.audio('womp1');
    this.womp2 = game.add.audio('womp2');
    this.womp3 = game.add.audio('womp3');
    this.womp4 = game.add.audio('womp4');
    this.womp5 = game.add.audio('womp5');
    this.wife1 = game.add.audio('wife2');
    this.wife2 = game.add.audio('wife2');
    
    this.beginning = game.add.sprite(-300, -600, 'beginning');
    this.beginning.scale.set(2,2);
    
    this.timer39 = this.game.time.events.add(400, this.wifeText, this);
    
    var flipFlop;
    
    var speed;
    
    if(!game.device.desktop){
        this.addMobileInputs();  
        this.speed = 20;
    }
    else if (game.device.desktop){
        this.speed = 10;
    }
    
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
    
    if(!game.global.act2.isPlaying){
        game.global.act2.play();
    }

},

wifeText: function(){
  this.wife1.play();  
  this.wifeText = game.add.sprite(50, 700, 'wifespeech1');
  this.wifeText.scale.setTo(1.5,1.5);
},
    
display1: function(){
    if(this.cursor.right.isDown || this.moveRight){
        if(!flipFlop){
        this.speech1.alpha = 1; 
        this.womp1.play();
        game.world.bringToTop(this.speech1);
        game.add.tween(this.wifeText).to({alpha: 0}, 2000).easing(Phaser.Easing.Exponential.Out).start();
            flipFlop = true;
        }
    }
    
    if (this.cursor.right.isUp){
        flipFlop = false;
    }
},
    
display2: function(){
    if(this.cursor.right.isDown || this.moveRight){
        if(!flipFlop){
        this.speech2.alpha = 1;
        this.womp2.play();
            game.world.bringToTop(this.speech2);
            flipFlop = true;
        }
    }
    if (this.cursor.right.isUp){
        flipFlop = false;
    }
},

display3: function(){
    if(this.cursor.right.isDown || this.moveRight){
        if(!flipFlop){
        this.speech3.alpha = 1;  
        game.world.bringToTop(this.speech3);
        this.beginning.kill();
        this.mid = game.add.sprite(-300, -600, 'mid');
        this.mid.scale.set(2,2);
        game.world.sendToBack(this.mid);
        
        this.womp3.play();
            flipFlop = true;
        }
    }
    if (this.cursor.right.isUp){
        flipFlop = false;
    }
},
    
display4: function(){
    if(this.cursor.right.isDown || this.moveRight){
        if(!flipFlop){
        this.speech4.alpha = 1; 
        game.world.bringToTop(this.speech4);
        this.womp4.play();
            flipFlop = true;
        }
    }
    if (this.cursor.right.isUp){
        flipFlop = false;
    }
},
    
display5: function(){
    if(this.cursor.right.isDown || this.moveRight){
        if(!flipFlop){
        this.speech5.alpha = 1;
        game.world.bringToTop(this.speech5);
        this.womp5.play();
        this.timer012390 = this.game.time.events.add(7000, this.nextState, this);
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
    
addMobileInputs: function() {
        
    // Movement variables
    this.moveLeft = false; 
    this.moveRight = false;
    this.moveUp = false;
    this.moveDown = false;
        
    // Add the move left button
    var leftButton = game.add.sprite(game.width/3,game.height-275,'left'); 
    leftButton.inputEnabled = true;
    leftButton.alpha = 0.5; 
    //leftButton.events.onInputOver.add(this.setLeftTrue, this); 
    leftButton.events.onInputOut.add(this.setLeftFalse, this); 
    leftButton.events.onInputDown.add(this.setLeftTrue, this); 
    leftButton.events.onInputUp.add(this.setLeftFalse, this);
        
    // Add the move right button
    var rightButton = game.add.sprite(game.width*2/3,game.height-275,'right');
    rightButton.inputEnabled = true;
    rightButton.alpha = 0.5; 
    //rightButton.events.onInputOver.add(this.setRightTrue, this); 
    rightButton.events.onInputOut.add(this.setRightFalse, this); 
    rightButton.events.onInputDown.add(this.setRightTrue, this); 
    rightButton.events.onInputUp.add(this.setRightFalse, this);
    
    // Add the move up button
    var upButton = game.add.sprite(game.width/2,game.height-375,'up');
    upButton.inputEnabled = true;
    upButton.alpha = 0.5; 
    //upButton.events.onInputOver.add(this.setUpTrue, this); 
    upButton.events.onInputOut.add(this.setUpFalse, this); 
    upButton.events.onInputDown.add(this.setUpTrue, this); 
    upButton.events.onInputUp.add(this.setUpFalse, this);
    
    // Add the move down button
    var downButton = game.add.sprite(game.width/2,game.height-250,'down');
    downButton.inputEnabled = true;
    downButton.alpha = 0.5; 
    //downButton.events.onInputOver.add(this.setDownTrue, this); 
    downButton.events.onInputOut.add(this.setDownFalse, this); 
    downButton.events.onInputDown.add(this.setDownTrue, this); 
    downButton.events.onInputUp.add(this.setDownFalse, this);
    
},
    
// Basic functions that are used in our callbacks
setLeftTrue: function() { 
    this.moveLeft = true;
},
    
setLeftFalse: function() { 
    this.moveLeft = false;
},
    
setRightTrue: function() { 
    this.moveRight = true;
},
    
setRightFalse: function() { 
    this.moveRight = false;
},    
    
setUpTrue: function() { 
    this.moveUp = true;
},
    
setUpFalse: function() { 
    this.moveUp = false;
},
    
setDownTrue: function() { 
    this.moveDown = true;
},
    
setDownFalse: function() { 
    this.moveDown = false;
},
    
};
