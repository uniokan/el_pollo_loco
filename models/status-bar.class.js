class StatusBar extends DrawableObject {
    IMAGES;
    percentage;

    constructor(path,x, y, type, percentage) {
        super();
        this.percentage=percentage;
        this.IMAGES = path;
        this.type = type;
        this.loadImages(this.IMAGES);
        this.setPercentage(this.percentage);
        this.x = x;
        this.y = y;
        this.width = 200;
        this.height = 60;
       
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let imagePath = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageChache[imagePath];
    }

    resolveImageIndex() {
        return this.type == 'health'|| this.type =='endboss'
            ? this.percentage === 100 ? 5
            : this.percentage > 80 ? 4
            : this.percentage > 60 ? 3
            : this.percentage > 40 ? 2
            : this.percentage > 20 ? 1
            : 0
            : this.type == 'coins' || this.type =='flasks'
            ? this.percentage === 100 ? 0
            : this.percentage > 80 ? 1
            : this.percentage > 60 ? 2
            : this.percentage > 40 ? 3
            : this.percentage > 20 ? 4
            : 5
            : null;
    }}