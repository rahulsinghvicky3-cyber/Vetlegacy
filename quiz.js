 /* -------- GET TEST TYPE -------- */
const urlParams = new URLSearchParams(window.location.search);
const testType = urlParams.get("test");

/* -------- QUESTION BANK -------- */
let quizData = {

    test1: [
        // 👉 ADD YOUR 100 QUESTIONS HERE
        {
            question: "Which hormone regulates milk ejection?",
            options: ["Prolactin", "Oxytocin", "Estrogen", "Progesterone"],
            correct: 1
        },
        {
            question: "Gestation period of cow?",
            options: ["260", "280", "300", "320"],
            correct: 1
        },

        // 🔥 COPY BELOW FORMAT TO ADD MORE
        // Just duplicate and edit

        {
            question: "Rumen pH range?",
            options: ["4–5", "5.5–7", "7–8", "8–9"],
            correct: 1
        }

        // 👉 Continue till 100 questions
    ],

    test2: [
        {
            question: "Test 2 coming soon",
            options: ["A", "B", "C", "D"],
            correct: 0
        }
    ]

};

/* -------- SELECT TEST -------- */
let currentQuiz = [];

if (testType === "1") {
    currentQuiz = quizData.test1;
} else {
    currentQuiz = quizData.test2;
}

/* -------- VARIABLES -------- */
let current = 0;
let score = 0;
let time = 15;
let timer;

/* -------- ELEMENTS -------- */
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");
const timerEl = document.getElementById("timer");

/* -------- TIMER -------- */
function startTimer() {
    time = 15;
    timerEl.innerText = "⏱ " + time;

    timer = setInterval(() => {
        time--;
        timerEl.innerText = "⏱ " + time;

        if (time === 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

/* -------- LOAD QUESTION -------- */
function loadQuestion() {

    if (!currentQuiz || currentQuiz.length === 0) {
        questionEl.innerText = "No questions available ❌";
        return;
    }

    if (current >= currentQuiz.length) {
        finishQuiz();
        return;
    }

    clearInterval(timer);
    startTimer();

    const q = currentQuiz[current];

    questionEl.innerText = q.question;
    optionsEl.innerHTML = "";

    q.options.forEach((opt, i) => {
        const btn = document.createElement("button");
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(i, btn);
        optionsEl.appendChild(btn);
    });

    nextBtn.style.display = "none";
}

/* -------- CHECK ANSWER -------- */
function checkAnswer(i, btn) {
    clearInterval(timer);

    const correct = currentQuiz[current].correct;
    const buttons = optionsEl.querySelectorAll("button");

    buttons.forEach(b => b.disabled = true);

    if (i === correct) {
        btn.style.background = "green";
        score++;
    } else {
        btn.style.background = "red";
        buttons[correct].style.background = "green";
    }

    nextBtn.style.display = "block";
}

/* -------- NEXT -------- */
function nextQuestion() {
    current++;
    loadQuestion();
}

/* -------- FINISH -------- */
function finishQuiz() {
    clearInterval(timer);
    questionEl.innerText = "Quiz Completed 🎉";
    optionsEl.innerHTML = "";
    nextBtn.style.display = "none";
    scoreEl.innerText = "Score: " + score + "/" + currentQuiz.length;
}

/* -------- START -------- */
loadQuestion();
