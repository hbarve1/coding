/** @format */

/* eslint-disable max-classes-per-file */

// https://leetcode.com/explore/learn/card/binary-search/138/background/1038/

// function bSearch(
//   nums: number[],
//   target: number,
//   fromIndex: number,
//   toIndex: number,
// ): number {
//   if (fromIndex === toIndex) {
//     if (nums[fromIndex] === target) return fromIndex;

//     return -1;
//   }

//   if (fromIndex + 1 === toIndex) {
//     if (nums[fromIndex] === target) return fromIndex;

//     if (nums[toIndex] === target) return toIndex;

//     return -1;
//   }

//   const midPoint = Math.floor((fromIndex + toIndex) / 2);

//   if (nums[midPoint] === target) return midPoint;

//   if (nums[midPoint] > target) {
//     return bSearch(nums, target, fromIndex, midPoint);
//   }

//   if (nums[midPoint] < target) {
//     return bSearch(nums, target, midPoint, toIndex);
//   }

//   return -1;
// }

// function search(nums: number[], target: number): number {
//   return bSearch(nums, target, 0, nums.length - 1);
// }

function search(nums: number[], target: number): number {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    const midpoint = l + Math.floor((r - l) / 2);

    if (target > nums[midpoint]) {
      l = midpoint + 1;
    } else if (target < nums[midpoint]) {
      r = midpoint - 1;
    } else if (target === nums[midpoint]) {
      return midpoint;
    }
  }

  return -1;
}

export default search;
