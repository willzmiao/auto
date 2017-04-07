// Create our 'main' state that will contain the game
var level12State = {
 
preload: function() { 
        
    game.load.spritesheet('robot_anim', 'assets/level12/robot_anim.png', 195.85, 245.59, 2);
    //game.load.spritesheet('robot_anim2', 'assets/level12/robot_anim2.png', 195.85, 245.59,4);
    game.load.spritesheet('heart', 'assets/heart.png', 68, 62, 6);
    game.load.image('robot', 'assets/level12/robot.png');
    game.load.image('horse', 'assets/level12/horse.png');
    game.load.image('sun', 'assets/level12/sun.png');
    
    },

create: function() { 
    
    game.stage.backgroundColor = '#71c5cf';
    
    //tell phaser which keys we want to use    
    this.cursor = game.input.keyboard.createCursorKeys();
    
    var label = game.add.text(game.width/4, game.height/8,
            'WHAT', { font: '40px Arial', fill: 'rgba(0,0,0,0.5)'});
        
    var label2 = game.add.text(game.width/4, game.height/8+200,
            'This machine is incredible', { font: '40px Arial', fill: 'rgba(0,0,0,0.5)'});
        
//    var robot_anim = game.add.sprite(game.width/2-150, game.height/2-200, 'robot_anim');
//    var beat = robot_anim.animations.add('beat');
//    robot_anim.animations.play('beat', 4, true);
    
//    var robot_anim = game.add.sprite(game.width/2-150, game.height/2-200, 'robot_anim');
//    var beat = robot_anim.animations.add('beat');
//    robot_anim.animations.play('beat', 4, true);

//    var robot_anim = game.add.sprite(game.width/2-150, game.height/2-200, 'robot_anim');
//    var beep = heart.animations.add('beep');
//    robot_anim.animations.play('beep', 2, true);

    var robot = game.add.sprite(50, game.height/2-200, 'robot');
    
    this.timer = game.time.events.loop(500, this.createHorse, this); 
    
    // sun moon animation along path
    var moveSprite = this.game.add.sprite(-200, game.height/2-400, 'sun');
    var tween = game.add.tween(moveSprite).to({
        x: [-200, game.width/3, game.width*2/3, game.width+150],
        y: [game.height/2-400, game.height/2-700, game.height/2-700, game.height/2-400],}, 4000,Phaser.Easing.Quadratic.InOut, true).interpolation(function(v, k){
        return Phaser.Math.bezierInterpolation(v, k);}).loop().start();
    
    this.changeTimer = this.game.time.events.add(7000, this.nextState, this);
    },

update: function() {
    
    //    this.selectPill();

    var rKey = game.input.keyboard.addKey(Phaser.Keyboard.R);
    var nKey = game.input.keyboard.addKey(Phaser.Keyboard.N);
    rKey.onDown.add(this.restartGame, this);
    nKey.onDown.add(this.nextState, this);
    
    //robot_anim.animations.play('beat', 4, true);
    //    var robot_anim = game.add.sprite(game.width/2-150, game.height/2-200, 'robot_anim');
    //    var beat = robot_anim.animations.add('beat');
    //    robot_anim.animations.play('beat', 4, true);
    
    //    var heart = game.add.sprite(game.width/2-150, game.height/2-200, 'heart');
    //    var beat = heart.animations.add('beat');
    //    heart.animations.play('beat', 4, false);
    
//    if (this.timer1Stopped) {
//      this.timer1Stopped = false;
//      this.timer1 = this.game.time.create(true);
//      this.timer1.loop(.01, this.plot, this);
//      this.timer1.start();
//    }

},



    
createHorse: function(){
        
    this.horse = game.add.sprite(300, game.height/2-50, 'horse');
    game.physics.arcade.enable(this.horse);
    
    game.add.tween(this.horse).to({x:1200},2000,Phaser.Easing.Linear.InOut).start();  
},


//selectPill: function(){
//    
//    if(this.cursor.right.isDown){
//        //this.redpill.scale(5,5);
//        this.redpill.scale.setTo(5, 5);
//        //var tween = game.add.tween(redpill).to( { scale: 1.5 }, 2000, "Linear", true, 0, -1);
//    }
//    else if(this.cursor.left.isDown){
//        //this.bluepill.scale(5,5);
//        this.bluepill.scale.setTo(5, 5);
//    }
//},

restartGame: function() {
    // Start the 'menu' state, which restarts the game
    game.state.start('menu');
},

nextState: function(){
    game.state.start('level13');
},

};
