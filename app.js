const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correct: 2 // Index of the correct option
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: 1
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correct: 3
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Mark Twain"],
        correct: 2
    },
    {
        question: "What is the tallest mountain in the world?",
        options: ["K2", "Mount Everest", "Kangchenjunga", "Makalu"],
        correct: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    document.getElementById("welcome-screen").style.display = "none";
    document.getElementById("quiz-content").style.display = "block";
    loadQuestion();
}

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("question").textContent = question.question;
    
    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const optionButton = document.createElement("button");
        optionButton.textContent = option;
        optionButton.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(optionButton);
    });

    document.getElementById("feedback").textContent = '';
    document.getElementById("next-button").style.display = "none";
}

function checkAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    const feedbackElement = document.getElementById("feedback");

    if (selectedIndex === question.correct) {
        feedbackElement.textContent = "Correct!";
        feedbackElement.style.color = "green";
        score++;
    } else {
        feedbackElement.textContent = "Incorrect!";
        feedbackElement.style.color = "red";
    }

    document.getElementById("score").textContent = `Score: ${score}`;
    document.getElementById("next-button").style.display = "inline-block";
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showEndScreen();
    }
}

function showEndScreen() {
    document.getElementById("quiz-content").style.display = "none";
    const finalScore = document.getElementById("final-score");
    finalScore.textContent = `Your final score is: ${score} out of ${questions.length}`;

    const endMessage = document.getElementById("end-message");
    if (score === questions.length) {
        endMessage.textContent = "Excellent work! You got a perfect score!";
    } else if (score > questions.length / 2) {
        endMessage.textContent = "Great job! You did well!";
    } else {
        endMessage.textContent = "Good try! Keep practicing!";
    }

    document.getElementById("end-screen").style.display = "block";
}

function restartQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    document.getElementById("end-screen").style.display = "none";
    document.getElementById("welcome-screen").style.display = "block";
    document.getElementById("score").textContent = "Score: 0";
}
