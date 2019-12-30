function pyramid(n, i = 0, a = "") {
  if (i === n) {
    return;
  }

  if (a.length === 2 * n - 1) {
    console.log(a);
    return pyramid(n, i + 1);
  }

  if ( n - 1 - i <= a.length && n - 1 + i >= a.length) {
    a += "#";
  } else {
    a += " ";
  }

  return pyramid(n, i, a);
}

module.exports = pyramid;
