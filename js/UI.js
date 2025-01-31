import TokenBtn from "./Bottom/TokenBtn.js"
import TokenBtnPointer from "./Universal/TokenButtonPointer.js"
import Table from "./Center/Table.js"
import Rullet from "../Rullet/Rullet.js"


export default class UI {

    constructor(ctx, mouseControler) {
        this.tokenBtnPointers = []
        this.btnPointer = new TokenBtnPointer(ctx, 0, 0, '', '', false)
        this.buttons = []
        this.rullet = new Rullet(ctx)
        this.bets = 
        {
balance: 50000, 
currentBet: 0,
        }
        ctx.fillStyle = 'black'
        ctx.fillRect(0, 0, 1500, 50)
        ctx.fillStyle = 'green'
        ctx.fillRect(0, 50, 1500, 500)
        ctx.fillStyle = 'black'
        ctx.fillRect(0, 550, 1500, 100)
        this.ctx = ctx

        mouseControler.addToWatch(this.btnPointer)

        this.buttons.push(new TokenBtn(ctx, 50, 600, 'purple', '0.1', this.btnPointer,0.1))
        this.buttons.push(new TokenBtn(ctx, 150, 600, 'green', '0.5', this.btnPointer,0.5))
        this.buttons.push(new TokenBtn(ctx, 250, 600, 'blue', '1', this.btnPointer,1))
        this.buttons.push(new TokenBtn(ctx, 350, 600, 'lime', '5', this.btnPointer,5))
        this.buttons.push(new TokenBtn(ctx, 450, 600, 'pink', '25', this.btnPointer,25))
        this.buttons.push(new TokenBtn(ctx, 550, 600, 'gray', '100', this.btnPointer,100))
        this.buttons.push(new TokenBtn(ctx, 650, 600, 'orange', '500', this.btnPointer,500))
        this.buttons.push(new TokenBtn(ctx, 750, 600, 'gold', '1k', this.btnPointer,1000))
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
        this.ctx.fillRect(0, 550, 1500, 100)

        this.ctx.fillStyle = "white"
        this.ctx.fillRect(1200,550,5,100)
        this.ctx.fillRect(1200,598,300,5)

        this.ctx.font = '20px Arial'
        this.ctx.textAlign = 'left'
        this.ctx.textBaseline = 'middle'
        this.ctx.fillText("Saldo: " + this.bets.balance,1210,575)
        this.ctx.fillText("Zakład: " + this.bets.currentBet,1360,575)
        
        for (let i = 0; i < this.buttons.length; i++) {
            this.buttons[i].draw()
        }
    }

    drawCenter() {
        this.ctx.fillStyle = '#3A2618'
        this.ctx.fillRect(0, 50, 1500, 500)
        this.table.draw()
this.rullet.draw()
        for (let i = 0; i < this.tokenBtnPointers.length; i++) {
            this.tokenBtnPointers[i].draw()


        }
    }

    drawTop() {
        this.ctx.fillStyle = 'black'
        this.ctx.fillRect(0, 0, 1500, 50)
    }


}