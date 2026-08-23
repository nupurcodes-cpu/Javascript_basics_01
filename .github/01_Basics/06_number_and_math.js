const score = 400
console.log(score);     //400

const balance = new Number(100)
console.log(balance);       //new Number(100) explicitly creates a Number object wrapper
/*  In the browser console, typing Number. reveals its built-in static properties and constants:
MAX_VALUE / MIN_VALUE: The largest and smallest possible numerical values JavaScript can represent.
MAX_SAFE_INTEGER / MIN_SAFE_INTEGER: The maximum and minimum integers that can be safely computed 
without losing precision ($2^{53} - 1$).
EPSILON: The smallest difference between 1 and the next representable floating-point number, often used to handle floating-point rounding errors
*/ 
//go in browser and create number as object and you;ll see all Number methods(1.Static Properties(constant) 2.Static Mehtods (Helpers on Number) 3.Instance Methods(Formatting Numbers)).

//Some of them are below

//toString().length: convert Number to String and check length
console.log(balance.toString().length);    //300

//toFixed(): specifies, how many digits should appear after the decimal point.
console.log(balance.toFixed(2));    //100.00

//toPrecision(): method controls the total number of significant digits (both before and after the decimal point combined). It can get a bit tricky depending on the size of the number:
const otherNumber = 1123.8966;
console.log(otherNumber.toPrecision(3));    //1.12e+3  (3 digts and rest exponent )

//another ex:
const anotherNumber = 123.8966;
console.log(anotherNumber.toPrecision(4));  //123.9 (Rounds off to 4 digits)

//toLocaleString(): put commas according to local numbering systems.
const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));  //10,00,000 (According to India)
const hundreds1 = 1000000;
console.log(hundreds1.toLocaleString('en-US'));    // 1,000,000 (According to USA)


//++++++++++++++++++++++++++++++In depth study of Number & its Methods++++++++++++++++++++++
/* 1. Core Concept & Limitations
What it is: JavaScript uses a 64-bit floating-point format (IEEE 754) for all numbers (both integers and decimals). There is no separate integer type for everyday math.

The Precision Limit: It can only safely keep about 17 decimal places of precision. Anything beyond that suffers from rounding errors.
 */

/* 2. Static Properties (Constants):
These are helper limits built directly into the Number blueprint.

# Number.MAX_SAFE_INTEGER & Number.MIN_SAFE_INTEGER
Value: $2^{53} - 1$ (9007199254740991)
Real-Life Use Case: Financial apps or database IDs. If a user ID or transaction amount exceeds this limit, 
math breaks or JSON parsers corrupt the data. You use these constants to validate if an incoming ID is safe to process as a regular number 
(or if you need a BigInt instead).

Real-life example:
const transactionId = 9007199254740993n; 
if (!Number.isSafeInteger(transactionId)) {
    console.log("Warning: Number is too large for standard JS math!");
}

# Number.MAX_VALUE & Number.MIN_VALUE
Value: The absolute largest ($1.8E308$) and smallest positive numbers JS can handle.
Real-Life Use Case: Setting up initial baseline values when writing an algorithm to find the minimum 
or maximum value in a large dataset.

# Number.POSITIVE_INFINITY / NEGATIVE_INFINITY / NaN
Real-Life Use Case: Handling math overflow errors. If a calculation results in a number too massive to 
compute, JS returns Infinity instead of crashing your app.
 */
