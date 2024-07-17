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



    jump() {
        this.speedY = 25;
    }


    applyGravity() {
        this.setStoppableInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }


    isAboveGround() {
        if (this instanceof ThorableObject) {
            return true;
        }
        else {
            return this.y < 120;
        }
    }


    hit(damage) {
        this.energy -= damage;

        if (this.energy < 0) {
            this.energy = 0;
        }
        else {
            this.lastHit = new Date().getTime();
        }
    }

    increaseCoins() {
        if (this.coins < 100) {
            this.coins += 10;
        }
    }

    increaseFlasks() {
        if (this.flasks < 100) {
            this.flasks += 10;
        }
    }

    decreaseFlasks() {
        if (this.flasks > 0) {
            this.flasks -= 10;
        }
    }


    isDead() {
        return this.energy == 0;
    }


    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }


    playAnimation(images) {
        let i = this.currentImg % images.length;
        let path = images[i];
        this.img = this.imageChache[path];
        this.currentImg++;
    }


    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height;
    }


    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;

    }
    isJumpingOn(mo) {
        return this.y + this.height > mo.y &&
               this.y + this.height < mo.y + mo.height &&
               this.speedY < 0; 
    }
}
