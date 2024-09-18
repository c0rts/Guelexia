document.getElementById('amem').addEventListener('click', sendRequest);

function sendRequest() {
  const word = document.getElementById('input').value;

  // Verifica se o input não está vazio
  if (!word) {
    console.error('Por favor, insira uma palavra.');
    return;
  }

  fetch(`https://api.dicionario-aberto.net/word/${word}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Palavra não encontrada ou erro na requisição.');
      }
      return response.json();
    })
    .then(data => {
      if (data.length === 0) {
        console.log('Nenhuma definição encontrada para a palavra.');
        return;
      }

      const xmlString = data[0].xml;
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlString, 'text/xml');

      // Extrai as definições
      const definitions = Array.from(xmlDoc.getElementsByTagName('def')).map(def => def.textContent.trim());
      console.log(definitions);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
