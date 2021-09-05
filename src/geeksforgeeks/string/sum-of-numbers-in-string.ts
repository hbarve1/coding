/** @format */

// https://practice.geeksforgeeks.org/problems/sum-of-numbers-in-string-1587115621/1/?category[]=Strings&category[]=Strings&page=1&query=category[]Stringspage1category[]Strings

function sumOfNumbersInString(str: string): number {
  let sum = 0;
  let num = "";

  // console.log(str.split(/[^0-9]/g));

  for (let index = 0; index < str.length; index += 1) {
    const number: number = parseInt(str[index], 10);

    if (Number.isNaN(number) === false) {
      num += str[index];
      const nextNumber = parseInt(str[index + 1], 10);

      if (Number.isNaN(nextNumber)) {
        sum += parseInt(num, 10);
        num = "";
      }
    }
  }

  return sum;
}

export default sumOfNumbersInString;
