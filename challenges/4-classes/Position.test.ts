import { describe, expect, test } from "@jest/globals";
import { Position } from "./Position";

describe("Position", () => {
  test("should have x", () => {
    const position: Position = { x: 0, y: 0 };
    expect(position.x).toBe(0);
  });
  test("should have y", () => {
    const position: Position = { x: 0, y: 0 };
    expect(position.y).toBe(0);
  });
});
