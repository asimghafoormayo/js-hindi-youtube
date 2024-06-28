
// const myObj = {
//     name : "Hitesh",
//     age : 14,
//     country : "India",
//     welcomeMessage : function(){
//         console.log(`${this.name} you are welcomed`);
//         console.log(this);
//     }
// };

// console.log(myObj);

// myObj.welcomeMessage();
// myObj.name = "asim";

// myObj.welcomeMessage();

// console.log(this); // it is showing empty object in current context.

// but when we will run this in the browser window it will show window object. // browser have global object window object.

// remember that this keyword is only used in objects , it cannot used in functions.

// function OneTwo()
// {
//     let username = "hitesh";
//     console.log(this.username); // this keyword cannot work in functions.
// }
// OneTwo();

// let oneTwo = function(){
//     let username = "hitesh";
//     console.log(this.username);
// }
// oneTwo();

// let oneTwo = () => {
//     let username = "hitesh";
//     console.log(this.username); // this keyword is also not working in arrow function.
// }
// oneTwo();

// arrow function

// let addTwo = (num1,num2) =>{
//     return num1 + num2; // explicit return
// }

// console.log(addTwo(10,20));

// let addTwo = (num1,num2) => num1 + num2 // implicit return

// console.log(addTwo(10,20));

// let addTwo = (num1,num2) => (num1 + num2) // it is same as above

// // but remember that when we will use curly braces we have to use return keyword in that, but when we will not use the curly braces and use the paranthesis then we can not use the return keyword.

// let addTwo = () => ({username : "hitesh", country : "india"});

// console.log(addTwo());