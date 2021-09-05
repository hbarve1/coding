/** @format */

// https://practice.geeksforgeeks.org/problems/java-delete-alternate-characters4036/1/?category[]=Strings&category[]=Strings&page=1&query=category[]Stringspage1category[]Strings

function deleteAlternateChar(string: string): string {
  let newString = "";

  for (let i = 0; i < string.length; i += 1) {
    if (i % 2 === 0) newString += string[i];
  }

  return newString;
}

export default deleteAlternateChar;
