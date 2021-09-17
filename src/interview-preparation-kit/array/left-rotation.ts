/** @format */

// https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem

function LeftRotation(array: number[], rotate: number): number[] {
  return [...array.slice(rotate), ...array.slice(0, rotate)];
}

export default LeftRotation;
