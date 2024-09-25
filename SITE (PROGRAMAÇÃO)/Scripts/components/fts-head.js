const pics = [
    {caminho: './assests/fts-perfil/FT0.png'},
    {caminho: './assests/fts-perfil/FT1.png'},
    {caminho: './assests/fts-perfil/FT2.png'},
    {caminho: './assests/fts-perfil/FT3.png'},    
    {caminho: './assests/fts-perfil/FT4.png'}
];

const valorpic = pics[localStorage.getItem('pic')].caminho;

export {pics, valorpic};