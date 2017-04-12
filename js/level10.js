var level10State = {
    
 
preload: function() { 
        game.load.image('worker1', 'assets/worker1.png');
        game.load.image('worker2', 'assets/worker2.png');
        game.load.image('scene', 'assets/level10/background.png');
        game.load.image('speech', 'assets/level10/speech1.png');
        game.load.image('text1', 'assets/level10/text1.png');
        
        game.load.audio('unsure','assets/level10/unsure.wav');
        game.load.audio('gobble','assets/level10/gobble.wav');
    
        game.load.image('up', 'assets/ui/up_arrow.png');
        game.load.image('down', 'assets/ui/down_arrow.png');
        game.load.image('left', 'assets/ui/left_arrow.png');
        game.load.image('right', 'assets/ui/right_arrow.png');

    },

create: function() { 
    
    //game.stage.backgroundColor = '#71c5cf';
    
    this.scene = game.add.sprite(0, 0, 'scene');
    //this.scene.anchor.set(0.5,0.5);
    
    this.text1 = game.add.sprite(game.width/2, 200, 'text1');
    this.text1.anchor.set(0.5,0.5);
    
    //this.timer94 = this.game.time.events.add(1000, this.unsure1, this);
    this.gobble = game.add.audio('gobble');
    
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
    //var rKey = game.input.keyboard.addKey(Phaser.Keyboard.R);
    var nKey = game.input.keyboard.addKey(Phaser.Keyboard.N);
    //rKey.onDown.add(this.restartGame, this);
    nKey.onDown.add(this.nextState, this);
    
    var rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    rightKey.onDown.add(this.display2, this);
    
    if(this.moveRight){
        this.display2();
    }
    
},
 
unsure1: function(){
  this.unsure.play();  
},
    
display2: function(){

        this.speech = game.add.sprite(game.width/2-200, game.height/2-75, 'speech');
        this.speech.anchor.set(0.5,0.5);
        this.gobble.play();
        //this.unsure.play();
        this.changeTimer = this.game.time.events.add(5000, this.nextState, this);
},

nextState: function(){
    game.state.start('level11');
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
    leftButton.events.onInputOut.add(this.setLeftFalse, this); 
    leftButton.events.onInputDown.add(this.setLeftTrue, this); 
    leftButton.events.onInputUp.add(this.setLeftFalse, this);
        
    // Add the move right button
    var rightButton = game.add.sprite(game.width*2/3,game.height-175,'right');
    rightButton.inputEnabled = true;
    rightButton.alpha = 0.5; 
    //rightButton.events.onInputOver.add(this.setRightTrue, this); 
    rightButton.events.onInputOut.add(this.setRightFalse, this); 
    rightButton.events.onInputDown.add(this.setRightTrue, this); 
    rightButton.events.onInputUp.add(this.setRightFalse, this);
    
    // Add the move up button
    var upButton = game.add.sprite(game.width/2,game.height-275,'up');
    upButton.inputEnabled = true;
    upButton.alpha = 0.5; 
    //upButton.events.onInputOver.add(this.setUpTrue, this); 
    upButton.events.onInputOut.add(this.setUpFalse, this); 
    upButton.events.onInputDown.add(this.setUpTrue, this); 
    upButton.events.onInputUp.add(this.setUpFalse, this);
    
    // Add the move down button
    var downButton = game.add.sprite(game.width/2,game.height-150,'down');
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
