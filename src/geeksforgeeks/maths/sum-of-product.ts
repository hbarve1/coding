/** @format */

function sumOfProduct(n: number): number {
  let sum = 0;

  for (let x = 1; x <= n; x += 1) {
    for (let y = 1; y <= n; y += 1) {
      // console.log(x, y, Math.floor(n / x), Math.floor(n / x) === y);
      if (Math.floor(n / x) === y) {
        sum += x * y;
      }
    }
  }

  return sum;
}

export default sumOfProduct;
