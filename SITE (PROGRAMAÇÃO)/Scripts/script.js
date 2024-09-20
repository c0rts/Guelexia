const tarefaimg = document.getElementById('tarefa');
const theme = localStorage.getItem('theme');


if(theme === 'light') {

    tarefaimg.src = 'assests/fts-perfil/FT4.png'
} else {

    tarefaimg.src = 'assests/tar.png';
}