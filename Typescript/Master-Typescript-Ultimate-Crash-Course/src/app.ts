
// ====================================================
// ---: Type Introduction Javascript :---
// ====================================================

// let num1 = 1;
// let num1 = '1';

// function calculate(num1, num2)
// {
//     return num1 + num2;
// }

// console.log(calculate(num1, 3));

// For let num = 1 -> Output of calculate : 4 (Normal Arithmetic Addition)
// For let num = '1' -> Output of calculate : 13 (String Concatenation)

// ----------------------------------------------------

// function getTotal(numbers) {
//     return number.reduce((acc, item) => { <--- Typo Mistake Ignore(cannot give warning while writing code) in Javascript 'numbers' and 'number'
//         return acc + item;
//     }, 0);
// }

// console.log(getTotal([3, 2, 1]));

// ====================================================
// ---: Introduction to Typescript :---
// ====================================================

let num3: number = 1;

function calculate(num1: number, num2: number)
{
    return num1 + num2;
}

console.log(calculate(num3, 3));

// ----------------------------------------------------

function getTotal(numbers: number[]): number {
    return numbers.reduce((acc: number, item: number) => {
        return acc + item;
    }, 0);
}

// function getTotal(numbers: Array<number>): number { <--- Using 'Array<number>' Generics.
//     return numbers.reduce((acc: number, item: number) => {
//         return acc + item;
//     }, 0);
// }

console.log(getTotal([3, 2, 1]));

// ----------------------------------------------------

const user = {
    firstName: 'John',
    lastName: 'Doe',
    role: 'professor'
};

console.log(user);

// ----------------------------------------------------
// ---: type alias(custom type) :---
// ----------------------------------------------------

// Shape of Object :-
type User = {
    name: string;
    age: number;
    address?: string;
};

const user1: User = {
    name: 'Meet K',
    age: 20,
    address: 'main street'
};

function login(userData: User): User {
    return userData;
}

console.log(login(user1));

// ----------------------------------------------------
// ---: Interfaces :---
// ----------------------------------------------------

// Naming Convention : For custom type name we use first letter as capital alphabet.
interface Transaction {
    payerAccountNumber : number;
    payeeAccountNumber: number;
};

interface BankAccount {
    accountNumber: number;
    accountHolder: string;
    balance: number;
    isActive: boolean;
    transaction: Transaction[]
};

const transaction1: Transaction = {
    payerAccountNumber: 123,
    payeeAccountNumber: 456
};

const bankAccount: BankAccount = {
    accountNumber: 123,
    accountHolder: 'John Doe',
    balance: 4000,
    isActive: true,
    transaction: [transaction1]
};

// ----------------------------------------------------

// Extend :-

// interface Book {
//     name: string;
//     price: number;
// };

// interface EBook {
//     name: string;
//     price: number;
//     fileSize: number;
//     format: string;
// };

// interface AudioBook {
//     name: string;
//     price: number;
//     fileSize: number;
//     format: string;
//     duration: number;
// };

interface Book {
    name: string;
    price: number;
};

interface EBook extends Book {
    // name: string;
    // price: number;
    fileSize: number;
    format: string;
};

interface AudioBook extends EBook {
    // name: string;
    // price: number;
    // fileSize: number;
    // format: string;
    duration: number;
};

const book: AudioBook = {
    name: 'Atomic habits',
    price: 1200,
    fileSize: 300,
    format: 'pdf',
    duration: 4,
};

// Merge :-

interface Book1 {
    name: string;
    price: number;
};

interface Book1 {
    size: number;
};

const book1: Book1 = {
    name: 'Atomic habits',
    price: 1200,
    size: 45,
};

// ----------------------------------------------------
// ---: type alias Vs. Interfaces :---
// ----------------------------------------------------

// type Book2 {
//     name: string;
//     price: number;
// };

// type Book2 { <--- Duplicate Identifier
//     size: number;
// };

// ----------------------------------------------------

// type SanitizedString = string;
// type EvenNumber = number;

// interface SanitizedString1 extends string {

// }

// ----------------------------------------------------
// ---: Unions :---
// ----------------------------------------------------

type ID = number | string; // <--- number OR(|) string

function printId(id: ID) {

    // Narrowing :-
    if(typeof id === 'string')
    {
        console.log(id.toUpperCase());
    }
    else
    {
        console.log(id);
    }
}

printId(1);
printId('1');
printId('hello');

// ----------------------------------------------------

