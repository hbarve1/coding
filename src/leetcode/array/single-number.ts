/** @format */

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/549/

// function singleNumber(nums: number[]): number {
//   const len = nums.length;
//   const set: Set<number> = new Set();

//   for (let i = 0; i < len; i += 1) {
//     const val = nums[i];

//     if (set.has(val)) {
//       set.delete(val);
//     } else {
//       set.add(val);
//     }
//   }

//   return set.values().next().value;
// }

function singleNumber(nums: number[]): number {
  let candidate = 0;

  nums.forEach((item) => {
    // eslint-disable-next-line no-bitwise
    candidate ^= item;
  });

  return candidate;
}

// function singleNumber(nums: number[]): number {
//   // eslint-disable-next-line no-bitwise
//   return nums.reduce((a, b) => a ^ b, 0);
// }

export default singleNumber;
