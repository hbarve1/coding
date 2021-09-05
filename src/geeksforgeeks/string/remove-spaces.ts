/** @format */

// https://practice.geeksforgeeks.org/problems/remove-spaces0128/1/?category[]=Strings&category[]=Strings&page=1&query=category[]Stringspage1category[]Strings

function removeSpaces(str: string): string {
  let newString = "";

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] !== " ") newString += str[i];
  }

  return newString;
}

export default removeSpaces;
