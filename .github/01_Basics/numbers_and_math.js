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
//go in browser and create number as object and you;ll see all Number methods.

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

//+++++++++++++++++++++++++++++++ Math +++++++++++++++++++++++++++++++++++++++++++++++

/* Math is a built-in library/object that has methods for mathematical operations */

//Math.abs(x):  Absolute (positive) value of a number. Math.abs(-4) -> 4
console.log(Math.abs(-4));  //4

//Math.round(x): Rounds to the nearest whole integer. Math.round(4.6) -> 5.
console.log(Math.round(4.6));   //5

//Math.ceil(x): "Ceiling" rounds a number up to the next integer. Math.ceil(4.2) -> 5.
console.log(Math.ceil(4.2));    //5

//Math.floor(x): "Floor" rounds a number down to the next integer, dropping the decimals. Math.floor(4.9) -> 4.
console.log(Math.floor(4.9));   //4

//Math.min(...) / Math.max(...): Finds the lowest or highest value in a list of numbers.
console.log(Math.min(5,7,2));   //2
console.log(Math.max(5,7,2));   //7

/* The Core Foundation: Math.random():  It always returns a floating-point (decimal) number that is greater than or equal to 0, and strictly less than 1 ($[0, 1)$).*/
console.log(Math.random());   //0.12285128140514634

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







