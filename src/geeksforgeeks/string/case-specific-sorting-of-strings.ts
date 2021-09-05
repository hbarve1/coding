/** @format */

// https://practice.geeksforgeeks.org/problems/case-specific-sorting-of-strings4845/1/?category[]=Strings&category[]=Strings&page=1&query=category[]Stringspage1category[]Strings

function mergeArray(array1: string[], array2: string[]): string[] {
  const mergedArray: string[] = [];

  while (array1.length || array2.length) {
    if (array1.length === 0 && array2.length > 0) {
      mergedArray.push(array2.shift() as string);
    } else if (array2.length === 0) {
      mergedArray.push(array1.shift() as string);
    } else if (array1[0] > array2[0]) {
      mergedArray.push(array2.shift() as string);
    } else {
      mergedArray.push(array1.shift() as string);
    }
  }

  return mergedArray;
}

function mergeSort(array: string[]): string[] {
  const middle: number = Math.floor(array.length / 2);

  if (array.length < 2) return array;

  const leftArray = mergeSort(array.slice(0, middle));
  const rightArray = mergeSort(array.slice(middle));

  return mergeArray(leftArray, rightArray);
}

function specificCaseSortingString(string: string): string {
  let lowerCaseString = "";
  let upperCaseString = "";
  const array: number[] = [];

  for (let index = 0; index < string.length; index += 1) {
    if (
      string[index].charCodeAt(0) >= 97 &&
      string[index].charCodeAt(0) <= 122
    ) {
      lowerCaseString += string[index];
      array.push(0);
    }

    if (
      string[index].charCodeAt(0) >= 65 &&
      string[index].charCodeAt(0) <= 90
    ) {
      upperCaseString += string[index];
      array.push(1);
    }
  }

  const sortedLowerCaseString = mergeSort([...lowerCaseString.split("")]);
  const sortedUpperCaseString = mergeSort([...upperCaseString.split("")]);

  const result = array.map((value) =>
    value ? sortedUpperCaseString.shift() : sortedLowerCaseString.shift(),
  );

  return result.join("");
}

export default specificCaseSortingString;
