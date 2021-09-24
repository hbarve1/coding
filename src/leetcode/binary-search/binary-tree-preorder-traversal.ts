/** @format */

// https://leetcode.com/explore/learn/card/data-structure-tree/134/traverse-a-tree/928/

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

function preorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];

  const list: number[] = [];

  const arr: TreeNode[] = [root];

  while (arr.length) {
    const node = arr.pop() as TreeNode;

    list.push(node.val);

    if (node?.right) arr.push(node.right as TreeNode);
    if (node?.left) arr.push(node.left as TreeNode);
  }

  return list;
}

export default preorderTraversal;
