/** @format */

import getRepeatedCharInString from "./getRepeatedCharInString";

describe("", () => {
  test("", () => {
    expect(getRepeatedCharInString("hellooooloo")).toEqual(
      expect.arrayContaining([
        [2, 3],
        [4, 7],
        [9, 10],
      ]),
    );

    expect(getRepeatedCharInString("himank")).toEqual(
      expect.arrayContaining([]),
    );
  });
});
