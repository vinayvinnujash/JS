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






// Objects - object oriented programming
// Object Literal syntax
{
    const circle = {   // Object literal syntax {}
        radius: 1,
        location: {
            x: 1,
            y: 1
        },
        isVisible = true,
        draw: function () {
            console.log('draw');
        }
    };

    circle.draw(); // Method
}


// Factory function.
{
    function createCircle(radius) {
        return {   // You don't want to store object as a const in a memory location.

            radius,  // In modern javaScript if key and value are same, you can just simply add key. 

            // radius : radius is same as radius

            dra() {    // same as draw: function(){}
                console.log('draw');
            }
        };
    }

    const circle1 = createCircle(1);
    console.log(circle1)
}



// Constructor Function
{
    function Circle(radius) {
        this.radius = radius; // this is a reference to an object that is executing this piece of code

        this.draw = function () {
            console.log('draw');
        }
    }

    const circle = new Circle(1);

    // Three things when you use a new operator.
    // new operator creates empty javascript object --- const x = {}
    // this points to the newly created empty object
    // retruns the object.   --- return this;

}


// Dynamic nature of objects
{
    const circle = {   // const here esentially means that you cannot reassign the value.
        radius: 1
    };

    // circle = {} ------ throws an error.   

    circle.color = 'yellow';
    circle.draw = function () { }

    delete circle.color;
    delete circle.draw;

    console.log(circle);
}


// Constructor property
{
    let x = {}
    // Internally, let x = new Object();
    // Object is a built-in javascript function/constructor

    //Other constructors
    // new String();    ''  ""
    // new Boolean();      true,false
    // new Number();     1,2,3,4////

    // Every object has a constructor property and that references to the function that was used to create that object.
}


// Functions are objects
{
    // func_name.name ---- name of the function
    // func_name.length ---- number of arguments
    // functions are created internally using f Functio() constructor
    // func_name.constructor  --- function that created the function

    const Circle1 = new Function('radius', `
    this.radius = radius; 
    this.draw = function () {
        console.log('draw');
    }`);   // Back tick char breaks code it into multiple lines

    const circle = new Circle(1);

    // If you don't use the new operator, this by default will point to global object window.

    Circle.call({}, 1);  // Arguments are passed explicitly   Circle.call({}, 1,2,3)  --- 3 arguments
    Circle.apply({}, [1, 2, 3]);   // arguments passed as array

    const another = new Circle(1);   // same as above,

    const another = Circle(1); // same as Circle.call(window,1);

}



// Value vs Reference types.
{
    let x = 10;
    let y = x;

    x = 20;   // x and y are two independent variables


    x = { value: 10 };   // address or reference object is stored in x but not the object itself
    y = x;   // x and y point to same objects
    x.value = 20;


    let number = 10;
    function increase(number) {
        number++;
    }
    increase(number);
    console.log(number);

    let obj = { value: 10 };
    function increase(obj) {
        obj.value++;
    }
    increase(obj);
    console.log(obj);
}


// Enumerating properties of an object
{
    const circle = {
        radius: 1,
        draw() {
            console.log('draw');
        }
    };

    for (let key in circle)
        console.log(key, circle[key]);

    for (let key of circle)
        console.log(key)   // throws error. Circle is not iterable.

    // for...of loop only works on iterables like arrays and maps

    // Object.keys(circle) returns all keys put in an string array which is a iterable

    for (let key in Object.keys(circle))
        console.log(key);

    // Object.entries(circle) returns all key value pairs as an array


    for (let entry in Object.entries(circle))
        console.log(entry);

    if ('radius' in circle) console.log('yes');  // in operator checks if a given property exists in an object.
}



// Cloning an object
{
    const circle = {
        radius: 1,
        draw() {
            console.log('draw');
        }
    };

    const another = {};

    for (let key in circle)
        another[key] = circle[key];

    console.log(another);


    const another1 = Object.assign({}, circle);  // Exactly same as above. However, the object need not be empty,

    const another1 = Object.assign({ color: 'yellow' }, circle);  // contains both properties

    const another = { ...circle };   // Spread operator is represented as '...' (3 dots) It essentially copies all the properties of existing object and clones them. Say copies.
}


