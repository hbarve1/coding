/** @format */

import findArrayPattern from "./findArrayPattern";

describe("", () => {
  test("", () => {
    expect(
      findArrayPattern([1, 1, 1, 1, 1, 1, 2, 2, 3, 4, 5, 6]),
    ).toStrictEqual([1, 2, 6, 5, 4, 3]);
  });
});
