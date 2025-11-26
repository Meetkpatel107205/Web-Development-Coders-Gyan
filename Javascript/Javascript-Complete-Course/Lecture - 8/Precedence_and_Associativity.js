/* 

----------------------------------------
Operator Precedence & Associativity
----------------------------------------

Operator precedence decides **which operator executes first**
when multiple operators appear in a single expression.

Associativity decides **which direction (left → right OR right → left)**
an expression is evaluated when operators have the same precedence.
----------------------------------------

*/

// ------------------------------------------------
// ---: 1. Basic Precedence Example :---
// ------------------------------------------------

console.log(10 + 5 * 2);
/* 
  Operator Precedence:
  Multiplication (*) runs before Addition (+)
  
  So: 5 * 2 = 10 → then 10 + 10 = 20
  
  Output → 20
*/

// ------------------------------------------------
// ---: 2. Using Parentheses (Highest Priority) :---
// ------------------------------------------------

console.log((10 + 5) * 2);
/*
  Parentheses run first:
  
  (10 + 5) = 15
  15 * 2 = 30
  
  Output → 30
*/

// ------------------------------------------------
// ---: 3. Exponentiation with Precedence :---
// ------------------------------------------------

console.log(3 + 4 * 2 ** 2);
/*
  Step-by-step:
  
  ** executes first → 2 ** 2 = 4
  then * → 4 * 4 = 16
  then + → 3 + 16 = 19
  
  Output → 19
*/

// ------------------------------------------------
// ---: 4. Associativity (Left-to-Right Example) :---
// ------------------------------------------------

console.log((100 / 10) * 2);
/*
  Both / and * have same precedence.
  Associativity → Left to Right
  
  So:
  100 / 10 = 10
  10 * 2 = 20
  
  Output → 20
*/

// ------------------------------------------------
// ---: 5. Associativity (Right-to-Left Example - Assignment) :---
// ------------------------------------------------

let x, y, z;

x = y = z = 10;
/*
  Assignment (=) has Right-to-Left associativity.
  
  So execution order:
  z = 10
  y = z
  x = y
  
  Everything becomes → 10
*/
console.log(x, y, z); // 10 10 10

// ------------------------------------------------
// ---: 6. Associativity (Exponentiation - Right-to-Left) :---
// ------------------------------------------------

console.log(2 ** (3 ** 2));
/*
  NOT: (2 ** 3) ** 2 = 64 ❌
  Because exponentiation (**) is Right-to-Left
  
  So first: 3 ** 2 = 9
  Then: 2 ** 9 = 512
  
  Output → 512
*/

// ------------------------------------------------
// ---: 7. Combining Precedence + Associativity Example :---
// ------------------------------------------------

console.log(5 + 3 * 2 ** 2 - 8 / 2);
/*
Step-by-step:
1) Exponentiation:
   2 ** 2 = 4

2) Multiplication & Division (same precedence, Left-to-Right):
   3 * 4 = 12
   8 / 2 = 4

Now expression becomes:
   5 + 12 - 4

3) Addition and subtraction (Left-to-Right):
   5 + 12 = 17
   17 - 4 = 13

   Output → 13
*/

// ------------------------------------------------
// ---: 8. Unary Operators Have Higher Precedence :---
// ------------------------------------------------

let num = "20";

console.log(+num * 2);
/*
  Unary + converts string "20" → number 20 (executed first)
  Then multiplication:
  20 * 2 = 40
  
  Output → 40
*/

// ------------------------------------------------
// ---: 9. Logical Operators (Lower precedence example) :---
// ------------------------------------------------

console.log(5 > 2 && 10 > 3);
/*
  > executes first:
  5 > 2 = true
  10 > 3 = true
  
  then && (Logical AND):
  true && true → true

  Output → true
*/

// ------------------------------------------------
// ---: 10. Assignment Always Runs Last :---
// ------------------------------------------------

let result = 5 + 10 * 2;
/*
* executes first → 10 * 2 = 20
Then + → 5 + 20 = 25
Assignment (=) happens last → result = 25
*/

console.log(result); // 25

/* 

----------------------------------------
---: Quick Summary :---
----------------------------------------

📌 Precedence decides WHAT runs first.
📌 Associativity decides WHICH WAY to evaluate (→ direction).

Example decision process:
1) Solve parentheses
2) Solve unary operations
3) Solve exponent
4) Solve *, /, %
5) Solve +, -
6) Solve relational < > <= >=
7) Solve equality == === != !==
8) Solve logical && ||
9) Assignment happens last (=)
----------------------------------------

*/
