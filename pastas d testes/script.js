import  imagens_1  from "./level1.js";

console.log(imagens_1[0]);

let botao0, botao1, botao2, botao3, contador;
let valorAcertos = 0;

// Função para gerar um índice aleatório
function getRandomIndex(arr) {
    return Math.floor(Math.random() * arr.length);
}

// Função para atualizar a imagem
function updateImage() {
    const imageElement = document.getElementById('imagem_qst');
    const imagem = imagens_1[getRandomIndex(imagens_1)];
    const randomImage = imagem.caminho;
    let respostasArray = [imagem.resposta];

    pegarRespostas(respostasArray);
    respostasBotoes(respostasArray);
    respostaCerta(imagem.resposta);

    imageElement.src = randomImage;

    contador.innerHTML = valorAcertos;
}

function pegarRespostas(respostasArray) {
    // enquanto o tamanho do array de respostas for menor que 4 ele vai ficar fazendo essa rotina
    while (respostasArray.length < 4) {
        let imagem = imagens_1[getRandomIndex(imagens_1)];
        if (!respostasArray.includes(imagem.resposta)) {
            respostasArray.push(imagem.resposta);
        }
    }

    // Embaralhar as respostas 
    respostasArray.sort(() => Math.random() - 0.5);
}

function respostasBotoes(respostasArray) {
    // Seleciona os botões pelo ID e altera o texto deles
    botao0.textContent = respostasArray[0];
    botao1.textContent = respostasArray[1];
    botao2.textContent = respostasArray[2];
    botao3.textContent = respostasArray[3];
}

function removerRespostasBotoes() {

    let botoes = [botao0, botao1, botao2, botao3];
    botoes.forEach(botao => { // clona um botão e substitui o botão original pelo seu clone, isso faz com que remova o evento que o botão que foi clonado tinha
        let novoBotao = botao.cloneNode(true);
        botao.parentNode.replaceChild(novoBotao, botao);
    });

    // Reatribuir os novos botões aos identificadores
    botao0 = document.getElementById('opcao_btn_0');
    botao1 = document.getElementById('opcao_btn_1');
    botao2 = document.getElementById('opcao_btn_2');
    botao3 = document.getElementById('opcao_btn_3');
}

function respostaCerta(respostaCerta) {
    removerRespostasBotoes();

    let botoes = [botao0, botao1, botao2, botao3];

    botoes.forEach(botao => {
        if (botao.textContent == respostaCerta) { // se o botão clicado for o certo ele adiciona ao contador
            botao.addEventListener('click', () => {
                valorAcertos++;
                updateImage();
            });
        } else { // senão ele apenas troca a imagem e troca a resposta, sem adicionar ao contador
            botao.addEventListener('click', updateImage);
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {

    // Seleciona um por um os botões após o carregamento completo do context do site
    botao0 = document.getElementById('opcao_btn_0');
    botao1 = document.getElementById('opcao_btn_1');
    botao2 = document.getElementById('opcao_btn_2');
    botao3 = document.getElementById('opcao_btn_3');
    contador = document.getElementById('contador');

    // Atualiza a imagem quando a página carrega
    updateImage();
});
