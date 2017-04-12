var menuState = {
 

preload: function() { 
        game.load.image('rect', 'assets/bird.png');
        game.load.image('up', 'assets/ui/up_arrow.png');
        game.load.image('down', 'assets/ui/down_arrow.png');
        game.load.image('left', 'assets/ui/left_arrow.png');
        game.load.image('right', 'assets/ui/right_arrow.png');
    
    game.load.image('title', 'assets/menu/title.png');
    game.load.image('intro', 'assets/menu/intro.png');
    game.load.image('press', 'assets/menu/press.png');
    
    game.load.audio('intro','assets/sound/intro.wav');
    //game.load.bitmapFont('karma', 'assets/Karmakooma.gif', 'assets/Karmakooma.ttf');

    },

    
create: function() {

    // Add a background image 
    //game.add.image(0, 0, 'background');
    
    this.intro1 = game.add.audio('intro');
    this.intro1.loop = true;
    this.intro1.play();

    
    // Display the name of the game
    game.stage.backgroundColor = '#000000';
    
    game.input.keyboard.addKeyCapture([Phaser.Keyboard.UP, Phaser.Keyboard.DOWN,Phaser.Keyboard.RIGHT,Phaser.Keyboard.LEFT]);
    
    this.title = game.add.sprite(game.width/2,game.height/2-200,'title');
    this.title.anchor.setTo(.5,.5);
    
    this.intro = game.add.sprite(game.width*3/2,game.height/2-200,'intro');
    this.intro.anchor.setTo(.5,.5);

//    var nameLabel = game.add.text(game.width/2, 80, 'Goodman Game', { font: 'karma', fill: '#ffffff' });
//    nameLabel.anchor.setTo(0.5, 0.5);
//    nameLabel.fontSize = 300;
    
    var rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT); 
    rightKey.onDown.add(this.start, this);

    
    if (!game.device.desktop) {
        this.press = game.add.sprite(game.width/2,game.height-200,'press');
        this.press.anchor.setTo(.5,.5);
        game.add.tween(this.press).to({y: this.press.y+15}, 1000).to({y: this.press.y}, 1000,Phaser.Easing.Sinusoidal.InOut).loop().start();
        
        //enable touch to start
        //game.input.onDown.add(this.start, this);
        this.addMobileInputs();
    }
    else if(game.device.desktop){
//        var startLabel = game.add.text(game.width/2, game.height-80, 'press the right arrow key to start',
//        { font: '75px Arial', fill: '#ffffff' });
//        startLabel.anchor.setTo(0.5, 0.5)
        //this.addMobileInputs();
        
        this.press = game.add.sprite(game.width/2,game.height-200,'press');
        this.press.anchor.setTo(.5,.5);
        game.add.tween(this.press).to({y: this.press.y+15}, 1000).to({y: this.press.y}, 1000,Phaser.Easing.Sinusoidal.InOut).loop().start();

        //this.addMobileInputs();
        
    }
            
    
},

update: function() {
    
    var rKey = game.input.keyboard.addKey(Phaser.Keyboard.R);
    var nKey = game.input.keyboard.addKey(Phaser.Keyboard.N);
    rKey.onDown.add(this.restartGame, this);
    nKey.onDown.add(this.nextState, this);

    
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
    
setLeftFalse: function() { 
    this.moveDown = false;
},
    
    
start: function() {
// Start the actual game
    game.add.tween(this.title).to({x: -1000}, 2000, "Exponential").easing(Phaser.Easing.Exponential.Out).start();
    game.add.tween(this.press).to({x: -1000}, 2000, "Exponential").easing(Phaser.Easing.Exponential.Out).start();
    game.add.tween(this.intro).to({x: game.width/2}, 2000, "Exponential").easing(Phaser.Easing.Exponential.Out).start();
    this.timer591 = this.game.time.events.add(10000, this.nextState1, this);
    //game.state.start('level1');
}, 

nextState1: function(){
    this.intro1.stop();
    game.state.start('level2');
},
    
restartGame: function() {
    // Start the 'menu' state, which restarts the game
    game.state.start('menu');
},

    
nextState: function(){
    this.intro1.stop();
    game.state.start('level2');
    
},

    
    
};