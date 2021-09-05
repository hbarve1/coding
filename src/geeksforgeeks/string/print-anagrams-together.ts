/** @format */

// https://practice.geeksforgeeks.org/problems/print-anagrams-together/1/?category[]=Strings&category[]=Strings&page=1&query=category[]Stringspage1category[]Strings

// @NOTE: although this is working prefectly in local, it is giving error in submittion
// on 3rd case.
function printAnagramsTogether(stringList: string[]): string[][] {
  const baseArr = Array.from({ length: 26 }).fill(0);

  const category: {
    [key: string]: string[];
  } = {};

  for (let i = 0; i < stringList.length; i += 1) {
    const string = stringList[i];

    const boolArray = string
      .split("")
      .reduce(
        (acc, val) => [
          ...acc.slice(0, val.charCodeAt(0) - 97),
          1,
          ...acc.slice(val.charCodeAt(0) - 97 + 1),
        ],
        [...baseArr],
      );

    const boolString = boolArray.join("");

    if (typeof category[boolString] === "undefined") {
      category[boolString] = [string];
    } else {
      category[boolString].push(string);
    }
  }

  return Object.values(category);
}

export default printAnagramsTogether;
