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
        
    },

create: function() { 
    
    game.stage.backgroundColor = '#71c5cf';
    
    this.background = game.add.sprite(0,0, 'background');
    this.speech1 = game.add.sprite(300,1000, 'speech1');
    this.speech2 = game.add.sprite(400,700, 'speech2');
    this.text1 = game.add.sprite(game.width/2,game.height-200, 'text1');
    this.text1.anchor.setTo(0.5,0.5);
    
    this.speech2.alpha = 0;
    this.speech1.alpha = 0;
    
    //tell phaser which keys we want to use    
    this.cursor = game.input.keyboard.createCursorKeys();
    
//    var label = game.add.text(game.width/5, 350,
//            'Jim is still jobless', { font: '60px Arial', fill: 'rgba(0,0,0,0.5)'});
    
        

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
    if(this.cursor.right.isDown){
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
    if(this.cursor.right.isDown){
        if(!flipFlop){
        this.speech2.alpha = 1; 
        //this.womp1.play();
        game.world.bringToTop(this.speech2);
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

};
