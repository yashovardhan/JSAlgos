function reverse(str) {
  let rev = '';

  for (let char of str) {
    rev = char + rev;
  }

  return rev;
}

module.exports = reverse;
