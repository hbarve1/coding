/** @format */

// https://www.hackerrank.com/challenges/ctci-making-anagrams/problem

function charStringMap(string: string): number[] {
  const charMapA = string.split("").reduce(
    (charMap: Record<string, number>, val: string) => ({
      ...charMap,
      [val]: charMap[val] ? charMap[val] + 1 : 1,
    }),
    {},
  );

  const binaryMapA = Object.entries(charMapA).reduce(
    (array: number[], [char, count]) => {
      // eslint-disable-next-line no-param-reassign
      array[char.charCodeAt(0) - 97] = count;

      return array;
    },
    Array.from({ length: 26 }).fill(0) as number[],
  );

  return binaryMapA;
}

function makingAnagrams(stringA: string, stringB: string): number {
  const results = Array.from({ length: 26 }).fill(0) as number[];

  const binaryMapA: number[] = charStringMap(stringA);
  const binaryMapB: number[] = charStringMap(stringB);

  for (let i = 0; i < 26; i += 1) {
    results[i] = Math.abs(binaryMapA[i] - binaryMapB[i]);
  }

  return results.reduce((sum, val) => sum + val, 0);
}

export default makingAnagrams;
