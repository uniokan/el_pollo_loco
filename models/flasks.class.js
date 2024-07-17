/**
 * Class representing a flask object.
 * @extends MovableObject
 */
class Flasks extends MovableObject {
    width = 70;
    height = 80;
    flask_on_floor = 350;

    FLASKS_IMAGES = [
        'img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        'img/6_salsa_bottle/2_salsa_bottle_on_ground.png'
    ];

    /**
     * Creates an instance of Flasks.
     * @param {string} path - The initial image path for the flask.
     * @param {number} x - The x-coordinate of the flask.
     * @param {number} y - The y-coordinate of the flask.
     */
    constructor(path, x, y) {
        super().loadImage(path);
        this.loadImages(this.FLASKS_IMAGES);
        this.x = x;
        this.y = y;
        this.animate();
    }

    /**
     * Animates the flask if it is on the floor by playing its animation.
     */
    animate() {
        if (this.y == this.flask_on_floor) {
            this.setStoppableInterval(() => {
                this.playAnimation(this.FLASKS_IMAGES);
            }, 300);
        }
    }
}