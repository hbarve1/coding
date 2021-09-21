/** @format */

import moveZeroes from "./move-zeroes";

describe("moveZeroes", () => {
  test("Test 1", () => {
    const input = [0, 1, 0, 3, 12];
    const output = [1, 3, 12, 0, 0];

    const result = moveZeroes(input);

    expect(result).toStrictEqual(output);
  });

  test("Test 2", () => {
    const input = [0];
    const output = [0];

    const result = moveZeroes(input);

    expect(result).toStrictEqual(output);
  });

  test("Test 3", () => {
    const input = [1, 0];
    const output = [1, 0];

    const result = moveZeroes(input);

    expect(result).toStrictEqual(output);
  });

  // test("Test 4", () => {
  //   const input = [9, 9, 9, 9];
  //   const output = [1, 0, 0, 0, 0];

  //   const result = moveZeroes(input);

  //   expect(result).toStrictEqual(output);
  // });

  // test("Test 5", () => {
  //   const input = [8, 9, 9, 9];
  //   const output = [9, 0, 0, 0];

  //   const result = moveZeroes(input);

  //   expect(result).toStrictEqual(output);
  // });
});
