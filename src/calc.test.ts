/** @format */

import { add, subtract } from "./calc";

describe("test add function", () => {
  it("should return 15 for add(10,5)", () => {
    expect(add(10, 5)).toBe(15);
  });

  it("should return 5 for add(2,3)", () => {
    expect(add(2, 3)).toBe(5);
  });
});

describe("test subtract function", () => {
  it("should return 5 for subtract(10,5)", () => {
    expect(subtract(10, 5)).toBe(5);
  });

  it("should return -1 for subtract(2,3)", () => {
    expect(subtract(2, 3)).toBe(-1);
  });
});
