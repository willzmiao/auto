// Create our 'main' state that will contain the game
var level22State = {

 
preload: function() { 

    game.load.image('background', 'assets/level14/background.png');
    game.load.image('text1', 'assets/level22/text1.png');
    game.load.image('up', 'assets/ui/up_arrow.png');
    game.load.image('down', 'assets/ui/down_arrow.png');
    game.load.image('left', 'assets/ui/left_arrow.png');
    game.load.image('right', 'assets/ui/right_arrow.png');

    game.load.spritesheet('phone_anim', 'assets/level22/closed_sheet.png', 286, 556, 5);
    game.load.image('open', 'assets/level22/open.png');
    
    },

create: function() { 
    
    //game.stage.backgroundColor = '#71c5cf';
    
    //tell phaser which keys we want to use    
    this.cursor = game.input.keyboard.createCursorKeys();
            
    this.background = game.add.sprite(0, 0, 'background');
    
    this.closed = game.add.sprite(game.width/2, game.height/2, 'phone_anim');
    this.closed.anchor.set(.5,.5);
    
    var beat1 = this.closed.animations.add('beat1');
    //this.closed.animations.play('beat1', 3, true);

    this.timer1002 = this.game.time.events.add(2000, this.vibrate, this);
    
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
    
    var rKey = game.input.keyboard.addKey(Phaser.Keyboard.R);
    var nKey = game.input.keyboard.addKey(Phaser.Keyboard.N);
    rKey.onDown.add(this.restartGame, this);
    nKey.onDown.add(this.nextState, this);

    var rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    rightKey.onDown.add(this.display2, this);
    
    if(this.moveRight){
        this.display2();
    }

},

vibrate: function(){
  this.closed.animations.play('beat1', 3, true);  
},
    
display2: function(){
    
    this.open = game.add.sprite(game.width/2, game.height/2-250, 'open');
    this.open.anchor.set(.5,.5);
    this.closed.kill();
    //this.text1 = game.add.sprite(300, 300, 'text1');
    
    game.add.tween(this.open.scale).to({x: 2.5, y: 2.5}, 1000,Phaser.Easing.Sinusoidal.Out, true, 1000).start();
    game.add.tween(this.open).to({y: this.open.y+700}, 1000,Phaser.Easing.Sinusoidal.Out, true, 1000).start();
    
    this.timer230948 = this.game.time.events.add(12000, this.nextState, this);
    
},

restartGame: function() {
    // Start the 'menu' state, which restarts the game
    game.state.start('menu');
},

nextState: function(){
    game.state.start('level23');
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
