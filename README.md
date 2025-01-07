JavaScript (JS) is a lightweight, interpreted programming language commonly used to create interactive and dynamic content on websites. It's a core technology of web development, alongside HTML and CSS.

Uses of JavaScript:

Web Development: Add interactivity to websites (e.g., forms, slideshows, pop-ups).
Backend Development: Use with Node.js to build server-side applications.
Mobile and Desktop Apps: Frameworks like React Native and Electron enable app development.
History of JavaScript
Timeline
1995: Brendan Eich created JavaScript in 10 days, initially called Mocha.
1996: Renamed to JavaScript to attract Java developers, though it is unrelated to Java. - Microsoft copied JavaScript as JScript for Internet Explorer.
1997: ECMA standardized JavaScript as ECMAScript (ES1).
2009: ES5 introduced significant updates.
2015: ES6 was a major update, modernizing the language.
2016–Present: New ECMAScript versions are released annually (e.g., ES2016, ES2017).
JavaScript has evolved from a simple scripting language to a powerful tool for building web applications, servers, and more!

ECMAScript is the standard or set of rules for scripting languages like JavaScript. JavaScript is a programming language that follows the ECMAScript rules, but it also includes extra features for working with websites and web applications.

Running JavaScript Code in Three Ways
Console Tab of Web Browser
Using Node.js in Terminal
Using Code Runner Extension in VS Code
JavaScript Variables and Constants
Variable (let, var)
Stores data that can be changed.
let newer version , var new way of declaring.
Constant (const)
Stores data that cannot be changed after initialization.
Must be initialized during declaration.
JavaScript Values:
Primitives: Stored directly in memory. Types: string, number, boolean, null, undefined, symbol, bigint.

Objects: Stored by reference (not directly in memory). Types: Arrays, Functions, Objects.

Types of Conversion in JavaScript
1. Implicit Conversion
JavaScript automatically converts values between types during operations when necessary.
2. Explicit Conversion
You manually convert values between types using functions like String(), Number(), and Boolean().
JavaScript Conditional Statements
1. if, else if, else
EXAMPLE

let b= 11
if(a>b){
    console.log(a);
} else {
    console.log(b);
}
2. Ternary Operator (? :)
EXAMPLE

let age =18
console.log(age>18 ? true : false);

## 3.  `Switch case`
*EXAMPLE*
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of the week");
        break;
    case "Friday":
        console.log("End of the week");
        break;
    default:
        console.log("Other day");
}
JavaScript Loops
1. Loop for
EXAMPLE

for (let i=0; i<=5; i++) {
    console.log(i);
}
2. While Loop
EXAMPLE

let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
3. do while Loop
EXAMPLE

let i = 0;
do {
    console.log(i);
    i++;
} while (i<=5);
JavaScript Functions
1. Function Declaration
EXAMPLE

function SumTwoNum(num1,num2) {

   return num1+num2;

}
let user1=SumTwoNum(2,3)
console.log(user1);
2. Function Expression
EXAMPLE a. Anonymous Function

let SumTwoNum = function(num1, num2) {
    return num1 + num2;
};
let user1 = SumTwoNum(2, 3);
console.log(user1);
b. Arrow Function

let SumTwoNum = (num1, num2) =>
num1 + num2;
let user1 = SumTwoNum(2, 3);
console.log(user1);
3.IIFE (Immediately Invoked Function Expression)
(function(num1, num2) {
    console.log(num1 + num2);
})(2, 3);
