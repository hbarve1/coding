/** @format */

// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

import { LinkedList } from "./linkedlist";

function circular(list: LinkedList): boolean {
  let slowPointer = list.head;
  let fastPointer = list.head;

  while (fastPointer?.next && fastPointer.next.next) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    slowPointer = slowPointer!.next;
    fastPointer = fastPointer.next.next;

    if (slowPointer === fastPointer) {
      return true;
    }
  }

  return false;
}

export default circular;
