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


// Arithmetic Operators

let x = 10;
let y = 2;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

console.log(++x)   // Pre Increment
console.log(x++)   // Post Increment
console.log(--x)   // Pre Decrement
console.log(x--)   // Post Decrement


// Assignment Operator

let x = 10;
x = x + 5;
x += 5;

// Comparision Operators

//Strict Equality Operator(Type + Valuee)
console.log(1 === 1)    // True
console.log('1' === 1)  // False

//Lose Equality
console.log(1 == 1)    // True
console.log('1' == 1)  // True    ---- Right side value is implicitly converted to match the left side operator
console.log(true == 1)



// Ternary Operator

// Say I want to implement, If a customer has more than 100 points,
// they are a 'gold' customer, otherwise,
// they are a 'silver' customer.

let points = 110;
let type = points > 100 ? 'gold' : 'silver';

console.log(type);

// Logical AND (&&)
// Returns TRUE if bothe are TRUE
console.log(true && false);   // false

// Logical OR (||)
// Returns TRUE if one of the operands is TRUE
console.log(true || false);   // true

// NOT (!)
console.log(!true); // false

let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;
console.log('Eligible', eligibleForLoan);

let applicationRefused = !eligibleForLoan;
console.log('Application Refused', applicationRefused);


console.log(false || 'John');    // Outputs John
console.log(false || 1);    // Outputs 1
console.log(true || false);   // true
console.log(false || 1 || 2); // Outputs  1 ---- Short circuiting

// Demonstrating the power of short circuiting

let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor);


// Bitwise Operators

// 1 = 00000001
// 2 = 00000010
// 3 = 00000011
// R = 00000000

console.log(1 | 2);  // Bitwise OR
console.log(1 & 2);  // Bitwise AND


// Read  Write   Execute
// 00000100
// 00000010
// 00000001

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;

myPermission = myPermission | readPermission | writePermission; // Grants two permissions. We use | to grant/assign permissions

let message = (myPermission & readPermission) ? 'yes' : 'no'; // We use & to check for permissions

console.log(message);



// Operator Precedence.
let x = 2 + 3 * 4;
console.log(x);


// Exercise -- Swapping Variables

let a = 'red';
let b = 'blue';
let temp = a;
a = b;
b = temp;

console.log(a);
console.log(b);


// if ... else
let hour = 10;
if (hour >= 6 && hour < 12)
    console.log('Good Morning!');
else if (hout >= 12 && hour < 18)
    console.log('Good Afternoon!');
else
    console.log('Good Evening!');

// Switch --case

let role;
switch (role) {
    case 'guest':
        console.log('Guest');
        break; // If break is not present, all cases are executed in sequence until end of switch case or encounters break
    case 'moderator':
        console.log('Moderator User');
    default:
        console.log('Unknownn role')
        break; // not needed.
}

// For loop
// Initialization Condition Updation
// i is loop variable
// scope of i is limited to for loop
for (let i = 0; i < 5; i++) {
    console.log('Hello World', i);
    if (i % 2 !== 0) console.log(i);   // Prints odd numbers
}


// While loop
// Loop variable is declared externally

let i = 0;
while (i <= 5) {
    if (i % 2 !== 0) console.log(i);   // Prints odd numbers
    i++;
}

// do-while
// Executed atleast once
i = 9;
do {
    if (i % 2 !== 0) console.log(i);   // Prints odd numbers
    i++;
} while (i <= 5);   // Outputs 9


// Infinite loops
// Can crash your browser or computer.
{
    i = 0;
    while (i < 5) {
        console.log(i);
        //i++
    }


    while (true) {

    } // infinite while

    do {

    } while (true);    // Infinite do while

    for (let i = 0; i < 10;);   // Infinite for loop
}


// for - in
{
    const person = {
        name: 'John',
        age: 23
    };

    for (let key in person) {
        console.log(key, person[key]);  // We can't use person.key because we don't have a property named key.
    }

    const colors = ['red', 'blue', 'green'];

    for (let index in colors)
        console.log(index, colors[index]); // Not an ideal way to iterate arrays though
}


// for -- of
{
    // Starting from ES6, we have a new way to iterate over arrays
    // for .... of loop

    const colors = ['red', 'blue', 'green'];

    for (let index of colors)
        console.log(color);   // Outputs red \n green \n blue
}

// Exercise -- maxOfTwo
{
    // write a function that takes two numbers and returns the maximum of the two

    // While writing code, test your function with different possible input values

    function maxOfTwo(number1, number2) {
        return number1 > number2 ? number1 : number2;

        // if(a>b) return a;
        // return b;
    }

    console.log(maxOfTwo(5, 6))
}


// Exercise  -- landscape?Portrait
{
    function isLandscape(width, height) {
        return width > height;   // No need of returning true/false explicitly
    }
}

