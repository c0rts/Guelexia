const imagens_1 = [
    { caminho: './../assets/fts-jogos/Bola.png', resposta: 'Bola' },
    { caminho: './../assets/fts-jogos/Aviao.png', resposta: 'Avião' },
    { caminho: './../assets/fts-jogos/Estrela.png', resposta: 'Estrela' },
    { caminho: './../assets/fts-jogos/Flor.png', resposta: 'Flor' },
    { caminho: './../assets/fts-jogos/Lua.png', resposta: 'Lua' },
    { caminho: './../assets/fts-jogos/Livro.png', resposta: 'Livro' },
    { caminho: './../assets/fts-jogos/Nuvem.png', resposta: 'Nuvem' },
    { caminho: './../assets/fts-jogos/Planeta.png', resposta: 'Marte' },
    { caminho: './../assets/fts-jogos/Maça.png', resposta: 'Maçã' },
    { caminho: './../assets/fts-jogos/Sol.png', resposta: 'Sol' },
    { caminho: './../assets/fts-jogos/Terra.png', resposta: 'Terra' },
    { caminho: './../assets/fts-jogos/Casa.png', resposta: 'Casa' },
];

const Questions = [
        {
            question: "Imagine que você está em uma viagem pelo espaço e acaba de pousar em um planeta desconhecido. Lá, você encontra criaturas que parecem falar uma língua diferente e se mover em uma velocidade super rápida. No entanto, uma delas se aproxima e começa a desenhar formas geométricas no chão, como quadrados, triângulos e círculos. O que essas formas poderiam estar tentando comunicar para você?",
            answers: ["Uma mensagem de boas-vindas", "A forma da nave espacial", "O nome do planeta", "Um pedido de ajuda"],
            correct: "Uma mensagem de boas-vindas"
        },
        {
            question: "Em uma floresta distante, cientistas descobriram uma árvore que pode se mover muito lentamente ao longo dos anos. Ela se move cerca de 1 metro a cada década e parece se dirigir sempre para a mesma direção, seguindo o curso do Sol. Após muitas pesquisas, os cientistas descobriram que essa árvore se move para encontrar uma fonte específica de energia. Que tipo de energia a árvore está procurando?",
            answers: ["Energia solar", "Energia do vento", "Energia das estrelas", "Energia da lua"],
            correct: "Energia solar"
        },
        {
            question: "Você está participando de uma competição científica onde o desafio é criar um novo tipo de veículo. Sua ideia é construir um carro que funcione completamente com água, sem poluir o meio ambiente. Após muitas tentativas, você finalmente consegue criar um modelo que pode andar por 100 quilômetros com apenas um litro de água. Qual seria o próximo passo para fazer com que esse carro revolucionário se torne acessível para todo o mundo?",
            answers: ["Melhorar o design do carro", "Construir uma fábrica de carros", "Testar o carro em diferentes terrenos", "Divulgar a invenção na mídia"],
            correct: "Divulgar a invenção na mídia"
        },
        {
            question: "Em uma expedição para as profundezas do oceano, um grupo de biólogos marinhos encontrou uma espécie de peixe que brilha no escuro e consegue viver em águas extremamente profundas, onde a luz do Sol não chega. Esses peixes emitem uma luz azulada que ilumina seu caminho e atrai pequenos organismos dos quais se alimentam. Qual seria a principal razão para esse peixe emitir luz no escuro?",
            answers: ["Para se proteger de predadores", "Para se comunicar com outros peixes", "Para atrair presas", "Para encontrar um parceiro"],
            correct: "Para atrair presas"
        },
        {
            question: "Durante uma visita a um laboratório de química, você testemunha um experimento fascinante onde cientistas conseguem transformar um pedaço de metal comum em um material supercondutor, que permite que a eletricidade flua sem nenhuma resistência. Isso significa que, se aplicado corretamente, a tecnologia poderia revolucionar a forma como usamos eletricidade no dia a dia, tornando-a muito mais eficiente. Qual seria o maior benefício do uso de supercondutores em larga escala?",
            answers: ["Economizar energia", "Aumentar o preço da eletricidade", "Melhorar a qualidade do ar", "Diminuir o uso de água"],
            correct: "Economizar energia"
        },
        {
            question: "Um grupo de arqueólogos encontrou em uma caverna antiga uma série de pinturas feitas há milhares de anos. As imagens mostram animais que já estão extintos e pessoas caçando com ferramentas simples. No entanto, o mais interessante é que em uma das paredes há um desenho que parece retratar um tipo de roda ou círculo gigante que os arqueólogos não conseguem identificar. Qual é a teoria mais provável sobre o que os antigos habitantes dessa caverna estavam tentando mostrar com esse desenho?",
            answers: ["Uma nova invenção", "Um evento celestial", "Um ritual religioso", "Um jogo antigo"],
            correct: "Uma nova invenção"
        },
        {
            question: "Em uma cidade futurística, cientistas desenvolveram robôs que podem ajudar as pessoas em suas atividades diárias, como cozinhar, limpar a casa e até fazer companhia. Esses robôs são equipados com inteligência artificial avançada que permite que eles aprendam com as pessoas e adaptem seus comportamentos com base nas preferências de cada indivíduo. O que seria o maior desafio ético ao permitir que esses robôs se tornem parte da vida cotidiana das pessoas?",
            answers: ["Manter a privacidade das pessoas", "Garantir que os robôs nunca quebrem", "Fazer os robôs mais rápidos", "Garantir que todos possam ter um"],
            correct: "Manter a privacidade das pessoas"
        },
        {
            question: "Em uma viagem de férias para as montanhas, você e sua família decidem explorar uma caverna local que é famosa por suas formações rochosas e cristais brilhantes. Durante a exploração, você encontra uma passagem secreta que leva a uma sala cheia de pedras preciosas de todas as cores. Essas pedras parecem brilhar com luz própria, e uma delas, em especial, parece estar flutuando levemente no ar. O que poderia explicar esse fenômeno de uma pedra flutuante dentro da caverna?",
            answers: ["Um campo magnético", "Um feitiço antigo", "Um fenômeno de luz", "Um gás invisível"],
            correct: "Um campo magnético"
        },
        {
            question: "Imagine que, durante uma aula de biologia, seu professor mostra um vídeo de um animal extremamente raro que vive nas florestas tropicais e que tem a capacidade de mudar de cor para se camuflar perfeitamente no ambiente. Além disso, esse animal também pode imitar sons de outros animais para se proteger de predadores. Qual é o nome dado a essa habilidade especial de mudar de cor e imitar sons?",
            answers: ["Mimetismo", "Fotosíntese", "Mutação", "Predação"],
            correct: "Mimetismo"
        },
        {
            question: "Você é escolhido para participar de uma missão espacial a Marte, onde sua equipe deve montar uma base para explorar o planeta. Após meses de preparação, vocês chegam a Marte e começam a montar os primeiros módulos da base. Durante as primeiras semanas, a equipe descobre que o solo de Marte contém elementos que poderiam ser usados para produzir oxigênio. Qual seria a principal vantagem de produzir oxigênio diretamente em Marte, em vez de trazê-lo da Terra?",
            answers: ["Economizar espaço nas naves", "Tornar a viagem mais rápida", "Evitar o uso de tecnologia", "Garantir que todos tenham oxigênio infinito"],
            correct: "Economizar espaço nas naves"
        }
];

