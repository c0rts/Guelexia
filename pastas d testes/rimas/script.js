let selectedWordLeft = null;
let selectedWordRight = null;
let score = 0;

const wordsLeft = document.querySelectorAll('.left-list .word');
const wordsRight = document.querySelectorAll('.right-list .word');
const scoreDisplay = document.getElementById('score');

// Lista de rimas predefinida
const rhymePairs = {
    "casa": "asa",
    "mato": "gato",
    "faca": "traca"
};

function resetSelection() {
    if (selectedWordLeft) selectedWordLeft.classList.remove('selected');
    if (selectedWordRight) selectedWordRight.classList.remove('selected');
    selectedWordLeft = null;
    selectedWordRight = null;
}

function checkRhyme() {
    const leftWord = selectedWordLeft.getAttribute('data-word');
    const rightWord = selectedWordRight.getAttribute('data-word');

    if (rhymePairs[leftWord] === rightWord) {
        score++;
        scoreDisplay.textContent = `Pontos: ${score}`;
        selectedWordLeft.classList.add('selected');
        selectedWordRight.classList.add('selected');
        setTimeout(() => {
            selectedWordLeft.style.visibility = 'hidden';
            selectedWordRight.style.visibility = 'hidden';
            resetSelection();
        }, 1000);
    } else {
        selectedWordLeft.classList.add('error');
        selectedWordRight.classList.add('error');
        setTimeout(() => {
            selectedWordLeft.classList.remove('error');
            selectedWordRight.classList.remove('error');
            resetSelection();
        }, 500);
    }
}

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
