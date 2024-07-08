class Chicken extends MovableObject {
    height = 70;
    width = 70;
    y = 343;
    IMAGES_WALKING = [
        './img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        './img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        './img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',

    ]

    constructor() {
        super().loadImage('./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.x = 250 + Math.random() * 500;
        this.speed = 0.15 + Math.random() * 0.25;
        this.animate();
    }



    animate() {
        setInterval(() => {
            this.updateImg();
        }, 200)
        setInterval(()=>{
            this.moveLeft()
        },400);
    }


    updateImg() {
        let i = this.currentImg % this.IMAGES_WALKING.length;
        let path = this.IMAGES_WALKING[i];
        this.img = this.imageChache[path];
        this.currentImg++;
    }
}