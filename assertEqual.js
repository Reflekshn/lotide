// Assert function that takes in two values to compare and console.log's an appropriate message to the console
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(54, 'touch');
assertEqual(34, 39);
assertEqual('Jeremy', 'Jeremy');