/* JavaScript Varibale: container for storing data, & it can be decalred in 4 way:
1. automatically-->
2. usingn var -->
3. using let --> 
4. using const -->

*/

/* using automaticaaly --> When you declare a variable without any keyword (like var, let, or const), JavaScript implicitly treats it as a var declared in the global scope (in non-strict mode).
 */
num1 = 10;
num2 = 20;
num3 = num1 + num2;
console.log("num3: ", num3);

num1 = 10;
num2 = 20;
num3 = num1 + num2;
console.log("num3: ", num3);

//Using var ➝ variables can be updated and re-declared  in the same scope

var num4 = 100; // Initial declaration and assignment
var num5 = 100; // Initial declaration and assignment
var num6 = num4 + num5;
console.log("Initial num6 use-var:", num6); // Output: 200

num4 = 300.33; // Update values
num5 = 4334.34; // Update values
num6 = num4 + num5;
console.log("Updated num6 use-var:", num6); // Output: 4634.67

var num4 = 100; // Re-declare
var num5 = 100; // Re-declare
var num6 = num4 + num5;
console.log("Re-declared num6 use-var:", num6); // Output: 200

//Using let ➝ variables can be updated but **cannot** be re-declared in the same scope

// Initial declaration and assignment
let num7 = 121.121;
let num8 = 312.2312;
let num9 = num7 + num8;
console.log("Initial num9 use-let:", num9); // Output: 433.3522

num7 = 32312.12312; // Update values
num8 = 12321.3213234; // Update values
num9 = num7 + num8; // Update values
console.log("Updated num9 use-let:", num9); // Output: updated sum

// ❌ Re-declaration using let in the same scope is not allowed
// let num7 = 1312.3232; // ❌ SyntaxError: Identifier 'num7' has already been declared
// let num8 = 21342.434;
// let num9 = num7 + num8;
// console.log("Re-declared num9:", num9);

// using const --> cannot update or re-declare in the same scope
const n1 = 123;
const n2 = 1232.3213;
const sum = n1 + n2;
console.log("Using - const: ", sum);

// Mixed example: using var / let / const
let aa = 100;
const bb = 200;
var cc = aa + bb;
console.log("aa:", aa);
console.log("bb:", bb);
console.log("cc:", cc);

/* JavaScript - Data Type: In JavaScript, data types are determined dynamically, meaning JavaScript is a dynamically typed language
 */

let x = 5; // number
let y = "hello"; // string
let z = true; // boolean
let a = null; // object (this is a known quirk)
let b = undefined; // undefined
let c = [1, 2, 3]; // object (array)
let d = { name: "John" }; // object

console.log("x:", x, "| type:", typeof x); // number
console.log("y:", y, "| type:", typeof y); // string
console.log("z:", z, "| type:", typeof z); // boolean
console.log("a:", a, "| type:", typeof a); // object (quirk for null)
console.log("b:", b, "| type:", typeof b); // undefined
console.log("c:", c, "| type:", typeof c); // object (array)
console.log("d:", d, "| type:", typeof d); // object

// Variable declaration and initializztion
let carName; // declaration(undefined)
carName = "Toyota"; //initialization (defined)
let busName = "Volvo"; // initialization (defined) during declaration
console.log("carName: ", carName);
console.log("busName: ", busName);

// One statement, many variables
let person = "Al-Amin",
  mbl = 01745157083,
  price = "10 Lakh Tk";
console.log("Name:", person + " | Mobile Number:", mbl + " | Price:", price);

// JavaScript Arithmetic
let summationValues = 5 + 10 + 20;
console.log("Summation: ", summationValues);

// string concatenated
let personName = "Mohammad" + " " + "Al" + " " + "Amin";
console.log("personName: ", personName);

// put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.
let xNumber = "5" + 2 + 3;
console.log("xNumber: ", xNumber);

// JavaScript Underscore (_): JavaScript treats underscore as a letter, identifiers containing _ are valid variable names
let _lastName = "Johnson";
let _x = 2;
let _100 = 5;
console.log("_lastName:", _lastName);
console.log("_x:", _x);
console.log("_100:", _100);

/* JavaScript and the Dollar Sign $: 
1. The dollar sign ($) is treated as a valid character in variable and function names.
2. It can be used at the beginning, middle, or end of an identifier.
3. Common in libraries like jQuery, where $ is used as a shortcut.
*/
let $ = "Hello World";      // $ as a variable
let $$$ = 2;                // multiple $ are allowed
let $myMoney = 5;           // $ in a variable name

console.log("$:", $);
console.log("$$$:", $$$);
console.log("$myMoney:", $myMoney);
