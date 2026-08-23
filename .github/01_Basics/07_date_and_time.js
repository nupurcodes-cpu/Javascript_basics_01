/* 1. The Core Split: Local vs. UTC Time

// Local Methods (get...() / set...()): 
These evaluate and modify date and time components based on the local system/browser time zone 
settings of the device running the code.

// UTC Methods (getUTC...() / setUTC...()): 
These evaluate and modify date and time components based on 
Coordinated Universal Time (UTC/GMT), ignoring local time zone offsets. This is crucial for 
backend databases, servers, and synchronizing global timestamps.

2. Detailed Breakdown of Date Components & Rules

// Year

Getters: getFullYear() returns a 4-digit year (e.g., 2026). Avoid using the deprecated getYear().
Setters: setFullYear(year) sets the year.

// Month (Zero-based Indexed)

Getters: getMonth() returns an integer from 0 to 11 (0 = January, 11 = December).
Setters: setMonth(monthIndex) updates the month. Rule: If you pass a value outside 0–11 (like 12), it rolls over into the next year automatically.

// Date (Day of the Month)

Getters: getDate() returns the day of the month from 1 to 31.
Setters: setDate(dayValue) changes the day. Rule: If you pass 0, it sets the date to the last day of the previous month. If you pass a number higher than the month's maximum days, it rolls over into the next month.

// Hours, Minutes, Seconds, and Milliseconds

Hours: Range is 0 to 23 (getHours() / setHours()). 0 is midnight, and 23 is 11 PM.
Minutes & Seconds: Range is 0 to 59 (getMinutes(), getSeconds(), etc.).
Milliseconds: Range is 0 to 999 (getMilliseconds() / setMilliseconds()).

// Day of the Week

Getters: getDay() (or getUTCDay()) returns a number from 0 to 6 representing the day of the week, where 0 is Sunday, 1 is Monday, and 6 is Saturday.
Setter: N/A (Does Not Exist). You cannot use a setDay() method because the day of the week is strictly calculated based on the calendar date—you must change the date itself to alter the day of the week.

3. Summary of Setter Behavior (Smart Overflow):

All set...() methods modify the Date object in place (mutating the original object) and return the 
updated timestamp. They automatically handle calendar overflows (e.g., if you add hours or days that 
push into the next month or year, JavaScript auto-adjusts the timeline seamlessly). */

// *************************************************************************************************************
// console.log("This is date and time tutorial");
// let now = new Date();
// console.log(now);   //2026-08-23T06:23:56.304Z

// let dt = new Date(1000);
// console.log(dt);    /* //1970-01-01T00:00:01.000Z   (In JavaScript, when you pass a single number into the 
// new Date() constructor, it treats that number as milliseconds that have passed since the Unix Epoch 
// (which is January 1, 1970, at 00:00:00 UTC).Because you passed 1000 milliseconds, you are asking 
// JavaScript for the time exactly 1,000 milliseconds (1 second) after the Unix Epoch began.) */
// /* 
// Why track time that way instead of just writing dates normally?
// Here is the real-world reason why computers use the Unix Epoch:

// 1. Computers Hate Words, But They Love Numbers
// Computers don't understand calendar concepts like months, time zones, leap years, or whether February has 28 or 29 days natively.
// If you tell a computer "August 23, 2026", it's just messy text.
// But if you say 1787539779000 (the current timestamp in milliseconds), it's just a single, pure number.
// Computers can store numbers, sort them, and do math with them instantly and without errors.

// 2. The Real-World Use Case: Universal Timestamps
// Imagine you are building a global app like YouTube or WhatsApp, and a user in India uploads a video at the exact same second a user in New York uploads one.
// If you saved their upload times as local text strings (like "12:00 PM"), it would cause massive chaos because of different time zones.
//  */
// console.log(Date.now()); // 1787467773319 (Prints the exact current timestamp in milliseconds)

// // let newDate = new Date("2029-09-30")
// // console.log(newDate);

// // let newDate = new Date(year, month,dDate, hours, minutes, seconds, millisseconds);
// let newDate = new Date(3020, 4,6,9,3,2,34)
// console.log(newDate);   //3020-05-06T09:03:02.034Z

// let yr = newDate.getFullYear();
// console.log("The year is ", yr);    //The year is  3020

// let date = newDate.getDate();
// console.log("The date is ", date);  //The date is  6

// let month = newDate.getMonth();
// console.log("The month is ", month);    //The month is  4

// let hours = newDate.getHours();
// console.log("The hour is ", hours);   //The hour is  9

// let day = newDate.getDay();
// console.log("The Day is ", day); //XX This is wronggg
// // How to get the actual name of the day as a word:
// // To turn that number into a text string like "Saturday", developers usually create 
// // an array (list) of days and use the number as an index:

// //Ex.1 (Print todays Day)
// let myDate = new Date();
// let dayNumber = myDate.getDay(); // Returns 6
// // Create an array where index 0 is Sunday, 1 is Monday, etc.
// let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// console.log("The Day is", daysOfWeek[dayNumber]); // Prints "Saturday"


// //Ex.2 (Print current month)
// let myMonth = new Date();
// let MonthNumber = myMonth.getMonth(); 
// console.log(MonthNumber);   // 7

// //Raw JavaScript number (0-11)
// let MonthoftheYear = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
// console.log("The Month is", MonthoftheYear[MonthNumber]); // Prints Aug


// //Set
// newDate.setDate(39);
// newDate.setMinutes(29);
// console.log(newDate);


//++++++++These methods are used to convert a Date object into various readable string formats so you can easily display them on a webpage or in the console.++++++++++++++++++
let myDate = new Date()
// console.log(myDate.toString());     //Sun Aug 23 2026 07:59:57 GMT+0000
// console.log(myDate.toDateString());    //Sun Aug 23 2026
// console.log(myDate.toLocaleString());   //8/23/2026, 8:01:26 AM

// console.log(typeof myDate);     //object 

// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString());  //Mon Jan 23 2023

let myCreatedDate = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate.toLocaleString());    //1/23/2023, 5:03:00 AM





