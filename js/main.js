'use strict';
/* global Monogatari */
/* global monogatari */

/**
 * =============================================================================
 * This is the file where you should put all your custom JavaScript code,
 * depending on what you want to do, there are 3 different places in this file
 * where you can add code.
 *
 * 1. Outside the $_ready function: At this point, the page may not be fully
 *    loaded yet, however you can interact with Monogatari to register new
 *    actions, components, labels, characters, etc.
 *
 * 2. Inside the $_ready function: At this point, the page has been loaded, and
 *    you can now interact with the HTML elements on it.
 *
 * 3. Inside the init function: At this point, Monogatari has been initialized,
 *    the event listeners for its inner workings have been registered, assets
 *    have been preloaded (if enabled) and your game is ready to be played.
 *
 * You should always keep the $_ready function as the last thing on this file.
 * =============================================================================
 **/

const { $_ready, $_ } = Monogatari;

// 1. Outside the $_ready function:

monogatari.component ('loading-screen').template (() => {
	return `
		<div class="loading-screen">
			<div class="spinner"></div>
			<img src="../assets/characters/yoom/cola.gif" alt="Loading..." class="loading-gif">
			<h2>Loading...</h2>
			<p>Please wait while we load your adventure...</p>
		</div>
	`;
});

monogatari.component ('main-screen').template (() => {
	return `
		<h1 class="title-screen">Void Sages and The Witches of Scarlet Moon</h1>
		<main-menu></main-menu>
	`;
});

$_ready (() => {
	// 2. Inside the $_ready function:

	monogatari.init ('#monogatari').then (() => {
		// 3. Inside the init function:
	});
});