// Math object
{
    // Math.PI
    // Math.abs(x)
    // Math.random()     -- random number in the range 0-1
    // Math.round(1.9)
    // Math.max(1,2,3,4,5)
    // Math.min(1,2,3,4)
}


// String object
{
    // String primitive
    const message = 'hi';   // of type " String"

    // String object
    const another = new String('   hi  ');

    message.length   // --- number of chars
    message.startsWith("hi");
    message.includes("hi");
    message.indexOf("i");
    message.replace('hi', 'hello');
    message.endsWith('i');
    message.toUpperCase();
    message.toLowerCase();
    message.trim();
    message.trimLeft();
    message.trimRight();
    message.split(' ');   // array of words
}


// Template literals
{
    // Object literal {}
    // Boolean literal true,false
    // String '' ""
    // Template literal ``(back tick char)   ---- Starting from ES6

    const another =
        `Hi John,
    
    Thank you for joining my mailing list.
    
    Regards,
    "Jane"`;

    // With template literals, we can add placeholders in the strig
    const name = 'Jane';

    const another =
        `Hi ${name},
    
    Thank you for joining my mailing list.
    
    Regards,
    "Jane"`;

    // We use ${} to add any expression that returns a value
}


// Date Object
{
    const now = new Date()   // Date() returns current date time
    const newDate = new Date('Jan 24 1998 10:00');
    const date1 = new Date(1998, 0, 24, 10, 00); // Month is 0 based

    now.getDate;
    now.setFullYear(2000);


    console.log(now.toDateString())  // Thu May 11 2017
    now.toTimeString()  /// 11:34:01 GMT-0700 (PDT)
    now.toISOString()   // 2017-05-11T18:34:01.212Z  ----  standard ISO format commanly used in web applications to transfer date between client and server 


}


// Excercise 1 --- Address Object
{
    // function Address(street,) {
    //     street,
    //         city,
    //         ZipCode,
    //         this.showAddress(Address) = function () {

    //         };
    // }


    let address = {
        street: 'a',
        city: 'b',
        zipCode: 'c'
    };

    function showAddress(address) {
        for (key in address)
            console.log(key.address[key]);
    }

    showAddress(address);

}



// Excercise 2 ----   Factory and Constructor function
{
    // Factory function
    {
        let address = createAddress('a', 'b', 'c');
        function createAddress(street, city, zipcode) {
            return {
                street,
                city,
                zipcode
            };
        }

        function showAddress(address) {
            for (key in address)
                console.log(key, address[key]);
        }
    }

    // Constructor function
    {
        function Address(street, city, zipCode) {
            this.street = street,
                this.city = city,
                this.zipcode = zipCode
        }

        let address = new Address('a', 'b', 'c');
    }
}


// Excercise 3 --- Object Equality
{
    function Address(street, city, zipCode) {
        this.street = street,
            this.city = city,
            this.zipcode = zipCode
    }

    let address1 = new Address('a', 'b', 'c');
    let address2 = new Address('a', 'b', 'c');

    function areEqual(address1, address2) {
        for (key in Object.keys(address1))
            if (address1[key] != address2[key])
                return 'Not Equal';
        return 'Equal';
    }

    function areSame(address1, address2) {
        return address1 === address2;
    }

}


// Excercise 4 --- Blog Post Objects
{
    let blog_post = {
        title: 'Wonders of women',
        body: 'Attrocities of men and women',
        author: 'john doe',
        views: 539,
        comments: [{
            author: 'ash',
            body: 'I hate you'
        }],
        isLive: false
    }
}

// Excercise 5 ---- Constructor function
{
    function BlogPost(title, body, author) {
        this.title = title,
            this.body = body,
            this.author = author,
            views = 0,
            comments = [],
            isLive = false
    }

    let post = new BlogPost('a', 'b', 'c');
}


