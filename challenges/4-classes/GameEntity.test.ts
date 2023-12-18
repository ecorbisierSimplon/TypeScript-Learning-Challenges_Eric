import { describe, expect, test } from "@jest/globals";
import { GameEntity } from "./GameEntity";

class GameEntityTest extends GameEntity {}

describe("GameEntity", () => {
  test("should have name", () => {
    const gameEntity: GameEntity = new GameEntityTest("name", "description");
    expect(gameEntity.name).toBe("name");
  });
  test("should have description", () => {
    const gameEntity: GameEntity = new GameEntityTest("name", "description");
    expect(gameEntity.description).toBe("description");
  });
});
