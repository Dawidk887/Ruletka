import TokenBtn from "./Bottom/TokenBtn.js"
import TokenBtnPointer from "./Universal/TokenButtonPointer.js"
import Table from "./Center/Table.js"


export default class UI {

    constructor(ctx, mouseControler) {
        this.tokenBtnPointers = []
        this.btnPointer = new TokenBtnPointer(ctx, 0, 0, '', '', false)
        this.buttons = []
        this.bets = 
        {
balance: 50000, 
currentBet: 0,
        }
        ctx.fillStyle = 'black'
        ctx.fillRect(0, 0, 1100, 100)
        ctx.fillStyle = 'green'
        ctx.fillRect(0, 100, 1100, 600)
        ctx.fillStyle = 'black'
        ctx.fillRect(0, 700, 1100, 100)
        this.ctx = ctx

        mouseControler.addToWatch(this.btnPointer)

        this.buttons.push(new TokenBtn(ctx, 50, 750, 'purple', '0.1', this.btnPointer,0.1))
        this.buttons.push(new TokenBtn(ctx, 150, 750, 'green', '0.5', this.btnPointer,0.5))
        this.buttons.push(new TokenBtn(ctx, 250, 750, 'blue', '1', this.btnPointer,1))
        this.buttons.push(new TokenBtn(ctx, 350, 750, 'lime', '5', this.btnPointer,5))
        this.buttons.push(new TokenBtn(ctx, 450, 750, 'pink', '25', this.btnPointer,25))
        this.buttons.push(new TokenBtn(ctx, 550, 750, 'gray', '100', this.btnPointer,100))
        this.buttons.push(new TokenBtn(ctx, 650, 750, 'orange', '500', this.btnPointer,500))
        this.buttons.push(new TokenBtn(ctx, 750, 750, 'gold', '1k', this.btnPointer,1000))
        this.table = new Table(this.ctx, mouseControler, this.tokenBtnPointers, this.btnPointer,this.bets)


        for (let i = 0; i < this.buttons.length; i++) {
            mouseControler.addToWatch(this.buttons[i])
        }



        setInterval(() => {
            this.drawTop()
            this.drawCenter()
            this.drawBottom()
            this.btnPointer.draw()
        }, 30);
    }

    drawBottom() {
        this.ctx.fillStyle = 'black'
        this.ctx.fillRect(0, 700, 1100, 100)

        this.ctx.fillStyle = "white"
        this.ctx.fillRect(800,700,5,100)
        this.ctx.fillRect(800,748,300,5)

        this.ctx.font = '20px Arial'
        this.ctx.textAlign = 'left'
        this.ctx.textBaseline = 'middle'
        this.ctx.fillText("Saldo: " + this.bets.balance,810,725)
        this.ctx.fillText("Zakład: " + this.bets.currentBet,960,725)
        
        for (let i = 0; i < this.buttons.length; i++) {
            this.buttons[i].draw()
        }
    }

    drawCenter() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 100, 1100, 600)
        this.table.draw()

        for (let i = 0; i < this.tokenBtnPointers.length; i++) {
            this.tokenBtnPointers[i].draw()


        }
    }

    drawTop() {
        this.ctx.fillStyle = 'black'
        this.ctx.fillRect(0, 0, 1100, 100)
    }


}