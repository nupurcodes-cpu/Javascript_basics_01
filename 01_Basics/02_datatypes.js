let name = "Nupur"
let age = 22
let isemployed = false

/*Primitive
//number = 2 to power 53
//string => "" or '' or ``
//bigint => used to represent integers larger than Number can safely store. used in stock market.
    /* let population = 123456789012345678901234567890n
    Notice the n.
    That makes it a BigInt.
    */

//boolean => true/false
//null => standalone value  (means value intentionally does not exists)
     /* suppose your building Instagram
        and user hasn't uploaded a picture yet so,

        profilepicture = null;
        You are intentionally saying there is no picture yet.
    */

//undefined => variable declared but value not assigned
    /* let city;
       console.log(city);

       o/p : undefined 
    */

//symbol => unique (Used to create unique values.)
    /* let id1 = symbol("id")
       let id2 = symbol("id")

       id1 == id2 

       o/p : false
    */


/*Reference (Non Primitive)

//Array => strores multiple values of same datatype
    /* const heros = ["shaktiman", "Batman", "Naagraj"]

//object => stores multiple values of different datatypes
    /* let Student = {
                      name = "Nupur"
                      Age = 22
                      City = "Nashik"
                     }
   
Student
 ├── Name
 ├── Roll No
 ├── Branch
 ├── Marks
 └── Attendance 

//functions 
const myFunction = function(){
    console.log("Hello World");
    }
console.log(typeof myFunction)
*/

console.log(typeof "Nupur"); //string

console.log(typeof undefined); //undefined

console.log(typeof null);   //null datatype is Object (It's a Bug)

/* even though null is NOT an object.

This bug became part of the language,
and changing it now would break millions of existing websites.
So JavaScript keeps this behavior for backward compatibility.
*/

/* typeof operator result of each datatype
undefined = "undefined"
null = "object"    //the famous bug
boolean = "boolean"
number = "number"
string = "string"
symbol = "symbol"
object = "object"
array = "object"
function = "object-function" //its a function but under the hood object
*/
