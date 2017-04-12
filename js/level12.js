// Create our 'main' state that will contain the game
var level12State = {
 
preload: function() { 
        
    //game.load.spritesheet('robot_anim', 'assets/level12/robot_anim.png', 195.85, 245.59, 2);
    //game.load.spritesheet('robot_anim2', 'assets/level12/robot_anim2.png', 195.85, 245.59,4);
    game.load.image('party', 'assets/level12/robotparty1.png');
    game.load.spritesheet('conveyor', 'assets/level12/conveyor_robot.png', 1080, 972, 6);
    game.load.image('background', 'assets/act2bg.png');
    

    },

create: function() { 
    
    //game.stage.backgroundColor = '#000000';
    game.add.image(0, 0, 'background');
    //tell phaser which keys we want to use    
    this.cursor = game.input.keyboard.createCursorKeys();
    
    this.conveyor_analog1 = game.add.sprite(0, game.height/5, 'conveyor');
    var beat1 = this.conveyor_analog1.animations.add('beat1');
    this.conveyor_analog1.animations.play('beat1', 8, true);

    this.party = game.add.sprite(-50, game.height, 'party');
    
    this.timer1235 = game.time.events.add(1200, this.delayMove, this); 
    
    // sun moon animation along path
//    var moveSprite = this.game.add.sprite(-200, game.height/2-400, 'sun');
//    var tween = game.add.tween(moveSprite).to({
//        x: [-200, game.width/3, game.width*2/3, game.width+150],
//        y: [game.height/2-400, game.height/2-700, game.height/2-700, game.height/2-400],}, 4000,Phaser.Easing.Quadratic.InOut, true).interpolation(function(v, k){
//        return Phaser.Math.bezierInterpolation(v, k);}).loop().start();
//    
    this.changeTimer = this.game.time.events.add(12000, this.nextState, this);    

    },

update: function() {
    
    //    this.selectPill();

    var rKey = game.input.keyboard.addKey(Phaser.Keyboard.R);
    var nKey = game.input.keyboard.addKey(Phaser.Keyboard.N);
    rKey.onDown.add(this.restartGame, this);
    nKey.onDown.add(this.nextState, this);
    
    

},


delayMove: function(){
  
    //this.changeTimer = this.game.time.events.add(5000, this.nextState, this);
    this.timer98501 = game.time.events.loop(800, this.moveUps, this); 
    
},
    
moveUps: function(){
        
    game.add.tween(this.party).to({y:this.party.y-200},500,Phaser.Easing.Linear.InOut).start();  
    
},

restartGame: function() {
    // Start the 'menu' state, which restarts the game
    game.state.start('menu');
},

nextState: function(){
    game.state.start('level13');
},

};
