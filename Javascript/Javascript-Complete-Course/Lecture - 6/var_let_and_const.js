// variables

// var, let and const

// ------------------------------------------------
// ---: var :---
// ------------------------------------------------

// function scope
var language = 'JavaScript';

// ------------------------------------------------
// ---: let :---
// ------------------------------------------------

// block scope

/*

[1.]

{

}

[2.]

if(true) {

}

[3.]

for(let i in items) {

}

[4.]

function functionName() {

}

*/

// let languageName;
// languageName = 'JavaScript';

let languageName = 'JavaScript';

console.log(language);

// ------------------------------------------------
// ---: const :---
// ------------------------------------------------

const secondsInMinute = 60;
// secondsInMinute = 30; <--- Can not reassign value to 'const' variables.

const name = 'Meet';

const user = {
    age: 25
}

const num = 30;

// ------------------------------------------------
// ---: Hoisting :---
// ------------------------------------------------

console.log(greeting); // <--- undefined
var greeting = 'Hello';

console.log(greeting1); // <--- ReferenceError: Cannot access 'greeting1' before initialization
let greeting1 = 'Hello1';

console.log(greeting2); // <--- ReferenceError: Cannot access 'greeting2' before initialization
const greeting2 = 'Hello2';

// ------------------------------------------------
// ---: var, let, const ??? :---
// ------------------------------------------------

// First start using 'const' then in future if need of value change then switch to 'let'.
// Don't use 'var' because it is old method and not appropriate way.