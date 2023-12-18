import { describe, expect, test } from "@jest/globals";
import { addItemMutate } from "./addItemMutate";

describe("addItemMutate", () => {
  test("adds an item to the end of an array", () => {
    const array = [1, 2, 3];
    addItemMutate(array, 4);
    expect(array).toEqual([1, 2, 3, 4]);
  });
});
