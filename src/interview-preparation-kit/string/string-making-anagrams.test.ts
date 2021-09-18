/** @format */

import makingAnagrams from "./string-making-anagrams";

describe("2d Array DS: Hour Glass", () => {
  test("Test 1", () => {
    expect(makingAnagrams("cde", "abc")).toBe(4);
  });

  test("Test 2", () => {
    expect(
      makingAnagrams("fcrxzwscanmligyxyvym", "jxwtrhvujlmrpdoqbisbwhmgpmeoke"),
    ).toBe(30);
  });

  test("Test 3", () => {
    expect(makingAnagrams("showman", "woman")).toBe(2);
  });
});
