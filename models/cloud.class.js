/**
 * Represents a cloud object that extends MovableObject.
 * @extends MovableObject
 */

class Cloud extends MovableObject {
    x = Math.random() * 500;
    y = 30;
    width = 500;
    height = 250;


    /**
   * Constructs a Cloud object.
   */
    constructor() {
        super().loadImage('./img/5_background/layers/4_clouds/1.png');
        this.animate();
    }

    /**
     * Initiates animation of the cloud object.
     */
    animate() {
        this.moveLeft();
    }

}