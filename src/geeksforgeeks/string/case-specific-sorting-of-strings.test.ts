/** @format */

import specificCaseSortingString from "./case-specific-sorting-of-strings";

describe("", () => {
  test("", () => {
    expect(specificCaseSortingString("defRTSersUXI")).toBe("deeIRSfrsTUX");
    expect(specificCaseSortingString("srbDKi")).toBe("birDKs");
  });
});
