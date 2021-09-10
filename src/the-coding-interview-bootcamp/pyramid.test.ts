/** @format */

import pyramid from "./pyramid";

test("pyramid is a function", () => {
  expect(typeof pyramid).toEqual("function");
});

test("prints a pryamid for n = 2", () => {
  expect(pyramid(2)).toStrictEqual([" # ", "###"]);
});

test("prints a pryamid for n = 3", () => {
  expect(pyramid(3)).toStrictEqual(["  #  ", " ### ", "#####"]);
});

test("prints a pryamid for n = 4", () => {
  expect(pyramid(4)).toStrictEqual([
    "   #   ",
    "  ###  ",
    " ##### ",
    "#######",
  ]);
});
