"use strict";

//define variables needed to score our game
var totalScore = 0;
var count = 0;

//function get User name
var askName;

function getName() {
  askName = prompt("What is your name?");
  //console.log('user Name', askName);

  while (askName === "") {
    askName = prompt("What is your name? Please answer with letters!")
  }
  
  //greet User
  alert("Hi there, " + askName + "! Welcome to the Guessing Game! You have to answer 7 questions right to get total Score of 7 ");
  
  //console.log('greeting',greetUser);
  return askName;
  
}
getName();


//function question 1: where was I born?
function birthCountry() {
  var birthPlace = prompt("Was I born in India? Please answer yes/no");
  console.log('Was I born in India? ', birthPlace);
  
  birthPlace = birthPlace.toLowerCase();
  
  if (birthPlace === 'yes' || birthPlace === 'y') {
    alert("You are right!"); 
    count = 1;
    return count;
  
  } else {
    alert("You are wrong!!! I was born in India");
    count = 0;
    return count;
  }

}

birthCountry();

totalScore = totalScore + count;

// console.log('QUESTION ONE TOTALSCORE: ', totalScore, 'AND COUNT: ', count);


//function question 2: where did I do my medical training?

function myTraining() {

  var medTraining = prompt("Did I attend medical school in New Zealand? Please answer in yes/no");
  
  console.log('Did I attend Medical School in NZ? ', medTraining);
  
  medTraining = medTraining.toLowerCase();
  
  if (medTraining === 'yes' || medTraining === 'y') {
    alert("You are right!"); 
    count = 1;
    return count;
  
  } else {
    alert("You are wrong!!! I attended medical school in New Zealand!");
    count = 0;
    return count;
  }

}

myTraining();

totalScore = totalScore + count;

// console.log('QUESTION TWO TOTALSCORE: ', totalScore, 'AND COUNT: ', count);


//function question 3: did I have my dog first?
function whenDog() {

  var dogFirst = prompt("Did I adopt my dog before I had my kids? Please answer in yes/no");
  
  console.log('Did I adopt my dog before I had my kids? ', dogFirst);
  dogFirst = dogFirst.toLowerCase();
  
  if (dogFirst === 'yes' || dogFirst === 'y') {
    alert("You are right!"); 
    count = 1;
    return count;

  
  } else {
    alert("You are wrong!!! I adopted our dog before having kids.");
    count = 0;
    return count;

  }

}

whenDog();

totalScore = totalScore + count;

// console.log('QUESTION THREE TOTALSCORE: ', totalScore, 'AND COUNT: ', count);


//function question 4: do I enjoy volunteering?

function hobBy() {

  var volunTeering = prompt("Do I enjoy volunteering? Please answer in yes/no");
  
  console.log('Do I enjoy volunteering? ', volunTeering);
  
  volunTeering = volunTeering.toLowerCase();
  
  if (volunTeering === 'yes' || volunTeering === 'y') {
    alert("You are right!"); 
    count = 1;
    return count;
  
  } else {
    alert("You are wrong!!! I volunteer at our local temple every month and on special occasions.");
    count = 0;
    return count;

  }

}


hobBy();

totalScore = totalScore + count;

// console.log('QUESTION FOUR TOTALSCORE: ', totalScore, 'AND COUNT: ', count);



//function question 5: can I write/read Arabic?

function lanGuage() {

  var langArabic = prompt("Can I read/write Arabic? Please answer in yes/no");
  console.log('Can I read/write Arabic? ', langArabic);
  
  langArabic = langArabic.toLowerCase();
  
  if (langArabic === 'yes' || langArabic === 'y') {
    alert("You are right!"); 
    count = 1;
    return count;
  
  } else {
    alert("You are wrong!!! I I can read/write Arabic. I am not very fluent in it.");
    count = 0;
    return count;

  }

}

lanGuage();

totalScore = totalScore + count;

// console.log('QUESTION FIVE TOTALSCORE: ', totalScore, 'AND COUNT: ', count);


//function question 6: guess a number in four attempts only

function guessNumber() {
  
  for (var i = 0; i < 4; i++) {
  //prompt them a question which number
    var pickNumber = prompt("Please pick a number between 1-20 to guess how many homes I have moved in my life thus far?");
  
    console.log('Number of homes I have moved: ', pickNumber);
  
    if (pickNumber === '13') {
      //console.log('pickNumber', pickNumber);
      alert("You are right!"); 
      i = 4;
      count = 1;
      return count;
  ;
  
    } else {
      //kept check of the number of attempts using variable i
  
      if (i === 3) {
        //console.log('what is i:', i);
        alert('You are out of attempts! I have lived in 13 different homes.');
        count = 0;
        return count;
    
      } else {
  
        if (pickNumber < 13) {
          var a = 3 - i;
          //console.log( 'attempt number', i);
          alert("Too Low! Try Again!! You have " + a + 'attempts remaining!');
        }
        else {
          var a = 3 - i;
          alert('Too High! Try Again!! You have ' + a + 'attempts remaining!');
        }
      }
  
    }
  }

}


guessNumber();

totalScore = totalScore + count;

// console.log('QUESTION SIX TOTALSCORE: ', totalScore, 'AND COUNT: ', count);


//function question 7: adding question with array and a loop of 6 attempts, display all the right answers,

var potterHarry = ['adventure', 'harry potter', 'jk rowling', 'magical', 'magic', 'mystery', 'murder', 'detective series', 'investigative', 'fairytales', 'fantasy'];

function favouriteBook() {
  
  //prompt them to guess my favorite type of book for tal 6 attempts

  for (var a = 0; a < 6; a++) {
    var guessBook = prompt('What type of books do I like?');
    guessBook = guessBook.toLowerCase();
  
    console.log('What type of books I like: ', guessBook);
  // check the answer provided against each element in the array
    for (var i = 0; i < potterHarry.length; i++) {
  
      if (guessBook === potterHarry[i]) {
        //console.log('You are right!');
        alert('You are right!'); 
        a = 6;
        count = 1;
        return count;
      }
  
    }
    // display how many attempts are remaining
    if (a < 6) {
      var countdown = 5 - a
      alert('Try again!!!! You have ' + countdown + ' attempts remaining');
      count = 0;

    } else {
      //complete the loop
      return count;
    }
  }

}

favouriteBook();

totalScore = totalScore + count;

// console.log('QUESTION SEVEN TOTALSCORE: ', totalScore, 'AND COUNT: ', count);


//function to display all the books in the array
var favBook = '';

function displayFav () {
  for (var i = 0; i < potterHarry.length; i++) {
    favBook = favBook + "  " + potterHarry[i];
  }
  alert("My favorite books are " + favBook);
  return favBook;
}


//function to display the percentage score

function scorePercent() { 
  var percent = Math.round(totalScore/7*100);
  alert('You scored ' + percent + ' percent in this game!');
  return percent;
}
scorePercent();

alert('Thank you, ' + askName + ' for playing this game today! You can read more about me on my page ! ');
