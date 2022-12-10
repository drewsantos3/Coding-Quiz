// global variables
let timer = document.querySelector("#timer");
let timeLeft = 60;
let time = 0;
let currentScore = 0;
let start = document.querySelector('#startBtn');
let score = JSON.parse(localStorage.getItem("score")) || [];
let questions = document.querySelector("#questions");
let questionIndex = 0;
let quesOne = {
    question: "Which of the following do you loop through in Javascript?",
    answers: ["object", "function", "array", "element"],
    correctAnswer: "array"
};
let quesTwo = {
    question: "What data type is this value? value: 500",
    answers: ["boolean", "string", "undefined", "integer"],
    correctAnswer: "integer"
};
let quesThree = {
    question: "What is the correct syntax for displaying data in the console?",
    answers: ["console.log()", "console.log{}", "log.console()", "consolelog()"],
    correctAnswer: "console.log()"   
};
let quesFour = {
    question: "Which of the following defines an object in javascript?",
    answers: ["An object is a variable.", "An object is a container for named values called properties.", "An object is a function.", "An object is a fruit."],
    correctAnswer: "An object is a container for named values called properties."
};


// functions
// timer
function startBtn() {
    questionIndex = 0;
    questions.innerHTML = "";
    time = setInterval(function() {
        timeLeft--, timer.innerHTML = timeLeft;
    }, 1000);
};
// first question
let question = document.createElement("h2");
question.textContent = quesOne.question;
questions.appendChild(question);

// create buttons and append to questions div
let btnOne = document.createElement("button");
btnOne.textContent = quesOne.answers[0];
btnOne.textContent = quesOne.answers[1];
btnOne.textContent = quesOne.answers[2];
btnOne.textContent = quesOne.answers[3];
questions.appendChild(btnOne);

let btnTwo = document.createElement("button");
btnTwo.textContent = quesTwo.answers[0];
btnTwo.textContent = quesTwo.answers[1];
btnTwo.textContent = quesTwo.answers[2];
btnTwo.textContent = quesTwo.answers[3];
questions.appendChild(btnTwo);

let btnThree = document.createElement("button");
btnThree.textContent = quesThree.answers[0];
btnThree.textContent = quesThree.answers[1];
btnThree.textContent = quesThree.answers[2];
btnThree.textContent = quesThree.answers[3];
questions.appendChild(btnThree);

let btnFour = document.createElement("button")
btnFour.textContent = quesFour.answers[0];
btnFour.textContent = quesFour.answers[1];
btnFour.textContent = quesFour.answers[2];
btnFour.textContent = quesFour.answers[3];
questions.appendChild(btnFour);

// event listeners
start.addEventListener("click", startBtn)
btnOne.addEventListener("click", )