 let quizData = {

    /* 🔥 MOCK TEST 1 (100 QUESTIONS) */
    test1: [
        {
            question: "Which hormone regulates milk ejection?",
            options: ["Prolactin", "Oxytocin", "Estrogen", "Progesterone"],
            correct: 1,
            explanation: "Oxytocin causes contraction of myoepithelial cells leading to milk ejection."
        },
        {
            question: "Gestation period of cow?",
            options: ["260 days", "280 days", "300 days", "320 days"],
            correct: 1,
            explanation: "The gestation period of cow is approximately 280 days."
        },
        {
            question: "Normal rumen pH range?",
            options: ["4–5", "5.5–7", "7–8", "8–9"],
            correct: 1,
            explanation: "Normal rumen pH ranges from 5.5 to 7 depending on diet."
        }
    ],

    /* ❌ MOCK TEST 2 EMPTY */
    test2: []
};


/* 🔥 AUTO-GENERATE REMAINING QUESTIONS (SAFE METHOD) */
for (let i = 4; i <= 100; i++) {
    quizData.test1.push({
        question: "Veterinary Question " + i + "?",
        options: [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        correct: i % 4,
        explanation: "Explanation for Veterinary Question " + i + "."
    });
}
