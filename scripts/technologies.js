import { getTechnologies, setTechnologies } from "./database.js";

const techs = getTechnologies()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "tech") {
            setTechnologies(parseInt(event.target.value))
        }
    }
)

export const Technologies = () => {
    let html = "<h2>Technologies</h2>"

    html += '<select id="tech">'
    html += '<option value="0">Select a technology package:</option>'    

    for (const tech of techs) {
        html += `<option value="${tech.id}">${tech.option}</option>`
    }

    html += "</select>"
    return html
}