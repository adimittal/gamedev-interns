ig.module(
    'entities.levels'
    )
    .requires(
        'impact.entity'
        )
    .defines(function () {

        var font = 'revolt/media/fonts/news_gothic_mt_16.font.png';

        EntityQuestion = ig.Entity.extend({
            // size: size,
            size: { "x": 75,
                    "y": 350
                },
            font: new ig.Font(font),
            //  collides: ig.Entity.COLLIDES.FIXED,
            animSheet: new ig.AnimationSheet(image, size.x, size.y),
            init: function (x, y, settings) {
                this.parent(x, y, settings);

                this.addAnim('idle', 1, [0]);
                this.getQuestion();
            },
            getQuestion: function () {
                //Get a question from backend
                var url = 'revolt/api/getQuestion';
                var req = $.ajax({
                    url: (url),
                    dataType: 'text',
                    async: false
                });

                this.obj = $.parseJSON(req.responseText);

            },
            update: function () {
                this.parent();

                if (ig.input.pressed('leftButton') && this.inFocus()) {
                    console.log('clicked');
                    this.getQuestion();
                }
            },
            draw: function () {
                // Draw all entities and backgroundMaps
                this.parent();
                // Add your own drawing code here
                var w, h, qx, qy, ax, ay, bx, by, cx, cy, dx, dy, ex, ey;
                w = ig.system.width;
                h = ig.system.height;
                qx = w / 2;
                qy = h / 2 + 20;
                var wide = 150;
                var low = 120;
                ax = w / 2 - wide;
                bx = w / 2 + wide;
                cx = w / 2 - wide;
                dx = w / 2 + wide;
                ex = 0;
                ay = h / 2 + low;
                by = h / 2 + low;
                cy = h / 2 + (1.5 * low);
                dy = h / 2 + (1.5 * low);
                ey = 0;
                this.font.draw(this.obj.question, qx, qy, ig.Font.ALIGN.CENTER);
                this.font.draw(this.obj.answer1, ax, ay, ig.Font.ALIGN.CENTER);
                this.font.draw(this.obj.answer2, bx, by, ig.Font.ALIGN.CENTER);
                this.font.draw(this.obj.answer3, cx, cy, ig.Font.ALIGN.CENTER);
                this.font.draw(this.obj.answer4, dx, dy, ig.Font.ALIGN.CENTER);
                this.font.draw(this.obj.answer5, ex, ey, ig.Font.ALIGN.CENTER);

            }

        });
    });