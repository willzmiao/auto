var level14State = {
    
 
preload: function() { 
    
    game.load.image('worker', 'assets/worker_row.png');
    game.load.image('robot', 'assets/robot_row.png');
    game.load.image('mar', 'assets/level14/mar.png');
    game.load.image('apr', 'assets/level14/apr.png');
    game.load.image('may', 'assets/level14/may.png');
    game.load.image('jun', 'assets/level14/jun.png');
    game.load.image('jul', 'assets/level14/jul.png');
    game.load.image('rect', 'assets/level14/rect1.png');
    game.load.image('worker1', 'assets/level14/worker1.png');
    game.load.image('worker2', 'assets/level14/worker2.png');
    game.load.image('worker3', 'assets/level14/worker3.png');
    game.load.image('worker4', 'assets/level14/worker4.png');
    game.load.image('worker5', 'assets/level14/worker5.png');
    game.load.image('worker6', 'assets/level14/worker6.png');
    game.load.image('worker7', 'assets/level14/worker7.png');
    game.load.image('worker8', 'assets/level14/worker8.png');
    
    game.load.audio('act3','assets/sound/act3.wav');
    game.load.audio('conveyor','assets/level2/conveyor.wav');
    game.load.audio('churn','assets/level12/churn.wav');
        
    game.load.image('background', 'assets/level14/background.png');
    game.load.image('header', 'assets/level14/header.png');
    
    game.load.spritesheet('conveyor_analog_left', 'assets/level14/conveyor_analog_left3.png', 508, 292, 5);
    game.load.spritesheet('conveyor_analog', 'assets/level14/conveyor_analog3.png', 508, 292, 5);
    game.load.spritesheet('conveyor_automated_left', 'assets/level14/conveyor_automated_left_sheet.png', 691, 569, 6);
    game.load.spritesheet('conveyor_automated', 'assets/level14/conveyor_automated_sheet.png', 691, 569, 6);
    
    game.load.image('up', 'assets/ui/up_arrow.png');
    game.load.image('down', 'assets/ui/down_arrow.png');
    game.load.image('left', 'assets/ui/left_arrow.png');
    game.load.image('right', 'assets/ui/right_arrow.png');

    
},

create: function() { 
    
    //game.stage.backgroundColor = '#71c5cf';
    game.add.image(0, 0, 'background');
    game.add.image(0, 0, 'header');
    
    this.conveyor_analog1 = game.add.sprite(0, game.height/5, 'conveyor_analog_left');
    var beat1 = this.conveyor_analog1.animations.add('beat1');
    this.conveyor_analog1.animations.play('beat1', 4, true);

    this.conveyor_analog2 = game.add.sprite(game.width/2+50, game.height*2/5, 'conveyor_analog');
    var beat2 = this.conveyor_analog2.animations.add('beat2');
    this.conveyor_analog2.animations.play('beat2', 4, true);
    
    this.conveyor_analog3 = game.add.sprite(0, game.height*3/5, 'conveyor_analog_left');
    var beat3 = this.conveyor_analog3.animations.add('beat3');
    this.conveyor_analog3.animations.play('beat3', 4, true);
    
    this.conveyor_analog4 = game.add.sprite(game.width/2+50, game.height*4/5, 'conveyor_analog');
    var beat4 = this.conveyor_analog4.animations.add('beat4');
    this.conveyor_analog4.animations.play('beat4', 4, true);
       
    this.worker1 = game.add.sprite(150, 310, 'worker1');
    this.worker6 = game.add.sprite(230, 750, 'worker6');
    
    this.worker2 = game.add.sprite(250, 1080, 'worker2');
    this.worker7 = game.add.sprite(150, 1520, 'worker7');
    
    this.worker3 = game.add.sprite(800, 700, 'worker3');
    this.worker8 = game.add.sprite(900, 1150, 'worker8');
    
    this.worker4 = game.add.sprite(920, 1470, 'worker4');
    this.worker5 = game.add.sprite(820, 1910, 'worker5');
    
    this.worker1.scale.setTo(.75,.75);
    this.worker2.scale.setTo(.75,.75);
    this.worker3.scale.setTo(.75,.75);
    this.worker4.scale.setTo(.75,.75);
    this.worker5.scale.setTo(.75,.75);
    this.worker6.scale.setTo(.75,.75);
    this.worker7.scale.setTo(.75,.75);
    this.worker8.scale.setTo(.75,.75);
    
    this.worker1.anchor.setTo(.5,.5);
    this.worker2.anchor.setTo(.5,.5);
    this.worker3.anchor.setTo(.5,.5);
    this.worker4.anchor.setTo(.5,.5);
    this.worker5.anchor.setTo(.5,.5);
    this.worker6.anchor.setTo(.5,.5);
    this.worker7.anchor.setTo(.5,.5);
    this.worker8.anchor.setTo(.5,.5);    
        
    game.add.tween(this.worker1).to({angle: -5}, 500).to({angle: 5}, 500).loop().start();
    game.add.tween(this.worker6).to({angle: -4}, 400).to({angle: 4}, 500).loop().start();
    game.add.tween(this.worker2).to({angle: -5}, 500).to({angle: 5}, 400).loop().start();
    game.add.tween(this.worker3).to({angle: -5}, 300).to({angle: 5}, 500).loop().start();
    game.add.tween(this.worker4).to({angle: -5}, 300).to({angle: 5}, 500).loop().start();
    game.add.tween(this.worker5).to({angle: -5}, 500).to({angle: 5}, 300).loop().start();
    game.add.tween(this.worker7).to({angle: -5}, 500).to({angle: 5}, 400).loop().start();
    game.add.tween(this.worker8).to({angle: -5}, 500).to({angle: 5}, 400).loop().start();
    
    
    this.rect = game.add.sprite(game.width/6, game.height/5-220, 'rect');
    this.mar = game.add.sprite(game.width/6, game.height/5-300, 'mar');
    this.apr = game.add.sprite(game.width*2/6, game.height/5-300, 'apr');
    this.may = game.add.sprite(game.width*3/6, game.height/5-300, 'may');
    this.jun = game.add.sprite(game.width*4/6, game.height/5-300, 'jun');
    this.jul = game.add.sprite(game.width*5/6, game.height/5-300, 'jul');
    
    this.apr.alpha = 0.2;
    this.may.alpha = 0.2;
    this.jun.alpha = 0.2;
    this.jul.alpha = 0.2;
    
    this.mar.tint = 0xffffff;
    
    this.cursor = game.input.keyboard.createCursorKeys();
    
    this.conveyorsound = game.add.audio('conveyor');
    this.conveyorsound.loop = true;
    this.conveyorsound.volume = 0.5;
    this.conveyorsound.play();
    
    this.churn = game.add.audio('churn');
    this.churn.loop = true;
    this.churn.volume = 0.3;
    
    game.physics.arcade.enable(this.conveyor_analog1);
    game.physics.arcade.enable(this.conveyor_analog2);
    game.physics.arcade.enable(this.conveyor_analog3);
    game.physics.arcade.enable(this.conveyor_analog4);
    
    var flipFlop;
    
    game.global.act2.stop();
    game.global.act3 = game.add.audio('act3');
    game.global.act3.volume = 0.6;
    game.global.act3.play();
    
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

    
    if(this.mar.alpha === 1){
        this.display1();
    }
    
    else if(this.apr.alpha === 1){
        this.display2();
    }
    
    else if(this.may.alpha === 1){
        this.display3();
    }
    
    else if(this.jun.alpha === 1){
        this.display4();
    }

    if(!game.global.act3.isPlaying){
        game.global.act3.play();
    }

    
},

    
display1: function(){
    if(this.cursor.right.isDown || this.moveRight){
        if(!flipFlop){
        this.conveyor_analog1.kill(); 
        var conveyor_automated1 = game.add.sprite(-100, game.height/5-200, 'conveyor_automated_left');
        var beat5 = conveyor_automated1.animations.add('beat5');
        conveyor_automated1.animations.play('beat5', 6, true);
        game.add.tween(this.worker1).to({alpha: 0}, 500,Phaser.Easing.Sinusoidal.Out).start();
        game.add.tween(this.worker6).to({alpha: 0}, 500,Phaser.Easing.Sinusoidal.Out).start();
        this.conveyorsound.volume = 0.3;
        this.churn.play();
            
        this.mar.alpha = 0.5;
        this.apr.alpha = 1;
        this.apr.tint = 0xffffff;
        this.mar.tint = '#000000';
        game.add.tween(this.rect).to({x: game.width*2/6}, 1000,Phaser.Easing.Exponential.Out).start();    
            flipFlop = true;
        }
    }
    
    if (this.cursor.right.isUp){
        flipFlop = false;
    }
},
    
display2: function(){
    if(this.cursor.right.isDown || this.moveRight){
        if(!flipFlop){
        this.conveyor_analog2.kill();
        var conveyor_automated2 = game.add.sprite(game.width/2, game.height*2/5-200, 'conveyor_automated');
        var beat6 = conveyor_automated2.animations.add('beat6');
        conveyor_automated2.animations.play('beat6', 6, true);
        this.conveyorsound.volume = 0.1;
        this.churn.volume = 0.5;
            
        game.add.tween(this.worker3).to({alpha: 0}, 500,Phaser.Easing.Sinusoidal.Out).start();
        game.add.tween(this.worker8).to({alpha: 0}, 500,Phaser.Easing.Sinusoidal.Out).start();
    
            
        this.apr.alpha = 0.5;
        this.may.alpha = 1;
        this.may.tint = 0xffffff;
        this.apr.tint = '#000000';

        game.add.tween(this.rect).to({x: game.width*3/6}, 1000,Phaser.Easing.Exponential.Out).start();    
            flipFlop = true;
        }
    }
    if (this.cursor.right.isUp){
        flipFlop = false;
    }
},

display3: function(){
    if(this.cursor.right.isDown || this.moveRight){
        if(!flipFlop){
        this.conveyor_analog3.kill();
        var conveyor_automated3 = game.add.sprite(-100, game.height*3/5-200, 'conveyor_automated_left');
        var beat7 = conveyor_automated3.animations.add('beat7');
        conveyor_automated3.animations.play('beat7', 6, true);
            this.conveyorsound.volume = 0.1;
            this.churn.volume = 0.7;
            
        game.add.tween(this.worker2).to({alpha: 0}, 500,Phaser.Easing.Sinusoidal.Out).start();
        game.add.tween(this.worker7).to({alpha: 0}, 500,Phaser.Easing.Sinusoidal.Out).start();
    
            
        this.may.alpha = 0.5;
        this.jun.alpha = 1;
        this.jun.tint = 0xffffff; 
        this.may.tint = '#000000';

        game.add.tween(this.rect).to({x: game.width*4/6}, 1000,Phaser.Easing.Exponential.Out).start();    
            flipFlop = true;
        }
    }
    if (this.cursor.right.isUp){
        flipFlop = false;
    }
},
    
display4: function(){
    if(this.cursor.right.isDown || this.moveRight){
        if(!flipFlop){
        this.conveyor_analog4.kill();
        var conveyor_automated4 = game.add.sprite(game.width/2, game.height*4/5-200, 'conveyor_automated');
        var beat8 = conveyor_automated4.animations.add('beat8');
        conveyor_automated4.animations.play('beat8', 6, true);
        this.conveyorsound.stop();    
            this.churn.volume = 0.9;
            
        game.add.tween(this.worker4).to({alpha: 0}, 500,Phaser.Easing.Sinusoidal.Out).start();
        game.add.tween(this.worker5).to({alpha: 0}, 500,Phaser.Easing.Sinusoidal.Out).start();
    
        this.jun.alpha = 0.5;
        this.jul.alpha = 1;
        this.jul.tint = 0xffffff;
        this.jun.tint = '#000000';

        game.add.tween(this.rect).to({x: game.width*5/6}, 1000,Phaser.Easing.Exponential.Out).start();    
            flipFlop = true;
            
        this.timer14 = this.game.time.events.add(4000, this.nextState, this);
            
        }
    }
    if (this.cursor.right.isUp){
        flipFlop = false;
    }
},
    

    
nextState: function(){
    this.conveyorsound.stop();
    this.churn.stop();
    game.state.start('level15');
    
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
