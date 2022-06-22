/** @format */

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/

/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint @typescript-eslint/default-param-last: ["off"] */

function reduceFn(arr: number[] = [], val: number) {
  if (arr[val]) arr[val] += 1;
  else arr[val] = 1;

  return arr;
}

function intersect(nums1: number[], nums2: number[]): number[] {
  const arr1 = nums1.reduce(reduceFn, []);
  const arr2 = nums2.reduce(reduceFn, []);

  const results = [];

  for (let i = 0; i < Math.min(arr1.length, arr2.length); i += 1) {
    const val1 = arr1[i];
    const val2 = arr2[i];

    if (typeof val1 !== "undefined" && typeof val2 !== "undefined") {
      results.push(
        ...(Array.from({ length: Math.min(val1, val2) }).fill(i) as number[]),
      );
    }
  }

  // console.log(results);

  return results;
}

export default intersect;
