 class TableField {

    constructor(ctx, posX, posY, label, size, color, condition) {
        this.baseWidth = 50
        this.baseHeight = 70
        this.posX = posX
        this.posY = posY
        this.color = color
        this.size = size
        this.label = label
        this.ctx = ctx
        this.draw()
    }

    draw() {

        this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.posX, this.posY, this.baseWidth * this.size, this.baseHeight)
        this.ctx.font = '20px Arial'
        this.ctx.textAlign = 'center'
        this.ctx.textBaseline = 'middle'
        this.ctx.fillStyle = 'white'
        this.ctx.fillText(this.label, this.posX + this.baseWidth / 2, this.posY + this.baseHeight / 2)
    }

    onHover(mousePosX, mousePosY) {

        if (this.posX < mousePosX && this.posY < mousePosY && this.posX + this.baseWidth > mousePosX && this.baseHeight + this.posY > mousePosY) {
            console.log('onHover', this.text)
            return true
        }
        return false
    }

}
