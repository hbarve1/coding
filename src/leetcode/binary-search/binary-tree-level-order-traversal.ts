/** @format */

// https://leetcode.com/explore/learn/card/data-structure-tree/134/traverse-a-tree/931/

export class TreeNode {
  val: number;

  left: TreeNode | null;

  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];

  const list: number[][] = [];

  const arr: (TreeNode | "S")[] = [root, "S"];
  let level = 0;

  while (arr.length > 1) {
    const node = arr.shift() as TreeNode | "S";

    if (node === "S") {
      level += 1;
      arr.push("S");
    }

    if (node !== "S") {
      if (list[level]) {
        list[level].push(node.val);
      } else {
        list[level] = [node.val];
      }

      if (node?.left) arr.push(node.left as TreeNode);
      if (node?.right) arr.push(node.right as TreeNode);
    }
  }

  return list;
}

export default levelOrder;
