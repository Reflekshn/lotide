const assertEqual = require('../assertEqual');
const tail = require('../tail.js');

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
const words2 = ["Yo Yo"];
const words3 = [];
console.log(tail(words)); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

console.log(tail(words2)); // array with one element returns an empty array for it's tail
console.log(tail(words3)); // empty array returns an empty array for its tail