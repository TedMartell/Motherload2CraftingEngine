// main.js
import { factoryItems } from "./data/factoryItems.js";
import { miningBlocks } from "./data/miningBlocks.js";
import { smeltedItems } from "./data/smeltedItems.js";

function main() {
console.log(miningBlocks.dirt.value)
console.log(miningBlocks.diamond.value)
console.log(miningBlocks.ironOre.hp)
console.log(miningBlocks.silverOre.weight)
console.log(miningBlocks.zincOre.rarity)
console.log(miningBlocks.dirt.rarity)
console.log(miningBlocks.rareEarthMinerals.rarity)
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


}

main();
