export function alphabeticShift(inputString: string): string {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const length = alphabet.length;
  const lookup: Record<number, string> = alphabet
    .split("")
    .reduce((acc, curr, index) => {
      acc[index] = curr;
      acc[curr] = index;
      return acc;
    }, {});

  const strArr = inputString.split("");

  for (let index = 0; index < strArr.length; index++) {
    const element = strArr[index];
    let eleIndex = lookup[element];
    strArr[index] = lookup[(eleIndex + 1) % length];
  }

  return strArr.join("");
}

// console.log(alphabeticShift('crazy'));
