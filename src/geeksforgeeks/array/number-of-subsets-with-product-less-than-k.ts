/** @format */

// https://practice.geeksforgeeks.org/problems/number-of-subsets-with-product-less-than-k/1

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function findAllSubsets(arr: number[]) {
  return arr.reduce(
    (subsets: number[][], value: number) =>
      subsets.concat(subsets.map((set) => [...set, value])),
    [[]],
  );
}

// @TODO: optimisation is pending for this
function findSubset(arr: number[], k: number): number {
  return arr
    .reduce(
      (subsets: number[][], value) => {
        const subset: number[][] = [];

        subsets.forEach((set) => {
          const tempArr: number[] = [...set, value];
          const mul = tempArr.reduce((acc, val) => acc * val, 1);

          if (mul <= k) {
            subset.push(tempArr);
            // subset.push({ set: tempArr, mul });
          }
        });

        return subsets.concat(subset);
      },
      [[]],
    )
    .filter((val) => Boolean(val.length)).length;
}

export default findSubset;
