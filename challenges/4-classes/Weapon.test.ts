import { describe, expect, test } from "@jest/globals";
import { Weapon } from "./Weapon";

describe("Weapon", () => {
  test("should have name", () => {
    const weapon: Weapon = new Weapon("gun", "a gun", 10);
    expect(weapon.name).not.toBe("");
  });
  test("should have description", () => {
    const weapon: Weapon = new Weapon("gun", "a gun", 10);
    expect(weapon.description).not.toBe("");
  });
  test("should have damage", () => {
    const weapon: Weapon = new Weapon("gun", "a gun", 10);
    expect(weapon.damage).toBeGreaterThan(0);
  });
});
