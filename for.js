let n = 0;
while (n < 50) {
  n++;

  if (n % 5 !== 0) {
    continue;
  }
  console.log(n);
}
