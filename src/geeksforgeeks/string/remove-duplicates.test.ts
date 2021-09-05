/** @format */

import removeDuplicates from "./remove-duplicates";

describe("", () => {
  test("", () => {
    expect(removeDuplicates("zvvo")).toBe("zvo");
    expect(removeDuplicates("zavvoa")).toBe("zavo");
    expect(removeDuplicates("gfg")).toBe("gf");
  });
});
