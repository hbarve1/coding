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
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    let cursor = this.head;

    while (cursor.next) {
      cursor = cursor.next;
    }

    cursor.next = new Node(data);
  }

  size(): number {
    let size = 0;
    let cursor = this.head;

    if (cursor) {
      size = 1;
    }

    while (cursor?.next) {
      size += 1;
      cursor = cursor.next;
    }

    return size;
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

    const nextHead = this.head.next;

    this.head = nextHead;
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

  getAt(at: number): Node | null {
    if (!this.head) return null;
    if (at === 0) return this.head;

    let count = 0;
    let cursor = this.head;

    while (cursor.next) {
      count += 1;
      cursor = cursor.next;

      if (count === at) return cursor;
    }

    return null;
  }

  removeAt(at: number): void {
    if (!this.head) return;

    if (at === 0) {
      this.head = this.head.next;
      return;
    }

    let count = 0;
    let prevNode = null;
    let cursor = this.head;

    while (cursor.next) {
      count += 1;
      prevNode = cursor;
      cursor = cursor.next;

      if (count === at) {
        prevNode.next = cursor.next;
        return;
      }
    }
  }

  insertAt(data: DataType, at: number): void {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (at === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    let count = 0;
    let prevNode = null;
    let cursor = this.head;

    while (cursor.next) {
      count += 1;
      prevNode = cursor;
      cursor = cursor.next;

      if (count === at) {
        prevNode.next = new Node(data, cursor);
        return;
      }
    }

    cursor.next = new Node(data);
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
