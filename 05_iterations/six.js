// const coding = ["javascript","php","python","ruby","java"];

// let code = coding.forEach( (item) => {
//     console.log(item);
//     return item;
// } )

// console.log(code);

// let myNums = [1,2,3,4,5,6,7,8,9,10];

// let newNum = myNums.filter( (num) => num > 4 );
// console.log(newNum);

// // filter method also takes call back function and in this we can apply condition on the parameter and it will return the parameters after putting the condition on them.

// let myNums = [1,2,3,4,5,6,7,8,9,10];

// let newNum = myNums.filter( (num) => {
//     return num > 4;
// } )

// console.log(newNum);



// let newNums = [];
// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num);
//     }
// } )

// console.log(newNums); // we can do it with for Each too but we have to use logic and if condition here , filter method is easy for putting the condition on the parameters.

// let books = [
//     {
//         booktitle : "book one",
//         genre : "fiction",
//         publish : 1981,
//         edition : 2004
//     },
//     {
//         booktitle : "book two",
//         genre : "history",
//         publish : 2008,
//         edition : 2004
//     },
//     {
//         booktitle : "book three",
//         genre : "fiction",
//         publish : 2010,
//         edition : 2012
//     },
//     {
//         booktitle : "book four",
//         genre : "history",
//         publish : 2012,
//         edition : 2010
//     }
// ];

// const userBooks = books.filter( (item) => item.genre === "history" );

// const userBooksTwo = books.filter( (item) => {
//     return item.publish > 2006 && item.genre === "history" } );

// console.log(userBooksTwo);

// // console.log(userBooks);