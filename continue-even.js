// display odd number from 55 to 85 and skip the numbers divisible by 5.f
let x = 55;
while (x <= 85) {
  x++;

  if (x % 2 == 0 || x % 5 == 0) {
    continue;
  }
  console.log(x);
}
