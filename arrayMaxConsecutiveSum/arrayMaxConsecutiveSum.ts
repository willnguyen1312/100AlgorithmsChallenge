export function arrayMaxConsecutiveSum(
  inputArray: number[],
  k: number
): number {
  let sum = 0;
  let max = 0;

  for (let index = 0; index < k; index++) {
    sum += inputArray[index];
  }

  max = sum;

  for (let index = k; index < inputArray.length; index++) {
    sum += inputArray[index];
    sum -= inputArray[index - k];

    if (sum > max) {
      max = sum;
    }
  }

  return max;
}

// console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));
