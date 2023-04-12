let time = 30;
let timer = 0;
let score = 0;
let startQuizBtn = document.querySelector(`#startQuiz`);
let questionDiv = document.querySelector(`#questions`);
let timerDiv = document.querySelector(`#timer`);
let intro = document.querySelector("#intro");
let userChoice = "";
let scores = JSON.parse(localStorage.getItem("score")) || [];
let questionsIndex = 0;
let quiz = [
  {
    title: "Which of the following do you loop through in Javascript?",
    choices: ["object", "function", "array", "element"],
    answer: "array",
  },
  { 
    title: "What data type is this value? value: 500", 
    choices: ["boolean", "string", "undefined", "integer"], 
    answer: "integer" 
},
  { 
    title: "What is the correct syntax for displaying data in the console?", 
    choices: ["console.log()", "console.log{}", "log.console()", "consolelog()"], 
    answer: "console.log()" 
},
  { 
    title: "Which of the following defines an object in javascript?", 
    choices: ["An object is a variable.", "An object is a container for named values called properties.", "An object is a function.", "An object is a fruit."],
    answer: "An object is a container for named values called properties." 
} 
];



// functions
function startQuiz() {
    timer = setInterval(function () {
        time--;
        timerDiv.textContent = time;
        if (time <= 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
    intro.classList.add("hidden");
    createButton(questionsIndex);
}
  

// create buttons for each question
function createButton(index) {
    questionDiv.innerHTML = "";
    let questionTitle = document.createElement("h2");
    questionTitle.textContent = quiz[index].title;
    questionDiv.appendChild(questionTitle);
    let questionChoices = quiz[index].choices;
    questionChoices.forEach((choice) => {
        let questionBtn = document.createElement("button");
        questionBtn.textContent = choice;
        questionBtn.classList = "btn";
        questionBtn.dataset.answer = quiz[index].answer;
        questionDiv.appendChild(questionBtn);
    });
}

function endGame() {
    questionDiv.innerHTML = "";
    let endGameDiv = document.createElement("div");
    endGameDiv.classList = "endGame";
    let endGameTitle = document.createElement("h2");
    endGameTitle.textContent = "All done!";
    endGameDiv.appendChild(endGameTitle);
    let endGameP = document.createElement("p");
    endGameP.textContent = `Your final score is ${time}`;
    endGameDiv.appendChild(endGameP);
    let endGameForm = document.createElement("form");
    endGameForm.id = "initials";
    let endGameLabel = document.createElement("label");
    endGameLabel.textContent = "Enter initials: ";
    endGameForm.appendChild(endGameLabel);
    let endGameInput = document.createElement("input");
    endGameInput.id = "initialsInput";
    endGameForm.appendChild(endGameInput);
    let endGameBtn = document.createElement("button");
    endGameBtn.textContent = "Submit";
    endGameBtn.id = "submitBtn";
    endGameForm.appendChild(endGameBtn);
    endGameDiv.appendChild(endGameForm);
    questionDiv.appendChild(endGameDiv);
    clearInterval(timer);
    endGameBtn.addEventListener("click", saveScore);
}

// check answer function
function checkAnswer(event) {
  let userAnswer = event.target.dataset.answer;
  let userChoice = event.target.textContent;
  if (userAnswer === userChoice) {
    alert("Correct!");
  } else {
    alert("Incorrect!");
    time -= 10;
  }
  questionsIndex++;
  if (questionsIndex < quiz.length) {
    createButton(questionsIndex);
  } else {
    endGame();
  }
}

function saveScore(event) {
  event.preventDefault();
  let initials = document.querySelector("#initialsInput").value;
  let score = {
    initials: initials,
    score: time,
  };
  scores.push(score);
  localStorage.setItem("score", JSON.stringify(scores));
  window.location.href = "highscores.html";
}


// event listeners
startQuizBtn.addEventListener("click", startQuiz);
questionDiv.addEventListener("click", checkAnswer);







    





