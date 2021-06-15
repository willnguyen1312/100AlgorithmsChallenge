export function arrayConversion(inputArray: number[]): number {
  let currentArr = inputArray;
  let resultArr = [];
  let isOddIteration = true;

  while (true) {
    for (let index = 0; index < currentArr.length; index += 2) {
      const inItem = isOddIteration
        ? currentArr[index] + currentArr[index + 1]
        : currentArr[index] * currentArr[index + 1];
      resultArr.push(inItem);
    }
    isOddIteration = !isOddIteration;

    if (resultArr.length === 1) {
      return resultArr[0];
    }
    currentArr = resultArr;
    resultArr = [];
  }
}

// console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
