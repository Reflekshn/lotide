// Our own version of the Array.prototype.map() function
const map = function(array, callback) {
  const results = [];
  
  for (const item of array) {
    results.push(callback(item));
  }
  return results;
};

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

// Test Conditions
// Map the first letter of each word to a new array
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't']);

// Map each number multipled by 2 to a new array
const numbers = [2, 4, 6, 8, 10];
const results2 = map(numbers, n => n * 2);
assertArraysEqual(results2, [4, 8, 12, 16, 20]);

// Map the length of each word to a new array
const words2 = ["dictionary", "vehicle", "sky", "clouds", "brainwashed", "propaganda"];
const results3 = map(words2, w => w.length);
assertArraysEqual(results3, [10, 7, 3, 6, 11, 10]);