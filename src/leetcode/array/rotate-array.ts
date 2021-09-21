/** @format */

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/

/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */

// function rotateArray(nums: number[], k: number): number[] {
//   k %= nums.length;

//   if (k === 0) return nums;

//   if (!nums.length) return nums;

//   let index = -1;

//   while (++index < k) {
//     nums.unshift(nums.pop() as number);
//   }

//   return nums;
// }

// function rotateArray(nums: number[], k: number): void {
//   const i = k % nums.length;

//   if (i === 0) return;

//   nums = [...nums.slice(nums.length - i), ...nums.slice(0, nums.length - i)];

//   console.log(nums);
// }

// function rotateArray(nums: number[], k: number): number[] {
//   const i = k % nums.length;

//   if (i === 0) return nums;

//   return [
//     ...nums.slice(0, nums.length - i).reverse(),
//     ...nums.slice(nums.length - i).reverse(),
//   ].reverse();
// }

function rotateArray(nums: number[], k: number): number[] {
  const nl = nums.length;
  const d = nums.slice(0);

  k %= nl;

  for (let i = 0; i < nl; i++) {
    const a = nl - k;
    const index = (i + a) % nl;

    nums[i] = d[index];
  }

  return nums;
}

export default rotateArray;
