import TableField from "./TableField.js"

export default class Table {t
    constructor(ctx, mouseControler,tokenBtnPointers,btnPointer,bets) {
        this.ctx = ctx
        this.tableFields = []
        this.tableFieldsSpecial = []
        this.colorConfig = [
            ['red', 'black', 'red', 'red', 'black', 'red', 'red', 'black', 'red', 'red', 'black', 'red'],
            ['black', 'red', 'black', 'black', 'red', 'black', 'black', 'red', 'black', 'black', 'red', 'black'],
            ['red', 'black', 'red', 'black', 'black', 'red', 'red', 'black', 'red', 'black', 'black', 'red']
        ]
        for (let i = 0; i < 3; i++) {
            let tableFieldsRow = []
            for (let j = 0; j < 12; j++) {
                let tableField = new TableField(this.ctx, 700 + 55 * j, 200 + 75 * i, (1 + 3 * j + 2 - i).toString(), 1, this.colorConfig[i][j], 'false',tokenBtnPointers,btnPointer,bets)
                tableFieldsRow.push(tableField)
                mouseControler.addToWatch(tableField)
            }
            this.tableFields.push(tableFieldsRow)
        }

        this.tableFieldsSpecial.push(new TableField(this.ctx, 700 + 55*0, 125, "1-12", 4,"green","false",tokenBtnPointers,btnPointer,bets))
        this.tableFieldsSpecial.push(new TableField(this.ctx, 700 + 55*4, 125, "13-24", 4,"green","false",tokenBtnPointers,btnPointer,bets))
        this.tableFieldsSpecial.push(new TableField(this.ctx, 700 + 55*8, 125, "25-36", 4,"green","false",tokenBtnPointers,btnPointer,bets))

        this.tableFieldsSpecial.push(new TableField(this.ctx, 700, 425, "1-18", 2,"green","false",tokenBtnPointers,btnPointer,bets))
        this.tableFieldsSpecial.push(new TableField(this.ctx, 700 + 55*2, 425, "Even", 2,"green","false",tokenBtnPointers,btnPointer,bets))
        this.tableFieldsSpecial.push(new TableField(this.ctx, 700 + 55*4, 425, "RED", 2,"green","false",tokenBtnPointers,btnPointer,bets))
        this.tableFieldsSpecial.push(new TableField(this.ctx, 700 + 55*6, 425, "BLACK", 2,"green","false",tokenBtnPointers,btnPointer,bets))
        this.tableFieldsSpecial.push(new TableField(this.ctx, 700 + 55*8, 425, "Odd", 2,"green","false",tokenBtnPointers,btnPointer,bets))
        this.tableFieldsSpecial.push(new TableField(this.ctx, 700 + 55*10, 425, "19-36", 2,"green","false",tokenBtnPointers,btnPointer,bets))

        this.tableFieldsSpecial.push(new TableField(this.ctx, 645, 200, "0", 1,"green","false",tokenBtnPointers,btnPointer,bets,220))

        this.tableFieldsSpecial.push(new TableField(this.ctx, 700 + 55*12, 200, "2to1", 1,"green","false",tokenBtnPointers,btnPointer,bets))
        this.tableFieldsSpecial.push(new TableField(this.ctx, 700 + 55*12, 275, "2to1", 1,"green","false",tokenBtnPointers,btnPointer,bets))
        this.tableFieldsSpecial.push(new TableField(this.ctx, 700 + 55*12, 350, "2to1", 1,"green","false",tokenBtnPointers,btnPointer,bets))

        for(let i = 0 ; i < this.tableFieldsSpecial.length; i++ ){
            mouseControler.addToWatch(this.tableFieldsSpecial[i])
            
        } 
      
    }







    
        
    
    draw() {
        
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(700 - 5, 125 - 5, 55 * 12 + 6, 75 * 5 + 6)
        this.ctx.fillRect(645 - 5, 200 - 5, 55 * 14 + 6, 75 * 3 + 6)
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 12; j++) {
                this.tableFields[i][j].draw()
            }
        }
        for(let i = 0; i < this.tableFieldsSpecial.length; i++){
        this.tableFieldsSpecial[i].draw()
        }
    }
}