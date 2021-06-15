function isArraysEqual(arr1: number[], arr2: number[]): boolean {
  return arr1.every((value, index) => arr2[index] === value);
}

export function areSimilar(a: number[], b: number[]): boolean {
  const diff1: number[] = [];
  const diff2: number[] = [];

  for (let index = 0; index < a.length; index++) {
    const element1 = a[index];
    const element2 = b[index];

    if (element1 !== element2) {
      diff1.push(element1);
      diff2.push(element2);
    }
  }

  if (isArraysEqual(diff1, diff2) || isArraysEqual(diff1, diff2.reverse())) {
    return true;
  }

  return false;
}

// console.log(areSimilar([1, 2, 3], [1, 2, 3]));
// console.log(areSimilar([1, 2, 3], [2, 1, 3]));
// console.log(areSimilar([1, 2, 2], [2, 1, 1]));
