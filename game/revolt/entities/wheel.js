ig.module(
    'entities.wheel'
)
    .requires(
        'impact.entity',
        'entities.button'
    )
    .defines(function () {

        EntityWheel = ig.Entity.extend({
            //            animSheet: new ig.AnimationSheet(img.src, img.size.x, img.size.y),
            init: function (x, y, settings) {

                this.context = ig.system.context;
                this.w = ig.system.realWidth;
                this.h = ig.system.realHeight;

                this.categories = ["Science", "Sports", "History", "Geography", "Art", "Music"];
                this.colors = ["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3"];
                this.startAngle = 0;
                this.arc = Math.PI / (this.categories.length / 2);
                this.spinTimeout = null;
                this.drawWheel();
                // Create a button entity at position (100, 100)
                this.button = ig.game.spawnEntity(EntityButton, 350, 75, {text: 'Spin'});
                this.button = ig.game.spawnEntity(EntityButton, 470, 75, {text: 'Douche'});

                this.parent(x, y, settings);
            },
            apiCall: function () {
                // var gameId = this.question.getQueryString().gameId;
                // var question = ig.game.questionAnswers.count;
                // var url = ig.config.baseUrl + '/lifeline?lifeline=wheel&preset=' + gameId + '&question=' + question;
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
            },
            // Draw the wheel
            drawWheel: function () {
                this.context.clearRect(0, 0, this.w, this.h);
                this.context.strokeStyle = "black";
                this.context.lineWidth = 2;
                this.context.font = '20px Arial';

                for (var i = 0; i < this.categories.length; i++) {
                    var angle = this.startAngle + i * this.arc;
                    this.context.fillStyle = this.colors[i % this.colors.length];

                    this.context.beginPath();
                    this.context.arc(this.w / 2, this.h / 2, 150, angle, angle + this.arc, false);
                    this.context.lineTo(this.w / 2, this.h / 2);
                    this.context.fill();
                    this.context.stroke();

                    this.context.save();
                    this.context.translate(this.w / 2, this.h / 2);
                    this.context.rotate(angle + this.arc / 2);
                    this.context.fillStyle = "white";
                    this.context.fillText(this.categories[i], 60, 10);
                    this.context.restore();
                }
                this.startAngle += this.arc;
            },
            // Spin the wheel
            spinWheel: function () {
                spinAngleStart = Math.random() * 10 + 10;
                spinTimeTotal = Math.random() * 3 + 4 * 1000;
                this.rotateWheel();
            },

            rotateWheel: function () {
                spinTime += 30;
                if (spinTime >= spinTimeTotal) {
                    this.stopRotateWheel();
                    return;
                }
                var spinAngle = spinAngleStart - this.easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
                this.startAngle += (spinAngle * Math.PI / 180);
                this.drawWheel();
                this.spinTimeout = setTimeout('rotateWheel()', 30);
            },

            stopRotateWheel: function () {
                clearTimeout(this.spinTimeout);
                var degrees = this.startAngle * 180 / Math.PI + 90;
                var categoryIndex = Math.floor((360 - degrees % 360) / this.arc);
                this.context.save();
                this.context.font = 'bold 30px Arial';
                var text = this.categories[categoryIndex];
                this.context.fillText(text, this.w / 2 - this.context.measureText(text).width / 2, this.h / 2 + 10);
                this.context.restore();
            },

            easeOut: function (t, b, c, d) {
                var ts = (t /= d) * t;
                var tc = ts * t;
                return b + c * (tc + -3 * ts + 3 * t);
            }
        })
    });