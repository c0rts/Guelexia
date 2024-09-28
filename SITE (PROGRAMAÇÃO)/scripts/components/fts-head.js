const pics = [
    {caminho: './assets/fts-perfil/FT0.png'},
    {caminho: './assets/fts-perfil/FT1.png'},
    {caminho: './assets/fts-perfil/FT2.png'},
    {caminho: './assets/fts-perfil/FT3.png'},    
    {caminho: './assets/fts-perfil/FT4.png'}
];

if(!localStorage.getItem('pic')) {

    localStorage.setItem('pic', 0);
}

const valorpic = pics[localStorage.getItem('pic')].caminho;

export {pics, valorpic};
