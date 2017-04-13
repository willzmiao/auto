// Create our 'main' state that will contain the game
var level17State = {

 
preload: function() { 
        game.load.image('stopsign', 'assets/level17/stop_sign.png');
        game.load.image('doors_closed', 'assets/level17/doors_closed.png');
        game.load.image('doors_open', 'assets/level17/doors_open.png');
        game.load.image('speech_left', 'assets/level17/speech_left.png');
        game.load.image('speech_right', 'assets/level17/speech_right.png');
        game.load.image('dollar', 'assets/level17/dollar.png');
        game.load.image('else', 'assets/level17/else.png');
        game.load.image('leftopen', 'assets/level17/leftdoor_open.png');
        game.load.image('leftclosed', 'assets/level17/leftdoor_closed.png');
    
        game.load.image('up', 'assets/ui/up_arrow.png');
        game.load.image('down', 'assets/ui/down_arrow.png');
        game.load.image('left', 'assets/ui/left_arrow.png');
        game.load.image('right', 'assets/ui/right_arrow.png');
    
    game.load.audio('uhhleft','assets/level17/uhhh_left.wav');
    game.load.audio('uhhright','assets/level17/uhhh_right.wav');
    game.load.audio('door','assets/level17/door.wav');

    
    },

create: function() { 
    
    //game.stage.backgroundColor = '#71c5cf';
    game.add.image(0, 0, 'else');
    
    //tell phaser which keys we want to use    
    this.cursor = game.input.keyboard.createCursorKeys();
        
//    this.doors_open = game.add.sprite(game.width/2, game.height/2, 'doors_open');
//    this.doors_open.anchor.setTo(0.5, 0);
    
    this.uhhleft = game.add.audio('uhhleft');
    this.uhhright = game.add.audio('uhhright');
    this.door = game.add.audio('door');
    
    this.leftdoor_open = game.add.sprite(game.width/2-200, game.height/3+25, 'leftopen');
    this.leftdoor_open.anchor.setTo(0.5, 0);
    
    this.speech_left = game.add.sprite(game.width/2-200, game.height/4, 'speech_left');    
    this.speech_left.anchor.setTo(0.5, 0);
    this.speech_right = game.add.sprite(game.width/2+200, game.height/4, 'speech_right');    
    this.speech_right.anchor.setTo(0.5, 0);

    this.leftdoor_closed = game.add.sprite(game.width/2-200, game.height/3+25, 'leftclosed');
    this.leftdoor_closed.anchor.setTo(0.5, 0);
    this.leftdoor_closed.alpha = 0;
    
    game.add.tween(this.speech_left).to({y: this.speech_left.y+10}, 1000).to({y: this.speech_left.y}, 1000,Phaser.Easing.Sinusoidal.InOut).loop().start();
    game.add.tween(this.speech_right).to({y: this.speech_right.y+10}, 1000).to({y: this.speech_right.y}, 1000,Phaser.Easing.Sinusoidal.InOut).loop().start();

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
    
    this.selectPill();

    var rKey = game.input.keyboard.addKey(Phaser.Keyboard.R);
    var nKey = game.input.keyboard.addKey(Phaser.Keyboard.N);
    rKey.onDown.add(this.restartGame, this);
    nKey.onDown.add(this.nextState, this);
    
        if(!game.global.act3.isPlaying){
        game.global.act3.play();
    }


},


selectPill: function(){
    
    if(this.cursor.right.isDown || this.moveRight){
        this.dollar = game.add.sprite(game.width/2+300, game.height/2, 'dollar');
        game.add.tween(this.dollar).to({y: game.height/2 +300}, 500).to({alpha: 0}, 1000,Phaser.Easing.Sinusoidal.Out).start();
        this.uhhright.play();
        this.timer92840 = this.game.time.events.add(3000, this.nextState, this);
    }
    else if(this.cursor.left.isDown || this.moveLeft){
        this.leftdoor_open.alpha = 0;
//        this.leftdoor_closed = game.add.sprite(game.width/2-200, game.height/3+25, 'leftclosed');
//        this.leftdoor_closed.anchor.setTo(0.5, 0);
        this.leftdoor_closed.alpha = 1;
        this.uhhleft.play();
        this.door.play();
        this.stopsign = game.add.sprite(game.width/2-350, game.height/2-200, 'stopsign');
        
    }
},

restartGame: function() {
    // Start the 'menu' state, which restarts the game
    game.state.start('menu');
},

nextState: function(){
    game.state.start('level18');
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
