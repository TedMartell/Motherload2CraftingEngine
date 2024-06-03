import { addToInventory, removeFromInventory } from "./inventory.js";
import { globalInventory } from "./inventory.js";
export {craftItem, craftMultipleItems, craftAllItems}

function craftItem(newItem) {
    const recipe = newItem.recipe;

    // Check if all required items and their quantities are present in the inventory
    for (let [requiredItemName, requiredQuantity] of Object.entries(recipe)) {
        let requiredItem = Array.from(globalInventory.keys()).find(invItem => invItem.name === requiredItemName);
        if (!requiredItem || globalInventory.get(requiredItem) < requiredQuantity) {
            console.log(`Not enough ${requiredItemName} in inventory`)
            return `Not enough ${requiredItemName} in inventory`;
        }
    }

    // Remove the required items from the inventory
    for (let [requiredItemName, requiredQuantity] of Object.entries(recipe)) {
        let requiredItem = Array.from(globalInventory.keys()).find(invItem => invItem.name === requiredItemName);
        if (requiredItem) {
            removeFromInventory([requiredItem], requiredQuantity);
        }
    }

    addToInventory([newItem]);

    return `Crafted ${newItem.name} and added it to inventory`;
}

function craftMultipleItems(newItem, amount) {
    const recipe = newItem.recipe;
    while (amount > 0){
    craftItem(newItem)
    amount -= 1;
    }
}

function craftAllItems(newItem) {
    let craftedCount = 0;
    while (true) {
        const result = craftItem(newItem);
        if (result.startsWith("Not enough")) {
            break;
        }
        craftedCount++;
    }
    console.log(`Crafted ${craftedCount} ${newItem.name}(s) and added them to inventory`)
    return `Crafted ${craftedCount} ${newItem.name}(s) and added them to inventory`;
}



