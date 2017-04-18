// Create our 'main' state that will contain the game
var level16State = {
    

preload: function() { 
        game.load.image('robot', 'assets/robot_row.png');
        game.load.image('vertigo', 'assets/vertigo.png');
        game.load.image('rising-smoke', 'assets/level16/rising-smoke.png');
        game.load.image('smoke-puff', 'assets/level16/smoke-puff.png');
        game.load.image('white-smoke', 'assets/level16/white-smoke.png');
        game.load.image('curse', 'assets/level16/curse.png');
    game.load.image('text1', 'assets/level16/text1.png');
    game.load.image('line', 'assets/transparent_line.png');
    game.load.image('broken', 'assets/level16/broken.png');
    game.load.image('redlight', 'assets/level16/redlight.png');
    
    
    game.load.image('background', 'assets/level14/background.png');
    game.load.spritesheet('conveyor_automated_left', 'assets/level14/conveyor_automated_left_sheet.png', 691, 569, 6);
    game.load.spritesheet('conveyor_automated', 'assets/level14/conveyor_automated_sheet.png', 691, 569, 6);

        game.load.image('up', 'assets/ui/up_arrow.png');
        game.load.image('down', 'assets/ui/down_arrow.png');
        game.load.image('left', 'assets/ui/left_arrow.png');
        game.load.image('right', 'assets/ui/right_arrow.png');
    
    game.load.audio('growl','assets/level16/growl.wav');
    game.load.audio('churn','assets/level12/churn.wav');

    },

create: function() { 
    
    //game.stage.backgroundColor = '#71c5cf';
    game.add.image(0, 0, 'background');
    
    //tell phaser which keys we want to use    
    this.cursor = game.input.keyboard.createCursorKeys();
    this.line = game.add.sprite(game.width/2, 150, 'line');
    this.text1 = game.add.sprite(game.width/2, 150, 'text1');
    this.text1.anchor.setTo(0.5,0.5);
    this.growl = game.add.audio('growl');
    this.churn = game.add.audio('churn');
    
    this.line.alpha= 1;
    
    this.churn.loop = true;
    this.churn.play();

//    var frequency;
//    frequency = this.line.alpha;
//    game.add.tween(this.line).to({alpha: 0}, 3000,Phaser.Easing.Sinusoidal.Out).start();
    
    var conveyor_automated1 = game.add.sprite(-100, game.height/5-200, 'conveyor_automated_left');
    var beat5 = conveyor_automated1.animations.add('beat5');
    conveyor_automated1.animations.play('beat5', 6, true);

    var conveyor_automated2 = game.add.sprite(game.width/2, game.height*2/5-200, 'conveyor_automated');
    var beat6 = conveyor_automated2.animations.add('beat6');
    conveyor_automated2.animations.play('beat6', 6, true);

    this.conveyor_automated3 = game.add.sprite(-100, game.height*3/5-200, 'conveyor_automated_left');
    var beat7 = this.conveyor_automated3.animations.add('beat7');
    this.conveyor_automated3.animations.play('beat7', 6, true);

    var conveyor_automated4 = game.add.sprite(game.width/2, game.height*4/5-200, 'conveyor_automated');
    var beat8 = conveyor_automated4.animations.add('beat8');
    conveyor_automated4.animations.play('beat8', 6, true);

    this.game.world.bringToTop(this.text1);
    //game.add.tween(this.vertigo).to({alpha: 0}, 3000).to({alpha: 0.9}, 500,Phaser.Easing.Elastic.Out).loop().start();
    
    this.timer9192 = this.game.time.events.add(500, this.stopMachine, this);
    
    //smoke particles
    var emitter;
    emitter = game.add.emitter(game.world.centerX, 500, 400);
    emitter.makeParticles('rising-smoke');

    emitter.setXSpeed(0, 0);
    emitter.setYSpeed(0, 0);

    emitter.setRotation(0, 0);
    emitter.setAlpha(0.1, 1, 3000,Phaser.Easing.Linear.None,true);
    //emitter.setAlpha(0);
    emitter.setScale(0.4, 5, 0.4, 5, 6000, Phaser.Easing.Quintic.Out);
    emitter.gravity = -100;

    //adjust frequency here
    //emitter.start(false, 4000, 500);

    emitter.emitX = game.width/2;
    emitter.emitY = game.height/2;

    this.cursor.input.enabled = false;
    
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
    //this.selectPill();

    var rKey = game.input.keyboard.addKey(Phaser.Keyboard.R);
    var nKey = game.input.keyboard.addKey(Phaser.Keyboard.N);
    rKey.onDown.add(this.restartGame, this);
    nKey.onDown.add(this.nextState, this);
    
    //frequency = this.line.alpha;
    //conveyor_automated3.animations.play('beat7', frequency*6, true);
    
    this.display1();
    //filter.update();
    
    if(!game.global.act3.isPlaying){
        game.global.act3.play();
    }

},

stopMachine: function(){
  
    this.conveyor_automated3.animations.stop(null,true);
    this.redlight = game.add.sprite(95, game.height/2+140, 'redlight');
    this.redlight.anchor.set(0.5,0.5);
    game.add.tween(this.redlight.scale).to({x: 3,y: 3}, 1000,Phaser.Easing.Sinusoidal.InOut).to({x: 1,y: 1}, 1000,Phaser.Easing.Sinusoidal.InOut).loop().start();
    
    //this.cursor.input.enabled = true;
    //this.emitter.start(false, 4000, 500);
    //this.conveyor_automated3.kill();
    //this.broken = game.add.sprite(-100, game.height*3/5-200, 'broken');
    
},
    
display1: function(){
    if(this.cursor.right.isDown || this.moveRight){
        if(!flipFlop){
        this.curse = game.add.sprite(game.width/2, game.height-400, 'curse');
        this.curse.anchor.set(0.5,0.5);
        this.changeTimer = this.game.time.events.add(5000, this.nextState, this);
        this.growl.play();
        //this.shake();
        //this.camera.shake(0.05, 500);
        //this.game.camera.shake(0.02, 300);
            flipFlop = true;
        }
    }
    
    if (this.cursor.right.isUp){
        flipFlop = false;
    }
},

makeSmoke: function(){

    //emitter.start(false, 4000, 500);
    emitter.setAlpha(0.1, 1, 3000,Phaser.Easing.Linear.None,true);
    
},
    
        
restartGame: function() {
    // Start the 'menu' state, which restarts the game
    game.state.start('menu');
},

nextState: function(){
    this.churn.stop();
    game.state.start('level17');
    
},

addMobileInputs: function() {
        
    // Movement variables
    this.moveLeft = false; 
    this.moveRight = false;
    this.moveUp = false;
    this.moveDown = false;
        
    // Add the move left button
    var leftButton = game.add.sprite(game.width/3,game.height-275,'left'); 
    leftButton.inputEnabled = true;
    leftButton.alpha = 0.5; 
    //leftButton.events.onInputOver.add(this.setLeftTrue, this); 
    leftButton.events.onInputOut.add(this.setLeftFalse, this); 
    leftButton.events.onInputDown.add(this.setLeftTrue, this); 
    leftButton.events.onInputUp.add(this.setLeftFalse, this);
        
    // Add the move right button
    var rightButton = game.add.sprite(game.width*2/3,game.height-275,'right');
    rightButton.inputEnabled = true;
    rightButton.alpha = 0.5; 
    //rightButton.events.onInputOver.add(this.setRightTrue, this); 
    rightButton.events.onInputOut.add(this.setRightFalse, this); 
    rightButton.events.onInputDown.add(this.setRightTrue, this); 
    rightButton.events.onInputUp.add(this.setRightFalse, this);
    
    // Add the move up button
    var upButton = game.add.sprite(game.width/2,game.height-375,'up');
    upButton.inputEnabled = true;
    upButton.alpha = 0.5; 
    //upButton.events.onInputOver.add(this.setUpTrue, this); 
    upButton.events.onInputOut.add(this.setUpFalse, this); 
    upButton.events.onInputDown.add(this.setUpTrue, this); 
    upButton.events.onInputUp.add(this.setUpFalse, this);
    
    // Add the move down button
    var downButton = game.add.sprite(game.width/2,game.height-250,'down');
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
