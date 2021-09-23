/** @format */

// https://leetcode.com/explore/learn/card/binary-search/125/template-i/952/

function search(nums: number[], target: number): number {
  if (nums.length < 3) {
    return nums.findIndex((val) => val === target);
  }

  let rotatePoint = -1;
  let low = 0;
  let high = nums.length - 1;

  // let count = 0;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    // console.log({ low, mid, high });

    if (nums[low] > nums[mid]) {
      high = mid;
    } else if (nums[high] < nums[mid]) {
      low = mid;
    } else {
      low += 1;
      high -= 1;
    }

    if (mid === nums.length - 2 && nums[mid] > nums[mid + 1]) {
      rotatePoint = mid + 1;
      break;
    } else if (nums[mid - 1] > nums[mid] && nums[mid] < nums[mid + 1]) {
      rotatePoint = mid;
      break;
    }

    // if (count++ > 10) break;
  }

  if (rotatePoint === -1) {
    return nums.findIndex((val) => val === target);
  }

  // console.log(nums.toString(), rotatePoint);

  const leftArr = nums.slice(0, rotatePoint);
  const rightArr = nums.slice(rotatePoint);

  // console.log(leftArr, rightArr);

  if (leftArr.length === 1 && leftArr[0] === target) {
    return 0;
  }

  if (rightArr.length === 1 && rightArr[0] === target) {
    return rotatePoint;
  }

  if (leftArr.length > 1) {
    if (leftArr[0] <= target && target <= leftArr[leftArr.length - 1]) {
      return leftArr.findIndex((val) => val === target);
    }
  }

  if (rightArr.length > 1) {
    if (rightArr[0] <= target && target <= rightArr[rightArr.length - 1]) {
      const res = rightArr.findIndex((val) => val === target);

      if (res >= 0) {
        return rotatePoint + rightArr.findIndex((val) => val === target);
      }
    }
  }

  return -1;
}

export default search;
