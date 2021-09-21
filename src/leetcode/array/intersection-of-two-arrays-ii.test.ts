/** @format */

import intersect from "./intersection-of-two-arrays-ii";

describe("intersect", () => {
  test("Test 1", () => {
    const input1 = [1, 2, 2, 1];
    const input2 = [2, 2];
    const output = [2, 2];

    const result = intersect(input1, input2);

    expect(result).toStrictEqual(output);
  });

  test("Test 2", () => {
    const input1 = [4, 9, 5];
    const input2 = [9, 4, 9, 8, 4];
    const output = [4, 9];

    const result = intersect(input1, input2);

    expect(result).toStrictEqual(output);
  });
});
