/** @format */

// https://leetcode.com/explore/learn/card/data-structure-tree/134/traverse-a-tree/931/

/* eslint-disable no-param-reassign */

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

function buildTree(
  inorder: number[],
  postorder: number[],
  root: TreeNode | null = null,
): TreeNode | null {
  if (inorder.length < 1 || postorder.length < 1) return root;

  const head = postorder.pop() as number;

  root = new TreeNode(head);

  const index = inorder.findIndex((val) => val === head);

  if (index >= 0) {
    const leftTreeInorder = inorder.slice(0, index);
    const rightTreeInorder = inorder.slice(index + 1);

    // console.log(leftTreeInorder, rightTreeInorder);

    const leftTreePostOrder = postorder.slice(0, leftTreeInorder.length);
    const rightTreePostOrder = postorder.slice(leftTreeInorder.length);

    // console.log(leftTreePostOrder, rightTreePostOrder);

    root.left = buildTree(leftTreeInorder, leftTreePostOrder);
    root.right = buildTree(rightTreeInorder, rightTreePostOrder);
  }

  return root;
}

export default buildTree;
