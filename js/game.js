let canvas;
const MAX_LEVELS = 2;

let gameIsMuted = false;
let world;
let keyboard = new Keyboard();
let fullscreenActive = false;
let level = levelStatus;
let levelCounter = 0;
const mediaQuery = window.matchMedia('(min-width: 660px)');

/**
 * @typedef {Object} DomElements
 * @property {HTMLElement} startGameBtn - The play again button element.
 * @property {HTMLElement} nextLevelBtn - The next level button element.
 * @property {HTMLCanvasElement} canvas - The game canvas element.
 * @property {HTMLElement} startScreen - The start screen element.
 * @property {HTMLElement} endScreen - The game over screen element.
 * @property {HTMLElement} gameWinScreen - The game win screen element.
 */

/**
 * @function getIds
 * @description Retrieves references to various DOM elements used in the game.
 * @returns {DomElements} An object containing references to DOM elements.
 */
function getIds() {
    return {
        startGameBtn: document.getElementById('play-again-btn'),
        nextLevelBtn: document.getElementById('next-level-btn'),
        canvas: document.getElementById('canvas'),
        startScreen: document.getElementById('start-screen'),
        endScreen: document.getElementById('game-over-screen'),
        gameWinScreen: document.getElementById('game-win-screen')
    };
}

/**
 * @function checkIfGameCanStarts
 * @description Checks if the game can start based on screen size and initializes the level.
 * @param {string} gameStatus - The current status of the game ('win', 'lost', 'next-level').
 */
function checkIfGameCanStarts(gameStatus) {
    if (mediaQuery.matches) {
        initLevel();
        const ids = getIds();
        checkGameStatus(gameStatus, ids.gameWinScreen, ids.endScreen);
        startGame(ids);
    } else {
        errorMessage();
    }
}

/**
 * Toggles the mute state of the game.
 * Mutes all sounds if the game is not currently muted, and unmutes them if it is.
 */
function getMute() {
    const muteImg = document.querySelector('.mute-img');
    if (world != undefined) {
        if (!gameIsMuted) {
            gameIsMuted = true;
            world.stopSounds(true);
            muteImg.classList.add('muted');
        } else {
            gameIsMuted = false;
            world.stopSounds(false);
            muteImg.classList.remove('muted');
        }
    }
}

/**
 * @function startGame
 * @description Starts the game by updating the UI and initializing the World instance.
 * @param {DomElements} ids - An object containing references to DOM elements.
 */
function startGame(ids) {
    ids.nextLevelBtn.classList.remove('d-none');
    ids.startGameBtn.innerText = 'Play Again';
    ids.startScreen.classList.add('d-none');
    ids.canvas.classList.remove('d-none');
    world = new World(ids.canvas, keyboard, ids.endScreen, ids.gameWinScreen);

    if (gameIsMuted) world.stopSounds(true);
}

/**
 * @function errorMessage
 * @description Displays an error message when the screen size is too small.
 */
function errorMessage() {
    document.getElementById('rotate-phone').classList.add('to_middle');

    setTimeout(() => {
        document.getElementById('rotate-phone').classList.remove('to_middle');
    }, 3000);
}

/**
 * @function nextLevel
 * @description Proceeds to the next level or resets if all levels are completed.
 * @param {string} gameStatus - The current status of the game ('win', 'lost', 'next-level').
 */
function nextLevel(gameStatus) {
    let nextLevelBtn = document.getElementById('next-level-btn');
    let startGameBtn = document.getElementById('play-again-btn');

    if (levelCounter === MAX_LEVELS) {
        nextLevelBtn.classList.add('d-none');
        levelCounter = 0;
        startGameBtn.innerText = 'You win all levels.. Play Again';
    } else {
        levelCounter++;
        checkIfGameCanStarts(gameStatus);
    }
}

/**
 * @function checkGameStatus
 * @description Updates the UI based on the game status.
 * @param {string} gameStatus - The current status of the game ('win', 'lost', 'next-level').
 * @param {HTMLElement} gameWinScreen - The element for the game win screen.
 * @param {HTMLElement} endScreen - The element for the game over screen.
 */
function checkGameStatus(gameStatus, gameWinScreen, endScreen) {
    if (gameStatus === 'lost') {
        endScreen.classList.add('d-none');
    } else if (gameStatus === 'win' || gameStatus === 'next-level') {
        gameWinScreen.classList.add('d-none');
    }
}

/**
 * @function gameFullscreen
 * @description Adjusts the canvas and start screen size for fullscreen mode.
 */
function gameFullscreen() {
    let canvas = document.getElementById('canvas');
    let startScreen = document.getElementById('start-screen');

    canvas.style.height = '90vh';
    canvas.style.width = '100%';

    startScreen.style.height = '90vh';
    startScreen.style.width = '100%';
}

/**
 * @function gameNormalScreen
 * @description Resets the canvas and start screen size to normal.
 */
function gameNormalScreen() {
    let canvas = document.getElementById('canvas');
    let startScreen = document.getElementById('start-screen');

    canvas.style.height = '';
    canvas.style.width = '';

    startScreen.style.height = '';
    startScreen.style.width = '';
}

/**
 * @function fullscreen
 * @description Toggles fullscreen mode.
 */
function fullscreen() {
    let fullscreen = document.getElementById('fullscreen');
    if (!fullscreenActive) {
        enterFullscreen(fullscreen);
        fullscreenActive = true;
    } else {
        exitFullscreen();
        fullscreenActive = false;
    }
}

/**
 * @function enterFullscreen
 * @description Enters fullscreen mode for a specified element.
 * @param {HTMLElement} element - The element to enter fullscreen mode.
 */
function enterFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.msRequestFullscreen) {      // for IE11 (remove June 15, 2022)
        element.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) {  // iOS Safari
        element.webkitRequestFullscreen();
    }

    gameFullscreen();
}

/**
 * @function exitFullscreen
 * @description Exits fullscreen mode.
 */
function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
    gameNormalScreen();
}

/**
 * @function onFullScreenChange
 * @description Handles changes in fullscreen mode and adjusts the game screen accordingly.
 */
function onFullScreenChange() {
    if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
        gameFullscreen();
        fullscreenActive = true;
    } else {
        gameNormalScreen();
        fullscreenActive = false;
    }
}

// Event listeners for fullscreen change
document.addEventListener('fullscreenchange', onFullScreenChange);
document.addEventListener('webkitfullscreenchange', onFullScreenChange);
document.addEventListener('mozfullscreenchange', onFullScreenChange);
document.addEventListener('msfullscreenchange', onFullScreenChange);
