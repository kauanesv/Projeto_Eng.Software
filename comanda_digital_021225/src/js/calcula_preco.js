export function clcPrecoTotal(random){
    let aux = 0;
    for(let i of random){
       aux += parseFloat((i.preco * i.quantidade));
    }
    return aux;
}

export function calculaPrecoTamanho(tamanho, item){
    if(tamanho == "Grande"){
        item.preco = item.preco * 1.5;
    } else if(tamanho == "Médio"){
        item.preco = item.preco * 1.25;
    } else {
        item.preco = item.preco * 1;
    }
}