// Excercise 6 ----- Price Range Objects
{
    let priceRanges = [
        { label: '$', tooltip: 'InExpensive', minPerPerson: 0, maxPerPerson: 10 },
        { label: '$$', tooltip: 'Moderate', minPerPerson: 0, maxPerPerson: 10 },
        { label: '$$$', tooltip: 'Expensive', minPerPerson: 0, maxPerPerson: 10 }
    ];

    let restaurants = [
        { averagePerPerson: 5 }
    ]
}


// Adding elements to array.
{
    // Constant doesn't stop us from modifying an existing object, say a array

    const numbers = [3, 4];  //  3 4
    numbers = []; // Assignment to constant variable error.


    // End 
    numbers.push(5, 6);   // 3 4 5 6
    console.log(numbers);

    // Beginning
    numbers.unshift(1, 2); // 1 2 3 4 5 6

    // Middle
    numbers.splice(2, 0, 'a', 'b'); // 1 2 a b 3 4 5 6

}


// Finding elements (Primitives)
{
    const numbers = [1, 2, 3, 4, 1];
    numbers.indexOf('a'); // returns -1 as a doesn't exist
    numbers.indexOf(1); // returns 0 as a doesn't exist
    numbers.lastIndexOf(1); // returns 4 as a doesn't exist

    console.log(numbers.indexOf(1) !== -1); // Element exists in array
    console.log(number.includes(1));  // Outputs true

    console.log(numbers.indexOf(1, 3)); //(search element, fromIndex)

}


// Finding elements (Reference types)
{
    const courses = [
        { id: 1, name: 'a' },
        { id: 2, name: 'b' },
    ];

    console.log(courses.includes({ id: 1, name: 'a' })); // Outputs false as there are two different refereces.

    const course = courses.find(function (course) {
        return course.name === 'a';
    }); // we call this function a predicate or a call back function

    console.log(course);  // We get the complete course object if exists otherwise is undefined.

    const course = courses.findIndex(function (course) {
        return course.name === 'a';
    });  // returns 0 . If doesn't exist, returns -1
}


// Arrow functions -- whenever you wanna pass a function as a call back function or as an argument to a different method  
{
    // =>   fat arrow
    // course =>    --- single parameter
    // (course,other) =>  ----- two parameters(multiple)
    // () => ---- no parameters
    // 

    const course = courses.find(course => course.name === 'a');
    // This is read as course goes to course name equals a

}

// Removing elements
{
    const numbers = [1, 2, 3, 4];

    // End
    const last = numbers.pop()
    console.log(numbers);   // 1 2 3
    console.log(last); //4

    // Beginning
    const first = numbers.shift(); // 2 3 


    // Middle
    numbers.splice(2, 1);
    numbers.splice(2, 3);  // deletes 2 elements starting from 2
}



// Emptying an array
{
    let numbers = [1, 2, 3, 4];
    let another = numbers;

    // Sol - 1
    numbers = [];    // another still points to old array

    // Sol - 2
    numbers.length = 0; // This truncates the original array

    // Sol - 3
    numbers.slice(0, numbers.length);

    // Sol - 4
    while (numbers.length > 0)
        numbers.pop()
}



// Combining and Slicing Array
{
    const first = [1, 2, 3];
    const second = [4, 5, 6, 7];

    const combined = first.concat(second);  // When dealing with objects their references are copied. Meaning to say, they are copied by reference.

    const slice = combined.slice();  // returns copy of array
    const slice = combined.slice(2, 4);   // returns array starting from 2 to 4. [2,4)
    const slice = combined.slice(2);  // starting from 2 to end of array

    console.log(slice);

}


// The Spread Operator
{
    // When you spread an array, all it's elements are returned individually

    const first = [1, 2, 3];
    const second = [4, 5, 6, 7];

    const combined = [...first, 'a', ...second, 'b'];
    // This is same as, [1,2,3,'a',4,5,6,7,'b']

    const copy = [...combined];
}


