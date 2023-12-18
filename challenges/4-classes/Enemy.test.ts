import { describe, expect, test } from "@jest/globals";
import { Enemy } from "./Enemy";
import { GameEntity } from "./GameEntity";

describe("Enemy", () => {
  test("should have name", () => {
    const enemy: Enemy = new Enemy("Orc", "A big, ugly orc", 20, 10);
    expect(enemy.name).not.toBe("");
  });
  test("should have description", () => {
    const enemy: Enemy = new Enemy("Orc", "A big, ugly orc", 20, 10);
    expect(enemy.description).not.toBe("");
  });
  test("should have health", () => {
    const enemy: Enemy = new Enemy("Orc", "A big, ugly orc", 20, 10);
    expect(enemy.health).toBe(20);
  });
  test("should have attack", () => {
    const enemy: Enemy = new Enemy("Orc", "A big, ugly orc", 20, 10);
    expect(enemy.attack).toBe(10);
  });
  test("should have takeDamage", () => {
    const enemy: Enemy = new Enemy("Orc", "A big, ugly orc", 20, 10);
    enemy.takeDamage(10);
    expect(enemy.health).toBe(10);
  });
  test("should extend GameEntity", () => {
    const enemy: Enemy = new Enemy("Orc", "A big, ugly orc", 20, 10);
    expect(enemy instanceof GameEntity).toBe(true);
  });
});
