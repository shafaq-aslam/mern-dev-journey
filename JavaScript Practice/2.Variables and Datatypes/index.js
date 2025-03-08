
// var
// var is global scoped and function scoped but not block scoped
// var can be redeclaired that may create issues
// *************************

// var age = 25;

// if(true){
//     console.log(age);
// }

// var age = 25;
// var age = 28;

// console.log(age);

// **********************
// to avoid this issue 
// we can use "let", it is blocked scope
// it can't be redeclare but manipulate.
// **********************

// let fname = "shafaq";
// console.log(fname);
// let fname = "zainab"; --> will throw error
// fname = "zainab" --> can be updated but can't redeclear
// console.log(fname);

// **********************
// Constant
// can't be updated nor redeclared
// **********************

const a = 35;
console.log(a);
// a = "shafaq"; --> will throw error
// console.log(a)
// const a = "shafaq"; --> will throw error
// console.log(a);



