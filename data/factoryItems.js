import { miningBlocks } from "./miningBlocks.js";
import { smeltedItems } from "./smeltedItems.js";



export const factoryItems = {
    copperWire: {
        name: "Copper Wire",
        value: 18,
        recipe: {
            [smeltedItems.copperIngot.name]: 2
        },
        craftingTime: 10
    },
    battery: {
        name: "Battery",
        value: 68,
        recipe: {
            [smeltedItems.zincIngot.name]: 2,
            [smeltedItems.nickelIngot.name]: 2,
            [smeltedItems.lithiumIngot.name]: 2
        },
        craftingTime: 75
    },
    laserWeapon: {
        name: "Laser Weapon",
        value: 1500,
        recipe: {
            [miningBlocks.rareEarthMinerals.name]: 1
        },
        craftingTime: 600
    },

    solarpanel: null,
    circuitBoard: null, 
};
// Initializing Items that require recipe components from other factory items
factoryItems.circuitBoard = {
    name: "Circuit Board",
    value: 40,
    recipe: {
        [smeltedItems.silicon.name]: 1,
        [factoryItems.copperWire.name]: 1
    },
    craftingTime: 10
};
factoryItems.solarpanel = {
    name:"Solar Panel",
    value: 55,
    recipe: {
        [factoryItems.copperWire.name]: 1,
        [smeltedItems.silicon.name]: 1,
        [smeltedItems.silverIngot.name]: 1,
        [smeltedItems.aluminiumIngot.name]: 1
    },
    craftingTime: 60
};