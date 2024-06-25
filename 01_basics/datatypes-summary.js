// Primitive and non Primitive data types

// primitive data types
// 7
// String, Number, Boolean, null, undefined, Symbol, BigInt

// Reference type / non primitive

// Array, Objects, and Functions.

const score = 300;
const newScore = 300.1;

let name = "Asim";

let newValue = true;
let newValuetwo = false;

let outsideTemp = null;
let userEmail;

const id = Symbol('123');
const idTwo = Symbol('123');

// console.log(id === idTwo);

let bigNumber = 4343454645455454n;

// Array

let names = ["Asim","Virat","Dhoni"];

let myObj = {
    name : "Asim",
    age : 24,
    city : "Lahore",
    country : "Pakistan"
};

let myFunction = function(){
    console.log("Hello World");
}

console.log(typeof (score));
console.log(typeof (newScore));
console.log(typeof (name));
console.log(typeof (newValue));
console.log(typeof (outsideTemp));
console.log(typeof (userEmail));
console.log(typeof (id));
console.log(typeof (names));
console.log(typeof (myObj));
console.log(typeof (myFunction));