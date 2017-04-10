// Create our 'main' state that will contain the game
var level21State = {

 
preload: function() { 

        game.load.image('background', 'assets/act4bg.png');
        game.load.image('needle', 'assets/level11/needle.png');
        game.load.image('bubble', 'assets/level21/bubble_large.png');
        game.load.image('shadow', 'assets/level21/shadow.png');
        game.load.image('text1', 'assets/level21/text1.png');
        
    },

create: function() { 
    
    this.background = game.add.sprite(0,0, 'background');
    
    this.shadow = game.add.sprite(game.width/2, game.height/2, 'shadow');
    this.shadow.anchor.set(0.5,0.5);
    
    this.needle = game.add.sprite(game.width/2, game.height/2, 'needle');
    this.needle.anchor.set(0.5,0.5);
    this.needle.alpha = 0.5;
    //game.add.tween(this.needle.scale).to({y: this.bubble.y+50}, 1000).start();
    game.add.tween(this.needle.scale).to({x: 2, y: 2}, 1000,Phaser.Easing.Sinusoidal.Out,false,2000).start();
    
    //game.stage.backgroundColor = '#71c5cf';
    this.bubble = game.add.sprite(game.width/2, game.height/2, 'bubble');
    this.bubble.anchor.set(0.5,0.5);
    game.add.tween(this.bubble).to({y: this.bubble.y+50}, 1000).to({y: this.bubble.y}, 1000,Phaser.Easing.Sinusoidal.InOut).loop().start();
    
    
    this.text1 = game.add.sprite(game.width/2,200, 'text1');
    this.text1.anchor.setTo(0.5,0.5);
    
    //tell phaser which keys we want to use    
    this.cursor = game.input.keyboard.createCursorKeys();
    
//    var label = game.add.text(game.width/5, 350,
//            'Sorry, we can\'t afford you anymore Jim', { font: '60px Arial', fill: 'rgba(0,0,0,0.5)'});
  
    
    game.physics.arcade.enable(this.bubble);
    this.timer0988 = this.game.time.events.add(8000, this.nextState, this);

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
    game.state.start('level22');
},

};
