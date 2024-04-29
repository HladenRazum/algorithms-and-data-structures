const { describe, test, expect } = require('@jest/globals')
const countUniqueValues = require('./countUniqueValues')

describe('countUniqueValues', () => {
  test('returns the number of unique values in a sorted array', () => {
    expect(countUniqueValues([1, 1, 1, 1, 1, 2])).toEqual(2)
    expect(countUniqueValues([-5, -2, 1, 4, 12, 12, 12, 13])).toEqual(6)
    expect(countUniqueValues([-2, -1, 0, 1, 1, 2])).toEqual(5)
    expect(countUniqueValues([])).toEqual(0)
  })
})
