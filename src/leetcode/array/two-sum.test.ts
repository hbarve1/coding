/** @format */

import twoSum from "./two-sum";

describe("twoSum", () => {
  test("Test 1", () => {
    const input = [2, 7, 11, 15, 2];
    const output = [0, 1];

    const result = twoSum(input, 9);

    expect(result).toStrictEqual(output);
  });

  test("Test 2", () => {
    const input = [3, 2, 4];
    const output = [1, 2];

    const result = twoSum(input, 6);

    expect(result).toStrictEqual(output);
  });

  test("Test 3", () => {
    const input = [3, 3];
    const output = [0, 1];

    const result = twoSum(input, 6);

    expect(result).toStrictEqual(output);
  });

  test("Test 4", () => {
    const input = [3, 3, 4, 5];
    const output = [2, 3];

    const result = twoSum(input, 9);

    expect(result).toStrictEqual(output);
  });

  test("Test 5", () => {
    const input = [3, 3, 4, 5];
    const output = [0, 2];

    const result = twoSum(input, 7);

    expect(result).toStrictEqual(output);
  });
});
