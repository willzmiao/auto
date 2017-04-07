var loadState = {

    
preload: function () {

// Add a 'loading...' label on the screen
var loadingLabel = game.add.text(game.width/2, 150,
            'loading...', { font: '30px Arial', fill: '#ffffff' });
        loadingLabel.anchor.setTo(0.5, 0.5);

    game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');

    
// Display the progress bar
//        var progressBar = game.add.sprite(game.width/2, 200, 'progressBar');
//        progressBar.anchor.setTo(0.5, 0.5);
//        game.load.setPreloadSprite(progressBar);
//        game.load.image('bird', 'assets/bird.png'); 
//        game.load.image('pipe', 'assets/pipe.png');

    },

create: function() {
// Go to the menu state 
    game.state.start('menu');
} 

};