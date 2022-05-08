export const revealed = (arr, x, y, newNonMinesCount) => {
  if (arr[x][y].opened) {
    // console.log(arr[x][y])
    return;
  }

  // Stack of all the cells which we
  // would like to reveal/flip
  let flipped = [];
  flipped.push(arr[x][y]);
  while (flipped.length !== 0) {
    let single = flipped.pop();

    if (!single.opened) {
      newNonMinesCount--;
      single.opened = true;
    }

    if (single.value !== 0) {
      break;
    }

    //Top - Left
    if (
      single.x > 0 &&
      single.y > 0 &&
      arr[single.x - 1][single.y - 1].value === 0 &&
      !arr[single.x - 1][single.y - 1].opened
    ) {
      flipped.push(arr[single.x - 1][single.y - 1]);
    }

    // Bottom - Right
    if (
      single.x < arr.length - 1 &&
      single.y < arr[0].length - 1 &&
      arr[single.x + 1][single.y + 1].value === 0 &&
      !arr[single.x + 1][single.y + 1].opened
    ) {
      flipped.push(arr[single.x + 1][single.y + 1]);
    }

    // Bottom - Left
    if (
      single.x < arr.length - 1 &&
      single.y > 0 &&
      arr[single.x + 1][single.y - 1].value === 0 &&
      !arr[single.x + 1][single.y - 1].opened
    ) {
      flipped.push(arr[single.x + 1][single.y - 1]);
    }

    // Top - Right
    if (
      single.x > 0 &&
      single.y < arr[0].length - 1 &&
      arr[single.x - 1][single.y + 1].value === 0 &&
      !arr[single.x - 1][single.y + 1].opened
    ) {
      flipped.push(arr[single.x - 1][single.y + 1]);
    }

    // Single ones

    // Top
    if (
      single.x > 0 &&
      arr[single.x - 1][single.y].value === 0 &&
      !arr[single.x - 1][single.y].opened
    ) {
      flipped.push(arr[single.x - 1][single.y]);
    }

    // Bottom
    if (
      single.x < arr.length - 1 &&
      arr[single.x + 1][single.y].value === 0 &&
      !arr[single.x + 1][single.y].opened
    ) {
      flipped.push(arr[single.x + 1][single.y]);
    }

    // Left
    if (
      single.y > 0 &&
      arr[single.x][single.y - 1].value === 0 &&
      !arr[single.x][single.y - 1].opened
    ) {
      flipped.push(arr[single.x][single.y - 1]);
    }

    // Right
    if (
      single.y < arr[0].length - 1 &&
      arr[single.x][single.y + 1].value === 0 &&
      !arr[single.x][single.y + 1].opened
    ) {
      flipped.push(arr[single.x][single.y + 1]);
    }

    // Start Revealing Items
    if (
      single.x > 0 &&
      single.y > 0 &&
      !arr[single.x - 1][single.y - 1].opened
    ) {
      //Top Left Reveal

      arr[single.x - 1][single.y - 1].opened = true;
      newNonMinesCount--;
    }

    if (single.y > 0 && !arr[single.x][single.y - 1].opened) {
      // Left Reveal
      arr[single.x][single.y - 1].opened = true;
      newNonMinesCount--;
    }

    if (
      single.x < arr.length - 1 &&
      single.y > 0 &&
      !arr[single.x + 1][single.y - 1].opened
    ) {
      //Bottom Left Reveal
      arr[single.x + 1][single.y - 1].opened = true;
      newNonMinesCount--;
    }

    if (single.x > 0 && !arr[single.x - 1][single.y].opened) {
      //Top Reveal
      arr[single.x - 1][single.y].opened = true;
      newNonMinesCount--;
    }

    if (single.x < arr.length - 1 && !arr[single.x + 1][single.y].opened) {
      // Bottom Reveal
      arr[single.x + 1][single.y].opened = true;
      newNonMinesCount--;
    }

    if (
      single.x > 0 &&
      single.y < arr[0].length - 1 &&
      !arr[single.x - 1][single.y + 1].opened
    ) {
      // Top Right Reveal
      arr[single.x - 1][single.y + 1].opened = true;
      newNonMinesCount--;
    }

    if (single.y < arr[0].length - 1 && !arr[single.x][single.y + 1].opened) {
      //Right Reveal
      arr[single.x][single.y + 1].opened = true;
      newNonMinesCount--;
    }

    if (
      single.x < arr.length - 1 &&
      single.y < arr[0].length - 1 &&
      !arr[single.x + 1][single.y + 1].opened
    ) {
      // Bottom Right Reveal
      arr[single.x + 1][single.y + 1].opened = true;
      newNonMinesCount--;
    }
  }

  return { arr, newNonMinesCount };
};
