/** @format */
// https://practice.geeksforgeeks.org/problems/sort-string/0/?category[]=Strings&category[]=Strings&page=2&query=category[]Stringspage2category[]Strings#

function mergeArray(leftArr: string[], rightArr: string[]): string[] {
  const arr: string[] = [];
  const array1 = [...leftArr];
  const array2 = [...rightArr];

  while (array1.length > 0 || array2.length > 0) {
    if (array1.length === 0) {
      arr.push(array2.shift() as string);
    } else if (array2.length === 0) {
      arr.push(array1.shift() as string);
    } else if (array1[0].charCodeAt(0) > array2[0].charCodeAt(0)) {
      arr.push(array2.shift() as string);
    } else {
      arr.push(array1.shift() as string);
    }
  }

  return arr;
}

function mergeSort(array: string[]): string[] {
  if (array.length < 2) return array;

  const mid = Math.floor(array.length / 2);

  const leftArr: string[] = mergeSort(array.slice(0, mid));
  const rightArr: string[] = mergeSort(array.slice(mid));

  return mergeArray(leftArr, rightArr);
}

function sort(str: string): string {
  const array: string[] = str.split("");
  const sortedArray = mergeSort(array);

  return sortedArray.join("");
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function sortString(int: number, array: string[]): string[] {
  const results: string[] = [];

  for (let i = 0; i < int; i += 1) {
    results.push(sort(array[i]));
  }

  return results;
}

// NOTE: this is more optimised solution of this kind of problems
function sortString2(n: number, arrayOfString: string[]): string[] {
  const results = [];

  function sorting(str: string): string {
    const array: number[] = [];
    let resultStr = "";

    for (let i = 0; i < str.length; i += 1) {
      const char = str[i];
      const charCode = char.charCodeAt(0) - 97;

      array[charCode] = array[charCode] ? (array[charCode] += 1) : 1;
    }

    for (let i = 0; i < 26; i += 1) {
      if (typeof array[i] !== "undefined") {
        for (let j = 0; j < array[i]; j += 1) {
          resultStr += String.fromCharCode(i + 97);
        }
      }
    }

    return resultStr;
  }

  for (let i = 0; i < arrayOfString.length; i += 1) {
    results.push(sorting(arrayOfString[i]));
  }

  return results;
}

export default sortString2;
