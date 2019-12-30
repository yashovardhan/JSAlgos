function steps(n) {
  for (let i = 0; i < n; i++) {
    let a = "";
    for (let z = 0; z < n; z++) {
      if (z <= i) {
        a += "#";
      } else {
        a += " ";
      }
    }
    console.log(a);
  }
}

module.exports = steps;
