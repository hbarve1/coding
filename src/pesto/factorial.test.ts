/** @format */

// eslint-disable-next-line import/no-named-as-default
import { factorial, memoFactorial } from "./factorial";

describe("", () => {
  test("Fibbonaci Number", () => {
    expect(factorial(2)).toBe(2);
    expect(factorial(3)).toBe(6);
    expect(factorial(8)).toBe(40320);
    expect(factorial(10)).toBe(3628800);
  });

  test("Fibbonaci Number with Memorization", () => {
    expect(memoFactorial(2)).toBe(2);
    expect(memoFactorial(3)).toBe(6);
    expect(memoFactorial(8)).toBe(40320);
    expect(memoFactorial(10)).toBe(3628800);
  });
});
