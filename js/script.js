/* global monogatari */

// Define the messages used in the game.
monogatari.action('message').messages({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action('notification').notifications({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action('particles').particles({

});

// Define the canvas objects used in the game
monogatari.action('canvas').objects({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration('credits', {
	"Developers": {
		"Artist": "Skashi",
		"Scenario": "Nanonto",
	},
	"Special Thanks to": {
		"Person Status": ["Person A", "Person B"],
	}
});


// Define the images that will be available on your game's image gallery
monogatari.assets('gallery', {

});

// Define the music used in the game.
monogatari.assets('music', {
	'yandere_bgm': 'Vengeance.mp3',
	'quirky_bgm': 'Quirky.ogg',
});

// Define the voice files used in the game.
monogatari.assets('voices', {
	'yandere_laugh': 'yandere_laugh.mp3'
});

// Define the sounds used in the game.
monogatari.assets('sounds', {

});

// Define the videos used in the game.
monogatari.assets('videos', {

});

// Define the images used in the game.
monogatari.assets('images', {

});

// Define the backgrounds for each scene.
monogatari.assets('scenes', {

});


// Define the Characters
monogatari.characters({
	'y': {
		name: 'Yui',
		color: '#5bcaff'
	},

	'yoom': {
		name: 'Yoom',
		color: '#F9ECD7',
		directory: 'yoom',
		sprites: {
			shake: 'gif/cola.gif',
			cake: 'gif/cake.gif',
			run: 'gif/run.gif',
		},
	},

	// 24/12/2024
	'non': {
		name: 'N0N',
		color: '#7896F6',
		directory: 'non',
        sprites: {
			happy: 'happy.svg',
			angry: 'angry.png',
			blushed: 'blushed.png',
			happy: 'happy.png',
			shocked: 'shocked.png',
			sick: 'sick.png',
			smirk: 'smirk.png',
			tired: 'tired.png',
			xd: 'xd.png',
			yandere: 'yandere.png',
        },
        expressions: {
            happy: 'expressions/happy.svg',
            angry: 'expressions/angry.svg',
            blushed: 'expressions/blushed.svg',
            shocked: 'expressions/shocked.svg',
            sick: 'expressions/sick.svg',
            smirk: 'expressions/smirk.svg',
            tired: 'expressions/tired.svg',
            xd: 'expressions/xd.svg',
            yandere: 'expressions/yandere.svg',
        },
        default_expression: 'happy',
	},
});

monogatari.script({
	// The game starts here.
	'Start': [
		'show scene #f7f6f6 with fadeIn',
		'show notification Welcome',
		'Once there was a world unbeknownst to human',
		"show character non happy at right with fadeIn",
		"non:happy Hi there! I'm happy today!",
		// "hide character non with fadeOut",
		"show character non angry at left with fadeIn",
		"non:angry Now I'm angry!",
		// "hide character non with fadeOut",
		"show character non yandere at right with fadeIn",
		"play music yandere_bgm loop with fade 3",
		"play voice yandere_laugh with fade 3",
		"non: Imma kill you!",
		"stop music yandere_bgm",
		"play music quirky_bgm loop with fade 3",
		"show character yoom shake at left with fadeIn",
		"yoom: Don't be too hasty! Have a cola!",
		"show character yoom cake at center with fadeIn",
		"yoom: Eat the cake yum!",
		"show character non shocked at left with fadeIn",
		"non: Huh? What? WHO ARE YOU?",
		"show character yoom run at right with fadeIn",
		"yoom: Lmao bye",
		"stop music quirky_bgm",
		// {
		// 	'Input': {
		// 		'Text': 'What is your name?',
		// 		'Validation': function (input) {
		// 			return input.trim().length > 0;
		// 		},
		// 		'Save': function (input) {
		// 			this.storage({
		// 				player: {
		// 					name: input
		// 				}
		// 			});
		// 			return true;
		// 		},
		// 		'Revert': function () {
		// 			this.storage({
		// 				player: {
		// 					name: ''
		// 				}
		// 			});
		// 		},
		// 		'Warning': 'You must enter a name!'
		// 	}
		// },
		// 'y Hi {{player.name}} Welcome to Monogatari!',
		// {
		// 	'Choice': {
		// 		'Dialog': 'y Have you already read some documentation?',
		// 		'Yes': {
		// 			'Text': 'Yes',
		// 			'Do': 'jump Yes'
		// 		},
		// 		'No': {
		// 			'Text': 'No',
		// 			'Do': 'jump No'
		// 		}
		// 	}
		// }
		'end'
	],

	'Yes': [
		'y Thats awesome!',
		'y Then you are ready to go ahead and create an amazing Game!',
		'y I can’t wait to see what story you’ll tell!',
		'end'
	],

	'No': [

		'y You can do it now.',

		'show message Help',

		'y Go ahead and create an amazing Game!',
		'y I can’t wait to see what story you’ll tell!',
		'end'
	]
});