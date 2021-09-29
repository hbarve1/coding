/** @format */

import whatFlavors from "./ctci-ice-cream-parlor1";

describe("common child", () => {
  test("Test 1", () => {
    expect(whatFlavors([1, 4, 5, 3, 2], 4)).toBe("1,4");
  });

  test("Test 2", () => {
    expect(whatFlavors([2, 2, 4, 3], 4)).toBe("1,2");
  });

  test("Test 3", () => {
    expect(whatFlavors([1, 2, 3, 5, 6], 5)).toBe("2,3");
  });

  test("Test 4", () => {
    expect(whatFlavors([4, 3, 2, 5, 7], 8)).toBe("2,4");
  });

  test("Test 5", () => {
    expect(whatFlavors([7, 2, 5, 4, 11], 12)).toBe("1,3");
  });
});
