// Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console
const assertArraysEqual = function(actualArray, expectedArray) {
  if (eqArrays(actualArray, expectedArray)) {
    console.log(`✅✅✅ Assertion Passed: ${actualArray} === ${expectedArray}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actualArray} !== ${expectedArray}`);
  }
};

// Function to compare to arrays and return true if identical, otherwise false
const eqArrays = function(list1, list2) {
  // First check that arrays have the same number of elements
  if (list1.length === list2.length) {
    // Iterate through each array using the same index and see if they are equal
    for (let i = 0; i < list1.length && i < list2.length; i++) {
      if (list1[i] !== list2[i]) {
        return false;
      }
    }
  } else {
    // Return false if they are not the same length
    return false;
  }
  return true;
};

// Function which will return all the indices (zero-based positions) in the string where each character is found.
const letterPositions = function(sentence) {
  const results = {};  // Empty object to hold the indices for each letter as an array

  // Loop through each character of the sentence
  for (let index = 0; index < sentence.length; index++) {
    const character = sentence[index];

    // Check to see if the current character property exists
    if (results[character]) {
      results[character].push(index); // If so, push() the current index into the array
    } else {
      // If it doesn't exist and is not a space, create a new property array to hold the indices
      if (character !== " ") {
        results[character] = new Array();
        results[character].push(index);
      }
    }
  }
  return results;
};

// Test conditions
assertArraysEqual(letterPositions("Lighthouse Labs").L, [0, 11]);
assertArraysEqual(letterPositions("Lighthouse Labs").h, [3, 5]);
assertArraysEqual(letterPositions("Lighthouse Labs").h, [3]);
assertArraysEqual(letterPositions("Lighthouse Labs").s, [8, 14]);

module.exports = letterPositions;