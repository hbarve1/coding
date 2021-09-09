/** @format */

function checkPalindrom(string: string): boolean {
  let i = 0;
  const str = string.toLowerCase();
  // eslint-disable-next-line prefer-destructuring
  const length = str.length;

  while (length > i) {
    if (str[i] !== str[length - 1 - i]) return false;
    i += 1;
  }

  return true;
}

export default checkPalindrom;
