/** @format */

// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  data: number[] = [];

  constructor() {
    this.data = [];
  }

  add(record: number): void {
    this.data.unshift(record);
  }

  remove(): number | undefined {
    return this.data.pop();
  }
}

export default Queue;
