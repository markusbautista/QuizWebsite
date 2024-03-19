import questions from './ist_questions2.js';

let usedQuestions = [];

function displayRandomQuestion() {
    if (usedQuestions.length === questions.length) {
        alert("Congratulations, you finished the quiz!. Please refresh the page to start again.");
        return;
    }

    let remainingQuestions = questions.filter(q => !usedQuestions.includes(q));
    let currentQuestionIndex = Math.floor(Math.random() * remainingQuestions.length);

    const currentQuestion = remainingQuestions[currentQuestionIndex];
    document.getElementById("question").innerText = currentQuestion.question;

    const quizForm = document.getElementById("quizForm");
    quizForm.innerHTML = "";

    const shuffledOptions = shuffleOptions(generateOptionsByCategory(currentQuestion.category, currentQuestion.answer));
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

function generateOptionsByCategory(category, correctAnswer) {
    const options = [];
    while (options.length < 3) {
        const randomQuestion = getRandomQuestionByCategory(category);
        const randomOption = getRandomOptionByCategory(category, randomQuestion.answer);
        if (!options.includes(randomOption) && randomOption !== correctAnswer) {
            options.push(randomOption);
        }
    }
    options.push(correctAnswer);
    return options;
}

function getRandomQuestionByCategory(category) {
    let remainingQuestions = questions.filter(q => !usedQuestions.includes(q) && q.category === category);
    return remainingQuestions[Math.floor(Math.random() * remainingQuestions.length)];
}

function getRandomOptionByCategory(category, correctAnswer) {
    const options = questions.filter(question => question.category === category && question.answer !== correctAnswer)
                            .map(question => question.answer);
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

document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const switchColorsButton = document.getElementById("switchColors");

    switchColorsButton.addEventListener("click", function () {
        body.classList.toggle("light-mode");

        const currentText = switchColorsButton.textContent;
        const newText = currentText === "☼" ? "☾" : "☼";
        switchColorsButton.textContent = newText;
    });
});

function checkVersion() {
    alert("Last updated: 03/18/24 10:57am");
}

displayRandomQuestion();
