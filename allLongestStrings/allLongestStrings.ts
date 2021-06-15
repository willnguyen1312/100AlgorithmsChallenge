export function allLongestStrings(inputArray: string[]): string[] {
  const lengthLookup: Record<number, string[]> = {};

  let maxLength = inputArray[0].length;
  lengthLookup[maxLength] = [inputArray[0]];

  for (let index = 1; index < inputArray.length; index++) {
    const element = inputArray[index];
    const length = element.length;

    maxLength = maxLength > length ? maxLength : length;
    if (lengthLookup[length]) {
      lengthLookup[length].push(element);
    } else {
      lengthLookup[length] = [element];
    }
  }

  return lengthLookup[maxLength];
}

// console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
