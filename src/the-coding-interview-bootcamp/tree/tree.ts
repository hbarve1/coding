/** @format */

// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

/* eslint-disable max-classes-per-file */

export class Node {
  data: string;

  children: Node[];

  constructor(data: string) {
    this.data = data;

    this.children = [];
  }

  add(value: string): void {
    this.children.push(new Node(value));
  }

  remove(value: string): void {
    this.children = this.children.filter((val) => val.data !== value);
  }
}

export class Tree {
  root: Node | null;

  constructor() {
    this.root = null;
  }

  traverseBF(callback: (node: Node) => unknown): void {
    if (!this.root) return;

    const list = [this.root];

    while (list.length) {
      const node = list.shift() as Node;

      list.push(...node.children);
      callback(node);
    }
  }

  traverseDF(callback: (node: Node) => unknown): void {
    if (!this.root) return;

    const list = [this.root];

    while (list.length) {
      const node = list.shift() as Node;

      list.unshift(...node.children);
      callback(node);
    }
  }
}
