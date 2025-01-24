export default class MouseControler {

    constructor() {

        this.watchedElements = []
    }

    addToWatch(element) {
        this.watchedElements.push(element)
    }

    verifyHover(event, canvas) {
        const isElemntHover = this.watchedElements.some(function (element) {
            return element.onHover(event.clientX - canvas.getBoundingClientRect().left, event.clientY - canvas.getBoundingClientRect().top)
        }
        )
        if (isElemntHover) {
            canvas.style = 'cursor:pointer'
        }
        else {
            canvas.style = 'cursor:deafault'
        }

    }

    verifyClick(event, canvas) {
         this.watchedElements.some(function (element) {
            return element.onClick(event.clientX - canvas.getBoundingClientRect().left, event.clientY - canvas.getBoundingClientRect().top)
        })
    }

}
