const database = {
    colors: [
        { id: 1, color: "Silver", price: 500 },
        { id: 2, color: "Midnight Blue", price: 700 },
        { id: 3, color: "Firebrick Red", price: 500 },
        { id: 4, color: "Spring Green", price: 600 }
    ],
    interiors: [
        { id: 1, material: "Beige Fabric", price: 400 },
        { id: 2, material: "Charcol Fabric", price: 400 },
        { id: 3, material: "White Leater", price: 500 },
        { id: 4, material: "Black Leather", price: 500 },
    ],
    technologies: [
        { id: 1, option: "Basic Package", price: 100 },
        { id: 2, option: "Navigation Package", price: 200 },
        { id: 3, option: "Visibility Package", price: 200 },
        { id: 4, option: "Ultra Package", price: 400 },
    ],
    wheels: [
        { id: 1, option: "17-inch Pair Radial", price: 100 },
        { id: 2, option: "17-inch Pair Radial Black", price: 200 },
        { id: 3, option: "18-inch Pair Spoke Silver", price: 200 },
        { id: 4, option: "18-inch Pair Spoke Black", price: 400 },
    ],
    customOrders: [
        {
            id: 1,
            colorsId: 1,
            interiorsId: 1,
            technologiesId: 1,
            wheelsId: 1,
            timestamp: 1614659931693
        }
    ],
    orderBuilder: {},
}

export const getColors = () => {
    return database.colors.map(color => ({...color}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
}

export const getWheels = () => {
    return database.wheels.map(wheel =>({...wheel}))
}

export const getOrders = () => {
    return database.customOrders.map(customOrder => ({...customOrder}))
}

export const setColors = (id) => {
    database.orderBuilder.colorsId = id
}

export const setInteriors = (id) => {
    database.orderBuilder.interiorsId = id
}

export const setTechnologies = (id) => {
    database.orderBuilder.technologiesId = id
}

export const setWheels = (id) => {
    database.orderBuilder.wheelsId = id
}

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}