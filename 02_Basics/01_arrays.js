//Arrays: A single variable holds multiple items with mix of different datatypes
// The size of array in javascript is 'resizable'

// arrays banane ke do alag tareeqe
//1. const myArr = [] //(Literal Syntax - Sabse Best)
/* 
Kya ho raha hai: Yeh array banane ka sabse aam aur standard tareeqa hai (isse array literal kehte hain).
isliye index 0 par kuch bhi nahi hai, aur isiliye output undefined aata hai.
 */
// console.log(myArr[0]);  //undefined

//2. const myArr2 = new Array(1, 2, 3, 4) //(Constructor Syntax)
/* Kya ho raha hai: Yeh new keyword ka use karke array object banane ka dusra tareeqa hai. 
Isme aap parenthesis () ke andar values pass karte hain.

Iska result ek naya array banega jisme elements honge: [1, 2, 3, 4].*/
const myArr2 = new Array(1,2,3,4) 
/* 
Dono mein antar kya hai?
[] Literal Syntax ko hamesha recommend kiya jata hai kyunki yeh clean, fast, aur padhne mein aasan hoti hai.

new Array() thoda lamba tareeqa hai aur zyadatar log isko avoid karte hain 
(khaas kar tab jab aapko ek hi number pass karna ho, kyunki wahan yeh confusion paida kar sakta hai).
 */

/* 
In JavaScript, when you copy an array, the difference between a shallow copy and 
a deep copy comes down to how they handle nested data (arrays or objects inside the array).

Deep copy aur shallow copy JavaScript mein arrays (ya objects) ko copy karne ke do alag tareeqe hain. 
Yeh is baat par depend karta hai ke andar nested data (yani array ke andar aur array/object) hai ya nahi.

1. Shallow Copy
A shallow copy creates a new array, but copies the references to any nested objects or arrays inside it. 
If you change a nested item in the copy, it will accidentally change the original array too!

Problem kya hoti hai? 
Agar aapne copy kiye hue array ke andar ke nested array mein kuch badlaav kiya, toh woh original array mein bhi change ho jayega!

Kaise banta hai? 
Spread operator (...), slice(), ya Array.from() se.

Example:
let original = [1, 2, [3, 4]];
let shallowCopy = [...original];

// Changing a nested array affects BOTH
shallowCopy[2][0] = 99;
console.log(original[2]); // [99, 4] -> Uh oh, original changed!

2. Deep Copy (Puri tarah se naya aur independent clone)
A deep copy creates a completely independent clone of the array and all nested data. 
Changing anything in the deep copy will never affect the original array.

How it happens: 
You can use modern built-in methods like structuredClone(), or older workarounds like JSON.parse(JSON.stringify(array)).

Example:
let original = [1, 2, [3, 4]];
let deepCopy = structuredClone(original);

// Changing a nested array ONLY affects the copy
deepCopy[2][0] = 99;
console.log(original[2]); // [3, 4] -> Original remains safe! */

//creating array in browser console and we will see the array as an object and using JavaScript ka prototype mechanism hai,
// Iska matlab hai ki aapka yeh array ek standard Array object hai, isiliye iske paas pehle se built-in methods 
// (jaise .push(), .pop(), .map(), etc.) available hain jo aap use kar sakte ho.

//++++++++++++++++++++++++++++++++++++++++ Array Methods +++++++++++++++++++++++++++++++++++

const array = [1,2,3,4];

// 1. Adding & Removing Elements

// push(): Array ke last mein ek ya ek se zyada naye elements jodta hai aur array ki nayi length return karta hai.
array.push(6)
console.log(array); //[ 1, 2, 3, 4, 6 ]


// pop(): Array ke last element ko hata deta hai (delete kar deta hai) aur us element ko return karta hai.
array.pop(6)
console.log(array); //[ 1, 2, 3, 4]

// unshift(): Array ke shuruat (beginning) mein ek ya ek se zyada naye elements jodta hai.
array.unshift(9)
console.log(array); //[9, 1, 2, 3, 4]

// shift(): Array ke shuruat wale pehle element ko hata deta hai aur return karta hai.
array.shift()    //no need to pass anything inside , it will ignore
console.log(array);   //[1, 2, 3, 4]

// 2. Searching & Finding

// indexOf(): Kisi element ki index value dhoondhta hai. Agar element na mile, toh -1 return karta hai.
console.log(array.indexOf(3));   //2 (if exist then return index , if not then return -1 see next)
console.log(array.indexOf(19));  //-1

