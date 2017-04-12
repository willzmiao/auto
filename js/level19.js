var level19State = {
    
 
preload: function() { 
        game.load.image('mole', 'assets/level19/mole.png');
        game.load.image('hand', 'assets/level19/hand.png');
        game.load.image('speech', 'assets/level19/speech.png');
        game.load.image('background', 'assets/level19/background.png');
        game.load.image('text1', 'assets/level19/text1.png');
        
        game.load.spritesheet('worker_anim', 'assets/level19/worker_anim.png', 95.17, 249.5, 9);
    
    game.load.audio('act4','assets/sound/act4.wav');
    
        game.load.image('up', 'assets/ui/up_arrow.png');
        game.load.image('down', 'assets/ui/down_arrow.png');
        game.load.image('left', 'assets/ui/left_arrow.png');
        game.load.image('right', 'assets/ui/right_arrow.png');

    
    },

create: function() { 
    
    //game.stage.backgroundColor = '#71c5cf';
    game.add.image(0, 0, 'background');
    this.cursor = game.input.keyboard.createCursorKeys();
    
//    var label = game.add.text(game.width/5, 350,
//            'Jeb\'s really been \non my case recently', { font: '60px Arial', fill: '#ffffff'});
//
    this.timer = game.time.events.loop(3000, this.moveHand, this); 
    
    this.mole = game.add.sprite(game.width/2,game.height*4/6, 'mole');
    game.physics.arcade.enable(this.mole);
    var playerX;
    
    this.mole.body.collideWorldBounds = true;

    this.timer938488 = this.game.time.events.add(7000, this.nextState, this);
    
    this.text1 = game.add.sprite(game.width/2,200, 'text1');
    this.text1.anchor.setTo(0.5,0.5);
    
    game.global.act3.stop();
    game.global.act4 = game.add.audio('act4');
    game.global.act4.play();
    
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
    var rKey = game.input.keyboard.addKey(Phaser.Keyboard.R);
    var nKey = game.input.keyboard.addKey(Phaser.Keyboard.N);
    rKey.onDown.add(this.restartGame, this);
    nKey.onDown.add(this.nextState, this);

    this.movePlayer();
    
    game.physics.arcade.overlap(this.mole, this.hand, this.killPipe, null, this);
},
    
moveHand: function(){
    
    //var handx = game.rnd.between(-200, game.width/2);
    var handx = this.mole.x - 200;
    
    this.hand = game.add.sprite(handx, -500, 'hand');
    game.physics.arcade.enable(this.hand);
    
    //game.add.tween(this.hand).to({y: game.height/2}, 1500,Phaser.Easing.Exponential.Out).start();    
    game.add.tween(this.hand).to({y: this.mole.y-600},300).to({y:-10000},8000,Phaser.Easing.Exponential.Out).start();  
},
    
movePlayer: function(){
    if(this.cursor.right.isDown || this.moveRight){
        this.mole.body.x += this.speed;
    }
    else if(this.cursor.left.isDown || this.moveLeft){
        this.mole.body.x -= this.speed;
    }   
},
    
killPipe: function(mole, hand){
    
    //this.worker.kill();
    this.speech = game.add.sprite(mole.x, mole.y-200, 'speech');
    game.add.tween(this.speech).to({alpha:0},1000,Phaser.Easing.Exponential.Out).start();  
    //this.input.disabled = true;

//    var heart = game.add.sprite(game.width/2-150, game.height/2-200, 'worker_anim');
//    var beat = heart.animations.add('beat');
//    heart.animations.play('beat', 4, false);

},
    


nextState: function(){
    game.state.start('level20');
},
    
restartGame: function() {
    // Start the 'menu' state, which restarts the game
    game.state.start('menu');
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
