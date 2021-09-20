/** @format */

import removeDuplicates from "./remove-duplicates-from-sorted-array";

describe("removeDuplicates", () => {
  test("Test 1", () => {
    const arr = [1, 1, 2];
    const resultArr = [1, 2];
    const resultLength = removeDuplicates(arr);
    expect(resultLength).toBe(resultArr.length);
    expect(arr.slice(0, resultLength)).toStrictEqual(resultArr);
  });

  test("Test 2", () => {
    const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    const resultArr = [0, 1, 2, 3, 4];
    const resultLength = removeDuplicates(arr);

    expect(resultLength).toBe(resultArr.length);
    expect(arr.slice(0, resultLength)).toStrictEqual(resultArr);
  });
});
