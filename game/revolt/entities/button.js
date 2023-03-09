ig.module(
    'entities.button'
)
.requires(
    'impact.entity'
)
.defines(function() {
    EntityButton = ig.Entity.extend({
        size: {x: 100, y: 50},
        text: "fun",
        action: this.click,
        font: new ig.Font('media/fonts/arial_16.font.png'),
        animSheet: new ig.AnimationSheet('media/buttons/empty_btn.png', 100, 57),
        type: ig.Entity.TYPE.B,
        collides: ig.Entity.COLLIDES.FIXED,

        init: function(x, y, settings) {
            this.parent(x, y, settings);
            this.addAnim('idle', 1, [0]);
            this.addAnim('hover', 1, [1]);
            ig.input.bind( ig.KEY.MOUSE1, 'click' );

        },

        update: function() {
            if(ig.input.pressed('click') && this.isMouseInside()) {
                // this.click();
                this.action();
            }
            if(this.isMouseInside()) {
                // console.log("Button inside");
                this.currentAnim = this.anims.hover;
            } else {
                this.currentAnim = this.anims.idle;
            }
            this.parent();
        },

        draw: function() {
            this.parent();
            this.font.draw(this.text, this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2 - 6, ig.Font.ALIGN.CENTER);
        },

                    // drawButton: function () {
            //     var ctx = ig.system.context;

            //     // Draw button
            //     ctx.fillStyle = 'red';
            //     ctx.fillRect(this.centerX - 75, this.centerY + this.wheelRadius + 10, 150, 50);

            //     // Draw button text
            //     ctx.fillStyle = 'white';
            //     ctx.font = '20px Arial';
            //     ctx.textBaseline = 'middle';
            //     ctx.textAlign = 'center';
            //     ctx.fillText('Spin Wheel', this.centerX, this.centerY + this.wheelRadius + 35);
            // },

        isMouseInside: function() {
            return (ig.input.mouse.x > this.pos.x && 
                    ig.input.mouse.x < this.pos.x + this.size.x &&
                    ig.input.mouse.y > this.pos.y && 
                    ig.input.mouse.y < this.pos.y + this.size.y);
        },

        click: function() {
            // Implement the click event here
            console.log(this.text + " Button clicked");
        }
    });
});
