// Create our 'main' state that will contain the game
var level25State = {

 
preload: function() { 

    game.load.image('title', 'assets/level25/title.png');
    game.load.image('credits1', 'assets/level25/credits1.png');
    game.load.image('credits2', 'assets/level25/credits2.png');
    game.load.image('credits3', 'assets/level25/credits3.png');
    game.load.image('credits4', 'assets/level25/credits4.png');
    
    //game.load.audio('exit','assets/sound/exit.mp3');
    },

create: function() { 
        
    game.stage.backgroundColor = '#000000';
    this.cursor = game.input.keyboard.createCursorKeys();
    
    //this.timer10239 = this.game.time.events.add(1000, this.moveUps, this);
    this.timer5139 = this.game.time.events.add(5000, this.moveUps2, this);
    this.timer113239 = this.game.time.events.add(8000, this.moveUps3, this);
    this.timer113239 = this.game.time.events.add(11000, this.moveUps4, this);
    
    this.credits = game.add.sprite(game.width/2, 300, 'title');
    this.credits.anchor.set(0.5,0.5);
    
    this.credits1 = game.add.sprite(game.width/2, 500, 'credits1');
    this.credits1.anchor.set(0.5,0);
    game.add.tween(this.credits1).to({alpha: 0}, 500, Phaser.Easing.Exponential.InOut,false,4000).start();
    
    
    this.timer2339 = this.game.time.events.add(18000, this.nextState, this);


    },

update: function() {
    
    var rKey = game.input.keyboard.addKey(Phaser.Keyboard.R);
    var nKey = game.input.keyboard.addKey(Phaser.Keyboard.N);
    rKey.onDown.add(this.restartGame, this);
    nKey.onDown.add(this.nextState, this);

    

    if(!game.global.act5.isPlaying){
        game.global.act5.play();
    }

    
},

    
restartGame: function() {
    // Start the 'menu' state, which restarts the game
    game.state.start('menu');
},

nextState: function(){
    game.global.act5.stop();
    game.state.start('menu');
},
    
        
    
    
moveUps: function(){
    
    this.credits1 = game.add.sprite(game.width/2,500, 'credits1');
    this.credits1.alpha = 0;
    game.add.tween(this.credits1).to({alpha: 1}, 1000).easing(Phaser.Easing.Exponential.Out).start();
    this.credits1.anchor.set(.5,0);
    
    game.add.tween(this.credits1).to({alpha: 0}, 1000, Phaser.Easing.Exponential.InOut,false,2000).start();
    
    //game.add.tween(this.credits1).to({alpha: 0}, 1000, ).easing(Phaser.Easing.Exponential.Out).start();

},
    
moveUps2: function(){
    
    this.credits2 = game.add.sprite(game.width/2,500, 'credits2');
    this.credits2.alpha = 0;
    game.add.tween(this.credits2).to({alpha: 1}, 1000).easing(Phaser.Easing.Exponential.Out).start();
    this.credits2.anchor.set(.5,0);
    
    game.add.tween(this.credits2).to({alpha: 0}, 1000, Phaser.Easing.Exponential.InOut,false,3000).start();
},

moveUps3: function(){
    
    this.credits3 = game.add.sprite(game.width/2,500, 'credits3');
    this.credits3.alpha = 0;
    game.add.tween(this.credits3).to({alpha: 1}, 1000).easing(Phaser.Easing.Exponential.Out).start();
    this.credits3.anchor.set(.5,0);    
    
    game.add.tween(this.credits3).to({alpha: 0}, 1000, Phaser.Easing.Exponential.InOut,false,3000).start();
},
    
moveUps4: function(){
    
    this.credits4 = game.add.sprite(game.width/2,500, 'credits4');
    this.credits4.alpha = 0;
    game.add.tween(this.credits4).to({alpha: 1}, 1000).easing(Phaser.Easing.Exponential.Out).start();
    this.credits4.anchor.set(.5,0);    
    
    game.add.tween(this.credits).to({alpha: 0}, 1000, Phaser.Easing.Exponential.InOut,false,5000).start();
    game.add.tween(this.credits4).to({alpha: 0}, 1000, Phaser.Easing.Exponential.InOut,false,5000).start();
    
},


};
