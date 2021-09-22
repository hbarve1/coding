/** @format */

import squareRoot from "./square-root";

describe("squareRoot", () => {
  test("Test 1", () => {
    const input = 4;
    const output = 2;

    const result = squareRoot(input);

    expect(result).toBe(output);
  });

  test("Test 2", () => {
    const input = 8;
    const output = 2;

    const result = squareRoot(input);

    expect(result).toBe(output);
  });

  test("Test 3", () => {
    const input = 16;
    const output = 4;

    const result = squareRoot(input);

    expect(result).toBe(output);
  });

  test("Test 4", () => {
    const input = 5;
    const output = 2;

    const result = squareRoot(input);

    expect(result).toBe(output);
  });

  test("Test 5", () => {
    const input = 10;
    const output = 3;

    const result = squareRoot(input);

    expect(result).toBe(output);
  });
});
