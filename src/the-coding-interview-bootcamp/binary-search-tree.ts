/** @format */

// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  data: number;

  left: Node | null;

  right: Node | null;

  constructor(data: number, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  insert(data: number): void {
    const newNode = new Node(data);

    if (this.data <= data) {
      if (!this.right) this.right = newNode;
      else this.right.insert(data);
    } else if (this.data > data) {
      if (!this.left) this.left = newNode;
      else this.left.insert(data);
    }
  }

  contains(data: number): Node | null {
    if (this.data === data) return this;

    if (this.left && this.data > data) return this.left?.contains(data);

    if (this.right && this.data < data) return this.right?.contains(data);

    return null;
  }
}

export default Node;
