let canvas;

let world;
let keyboard = new Keyboard();
let fullscreenActive = false;
let level = levelStatus; 
let levelCounter = 0; 


function startGame(gameStatus, checkLevel) {
    initLevel(checkLevel);
    canvas = document.getElementById('canvas');
    startScreen = document.getElementById('start-screen');
    let endScreen = document.getElementById('game-over-screen');
    let gameWinScreen = document.getElementById('game-win-screen');

    checkGameStatus(gameStatus, gameWinScreen, endScreen);

    startScreen.classList.add('d-none');
    canvas.classList.remove('d-none');
    world = new World(canvas, keyboard, endScreen, gameWinScreen);
    console.log('My Character is', world.character);
}

function nextLevel(gameStatus){
    levelCounter++;
    startGame(gameStatus, levelCounter)
}


function checkGameStatus(gameStatus, gameWinScreen, endScreen) {
    if (gameStatus == 'lost') {
        endScreen.classList.add('d-none');
    }

    else if (gameStatus == 'win' || gameStatus == 'next-level') {
        gameWinScreen.classList.add('d-none');
    }
}


window.addEventListener("keydown", (event) => {
    setKeyboard(event, true);
});


window.addEventListener("keyup", (event) => {
    setKeyboard(event, false);
})

function setKeyboard(event,boolean){
    if (event.keyCode == 39) {
        keyboard.RIGHT = boolean;
    }
    if (event.keyCode == 37) {
        keyboard.LEFT = boolean;
    }
    if (event.keyCode == 38) {
        keyboard.UP = boolean;
    }
    if (event.keyCode == 40) {
        keyboard.DOWN = boolean;
    }
    if (event.keyCode == 32) {
        keyboard.SPACE = boolean;
    }

    if (event.keyCode == 68) {
        keyboard.D = boolean;
    }
}


function gameFullscreen() {
    let canvas = document.getElementById('canvas');
    let startScreen = document.getElementById('start-screen');

    canvas.style.height = '90vh';
    canvas.style.width = '100%';

    startScreen.style.height = '90vh';
    startScreen.style.width = '100%';
}


function gameNormalScreen() {
    let canvas = document.getElementById('canvas');
    let startScreen = document.getElementById('start-screen');

    canvas.style.height = '';
    canvas.style.width = '';

    startScreen.style.height = '';
    startScreen.style.width = '';
}


function fullscreen() {
    let fullscreen = document.getElementById('fullscreen');
    if (!fullscreenActive) {
        enterFullscreen(fullscreen);
        fullscreenActive = true;
    }
    else {
        exitFullscreen();
        fullscreenActive = false;

    }
}


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


function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();

    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
    gameNormalScreen();
}


document.addEventListener('fullscreenchange', onFullScreenChange);
document.addEventListener('webkitfullscreenchange', onFullScreenChange);
document.addEventListener('mozfullscreenchange', onFullScreenChange);
document.addEventListener('msfullscreenchange', onFullScreenChange);

function onFullScreenChange() {
    if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
        gameFullscreen();
    } else {
        gameNormalScreen();
    }
}