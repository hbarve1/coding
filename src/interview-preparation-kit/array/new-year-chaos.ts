/** @format */

// https://www.hackerrank.com/challenges/new-year-chaos/problem

function minimumBribes(array: number[]): number | "Too chaotic" {
  // eslint-disable-next-line prefer-destructuring
  const length = array.length;
  let count = 0;

  for (let i = length - 1; i >= 0; i -= 1) {
    const value = array[i];

    if (value - (i + 1) > 2) {
      return "Too chaotic";
    }

    for (let j = Math.max(0, value - 2); j < i; j += 1) {
      if (array[j] > value) count += 1;

      // console.log(array, { i, j, "val[j]": array[j], "val[i]": val, count });
    }
  }

  return count;
}

export default minimumBribes;
