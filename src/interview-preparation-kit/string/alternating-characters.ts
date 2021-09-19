/** @format */

// https://www.hackerrank.com/challenges/alternating-characters/problem

// case 1: if i-1 != i != i+1
function commonChild(s: string): number {
  if (s.length === 0) return 0;

  const array = [s[0]];

  for (let i = 1; i < s.length; i += 1) {
    const arrIndex = array.length - 1;

    if (array[arrIndex] !== s[i] && s[i] !== s[i + 1]) {
      array.push(s[i]);
    }
  }

  return s.length - array.join("").length;
}

export default commonChild;
