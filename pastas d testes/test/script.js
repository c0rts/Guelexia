document.addEventListener('DOMContentLoaded', function() {
    const switchInput = document.getElementById('checkbox');
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