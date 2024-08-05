const images = [
    { caminho: 'imagens/Bola.png', resposta: 'Bola' },
    { caminho: 'imagens/Carro.png', resposta: 'Carro' },
    { caminho: 'imagens/Cubo.png', resposta: 'Cubo' },
    { caminho: 'imagens/Estrela.png', resposta: 'Estrela' },
];

let btn0, btn1, btn2, btn3;

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

function pegarRespostas() {
    while (respostas.length < 4) {
        let image = images[getRandomIndex(images)];
        if (!respostas.includes(image.resposta)) {
            respostas.push(image.resposta);
        }
    }

    // Embaralhar as respostas 
    respostas = respostas.sort(() => Math.random() - 0.5);
}


function Respostas_btn() {
    // Seleciona os botões pelo ID e altera o texto deles
    btn0.textContent = respostas[0];
    btn1.textContent = respostas[1];
    btn2.textContent = respostas[2];
    btn3.textContent = respostas[3];
}

document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os botões com a classe "opcao_btn"
    const buttons = document.querySelectorAll('.opcao_btn');
    btn0 = document.getElementById('opcao_btn_0');
    btn1 = document.getElementById('opcao_btn_1');
    btn2 = document.getElementById('opcao_btn_2');
    btn3 = document.getElementById('opcao_btn_3');

    // Adiciona um ouvinte de evento a cada botão
    buttons.forEach(button => {
        button.addEventListener('click', updateImage);
    });

    // Atualiza a imagem quando a página carrega
    updateImage();
});