var chooserState = {
    

 
preload: function() { 
        
    game.load.image('bubble', 'assets/bubble1.png');
    
    },

create: function() { 
    
    game.stage.backgroundColor = '#000000';
    //game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    //this.scale.setScreenSize(true);
    this.bubble1 = game.add.sprite(game.width/2, game.height/2-500, 'bubble');
    this.bubble2 = game.add.sprite(game.width/2, game.height/2+500, 'bubble');
    this.bubble3 = game.add.sprite(game.width/2-300, game.height/2, 'bubble');
    this.bubble4 = game.add.sprite(game.width/2+300, game.height/2, 'bubble');
    
//    var label = game.add.text(game.width/8, game.height/5,
//            'This is an autobiographical game about my experiences with automation. It contains a message that I think is important for you to hear.', { font: '60px Arial', fill: 'rgba(0,0,0,1)',boundsAlignH: "center", boundsAlignV: "middle", wordWrap: true, wordWrapWidth: game.width-300});

    //game.add.tween(label).to({y: this.label.y+5}, 400),Phaser.Easing.Sinusoidal.InOut).loop().start();
    //game.add.tween(label).to( { y: this.label.y+5 }, 4000, Phaser.Easing.Bounce.Out, true);
    //game.add.tween(label).to( { y: game.height/2 }, 4000, Phaser.Easing.Bounce.Out, true);
    //game.add.tween(label).to( { y: -200 }, 10000,Phaser.Easing.out, true);
        
    this.cursor = game.input.keyboard.createCursorKeys();
    
    if(!game.device.desktop){
        this.addMobileInputs();
    }
    
    this.lastDirection;
    
    var rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    var leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    var downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    var upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
    
    rightKey.onDown.add(this.compareRight,this);
    leftKey.onDown.add(this.compareLeft,this);
    upKey.onDown.add(this.compareUp,this);
    downKey.onDown.add(this.compareDown,this);
    
    
    },

update: function() {
    
    //restart level and next level
    var rKey = game.input.keyboard.addKey(Phaser.Keyboard.R);
    var nKey = game.input.keyboard.addKey(Phaser.Keyboard.N);
    rKey.onDown.add(this.restartGame, this);
    nKey.onDown.add(this.nextState, this);
        
    //this.label.body.y += 4;
    //label.y = label.y-1;
    
},

compareRight: function(){
    
    if(this.lastDirection === 'right'){
        this.act2();
    }
 
    this.lastDirection = 'right';
    
},

compareLeft: function(){
    
    if(this.lastDirection === 'left'){
        this.act4();
    }
 
    this.lastDirection = 'left';
    
},
    
compareUp: function(){
    
    if(this.lastDirection === 'up'){
        this.act1();
    }
 
    this.lastDirection = 'up';
    
},
    
compareDown: function(){
    
    if(this.lastDirection === 'down'){
        this.act3();
    }
 
    this.lastDirection = 'down';
    
},
    
act1: function(){
  game.state.start('level2');
},

act2: function(){
  game.state.start('level2');
},    
    
act3: function(){
  game.state.start('level2');
},
    
act4: function(){
  game.state.start('level2');
},
    
//
//movePlayer1: function(){
//    if(this.cursor.left.isDown || this.moveLeft){
//        this.piece1.body.x -= this.speed;
//    }
//    else if(this.cursor.right.isDown || this.moveRight){
//        this.piece1.body.x += this.speed;
//    }
//    if(this.cursor.up.isDown || this.moveUp){
//        this.piece1.body.y -= this.speed;
//    }
//    else if(this.cursor.down.isDown || this.moveDown){
//        this.piece1.body.y += this.speed;
//    }   
//},
    
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
    game.state.start('level2');

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
    
    
restartGame: function() {
    // Start the 'menu' state, which restarts the game
    game.state.start('menu');
},

    
nextState: function(){
    game.state.start('level2');
    
},
    
};
