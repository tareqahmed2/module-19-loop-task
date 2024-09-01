// Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
for (let x = 1; x <= 40; x++) {
  if (x % 2 != 0) {
    continue;
  }
  console.log(x);
}
