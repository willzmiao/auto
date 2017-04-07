var level15State = {
    

preload: function() { 
    game.load.image('bubble', 'assets/bubble1.png');
    game.load.image('needle', 'assets/level11/needle.png');
    game.load.image('line', 'assets/transparent_line.png');
    game.load.image('speech1', 'assets/level10_speech1.png');
    game.load.image('speech2', 'assets/level10_speech2.png');
    game.load.image('speech3', 'assets/level15/bubble3.png');
    game.load.image('bubble_left', 'assets/level11/bubble_left.png');
    game.load.image('bubble_right', 'assets/level11/bubble_right.png');
    game.load.image('bubble_mid', 'assets/level11/bubble_mid.png');
    game.load.image('background', 'assets/level11/background.png');
    game.load.image('person_left', 'assets/level11/person_left.png');
    game.load.image('person_left2', 'assets/level11/person_left2.png');
    game.load.image('person_left3', 'assets/level11/person_left3.png');
    game.load.image('person_right', 'assets/level11/person_right.png');
    game.load.image('person_right2', 'assets/level11/person_right2.png');
    game.load.image('person_right3', 'assets/level11/person_right3.png');
    game.load.image('person_mid', 'assets/level11/person_mid.png');
    game.load.image('person_mid2', 'assets/level11/person_mid2.png');
    game.load.image('specs', 'assets/level11/specs.png');
    game.load.image('vignette', 'assets/level11/vignette.png');
        
    },

create: function() { 
    
    game.stage.backgroundColor = '#71c5cf';
    game.add.image(0, 0, 'background');
    this.specs = game.add.sprite(0, 0, 'specs');
//    var label = game.add.text(game.width/5, 350,
//            'lal a la lala', { font: '20px Arial', fill: 'rgba(0,0,0,0.5)'});

//    //var text = game.add.text(32, 32, '', { font: "15px Arial", fill: "#19de65" });
    var label = game.add.text(game.width/4, game.height/8,
            'We need cut costs. \nBusiness is business.', { font: '40px Arial', fill: '#ffffff'});
    
    //nextLine();
    
    //tell phaser which keys we want to use    
    this.cursor = game.input.keyboard.createCursorKeys();
            
    this.person4 = game.add.sprite(game.width/4, game.height/4, 'person_mid2');
    this.bubble4 = game.add.sprite(game.width/4, game.height/4, 'bubble_mid');
    this.person4.anchor.set(0.5,0.5);
    this.bubble4.anchor.set(0.5,0.5);
    this.bubble4.scale.setTo(0.5,0.5);
    this.person4.scale.setTo(0.5,0.5);
    
    this.person5 = game.add.sprite(game.width*3/4+30, game.height/4, 'person_left2');
    this.bubble5 = game.add.sprite(game.width*3/4, game.height/4, 'bubble_left');
    this.person5.anchor.set(0.5,0.5);
    this.bubble5.anchor.set(0.5,0.5);
    this.bubble5.scale.setTo(0.8,0.8);
    this.person5.scale.setTo(0.8,0.8);
    
    this.person6 = game.add.sprite(game.width/2, game.height/4+50, 'person_right3');
    this.bubble6 = game.add.sprite(game.width/2, game.height/4+50, 'bubble_right');
    this.person6.anchor.set(0.5,0.5);
    this.bubble6.anchor.set(0.5,0.5);
    this.bubble6.scale.setTo(0.8,0.8);
    this.person6.scale.setTo(0.8,0.8);
    
    this.person1 = game.add.sprite(game.width/3+40, game.height/3, 'person_left');
    this.bubble1 = game.add.sprite(game.width/3, game.height/3, 'bubble_left');
    this.person1.anchor.set(0.5,0.5);
    this.bubble1.anchor.set(0.5,0.5);

    this.person2 = game.add.sprite(game.width*2/3, game.height/3, 'person_right');
    this.bubble2 = game.add.sprite(game.width*2/3, game.height/3, 'bubble_right');
    this.person2.anchor.set(0.5,0.5);
    this.bubble2.anchor.set(0.5,0.5);

    this.person3 = game.add.sprite(game.width/2, game.height/2-50, 'person_mid');
    this.bubble3 = game.add.sprite(game.width/2, game.height/2-50, 'bubble_mid');
    this.person3.anchor.set(0.5,0.5);
    this.bubble3.anchor.set(0.5,0.5);
    
    this.needle = game.add.sprite(game.width/5, game.height*5/6, 'needle');
    this.line = game.add.sprite(0, game.height*4/5, 'line');
    
    this.speech1 = game.add.sprite(game.width/3, game.height*2/3, 'speech1');
    this.speech2 = game.add.sprite(-50, game.height/2-200, 'speech2');
    this.speech3 = game.add.sprite(game.width/3, game.height*2/3, 'speech3');
    
    this.speech1.alpha = 0;
    this.speech2.alpha = 0;
    this.speech3.alpha = 0;
    this.specs.alpha = 0.5;

    var speed1 = game.rnd.between(800, 1200);
    var speed2 = game.rnd.between(800, 1200);
    var speed3 = game.rnd.between(800, 1200);
    var speed4 = game.rnd.between(800, 1200);
    var speed5 = game.rnd.between(800, 1200);
    var speed6 = game.rnd.between(800, 1200);
    var dist = game.rnd.between(0, 20);
    
    game.add.tween(this.bubble1).to({y: this.bubble1.y+dist}, speed3).to({y: this.bubble1.y}, speed4,Phaser.Easing.Sinusoidal.InOut).loop().start();
    game.add.tween(this.bubble2).to({y: this.bubble2.y+dist}, speed1).to({y: this.bubble2.y}, speed2,Phaser.Easing.Sinusoidal.InOut).loop().start();
    game.add.tween(this.bubble3).to({y: this.bubble3.y+dist}, speed2).to({y: this.bubble3.y}, speed3,Phaser.Easing.Sinusoidal.InOut).loop().start();
    game.add.tween(this.bubble4).to({y: this.bubble4.y+dist}, speed2).to({y: this.bubble4.y}, speed3,Phaser.Easing.Sinusoidal.InOut).loop().start();
    game.add.tween(this.bubble5).to({y: this.bubble5.y+dist}, speed2).to({y: this.bubble5.y}, speed3,Phaser.Easing.Sinusoidal.InOut).loop().start();
    game.add.tween(this.bubble6).to({y: this.bubble6.y+dist}, speed2).to({y: this.bubble6.y}, speed3,Phaser.Easing.Sinusoidal.InOut).loop().start();
    game.add.tween(this.person1).to({y: this.person1.y+dist}, speed3).to({y: this.person1.y}, speed4,Phaser.Easing.Sinusoidal.InOut).loop().start();
    game.add.tween(this.person2).to({y: this.person2.y+dist}, speed1).to({y: this.person2.y}, speed2,Phaser.Easing.Sinusoidal.InOut).loop().start();
    game.add.tween(this.person3).to({y: this.person3.y+dist}, speed2).to({y: this.person3.y}, speed3,Phaser.Easing.Sinusoidal.InOut).loop().start();
    game.add.tween(this.person4).to({y: this.person4.y+dist}, speed2).to({y: this.person4.y}, speed3,Phaser.Easing.Sinusoidal.InOut).loop().start();
    game.add.tween(this.person5).to({y: this.person5.y+dist}, speed2).to({y: this.person5.y}, speed3,Phaser.Easing.Sinusoidal.InOut).loop().start();
    game.add.tween(this.person6).to({y: this.person6.y+dist}, speed2).to({y: this.person6.y}, speed3,Phaser.Easing.Sinusoidal.InOut).loop().start();

    game.add.tween(this.specs).to({alpha: 0.3}, 5000,Phaser.Easing.Sinusoidal.InOut).loop().start();
    
    //var tween = game.add.tween(bubble1).to( { alpha: 1 }, 2000, "Linear", true, 0, -1);
    //create the holes for the worker pegs
//    this.rect1 = game.add.sprite(550, 650, 'rectangle');
//    this.rect2 = game.add.sprite(150, 650, 'rectangle');
//    this.rect3 = game.add.sprite(350, 650, 'rectangle');
    
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;


    // Add physics to the workers
    game.physics.arcade.enable(this.bubble1);
    game.physics.arcade.enable(this.bubble2);
    game.physics.arcade.enable(this.bubble3);
    game.physics.arcade.enable(this.bubble4);
    game.physics.arcade.enable(this.bubble5);
    game.physics.arcade.enable(this.bubble6);
    game.physics.arcade.enable(this.person1);
    game.physics.arcade.enable(this.person2);
    game.physics.arcade.enable(this.person3);
    game.physics.arcade.enable(this.person4);
    game.physics.arcade.enable(this.person5);
    game.physics.arcade.enable(this.person6);

    game.physics.arcade.enable(this.needle);
    game.physics.arcade.enable(this.line);
    
    this.needle.body.collideWorldBounds = true;
    game.add.image(0, 0, 'vignette');
    


},

update: function() {
    
    //restart level and next level
    var rKey = game.input.keyboard.addKey(Phaser.Keyboard.R);
    var nKey = game.input.keyboard.addKey(Phaser.Keyboard.N);
    rKey.onDown.add(this.restartGame, this);
    nKey.onDown.add(this.nextState, this);

    this.moveNeedle();
    
    game.physics.arcade.overlap(this.bubble1, this.needle, this.killBubble1, null, this);
    game.physics.arcade.overlap(this.bubble2, this.needle, this.killBubble2, null, this);
    game.physics.arcade.overlap(this.bubble3, this.needle, this.killBubble3, null, this);
    game.physics.arcade.overlap(this.bubble4, this.needle, this.killBubble4, null, this);
    game.physics.arcade.overlap(this.bubble5, this.needle, this.killBubble5, null, this);
    game.physics.arcade.overlap(this.bubble6, this.needle, this.killBubble6, null, this);
    
    game.physics.arcade.overlap(this.line, this.needle, this.showSpeech1, null, this);
    

},
   
showSpeech1: function(needle, line){
    
    //this.bubble1.kill();
    this.speech1.alpha = 1.0;
    //play animation
//    var heart = game.add.sprite(550, 400, 'heart');
//    var beat = heart.animations.add('beat');
//    heart.animations.play('beat', 4, false);

    //delay switching states by X time
    //this.changeTimer = this.game.time.events.add(3000, this.restartGame, this);
    
    },
    
killBubble1: function(needle, bubble1){
    
    this.bubble1.kill();
    this.speech3.alpha = 1.0;
    this.speech2.kill();

    game.add.tween(this.person1).to({y: 3000}, 1000, "Exponential", false, 500).to({alpha: 0}, 200).easing(Phaser.Easing.Exponential.Out).start();
    //game.add.tween(this.needle).to({y: this.needle.y-500}, 500,Phaser.Easing.Exponential.Out).start();
    //play animation
//    var heart = game.add.sprite(550, 400, 'heart');
//    var beat = heart.animations.add('beat');
//    heart.animations.play('beat', 4, false);

    //delay switching states by X time
    //this.changeTimer = this.game.time.events.add(3000, this.restartGame, this);
    
    },

killBubble2: function(needle, bubble2){
    
    this.bubble2.kill();
    game.add.tween(this.person2).to({y: 3000}, 1000, "Exponential", false, 500).to({alpha: 0}, 200).easing(Phaser.Easing.Exponential.Out).start();
    //this.person2.alpha=0;
    //this.worker1hole.alpha = 1.0;
    //play animation
//    var heart = game.add.sprite(550, 400, 'heart');
//    var beat = heart.animations.add('beat');
//    heart.animations.play('beat', 4, false);

    //delay switching states by X time
    //this.changeTimer = this.game.time.events.add(3000, this.restartGame, this);
    
    },
    
killBubble3: function(needle, bubble3){
    
    this.bubble3.kill();
    this.speech2.alpha = 1.0;
    game.add.tween(this.person3).to({y: 3000}, 1000, "Exponential", false, 500).to({alpha: 0}, 200).easing(Phaser.Easing.Exponential.Out).start();
    //this.person3.alpha=0;
    //this.worker1hole.alpha = 1.0;
    //play animation
//    var heart = game.add.sprite(550, 400, 'heart');
//    var beat = heart.animations.add('beat');
//    heart.animations.play('beat', 4, false);

    //delay switching states by X time
    //this.changeTimer = this.game.time.events.add(3000, this.restartGame, this);
    
    },
    
killBubble4: function(needle, bubble4){
    
    this.bubble4.kill();
    //this.speech2.alpha = 1.0;
    game.add.tween(this.person4).to({y: 3000}, 1000, "Exponential", false, 500).to({alpha: 0}, 200).easing(Phaser.Easing.Exponential.Out).start();
    //this.person3.alpha=0;
    //this.worker1hole.alpha = 1.0;
    //play animation
//    var heart = game.add.sprite(550, 400, 'heart');
//    var beat = heart.animations.add('beat');
//    heart.animations.play('beat', 4, false);

    //delay switching states by X time
    //this.changeTimer = this.game.time.events.add(3000, this.restartGame, this);
    
    },
    
killBubble5: function(needle, bubble5){
    
    this.bubble5.kill();
    //this.speech2.alpha = 1.0;
    game.add.tween(this.person5).to({y: 3000}, 1000, "Exponential", false, 500).to({alpha: 0}, 200).easing(Phaser.Easing.Exponential.Out).start();
    //this.person3.alpha=0;
    //this.worker1hole.alpha = 1.0;
    //play animation
//    var heart = game.add.sprite(550, 400, 'heart');
//    var beat = heart.animations.add('beat');
//    heart.animations.play('beat', 4, false);

    //delay switching states by X time
    //this.changeTimer = this.game.time.events.add(3000, this.restartGame, this);
    
    },
    
killBubble6: function(needle, bubble6){
    
    this.bubble6.kill();
    //this.speech2.alpha = 1.0;
    game.add.tween(this.person6).to({y: 3000}, 1000, "Exponential", false, 500).to({alpha: 0}, 200).easing(Phaser.Easing.Exponential.Out).start();
    //this.person3.alpha=0;
    //this.worker1hole.alpha = 1.0;
    //play animation
//    var heart = game.add.sprite(550, 400, 'heart');
//    var beat = heart.animations.add('beat');
//    heart.animations.play('beat', 4, false);

    //delay switching states by X time
    //this.changeTimer = this.game.time.events.add(3000, this.restartGame, this);
    
    },


    
moveNeedle: function(){
    if(this.cursor.left.isDown){
        this.needle.body.x -= 15;
    }
    else if(this.cursor.right.isDown){
        this.needle.body.x += 15;
    }
    if(this.cursor.up.isDown){
        this.needle.body.y -= 15;
    }
    else if(this.cursor.down.isDown){
        this.needle.body.y += 15;
    }   
},

restartGame: function(){
    game.state.start('menu');
},
    
nextState: function(){
    game.state.start('level16');
},
    
};
