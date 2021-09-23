/** @format */

// https://leetcode.com/explore/learn/card/binary-search/126/template-ii/948/

function findPeak(nums: number[], low: number, high: number): number[] {
  if (low > high) {
    return [];
  }

  if (low === high) {
    if (low === 0 && nums[0] > nums[1]) {
      return [0];
    }

    if (high === nums.length - 1 && nums[high] > nums[high - 1]) {
      return [high];
    }

    if (nums[low - 1] < nums[low] && nums[low] > nums[low + 1]) {
      return [low];
    }

    return [];
  }

  const mid = Math.floor((low + high) / 2);

  const leftResults = findPeak(nums, low, mid);
  const rightResults = findPeak(nums, mid + 1, high);

  const result = [...leftResults, ...rightResults];

  return result;
}

function findPeakElement(nums: number[]): number[] {
  const peaks = findPeak(nums, 0, nums.length - 1);

  return peaks;
}

// NOTE: this is a solution from "leet code"
// function findPeakElement(nums: number[]): number[] {
//   let l = 0;
//   let r = nums.length - 1;

//   while (l < r) {
//     const mid = l + Math.floor((r - l) / 2);

//     if (nums[mid] < nums[mid + 1]) {
//       l = mid + 1;
//     } else {
//       r = mid;
//     }
//   }

//   return [l];
// }

export default findPeakElement;
