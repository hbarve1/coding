/** @format */

import containsDuplicate from "./contains-duplicate";

describe("containsDuplicate", () => {
  test("Test 1", () => {
    const input = [1, 2, 3, 1];
    const output = true;

    const result = containsDuplicate(input);

    expect(result).toBe(output);
  });

  test("Test 2", () => {
    const input = [1, 2, 3, 4];
    const output = false;

    const result = containsDuplicate(input);

    expect(result).toBe(output);
  });

  test("Test 3", () => {
    const input = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
    const output = true;

    const result = containsDuplicate(input);

    expect(result).toBe(output);
  });
});
