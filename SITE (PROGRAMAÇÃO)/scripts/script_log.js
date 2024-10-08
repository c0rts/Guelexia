

// Função para alternar entre os modos de login e cadastro
document.addEventListener('DOMContentLoaded', function() {
    const switchInput = document.getElementById('switch');
    const cadastroForm = document.getElementById('cadastroForm');
    const loginForm = document.getElementById('loginForm');
    
    switchInput.addEventListener('change', function() {
        if (this.checked) {
            // Modo Login
            cadastroForm.classList.add('hidden');
            loginForm.classList.remove('hidden');
        } else {
            // Modo Cadastro
            cadastroForm.classList.remove('hidden');
            loginForm.classList.add('hidden');
        }
    });
});

// Função para alternar visibilidade da senha no formulário de login
function AlternarsenhavisivelLogin() {
    var passwordInput = document.getElementById("senha_login");
    var toggleIcon = document.getElementById("imagem-alternar-login");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleIcon.src = "../assets/olho-fechado.png";
        toggleIcon.alt = "Esconder Senha";
    } else {
        passwordInput.type = "password";
        toggleIcon.src = "../assets/olho-aberto.png";
        toggleIcon.alt = "Mostrar Senha";
    }
}

const cadastroForm = document.getElementById('cadastroForm');
cadastroForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    fetch('http://localhost/Guelexia/SITE%20(PROGRAMA%C3%87%C3%83O)/scripts/php/login.php', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.text())
    .then(data => {
        const jsonData = JSON.parse(data);
        if (jsonData.status === 'sucesso') {
            // Armazena o e-mail no localStorage
            localStorage.setItem('emailUser', formData.get('email'));
            localStorage.setItem('username', formData.get('username'));
            localStorage.setItem('pic', 4);
            window.location.href = jsonData.redirect; // Redireciona para a página de sucesso
        } else {
            alert(jsonData.message || jsonData.status);
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Ocorreu um erro: ' + error.message);
    });
});

// Similar para o loginForm
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    fetch('http://localhost/Guelexia/SITE%20(PROGRAMA%C3%87%C3%83O)/scripts/php/login.php', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.text())
    .then(data => {
        const jsonData = JSON.parse(data);
        if (jsonData.status === 'sucesso') {
            // Armazena o e-mail no localStorage
            localStorage.setItem('emailUser', jsonData.email); // Use o campo correto aqui
            localStorage.setItem('username', formData.get('usuario_login'));
            localStorage.setItem('pic', 4);
            window.location.href = jsonData.redirect; // Redireciona para a página de sucesso
        } else {
            alert(jsonData.message || jsonData.status);
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Ocorreu um erro: ' + error.message);
    });
});
