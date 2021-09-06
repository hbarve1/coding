/** @format */

// Check is given number is fibbonnaci number.

function isPerfectSquare(x: number): boolean {
  const s: number = parseInt(Math.sqrt(x).toString(), 10);

  return s * s === x;
}

function isNumberFibbonaci(n: number): boolean {
  return isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4);
}

export default isNumberFibbonaci;
