/** @format */

// https://www.hackerrank.com/challenges/common-child/problem

function commonChild(s1: string, s2: string): number {
  const matrix = Array.from({ length: s1.length + 1 }).fill(null) as number[][];

  for (let i = 0; i <= s1.length; i += 1) {
    if (matrix[i] === null) {
      matrix[i] = Array.from({ length: s2.length + 1 }).fill(null) as number[];
    }

    for (let j = 0; j <= s2.length; j += 1) {
      if (i === 0 || j === 0) {
        matrix[i][j] = 0;
      }

      if (i !== 0 && j !== 0) {
        if (s1[i - 1] === s2[j - 1]) {
          matrix[i][j] = matrix[i - 1][j - 1] + 1;
        } else {
          matrix[i][j] = Math.max(matrix[i][j - 1], matrix[i - 1][j]);
        }
      }
    }
  }

  return matrix[s1.length][s2.length];
}

export default commonChild;
