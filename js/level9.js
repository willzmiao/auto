var level9State = {
    
 
preload: function() { 
        game.load.image('worker1', 'assets/worker1.png');
        game.load.image('worker2', 'assets/worker2.png');
        game.load.image('bubble', 'assets/bubble1.png');
        game.load.image('text1', 'assets/level9/text1.png');
        
    },

create: function() { 
    
    game.stage.backgroundColor = '#71c5cf';
    
    this.bubble1 = game.add.sprite(game.width/3, game.height/7, 'bubble');
    this.bubble2 = game.add.sprite(game.width/8, game.height/3, 'bubble');
    this.bubble3 = game.add.sprite(game.width/2, game.height*2/7, 'bubble');
    this.bubble4 = game.add.sprite(game.width*5/7, game.height/7, 'bubble');
    this.bubble5 = game.add.sprite(game.width/3, game.height*2/7, 'bubble');
    
    var speed1 = game.rnd.between(800, 1200);
    var speed2 = game.rnd.between(800, 1200);
    var speed3 = game.rnd.between(800, 1200);
    var speed4 = game.rnd.between(800, 1200);
    var speed5 = game.rnd.between(800, 1200);
    var dist = game.rnd.between(0, 150);
    
    game.physics.arcade.enable(this.bubble1);
    game.physics.arcade.enable(this.bubble2);
    game.physics.arcade.enable(this.bubble3);
    game.physics.arcade.enable(this.bubble4);
    game.physics.arcade.enable(this.bubble5);

    
    game.add.tween(this.bubble1).to({y: this.bubble1.y+dist}, speed3).to({y: this.bubble1.y}, speed4,Phaser.Easing.Sinusoidal.InOut).loop().start();
    game.add.tween(this.bubble2).to({y: this.bubble2.y+dist}, speed1).to({y: this.bubble2.y}, speed2,Phaser.Easing.Sinusoidal.InOut).loop().start();
    game.add.tween(this.bubble3).to({y: this.bubble3.y+dist}, speed2).to({y: this.bubble3.y}, speed3,Phaser.Easing.Sinusoidal.InOut).loop().start();
    game.add.tween(this.bubble4).to({y: this.bubble4.y+dist}, speed4).to({y: this.bubble4.y}, speed2,Phaser.Easing.Sinusoidal.InOut).loop().start();
    game.add.tween(this.bubble5).to({y: this.bubble5.y+dist}, speed5).to({y: this.bubble5.y}, speed1,Phaser.Easing.Sinusoidal.InOut).loop().start();
    
    this.text1 = game.add.sprite(game.width/2, 200, 'text1');
    this.text1.anchor.set(0.5,0.5);
    
    
    },

update: function() {
    
    //restart level and next level
    //var rKey = game.input.keyboard.addKey(Phaser.Keyboard.R);
    var nKey = game.input.keyboard.addKey(Phaser.Keyboard.N);
    //rKey.onDown.add(this.restartGame, this);
    nKey.onDown.add(this.nextState, this);

    
},

nextState: function(){
    game.state.start('level10');
},
    
};
