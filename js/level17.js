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
        
    },

create: function() { 
    
    //game.stage.backgroundColor = '#71c5cf';
    game.add.image(0, 0, 'else');
    
    //tell phaser which keys we want to use    
    this.cursor = game.input.keyboard.createCursorKeys();
        
//    this.doors_open = game.add.sprite(game.width/2, game.height/2, 'doors_open');
//    this.doors_open.anchor.setTo(0.5, 0);
    
    this.leftdoor_open = game.add.sprite(game.width/2-200, game.height/3+25, 'leftopen');
    this.leftdoor_open.anchor.setTo(0.5, 0);
    
    this.speech_left = game.add.sprite(game.width/2-200, game.height/4, 'speech_left');    
    this.speech_left.anchor.setTo(0.5, 0);
    this.speech_right = game.add.sprite(game.width/2+200, game.height/4, 'speech_right');    
    this.speech_right.anchor.setTo(0.5, 0);

    game.add.tween(this.speech_left).to({y: this.speech_left.y+10}, 1000).to({y: this.speech_left.y}, 1000,Phaser.Easing.Sinusoidal.InOut).loop().start();
    game.add.tween(this.speech_right).to({y: this.speech_right.y+10}, 1000).to({y: this.speech_right.y}, 1000,Phaser.Easing.Sinusoidal.InOut).loop().start();

    },

update: function() {
    
    this.selectPill();

    var rKey = game.input.keyboard.addKey(Phaser.Keyboard.R);
    var nKey = game.input.keyboard.addKey(Phaser.Keyboard.N);
    rKey.onDown.add(this.restartGame, this);
    nKey.onDown.add(this.nextState, this);

},


selectPill: function(){
    
    if(this.cursor.right.isDown ){
        this.dollar = game.add.sprite(game.width/2+300, game.height/2, 'dollar');
        game.add.tween(this.dollar).to({y: game.height/2 -300}, 500).to({alpha: 0}, 1000,Phaser.Easing.Sinusoidal.Out).start();
    }
    else if(this.cursor.left.isDown){
        this.leftdoor_open.kill();
        this.leftdoor_closed = game.add.sprite(game.width/2-200, game.height/3+25, 'leftclosed');
        this.leftdoor_closed.anchor.setTo(0.5, 0);
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

};
