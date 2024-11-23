import { Parrimas3 } from "./levels/_level3.js";
import { Parrimas2 } from "./levels/_level2.js";
import { Parrimas } from "./levels/_level1.js";
import { valorpic } from "./components/fts-head.js";
document.getElementById('perfil-ft').setAttribute('src', valorpic);
let selectedWordLeft = null;
let selectedWordRight = null;
let score = 0;
const maxScore = 6; // Número máximo de pares possíveis

const diffLevel = localStorage.getItem("diffLevel");
let rimespairsdiff ;

if(diffLevel == '1') {

    rimespairsdiff = Parrimas;
} else if(diffLevel == '2') {

    rimespairsdiff = Parrimas2;
} else if(diffLevel == '3') {

    rimespairsdiff = Parrimas3;
} else if(!diffLevel) {

    localStorage.setItem("diffLevel", 1);
    rimespairsdiff = Parrimas;
} else {

    throw new Error("There is no level difficult!");
}


startingGame();


function startingGame() {

    createDivDataWordHtml();

    const wordsLeft = document.querySelectorAll('.left-list .word');
    const wordsRight = document.querySelectorAll('.right-list .word');

    // Adicionar eventos para palavras do lado esquerdo
    wordsLeft.forEach(word => {
        word.addEventListener('click', () => {
            if (selectedWordLeft) {
                selectedWordLeft.classList.remove('selected');
            }
            selectedWordLeft = word;
            word.classList.add('selected');
            if (selectedWordRight) {
                checkRhyme();
            }
        });
    });

    // Adicionar eventos para palavras do lado direito
    wordsRight.forEach(word => {
        word.addEventListener('click', () => {
            if (selectedWordRight) {
                selectedWordRight.classList.remove('selected');
            }
            selectedWordRight = word;
            word.classList.add('selected');
            if (selectedWordLeft) {
                checkRhyme();
            }
        });
    });
}

const scoreDisplay = document.getElementById('score');

function resetSelection() {
    if (selectedWordLeft) selectedWordLeft.classList.remove('selected');
    if (selectedWordRight) selectedWordRight.classList.remove('selected');
    selectedWordLeft = null;
    selectedWordRight = null;
}

function getRandomIndex(arr) {
    return Math.floor(Math.random() * arr.length);
}

function randomizeWords() {
    
    let wordsRigthAndLeft = [rimespairsdiff[getRandomIndex(rimespairsdiff)]];
    
    let wordsLeft = [wordsRigthAndLeft[0].par1];
    let wordsRight = [wordsRigthAndLeft[0].par2];
    
    wordsRigthAndLeft = [[], []];

    while (wordsLeft.length < 6) {
        const wordsToAdd = rimespairsdiff[getRandomIndex(rimespairsdiff)];
        if (!wordsLeft.includes(wordsToAdd.par1)) {
            wordsLeft.push(wordsToAdd.par1);
            wordsRight.push(wordsToAdd.par2);
        }
    }

    wordsRight = wordsRight.sort(() => Math.random() - 0.5);

    wordsRigthAndLeft[0] = wordsLeft;
    wordsRigthAndLeft[1] = wordsRight;

    return wordsRigthAndLeft;
}

function createDivDataWordHtml() {

    const wordsRightAndLeft = randomizeWords();

    const leftListHtml = document.querySelector(".left-list");
    const rightListHtml = document.querySelector(".right-list");

    for(let i = 0; i < 6; i++) {

        const divToClick = document.createElement("div");
        divToClick.className = "word";
        divToClick.setAttribute("data-word", `${wordsRightAndLeft[0][i]}`);
        divToClick.textContent = `${wordsRightAndLeft[0][i]}`

        leftListHtml.appendChild(divToClick);
    }

    for(let i = 0; i < 6; i++) {

        const divToClick = document.createElement("div");
        divToClick.className = "word";
        divToClick.setAttribute("data-word", `${wordsRightAndLeft[1][i]}`);
        divToClick.textContent = `${wordsRightAndLeft[1][i]}`

        rightListHtml.appendChild(divToClick);
    }
}

function checkRhyme() {

    const leftWord = selectedWordLeft.getAttribute('data-word');
    const rightWord = selectedWordRight.getAttribute('data-word');

    for(const element of rimespairsdiff) {

        if(element.par1 === leftWord && element.par2 === rightWord) {

            score++;
            scoreDisplay.textContent = `Pontos: ${score}`;
            selectedWordLeft.classList.add('selected');
            selectedWordRight.classList.add('selected');
            selectedWordLeft.classList.remove('selected');
            selectedWordLeft.classList.remove('selected');
            selectedWordLeft.classList.add('correct');
            selectedWordRight.classList.add('correct');
            setTimeout(() => {
                selectedWordLeft.style.visibility = 'hidden';
                selectedWordRight.style.visibility = 'hidden';
                resetSelection();
                checkGameOver();
            }, 750);

            break;  
        } 
        
        if(element.par1 === leftWord && element.par2 !== rightWord) {

            if(score > 0) {
                score--;
            }
            scoreDisplay.textContent = `Pontos: ${score}`;
            selectedWordLeft.classList.add('error');
            selectedWordRight.classList.add('error');
            setTimeout(() => {
                selectedWordLeft.classList.remove('error');
                selectedWordRight.classList.remove('error');
                resetSelection();
            }, 750);
            break;
        }
    }
}

function checkGameOver() {
    
    const remainingWordsLeft = document.querySelectorAll('.left-list .word:not([style*="visibility: hidden"])').length;
    console.log(remainingWordsLeft);
    if(remainingWordsLeft === 0) {
        setTimeout(() => {
            alert(`Fim do jogo! Você acertou ${score} de ${maxScore} pares possíveis.`);
        }, 500)
    }
}

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