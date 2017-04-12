var level1State = {
    

 
preload: function() { 
        
    game.load.audio('intro','assets/sound/intro.wav');
    
    },

create: function() { 
    
    //game.stage.backgroundColor = '#71c5cf';
    //game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    //this.scale.setScreenSize(true);

    
    var label = game.add.text(game.width/8, game.height/5,
            'This is an autobiographical game about my experiences with automation. It contains a message that I think is important for you to hear.', { font: '60px Arial', fill: 'rgba(0,0,0,1)',boundsAlignH: "center", boundsAlignV: "middle", wordWrap: true, wordWrapWidth: game.width-300});

    //game.add.tween(label).to({y: this.label.y+5}, 400),Phaser.Easing.Sinusoidal.InOut).loop().start();
    //game.add.tween(label).to( { y: this.label.y+5 }, 4000, Phaser.Easing.Bounce.Out, true);
    game.add.tween(label).to( { y: game.height/2 }, 4000, Phaser.Easing.Bounce.Out, true);
    //game.add.tween(label).to( { y: -200 }, 10000,Phaser.Easing.out, true);
    
    this.intro = game.add.audio('intro');
    this.intro.loop = true;
    this.intro.play();
    
    
    if(!game.device.desktop){
        this.addMobileInputs();
    }
    
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
