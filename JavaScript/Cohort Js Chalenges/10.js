function invertedMountain(n) {
  let di = "";
  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= n - i; j++) {
      di += "*";
    }
    di += "\n";
  }
  return di;
}
let t = invertedMountain(5);
console.log(t);
