/** @format */
// https://practice.geeksforgeeks.org/problems/remove-character3815/1/?category[]=Strings&category[]=Strings&page=1&query=category[]Stringspage1category[]Strings

function removeCharacter(string1: string, string2: string): string {
  const hash: { [key: string]: boolean } = string2
    .split("")
    .reduce((acc, val) => ({ ...acc, [val]: true }), {});

  let newStr = "";

  for (let i = 0; i < string1.length; i += 1) {
    const char = string1[i];

    if (!hash[char]) newStr += char;
  }

  return newStr;
}

export default removeCharacter;
