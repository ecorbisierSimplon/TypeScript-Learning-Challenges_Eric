import { describe, expect, test } from "@jest/globals";
import { Room } from "./Room";
import { Weapon } from "./Weapon";
import { Enemy } from "./Enemy";

describe("Room", () => {
  describe("addItem", () => {
    test("should add item", () => {
      const room: Room = new Room();
      const weapon = new Weapon("gun", "a gun", 10);
      room.addItem(weapon);
      expect(room.items).toContain(weapon);
    });
  });
  describe("removeItem", () => {
    test("should remove item", () => {
      const room: Room = new Room();
      const weapon = new Weapon("gun", "a gun", 10);
      room.addItem(weapon);
      room.removeItem(weapon);
      expect(room.items).not.toContain(weapon);
    });
  });
  describe("addEnemy", () => {
    test("should add enemy", () => {
      const room: Room = new Room();
      const enemy = new Enemy("Orc", "A big, ugly orc", 20, 10);
      room.addEnemy(enemy);
      expect(room.enemies).toContain(enemy);
    });
  });
});
