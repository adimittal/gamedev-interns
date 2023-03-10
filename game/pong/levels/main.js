ig.module('levels.main')
    .requires('impact.image', 'entities.puck', 'entities.paddle-cpu', 'entities.paddle-player')
    .defines(function () {
        LevelMain = /*JSON[*/{
            "entities": [
                {
                    "type": "EntityPuck",
                    "x": 472,
                    "y": 284,
                    "settings": {
                        "vel": {
                            "x": 500,
                            "y": 300
                        }
                    }
                },
                {
                    "type": "EntityPaddleCpu",
                    "x": 8,
                    "y": 168
                },
                {
                    "type": "EntityPaddlePlayer",
                    "x": 696,
                    "y": 164
                }
            ],
            "layer": [
                {
                    "name": "main",
                    "width": 16,
                    "height": 10,
                    "linkWithCollision": false,
                    "visible": 1,
                    "tilesetName": "/assets/game/pong/media/tileset.png",
                    "repeat": false,
                    "preRender": false,
                    "distance": "1",
                    "tilesize": 48,
                    "foreground": false,
                    "data": [
                        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
                        [4, 4, 3, 1, 1, 1, 3, 3, 3, 3, 3, 3, 1, 1, 4, 4],
                        [6, 6, 3, 3, 5, 5, 5, 1, 3, 3, 3, 3, 3, 3, 2, 2],
                        [6, 6, 1, 5, 3, 3, 3, 3, 3, 5, 1, 3, 1, 3, 2, 2],
                        [6, 6, 1, 3, 3, 1, 3, 1, 1, 3, 3, 3, 5, 3, 2, 2],
                        [6, 6, 3, 3, 3, 5, 3, 1, 3, 3, 1, 1, 3, 3, 2, 2],
                        [6, 6, 3, 3, 3, 5, 5, 5, 3, 5, 1, 1, 1, 1, 2, 2],
                        [6, 6, 3, 1, 3, 3, 3, 3, 1, 3, 3, 1, 3, 1, 2, 2],
                        [4, 4, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4],
                        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
                    ]
                },
                {
                    "name": "collision",
                    "width": 16,
                    "height": 10,
                    "linkWithCollision": false,
                    "visible": 1,
                    "tilesetName": "",
                    "repeat": false,
                    "preRender": false,
                    "distance": "1",
                    "tilesize": 48,
                    "foreground": false,
                    "data": [
                        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
                        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
                    ]
                }
            ]
        }/*]JSON*/;
        LevelMainResources = [new ig.Image('/assets/game/pong/media/tileset.png')];
    });