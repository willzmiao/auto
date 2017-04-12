// Create our 'main' state that will contain the game
var level24State = {

 
preload: function() { 
        game.load.image('stopsign', 'assets/level17/stop_sign.png');
        game.load.image('doors_closed', 'assets/level17/doors_closed.png');
        game.load.image('doors_open', 'assets/level17/doors_open.png');
        game.load.image('speech_left', 'assets/level17/speech_left.png');
        game.load.image('speech_right', 'assets/level17/speech_right.png');
        game.load.image('dollar', 'assets/level17/dollar.png');
    game.load.image('background', 'assets/level24/background.png');
    game.load.image('speech1', 'assets/level24/speech1.png');
    game.load.image('speech2', 'assets/level24/speech2.png');
    game.load.image('text1', 'assets/level24/text1.png');
    
        game.load.image('up', 'assets/ui/up_arrow.png');
        game.load.image('down', 'assets/ui/down_arrow.png');
        game.load.image('left', 'assets/ui/left_arrow.png');
        game.load.image('right', 'assets/ui/right_arrow.png');

        
    },

create: function() { 
        
    this.background = game.add.sprite(0,0, 'background');
    this.speech1 = game.add.sprite(300,1000, 'speech1');
    this.speech2 = game.add.sprite(400,700, 'speech2');
//    this.text1 = game.add.sprite(game.width/2,game.height-200, 'text1');
//    this.text1.anchor.setTo(0.5,0.5);
    
    this.speech2.alpha = 0;
    this.speech1.alpha = 0;
    
    //tell phaser which keys we want to use    
    this.cursor = game.input.keyboard.createCursorKeys();
    
//    var label = game.add.text(game.width/5, 350,
//            'Jim is still jobless', { font: '60px Arial', fill: 'rgba(0,0,0,0.5)'});
    
    
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
    
    var rKey = game.input.keyboard.addKey(Phaser.Keyboard.R);
    var nKey = game.input.keyboard.addKey(Phaser.Keyboard.N);
    rKey.onDown.add(this.restartGame, this);
    nKey.onDown.add(this.nextState, this);

    
    if(this.speech1.alpha === 0){
        this.display1();
    }
    
    else if(this.speech2.alpha === 0){
        this.display2();
    }

    
},

display1: function(){
    if(this.cursor.right.isDown || this.moveRight){
        if(!flipFlop){
        this.speech1.alpha = 1; 
        //this.womp1.play();
        game.world.bringToTop(this.speech1);
        //game.add.tween(this.wifeText).to({alpha: 0}, 2000).easing(Phaser.Easing.Exponential.Out).start();
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
        //this.womp1.play();
        game.world.bringToTop(this.speech2);
        this.timer88882 = this.game.time.events.add(7000, this.nextState, this);
        //game.add.tween(this.wifeText).to({alpha: 0}, 2000).easing(Phaser.Easing.Exponential.Out).start();
            flipFlop = true;
        }
    }
    
    if (this.cursor.right.isUp){
        flipFlop = false;
    }
},
    

    
restartGame: function() {
    // Start the 'menu' state, which restarts the game
    game.state.start('menu');
},

nextState: function(){
    game.state.start('closing');
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
