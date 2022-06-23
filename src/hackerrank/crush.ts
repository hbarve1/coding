/** @format */

// https://www.hackerrank.com/challenges/crush/problem

/*
 * Complete the 'arrayManipulation' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

function arrayManipulation(n: number, queries: number[][]) {
  // Write your code here
  const list = Array.from({ length: n + 2 }).fill(0) as number[];

  for (let i = 0; i < queries.length; i += 1) {
    const [a, b, k] = queries[i];

    list[a] += k;
    list[b + 1] -= k;
  }

  for (let j = 1; j < n + 2; j += 1) {
    list[j] += list[j - 1];
  }

  let max = -Infinity;

  for (let k = 0; k <= n; k += 1) {
    if (list[k] > max) {
      max = list[k];
    }
  }

  return max;
}

export default arrayManipulation;
