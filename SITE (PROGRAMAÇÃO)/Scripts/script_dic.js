/*var botao = document.getElementById('bntconfirma');// Obtém uma referência ao botão
botao.addEventListener('click', confirmaPlvr); // Adiciona um ouvinte de evento para o evento 'click'

function confirmaPlvr(){
    
const palavra = document.getElementById('palavra').value.replace("-","");//palvra do html


function verificarNumeros() {

    // Transforma a palavra em um array de caracteres
    var letras = palavra.split('');

    // Verifica se há algum número em cada letra
    var numeroEncontrado = false;

    letras.forEach(letra => {
        if (!isNaN(letra)) { // Verifica se a letra é um número

            numeroEncontrado = true;
        }
    });
    if(numeroEncontrado){
        console.log('vai caga ta na calculadora não seu fedido')
    }else{
        pesquisaPlvr
    }
}


const pesquisaPlvr = async() => {
    limparFormulario();

 
    const url = `https://significado.herokuapp.com/v2/${palavra}`;
    if (Plvrconfirma(palavra)){
        const dados = await fetch(url);
        const resultado = await dados.json();
        if (resultado.hasOwnProperty('erro')){
            console.log('Vai se fode');//document.getElementById('cxsignificado').value = 'Palavra não encontrada!';
        }else {
            preencherFormulario(resultado);
        }
    }else{
        console.log('Palavra incorreta')//document.getElementById('cxsignificado').value = 'Palavra incorreta!';
    }
     
}

}



const preencherSignificados = (resultado) =>{
    console.log()
}
    /*document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}*/

document.getElementById('btn_top').addEventListener('click', () => {
   document.getElementById('caixa').innerHTML = 'Casa (do latim casa), residência ou moradia é, no seu sentido mais comum, um conjunto de paredes, cômodos e teto construídos pelo ser humano com a finalidade de constituir um espaço de habitação para um indivíduo ou conjunto de indivíduos para que estejam protegidos dos fenômenos naturais exteriores'
});