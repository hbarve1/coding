/** @format */

import maxProfit from "./best-time-to-buy-and-sell-stock-ii";

describe("maxProfit", () => {
  test("Test 1", () => {
    const input = [7, 1, 5, 3, 6, 4];
    const result = 7;
    const output = maxProfit(input);
    expect(output).toBe(result);
  });

  test("Test 2", () => {
    const input = [1, 2, 3, 4, 5];
    const result = 4;
    const output = maxProfit(input);
    expect(output).toBe(result);
  });

  test("Test 3", () => {
    const input = [7, 6, 4, 3, 1];
    const result = 0;
    const output = maxProfit(input);
    expect(output).toBe(result);
  });
});
