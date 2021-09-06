/** @format */

import twiceCounter from "./twiceCounter";

describe("", () => {
  test("", () => {
    expect(twiceCounter(["Geeks", "For", "Geeks"])).toBe(1);

    expect(
      twiceCounter([
        "Tom",
        "Jerry",
        "Thomas",
        "Tom",
        "Jerry",
        "Courage",
        "Tom",
        "Courage",
      ]),
    ).toBe(2);
  });
});
