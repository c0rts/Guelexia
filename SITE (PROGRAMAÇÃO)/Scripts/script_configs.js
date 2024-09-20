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
