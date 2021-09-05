/** @format */
// https://practice.geeksforgeeks.org/problems/check-if-a-string-is-isogram-or-not-1587115620/1/?category[]=Strings&category[]=Strings&page=2&query=category[]Stringspage2category[]Strings

function isStringIsogram(str: string): 0 | 1 {
  let low = 0;
  const hash: { [key: string]: number } = {};

  while (low < str.length) {
    const char = str[low];
    if (typeof hash[char] === "undefined") {
      hash[char] = 1;
    } else {
      return 0;
    }

    low += 1;
  }

  return 1;
}

export default isStringIsogram;
