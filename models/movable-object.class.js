class MovableObject {
    x = 120;
    y = 275;
    img;
    height = 150;
    width = 100;
    imageChache={};
    currentImg=0;
    speed=0.15;
    fps60= 1000/60;
    otherDirection=false;


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr){
        arr.forEach(path => {
            let img = new Image();
            img.src=path;
            this.imageChache[path]=img;
        });
       
    }

    moveRight() {
        console.log('Moving right');
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;

        }, 1000 / 60
        )
    }
}