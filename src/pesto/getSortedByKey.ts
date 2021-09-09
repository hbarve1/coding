/** @format */

type ArrayInput = {
  [key: string]: string | number;
  name: string;
  age: number;
  city: string;
}[];

function getSortedByKey(
  list: ArrayInput,
  key: string,
): { [key: string]: string[] } {
  const results: { [key: string]: string[] } = {};

  for (let i = 0; i < list.length; i += 1) {
    const object = list[i];
    const { name } = object;

    if (results[object[key]]) {
      results[object[key]].push(name);
    } else {
      results[object[key]] = [name];
    }
  }

  return results;
}

export default getSortedByKey;
