let obj1 = {
    "Fisrt Name" : "Shafaq",
    "Last Name" : "Aslam",
    Subject : "Conputer",
};

console.log(obj1)

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