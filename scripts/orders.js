import { getOrders, getColors, getInteriors, getTechnologies, getWheels } from "./database.js";


const colors = getColors()
const interiors = getInteriors()
const technologies = getTechnologies()
const wheels = getWheels()

const buildOrderListItem = (order) => {
    const foundColors = colors.find(
        (color) => {
            return color.id === order.colorsId
        }
    )

    const foundInteriors = interiors.find(
        (interior) => {
            return interior.id === order.interiorsId
        }
    )

    const foundTechnologies = technologies.find(
        (tech) => {
            return tech.id === order.technologiesId
        }
    )

    const foundWheels = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelsId
        }
    )

    const totalCost = foundColors.price + foundInteriors.price + foundTechnologies.price + foundWheels.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    }
    )

    return `<li>
                Order #${order.id} cost ${costString}
                </li>`
}

export const Orders = () => {
    /*
    Can you explain why the state variable has to be inside
    the component function for Orders, but not the others?
    */
    const orders = getOrders()



    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}