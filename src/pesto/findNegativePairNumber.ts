/** @format */

// For given array of number, find array of numbers which does not have it's negative pair.

function findNegativePairNumber(array: number[]): number[] {
  const results: number[] = [];

  const obj: { [key: string]: boolean } = array.reduce(
    (object, val) => ({ ...object, [val]: true }),
    {},
  );

  const arr = Object.entries(obj);

  for (let i = 0; i < arr.length; i += 1) {
    const [key] = arr[i];

    if (parseInt(key, 10) > 0 && !obj[String(parseInt(key, 10) * -1)]) {
      results.push(parseInt(key, 10));
    }
  }

  return results;
}

export default findNegativePairNumber;
