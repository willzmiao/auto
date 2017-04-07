// Create our 'main' state that will contain the game
var level20State = {

 
preload: function() { 
        game.load.image('bubble1', 'assets/level20/bubble1.png');
        game.load.image('bubble2', 'assets/level20/bubble2.png');
        game.load.image('jim', 'assets/level20/jim.png');
        game.load.image('jim_shadow', 'assets/level20/jim_shadow.png');
        
        
    },

create: function() { 
    
    game.stage.backgroundColor = '#71c5cf';
    
    //tell phaser which keys we want to use    
    this.cursor = game.input.keyboard.createCursorKeys();
    
        
//    var label = game.add.text(game.width/5-300, 350,
//            'z', { font: '60px Arial', fill: 'rgba(0,0,0,0.5)'});
//    
    
    this.jim_shadow = game.add.sprite(game.width/2-300, game.height/2+600, 'jim_shadow');
    this.jim_shadow.anchor.setTo(0, 1);
    this.jim = game.add.sprite(game.width/2, game.height/2+600, 'jim');
    this.jim.anchor.setTo(0, 1);
    
    this.speech1 = game.add.sprite(game.width/2, game.height/2-500, 'bubble1');
    this.speech2 = game.add.sprite(game.width/2-50, game.height/2-550, 'bubble2');
    this.speech3 = game.add.sprite(game.width/2, game.height/2-600, 'bubble1');
    this.speech4 = game.add.sprite(game.width/2-50, game.height/2-650, 'bubble2');
    
    //game.physics.arcade.enable(this.speech1);
    this.speech1.alpha = 0;
    this.speech2.alpha = 0;
    this.speech3.alpha = 0;
    this.speech4.alpha = 0;
   
    var flipFlop;

    },

update: function() {
    
    var rKey = game.input.keyboard.addKey(Phaser.Keyboard.R);
    var nKey = game.input.keyboard.addKey(Phaser.Keyboard.N);
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

    
},

display1: function(){
    if(this.cursor.right.isDown){
        if(!flipFlop){
        this.speech1.alpha = 1; 
        //this.jim_shadow.scale.setTo(0.75);
        game.add.tween(this.jim_shadow.scale).to({x: .75, y: .75}, 500,Phaser.Easing.Sinusoidal.Out).start();
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
        //this.jim_shadow.scale.setTo(0.5);
        game.add.tween(this.jim_shadow.scale).to({x: .5, y: .5}, 500,Phaser.Easing.Sinusoidal.Out).start();
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
        //this.jim_shadow.scale.setTo(0.25);
        game.add.tween(this.jim_shadow.scale).to({x: .25, y: .25}, 500,Phaser.Easing.Sinusoidal.Out).start();
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
        game.add.tween(this.jim_shadow.scale).to({x: .1, y: .1}, 500,Phaser.Easing.Sinusoidal.Out).start();
            flipFlop = true;
        }
    }
    if (this.cursor.right.isUp){
        flipFlop = false;
    }
},
    

restartGame: function() {
    // Start the 'menu' state, which restarts the game
    game.state.start('menu');
},

nextState: function(){
    game.state.start('level21');
},

};
