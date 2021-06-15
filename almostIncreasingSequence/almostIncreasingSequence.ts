export function almostIncreasingSequence(sequence: number[]): boolean {
  let numberOfRemove = 0;

  for (let index = 0; index < sequence.length - 1; index++) {
    const element = sequence[index];
    const nextElement = sequence[index + 1];

    if (nextElement < element) {
      numberOfRemove += 1;
    }
  }

  return numberOfRemove <= 1;
}

// console.log(almostIncreasingSequence([1, 3, 2, 1]))
// console.log(almostIncreasingSequence([1, 3, 2]))
