/** @format */

// https://practice.geeksforgeeks.org/problems/find-the-camel3348/1/?category[]=Strings&category[]=Strings&page=1&query=category[]Stringspage1category[]Strings

function countCamelCase(string: string): number {
  let count = 0;

  for (let i = 0; i < string.length; i += 1) {
    const char = string[i];
    const charCode = char.charCodeAt(0);

    if (charCode >= 65 && charCode <= 90) count += 1;
  }

  return count;
}

export default countCamelCase;
