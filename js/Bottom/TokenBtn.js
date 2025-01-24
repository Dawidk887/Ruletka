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
        
    }

    animateUp() {
        this.hoverd = true

       // if (this.state === 0) {
         //   this.radius = 50
           // this.posY -= 10
            //this.draw()
            //this.state = 1
      //  }
    }

    animateDown() {
        this.hoverd = false

    }

    draw() {
        if(this.state < 20 && this.hoverd)
            {
            this.state++
        }
        if (this.state > 1 && !this.hoverd) {
            this.state--
                   }
        let modifaierPosY = this.state* -0.5 
        this.ctx.beginPath()
        this.ctx.arc(this.posX, this.posY + modifaierPosY, this.radius + this.state*0.5, 0, 2 * Math.PI);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.beginPath()
        this.ctx.arc(this.posX, this.posY + modifaierPosY, this.radius + this.state*0.5 - 12, 0, 2 * Math.PI);
        this.ctx.fillStyle = 'white';
        this.ctx.fill();
        this.ctx.font = '20px Arial'
        this.ctx.textAlign = 'center'
        this.ctx.textBaseline = 'middle'
        this.ctx.fillStyle = 'black'
        this.ctx.fillText(this.text, this.posX, this.posY + modifaierPosY)
    }

    onHover(mousePosX, mousePosY) {

        if (Math.sqrt((this.posX - mousePosX) * (this.posX - mousePosX) + (this.posY - mousePosY) * (this.posY - mousePosY)) < this.radius) {
            this.animateUp()

            return true
        }

        this.animateDown()
        return false

    }
    onClick(mousePosX, mousePosY) {

        if (Math.sqrt((this.posX - mousePosX) * (this.posX - mousePosX) + (this.posY - mousePosY) * (this.posY - mousePosY)) < this.radius) {
            console.log('onClick', this.text) 
            this.tokenBtnPointer.posX = mousePosX
            this.tokenBtnPointer.posY = mousePosY
            this.tokenBtnPointer.color = this.color
            this.tokenBtnPointer.text = this.text
            this.tokenBtnPointer.visible = true
            this.tokenBtnPointer.value = this.value

            return true
        }
        return false

    }
    
}
