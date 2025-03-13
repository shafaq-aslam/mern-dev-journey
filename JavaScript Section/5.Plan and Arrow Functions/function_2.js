//another way to write function
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