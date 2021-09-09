/** @format */

type Tuple = [number, number];

function findMinMax(list: number[]): Tuple {
  let min = +Infinity;
  let max = -Infinity;

  for (let i = 0; i < list.length; i += 1) {
    if (list[i] < min) min = list[i];
    if (list[i] > max) max = list[i];
  }

  return [min, max];
}

export default findMinMax;
