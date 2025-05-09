
// var
// var is global scoped and function scoped but not block scoped
// var can be redeclaired that may create issues
// *************************

// var age = 25;

// if(true){
//     console.log(age);
// }

var age = 25;
var age = 28;

console.log(age);

// **********************
// to avoid this issue 
// we can use "let", it is blocked scope
// it can't be redeclare but manipulate.
// **********************

let fname = "shafaq";
console.log(fname);
// let fname = "zainab"; --> will throw error
// fname = "zainab" --> can be updated but can't redeclear
// console.log(fname);

// will throw error;

// {
//    let userName = "Shayan"; 
// }
// console.log(userName);

{
   let userName = "Shayan"; 
   console.log(userName);
}


// **********************
// Constant
// can't be updated nor redeclared
// **********************

const AGE = 35;
console.log(AGE);
// AGE = 40; --> will throw error
// console.log(AGE)
// const AGE = 45; --> will throw error
// console.log(AGE);



