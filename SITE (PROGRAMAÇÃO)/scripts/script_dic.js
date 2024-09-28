import { valorpic } from "./components/fts-head.js";
document.getElementById('perfil-ft').setAttribute('src', valorpic);

document.getElementById('btn-confirm').addEventListener('click', sendRequest);


function sendRequest() {
    const word = document.getElementById('palavra').value;

    if(!word) {
        throw new Error ('Por favor insira uma palavra.');
    }

    fetch(`https://api.dicionario-aberto.net/word/${word}`)
        .then(response => {
            if(!response.ok){
                throw new Error('Palavra não encontrada ou erro na digitação');
            }
            return response.json();
        })
        .then(data => {
            if(data.legth === 0 ){
                throw new Error('Nenhuma definição encontrada, peço desculpas');
            }

            const xmlString = data[0].xml;
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlString, 'text/xml');

            const definitions = Array.from(xmlDoc.getElementsByTagName('def')).map(def => def.textContent.trim());
            const definitionsP = document.getElementById('caixa');

            definitionsP.innerHTML = definitions.join('<br>');
        })
}