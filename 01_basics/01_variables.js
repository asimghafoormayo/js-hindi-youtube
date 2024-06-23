const accountId = 144455;
let accountEmail = "hitesh@gmail.com";
var accountPassword = "12345678";
accountCountry = "India";
let accountState;


// accountId = 4; it does not allow to change constant variable in js.

accountEmail = "asim@gmail.com";
accountPassword = "883333";
accountCountry = "Pakistan";

// console.log(accountEmail);

console.table([accountId, accountEmail, accountPassword, accountCountry, accountState]);

/*

it is recommended to use let instead of var because var has block scope
and functional scope problem, so always use let.

*/

// Lecture four is completed.
