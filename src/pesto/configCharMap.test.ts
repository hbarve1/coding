/** @format */

import configCharMap from "./configCharMap";

describe("", () => {
  test("", () => {
    expect(
      configCharMap({
        1: ["a", "b", "c", "d", "e", "f"],
        2: ["p", "q", "r", "s", "a", "j"],
      }),
    ).toStrictEqual({
      a: ["1", "2"],
      b: ["1"],
      c: ["1"],
      d: ["1"],
      e: ["1"],
      f: ["1"],
      p: ["2"],
      q: ["2"],
      r: ["2"],
      s: ["2"],
      j: ["2"],
    });

    expect(
      configCharMap({
        1: ["a", "b", "c"],
        2: ["b", "q", "r", "s"],
        3: ["p", "a", "j"],
        4: ["a", "j"],
      }),
    ).toStrictEqual({
      a: ["1", "3", "4"],
      b: ["1", "2"],
      c: ["1"],
      q: ["2"],
      r: ["2"],
      s: ["2"],
      p: ["3"],
      j: ["3", "4"],
    });

    expect(
      configCharMap({
        1: ["a", "b", "c"],
        2: ["b", "A", "r", "s"],
        3: ["p", "a", "j"],
        4: ["a", "J"],
      }),
    ).toStrictEqual({
      a: ["1", "2", "3", "4"],
      b: ["1", "2"],
      c: ["1"],
      r: ["2"],
      s: ["2"],
      p: ["3"],
      j: ["3", "4"],
    });

    expect(
      configCharMap({
        delhi: ["himank", "Raghu"],
        bangaluru: ["Raghu", "PD"],
        chennai: ["Himank", "pd"],
      }),
    ).toStrictEqual({
      himank: ["delhi", "chennai"],
      raghu: ["delhi", "bangaluru"],
      pd: ["bangaluru", "chennai"],
    });
  });
});
