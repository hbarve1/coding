/** @format */

import plusOne from "./plus-one";

describe("plusOne", () => {
  test("Test 1", () => {
    const input = [1, 2, 3];
    const output = [1, 2, 4];

    const result = plusOne(input);

    expect(result).toStrictEqual(output);
  });

  test("Test 2", () => {
    const input = [4, 3, 2, 1];
    const output = [4, 3, 2, 2];

    const result = plusOne(input);

    expect(result).toStrictEqual(output);
  });

  test("Test 3", () => {
    const input = [0];
    const output = [1];

    const result = plusOne(input);

    expect(result).toStrictEqual(output);
  });

  test("Test 4", () => {
    const input = [9, 9, 9, 9];
    const output = [1, 0, 0, 0, 0];

    const result = plusOne(input);

    expect(result).toStrictEqual(output);
  });

  test("Test 5", () => {
    const input = [8, 9, 9, 9];
    const output = [9, 0, 0, 0];

    const result = plusOne(input);

    expect(result).toStrictEqual(output);
  });
});
