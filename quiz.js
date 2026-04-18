const quizData = [
    {
        question: "Which nerve is blocked in paravertebral anesthesia?",
        options: ["T10", "T13-L2", "L4", "S1"],
        correct: 1
    },
    {
        question: "Normal body temperature of cow is?",
        options: ["36°C", "38.5°C", "40°C", "42°C"],
        correct: 1
    },
    {
        question: "Which vitamin is synthesized in rumen?",
        options: ["Vitamin C", "Vitamin B complex", "Vitamin D", "Vitamin A"],
        correct: 1
    }
];

let current = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");

function loadQuestion() {
    const q = quizData[current];
    questionEl.innerText = q.question;
    optionsEl.innerHTML = "";

    q.options.forEach((opt, index) => {
        const btn = document.createElement("button");
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(index, btn);
        optionsEl.appendChild(btn);
    });

    nextBtn.style.display = "none";
}

function checkAnswer(index, btn) {
    const correct = quizData[current].correct;
    const buttons = optionsEl.querySelectorAll("button");

    buttons.forEach(b => b.disabled = true);

    if(index === correct){
        btn.classList.add("correct");
        score++;
    } else {
        btn.classList.add("wrong");
        buttons[correct].classList.add("correct");
    }

    nextBtn.style.display = "block";
}

function nextQuestion() {
    current++;

    if(current < quizData.length){
        loadQuestion();
    } else {
        questionEl.innerText = "Quiz Completed 🎉";
        optionsEl.innerHTML = "";
        nextBtn.style.display = "none";
        scoreEl.innerText = "Your Score: " + score + "/" + quizData.length;
    }
}

loadQuestion();
