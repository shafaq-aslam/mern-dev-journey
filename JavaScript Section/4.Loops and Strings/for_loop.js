for(let i = 1; i <= 10; i +=1){
    console.log("Shafaq");
}

let num = 5;
for(let i = 1; i <= 10; i+=1){
    console.log(num, " x ", i, " = ", num*i);
    // console.log("2", " x ", i, " = ", 2*i);
}

//Reverse loop
for(let i=10; i>=1; i--){
    console.log("5 ", " x ", i, " = ", 5*i);
}

for(let i=1; i<=10; i++){
    if(i == 6){
        break;
    }
    else {
        console.log(i);
    }
}

for(let i=1; i<=10; i++){
    if(i%2==0){
        continue;
    }
    console.log(i, " is Odd number");
}