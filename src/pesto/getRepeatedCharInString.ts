/** @format */

/**

const input =“hellooooloo”;

function getRepeated() {}

const op = getRepeated(input);
console.log(op) // [(2,3), (4,7), (9,10)]

 */

function getRepeatedCharInString(s: string): number[][] {
  let prevIndex = 0;
  let count = 0;
  const results: { [key: string]: number[] } = {};

  for (let i = 1; i < s.length; i += 1) {
    if (s[i] === s[prevIndex]) {
      if (results[count]) {
        results[count][1] = i;
      } else {
        results[count] = [i - 1, i];
      }
    } else {
      prevIndex = i;
      count += 1;
    }
  }

  return Object.values(results);
}

export default getRepeatedCharInString;
