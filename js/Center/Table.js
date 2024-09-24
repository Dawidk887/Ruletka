//import TableField from "./TableField"
 class Table {
    constructor(ctx, mouseControler) {
        this.ctx = ctx
        this.tableFields = []
        this.colorConfig = [
            ['red', 'black', 'red', 'red', 'black', 'red', 'red', 'black', 'red', 'red', 'black', 'red'],
            ['black', 'red', 'black', 'black', 'red', 'black', 'black', 'red', 'black', 'black', 'red', 'black'],
            ['red', 'black', 'red', 'black', 'black', 'red', 'red', 'black', 'red', 'black', 'black', 'red']
        ]
        for (let i = 0; i < 3; i++) {
            let tableFieldsRow = []
            for (let j = 0; j < 12; j++) {
                let tableField = new TableField(ctx, 300 + 53 * j, 200 + 73 * i, (1 + 3 * j + 2 - i).toString(), 1, this.colorConfig[i][j], 'false')
                tableFieldsRow.push(tableField)
                mouseControler.addToWatch(tableField)
            }
            this.tableFields.push(tableFieldsRow)
        }
    }

    draw() {
        
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(300 - 3, 200 - 3, 53 * 12 + 6, 73 * 3 + 6)
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 12; j++) {
                this.tableFields[i][j].draw()
            }
        }
    }
}