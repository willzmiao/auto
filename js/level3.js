// Create our 'main' state that will contain the game
var level3State = {
    
preload: function() { 
        game.load.image('workerholes', 'assets/level3/workerholes.png');
        game.load.image('box', 'assets/level3/box.png');
//        game.load.image('worker1', 'assets/level3/worker1a.png');
//        game.load.image('worker2', 'assets/level3/worker2a.png');
        game.load.image('rectangle', 'assets/rectangle.png');
        game.load.image('sparkle', 'assets/level3/sparkle.png');
        game.load.image('sparkle2', 'assets/level3/sparkle2.png');
        game.load.image('background', 'assets/level3/background.png');
        
        game.load.image('worker1', 'assets/level6/peg1.png');
        game.load.image('worker2', 'assets/level6/peg2.png');
        game.load.image('worker3', 'assets/level6/peg3.png');
        game.load.image('worker4', 'assets/level6/peg4.png');
        game.load.image('worker5', 'assets/level6/peg5.png');
        game.load.image('worker6', 'assets/level6/peg6.png');
        game.load.image('worker7', 'assets/level6/peg7.png');
        game.load.image('worker8', 'assets/level6/peg8.png');
        game.load.image('worker9', 'assets/level6/peg9.png');
        game.load.image('worker10', 'assets/level6/peg10.png');
        game.load.image('worker11', 'assets/level6/peg11.png');
        game.load.image('worker12', 'assets/level6/peg12.png');
        game.load.image('worker13', 'assets/level6/peg13.png');
        game.load.image('worker14', 'assets/level6/peg14.png');
        game.load.image('worker15', 'assets/level6/peg15.png');
        game.load.image('worker16', 'assets/level6/peg16.png');
    
        game.load.image('up', 'assets/ui/up_arrow.png');
        game.load.image('down', 'assets/ui/down_arrow.png');
        game.load.image('left', 'assets/ui/left_arrow.png');
        game.load.image('right', 'assets/ui/right_arrow.png');

    
        game.load.image('text1', 'assets/level3/text1.png');
        game.load.image('text2', 'assets/level3/text2.png');
    
    //  There are 6 frames in the PNG
        game.load.spritesheet('heart', 'assets/heart.png', 68, 62, 6);
        game.load.spritesheet('sparkles', 'assets/Spec3.png', 1080, 1920, 2);
    
        game.load.audio('vo1','assets/level2/vo1.wav');
        game.load.audio('vo2','assets/level2/vo2.wav');

 
    },

create: function() { 

    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.renderer.renderSession.roundPixels = true;
        
    //tell phaser which keys we want to use    
    this.cursor = game.input.keyboard.createCursorKeys();
    
    game.add.image(0, 0, 'background');
        
    //create the holes for the worker pegs
    this.box = game.add.sprite(game.width/2,game.height/2-200,'box');
    this.box.anchor.setTo(0.5, 0.5);
    this.box.scale.setTo(1.5, 1.5);
    
    this.text1 = game.add.sprite(game.width/2,200,'text1');
    this.text1.anchor.setTo(.5,.5);
    //game.world.bringToTop(this.text1);

    //box.anchor.set(0.5,0.5);
    //this.workerholes = game.add.sprite(100, 300, 'workerholes');
    //workerholes.anchor.set(0.5,0.5);    
    this.rect1 = game.add.sprite(game.width/2-50, game.height/2-300, 'rectangle');
    this.rect2 = game.add.sprite(game.width/2+60, game.height/2-350, 'rectangle');
    this.rect3 = game.add.sprite(game.width/2+50, game.height/2-75, 'rectangle');
    
    this.rect1.anchor.setTo(0.5, 0.5);
    this.rect2.anchor.setTo(0.5, 0.5);
    this.rect3.anchor.setTo(0.5, 0.5);
    
    this.rect1.scale.setTo(1.5, 1.5);
    this.rect2.scale.setTo(1.5, 1.5);
    this.rect3.scale.setTo(1.5, 1.5);
    
    this.worker1hole = game.add.sprite(game.width/2-100, game.height/2-300, 'worker5');
    this.worker2hole = game.add.sprite(game.width/2+60, game.height/2-350, 'worker4');
    this.worker3hole = game.add.sprite(game.width/2+50, game.height/2-75, 'worker13');

    this.worker1hole.scale.setTo(1.5, 1.5);
    this.worker2hole.scale.setTo(1.5, 1.5);
    this.worker3hole.scale.setTo(1.5, 1.5);
    
    this.worker1 = game.add.sprite(game.width/2+300, game.height-500, 'worker5');
    this.worker2 = game.add.sprite(game.width/2+300, game.height-500, 'worker4');
    this.worker3 = game.add.sprite(game.width/2+300, game.height-500, 'worker13');
    
    this.worker1.scale.setTo(1.5, 1.5);
    this.worker2.scale.setTo(1.5, 1.5);
    this.worker3.scale.setTo(1.5, 1.5);
    
    this.worker1hole.angle = -15;
    this.worker2hole.angle = -15;
    this.worker3hole.angle = -15;
        
    this.worker1hole.alpha = 0.5;
    this.worker2hole.alpha = 0.5;
    this.worker3hole.alpha = 0.5;
    
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
    
    // Add physics to the workers
    game.physics.arcade.enable(this.worker1);
    game.physics.arcade.enable(this.worker2);
    game.physics.arcade.enable(this.worker3);
//    game.physics.arcade.enable(this.worker1hole);
//    game.physics.arcade.enable(this.worker2hole);
    //game.physics.arcade.enable(this.worker3hole);
    game.physics.arcade.enable(this.rect1);
    game.physics.arcade.enable(this.rect2);
    game.physics.arcade.enable(this.rect3);

    this.worker1.body.collideWorldBounds = true;
    this.worker2.body.collideWorldBounds = true;
    this.worker3.body.collideWorldBounds = true;

    this.vo1 = game.add.audio('vo1');
    this.vo2 = game.add.audio('vo2');

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
    
    if(this.worker1.alive){
    this.movePlayer1();
    game.add.tween(this.worker1).to({angle: 20}, 50).to({angle: 40}, 500).loop().start();
    game.physics.arcade.overlap(this.worker1, this.rect1, this.killWorker1, null, this);
    }
    
    else if(this.worker2.alive){
    this.movePlayer2();
    game.add.tween(this.worker2).to({angle: -20}, 50).to({angle: 40}, 50).loop().start();
    game.physics.arcade.overlap(this.worker2, this.rect2, this.killWorker2, null, this);
    }
    
    else if(this.worker3.alive){
    this.movePlayer3();
    game.add.tween(this.worker3).to({angle: -20}, 50).to({angle: 40}, 50).loop().start();
    game.physics.arcade.overlap(this.worker3, this.rect3, this.killWorker3, null, this);
    }
    
    var rKey = game.input.keyboard.addKey(Phaser.Keyboard.R);
    var nKey = game.input.keyboard.addKey(Phaser.Keyboard.N);
    rKey.onDown.add(this.restartGame, this);
    nKey.onDown.add(this.nextState, this);


},
    


killWorker1: function(worker1, worker1hole){
    
    this.worker1.kill();
    this.worker1hole.alpha = 1.0;
    //play animation
//    var heart = game.add.sprite(game.width/2-150, game.height/2-200, 'heart');
//    var beat = heart.animations.add('beat');
//    heart.animations.play('beat', 4, false);
    this.vo1.play();    
    },
    
killWorker2: function(worker2, worker2hole){
    
    this.worker2.kill();
    this.worker2hole.alpha = 1.0;
    //play animation
//    var heart = game.add.sprite(game.width/2-50, game.height/2-200, 'heart');
//    var beat = heart.animations.add('beat');
//    heart.animations.play('beat', 4, false);
    
    this.vo1.play();
    
    //delay switching states by X time
    //this.changeTimer = this.game.time.events.add(3000, this.restartGame, this);
    
    },
    
killWorker3: function(worker3, worker3hole){
    
    this.worker3.kill();
    this.worker3hole.alpha = 1.0;
    //play animation
//    var heart = game.add.sprite(350, 400, 'heart');
//    var beat = heart.animations.add('beat');
//    heart.animations.play('beat', 4, false);
    this.sparkle = game.add.sprite(0, 0, 'sparkle');
    game.add.tween(this.sparkle).to({alpha: 0}, 2000).start();
    //game.add.tween(this.sparkle).to({alpha: 100}, 2000).to({alpha: 0}, 2000).start();
    
//    this.text2 = game.add.sprite(game.width/2,game.height-200,'text2');
//    this.text2.anchor.setTo(.5,.5);
//    
//    var label = game.add.text(game.width/5, game.height-300,
//            'My workers love me for \nassigning them to the jobs that they like.', { font: '60px Arial', fill: 'rgba(0,0,0,0.5)'});
    
    this.vo2.play();
    
    this.timer5813 = this.game.time.events.add(4000, this.nextState, this);
    //game.add.tween(this.label).to({fill : '#rgba(255,0,0,0)'}, 50).to({fill : '#rgba(255,0,0,1)'}, 50).loop().start();

    //delay switching states by X time
    //this.changeTimer = this.game.time.events.add(3000, this.restartGame, this);
    
},
    
restartGame: function() {
    // Start the 'menu' state, which restarts the game
    game.state.start('menu');
},
    
nextState: function(){
    game.state.start('level4');
},   
    
    
movePlayer1: function(){
    if(this.cursor.left.isDown || this.moveLeft){
        this.worker1.body.x -= this.speed;
    }
    else if(this.cursor.right.isDown || this.moveRight){
        this.worker1.body.x += this.speed;
    }
    if(this.cursor.up.isDown || this.moveUp){
        this.worker1.body.y -= this.speed;
    }
    else if(this.cursor.down.isDown || this.moveDown){
        this.worker1.body.y += this.speed;
    }   
},
    
movePlayer2: function(){

    if(this.cursor.left.isDown || this.moveLeft){
        this.worker2.body.x -= this.speed;
    }
    
    else if(this.cursor.right.isDown || this.moveRight){
        this.worker2.body.x += this.speed;
    }
    
    if(this.cursor.up.isDown || this.moveUp){
        this.worker2.body.y -= this.speed;
    }
    else if(this.cursor.down.isDown || this.moveDown){
        this.worker2.body.y += this.speed;
    }   

},
    
movePlayer3: function(){

    if(this.cursor.left.isDown || this.moveLeft){
        this.worker3.body.x -= this.speed;
    }
    
    else if(this.cursor.right.isDown || this.moveRight){
        this.worker3.body.x += this.speed;
    }
    
    if(this.cursor.up.isDown || this.moveUp){
        this.worker3.body.y -= this.speed;
    }
    else if(this.cursor.down.isDown || this.moveDown){
        this.worker3.body.y += this.speed;
    }   

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
