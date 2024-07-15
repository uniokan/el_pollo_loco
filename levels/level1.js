let levelStatus;

function initLevel(checkLevel) {
    if (checkLevel == 0) {
        levelStatus = new Level([
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Endboss()
        ], [
            new Cloud()
        ], [
            new BackgroundObject('img/5_background/layers/air.png', -719),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', -719),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', -719),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', -719),
            new BackgroundObject('img/5_background/layers/air.png', 0),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 0),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 0),
            new BackgroundObject('img/5_background/layers/air.png', 719),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719),
            new BackgroundObject('img/5_background/layers/air.png', 719 * 2),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719 * 2),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719 * 2),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719 * 2),
            new BackgroundObject('img/5_background/layers/air.png', 719 * 3),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719 * 3),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719 * 3),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719 * 3),
            new BackgroundObject('img/5_background/layers/air.png', 719 * 4),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719 * 4),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719 * 4),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719 * 4)
        ],
            [
                new Coin('img/8_coin/coin_1.png', 700, 200),
                new Coin('img/8_coin/coin_1.png', 2200, 150),
                new Coin('img/8_coin/coin_1.png', 1200, 130),
                new Coin('img/8_coin/coin_1.png', 1420, 150),
                new Coin('img/8_coin/coin_1.png', 830, 170),
                new Coin('img/8_coin/coin_1.png', 2240, 136),
                new Coin('img/8_coin/coin_1.png', 1990, 190),
                new Coin('img/8_coin/coin_1.png', 500, 130),
                new Coin('img/8_coin/coin_1.png', 900, 160),
                new Coin('img/8_coin/coin_1.png', 1700, 170),
            ],

            [
                new Flasks('img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png', 700, 120),
                new Flasks('img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png', 900, 170),
                new Flasks('img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png', 1100, 130),
                new Flasks('img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png', 1200, 160),
                new Flasks('img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png', 1500, 120),
                new Flasks('img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png', 1700, 200),
                new Flasks('img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png', 1900, 120),
                new Flasks('img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png', 2000, 140),
                new Flasks('img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png', 2200, 170),
                new Flasks('img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png', 2400, 120),

            ]

        );
    }

    else if (checkLevel == 1) {
        levelStatus = new Level([
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Endboss()
        ], [
            new Cloud()
        ], [
            new BackgroundObject('img/5_background/layers/air.png', -719),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', -719),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', -719),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', -719),
            new BackgroundObject('img/5_background/layers/air.png', 0),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 0),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 0),
            new BackgroundObject('img/5_background/layers/air.png', 719),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719),
            new BackgroundObject('img/5_background/layers/air.png', 719 * 2),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719 * 2),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719 * 2),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719 * 2),
            new BackgroundObject('img/5_background/layers/air.png', 719 * 3),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719 * 3),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719 * 3),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719 * 3),
            new BackgroundObject('img/5_background/layers/air.png', 719 * 4),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719 * 4),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719 * 4),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719 * 4),
            new BackgroundObject('img/5_background/layers/air.png', 719 * 5),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719 * 5),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719 * 5),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719 * 5)
        ],
            [
                new Coin('img/8_coin/coin_1.png', 700, 200),
                new Coin('img/8_coin/coin_1.png', 2200, 150),
                new Coin('img/8_coin/coin_1.png', 1200, 130),
                new Coin('img/8_coin/coin_1.png', 1420, 150),
                new Coin('img/8_coin/coin_1.png', 830, 170),
                new Coin('img/8_coin/coin_1.png', 2240, 136),
                new Coin('img/8_coin/coin_1.png', 1990, 190),
                new Coin('img/8_coin/coin_1.png', 500, 130),
                new Coin('img/8_coin/coin_1.png', 900, 160),
                new Coin('img/8_coin/coin_1.png', 1700, 170),
            ],

            [
                new Flasks('img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png', 700, 120),
                new Flasks('img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png', 900, 170),
                new Flasks('img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png', 1100, 130),
                new Flasks('img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png', 1200, 160),
                new Flasks('img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png', 1700, 120),
                new Flasks('img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png', 2000, 200),
                new Flasks('img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png', 2400, 120),

            ]

        );
    }
    else if (checkLevel == 2) {
        levelStatus = new Level([
          
            new Endboss()
        ], [
            new Cloud()
        ], [
            new BackgroundObject('img/5_background/layers/air.png', -719),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', -719),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', -719),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', -719),
            new BackgroundObject('img/5_background/layers/air.png', 0),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 0),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 0),
            new BackgroundObject('img/5_background/layers/air.png', 719),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719),
            new BackgroundObject('img/5_background/layers/air.png', 719 * 2),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719 * 2),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719 * 2),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719 * 2),
            new BackgroundObject('img/5_background/layers/air.png', 719 * 3),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719 * 3),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719 * 3),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719 * 3),
            new BackgroundObject('img/5_background/layers/air.png', 719 * 4),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719 * 4),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719 * 4),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719 * 4),
            new BackgroundObject('img/5_background/layers/air.png', 719 * 5),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719 * 5),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719 * 5),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719 * 5),
            new BackgroundObject('img/5_background/layers/air.png', 719 * 6),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719 * 6),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719 * 6),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719 * 6),
            new BackgroundObject('img/5_background/layers/air.png', 719 * 7),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719 * 7),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719 * 7),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719 * 7)
        ],
            [
                new Coin('img/8_coin/coin_1.png', 700, 200),
                new Coin('img/8_coin/coin_1.png', 2200, 150),
                new Coin('img/8_coin/coin_1.png', 1200, 130),
                new Coin('img/8_coin/coin_1.png', 1420, 150),
                new Coin('img/8_coin/coin_1.png', 830, 170),
                new Coin('img/8_coin/coin_1.png', 2240, 136),
                new Coin('img/8_coin/coin_1.png', 1990, 190),
                new Coin('img/8_coin/coin_1.png', 500, 130),
                new Coin('img/8_coin/coin_1.png', 900, 160),
                new Coin('img/8_coin/coin_1.png', 1700, 170),
                new Coin('img/8_coin/coin_1.png', 1800, 120),
                new Coin('img/8_coin/coin_1.png', 1900, 140),
                new Coin('img/8_coin/coin_1.png', 2100, 130),
                new Coin('img/8_coin/coin_1.png', 2200, 150),
                new Coin('img/8_coin/coin_1.png', 2400, 150),
                new Coin('img/8_coin/coin_1.png', 2700, 160),
            ],

            [
                new Flasks('img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png', 700, 120),
                new Flasks('img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png', 900, 170),
                new Flasks('img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png', 1100, 130),
                new Flasks('img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png', 1200, 160),
                new Flasks('img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png', 1700, 120),
                new Flasks('img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png', 2000, 200),
                new Flasks('img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png', 2400, 120),
                new Flasks('img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png', 2700, 120),
                new Flasks('img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png', 2800, 170),
                new Flasks('img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png', 2900, 140),
                new Flasks('img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png', 3000, 170),
                new Flasks('img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png', 3100, 150),
                new Flasks('img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png', 3200, 120),
                new Flasks('img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png', 3200, 180),
                new Flasks('img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png', 3300, 190),
                new Flasks('img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png', 3400, 140)

            ]

        );
    }

}