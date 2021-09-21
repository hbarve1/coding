/** @format */

import rotateArray from "./rotate-array";

describe("rotateArray", () => {
  test("Test 1", () => {
    const input = [1, 2, 3, 4, 5, 6, 7];
    const output = [5, 6, 7, 1, 2, 3, 4];

    rotateArray(input, 3);

    expect(input).toStrictEqual(output);
  });

  test("Test 2", () => {
    const input = [-1, -100, 3, 99];
    const output = [3, 99, -1, -100];

    const result = rotateArray(input, 2);

    expect(result).toStrictEqual(output);
  });

  test("Test 3", () => {
    const input = [1, 2];
    const output = [2, 1];

    const result = rotateArray(input, 1);

    expect(result).toStrictEqual(output);
  });

  test("Test 4", () => {
    const input = [1, 2, 3];
    const output = [2, 3, 1];

    const result = rotateArray(input, 2);

    expect(result).toStrictEqual(output);
  });
});
