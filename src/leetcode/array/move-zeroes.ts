/** @format */

/* eslint-disable no-param-reassign */

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/567/

function moveZeroes(nums: number[]): number[] {
  if (nums.length < 2) return nums;

  let lastIndex = 0;

  for (let i = 1; i <= nums.length; i += 1) {
    if (nums[i - 1] !== 0) {
      nums[lastIndex] = nums[i - 1];
      lastIndex += 1;
    }
  }

  for (let i = lastIndex; i < nums.length; i += 1) {
    nums[i] = 0;
  }

  return nums;
}

export default moveZeroes;
