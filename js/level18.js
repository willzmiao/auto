// Create our 'main' state that will contain the game
var level18State = {

 
preload: function() { 
        game.load.image('stopsign', 'assets/level17/stop_sign.png');
        game.load.image('comp1', 'assets/level18/comp1.png');
        game.load.image('comp2', 'assets/level18/comp2.png');
        game.load.image('comp3', 'assets/level18/comp3.png');
        game.load.image('cursor1', 'assets/level18/cursor.png');
        game.load.image('line', 'assets/transparent_line.png');
    
        game.load.image('up', 'assets/ui/up_arrow.png');
        game.load.image('down', 'assets/ui/down_arrow.png');
        game.load.image('left', 'assets/ui/left_arrow.png');
        game.load.image('right', 'assets/ui/right_arrow.png');

      game.load.audio('email','assets/level18/email.wav');  
    game.load.audio('click','assets/level18/click.wav'); 
    game.load.audio('sigh','assets/level18/hmmm.wav'); 
    },

create: function() { 
    
    //game.stage.backgroundColor = '#71c5cf';
    
    //tell phaser which keys we want to use    
    this.cursor = game.input.keyboard.createCursorKeys();
    
    this.comp1 = game.add.sprite(game.width/2, game.height/2, 'comp1');
    this.comp1.anchor.setTo(0.5, 0.5);
    
    this.cursor1 = game.add.sprite(game.width/2+200, game.height/2+200, 'cursor1');
    //this.line = game.add.sprite(0, game.height/2-250, 'line');
    game.physics.arcade.enable(this.cursor1);
    //game.physics.arcade.enable(this.line);
    this.cursor1.body.collideWorldBounds = true;
    
    this.changeTimer = this.game.time.events.add(3000, this.display1, this);        
    this.timer10239 = this.game.time.events.add(4000, this.display15, this);        

    this.click = game.add.audio('click');
    this.email = game.add.audio('email');
    this.sigh = game.add.audio('sigh');
    
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
    
    this.moveCursor();
    game.physics.arcade.overlap(this.line, this.cursor1, this.display2, null, this);
    
    var rKey = game.input.keyboard.addKey(Phaser.Keyboard.R);
    var nKey = game.input.keyboard.addKey(Phaser.Keyboard.N);
    rKey.onDown.add(this.restartGame, this);
    nKey.onDown.add(this.nextState, this);
    
        if(!game.global.act3.isPlaying){
        game.global.act3.play();
    }


},

display1: function(){

//        this.comp2 = game.add.sprite(game.width/2, game.height/2, 'comp2');
//        this.comp2.anchor.set(0.5,0.5);
//        game.world.sendToBack(this.comp2);
//        this.comp1.kill();
//        this.line = game.add.sprite(0, game.height/2-250, 'line');
//        game.physics.arcade.enable(this.line);
//        this.line.scale.setTo(10,1);
    
        game.add.tween(this.comp1.scale).to({x: 2, y: 2}, 500,Phaser.Easing.Sinusoidal.Out).start();
        game.add.tween(this.comp1).to({y: this.comp1.y+400}, 500,Phaser.Easing.Sinusoidal.Out).start();

},
    
display15: function(){
        
        this.comp2 = game.add.sprite(game.width/2, game.height/2+400, 'comp2');
        this.comp2.anchor.setTo(0.5,0.5);
        this.comp2.scale.setTo(2,2);
        game.world.sendToBack(this.comp2);
        this.comp1.kill();
        this.email.play();
        this.line = game.add.sprite(0, game.height/2-250, 'line');
        game.physics.arcade.enable(this.line);
        this.line.scale.setTo(10,1);

},
    
display2: function(){

        this.comp3 = game.add.sprite(game.width/2, game.height/2+400, 'comp3');
        this.comp3.anchor.set(0.5,0.5);
        this.comp3.scale.setTo(2,2);
        game.world.sendToBack(this.comp3);
        this.click.play();
        //this.timer0019 = this.game.time.events.add(2000, this.sigh, this);        
        this.line.kill();
        this.comp2.kill();
        this.changeTimer = this.game.time.events.add(7000, this.nextState, this);
},

moveCursor: function(){
    
    if(this.cursor.left.isDown || this.moveLeft){
        this.cursor1.body.x -= this.speed;
    }
    else if(this.cursor.right.isDown || this.moveRight){
        this.cursor1.body.x += this.speed;
    }
    if(this.cursor.up.isDown || this.moveUp){
        this.cursor1.body.y -= this.speed;
    }
    else if(this.cursor.down.isDown || this.moveDown){
        this.cursor1.body.y += this.speed;
    }   
    
},
    
sigh: function(){
  
    this.sigh.play();  
    
},
    
restartGame: function() {
    // Start the 'menu' state, which restarts the game
    game.state.start('menu');
},

nextState: function(){
    game.state.start('level19');
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
