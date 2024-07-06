// const promiseOne = new Promise(function(resolve,reject){
//     // Do an async task
//     // DB calls, cryptography, network calls
//     setTimeout(function(){
//         console.log("async task is completed");
//         resolve();
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("promise is consumed");
// })

// new Promise(function(resolve,reject){
//     console.log("async task 2 is completed");
//     resolve();
// }).then(function(){
//     console.log("async 2 is resolved");
// })

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//     console.log("async task is completed");
//     resolve({username : "user", email : "asim@gmail.com"});
//     },1000)
// }).then(function(user){
//     console.log(user);
// })

// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false;
//         if(!error){
//             resolve({username : "user", password : "pass"});
//         }else{
//             reject("Something went wrong");
//         }
//     },1000)
// })

// promiseFour.then((user) =>{
//     return user.username;
// }).then(function(username){
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(() =>{
//     console.log("Promise is either resolved or rejected");
// })



// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false;
//         if(!error){
//             resolve({username : "hites",password : "123"});
//         }else
//         {
//             reject("ERROR! JS went wrong");
//         }
//     },1000)
// })

// async function promiseFiveConsumed(){
//     try {
//     const response = await promiseFive
//     console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// promiseFiveConsumed();




// async function getAllUsers(){
//   try {
//    const response = await fetch("https://jsonplaceholder.typicode.com/users");
//    const responseJson = await response.json();
//    console.log(responseJson);
//   } catch (error) {
//     console.log(`E: ${error}`);
//   }
// }

// getAllUsers();





// fetch('https://jsonplaceholder.typicode.com/users')
// .then(function(response){
//     return response.json();
// }).then(function(data){
//     console.log(data);
// }).catch(function(error){
//     console.log(error);
// })



// fetch('https://api.github.com/users/hiteshchoudhary')
// .then(function(response){
//     return response.json();
// }).then(function(data){
//     console.log(data);
// }).catch(function(error){
//     console.log(error);
// })

// fetch() method starts the process of fetching a resource from the network, returning a promise that is fulfilled once the response is available.

// A fetch() promise only rejects when the request fails, for example, because of a badly-formed request URL or a network error. A fetch() promise does not reject if the server responds with HTTP status codes that indicate errors (404, 504, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.



