// singleton , when object is created with the constructor it is called singleton object.
// Object.create


// not singleton, when object is created with the literal, it is not called singleton, it is called object literals.

//object literals

// const userInform = {
//     name : "Asim",
//     "lastname" : "ghafoor",
//     age : 24,
//     city : "Lahore",
//     country : "Pakistan",
//     isLoggedIn : true,
//     isActiveDay : ["mon","fri","sun"]
// }

// console.log(userInform.name);
// console.log(userInform.isLoggedIn);

// console.log(userInform["name"]);
// console.log(userInform["country"]);
// console.log(userInform["lastname"]);

// make symbol and put it as an key in the object and access its value.

// let mySym = Symbol("key1");

// console.log(typeof mySym);

// let myObj = {
//     name : "Asim",
//     city : "Lahore",
//     age : 24,
//     [mySym] : "mykey1",
//     country : "Pakistan"
// }

// console.log(myObj["name"]);
// console.log(myObj["country"]);
// console.log(myObj[mySym]);
// console.log(typeof myObj[mySym]);


// how to change the value

// myObj.city = "Mumbai";
// myObj.name = "Virat";

// Object.freeze(myObj); // this is object freeze it will freeze the object after doing that if you do any change in keys of object it will not happened.

// myObj.name = "Asim";

// console.log(myObj);

const myObj = {
    name : "Asim",
    age : 24,
    city : "Lahore",
    country : "Pakistan",
};

console.log(myObj);

myObj.greetings = function(){
    console.log("Hello World");
}

myObj.greetingsTwo = function(){
    console.log(`username is ${this.name} age is ${this.age} and city is ${this.city} and country is ${this.country}`);
}

console.log(myObj);
console.log(myObj.greetings());
console.log(myObj.greetingsTwo());