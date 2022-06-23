/** @format */

import arrayManipulation from "./crush";

describe("test", () => {
  test("case 1:", () => {
    expect(1 + 1).toBe(2);
  });

  test("case 2:", () => {
    expect(
      arrayManipulation(10, [
        [1, 5, 3],
        [4, 8, 7],
        [6, 9, 1],
      ]),
    ).toBe(10);
  });

  test("case 3:", () => {
    expect(
      arrayManipulation(5, [
        [1, 2, 100],
        [2, 5, 100],
        [3, 4, 100],
      ]),
    ).toBe(200);
  });

  test("case 4:", () => {
    expect(
      arrayManipulation(4, [
        [2, 3, 603],
        [1, 1, 286],
        [4, 4, 882],
      ]),
    ).toBe(882);
  });
});
