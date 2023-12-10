import questions from './questions.js';

let usedQuestions = [];

function displayRandomQuestion() {
    if (usedQuestions.length === questions.length) {
        alert("All questions have been displayed. Please refresh the page to start again.");
        return;
    }

    let remainingQuestions = questions.filter(q => !usedQuestions.includes(q));
    let currentQuestionIndex = Math.floor(Math.random() * remainingQuestions.length);

    const currentQuestion = remainingQuestions[currentQuestionIndex];
    document.getElementById("question").innerText = currentQuestion.question;

    const quizForm = document.getElementById("quizForm");
    quizForm.innerHTML = "";

    const shuffledOptions = shuffleOptions(generateOptions(currentQuestion.answer));
    shuffledOptions.forEach((option, index) => {
        const label = document.createElement("label");
        label.innerHTML = `
        <input type="radio" name="answer" value="${option}" id="option${index + 1}">
        <span>${option}</span>
        `;
        quizForm.appendChild(label);
        quizForm.appendChild(document.createElement("br"));
    });

    usedQuestions.push(currentQuestion);
}

document.addEventListener('DOMContentLoaded', function () {
    updateCounter();
    displayRandomQuestion();
    document.querySelector('button').addEventListener('click', checkAnswer);
    document.getElementById('version').addEventListener('click', checkVersion);
});

function shuffleOptions(options) {
    return options.sort(() => Math.random() - 0.5);
}

function generateOptions(correctAnswer) {
    const options = [];
    while (options.length < 3) {
        const randomQuestion = getRandomQuestion();
        const randomOption = getRandomOption(randomQuestion.answer);
        if (!options.includes(randomOption) && randomOption !== correctAnswer) {
            options.push(randomOption);
        }
    }
    options.push(correctAnswer);
    return options;
}

function getRandomQuestion() {
    let remainingQuestions = questions.filter(q => !usedQuestions.includes(q));
    return remainingQuestions[Math.floor(Math.random() * remainingQuestions.length)];
}

function getRandomOption(correctAnswer) {
    const options = questions.map(question => question.answer).filter(answer => answer !== correctAnswer);
    return options[Math.floor(Math.random() * options.length)];
}

function checkAnswer() {
    const userAnswer = document.querySelector('input[name="answer"]:checked');
    if (!userAnswer) {
        alert("Please select an answer.");
        return;
    }

    const selectedValue = userAnswer.value;
    const currentQuestion = usedQuestions[usedQuestions.length - 1];

    if (selectedValue.toLowerCase() === currentQuestion.answer.toLowerCase()) {
        alert("Correct!");
        updateCounter();
        displayRandomQuestion();
    } else {
        alert("Incorrect!");
    }
}

function updateCounter() {
    const totalQuestions = questions.length;
    const answeredQuestions = usedQuestions.length;
    const counterElement = document.getElementById('counter');
    counterElement.innerText = `${answeredQuestions}/${totalQuestions}`;
}

function checkVersion() {
    alert("Last updated: 12/10/23 11:11am");
}


displayRandomQuestion();