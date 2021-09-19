/** @format */

import commonChild from "./common-child";

describe("special-palindrome-again", () => {
  test("Test 1", () => {
    expect(commonChild("ABCD", "ABDCE")).toBe(3);
  });

  test("Test 2", () => {
    expect(commonChild("HARRY", "SALLY")).toBe(2);
  });

  test("Test 3", () => {
    expect(commonChild("AA", "BB")).toBe(0);
  });

  test("Test 4", () => {
    expect(commonChild("SHINCHAN", "NOHARAAA")).toBe(3);
  });

  test("Test 5", () => {
    expect(commonChild("ABCDEF", "FBDAMN")).toBe(2);
  });
});
