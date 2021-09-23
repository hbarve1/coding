/** @format */

import findFirstBadVersion from "./first-bad-version";

function closureIsBadVersion(n: number): (num: number) => boolean {
  return function isBadVersion(version: number): boolean {
    return version >= n;
  };
}

describe("findFirstBadVersion", () => {
  test("Test 1", () => {
    const input = 5;
    const output = 4;

    const result = findFirstBadVersion(input, closureIsBadVersion(4));

    expect(result).toBe(output);
  });

  test("Test 2", () => {
    const input = 1;
    const output = 1;

    const result = findFirstBadVersion(input, closureIsBadVersion(1));

    expect(result).toBe(output);
  });

  test("Test 3", () => {
    const input = 5606986;
    const output = 90987;

    const result = findFirstBadVersion(input, closureIsBadVersion(90987));

    expect(result).toBe(output);
  });
});
