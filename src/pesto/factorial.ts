/** @format */

export function factorial(n: number): number {
  let num = 1;
  for (let i = 1; i <= n; i += 1) {
    num *= i;
  }
  return num;
}

export const memoFactorial = (() => {
  const list = [1];

  return (n: number): number => {
    if (n < 1) throw new Error("Invalid input");

    if (n < 2) return list[n - 1];

    if (list[n - 1]) return list[n - 1];

    for (let i = list.length; i < n; i += 1) {
      list[i] = list[i - 1] * (i + 1);
    }

    // console.log(list);

    return list[n - 1];
  };
})();
