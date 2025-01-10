# Unexpected String Concatenation in JavaScript
This example demonstrates a common JavaScript pitfall: the implicit type coercion that can lead to unexpected string concatenation instead of the intended numerical addition.  The function `foo` attempts to add two numbers, but due to the loose typing in JavaScript, when it receives a number and a string, it performs string concatenation rather than numerical addition.

## How to Reproduce
1. Clone this repository.
2. Open `bug.js`.
3. Run the code using Node.js (or any JavaScript runtime): `node bug.js`
4. Observe the unexpected output: '12'

## Solution
The `bugSolution.js` demonstrates how to explicitly type check or convert inputs to ensure correct numerical addition.