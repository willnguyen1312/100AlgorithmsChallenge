export function avoidObstacles(inputArray: number[]): number {
  const sortedArr = inputArray.sort((a, b) => a - b);
  const largest = sortedArr[sortedArr.length - 1];

  for (let num = 1; num <= largest + 1; num++) {
    if (sortedArr.every((value) => value % num !== 0)) {
      return num;
    }
  }
}

// console.log(avoidObstacles([5, 3, 6, 7, 9]));
