import { Questions } from "./_level1.js";

let score = 0;

function getRandomIndex(arr) {
    return Math.floor(Math.random() * arr.length);
}



function loadQuestion() {
    let newQuestion = Questions[getRandomIndex(Questions)];
    document.getElementById('per').textContent = newQuestion.question;

    const answersDiv = document.querySelectorAll('.blc-alt');
    for (let i = 0; i < answersDiv.length; i++) {
        answersDiv[i].innerHTML = '';
    }

    newQuestion.answers.forEach(answers => {
        const button = document.createElement('button');
        button.textContent = answers;
        button.addEventListener('click', () => {
            selectAnswer(answers, newQuestion);
            button.style.visibility = 'hidden';
        });
        answersDiv[0].appendChild(button);
    });
}

function selectAnswer(selectedAnswer, newQuestion){
    if(selectedAnswer === newQuestion.correct){
        score ++;
        document.getElementById('score').textContent = score;
        loadQuestion();
    }
}

loadQuestion();