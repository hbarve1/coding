/** @format */

// https://www.hackerrank.com/challenges/ctci-ice-cream-parlor

// eslint-disable-next-line consistent-return
function whatFlavors(cost: number[], money: number): void | string {
  const map = new Map();

  for (let i = 0; i < cost.length; i += 1) {
    const diff = money - cost[i];

    if (map.has(diff)) {
      // console.log(map.get(diff), i + 1);
      return [map.get(diff), i + 1].join(",");
      // break;
    }

    map.set(cost[i], i + 1);
  }
}

export default whatFlavors;
