var level2State = {
    
 
preload: function() { 
        game.load.image('piece_upper', 'assets/level2/piece_upper.png');
        game.load.image('piece_mid', 'assets/level2/piece_mid.png');
        game.load.image('piece_lower', 'assets/level2/piece_lower.png');
        game.load.image('piece_upper_cover', 'assets/level2/piece_upper_cover.png');
        game.load.image('piece_mid_cover', 'assets/level2/piece_mid_cover.png');
        game.load.image('piece_lower_cover', 'assets/level2/piece_lower_cover.png');
    
        game.load.image('rect', 'assets/rectangle.png');
        game.load.image('toy', 'assets/level2/toy.png');
        //game.load.image('sparkle', 'assets/level3/sparkle.png');
        game.load.image('background', 'assets/level2/background_0.png');    
        game.load.spritesheet('workers_anim', 'assets/level2/workers_anim1.png', 1080, 1920, 6);
    
        game.load.audio('vo1','assets/level2/vo1.wav');
        game.load.audio('vo2','assets/level2/vo2.wav');
        game.load.audio('act1','assets/sound/act1.wav');
        game.load.audio('conveyor','assets/level2/conveyor.wav');
    
        game.load.image('text1', 'assets/level2/text1.png');    
        game.load.image('text2', 'assets/level2/text2.png');    
    
    },

create: function() { 
    
    this.piece1cover = game.add.sprite(0,1192,'piece_lower_cover');
    this.piece2cover = game.add.sprite(0,409,'piece_upper_cover');
    this.piece3cover = game.add.sprite(game.width/2+11,845,'piece_mid_cover');
    
    game.stage.backgroundColor = '#000000';
    game.add.image(0, 0, 'background');
    
    this.cursor = game.input.keyboard.createCursorKeys();
    //game.physics.startSystem(Phaser.Physics.ARCADE);
    
//    var label = game.add.text(game.width/8, game.height/7-100,
//            'I\'ve been in this business for 20 years. It\'s a great job.', { font: '60px Arial', fill: '#ffffff',boundsAlignH: "center", boundsAlignV: "middle", wordWrap: true, wordWrapWidth: game.width-300});
    
    this.text1 = game.add.sprite(game.width/2,200,'text1');
    this.text1.anchor.setTo(.5,.5);
    game.world.bringToTop(this.text1);
    
    this.piece1 = game.add.sprite(game.width/2,game.height-300,'piece_lower');
    this.piece2 = game.add.sprite(game.width/2,game.height-300,'piece_upper');
    this.piece3 = game.add.sprite(game.width/2,game.height-300,'piece_mid');
        
    this.rect1 = game.add.sprite(game.width/3-150,game.height-400,'rect');
    this.rect2 = game.add.sprite(game.width/3-100,game.height/3-100,'rect');
    this.rect3 = game.add.sprite(game.width/2+200, game.height/2+100,'rect');
    
    this.rect1.scale.setTo(2,2);
    this.rect2.scale.setTo(2,2);
    this.rect3.scale.setTo(2,2);
        
    this.piece1cover.alpha = 0;
    this.piece2cover.alpha = 0;
    this.piece3cover.alpha = 0;
    
    game.physics.arcade.enable(this.piece1);
    game.physics.arcade.enable(this.piece2);
    game.physics.arcade.enable(this.piece3);
    game.physics.arcade.enable(this.rect1);
    game.physics.arcade.enable(this.rect2);
    game.physics.arcade.enable(this.rect3);

    this.piece1.alpha = 1;
    this.piece2.alpha = 1;
    this.piece3.alpha = 1;
    
    this.piece1.body.collideWorldBounds = true;
    this.piece2.body.collideWorldBounds = true;
    this.piece3.body.collideWorldBounds = true;

    this.vo1 = game.add.audio('vo1');
    this.vo2 = game.add.audio('vo2');
    this.conveyor = game.add.audio('conveyor');
    this.conveyor.loop = true;
    this.conveyor.volume = 0.5;
    
    game.global.act1 = game.add.audio('act1');
    game.global.act1.volume = 0.2;
    game.global.act1.play();
    
    var speed;
    
    if(!game.device.desktop){
        this.addMobileInputs();
        this.speed = 20;
        
    }
    else if(game.device.desktop){
        this.speed = 10;
    }
    
    
    },

update: function() {
    
    //restart level and next level
    var rKey = game.input.keyboard.addKey(Phaser.Keyboard.R);
    var nKey = game.input.keyboard.addKey(Phaser.Keyboard.N);
    rKey.onDown.add(this.restartGame, this);
    nKey.onDown.add(this.nextState, this);
    
    game.world.bringToTop(this.text1);
    //game.world.bringToTop(this.text2);

    if(this.piece3.alive){
    this.movePlayer3();
    game.add.tween(this.piece3).to({angle: -20}, 50).to({angle: 40}, 50).loop().start();
    game.physics.arcade.overlap(this.piece3, this.rect3, this.killWorker3, null, this);
    }
    
    else if(this.piece2.alive){
    this.movePlayer2();
    game.add.tween(this.piece2).to({angle: -20}, 50).to({angle: 40}, 50).loop().start();
    game.physics.arcade.overlap(this.piece2, this.rect2, this.killWorker2, null, this);
    }
    
    else if(this.piece1.alive){
    this.movePlayer1();
    game.add.tween(this.piece1).to({angle: 20}, 50).to({angle: 40}, 500).loop().start();
    game.physics.arcade.overlap(this.piece1, this.rect1, this.killWorker1, null, this);
    }
    
        
},
    

killWorker1: function(piece1, rect1){
    
    this.piece1.kill();
    this.piece1cover.alpha = 1;
    
//    var label = game.add.text(game.width/12, 1700,
//            'I see my job like solving a puzzle.', { font: '60px Arial', fill: '#ffffff'});

    var heart = game.add.sprite(0, 0, 'workers_anim');
    var beat = heart.animations.add('beat');
    heart.animations.play('beat', 6, true);
    //this.timer501 = this.game.time.events.add(500, this.addToy, this);
    

    this.vo2.play();
    this.conveyor.play();
    
    this.text2 = game.add.sprite(game.width/2,game.height-200,'text2');
    this.text2.anchor.setTo(.5,.5);
    game.world.bringToTop(this.text2);
    
    this.timer1223581 = this.game.time.events.add(5000, this.nextState, this);
    //this.piece1hole.alpha = 1.0;
    //play animation
//    var heart = game.add.sprite(game.width/2-150, game.height/2-200, 'heart');
//    var beat = heart.animations.add('beat');
//    heart.animations.play('beat', 4, false);
        
//    this.sparkle = game.add.sprite(0, 0, 'sparkle');
//    game.add.tween(this.sparkle).to({alpha: 0}, 2000).start();
    
    //delay switching states by X time
    //this.changeTimer = this.game.time.events.add(3000, this.restartGame, this);
    
    },
    

    
    
killWorker2: function(piece2, rect2){
    
    this.piece2.kill();
    this.piece2cover.alpha = 1;
    this.vo1.play();
    //this.piece1hole.alpha = 1.0;
    //play animation
//    var heart = game.add.sprite(game.width/2-150, game.height/2-200, 'heart');
//    var beat = heart.animations.add('beat');
//    heart.animations.play('beat', 4, false);
        
//    this.sparkle = game.add.sprite(0, 0, 'sparkle');
//    game.add.tween(this.sparkle).to({alpha: 0}, 2000).start();
    
    //delay switching states by X time
    //this.changeTimer = this.game.time.events.add(3000, this.restartGame, this);
    
    },

killWorker3: function(piece3, rect3){
    
    this.piece3.kill();
    this.piece3cover.alpha = 1;
    this.vo1.play();
    //this.piece1hole.alpha = 1.0;
    //play animation
//    var heart = game.add.sprite(game.width/2-150, game.height/2-200, 'heart');
//    var beat = heart.animations.add('beat');
//    heart.animations.play('beat', 4, false);
        
//    this.sparkle = game.add.sprite(0, 0, 'sparkle');
//    game.add.tween(this.sparkle).to({alpha: 0}, 2000).start();
    
    
    //delay switching states by X time
    //this.changeTimer = this.game.time.events.add(3000, this.restartGame, this);
    
    },
    
movePlayer1: function(){
    if(this.cursor.left.isDown || this.moveLeft){
        this.piece1.body.x -= this.speed;
    }
    else if(this.cursor.right.isDown || this.moveRight){
        this.piece1.body.x += this.speed;
    }
    if(this.cursor.up.isDown || this.moveUp){
        this.piece1.body.y -= this.speed;
    }
    else if(this.cursor.down.isDown || this.moveDown){
        this.piece1.body.y += this.speed;
    }   
},
    
movePlayer2: function(){

    if(this.cursor.left.isDown || this.moveLeft){
        this.piece2.body.x -= this.speed;
    }
    
    else if(this.cursor.right.isDown || this.moveRight){
        this.piece2.body.x += this.speed;
    }
    
    if(this.cursor.up.isDown || this.moveUp){
        this.piece2.body.y -= this.speed;
    }
    else if(this.cursor.down.isDown || this.moveDown){
        this.piece2.body.y += this.speed;
    }   

},
    
movePlayer3: function(){

    if(this.cursor.left.isDown || this.moveLeft){
        this.piece3.body.x -= this.speed;
    }
    
    else if(this.cursor.right.isDown || this.moveRight){
        this.piece3.body.x += this.speed;
    }
    
    if(this.cursor.up.isDown || this.moveUp){
        this.piece3.body.y -= this.speed;
    }
    else if(this.cursor.down.isDown || this.moveDown){
        this.piece3.body.y += this.speed;
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
    
    
    
restartGame: function() {
    // Start the 'menu' state, which restarts the game
    game.state.start('menu');
},
    
    
nextState: function(){
    game.state.start('level3');
    this.conveyor.stop();
},
    
};
