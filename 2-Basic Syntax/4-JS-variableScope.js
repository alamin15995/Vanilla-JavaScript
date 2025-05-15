/*  Global Scope: A variable is in global scope if it is declared outside of any function or block.
1. It is accessible anywhere in the script. */

var x = 10; // global scope

function show() {
  console.log(x); // accessible here
}
console.log(x); // accessible here too

/*  Function Scope: A variable is in function scope if it is declared inside a function.
1. It is only accessible within that function */

function test() {
  var y = 20; // function scope
  console.log(y); // accessible here
}
// console.log(y); // SyntaxError: y is not defined


/*  Block Scope: 
1. A block is anything inside { } — such as in if, for, while, or standalone blocks.
2. A variable has block scope if it's declared inside a block using let or const.
3. It means the variable is only accessible within that block.*/

// {
//   let a = 10;
//   const b = 20;
//   console.log(a); // 10
//   console.log(b); // 20
// }
// console.log(a); // Error: a is not defined
// console.log(b); // Error: b is not defined


// Global declarations
var x = 1;
let y = 2;
const z = 3;

console.log("Outside block - x:", x);
console.log("Outside block - y:", y); 
console.log("Outside block - z:", z); 

{
  // Block scope
  var x = 10; // This will update the global 'x'
  let y = 20; // This is a new block-scoped 'y'
  const z = 30; // This is a new block-scoped 'z'

  console.log("Inside block - x:", x); // global 'x' is updated
  console.log("Inside block - y:", y); // new block-scoped
  console.log("Inside block - z:", z); // new block-scoped
}

console.log("After block - x:", x); // affected by block
console.log("After block - y:", y); // unchanged, outer 'y'
console.log("After block - z:", z); // unchanged, outer 'z'