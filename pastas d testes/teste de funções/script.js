function selectProfileImage(imagePath) {
    // Remover a classe 'selected' de todas as imagens
    const images = document.querySelectorAll('.profile-images img');
    images.forEach(img => img.classList.remove('selected'));

    // Adicionar a classe 'selected' à imagem clicada
    const selectedImage = images.find(img => img.src.includes(imagePath));
    selectedImage.classList.add('selected');

    // Salvar a foto de perfil selecionada no localStorage
    localStorage.setItem('selectedProfileImage', imagePath);
}

// Função para carregar a foto de perfil selecionada quando a página for carregada
window.onload = function() {
    const savedImagePath = localStorage.getItem('selectedProfileImage');
    if (savedImagePath) {
        const images = document.querySelectorAll('.profile-images img');
        const selectedImage = Array.from(images).find(img => img.src.includes(savedImagePath));
        if (selectedImage) {
            selectedImage.classList.add('selected');
        }
    }
};
