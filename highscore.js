var highScoresListEl = document.getElementById("highScoresList");
var clearButton = document.getElementsById("clearHighScore");

//get high scores from local storage

var highScoresList = JSON.parse(localStorage.getItem("highScores"));

if (highScoresList) {

  // sort the scores from hightest to lowest
  highscoresList.sort(function (a, b) { return b.score - a.score }); // from https://www.w3schools.com/js/js_array_sort.asp

  highScoresList.forEach(function (highscore, index) {
    var liEl = document.createElement("li");
    highScoresListEl.appendChild(liEl);
  });
}

// Clear Highscore Button
clearButton.addEvenListener("click", function (event) {
  event.preventDefault();
  // delete high scores from storage
  localStorage.removeItem("highScores");
  //delete high scores from screen
  highScoresListEl.innerHTML = "";
})