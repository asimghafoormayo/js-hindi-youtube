// immediately invoked function expressions IIFE

// function chai()
// {
//     console.log(`DB CONNECTED`);
// }
// chai();

// // IIFE

// (
//     function chai()  // named IIFE
//     {
//         console.log(`DB CONNECTED`);
//     }
// )(); // semi colon must be there to close context, otherwise it will produce error.

// // immediately invoked function expressions execute immediately we use them because sometimes we have a global scope polution problem so to remove the gloabl scope polution we use the IIFE.

// (
//    (name) =>    // simple IIFE
//     {
//         console.log(`DB CONNECTED TWO ${name}`);
//     }
// )('hitesh');