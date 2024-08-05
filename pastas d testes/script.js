const images = [
    { caminho: 'imagens/Bola.png', resposta: 'Bola' },
    { caminho: 'imagens/Carro.png', resposta: 'Carro' },
    { caminho: 'imagens/Cubo.png', resposta: 'Cubo' },
    { caminho: 'imagens/Estrela.png', resposta: 'Estrela' },
];

const btn0 = document.getElementsByClassName('0');
const btn1 = document.getElementsByClassName('1');
const btn2 = document.getElementsByClassName('2');
const btn3 = document.getElementsByClassName('3');

let respostas = [];

// Função para gerar um índice aleatório
function getRandomIndex(arr) {
    return Math.floor(Math.random() * arr.length);
}

// Função para atualizar a imagem
function updateImage() {
    const imageElement = document.getElementById('imagem_qst');
    const image = images[getRandomIndex(images)];
    const randomImage = image.caminho;
    respostas.push(image.resposta);
    pegarRespostas();
    imageElement.src = randomImage;
    Respostas_btn();
}

function pegarRespostas(){
    for(let i = 0; i<3; i++){
        let image = images[getRandomIndex(images)];
        if(!respostas.includes(image.resposta)){
            respostas.push(image.resposta);
        }else{
            i--;
        }
    }
};

function Respostas_btn() {
    // Seleciona os botões pelo ID e altera o texto deles
    document.getElementById('opcao_btn_0').textContent = respostas[0];
    document.getElementById('opcao_btn_1').textContent = respostas[1];
    document.getElementById('opcao_btn_2').textContent = respostas[2];
    document.getElementById('opcao_btn_3').textContent = respostas[3];
}

document.addEventListener('DOMContentLoaded', () => {

    // Seleciona todos os botões com a classe "opcao_btn"
    const buttons = document.querySelectorAll('.opcao_btn');

    // Adiciona um ouvinte de evento a cada botão
    buttons.forEach(button => {
        button.addEventListener('click', updateImage);
    });
});

// Atualiza a imagem quando a página carrega
window.onload = updateImage;