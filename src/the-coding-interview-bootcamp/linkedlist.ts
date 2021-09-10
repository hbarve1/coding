/** @format */

/* eslint-disable max-classes-per-file */

// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

type DataType = number | string;

export class Node {
  data: DataType;

  next: Node | null;

  constructor(data: DataType, next: Node | null = null) {
    this.data = data;
    this.next = next;
  }
}

export class LinkedList {
  head: Node | null;

  constructor() {
    this.head = null;
  }

  insertFirst(data: DataType): void {
    this.head = new Node(data, this.head);
  }

  insertLast(data: DataType): void {
    const last = this.getLast();

    if (last) {
      // There are some existing nodes in our chain
      last.next = new Node(data);
    } else {
      // The chain is empty!
      this.head = new Node(data);
    }
  }

  size(): number {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter += 1;
      node = node.next;
    }

    return counter;
  }

  getFirst(): Node | null {
    return this.head;
  }

  getLast(): Node | null {
    let cursor = this.head;

    while (cursor?.next) {
      cursor = cursor.next;
    }

    return cursor;
  }

  clear(): void {
    this.head = null;
  }

  removeFirst(): void {
    if (!this.head) return;

    this.head = this.head.next;
  }

  removeLast(): void {
    if (!this.head) return;

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let cursor = this.head;

    while (cursor?.next?.next) {
      cursor = cursor.next;
    }

    cursor.next = null;
  }

  getAt(index: number): Node | null {
    let counter = 0;
    let node = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }

      counter += 1;
      node = node.next;
    }

    return null;
  }

  removeAt(index: number): void {
    if (!this.head) return;

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);

    if (!previous || !previous.next) {
      return;
    }

    previous.next = previous.next.next;
  }

  insertAt(data: DataType, index: number): void {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const node = new Node(data, previous!.next);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    previous!.next = node;
  }

  forEach(fn: (node: Node | null, index: number) => unknown): void {
    let cursor = this.head;
    let counter = 0;

    while (cursor) {
      fn(cursor, counter);

      cursor = cursor.next;
      counter += 1;
    }
  }

  // TODO: This is not working with for...of loop,
  // this is a typescript issue.
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  *[Symbol.iterator]() {
    let cursor = this.head;

    while (cursor) {
      yield cursor;

      cursor = cursor.next;
    }
  }
}
