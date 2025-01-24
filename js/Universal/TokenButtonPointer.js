export default class TokenBtnPointer {

    constructor(ctx, posX, posY, color, text, visible = true) {
        this.posX = posX
        this.posY = posY
        this.radius = 10
        this.color = color
        this.text = text
        this.ctx = ctx
        this.visible = visible
        this.value = 0 
        this.draw()
    }

    draw() {
        if (this.visible == true) {
            this.ctx.beginPath()
            this.ctx.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
            this.ctx.fillStyle = this.color;
            this.ctx.fill();
            this.ctx.beginPath()
            this.ctx.arc(this.posX, this.posY, this.radius - 3, 0, 2 * Math.PI);
            this.ctx.fillStyle = 'white';
            this.ctx.fill();
            this.ctx.font = '8px Arial'
            this.ctx.textAlign = 'center'
            this.ctx.textBaseline = 'middle'
            this.ctx.fillStyle = 'black'
            this.ctx.fillText(this.text, this.posX, this.posY)
        }
    }
    onHover(mousePosX, mousePosY) {
        this.posX = mousePosX
        this.posY = mousePosY

        return false
    }
    onClick() {
        return false
    }

}
