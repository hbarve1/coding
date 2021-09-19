/** @format */

import alternatingCharacters from "./alternating-characters";

describe("alternating-characters", () => {
  test("Test 1", () => {
    expect(alternatingCharacters("AAAA")).toBe(3);
  });

  test("Test 2", () => {
    expect(alternatingCharacters("BBBBB")).toBe(4);
  });

  test("Test 3", () => {
    expect(alternatingCharacters("ABABABAB")).toBe(0);
  });

  test("Test 4", () => {
    expect(alternatingCharacters("BABABA")).toBe(0);
  });

  test("Test 5", () => {
    expect(alternatingCharacters("AAABBB")).toBe(4);
  });
});
