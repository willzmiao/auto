var level4State = {
  
    preload: function() { 
        // This function will be executed at the beginning     
        // That's where we load the images and sounds 
        game.load.image('speech1', 'assets/level4/speech1.png'); 
        game.load.image('speech2', 'assets/level4/speech2.png');
        game.load.image('speech3', 'assets/level4/speech3.png');
        game.load.image('speech4', 'assets/level4/speech4.png');
        game.load.image('speech5', 'assets/level4/speech5.png');
        
        game.load.image('start', 'assets/level4/start.png');
        game.load.image('mid', 'assets/level4/mid.png');
        game.load.image('end', 'assets/level4/end.png');
        //game.load.spritesheet('heart', 'assets/heart.png', 68, 62, 6);
        //game.load.spritesheet('bird', 'assets/level5/bird_sheet.png', 215, 209, 4);
        game.load.spritesheet('bird', 'assets/heart.png', 68, 62, 6);
        
        game.load.audio('vo1','assets/level4/vo1.wav');
        game.load.audio('vo2','assets/level4/vo2.wav');
        game.load.audio('vo3','assets/level4/vo3.wav');
        game.load.audio('vo4','assets/level4/vo4.wav');
        game.load.audio('vo5','assets/level4/vo5.wav');
        game.load.audio('vo6','assets/level4/vo6.wav');
        
    },
    
       
    
create: function() { 
    // Change the background color of the game to blue
    game.stage.backgroundColor = '#71c5cf';

    // Set the physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);


    this.cursor = game.input.keyboard.createCursorKeys();
        
    this.end = game.add.sprite(0, 0, 'end');
    this.mid = game.add.sprite(0, 0, 'mid');
    this.start = game.add.sprite(0, 0, 'start');
    
//    items = game.add.group();
//    items.create(100,400,'speech1');
//    items.create(150,200,'speech2');
//    items.create(250,50,'speech3');
          
//    var label = game.add.text(game.width/5, game.height/7,
//    'My work excites me.', { font: '40px Arial', fill: 'rgba(0,0,0,1)'});
    
    this.speech1 = game.add.sprite(300, 1500, 'speech1');
    this.speech2 = game.add.sprite(350, 1300, 'speech2');
    this.speech3 = game.add.sprite(400, 1050, 'speech3');
    this.speech4 = game.add.sprite(500, 600, 'speech4');
    this.speech5 = game.add.sprite(450, 400, 'speech5');
    
    //game.physics.arcade.enable(this.speech1);
    this.speech1.alpha = 0;
    this.speech2.alpha = 0;
    this.speech3.alpha = 0;
    this.speech4.alpha = 0;
    this.speech5.alpha = 0;
   
    var flipFlop;
    
    this.vo1 = game.add.audio('vo1');
    this.vo2 = game.add.audio('vo2');
    this.vo3 = game.add.audio('vo3');
    this.vo4 = game.add.audio('vo4');
    this.vo5 = game.add.audio('vo5');
    this.vo6 = game.add.audio('vo6');
    
    },
    
update: function() {
    
    //restart level and next level
    var rKey = game.input.keyboard.addKey(Phaser.Keyboard.R);
    var nKey = game.input.keyboard.addKey(Phaser.Keyboard.N);
    //var rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    
    rKey.onDown.add(this.restartGame, this);
    nKey.onDown.add(this.nextState, this);
    
    if(this.speech1.alpha === 0){
        this.display1();
    }
    
    else if(this.speech2.alpha === 0){
        this.display2();
    }
    
    else if(this.speech3.alpha === 0){
        this.display3();
    }
    
    else if(this.speech4.alpha === 0){
        this.display4();
    }
    
    else if(this.speech5.alpha === 0){
        this.display5();
    }
},

display1: function(){
    if(this.cursor.right.isDown){
        if(!flipFlop){
        this.speech1.alpha = 1; 
        this.vo2.play();    
            flipFlop = true;
        }
    }
    
    if (this.cursor.right.isUp){
        flipFlop = false;
    }
},
    
display2: function(){
    if(this.cursor.right.isDown){
        if(!flipFlop){
        this.speech2.alpha = 1; 
        this.vo1.play();
            flipFlop = true;
        }
    }
    if (this.cursor.right.isUp){
        flipFlop = false;
    }
},

display3: function(){
    if(this.cursor.right.isDown){
        if(!flipFlop){
        this.speech3.alpha = 1;
        this.vo4.play();
        game.add.tween(this.start).to({alpha: 0}, 1000).easing(Phaser.Easing.Exponential.Out).start();
            flipFlop = true;
        }
    }
    if (this.cursor.right.isUp){
        flipFlop = false;
    }
},
    
display4: function(){
    if(this.cursor.right.isDown){
        if(!flipFlop){
        this.speech4.alpha = 1;
        this.vo6.play();
            flipFlop = true;
        }
    }
    if (this.cursor.right.isUp){
        flipFlop = false;
    }
},
    
display5: function(){
    if(this.cursor.right.isDown){
        if(!flipFlop){
        this.speech5.alpha = 1;
        this.vo2.play();
        game.add.tween(this.mid).to({alpha: 0}, 1000).easing(Phaser.Easing.Exponential.Out).start();
        this.timer5313 = this.game.time.events.add(7000, this.nextState, this);
            flipFlop = true;
        }
    }
    if (this.cursor.right.isUp){
        flipFlop = false;
    }
},




nextState: function(){
    game.state.start('level5');
},
    
// Restart the game
restartGame: function() {
    // Start the 'main' state, which restarts the game
    game.state.start('menu');
},
    
};
