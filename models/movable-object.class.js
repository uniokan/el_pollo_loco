class MovableObject {
    x = 120;
    y = 275;
    img;
    height = 150;
    width = 100;
    imageChache = {};
    currentImg = 0;
    speed = 0.15;
    fps60 = 1000 / 60;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;


    jump() {
        this.speedY = 25;
    }

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageChache[path] = img;
        });

    }

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        return this.y < 120;
    }

    playAnimation(images) {
        let i = this.currentImg % images.length;
        let path = images[i];
        this.img = this.imageChache[path];
        this.currentImg++;
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;

    }
}