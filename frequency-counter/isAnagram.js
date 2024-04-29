function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false
  }

  if (typeof str1 !== 'string' || typeof str2 !== 'string') {
    return false
  }

  let counter = {}

  for (const letter of str1) {
    counter[letter] = ++counter[letter] || 1
  }

  for (const letter of str2) {
    if (!counter[letter]) {
      return false
    }

    counter[letter]--
  }

  return true
}

module.exports = isAnagram
