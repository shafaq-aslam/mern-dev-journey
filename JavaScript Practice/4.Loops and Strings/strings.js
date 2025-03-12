// Strings --> Sequence of charactors

// let str1 = 'Shafaq'; // It is primitive string
// console.log(str1, "\ntype is:", typeof(str1));
// let str2 = "Zeba is the Queen of house";
// console.log(str2, "\ntype is:", typeof(str2));
// let str3 = `Aslam is 
// the King 
// of house`;
// console.log(str3, "\ntype is:", typeof(str3));

// let firstName = new String("Shafaq Aslam"); // It creates string object
// console.log(firstName, typeof(firstName));

let subj1 = 'Computer';
let subj2 = 'Science';
let word = subj1 + " " + subj2
let wordList = word.split(" ");
// Concatenate
console.log(subj1 + subj2);
// embed expressions
console.log(`${subj1} ${subj2}`);
// to check length
console.log("Length of", subj1, "is:", subj1.length);
//uppercase and lowercase method
console.log(subj1.toUpperCase());
console.log(subj2.toLowerCase());
//substrings
console.log(subj1.substring(1,5));
console.log(subj1.substring(1,7));
console.log(subj1.substring(1,));
console.log(subj1.substring(0,6));
console.log(subj1.substring(0,));
//split method
console.log(word.split(' '));
// join method
console.log(wordList);
console.log(wordList.join(" "));
