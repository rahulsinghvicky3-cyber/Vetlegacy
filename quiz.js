 
/* ------------------ YOUR QUESTIONS ------------------ */
let quizData = {
    easy: [],
    medium: [],
    hard: [

        {
            question: "Which hormone primarily regulates milk ejection reflex?",
            options: ["Prolactin", "Oxytocin", "Estrogen", "Progesterone"],
            correct: 1
        },
        {
            question: "Which VFA is glucogenic in ruminants?",
            options: ["Acetate", "Butyrate", "Propionate", "Valerate"],
            correct: 2
        },
        {
            question: "Milk fever is due to deficiency of?",
            options: ["Magnesium", "Calcium", "Phosphorus", "Iron"],
            correct: 1
        },
        {
            question: "Ketosis occurs due to deficiency of?",
            options: ["Protein", "Energy", "Minerals", "Water"],
            correct: 1
        },
        {
            question: "Placenta type in cow?",
            options: ["Diffuse", "Cotyledonary", "Zonary", "Discoidal"],
            correct: 1
        }

        // 👉 ADD rest of your questions here (keep format same)

    ]
};

/* ------------------ QUIZ ENGINE ------------------ */

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

let currentQuiz = quizData["hard"]; // default

difficultyEl.addEventListener("change", () => {
    current = 0;
    score = 0;
    currentQuiz = quizData[difficultyEl.value];
    loadQuestion();
});

/* TIMER */
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

/* LOAD QUESTION */
function loadQuestion() {
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

/* CHECK ANSWER */
function checkAnswer(i, btn) {
    clearInterval(timer);

    const correct = currentQuiz[current].correct;
    const buttons = optionsEl.querySelectorAll("button");

    buttons.forEach(b => b.disabled = true);

    if (i === correct) {
        btn.classList.add("correct");
        score++;
    } else {
        btn.classList.add("wrong");
        buttons[correct].classList.add("correct");
    }

    nextBtn.style.display = "block";
}

/* NEXT QUESTION */
function nextQuestion() {
    current++;

    if (current < currentQuiz.length) {
        loadQuestion();
    } else {
        questionEl.innerText = "Quiz Completed 🎉";
        optionsEl.innerHTML = "";
        nextBtn.style.display = "none";
        scoreEl.innerText = "Score: " + score + "/" + currentQuiz.length;
    }
}

/* START */
loadQuestion();
