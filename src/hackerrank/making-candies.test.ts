/** @format */

import minimumPasses from "./making-candies";

describe("test", () => {
  test("case 1:", () => {
    expect(minimumPasses(3, 1, 2, 12)).toBe(3);
  });

  test.only("case 2:", () => {
    expect(minimumPasses(1, 1, 6, 45)).toBe(16);
  });

  test("case 3:", () => {
    expect(minimumPasses(5184889632, 5184889632, 20, 10000)).toBe(1);
  });
});
