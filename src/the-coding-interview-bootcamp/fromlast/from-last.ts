/** @format */

// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

import { LinkedList, Node } from "../linkedlist";

function fromLast(list: LinkedList, n: number): Node | null {
  let resultNode = list.head;
  let cursorNode = list.head;

  let i = 0;

  while (i < n && cursorNode?.next) {
    cursorNode = cursorNode?.next;
    i += 1;
  }

  while (cursorNode?.next) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    cursorNode = cursorNode!.next;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    resultNode = resultNode!.next;
  }

  return resultNode;
}

export default fromLast;
