/** @format */

import checkNumberBalanced from "./check-if-the-number-is-balanced";

describe("", () => {
  test("", () => {
    expect(checkNumberBalanced("1234006")).toBe(1);
    expect(checkNumberBalanced("1234321")).toBe(1);
    expect(checkNumberBalanced("1234322")).toBe(0);
    expect(checkNumberBalanced("12345")).toBe(0);
  });
});
