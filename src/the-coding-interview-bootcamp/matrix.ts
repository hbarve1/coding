/** @format */

// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n: number): number[][] {
  const results: number[][] = Array.from({ length: n })
    .fill([])
    .map(() => Array.from({ length: n }).fill(0)) as number[][];

  let left = 0;
  let right = n - 1;
  let top = 0;
  let bottom = n - 1;
  let count = 1;

  while (count <= n * n) {
    // Top
    for (let i = left; i <= right; i += 1) {
      results[top][i] = count;
      count += 1;
    }
    top += 1;

    // console.log({ n, count, left, right, top, bottom });

    // Right
    for (let i = top; i <= bottom; i += 1) {
      results[i][right] = count;
      count += 1;
    }
    right -= 1;

    // console.log({ n, count, left, right, top, bottom });

    // Bottom
    for (let i = right; i >= left; i -= 1) {
      results[bottom][i] = count;
      count += 1;
    }
    bottom -= 1;

    // console.log({ n, count, left, right, top, bottom });

    // Left
    for (let i = bottom; i >= top; i -= 1) {
      results[i][left] = count;
      count += 1;
    }
    left += 1;

    // console.log({ n, count, left, right, top, bottom });
  }

  // console.log(results);

  return results;
}

export default matrix;
