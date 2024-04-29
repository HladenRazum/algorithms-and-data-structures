const { describe, test, expect } = require('@jest/globals')
const sumZero = require('./sumZero')

describe('sumZero returns the first pair that sums to 0 in a sorted array', () => {
  test('should return the first pair that sums to 0', () => {
    expect(sumZero([-15, -14, -2, 0, 1, 2, 3, 14, 20, 31])).toEqual([-14, 14])
    expect(sumZero([-123, -4, -2, -1, 0, 1, 2, 3, 4, 12, 15])).toEqual([-4, 4])
    expect(sumZero([-3, -2, -1, 0, 2, 4, 5, 6, 7])).toEqual([-2, 2])
  })

  test('should return undefined if no pais sums to 0', () => {
    expect(sumZero([-12, -5, -1, 2, 4, 7, 10])).toBeUndefined()
    expect(sumZero([1, 2, 3])).toBeUndefined()
    expect(sumZero([-1, 2, 3])).toBeUndefined()
  })

  test('should return undefined if the provided array is empty', () => {
    expect(sumZero([])).toBeFalsy()
  })
})
