// main.js
import { factoryItems } from "./data/factoryItems.js";
import { miningBlocks } from "./data/miningBlocks.js";
import { miningItems } from "./data/miningItems.js";
import { smeltedItems } from "./data/smeltedItems.js";

function main() {
console.log(miningBlocks.dirtBlock.drops)
console.log(miningBlocks.diamondBlock.hp)
console.log(miningBlocks.ironOreBlock.drops)
console.log(miningBlocks.silverOreBlock.drops)
console.log(miningBlocks.zincOreBlock.drops)
console.log(miningBlocks.dirtBlock.rarity)
console.log(miningBlocks.rareEarthMineralsBlock.rarity)
console.log(smeltedItems.goldIngot.craftingTime)
console.log(smeltedItems.stainlessSteel.recipe)
console.log(smeltedItems.copperIngot.value)
console.log(smeltedItems.aluminiumIngot.name)
console.log(smeltedItems.steel.name)
console.log(smeltedItems.steel.craftingTime)
console.log(factoryItems.laserWeapon.recipe)
console.log(factoryItems.copperWire.name)
console.log(factoryItems.solarpanel.craftingTime)
console.log(factoryItems.laserWeapon.value)
console.log(miningItems.chromiumOre.name)
console.log(miningItems.goldOre.weight)
console.log(miningItems.silverOre.value)
console.log(miningItems.rareEarthMinerals.name)


}

main();
