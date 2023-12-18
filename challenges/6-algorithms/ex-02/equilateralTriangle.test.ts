import { describe, expect, test } from "@jest/globals";
import { equilateralTriangle } from "./equilateralTriangle";

describe("equilateralTriangle", () => {
	test("should return an equilateral triangle with 5 rows", () => {
		expect(equilateralTriangle(5)).toEqual(
			"     *\n    ***\n   *****\n  *******\n *********\n",
		);
	});

	test("should return an equilateral triangle with 3 rows", () => {
		expect(equilateralTriangle(3)).toEqual("   *\n  ***\n *****\n");
	});
});
