// Create our 'main' state that will contain the game
var level23State = {

 
preload: function() {     
        game.load.image('newspaper', 'assets/newspaper.png');
        game.load.image('coupon', 'assets/level8/coupon.png');
        game.load.image('spam', 'assets/level8/spam.png');
        game.load.image('spam2', 'assets/level8/spam2.png');
        game.load.image('envelope_closed', 'assets/level23/envelope.png');
        game.load.image('envelope_opened_front', 'assets/level23/envelope_opened_front.png');
        game.load.image('envelope_opened_back', 'assets/level23/envelope_opened_back.png');
        game.load.image('pinkslip', 'assets/level23/pinkslip.png');
        game.load.image('background', 'assets/act4bg.png');
    
        game.load.image('up', 'assets/ui/up_arrow.png');
        game.load.image('down', 'assets/ui/down_arrow.png');
        game.load.image('left', 'assets/ui/left_arrow.png');
        game.load.image('right', 'assets/ui/right_arrow.png');

    },

create: function() { 
    
    //game.stage.backgroundColor = '#71c5cf';
    this.background = game.add.sprite(0, 0, 'background');
    this.cursor = game.input.keyboard.createCursorKeys();
    
    
//    this.envelope_opened_back = game.add.sprite(game.width/2, game.height/2, 'envelope_opened_back');
//    this.envelope_opened_back.anchor.set(0.5,0.5);
//    
//    this.pinkslip = game.add.sprite(game.width/2, game.height/2, 'pinkslip');
//    this.pinkslip.anchor.set(0.5,0.5);
//
//    this.envelope_opened_front = game.add.sprite(game.width/2, game.height/2, 'envelope_opened_front');
//    this.envelope_opened_front.anchor.set(0.5,0.5);
    
    this.envelope_closed = game.add.sprite(game.width/2, game.height/2, 'envelope_closed');
    this.envelope_closed.anchor.set(0.5,0.5);
    
    this.coupon1 = game.add.sprite(game.width/2, game.height/2, 'coupon');
    this.coupon1.anchor.set(0.5,0.5);
    
    this.spam1 = game.add.sprite(game.width/2, game.height/2, 'spam2');
    this.spam1.anchor.set(0.5,0.5);
    
    this.spam2 = game.add.sprite(game.width/2, game.height/2+100, 'spam');
    this.spam2.anchor.set(0.5,0.5);
    
    game.physics.arcade.enable(this.coupon1);
    game.physics.arcade.enable(this.spam1);
    game.physics.arcade.enable(this.spam2);
    game.physics.arcade.enable(this.envelope_closed);
    
    //timer to switch to next level
    //this.changeTimer = this.game.time.events.add(7000, this.nextState, this);
    
    var flipFlop;
    
    this.coupon1.checkWorldBounds = true;
    this.coupon1.outOfBoundsKill = true;
    this.spam1.checkWorldBounds = true;
    this.spam1.outOfBoundsKill = true;
    this.spam2.checkWorldBounds = true;
    this.spam2.outOfBoundsKill = true;

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
    else if(this.coupon1.alive){
        this.display3();
    }
    else if(this.envelope_closed.alive){
        this.display4();
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
            
//        var label = game.add.text(game.width/5, 150,
//        'Hmmm...Maybe these \nmachines could do the trick', { font: '60px Arial', fill: 'rgba(0,0,0,0.5)'});

        flipFlop = true;
        }
    }
    if (this.cursor.right.isUp || this.moveRight){
        flipFlop = false;
    }
},
  
display4: function(){
    if(this.cursor.right.isDown || this.moveRight){
        if(!flipFlop){
            this.envelope_closed.kill();

    this.envelope_opened_back = game.add.sprite(game.width/2, game.height/2, 'envelope_opened_back');
    this.envelope_opened_back.anchor.set(0.5,0.5);
    
    this.pinkslip = game.add.sprite(game.width/2, game.height/2, 'pinkslip');
    this.pinkslip.anchor.set(0.5,0.5);

    this.envelope_opened_front = game.add.sprite(game.width/2, game.height/2, 'envelope_opened_front');
    this.envelope_opened_front.anchor.set(0.5,0.5);

    var t4= this.add.tween(this.envelope_opened_front).to({y: 3000}, 500,Phaser.Easing.Sinusoidal.InOut).start();    
    var t5= this.add.tween(this.envelope_opened_back).to({y: 3000}, 500,Phaser.Easing.Sinusoidal.InOut).start();    
    
    t5.onComplete.add(this.enlarge,this);
    this.timer777 = this.game.time.events.add(7000, this.nextState, this);
    //game.add.tween(this.bird.scale).to({x: .75, y: .75}, 500,Phaser.Easing.Sinusoidal.Out).start();
            
        flipFlop = true;
        }
    }
    if (this.cursor.right.isUp){
        flipFlop = false;
    }
},    

enlarge: function(){
    game.add.tween(this.pinkslip.scale).to({x: 3, y: 3}, 1000,Phaser.Easing.Sinusoidal.Out).start();
},
//display4: function(){
//    if(this.cursor.right.isDown){
//        if(!flipFlop){
//        this.speech4.alpha = 1;   
//            flipFlop = true;
//        }
//    }
//    if (this.cursor.right.isUp){
//        flipFlop = false;
//    }
//},
//    
//display5: function(){
//    if(this.cursor.right.isDown){
//        if(!flipFlop){
//        this.speech5.alpha = 1;   
//            flipFlop = true;
//        }
//    }
//    if (this.cursor.right.isUp){
//        flipFlop = false;
//    }
//},
//

    

nextState: function(){
    game.state.start('level24');
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
