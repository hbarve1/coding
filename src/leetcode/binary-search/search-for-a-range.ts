/** @format */

// https://leetcode.com/explore/learn/card/binary-search/135/template-iii/944/

function searchRange(nums: number[], target: number): number[] {
  let rangeFrom = -1;
  let rangeTo = -1;

  if (nums.length === 0) return [rangeFrom, rangeTo];
  if (nums.length === 1) {
    if (nums[0] === target) {
      rangeFrom = 0;
      rangeTo = 0;
    }

    return [rangeFrom, rangeTo];
  }

  let low = 0;
  let high = nums.length - 1;
  let mid = Math.floor((low + high) / 2);

  while (low < high) {
    if (low + 1 === high) {
      if (nums[low] === target) {
        mid = low;
        break;
      }

      if (nums[high] === target) {
        mid = high;
        break;
      }

      mid = -1;
      break;
    }

    mid = Math.floor((low + high) / 2);

    if (nums[mid] === target) break;

    if (nums[mid] < target) {
      low = mid;
    } else {
      high = mid;
    }
  }

  if (mid !== -1) {
    rangeFrom = mid;
    rangeTo = mid;

    while (
      nums[rangeFrom - 1] === nums[rangeFrom] ||
      nums[rangeTo + 1] === nums[rangeTo]
    ) {
      if (nums[rangeFrom - 1] === nums[rangeFrom]) rangeFrom -= 1;

      if (nums[rangeTo + 1] === nums[rangeTo]) rangeTo += 1;
    }
  }

  return [rangeFrom, rangeTo];
}

export default searchRange;
