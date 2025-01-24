import UI from "./UI.js"
import MouseControler from "./Utilities/MouseControler.js"

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const mouseControler = new MouseControler()
canvas.addEventListener('mousemove', function (event) {
    mouseControler.verifyHover(event, canvas)

})
canvas.addEventListener("click", function (event) {
    mouseControler.verifyClick(event, canvas)

})
new UI(ctx, mouseControler)

