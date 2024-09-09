let selectedWordLeft = null;
let selectedWordRight = null;
let score = 0;

const wordsLeft = document.querySelectorAll('.left-list .word');
const wordsRight = document.querySelectorAll('.right-list .word');
const scoreDisplay = document.getElementById('score');

// Lista de rimas predefinida
const rhymePairs = [
    {par1: "estrela", par2: "centelha"},
    {par1: "planeta", par2: "trombeta"},
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
        console.log(selectedWordLeft);
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