// Iterating an array
{
    const numbers = [1, 2, 3];

    for (let number in numbers)
        console.log(number);

    numbers.forEach((number, index /*optional*/) => console.log(index, number)); // same as function(number){console.log(number)}

    // The forEach method takes a function as an argument

}


// Joining arrays
{
    const numbers = [1, 2, 3, 4];
    const joined = numbers.join(','); // returns a combined string  '1,2,3,4'

    console.log(joined);

    const message = 'This is my first message';
    const parts = message.split(' ');

    console.log(parts); // ["This","is","my","first","message"]    // Title is split into words

    const combined = parts.join('-');
    console.log(combined); // This-is-my-first-message   // This is the url slug obtained by joining the above created array using hy-phen

    // Mainly useful when creating urls, you split the title and join them again to create a url slug as above.
}


// Sorting arrays
{
    const numbers = [2, 3, 1];
    numbers.sort();  // first converts each element to a string and then sorts the array
    console.log(numbers);


    numbers.reverse();
    console.log(numbers);

    // The above way of sorting is most useful when you have strings and numbers in the array.
    // When you have objects, it doesn't work by default and needs some extra work

    const courses = [
        { id: 1, name: 'Node.js' },
        { id: 2, name: 'JavaScript' },
    ];

    courses.sort(); // No effect

    // Sort function optionally takes a function as a parameter to compare

    courses.sort(function (a, b) {
        // a < b => -1
        // a > b => 1
        // a === b => 0

        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();   // This way you can ignore case...

        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    });

    // Ctrl + d ----- multicursor editing for selected text
}



// Testing the elements of an array
{
    const numbers = [1, 2, 3];
    const allPositive = numbers.every(function (value) { return value >= 0 });

    console.log(allPositive); // Outputs true
    // every()  ---- all elemnts should match the criteria.
    // On encountering the first non-matching element, the search stops

    const atLeastOnePositive = numbers.some(function (value) {
        return value >= 0;
    });

    console.log(atLeastOnePositive); // true

    // Some() checks to see if you have atleast one element fulfilling the condition

    // Some() and every() are new and so, might not work in older browsers
}


// Filtering an array
{
    const numbers = [1, -2, 3, 4, 5];

    const filtered = numbers.filter(function (value) {
        return value >= 0;
    });

    // Same as numbers.filter(n=> n>=0);

    console.log(filtered); // satisfying elements are added to a new array
}


// Mapping an array -- map each element of an array to something else
{
    const numbers = [1, 2, 3, 4];

    const filtered = numbers.filter(n => n >= 0);

    const items = filtered.map(n => '<li>' + n + '</li>');

    const html = '<ul>' + items.join('') + '</ul>'; // By default join() uses ',' as separator

    console.log(html);

    const items = filtered.map(n => ({ value: n }));  // map can also used with objects  // returns an array of 4 objects

    console.log(items);

    // If there are no parenthesis, the parser sees {} as a codeblock instead of object literal

    const items = filtered.map(n => { value: n });  // returns an array of three undefiend values

    // Filter and Map return new array and are chainable

    const items = numbers
        .filter(n => n > 0)    // array containing values > 0
        .map(n => ({ value: n })) // array of objects
        .filter(obj => obj.value > 1) // array of objects with object value > 1
        .map(obj => obj.value); // array containing values of each object

    console.log(items);
}



// Reducing an array
{
    const numbers = [1, -1, 2, 3, 4];

    let sum = 0;
    for (let n of numbers)
        sum += n;

    console.log(sum);

    sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0 /* Initializing accumulator with 0 */);

    sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);

    // When initialization is not provided, accumulator will be assigned to the first value and currentValue will be set to second one.

    // When initialization is provided, the currentValue will be assigned to first value

    // reduce() converts all values into a single value which can be anything, a number/string
}


// Excercise 1 - Array from range
{
    const numbers = arrayFromRange(-10, -4);
    console.log(numbers);
    function arrayFromRange(min, max) {
        const output = [];
        for (i = min; i <= max; i++)
            output.push(i);
        return output;
    }
}


