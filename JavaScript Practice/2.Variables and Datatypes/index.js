// var age = 25;

// if(true){
//     console.log(age);
// }

// var is global scoped and function scoped but not block scoped
// var can be redeclaired that may create issues

var age = 25;
var age = 28;

console.log(age);

// to avoid this issue 
// we can use "let", it is blocked scope
// it can't be redeclare but manipulate.

var fname = "shafaq";
console.log(fname);