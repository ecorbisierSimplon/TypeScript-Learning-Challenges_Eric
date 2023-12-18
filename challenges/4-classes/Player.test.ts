import { describe, expect, test } from "@jest/globals";
import { Player } from "./Player";
import { cardinalDirections } from "./cardinalDirections";
import { Weapon } from "./Weapon";
import { Treasure } from "./Treasure";

describe("Player", () => {
  test("should have name", () => {
    const player: Player = new Player({ x: 0, y: 0 });
    expect(player.currentPosition).toEqual({ x: 0, y: 0 });
  });
  test("should have health", () => {
    const player: Player = new Player({ x: 0, y: 0 });
    expect(player.health).toEqual(expect.any(Number));
  });
  describe("moveTo", () => {
    test("should move north", () => {
      const player: Player = new Player({ x: 0, y: 1 });
      player.moveTo(cardinalDirections.north);
      expect(player.currentPosition).toEqual({ x: 0, y: 0 });
    });
    test("should move south", () => {
      const player: Player = new Player({ x: 0, y: 0 });
      player.moveTo(cardinalDirections.south);
      expect(player.currentPosition).toEqual({ x: 0, y: 1 });
    });
    test("should move east", () => {
      const player: Player = new Player({ x: 1, y: 0 });
      player.moveTo(cardinalDirections.east);
      expect(player.currentPosition).toEqual({ x: 0, y: 0 });
    });
    test("should move west", () => {
      const player: Player = new Player({ x: 0, y: 0 });
      player.moveTo(cardinalDirections.west);
      expect(player.currentPosition).toEqual({ x: 1, y: 0 });
    });
  });
  describe("goBack", () => {
    test("should go back", () => {
      const player: Player = new Player({ x: 0, y: 0 });
      player.moveTo(cardinalDirections.north);
      player.goBack();
      expect(player.currentPosition).toEqual({ x: 0, y: 0 });
    });
  });
  describe("pickUp", () => {
    test("should pick up weapon", () => {
      const player: Player = new Player({ x: 0, y: 0 });
      const weapon = new Weapon("test", "test", 10);
      player.pickUp(weapon);
      expect(player.inventory).toEqual([weapon]);
    });
    test("should pick up treasure", () => {
      const player: Player = new Player({ x: 0, y: 0 });
      const treasure = new Treasure();
      player.pickUp(treasure);
      expect(player.inventory).toEqual([treasure]);
    });
    test("hasTreasure should be true", () => {
      const player: Player = new Player({ x: 0, y: 0 });
      const treasure = new Treasure();
      player.pickUp(treasure);
      expect(player.hasTreasure).toEqual(true);
    });
  });
  describe("takeDamage", () => {
    test("should take damage", () => {
      const player: Player = new Player({ x: 0, y: 0 });
      const currentHealth = player.health;
      player.takeDamage(10);
      expect(player.health).toEqual(currentHealth - 10);
    });
    test("should die", () => {
      const player: Player = new Player({ x: 0, y: 0 });
      player.takeDamage(Infinity);
      expect(player.isDead).toEqual(true);
    });
  });
  describe("attack", () => {
    test("should attack", () => {
      const player: Player = new Player({ x: 0, y: 0 });
      const weapon = new Weapon("test", "test", 10);
      player.pickUp(weapon);
      expect(player.attack).toEqual(10);
    });
    test("should attack with best weapon", () => {
      const player: Player = new Player({ x: 0, y: 0 });
      const weapon = new Weapon("test", "test", 10);
      const weapon2 = new Weapon("test", "test", 20);
      player.pickUp(weapon);
      player.pickUp(weapon2);
      expect(player.attack).toEqual(20);
    });
  });
});
