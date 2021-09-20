/** @format */

/* eslint-disable no-param-reassign */

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/559/

function plusOne(digits: number[]): number[] {
  // eslint-disable-next-line for-direction
  for (let i = digits.length - 1; i >= 0; i -= 1) {
    if (i === 0 && digits[i] === 9) {
      digits[i] = 0;
      digits.unshift(1);
      break;
    }

    if (digits[i] < 9) {
      digits[i] += 1;
      break;
    } else {
      digits[i] = 0;
    }
  }

  return digits;
}

export default plusOne;
