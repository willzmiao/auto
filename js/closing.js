// Create our 'main' state that will contain the game
var closingState = {

 
preload: function() { 

    //game.load.image('background', 'assets/level14/background.png');
    game.load.image('background', 'assets/level14/background.png');
    game.load.image('bubble1', 'assets/level11/bubble_left.png');
    game.load.image('bubble2', 'assets/level11/bubble_mid.png');
    game.load.image('bubble3', 'assets/level11/bubble_right.png');
        
    game.load.spritesheet('robot_anim', 'assets/level25/robot.png', 1080, 765, 4);
    },

create: function() { 
    
    game.stage.backgroundColor = '#71c5cf';
    
    //tell phaser which keys we want to use    
    this.cursor = game.input.keyboard.createCursorKeys();
    
//    var label = game.add.text(game.width/5, 350,
//            'Jim is still jobless', { font: '60px Arial', fill: 'rgba(0,0,0,0.5)'});
    
//    this.doors_open = game.add.sprite(game.width/2, game.height/2, 'doors_open');
//    this.doors_open.anchor.setTo(0.5, 0);
//
//    game.add.tween(this.speech_left).to({y: this.speech_left.y+10}, 1000).to({y: this.speech_left.y}, 1000,Phaser.Easing.Sinusoidal.InOut).loop().start();
//    game.add.tween(this.speech_right).to({y: this.speech_right.y+10}, 1000).to({y: this.speech_right.y}, 1000,Phaser.Easing.Sinusoidal.InOut).loop().start();
    
//    game.physics.arcade.enable(this.bluepill);
//    game.physics.arcade.enable(this.redpill);
//
        
    var bg = game.add.sprite(0, 0, 'background');
    
    var heart = game.add.sprite(0, 1155, 'robot_anim');
    //this.heart.anchor(0,1);
    var beat = heart.animations.add('beat');
    heart.animations.play('beat', 3, true);

    
    //var delay = 0;
    this.timer98501 = game.time.events.loop(1200, this.blowBubbles, this); 
    
    },

update: function() {
    
    var rKey = game.input.keyboard.addKey(Phaser.Keyboard.R);
    var nKey = game.input.keyboard.addKey(Phaser.Keyboard.N);
    rKey.onDown.add(this.restartGame, this);
    nKey.onDown.add(this.nextState, this);

   
},


blowBubbles: function(){
  
    var sprite = game.add.sprite(500, game.height-400, 'bubble3');
    sprite.scale.set(game.rnd.realInRange(0.6, 1.5));
    var speed = game.rnd.between(4000, 6000);
    game.add.tween(sprite).to({ y: -256 }, speed, Phaser.Easing.Sinusoidal.InOut, true, 0, 1000, false);
    //delay += 200;
    
},

restartGame: function() {
    // Start the 'menu' state, which restarts the game
    game.state.start('menu');
},

nextState: function(){
    game.state.start('menu');
},

};
