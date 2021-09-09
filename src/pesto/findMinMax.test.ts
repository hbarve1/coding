/** @format */

import findMinMax from "./findMinMax";

describe("", () => {
  test("", () => {
    expect(findMinMax([1, 5, 2, -10, 50])).toStrictEqual([-10, 50]);

    expect(findMinMax([10, 5, 90, 100, 1, -9])).toStrictEqual([-9, 100]);
  });
});
