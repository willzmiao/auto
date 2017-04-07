var level6State = {
    
preload: function() { 
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
    
        game.load.image('text1', 'assets/level6/text1.png');
        game.load.image('text2', 'assets/level6/text2.png');
    
        game.load.image('scale', 'assets/level6/scale.png');
    
        game.load.spritesheet('heart', 'assets/heart.png', 68, 62, 6);
        game.load.image('rectangle', 'assets/rectangle.png');
        game.load.image('background', 'assets/level6/background.png');
    
        game.load.audio('nervous1','assets/level6/nervous1.wav');
        game.load.audio('nervous2','assets/level6/nervous2.wav');
        game.load.audio('affirmative1','assets/level2/vo1.wav');
        game.load.audio('vo2','assets/level2/vo2.wav');
        game.load.audio('womp1','assets/level13/womp1.wav');
    },

create: function() { 
    
    this.cursor = game.input.keyboard.createCursorKeys();
    game.stage.backgroundColor = '#71c5cf';
    game.add.image(0, 0, 'background');
    //this.workers = game.add.group();
    //this.timer = game.time.events.loop(3000, this.addRowOfWorkers, this); 
    
    this.worker1hole = game.add.sprite(200, game.height/6+200, 'worker1');
    this.worker2hole = game.add.sprite(400, game.height/6+200, 'worker7');
    this.worker3hole = game.add.sprite(600, game.height/6+200, 'worker3');
    this.worker4hole = game.add.sprite(800, game.height/6+200, 'worker11');
    this.worker5hole = game.add.sprite(200, game.height*2/6+200, 'worker14');
    this.worker6hole = game.add.sprite(400, game.height*2/6+200, 'worker6');
    this.worker7hole = game.add.sprite(600, game.height*2/6+200, 'worker2');
    this.worker8hole = game.add.sprite(800, game.height*2/6+200, 'worker8');
    this.worker9hole = game.add.sprite(200, game.height*3/6+200, 'worker15');
    this.worker10hole = game.add.sprite(400, game.height*3/6+200, 'worker10');
    this.worker11hole = game.add.sprite(600, game.height*3/6+200, 'worker4');
    this.worker12hole = game.add.sprite(800, game.height*3/6+200, 'worker12');
    this.worker13hole = game.add.sprite(200, game.height*4/6+200, 'worker13');
    this.worker14hole = game.add.sprite(400, game.height*4/6+200, 'worker5');
    this.worker15hole = game.add.sprite(600, game.height*4/6+200, 'worker9');
    this.worker16hole = game.add.sprite(800, game.height*4/6+200, 'worker16');
    
    this.worker1hole.anchor.setTo(0.5, 0.5);
    this.worker2hole.anchor.setTo(0.5, 0.5);
    this.worker3hole.anchor.setTo(0.5, 0.5);
    this.worker4hole.anchor.setTo(0.5, 0.5);
    this.worker5hole.anchor.setTo(0.5, 0.5);
    this.worker6hole.anchor.setTo(0.5, 0.5);
    this.worker7hole.anchor.setTo(0.5, 0.5);
    this.worker8hole.anchor.setTo(0.5, 0.5);
    this.worker9hole.anchor.setTo(0.5, 0.5);
    this.worker10hole.anchor.setTo(0.5, 0.5);
    this.worker11hole.anchor.setTo(0.5, 0.5);
    this.worker12hole.anchor.setTo(0.5, 0.5);
    this.worker13hole.anchor.setTo(0.5, 0.5);
    this.worker14hole.anchor.setTo(0.5, 0.5);
    this.worker15hole.anchor.setTo(0.5, 0.5);
    this.worker16hole.anchor.setTo(0.5, 0.5);
    
    this.worker1hole.scale.setTo(1.5, 1.5);
    this.worker2hole.scale.setTo(1.5, 1.5);
    this.worker3hole.scale.setTo(1.5, 1.5);
    this.worker4hole.scale.setTo(1.5, 1.5);
    this.worker5hole.scale.setTo(1.5, 1.5);
    this.worker6hole.scale.setTo(1.5, 1.5);
    this.worker7hole.scale.setTo(1.5, 1.5);
    this.worker8hole.scale.setTo(1.5, 1.5);
    this.worker9hole.scale.setTo(1.5, 1.5);
    this.worker10hole.scale.setTo(1.5, 1.5);
    this.worker11hole.scale.setTo(1.5, 1.5);
    this.worker12hole.scale.setTo(1.5, 1.5);
    this.worker13hole.scale.setTo(1.5, 1.5);
    this.worker14hole.scale.setTo(1.5, 1.5);
    this.worker15hole.scale.setTo(1.5, 1.5);
    this.worker16hole.scale.setTo(1.5, 1.5);
    
    this.worker5 = game.add.sprite(game.width/2+100, game.height-250, 'worker16');
    this.worker4 = game.add.sprite(game.width/2+110, game.height-250, 'worker12');
    this.worker3 = game.add.sprite(game.width/2+100, game.height-250, 'worker7');
    this.worker2 = game.add.sprite(game.width/2+95, game.height-250, 'worker4');
    this.worker1 = game.add.sprite(game.width/2+105, game.height-250, 'worker1');
    
    this.worker1.angle = 80;
    this.worker2.angle = 8;
    this.worker3.angle = -20;
    this.worker4.angle = 50;
    this.worker5.angle = -48;
    
    this.worker1.scale.setTo(1.5, 1.5);
    this.worker2.scale.setTo(1.5, 1.5);
    this.worker3.scale.setTo(1.5, 1.5);
    this.worker4.scale.setTo(1.5, 1.5);
    this.worker5.scale.setTo(1.5, 1.5);
    
    this.rect1 = game.add.sprite(200, game.height/6+200, 'rectangle');
    this.rect2 = game.add.sprite(600, game.height*3/6+200, 'rectangle');
    this.rect3 = game.add.sprite(400, game.height/6+200, 'rectangle');
    this.rect4 = game.add.sprite(800, game.height*3/6+200, 'rectangle');
    this.rect5 = game.add.sprite(800, game.height*4/6+200, 'rectangle');
    
    this.rect1.anchor.setTo(0.5, 0.5);
    this.rect2.anchor.setTo(0.5, 0.5);
    this.rect3.anchor.setTo(0.5, 0.5);
    this.rect4.anchor.setTo(0.5, 0.5);
    this.rect5.anchor.setTo(0.5, 0.5);
    
    this.worker1hole.alpha = 0.4;
    this.worker2hole.alpha = 0.4;
    this.worker3hole.alpha = 0.4;
    this.worker4hole.alpha = 0.4;
    this.worker5hole.alpha = 0.4;
    this.worker6hole.alpha = 0.4;
    this.worker7hole.alpha = 0.4;
    this.worker8hole.alpha = 0.4;
    this.worker9hole.alpha = 0.4;
    this.worker10hole.alpha = 0.4;
    this.worker11hole.alpha = 0.4;
    this.worker12hole.alpha = 0.4;
    this.worker13hole.alpha = 0.4;
    this.worker14hole.alpha = 0.4;
    this.worker15hole.alpha = 0.4;
    this.worker16hole.alpha = 0.4;
    
    game.physics.arcade.enable(this.worker1);
    game.physics.arcade.enable(this.worker2);
    game.physics.arcade.enable(this.worker3);
    game.physics.arcade.enable(this.worker4);
    game.physics.arcade.enable(this.worker5);
    game.physics.arcade.enable(this.rect1);
    game.physics.arcade.enable(this.rect2);
    game.physics.arcade.enable(this.rect3);
    game.physics.arcade.enable(this.rect4);
    game.physics.arcade.enable(this.rect5);

    this.worker1.body.collideWorldBounds = true;
    this.worker2.body.collideWorldBounds = true;
    this.worker3.body.collideWorldBounds = true;
    this.worker4.body.collideWorldBounds = true;
    this.worker5.body.collideWorldBounds = true;
    
    this.affirmative1 = game.add.audio('affirmative1');
    this.nervous1 = game.add.audio('nervous1');
    this.nervous2 = game.add.audio('nervous2');
    this.womp1 = game.add.audio('womp1');
    
    this.text1 = game.add.sprite(game.width/2,200,'text1');
    this.text1.anchor.setTo(.5,.5);
    this.game.world.bringToTop(this.text1);

    
    //timer stuff
    var me = this;
 
    me.startTime = new Date();
    me.totalTime = 30;
    me.timeElapsed = 0;
 
    
    
},

update: function() {
    
    //restart level and next level
    var rKey = game.input.keyboard.addKey(Phaser.Keyboard.R);
    var nKey = game.input.keyboard.addKey(Phaser.Keyboard.N);
    rKey.onDown.add(this.restartGame, this);
    nKey.onDown.add(this.nextState, this);

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
    
    else if(this.worker4.alive){
    this.movePlayer4();
    game.add.tween(this.worker4).to({angle: -20}, 50).to({angle: 40}, 50).loop().start();
    game.physics.arcade.overlap(this.worker4, this.rect4, this.killWorker4, null, this);
    }
    
    else if(this.worker5.alive){
    this.movePlayer5();
    game.add.tween(this.worker5).to({angle: -20}, 50).to({angle: 40}, 50).loop().start();
    game.physics.arcade.overlap(this.worker5, this.rect5, this.killWorker5, null, this);
    }
    //detect when time has run out
    //if(me.timeElapsed >= me.totalTime){
    
    if(!this.worker5.alive){
    //Do what you need to do
        //this.nextState;
        //game.state.start('level7');
            //delay switching states by X time
        this.changeTimer = this.game.time.events.add(5000, this.nextState, this);

    }
},
    
killWorker1: function(worker1, worker1hole){
    
    this.worker1.kill();
    this.worker1hole.alpha = 1.0;
    //play animation
    var heart = game.add.sprite(game.width/2-150, game.height/2-200, 'heart');
    var beat = heart.animations.add('beat');
    heart.animations.play('beat', 4, false);
    
    this.affirmative1.play();

    //delay switching states by X time
    //this.changeTimer = this.game.time.events.add(3000, this.restartGame, this);
    
},
    
killWorker2: function(worker2, worker11hole){
    
    this.worker2.kill();
    this.worker11hole.alpha = 1.0;
    //play animation
    var heart = game.add.sprite(game.width/2-50, game.height/2-200, 'heart');
    var beat = heart.animations.add('beat');
    heart.animations.play('beat', 4, false);
    
    this.affirmative1.play();
    
//    var label = game.add.text(game.width/2, 300,
//            'Boss: We need to \nscale faster!', { font: '60px Arial', fill: 'rgba(0,0,0,1)'});
    
    this.scale1 = game.add.sprite(game.width/2+130, 230, 'scale');
    
    var me = this;
    me.createTimer();
    
    this.womp1.play();
 
    me.gameTimer = game.time.events.loop(100, function(){
    me.updateTimer();
    });
    
},

createTimer: function(){
 
    var me = this;
 
    me.timeLabel = me.game.add.text(me.game.world.centerX, 400, "00:00", {font: "100px Arial", fill: "#fff"}); 
    me.timeLabel.anchor.setTo(0.5, 0);
    me.timeLabel.align = 'center';
 
},
    
updateTimer: function(){
 
    var me = this;
 
    var currentTime = new Date();
    var timeDifference = me.startTime.getTime() - currentTime.getTime();
 
    //Time elapsed in seconds
    me.timeElapsed = Math.abs(timeDifference / 1000);
 
    //Time remaining in seconds
    var timeRemaining = me.totalTime - me.timeElapsed; 
 
    //Convert seconds into minutes and seconds
    var minutes = Math.floor(timeRemaining / 60);
    var seconds = Math.floor(timeRemaining) - (60 * minutes);
 
    //Display minutes, add a 0 to the start if less than 10
    var result = (minutes < 10) ? "0" + minutes : minutes; 
 
    //Display seconds, add a 0 to the start if less than 10
    result += (seconds < 10) ? ":0" + seconds : ":" + seconds; 
 
    me.timeLabel.text = result;
 
},
    
killWorker3: function(worker3, worker2hole){
    
    this.worker3.kill();
    this.worker2hole.alpha = 1.0;
    //play animation
    var heart = game.add.sprite(game.width/2-50, game.height/2-200, 'heart');
    var beat = heart.animations.add('beat');
    heart.animations.play('beat', 4, false);

    this.nervous1.play();
    
    //delay switching states by X time
    //this.changeTimer = this.game.time.events.add(3000, this.restartGame, this);
    
    },
    
killWorker4: function(worker4, worker12hole){
    
    this.worker4.kill();
    this.worker12hole.alpha = 1.0;
    //play animation
    var heart = game.add.sprite(game.width/2-50, game.height/2-200, 'heart');
    var beat = heart.animations.add('beat');
    heart.animations.play('beat', 4, false);

    this.nervous2.play();
    //delay switching states by X time
    //this.changeTimer = this.game.time.events.add(3000, this.restartGame, this);
    
    },

killWorker5: function(worker5, worker16hole){
    
    this.worker5.kill();
    this.worker16hole.alpha = 1.0;
    //play animation
    var heart = game.add.sprite(game.width/2-50, game.height/2-200, 'heart');
    var beat = heart.animations.add('beat');
    heart.animations.play('beat', 4, false);

    this.nervous1.play();
    
//    var label = game.add.text(game.width/8, game.height/2+400,
//            'Hmmm... not enough workers to do the job...', { font: '60px Arial', fill: '#ffffff',boundsAlignH: "center", boundsAlignV: "middle", wordWrap: true, wordWrapWidth: game.width-300});
    
    this.text2 = game.add.sprite(game.width/2,game.height-200,'text2');
    this.text2.anchor.setTo(.5,.5);
    this.game.world.bringToTop(this.text2);

    
    //delay switching states by X time
    //this.changeTimer = this.game.time.events.add(3000, this.restartGame, this);
    
    },

movePlayer1: function(){
    if(this.cursor.left.isDown){
        this.worker1.body.x -= 4;
    }
    else if(this.cursor.right.isDown){
        this.worker1.body.x += 4;
    }
    if(this.cursor.up.isDown){
        this.worker1.body.y -= 4;
    }
    else if(this.cursor.down.isDown){
        this.worker1.body.y += 4;
    }   
},
    
movePlayer2: function(){

    if(this.cursor.left.isDown){
        this.worker2.body.x -= 4;
    }
    
    else if(this.cursor.right.isDown){
        this.worker2.body.x += 4;
    }
    
    if(this.cursor.up.isDown){
        this.worker2.body.y -= 4;
    }
    else if(this.cursor.down.isDown){
        this.worker2.body.y += 4;
    }   

},
    
movePlayer3: function(){

    if(this.cursor.left.isDown){
        this.worker3.body.x -= 10;
    }
    
    else if(this.cursor.right.isDown){
        this.worker3.body.x += 10;
    }
    
    if(this.cursor.up.isDown){
        this.worker3.body.y -= 10;
    }
    else if(this.cursor.down.isDown){
        this.worker3.body.y += 10;
    }   

},
    
movePlayer4: function(){

    if(this.cursor.left.isDown){
        this.worker4.body.x -= 10;
    }
    
    else if(this.cursor.right.isDown){
        this.worker4.body.x += 10;
    }
    
    if(this.cursor.up.isDown){
        this.worker4.body.y -= 10;
    }
    else if(this.cursor.down.isDown){
        this.worker4.body.y += 10;
    }   

},
    
movePlayer5: function(){

    if(this.cursor.left.isDown){
        this.worker5.body.x -= 10;
    }
    
    else if(this.cursor.right.isDown){
        this.worker5.body.x += 10;
    }
    
    if(this.cursor.up.isDown){
        this.worker5.body.y -= 10;
    }
    else if(this.cursor.down.isDown){
        this.worker5.body.y += 10;
    }   

},

restartGame: function(){
    game.state.start('menu');
},

nextState: function(){
    game.state.start('level8');
},
    
//render() {
//    this.game.debug.text(`me.timeElapse ${timeElapsed}`, 20, game.height/2, 'yellow', '60px Arial');
//    this.game.debug.text(`me.totalTime ${totalTime}`, 20, game.height/2+100, 'yellow', '60px Arial');
//}
    
//displayDebugInfo(){
//    this.game.debug.start(400,400);
//    this.game.debug.line(`timeElapsed: ${this.timeElapsed}`);
//}

    
};
