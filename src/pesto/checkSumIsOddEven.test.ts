/** @format */

import checkSumIsOddEven from "./checkSumIsOddEven";

describe("", () => {
  test("", () => {
    expect(checkSumIsOddEven([0, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toStrictEqual(
      "EVEN",
    );

    expect(checkSumIsOddEven([0, 2, 4, 5, 6, 7, 8, 10])).toStrictEqual("EVEN");

    expect(checkSumIsOddEven([0, 3])).toStrictEqual("ODD");
  });
});
