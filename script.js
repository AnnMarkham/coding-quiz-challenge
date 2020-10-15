var quizBtn = document.getElementById("start");
// var time = document.getElementById("time");
// var questionArrayEl = querySelector("wrapper");
// var askQuestion = document.getElementById("question")
// var answerEl;
console.log(quizBtn, typeof quizBtn, "quizBtn")


var questionArray = [
  { question: "A very useful tool used during development and debugging for printing content to the debugger is:", choices: ["1.Javascript", "2.Terminal/Bash", "3.for loops", "4. console.log"], answer: "4" },
  { question: "Arrays in JavaScript can be used to store ", choices: ["1.Numbers & Strings", "2. Other Arrays", "3. Booleans", "4. all of the above"], answer: "4" },
  { question: " The condition in an if/else statement is enclosed with _______", choices: ["1. Quotation Marks", "2. Curyly Brackets", "P3. arentheses", "4. Square Brackets"], answer: "3" },
  { question: "Commonly used data types do not include:", choices: ["Strings", "Booleans", "Alerts", "Numbers"], answer: "3" },
]
console.log(questionArray);

//start Quiz
function startQuiz() {

  //set the timer
  var timeRemaining = 75;
  time.innerText = timeRemaining;


  //count-down
  var countDown = setInterval(function () {
    timeRemaining--;
    time.innerText = timeRemaining;

    if (timeRemaining === 0) {
      clearInterval(countDown);
      allDone(timeRemaining);
    }
  }, 1000);

  //end the quiz and record the seconds remaining to input into Done and HighScore Slides
}


//   // get questions[0]

// *** answer functions/events
//click on answer
//evalutate choice
//return - correct or wrong
//if wrong subtract time/

// check if there is time remaining (if current time is >0)
//check if there are questions remaining (i.e. if question [i] === 3 then no more questions)

// go to next question  (e.g. current question index number +1)  
// repeat function at *** above until no more questions or no more time -- if either -- go to game end function

//game end function 
// create an element <div> or <section>  
//with text showing "All done! "
// text "Your final score is" + timeRemaining "."
//input box <input type="text" name="initials" class"intials" placeholder="Enter Initials">
//submit button -- submit event -- ie storage of high score and initials

//create element <section High scores and each time submit button is clicked, appendChild? or append to the ordered list
quizBtn.addEventListener("click", startQuiz)