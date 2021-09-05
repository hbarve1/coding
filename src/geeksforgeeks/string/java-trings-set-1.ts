/** @format */

// https://practice.geeksforgeeks.org/problems/java-strings-set-15112/1/?category[]=Strings&category[]=Strings&page=1&query=category[]Stringspage1category[]Strings

function mergeAndReverse(stringA: string, stringB: string): string {
  let newString = "";

  for (let i = stringB.length - 1; i >= 0; i -= 1) {
    newString += stringB[i];
  }

  for (let i = stringA.length - 1; i >= 0; i -= 1) {
    newString += stringA[i];
  }

  return newString;
}

export default mergeAndReverse;
