// Create our 'main' state that will contain the game
var level22State = {

 
preload: function() { 

    game.load.image('background', 'assets/level22/background.png');
    game.load.image('text1', 'assets/level22/text1.png');
        
    },

create: function() { 
    
    game.stage.backgroundColor = '#71c5cf';
    
    //tell phaser which keys we want to use    
    this.cursor = game.input.keyboard.createCursorKeys();
            
    this.background = game.add.sprite(0, 0, 'background');
    
    },

update: function() {
    
    var rKey = game.input.keyboard.addKey(Phaser.Keyboard.R);
    var nKey = game.input.keyboard.addKey(Phaser.Keyboard.N);
    rKey.onDown.add(this.restartGame, this);
    nKey.onDown.add(this.nextState, this);

    var rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    rightKey.onDown.add(this.display2, this);

},


display2: function(){
    
    this.text1 = game.add.sprite(300, 300, 'text1');
    this.timer230948 = this.game.time.events.add(9000, this.nextState, this);
    
},

restartGame: function() {
    // Start the 'menu' state, which restarts the game
    game.state.start('menu');
},

nextState: function(){
    game.state.start('level23');
},

};
