"use strict";

//first i went ahead to define variables I needed to score our game
var totalScore = 0;
var count = 0;

//function to get User name and so that I can use it again at the end of the game

var askName;

function getName() {
  askName = prompt("What is your name?");
  //console.log('user Name', askName);

  while (askName === "") {
    askName = prompt("What is your name? Please answer with letters!")
  }

  //greet User
  alert("Hi there, " + askName + "! Welcome to the Guessing Game! You have to answer all seven questions right to get total Percent 100% ");

  // console.log('greeting', askName);
  return askName;

}
//call function to get the user Name and greet them

getName();

// // Begin asking questions with array and compare answers to array of answers

// var ansYes = ['yes', 'y', 'yeah'];
// var ansNo = ['no', 'n', 'nope'];
// var reply = '';

// //List of questions as functions with reply as a function within a function

// function getAnswer() {
//   reply = prompt('Answer yes/no');
//   reply = reply.toLowerCase();
//   console.log('The reply IN THE FUNCTION IS', reply);
// }

// function questionOne() {
//   alert("Was I born in India?");
//   getAnswer();
//   return reply;
// }

// function questionTwo() {
//   alert("Was I trained in New Zealand?");
//   getAnswer();
//   return reply;
// }

// function questionThree() {
//   alert("Is it true that I had my dog before I had my kids?");
//   getAnswer();
//   return reply;
// }

// function questionFour() {
//   alert("Do I enjoy volunteering?");
//   getAnswer();
//   return reply;

// }

// function questionFive() {
//   alert("Can I read and write Spanish?");
//   getAnswer();
//   return reply;

// }

// // made an array of objects with array within in

// var allQuestions = [{question: questionOne, answer: ansYes }, { question: questionTwo, answer: ansYes }, { question: questionThree, answer: ansYes }, { question: questionFour, answer: ansYes }, { question: questionFive, answer: ansNo }];

// //This is the first loop to run through the first five questions
// for (var i = 0; i < allQuestions.length; i++) {
//     //console.log(i);
//     allQuestions[i].question();
//     // reply = prompt('Answer yes/no');
//     // reply = reply.toLowerCase();
//     //console.log('The reply TO USE LATER', reply);
//     //console.log('All correct answers are ', allQuestions[i].answer);
    
//     //Create second loop to check the correct answer
//     for (var j = 0; j < allQuestions[i].answer.length; j++) {
//       var correctAns = allQuestions[i].answer[j];
//       // console.log(reply, correctAns);
//       if (reply === correctAns) {
//         // console.log('You did it');
//         alert('You are absolutely right!');
//         count = 1;
//         j = 6;
//       } 
//     }
//     //console.log('my variable i', i, 'my variable j', j);
//     if (j !== 7) {
//       // console.log('Wrong answer!')
//       alert('Wrong Answer!!!');
//       count = 0;
//     }
//   totalScore = totalScore + count;
//   console.log('this is the count = ', count, 'this is the totalScore ', totalScore);
    
  
// }

//function question 6: guess a number in four attempts only

function guessNumber() {

  for (var i = 0; i < 4; i++) {
    //prompt them a question which number
    var pickNumber = prompt("Please pick a number between 1-20 to guess how many homes I have moved in my life thus far?");

    //console.log('Number of homes I have moved: ', pickNumber);

    while (pickNumber === '' || pickNumber >20 || isNaN(pickNumber)) {
      //console.log('this is my typeof', typeof pickNumber);
      pickNumber = prompt("Please pick a number between 1-20 to guess how many homes I have moved. Please enter only a number that is less than 20!");
    }

    // while (isNaN(pickNumber)) {
    //   console.log('it worked');
    //   pickNumber = prompt("Please enter a number only!");
    // }
    

    if (pickNumber === '13') {
      //console.log('pickNumber', pickNumber);
      alert("You are right!");
      i = 4;
      count = 1;
      return count;

    }
    else {
      //kept check of the number of attempts using variable i

      if (i === 3) {
        //console.log('what is i:', i);
        alert('You are out of attempts! I have lived in 13 different homes.');
        count = 0;
        return count;

      }
      else {

        if (pickNumber < 13) {
          var a = 3 - i;
          //console.log( 'attempt number', i);
          alert("Too Low! Try Again!! You have " + a + 'attempts remaining!');
        }
        else {
          if (pickNumber > 13 && pickNumber <20) {
            var a = 3 - i;
            alert('Too High! Try Again!! You have ' + a + 'attempts remaining!');
          }
        }
      }

    }
  }


}

//call function and add the totalScore

guessNumber();

totalScore = totalScore + count;

console.log('this is the count = ', count, 'this is the totalScore ', totalScore);



//function question 7: adding question with array and a loop of 6 attempts, display all the right answers,

var potterHarry = ['adventure', 'harry potter', 'jk rowling', 'magical', 'magic', 'mystery', 'murder', 'detective series', 'investigative', 'fairytales', 'fantasy'];

function favouriteBook() {

  //prompt them to guess my favorite type of book for tal 6 attempts

  for (var a = 0; a < 6; a++) {
    var guessBook = prompt('What type of books do I like?');

    while(guessBook === '') {
      guessBook = prompt('Please enter what type of books you think I enjoy reading');
    }
    guessBook = guessBook.toLowerCase();

    //console.log('What type of books I like: ', guessBook);
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

    } 
    else {
      //complete the loop
      return count;
    }
  }

}

//call function and add the totalScore

favouriteBook();

totalScore = totalScore + count;

console.log('this is the count = ', count, 'this is the totalScore ', totalScore);



//function to display all the books in the array
var favBook = '';

function displayFav() {
  for (var i = 0; i < potterHarry.length; i++) {
    favBook = favBook + "  " + potterHarry[i];
  }
  alert("My favorite books are " + favBook);
  return favBook;
}
displayFav();


//function to display the percentage score from the totalScore

function scorePercent() {
  var percent = Math.round(totalScore / 7 * 100);
  alert('You got ' + totalScore + ' answers correct out of 7. You scored ' + percent + ' percent in this game!');
  return percent;
}
scorePercent();

alert('Thank you, ' + askName + ' for playing this game today! You can read more about me on my page !');



