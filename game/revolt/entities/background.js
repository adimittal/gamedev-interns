ig.module(
    'entities.background'
    )
    .requires(
        'impact.entity'
        )
    .defines(function () {
        EntityBackground = ig.Entity.extend({
            // collides: ig.Entity.COLLIDES.FIXED,
            init: function (x, y, settings) {
                this.parent(x, y, settings);
                this.playerImg = new ig.Image(ig.lib + 'media/player.png');
            },
            update: function () {
                this.parent();
            },
            draw: function () {
                // Draw all entities and backgroundMaps
                this.parent();
                //scale
                var height = ig.system.height;
                var width = ig.system.width;
                //Draw background gradient
                var grd = ig.system.context.createLinearGradient(0, 0, width, 0);
                grd.addColorStop(0, "#1E47CF");
                grd.addColorStop(.49, "#E9F7FC");
                grd.addColorStop(.51, "#E9F7FC");
                grd.addColorStop(1, "#1E47CF");
                ig.system.context.fillStyle = grd;
                ig.system.context.fillRect(0, 0, width, height);

                //Draw vertical background gradient
                var grd = ig.system.context.createLinearGradient(0, 0, 0, height);
                grd.addColorStop(0, "#001397");
                grd.addColorStop(.15, "#1E47CF");
                grd.addColorStop(.151, "#001397");
//                grd.addColorStop(.151, "#001397");
                ig.system.context.fillStyle = grd;
                ig.system.context.fillRect(0, 0, width, 0.151 * height);

                //Draw the player image scaled
                // ig.system.context.drawImage(this.playerImg.data, 190 * (width / 800), 110 * (height / 600), width / 2, height / 2);
            }
        });
    });