// includes(): Check karta hai ki array ke andar koi specific element maujood hai ya nahi (true ya false return karta hai).
console.log(array.includes(9)); //false (gives boolean value)

// find(): Ek callback function ke base par array ka pehla element dhoondh kar deta hai jo condition ko match kare.
// let numbers = [5, 12, 8, 130];
let found = numbers.find(num => num > 10);
console.log(found); // Output: 12 (pehla element jo 10 se bada hai)

// findIndex(): find() ki tarah hi kaam karta hai, lekin element ki value ki jagah uska index number return karta hai.
// let numbers = [5, 12, 8, 130];
let index = numbers.findIndex(num => num > 10);
console.log(index); // Output: 1 (kyunki index 1 par value 12 hai)

// 3. Transforming & Combining

// map(): Array ke har ek element par ek function chalata hai aur ek naya array return karta hai (transformed values ke sath).
let numbers = [1, 2, 3];
let doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6]

// filter(): Ek condition ke base par elements ko chanta (filter) hai aur jo elements condition pass karte hain, unka naya array banata hai.
//let numbers = [1, 2, 3, 4, 5];
let evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // Output: [2, 4]

// reduce(): Array ke sabhi elements ko milakar ek single value (jaise sabka sum ya total) calculate karta hai.
//let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // Output: 10

// concat(): Do ya do se zyada arrays ko aapas mein jodkar ek naya combined array banata hai.
//if we dont use concat then, let's see what happens:
const marvel_heroes = ['Spiderman', 'IronMan', 'hulk'];
const dc_heroes = ['superman', 'batman', 'flash'];
// and use push to join these two array:
marvel_heroes.push(dc_heroes)

console.log(marvel_heroes);    //['Spiderman', 'IronMan', 'hulk', ['superman', 'batman', 'flash']];
//See it made nested array and to acces the elements we had to do:
console.log(marvel_heroes[3][1]);     //batman
//therefore, we use concat()

let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = arr1.concat(arr2);
console.log(combined); // Output: [1, 2, 3, 4]


//Using spread operator (...) instead of concat() 
// Spread Operator (...) kisi bhi array ke andar ke elements ko bahar nikal kar "faila" (spread) deta hai.Iska use karke hum purane .concat() method ko avoid kar sakte hain kyunki yeh code ko zyada saaf aur readable banata hai.
const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// Spread operator ka use karke combine karna:
const all_new_heros = [...marvel_heros, ...dc_heros];      
console.log(all_new_heros);     // Output: ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]
//this spread operator is also called drop, mean imagine when we drop a glass and it spreads out similarly the the spread operator spread every element evenly.

// flat(): Nested arrays (array ke andar array) ko khol kar ek single-level flat array bana deta hai.
let nestedArr = [1, 2, [3, 4, [5, 6]]];
let flatArr = nestedArr.flat(2); // 2 level tak deep flatten karega (we need to give number inside, which is the depth)
console.log(flatArr); // Output: [1, 2, 3, 4, 5, 6]

// 4. Slicing & Splicing

// slice(startIndex, endIndex): Original array ko bina badle, uska ek tukda (portion) nikal kar naye array mein deta hai.
let arr = [10, 20, 30, 40, 50];
let sliced = arr.slice(1, 4); // Index 1 se 3 tak
console.log(sliced); // Output: [20, 30, 40]

// splice(startIndex, deleteCount, itemsToAdd): Original array ke andar hi elements ko hata sakta hai, badal sakta hai, ya naye jod sakta hai (yeh original array ko change kar deta hai).
let arr = ["A", "B", "C", "D"];
arr.splice(1, 1, "X"); // Index 1 se 1 element hatao aur "X" dalo
console.log(arr); // Output: ["A", "X", "C", "D"]

//interview question; What's the difference between slice and splice (yehi pata chalta hai apne dhangse padhai kri hai ya nhi)
//Ans: Ek mein Range include hoti hain, ek mein nhi
const arr = [0, 1, 2, 3, 4, 5];
console.log(arr.slice(1,3));    //[1, 2]  (Yeh original array ko change nahi karta.Yeh ek naya array return karta hai (tukda kaat kar).Isme endIndex exclude hota hai.)
console.log(arr.splice(1,3));  //[1, 2, 3] (Yeh original array ko permanently modify (change) kar deta hai.Iska use array ke beech mein se elements hatane, naye jodne, ya replace karne ke liye hota hai.Iska dusra parameter count (kitne elements hatane hain) hota hai, range nahi!)
//slice() ka use tab karte hain jab aapko original array ko bina chhede sirf ek tukda nikalna ho.
//splice() ka use tab karte hain jab aapko actual array ke andar se elements ko kaat-chaant kar nikalna ya replace karna ho.

