class Chicken extends MovableObject {
    height = 70;
    width = 70;
    y = 343;

    IMAGES_WALKING = [
        './img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        './img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        './img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ]

    IMAGES_DEAD='img/3_enemies_chicken/chicken_normal/2_dead/dead.png';


    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.x = 900 + Math.random() * 2000;
        this.speed = 0.5 + Math.random() * 2;
        this.animate();
    }

    dead() {
        this.loadImage(this.IMAGES_DEAD);
        clearInterval(this.updateImgInterval);
        clearInterval(this.moveLeftInterval);

    }

    animate() {
        this.updateImgInterval = this.setStoppableInterval(() => {
            this.updateImg();
        }, 200);

        this.moveLeftInterval = this.setStoppableInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
    }

    updateImg() {
        this.playAnimation(this.IMAGES_WALKING);
    }
}