function getFirstThree(x: string | number[]) {
    return x.slice(0, 3);
}

console.log(getFirstThree('hello'));
console.log(getFirstThree([1, 2, 3, 4, 5]));

// ----------------------------------------------------
// ---: Generics :---
// ----------------------------------------------------

function logString(arg: string) {
    console.log(arg);
    return arg;
}

function logNumber(arg: number) {
    console.log(arg);
    return arg;
}

function logArray(arg: any[]) {
    console.log(arg);
    return arg;
}

function logAnything(arg: any) { // <--- We have to make less use of 'any'
    console.log(arg);
    return arg;
}

logString('logged in');
logNumber(3);
logAnything([4, 3]);

// Generics :-
function logAnything1<T>(arg: T): T {
    console.log(arg);
    return arg;
}

logAnything1('hello');
logAnything1(2);
logAnything1([4, 3]);

interface HasAge {
    age: number;
};

// function getOldest<T extends HasAge>(people: T[]): T {
//     return people.sort((a, b) => b.age - a.age)[0]!;
// }

function getOldest<T extends HasAge>(people: T[]): T | undefined {
    return people.sort((a, b) => b.age - a.age)[0];
}

const people: HasAge[] = [{age: 30}, {age: 40}, {age: 10}];

interface Player {
    name: string;
    age: number;
};

const players: Player[] = [
  { name: "John", age: 30 },
  { name: "Jane", age: 35 },
  { name: "Joe", age: 16 },
];

// console.log(getOldest(people).age);
console.log(getOldest(people)?.age);
// console.log(getOldest(players).name);

// const person: Player = getOldest(players); <--- Error
// const person = getOldest(players) as Player; <--- Works but still Not Good Practice

const person = getOldest(people);
const person1 = getOldest(players);

// ----------------------------------------------------

// Naming Convention : It's a good practice to provide 'I' Before Interface name and 'T' Before type alias name
interface IPost {
    title: string;
    id: number;
    description: string;
};

const fetchPostData = async (path: string): Promise<IPost[]> => {
    const response = await fetch(`https://jsonplaceholder.typicode.com${path}`);
    return response.json();
}

(async () => {
    const posts = await fetchPostData('/posts');
})();

interface IUser {
    id: number;
    name: string
    age: number;
};

const fetchUsersData = async (path: string): Promise<IUser[]> => {
    const response = await fetch(`https://jsonplaceholder.typicode.com${path}`);
    return response.json();
}

(async () => {
    const users = await fetchUsersData('/users');
})();

// Generic Function to Fetch Data :-

const fetchData = async <ResultType>(path: string): Promise<ResultType> => {
    const response = await fetch(`https://jsonplaceholder.typicode.com${path}`);
    return response.json();
}

(async () => {
    const posts = await fetchData<IPost[]>('/posts');
    // posts[0].
})();

(async () => {
    const users = await fetchData<IUser[]>('/users');
    // users[0].
})();

// ----------------------------------------------------
// ---: Structural Typing / Duck Typing :---
// ----------------------------------------------------

interface ICredential {
    username: string;
    password: string;
    isAdmin?: boolean;
};

function login1(credentials: ICredential): boolean {
    console.log(credentials);
    return true;
}

const user2 = { // <--- We don't provided type here still login function accepted it based on shape(structure) of object.
    username: 'codersgyan',
    password: 'secret',
    isAdmin: true,
};

login1(user2);

// 🦆 Duck Typing kya hota hai? (Hinglish Explanation)

// Duck typing ek programming concept hai jisme hum type ko uske naam se nahi, uske behaviour se decide karte hain.

// Yaani:

// Agar koi cheez duck jaisi lagti hai, duck jaisa chalti hai, aur duck jaisa quack karti hai…
// toh hum usse duck hi maan lete hain.

// Programming mein iska matlab:

// Agar object ke paas woh required properties aur methods hain, toh usse woh type mana jaayega
// chahe uska actual class/type kuch bhi ho.

interface IAuth {
    username: string;
    password: string;
    // login(username: string, password: string): void;
    login(username: string, password: string): boolean;
};

const auth: IAuth = {
    username: 'codersgyan',
    password: 'secret',
    // login(username: string, password: string) {
    //     //
    // }
    login(username: string, password: string) {
        return true;
    }
};

// ----------------------------------------------------
// ---: Inference :---
// ----------------------------------------------------

let num = 1;
let str = 'Coders'