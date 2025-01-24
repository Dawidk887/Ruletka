export default class TokenBtn {
    constructor(ctx, posX, posY, color, text,tokenBtnPointer,value) {
        this.posX = posX
        this.posY = posY
        this.radius = 40
        this.color = color
        this.text = text
        this.state = 0
        this.ctx = ctx
        this.hoverd = false 
        this.tokenBtnPointer = tokenBtnPointer 
        this.value = value
        this.draw()
        
    }}