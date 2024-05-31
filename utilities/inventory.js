export const globalInventory = {}
export let globalInventoryWeight = 0
export let globalInventoryValue = 0
export {addToInventory, getInventory, removeFromInventory}

function addToInventory(items) {
    for (let item of items) {
    if (!(item.name in globalInventory)) {
        globalInventory[item.name] = 1

    } else {
        globalInventory[item.name] ++
    }
    globalInventoryWeight += item.weight
    globalInventoryValue += item.value
}
return globalInventory
}

function getInventory(globalInventory) {
    let inventoryArray = Object.entries(globalInventory);
    inventoryArray.sort((a, b) => b[1] - a[1]);

    let inventoryString = '';
    for (let [key, value] of inventoryArray) {
        inventoryString += `${key}: ${value}, `;
    }

    if (inventoryString.length > 0) {
        inventoryString = inventoryString.slice(0, -2);
    }

return  `Inventory: ${inventoryString}\nTotal Weight: ${globalInventoryWeight}\nTotal Value: ${globalInventoryValue}`;

}



function removeFromInventory(items, amount) {
    if (Object.keys(globalInventory).length === 0) {
        return `Your inventory is empty!`;
    }

    for (let item of items) {
        if (!(item.name in globalInventory)) {
            return `${item.name} not found`;
        } else {
            if (globalInventory[item.name] < amount) {
                return `Not enough ${item.name} in inventory`;
            }
            globalInventory[item.name] -= amount;
            globalInventoryWeight -= item.weight * amount;
            globalInventoryValue -= item.value * amount;
            
            if (globalInventory[item.name] === 0) {
                delete globalInventory[item.name];
            }
            
            console.log(`${item.name} removed from inventory`);
        }
    }
return globalInventory

}





