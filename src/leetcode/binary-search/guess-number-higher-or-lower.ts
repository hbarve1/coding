/** @format */

// https://leetcode.com/explore/learn/card/binary-search/125/template-i/951/

// NOTE: as guess function is predefined in test case, I have to create and pass
// that function here to run this function.

function guessNumber(n: number, guess: (num: number) => 0 | -1 | 1): number {
  let low = 1;
  let high = n;
  let i = Math.floor((low + high) / 2);
  let g = guess(i);

  while (g !== 0) {
    if (low + 1 === high) {
      if (guess(low) === 0) return low;
      if (guess(high) === 0) return high;
    }

    if (g === -1) {
      high = i;
      i = Math.floor((low + high) / 2);
      g = guess(i);
    } else if (g === 1) {
      low = i;
      i = Math.floor((low + high) / 2);
      g = guess(i);
    }
  }

  return i;
}

export default guessNumber;
