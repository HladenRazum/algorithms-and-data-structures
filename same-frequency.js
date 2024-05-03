function sameFrequency(num1, num2) {
  const numOneStr = num1.toString()
  const numTwoStr = num2.toString()

  if (numOneStr.length !== numTwoStr.length) {
    return false
  }

  const obj = {}

  for (const letter of numOneStr) {
    obj[letter] = ++obj[letter] || 1
  }

  for (const letter of numTwoStr) {
    if (obj[letter] == undefined || obj[letter] < 1) {
      return false
    }

    obj[letter]--
  }

  return true
}

module.exports = sameFrequency
