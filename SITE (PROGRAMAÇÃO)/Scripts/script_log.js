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
        toggleIcon.src = "assests/olho-fechado.png";
        toggleIcon.alt = "Esconder Senha";
    } else {
        passwordInput.type = "password";
        toggleIcon.src = "assests/olho-aberto.png";
        toggleIcon.alt = "Mostrar Senha";
    }
}
