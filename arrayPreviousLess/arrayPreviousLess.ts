export function arrayPreviousLess(items: number[]): number[] {
  let smallest = items[0];
  const result: number[] = [];

  for (let index = 0; index < items.length; index++) {
    const element = items[index];
    if (element <= smallest) {
      result.push(-1);
    } else {
      result.push(smallest);
    }

    smallest = element;
  }

  return result;
}

// console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
