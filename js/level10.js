var level10State = {
    
 
preload: function() { 
        game.load.image('worker1', 'assets/worker1.png');
        game.load.image('worker2', 'assets/worker2.png');
        game.load.image('scene', 'assets/level10/scene.png');
        game.load.image('speech', 'assets/level10/speech1.png');
        game.load.image('text1', 'assets/level10/text1.png');
        
        game.load.audio('unsure','assets/level10/unsure.wav');
        game.load.audio('gobble','assets/level10/gobble.wav');
    },

create: function() { 
    
    game.stage.backgroundColor = '#71c5cf';
    
//    var label = game.add.text(game.width/5, 350,
//            'The salesman promises \nan 80% productivity gain...', { font: '60px Arial', fill: 'rgba(0,0,0,0.5)'});

    this.scene = game.add.sprite(game.width/2, game.height/2, 'scene');
    this.scene.anchor.set(0.5,0.5);
    
    this.text1 = game.add.sprite(game.width/2, 200, 'text1');
    this.text1.anchor.set(0.5,0.5);
    
    //this.timer94 = this.game.time.events.add(1000, this.unsure1, this);
    this.gobble = game.add.audio('gobble');
    
//    //var text = game.add.text(32, 32, '', { font: "15px Arial", fill: "#19de65" });
//    var label = game.add.text(game.width/5, 300,
//            'I love my job', { font: '20px Arial', fill: 'rgba(0,0,0,0.5)'});
    
    //nextLine();

    },

update: function() {
    
    //restart level and next level
    //var rKey = game.input.keyboard.addKey(Phaser.Keyboard.R);
    var nKey = game.input.keyboard.addKey(Phaser.Keyboard.N);
    //rKey.onDown.add(this.restartGame, this);
    nKey.onDown.add(this.nextState, this);
    
    var rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    rightKey.onDown.add(this.display2, this);
    
},
 
unsure1: function(){
  this.unsure.play();  
},
    
display2: function(){

        this.speech = game.add.sprite(game.width/2+100, game.height/2-75, 'speech');
        this.speech.anchor.set(0.5,0.5);
        this.gobble.play();
        //this.unsure.play();
        this.changeTimer = this.game.time.events.add(5000, this.nextState, this);
},

nextState: function(){
    game.state.start('level11');
},
    
};
