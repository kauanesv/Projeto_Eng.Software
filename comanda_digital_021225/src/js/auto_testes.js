// função que remove um item da lista e exibe em seguida o pedido completo
export function teste_remocao_item(pedido, item_numero){
    console.log("\n\tPedido antes da remoção do item:\n");
    for (let i = 0; i < pedido.itens.length; i++) {
        console.log(pedido.itens[i].toString());
    }

    if(pedido.itens.length == 0){
        console.log("Pedido vazio!");
    }
    console.log("\n");
    
    if(pedido.removerItem(item_numero)){
        console.log("\n\tPedido após a remoção do item:\n");
        for (let i = 0; i < pedido.itens.length; i++) {
            console.log(pedido.itens[i].toString());
        }

        if(pedido.itens.length == 0){
            console.log("Pedido vazio!");
        }
    }
}

export function simula_remocao_item(pedido, cardapio){
    let qtd_testes = Math.floor(Math.random() * 10) + 1;
    let indices_itens_removidos = [];
    for(let i = 0; i < qtd_testes; i++) indices_itens_removidos.push(Math.floor(Math.random() * (cardapio.produtos.length - 1)));

    //teste_exibicao_item(pedido);
    console.log("\n\n============================\nSIMULAÇÃO DE REMOÇÃO DE ITENS\n============================\n");
    console.log("\tQtd. de itens a serem removidos na simulação: " + qtd_testes);

    for(let i of indices_itens_removidos){
        console.log("\tNúmero do item a ser removido: " + i);
        teste_remocao_item(pedido, i);
    }
}

export function simula_pedido(cardapio, pedido_simulado){
    let qtd_itens = Math.floor(Math.random() * 10) + 1;
    let item;
    let aux;

    for(let i = 0; i < qtd_itens; i++){
        item = cardapio.produtos[Math.floor(Math.random() * (cardapio.produtos.length - 1))];
        aux = pedido_simulado.buscarItem(item.numero);
        
        if(aux == null) pedido_simulado.adicionarItem(item);
        else aux.quantidade++;
    }

    simula_remocao_item(pedido_simulado, cardapio);
    teste_exibicao_item(pedido_simulado);
}

//função para exibir os valores da classe item
export function teste_exibicao_item(pedido){
    console.log("\n\n============================\nSIMULAÇÃO DE EXIBIÇÃO DE ITENS\n============================\n");
    for(let item of pedido.itens){
        console.log(item.toString());
    }
}

export function teste_fluxo_telas(lista_fluxo){
    
    let lista = [];
    let aux = 0;
    //Os valores serão adicionados na lista
    for(let i of lista_fluxo){
        lista.push(i);
        if(lista[0]!=0){
            console.log("\n=====================\nSequência de fluxo de telas incorreto\n");
            lista.pop();
            break;
        }
        if(aux>0 && aux<lista_fluxo.length-1){
            if((lista[aux]==i && lista_fluxo[aux+1]==i+1) 
            || (lista[aux]==i && (i!=3 && i!=4 && i!=5 && i!=6 && i!=7 && i!=9 && i!=10) && lista_fluxo[aux+1]==7) 
            || (lista[aux]==7 && lista_fluxo[aux+1]==lista[aux-1]) 
            || (lista[aux]==10 && lista_fluxo[aux+1]==1)
            || ((lista[aux]==i && ((i!=1 && i!=3 && i!=7 && i!=10)) && lista_fluxo[i+1]==i-1))
            || (lista[aux]==7 && lista_fluxo[aux+1]==1)){
               console.log("\n=====================\nSequência de fluxo de telas correto\n" + lista);
            }
        }else if((lista[aux]==i && lista[aux-1]==i-1) || (lista[aux]==1 && lista[aux-1]==10) || (lista[aux]==1 && lista[aux-1]==7)){
            console.log("\n=====================\nSequência de fluxo de telas correto\n");
            break;
        }else if(aux==0){
            aux++;
            continue;
        }
        else{
            console.log("\n=====================\nSequência de fluxo de telas incorreto\n");
            break;
        }
        aux++;
    }
}