//Excercise -2   Includes
{
    const numbers = [1, 2, 3, 4];

    console.log(numbers.includes(1));

    function includes(array, searchElement) {
        for (let value of array)
            if (value === searchElement)
                return true;
        return false;
    }

    console.log(includes(numbers, 2));
}


// Excercise -3 Except
{
    const numbers = [1, 2, 3, 4, 5, 1, 1, 1, 1];
    const output = except(numbers, [1, 2]);

    console.log(output);

    function except(array, excluded) {
        output = []
        for (let element of array)
            if (!excluded.includes(element))
                output.push(element);
        return output;
    }
}


// Excercise -4 Moving an element
{
    const numbers = [1, 2, 3, 4];
    const output = move(numbers, 0, 1);

    console.log(output);

    function move(array, index, offset) {
        const output = [...array];
        const position = index + offset;
        if (position >= array.length || position < 0) {
            console.error('Invalid offset');
            return;
        }

        const element = output.splice(index, 1)[0];
        output.splice(position, 0, element);
        return output;

        // if (index + offset >= array.length) {
        //     console.log('Invalid offset')
        //     return
        // }

        // let temp = outputArray[index + offset];
        // outputArray[index + offset] = outputArray[index];
        // outputArray[index] = temp;
        // return outputArray;
    }

}


// Excercise - 5 Counting Occurences
{
    const numbers = [1, 2, 3, 4, 5, 6, 1];

    const count = countOccurrences(numbers, -1);
    console.log(count);

    function countOccurrences(array, searchElement) {
        // let count = 0;
        // for (let value of array)
        //     if (value === searchElement)
        //         count++;
        // return count;         

        return array.reduce((accumulator, current) => {
            const occurrence = (current === searchElement) ? 1 : 0;
            // console.log(accumulator,current,searchElement)
            return occurrence + accumulator;
        }, 0);
    }

}


// Excercise - 6 Get Max
{
    const numbers = [1, 2, 3, 4];

    const max = getMax([]);

    console.log(max);

    function getMax(array) {
        if (array.length === 0)
            return undefined;
        let max = array[0];
        for (let value of array)
            if (value > max)
                max = value;
        return max;

        // return array.reduce((accumulator, current) => { if (current > accumulator) accumulator = current; return accumulator; });

        return array.reduce((a, b) => {
            return (a > b) ? a : b;
        });
    }
}


// Excercise - 7 Movies
{
    const movies = [
        { title: 'a', year: 2018, rating: 4.5 },
        { title: 'b', year: 2018, rating: 4.7 },
        { title: 'c', year: 2018, rating: 3 },
        { title: 'd', year: 2017, rating: 4.5 },
    ];

    // All the movies in 2018 with rating > 4
    // Sort them by their rating
    // Descending order
    // Pick their title

    return movies
        .filter(obj => obj.year === 2018 && obj.rating > 4)
        .sort((a, b) => {
            if (a.rating > b.rating) return 1;
            if (a.rating < b.rating) return -1;
            return 0;
        }) /* .sort((a,b) => a-b) */
        .reverse()
        .map(obj => obj.title);
}



// FUNCTIONS

// Function declarations vs expressions
{
    // Function Declaration
    function walk() {
        console.log('walk');
    }// Even if you put a semi-colon here, it doesn't give any error. But by convention we don't put any.

    // Anonymous Function Expression
    let run = function () {
        console.log('run');
    };

    // Named Function Expression
    let run = function run() {
        console.log('run');
    };

    run();

    let move = run;
    move();
}


// Hoisting -- process of moving function declarations to the top of the file and is done automatically by the JS Engine executing this code
{
    // Function Declaration
    walk(); // No error. function can be called even before declaration

    // the reason however is because javascript engine while executing moves all function declarations to the top. This is what we call HOISTING

    function walk() { };


    // Function Expression
    run(); // Throws Uncaught ReferenceError: run is not defined
    // Can not be used before declaration

    const run = function () { };

}


