/** @format */

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578/

/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */

// function containsDuplicate(nums: number[]): boolean {
//   const map: { [key: number]: boolean } = {};

//   for (let i = 0; i < nums.length; i += 1) {
//     if (map[nums[i]]) return true;

//     map[nums[i]] = true;
//   }

//   return false;
// }

// function containsDuplicate(nums: number[]): boolean {
//   const map: Set<number> = new Set();

//   for (let i = 0; i < nums.length; i += 1) {
//     if (map.has(nums[i])) return true;

//     map.add(nums[i]);
//   }

//   return false;
// }

function containsDuplicate(nums: number[]): boolean {
  const set: Set<number> = new Set(nums);

  return set.size !== nums.length;
}

export default containsDuplicate;
