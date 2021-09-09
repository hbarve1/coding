/** @format */

const isEven = (num: number): boolean => num % 2 === 0;

function checkSumIsOddEven(array: number[]): "EVEN" | "ODD" {
  return isEven(array.reduce((acc, val) => acc + val, 0)) ? "EVEN" : "ODD";
}

export default checkSumIsOddEven;
