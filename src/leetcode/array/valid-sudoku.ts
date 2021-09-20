/** @format */

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/769/

// function isValidSudoku(board: string[][]): boolean {
//   for (let i = 0; i < 9; i += 1) {
//     const row: { [key: string]: boolean } = {};
//     const column: { [key: string]: boolean } = {};

//     for (let j = 0; j < 9; j += 1) {
//       if (row[board[i][j]]) {
//         return false;
//       }
//       if (!row[board[i][j]] && board[i][j] !== ".") {
//         row[board[i][j]] = true;
//       }

//       if (column[board[j][i]]) {
//         return false;
//       }
//       if (!column[board[j][i]] && board[j][i] !== ".") {
//         column[board[j][i]] = true;
//       }
//     }
//   }

//   for (let x = 1; x < 9; x += 3) {
//     for (let y = 1; y < 9; y += 3) {
//       const list = [
//         board[x - 1][y - 1],
//         board[x - 1][y],
//         board[x - 1][y + 1],
//         board[x][y - 1],
//         board[x][y],
//         board[x][y + 1],
//         board[x + 1][y - 1],
//         board[x + 1][y],
//         board[x + 1][y + 1],
//       ];

//       const grid: { [key: string]: boolean } = {};

//       for (let z = 0; z < list.length; z += 1) {
//         if (grid[list[z]]) {
//           return false;
//         }

//         if (!grid[list[z]] && list[z] !== ".") {
//           grid[list[z]] = true;
//         }
//       }
//     }
//   }

//   return true;
// }

function isValidSudoku(board: string[][]): boolean {
  const set = new Set<string>();

  for (let row = 0; row < 9; row += 1) {
    for (let col = 0; col < 9; col += 1) {
      const val = board[row][col];

      if (val !== ".") {
        const r = `${val}-row-${row}`;
        const c = `${val}-col-${col}`;
        const b = `${val}-box-${Math.floor(row / 3)}-${Math.floor(col / 3)}`;

        if (set.has(r) || set.has(c) || set.has(b)) {
          return false;
        }

        set.add(r);
        set.add(c);
        set.add(b);
      }
    }
  }

  return true;
}

export default isValidSudoku;
