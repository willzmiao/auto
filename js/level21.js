// Create our 'main' state that will contain the game
var level21State = {

 
preload: function() { 

        game.load.image('background', 'assets/act4bg.png');
        game.load.image('needle', 'assets/level21/pin_blurred.png');
        game.load.image('bubble', 'assets/level21/bubble_large2.png');
        game.load.image('shadow', 'assets/level21/shadow.png');
        game.load.image('text1', 'assets/level21/text1.png');
    game.load.audio('nooo', 'assets/level21/nooo.wav');
    game.load.audio('pop','assets/level11/pop.wav');
    
    },

create: function() { 
    
    this.background = game.add.sprite(0,0, 'background');
    
    this.shadow = game.add.sprite(game.width/2, game.height/2, 'shadow');
    this.shadow.anchor.set(0.5,0.5);
    
    this.needle = game.add.sprite(game.width/2, game.height/2, 'needle');
    this.needle.anchor.set(0.5,0.5);
    this.needle.alpha = 0.8;
    //game.add.tween(this.needle.scale).to({y: this.bubble.y+50}, 1000).start();
    game.add.tween(this.needle.scale).to({x: 1.5, y: 1.5}, 1000,Phaser.Easing.Sinusoidal.Out,false,2000).start();
    //game.add.tween(this.needle.scale).to({x: 2, y: 2}, 1000,Phaser.Easing.Sinusoidal.Out,false,2000).start();
    
    //game.stage.backgroundColor = '#71c5cf';
    this.bubble = game.add.sprite(game.width/2, game.height/2, 'bubble');
    this.bubble.anchor.set(0.5,0.5);
    game.add.tween(this.bubble).to({y: this.bubble.y+50}, 1000).to({y: this.bubble.y}, 1000,Phaser.Easing.Sinusoidal.InOut).loop().start();
    
    this.nooo = game.add.audio('nooo');
    this.pop = game.add.audio('pop');
    this.timer092288 = this.game.time.events.add(500, this.cry, this);
    this.tomei1 = this.game.time.events.add(2000, this.pop1, this);
    
    this.text1 = game.add.sprite(game.width/2,200, 'text1');
    this.text1.anchor.setTo(0.5,0.5);
    
    //tell phaser which keys we want to use    
    this.cursor = game.input.keyboard.createCursorKeys();
    
//    var label = game.add.text(game.width/5, 350,
//            'Sorry, we can\'t afford you anymore Jim', { font: '60px Arial', fill: 'rgba(0,0,0,0.5)'});
  
    
    game.physics.arcade.enable(this.bubble);
    this.timer0988 = this.game.time.events.add(3000, this.nextState, this);

    },

update: function() {
    

    var rKey = game.input.keyboard.addKey(Phaser.Keyboard.R);
    var nKey = game.input.keyboard.addKey(Phaser.Keyboard.N);
    rKey.onDown.add(this.restartGame, this);
    nKey.onDown.add(this.nextState, this);

    if(!game.global.act4.isPlaying){
        game.global.act4.play();
    }

    
},

pop1: function(){

    this.bubble.kill();
    this.pop.play();
    game.add.tween(this.shadow).to({y: -2000}, 500,Phaser.Easing.Exponential.InOut,false,1000).start();
    game.add.tween(this.needle).to({y: -2000}, 500,Phaser.Easing.Exponential.InOut,false,1000).start();
    game.add.tween(this.text1).to({y: -2000}, 500,Phaser.Easing.Exponential.InOut,false,1000).start();
    //game.add.tween(this.shadow).to({y: -1000}, 1000,Phaser.Easing.Exponential.Out,true,1000).start();
    //game.add.tween(this.needle).to({y: -1000}, 1000,Phaser.Easing.Exponential.Out,true,1000).start();
    
},
    
cry: function(){
  this.nooo.play();  
},
    
restartGame: function() {
    // Start the 'menu' state, which restarts the game
    game.state.start('menu');
},

nextState: function(){
    game.state.start('level22');
},

};
