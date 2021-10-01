/** @format */

import buildTree, {
  TreeNode,
} from "./construct-binary-tree-from-inorder-and-postorder-traversal";

describe("buildTree", () => {
  test.only("Test 1", () => {
    const input = [
      [9, 3, 15, 20, 7],
      [9, 15, 7, 20, 3],
    ];

    const tree = new TreeNode(3);
    tree.left = new TreeNode(9);
    tree.right = new TreeNode(20);
    tree.right.left = new TreeNode(15);
    tree.right.right = new TreeNode(7);

    const output = tree;

    const result = buildTree(input[0], input[1]);

    expect(result).toStrictEqual(output);
  });

  test.only("Test 2", () => {
    const input = [[-1], [-1]];

    const tree = new TreeNode(-1);

    const output = tree;

    const result = buildTree(input[0], input[1]);

    expect(result).toStrictEqual(output);
  });

  // test("Test 2", () => {
  //   const input = null;
  //   const output: number[][] = [];

  //   const result = buildTree(input);

  //   expect(result).toStrictEqual(output);
  // });

  // test("Test 3", () => {
  //   const tree = new TreeNode(1);

  //   const input = tree;
  //   const output = [[1]];

  //   const result = buildTree(input);

  //   expect(result).toStrictEqual(output);
  // });

  // test("Test 4", () => {
  //   const tree = new TreeNode(1);
  //   tree.left = new TreeNode(2);

  //   const input = tree;
  //   const output = [[1], [2]];

  //   const result = buildTree(input);

  //   expect(result).toStrictEqual(output);
  // });

  // test("Test 5", () => {
  //   const tree = new TreeNode(1);
  //   tree.right = new TreeNode(2);

  //   const input = tree;
  //   const output = [[1], [2]];

  //   const result = buildTree(input);

  //   expect(result).toStrictEqual(output);
  // });

  // test("Test 6", () => {
  //   const tree = new TreeNode(1);
  //   tree.left = new TreeNode(4);
  //   tree.right = new TreeNode(3);
  //   tree.left.left = new TreeNode(2);

  //   const input = tree;
  //   const output = [[1], [4, 3], [2]];

  //   const result = buildTree(input);

  //   expect(result).toStrictEqual(output);
  // });

  // test("Test 7", () => {
  //   const tree = new TreeNode(2);
  //   tree.left = new TreeNode(1);
  //   tree.right = new TreeNode(3);
  //   tree.left.right = new TreeNode(4);

  //   const input = tree;
  //   const output = [[2], [1, 3], [4]];

  //   const result = buildTree(input);

  //   expect(result).toStrictEqual(output);
  // });
});
