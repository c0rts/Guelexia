const theme = localStorage.getItem('theme');

if(theme === 'light') {

    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
} else {

    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
}