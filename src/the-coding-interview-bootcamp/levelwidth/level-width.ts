/** @format */

// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

import Node from "./node";

function levelWidth(root: Node): number[] {
  const list: number[] = [];
  const array: (Node | "S")[] = [root, "S"];
  let count = 0;

  while (array.length > 0) {
    const node = array.shift() as Node | "S";

    if (node === "S" && array.length === 0) {
      list.push(count);
      break;
    } else if (node === "S" && array.length >= 0) {
      array.push("S");
      list.push(count);
      count = 0;
    } else if (node !== "S") {
      array.push(...node.children);
      count += 1;
    }
  }

  return list;
}

export default levelWidth;
