const canvas = document.getElementById('canvas');
if (canvas) {
    ig.module(
        'main'
    )
        .requires(
            'impact.game',
            'impact.font',
            'levels.main',
            'entities.welcome',
            'plugins.impact-splash-loader'
        )
        .defines(function() {
            ig.config = {
                baseUrl: baseUrl + '/mil',
                beforeSend: (xhr) => {
                    const token = window.localStorage.getItem('token');
                    xhr.setRequestHeader('Content-Type', 'application/json');
                    xhr.setRequestHeader('Accept', 'application/json');
                    xhr.setRequestHeader('Access-Control-Allow-Origin', allowOrigin);
                    xhr.setRequestHeader('Authorization', 'Bearer ' + token);
                }
            };
            MyGame = ig.Game.extend({

                // Load a font
                font: new ig.Font(ig.lib + 'media/fonts/news_gothic_mt_16.font.png'),
                level_white_font: new ig.Font(ig.lib + 'media/fonts/arial_16.font.png'),
                level_orange_font: new ig.Font(ig.lib + 'media/fonts/arial_16_orange_EA9502.font.png'),

                init: function() {

                    ig.input.initMouse(); //start capturing mouse events
                    ig.input.bind(ig.KEY.MOUSE1, 'click'); //bind mouse1 to the click action

                    ig.input.bind(ig.KEY.UP_ARROW, 'up');
                    ig.input.bind(ig.KEY.DOWN_ARROW, 'down');
                    ig.input.bind(ig.KEY.A, 'A');
                    ig.input.bind(ig.KEY.B, 'B');
                    ig.input.bind(ig.KEY.C, 'C');
                    ig.input.bind(ig.KEY.D, 'D');
                    ig.input.bind(ig.KEY.MOUSE1, 'leftButton');

                    this.loadLevel(LevelMain);
                    ig.system.drawLevels = true;
                },
                //            canvasSize: function () {
                //                //menu height in pixels
                //                var menuheight =
                //                    parseInt($("div#mainmenu").css('margin-top').replace('px', ''))
                //                    + $("div#mainmenu").height()
                //
                //                    ;
                //                var heightratio = 0.75; //600/800
                //                //Game was designed fof 800/600 so now we want to normalize by 1 and .75
                //                var width = window.innerWidth;//1*width - So we normalize everything else by 1*(window.innerWidth/800)*x
                //                var height = heightratio * width; //.75*width - So we normalize everything else by .75*(window.innerWidth/800)*x
                //
                //                //If height is too much let's scale down
                //                if ((window.innerHeight - menuheight) < height) {
                //                    height = (window.innerHeight - menuheight);
                //                    width = (window.innerHeight - menuheight) / heightratio;
                //                }
                //
                //            },
                oval: function(x, y, w, h) {
                    ig.system.context.save();
                    ig.system.context.beginPath();
                    ig.system.context.translate(x, y);
                    ig.system.context.scale(w / 2, h / 2);
                    ig.system.context.arc(1, 1, 1, 0, 2 * Math.PI, false);
                    ig.system.context.closePath();
                    ig.system.context.restore();
                },
                //Takes btn (x,y,w,h) and uses mouse xPos and yPos to determine if the mouse is in the button area
                checkInButton: function(btn) {
                    xPos = ig.input.mouse.x;
                    yPos = ig.input.mouse.y;
                    if (btn[0] <= xPos && xPos <= btn[0] + btn[2] &&
                        btn[1] <= yPos && yPos <= btn[1] + btn[3]
                    ) {
                        return true;
                    } else {
                        return false;
                    }
                },
                clearSession: function() {

                },
                update: function() {
                    // Update all entities and backgroundMaps
                    this.parent();
                    window.onbeforeunload = this.clearSession;
                },
                draw: function() {
                    // Draw all entities and backgroundMaps
                    this.parent();
                }
            });


            var height;
            var width;
            //menu height in pixels
            // var menuheight =
            //     parseInt($("div#mainmenu").css('margin-top').replace('px', ''))
            //     + $("div#mainmenu").height()

            //     ;
            var menuheight = 0; //since we make menu invisible now for game
            var heightratio = 0.75; //600/800
            //Game was designed fof 800/600 so now we want to normalize by 1 and .75
            width = window.innerWidth;//1*width - So we normalize everything else by 1*(window.innerWidth/800)*x
            height = heightratio * width; //.75*width - So we normalize everything else by .75*(window.innerWidth/800)*x

            //If height is too much let's scale down
            if ((window.innerHeight - menuheight) < height) {
                height = (window.innerHeight - menuheight);
                width = (window.innerHeight - menuheight) / heightratio;
            }
            var fps = 60;
            var scale = 1;
            ig.main('#canvas', MyGame, fps, width, height, scale, ig.ImpactSplashLoader);
        });

}
