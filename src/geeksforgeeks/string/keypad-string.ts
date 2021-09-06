/** @format */
// https://practice.geeksforgeeks.org/problems/keypad-typing0119/1/?category[]=Strings&category[]=Strings&page=2&query=category[]Stringspage2category[]Strings

function getKeyNumberFromChar(char: string): number {
  const table = [
    2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 9, 9, 9,
    9,
  ];

  return table[char.charCodeAt(0) - 97];
}

function keypadString(str: string): string {
  let newStr = "";

  for (let i = 0; i < str.length; i += 1) {
    newStr += getKeyNumberFromChar(str[i]);
  }

  return newStr;
}

export default keypadString;
