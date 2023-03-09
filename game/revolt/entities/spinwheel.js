ig.module(
    'entities.spinwheel'
)
    .requires(
        'impact.entity',
        'entities.button'
    )
    .defines(function () {

        EntitySpinwheel = ig.Entity.extend({

            categories: [
                'Science',
                'Sports',
                'History',
                'Technology',
                'Art',
                'Geography',
                'Games',
                'Genius'
            ],
            categoryPoints: {
                'Science': Math.floor(Math.random()*100),
                'Sports': Math.floor(Math.random()*100),
                'History': Math.floor(Math.random()*100),
                'Technology': Math.floor(Math.random()*100),
                'Art': Math.floor(Math.random()*100),
                'Geography': Math.floor(Math.random()*100),
                'Games': Math.floor(Math.random()*100),
                'Genius': Math.floor(Math.random()*100)
            },
            wheelRadius: 200,

            currentCategory: '',

            spin: {
                angle: 0,
                offset: 0
            },

            init: function () {
                this.ctx = ig.system.context;
                ig.input.bind(ig.KEY.MOUSE1, 'click');
                this.w = ig.system.realWidth;
                this.h = ig.system.realHeight;
                this.spinning = false;
                this.centerX = this.w / 2;
                this.centerY = this.h / 2;
                this.button = ig.game.spawnEntity(EntityButton, 350, 75, { text: 'Spin', action: () => this.spinWheel(this) });
            },

            update: function () {
                this.parent();
                if (this.spinning) {
                    this.spin.offset += Math.PI / 90; //adjusts speed angle increment

                    // decrease the speed of the wheel if it's time to do so
                    if (this.wheelAngleSpeed > 0) {
                        this.spin.offset += Math.PI / 15;
                    } else {
                        this.wheelAngleSpeed = 0;
                    }
                }
            },

            draw: function () {
                this.parent();

                // Draw wheel
                this.drawWheel();

                // Draw current category
                this.drawCurrentCategory(this.currentCategory);

                // draw the pointer
                // ig.system.context.fillStyle = '#000000';
                // ig.system.context.beginPath();
                // ig.system.context.moveTo(this.wheelPos.x, this.wheelPos.y);
                // ig.system.context.lineTo(this.wheelPos.x + this.pointerLength * Math.cos(this.wheelAngle), this.wheelPos.y + this.pointerLength * Math.sin(this.wheelAngle));
                // ig.system.context.stroke();

                // console.log('draw');

                // Draw button
                // this.drawButton();
            },

            drawWheel: function () {
                var ctx = this.ctx;

                // Set styles
                ctx.strokeStyle = 'white';
                ctx.lineWidth = 2;

                // Draw wheel sections
                var angleIncrement = (2 * Math.PI) / this.categories.length;
                for (var i = 0; i < this.categories.length; i++) {
                    ctx.fillStyle = this.getColorForCategory(this.categories[i]);
                    ctx.beginPath();
                    ctx.moveTo(this.centerX, this.centerY);
                    ctx.arc(this.centerX, this.centerY, this.wheelRadius, this.spin.angle + this.spin.offset, this.spin.angle + angleIncrement + this.spin.offset);
                    ctx.lineTo(this.centerX, this.centerY);
                    ctx.fill();
                    ctx.stroke();
                    this.spin.angle += angleIncrement;
                }

                // Draw text labels
                this.spin.angle = (angleIncrement) / 2;
                let categoryAngle = this.spin.angle + this.spin.offset + (angleIncrement) / 2;
                ctx.fillStyle = 'white';
                ctx.font = '20px Arial';
                ctx.textBaseline = 'middle';
                ctx.textAlign = 'center';

                ctx.beginPath();

                // draw the spin marker
                ctx.moveTo(this.centerX + this.wheelRadius - 10, this.centerY);
                ctx.lineTo(this.centerX + this.wheelRadius + 10, this.centerY);
                ctx.stroke();

                for (var i = 0; i < this.categories.length; i++) {
                    var x = this.centerX + Math.cos(categoryAngle) * (this.wheelRadius / 1.4);
                    var y = this.centerY + Math.sin(categoryAngle) * (this.wheelRadius / 1.4);

                    ctx.save();
                    ctx.translate(x, y);
                    ctx.rotate(categoryAngle + (Math.PI / 2));
                    ctx.fillText(this.categories[i], 0, 0);
                    ctx.restore();

                    let theta1 = (categoryAngle);
                    let theta2 = (categoryAngle + angleIncrement / 2);

                    const spins = Math.floor(theta1 / (2 * Math.PI)) + 1;
                    theta1 -= spins * 2 * Math.PI;
                    theta2 -= spins * 2 * Math.PI;
                    if (theta1 <= 0 && theta2 >= 0) {
                        this.currentCategory = this.categories[i];
                    }
                    categoryAngle += angleIncrement;
                }
            },

            getColorForCategory: function (category) {
                switch (category) {
                    case 'Science':
                        return '#2ecc71';
                    case 'Sports':
                        return '#3498db';
                    case 'History':
                        return '#9b59b6';
                    case 'Technology':
                        return '#f1c40f';
                    case 'Art':
                        return '#e67e22';
                    case 'Geography':
                        return '#e74c3c';
                    case 'Games':
                        return '#24563c';
                    case 'Genius':
                        return '#e7353c';
                    default:
                        return 'gray';
                }
            },

            drawCurrentCategory: function (currentCategory) {
                const fontsize = .025 * ig.system.realWidth;
                this.ctx.font = fontsize + "px Arial";
                this.ctx.fillStyle = "red";
                this.ctx.textAlign = "center";
                const cp = JSON.stringify(this.categoryPoints[currentCategory]);
                this.ctx.fillText(currentCategory + " " + cp, this.centerX, this.centerY - this.wheelRadius - 50);
            },

            spinWheel: function (self) {
                if (this.spinning) {
                    // stop it
                    this.spinning = false;
                    this.drawCurrentCategory();
                } else {
                    self.wheelAngleSpeed = 0; // start slow
                    this.spinning = true;
                    setTimeout(() => self.wheelAngleSpeed = 20, 500); // speed up after a second
                    setTimeout(() => self.wheelAngleSpeed = 0, 1800); // slow down after 2 seconds
                    setTimeout(() => {
                        this.spinning = false;
                    }, 2000); // stop after 3 seconds
                }

                return;

                if (!self.spinning) {
                    self.spinning = true;
                    self.wheelAngleSpeed = 0;
                    self.wheelAngle = 0;
                    var minSpeed = 10;
                    var maxSpeed = 20;
                    var spinTime = 8000;
                    var spinDistance = Math.floor(Math.random() * 6 + 1) * (2 * Math.PI);
                    var acceleration = spinDistance / (spinTime / 2);
                    self.wheelAngleSpeed = minSpeed;

                    console.log(
                        self.spinning,
                        self.wheelAngleSpeed,
                        self.wheelAngle,
                        minSpeed,
                        maxSpeed,
                        spinTime,
                        spinDistance,
                        acceleration,
                        self.wheelAngleSpeed,
                        self
                    );
                    setTimeout(function () {
                        self.wheelAngleSpeed = maxSpeed;
                        console.log(self.wheelAngleSpeed);
                    }, spinTime / 2);
                    ig.Timer.timeScale = 1;
                    // ig.soundHandler.play('spin');
                }
            },

        });

    });    
