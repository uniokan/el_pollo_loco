class MovableObject extends DrawableObject {
    speed = 0.15;
    fps60 = 1000 / 60;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    coins = 0;
    lastHit = 0;
    flasks = 0;
     /**
     * Offset values for collision detection.
     * @type {{ top: number, left: number, right: number, bottom: number }}
     */
     offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    };

    /**
     * Makes the object jump by setting its vertical speed.
     */
    jump() {
        this.speedY = 25;
    }

    /**
     * Applies gravity to the object, causing it to fall down.
     */
    applyGravity() {
        this.setStoppableInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    /**
     * Checks if the object is above the ground level.
     * @returns {boolean} True if the object is above ground, false otherwise.
     */
    isAboveGround() {
        if (this instanceof ThorableObject) {
            return true;
        } else {
            return this.y < 210;
        }
    }

    /**
     * Reduces the object's energy by a specified damage amount.
     * @param {number} damage - The amount of damage to apply.
     */
    hit(damage) {
        this.energy -= damage;

        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    /**
     * Increases the object's coin count by 10, up to a maximum of 100.
     */
    increaseCoins() {
        if (this.coins < 100) {
            this.coins += 10;
        }
    }

    /**
     * Increases the object's flask count by 10, up to a maximum of 100.
     */
    increaseFlasks() {
        if (this.flasks < 100) {
            this.flasks += 10;
        }
    }

    /**
     * Decreases the object's flask count by 10, down to a minimum of 0.
     */
    decreaseFlasks() {
        if (this.flasks > 0) {
            this.flasks -= 10;
        }
    }

    /**
     * Checks if the object is dead (i.e., has no energy left).
     * @returns {boolean} True if the object is dead, false otherwise.
     */
    isDead() {
        return this.energy === 0;
    }

    /**
     * Checks if the object is currently hurt (i.e., was hit recently).
     * @returns {boolean} True if the object is hurt, false otherwise.
     */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }

    /**
     * Plays an animation by cycling through a list of images.
     * @param {string[]} images - An array of image paths to cycle through.
     */
    playAnimation(images) {
        let i = this.currentImg % images.length;
        let path = images[i];
        this.img = this.imageChache[path];
        this.currentImg++;
    }

    /**
     * Checks if the object is colliding with another movable object.
     * @param {MovableObject} mo - The other movable object to check against.
     * @returns {boolean} True if the objects are colliding, false otherwise.
     */
    isColliding(mo) {
        return (
            this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom
        );
    }

    /**
     * Moves the object to the right by increasing its x-coordinate.
     */
    moveRight() {
        this.x += this.speed;
    }

    /**
     * Moves the object to the left by decreasing its x-coordinate.
     */
    moveLeft() {
        this.x -= this.speed;
    }

    /**
     * Checks if the object is currently jumping on another movable object.
     * @param {MovableObject} mo - The other movable object to check against.
     * @returns {boolean} True if the object is jumping on the other object, false otherwise.
     */
    isJumpingOn(mo) {
        return this.y + this.height > mo.y &&
               this.y + this.height < mo.y + mo.height &&
               this.speedY < 0; 
    }
}
