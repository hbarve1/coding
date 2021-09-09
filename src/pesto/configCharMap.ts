/** @format */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */

// function configCharMap(
//   obj: Record<string, string[]>,
// ): Record<string, string[]> {
//   const map: { [key: string]: string[] } = {};
//   for (const key in obj) {
//     const list = obj[key];
//     // console.log(key, list);
//     for (let i = 0; i < list.length; i += 1) {
//       const item = list[i].toLowerCase();
//       if (map[item]) {
//         map[item].push(key);
//       } else {
//         map[item] = [key];
//       }
//     }
//   }

//   return map;
// }

function configCharMap(
  obj: Record<string, string[]>,
): Record<string, string[]> {
  const array: [string, string[]][] = Object.entries(obj);
  const arrayOfCharMap: Record<string, string[]>[] = [];

  for (let i = 0; i < array.length; i += 1) {
    const [key, values] = array[i];

    arrayOfCharMap.push(
      values.reduce(
        (acc: Record<string, string[]>, val) => ({
          ...acc,
          [val.toLowerCase()]: [key],
        }),
        {},
      ),
    );
  }

  return arrayOfCharMap.reduce((acc: Record<string, string[]>, val) => {
    for (const char in val) {
      if (acc[char]) {
        acc[char].push(...val[char]);
      } else {
        acc[char] = [...val[char]];
      }
    }
    return acc;
  }, {});
}

export default configCharMap;
