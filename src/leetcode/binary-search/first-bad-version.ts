/** @format */

// https://leetcode.com/explore/learn/card/binary-search/126/template-ii/947/

function findFirstBadVersion(
  n: number,
  isBadVersion: (version: number) => boolean,
): number {
  let start = 1;
  let end = n;

  while (start <= end) {
    const mid = Math.round((start + end) / 2);

    if (isBadVersion(mid)) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return end + 1;
}

export default findFirstBadVersion;
