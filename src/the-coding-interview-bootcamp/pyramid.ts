/** @format */

// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n: number): string[] {
  const results: string[] = [];
  const midPoint = Math.floor((2 * n - 1) / 2);

  for (let i = 0; i < n; i += 1) {
    let str = "";

    for (let j = 0; j < 2 * n - 1; j += 1) {
      const min = midPoint - i;
      const max = midPoint + i;

      if (j < min) str += " ";
      else if (j >= min && j <= max) str += "#";
      else str += " ";
    }

    results.push(str);
  }

  return results;
}

export default pyramid;
