const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// Test Cases
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), false); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => false
assertEqual(eqArrays(["1", "2"], ["1", "2", "3"]), false); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2"]), true); // => true