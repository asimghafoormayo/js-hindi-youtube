// const tinderUser = new Object(); // this is singleton object.

// const myObj = {}; // it is not a singleton object.

// console.log(tinderUser);
// console.log(myObj);

// myObj.id = "123abc";
// myObj.name = "Sam Curran";
// myObj.isLoggedIn = false;

// console.log(myObj);

// let regularUser = {
//     email : "some@gmail.com",
//     name : {
//         fullname : {
//             firstname : "Asim",
//             lastname : "Ghafoor"
//         }
//     }
// }

// console.log(regularUser.name.fullname.firstname);
// console.log(regularUser);

// how to combine objects.

// const myObj1 = {
//     1 : "a",
//     2 : "b"
// }

// const myObj2 = {
//     3 : "c",
//     4 : "d"
// }

// // const myObj3 = {myObj1,myObj2};

// const myObj3 = Object.assign({},myObj1,myObj2);

// console.log(myObj3);

// const userOne = {
//     a : "Asim",
//     b : 24
// };
// const userTwo = {
//     c : "Virat",
//     d : 37
// };
// const userThree = {
//     f : "Hitesh",
//     g : 36
// };

// const userObj = Object.assign({},userOne,userTwo,userThree);

// console.log(userObj);



// combine objects using spread operator.

// const myObj1 = {
//     1 : "a",
//     2 : "b"
// };

// const myObj2 = {
//     3 : "c",
//     4 : "d"
// }

// const myObj3 = {...myObj1, ...myObj2};

// console.log(myObj3);

// const users = [
//     {
//         name : "Asim",
//         email : "some@gmail.com"
//     },
//     {
//         name : "Virat",
//         email : "virat@gmail.com"
//     }
// ];

// console.log(users[1].name);
// console.log(users[1].email);

// let myObj1 = {
//     name : "Asim",
//     age : 24,
//     city : "Lahore",
//     country : "Pakistan"
// }

// console.log(Object.keys(myObj1));
// console.log(Object.values(myObj1));
// console.log(Object.entries(myObj1));