var level4State = {
  
    preload: function() { 
        // This function will be executed at the beginning     
        // That's where we load the images and sounds 
        game.load.image('speech1', 'assets/level4/speech1.png'); 
        game.load.image('speech2', 'assets/level4/speech2.png');
        game.load.image('speech3', 'assets/level4/speech3.png');
        game.load.image('speech4', 'assets/level4/speech4.png');
        game.load.image('speech5', 'assets/level4/speech5.png');
        
        game.load.image('start', 'assets/level4/start.png');
        game.load.image('mid', 'assets/level4/mid.png');
        game.load.image('end', 'assets/level4/end.png');
        //game.load.spritesheet('heart', 'assets/heart.png', 68, 62, 6);
        //game.load.spritesheet('bird', 'assets/level5/bird_sheet.png', 215, 209, 4);
        game.load.spritesheet('bird', 'assets/heart.png', 68, 62, 6);
        
        game.load.audio('vo1','assets/level4/vo1.wav');
        game.load.audio('vo2','assets/level4/vo2.wav');
        game.load.audio('vo3','assets/level4/vo3.wav');
        game.load.audio('vo4','assets/level4/vo4.wav');
        game.load.audio('vo5','assets/level4/vo5.wav');
        game.load.audio('vo6','assets/level4/vo6.wav');
        
        game.load.image('up', 'assets/ui/up_arrow.png');
        game.load.image('down', 'assets/ui/down_arrow.png');
        game.load.image('left', 'assets/ui/left_arrow.png');
        game.load.image('right', 'assets/ui/right_arrow.png');

        
    },
    
       
    
create: function() { 
    // Change the background color of the game to blue
    game.stage.backgroundColor = '#71c5cf';

    // Set the physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);


    this.cursor = game.input.keyboard.createCursorKeys();
        
    this.end = game.add.sprite(0, 0, 'end');
    this.mid = game.add.sprite(0, 0, 'mid');
    this.start = game.add.sprite(0, 0, 'start');
    
//    items = game.add.group();
//    items.create(100,400,'speech1');
//    items.create(150,200,'speech2');
//    items.create(250,50,'speech3');
          
//    var label = game.add.text(game.width/5, game.height/7,
//    'My work excites me.', { font: '40px Arial', fill: 'rgba(0,0,0,1)'});
    
    this.speech1 = game.add.sprite(300, 1500, 'speech1');
    this.speech2 = game.add.sprite(350, 1300, 'speech2');
    this.speech3 = game.add.sprite(400, 1050, 'speech3');
    this.speech4 = game.add.sprite(500, 600, 'speech4');
    this.speech5 = game.add.sprite(450, 400, 'speech5');
    
    //game.physics.arcade.enable(this.speech1);
    this.speech1.alpha = 0;
    this.speech2.alpha = 0;
    this.speech3.alpha = 0;
    this.speech4.alpha = 0;
    this.speech5.alpha = 0;
   
    var flipFlop;
    
    this.vo1 = game.add.audio('vo1');
    this.vo2 = game.add.audio('vo2');
    this.vo3 = game.add.audio('vo3');
    this.vo4 = game.add.audio('vo4');
    this.vo5 = game.add.audio('vo5');
    this.vo6 = game.add.audio('vo6');
    
    var speed;
    
    if(game.device.desktop){
        this.addMobileInputs();  
        this.speed = 20;
    }
    else if (!game.device.desktop){
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
},

display1: function(){
    if(this.cursor.right.isDown  || this.moveRight){
        if(!flipFlop){
        this.speech1.alpha = 1; 
        this.vo2.play();    
            flipFlop = true;
        }
    }
    
    if (this.cursor.right.isUp || this.moveRight){
        flipFlop = false;
    }
},
    
display2: function(){
    if(this.cursor.right.isDown || this.moveRight){
        if(!flipFlop){
        this.speech2.alpha = 1; 
        this.vo1.play();
            flipFlop = true;
        }
    }
    if (this.cursor.right.isUp || this.moveRight){
        flipFlop = false;
    }
},

display3: function(){
    if(this.cursor.right.isDown || this.moveRight){
        if(!flipFlop){
        this.speech3.alpha = 1;
        this.vo4.play();
        game.add.tween(this.start).to({alpha: 0}, 1000).easing(Phaser.Easing.Exponential.Out).start();
            flipFlop = true;
        }
    }
    if (this.cursor.right.isUp || this.moveRight){
        flipFlop = false;
    }
},
    
display4: function(){
    if(this.cursor.right.isDown || this.moveRight){
        if(!flipFlop){
        this.speech4.alpha = 1;
        this.vo6.play();
            flipFlop = true;
        }
    }
    if (this.cursor.right.isUp || this.moveRight){
        flipFlop = false;
    }
},
    
display5: function(){
    if(this.cursor.right.isDown || this.moveRight){
        if(!flipFlop){
        this.speech5.alpha = 1;
        this.vo2.play();
        game.add.tween(this.mid).to({alpha: 0}, 1000).easing(Phaser.Easing.Exponential.Out).start();
        this.timer5313 = this.game.time.events.add(7000, this.nextState, this);
            flipFlop = true;
        }
    }
    if (this.cursor.right.isUp || this.moveRight){
        flipFlop = false;
    }
},




nextState: function(){
    game.state.start('level5');
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
    var leftButton = game.add.sprite(game.width/3,game.height-175,'left'); 
    leftButton.inputEnabled = true;
    leftButton.alpha = 0.5; 
    //leftButton.events.onInputOver.add(this.setLeftTrue, this); 
    //leftButton.events.onInputOut.add(this.setLeftFalse, this); 
    leftButton.events.onInputDown.add(this.setLeftTrue, this); 
    leftButton.events.onInputUp.add(this.setLeftFalse, this);
        
    // Add the move right button
    var rightButton = game.add.sprite(game.width*2/3,game.height-175,'right');
    rightButton.inputEnabled = true;
    rightButton.alpha = 0.5; 
//    rightButton.events.onInputOver.add(this.setRightTrue, this); 
//    rightButton.events.onInputOut.add(this.setRightFalse, this); 
    rightButton.events.onInputDown.add(this.setRightTrue, this); 
    rightButton.events.onInputUp.add(this.setRightFalse, this);
    
    // Add the move up button
    var upButton = game.add.sprite(game.width/2,game.height-275,'up');
    upButton.inputEnabled = true;
    upButton.alpha = 0.5; 
//    upButton.events.onInputOver.add(this.setUpTrue, this); 
//    upButton.events.onInputOut.add(this.setUpFalse, this); 
    upButton.events.onInputDown.add(this.setUpTrue, this); 
    upButton.events.onInputUp.add(this.setUpFalse, this);
    
    // Add the move down button
    var downButton = game.add.sprite(game.width/2,game.height-150,'down');
    downButton.inputEnabled = true;
    downButton.alpha = 0.5; 
//    downButton.events.onInputOver.add(this.setDownTrue, this); 
//    downButton.events.onInputOut.add(this.setDownFalse, this); 
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
    
setLeftFalse: function() { 
    this.moveDown = false;
},
    
};
