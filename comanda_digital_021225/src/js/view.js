function criaProdutoCategoria(item, ul){
    const li = document.createElement('li');
    const button = document.createElement('button');
    const nome_item = document.createElement('h3');
    const figura_item = document.createElement('img');
    const preco_item = document.createElement('h3');
    const div = document.createElement('div');

    
    ul.appendChild(li);
    li.appendChild(button);
    button.appendChild(nome_item);
    button.appendChild(figura_item);
    button.appendChild(preco_item);

    if(item.rotulo != "null"){
        button.appendChild(div);
        div.classList.add(item.rotulo);
        div.classList.add("rotulo");

        if(item.rotulo == "mais_vendido"){
            div.innerHTML = "Mais vendido";
        } else {
            div.innerHTML = "Sem lactose";
        }                    
    }

    nome_item.innerHTML = item.nome;
    figura_item.src = item.img;
    preco_item.innerHTML = "R$" + item.preco;

    button.classList.add('button');
    button.classList.add(item.numero);

    nome_item.classList.add('button');
    figura_item.classList.add('button');
    preco_item.classList.add('button');
}

function criarCategoria(categoria, cardapio, div_categoria){
    let h2 = document.querySelector('.screen_3 h2.titulo_categoria');
    h2.innerHTML = categoria;
    let ul = document.querySelector('.screen_3 ul');
    ul.innerHTML = "";

    for(let i of cardapio.produtos){
        if(i.categoria == categoria){
            criaProdutoCategoria(i, ul);
        }
    }
}

export function identificaCategoriaAtual(categoria_selecionada, cardapio, div_categoria){
    let categorias = ["Bebidas quentes", "Bebidas geladas", "Doces", "Salgados"];
    let classes_categorias = ["bebidas_quentes", "bebidas_geladas", "doces", "salgados"];
    let categoria;

    for(let i = 0; i < classes_categorias.length; i++){
        if(classes_categorias[i] == categoria_selecionada){
            categoria = categorias[i];
        }
    }

    criarCategoria(categoria, cardapio);
}

export function exibeIngredientes(item){
    const h2 = document.querySelector('.screen_4 h2.screen_4_nome_item');
    const ul = document.querySelector('.screen_4 ul.screen_4_lista_ingredientes');
    const preco_item = document.querySelector('.screen_4 h3.screen_4_preco_item');

    h2.innerHTML = item.nome;
    ul.innerHTML = "";
    
    for(let i of item.ingredientes){
        let li = document.createElement("li");
        ul.appendChild(li);
        li.innerHTML = i;
    }
    
    preco_item.innerHTML = "R$" + item.preco;

}

export function exibePrecoTamanhos(item){
    const preco_pequeno = document.querySelector(".screen_6 p.preco_pequeno");
    const preco_medio = document.querySelector(".screen_6 p.preco_medio");
    const preco_grande = document.querySelector(".screen_6 p.preco_grande");

    preco_pequeno.innerHTML = "R$" + item.preco;
    preco_medio.innerHTML = "R$" + item.preco * 1.25;
    preco_grande.innerHTML = "R$" + item.preco * 1.5;
}

export function exibePrecoQuantidade(item, qtd){
    const preco_quantidade = document.querySelector(".screen_7 div p.preco");
    preco_quantidade.innerHTML = "R$" + parseFloat(item.preco * qtd);
}

export function exibeProdutoSugestao(cardapio){   
    let h2 = document.querySelector('.screen_3 h2.titulo_categoria');
    h2.innerHTML = "Sugestões";
    let ul = document.querySelector('.screen_3 ul');
    ul.innerHTML = "";

    const id = [];
    while(id.length < 3){
        const num = Math.floor(Math.random() * 13) + 1;
        if(!id.includes(num)){
            id.push(num)
        }
    }

    for(let i = 0; i < 3; i++){
        let item = cardapio.produtos[id[i]];
        
        const li = document.createElement('li');
        const button = document.createElement('button');
        const nome_item = document.createElement('h3');
        const figura_item = document.createElement('img');
        const preco_item = document.createElement('h3');
        const div = document.createElement('div');
        
        ul.appendChild(li);
        li.appendChild(button);
        button.appendChild(nome_item);
        button.appendChild(figura_item);
        button.appendChild(preco_item);

        if(item.rotulo != "null"){
            button.appendChild(div);
            div.classList.add(item.rotulo);
            div.classList.add("rotulo");

            if(item.rotulo == "mais_vendido"){
                div.innerHTML = "Mais vendido";
            } else {
                div.innerHTML = "Sem lactose";
            }                    
        }

        nome_item.innerHTML = item.nome;
        figura_item.src = item.img;
        preco_item.innerHTML = "R$" + item.preco;

        button.classList.add('button');
        button.classList.add(item.numero);

        nome_item.classList.add('button');
        figura_item.classList.add('button');
        preco_item.classList.add('button');
    }
}