// Arguments --- every function has a object called argument that has length property, an iterator, and others
{
    function sum(a, b) {
        return a + b; // 1 + undefined => NaN
    }
    function sum1() {
        console.arguments()
        let total = 0;
        for (let value of arguments) // for...of loop works with any operator that has an iterator. Here arguments operator has an iterator so we can use for...of loop instead of for..in loop
            total += value;
        return total;

    }

    console.log(sum(1));
    console.log(sum1(1, 2, 3, 4, 5, 6, 6, 7));
}


// The Rest Operator -- modern javascript
{
    // Spread operator and Rest operator look same
    // ... when used with parameter of a function is called rest operator
    // Rest parameter must be the last formal parameter.

    function sum(...args) {
        return args.reduce((a, b) => a + b);
    }
    function sum(discount, ...args) {
        const total = args.reduce((a, b) => a + b);
        return (1 - discount);
    }
}


// Default Parameters
{
    function interest(principle, rate = 3.5  /* Assigns default rate value, available starting from ES6 */, years) {
        rate = rate || 3.5;
        years = years || 5;    // Assigning default values.

        // However starting from ES6, we can declare the default values as below

        // function interest(principle,rate=3.5,years=5){}

        return principle * rate / 100 * years;
    }

    console.log(interest(10000, 3.5, 5));


    // It's always suggested to use, default parameters at the end.
    // If there are parameters after default parameter, it doesn't produce any error but isn't considered as a best practice.
}


// Getters and Setters
{
    const person = {
        firstName: 'John',
        lastName: 'Doe',
        fullName() {   // read only
            console.log(`${person.firstName} ${person.lastName}`);
        }
    };

    console.log(`${person.firstName} ${person.lastName}`);
    console.log(person.fullName()); // Here you can't write, person.fullName;   i.e., you can't use person.fullName as a property except as a method

    // This is where getters and setters come into picture
    // getters => access properties
    // Setters => change (mutate) them

    const person1 = {
        firstName: 'John',
        lastName: 'Doe',
        get fullName() {   // read only
            console.log(`${person.firstName} ${person.lastName}`);
        },
        set fullName(value) {
            const parts = value.split(' ');
            this.firstName = parts[0];
            this.lastName = parts[1];
        }
    };

    person1.fullName = 'John Dane'
    console.log(person1.fullName);
}



// Try and Catch   ----- What we call defensive programming
{
    // Difference between errors and exceptions

    const e = new Error(); // plain javascript object
    throw e; // The moment you throw an error, it becomes an exception. It is an exceptional situation that should not have happened.

    // When an error is thrown, the control jumps out of that block and goes to the catch  block

    const person1 = {
        firstName: 'John',
        lastName: 'Doe',
        set fullName(value) {
            if (typeof value !== 'string')
                throw new Error('Value is not a string.');

            const parts = value.split(' ');
            if (parts.length !== 2)
                throw new Error('Enter a first and last name');
            this.firstName = parts[0];
            this.lastName = parts[1];
        }
    };

    try {
        person1.fullName = 'John Dane'
    }

    catch (e/* This is the error object that we threw above */) {
        alert(e);
    }
    console.log(person1.fullName);
}


// Local vs Global Scope
{
    //  When variables are declared using let/const their scope is limited to the block in which they are defined

    const color = 'red'; // Has Global Scope

    function start() {
        const message = 'hi';  // Local to this function
        const color = 'blue';
        console.log(color); // Local variables have precedence over global variables
    }


}


// Let vs Var
{
    // Scope of variables declared using var keyword is limited to the function in which it is defined.

    // var --- only way before ES6
    // ES6(ES2015)  ----  let , const 

    function start() {
        for (var i = 0; i < 5; i++)
            console.log(i);
        console.log(i); // Outputs 5.

        for (let j = 0; j < 5; j++)
            console.log(j);
        console.log(j); // Throws an error.
    }
    // Here start() is a global function and is attatched to the window object

    window.start();

    var color = 'red';
    window.color; // Outputs red
    // when we use var outside of a function, it creates a global variable and attatches it to the window object in browser
}


