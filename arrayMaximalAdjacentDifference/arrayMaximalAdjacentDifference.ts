export function arrayMaximalAdjacentDifference(inputArray: number[]): number {
  let result = Math.abs(inputArray[0] - inputArray[1]);

  for (let index = 1; index < inputArray.length - 1; index++) {
    const element = inputArray[index];
    const nextElement = inputArray[index + 1];
    const currentDiff = Math.abs(element - nextElement);

    result = result > currentDiff ? result : currentDiff;
  }

  return result;
}

// console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
