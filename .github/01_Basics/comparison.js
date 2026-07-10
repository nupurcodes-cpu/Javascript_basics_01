// console.log(2 > 2)   //true
// console.log(2 >= 1)  //false
// console.log(2 < 1)   //false
// console.log(2 == 2)  //true
// console.log(2 != 1)  //true

// console.log("2" > 1)    //true
// console.log("2" == "2")  //true
// console.log("02" > 1)   //true

// console.log(null > 0)  //false here, null = 0  (comparison operator converts 'null -> Number' and then compares)
// console.log(null == 0) //false here, null = undefined  (equaliy operator doesn't convert)
// console.log(null >= 0) //true here, null = 0 again this is comparison 

// console.log(undefined == 0) //false here, no conversion xx
// console.log(undefined > 0)  //false bcoz, Number(undefined) = NaN
// console.log(undefined < 0)  //false Same

/* here, undefined = null
   then if Number(null) -> 0  then why 'undefined is !=0'  ??
   Because Number(undefined) -> NaN 
*/

// === (strict equality)
/*   === compares value + it's datatype    */
console.log("2" === 2) //false 2 & 2 are same but datatype different

/* null vs undefined
   null == undefined   //true
   null === undefined  //false
becoz, 
    typeof undefined;  //undefined
    typeof null;       //object //hisorical bug in javascript
*/