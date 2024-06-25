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

// +++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(primitive) and Heap(non-primitive)

// all of the prmitive data types stored in the stack and it provides the copy of value if we do change in the value the original value will not change.

// all of the non-primitibe data types / reference type are stored in the heap memory , it provides the reference of original value, if we do change in the value it will change the original value.

let userName = "Virat Kohli";

let userNameTwo = userName;

userNameTwo = "MS Dhoni";

console.log(userName);
console.log(userNameTwo);

let carInformation = {
    name : "Honda",
    model : 2012,
    Year : 2016,
    price : 5000,
    country : "Pakistan",
};

let carInformationTwo = carInformation;

carInformationTwo.name = "Suzuki";
carInformationTwo.model = 2022;

console.log(carInformation.name);
console.log(carInformation.model);
console.log(carInformationTwo.name);
console.log(carInformationTwo.model);
