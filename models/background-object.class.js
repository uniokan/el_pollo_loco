/**
 * Represents a background object that extends MovableObject.
 * @extends MovableObject
 */

class BackgroundObject extends MovableObject {
    width = 720;
    height = 480;

    /**
    * Constructs a BackgroundObject.
    * @param {string} imgPath - The path to the image file for the background object.
    * @param {number} x - The initial x-coordinate position of the background object.
    */
    constructor(imgPath, x) {
        super().loadImage(imgPath);
        this.x = x;
        this.y = 480 - this.height; // Adjust y-coordinate to align with the bottom of the screen
    }
}