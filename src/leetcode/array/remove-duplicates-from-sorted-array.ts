/** @format */

/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */

function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0;

  let lastUniqueIndex = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[lastUniqueIndex] < nums[i]) {
      lastUniqueIndex++;
      nums[lastUniqueIndex] = nums[i];
    }
  }

  return lastUniqueIndex + 1;
}

export default removeDuplicates;
