import { addToInventory, removeFromInventory } from "./inventory.js";
import { globalInventory } from "./inventory.js";
export {craftItem, craftMultipleItems, craftAllItems}

function craftItem(newItem) {
    const recipe = newItem.recipe;

    // Check if all required items and their quantities are present in the inventory
    for (let [requiredItemName, requiredQuantity] of Object.entries(recipe)) {
        let requiredItem = Array.from(globalInventory.keys()).find(invItem => invItem.name === requiredItemName);
        if (!requiredItem || globalInventory.get(requiredItem) < requiredQuantity) {
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

    // Add the crafted item to the inventory
    addToInventory([newItem]);
    amount -= 1;
    }
    return `Crafted ${amount}x ${newItem.name} and added it to inventory`;
}

function craftAllItems(newItem) {
    const recipe = newItem.recipe;
    for (let [requiredItemName, requiredQuantity] of Object.entries(recipe)) {
        let requiredItem = Array.from(globalInventory.keys()).find(invItem => invItem.name === requiredItemName);
        if (!requiredItem || globalInventory.get(requiredItem) < requiredQuantity) {
            console.log(`Not enough ${requiredItemName} in inventory`)
            return `Not enough ${requiredItemName} in inventory`;
        }
    }
    return craftAllItems(newItem)
}

