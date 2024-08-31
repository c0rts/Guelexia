let selectedWordLeft = null;
let selectedWordRight = null;
let score = 0;

const rhymePairs = [
    {par1: "estrela", par2: "constela"},
    {par1: "planeta", par2: "orbita"},
    {par1: "galaxia", par2: "via"},
    {par1: "cometa", par2: "estrela"},
    {par1: "astronauta", par2: "foguete"},
    {par1: "nave", par2: "espacial"},
    {par1: "terra", par2: "lua"},
    {par1: "satélite", par2: "orbital"},
    {par1: "buraco", par2: "negro"},
    {par1: "nebulosa", par2: "pó"},
    {par1: "meteoro", par2: "chuva"},
    {par1: "gravidade", par2: "flutua"},
    {par1: "cinturão", par2: "asteroide"},
    {par1: "sol", par2: "luz"},
    {par1: "eclipse", par2: "sombra"},
    {par1: "horizonte", par2: "eventos"},
    {par1: "galáxia", par2: "andromeda"},
    {par1: "expansão", par2: "universo"},
    {par1: "luz", par2: "velocidade"},
    {par1: "estrela", par2: "cadente"},
    {par1: "big", par2: "bang"},
    {par1: "cosmos", par2: "infinitos"},
    {par1: "via", par2: "láctea"},
    {par1: "rover", par2: "marte"},
    {par1: "quasar", par2: "energia"},
    {par1: "singularidade", par2: "tempo"},
    {par1: "orbita", par2: "trajetória"},
    {par1: "foguete", par2: "decolagem"},
    {par1: "supernova", par2: "explosão"},
    {par1: "exoplaneta", par2: "distante"},
    {par1: "marte", par2: "vermelho"},
    {par1: "luz", par2: "estrela"},
    {par1: "cinturão", par2: "kuiper"},
    {par1: "fusão", par2: "nuclear"},
    {par1: "espaço", par2: "tempo"},
    {par1: "telescope", par2: "hubble"},
    {par1: "rotação", par2: "eixo"},
    {par1: "asteroide", par2: "rocha"},
    {par1: "lunar", par2: "pouso"},
    {par1: "vacuum", par2: "vácuo"},
    {par1: "galaxia", par2: "sombrero"},
    {par1: "terra", par2: "planeta"},
    {par1: "pulsar", par2: "neutron"},
    {par1: "júpiter", par2: "gigante"},
    {par1: "saturno", par2: "anel"},
    {par1: "energia", par2: "negativa"},
    {par1: "buraco", par2: "branco"},
    {par1: "multiverso", par2: "teoria"}
];

startingGame();

function startingGame() {

    createDivDataWordHtml();
}

const wordsLeft = document.querySelectorAll('.left-list .word');
const wordsRight = document.querySelectorAll('.right-list .word');
const scoreDisplay = document.getElementById('score');

// Lista de rimas predefinida

// aleatorizar os valores disso aq para os botões direito e esquerdo

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

    while (wordsLeft.length < 11) {
        const wordsToAdd = rhymePairs[getRandomIndex(rhymePairs)];
        if (!wordsLeft.includes(wordsToAdd.par1)) {
            wordsLeft.push(wordsToAdd.par1);
            wordsRight.push(wordsToAdd.par2);
        }
    }

    wordsRight = wordsRight.sort(() => Math.random() - 0.5);

    wordsRigthAndLeft[0] = wordsLeft;
    wordsRigthAndLeft[1] = wordsRight;

    console.log(wordsRigthAndLeft);
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

        if(element.par1.match(leftWord) != null && element.par2 == rightWord) {

            console.log("ta certo");
            score++;
            scoreDisplay.textContent = `Pontos: ${score}`;
            selectedWordLeft.classList.add('selected');
            selectedWordRight.classList.add('selected');
            setTimeout(() => {
                selectedWordLeft.style.visibility = 'hidden';
                selectedWordRight.style.visibility = 'hidden';
                resetSelection();
            }, 1000);

            break;  
        } 
        
        if(element.par1.match(leftWord) != null && element.par2 != rightWord) {

            console.log("ERROU");
            selectedWordLeft.classList.add('error');
            selectedWordRight.classList.add('error');
            setTimeout(() => {
                selectedWordLeft.classList.remove('error');
                selectedWordRight.classList.remove('error');
                resetSelection();
            }, 500);
            break;
        }
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
