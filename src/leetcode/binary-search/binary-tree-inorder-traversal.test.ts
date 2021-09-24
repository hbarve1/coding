/** @format */

import inorderTraversal, { TreeNode } from "./binary-tree-inorder-traversal";

describe("inorderTraversal", () => {
  test("Test 1", () => {
    const tree = new TreeNode(1);

    tree.right = new TreeNode(2);
    tree.right.left = new TreeNode(3);

    const input = tree;
    const output = [1, 3, 2];

    const result = inorderTraversal(input);

    expect(result).toStrictEqual(output);
  });

  test("Test 2", () => {
    const input = null;
    const output: number[] = [];

    const result = inorderTraversal(input);

    expect(result).toStrictEqual(output);
  });

  test("Test 3", () => {
    const tree = new TreeNode(1);

    const input = tree;
    const output = [1];

    const result = inorderTraversal(input);

    expect(result).toStrictEqual(output);
  });

  test("Test 4", () => {
    const tree = new TreeNode(1);
    tree.left = new TreeNode(2);

    const input = tree;
    const output = [2, 1];

    const result = inorderTraversal(input);

    expect(result).toStrictEqual(output);
  });

  test("Test 5", () => {
    const tree = new TreeNode(1);
    tree.right = new TreeNode(2);

    const input = tree;
    const output = [1, 2];

    const result = inorderTraversal(input);

    expect(result).toStrictEqual(output);
  });

  test("Test 6", () => {
    const tree = new TreeNode(1);
    tree.left = new TreeNode(4);
    tree.right = new TreeNode(3);
    tree.left.left = new TreeNode(2);

    const input = tree;
    const output = [2, 4, 1, 3];

    const result = inorderTraversal(input);

    expect(result).toStrictEqual(output);
  });

  // test("Test 7", () => {
  //   const tree = new TreeNode(2);
  //   tree.left = new TreeNode(1);
  //   tree.right = new TreeNode(3);
  //   tree.left.right = new TreeNode(4);

  //   const input = tree;
  //   const output = [2, 1, 4, 3];

  //   const result = inorderTraversal(input);

  //   expect(result).toStrictEqual(output);
  // });
});
