import { getWheels, setWheels } from "./database.js";

const wheels = getWheels()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "wheels") {
            setWheels(parseInt(event.target.value))
        }
    }
)

export const Wheels = () => {
    let html = "<h2>Wheel Options</h2>"

    html += '<select id="wheels">'
    html += '<option value="0">Select a wheel option:</option>'    

    for (const wheel of wheels) {
        html += `<option value="${wheel.id}">${wheel.option}</option>`
    }

    html += "</select>"
    return html
}