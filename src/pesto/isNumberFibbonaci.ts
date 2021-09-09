/** @format */

// Check is given number is fibbonnaci number.

import isPerfectSquare from "./isPerfectSquare";

function isNumberFibbonaci(n: number): boolean {
  return isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4);
}

export default isNumberFibbonaci;
