let obj = {
    "Fisrt Name" : "Shafaq",
    "Last Name" : "Aslam",
    Subject : "Conputer",
};

console.log(obj)

//Object with function

let obj2 = {
    "Fisrt Name" : "Shafaq",
    "Last Name" : "Aslam",
    Subject : "Conputer",
    greet: function(){
        console.log("Good Morning");
    }
};

console.log(obj2);
obj2.greet();