/** @format */

// https://practice.geeksforgeeks.org/problems/display-longest-name0853/1/?category[]=Strings&category[]=Strings&page=1&query=category[]Stringspage1category[]Strings

function displayLongestName(array: string[]): string {
  let maxString = "";

  for (let i = 0; i < array.length; i += 1) {
    const str = array[i];

    if (maxString.length < str.length) maxString = str;
  }

  return maxString;
}

export default displayLongestName;
