// Fixed values (Literals)
document.getElementById("fixed_1").innerText =
  "Fixed values/literals with decimal: " + 100.243;
document.getElementById("fixed_2").innerText =
  "Fixed values/literals without decimal: " + 100;
document.getElementById("fixed_3").innerText =
  "Fixed values/literals: string with single quotation: " + "Jhon";
document.getElementById("fixed_4").innerText =
  "Fixed values/literals: string with single quotation: " + "Doe";

// Variable using var
var x_var; // declare the variable
x_var = 6; // assign a value
document.getElementById("var_1").innerHTML = "x = " + x_var;

// Arithmetic Operation
var a = 10;
var b = 20;
var c = a * b + 10;
console.log("c: ", c);
document.getElementById("opt1").innerHTML = "Math-Equ: (a * b) + 10 = " + c;

// JavaScript Expressions
var x_exp = 100;
document.getElementById("exp1").innerHTML = "(5 * 10) = " + 5 * 10;
document.getElementById("exp2").innerHTML = "(x * 10) = " + x_exp * 10;
document.getElementById("exp3").innerHTML = "Name: " + "Jhon " + "Doe";

// JavaScript Statements
let num4, num5, num6; // Statement 1: Declare variables
num4 = 50; // Statement 2: Assign value to num4
num5 = 60; // Statement 3: Assign value to num5
num6 = num4 + num5; // Statement 4: Calculate sum

// Statement 5: Output the result
document.getElementById("demo").innerHTML = "The value of num6 is " + num6;

// JavaScript Keywords - using var
var x, y, z; // declare variables
x = 10;
y = 20;
z = x + y;
console.log("z-use var: ", z);
document.getElementById("key1").innerHTML = "z-use var: " + z;

// JavaScript Keywords - using let
let num1, num2, num3; // declare variables using let
num1 = 10;
num2 = 20;
num3 = num1 + num2;
console.log("num3-use let: ", num3);
document.getElementById("key2").innerHTML = "num3-use let: " + num3;

// JavaScript Comments--- > it's a single line commnet

/* statemt 1
   statement 2
   statement 3 */

// JavaScript Identifiers / Names

// var 10name=100; -->  it's a wrong convention
// console.log("10name: ", 10name);

// JavaScript Identifiers / Names

// Valid variable names
var $number1 = 100;
var _number1 = 200;
var firstName = 1111; // lowerCamelCase
var FirstName = 2222; // UpperCamelCase (PascalCase)
var first_last = 3333; // snake_case

// Console logs
console.log("$number1: ", $number1);
console.log("_number1: ", _number1);
console.log("firstName: ", firstName);
console.log("FirstName: ", FirstName);
console.log("first_last: ", first_last);

// Output to HTML
document.getElementById("$number1").innerHTML = "$number1: " + $number1;
document.getElementById("_number1").innerHTML = "_number1: " + _number1;
document.getElementById("firstName").innerHTML = "firstName: " + firstName;
document.getElementById("FirstName").innerHTML = "FirstName: " + FirstName;
document.getElementById("first_last").innerHTML = "first_last: " + first_last;
