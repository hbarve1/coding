/** @format */

// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str: string): string {
  const charMap = str.split("").reduce(
    (acc: Record<string, number>, val) => ({
      ...acc,
      [val]: acc[val] + 1 || 1,
    }),
    {},
  );

  const max: [string, number] = Object.entries(charMap).reduce(
    (acc, value) => (value[1] > acc[1] ? value : acc),
    ["", 0],
  );

  return max[0];
}

export default maxChar;
