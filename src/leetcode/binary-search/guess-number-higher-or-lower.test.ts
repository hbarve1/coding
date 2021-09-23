/** @format */

import guessNumber from "./guess-number-higher-or-lower";

function closureGuess(pick: number): (num: number) => 0 | -1 | 1 {
  return function guess(num: number): 0 | -1 | 1 {
    if (pick < num) return -1;
    if (pick > num) return 1;
    return 0;
  };
}

describe("guessNumber", () => {
  test("Test 1", () => {
    const input = 10;
    const output = 6;

    // const guess = closureGuess(6);

    // console.log(guess);
    // console.log(guess(1));
    // console.log(guess(10));

    const result = guessNumber(input, closureGuess(6));

    expect(result).toBe(output);
  });

  test("Test 2", () => {
    const input = 1;
    const output = 1;

    const result = guessNumber(input, closureGuess(1));

    expect(result).toBe(output);
  });

  test("Test 3", () => {
    const input = 2;
    const output = 1;

    const result = guessNumber(input, closureGuess(1));

    expect(result).toBe(output);
  });

  test("Test 4", () => {
    const input = 2;
    const output = 2;

    const result = guessNumber(input, closureGuess(2));

    expect(result).toBe(output);
  });
});
