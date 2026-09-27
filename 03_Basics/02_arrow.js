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
