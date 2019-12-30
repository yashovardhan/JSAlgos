function pyramid(n) {
  for(let i = 0; i < n; i++) {
    let a = "";
    for(let j = 0; j < 2 * n - 1; j++) {
      if ( n - 1 - i <= j && n - 1 + i >= j) {
        a += "#";
      } else {
        a += " ";
      }
    }
    console.log(a)
  }
}

module.exports = pyramid;
