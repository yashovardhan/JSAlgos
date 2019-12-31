function vowels(str) {
  let n = 0, checker = "aeiou";
  for (let a of str.toLowerCase()) {
    if (checker.includes(a)) {
      n++;
    }
  }

  return n;
}

module.exports = vowels;