// 5. Sorting & Reversing (Kram mein lagana)

// sort(): Elements ko alphabetical ya ascending/descending order mein sort karta hai (original array ko modify karta hai).
let arr = [3, 1, 4, 2];
arr.sort();
console.log(arr); // Output: [1, 2, 3, 4]

// reverse(): Array ke elements ki sequence ko ulta (reverse) kar deta hai.
let arr = [1, 2, 3];
arr.reverse();
console.log(arr); // Output: [3, 2, 1]

// 6. Converting to String (Text mein badalna)

// join(): Array ke sabhi elements ko jod kar ek single string bana deta hai, beech mein aap koi bhi separator (jaise comma, dash, space) de sakte hain.
let fruits = ["Apple", "Banana", "Mango"];
let result = fruits.join(" - ");
console.log(result); // Output: "Apple - Banana - Mango"

// toString(): Array ko comma-separated string mein badal deta hai.
let arr = [1, 2, 3];
console.log(arr.toString()); // Output: "1,2,3"


/* 
Jab aap const myArr = [1, 2, 3] likhte hain, toh isko Array Literal kehte hain. Lekin iska matlab yeh nahi hai ki 
yeh koi alag cheez hai.

JavaScript mein ek Prototypal Inheritance ka jaadu hota hai:

Behind the Scenes Object:
Jaise hi aap array literal ([]) banate hain, JavaScript ka engine background mein automatically samajh jata hai ki 
yeh ek Array object hai.

Prototype Chain (Jaadui Link):
JavaScript ke har Array literal ke paas ek hidden link hota hai jo Array.prototype se juda hota hai. Isiliye, chahe aap [] likhein ya new Array() likhein, 
dono ko Array.prototype ke saare methods (push, map, join, etc.) automatically mil jaate hain. */

// .isArray()
console.log(Array.isArray("Nupur"));    //false (checks if its array or not)

// .from()
console.log(Array.from("Nupur"));   //['N', 'u', 'p', 'u', 'r'] 
// Use of Array.from() with map()
// Ek number dete hain aur usko double karke array banate hain
const numbers = Array.from([1, 2, 3], (x) => x * 2);

console.log(numbers);   // Output: [2, 4, 6]

//Use case in DOM manipulation
const paragraphs = document.querySelectorAll('p');  //p ka matlab HTML ka <p> (paragraph) tag hota hai.document.querySelectorAll('p') ek Web API method hai jo aapke poore HTML webpage par jitne bhi paragraphs (<p> tags) maujood hote hain, un sab ko dhoondh kar ek NodeList ke roop mein laakar de deta hai.
const realArray = Array.from(paragraphs);
// Ab aap is par araam se array methods chala sakte hain!
// document: Yeh aapke poore web page (HTML document) ko represent karta hai.
// querySelectorAll('p'): Yeh ek built-in Web API method hai. Iska kaam hota hai poore HTML page par nazar daalna aur jahan-jahan bhi <p> tag mile, un sab ko ek sath pakad kar le aana.


console.log(Array.from({name: "hitesh"})) // interesting
/* Kya ho raha hai: Yahan humne ek plain object {name: "hitesh"} pass kiya hai, jo ki ek array-like ya iterable object nahi hai.
Output kya aayega: Yeh ek khaali array ([]) return karega!Kyun? Kyunki Array.from() ko samajh nahi aata ki object ki keys (name) ko array mein kaise badle ya values ko kaise extract karein (jab tak ki hum Object.keys() ya Object.values() use na karein). Isiliye JavaScript isko ek empty array return kar deta hai, 
aur isliye iske aage comment mein // interesting likha gaya hai kyunki beginners aksar sochte hain ki yeh error dega ya object ki value utha lega. */


// .of()
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  //[100, 200, 300]   (Fark kya hai? Jab aapke paas alag-alag variables ya values hon aur aapko unko milakar ek naya array banana ho, toh aap Array.of(val1, val2, val3) ka use kar sakte hain. Yeh seedha un values ka ek array tayar kar deta hai.)