export function exibirItemCarrinho(base, div_itens_carrinho){
    // cria, classifica e adiciona elementos da tela do carrinho
    let div_item_carrinho = document.createElement("div");
    div_item_carrinho.classList.add("item_carrinho");
    div_item_carrinho.classList.add(`item${base.numero}`);
    let div_imagens_carrinho = document.createElement("div");
    div_imagens_carrinho.classList.add("imagens_carrinho");
    let imagem_item = document.createElement("img");
    imagem_item.src = base.img;
    imagem_item.classList.add("img_item");
    let imagem_lixeira = document.createElement("img");
    imagem_lixeira.src = "img/lixeira.png";
    imagem_lixeira.classList.add("img_lixeira");
    imagem_lixeira.classList.add(base.numero);
    let div_descricao_carrinho = document.createElement("div");
    div_descricao_carrinho.classList.add("descricao_carrinho");
    let h3_nome_item = document.createElement("h3");
    h3_nome_item.classList.add("nome_item");
    let p_descricao_item = document.createElement("p");
    p_descricao_item.classList.add("descricao_item");
    let h3_preco_item = document.createElement("h3");
    h3_preco_item.classList.add("preco_item");
    div_itens_carrinho.appendChild(div_item_carrinho);
    div_item_carrinho.appendChild(div_imagens_carrinho);
    div_imagens_carrinho.appendChild(imagem_item);
    div_imagens_carrinho.appendChild(imagem_lixeira);
    div_item_carrinho.appendChild(div_descricao_carrinho);
    h3_nome_item.innerHTML = base.nome;
    div_descricao_carrinho.appendChild(h3_nome_item);
    p_descricao_item.innerHTML = `${base.quantidade} x ${base.tamanho}<br>${base.opcao}`;
    div_descricao_carrinho.appendChild(p_descricao_item);
    h3_preco_item.innerHTML = "R$" + base.preco.toFixed(2);
    div_descricao_carrinho.appendChild(h3_preco_item);
}

function getItemBase(obj){
    while(obj.item){
        obj = obj.item;
    }
    return obj;
}

// Exibir resumo do pedido (elementos dinâmicos)
export function exibeResumoPedido(div_resumo_pedido, pedidoAtual, itemBase){
    // Limpa a caixa principal 
    div_resumo_pedido.innerHTML = '';

    // Cria e classifica lista de elementos
    let h3_box = document.createElement('div');
    h3_box.classList.add("h3_box");
    let resumo_h3 = document.createElement('h3');
    resumo_h3.classList.add("resumo_h3");
    resumo_h3.innerHTML = "Detalhes do Pedido";
    h3_box.appendChild(resumo_h3);
    div_resumo_pedido.appendChild(h3_box);

    // Percorre itens do pedido
    for(let i = 0; i < pedidoAtual.itens.length; i++){
        // Seleciona item atual da lista do pedido
        const item = pedidoAtual.itens[i];
        itemBase = getItemBase(item);

        // Cria, classifica e altera elementos de cada item
        let item_pedido_box = document.createElement('div');
        item_pedido_box.classList.add("item_pedido_box");
        let div_item = document.createElement('div');
        let p_item = document.createElement('p');
        let info_box = document.createElement('div');
        info_box.classList.add("info_box");

        let infoOpcao = document.createElement('div');
        infoOpcao.classList.add("info");
        let infoTamanho = document.createElement('div');
        infoTamanho.classList.add("info");
        let infoQtd = document.createElement('div');
        infoQtd.classList.add("info");

        let preco_box = document.createElement('div');
        preco_box.classList.add("preco_box");
        let p_preco = document.createElement('p');
        p_preco.classList.add("preco");
        let linha = document.createElement('div');
        linha.classList.add("linha");

        p_item.innerHTML = '';
        p_item.innerHTML = `${itemBase.nome}`;
        infoOpcao.innerHTML = `${item.opcao}`;
        infoTamanho.innerHTML = `${itemBase.tamanho}`;
        infoQtd.innerHTML = `${itemBase.quantidade}`;
        p_preco.innerHTML = "R$" + itemBase.preco.toFixed(2);
        div_item.appendChild(p_item);
        div_item.appendChild(info_box);

        info_box.appendChild(infoOpcao);
        info_box.appendChild(infoTamanho);
        info_box.appendChild(infoQtd);

        item_pedido_box.appendChild(div_item);

        preco_box.appendChild(p_preco);
        
        div_resumo_pedido.appendChild(item_pedido_box);
        div_resumo_pedido.appendChild(preco_box);
        div_resumo_pedido.appendChild(linha);
    }
}

