/**
 * Class representing a throwable object.
 * @extends MovableObject
 */
class ThorableObject extends MovableObject {

    left_walking = false;
    right_walking = true; 

    FLASK_HIT_IMAGE = [
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
    ];

    
    FLASKS_THROW = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ]

    direction;

    /**
     * Creates an instance of ThorableObject.
     * @param {number} x - The x-coordinate of the object.
     * @param {number} y - The y-coordinate of the object.
     */
    constructor(x, y, direction) {
        super().loadImage('img/6_salsa_bottle/bottle_rotation/rotation_sequences.gif');
        this.loadImages(this.FLASKS_THROW);
        this.loadImages(this.FLASK_HIT_IMAGE);
        this.x = x;
        this.y = y;
        this.height = 100;
        this.width = 40;
        this.throw();
        this.direction = direction;
    }

    /**
     * Throws the object by applying horizontal and vertical movement.
     */
    throw() {
        this.speedY = 30;
        this.applyGravity();
    
        this.bottleThrowing = setInterval(() => {
            this.playAnimation(this.FLASKS_THROW);
            if (this.direction === 'left') {
                this.x -= 10; // Bewegt die Flasche nach links
            } else if (this.direction === 'right') {
                this.x += 10; // Bewegt die Flasche nach rechts
            }
         
        }, 25);
    }

    /**
     * Animates the bottle hit by playing the splash images.
     */
    bottleHit() {
        this.bottleExplodes = setInterval(() => {
            this.playAnimation(this.FLASK_HIT_IMAGE);
        }, 100);
    }
}