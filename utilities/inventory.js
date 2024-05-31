export const globalInventory = {   
}

function addToInventory(items) {
    for (let item of items) {
    if (!(item in globalInventory)) {
        globalInventory[item] = 1
    } else {
        globalInventory[item] ++
    }
    console.log(`added ${item} to inventory`)   
}

return globalInventory
}

function removeFromInventory(items) {
    if (globalInventory.lenght === 0) {
        return `Your inventory is empty!`
    }
    for (let item in items) {
    if (!(item in globalInventory)) {
        return `${item} not found`
    } else {
        globalInventory[item] --
        console.log(`${item} removed from inventory`)
    }
}
return globalInventory

}



export { 
    addToInventory,
    removeFromInventory,
}