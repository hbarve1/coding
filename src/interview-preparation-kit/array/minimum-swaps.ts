/** @format */

// https://www.hackerrank.com/challenges/minimum-swaps-2/problem

function minimumSwaps(arr: number[]): number {
  let count = 0;
  const array = [...arr];

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] !== i + 1) {
      const j = array[i] - 1;

      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;

      count += 1;
      i -= 1;
    }

    // console.log(array.toString(), i);
  }

  return count;
}

export default minimumSwaps;
