/** @format */

import isArmstrongNumber from "./isArmstrongNumber";

function findArmstromNumbers(limit: number): number[] {
  const results = [];

  for (let i = 1; i <= limit; i += 1) {
    if (isArmstrongNumber(i)) results.push(i);
  }

  return results;
}

export default findArmstromNumbers;
