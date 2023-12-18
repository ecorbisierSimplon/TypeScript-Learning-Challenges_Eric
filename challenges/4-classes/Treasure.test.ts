import { describe, expect, test } from "@jest/globals";
import { Treasure } from "./Treasure";

describe("Treasure", () => {
  test("should have name", () => {
    const treasure: Treasure = new Treasure();
    expect(treasure.name).not.toBe("");
  });
  test("should have description", () => {
    const treasure: Treasure = new Treasure();
    expect(treasure.description).not.toBe("");
  });
});
