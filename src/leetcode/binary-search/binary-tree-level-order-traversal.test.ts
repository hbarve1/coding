/** @format */

import levelOrder, { TreeNode } from "./binary-tree-level-order-traversal";

describe("levelOrder", () => {
  test("Test 1", () => {
    // [3,9,20,null,null,15,7]
    const tree = new TreeNode(3);
    tree.left = new TreeNode(9);
    tree.right = new TreeNode(20);
    tree.right.left = new TreeNode(15);
    tree.right.right = new TreeNode(7);

    const input = tree;
    const output = [[3], [9, 20], [15, 7]];

    const result = levelOrder(input);

    expect(result).toStrictEqual(output);
  });

  test("Test 2", () => {
    const input = null;
    const output: number[][] = [];

    const result = levelOrder(input);

    expect(result).toStrictEqual(output);
  });

  test("Test 3", () => {
    const tree = new TreeNode(1);

    const input = tree;
    const output = [[1]];

    const result = levelOrder(input);

    expect(result).toStrictEqual(output);
  });

  test("Test 4", () => {
    const tree = new TreeNode(1);
    tree.left = new TreeNode(2);

    const input = tree;
    const output = [[1], [2]];

    const result = levelOrder(input);

    expect(result).toStrictEqual(output);
  });

  test("Test 5", () => {
    const tree = new TreeNode(1);
    tree.right = new TreeNode(2);

    const input = tree;
    const output = [[1], [2]];

    const result = levelOrder(input);

    expect(result).toStrictEqual(output);
  });

  test("Test 6", () => {
    const tree = new TreeNode(1);
    tree.left = new TreeNode(4);
    tree.right = new TreeNode(3);
    tree.left.left = new TreeNode(2);

    const input = tree;
    const output = [[1], [4, 3], [2]];

    const result = levelOrder(input);

    expect(result).toStrictEqual(output);
  });

  test("Test 7", () => {
    const tree = new TreeNode(2);
    tree.left = new TreeNode(1);
    tree.right = new TreeNode(3);
    tree.left.right = new TreeNode(4);

    const input = tree;
    const output = [[2], [1, 3], [4]];

    const result = levelOrder(input);

    expect(result).toStrictEqual(output);
  });
});
