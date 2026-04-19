 let quizData = {

    test1: [
        {
            question: "Which hormone regulates milk ejection?",
            options: ["Prolactin", "Oxytocin", "Estrogen", "Progesterone"],
            correct: 1,
            explanation: "Oxytocin causes milk let-down."
        },
        {
            question: "Gestation period of cow?",
            options: ["260", "280", "300", "320"],
            correct: 1,
            explanation: "Cow gestation period is about 280 days."
        },
        {
            question: "Normal rumen pH?",
            options: ["4–5", "5.5–7", "7–8", "8–9"],
            correct: 1,
            explanation: "Normal rumen pH is 5.5–7."
        },

        // AUTO 100
        ...Array.from({ length: 97 }, (_, i) => ({
            question: `Veterinary Question ${i + 4}?`,
            options: ["Option A", "Option B", "Option C", "Option D"],
            correct: i % 4,
            explanation: `Explanation for question ${i + 4}.`
        }))
    ],

    test2: [] // EMPTY
};
