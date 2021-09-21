/** @format */

import singleNumber from "./single-number";

describe("singleNumber", () => {
  test("Test 1", () => {
    const input = [2, 2, 1];
    const output = 1;

    const result = singleNumber(input);

    expect(result).toBe(output);
  });

  test("Test 2", () => {
    const input = [4, 1, 2, 1, 2];
    const output = 4;

    const result = singleNumber(input);

    expect(result).toBe(output);
  });

  test("Test 3", () => {
    const input = [1];
    const output = 1;

    const result = singleNumber(input);

    expect(result).toBe(output);
  });
});
