// Create our 'main' state that will contain the game
var closingState = {

 
preload: function() { 

    //game.load.image('background', 'assets/level14/background.png');
    game.load.image('background', 'assets/level14/background.png');
    game.load.image('bubble1', 'assets/level11/bubble_left.png');
    game.load.image('bubble2', 'assets/level11/bubble_mid.png');
    game.load.image('bubble3', 'assets/level11/bubble_right.png');
    game.load.image('ending', 'assets/level25/text1.png');
        
    game.load.spritesheet('robot_anim', 'assets/level25/robot.png', 1080, 695, 4);
    
    //game.load.audio('exit','assets/sound/exit.wav');
    },

create: function() { 
    
    game.stage.backgroundColor = '#000000';
    
    //tell phaser which keys we want to use    
    this.cursor = game.input.keyboard.createCursorKeys();
        
    var bg = game.add.sprite(0, 0, 'background');
    
    var heart = game.add.sprite(0, 1155, 'robot_anim');
    //this.heart.anchor(0,1);
    var beat = heart.animations.add('beat');
    heart.animations.play('beat', 3, true);

    this.timer98501 = game.time.events.loop(1800, this.blowBubbles, this); 
    //this.timer48501 = game.time.events.loop(100, this.moveCamera, this); 
    
    this.timer412301 = game.time.events.add(10000, this.fade, this); 
    //game.camera.onFadeComplete.add(this.ending, this);
    //game.input.onDown.add(this.fade, this);
    
    this.ends = game.add.sprite(game.width/2, game.height/2-300, 'ending');
    this.ends.anchor.set(0.5,0.5);
    this.ends.alpha = 0;
    this.timer483301 = game.time.events.add(6000, this.showText, this); 
    this.timer422301 = game.time.events.add(15000, this.nextState, this); 
    
    },

update: function() {
    
    var rKey = game.input.keyboard.addKey(Phaser.Keyboard.R);
    var nKey = game.input.keyboard.addKey(Phaser.Keyboard.N);
    rKey.onDown.add(this.restartGame, this);
    nKey.onDown.add(this.nextState, this);
    
    if(!game.global.act5.isPlaying){
        game.global.act5.play();
    }

   
},


blowBubbles: function(){
  
    var sprite = game.add.sprite(500, game.height-400, 'bubble3');
    sprite.scale.set(game.rnd.realInRange(0.6, 1.5));
    var speed = game.rnd.between(4000, 6000);
    var range = game.rnd.between(-300, 300);
    game.add.tween(sprite).to({ y: -256 }, speed, Phaser.Easing.Sinusoidal.InOut, true, 0, 1000, false);
    game.add.tween(sprite).to({ x: sprite.x+range }, speed, Phaser.Easing.Sinusoidal.InOut, true, 0, 1000, false);
    //delay += 200;
    
},
    
moveCamera: function(){
    //game.add.tween(game.camera.y).to({ y: -1000 }, 2000, Phaser.Easing.Sinusoidal.InOut, true, 0, 1000, false);
    //game.camera.y -= 4;
},

restartGame: function() {
    // Start the 'menu' state, which restarts the game
    game.state.start('menu');
},

nextState: function(){
    //game.global.act5.stop();
    game.state.start('level25');
},
    
fade: function() {

    //  You can set your own fade color and duration
    game.camera.fade(0x000000, 4000);

},
    
showText: function(){
    //game.add.tween(this.ends).to({ alpha: 100}, 1000, Phaser.Easing.Sinusoidal.InOut, true, 0, 1000, false);
    //this.game.world.bringToTop(this.ends);
    //game.add.tween(this.ends).to({alpha: 100}, 2000).easing(Phaser.Easing.Sinusoidal.InOut).start();
    this.ends.alpha = 1;
    
}, 

};
