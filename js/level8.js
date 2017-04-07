var level8State = {
    
 
preload: function() { 
        game.load.image('newspaper', 'assets/newspaper.png');
        game.load.image('coupon', 'assets/level8/coupon.png');
        game.load.image('spam', 'assets/level8/spam.png');
        game.load.image('text1', 'assets/level8/text1.png');
        //game.load.image('worker2', 'assets/worker2.png');
        game.load.spritesheet('conveyor_automated', 'assets/level14/conveyor_automated_sheet.png', 691, 569, 6);
    
        game.load.audio('meh','assets/level8/meh.wav');
        game.load.audio('mhmm','assets/level8/mhmm.wav');
    },

create: function() { 
    
    game.stage.backgroundColor = '#71c5cf';
    this.cursor = game.input.keyboard.createCursorKeys();
    
    
    this.robot = game.add.sprite(game.width/2, game.height/2, 'newspaper');
    this.robot.anchor.set(0.5,0.5);
    
    this.coupon1 = game.add.sprite(game.width/2, game.height/2, 'coupon');
    this.coupon1.anchor.set(0.5,0.5);
    
    this.spam1 = game.add.sprite(game.width/2, game.height/2, 'spam');
    this.spam1.anchor.set(0.5,0.5);
    
    this.spam2 = game.add.sprite(game.width/2, game.height/2+100, 'spam');
    this.spam2.anchor.set(0.5,0.5);
    
    game.physics.arcade.enable(this.coupon1);
    game.physics.arcade.enable(this.spam1);
    game.physics.arcade.enable(this.spam2);
    
    //timer to switch to next level
    //this.changeTimer = this.game.time.events.add(7000, this.nextState, this);
    
    var flipFlop;
    
    this.meh = game.add.audio('meh');
    this.mhmm = game.add.audio('mhmm');
    
    coupon1.checkWorldBounds = true;
    coupon1.outOfBoundsKill = true;
    spam1.checkWorldBounds = true;
    spam1.outOfBoundsKill = true;
    spam2.checkWorldBounds = true;
    spam2.outOfBoundsKill = true;

    
    },

update: function() {
    
    //restart level and next level
    //var rKey = game.input.keyboard.addKey(Phaser.Keyboard.R);
    var nKey = game.input.keyboard.addKey(Phaser.Keyboard.N);
    //rKey.onDown.add(this.restartGame, this);
    nKey.onDown.add(this.nextState, this);

    
    if(this.spam2.alive){
        this.display1();
    }
    
    else if(this.spam1.alive){
        this.display2();
    }
    
    else if(this.coupon1.alive){
        this.display3();
    }
    
},
    

kill1: function(){
    this.spam2.kill();
},
    
kill2: function(){
    this.spam1.kill();
},

kill3: function(){
    this.coupon1.kill();
},
    
display1: function(){
    if(this.cursor.right.isDown){
        if(!flipFlop){
        //this.speech1.alpha = 1;
        var t1 = this.add.tween(this.spam2).to({x: 2000}, 500,Phaser.Easing.Sinusoidal.InOut).start();
        t1.onComplete.add(this.kill1,this);
        this.meh.play();
        //this.spam2.kill();
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
        var t2 = this.add.tween(this.spam1).to({x: 2000}, 500,Phaser.Easing.Sinusoidal.InOut).start();
        t2.onComplete.add(this.kill2,this);
        this.meh.play();
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
        var t3= this.add.tween(this.coupon1).to({x: 2000}, 500,Phaser.Easing.Sinusoidal.InOut).start();
        t3.onComplete.add(this.kill3,this);
        var conveyor_automated1 = game.add.sprite(200, game.height/3-150, 'conveyor_automated');
        //this.conveyor_automated1.anchor.set(0.5,0.5);
        var beat5 = conveyor_automated1.animations.add('beat5');
        conveyor_automated1.animations.play('beat5', 6, true);
                    
        this.meh.play();    
        //this.mhmm.play();
        this.timer51 = this.game.time.events.add(2000, this.mhmm1, this);
        flipFlop = true;
        }
    }
    if (this.cursor.right.isUp){
        flipFlop = false;
    }
},
    
mhmm1: function(){
//    var label = game.add.text(game.width/5, 150,
//        'Maybe these machines \ncould do the trick', { font: '60px Arial', fill: 'rgba(0,0,0,0.5)'});
    
    this.text1 = game.add.sprite(game.width/2, 200, 'text1');
    this.text1.anchor.set(0.5,0.5);
    
  this.mhmm.play();  
},
    
    

nextState: function(){
    game.state.start('level9');
},
    
};
