/** @format */

import findNegativePairNumber from "./findNegativePairNumber";

describe("", () => {
  test("", () => {
    expect(
      findNegativePairNumber([-1, 1, 2, -2, 3, -3, 4, -4, 5, -5]),
    ).toStrictEqual([]);

    expect(
      findNegativePairNumber([-1, 1, 2, -2, 3, -3, 4, -4, 5]),
    ).toStrictEqual([5]);

    expect(findNegativePairNumber([1, 2, -2, 3, -3, 4, 5])).toStrictEqual([
      1, 4, 5,
    ]);
  });
});
