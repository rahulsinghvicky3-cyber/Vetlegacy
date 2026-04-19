 /* -------- GET TEST TYPE -------- */
const urlParams = new URLSearchParams(window.location.search);
const testType = urlParams.get("test");

/* -------- SELECT QUIZ -------- */
let currentQuiz = [];

if (testType === "1") {
    currentQuiz = quizData.test1;
} else if (testType === "2") {
    currentQuiz = quizData.test2;
}

/* -------- ELEMENTS -------- */
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");
const timerEl = document.getElementById("timer");
const explanationEl = document.getElementById("explanation");
const progressEl = document.getElementById("progress");

/* -------- VARIABLES -------- */
let current = 0;
let score = 0;
let time = 15;
let timer;

/* -------- EMPTY TEST HANDLING -------- */
if (!currentQuiz || currentQuiz.length === 0) {
    questionEl.innerText = "🚧 Test not available";
    timerEl.style.display = "none";
}

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

    if (current >= currentQuiz.length) {
        finishQuiz();
        return;
    }

    clearInterval(timer);
    startTimer();

    const q = currentQuiz[current];

    // ✅ QUESTION NUMBER
    questionEl.innerText = "Q" + (current + 1) + ". " + q.question;

    // ✅ PROGRESS
    progressEl.innerText = "Question " + (current + 1) + " / " + currentQuiz.length;

    optionsEl.innerHTML = "";
    explanationEl.innerText = "";

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

    const q = currentQuiz[current];
    const correct = q.correct;
    const buttons = optionsEl.querySelectorAll("button");

    buttons.forEach(b => b.disabled = true);

    if (i === correct) {
        btn.style.background = "green";
        score++;
        explanationEl.innerText = "✅ " + q.explanation;
    } else {
        btn.style.background = "red";
        buttons[correct].style.background = "green";

        explanationEl.innerText =
            "❌ Correct: " +
            q.options[correct] +
            " | " +
            q.explanation;
    }

    nextBtn.style.display = "block";
}

/* -------- NEXT QUESTION -------- */
function nextQuestion() {
    current++;
    loadQuestion();
}

/* -------- FINISH QUIZ -------- */
function finishQuiz() {
    clearInterval(timer);

    questionEl.innerText = "Quiz Completed 🎉";
    optionsEl.innerHTML = "";
    nextBtn.style.display = "none";
    explanationEl.innerText = "";

    scoreEl.innerText = "Score: " + score + " / " + currentQuiz.length;
}

/* -------- START -------- */
if (currentQuiz.length > 0) {
    loadQuestion();
}
