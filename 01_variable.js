//console.log(12) //to print the output
const accountID = 1345
let accountEmail = "araj@zetaglobal.com"
var accountPassword ="123554"
let accountState; // this gives undefined output because we defined the variable but didn't put the value

// accountID =4 // Const can be changed

// console.log(accountID)
// console.log(accountEmail)
// console.log(accountPassword);

console.table([accountID, accountEmail, accountPassword, accountState])

/*
console.table used to print values in a table format
*/

/*
To define constant variable, we use const keyword. Once we define the constant, we won't be able to change that value in the code
To define variable, we can either use let or var but it is strictly recommended not to use var because of issue in block scope and functional scope
*/


