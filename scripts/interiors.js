import { getInteriors, setInteriors } from "./database.js";

const interiors = getInteriors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "interiors") {
            setInteriors(parseInt(event.target.value))
        }
    }
)

export const Interiors = () => {
    let html = "<h2>Interior Materials</h2>"

    html += '<select id="interiors">'
    html += '<option value="0">Select an interior material option:</option>'    

    for (const interior of interiors) {
        html += `<option value="${interior.id}">${interior.material}</option>`
    }

    html += "</select>"
    return html
}