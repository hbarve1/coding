/** @format */

// https://leetcode.com/explore/learn/card/binary-search/125/template-i/950/

function squareRoot(x: number): number {
  let lo = 0;
  let hi = x;

  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);

    if (mid * mid > x) hi = mid - 1;
    else lo = mid + 1;
  }

  return hi;
}

export default squareRoot;