/* 3. Static Methods (Helpers on Number):

# Number.isInteger() & Number.isSafeInteger()
Real-Life Use Case: Validating form inputs. 
Imagine building an online store where a user can buy items, but they try to buy 2.5 tickets. 
You can check if the quantity is a clean, whole integer.

Real-life example:
let ticketsToBuy = 3;
if (!Number.isInteger(ticketsToBuy)) {
    console.log("Please enter a valid whole number of tickets.");
}

# Number.parseInt() & Number.parseFloat()
Real-Life Use Case: Extracting clean numbers from messy user inputs or CSS strings 
(like pulling the pixel value out of "100px").

Real-life example:
let cssWidth = "100.5px";
let actualWidth = Number.parseFloat(cssWidth); 
console.log(actualWidth); // 100.5

4. Instance Methods (Formatting Numbers)

.toFixed(digits)
Real-Life Use Case: E-commerce pricing. JavaScript math can sometimes give weird decimals (e.g., 0.1 + 0.2 equals 0.30000000000000004). You use .toFixed(2) to lock prices down to two decimal places for checkout screens.

Real-life example:
let rawPrice = 19.9;
let formattedPrice = rawPrice.toFixed(2); 
console.log(`$${formattedPrice}`); // "$19.90"

.toLocaleString()
Real-Life Use Case: Localizing dashboards. If you are building a banking app, you want numbers to display '
correctly depending on the user's country (adding commas or changing currency symbols).

Real-life example:
let bankBalance = 1500000;
console.log(bankBalance.toLocaleString("en-US")); // "1,500,000" */
//+++++++++++++++++++++++++++++++ Math +++++++++++++++++++++++++++++++++++++++++++++++

/* Math is a built-in library/object that has methods for mathematical operations */

//Math.abs(x):  Absolute (positive) value of a number. Math.abs(-4) -> 4
console.log(Math.abs(-4));  //4

//Math.round(x): Rounds to the nearest whole integer. Math.round(4.6) -> 5.
console.log(Math.round(4.6));   //5

//Math.ceil(x): "Ceiling" rounds a number up to the next integer. Math.ceil(4.2) -> 5.
console.log(Math.ceil(4.2));    //5
/* Real-Life Use Case: 
Pagination or Shipping Boxes. If you have 25 items and each box can hold 10 items, you can't ship 2.5 boxes. You always round up to need 3 boxes.
let totalItems = 25;
let itemsPerBox = 10;
let boxesNeeded = Math.ceil(totalItems / itemsPerBox); // 3 boxes
 */
//Math.floor(x): "Floor" rounds a number down to the next integer, dropping the decimals. Math.floor(4.9) -> 4.
console.log(Math.floor(4.9));   //4

//Math.min(...) / Math.max(...): Finds the lowest or highest value in a list of numbers.
console.log(Math.min(5,7,2));   //2
console.log(Math.max(5,7,2));   //7
/* Real-Life Use Case: E-commerce Price Filters or High Scores. Finding the cheapest item in a shopping cart or tracking a player's high score in an arcade gam
let itemPrices = [45, 12, 89, 30];
let cheapestPrice = Math.min(...itemPrices); //  */12
/* The Core Foundation: Math.random():  It always returns a floating-point (decimal) number that is greater than or equal to 0, and strictly less than 1 ($[0, 1)$).*/
console.log(Math.random());   //0.12285128140514634
/* Real-Life Use Case: Rolling a 6-sided die in a board game app.
// Generates a random whole number from 1 to 6
let diceRoll = Math.floor(Math.random() * 6) + 1; */

//*10 makes the new range: [0,10] . Largest number is 9.999...
console.log(Math.random() * 10);    //0.6586160195160462 or 5.312334078740081

//+ 1 to exclude 0 new range is: [1,11] . Larget is 10.999...
console.log((Math.random() * 10) + 1);    //7.981999886079864

//Truncating with Math.floor(): it will chopoff all the decimal values
console.log(Math.floor(Math.random() * 10) + 1);    //3



/* Q1) Generate number between 10 to 20 */
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min));  //18
/* here, (max - min + 1) -> The Range Span: Calculating 20 - 10 + 1 gives 11. 
   This represents the total number of possible integers in your pool (10, 11, 12, ..., 20).
   Math.random() * 11: Generates a decimal number from 0.0 to 10.999...
   Math.floor(...): Rounds it down, producing a whole integer from 0 to 10.
   + min -> The Shift: Finally, adding min (10) shifts the final result.







