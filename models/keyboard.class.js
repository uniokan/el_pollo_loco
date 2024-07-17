/**
 * Class representing keyboard and touch controls.
 */
class Keyboard {
    LEFT = false;
    RIGHT = false;
    UP = false;
    DOWN = false;
    SPACE = false;
    D = false;

    /**
     * Creates an instance of Keyboard and binds events.
     */
    constructor() {
        this.bindKeyboardEvents();
        this.touchStart();
        this.touchEnd();
    }

    /**
     * Binds touchstart events for mobile controls.
     */
    touchStart() {
        document.getElementById('mobile-btn-left').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.LEFT = true;
        });
        document.getElementById('mobile-btn-right').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.RIGHT = true;
        });
        document.getElementById('mobile-btn-jump').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.SPACE = true;
        });
        document.getElementById('mobile-btn-flask').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.D = true;
        });
    }

    /**
     * Binds touchend events for mobile controls.
     */
    touchEnd() {
        document.getElementById('mobile-btn-left').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.LEFT = false;
        });
        document.getElementById('mobile-btn-right').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.RIGHT = false;
        });
        document.getElementById('mobile-btn-jump').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.SPACE = false;
        });
        document.getElementById('mobile-btn-flask').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.D = false;
        });
    }

    /**
     * Binds keyboard events for keydown and keyup.
     */
    bindKeyboardEvents() {
        window.addEventListener("keydown", (event) => {
            this.setKeyboard(event, true);
        });

        window.addEventListener("keyup", (event) => {
            this.setKeyboard(event, false);
        });
    }

    /**
     * Sets the keyboard control state based on the event.
     * @param {KeyboardEvent} event - The keyboard event.
     * @param {boolean} state - The state to set for the control.
     */
    setKeyboard(event, state) {
        switch (event.keyCode) {
            case 39:
                this.RIGHT = state;
                break;
            case 37:
                this.LEFT = state;
                break;
            case 38:
                this.UP = state;
                break;
            case 40:
                this.DOWN = state;
                break;
            case 32:
                this.SPACE = state;
                break;
            case 68:
                this.D = state;
                break;
            default:
                break;
        }
    }
}