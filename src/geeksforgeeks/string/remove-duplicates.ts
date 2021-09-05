/** @format */

// https://practice.geeksforgeeks.org/problems/remove-duplicates3034/1/?category[]=Strings&category[]=Strings&page=1&query=category[]Stringspage1category[]Strings

interface ObjType {
  [char: string]: boolean;
}

function removeDuplicates(string: string): string {
  const obj: ObjType = {};

  for (let i = 0; i < string.length; i += 1) {
    if (!obj[string[i]]) obj[string[i]] = true;
  }

  return Object.keys(obj).join("");
}

export default removeDuplicates;
