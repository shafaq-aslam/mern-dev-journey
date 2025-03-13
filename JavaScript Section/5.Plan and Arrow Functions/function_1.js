//function definition
function sayGreetings(){
    console.log("Hello! Good Morning");
}

// function call
sayGreetings();

function printEven(){
    sayGreetings();
    for(let i=1; i<=10; i++){
        if(i%2==0){
            console.log(i, "is Even number")
        }
    }
}

printEven();

function printOdd(start, end){
    for(let i=start; i<=end; i++){
        if(i%2!=0){
            console.log(i, "is Odd number");
        }
    }
    console.log();
    printEven();
}

printOdd(1, 10);