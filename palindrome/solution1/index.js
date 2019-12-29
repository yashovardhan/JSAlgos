function palindrome(str) {
  rev = str
    .split("")
    .reverse()
    .join("");

  return rev === str;
}

module.exports = palindrome;
