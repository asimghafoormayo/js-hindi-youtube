// function

// function myName(){
//     console.log("Hello World");
//     console.log("Hello World");
// }

// myName();
// myName();

// function addTwoNumbers(number1, number2){  // parameters
//     console.log(number1 + number2);
// }
// addTwoNumbers(10,"4"); // arguments

// function addTwoNumbers(number1,number2){
//     return (number1+number2)
// }

// const result = addTwoNumbers(10,20);
// console.log(result);

// function userLoggedIn(username){
//     return `${username} just logged in`;
// }

// console.log(userLoggedIn("Hitesh")); // we will not pass anything in arguments , the value in the parameter will be undefined.

// function userDetail(username = "sam"){
//     return `${username} just logged in`;
// }

// console.log(userDetail("asim"));

// function userLoggedIn(username){
//     if(username === undefined)
//     {
//         console.log("please enter the username");
//         return
//     }
//     return `${username} just logged in`;
// }

// console.log(userLoggedIn("hitesh"));

// function calculateCartPrice(val1,val2, ...number){
//     return number;
// }
// console.log(calculateCartPrice(100,200,300,400,1000,2000,100,200));

// const myObj = {
//     name : "Virat Kohli",
//     age : 37,
//     email : "virat@gmail.com",
//     city : "Dehli",
//     country : "India"
// }

// function userInformation(anyobject){
//     return `username is ${anyobject.name} and age is ${anyobject.age} and email is ${anyobject.email} and city is ${anyobject.city} and country is ${anyobject.country}`;
// }
// console.log(userInformation(myObj));

// function userTwo(anyobject){
//     return `username is ${anyobject.name} and age is ${anyobject.age}`;
// }

// console.log(userTwo(
//     {
//         name : "Hitesh",
//         age : 32
//     }
// ));

// const myArr = ["hello","world"];

// function myArrayInformation(myArray){
//     return `first value is ${myArray[0]} and second value is ${myArray[1]}`;
// }

// // console.log(myArrayInformation(myArr));

// console.log(myArrayInformation([
//     "Hello",
//     "World"
// ]));