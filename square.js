// Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)

for (let x = 0; x <= 100; x++) {
  if (Number.isInteger(Math.sqrt(x))) {
    continue;
  }
  console.log(x);
}