// Excercise -- Fizz Buzz
{
    // Divisible by 3 => fizz
    // Divisible by 5 => Buzz
    // Both => FizzBuzz
    // Otherwise =>  input
    // Not a nUmber => 'not a number

    // isNaN(input) --- is true only when it's value is NaN 
    // typeof(NaN)  --- 'number'
    const output = fizzBuzz(3);
    function fizzBuzz(input) {
        if (typeof (input) !== 'number')
            return 'Not a Number';
        if (input % 3 === 0 && (input % 5 === 0))  //Tip -  Select text to be enclosed in paranthesis and click opening paranthesis
            return 'FizBuzz';
        if (input % 3 === 0)
            return 'Fizz';
        if (input % 5 === 0)
            return 'Buzz';
        return input;
    }
}

// Excercise  -- Demerit Points
{
    // Speed limit = 70
    // for every 5km above this speed they get 1 point.
    // Math.floor(1.3) ---> Outputs 1
    // More than 12 points ---> Licencse suspended.

    checkSpeed(180); // 70 71 75 77 80 130 
    function checkSpeed(speed) {
        const speedLimit = 70;
        const kmPerPoint = 5;

        if (speed <= speedLimit + kmPerPoint)  // Always avoid using magic numbers. Instead of 70, use a constant so that it becomes easy when speed limit changes and also you don't have to repeat the number if  you want to use it again elsewhere in the code.
        {
            console.log('Ok');
            return;
        }

        const points = Math.floor((speed - speedLimit) / kmPerPoint);
        if (points >= 12)
            console.log('Licencse Suspended');
        else console.log('Points', points);

    }
}

// Excercise -- Even?Odd
{
    showNumbers(10);
    function showNumbers(limit) {
        for (let i = 0; i <= limit; i++) {
            if (i % 2 === 0)
                console.log(i, "EVEN");
            else
                console.log(i, "ODD");

            const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
            console.log(i, message);
        }
    }
}


// Excercise -- Count Truthy
{
    const array = [0, 1, 2, 3, 4, 5, undefined, true, false, null, NaN];
    function countTruthy(array) {
        let count = 0;
        for (let value of array)
            if (value)
                count++
        console.log(count);
    }
}

// Excercise - String Properties
{
    const movie = {
        title: 'a',
        releaseYear: 2018,
        rating: 4.5,
        director: 'b'
    };

    showProperties(movie);

    function showProperties(obj) {
        for (let key in obj) {
            if (typeof obj[key] == 'string')
                console.log(key, obj[key]);
        }
    }
}

// Excercise -- Sum of all  multiples of 3 and 5 within limit
{
    console.log(sum(10)); // Should output 33;

    // Multiples of 3 : 3, 6, 9
    // Multiples of 5 : 5, 10

    function sum(limit) {
        let sum = 0;
        // const array = [3, 5];
        // for (let value of array)
        //     for (let i = 1; i <= Math.floor(limit / value); i++)
        //         sum += i * value;

        for (let i = 0; i <= limit; i++)
            if (i % 3 === 0 || i % 5 === 0)
                sum += i;

        return sum;
    }
}

// Excercise -- Grade
{
    const marks = [80, 80, 50];

    // Average = 70

    // 0-59 : F
    // 60-69 : D
    // 70-79 : C
    // 80-89 : B
    // 99-100 : A

    console.log(calculateGrade(marks));

    function calculateGrade(marks) {
        const average = calculateAverage(marks);       // Single responsibility principle. Each function should focus only on one thing. 
        if (average >= 0 && average <= 59)   // avg<60
            return 'F';
        else if (average >= 60 && average <= 69) // avg 70
            return 'D';
        else if (average >= 70 && average <= 79) // avg < 80
            return 'C';
        else if (average >= 80 && average <= 89) // avg < 90
            return 'B';
        else
            return 'A';


        // if (average < 60) return 'F';
        // if (average < 70) return 'D';
        // if (average < 80) return 'C';
        // if (average < 90) return 'B';
        // return 'A';

    }

    function calculateAverage(array) {

        // Tip - After selecting the text/variable, press f2 to select all the variables with the same name to edit.   -- Renaming
        let sum = 0;
        for (let value of marks)
            sum += value;
        return sum / marks.length;
    }

}

// Excercise -- Stars
{
    showStars(5);

    function showStars(rows) {
        // for (let irow = 1; row <= rows; row++)
        //     console.log(i * '*');

        for (let row = 1; row <= rows; row++) {
            let pattern = '';
            for (let i = 0; i < row; i++)
                pattern += '*';
            console.log(pattern);
        }
    }
}

// Excercise -- Prime Numbers
{
    showPrimes(20);

    // Prime (whose factors are only 1 and itself)
    // Composite

    function showPrimes(limit) {
        {     // if (limit === 1) {
            //     console.log('Neither Prime Nor Composite');
            //     return;
            // }

            // if (limit === 2) {
            //     console.log('2');
            //     return;
            // }

            // for (let i = 3; i <= limit; i++) {
            //     let flag = 0;
            //     for (let j = 2; j < i; j++)
            //         if (i % j == 0)
            //             flag = 1;
            //     if (!flag)
            //         console.log(i);
            // }
        }

        for (let number = 2; number <= limit; number++) {

            if (isPrime(number)) console.log(number);
        }
    }

    function isPrime(i) {
        for (let factor = 2; factor < i; factor++)
            if (i % factor === 0) {
                return false;
            }
        return true;
    }

}

