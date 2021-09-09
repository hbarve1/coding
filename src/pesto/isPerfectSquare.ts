/** @format */

function isPerfectSquare(n: number): boolean {
  const sqrt: number = parseInt(Math.sqrt(n).toString(), 10);

  return n === sqrt * sqrt;
}

export default isPerfectSquare;
