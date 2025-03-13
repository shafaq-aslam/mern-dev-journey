//Expression function
let getAverage = function(num1, num2){
    return (num1 + num2)/getAverage.length;
}

console.log(getAverage(5, 15));

//print table
let printTable = function(table, startPoint, endPoint){
    for(let i=startPoint; i<=endPoint; i++){
        console.log(table, "x", i, "=", table*i);
    }
}

printTable(5, 2, 15);

//Arrow function
let getSquare = (number) => {
    return number**2;
}

let num = 5
console.log("Square of ", num, "is: ", getSquare(num));
