import { test, expect } from "@jest/globals";
import { miningItems } from "./data/miningItems.js";
import { addToInventory, getInventory, globalInventory, removeFromInventory} from './utilities/inventory.js';
import { craftItem } from "./utilities/crafting.js";
import { smeltedItems } from "./data/smeltedItems.js";

test('add Item to Inventory', () => {
    addToInventory([miningItems.coal]);
    const actual = getInventory(globalInventory);
    const expected = "Inventory: Coal: 1\nTotal Weight: 1\nTotal Value: 1";
    expect(actual).toEqual(expected);
});

test('add multiple same Item to Inventory', () => {
    addToInventory([miningItems.coal, miningItems.coal]);
    const actual = getInventory(globalInventory);
    const expected = "Inventory: Coal: 3\nTotal Weight: 3\nTotal Value: 3";
    expect(actual).toEqual(expected);
});

test('add multiple different Items to Inventory', () => {
    addToInventory([miningItems.coal, miningItems.diamond, miningItems.copperOre, miningItems.copperOre,
       miningItems.copperOre, miningItems.copperOre, miningItems.copperOre, miningItems.copperOre,
        miningItems.copperOre, miningItems.copperOre, miningItems.copperOre]);
    const actual = getInventory(globalInventory);
    const expected = "Inventory: Coal: 4, Diamond: 1, Copper Ore: 9\nTotal Weight: 32\nTotal Value: 72";
    expect(actual).toEqual(expected);
});

test('Delete Item from Inventory', () => {
  removeFromInventory([miningItems.coal], 1);
  const actual = getInventory(globalInventory);
  const expected = "Inventory: Coal: 3, Diamond: 1, Copper Ore: 9\nTotal Weight: 31\nTotal Value: 71";
  expect(actual).toEqual(expected);
});

test('Craft Item', () => {
    const actual = craftItem(smeltedItems.copperIngot);
    const expected = "Crafted Copper Ingot and added it to inventory";
    expect(actual).toEqual(expected);
});

test('Get inventory, weight and value', () => {
    const actual = getInventory(globalInventory);
    const expected = "Inventory: Coal: 3, Diamond: 1, Copper Ore: 7, Copper Ingot: 1\nTotal Weight: 26\nTotal Value: 73";
    expect(actual).toEqual(expected);
});
