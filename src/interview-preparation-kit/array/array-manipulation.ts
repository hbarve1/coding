/** @format */

// https://www.hackerrank.com/challenges/crush/problem

// function arrayManipulation(n: number, arr: number[][]): number {
//   const array: number[] = Array.from({ length: n }).fill(0) as number[];

//   for (let i = 0; i < arr.length; i += 1) {
//     const a = arr[i][0];
//     const b = arr[i][1];
//     const k = arr[i][2];

//     for (let j = a; j <= b; j += 1) {
//       array[j - 1] += k;
//     }

//     console.log(array.toString());
//   }

//   return array.reduce(
//     (max, val) => (val > max ? val : max),
//     Number.MIN_SAFE_INTEGER,
//   );
// }

function arrayManipulation(n: number, arr: number[][]): number {
  const array: number[] = Array.from({ length: n + 1 }).fill(0) as number[];

  for (let i = 0; i < arr.length; i += 1) {
    const a = arr[i][0];
    const b = arr[i][1];
    const k = arr[i][2];

    array[a] += k;

    if (b + 1 <= n) {
      array[b + 1] -= k;
    }
    // console.log(array.toString());
  }

  let max = 0;
  let x = 0;

  for (let i = 0; i < array.length; i += 1) {
    x += array[i];

    if (x > max) max = x;
  }

  // console.log(x, max);

  return max;
}

export default arrayManipulation;
