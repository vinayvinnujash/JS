//This is my first JavaScript code!
console.log('Hello World!')


let name = 'John';    // You can also use ""
console.log(name);

// let firstName = 'John', lastName; // CamelCase

// Modern best practice is to declare each variable on a single line.

let firstName = 'John';  // String literal
let lastName = 'Doe';
let age = 23; // Number literal
let isApproved = true; // Boolean Litereal
let firstName = undefined;
let selectedColor = null;    // We use null to explicitly clear the value of a variable.

// let interestRate = 0.3;
// interestRate = 1;
// console.log(interestRate);

const interestRate = 0.3;
interestRate = 1; // Throws ERROR   Assignment to constant variable
console.log(interestRate);


typeof firstName;   // Checks the type of a variable


let person = {
    name: 'John',
    age: 23
};


//Dot Notation
person.name = 'Jane'
console.log(person.name);

//Bracket Notation
let selection = 'name';
person[selection] = 'Jane'
person['name'] = 'John';


//Array -- Data structure used to represent a list of items.
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'Green';
console.log(selectedColors[0]);
console.log(selectedColors.length); // Outputs total number of array elements.



//Function

// Performing a task
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName + ' World!');
}  // function declaration doesn't need to end with semicolon.

greet('John', 'Doe');  // Outputs Hello John Doe World!
greet('jane');    // Outputs Hello jane undefined World!


//Calculating a value
function square(number) {
    return number * number;
}

let number = square(2);
console.log(number);
console.log(square(3));

// console.log() is also a function call.