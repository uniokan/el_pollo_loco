/**
 * Represents a coin object that extends MovableObject.
 * @extends MovableObject
 */

class Coin extends MovableObject{
    width=70;
    height=80;

    COINS_IMAGES= [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png', 
    ];

     /**
     * Constructs a Coin object.
     * @param {string} path - The path to the main image of the coin.
     * @param {number} x - The initial x-coordinate position.
     * @param {number} y - The initial y-coordinate position.
     */
     constructor(path, x, y) {
        super().loadImage(path);
        this.loadImages(this.COINS_IMAGES);
        this.x = x;
        this.y = y;
        this.animate();
    }

    /**
     * Initiates animation of the coin object.
     */
    animate() {
        setInterval(() => {
            this.playAnimation(this.COINS_IMAGES);
        }, 300);
    }
}