
import { test, expect } from "@jest/globals";
import { miningItems } from "./data/miningItems.js";
import { addToInventory, removeFromInventory } from './utilities/inventory.js'

  test('add Item to Inventory', () => {
    const input = [miningItems.coal.name]
    const actual = addToInventory(input)
    const expected = { Coal: 1 }
    expect(actual).toEqual(expected)
  })

  test('add multiple same Item to Inventory', () => {
    const input = 
    [miningItems.coal.name, miningItems.coal.name]
    const actual = addToInventory(input)
    const expected = { Coal: 3 }
    expect(actual).toEqual(expected)
  })

  test('add multiple different Items to Inventory', () => {
    const input = [miningItems.coal.name, miningItems.diamond.name, miningItems.zincOre.name]
    const actual = addToInventory(input)
    const expected = { "Coal": 4, "Diamond": 1, "Zinc Ore": 1 }
    expect(actual).toEqual(expected)
  })

  test('remove Item', () => {
    const input = [miningItems.coal.name]
    const actual = removeFromInventory(input)
    const expected = { "Coal": 3, "Diamond": 1, "Zinc Ore": 1 }
    expect(actual).toEqual(expected)
  })