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

//did I have my dog first?
var dogFirst = prompt("Did I have my dog first? Please answer in yes/no");
dogFirst = dogFirst.toLowerCase();
if (dogFirst === 'yes' || dogFirst === 'y') {
  //console.log("You are right!");
  alert("You are right!")
} else {
  //console.log("You are wrong!!!");
  alert("You are wrong!!! I adopted our dog first before having kids.");
}

//do I enjoy volunteering?
var volunTeering = prompt("Do I enjoy volunteering? Please answer in yes/no");
volunTeering = volunTeering.toLowerCase();
if (volunTeering === 'yes' || volunTeering === 'y') {
  //console.log("You are right!");
  alert("You are right!")
} else {
  //console.log("You are wrong!!!");
  alert("You are wrong!!! I adopted our dog first before having kids.");
}

//can I write/read Arabic?
var langArabic = prompt("Can I read/write Arabic? Please answer in yes/no");
langArabic = langArabic.toLowerCase();
if (langArabic === 'yes' || langArabic === 'y') {
  //console.log("You are right!");
  alert("You are right!")
} else {
  //console.log("You are wrong!!!");
  alert("You are wrong!!! I adopted our dog first before having kids.");
}

alert("Thank you for playing this game," + askName);
