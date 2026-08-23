/* Master all Methods of string, then you'll complete the string topic, to see all the methods:
   go to browser -> inspect -> Declare the vriable, and run (You'll see it in Key-value pairs) -> Expand/click Prototype all methods will be visible
   String will be an Object, not an Array XX.
*/

//Old way to declare string
const name = "Nupur"
const repoCount = 50

console.log(name + repoCount + "value");  //output: Nupur50value (The Old Way: String Concatenation)

//Another method concatenate string using (The Modern Way: Template Literals)

console.log(`Hello may name is ${name} and my repo count is ${repoCount}`);  //Hello may name is Nupur and my repo count is 50
/* this modern method, Introduced in ES6, this method uses backticks (`) instead of single or double quotes.
   You can drop variables or expressions directly into the string by wrapping them in ${}.
   Readability: The code looks exactly like the final output sentence, making it much easier to read and maintain.

No Manual Spacing: You don't need to break the string apart and add + just to insert a space.

Multi-line Support: Standard strings require special characters like \n to break into a new line, 
but template literals respect actual line breaks inside the backticks. For example:

console.log(`This is line one.
This is line two.`);
*/

//Modern way to declare string (Creating a String as an Object)
const gameName = new String('Nupurnd') /* String  {'Nupurnd'}
                                          0: "N"
                                          1: "u"
                                          2: "p"
                                          3: "u"
                                          4: "r"
                                          5: "n"
                                          6: "d"
                                          length: 7
                                        */
                                       //[[prototye]]: string
console.log(gameName[0]);  //N
console.log(gameName.__proto__);  //{} We can't see all the methods here, refer the console methodto access methods at top.

console.log(gameName.length);   //7
console.log(gameName.toUpperCase()); //NUPURND
console.log(gameName.charAt(2));   //p

//methods to access parts of string
const newString = gameName.substring(0, 4) //substring(start, end)  //start from 'start' index, but doen't include 'end'.
console.log(newString);   //Nupu   
                                           //it ignores -ve signs and treat it as '0'.

const  anotherString = gameName.slice(-7, 4) //slice(start, end)   //here, -7 is 0 th index, -6 is 1st index and so on...
console.log(anotherString);   //Nupu         //and -1 as always pointing to the last character, no matter how long the word is.
                                             //length + -ve index = 0  (7 - 7 = 0)
                                             //fully supports -ve index values.


//method which removes/works on extra white-spaces and \n characters                                         
const str = "   foo  ";
console.log(str.trim());   //'foo'   //trime() removes whitespaces from both ends of str.

//method which replace
const url = "htps://nupur.com/nupur%20dange"

console.log(url.replace('%20', '-'))   //htps://nupur.com/nupur-dange

//method which check whether the substring exists anywhere in string?
console.log(url.includes('sundar'))     //false

//method which breaks a single string apart into an array of multiple strings, cutting it wherever it encounters a specified character (called the separator or delimiter).
const sent = "Nupur-is-smart"
console.log(sent.split('-'))   //[ 'Nupur', 'is', 'smart' ]


/* master rest all of the methods from the browser console and mdn website, and practice  suing new syntax (``).
