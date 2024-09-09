let selectedWordLeft = null;
let selectedWordRight = null;
let score = 0;
const maxScore = 10; // Número máximo de pares possíveis

const rhymePairs = [
    {par1: "a", par2: "aa"},
    {par1: "b", par2: "bb"},
    {par1: "c", par2: "cc"},
    {par1: "d", par2: "dd"},
    {par1: "e", par2: "ee"},
    {par1: "f", par2: "ff"},
    {par1: "g", par2: "gg"},
    {par1: "h", par2: "hh"},
    {par1: "i", par2: "ii"},
    {par1: "j", par2: "jj"},
    {par1: "k", par2: "kk"},
    {par1: "l", par2: "ll"},
    {par1: "m", par2: "mm"},
    {par1: "n", par2: "nn"},
    {par1: "o", par2: "oo"},
    {par1: "p", par2: "pp"},
    {par1: "q", par2: "qq"}
];

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
    
    let wordsRigthAndLeft = [rhymePairs[getRandomIndex(rhymePairs)]];
    
    let wordsLeft = [wordsRigthAndLeft[0].par1];
    let wordsRight = [wordsRigthAndLeft[0].par2];
    
    wordsRigthAndLeft = [[], []];

    while (wordsLeft.length < 10) {
        const wordsToAdd = rhymePairs[getRandomIndex(rhymePairs)];
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

    for(let i = 0; i < 10; i++) {

        const divToClick = document.createElement("div");
        divToClick.className = "word";
        divToClick.setAttribute("data-word", `${wordsRightAndLeft[0][i]}`);
        divToClick.textContent = `${wordsRightAndLeft[0][i]}`

        leftListHtml.appendChild(divToClick);
    }

    for(let i = 0; i < 10; i++) {

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

    for(const element of rhymePairs) {

        if(element.par1 === leftWord && element.par2 === rightWord) {

            score++;
            scoreDisplay.textContent = `Pontos: ${score}`;
            selectedWordLeft.classList.add('selected');
            selectedWordRight.classList.add('selected');
            selectedWordLeft.classList.remove('selected');
                selectedWordLeft.classList.remove('selected');
                100
                selectedWordLeft.classList.add('correct');
                selectedWordRight.classList.add('correct');
            setTimeout(() => {
                selectedWordLeft.style.visibility = 'hidden';
                selectedWordRight.style.visibility = 'hidden';
                resetSelection();
                checkGameOver();
            }, 500);

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
            }, 200);
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