 let quizData = {

    test1: [
        {
            question: "Which hormone regulates milk ejection?",
            options: ["Prolactin", "Oxytocin", "Estrogen", "Progesterone"],
            correct: 1,
            explanation: "Oxytocin causes contraction of myoepithelial cells leading to milk ejection."
        },
        {
            question: "Gestation period of cow?",
            options: ["260", "280", "300", "320"],
            correct: 1,
            explanation: "Average gestation period of cow is about 280 days."
        },
        {
            question: "Rumen pH range?",
            options: ["4–5", "5.5–7", "7–8", "8–9"],
            correct: 1,
            explanation: "Normal rumen pH ranges from 5.5 to 7 depending on diet."
        },

        // 👉 AUTO 100 QUESTIONS
        ...Array.from({ length: 97 }, (_, i) => ({
            question: `Veterinary Question ${i + 4}?`,
            options: ["Option A", "Option B", "Option C", "Option D"],
            correct: i % 4,
            explanation: `Explanation for question ${i + 4}.`
        }))
    ],

    test2: [
        {
            question: "Test 2 coming soon",
            options: ["A", "B", "C", "D"],
            correct: 0,
            explanation: "More questions will be added soon."
        }
    ]
};
