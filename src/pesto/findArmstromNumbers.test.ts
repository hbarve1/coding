/** @format */

import findArmstromNumbers from "./findArmstromNumbers";

describe("", () => {
  test("", () => {
    expect(findArmstromNumbers(100)).toStrictEqual([1]);

    expect(findArmstromNumbers(1000)).toStrictEqual([1, 153, 370, 371, 407]);
  });
});
