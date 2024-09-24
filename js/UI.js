//import TokenBtn from "./Bottom/TokenBtn.JS"
//import Table from "./Center/Table.Js"

class UI {

    constructor(ctx, mouseControler) {
        this.buttons = []
        ctx.fillStyle = 'black'
        ctx.fillRect(0, 0, 1000, 100)
        ctx.fillStyle = 'green'
        ctx.fillRect(0, 100, 1000, 600)
        ctx.fillStyle = 'black'
        ctx.fillRect(0, 700, 1000, 100)
        this.ctx = ctx

        this.buttons.push(new TokenBtn(ctx, 50, 750, 'purple', '0.1'))
        this.buttons.push(new TokenBtn(ctx, 150, 750, 'green', '0.5'))
        this.buttons.push(new TokenBtn(ctx, 250, 750, 'blue', '1'))
        this.buttons.push(new TokenBtn(ctx, 350, 750, 'lime', '5'))
        this.buttons.push(new TokenBtn(ctx, 450, 750, 'pink', '25'))
        this.buttons.push(new TokenBtn(ctx, 550, 750, 'gray', '100'))
        this.buttons.push(new TokenBtn(ctx, 650, 750, 'orange', '500'))
        this.buttons.push(new TokenBtn(ctx, 750, 750, 'gold', '1k'))
        this.table = new Table(ctx, mouseControler)

        for (let i = 0; i < this.buttons.length; i++) {
            mouseControler.addToWatch(this.buttons[i])
        }

        setInterval(() => {
            this.drawCenter()
            this.drawBottom()
        }, 10);
    }

    drawBottom() {
        this.ctx.fillStyle = 'black'
        this.ctx.fillRect(0, 700, 1000, 100)
        for (let i = 0; i < this.buttons.length; i++) {
            this.buttons[i].draw()
        }
    }

    drawCenter() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 100, 1000, 600)
        this.table.draw()
    }

    drawTop() {}
}