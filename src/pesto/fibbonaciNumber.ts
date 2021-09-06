/** @format */

export function fibbonaciNumber(n: number): number {
  if (n < 2) return n;

  return fibbonaciNumber(n - 1) + fibbonaciNumber(n - 2);
}

function memoFibbNumber(): (n: number) => number {
  const list: number[] = [1, 1];

  return function fibbNumber(n: number): number {
    if (n < 1) throw new Error("Invalid Input");

    if (typeof list[n - 1] !== "undefined") return list[n - 1];

    list[n - 1] = fibbNumber(n - 1) + fibbNumber(n - 2);

    return list[n - 1];
  };
}

export const fibbonaciNumber2 = memoFibbNumber();

export default fibbonaciNumber2;
