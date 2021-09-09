/** @format */

// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str: string): number {
  const list: { [key: string]: boolean } = {
    a: true,
    A: true,
    e: true,
    E: true,
    i: true,
    I: true,
    o: true,
    O: true,
    u: true,
    U: true,
  };

  return str.split("").filter((char) => list[char]).length;
}

// function vowels(str: string): number {
//   let count = 0;
//   const list: { [key: string]: boolean } = {
//     a: true,
//     e: true,
//     i: true,
//     o: true,
//     u: true,
//   };

//   str
//     .toLowerCase()
//     .split("")
//     .forEach((char) => {
//       if (list[char]) count += 1;
//     });

//   return count;
// }

export default vowels;
