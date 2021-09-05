/** @format */

// https://practice.geeksforgeeks.org/problems/check-if-the-number-is-balanced3014/1/?category[]=Strings&category[]=Strings&page=1&query=category[]Stringspage1category[]Strings

// @NOTE: all test cases are working in local but
// not in gkg practice submit option.
function checkNumberBalanced(string: string): number {
  const mid = Math.floor(string.length / 2);

  let lhs = 0;
  let rhs = 0;

  // console.log(mid);

  for (let index = 0; index < string.length; index += 1) {
    if (index < mid) lhs += parseInt(string[index], 10);
    if (index > mid) rhs += parseInt(string[index], 10);
  }

  // console.log(lhs, rhs);

  return lhs === rhs ? 1 : 0;
}

// function checkNumberBalanced(string) {
// const arr = string.split("");
// const mid = Math.floor(arr.length / 2);

// const lhs = arr.slice(0, mid).reduce((sum, val) => sum + parseInt(val), 0);
// const rhs = arr.slice(mid + 1).reduce((sum, val) => sum + parseInt(val), 0);

// console.log(lhs, rhs);

// return Number(lhs === rhs);
// }

export default checkNumberBalanced;
