function anagrams(str1, str2) {
  return sortAndCleanStr(str1) === sortAndCleanStr(str2);
}

function sortAndCleanStr(str) {
  return str
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
}

module.exports = anagrams;
