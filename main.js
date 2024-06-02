// main.js
import { factoryItems } from "./data/factoryItems.js";
import { miningBlocks } from "./data/miningBlocks.js";
import { miningItems } from "./data/miningItems.js";
import { smeltedItems } from "./data/smeltedItems.js";
import { craftAllItems, craftItem, craftMultipleItems } from "./utilities/crafting.js";
import { addToInventory, getInventory, globalInventory } from "./utilities/inventory.js";

function main() {
addToInventory([miningItems.coal, miningItems.diamond, miningItems.copperOre, miningItems.copperOre,
    miningItems.copperOre, miningItems.copperOre, miningItems.copperOre, miningItems.copperOre,
     miningItems.copperOre, miningItems.copperOre, miningItems.copperOre])
getInventory(globalInventory)
craftItem(smeltedItems.copperIngot)
getInventory(globalInventory)
craftMultipleItems(smeltedItems.copperIngot, 5)
getInventory(globalInventory)
addToInventory([miningItems.zincOre, miningItems.zincOre,miningItems.zincOre,miningItems.zincOre,
    miningItems.zincOre,miningItems.zincOre,miningItems.zincOre,miningItems.zincOre,
    miningItems.zincOre,miningItems.zincOre,miningItems.zincOre,miningItems.zincOre, ])
craftAllItems(smeltedItems.zincIngot)

}

main();
