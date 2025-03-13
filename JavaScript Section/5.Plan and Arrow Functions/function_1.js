//function definition
function sayGreetings(){
    console.log("Hello! Good Morning");
}

// function call
sayGreetings();

//************************

function printEven(){
    sayGreetings();
    for(let i=1; i<=10; i++){
        if(i%2==0){
            console.log(i, "is Even number")
        }
    }
}

printEven();

// function with parameters
function printOdd(start, end){ // start and end are parameters
    for(let i=start; i<=end; i++){
        if(i%2!=0){
            console.log(i, "is Odd number");
        }
    }
    console.log();
    printEven();
}

printOdd(1, 10);

// return function
function printSum(num1, num2){
    let sum = num1 + num2;
    return sum;
}

console.log(printSum(5,8));

//************************

function printFullName(firstName, lastName){
    let fullNAme = firstName + " " + lastName;
    return fullNAme;
}

let full_name = printFullName("Shafaq", "Aslam");
console.log(full_name);

//************************
function printGreetings(fName, lName){
    return "Hello" + " " + fName + " " +lName;

    // unreachable statements/code
    console.log("Happy to see you.");
}

console.log(printGreetings("Zainab", "Zaheer"));