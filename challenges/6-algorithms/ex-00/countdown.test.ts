import { describe, expect, test } from "@jest/globals";
import { countdown } from "./countdown";

describe("countdown", () => {
	test("should countdown from 5 to 1", () => {
		expect(countdown(5)).toEqual([5, 4, 3, 2, 1]);
	});

	test("should countdown from 3 to 1", () => {
		expect(countdown(3)).toEqual([3, 2, 1]);
	});
});
