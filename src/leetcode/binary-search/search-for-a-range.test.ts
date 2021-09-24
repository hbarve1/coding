/** @format */

import searchRange from "./search-for-a-range";

describe("searchRange", () => {
  test("Test 1", () => {
    const input = [5, 7, 7, 8, 8, 10];
    const output = [3, 4];

    const result = searchRange(input, 8);

    expect(result).toStrictEqual(output);
  });

  test("Test 2", () => {
    const input = [5, 7, 7, 8, 8, 10];
    const output = [-1, -1];

    const result = searchRange(input, 6);

    expect(result).toStrictEqual(output);
  });

  test("Test 3", () => {
    const input: number[] = [];
    const output = [-1, -1];

    const result = searchRange(input, 0);

    expect(result).toStrictEqual(output);
  });

  test("Test 4", () => {
    const input = [1];
    const output = [-1, -1];

    const result = searchRange(input, 0);

    expect(result).toStrictEqual(output);
  });

  test("Test 5", () => {
    const input = [1];
    const output = [0, 0];

    const result = searchRange(input, 1);

    expect(result).toStrictEqual(output);
  });

  test("Test 6", () => {
    const input = [1, 3];
    const output = [0, 0];

    const result = searchRange(input, 1);

    expect(result).toStrictEqual(output);
  });

  test("Test 7", () => {
    const input = [1, 2, 3];
    const output = [2, 2];

    const result = searchRange(input, 3);

    expect(result).toStrictEqual(output);
  });
});
