// chapter 21

// 1
// var userInput = "HAMMAD";
// var sec = userInput.toLowerCase();
// console.log(sec)

// 2
// var x = "HAMMAD" .toLowerCase()
// console.log(x)

// 3
// var y = "hammad" .toUpperCase()
//  console.log(y)

// 4
// let a = "HAMMAD";
// let b = a.toLowerCase()
// console.log(b)

// 5
// var a = ["HAMMAD"];
// var b = a[0].toLowerCase()
// console.log(b)

// 6
// var a = "hammad" .toUpperCase()
// alert("upper case version")

// 7
// var a = "kaRacHi"
// var b = a.charAt(0).toUpperCase() + a.slice(1).toLowerCase();
// console.log(b)

// chapter 22 to 25

// 1
// var a = "captain"
// var b = a.slice(1,3);
// console.log(b)

// 2
// var a = "hammad"
// var b = a.length;
// console.log(b)

// 3
// var animal = "elephant"
// var seg = animal.slice(1,5)
// console.log(seg)

// 4
// var a = "hamamd"
// var b = a.length;
// console.log(b)

// 5
// var a = "hammad"
// var b = a.length;
// var c = a.slice(1,-3)
// console.log("number of character",b)
// console.log("Sliced  character",c)

// 6
// var a = "To be or not to be"
// var b = a.indexOf("be")
// console.log(b)

// 7
// var a = "To be or not to be"
// var b = a.lastIndexOf("be")
// console.log(b)

// 8
// var a = "to be go or not be"
// var b = "go"
// var c = a.lastIndexOf(b)
// console.log(c)

// 9
// var indxNum = 8
// var str = "hammad"
// if(indxNum >= 0 && indxNum < str.length){
// console.log("answer is correct")
// }else{
//     console.log("answer is not correct")

// 10
// var a = "abcde"
// var b = a.charAt(2)
// console.log(b)

// 11
// var a = "abcdefghijklmnopqrstuvwxyz"
// var cha = a.charAt(10);
// console.log(cha)

// 12
// var a = "hammad"
// var b = a.charAt(a.length -1)
// console.log(b)

// 13
// var a = "hammadmemon"
// var b = a.charAt(a.length -7)
// console.log(b)

// 14
// var checking = "Junction"
// if(checking.length >= 3 &&  checking.charAt(2) === "n"){
//     console.log("your password is matched "+checking)
// }else{
//     alert("your answer is not correct")
// }

// 15
// // Declare an array beforehand
// var charArray = [];

// // The string represented by the variable
// var reply = "no, no, no, this is not the answer.";

// // Replace the first instance of "no" with "yes"
// var revisedReply = reply.replace("no", "yes");

// // Loop through all characters of the string and assign each character to an element of the array
// for (let i = 0; i < reply.length; i++) {
//     charArray[i] = reply.charAt(i);
// }

// console.log(charArray);
// console.log(revisedReply);

// 16
// var str = "1,2,3,4,5,6,7";
// var value = str.replace("1","one")
// console.log(value)

// 17
// var a = "hammad"
// var b = a.replace("m","d","a")
// console.log(b)

// Chapter26

// // explanation
// Absolutely! Let's delve into the differences between Math.round(), Math.ceil(), and Math.floor() in JavaScript:

// Math.round():
// Math.round() rounds a number to the nearest integer.
// When the fractional part of the number is .5 or greater, Math.round() rounds up. Otherwise, it rounds down.
// Example: Math.round(3.7) will return 4, while Math.round(3.2) will return 3.
// Math.ceil():
// Math.ceil() always rounds a number up to the nearest integer, regardless of the fractional part.
// It essentially rounds the number towards positive infinity.
// Example: Math.ceil(3.2) will return 4, Math.ceil(-3.7) will return -3.
// Math.floor():
// Math.floor() always rounds a number down to the nearest integer, regardless of the fractional part.
// It essentially rounds the number towards negative infinity.
// Example: Math.floor(3.7) will return 3, Math.floor(-3.2) will return -4.
// In summary:

// Math.round() rounds to the nearest integer.
// Math.ceil() always rounds up.
// Math.floor() always rounds down.
// Each function serves its purpose depending on the specific rounding behavior you require.

// 1
// var a = 7;
// var b = Math.round(a);
// console.log(b)

// 2
// var origNum = 9.8;
// var roundNum = Math.ceil(origNum)
// console.log(roundNum)

// 3
// var origNum = 8.7;
// var roundDown = Math.floor(origNum)
// console.log(roundDown)

// 4
// round function explain with code
// var round1 = 5.3;
// var rounda = Math.round(round1)
// console.log("Your round value is " + rounda)

// var round2 = 5.6;
// var roundb = Math.round(round2)
// console.log("Your round value is " + roundb)

// 5
// var rounda = 0.5;
// var roundb = Math.round(rounda)
// console.log(roundb)

// chapter 27

// 1
// var a = Math.random()
// var b = Math.floor(a * 50) +1;
// console.log(b)

// 2

// var a = Math.random();
// console.log(a)

// 3

// dice function
// var a = Math.floor(Math.random()*6)+1
// console.log(a)

