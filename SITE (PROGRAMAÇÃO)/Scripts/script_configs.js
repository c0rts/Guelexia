
const button = document.getElementById('tema');
const body = document.body;

// Verifica o tema atual e aplica a classe correspondente
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
    button.textContent = 'Mudar para Claro';
} else {
        body.classList.add('light-theme');
        button.textContent = 'Mudar para Escuro';
}

button.addEventListener('click', () => {
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        button.textContent = 'Mudar para Claro';
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        button.textContent = 'Mudar para Escuro';
        localStorage.setItem('theme', 'light');
    }
});
