/** @format */

// https://practice.geeksforgeeks.org/problems/twice-counter4236/1/?category[]=Strings&category[]=Strings&page=2&query=category[]Stringspage2category[]Strings

function twiceCounter(list: string[]): number {
  const obj: { [key: string]: number } = {};

  for (let i = 0; i < list.length; i += 1) {
    const str = list[i];

    if (typeof obj[str] === "undefined") {
      obj[str] = 1;
    } else {
      obj[str] += 1;
    }
  }

  return Object.values(obj).filter((count) => count === 2).length;
}

export default twiceCounter;
