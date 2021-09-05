/** @format */
// https://practice.geeksforgeeks.org/problems/check-if-actual-binary-representation-of-a-number-is-palindrome0624/1/?category[]=Strings&category[]=Strings&page=2&query=category[]Stringspage2category[]Strings#

function isBinaryPalindrome(num: number): 0 | 1 {
  const str = num.toString(2);

  let low = 0;
  let high = str.length - 1;

  while (low < high) {
    if (str[low] !== str[high]) return 0;

    low += 1;
    high -= 1;
  }

  return 1;
}

export default isBinaryPalindrome;
