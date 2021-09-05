/** @format */

// https://practice.geeksforgeeks.org/problems/red-or-green5711/1/?category[]=Strings&category[]=Strings&page=1&query=category[]Stringspage1category[]Strings

function redOrGreen(str: string): number {
  let green = 0;
  let red = 0;

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === "G") {
      green += 1;
    } else {
      red += 1;
    }
  }

  return green > red ? red : green;
}

export default redOrGreen;
