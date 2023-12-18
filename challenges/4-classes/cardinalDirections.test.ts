import { describe, expect, test } from "@jest/globals";
import { cardinalDirections } from "./cardinalDirections";

describe("cardinalDirections", () => {
  test("should have 4 directions", () => {
    expect(Object.keys(cardinalDirections).length).toBe(4);
  });

  test("should have north", () => {
    expect(cardinalDirections.north).toBe("North");
  });
  test("should have south", () => {
    expect(cardinalDirections.south).toBe("South");
  });
  test("should have east", () => {
    expect(cardinalDirections.east).toBe("East");
  });
  test("should have west", () => {
    expect(cardinalDirections.west).toBe("West");
  });
});
