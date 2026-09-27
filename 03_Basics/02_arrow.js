//this- refers to current execution conext
const user = {
    username: "Nupur",
    price: 99,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);      /* {
                                    username: 'sam',
                                    price: 99,
                                    welcomeMessage: [Function: welcomeMessage]
                                } */
                
    }
}

user.welcomeMessage()   //Nupur, welcome to website 
user.username = "sam"   //we changed the context(values), to demonstrate that we dont hardcode, rather we can change the 
user.welcomeMessage()   //sam, welcome to website


/* this keyword ka kaam hota hai current execution context (yaani abhi ke object) ko refer karna.   
Jab aap function ke andar this.username likhte hain, toh JavaScript user object ke andar ki username property ko pakadta hai.  
Agar aap this nahi lagayenge, toh JavaScript ko samajh nahi aayega ki username variable kahan se lana hai
.this use karne ka fayda yeh hai ki function dynamic ho jata hai—woh hamesha us object ki latest value read karega 
jiske sath use call kiya gaya hai.  */

/* line Node. 13 par username ko "sam" isliye banaya gaya taaki yeh test/demonstrate kiya ja sake ki this kaise dynamically kaam karta hai:
Conclusion: Username ko change karke yeh dikhaya gaya hai ki this kisi value ko hardcode (fix) nahi karta. 
Jab bhi function run hoga, this object ki bilkul current/latest value hi pick karega.    */

console.log(this);     //{} (WE ARE RUNNING IN NODE, SO THERE'S NOTHING I GLOBAL CONTEXT, THEREFORE WE GOT EMPTY CONTEXT. OTHERWISE IN BROWSER WE WOULD GET WINDOW OBJECT)

// +++++++++++ using 'this' in 3 types of function ++++++++++++++++

/* function chai(){
    let username = "Nupur"
    console.log(this.username);
}

chai() */  //undefined (because we can't use 'this' in a function )


/* const chai = function () {  //function expression
    let username = "Nupur"
    console.log(this.username);    
}

chai() */  //undefined

//+++++++++++ arrow function +++++++++++++

const chai = () => {
    let username = "Nupur"
    console.log(this.username);
}

chai()  //undefined (neither in arow function we can use this because we BECAUSE WE DELARED USIGN LET KEYWORD)


/* 1. Regular Function Declaration (Lines 36-41):
Kyu undefined aaya?   
Standalone regular function ke andar this Global Object (Window/Global) ko refer karta hai.   
let username = "Nupur" ek local variable hai, yeh global object ka part nahi banta.   
Isliye this.username global object par username dhoondhta hai, jo nahi milta aur undefined deta hai. 

2. Function Expression (Lines 44-49):
Kyu undefined aaya?   
Chahe function declaration ho ya function expression, dono ka runtime behavior this ke maamle mein same hota hai 
jab unhe bina kisi object ke directly call kiya jaye.
Yahan bhi this global context ko point karta hai jisme username property nahi hai.

3. Arrow Function (Lines 53-58):
Kyu undefined aaya?   
Arrow Functions ke paas apna khud ka this nahi hota.
Arrow function apne outer (lexical) scope se this borrow karta hai.
Yahan outer scope top-level/global environment hai, jisme username naam ki koi property this par exist nahi karti, isliye yahan bhi output undefined hi aata hai. */



//++++++++++ understanding pure arrow functions ++++++++++++++

//() => {} 

// this is arrow function, but hold it in a variable

const addTwo = (num1, num2) => {
    return num1 + num2 
}

console.log(addTwo(3,4));   //7

//implicit return if there's one expression 
 const addTwo = (num1, num2) => (num1 + num2 )          //yaha () use kiya toh 'return' ki jaroorat nhi hai, if {} use kiya toh 'return' likhna padega. Very useful in react. 

 console.log(addTwo(3,4));  //7

 //anoter example of explicit return of object
 const addTwo = (num1, num2) => ({username: "nupur"})   // here, if we didn't wrap () then it will not work

 console.log(addTwo(3,4));  //{ username: 'nupur' }
 


 //function use in arrays
 const myArray = [2,5,3,7,8]
 myArray.forEach(() => {})      //forEach array ke har ek element par baari-baari loop chalane (iterate karne) ke liye use hota hai.Iske andar hum ek callback function bhejte hain, jo array ke har item par execute hota hai.

 // Har number ko print karne ke liye:
myArray.forEach((num) => {
    console.log(num);
}); 
/* 2
   5
   3
   7
   8 */



