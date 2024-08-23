const check1 = document.getElementById('check1');
const check2 = document.getElementById('check2');
const canvas = document.getElementById('lineCanvas');
const ctx = canvas.getContext('2d');

// Ajustar o tamanho do canvas
function adjustCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

// Desenhar a linha
function drawLine() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpar o canvas
    if (check1.checked && check2.checked) {
        const box1 = document.getElementById('box1').getBoundingClientRect();
        const box2 = document.getElementById('box2').getBoundingClientRect();

        ctx.beginPath();
        ctx.moveTo(box1.right, box1.top + box1.height / 2); // Início da linha (lado direito da primeira caixa)
        ctx.lineTo(box2.left, box2.top + box2.height / 2);  // Fim da linha (lado esquerdo da segunda caixa)
        ctx.strokeStyle = '#007bff';
        ctx.lineWidth = 2;
        ctx.stroke();
    }
}

// Ajustar o tamanho do canvas quando a janela é redimensionada
window.addEventListener('resize', adjustCanvas);
adjustCanvas();

// Adicionar eventos para desenhar a linha quando as caixas são marcadas/desmarcadas
check1.addEventListener('change', drawLine);
check2.addEventListener('change', drawLine);
