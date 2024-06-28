// scope, block scope and global

// let score = 100; // global scope it can be accessed in the block and out of the block too.

// if(true)
// {
//     let a = 100; // block scope it will not be accessed out of this block.
//     console.log(score);
// }

// // console.log(a);

// if(true)
// {
//     let a = 10;
//     const b = 20;
//     var c = 30;
// }

// // console.log(a);
// // console.log(b);
// console.log(c);

// let a = 10;

// if(true)
// {
//     let a = 100;
//     let b = 200;
//     console.log(a);
// }

// console.log(a);

// a = 500;

// console.log(a);

// // in node the scope is different, and in browser the scope is different.

// function one()
// {
//     let username = "hitesh";
//     function two()
//     {
//         let email = "hitesh@gmail.com";
//         console.log(username);
//     }
//     // console.log(email);
//     two();
// }
// one();

// if(true)
// {
//     let username = "hitesh";
//     if(username ==="hitesh")
//     {
//         let website = "YouTube";
//         console.log(username+website);
//     }
//     // console.log(website);
// }
// // console.log(username);

// console.log(addOne(2));

// function addOne(num)
// {
//   return (num+1);
// }

// // when we execute the function before declaring it , it will execute if we define function with simple way.

// console.log(addTwo(2));

// let addTwo = function(num)
// {
//     return(num+2);
// }

// // but when we define function with the variable we cannot execute the function before declaration of the function.


