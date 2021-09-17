/** @format */

import NewYearChaos from "./new-year-chaos";

describe("New Year Chaos", () => {
  test("Test 1", () => {
    const array = [2, 1, 5, 3, 4];

    expect(NewYearChaos(array)).toBe(3);
  });

  test("Test 2", () => {
    const array = [2, 5, 1, 3, 4];

    expect(NewYearChaos(array)).toBe("Too chaotic");
  });

  test("Test 3", () => {
    const array = [5, 1, 2, 3, 7, 8, 6, 4];

    expect(NewYearChaos(array)).toBe("Too chaotic");
  });

  test("Test 4", () => {
    const array = [1, 2, 5, 3, 7, 8, 6, 4];

    expect(NewYearChaos(array)).toBe(7);
  });

  test("Test 5", () => {
    const array = [1, 2, 5, 3, 4, 7, 8, 6];

    expect(NewYearChaos(array)).toBe(4);
  });
});
