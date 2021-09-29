/** @format */

import binarySearch from "./binary-search";

describe("binarySearch", () => {
  test("Test 1", () => {
    const input = [-1, 0, 3, 5, 9, 12];
    const output = 4;

    const result = binarySearch(input, 9);

    expect(result).toBe(output);
  });

  test("Test 2", () => {
    const input = [-1, 0, 3, 5, 9, 12];
    const output = -1;

    const result = binarySearch(input, 2);

    expect(result).toBe(output);
  });

  test("Test 3", () => {
    const input = [-1, 0, 3, 5, 9, 12];
    const output = 4;

    const result = binarySearch(input, 9);

    expect(result).toBe(output);
  });

  test("Test 4", () => {
    const input = [5];
    const output = -1;

    const result = binarySearch(input, -5);

    expect(result).toBe(output);
  });

  test("Test 5", () => {
    const input = [2, 5];
    const output = 1;

    const result = binarySearch(input, 5);

    expect(result).toBe(output);
  });
});
