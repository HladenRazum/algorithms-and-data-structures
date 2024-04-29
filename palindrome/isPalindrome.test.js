const { describe, test, expect } = require('@jest/globals')
const isPalindrome = require('./isPalindrome')

describe('isPalindrome', () => {
  test('Should return false if the string is not a palindrome', () => {
    expect(isPalindrome('alba')).toBeFalsy()
    expect(isPalindrome('carrace')).toBeFalsy()
    expect(isPalindrome('radio')).toBeFalsy()
    expect(isPalindrome('mamma')).toBeFalsy()
  })
  test('Should return true if the string is a palindrome', () => {
    expect(isPalindrome('abba')).toBeTruthy()
    expect(isPalindrome('racecar')).toBeTruthy()
    expect(isPalindrome('radar')).toBeTruthy()
    expect(isPalindrome('kayak')).toBeTruthy()
    expect(isPalindrome('madam')).toBeTruthy()
    expect(isPalindrome('nolemon,nomelon')).toBeTruthy()
  })
  test('Should return false if empty string is provided', () => {
    expect(isPalindrome('')).toBeFalsy()
  })
})