const Parrimas = [
    {par1: "Estrela", par2: "Tela"},
    {par1: "Música", par2: "Lírica"},
    {par1: "Bola", par2: "Cola"},
    {par1: "Papel", par2: "Anel"},
    {par1: "Carro", par2: "Jarro"},
    {par1: "Cama", par2: "Fama"},
    {par1: "Sol", par2: "Cobol"},
    {par1: "Lua", par2: "Rua"},
    {par1: "Rato", par2: "Pato"},
    {par1: "Fogo", par2: "Jogo"},
    {par1: "Livro", par2: "Vidro"},
    {par1: "Flor", par2: "Cor"},
    {par1: "Corte", par2: "Forte"},
    {par1: "Prato", par2: "Gato"},
    {par1: "Mão", par2: "Pão"},
    {par1: "Coração", par2: "Canção"},
    {par1: "Pano", par2: "Sano"},
    {par1: "Fruta", par2: "Luta"},
    {par1: "Mesa", par2: "Presa"},
    {par1: "Mente", par2: "Gente"},
    {par1: "Fruto", par2: "Luto"},
    {par1: "Pena", par2: "Cena"},
    {par1: "Rosa", par2: "Prosa"},
    {par1: "Rumo", par2: "Resumo"},
    {par1: "Olho", par2: "Molho"},
    {par1: "Pula", par2: "Lula"},
    {par1: "Terra", par2: "Serra"},
    {par1: "Cesta", par2: "Festa"},
    {par1: "Mel", par2: "Miguel"},
    {par1: "Doce", par2: "Você"},
    {par1: "Cura", par2: "Dura"},
];

export {imagens_1, Questions, Parrimas};