// 4
// head & tail
// var a =  Math.floor(Math.random()*2)+1;
// if (a == 1){
//     console.log("head")
// }else{
//     console.log("tail")
// }

// chapter 28 & 29

// 1
// var a = "457";
// var b = +a;
// console.log(b)

// 2
// var a = "6788"
// function stringToIntegar(a){
//     return parseInt(a);
// }
// console.log(a)

// 3
// var a ="3.13"
// var b = parseFloat(a);
// console.log(b)

// 4
// var a = "345"
// function isConvertibleToDecimal(str) {
//     return !isNaN(parseFloat(str));
// }

// // Test
// console.log(isConvertibleToDecimal(a)); // Output: true
// console.log(isConvertibleToDecimal("555"));  // Output: false

// 5
// let number = 123;
// let str = number.toString(); // Convert number to string

// let number = 456;
// let str = '' + number; // Convert number to string using concatenation

// 6
// var a = 42;
// function ConvertToString(a){
//  var b = a.ConvertToString();
//  return b ;
// }

// 7

// var a = "3.14"
// var b = parseInt(a)
// console.log(b)

// let decimalString = "3.14";
// let roundedNumber = Math.round(parseFloat(decimalString)); // Round to nearest integer
// console.log(roundedNumber); // Output: 3

// // OR

// let integerNumber = Math.floor(parseFloat(decimalString)); // Round down to the nearest integer
// console.log(integerNumber); // Output: 3

// chapter 30

// 1

// var a = 78.343424;
// var b = a.toFixed(4) .toString();
// console.log(b)

// 2
// var a = 78.343424;
// var b = Number(a.toFixed(2))
// console.log()

// 3

// var num = 37.3232
// if (num.toFixed(2).toString().length > 4) {
//     console.log("your code")
// }

// 4
// var a = 12.34353455;
// alert(a.toFixed(2).toString()+"your answer")

// chapter 31 to 34

// 1
// var a = new Date();
// console.log(a)

// 2
// var a = new Date() .toString();
// console.log(a)

// 3

// var day = new Date() .getDay();
// console.log(day)

// 4
// var a = new Date();
// var b = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// var c = a.getDay();
// var dayNames = b[c];
// alert("Today is " + dayNames)

// 5
// var now = new Date(); // Get the current date and time

// // Extracting date components
// var year = now.getFullYear(); // Get the full year (e.g., 2024)
// var month = now.getMonth(); // Get the month (0-11, where 0 is January)
// var date = now.getDate(); // Get the day of the month (1-31)
// var day = now.getDay(); // Get the day of the week (0-6, where 0 is Sunday)
// var hours = now.getHours(); // Get the hour (0-23)
// var minutes = now.getMinutes(); // Get the minutes (0-59)
// var seconds = now.getSeconds(); // Get the seconds (0-59)
// var milliseconds = now.getMilliseconds(); // Get the milliseconds (0-999)

// // Alerting the extracted date and time components
// alert("Year: " + year +
//       "\nMonth: " + month +
//       "\nDate: " + date +
//       "\nDay: " + day +
//       "\nHours: " + hours +
//       "\nMinutes: " + minutes +
//       "\nSeconds: " + seconds +
//       "\nMilliseconds: " + milliseconds);

// 6

// var a = new Date("2020,11,5")
// console.log(a)

// 7
// var previous = new Date("1992,2,2")
// console.log(previous)

// 8
// alert( alert(new Date(1980, 0, 1).getTime()))

//  9
// Create a Date object
// var myDate = new Date();

// // Change the year to a new value (e.g., 2025)
// myDate.setFullYear(2025);
// console.log(myDate)

// 10
// // Define the date you want to work with
// var date = new Date('2024-05-09'); // For example, May 9, 2024

// // Get the current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
// var currentDayOfWeek = date.getDay();

// Calculate the difference in days to shift the date to the desired day of the week
// For example, if you want to change the day to Wednesday (3), and the current day is Monday (1),
// you need to add 2 days to reach Wednesday.
// var desiredDayOfWeek = 3; // Wednesday
// var difference = desiredDayOfWeek - currentDayOfWeek;

// // Add the difference in days to the current date
// date.setDate(date.getDate() + difference);

// // Now 'date' holds the same week but with the desired day of the week
// console.log(date); // Output: Wed May 10 2024 00:00:00 GMT+0000 (Coordinated Universal Time)
// // Define the date you want to work with
// var date = new Date('2024-05-09'); // For example, May 9, 2024

// // Get the current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
// var currentDayOfWeek = date.getDay();

// // Calculate the difference in days to shift the date to the desired day of the week
// // For example, if you want to change the day to Wednesday (3), and the current day is Monday (1),
// // you need to add 2 days to reach Wednesday.
// var desiredDayOfWeek = 3; // Wednesday
// var difference = desiredDayOfWeek - currentDayOfWeek;

// // Add the difference in days to the current date
// date.setDate(date.getDate() + difference);

// // Now 'date' holds the same week but with the desired day of the week
// console.log(date); // Output: Wed May 10 2024 00:00:00 GMT+0000 (Coordinated Universal Time)
















