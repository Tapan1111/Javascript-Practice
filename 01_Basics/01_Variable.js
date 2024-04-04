const accountId = 123234
let accountEmail = "company@gmail.com"
var accountPassword = "0909"
accountCity = "Bhubaneshwar"
let accountState;

/*
prefer not to use var because of issue of  block scope and function scope
*/

// accountId = 7878

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])