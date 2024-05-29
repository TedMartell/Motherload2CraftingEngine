import { miningBlocks } from "./miningBlocks.js";

export const smeltedItems = {
    ironIngot: {
        name: "Iron Ingot",
        value: 6,
        recipe: {
            [miningBlocks.ironOre.name]: 2
        },
        craftingTime: 1
    },
    copperIngot: {
        name: "Copper Ingot",
        value: 6,
        recipe: {
            [miningBlocks.copperOre.name]: 2
        },
        craftingTime: 3
    },
    aluminiumIngot: {
        name: "Aluminium Ingot",
        value: 6,
        recipe: {
            [miningBlocks.aluminiumOre.name]: 2
        },
        craftingTime: 3
    },
    silverIngot: {
        name: "Silver Ingot",
        value: 8,
        recipe: {
            [miningBlocks.silverOre.name]: 2
        },
        craftingTime: 5
    },
    zincIngot: {
        name: "Zinc Ingot",
        value: 15,
        recipe: {
            [miningBlocks.zincOre.name]: 2
        },
        craftingTime: 30
    },
    nickelIngot: {
        name: "Nickel Ingot",
        value: 15,
        recipe: {
            [miningBlocks.nickelOre.name]: 2
        },
        craftingTime: 30
    },
    lithiumIngot: {
        name: "Lithium Ingot",
        value: 15,
        recipe: {
            [miningBlocks.lithiumOre.name]: 2
        },
        craftingTime: 30
    },
    silicon: {
        name: "Silicon",
        value: 15,
        recipe: {
            [miningBlocks.quartz.name]: 10
        },
        craftingTime: 120
    },
    goldIngot: {
        name: "Gold Ingot",
        value: 30,
        recipe: {
            [miningBlocks.goldOre.name]: 2
        },
        craftingTime: 60
    },
    steel: null,
    stainlessSteel: null,





};

// Initializing Items that require recipe components from other smelted items
smeltedItems.steel = {
    name: "Steel",
    value: 8,
    recipe: {
        [smeltedItems.ironIngot.name]: 2,
        [miningBlocks.coal.name]: 2
    },
    craftingTime: 5
};

smeltedItems.stainlessSteel = {
    name: "Stainless Steel",
    value: 20,
    recipe: {
        [miningBlocks.chromiumOre.name]: 1,
        [smeltedItems.ironIngot.name]: 1,
        [miningBlocks.nickelOre.name]: 1,
    },
    craftingTime: 10
};
