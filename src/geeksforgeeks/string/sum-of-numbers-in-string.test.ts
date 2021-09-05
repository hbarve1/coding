/** @format */

import sumOfNumbersInString from "./sum-of-numbers-in-string";

describe("", () => {
  test("", () => {
    expect(sumOfNumbersInString("1abc23")).toBe(24);
    expect(sumOfNumbersInString("geeks4geeks")).toBe(4);
    expect(sumOfNumbersInString("g345ks4gee90s1kj2")).toBe(442);
  });
});
