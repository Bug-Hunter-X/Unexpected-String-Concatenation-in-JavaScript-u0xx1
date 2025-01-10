function foo(a, b) {
  // Explicit type checking and conversion:
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else {
    return 'Invalid input type'; // Or handle the error appropriately
  }
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(1, '2')); // Output: Invalid input type