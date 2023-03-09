function rand(min, max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

ig.module(
    'entities.puck'
    )
    .requires(
        'impact.entity'
        )
    .defines(function () {

        EntityPuck = ig.Entity.extend({
            size: {x: 48, y: 48},
            collides: ig.Entity.COLLIDES.ACTIVE,
            animSheet: new ig.AnimationSheet('/assets/game/pong/media/puck.png', 48, 48),
            bounciness: 1,
            init: function (x, y, settings) {
                this.parent(x, y, settings);

                this.addAnim('idle', 0.1, [0, 1, 2, 3, 4, 4, 4, 4, 3, 2, 1]);
                this.maxVel.x = 100000;
                this.maxVel.y = 100000;
                this.vel.x = settings.vel.x + rand(-100, 100);
                this.vel.y = settings.vel.y + rand(-100, 100);
            }
        });

    });