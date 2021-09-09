/** @format */

// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n: number): (number | string)[] {
  const results: (number | string)[] = [];

  for (let i = 1; i <= n; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
      results.push("fizzbuzz");
    } else if (i % 3 === 0) {
      results.push("fizz");
    } else if (i % 5 === 0) {
      results.push("buzz");
    } else {
      results.push(i);
    }
  }

  return results;
}

export default fizzBuzz;
