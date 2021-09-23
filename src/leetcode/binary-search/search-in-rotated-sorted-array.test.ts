/** @format */

import search from "./search-in-rotated-sorted-array";

describe("search-in-rotated-sorted-array", () => {
  test("Test 1", () => {
    const input = [4, 5, 6, 7, 0, 1, 2];
    const output = 4;

    const result = search(input, 0);

    expect(result).toBe(output);
  });

  test("Test 2", () => {
    const input = [4, 5, 6, 7, 0, 1, 2];
    const output = -1;

    const result = search(input, 3);

    expect(result).toBe(output);
  });

  test("Test 3", () => {
    const input = [1];
    const output = -1;

    const result = search(input, 0);

    expect(result).toBe(output);
  });

  test("Test 4", () => {
    const input = [1, 2, 4, 5, 6, 7, 0];
    const output = -1;

    const result = search(input, 3);

    expect(result).toBe(output);
  });

  test("Test 5", () => {
    const input = [0, 1, 2, 4, 5, 6, 7];
    const output = -1;

    const result = search(input, 3);

    expect(result).toBe(output);
  });

  test("Test 6", () => {
    const input = [5, 1, 3];

    const output = -1;

    const result = search(input, 2);

    expect(result).toBe(output);
  });
});
