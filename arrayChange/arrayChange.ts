export function arrayChange(inputArray: number[]): number {
  let result = 0;

  for (let index = 1; index < inputArray.length; index++) {
    const element = inputArray[index];
    const prevElement = inputArray[index - 1];

    if (element <= prevElement) {
      const increment = prevElement - element + 1;
      result = result + increment;
      inputArray[index] = element + increment;
    }
  }

  return result;
}

// console.log(arrayChange([1, 1, 1]));
