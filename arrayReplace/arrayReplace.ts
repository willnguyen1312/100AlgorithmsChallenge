export function arrayReplace(
  inputArray: number[],
  elemToReplace: number,
  substitutionElem: number
): number[] {
  return inputArray.map((value) => {
    if (value === elemToReplace) {
      return substitutionElem;
    }
    return value;
  });
}

// console.log(arrayReplace([1, 2, 1], 1, 3));
