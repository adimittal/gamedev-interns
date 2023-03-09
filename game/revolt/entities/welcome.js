ig.module(
    'entities.welcome'
)
    .requires(
        'impact.entity',
        // 'entities.wheel',
        'entities.spinwheel'
    )
    .defines(function () {
        EntityWelcome = ig.Entity.extend({

            //            animSheet: new ig.AnimationSheet(img.src, img.size.x, img.size.y),
            init: function (x, y, settings) {
                this.w = ig.system.realWidth;
                this.fontsize = .025 * this.w;
                // this.fontsize = "50px";
                this.ctx = ig.system.context;
                this.align = 'left';

                this.wheel = ig.game.spawnEntity(EntitySpinwheel, 100, 100);

                this.parent(x, y, settings);
            },
            apiCall: function () {
                // var gameId = this.question.getQueryString().gameId;
                // var question = ig.game.questionAnswers.count;
                // var url = ig.config.baseUrl + '/lifeline?lifeline=Welcome&preset=' + gameId + '&question=' + question;
                // var req = $.ajax({
                //     url: (url),
                //     beforeSend: ig.config.beforeSend,
                //     dataType: 'json',
                //     async: false
                // });
            },
            update: function () {

                this.parent();
            },
            draw: function () {
                this.ctx.font = this.fontsize + "px Arial";
                this.ctx.fillStyle = "white";
                this.ctx.textAlign = this.align;
                this.ctx.fillText('Welcome to REVOLT!', 10, 50);
                this.ctx.fillText('I love this!', 10, 80);
            },
        });
    });