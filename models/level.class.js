/**
 * Represents a game level.
 */

class Level {
    enemies;
    clouds;
    backgroundObjects;
    coins;
    flasks;
    level_end_x = 10000;

    /**
     * Constructs a new Level instance.
     * @param {Array<Enemy>} enemies - The array of enemies in the level.
     * @param {Array<Cloud>} clouds - The array of clouds in the level.
     * @param {Array<BackgroundObject>} backgroundObjects - The array of background objects in the level.
     * @param {Array<Coin>} coins - The array of coins in the level.
     * @param {Array<Flask>} flasks - The array of flasks in the level.
     */
    constructor(enemies, clouds, backgroundObjects, coins, flasks) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
        this.flasks = flasks;
    }
}