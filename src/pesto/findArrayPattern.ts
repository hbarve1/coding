/** @format */

type Tuple = [number, number[]];

function findArrayPattern(array: number[]): number[] {
  const obj: { [key: string]: number } = array.reduce(
    (object: Record<string, number>, val) => ({
      ...object,
      [val]: object[val] ? object[val] + 1 : 1,
    }),
    {},
  );

  const obj2: { [key: string]: number[] } = Object.entries(obj).reduce(
    (object: Record<string, number[]>, [key, val]) => ({
      ...object,
      [val]: object[val]
        ? object[val].concat([parseInt(key, 10)])
        : [parseInt(key, 10)],
    }),
    {},
  );

  const array1: Tuple[] = Object.entries(obj2).map(([key, val]) => [
    parseInt(key, 10),
    val,
  ]);
  const sortedArray: Tuple[] = array1.sort(([key1], [key2]) => key2 - key1);

  const arr4: number[][] = sortedArray.map(([, val]) =>
    val.sort((a, b) => b - a),
  );

  const results: number[] = [];
  for (let i = 0; i < arr4.length; i += 1) {
    results.push(...arr4[i]);
  }

  return results;
}

export default findArrayPattern;
