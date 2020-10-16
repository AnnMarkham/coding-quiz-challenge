var startButton = document.getElementById("start");
var time = document.getElementById("time");
var boxEL = document.querySelector(".box")
var questionEl = document.getElementById("question")
// var choiceBtn;
var answersList;


var questionArray = [
  { question: "A very useful tool used during development and debugging for printing content to the debugger is:", choices: ["1.Javascript", "2.Terminal/Bash", "3.for loops", "4. console.log"], answer: "4" },
  { question: "Arrays in JavaScript can be used to store ", choices: ["1.Numbers & Strings", "2. Other Arrays", "3. Booleans", "4. all of the above"], answer: "4" },
  { question: " The condition in an if/else statement is enclosed with _______", choices: ["1. Quotation Marks", "2. Curyly Brackets", "P3. arentheses", "4. Square Brackets"], answer: "3" },
  { question: "Commonly used data types do not include:", choices: ["Strings", "Booleans", "Alerts", "Numbers"], answer: "3" }
]


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

  startButton.remove();

  //pull answers from questionsArray and create list to display

  answerList = document.createElement("ul");
  answerList.classList.add("answer-list");
  boxEL.appendChild(answerList);

  // function to handle clicking on answer choice
  answerList.addEventListener("click", function (event) {
    var clickedElement = event.target;
    if (clickedElement.matches("button")) {
      var chosenAnswer = clickedElement.getAttribute("choice-value");
      // Check to see if chosenAnswer matches the answer in line with the queston in the questiosn array
      if (chosenAnswer === questionArray[currentQuestion].answer) {
        displayResult("Correct");
      }
      else {
        //wrong
        displayResult("Wrong");
        // Reduce 10 seconds and display new time
        timeRemaining -= 10;
        time.innerText = timeRemaining;
      }
      // Move to next question
      currentQuestion++;
      // If out of questions stop timer and call endQuiz
      if (currentQuestion === questionArray.length) {
        clearInterval(countDown);
        allDone(timeRemaining);
      }
      else {
        // Display the next question
        displayQuiz(currentQuestion);
      }
    }
  });

  //Start from question 1
  var currentQuestion = 0;
  displayQuiz(currentQuestion);
}

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
  for (var i = 0; i < questionArray[questionIndex].choices.length; i++) {
    //create
    var liEl = document.createElement("li");
    var buttonEl = document.createElement("button");
    //build
    buttonEl.setAttribute("choices-value", i);
    buttonEl.classList.add("button");
    buttonEl.innerText = (i + 1) + ". " + questionArray[questionIndex].choices[i];
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
  doneBoxForm.addEventListener("submit", function (event) {
    event.preventDefault();
    //get user initials
    var userInitials = initialsInput.value;
    if (userInitials) {
      //turn all into an object
      var scoreObj = { initials: userInitials, score: score };

      // Store users initial to local storage   
      // Check old highscores     
      var highscoresList = JSON.parse(localStorage.getItem("code-quiz-highscores"));
      // console.log(highscoresList);
      if (highscoresList) {
        highscoresList.push(scoreObj);
      }
      else {
        highscoresList = [scoreObj];
      }
      // console.log(highscoresList);
      localStorage.setItem("code-quiz-highscores", JSON.stringify(highscoresList));
      // Redirect to highscores page  
      location.href = "highscore.html";
    }
  });
}

startButton.addEventListener("click", startQuiz);
