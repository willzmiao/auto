// Create our 'main' state that will contain the game
var level18State = {

 
preload: function() { 
        game.load.image('stopsign', 'assets/level17/stop_sign.png');
        game.load.image('comp1', 'assets/level18/comp1.png');
        game.load.image('comp2', 'assets/level18/comp2.png');
        game.load.image('comp3', 'assets/level18/comp3.png');
        game.load.image('cursor1', 'assets/level18/cursor.png');
        game.load.image('line', 'assets/transparent_line.png');
        
    },

create: function() { 
    
    game.stage.backgroundColor = '#71c5cf';
    
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

    },

update: function() {
    
    this.moveCursor();
    game.physics.arcade.overlap(this.line, this.cursor1, this.display2, null, this);
    
    var rKey = game.input.keyboard.addKey(Phaser.Keyboard.R);
    var nKey = game.input.keyboard.addKey(Phaser.Keyboard.N);
    rKey.onDown.add(this.restartGame, this);
    nKey.onDown.add(this.nextState, this);

},

display1: function(){

        this.comp2 = game.add.sprite(game.width/2, game.height/2, 'comp2');
        this.comp2.anchor.set(0.5,0.5);
        game.world.sendToBack(this.comp2);
        this.comp1.kill();
        this.line = game.add.sprite(0, game.height/2-250, 'line');
        game.physics.arcade.enable(this.line);
    
        game.add.tween(this.comp2.scale).to({x: 2, y: 2}, 500,Phaser.Easing.Sinusoidal.Out).start();
        game.add.tween(this.comp2).to({y: this.comp2.y+400}, 500,Phaser.Easing.Sinusoidal.Out).start();

},
    
display2: function(){

        this.comp3 = game.add.sprite(game.width/2, game.height/2+400, 'comp3');
        this.comp3.anchor.set(0.5,0.5);
        this.comp3.scale.setTo(2,2);
        game.world.sendToBack(this.comp3);
        this.comp2.kill();
        this.changeTimer = this.game.time.events.add(7000, this.nextState, this);
},

moveCursor: function(){
    if(this.cursor.left.isDown){
        this.cursor1.body.x -= 4;
    }
    else if(this.cursor.right.isDown){
        this.cursor1.body.x += 4;
    }
    if(this.cursor.up.isDown){
        this.cursor1.body.y -= 4;
    }
    else if(this.cursor.down.isDown){
        this.cursor1.body.y += 4;
    }   
},
    

restartGame: function() {
    // Start the 'menu' state, which restarts the game
    game.state.start('menu');
},

nextState: function(){
    game.state.start('level19');
},

};