// The This Keyword
{
    // This references to the object that is executing the current function

    // method -> object (this refers to)
    // function -> this refers to global object (window in browsers, global in node)

    // When used with new operator, a case with the constructor function, this references the new empty object

    const video = {
        title: 'a',
        play() {
            console.log(this);
        }
    };

    video.play(); // You get the video object on the console

    // You can add methods or properties later. For instance you can write

    video.stop = function () {
        console.log(this); // You get the video object as output
    };

    video.stop();

    function playVideo() {
        console.log(this);
    }

    playVideo(); // you get the global window object as output

    function Video(title) {
        this.title = title;
        console.log(this);
    }

    const v = new Video('b'); // {}


    const video1 = {
        title: 'a',
        tags: ['a', 'b', 'c'],
        showTags() {
            this.tags.forEach(function (tag)/* this is a normal function attatched to the global window object*/ {
                console.log(this.title, tag); // this here refers to the window object
            });
        },
    };

    const video2 = {
        title: 'a',
        tags: ['a', 'b', 'c'],
        showTags() {
            this.tags.forEach(function (tag) {
                console.log(this.title, tag); // this here refers to the current object   ---- video2
            }, this /* Optional parameter. this refers to the passed object or parameter. Not every method has this optional parameter*/);
        },
    };


}


// Changing this
{
    const video2 = {
        title: 'a',
        tags: ['a', 'b', 'c'],
        showTags() {
            const self = this; // Some write, const that = this;
            this.tags.forEach(function (tag) {
                console.log(self.title, tag); // Self is the original value of this
            });
        },
    };

    // The above approach is valid but is not preferred
    // call apply bind

    function playVideo(a, b) {
        console.log(this);
    }

    playVideo.call({ name: 'John Doe' }, 1, 2); // The first argument is what this points to. With call you can pass the other parameters normally.

    playVideo.apply({ name: 'John doe' }, [1, 2]); // Same as call. But with apply you need to pass the arguments as an array which is ofcourse the only difference between call and apply

    const fn = playVideo.bind({ name: 'John Doe' }); // returns a function

    fn();
    // Alternatively you can call directly as below
    playVideo.bind({ name: 'John Doe' })();
    playVideo(); // window object


    const video2 = {
        title: 'a',
        tags: ['a', 'b', 'c'],
        showTags() {
            this.tags.forEach(function (tag) {
                console.log(this.title, tag);
            }.bind(this)); // using bind is the second solution to the above problem of changing this
        },
    };

    // However there is a newer and better solution, arrow functions
    // arrow functions inherit the this value from the containing function

    const video2 = {
        title: 'a',
        tags: ['a', 'b', 'c'],
        showTags() {
            this.tags.forEach(tag => {
                console.log(this.title, tag);  // this references the video object
            });
        },
    };
}


// Excercise - 1 Sum of Arguments
{
    // sum([1,2,3,4]) => 10

    Array.isArray([]); // Outputs true
    Array.isArray({}); // Outputs false
    console.log(sum(1, 2, 3, 4));

    function sum(...args) {
        if (args.length === 1 && Array.isArray(args))
            items = [...items[0]];
        return args.reduce((a, b) => a + b);
    }
}


// Excercise - 2 Area of circle
{
    let circle = {
        radius: 5,
        get area() {
            return Math.PI * (this.radius ** 2);
        },

        get radius() {
            return this.radius;
        },

        set radius(radius) {
            this.radius = this.radius;
        }
    };

    console.log(circle.area);
}

// Excercise - 3 Error Handling
{
    const numbers = [1, 2, 3, 4];
    try {
        const count = countOccurrences(null, 1);
    }
    catch (e) { // e is the identifier for our exception
        console.log(e.message);
    }
    console.log(count);

    function countOccurrences(array, searchElement) {
        if (!Array.isArray(array))
            throw new Error('Send a valid array');

        return array.reduce((a, b) => {
            const occurrence = (a === b) ? 1 : 0;
            return a + occurrence;
        }, 0);
    }
}