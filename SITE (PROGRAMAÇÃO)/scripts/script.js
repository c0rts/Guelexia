import { valorpic } from "./components/fts-head.js";

const tarefa = document.querySelectorAll("#tarefa"); 
// AQUI EU SELECIONO TODAS AS IMAGENS DE TAREFA TLGD? AI VAI DE 0 A 3

const tema = localStorage.getItem("theme");

if(tema == 'light') {

    tarefa[0].setAttribute("src", "../assets/fts-perfil/FT3.png");
} else {

    tarefa[0].setAttribute("src", "../assets/tar.png");
}

document.getElementById('perfil-ft').setAttribute('src', valorpic);

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