// Create our 'main' state that will contain the game
var level22State = {

 
preload: function() { 
        game.load.image('stopsign', 'assets/level17/stop_sign.png');
        game.load.image('doors_closed', 'assets/level17/doors_closed.png');
        game.load.image('doors_open', 'assets/level17/doors_open.png');
        game.load.image('speech_left', 'assets/level17/speech_left.png');
        game.load.image('speech_right', 'assets/level17/speech_right.png');
        game.load.image('dollar', 'assets/level17/dollar.png');
        
    },

create: function() { 
    
    game.stage.backgroundColor = '#71c5cf';
    
    //tell phaser which keys we want to use    
    this.cursor = game.input.keyboard.createCursorKeys();
    
    var label = game.add.text(game.width/5, 350,
            'Hey, do you mind taking on Jim\'s morning line?', { font: '60px Arial', fill: 'rgba(0,0,0,0.5)'});
    
    //var text = game.add.text(32, 32, '', { font: "15px Arial", fill: "#19de65" });
    
//    this.doors_open = game.add.sprite(game.width/2, game.height/2, 'doors_open');
//    this.doors_open.anchor.setTo(0.5, 0);
//
//    game.add.tween(this.speech_left).to({y: this.speech_left.y+10}, 1000).to({y: this.speech_left.y}, 1000,Phaser.Easing.Sinusoidal.InOut).loop().start();
//    game.add.tween(this.speech_right).to({y: this.speech_right.y+10}, 1000).to({y: this.speech_right.y}, 1000,Phaser.Easing.Sinusoidal.InOut).loop().start();
    
//    game.physics.arcade.enable(this.bluepill);
//    game.physics.arcade.enable(this.redpill);
//
        

    },

update: function() {
    
    var rKey = game.input.keyboard.addKey(Phaser.Keyboard.R);
    var nKey = game.input.keyboard.addKey(Phaser.Keyboard.N);
    rKey.onDown.add(this.restartGame, this);
    nKey.onDown.add(this.nextState, this);

},



restartGame: function() {
    // Start the 'menu' state, which restarts the game
    game.state.start('menu');
},

nextState: function(){
    game.state.start('level23');
},

};
