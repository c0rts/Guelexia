const imagens = [
    { caminho: 'imagens/Bola.png', resposta: 'Bola' },
    { caminho: 'imagens/Carro.png', resposta: 'Carro' },
    { caminho: 'imagens/Cubo.png', resposta: 'Cubo' },
    { caminho: 'imagens/Estrela.png', resposta: 'Estrela' },
];
let botao0, botao1, botao2, botao3, contador;
let valorAcertos = 0;

// Função para gerar um índice aleatório
function getRandomIndex(arr) {
    return Math.floor(Math.random() * arr.length);
}

// Função para atualizar a imagem
function updateImage() {
    const imageElement = document.getElementById('imagem_qst');
    const imagen = imagens[getRandomIndex(imagens)];
    const randomImage = imagen.caminho;
    let respostas = [imagen.resposta];
    pegarRespostas(respostas);
    imageElement.src = randomImage;
    Respostas_btn(respostas);
    contador.innerHTML = valorAcertos;
    valorAcertos++;
}

function pegarRespostas(respostas) {
    // enquanto o tamanho do array de respostas for menor que 4 ele vai ficar fazendo essa rotina
    while (respostas.length < 4) {
        let imagen = imagens[getRandomIndex(imagens)];
        if (!respostas.includes(imagen.resposta)) {
            respostas.push(imagen.resposta);
        }
    }

    // Embaralhar as respostas 
    respostas.sort(() => Math.random() - 0.5);
}

function Respostas_btn(respostas) {
    // Seleciona os botões pelo ID e altera o texto deles
    botao0.textContent = respostas[0];
    botao1.textContent = respostas[1];
    botao2.textContent = respostas[2];
    botao3.textContent = respostas[3];
}

document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os botões com a classe "opcao_btn"
    const buttons = document.querySelectorAll('.opcao_btn');

    // Seleciona um por um os botões após o carregamento completo do context do site
    botao0 = document.getElementById('opcao_btn_0');
    botao1 = document.getElementById('opcao_btn_1');
    botao2 = document.getElementById('opcao_btn_2');
    botao3 = document.getElementById('opcao_btn_3');
    contador = document.getElementById('contador');

    // Adiciona um ouvinte de evento a cada botão
    buttons.forEach(button => {
        button.addEventListener('click', updateImage);
    });

    // Atualiza a imagem quando a página carrega
    updateImage();
});