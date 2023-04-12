var pratos = [{'imagem': 'imagens/bolo_coco.png', 'titulo': 'Bolo de Coco', 'ingredientes': ['3 colheres (sopa) de manteiga', '3 ovos', '150 ml de leite', '1 MISTURA PARA BOLO DONA BENTA LINHA CASEIRA COCO'], 'modo_preparo': ['Misture todos os ingredientes até formar uma massa homogênea', 'Despeje a massa em uma forma untada e enfarinhada', 'Asse em forno a 180º por 30 a 40 minutos', 'Deixe esfriar e corte-o pela metade Recheio', 'Misture todos os ingredientes no fogo baixo até ficar em ponto de brigadeiro', 'Recheie o bolo.']},
{'imagem': 'imagens/torta_pacoca.png', 'titulo': 'Torta de Paçoca', 'ingredientes': ['1/2 xícara (chá) de manteiga', '1/4 de xícara (chá) de açúcar', '10 paçocas', '1/4 de xícara (chá) de açúcar'], 'modo_preparo': ['Bata todos os ingredientes da massa em um processador até formar uma farofa. Reserve 1 e 1/2 xícaras (chá) para a cobertura', 'Coloque a farofa em uma forma para torta e vá moldando com as mãos. Suba a lateral por 2 cm de altura', 'Faça furinhos com um garfo e leve ao forno pré-aquecido a 180 por 15 minutos.', 'Misture os ingredientes até formar um líquido homogêneo e jogue por cima da massa já assada.', 'Jogue a farofa reservada por cima e volte ao forno pré-aquecido a 180º por mais 15 minutos.']},
{'imagem': 'imagens/quiche_milho.png', 'titulo': 'Quiche de Milho', 'ingredientes': ['1/2 xícara (chá) de manteiga', '1 pitada de sal', '2 ovos', '2 colheres de sopa de água fria', '2 xícaras (chá) de FARINHA DE TRIGO TRADICIONAL DONA BENTA', '2 colheres (sopa) de manteiga', '1 lata de milho verde', '1 cebola picada'], 'modo_preparo': ['Misture os ingredientes até formar uma massa consistente', 'Enrole a massa em formato de bola e, com a ajuda de um rolo e um papel (manteiga ou plástico), abra até ficar fina', 'Unte uma forma redonda com aro removível e estenda a massa. Faça furinhos com um garfo.']},
{'imagem': 'imagens/pamonha.png', 'titulo': 'Pamonha de Forno', 'ingredientes': ['2 copos americanos de leite de coco', '2 ovos', '3 copos americanos de milho verde', '2 copos americanos de açúcar', '1/2 tablete de manteiga', '4 colheres de sopa de FARINHA DE TRIGO TRADICIONAL DONA BENTA', '1 pitada de sal', '1 colher de sopa de FERMENTO BIOLÓGICO DONA BENTA'], 'modo_preparo': ['Bata todos os ingredientes em um liquidificador até formar um líquido uniforme', 'Despeje a mistura em uma forma untada e leve ao forno pré-aquecido a 180º, por 40 minutos', 'Corte como preferir e salpique canela em pó a gosto.']},
{'imagem': 'imagens/creme.jpg', 'titulo': 'Creme de Galinha', 'ingredientes': ['1 kg de peito (grande)', '2 litros de água', '1 lata de creme de leite', '1 lata de milho verde', '1 copo de azeitona', 'Folha de louro', '1 e ½ xícaras de Farinha de Trigo Dona Benta Tradicional', '3 litros de leite', 'Verduras e temperos a gosto', '3 colheres de sopa de  manteiga', '1 cebola cortada em 4 partes'], 'modo_preparo': ['Cozinhe o peito de frango com a água, a folha de louro, cebola cortada em 4 partes, quando estiver pronto, desfie e reserve.', 'Em uma panela adicione a manteiga, em seguida despeje a farinha de trigo e deixe dourar,  depois adicione o milho verde, a azeitona, o creme de leite.', 'Deixe refogar um 1 minuto, em seguida adicione o frango e mexa bem, coloque o leite e ajuste o ponto com o caldo do frango cozido e peneirado e mexa até engrossar no ponto que você quiser.', 'Ajuste o sal a gosto.']},
{'imagem': 'imagens/empadao.jpg', 'titulo': 'Empadão Goiano', 'ingredientes': ['1/2 kg de farinha de trigo', '100 g de gordura vegetal', 'Água fervente (mais ou menos 700ml)', '2 colheres Fermento Químico em pó Dona Benta', '1 pitada de sal', '2 peitos de frango', '2 ovos cozidos', 'Cheiro verde', '1 lata de milho verde', '1 lata de palmito', '1 vidro pequeno de azeitona', '100 g de guariroba'], 'modo_preparo': ['Coloque em uma bacia a farinha de trigo, no meio coloque a gordura vegetal. Acrescente aos poucos a água quente e vá mexendo para misturar e derreter a gordura.', 'Não coloque muita água, quando a massa ainda estiver seca e você sentir que derreteu toda a gordura, e estiver macia esta bom de água.', 'Acrescente a pitada de sal e o Fermento Químico em pó Dona Benta. Misture bem e deixe crescer por 30 minutos.']},
]

atualizar()

function atualizar() {
    document.getElementById('div1').innerHTML = `<img src="${pratos[0].imagem}"> <h1 class="divz_h1"> ${pratos[0].titulo} </h1> <p class="divz_p">${pratos[0].ingredientes.join('<br>')}</p>` 
    document.getElementById('div2').innerHTML = `<img src="${pratos[1].imagem}"> <h1 class="divz_h1"> ${pratos[1].titulo} </h1> <p class="divz_p">${pratos[1].ingredientes.join('<br>')}</p>`
    document.getElementById('div3').innerHTML = `<img src="${pratos[2].imagem}"> <h1 class="divz_h1"> ${pratos[2].titulo} </h1> <p class="divz_p">${pratos[2].ingredientes.join('<br>')}</p>`
}

function avancar() {
    var davez = pratos.splice(0,1)
    pratos.splice(pratos.length, 0, davez[0])
    atualizar()
}

function voltar() {
    var davez = pratos.splice(pratos.length-1, 1)
    pratos.splice(0, 0, davez[0])
    atualizar()
}

function preparo(posicao){
    
    if(document.getElementById('div'+posicao).textContent.includes('Modo de Preparo')){
        document.getElementById('div'+posicao).innerHTML = `<img src="${pratos[posicao-1].imagem}"> <h1 class="divz_h1"> ${pratos[posicao-1].titulo} </h1> <p class="divz_p">${pratos[posicao-1].ingredientes.join('<br>')}</p>` 
    } else{
        document.getElementById('div'+posicao).innerHTML = `<h1 class="divz_h1">Modo de Preparo</h1> <p class="divz_p">${pratos[posicao-1].modo_preparo.join('<br><br>')}</p>`
    }

    
}