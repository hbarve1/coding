/** @format */

import findMinMax from "./findMinMax";

export function findMissingNumbers(array: number[]): number[] {
  const [min, max] = findMinMax(array);

  const map: { [key: string]: boolean } = array.reduce(
    (acc, val) => ({ ...acc, [val]: true }),
    {},
  );

  const results = [];

  for (let i = min; i <= max; i += 1) {
    if (!map[i]) results.push(i);
  }

  return results;
}

export function findMissingNumbersWithMinMax(
  array: number[],
  min: number,
  max: number,
): number[] {
  const map: { [key: string]: boolean } = array.reduce(
    (acc, val) => ({ ...acc, [val]: true }),
    {},
  );

  const results = [];

  for (let i = min; i <= max; i += 1) {
    if (!map[i]) results.push(i);
  }

  return results;
}
