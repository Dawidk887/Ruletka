 class TokenBtn {

    constructor(ctx, posX, posY, color, text) {
        this.posX = posX
        this.posY = posY
        this.radius = 40
        this.color = color
        this.text = text
        this.state = 0
        this.ctx = ctx
        this.draw()
    }

    animateUp() {
        if (this.state === 0) {
            this.radius = 50
            this.posY -= 10
            this.draw()
            this.state = 1
        }
    }

    animateDown() {
        if (this.state === 1) {
            this.radius = 40
            this.posY += 10
            this.draw()
            this.state = 0
        }
    }

    draw() {
        this.ctx.beginPath()
        this.ctx.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.beginPath()
        this.ctx.arc(this.posX, this.posY, this.radius - 12, 0, 2 * Math.PI);
        this.ctx.fillStyle = 'white';
        this.ctx.fill();
        this.ctx.font = '20px Arial'
        this.ctx.textAlign = 'center'
        this.ctx.textBaseline = 'middle'
        this.ctx.fillStyle = 'black'
        this.ctx.fillText(this.text, this.posX, this.posY)
    }

    onHover(mousePosX, mousePosY) {

        if (Math.sqrt((this.posX - mousePosX) * (this.posX - mousePosX) + (this.posY - mousePosY) * (this.posY - mousePosY)) < this.radius) {
            console.log('onHover', this.text)
            this.animateUp()

            return true
        }

        this.animateDown()
        return false

    }
}
