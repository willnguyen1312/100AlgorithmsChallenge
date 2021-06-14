export function addTwoDigits(n: number): number {
  const arrNumb = n.toString().toString();

  return arrNumb.split("").reduce((a, b) => +a + +b, 0);
}

// console.log(addTwoDigits(29));
