const { describe, test, expect } = require('@jest/globals')
const areThereDuplicates = require('./areThereDuplicates')

describe('areThereDuplicates', () => {
  test('Should return true if there is any value that is occuring more than once', () => {
    expect(areThereDuplicates(1, 'a', 'data', 'a', 5, 123)).toBeTruthy()
    expect(areThereDuplicates(1, 'data', 'a', 5, 123, 1)).toBeTruthy()
    expect(areThereDuplicates('#', 'data', 'a', 5, 123, 1, '#')).toBeTruthy()
  })
  test('Should return false if there are not duplicates', () => {
    expect(areThereDuplicates(1, 2, 3, 0, 4, 12, 15)).toBeFalsy()
    expect(
      areThereDuplicates('a', 'A', 'b', 'epsi', 'yupi', {}, 123)
    ).toBeFalsy()
    expect(areThereDuplicates('##', 'data', 'a', 5, 123, 1, '#')).toBeFalsy()
  })
  test('Should return false if no arguments are provided', () => {
    expect(areThereDuplicates()).toBeFalsy()
    expect(areThereDuplicates('')).toBeFalsy()
    expect(areThereDuplicates([])).toBeFalsy()
  })
})
