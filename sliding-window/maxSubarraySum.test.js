const { describe, test, expect } = require('@jest/globals')
const maxSubarraySum = require('./maxSubarraySum')

describe('maxSubarraySum', () => {
  test('Should return the maximum sum of any subarray with the provided length', () => {
    expect(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 1)).toEqual(8)
    expect(maxSubarraySum([1, 2, 5, 1, 5], 2)).toEqual(7)
    expect(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)).toEqual(10)
    expect(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 3)).toEqual(15)
    expect(maxSubarraySum([-12, -2, -3, -1, -14, -2, -1], 3)).toEqual(-6)
    expect(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)).toEqual(17)
    expect(maxSubarraySum([1, 2, 5, 2, 7, 1, 5], 4)).toEqual(16)
    expect(maxSubarraySum([1, 4, 8, 2, 7, 9, 5], 4)).toEqual(26)
    expect(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 5)).toEqual(21)
    expect(
      maxSubarraySum([1, 1, 2, 3, 4, 5, 1, 2, 3, 4, 1, 2, 3, 5, 6], 3)
    ).toEqual(14)
  })

  test('Should return null if n (the length of subarray) is greater than the length of the array', () => {
    expect(maxSubarraySum([1, 2, 3], 10)).toBeNull()
    expect(maxSubarraySum([-2, -3, -12, 5, 1, 2, 3], 8)).toBeNull()
  })
})
