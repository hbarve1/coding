/** @format */

// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

export function bubbleSort(arr: number[]): number[] {
  const array = [...arr];

  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array.length; j += 1) {
      if (array[i] < array[j]) {
        const less = array[j];
        array[j] = array[i];
        array[i] = less;
      }
    }
  }

  return array;
}

export function selectionSort(arr: number[]): number[] {
  const array: number[] = [...arr];

  for (let i = 0; i < array.length; i += 1) {
    let minIndex = i;

    for (let j = i; j < array.length; j += 1) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    if (array[i] > array[minIndex]) {
      const less = array[minIndex];
      array[minIndex] = array[i];
      array[i] = less;
    }
  }

  return array;
}

export function merge(left: number[], right: number[]): number[] {
  const list: number[] = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      list.push(left.shift() as number);
    } else {
      list.push(right.shift() as number);
    }
  }

  if (!left.length) list.push(...right);
  else if (!right.length) list.push(...left);

  return list;
}

export function mergeSort(arr: number[]): number[] {
  if (arr.length < 2) return arr;

  const mid = arr.length / 2;

  const left: number[] = mergeSort(arr.slice(0, mid));
  const right: number[] = mergeSort(arr.slice(mid));

  return merge(left, right);
}
