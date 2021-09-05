/** @format */
// https://practice.geeksforgeeks.org/problems/the-penalty-shootout3810/1/?category[]=Strings&category[]=Strings&page=1&query=category[]Stringspage1category[]Strings

function thePenaltyShootout(str: string): number {
  let penaltyGoals = 0;

  for (let i = 0; i < str.length; i += 1) {
    if (str.slice(i, i + 2) === "21") {
      penaltyGoals += 1;
      i += 1;
    }
  }

  return penaltyGoals;
}

export default thePenaltyShootout;
