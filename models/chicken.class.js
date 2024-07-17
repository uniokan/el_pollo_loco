/**
 * Class representing a Chicken enemy.
 * @extends MovableObject
 */
class Chicken extends MovableObject {
    height = 70;
    width = 70;
    y = 343;
    isDead = false;

    IMAGES_WALKING = [
        './img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        './img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        './img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ];

    IMAGES_DEAD = 'img/3_enemies_chicken/chicken_normal/2_dead/dead.png';

    /**
     * Creates an instance of Chicken.
     */
    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.x = 900 + Math.random() * 2000;
        this.speed = 0.5 + Math.random() * 2;
        this.animate();
    }

    /**
     * Marks the chicken as dead, updates its image, and stops its movement.
     */
    dead() {
        this.loadImage(this.IMAGES_DEAD);
        this.isDead = true;
        clearInterval(this.updateImgInterval);
        clearInterval(this.moveLeftInterval);
    }

    /**
     * Animates the chicken by periodically updating its image and moving it to the left.
     */
    animate() {
        this.updateImgInterval = setInterval(() => {
            this.updateImg();
        }, 200);

        this.moveLeftInterval = setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
    }

    /**
     * Updates the image of the chicken by playing the walking animation.
     */
    updateImg() {
        this.playAnimation(this.IMAGES_WALKING);
    }
}