let a = 1;
let b = 2;

//add 'a' and 'b' and log it out <-- Integer types
console.log(a+b);

// try for NaN objects
a = "one";
b = "two";

console.log(a+b);

//crate a mock object
let mockObject = {
    "number": 12,
    "string": "John Doe",
    "boolean": true
};

console.log(mockObject);

// try adding different objects
console.log(mockObject + a);

// how about subtracting
console.log(mockObject - a);

// multiplication
console.log(mockObject["number"] * 2)

/*
multiline comments
*/
let string = "Programming is like building a multilingual puzzle";
console.log(string);

//template literals 
let num = 98;
console.log(`${num} Battery Street`);

var alphabets = [];
function asciiChars(){
    for (let i = 65; i < 123; i++ ){
        alphabets.push(String.fromCharCode(i));
    }
    console.log(alphabets)
}
asciiChars()