
// ================================================
// ---: Functions :---
// ================================================

function login()
{
    // code
    console.log('Logged in successfully');
}

login();

function login1(username)
{
    // code
    // Logic
    console.log(`${username}, Logged in successfully`);
}

login1('john');
login1('jane');

function login2(username, password)
{
    // code
    // Logic
    console.log(password);
    console.log(`${username}, Logged in successfully`);
}

login2('john', 'secret');

function upperCase(str)
{
    return str.toUpperCase();
}

const result = upperCase('javascript');

console.log(result);

// ------------------------------------------------
// ---: Default Parameters :---
// ------------------------------------------------

function calculateArea(width, height = 1)
{
    // height = height === undefined ? 1 : height;
    const area = width * height;
    return area;
}

const area = calculateArea(30);

console.log(area);

const area1 = calculateArea(30, 40);

console.log(area1);

// ------------------------------------------------
// ---: Variable Scope :---
// ------------------------------------------------

const filename = 'abc.pdf';

function download()
{
    // download logic goes here
    console.log(filename);
    const filename1 = 'xyz.pdf';
}

download()
// console.log(filename1); <--- Error

// ------------------------------------------------
// ---: Function Declaration and Function Expression :---
// ------------------------------------------------

// Declaration
function login3()
{

}

// Expression
const login4 = function ()
{
    console.log('Logged in')
}

login4();

// ------------------------------------------------
// ---: Callback :---
// ------------------------------------------------

function formatText(text, formatCb)
{
    return typeof formatCb === 'function' ? formatCb(text) : text.toUpperCase();
}

// const result1 = formatText('hello', function(text) {
//     return text.charAt(0).toUpperCase() + text.slice(1);
// });

// const result1 = formatText('hello', (text) => {
//     return text.charAt(0).toUpperCase() + text.slice(1);
// });

const result1 = formatText('hello', (text) => text.charAt(0).toUpperCase() + text.slice(1));

console.log(result1);

// ------------------------------------------------
// ---: IIFE (Immediately invoked function expression) :---
// ------------------------------------------------

(function setup()
{
    console.log('Setup done!');
})();

// ------------------------------------------------
// ---: Arrow Function :---
// ------------------------------------------------

const login5 = () => {
    console.log('Logged in');
}

login5();

// const sum = (num1, num2) => {
//     return num1 + num2;
// }

const sum = (num1, num2) => num1 + num2;

const result2 = sum(4, 5);

console.log(result2);

// ------------------------------------------------
// ---: Good Practice :---
// ------------------------------------------------

// 1. Naming :-
// show, get, calc

// 2. One function - one action

// 3. Function name should be descriptive