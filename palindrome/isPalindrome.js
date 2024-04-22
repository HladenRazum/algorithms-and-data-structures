function isPalindrome(str) {
  if (str.length === 0) {
    return false;
  }

  const middle = Math.ceil(str.length);

  for (let i = 0; i < middle; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

module.exports = isPalindrome;
