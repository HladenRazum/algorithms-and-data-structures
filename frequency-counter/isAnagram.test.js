const { describe, expect } = require("@jest/globals");
const isAnagram = require("./isAnagram");

describe("isAnagram", () => {
  test("Should return false if the two words are not anagrams", () => {
    expect(isAnagram("beach", "peach")).toBeFalsy();
    expect(isAnagram("splash", "flashy")).toBeFalsy();
    expect(isAnagram("fellow", "felony")).toBeFalsy();
    expect(isAnagram("dead", "deed")).toBeFalsy();
    expect(isAnagram("discover", "recovery")).toBeFalsy();
  });
  test("Should return false if the two words are of different lengths", () => {
    expect(isAnagram("one", "ones")).toBeFalsy();
  });
  test("Should return false if provided arguments are not strings", () => {
    expect(isAnagram({}, {})).toBeFalsy();
    expect(isAnagram([], [])).toBeFalsy();
    expect(isAnagram([1, 2, 3], [1, 2, 3])).toBeFalsy();
    expect(isAnagram({ a: 1 }, { a: 1 })).toBeFalsy();
    expect(isAnagram(123, 123)).toBeFalsy();
  });
  test("Should return true if the two words are anagrams", () => {
    expect(isAnagram("rescue", "secure")).toBeTruthy();
    expect(isAnagram("dog", "god")).toBeTruthy();
    expect(isAnagram("race", "care")).toBeTruthy();
    expect(isAnagram("keen", "knee")).toBeTruthy();
    expect(isAnagram("earth", "heart")).toBeTruthy();
    expect(isAnagram("fried", "fired")).toBeTruthy();
  });
});
