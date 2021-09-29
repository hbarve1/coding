/** @format */

// https://leetcode.com/explore/learn/card/data-structure-tree/134/traverse-a-tree/930/

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

// function postorderTraversal(root: TreeNode | null): number[] {
//   if (!root) return [];

//   return [
//     ...postorderTraversal(root.right),
//     ...postorderTraversal(root.left),
//     root.val,
//   ];
// }

function postorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];

  const stack: TreeNode[] = [];
  let current: TreeNode | null = root;
  const results: number[] = [];

  while (stack.length > 0 || current) {
    while (current) {
      stack.push(current);
      results.unshift(current.val);

      current = current?.right;
    }

    const node = stack.pop() as TreeNode;
    current = node?.left;
  }

  return results;
}

export default postorderTraversal;
