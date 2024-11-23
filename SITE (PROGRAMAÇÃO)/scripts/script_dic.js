import { valorpic } from "./components/fts-head.js";
document.getElementById('perfil-ft').setAttribute('src', valorpic);

document.getElementById('btn-confirm').addEventListener('click', sendRequest);


function sendRequest() {
    const word = document.getElementById('palavra').value;

    if(!word) {
        throw new Error ('Por favor insira uma palavra.');
    }

    fetch(`https://api.dicionario-aberto.net/word/${word.toLowerCase()}`)
        .then(response => {
            if(!response.ok){
                throw new alert('Palavra não encontrada ou erro na digitação');
            }
            return response.json();
        })
        .then(data => {
            if(data.legth === 0 ){
                throw new alert('Nenhuma definição encontrada, peço desculpas');
            }

            const xmlString = data[0].xml;
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlString, 'text/xml');

            const definitions = Array.from(xmlDoc.getElementsByTagName('def')).map(def => def.textContent.trim());
            const definitionsP = document.getElementById('caixa');

            definitionsP.innerHTML = definitions.join('<br>');
        })
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