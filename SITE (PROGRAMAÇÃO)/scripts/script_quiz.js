import { Questions } from "./levels/_level1.js";
import { valorpic } from "./components/fts-head.js";
document.getElementById('perfil-ft').setAttribute('src', valorpic);

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

function applyFontSize() {

    const body = document.querySelector('*');
    const fontLevel = localStorage.getItem("fontLevel");

    if (fontLevel === '1') {

        body.style.fontSize = '20px';
        console.log('Tamanho da fonte pequena');

    } else if (fontLevel === '2') {

        body.style.fontSize = '40px';
        console.log('Tamanho da fonte média');

    } else if (fontLevel === '3') {

        body.style.fontSize = '60px';
        console.log('Tamanho da fonte grande');

    } else {

        console.error("Nível de fonte inválido ou não definido!");

    }
}

if (!localStorage.getItem("fontLevel")) {
    localStorage.setItem("fontLevel", '1');
}
applyFontSize();