var level19State = {
    
 
preload: function() { 
        game.load.image('mole', 'assets/level19/mole.png');
        game.load.image('hand', 'assets/level19/hand.png');
        game.load.image('speech', 'assets/level19/speech.png');
        game.load.image('background', 'assets/level19/background.png');
        
        game.load.spritesheet('worker_anim', 'assets/level19/worker_anim.png', 95.17, 249.5, 9);
    },

create: function() { 
    
    game.stage.backgroundColor = '#71c5cf';
    game.add.image(0, 0, 'background');
    this.cursor = game.input.keyboard.createCursorKeys();
    
    var label = game.add.text(game.width/5, 350,
            'Jeb\'s really been \non my case recently', { font: '60px Arial', fill: '#ffffff'});

    this.timer = game.time.events.loop(3000, this.moveHand, this); 
    
    this.mole = game.add.sprite(game.width/2,game.height*4/6, 'mole');
    game.physics.arcade.enable(this.mole);
    var playerX;
    
    this.mole.body.collideWorldBounds = true;

    },

update: function() {
    
    //restart level and next level
    var rKey = game.input.keyboard.addKey(Phaser.Keyboard.R);
    var nKey = game.input.keyboard.addKey(Phaser.Keyboard.N);
    rKey.onDown.add(this.restartGame, this);
    nKey.onDown.add(this.nextState, this);

    this.movePlayer();
    
    game.physics.arcade.overlap(this.mole, this.hand, this.killPipe, null, this);
},
    
moveHand: function(){
    
    //var handx = game.rnd.between(-200, game.width/2);
    var handx = this.mole.x - 200;
    
    this.hand = game.add.sprite(handx, -500, 'hand');
    game.physics.arcade.enable(this.hand);
    
    //game.add.tween(this.hand).to({y: game.height/2}, 1500,Phaser.Easing.Exponential.Out).start();    
    game.add.tween(this.hand).to({y: this.mole.y-600},300).to({y:-10000},8000,Phaser.Easing.Exponential.Out).start();  
},
    
movePlayer: function(){
    if(this.cursor.right.isDown){
        this.mole.body.x += 10;
    }
    else if(this.cursor.left.isDown){
        this.mole.body.x -= 10;
    }   
},
    
killPipe: function(mole, hand){
    
    //this.worker.kill();
    this.speech = game.add.sprite(mole.x, mole.y-200, 'speech');
    game.add.tween(this.speech).to({alpha:0},1000,Phaser.Easing.Exponential.Out).start();  
    //this.input.disabled = true;

//    var heart = game.add.sprite(game.width/2-150, game.height/2-200, 'worker_anim');
//    var beat = heart.animations.add('beat');
//    heart.animations.play('beat', 4, false);

},
    


nextState: function(){
    game.state.start('level20');
},
    
restartGame: function() {
    // Start the 'menu' state, which restarts the game
    game.state.start('menu');
},


};
