"use strict";

//get User name
var askName;
askName = prompt("What is your name?");
//console.log('user Name', askName);

//greet User
alert("Hi there, " + askName + "! Welcome to the Guessing Game!");
//console.log('greeting',greetUser);



//where was I born?
  var birthPlace = prompt("Was I born in India? Please answer yes/no");
  birthPlace = birthPlace.toLowerCase();
  if (birthPlace ==='yes'||birthPlace ==='y') {
    //console.log("You are right!");
    alert("You are right!")
  } else {
    //console.log("You are wrong!!! I was born in India");
    alert("You are wrong!!! I was born in India");
  }


//where did I do my medical training?
var medTraining = prompt("Did I attend medical school in New Zealand? Please answer in yes/no");
medTraining = medTraining.toLowerCase();
if (medTraining === 'yes' || medTraining === 'y') {
  //console.log("You are right!");
  alert("You are right!")
} else {
  //console.log("You are wrong!!!");
  alert("You are wrong!!! I attended medical school in New Zealand!");
}

