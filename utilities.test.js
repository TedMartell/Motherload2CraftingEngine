
import { test, expect } from "@jest/globals";
import { miningItems } from "./data/miningItems.js";
import { addToInventory, getInventory, globalInventory, removeFromInventory} from './utilities/inventory.js'

  test('add Item to Inventory', () => {
    const input = [miningItems.coal]
    const actual = addToInventory(input)
    const expected = { Coal: 1 }
    expect(actual).toEqual(expected)
  })

  test('add multiple same Item to Inventory', () => {
    const input = 
    [miningItems.coal, miningItems.coal]
    const actual = addToInventory(input)
    const expected = { Coal: 3 }
    expect(actual).toEqual(expected)
  })

  test('add multiple different Items to Inventory', () => {
    const input = [miningItems.coal, miningItems.diamond, miningItems.zincOre]
    const actual = addToInventory(input)
    const expected = { "Coal": 4, "Diamond": 1, "Zinc Ore": 1 }
    expect(actual).toEqual(expected)
  })

  test('Get inventory, weight and value', () => {
    const input = globalInventory
    const actual = getInventory(input)
    const expected = "Inventory: Coal: 4, Diamond: 1, Zinc Ore: 1\nTotal Weight: 8\nTotal Value: 59"
    expect(actual).toEqual(expected)
  })

  test('remove Item from inventory', () => {
    const input = [miningItems.coal]
    const actual = removeFromInventory(input, 1)
    const expected = { "Coal": 3, "Diamond": 1, "Zinc Ore": 1 }
    expect(actual).toEqual(expected)
  })

  test('remove multiple Items from inventory', () => {
    const input = [miningItems.coal]
    const actual = removeFromInventory(input, 3)
    const expected = { "Diamond": 1, "Zinc Ore": 1 }
    expect(actual).toEqual(expected)
  })

  test('Get inventory, weight and value', () => {
    const input = globalInventory
    const actual = getInventory(input)
    const expected = "Inventory: Diamond: 1, Zinc Ore: 1\nTotal Weight: 4\nTotal Value: 55"
    expect(actual).toEqual(expected)
  })

  test('remove none existing Item from inventory', () => {
    const input = [miningItems.coal]
    const actual = removeFromInventory(input, 1)
    const expected = "Coal not found"
    expect(actual).toEqual(expected)
  })

  test('remove none existing Item from inventory', () => {
    const input = [miningItems.diamond]
    const actual = removeFromInventory(input, 2)
    const expected = "Not enough Diamond in inventory"
    expect(actual).toEqual(expected)
  })
