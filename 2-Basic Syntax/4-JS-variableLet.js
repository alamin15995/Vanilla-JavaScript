/* let:
1. Variables declared with let keyword, and Must be declared before use  
2. Cannot be redeclared in the same scope, but can be update ther value.
2. Block scope: 

*/




// Variables declared with let keyword, and Must be declared before use  
let num1;
num1 = 100;
console.log("num2: ", num1, "|| type: ", typeof num1);

let num2 = "Al-Amin";
console.log("num2: ", num2, "|| type: ", typeof num2);

num3 = 200;
console.log("num2: ", num3, "|| type: ", typeof num3);



// Cannot be redeclared in the same scope, but can be update ther value.
let num4 = 400;
console.log("num4: ", num4);
// let num4 = 404; //SyntaxError
num4= 404; // update can be possible
console.log("num4-update: ", num4);


//  Block scope 
var x=2;
console.log("x: ",x);
// let x=10; //SyntaxError
console.log("x: ",x);

{
    let x=20;
    // var x=21; //SyntaxError
    console.log("x: ",x);
}
console.log("x: ",x);