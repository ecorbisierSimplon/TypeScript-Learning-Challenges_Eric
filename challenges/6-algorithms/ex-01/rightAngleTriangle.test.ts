import { describe, expect, test } from "@jest/globals";
import { rightAngleTriangle } from "./rightAngleTriangle";

describe("rightAngleTriangle", () => {
	test("should return a right angle triangle with 5 rows", () => {
		expect(rightAngleTriangle(5)).toEqual("*****\n****\n***\n**\n*\n");
	});

	test("should return a right angle triangle with 3 rows", () => {
		expect(rightAngleTriangle(3)).toEqual("***\n**\n*\n");
	});
});
