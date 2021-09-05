/** @format */
// https://practice.geeksforgeeks.org/problems/change-the-string3541/1/?category[]=Strings&category[]=Strings&page=1&query=category[]Stringspage1category[]Strings

function changeString(str: string): string {
  const charCode = str[0].charCodeAt(0);
  const isLowerCase = charCode >= 97 && charCode <= 122;

  return isLowerCase ? str.toLowerCase() : str.toUpperCase();
}

export default changeString;
