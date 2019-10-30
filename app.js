"use strict";

//get User name
var askName;
askName = prompt("What is your name?");
//console.log('user Name', askName);

//greet User
var greetUser = "Hi there," + askName + "!";
//console.log('greeting',greetUser);
document.write(greetUser);

//ready to play?
var userPlay = prompt("Are you ready to play the guessing game?");
