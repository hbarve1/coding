/** @format */

function isArmstrongNumber(num: number): boolean {
  return (
    num ===
    String(num)
      .split("")
      .reduce((sum, val) => sum + Number(val) ** 3, 0)
  );
}

export default isArmstrongNumber;
