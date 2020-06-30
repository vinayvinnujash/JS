

// What is JavaScript?
// What Can You do with it?
//Used to build interactive web pages
//Web or Mobile apps
//Real time Networking apps
//Command-line tools
//Games

// Where does JavaScript code run?
// Browsers
//JavaScript Engine
//Chrome : v8
//Firefox: SpiderMonkey
// Node - It is a c++ program that includes Google's v8 engine

// JavaScript vs ECMAScript?
// ECMAScript is a Specification    v1 - 1997     2015- ES6   2016 ....
// JavaScript is a Programming Language




console.log('Hello World!')
alert('Stay Alert!')


// There are two places where we can add our script element
// in the head/body section

// For better practice put the script element at the end of all the elements in the body section
    // Reason 1 : Browser parses html from top to bottom. You don't want your users to see a blank screen while your browser is busy in executing/parsing some large javascript files. Do you?

    // Reason 2 : Mostly your javascript code has something to do with the html elements. So when you place this way at the end, your html elements are already rendered.

    // However, there are exceptions where you need to put javascript code in the head section when you use third party code.


// All statements in javascript should be terminated by a Semicolon

// Separation of contents
    // HTML is all about content
    // We use JavaScript to Implement Behaviour

    // Use <script src = "index.js"></script> 

// Node is a runtime environment for executing javascript code
// node index.js   --- this command executes the index.js file.


//  VARIABLES
        // Before ES6 we used var keyword to declare a variable
        // After ES6, the best practice is to use let keyword to declare a variable
        // By default the value of a variable declared in JS is undefined.
        // let name; 

        // Naming Conventions
             // Variables cannot be a reserved keyword
             // Meaningful and Descriptive names
             // Cannot Start with a number
             // Cannot contain a space or hyphen(-)
             // variable are case-sensitive

// Constants
        // We use const keyword to declare/define constant variables


// You have Primitive/Value types and Reference Types

// Primitive(Value) Types:
        // String   ------ "string"
        // Number   --- all numbers are of type "number"
        // Booolean -----    "boolean"
        // undefined ------  "undefined"
        // null   ---------  "object"
        // Symbol -----
        // In ES6 we have another primitive called SYMBOL


// Dynamic Typing
        // JavaScript is a dynamic language.
        // Languages --- Static(Statically typed)  or Dynamic(Dynamically typed)

// Cntrl + L  ------ clears the console.


// Reference Types (Objects)
        // Objects
                // {} -- Object literal
                // Keys are properties
                // One or more key-value pairs

                // Dot Notation   --- access properties
                        //It is concise and shorter
                // Bracket Notation 
                        // Sometimes you might not know what property to access until runtime  meaning a user selects the property

        // Array
                // [] -- Array literal
                // Array indexing starts at 0
                // length is dynamic
                // type of objects is also dynamic. Can store different objects.
                // Array is an object

        // Functions
                // Fundamental building blocks in javaScript
                // usually a set of statements that performs a task or calculates and returns a value.
                // We use function keyword to declare functions.

                // Argument is a actual value of supply for a parameter
                // parameter is what we have at the time of declaration.


                // Types of Function:
                            // That performs a task
                            // That Calculates some value.



// Operators
        // Operators + Variables + Constants --> Expressions --> Algorithms

        // Arithmetic Operators
                // + - * / % ** ++ --

        // Assignment operators
                // += -= *= /= %= **= 

        // Comparision Operators

                // Relational Operators
                        // > < >= <= 

                // Equality Operators
                        // === !==   Strict Equality Operator   ---- More Precise and Accurate
                        // == !=     Lose Equality Operator

                // Result of this operator is boolean

        // Ternary Operator
                // condition ? true_part : false_part

        // Logical Operators   -- Short circuit operators.
                // and   &&
                // or    ||
                // not    !
                // The result of a logical expression is not necessarily true or false. It entirely depends on what operands we have

                // Falsy (false) ---     
                        // undefined
                        // null
                        // 0
                        // false
                        // ''
                        // NaN   - Not a Number

                // Truthy (true)  -- Anything that is not falsy

        // Bitwise Operators
                // Bitwise OR    |
                // Bitwise AND   &

        // Operator Precedence.
                // You can always use () - Parenthesis to emphasize on the order of execution/priority

// Control Flow
        // If ... else   // Swithc case   // for loop // while loop
        // do ... while loop 
        // for... in  // for ... of    ----- Used to iterate over properties of an object or elements of an array
/*
if(condition){
        statement
}
else if (anotherCondition) {
        statement
}
else if (yetAnotherCondition){
        statement
}
else
        statement
*/


// Loops
        // for
        // while
        // do while
        // for in
        // for of


// break ----     exits from the loop
// continue ----  skips the rest of the code and continues with next iteration  --- not recommended. -- an ugly way of writing code




//OBJECTS  ----highly related data(properties and functions) are put together.
        // OOP - a style of programming where we see program as a collection of objects that talk to each other to perform some functionality.

        // If a function is part of a object, in OOP terms we refer to that function as a method.


// Factory function ---- produce objects.
        // naming convention  ---- camel Notation     ---- sayLikeThis

// Constructor function --- construct/create object
        // naming convention --- pascal Notation   ----- SayLikeThis


// Dynamic nature of objects
        // you can always add/delete methods or properties of objects dynamically

// Constructor property

// Functions are objects.

// Value vs Reference types.
        // Primitive --- copied by value
        // Reference --- copied by reference.

// Enumerating properties of an object
        // Object is not iterable and hence you cannot use for..of loop to iterate over objects.

// Cloning an object

// Garbage collection
        // Garbage Collector --- deallocates memory of nolonger used variables or constant
        // Memory allocation and deallocation happens automatically

// Math object
        // built in object for properties and methods for mathematical constants and functions


// String object

// Template literal

// Date Object


// ARRAYS
        // Adding elements   push upshift splice
        // Finding Elements - Primitive and Reference types
        // Arrow functions
        // Removing Elements   pop shift splice
        // Emptying an array  
        // Combining and Slicing array
                // When dealing with primitive types, the values are copied
                // When dealing with objects, there references are copied
        // The Spread Operator
        // Iterating an array
        // Joining arrays
        // Sorting arrays
        // Testing the elements of an array
        // Filtering an array
        // Mapping an array
        // Reducing an array


// FUNCTIONs
        // Function declarations vs expressions
        // Hosting
        // Arguments
        // Rest operator
        // Default parameters
        // Getters and Setters
        // Try and Catch
        // Local vs Global Scope
        // Let vs Var
                // 1st problem is with the scope
                // 2nd issue is with global variables
        // The This Keyword
        // Changing this
                // call apply bind
                // 1st approach ---- using self...
                // 2nd approach ---- using bind method
                // 3rd approach ---- using arrow functions ---- modern way