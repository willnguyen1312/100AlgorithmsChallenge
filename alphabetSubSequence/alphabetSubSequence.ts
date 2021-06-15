export function alphabetSubsequence(s: string): boolean {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const length = alphabet.length;
  const lookup: Record<number, string> = alphabet
    .split("")
    .reduce((acc, curr, index) => {
      acc[index] = curr;
      acc[curr] = index;
      return acc;
    }, {});

  for (let index = 0; index < s.length - 1; index++) {
    const element = s[index];

    const nextElement = s[index + 1];

    if (lookup[nextElement] <= lookup[element]) return false;
  }

  return true;
}

// console.log(alphabetSubsequence('zab'))
// console.log(alphabetSubsequence('effg'))
// console.log(alphabetSubsequence('cdce'))
// console.log(alphabetSubsequence('ace'))
// console.log(alphabetSubsequence('bxz'))
