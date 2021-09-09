/** @format */

import fizzBuzz from "./fizzbuzz";

// beforeEach(() => {
//   jest.spyOn(console, "log");
// });

// afterEach(() => {
//   console.log.mockRestore();
// });

test("fizzBuzz function is defined", () => {
  expect(fizzBuzz).toBeDefined();
});

test("Calling fizzbuzz with `5` prints out 5 statements", () => {
  expect(fizzBuzz(5)).toStrictEqual([1, 2, "fizz", 4, "buzz"]);
});

test("Calling fizzbuzz with 15 prints out the correct values", () => {
  expect(fizzBuzz(15)).toStrictEqual([
    1,
    2,
    "fizz",
    4,
    "buzz",
    "fizz",
    7,
    8,
    "fizz",
    "buzz",
    11,
    "fizz",
    13,
    14,
    "fizzbuzz",
  ]);
});
