let canvas;

let world;
let keyboard = new Keyboard();
let fullscreenActive = false;


function startGame() {
    canvas = document.getElementById('canvas');
    startScreen = document.getElementById('start-screen');

    startScreen.classList.add('d-none');
    canvas.classList.remove('d-none');

    world = new World(canvas, keyboard);

    console.log('My Character is', world.character);
}


window.addEventListener("keydown", (event) => {
    if (event.keyCode == 39) {
        keyboard.RIGHT = true;
    }
    if (event.keyCode == 37) {
        keyboard.LEFT = true;
    }
    if (event.keyCode == 38) {
        keyboard.UP = true;
    }
    if (event.keyCode == 40) {
        keyboard.DOWN = true;
    }
    if (event.keyCode == 32) {
        keyboard.SPACE = true;
    }

    if (event.keyCode == 68) {
        keyboard.D = true;
    }
});


window.addEventListener("keyup", (event) => {
    if (event.keyCode == 39) {
        keyboard.RIGHT = false;
    }
    if (event.keyCode == 37) {
        keyboard.LEFT = false;
    }
    if (event.keyCode == 38) {
        keyboard.UP = false;
    }
    if (event.keyCode == 40) {
        keyboard.DOWN = false;
    }
    if (event.keyCode == 32) {
        keyboard.SPACE = false;
    }

    if (event.keyCode == 68) {
        keyboard.D = false;
    }
})


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

    canvas.style.height = '480px';
    canvas.style.width = '720px';

    startScreen.style.height = '480px';
    startScreen.style.width = '720px';
}


function fullscreen() {
    console.log('test');
    let fullscreen = document.getElementById('fullscreen');
    if (!fullscreenActive) {
        enterFullscreen(fullscreen);
        fullscreenActive=true;
    }
    else{
       exitFullscreen();
       fullscreenActive=false;
       
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