export function alternatingSums(a: number[]): number[] {
  let team1Sum = 0;
  let team2Sum = 0;

  for (let index = 0; index < a.length; index++) {
    const element = a[index];
    const isTeam1 = index % 2 === 0;
    if (isTeam1) {
      team1Sum += element;
    } else {
      team2Sum += element;
    }
  }

  return [team1Sum, team2Sum];
}

// console.log(alternatingSums([50, 60, 60, 45, 70]));
