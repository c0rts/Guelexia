import {pics} from './components/fts-head.js';
const tema = document.getElementById('tema');
const body = document.body;


document.querySelectorAll('.btn-dif').forEach(button => {

    button.addEventListener('click', () => {

        localStorage.setItem("diffLevel", button.value);
    });
});

// Verifica o tema atual e aplica a classe correspondente
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
    tema.textContent = 'Mudar para Claro';
} else {
        body.classList.add('light-theme');
        tema.textContent = 'Mudar para Escuro';
}

tema.addEventListener('click', () => {
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        tema.textContent = 'Mudar para Claro';
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        tema.textContent = 'Mudar para Escuro';
        localStorage.setItem('theme', 'light');
    }
});

document.getElementById("email").textContent = localStorage.getItem("emailUser");

document.getElementById('username').value = localStorage.getItem('username');

console.log(localStorage.getItem('pic'));

document.getElementById('perfil-pic').setAttribute('src', pics[localStorage.getItem('pic')].caminho)

// todos os botões de miniatura
const miniButtons = document.querySelectorAll('.mini-ft');
const perfilPic = document.getElementById('perfil-pic');

miniButtons.forEach(button => {
    button.addEventListener('click', () => {

        // Obtém o valor do botão (o índice da imagem)
        const picIndex = button.value;

        // Atualiza o src do perfil
        const selectedPic = pics[picIndex].caminho;
        perfilPic.setAttribute('src', selectedPic);

        localStorage.setItem('pic', picIndex);
    });
});


document.getElementById("saveProfile").addEventListener('click', function() {

    const username = document.getElementById("username").value;
    const lastUsername = localStorage.getItem("username");
    localStorage.setItem("username", username);
    const picture_id = localStorage.getItem("pic");

    const formData = new FormData();
    formData.append('username', username);
    formData.append('picture_id', picture_id);
    formData.append('lastUsername', lastUsername);

    fetch('http://localhost/Guelexia/SITE%20(PROGRAMA%C3%87%C3%83O)/scripts/php/updateProfile.php', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json()) // Certifique-se de que a resposta é JSON
    .then(data => {
        if (data.status === 'sucesso') {
            window.location.href = data.redirect; // Redireciona para a página de configurações
        } else {
            alert(data.message || data.status);
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Ocorreu um erro: ' + error.message);
    });
});
