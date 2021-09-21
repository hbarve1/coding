/** @format */

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/564/

/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */

function maxProfit(prices: number[]): number {
  if (prices.length <= 1) return 0;

  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) profit += prices[i] - prices[i - 1];
  }

  return profit;
}

export default maxProfit;
