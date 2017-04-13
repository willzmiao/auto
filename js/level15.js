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
    game.load.audio('hum','assets/level15/hum.wav');
    game.load.image('text1', 'assets/level15/text1.png');
    
    game.load.image('up', 'assets/ui/up_arrow.png');
    game.load.image('down', 'assets/ui/down_arrow.png');
    game.load.image('left', 'assets/ui/left_arrow.png');
    game.load.image('right', 'assets/ui/right_arrow.png');
    
    game.load.audio('womp1','assets/level13/womp1.wav');
    game.load.audio('pop','assets/level11/pop.wav');

    },

create: function() { 
    
    //game.stage.backgroundColor = '#71c5cf';
    game.add.image(0, 0, 'background');
    this.specs = game.add.sprite(0, 0, 'specs');
//    var label = game.add.text(game.width/5, 350,
//            'lal a la lala', { font: '20px Arial', fill: 'rgba(0,0,0,0.5)'});

//    //var text = game.add.text(32, 32, '', { font: "15px Arial", fill: "#19de65" });
//    var label = game.add.text(game.width/4, game.height/8,
//            'We need cut costs. \nBusiness is business.', { font: '40px Arial', fill: '#ffffff'});
    
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
    
    this.speech1 = game.add.sprite(game.width/3, game.height*2/3+200, 'speech1');
    this.speech2 = game.add.sprite(350, game.height/2-200, 'speech2');
    this.speech3 = game.add.sprite(game.width/3, game.height*2/3+200, 'speech3');
    
    this.speech1.alpha = 0;
    this.speech2.alpha = 0;
    this.speech3.alpha = 0;
    this.specs.alpha = 0.5;

    this.speech1.scale.setTo(1.5,1.5);
    this.speech2.scale.setTo(1.5,1.5);
    this.speech3.scale.setTo(1.5,1.5);
    
    var speed1 = game.rnd.between(800, 1200);
    var speed2 = game.rnd.between(800, 1200);
    var speed3 = game.rnd.between(800, 1200);
    var speed4 = game.rnd.between(800, 1200);
    var speed5 = game.rnd.between(800, 1200);
    var speed6 = game.rnd.between(800, 1200);
    var dist = game.rnd.between(0, 20);
    
    this.hum = game.add.audio('hum');
    this.hum.loop = true;
    this.hum.play();
    
    this.womp = game.add.audio('womp1');
    this.pop = game.add.audio('pop');
    
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

    this.text1 = game.add.sprite(game.width/2, 250, 'text1');
    this.text1.anchor.setTo(0.5,0.5);
    this.game.world.bringToTop(this.text1);
    
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
    //this.vignette.alpha = 0.5;
    
    var speed;
    
    if(!game.device.desktop){
        this.addMobileInputs();  
        this.speed = 30;
    }
    else if (game.device.desktop){
        this.speed = 15;
    }

    if(!this.churn.isPlaying){
        this.churn.stop();
    }

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
    
    if(!game.global.act3.isPlaying){
        game.global.act3.play();
    }


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
    //this.speech3.alpha = 1.0;
    this.pop.play();
    this.speech2.kill();
    this.womp.volume = 2;
    this.womp.play();
    this.timer02290 = this.game.time.events.add(1000, this.showSpeech, this);
    game.add.tween(this.person1).to({y: 3000}, 1000, "Exponential", false, 500).to({alpha: 0}, 200).easing(Phaser.Easing.Exponential.Out).start();
    //game.add.tween(this.needle).to({y: this.needle.y-500}, 500,Phaser.Easing.Exponential.Out).start();
    //play animation
//    var heart = game.add.sprite(550, 400, 'heart');
//    var beat = heart.animations.add('beat');
//    heart.animations.play('beat', 4, false);

    //delay switching states by X time
    //this.changeTimer = this.game.time.events.add(3000, this.restartGame, this);
    
    },

showSpeech: function(){
  
    this.speech3.alpha = 1.0;
},    
    
killBubble2: function(needle, bubble2){
    
    this.bubble2.kill();
    game.add.tween(this.person2).to({y: 3000}, 1000, "Exponential", false, 500).to({alpha: 0}, 200).easing(Phaser.Easing.Exponential.Out).start();
    this.pop.play();
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
    game.add.tween(this.speech1).to({alpha: 0}, 2000).easing(Phaser.Easing.Exponential.Out).start();
    this.pop.play();
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
    this.pop.play();
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
    this.pop.play();
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
    this.pop.play();
    game.add.tween(this.person6).to({y: 3000}, 1000, "Exponential", false, 500).to({alpha: 0}, 200).easing(Phaser.Easing.Exponential.Out).start();
    this.timer023390 = this.game.time.events.add(5000, this.nextState, this);
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
    if(this.cursor.left.isDown || this.moveLeft){
        this.needle.body.x -= this.speed;
    }
    else if(this.cursor.right.isDown || this.moveRight){
        this.needle.body.x += this.speed;
    }
    if(this.cursor.up.isDown || this.moveUp){
        this.needle.body.y -= this.speed;
    }
    else if(this.cursor.down.isDown || this.moveDown){
        this.needle.body.y += this.speed;
    }   
},

restartGame: function(){
    game.state.start('menu');
},
    
nextState: function(){
    this.hum.stop();
    game.state.start('level16');
},
    

addMobileInputs: function() {
        
    // Movement variables
    this.moveLeft = false; 
    this.moveRight = false;
    this.moveUp = false;
    this.moveDown = false;
        
    // Add the move left button
    var leftButton = game.add.sprite(game.width/3,game.height-175,'left'); 
    leftButton.inputEnabled = true;
    leftButton.alpha = 0.5; 
    //leftButton.events.onInputOver.add(this.setLeftTrue, this); 
    leftButton.events.onInputOut.add(this.setLeftFalse, this); 
    leftButton.events.onInputDown.add(this.setLeftTrue, this); 
    leftButton.events.onInputUp.add(this.setLeftFalse, this);
        
    // Add the move right button
    var rightButton = game.add.sprite(game.width*2/3,game.height-175,'right');
    rightButton.inputEnabled = true;
    rightButton.alpha = 0.5; 
    //rightButton.events.onInputOver.add(this.setRightTrue, this); 
    rightButton.events.onInputOut.add(this.setRightFalse, this); 
    rightButton.events.onInputDown.add(this.setRightTrue, this); 
    rightButton.events.onInputUp.add(this.setRightFalse, this);
    
    // Add the move up button
    var upButton = game.add.sprite(game.width/2,game.height-275,'up');
    upButton.inputEnabled = true;
    upButton.alpha = 0.5; 
    //upButton.events.onInputOver.add(this.setUpTrue, this); 
    upButton.events.onInputOut.add(this.setUpFalse, this); 
    upButton.events.onInputDown.add(this.setUpTrue, this); 
    upButton.events.onInputUp.add(this.setUpFalse, this);
    
    // Add the move down button
    var downButton = game.add.sprite(game.width/2,game.height-150,'down');
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
