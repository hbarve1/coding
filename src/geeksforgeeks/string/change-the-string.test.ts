/** @format */

import changeString from "./change-the-string";

describe("", () => {
  test("", () => {
    expect(changeString("abCD")).toBe("abcd");
    expect(changeString("Abcd")).toBe("ABCD");
  });
});
