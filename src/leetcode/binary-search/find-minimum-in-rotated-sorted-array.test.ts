/** @format */

import findMin from "./find-minimum-in-rotated-sorted-array";

describe("findMin", () => {
  test("Test 1", () => {
    const input = [3, 4, 5, 1, 2];
    const output = 1;

    const result = findMin(input);

    expect(result).toBe(output);
  });

  test("Test 2", () => {
    const input = [4, 5, 6, 7, 0, 1, 2];
    const output = 0;

    const result = findMin(input);

    expect(result).toBe(output);
  });

  test("Test 3", () => {
    const input = [11, 13, 15, 17];
    const output = 11;

    const result = findMin(input);

    expect(result).toBe(output);
  });

  test("Test 4", () => {
    const input = [13, 15, 17, 11];
    const output = 11;

    const result = findMin(input);

    expect(result).toBe(output);
  });

  test("Test 5", () => {
    const input = [15, 17, 11, 13];
    const output = 11;

    const result = findMin(input);

    expect(result).toBe(output);
  });

  test("Test 6", () => {
    const input = [17, 11, 13, 15];
    const output = 11;

    const result = findMin(input);

    expect(result).toBe(output);
  });

  test("Test 7", () => {
    const input = [5, 1, 2, 3, 4];
    const output = 1;

    const result = findMin(input);

    expect(result).toBe(output);
  });
});
