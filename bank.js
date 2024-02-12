// Import libraries
var readline = require('readline-sync');

const users = {"nhera": "abc123"};
let loginAttempts = 0;

function login(username, password) {
    if (users.hasOwnProperty(username) && users[username] == password) {
        loginAttempts = 0;
        return true;
    } else {
        if(users.hasOwnProperty(username))
            loginAttempts++;

        return false;
    }
}

function transaction(option) {
    let amount = 0
    switch(option) {
        case '1': // Deposit
            amount = readline.questionFloat("Enter the amount you want to deposit ")
            balance += amount;
            break;
        case '2': // Withdraw
            amount = readline.questionFloat("Enter the amount you want to withdraw ")
            balance -= amount;
            break;
        case '3': // View
            console.log("Your balance is: $" + balance)
            break;
        case '4': // Transfer
            const acc = readline.question("Enter the account number you want to send money to ")
            amount = readline.questionFloat("Put the amount you want to transfer: $")
            balance -= amount;
            break;
        default:
            console.log("Invalid transaction type.")
    }
}

console.log("initial stage");

let loggedIn = false;
let username = "";
let password = "";

while (!loggedIn) {
    username = readline.question("Put your username: ");
    password = readline.question("Put your password: ");
    console.log(username);
    console.log(password);
    
    loggedIn = login(username, password)

    if(!loggedIn) {
        if(loginAttempts >= 3) {
            console.log("Account Blocked");
            break;
        }
        else {
            console.log("Incorrect credentials. Try Again...")
        }
    } 
}

if(loggedIn){
    console.log("Logged in Succesfully!")
}

let balance = 2000;
while (loggedIn) {
    console.log("Welcome to Nhera Bank's system" + username)
    console.log("Please select your option")
    console.log("1. Deposit")
    console.log("2. Withdraw")
    console.log("3. View")
    console.log("4. Transfer money")
    
    const alternative = readline.question("Select your option: "); 
    transaction(alternative);
}