let name = "Nupur"
let age = 22
let isemployed = false

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

//object => stores multiple values
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
*/

console.log(typeof "Nupur"); //string

console.log(typeof undefined); //undefined

console.log(typeof null);   //null datatype is Object (It's a Bug)

/* even though null is NOT an object.

This bug became part of the language,
and changing it now would break millions of existing websites.
So JavaScript keeps this behavior for backward compatibility.
*/