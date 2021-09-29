/** @format */

// https://leetcode.com/explore/learn/card/binary-search/126/template-ii/949/

// function findMin(nums: number[]): number {
//   if (nums.length < 2) return nums[0];
//   if (nums.length < 3) return nums[0] > nums[1] ? nums[1] : nums[0];

//   let low = 0;
//   let high = nums.length - 1;

//   while (low <= high) {
//     const mid = Math.floor((low + high) / 2);

//     if (mid === 0) return nums[0];
//     if (mid === nums.length - 1) return nums[nums.length - 1];

//     if (nums[mid - 1] > nums[mid] && nums[mid] < nums[mid + 1]) {
//       return nums[mid];
//     }

//     if (low === mid && mid + 1 === high && nums[mid] > nums[high]) {
//       return nums[high];
//     }

//     if (nums[low] < nums[mid] && nums[mid] < nums[high]) {
//       high = mid;
//     } else if (nums[low] > nums[mid] && nums[mid] < nums[high]) {
//       high = mid;
//     } else if (nums[low] < nums[mid] && nums[mid] > nums[high]) {
//       low = mid;
//     } else if (nums[low] > nums[mid] && nums[mid] > nums[high]) {
//       low = mid;
//     }
//   }

//   return nums[low];
// }

// More optimised version of code from leetcode
function findMin(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[right]) left = mid + 1;
    else right = mid;
  }

  return nums[right];
}

export default findMin;
