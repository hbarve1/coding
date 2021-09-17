/** @format */

import MinimumSwaps from "./minimum-swaps";

describe("New Year Chaos", () => {
  test("Test 1", () => {
    const array = [7, 1, 3, 2, 4, 5, 6];

    expect(MinimumSwaps(array)).toBe(5);
  });

  test("Test 2", () => {
    const array = [4, 3, 1, 2];

    expect(MinimumSwaps(array)).toBe(3);
  });

  test("Test 3", () => {
    const array = [2, 3, 4, 1, 5];

    expect(MinimumSwaps(array)).toBe(3);
  });

  test("Test 4", () => {
    const array = [1, 3, 5, 2, 4, 6, 7];

    expect(MinimumSwaps(array)).toBe(3);
  });
});
