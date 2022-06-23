/** @format */
// https://www.hackerrank.com/challenges/making-candies/problem

/* eslint-disable no-param-reassign */

/**
 * Complete the 'minimumPasses' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. LONG_INTEGER m
 *  2. LONG_INTEGER w
 *  3. LONG_INTEGER p
 *  4. LONG_INTEGER n
 */

function minimumPasses(
  machines: number,
  workers: number,
  costOfOne: number,
  totalCandies: number,
) {
  let days = 0;
  let answer = Math.ceil(totalCandies / (machines * workers));
  let candies = 0;

  while (days < answer) {
    const daysNeeded = Math.ceil((costOfOne - candies) / (machines * workers));
    days += daysNeeded;
    candies += machines * workers * daysNeeded;

    if (Math.floor(candies / costOfOne) >= Math.abs(machines - workers)) {
      candies -= Math.abs(machines - workers) * costOfOne;

      if (machines > workers) {
        workers = machines;
      } else {
        machines = workers;
      }

      const upgrades = Math.floor(candies / costOfOne);
      if (upgrades > 0) {
        if (upgrades % 2 === 0) {
          const val = machines + upgrades / 2;
          machines = val;
          workers = val;
        } else {
          const val = machines + Math.floor(upgrades / 2);
          machines = val;
          workers = val;
          machines += 1;
        }
        candies -= upgrades * costOfOne;
      }
    } else {
      const upgrades = Math.floor(candies / costOfOne);

      if (machines > workers) {
        workers += upgrades;
      } else {
        machines += upgrades;
      }

      candies -= upgrades * costOfOne;
    }

    const minPass = Math.ceil((totalCandies - candies) / (machines * workers));

    if (answer > minPass + days) {
      answer = minPass + days;
    }
  }

  return answer;
}

export default minimumPasses;
