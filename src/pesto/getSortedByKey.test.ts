/** @format */

import getSortedByKey from "./getSortedByKey";

describe("", () => {
  test("", () => {
    const array = [
      {
        name: "User A",
        age: 20,
        city: "delhi",
      },
      {
        name: "User B",
        age: 22,
        city: "mumbai",
      },
      {
        name: "User C",
        age: 30,
        city: "chennai",
      },
      {
        name: "User D",
        age: 20,
        city: "chennai",
      },
      {
        name: "User E",
        age: 30,
        city: "delhi",
      },
    ];

    expect(getSortedByKey(array, "city")).toStrictEqual({
      delhi: ["User A", "User E"],
      mumbai: ["User B"],
      chennai: ["User C", "User D"],
    });

    expect(getSortedByKey(array, "age")).toStrictEqual({
      "20": ["User A", "User D"],
      "22": ["User B"],
      "30": ["User C", "User E"],
    });

    expect(getSortedByKey(array, "name")).toStrictEqual({
      "User A": ["User A"],
      "User B": ["User B"],
      "User C": ["User C"],
      "User D": ["User D"],
      "User E": ["User E"],
    });
  });
});
