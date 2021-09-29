/** @format */

import findPeakElement from "./find-peak-element";

describe("findPeakElement", () => {
  test("Test 1", () => {
    const input = [1, 2, 3, 1];
    const output = [2];

    const result = findPeakElement(input);

    expect(result).toStrictEqual(output);
  });

  test("Test 2", () => {
    const input = [1, 2, 1, 3, 5, 6, 4];
    const output = [1, 5];

    const result = findPeakElement(input);

    expect(result).toStrictEqual(output);
  });
});
