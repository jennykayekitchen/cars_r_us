import { getColors, setColors } from "./database.js";

const colors = getColors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "colors") {
            setColors(parseInt(event.target.value))
        }
    }
)

export const Colors = () => {
    let html = "<h2>Paint Colors</h2>"

    html += '<select id="colors">'
    html += '<option value="0">Select an exterior color option:</option>'    

    for (const color of colors) {
        html += `<option value="${color.id}">${color.color}</option>`
    }

    html += "</select>"
    return html
}