export function adjacentElementsProduct(inputArray: number[]): number {
  let result = inputArray[0] * inputArray[1];
  for (let index = 1; index < inputArray.length - 1; index++) {
    const product = inputArray[index] * inputArray[index + 1];

    result = result > product ? result : product;
  }

  return result;
}

//console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
