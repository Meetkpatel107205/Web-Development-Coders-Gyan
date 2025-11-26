
// ================================================
// ---: Arrays and Loops :---
// ================================================

const languages = ['javascript', 'python', 'c'];

// ------------------------------------------------
// ---: Array Length :---
// ------------------------------------------------

console.log("\nLength of Array - languages :", languages.length);

// ------------------------------------------------
// ---: Accessing Element's of Array (Arrays Indexing) :---
// ------------------------------------------------

console.log("\nFirst Element of languages Array :", languages[0]);
console.log("Second Element of languages Array :", languages[1]);
console.log("third Element of languages Array :", languages[2]);

// ------------------------------------------------
// ---: Adding new Element's in Array :---
// ------------------------------------------------

console.log("\n---: Printing Array - language Before Adding New Element's :---\n");

console.log("language Array :", languages);

languages.push('dart');
languages.unshift('java');

console.log("\n---: Printing Array - language After Adding New Element - \'dart\' at last of Array and \'java\' at front of Array :---\n");

console.log("language Array :", languages);

// ------------------------------------------------
// ---: Removing Element's From Array :---
// ------------------------------------------------

console.log("\n---: Printing Array - language Before Removing Any Element from Array :---\n");

console.log("language Array :", languages);

console.log("\nPopping Last Element of Array :", languages.pop());
console.log("\nRemoving First Element of Array :", languages.shift());

console.log("\n---: Printing Array - language After Removing Last Element from Array :---\n");

console.log("language Array :", languages);

console.log(" ");

for(let i = 0; i < 4; i++)
{
    console.log('*');
}

console.log(" ");

const actors = [
    {
        name: 'Actor 1',
        payment: 100
    },
    {
        name: 'Actor 2',
        payment: 200
    },
    {
        name: 'Actor 3',
        payment: 150
    }
];

for(let i = 0; i < actors.length; i++)
{
    console.log(actors[i]);
}

// for(let i = 0; i < actors.length; i++)
// {
//     actors[i].payment = actors[i].payment - 10;
// }

// for(let actor of actors)
// {
//     actor.payment = actor.payment - 10;
// }

// for(let actor in actors)
// {
//     actors[actor].payment = actors[actor].payment - 10;
// }

// ------------------------------------------------
// ---: forEach :---
// ------------------------------------------------

// actors.forEach((actor) => {
//     actor.payment = actor.payment - 10;
// });

console.log(" ");

console.log(actors);

console.log(" ");

let actors1 = [
  { name: "Tom", payment: 100 },
  { name: "Chris", payment: 120 },
  { name: "Robert", payment: 150 }
];

console.log("🔹 Using for...in");

// ------------------------------------------------
// ---: for...in Loop :---
// ------------------------------------------------
// ➤ Iterates over the KEYS (indexes) of the array.
// ➤ Best suited for objects, but works with arrays too.
// ➤ Here, 'index' will be: 0, 1, 2
// ------------------------------------------------

for (let index in actors1) {
  console.log(`Index: ${index} → Actor Name: ${actors1[index].name}`);
  actors1[index].payment -= 10; // updating payment using index
}


console.log("\n🔹 Using for...of");

// ------------------------------------------------
// ---: for...of Loop :---
// ------------------------------------------------
// ➤ Iterates over the VALUES (actual elements).
// ➤ Best suited for arrays, strings, maps, sets.
// ➤ Here, 'actor' itself is the object from the array.
// ------------------------------------------------

for (let actor of actors1) {
  console.log(`Actor Name: ${actor.name} → Updated Payment: ${actor.payment}`);
}

console.log("\nFinal actors1 array:", actors1);

// ------------------------------------------------
// ---: filter :---
// ------------------------------------------------

const students = [
    {
        name: "Student 1",
        marks: 45
    },
    {
        name: "Student 2",
        marks: 60
    },
    {
        name: "Student 3",
        marks: 35
    }
];

const failed = students.filter((student) => {

    return student.marks < 45;

    // if(student.marks < 45)
    // {
    //     return true;
    // }
    // else
    // {
    //     return false;
    // }
});

console.log("\nFailed Students :", failed);

// ------------------------------------------------
// ---: map :---
// ------------------------------------------------

const users = [
    {
        fname: 'John',
        lname: 'Doe'
    },
    {
        fname: 'John',
        lname: 'Doe'
    }
];

const finalUsers = users.map((user) => {
    return {
        fullName: `${user.fname} ${user.lname}`
    };
});

console.log(" ");

console.log(finalUsers);

// ------------------------------------------------
// ---: reduce :---
// ------------------------------------------------

const movies = [
    {
        name: "Interstellar",
        budget: 100
    },
    {
        name: "Social",
        budget: 150
    },
    {
        name: "Matrix",
        budget: 300
    }
];

// let total = 0;
// movies.forEach((movie) => {
//     total += movie.budget;
// });

const total = movies.reduce((acc, movie) => {
    acc = acc + movie.budget;
    return acc;
}, 0);

console.log(" ");

console.log(total);

// ------------------------------------------------
// ---: indexOf :---
// ------------------------------------------------

const admins = [2, 1, 5];

const user = {
    name: 'XYZ',
    id: 5
}

console.log(" ");

const isAdmin = admins.indexOf(user.id) > -1;

console.log(isAdmin);

console.log(admins.indexOf(user.id));

// ------------------------------------------------
// ---: includes :---
// ------------------------------------------------

console.log(admins.includes(user.id));

// ------------------------------------------------
// ---: includes And indexOf :---
// ------------------------------------------------

// 1. includes()

// ✔ Checks whether a value exists
// ✔ Returns a boolean (true/false)
// ✔ Easy to read

let fruits = ["apple", "banana", "mango"];

console.log(fruits.includes("banana")); // true
console.log(fruits.includes("orange")); // false

// 2. indexOf()

// ✔ Returns the index/position of the value
// ✔ If not found → returns -1
// ✔ Useful when you need position

let fruits1 = ["apple", "banana", "mango"];

console.log(fruits1.indexOf("banana")); // 1
console.log(fruits1.indexOf("orange")); // -1

// ------------------------------------------------
// ---: find :---
// ------------------------------------------------

const users1 = [
    {
        name: 'xyz',
        id: 1
    },
    {
        name: 'abc',
        id: 2
    },
    {
        name: 'pqr',
        id: 3
    }
];

const myUser = users1.find((user) => {
    return user.id === 3
    // if(user.id === 2)
    // {
    //     return true;
    // }

    // return false;
});

console.log(" ");

console.log(myUser);

// ------------------------------------------------
// ---: Sort :---
// ------------------------------------------------

const names = ['John', 'Jane', 'Shyam', 'Ram', 'Sameer', 'Mansi'];

names.sort();

console.log(" ");

console.log(names);

// ------------------------------------------------
// ---: Splice :---
// ------------------------------------------------

const names1 = ['John', 'Jane', 'Shyam', 'Ram', 'Sameer', 'Mansi'];

names1.splice(2, 2);

console.log(" ");

console.log(names1);