ig.module('levels.main')
    .requires('impact.image',
        'entities.background',
        'entities.welcome',
        )
    .defines(function () {
        LevelMain = /*JSON[*/{
            "entities": [
                {
                    "type": "EntityBackground",
                    "x": 0,
                    "y": 0
                },
                {
                    "type": "EntityWelcome",
                    "x": 0,
                    "y": 0
                },
            ],
            "layer": [
                {
                    "name": "main",
                    "width": 16,
                    "height": 10,
                    "linkWithCollision": false,
                    "visible": 0,
                    "tilesetName": ig.lib + "media/tileset.png",
                    "repeat": false,
                    "preRender": false,
                    "distance": "1",
                    "tilesize": 48,
                    "foreground": false,
                    "data": [
                        [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
                        [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
                        [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
                        [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
                        [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
                        [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
                        [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
                        [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
                        [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
                        [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7]
                    ]
                },
                {
                    "name": "collision",
                    "width": 16,
                    "height": 10,
                    "linkWithCollision": false,
                    "visible": 0,
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
        LevelMainResources = [new ig.Image(ig.lib + 'media/tileset.png')];
    });