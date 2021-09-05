/** @format */

import sumOfNumbersInString from "./display-longest-name";

describe("", () => {
  test("", () => {
    expect(
      sumOfNumbersInString([
        "Geek",
        "Geeks",
        "Geeksfor",
        "GeeksforGeek",
        "GeeksforGeeks",
      ]),
    ).toBe("GeeksforGeeks");
  });
});
