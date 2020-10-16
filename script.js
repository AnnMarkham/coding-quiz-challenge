

var quizBtn = document.getElementById("start");
// var time = document.getElementById("time");
var boxEL = document.querySelector(".box")
var questionEl = document.getElementById("question")
// var choiceBtn;
var answersList;

console.log(quizBtn, typeof quizBtn, "quizBtn")


var questionArray = [
  { question: "A very useful tool used during development and debugging for printing content to the debugger is:", choices: ["1.Javascript", "2.Terminal/Bash", "3.for loops", "4. console.log"], answer: "4" },
  { question: "Arrays in JavaScript can be used to store ", choices: ["1.Numbers & Strings", "2. Other Arrays", "3. Booleans", "4. all of the above"], answer: "4" },
  { question: " The condition in an if/else statement is enclosed with _______", choices: ["1. Quotation Marks", "2. Curyly Brackets", "P3. arentheses", "4. Square Brackets"], answer: "3" },
  { question: "Commonly used data types do not include:", choices: ["Strings", "Booleans", "Alerts", "Numbers"], answer: "3" }
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

}
quizBtn.remove();

//pull answers from questionsArray and create list to display

answersList = document.createElement("ol");
answersList.classList.add("answers-list");
boxEL.appendChild(answersList);

// function to handle clicking on answer choice
var answerChoiceHandler = function (event) {
  var clickedChoice = event.target;
  if (clickedChoice.matches("button")) {
    console.log("button clicked");
    var chosenAnswer = clickedChoice.getAttribute("option-value");
    console.log(chosenAnswer);
    // Check to see if chosenAnswer matches the answer in line with the queston in the questiosn array
    if (chosenAnswer === questionArray[currentQuestion].answer) {
      console.log("correct");
      displayResult("Correct");
    }
    else {
      console.log("wrong")
      displayResult("Wrong");
      // Reduce 10 seconds and display new time
      timeRemaining -= 10;
      time.innerText = timeRemaining;
    }
    // Move to next question
    currentQuestion++;
    // If out of questions stop timer and call endQuiz
    if (currentQuestion === quizQuestions.length) {
      clearInterval(countDown);
      allDone(timeRemaining);
    }
    else {
      // Display the next question
      displayQuiz(currentQuestion);
    }
  }
};
//Start from question 1
varcurrentQuestion = 0
displayQuiz(currentQuestion);

// //display result
function displayResult(result) {
  //create result display
  var resultEl = document.createElement("p");
  resultEl.innerText = result;
  boxEL.appendChild(resultEl);
  var resultInterval = setInterval(function () {
    resultEl.remove();
    clearInterval(resultInterval);
  }, 750);
};

//Display and handle questions
function displayQuiz(questionIndex) {
  //display question
  questionEl.innerText = questionArray[questionIndex].question;
  // clear previous options
  answerList.innerHTML = "";

  //display all options
  for (var i = 0, questionsArray[questionIndex].choices.length; i++) {
    var liEl = document.createElement("button");
    //build
    buttonEl.setAttrubute("choice-value"), i);
    buttonEl.classList.add("button");
    buttonEl.innerText = (i + 1) + ". " + questionsArray[questionIndex].choices[i];
    //place
    liEl.appendChild(buttonEl);
    answerList.appendChild(liEl);
  }
}
function allDone(score) {
  //remove all buttons
  answerList.remove();
  //display final score
  questionEl.innerText = "Your final score is " + score;

  // ask for initials
  // make a form to store them
  var doneBoxForm = document.createElement("form");
  boxEL.appendChild(doneBoxForm);

  //add input field 
  var initialsLabel = document.createElement("label");
  initialsLabel.innerText = "Enter Initials: ";
  doneBoxForm.appendChild(initialsLabel);
  var initialsInput = document.createElement("input");
  doneBoxForm.appendChild(initialsInput);

  // create submit button
  var submitButton = document.createElement("button");
  submitButton.innerText = "Submit";
  doneBoxForm.appendChild(submitButton);

  //when the form is submitted 
  var submitButtonHandler = function (event) {
    event.preventDefault();
    //get user initials
    var userInitials = initialsInput.value;
    if (usersInitials) {
      //turn all into an object
      var scoreObj = { initials: unserinitials, score: score };

      //store users initials to local storage
      //check old high score
      var highScoreList = Json.parse(localStorage.getItem("highScores"));
      if (highScoresList) {
        highScores.push(scoreObj);
      }
      else { highScoreList = [scoreObj]; }
    }
    localStorage.setItem("highScores", JSON.stringify(highScoresList));
    //redirect to highscores page
    location.href = "highscore.html";

  }
}


;
answersList.addEventListener(click, "answerChoiceHandler")
doneBoxForm.addEventListenter("click", submitButtonHandler);
quizBtn.addEventListener("click", startQuiz);
