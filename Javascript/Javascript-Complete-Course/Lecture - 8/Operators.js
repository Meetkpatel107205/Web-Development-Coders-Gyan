/*

1. Assignment Operators
2. Compound Assignment Operators
3. Arithmetic Operators
4. Bitwise Operators
5. Logical Operators
6. Conditional (ternary) Operators
7. Comparison Operators
8. String Operators
9. Comma Operators
10. Unary Operators
11. Relational Operators

*/

// ------------------------------------------------
// ---: 1. Assignment Operators :---
// ------------------------------------------------

let val = 10;

let y;

y = val;

console.log(y);

// ------------------------------------------------
// ---: 2. Compound Operators(compound assignment operators) :---
// ------------------------------------------------

let a = 10;
let b = 20;

a += b; // a = a + b
a -= b; // a = a - b
a /= b; // a = a / b
a *= b; // a = a * b

console.log(a);
console.log(b);

// ------------------------------------------------
// ---: 3. Arithmetic Operators :---
// ------------------------------------------------

// +
// -
// *
// /
// **

let c = 10;

console.log(c ** 3);

// ------------------------------------------------
// ---: 4. Bitwise Operators :---
// ------------------------------------------------

// 1. Bitwise AND
console.log(5 & 3);
// 5 → 0101
// 3 → 0011
// AND → 0001 = 1

// 2. Bitwise OR
console.log(5 | 3);
// 0101 OR 0011 → 0111 = 7

// 3. Bitwise XOR (exclusive OR)
console.log(5 ^ 3);
// 0101 XOR 0011 → 0110 = 6

// 4. Bitwise NOT
console.log(~5); 
// ~0101 → 1010 (Two’s complement) → -6

let x = 5;
let result = ~x;

console.log(result); // Output: -6

/* 
---------------------------------------------
---: STEP-BY-STEP EXPLANATION :---
---------------------------------------------

1. Convert the number to a 32-bit binary value

   5 → 00000000000000000000000000000101

2. Apply Bitwise NOT (~), which flips every bit (1 → 0, 0 → 1)

   ~00000000000000000000000000000101
    = 11111111111111111111111111111010

   Note: The first bit is 1 now, which means the value is negative in 
   JavaScript because it uses TWO'S COMPLEMENT for signed integers.

3. Convert this binary back to a signed decimal number:

   Because it's negative, we apply two's complement decoding:

   a) Flip all bits again (one’s complement):
      11111111111111111111111111111010
      → 00000000000000000000000000000101

   b) Add 1:
      00000000000000000000000000000101
    + 1
    -------------------------------------------------
      00000000000000000000000000000110  (which is decimal 6)

4. Apply the negative sign (because original binary had leading 1):

   → -6

--------------------------------------------------------------
=> Shortcut rule (easy memory trick):

   ~x = -(x + 1)

   So:
   ~5 = -(5 + 1) = -6

--------------------------------------------------------------
*/

// Why it feels like Two’s Complement

// Operation done: one’s complement
// Interpretation of the result: two’s complement signed integer

// So:
// 📌 Operation → One’s complement
// 📌 Final numeric result → Two’s complement representation

// Formula: ~x = -(x + 1)

// 5. Left Shift
console.log(5 << 1);
// 0101 << 1 → 1010 = 10

// 6. Right Shift (keeps sign)
console.log(-8 >> 1);
// -8 → 11111000 >> 1 → 11111100 = -4

// 7. Unsigned Right Shift (fills zeros)
console.log(-8 >>> 1);
// Large positive number because sign bit ignored

// ------------------------------------------------
// ---: 5. Logical Operators :---
// ------------------------------------------------

// 1. Logical AND && :-

let happy = true && true;

console.log(happy);

const isLoggedIn = true;
const hasPermission = true;

if (isLoggedIn && hasPermission) {
    // Delete an item
    console.log('Item deleted successfully');
}

console.log('Cat' && 'Dog');
console.log('Cat' && false);

// 2. Logical OR || :-

let happy1 = true || false;
let happy2 = false || true;

console.log(happy1);
console.log(happy2);

const isLoggedIn1 = true;
const hasPermission1 = false;

if (isLoggedIn1 || hasPermission1) {
    // Delete an item
    console.log('Item deleted successfully');
}

// 3. Logical NOT ! :-

const happy3 = true;

console.log(!happy3);

const isLoggedIn2 = false;

if(!isLoggedIn2)
{
    console.log('Redirect to login page');
}

// ------------------------------------------------
// ---: 6. Conditional Operators(Ternary Operator) :---
// ------------------------------------------------

const userRole = 'admin';

// if(userRole === 'admin')
// {
//     console.log('You are an admin');
// }
// else
// {
//     console.log('You are not an admin');
// }

userRole === 'admin' ? console.log('You are an admin') : console.log('You are not an admin');

// ------------------------------------------------
// ---: 7. Comparison Operators :---
// ------------------------------------------------

// 1. Equal (==)
// 2. Not Equal (!=)
// 3. Strict Equal (===)
// 4. Strict Not Equal (!==)

console.log(4 == 4);
console.log(4 != 5);
console.log(4 == '4');
console.log(4 === '4');

console.log([] == 0);      // true
console.log([] == "");     // true
console.log(null == undefined); // true
console.log(null === undefined); // false

// JavaScript is a loosely typed (dynamic) language, so it often tries to convert values to a compatible type when needed.

// Coercion in JavaScript is the automatic or manual conversion of data types (like string → number, boolean → number)
// depending on the operation or comparison.

// ------------------------------------------------
// ---: 8. String Operators :---
// ------------------------------------------------

// + → string concatenation
// += → append string

let firstName = "Meet";
let lastName = "Patel";

let fullName = firstName + " " + lastName;
console.log(fullName);

let str = "Hello";
str += " World"; // append string
console.log(str);

// ------------------------------------------------
// ---: 9. Comma Operator :---
// ------------------------------------------------

// Evaluates multiple expressions and returns last value

let commaExample = (1, 2, 3, 10);
console.log(commaExample); // Output → 10

let i = (a = 5, b = 10, a + b);
console.log(i); // 15

// Used mostly in loops

// Example: Increasing age and decreasing candies

let age, candies;

for (age = 5, candies = 10; age <= 7; age++, candies--) {
  console.log(`Age: ${age}, Candies left: ${candies}`);
}

// Output:
// Age: 5, Candies left: 10
// Age: 6, Candies left: 9
// Age: 7, Candies left: 8

// Comma operator allows multiple variables to update inside a single loop.

// ------------------------------------------------
// ---: 10. Unary Operators :---
// ------------------------------------------------

// Increment ++
// Decrement --
// Unary PLUS (+) → converts to number
// Unary MINUS (-) → negates value

let num = "20";

console.log(+num); // Converts string → number
console.log(-num); // Converts and negates

let counter = 5;
console.log(++counter); // pre-increment
console.log(counter--); // post-decrement

// ------------------------------------------------
// ---: 11. Relational Operators :---
// ------------------------------------------------

// These check relationships between values

console.log(10 > 5);
console.log(10 >= 10);
console.log(5 < 10);
console.log(5 <= 3);

console.log("apple" < "banana"); // compares ASCII values alphabetically