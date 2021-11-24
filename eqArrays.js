// Function to check if the actual value matches an expected value
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Function to compare to arrays and return true if identical, otherwise false
const eqArrays = function(list1, list2) {
  // Iterate through each array using the same index and see if they are equal
  for (let i = 0; i < list1.length && i < list2.length; i++) {
    if (list1[i] !== list2[i]) {
      return false;
    }
  }
  return true;
};

// Test Cases
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1])); // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3])); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false
