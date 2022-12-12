import { Colors } from "./paints.js"
import { Interiors } from "./interiors.js"
import { Technologies } from "./technologies.js"
import { Wheels } from "./wheels.js"
import { Orders } from "./orders.js"
import { addCustomOrder } from "./database.js"

document.addEventListener(
    "click",
    (event) => {
        if(event.target.id === "orderButton") {
            addCustomOrder()
            // window.alert(` `)
        }
    }
)

export const CarsRUS = () => {
    return `
        <h1>Cars-R-Us</h1>

        <article class="choices">
            <section class="choices__colors options">
                ${Colors()}
            </section>
            <section class="choices__interiors options">
                ${Interiors()}
            </section>
            <section class="choices__technologies options">
                ${Technologies()}
            </section>
            <section class="choices__wheels options">
                ${Wheels()}
            </section>
        </article>
        </article>
        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>
        
        <article class="customOrders">
            ${Orders()}
            

    `
}