// // An empty object (“empty cabinet”) can be created using one of two syntaxes:

// let user = new Object(); // "object constructor" syntax
// let user2 = {};  // "object literal" syntax

// // object literals
// const mySym = Symbol("Key1")    //Symbol declaration

// const JsUser = {
//     name : "Nupur",
//     "full name" : "Nupur Dange",
//     [mySym] : "mykey1",
//     age : 22,
//     location : "Nashik",
//     email : "nupurd@gmail.com",
//     isLoggedIn : false,
//     lastLoginDays : ["Monday", "Saturday"],
// }

// //diff betwn dot notation (.) and bracket notation [...],specifically regarding how keys are interpreted.
// console.log(JsUser.email);  //nupur@gmail.com (dot notation automatically treats whatever follows the dot as a literal string key name)
// console.log(JsUser["email"]);  //nupur@gmail.com (When you use bracket notation without quotes, JavaScript assumes email is a variable.)

// console.log(JsUser["full name"]);  //you can never accces this using dot(.)

// //now a tricky interview Q) make a Symbol(mySym) and put it in object and access it, with correct syntax.
// //see Line12 for the correcrt syntax
// console.log(JsUser[mySym]); //mykey1

// //Now changing the value of the existing key
// JsUser.email = "dange@chatgpt.com"      //only using this '=' sign you can override the value.
// console.log(JsUser.email);  //dange@chatgpt.com

// //But you want to never apply changes to the object then you can freeze the object
// //Object.freeze(JsUser)   //Now you cant change anything inside the JsUser Object

// //check
// JsUser.email = "nupur@chatgpt.com"  //(it wont throw error btw)
// console.log(JsUser.email);  //dange@chatgpt.com (it will show previous one only)

// console.log(JsUser);    /*   name: 'Nupur',
//                             'full name': 'Nupur Dange',
//                             age: 22,
//                             location: 'Nashik',
//                             email: 'dange@chatgpt.com',
//                             isLoggedIn: false,
//                             lastLoginDays: [ 'Monday', 'Saturday' ],
//                             Symbol(Key1): 'mykey1'     (see its showing that it's a symbol1 Key!!!)
//                             }                            
// */

// //To remove a property, we can use the delete operator:
// delete JsUser.age;  //First ensure that the object is not freeze, haha!
// console.log(JsUser); /* {
//                         name: 'Nupur',
//                         'full name': 'Nupur Dange',
//                         location: 'Nashik',             //See age is  deleted
//                         email: 'nupur@chatgpt.com',
//                         isLoggedIn: false,
//                         lastLoginDays: [ 'Monday', 'Saturday' ],
//                         Symbol(Key1): 'mykey1'
//                     } */

// //creating function inside object
// JsUser.greeting = function(){
//     console.log("helo JS User");
// }
// console.log(JsUser.greeting());  //undefined(The return value: Because your greeting function doesn't have a return statement, it implicitly returns undefined.)

// //rectifying the mistake(Don't do console log)
// JsUser.greeting = function(){
//     return "hello JS User"  //hello JS User
// }
// console.log(JsUser.greeting());  //hello JS User and undefined
// console.log(JsUser.greeting);   //[Function (anonymous)] ("Hey, this is a function, and it doesn't have a name.")

// //accessing object key in a function
// JsUser.greeting2 = function(){
//     return `hello JS User, ${this.name}` //hello JS User, Nupur 
//     }

//******************************************************************************************************************************* */
//Single Object: A singleton object is a design pattern concept where a class or an object can only ever be instantiated or created once.
// No matter how many times you try to create a new instance of it throughout your application, it will always return the exact same single instance (the same reference in memory)
//U can make singleton object as a costructor only and not object literal

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);    //{ id: '123abc', name: 'Sammy', isLoggedIn: false }

//object nesting (onject within object)
const regularuser = {
    email : "soham@gamil.com",
    fullname : {
        userfullname : {
            firstname : "Nupur",
            lastname : "dange"
        }
    }
}
console.log(regularuser.fullname);  //{ userfullname: { firstname: 'Nupur', lastname: 'Dange' } }
console.log(regularuser.fullname.userfullname.lastname);    //dange

//we use ? for protection, checks this variable exits, when we fetch data from api(we'll seethis later in depth)
console.log(regularuser.fullname?.userfullname.lastname);   //dange


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
//and when we combine it gves same array problem, object ke andar object see below,
// const obj3 = {obj1, obj2}
//console.log(obj3);  //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

//here comes, Object.assign() : Copy the values of one object to target object
const obj3 =  Object.assign({}, obj1, obj2); //Use {}, even if you forget gives same ans(optional parameter), its a good practice, becoz {} acts as a target and rest after a source (useful when merging multiple objects together)
console.log(obj3);  //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
//if not used {} then all values will be stored in obj1 (means 1st object encoutered)

//But at the end aap Object.assign koo bhi kam hi use krenge, then we will as usual use drop operator[...]
const obj4 = {...obj1, ...obj2}     //like we drop a glass, it spreads out
console.log(obj4);      //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//Another syntax you'll use whe you deal with database
//you will get 'Array of objects'
const users = [
    {
        id: 1,
        email: "np@gmail.com"
    },
    {
        id: 1,
        email: "np@gmail.com"
    },
    {
        id: 1,
        email: "np@gmail.com"
    }
]
console.log(users[1].email);    //np@gmail.com (as it is array and we want 1 index object value)

//Object.keys  &  Object.values (very useful while dealing with database)
console.log(Object.keys(tinderUser));  //[ 'id', 'name', 'isLoggedIn' ] (Object ke saare keys ko nikal kar ek array ke andar return kar deta hai.)
console.log(Object.values(tinderUser)); //[ '123abc', 'Sammy', false ] (Object ke andar jitni bhi values stored hoti hain unhe nikal kar ek array mein return kar deta hai.)

//method Object.hasOwnProperty(Key): Determines whether an object has a property with the specified name/key.
console.log(tinderUser.hasOwnProperty('isLoggedIn'));   //true

//You can see more Object methods usign browser console 

//****************************************************************************************************************** */
 