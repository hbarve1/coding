/** @format */

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/559/

/* eslint-disable no-param-reassign */
/* eslint-disable guard-for-in */

// NOTE: Time limit exceeded
// function twoSum(nums: number[], target: number): number[] {
//   const obj: { [key: string]: number[] } = nums.reduce(
//     (map: { [key: string]: number[] }, val, i) => ({
//       ...map,
//       [val]: map[val] ? [...map[val], i] : [i],
//     }),
//     {},
//   );

//   // console.log(obj);
//   // console.log(Object.entries(obj));

//   const keys = Object.keys(obj);
//   for (let i = 0; i < keys.length; i += 1) {
//     const val = parseInt(keys[i], 10);

//     if (target - val === val) {
//       return obj[val].slice(0, 2);
//     }
//     if (obj[String(target - val)]) {
//       // console.log(obj[val], obj[String(target - val)]);
//       return [
//         ...obj[val].slice(0, 1),
//         ...obj[String(target - val)].slice(0, 1),
//       ];
//     }
//   }

//   return nums;
// }

function twoSum(nums: number[], target: number): number[] {
  const map = new Map();

  for (let i = 0; i < nums.length; i += 1) {
    if (!map.has(nums[i])) {
      const diff = target - nums[i];

      if (map.has(diff)) {
        const list = map.get(diff);

        map.set(diff, [...list, i]);
      } else {
        map.set(diff, [i]);
      }
    } else {
      const list = map.get(nums[i]);

      return [list[0], i];
    }
  }

  return nums;
}

// function twoSum(nums: number[], target: number): number[] {
//   const m: { [key: string]: number } = {};

//   // eslint-disable-next-line no-restricted-syntax
//   for (const i in nums) {
//     if (m[target - nums[i]] != null) {
//       return [m[target - nums[i]], +i];
//     }

//     m[nums[i]] = +i;
//   }

//   return [];
// }

export default twoSum;
