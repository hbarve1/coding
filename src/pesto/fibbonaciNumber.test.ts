/** @format */

// eslint-disable-next-line import/no-named-as-default
import { fibbonaciNumber, memoFibbonaciNumber } from "./fibbonaciNumber";

describe("", () => {
  test("Fibbonaci Number", () => {
    expect(fibbonaciNumber(2)).toBe(1);
    expect(fibbonaciNumber(3)).toBe(2);
    expect(fibbonaciNumber(8)).toBe(21);
    expect(fibbonaciNumber(10)).toBe(55);
  });

  test("Fibbonaci Number with Memorization", () => {
    expect(memoFibbonaciNumber(2)).toBe(1);
    expect(memoFibbonaciNumber(3)).toBe(2);
    expect(memoFibbonaciNumber(8)).toBe(21);
    expect(memoFibbonaciNumber(10)).toBe(55);
  });
});
