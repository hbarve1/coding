/** @format */

// https://www.hackerrank.com/challenges/special-palindrome-again/problem

export function isSpecial(str: string): boolean {
  if (str.length === 1) return true;

  const isEven = str.length % 2 === 0;

  const mid = Math.floor(str.length / 2);

  const leftString = str.slice(0, mid);
  const rightString = str.slice(isEven ? mid : mid + 1);

  const subStr = str.slice(0, mid);

  const char = str[0];
  for (let i = 1; i < mid; i += 1) {
    if (char !== subStr[i]) return false;
  }

  return leftString === rightString;
}

// function substrCount(str: string): number {
//   const results = [];

//   for (let i = 0; i < str.length; i += 1) {
//     for (let j = i + 1; j <= str.length; j += 1) {
//       const subString = str.slice(i, j);

//       if (isSpecial(subString)) results.push(subString);
//     }
//   }

//   return results.length;
// }

function substrCount(s: string): number {
  // initialize counter to n because each character is a
  // palindromic string
  let counter = s.length;

  // to count consecutive characters that are the same
  let consec = 1;

  // the middle index of a 3-character symmetry,
  // assigned only once detected
  let midIndex = -1;

  // compare with previous character so start with i=1
  for (let i = 1; i < s.length; i += 1) {
    // console.log({ i, counter, consec, midIndex, char: s[i] });

    if (s.charAt(i) === s.charAt(i - 1)) {
      // Condition 1: All of the characters are the same
      // For n consecutive characters that are the same,
      // we have this formula:
      // Number of palindromic strings =
      //     (n-1) + (n-2) + ... + (n-(n-1))
      counter += consec;
      consec += 1;

      // Condition 2: All characters except the middle one
      // are the same
      if (midIndex > 0) {
        // check for symmetry on both sides
        // of the midIndex
        if (
          midIndex - consec > 0 &&
          s.charAt(midIndex - consec) === s.charAt(i)
        ) {
          counter += 1;
        } else {
          // no more possibility of palindromic string
          // with this midIndex
          midIndex = -1;
        }
      }
    } else {
      // reset consecutive chars counter to 1
      consec = 1;

      // check for a 3-character symmetry
      if (i - 2 >= 0 && s.charAt(i - 2) === s.charAt(i)) {
        counter += 1; // 3-char symmetry is detected

        // to check if the next characters are the same
        // and symmetrical along the midIndex
        midIndex = i - 1;
      } else {
        midIndex = -1;
      }
    }
  }

  return counter;
}

export default substrCount;
