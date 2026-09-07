 function sayName(){
    console.log("N");
    console.log("U");
    console.log("P");
    console.log("U");
    console.log("R");
}
sayName();  
/*
N
U
P
U
R
 */

function add(num1, num2){
    console.log(num1 + num2);
    
}
add(3,5);   //8

function addNum(num1, num2){
    console.log(num1 + num2);
    
}
const result = addNum(3,5); 

console.log(result);    //undefined (Because the function doesn't return anything, JavaScript implicitly returns undefined when it finishes execution.)

//Instead return the value if we want to print using result
function add2Num( num1, num2){
    return num1 + num2;
}
const result1 = add2Num(3,7)
console.log(result1);   //10


/* function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage("Nupur"));   //Nupur just logged in
 */

/* function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage());    //undefined just logged in (Because we havent passed any value ) */

/* function loginUserMessage(username){
    if(username == undefined){
        console.log("Please enter the username");      
    }
    return `${username} just logged in`;
}
console.log(loginUserMessage());    //Please enter the username undefined just logged in (Here, we wneed to stop return part if if conditoin executes) */

/* function loginUserMessage(username){
    if(!username){
        console.log("please enter a username");
        return  //to stop execution after this        
    }
    return `${username} just logged in`;
}
console.log(loginUserMessage());    //please enter a username */

//Default value (here, if no value is passed then use default value, otherwise overrite the passed value) 
/* function loginUserMessage(username = "Sam"){    
    if(!username){
        console.log("please enter a username");
        return  //to stop execution after this        
    }
    return `${username} just logged in`;
}
console.log(loginUserMessage());    //Sam just logged in */


//Rest Parameters (Passing multiple values/parameters in the function)
/* function calculateCartPrize(num1){
    return num1
}
console.log(calculateCartPrize(2)); //2 (here, we just passed the single value, next we'll see how to pass multiple values) */

//Using Spread operator (...)
/* function calculateCartPrize(...num1){
    return num1
}
console.log(calculateCartPrize(20, 40, 200, 500));  //[ 20, 40, 200, 500 ] */

//another example
function calculateCartPrize(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrize(20, 40, 200, 500));  //[ 200, 500 ] (first 2 values got stored in val1 and val2, but we asked to return only num1)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Passing object in Function
const user = {
    username : "Nupur",
    price : 199
}

/* function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);    
}
handleObject(user)  //username is Nupur and price is 199 */

//another way  to pass object(no need to create object first, directly pass the onject as 'argument')
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);    
}
handleObject({
    username : "sam",
    price : 399
})          //username is sam and price is 399


//Passing Array in Function
const handleArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(handleArray));    //400

//another way  to pass array(no need to create array)
console.log(returnSecondValue([200, 400, 500, 1000]));  //400


