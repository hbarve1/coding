/** @format */

// https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem

function isValid(string: string): "YES" | "NO" {
  const charMap = string.split("").reduce(
    (map: Record<string, number>, val: string) => ({
      ...map,
      [val]: map[val] ? map[val] + 1 : 1,
    }),
    {},
  );

  const binaryMap = Object.entries(charMap).reduce((map, [char, count]) => {
    if (map[count]) {
      map[count].push(char);
    } else {
      // eslint-disable-next-line no-param-reassign
      map[count] = [char];
    }

    return map;
  }, {} as Record<string, string[]>);

  // console.log(binaryMap);

  const entries = Object.entries(binaryMap);

  // console.log(entries);

  if (entries.length === 1) {
    return "YES";
  }

  if (entries.length === 2) {
    const [first, second] = entries;

    const firstKey = parseInt(first[0], 10);
    const secondKey = parseInt(second[0], 10);

    if (
      (firstKey === 1 && first[1].length === 1) ||
      (secondKey === 1 && second[1].length === 1)
    ) {
      return "YES";
    }

    if (
      Math.abs(firstKey - secondKey) === 1 &&
      (first[1].length === 1 || second[1].length === 1)
    ) {
      return "YES";
    }

    return "NO";
  }

  return "NO";
}

export default isValid;
