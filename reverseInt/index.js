function reverseInt(n) {
  return (
    parseInt(
      n
        .toString()
        .split("")
        .reverse()
        .join("")
    ) * Math.sign(n)
  );
}

module.exports = reverseInt;
