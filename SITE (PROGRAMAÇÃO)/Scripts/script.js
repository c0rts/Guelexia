import { valorpic } from "./components/fts-head.js";

const tarefa = document.querySelectorAll("#tarefa"); 
// AQUI EU SELECIONO TODAS AS IMAGENS DE TAREFA TLGD? AI VAI DE 0 A 3

const tema = localStorage.getItem("theme");

if(tema == 'light') {

    tarefa[0].setAttribute("src", "assests/fts-perfil/FT3.png");
} else {

    tarefa[0].setAttribute("src", "assests/tar.png");
}

document.getElementById('perfil-ft').setAttribute('src', valorpic);