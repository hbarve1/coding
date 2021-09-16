/** @format */

// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

import { LinkedList, Node } from "../linkedlist";

function midpoint(list: LinkedList): Node | null {
  let slowCursor = list.head;
  let fastCursor = list.head;

  while (fastCursor && fastCursor?.next && fastCursor?.next?.next) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    slowCursor = slowCursor!.next;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    fastCursor = fastCursor!.next!.next;
  }

  return slowCursor;
}

export default midpoint;
