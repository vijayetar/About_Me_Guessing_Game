"use strict";

//get User name
var askName;
askName = prompt("What is your name?");
//console.log('user Name', askName);

//greet User
alert("Hi there, " + askName + "! Welcome to the Guessing Game!");
//console.log('greeting',greetUser);


//question 1: where was I born?
  var birthPlace = prompt("Was I born in India? Please answer yes/no");
  console.log('Was I born in India? ', birthPlace);
  birthPlace = birthPlace.toLowerCase();
  if (birthPlace ==='yes'||birthPlace ==='y') {
    alert("You are right!")
  } else {
    alert("You are wrong!!! I was born in India");
  }


//question 2: where did I do my medical training?
var medTraining = prompt("Did I attend medical school in New Zealand? Please answer in yes/no");
console.log('Did I attend Medical School in NZ? ', medTraining);
medTraining = medTraining.toLowerCase();
if (medTraining === 'yes' || medTraining === 'y') {
  alert("You are right!")
} else {
  alert("You are wrong!!! I attended medical school in New Zealand!");
}

//question 3: did I have my dog first?
var dogFirst = prompt("Did I have my dog before I had my kids? Please answer in yes/no");
console.log('Did I have my dog before kids? ', dogFirst);
dogFirst = dogFirst.toLowerCase();
if (dogFirst === 'yes' || dogFirst === 'y') {
  alert("You are right!")
} else {
  alert("You are wrong!!! I adopted our dog before having kids.");
}

//question 4: do I enjoy volunteering?
var volunTeering = prompt("Do I enjoy volunteering? Please answer in yes/no");
console.log('Do I enjoy volunteering? ', volunTeering);
volunTeering = volunTeering.toLowerCase();
if (volunTeering === 'yes' || volunTeering === 'y') {
  alert("You are right!")
} else {
  alert("You are wrong!!! I volunteer at our local temple every month and on special occasions.");
}

//question 5: can I write/read Arabic?
var langArabic = prompt("Can I read/write Arabic? Please answer in yes/no");
console.log('Can I read/write Arabic? ', langArabic);
langArabic = langArabic.toLowerCase();
if (langArabic === 'yes' || langArabic === 'y') {
  alert("You are right!")
} else {
  alert("You are wrong!!! I I can read/write Arabic. I am not very fluent in it.");
}


//question 6: guess a number in four attempts only
for (var i = 0; i < 4; i++) {

  var pickNumber = prompt("Please pick a number between 1-20 to guess how many homes I have moved in my life thus far?");

  console.log('Number of homes I have moved: ', pickNumber);

  if (pickNumber === '13') {
    //console.log('pickNumber', pickNumber);
    alert("You are right!"); break;
  }
  else {
    var a = 3 - i;
    alert("Guess again! You have " + a + 'attempts remaining!');
    //console.log( 'attempt number', i);

  }

}