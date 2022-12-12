// global variables
let timer = document.querySelector("#timer");
let timeLeft = 60;
let time = 0;
let currentScore = 0;
let start = document.querySelector('#startBtn');
let score = JSON.parse(localStorage.getItem("score")) || [];
let questions = document.querySelector("#quiz");
let questionIndex = 0;
let quiz = [
    {
    question: "Which of the following do you loop through in Javascript?",
    answers: ["object", "function", "array", "element"],
    correctAnswer: "array",
},
{
    question: "What data type is this value? value: 500",
    answers: ["boolean", "string", "undefined", "integer"],
    correctAnswer: "integer",
},
{
    question: "What is the correct syntax for displaying data in the console?",
    answers: ["console.log()", "console.log{}", "log.console()", "consolelog()"],
    correctAnswer: "console.log()",   
},
{
    question: "Which of the following defines an object in javascript?",
    answers: ["An object is a variable.", "An object is a container for named values called properties.", "An object is a function.", "An object is a fruit."],
    correctAnswer: "An object is a container for named values called properties."
},
];


// functions
// first question
function firstQuestion() {
let question = document.createElement("h2");
question.textContent = quiz[questionIndex].question;
questions.appendChild(question);

// create buttons and append to questions div
let btnOne = document.createElement("button");
btnOne.textContent = quiz[questionIndex].answers[0];
questions.appendChild(btnOne);

let btnTwo = document.createElement("button");
btnTwo.textContent = quiz[questionIndex].answers[1];
questions.appendChild(btnTwo);

let btnThree = document.createElement("button");
btnThree.textContent = quiz[questionIndex].answers[2];
questions.appendChild(btnThree);

let btnFour = document.createElement("button")
btnFour.textContent = quiz[questionIndex].answers[3];
questions.appendChild(btnFour);
};

function clearPrevious() {};

function nextQuestion() {

}
// function to compare user answer to correct answer

function userChoice() {
    if (this.textContent === quiz[questionIndex].correctAnswer) {
        questionIndex++;
        score++;
    if (questionIndex === quiz.length) {
        alert("You fail.");
        clearInterval(time); 
    }   else {
        let incorrect = document.createElement(h3);
        incorrect.textContent = "Wrong Answer."
        questions.appendChild(incorrect)
        questions.innerHTML = '';
        nextQuestion();
    }

    }
}

// timer function
function startBtn() {
    questionIndex = 0;
    questions.innerHTML = "";
    time = setInterval(function() {
        timeLeft--, timer.innerHTML = timeLeft;
    }, 1000);
};

// event listeners
start.addEventListener("click", startBtn)
btnOne.addEventListener("click", )