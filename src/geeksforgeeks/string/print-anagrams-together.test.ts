/** @format */

import printAnagramsTogether from "./print-anagrams-together";

describe("", () => {
  test("", () => {
    expect(printAnagramsTogether(["act", "god", "cat", "dog", "tac"])).toEqual(
      expect.arrayContaining([
        ["god", "dog"],
        ["act", "cat", "tac"],
      ]),
    );

    expect(printAnagramsTogether(["no", "on", "is"])).toEqual(
      expect.arrayContaining([["no", "on"], ["is"]]),
    );

    expect(printAnagramsTogether(["bfj", "tro", "ffa", "rph"])).toEqual(
      expect.arrayContaining([["bfj"], ["ffa"], ["rph"], ["tro"]]),
    );
  });
});
