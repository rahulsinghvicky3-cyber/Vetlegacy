let quizData = {
    easy: [
        {
            question: "Normal body temperature of cow?",
            options: ["36°C", "38.5°C", "40°C", "42°C"],
            correct: 1
        }
    ],
    medium: [
        {
            question: "Which nerve is blocked in paravertebral anesthesia?",
            options: ["T10", "T13-L2", "L4", "S1"],
            correct: 1
        }
    ],
    hard: [
        {
            question: "Which vitamin is synthesized in rumen?",
            options: ["Vitamin C", "Vitamin B complex", "Vitamin D", "Vitamin A"],
            correct: 1
        }
    ]
};

let current = 0;
let score = 0;
let time = 15;
let timer;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");
const timerEl = document.getElementById("timer");
const difficultyEl = document.getElementById("difficulty");

let currentQuiz = quizData[difficultyEl.value];

difficultyEl.addEventListener("change", () => {
    current = 0;
    score = 0;
    currentQuiz = quizData[difficultyEl.value];
    loadQuestion();
});

function startTimer(){
    time = 15;
    timerEl.innerText = "⏱ " + time;

    timer = setInterval(() => {
        time--;
        timerEl.innerText = "⏱ " + time;

        if(time === 0){
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

function loadQuestion(){
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

function checkAnswer(i, btn){
    clearInterval(timer);

    const correct = currentQuiz[current].correct;
    const buttons = optionsEl.querySelectorAll("button");

    buttons.forEach(b => b.disabled = true);

    if(i === correct){
        btn.classList.add("correct");
        score++;
    } else {
        btn.classList.add("wrong");
        buttons[correct].classList.add("correct");
    }

    nextBtn.style.display = "block";
}

function nextQuestion(){
    current++;

    if(current < currentQuiz.length){
        loadQuestion();
    } else {
        questionEl.innerText = "Quiz Completed 🎉";
        optionsEl.innerHTML = "";
        nextBtn.style.display = "none";
        scoreEl.innerText = "Score: " + score;
    }
}

loadQuestion();
function saveScore(){
    let scores = JSON.parse(localStorage.getItem("scores")) || [];
    scores.push(score);
    localStorage.setItem("scores", JSON.stringify(scores));
}

function showLeaderboard(){
    let scores = JSON.parse(localStorage.getItem("scores")) || [];
    scores.sort((a,b) => b-a);

    let top = scores.slice(0,5);
    scoreEl.innerHTML += "<br>Top Scores: " + top.join(", ");
}