// Exibir resumo de pagamento (elementos dinâmicos)
export function exibeResumoPagamento(div_resumo_pagamento, pedidoAtual, itemBase){
    // Limpa caixa principal 
    div_resumo_pagamento.innerHTML = '';

    // Cria e classifica elementos externos aos itens
    let info_pagamento_box_itens = document.createElement('div');
    info_pagamento_box_itens.classList.add("info_pagamento_box");

    // Percorre itens do pedido
    for(let i = 0; i < pedidoAtual.itens.length; i++){
        // Seleciona item atual da lista do pedido
        const item = pedidoAtual.itens[i];
        itemBase = getItemBase(item);

        // Cria, classifica e altera elementos de cada item
        let div_item = document.createElement('div');
        let p_item = document.createElement('p');
        let p_preco = document.createElement('p');
        p_preco.classList.add('preco');

        p_item.innerHTML = `${itemBase.nome}`;
        p_preco.innerHTML = `R$${itemBase.preco}`;

        div_item.appendChild(p_item);
        div_item.appendChild(p_preco);
         
        info_pagamento_box_itens.appendChild(div_item);
    }

    // Cria e classifica elementos externos aos itens
    let info_pagamento_box_subtotal_imposto = document.createElement('div');
    info_pagamento_box_subtotal_imposto.classList.add("info_pagamento_box");

    let div_subtotal = document.createElement('div');
    div_subtotal.classList.add('subtotal_box');
    let p_subtotal = document.createElement('p');
    p_subtotal.classList.add('subtotal');
    p_subtotal.innerHTML = "Subtotal ";
    let p_preco_subtotal = document.createElement('p');
    p_preco_subtotal.classList.add('preco');
   // let aux1 = clcPrecoTotal(pedidoAtual.itens);
    p_preco_subtotal.innerHTML = "R$" + pedidoAtual.preco_total.toFixed(2);

    div_subtotal.appendChild(p_subtotal);
    div_subtotal.appendChild(p_preco_subtotal);
    
    let div_imposto = document.createElement('div');
    let p_imposto = document.createElement('p');
    p_imposto.classList.add('imposto');
    p_imposto.innerHTML = "Imposto";
    let p_preco_imposto = document.createElement('p');
    p_preco_imposto.classList.add('preco');
    p_preco_imposto.innerHTML = "R$0.97";
    
    div_imposto.appendChild(p_imposto);
    div_imposto.appendChild(p_preco_imposto);
    
    info_pagamento_box_subtotal_imposto.appendChild(div_subtotal);
    info_pagamento_box_subtotal_imposto.appendChild(div_imposto);

    let info_pagamento_box_total = document.createElement('div');
    info_pagamento_box_total.classList.add('info_pagamento_box');

    let div_total = document.createElement('div');
    div_total.classList.add('total_box');
    let p_total = document.createElement('p');
    p_total.innerHTML = "Total do pedido";
    let p_preco_total =document.createElement('p');
    p_preco_total.classList.add('preco');
   // let aux2 = clcPrecoTotal(pedidoAtual.itens) + 0.97;
    p_preco_total.innerHTML = "R$" + (pedidoAtual.preco_total + 0.97);

    div_total.appendChild(p_total);
    div_total.appendChild(p_preco_total);

    info_pagamento_box_total.appendChild(div_total);

    div_resumo_pagamento.appendChild(info_pagamento_box_itens);
    div_resumo_pagamento.appendChild(info_pagamento_box_subtotal_imposto);
    div_resumo_pagamento.appendChild(info_pagamento_box_total);
}

export function exibePedidoConfirmado(div_resumo_pedido_final, div_resumo_total_pago, pedidoAtual){
    div_resumo_pedido_final.innerHTML = "";
    // percorre itens no pedido
    for(let i = 0; i < pedidoAtual.itens.length; i++){
        // cria, classifica e adiciona elementos 
        let div_resumo_item = document.createElement("div");
        div_resumo_item.classList.add("info_resumo_item");
        let paragrafo_resumo_item = document.createElement("p");
        paragrafo_resumo_item.classList.add("info_qtd_nome_tamanho_item");
        paragrafo_resumo_item.innerHTML = `${pedidoAtual.itens[i].quantidade} x ${pedidoAtual.itens[i].nome} (${pedidoAtual.itens[i].tamanho})`;
        let paragrafo_preco = document.createElement("p");
        paragrafo_preco.innerHTML = `${pedidoAtual.itens[i].preco.toFixed(2)}`;
        div_resumo_pedido_final.appendChild(div_resumo_item);
        div_resumo_item.appendChild(paragrafo_resumo_item);
        div_resumo_item.appendChild(paragrafo_preco);
        div_resumo_total_pago.innerHTML = `R$${pedidoAtual.preco_total + 0.97}`
    }
}

