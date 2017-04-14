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
        game.load.image('speech3', 'assets/level24/speech3.png');
        game.load.image('text1', 'assets/level24/text1.png');
        game.load.image('finalspeech1', 'assets/level24/finalspeech1.png');
        game.load.image('finalspeech2', 'assets/level24/finalspeech2.png');
        game.load.image('finalspeech3', 'assets/level24/finalspeech3.png');
        game.load.image('black', 'assets/level24/black.png');
    
        game.load.image('up', 'assets/ui/up_arrow.png');
        game.load.image('down', 'assets/ui/down_arrow.png');
        game.load.image('left', 'assets/ui/left_arrow.png');
        game.load.image('right', 'assets/ui/right_arrow.png');

        game.load.audio('exit','assets/sound/exit.mp3');
    },

create: function() { 
        
    this.background = game.add.sprite(0,0, 'background');
    this.speech1 = game.add.sprite(400,650, 'speech1');
    this.speech2 = game.add.sprite(500,300, 'speech2');
    this.speech3 = game.add.sprite(150,400, 'speech3');
    
    this.finalspeech1 = game.add.sprite(game.width/2,650, 'finalspeech1');
    this.finalspeech2 = game.add.sprite(game.width/2,450, 'finalspeech2');
    this.finalspeech3 = game.add.sprite(game.width/2,250, 'finalspeech3');
    
    this.finalspeech1.anchor.set(.5,.5);
    this.finalspeech2.anchor.set(.5,.5);
    this.finalspeech3.anchor.set(.5,.5);
    
    this.black = game.add.sprite(0,0, 'black');
    
    //this.finalspeech.alpha = 0;
    this.black.alpha = 0;
    this.speech3.alpha = 0;
    this.speech2.alpha = 0;
    this.speech1.alpha = 0;
    
    this.finalspeech1.alpha = 0;
    this.finalspeech2.alpha = 0;
    this.finalspeech3.alpha = 0;
    
    //tell phaser which keys we want to use    
    this.cursor = game.input.keyboard.createCursorKeys();
    
//    var label = game.add.text(game.width/5, 350,
//            'Jim is still jobless', { font: '60px Arial', fill: 'rgba(0,0,0,0.5)'});
    
    
    game.global.act4.stop();
    game.global.act5 = game.add.audio('exit');
    game.global.act5.volume = 0.5;
    game.global.act5.play();

    
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
    
    else if(this.speech3.alpha === 0){
        this.display2();
    }
    
    else if(this.speech2.alpha === 0){
        this.display3();
    }

    
    if(!game.global.act5.isPlaying){
        game.global.act5.play();
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
        this.speech3.alpha = 1; 
        //this.womp1.play();
        game.world.bringToTop(this.speech3);
        //game.add.tween(this.wifeText).to({alpha: 0}, 2000).easing(Phaser.Easing.Exponential.Out).start();
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
        this.speech2.alpha = 1; 
        //this.womp1.play();
        game.world.bringToTop(this.speech2);
        this.timer2882 = this.game.time.events.add(15000, this.nextState, this);
        
//        game.add.tween(this.speech1).to({alpha: 0}, 5000).easing(Phaser.Easing.Exponential.Out).start();    
//        game.add.tween(this.speech2).to({alpha: 0}, 5000).easing(Phaser.Easing.Exponential.Out).start();    
//        game.add.tween(this.speech3).to({alpha: 0}, 5000).easing(Phaser.Easing.Exponential.Out).start();    
//        
        game.add.tween(this.speech1).to({alpha: 0}, 3000,Phaser.Easing.Exponential.InOut,false,3000).start(); 
        game.add.tween(this.speech2).to({alpha: 0}, 3000,Phaser.Easing.Exponential.InOut,false,3000).start(); 
        game.add.tween(this.speech3).to({alpha: 0}, 3000,Phaser.Easing.Exponential.InOut,false,3000).start(); 
            
            
        game.add.tween(this.finalspeech1).to({alpha: 100}, 500,Phaser.Easing.Exponential.InOut,false,4500).start();     
        game.add.tween(this.finalspeech2).to({alpha: 100}, 500,Phaser.Easing.Exponential.InOut,false,7000).start();     
        game.add.tween(this.finalspeech3).to({alpha: 100}, 500,Phaser.Easing.Exponential.InOut,false,10000).start();     
        //this.timer4121 = game.time.events.add(5000, this.fade, this);     
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
    
    
fade: function() {

    //  You can set your own fade color and duration
    game.camera.fade(0x000000, 4000);
    this.timer98501 = game.time.events.add(5000, this.moveUps, this); 
    //game.add.tween(this.black).to({alpha: 100}, 3000,Phaser.Easing.Exponential.Out,false,3000).start();    
},
    
    
    
moveUps: function(){
    
    this.finalspeech = game.add.sprite(game.width/2,game.height, 'finalspeech');
    this.finalspeech.anchor.set(.5,.5);
    this.finalspeech.alpha=0;
    game.add.tween(this.finalspeech).to({alpha: 100},1000,Phaser.Easing.Linear.InOut).start();  
    
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
