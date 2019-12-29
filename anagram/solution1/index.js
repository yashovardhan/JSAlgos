function anagrams (str1, str2) {
  const charMap1 = buildCharMap(str1);
  const charMap2 = buildCharMap(str2);

  if (Object.keys(charMap1).length !== Object.keys(charMap2).length) {
    return false;
  }

  for (let char in charMap1) {
    if (charMap1[char] !== charMap2[char]) {
      return false;
    }
  }

  return true;
}

function buildCharMap(str) {
  const charMap = {};
  str = str.replace(/[^\w]/g, "").toLowerCase();

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

module.exports = anagrams;
