var level9State = {
    
 
preload: function() { 
    
    game.load.image('background', 'assets/level9/background.png');
    game.load.image('conveyor', 'assets/level9/conveyor.png');
    game.load.image('workers', 'assets/level9/workers.png');
    game.load.image('workers_spotlight', 'assets/level9/workers_spotlight.png');
    game.load.image('workers_shadow', 'assets/level9/workers_shadow.png');
    game.load.image('light', 'assets/level9/light.png');
    game.load.image('text1', 'assets/level9/text1.png');
    
    game.load.audio('act2','assets/sound/act2.wav');
    game.load.image('up', 'assets/ui/up_arrow.png');
    game.load.image('down', 'assets/ui/down_arrow.png');
    game.load.image('left', 'assets/ui/left_arrow.png');
    game.load.image('right', 'assets/ui/right_arrow.png');

    
    },

create: function() { 
    
    //game.stage.backgroundColor = '#71c5cf';
    game.add.image(0, 0, 'background');
    this.workers_shadow = game.add.sprite(game.width/3-50, game.height/2, 'workers_shadow');
    this.workers = game.add.sprite(game.width/3-50, game.height/2, 'workers');
    this.workers_spotlight = game.add.sprite(game.width/3+200, game.height/2+230, 'workers_spotlight');
    this.workers.anchor.setTo(.5,.5);
    this.workers_shadow.anchor.setTo(.5,.5);
    this.workers_spotlight.anchor.setTo(.5,.5);
    
    this.conveyor = game.add.sprite(game.width*2/3, game.height/2+300, 'conveyor');
    this.conveyor.anchor.setTo(.5,.5);
    this.conveyor.alpha = 0;
    
    this.light = game.add.sprite(game.width*2/3+30, game.height/2+350, 'light');
    this.light.anchor.setTo(.5,.5);
    this.light.alpha = 0;


    this.text1 = game.add.sprite(game.width/2, 200, 'text1');
    this.text1.anchor.set(0.5,0.5);
    
    this.cursor = game.input.keyboard.createCursorKeys();
    
    game.global.act1.stop();
    game.global.act2 = game.add.audio('act2');
    game.global.act2.play();
    
    
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

    
    if(this.conveyor.alpha === 0){
    this.display1();
    }
    
//    else if(this.workers.alive){
//    this.display2();
//    }
//    
    
},

display1: function(){
    if(this.cursor.right.isDown || this.moveRight){
        if(!flipFlop){
        this.conveyor.alpha = 1; 
        game.add.tween(this.light).to({alpha: .9}, 700).to({alpha: 0}, 700,Phaser.Easing.Bounce.InOut).loop().start();    
        game.add.tween(this.workers_spotlight).to({alpha: 0}, 2000).easing(Phaser.Easing.Exponential.Out).start();
        game.add.tween(this.workers).to({alpha: 0}, 2000).easing(Phaser.Easing.Exponential.Out).start();
        
        //this.timer913929 = this.game.time.events.add(2000, this.killWorkers, this);    
        this.timer91230 = this.game.time.events.add(5000, this.nextState, this);
        //this.vo2.play();    
            flipFlop = true;
        }
    }
    
    if (this.cursor.right.isUp){
        flipFlop = false;
    }
},
    

killWorkers: function(){
  this.workers.kill();  
},
    
display2: function(){
    if(this.cursor.right.isDown){
        if(!flipFlop){
        this.workers.kill();
        this.workers_spotlight.kill();
        this.timer91230 = this.game.time.events.add(5000, this.nextState, this);
        //this.vo2.play();    
            flipFlop = true;
        }
    }
    
    if (this.cursor.right.isUp){
        flipFlop = false;
    }
},    
    
nextState: function(){
    game.state.start('level10');
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
