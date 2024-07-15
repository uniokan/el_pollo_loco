class Level {
    enemies;
    clouds;
    backgroundObjects;
    coins;
    flasks;
    level_end_x = 10000;

    constructor(enemies, clouds, backgroundObjects, coins, flasks) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
        this.flasks = flasks
    }
}