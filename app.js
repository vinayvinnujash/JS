

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

// Primitive Types:
        // String   ------ "string"
        // Number   --- all numbers are of type "number"
        // Booolean -----    "boolean"
        // undefined ------  "undefined"
        // null   ---------  "object"

        // In ES6 we have another primitive called SYMBOL


// Dynamic Typing
        // JavaScript is a dynamic language.
        // Languages --- Static(Statically typed)  or Dynamic(Dynamically typed)

// Cntrl + L  ------ clears the console.


// Reference Types
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
                            //