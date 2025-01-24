import TokenBtnPointer from "../Universal/TokenButtonPointer.js"

export default class TableField {

    constructor(ctx, posX, posY, label, size, color, condition,tokenBtnPointers,btnPointer,bets,baseHeight = 70) {
        console.log(bets)
        this.baseWidth = 50
        this.baseHeight = baseHeight
        this.posX = posX
        this.posY = posY
        this.color = color
        this.size = size
        this.label = label
        this.ctx = ctx
        this.tokenBtnPointers = tokenBtnPointers
        this.btnPointer = btnPointer
        this.bet = 0
       this.bets = bets
        this.draw()
    }

    draw() {

        this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.posX, this.posY, this.baseWidth * this.size + 5*(this.size-1), this.baseHeight)
        this.ctx.font = '20px Arial'
        this.ctx.textAlign = 'center'
        this.ctx.textBaseline = 'middle'
        this.ctx.fillStyle = 'white'
        this.ctx.fillText(this.label, this.posX + (this.baseWidth * this.size + 5*(this.size-1))/2, this.posY + this.baseHeight / 2)
    }

    onHover(mousePosX, mousePosY) {

        if (this.posX < mousePosX && this.posY < mousePosY && this.posX +  (this.baseWidth * this.size + 5*(this.size-1)) > mousePosX && this.baseHeight + this.posY > mousePosY) {
            return true
        }
        return false
    }
    onClick(mousePosX, mousePosY) {
        if (this.posX < mousePosX && this.posY < mousePosY && this.posX +  (this.baseWidth * this.size + 5*(this.size-1)) > mousePosX && this.baseHeight + this.posY > mousePosY && this.btnPointer.visible == true){
        let btnPointer = new TokenBtnPointer(this.ctx,mousePosX,mousePosY,this.btnPointer.color,this.btnPointer.text)
        this.tokenBtnPointers.push(btnPointer)
        this.btnPointer.visible = false
        if(this.bets.balance >= this.bets.currentBet + this.btnPointer.value){
            this.bets.bet +=  this.btnPointer.value
            this.bets.currentBet += this.btnPointer.value
            console.log(this.bets.balance,this.bets.currentBet)

        }
        return true

        }
        
     
return false



        return false

    }
}
