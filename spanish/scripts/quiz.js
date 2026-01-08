export function initQuiz(vocab, totalQuestions = 10) {
    const words = Object.keys(vocab);
    let score = 0;
    let questionIndex = 0;
    let currentWord = "";

    document.getElementById('total').textContent = totalQuestions;

    function getRandomOptions(correctAnswer) {
        const allAnswers = Object.values(vocab).flat().filter(a => !correctAnswer.includes(a));
        const shuffled = allAnswers.sort(() => Math.random() - 0.5);
        const wrongOptions = shuffled.slice(0, 3);
        const options = [...wrongOptions, correctAnswer[0]];
        return options.sort(() => Math.random() - 0.5);
    }

    function loadQuestion() {
        if (questionIndex >= totalQuestions) {
            document.getElementById('quiz-container').innerHTML = `
                <h3>Quiz complete!</h3>
                <p>Your final score: ${score} out of ${totalQuestions}</p>
                <button onclick="window.restartQuiz()" style="padding: 10px 20px; font-size: 1em; margin-top: 20px;">🔁 Play Again</button>
            `;
            return;
        }

        currentWord = words[Math.floor(Math.random() * words.length)];
        const correctAnswers = vocab[currentWord];
        const options = getRandomOptions(correctAnswers);

        document.getElementById('word').textContent = currentWord;
        document.getElementById('options').innerHTML = "";

        options.forEach(option => {
            const btn = document.createElement("div");
            btn.textContent = option;
            btn.className = "option-card";
            btn.onclick = () => checkAnswer(option, correctAnswers);
            document.getElementById("options").appendChild(btn);
        });

        document.getElementById("feedback").textContent = "";
    }

    function checkAnswer(selected, correctAnswers) {
        if (correctAnswers.map(a => a.toLowerCase()).includes(selected.toLowerCase())) {
            score++;
            document.getElementById("feedback").textContent = "✅ Correct!";
        } else {
            document.getElementById("feedback").textContent = `❌ Wrong. Correct answer: ${correctAnswers[0]}`;
        }

        document.getElementById("score").textContent = score;
        questionIndex++;
        setTimeout(loadQuestion, 1500);
    }

    function restartQuiz() {
        score = 0;
        questionIndex = 0;

        document.getElementById('quiz-container').innerHTML = `
            <p><strong id="word" style="font-size: 1.5em;"></strong></p>
            <div id="options" class="option-grid"></div>
            <p id="feedback"></p>
            <p>Score: <span id="score">0</span> / <span id="total">${totalQuestions}</span></p>
        `;

        loadQuestion();
    }

    window.restartQuiz = restartQuiz;
    loadQuestion();
}
