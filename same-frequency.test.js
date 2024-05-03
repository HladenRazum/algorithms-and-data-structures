const { describe, test, expect } = require('@jest/globals')
const sameFrequency = require('./same-frequency')

describe('sameFrequency', () => {
  test('Should return true if the two numbers have the same frequency', () => {
    expect(sameFrequency(212, 122)).toBeTruthy()
    expect(sameFrequency(1452, 2514)).toBeTruthy()
    expect(sameFrequency(0, 0)).toBeTruthy()
    expect(sameFrequency(123, 231)).toBeTruthy()
    expect(sameFrequency(12345, 23451)).toBeTruthy()
  })

  test("Should return false if the two numbers don't have the same frequency", () => {
    expect(sameFrequency(34, 14)).toBeFalsy()
    expect(sameFrequency(3589578, 5889385)).toBeFalsy()
    expect(sameFrequency(22, 222)).toBeFalsy()
    expect(sameFrequency(182, 181)).toBeFalsy()
    expect(sameFrequency(181, 182)).toBeFalsy()
    expect(sameFrequency(2211, 1112)).toBeFalsy()
  })

  test("Should return false if the two numbers converted to strings don't have the same length", () => {
    expect(sameFrequency(1, 11)).toBeFalsy()
    expect(sameFrequency(908123, 90813)).toBeFalsy()
    expect(sameFrequency(22, 222)).toBeFalsy()
    expect(sameFrequency(1213, 231)).toBeFalsy()
  })

  test('Should throw an error when the provided arguments are not numbers', () => {})
})
