/** @format */

// /** @format */

// // https://practice.geeksforgeeks.org/problems/find-all-possible-palindromic-partitions-of-a-string/1/?category[]=Strings&category[]=Strings&page=1&query=category[]Stringspage1category[]Strings

// // TODO: This problem is not complete, need to cover more cases.

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// function isPalindrom2(string: string): boolean {
//   return string === string.split("").reverse().join("");
// }

// function isPalindrom(string: string): boolean {
//   let low = 0;
//   let high = string.length - 1;

//   while (low < high) {
//     if (string[low] !== string[high]) {
//       return false;
//     }

//     low += 1;
//     high -= 1;
//   }

//   return true;
// }

// function findPalindromicPartitions(string: string): string[][] {
//   const array = [];

//   for (let length = 1; length <= string.length; length += 1) {
//     const list = [];
//     let isPalindromExists = false;

//     for (let j = 0; j < string.length; ) {
//       const str = string.slice(j, j + length);

//       if (isPalindrom(str) && str.length === length) {
//         list.push(str);
//         j += length;
//         isPalindromExists = true;
//       } else {
//         list.push(string[j]);
//         j += 1;
//       }
//     }

//     if (isPalindromExists) {
//       array.push(list);
//     }
//   }

//   // console.log(array);

//   return array;
// }

// export default findPalindromicPartitions;
