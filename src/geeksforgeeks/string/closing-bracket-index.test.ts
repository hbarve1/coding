/** @format */

import closingBracketIndex from "./closing-bracket-index";

describe("", () => {
  test("", () => {
    expect(closingBracketIndex("[ABC[23]][89]", 0)).toBe(8);
    expect(closingBracketIndex("ABC[58]", 3)).toBe(6);
  });
});
