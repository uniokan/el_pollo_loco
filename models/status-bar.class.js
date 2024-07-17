class StatusBar extends DrawableObject {
    IMAGES;
    percentage;

      /**
     * Creates an instance of StatusBar.
     * @param {string[]} path - Array of image paths for the status bar.
     * @param {number} x - The x-coordinate of the status bar.
     * @param {number} y - The y-coordinate of the status bar.
     * @param {string} type - The type of status bar (e.g., 'health', 'endboss', 'coins', 'flasks').
     * @param {number} percentage - The initial percentage value of the status bar.
     */
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

     /**
     * Sets the percentage and updates the image based on the percentage.
     * @param {number} percentage - The new percentage value of the status bar.
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let imagePath = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageChache[imagePath];
    }

    /**
     * Resolves the image index based on the type and percentage of the status bar.
     * @returns {number|null} The index of the image to use based on the percentage.
     */
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