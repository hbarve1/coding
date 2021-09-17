/** @format */

import arrayManipulation from "./array-manipulation";

describe("New Year Chaos", () => {
  test("Test 1", () => {
    const array = [
      [1, 5, 3],
      [4, 8, 7],
      [6, 9, 1],
    ];

    expect(arrayManipulation(10, array)).toBe(10);
  });

  test("Test 2", () => {
    const array = [
      [1, 2, 100],
      [2, 5, 100],
      [3, 4, 100],
    ];

    expect(arrayManipulation(5, array)).toBe(200);
  });

  test("Test 3", () => {
    const array = [
      [2, 6, 8],
      [3, 5, 7],
      [1, 8, 1],
      [5, 9, 15],
    ];

    expect(arrayManipulation(10, array)).toBe(31);
  });

  test("Test 4", () => {
    const array = [
      [2, 3, 603],
      [1, 1, 286],
      [4, 4, 882],
    ];

    expect(arrayManipulation(4, array)).toBe(882);
  });
});
