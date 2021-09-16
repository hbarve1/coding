/** @format */

class Node {
  data: number;

  children: Node[];

  constructor(data: number) {
    this.data = data;
    this.children = [];
  }

  add(data: number): void {
    this.children.push(new Node(data));
  }
}

export default Node;
