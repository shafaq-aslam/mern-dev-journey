// let num1 = 1;
// while(num1<=10){
//     console.log(num1);
//     num1++;
// }

// let num2 = 10;
// while(num2>=1){
//     console.log(num2);
//     num2--;
// }

// let num3 = 1;
// while(num3<=10){
//     console.log("5 ", "x ", num3, " = ", 5*num3);
//     num3++;
// }

let ch = 'A';
let n = 1;
while(n<=10){
    console.log(ch);
    n++;
    ch = String.fromCharCode(ch.charCodeAt(0) + 1);
}