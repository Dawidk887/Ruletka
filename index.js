class UI {
    constructor(ctx, mouseControler) {
        ctx.fillStyle = 'black'
        ctx.fillRect(0, 0, 1000, 100)
        ctx.fillStyle = 'green'
        ctx.fillRect(0, 100, 1000, 600)
        ctx.fillStyle = 'black'
        ctx.fillRect(0, 700, 1000, 100)
        mouseControler.addToWatch(new TokenBtn(ctx, 50, 750, 'purple', '0.1'))
        mouseControler.addToWatch(new TokenBtn(ctx, 150, 750, 'green', '0.5'))
        mouseControler.addToWatch(new TokenBtn(ctx, 250, 750, 'blue', '1'))
        mouseControler.addToWatch(new TokenBtn(ctx, 350, 750, 'lime', '5'))
        mouseControler.addToWatch(new TokenBtn(ctx, 450, 750, 'pink', '25'))
        mouseControler.addToWatch(new TokenBtn(ctx, 550, 750, 'gray', '100'))
        mouseControler.addToWatch(new TokenBtn(ctx, 650, 750, 'orange', '500'))
        mouseControler.addToWatch(new TokenBtn(ctx, 750, 750, 'gold', '1k'))
    }







}
class Table {
    constructor(ctx, mouseControler) {
        this.colorConfig = [
            ['red', 'black', 'red', 'red', 'black', 'red', 'red', 'black', 'red', 'red', 'black', 'red'],
            ['black', 'red', 'black', 'black', 'red', 'black', 'black', 'red', 'black', 'black', 'red', 'black'],
            ['red', 'black', 'red', 'black', 'black', 'red', 'red', 'black', 'red', 'black', 'black', 'red']

        ]
        ctx.fillStyle = 'white'
        ctx.fillRect(300 - 3, 200 - 3, 53 * 12 + 6, 73 * 3 + 6)

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 12; j++) {
                mouseControler.addToWatch(new TableField(ctx, 300 + 53 * j, 200 + 73 * i, (1 + 3 * j + 2 - i).toString(), 1, this.colorConfig[i][j], 'false'))


            }

        }








    }





}
class TableField {
    constructor(ctx, posX, posY, label, size, color, condition) {
        this.baseWidth = 50
        this.baseHeight = 70
        this.posX = posX
        this.posY = posY
        ctx.fillStyle = color
        ctx.fillRect(posX, posY, this.baseWidth * size, this.baseHeight)
        ctx.font = '20px Arial'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillStyle = 'white'
        ctx.fillText(label, posX + this.baseWidth / 2, posY + this.baseHeight / 2)





    }

    onHover(mousePosX, mousePosY) {


        if (this.posX < mousePosX && this.posY < mousePosY && this.posX + this.baseWidth > mousePosX && this.baseHeight + this.posY > mousePosY) {
            console.log('onHover', this.text)

            return true
        }
        return false

    }




}

class Rulette {
    constructor() {




    }





}
class TokenBtn {

    constructor(ctx, posX, posY, color, text) {
        this.posX = posX
        this.posY = posY
        this.radius = 40
        this.color = color
        this.text = text

       this.draw()


    }
    animate() {
        this.radius = 50
        this.posY -= 10
        this.draw()

    }
    draw() {
        ctx.beginPath()
        ctx.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.beginPath()
        ctx.arc(this.posX, this.posY, this.radius - 12, 0, 2 * Math.PI);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.font = '20px Arial'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillStyle = 'black'
        ctx.fillText(this.text, this.posX, this.posY)


    }
    onHover(mousePosX, mousePosY) {


        if (Math.sqrt((this.posX - mousePosX) * (this.posX - mousePosX) + (this.posY - mousePosY) * (this.posY - mousePosY)) < this.radius) {
            console.log('onHover', this.text)
          this.animate()

            return true
        }
        return false

    }






}

class MouseControler {
    constructor() {
        this.watchedElements = []










    }
    addToWatch(element) {
        this.watchedElements.push(element)
    }
    verify(event, canvas) {
        const isElemntHover = this.watchedElements.some(function (element) {
            return element.onHover(event.clientX - canvas.getBoundingClientRect().left, event.clientY - canvas.getBoundingClientRect().top)







        })
        if (isElemntHover) {
            canvas.style = 'cursor:pointer'



        }
        else {
            canvas.style = 'cursor:deafault'


        }
    }








}
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const mouseControler = new MouseControler()
canvas.addEventListener('mousemove', function (event) {
    mouseControler.verify(event, canvas)



})
new UI(ctx, mouseControler)

new Table(ctx, mouseControler)