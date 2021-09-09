/** @format */

// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array: number[], size: number): number[][] {
  let count = 0;
  const results: number[][] = [];

  while (count < array.length) {
    results.push(array.slice(count, count + size));
    count += size;
  }

  return results;
}

// function chunk(array: number[], size: number): number[][] {
//   const results: number[][] = [];

//   for (let i = 0; i < array.length; i += 1) {
//     // eslint-disable-next-line prefer-destructuring
//     const length = results.length;
//     const val = array[i];

//     if (i === 0) {
//       results[0] = [val];
//     } else {
//       const lastElement = results[length - 1];

//       if (typeof lastElement === "undefined") {
//         results[length - 1] = [val];
//       } else if (typeof lastElement !== "undefined") {
//         if (lastElement.length < size) {
//           results[length - 1].push(val);
//         } else {
//           results[length] = [val];
//         }
//       }
//     }
//   }

//   return results;
// }

// function chunk(array: number[], size: number): number[][] {
//   return array.reduce((acc: number[][], val) => {
//     const len = acc.length;

//     if (len === 0) {
//       acc[0] = [val];
//     } else {
//       const lastElement = acc[len - 1];

//       if (typeof lastElement === "undefined") {
//         acc[len - 1] = [val];
//       } else if (typeof lastElement !== "undefined") {
//         if (lastElement.length < size) {
//           acc[len - 1].push(val);
//         } else {
//           acc[len] = [val];
//         }
//       }
//     }

//     return acc;
//   }, []);
// }

export default chunk;
