import { describe, expect, test } from "@jest/globals";
import { getConstructorName } from "./getConstructorName";

describe("getConstructorName", () => {
  test("should return the constructor name of an object", () => {
    expect(getConstructorName("")).toBe("String");
    expect(getConstructorName(1)).toBe("Number");
    expect(getConstructorName(true)).toBe("Boolean");
    expect(getConstructorName({})).toBe("Object");
    expect(getConstructorName([])).toBe("Array");
    expect(getConstructorName(new Date())).toBe("Date");
    expect(getConstructorName(new RegExp("regex"))).toBe("RegExp");
    expect(getConstructorName(new Error("error"))).toBe("Error");
    expect(getConstructorName(new TypeError("error"))).toBe("TypeError");
    expect(getConstructorName(new SyntaxError("error"))).toBe("SyntaxError");
    expect(getConstructorName(new ReferenceError("error"))).toBe(
      "ReferenceError"
    );
    expect(getConstructorName(new RangeError("error"))).toBe("RangeError");
    expect(getConstructorName(new EvalError("error"))).toBe("EvalError");
    expect(getConstructorName(new URIError("error"))).toBe("URIError");
    expect(getConstructorName(new Promise(() => { }))).toBe("Promise");
    expect(getConstructorName(new Map())).toBe("Map");
    expect(getConstructorName(new WeakMap())).toBe("WeakMap");
    expect(getConstructorName(new Set())).toBe("Set");
    expect(getConstructorName(new WeakSet())).toBe("WeakSet");
    expect(getConstructorName(new Int8Array())).toBe("Int8Array");
    expect(getConstructorName(new Uint8Array())).toBe("Uint8Array");
    expect(getConstructorName(new Uint8ClampedArray())).toBe(
      "Uint8ClampedArray"
    );
    expect(getConstructorName(new Int16Array())).toBe("Int16Array");
    expect(getConstructorName(new Uint16Array())).toBe("Uint16Array");
    expect(getConstructorName(new Int32Array())).toBe("Int32Array");
    expect(getConstructorName(new Uint32Array())).toBe("Uint32Array");
    expect(getConstructorName(new Float32Array())).toBe("Float32Array");
    expect(getConstructorName(new Float64Array())).toBe("Float64Array");
    expect(getConstructorName(new BigInt64Array())).toBe("BigInt64Array");
    expect(getConstructorName(new BigUint64Array())).toBe("BigUint64Array");
    expect(getConstructorName(new DataView(new ArrayBuffer(1)))).toBe(
      "DataView"
    );
    expect(getConstructorName(new SharedArrayBuffer(1))).toBe(
      "SharedArrayBuffer"
    );
  });
});
