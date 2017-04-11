// Create our 'main' state that will contain the game
var level12State = {
 
preload: function() { 
        
    //game.load.spritesheet('robot_anim', 'assets/level12/robot_anim.png', 195.85, 245.59, 2);
    //game.load.spritesheet('robot_anim2', 'assets/level12/robot_anim2.png', 195.85, 245.59,4);
    game.load.image('party', 'assets/level12/robotparty1.png');
    game.load.spritesheet('conveyor', 'assets/level12/conveyor_robot.png', 1080, 972, 6);
    game.load.image('background', 'assets/act2bg.png');
    
    game.load.image('up', 'assets/ui/up_arrow.png');
    game.load.image('down', 'assets/ui/down_arrow.png');
    game.load.image('left', 'assets/ui/left_arrow.png');
    game.load.image('right', 'assets/ui/right_arrow.png');

    },

create: function() { 
    
    game.stage.backgroundColor = '#000000';
    game.add.image(0, 0, 'background');
    //tell phaser which keys we want to use    
    this.cursor = game.input.keyboard.createCursorKeys();
    
    this.conveyor_analog1 = game.add.sprite(0, game.height/5, 'conveyor');
    var beat1 = this.conveyor_analog1.animations.add('beat1');
    this.conveyor_analog1.animations.play('beat1', 8, true);

    this.party = game.add.sprite(-50, game.height, 'party');
    
    this.timer1235 = game.time.events.add(1200, this.delayMove, this); 
    
    // sun moon animation along path
//    var moveSprite = this.game.add.sprite(-200, game.height/2-400, 'sun');
//    var tween = game.add.tween(moveSprite).to({
//        x: [-200, game.width/3, game.width*2/3, game.width+150],
//        y: [game.height/2-400, game.height/2-700, game.height/2-700, game.height/2-400],}, 4000,Phaser.Easing.Quadratic.InOut, true).interpolation(function(v, k){
//        return Phaser.Math.bezierInterpolation(v, k);}).loop().start();
//    
    this.changeTimer = this.game.time.events.add(11000, this.nextState, this);
    
    var speed;
    
    if(game.device.desktop){
        this.addMobileInputs();  
        this.speed = 20;
    }
    else if (!game.device.desktop){
        this.speed = 10;
    }
    

    },

update: function() {
    
    //    this.selectPill();

    var rKey = game.input.keyboard.addKey(Phaser.Keyboard.R);
    var nKey = game.input.keyboard.addKey(Phaser.Keyboard.N);
    rKey.onDown.add(this.restartGame, this);
    nKey.onDown.add(this.nextState, this);
    
    

},


delayMove: function(){
  
    //this.changeTimer = this.game.time.events.add(5000, this.nextState, this);
    this.timer98501 = game.time.events.loop(800, this.moveUps, this); 
    
},
    
moveUps: function(){
        
    game.add.tween(this.party).to({y:this.party.y-200},500,Phaser.Easing.Linear.InOut).start();  
    
},

restartGame: function() {
    // Start the 'menu' state, which restarts the game
    game.state.start('menu');
},

nextState: function(){
    game.state.start('level13');
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
