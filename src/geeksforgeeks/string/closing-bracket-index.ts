/** @format */
// https://practice.geeksforgeeks.org/problems/closing-bracket-index5900/1/?category[]=Strings&category[]=Strings&page=1&query=category[]Stringspage1category[]Strings

/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

function closingBracketIndex(str: string, pos: number) {
  const stack = [];

  for (let i = pos; i < str.length; i += 1) {
    if (str[i] === "[") stack.push("[");
    else if (str[i] === "]") {
      stack.pop();
      if (stack.length === 0) {
        return i;
      }
    }
  }
}

export default closingBracketIndex;
