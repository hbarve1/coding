/** @format */

import steps from "./steps";

test("steps is a function", () => {
  expect(typeof steps).toEqual("function");
});

test("steps called with n = 1", () => {
  expect(steps(1)).toStrictEqual(["#"]);
});

test("steps called with n = 2", () => {
  expect(steps(2)).toStrictEqual(["# ", "##"]);
});

test("steps called with n = 3", () => {
  expect(steps(3)).toStrictEqual(["#  ", "## ", "###"]);
});
