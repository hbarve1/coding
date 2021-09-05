/** @format */

// https://practice.geeksforgeeks.org/problems/minimum-indexed-character0221/1/?category[]=Strings&category[]=Strings&page=2&query=category[]Stringspage2category[]Strings

function minimumIndexedCharacter(str: string, patt: string): string {
  const hash: { [key: string]: boolean } = patt
    .split("")
    .reduce((acc, char) => ({ ...acc, [char]: true }), {});
  let minIndex = +Infinity;

  for (let i = 0; i < str.length; i += 1) {
    const char = str[i];

    if (hash[char] && minIndex > i) minIndex = i;
  }

  return minIndex === +Infinity ? "$" : str[minIndex];
}

export default minimumIndexedCharacter;
