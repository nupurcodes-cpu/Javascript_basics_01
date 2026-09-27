//Imediately Invoked Function Expression (IIFE)

/* An Immediately Invoked Function Expression (IIFE) is a JavaScript function that runs as soon as it is defined.

It uses a design pattern known as a Self-Executing Anonymous Function and comprises two major parts:

The Function Expression: A function wrapped inside the Grouping Operator (). This prevents it from polluting the global scope and turns the declaration into an expression.

The Invocation: The second pair of parentheses () at the end, which immediately calls/executes the function. */


//Syntax & Examples
//Standard IIFE:

(function () {
  console.log("Executed immediately!");
})();   //Executed immediately1 (EXPLICITLY PUT SEMICOLON ';' TO END THE IIFE, OTHERWISE IT WONT KNOW WHERE TO END)
//In interview if they ask to write two iife code, then don't forget to put semicolon and the first iife.


//Arrow Function IIFE:

(() => {
  console.log("Arrow function IIFE executed!");
})();   //Arrow function IIFE executed!


// IIFE with Arguments:
((name) => {
  console.log(`Hello, ${name}!`);
})("Alice");    //Hello, Alice!


//named iife:
(function chai(){
    console.log(`DB CONNECTED`);    
}) ();  //DB CONNECTED


//Returning values
const result = (() => {
  const a = 10;
  const b = 20;
  return a + b;
})();
console.log(result); // 30



//Why do we wrap function in  () ?
We wrap a function in parentheses in JavaScript to force the JavaScript engine to treat it as a function expression rather than a function declaration.
The Fundamental Rule
In JavaScript, if a statement starts with the word function, the parser expects a Function Declaration:

// Function Declaration
function myFunc() {
  // ...
}

Function declarations require a name and cannot be immediately invoked by putting () at the end:
// ❌ SyntaxError: Function statements require a function name
function() {
  console.log("Hello");
}();

How Parentheses Change the Meaning
The Grouping Operator () in JavaScript can only wrap expressions (values or code that produces a value, like (1 + 2)).

By placing ( before function:
// Parentheses force the parser into "expression mode"
(function() {
  console.log("Executed!");
});

(function() {
  console.log("Executed!");
})(); // <--- The second () calls the evaluated function

