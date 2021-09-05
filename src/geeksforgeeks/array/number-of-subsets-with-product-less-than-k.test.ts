/** @format */

import findSubset from "./number-of-subsets-with-product-less-than-k";

describe("", () => {
  test("Example 1", () => {
    expect(findSubset([2, 4, 5, 3], 12)).toStrictEqual(8);
  });

  test("Example 2", () => {
    expect(findSubset([9, 8, 3], 2)).toStrictEqual(0);
  });
});
