/* const:
1. cannot update, cannot re-declare
2. must assign value during declaration
3. block scope
4. use: array, function, object, RegExp declaration */




// const num1 = 10;
// console.log("num1: ", num1);

// // can't do this-->because must be assign a value when they are declare
// const num2; // SyntaxError
// num2=100; //TypeError

// const num3=300;
// const num3=333; // SyntaxError: :cannot be re-declare
// num3=300; //TypeError :cannot be re-assign
// num3=num3+200; // //TypeError :cannot be re-assign
// console.log("num3: ", num3);





// Block Scope
// var x = 2; //SyntaxError
// x = 2; //SyntaxError
// let x = 2; //SyntaxError
// x = 200; //SyntaxError
// const x = 10; //SyntaxError
// console.log("x-outside block: ", x);

// {
//   var x = 2; //SyntaxError
//   x = 2; //SyntaxError
//   let x = 2; //SyntaxError
//   x = 200; //SyntaxError
//   const x = 10; //SyntaxError
//   console.log("x-inside  block: ", x);
// }
// console.log("x-outside block: ", x);









/*use const: Constant-->Arrays, Objects, Function,RegExp 
1. const is a little misleading: It does not define a constant value. It defines a constant reference to a value.
2. Can change: elements of constant array, properties of constant object
*/


// const ar = [10, 20, 30, 40];
// console.log("ar: ", ar);

// ar = [1, 2, 3, 4]; // TypeError: Re-Assignment

// ar[1] = 200; //Allowed: modifying element
// console.log("Update-ar: ", ar);

// ar.push(50); //Allowed: adding new element
// console.log("Update-ar: ", ar);

// ar[3].push(400); // TypeError: ar[3] is a number, not an array

// /*The variable 'a' holds a constant reference to the array in memory:
// 1. the memory location for the array itself is constant, not the individual elements. */
// const a = [11, 22, 33, 44];

// /* The variable 'b' holds a constant reference to a primitive value (number):
// 1. For primitives: numbers or strings, the memory location itself is constant. */
// const b = 111;
// const c="Bangladesh";
