/** @format */

// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

/** Method 1 */
// function anagrams(stringA: string, stringB: string): boolean {
//   const charMapA = stringA
//     .toLowerCase()
//     .split("")
//     .reduce(
//       (charMap: Record<string, number>, char) => ({
//         ...charMap,
//         [char]: charMap[char] ? charMap[char] + 1 : 1,
//       }),
//       {},
//     );

//   const charMapB = stringB
//     .toLowerCase()
//     .split("")
//     .reduce(
//       (charMap: Record<string, number>, char) => ({
//         ...charMap,
//         [char]: charMap[char] ? charMap[char] + 1 : 1,
//       }),
//       {},
//     );

//   const mapA = Object.entries(charMapA)
//     .filter(([char]) => {
//       const charCode = char.charCodeAt(0);
//       return charCode >= 97 && charCode <= 122;
//     })
//     .reduce((arr, [char, count]) => {
//       const charCode = char.charCodeAt(0);

//       return [
//         ...arr.slice(0, charCode - 97),
//         count,
//         ...arr.slice(charCode - 97 + 1),
//       ];
//     }, Array.from({ length: 26 }).fill(0))
//     .join("");

//   const mapB = Object.entries(charMapB)
//     .filter(([char]) => {
//       const charCode = char.charCodeAt(0);
//       return charCode >= 97 && charCode <= 122;
//     })
//     .reduce((arr, [char, count]) => {
//       const charCode = char.charCodeAt(0);

//       return [
//         ...arr.slice(0, charCode - 97),
//         count,
//         ...arr.slice(charCode - 97 + 1),
//       ];
//     }, Array.from({ length: 26 }).fill(0))
//     .join("");

//   return mapA === mapB;
// }

/** Method 2 */
// function cleanString(str: string): string {
//   return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
// }

// function anagrams(stringA: string, stringB: string): boolean {
//   return cleanString(stringA) === cleanString(stringB);
// }

/** Method 3 */
function buildCharMap(string: string) {
  const charMap: { [key: string]: number } = {};

  // eslint-disable-next-line no-restricted-syntax
  for (const char of string.replace(/[^\w]/g, "").toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

function anagrams(stringA: string, stringB: string): boolean {
  const charMapA = buildCharMap(stringA);
  const charMapB = buildCharMap(stringB);

  if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
    return false;
  }

  // eslint-disable-next-line no-restricted-syntax
  for (const char in charMapA) {
    if (charMapA[char] !== charMapB[char]) {
      return false;
    }
  }

  return true;
}

export default anagrams;
