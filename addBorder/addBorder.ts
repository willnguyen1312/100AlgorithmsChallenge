export function addBorder(picture: string[]): string[] {
  const lengthOfWall = picture[0].length + 2;
  const wall = "*".repeat(lengthOfWall);
  picture.push(wall);
  picture.unshift(wall);

  for (let index = 1; index < picture.length - 1; index++) {
    picture[index] = "*" + picture[index] + "*";
  }

  return picture;
}

// console.log(addBorder(["abc", "ded"]));
