/** @format */
// https://practice.geeksforgeeks.org/problems/palindrome-string0817/1/?category[]=Strings&category[]=Strings&page=2&query=category[]Stringspage2category[]Strings

function isPalindrome(str: string): boolean {
  let low = 0;
  let high = str.length - 1;

  while (low < high) {
    if (str[low] !== str[high]) return false;

    low += 1;
    high -= 1;
  }

  return true;
}

export default isPalindrome;
