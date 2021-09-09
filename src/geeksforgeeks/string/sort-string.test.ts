/** @format */

import { sortString, sortString2 } from "./sort-string";

describe("", () => {
  test("sortString", () => {
    expect(sortString(2, ["bbccdefbbaa", "geeksforgeeks"])).toStrictEqual([
      "aabbbbccdef",
      "eeeefggkkorss",
    ]);
  });

  test("sortString2", () => {
    expect(sortString2(2, ["bbccdefbbaa", "geeksforgeeks"])).toStrictEqual([
      "aabbbbccdef",
      "eeeefggkkorss",
    ]);
  });
});
