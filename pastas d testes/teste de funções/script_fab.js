const questions = [
    {
        question: "Qual é a capital da França?",
        answers: ["Paris", "Londres", "Roma", "Madri"],
        correct: "Paris"
    },
    {
        question: "Qual é o maior planeta do Sistema Solar?",
        answers: ["Terra", "Marte", "Júpiter", "Saturno"],
        correct: "Júpiter"
    },
    {
        question: "Quem pintou a Mona Lisa?",
        answers: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Donatello"],
        correct: "Leonardo da Vinci"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question').textContent = currentQuestion.question;

    const answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = '';

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.addEventListener('click', () => selectAnswer(answer));
        answersDiv.appendChild(button);
    });
}

function selectAnswer(selectedAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correct) {
        score++;
        document.getElementById('score').textContent = score;
        nextQuestion();
    } else {
        const buttons = document.querySelectorAll('#answers button');
        buttons.forEach(button => {
            if (button.textContent === selectedAnswer) {
                button.classList.add('hidden');
            }
        });
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        alert("Você completou o quiz! Pontuação final: " + score);
        currentQuestionIndex = 0;
        score = 0;
        document.getElementById('score').textContent = score;
        loadQuestion();
    }
}

// Inicializa a primeira pergunta
loadQuestion();