export default class Rullet {
    constructor(ctx) {
        this.ctx = ctx
        this.radius = 220
        this.posX = 325
        this.posY = 300
        this.numbers = [0,32,15,19,4,21,2,25,17,34,6,27,13,36,11,30,8,23,10,5,24,16,33,1,20,14,31,9,22,18,29,7,28,12,35,3,26]
        this.draw()
    }
    draw() {
        this.ctx.beginPath()
        this.ctx.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
        this.ctx.fillStyle = "black";
        this.ctx.fill();
        this.ctx.beginPath()
        this.ctx.arc(this.posX, this.posY, this.radius - 12, 0, 2 * Math.PI);
        this.ctx.fillStyle = 'white';
        this.ctx.fill();
        for(let i = 0; i < 37; i++){
            this.drawPice(this.numbers[i],i)
        }
    }
    drawPice(number,position) {
        let color = ""
        if (number == 0) {
            color = "green"
        }
        else if (number == 1 || number == 3 || number == 5 || number == 7 || number == 9 || number == 12 || number == 14 || number == 16 || number == 18 || number == 19 || number == 21 || number == 23 || number == 25 || number == 27 || number == 30 || number == 32 || number == 34 || number == 36) {
            color = "red"
        }
        else {
            color = "black"
        }
        this.ctx.beginPath()
        this.ctx.arc(this.posX, this.posY, this.radius - 12, 2 * Math.PI *position/37 ,2 * Math.PI*(position+1)/37);
        this.ctx.lineTo(this.posX,this.posY)
        this.ctx.fillStyle = color;
        this.ctx.fill();
        this.ctx.font = '16px Arial'
        this.ctx.textAlign = 'center'
        this.ctx.textBaseline = 'middle'
        this.ctx.fillStyle = 'white'
        this.ctx.rotate(2 * Math.PI*(position+0.5)/37)
        // this.ctx.fillText(number.toString(), this.posX+200*Math.cos(2 * Math.PI*(position+0.5)/37), this.posY + 200*Math.sin(2 * Math.PI*(position+0.5)/37) 
        this.ctx.fillText(number.toString(), this.posX, this.posY  )
        this.ctx.rotate(-2 * Math.PI*(position+0.5)/37)
    }























}