export async function le_arquivoJson(arquivo, cardapio){
    const resposta = await fetch(arquivo);
    const dados = await resposta.json();
    cria_cardapio(dados, cardapio);
}

function exibe_dados(dados){
    for(let i of dados){
        console.log(i.nome);
    }
}

function cria_cardapio(dados, cardapio){
    for(let i of dados){
        cardapio.adicionarProduto(i.id, i.categoria, i.nome, i.preco, i.ingredientes.split(","), i.img, i.rotulo);
    }
}
