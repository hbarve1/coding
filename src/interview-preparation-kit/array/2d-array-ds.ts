/** @format */

// https://www.hackerrank.com/challenges/2d-array/problem

function Array2dDS(array: number[][]): number {
  let max = Number.MIN_SAFE_INTEGER;

  // console.log(array);

  for (let i = 1; i < 5; i += 1) {
    for (let j = 1; j < 5; j += 1) {
      const a = array[i - 1][j - 1];
      const b = array[i - 1][j];
      const c = array[i - 1][j + 1];
      const d = array[i][j];
      const e = array[i + 1][j - 1];
      const f = array[i + 1][j];
      const g = array[i + 1][j + 1];

      // console.log({ i, j }, [
      //   [a, b, c],
      //   [null, d, null],
      //   [e, f, g],
      // ]);

      const sum = a + b + c + d + e + f + g;

      if (max < sum) max = sum;
    }
  }

  return max;
}

export default Array2dDS;
