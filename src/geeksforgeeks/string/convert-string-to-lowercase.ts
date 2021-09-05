/** @format */

// https://practice.geeksforgeeks.org/problems/java-convert-string-to-lowercase2313/1/?category[]=Strings&category[]=Strings&page=1&query=category[]Stringspage1category[]Strings

function toLowercase(str: string): string {
  let newString = "";

  for (let i = 0; i < str.length; i += 1) {
    const char = str[i];
    const charCode = char.charCodeAt(0);

    if (charCode >= 65 && charCode <= 90) {
      newString += String.fromCharCode(charCode - 65 + 97);
    } else {
      newString += char;
    }
  }

  return newString;
}

export default toLowercase;
