function isAnagram(str1, str2) {
  if (str1.lenght !== str2.length) {
    return false;
  }

  let counter = {};

  for (const letter of str1) {
    counter[letter] = ++counter[letter] || 1;
  }

  for (const letter of str2) {
    if (!counter[letter]) {
      return false;
    }

    counter[str2]--;
  }

  return true;
}

isAnagram("earth", "hearth");
