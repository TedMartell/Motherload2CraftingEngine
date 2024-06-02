export const globalInventory = new Map();
export let globalInventoryWeight = 0
export let globalInventoryValue = 0
export {addToInventory, getInventory, removeFromInventory}

function addToInventory(items) {
    for (let item of items) {
        let foundItem = Array.from(globalInventory.keys()).find(invItem => invItem.name === item.name);
        if (!foundItem) {
            globalInventory.set(item, 1);
        } else {
            globalInventory.set(foundItem, globalInventory.get(foundItem) + 1);
        }
        globalInventoryWeight += item.weight;
        globalInventoryValue += item.value;
        console.log(`added ${item.name} to inventory`)
    }
    return globalInventory;
}


function removeFromInventory(items, amount) {
    if (globalInventory.size === 0) {
        return `Your inventory is empty!`;
    }

    for (let item of items) {
        let foundItem = Array.from(globalInventory.keys()).find(invItem => invItem.name === item.name);
        if (!foundItem) {
            return `${item.name} not found`;
        } else {
            if (globalInventory.get(foundItem) < amount) {
                return `Not enough ${item.name} in inventory`;
            }
            globalInventory.set(foundItem, globalInventory.get(foundItem) - amount);
            globalInventoryWeight -= (item.weight * amount);
            globalInventoryValue -= (item.value * amount);
            
            if (globalInventory.get(foundItem) === 0) {
                globalInventory.delete(foundItem);
            }
            
            console.log(`${amount}x${item.name} removed from inventory`);
        }
    }
    return globalInventory;
}


function getInventory(globalInventory) {
    let inventoryString = '';
    for (let [key, value] of globalInventory) {
        inventoryString += `${key.name}: ${value}, `;
    }
    if (inventoryString.length > 0) {
        inventoryString = inventoryString.slice(0, -2);
    }
    console.log(`Inventory: ${inventoryString}\nTotal Weight: ${globalInventoryWeight}\nTotal Value: ${globalInventoryValue}`)
    return `Inventory: ${inventoryString}\nTotal Weight: ${globalInventoryWeight}\nTotal Value: ${globalInventoryValue}`;
}






