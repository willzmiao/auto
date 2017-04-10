// Initialize Phaser
//var game = new Phaser.Game(800, 800);
var game = new Phaser.Game(1080, 1920, Phaser.AUTO, 'gameDiv');
//var game = new Phaser.Game(540, 960, Phaser.AUTO, 'gameDiv');
//var game = new Phaser.Game(360, 640, Phaser.AUTO, 'gameDiv');


// Define our global variable -- DO NOT TOUCH
game.global = {
    score: 0
};


// Add all the states
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('chooser',chooserState);
game.state.add('level1', level1State);
game.state.add('level2', level2State);
game.state.add('level3', level3State);
game.state.add('level4', level4State);
game.state.add('level5', level5State);
game.state.add('level6', level6State);
//game.state.add('level7', level7State);
game.state.add('level8', level8State);
game.state.add('level9', level9State);
game.state.add('level10', level10State);
game.state.add('level11', level11State);
game.state.add('level12', level12State);
game.state.add('level13', level13State);
game.state.add('level14', level14State);
game.state.add('level15', level15State);
game.state.add('level16', level16State);
game.state.add('level17', level17State);
game.state.add('level18', level18State);
game.state.add('level19', level19State);
game.state.add('level20', level20State);
game.state.add('level21', level21State);
game.state.add('level22', level22State);
game.state.add('level23', level23State);
game.state.add('level24', level24State);
game.state.add('closing', closingState);


// Start the 'boot' state
game.state.start('boot');