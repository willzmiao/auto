var level8State = {
    
 
preload: function() { 
        game.load.image('newspaper', 'assets/level8/newspaper.png');
        game.load.image('coupon', 'assets/level8/coupon.png');
        game.load.image('spam', 'assets/level8/spam2.png');
        game.load.image('spam1', 'assets/level8/spam.png');
        game.load.image('text1', 'assets/level8/text1.png');
    
        game.load.image('background', 'assets/act1bg.png');
    
        //game.load.image('worker2', 'assets/worker2.png');
        game.load.spritesheet('conveyor_automated', 'assets/level14/conveyor_automated_sheet.png', 691, 569, 6);
    
        game.load.audio('meh','assets/level8/meh.wav');
        game.load.audio('mhmm','assets/level8/mhmm.wav');
    
        game.load.image('up', 'assets/ui/up_arrow.png');
        game.load.image('down', 'assets/ui/down_arrow.png');
        game.load.image('left', 'assets/ui/left_arrow.png');
        game.load.image('right', 'assets/ui/right_arrow.png');

    },

create: function() { 
        
    this.background = game.add.sprite(0, 0, 'background');
    this.cursor = game.input.keyboard.createCursorKeys();
    
    this.robot = game.add.sprite(game.width/2+50, game.height/2-50, 'newspaper');
    this.robot.anchor.set(0.5,0.5);
    this.robot.scale.set(1.2,1.2);
    
    this.coupon1 = game.add.sprite(game.width/2, game.height/2, 'coupon');
    this.coupon1.anchor.set(0.5,0.5);
    
    this.spam1 = game.add.sprite(game.width/2, game.height/2, 'spam');
    this.spam1.anchor.set(0.5,0.5);
    
    this.spam2 = game.add.sprite(game.width/2, game.height/2+100, 'spam1');
    this.spam2.anchor.set(0.5,0.5);
    
    game.physics.arcade.enable(this.coupon1);
    game.physics.arcade.enable(this.spam1);
    game.physics.arcade.enable(this.spam2);
    
    //timer to switch to next level
    //this.changeTimer = this.game.time.events.add(7000, this.nextState, this);
    
    var flipFlop;
    
    this.meh = game.add.audio('meh');
    this.mhmm = game.add.audio('mhmm');
        
    var speed;
    
    if(!game.device.desktop){
        this.addMobileInputs();  
        this.speed = 20;
    }
    else if (game.device.desktop){
        this.speed = 10;
    }
    
    
    },

update: function() {
    
    //restart level and next level
    //var rKey = game.input.keyboard.addKey(Phaser.Keyboard.R);
    var nKey = game.input.keyboard.addKey(Phaser.Keyboard.N);
    //rKey.onDown.add(this.restartGame, this);
    nKey.onDown.add(this.nextState, this);

    
    if(this.spam2.alive){
        this.display1();
    }
    
    else if(this.spam1.alive){
        this.display2();
    }
    
    else if(this.coupon1.alive){
        this.display3();
    }
    
    if(!game.global.act1.isPlaying){
        game.global.act1.play();
    }
    
},
    

kill1: function(){
    this.spam2.kill();
},
    
kill2: function(){
    this.spam1.kill();
},

kill3: function(){
    this.coupon1.kill();
},
    
display1: function(){
    if(this.cursor.right.isDown || this.moveRight){
        if(!flipFlop){
        //this.speech1.alpha = 1;
        var t1 = this.add.tween(this.spam2).to({x: 2000}, 500,Phaser.Easing.Sinusoidal.InOut).start();
        t1.onComplete.add(this.kill1,this);
        this.meh.play();
        //this.spam2.kill();
        flipFlop = true;
        }
    }
    
    if (this.cursor.right.isUp){
        flipFlop = false;
    }
},
    
display2: function(){
    if(this.cursor.right.isDown || this.moveRight){
        if(!flipFlop){
        var t2 = this.add.tween(this.spam1).to({x: 2000}, 500,Phaser.Easing.Sinusoidal.InOut).start();
        t2.onComplete.add(this.kill2,this);
        this.meh.play();
        flipFlop = true;
        }
    }
    if (this.cursor.right.isUp){
        flipFlop = false;
    }
},

display3: function(){
    if(this.cursor.right.isDown || this.moveRight){
        if(!flipFlop){
        var t3= this.add.tween(this.coupon1).to({x: 2000}, 500,Phaser.Easing.Sinusoidal.InOut).start();
        t3.onComplete.add(this.kill3,this);
        var conveyor_automated1 = game.add.sprite(200, game.height/3+100, 'conveyor_automated');
        //this.conveyor_automated1.anchor.set(0.5,0.5);
        //this.conveyor_automated1.scale.setTo(.8,.8);
        var beat5 = conveyor_automated1.animations.add('beat5');
        conveyor_automated1.animations.play('beat5', 6, true);
                    
        this.meh.play();    
        //this.mhmm.play();
        this.timer51 = this.game.time.events.add(2000, this.mhmm1, this);
        this.timer12381 = this.game.time.events.add(5000, this.nextState, this);
        flipFlop = true;
        }
    }
    if (this.cursor.right.isUp){
        flipFlop = false;
    }
},
    
mhmm1: function(){
//    var label = game.add.text(game.width/5, 150,
//        'Maybe these machines \ncould do the trick', { font: '60px Arial', fill: 'rgba(0,0,0,0.5)'});
    
    this.text1 = game.add.sprite(game.width/2, 200, 'text1');
    this.text1.anchor.set(0.5,0.5);
    
  this.mhmm.play();  
},
    
    

nextState: function(){
    game.state.start('level9');
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
