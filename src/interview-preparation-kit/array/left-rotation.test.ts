/** @format */

import LeftRotation from "./left-rotation";

describe("2d Array DS: Hour Glass", () => {
  test("Test 1", () => {
    const array = [1, 2, 3, 4, 5];

    expect(LeftRotation(array, 4)).toStrictEqual([5, 1, 2, 3, 4]);
  });
});
