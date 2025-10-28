const button = document.querySelector(".button");
const screen = document.querySelectorAll(".screen");
const opcoes_radio = document.querySelectorAll(".opcoes_radio");
const tamanho_radio = document.querySelectorAll(".tamanho_radio");

const quantidade_itens = document.querySelector(".quantidade_numero");

const screen_carrinho_compras = document.querySelector(".screen_carrinho_compras");
const screen_resumo_pedido = document.querySelector(".screen_resumo_pedido");
const screen_resumo_pagamento= document.querySelector(".screen_resumo_pagamento");

const div_resumo_pagamento = document.querySelector(".resumo_pagamento_box");
const div_resumo_pedido = document.querySelector(".resumo_pedido_box");
const div_itens_carrinho = document.querySelector(".itens_carrinho");

const p_numero_pedido = document.querySelector(".valor_numero_pedido");
const div_resumo_pedido_final = document.querySelector(".resumo_pedido");

console.log(screen);

//console.log(opcoes_radio)
//console.log(screen);
let pedidoAtual;
let itemAtual;
let qtdItemAtual;
let itemBase;
let processador;

let screenAtual = 0;

let categorias = ["bebidas_quentes", "bebidas_geladas", "salgados", "doces"];

window.addEventListener('click', e => {
    if(e.target.classList.contains('button')){ 
        if(e.target.classList.contains('finalizar_pedido')){
            screenAtual = 7; 

            if(pedidoAtual.itens.length > 0){
                avancarEtapa(e);
            }
        } else {
            avancarEtapa(e);
        }
        

        //console.log(e.target.classList);

    } else if(e.target.classList.contains('close_screen') || e.target.classList.contains('voltar')){
        voltarEtapa();
    } else if(e.target.classList.contains('carrinho_compras')){
        screen[screenAtual].classList.remove('active');
        screen[screenAtual].classList.add('hidden');
        screen_carrinho_compras.classList.remove('hidden');
        screen_carrinho_compras.classList.add('active');
    } else if(e.target.classList.contains('close_screen_carrinho')){
        screen_carrinho_compras.classList.remove('active');
        screen_carrinho_compras.classList.add('hidden');
        if(screenAtual == 7){
            screenAtual = 1;
        }
        screen[screenAtual].classList.remove('hidden');
        screen[screenAtual].classList.add('active');
    } else if(e.target.classList.contains('resumo_pedido')){
        screen[screenAtual].classList.remove('active');
        screen[screenAtual].classList.add('hidden');
        screen_resumo_pedido.classList.remove('hidden');
        screen_resumo_pedido.classList.add('active');
    } else if(e.target.classList.contains('resumo_pagamento')){
        screen[screenAtual].classList.remove('active');
        screen[screenAtual].classList.add('hidden');
        screen_resumo_pagamento.classList.remove('hidden');
        screen_resumo_pagamento.classList.add('active');
    } else if(e.target.classList.contains('img_lixeira')){
        console.log(e.target.classList[1]);
        let item_removido = document.querySelector(`.item${e.target.classList[1]}`);
        item_removido.innerHTML = '';
        pedidoAtual.removerItem(Number(e.target.classList[1]));
    } else if(e.target.classList.contains('limpar_carrinho')){
        div_itens_carrinho.innerHTML = '';
        pedidoAtual.itens = [];
    } else if(screenAtual == 6){
        qtdItemAtual = Number(quantidade_itens.innerHTML);
        alteraQuantidade(e);
    } 
})

function alteraQuantidade(e){
    if(e.target.classList.contains('quantidade_menos')){
        if(qtdItemAtual > 1){
            qtdItemAtual--;
        }
    } else if(e.target.classList.contains('quantidade_mais')){
        qtdItemAtual++;
    }

    quantidade_itens.innerHTML = qtdItemAtual;
}

function avancarEtapa(e){
    if(screenAtual == 0){
        pedidoAtual = FabricaPedidos.criarNovoPedido();
        itemAtual = FabricaItens.criarNovoItem();
        processador = new ProcessadorAdicaoCardapio();
    } else if(screenAtual == 1){
        if(itemAtual == null){
             itemAtual = FabricaItens.criarNovoItem();
        }
        itemAtual.categoria = e.target.classList[1];
        //console.log(itemAtual);
    } else if(screenAtual == 2){
        itemAtual.nome = e.target.classList[1];
        console.log(itemAtual.nome);
    } else if(screenAtual == 4){ // opções
        for(let i = 0; i < opcoes_radio.length; i++){
            if(opcoes_radio[i].checked){
                console.log(itemAtual);
                if(opcoes_radio[i].value==="opcao_1"){
                    itemAtual = new Opcao1(itemAtual);
                }else if(opcoes_radio[i].value==="opcao_2"){
                    itemAtual = new Opcao2(itemAtual);
                }else if(opcoes_radio[i].value==="opcao_3"){
                    itemAtual = new Opcao3(itemAtual);
                }
                itemAtual.opcao = opcoes_radio[i].value;
            }
        }
    } else if(screenAtual == 5){
        for(let i = 0; i < tamanho_radio.length; i++){
            if(tamanho_radio[i].checked){
               //itemAtual.item.tamanho = tamanho_radio[i].value; 
               itemBase = getItemBase(itemAtual);
               itemBase.tamanho = tamanho_radio[i].value;
               //console.log(itemAtual.tamanho); 
            } 
        }
    } else if(screenAtual == 6){
        //itemAtual.item.quantidade = qtdItemAtual;
        itemBase = getItemBase(itemAtual);
        itemBase.quantidade = qtdItemAtual;
        processador.executarAdicao(pedidoAtual, itemAtual);
        itemAtual = null;
    } else if(screenAtual == 7){
        console.log("entrou no resumo pedido");
        exibeResumoPedido();
    } else if(screenAtual == 8){
        console.log("entrou no resumo pagamento");
        exibeResumoPagamento();
    } else if(screenAtual == 9){
        p_numero_pedido.innerHTML = pedidoAtual.numero;
        exibePedidoConfirmado();
        div_itens_carrinho.innerHTML = '';
        pedidoAtual.itens = [];
    }

    screen[screenAtual].classList.remove('active');
    screen[screenAtual].classList.add('hidden');

    if(screenAtual == 10){
        screenAtual = 0;
        pedidoAtual.itens = [];
    }
    
    screenAtual++;

    screen[screenAtual].classList.remove('hidden');
    screen[screenAtual].classList.add('active');

}
function voltarEtapa(){
    screen[screenAtual].classList.remove('active');
    screen[screenAtual].classList.add('hidden');

    screenAtual--;

    screen[screenAtual].classList.remove('hidden');
    screen[screenAtual].classList.add('active');
}

function exibePedidoConfirmado(){
    // <div class="info_resumo_item">
    //             <p class="info_qtd_nome_tamanho_item">Quantidade x item (tamanho)</p>
    //             <p>R$XX,XX</p>
    // </div>

    console.log(pedidoAtual.itens);
    
    for(let i = 0; i < pedidoAtual.itens.length; i++){
        let div_resumo_item = document.createElement("div");
        div_resumo_item.classList.add("info_resumo_item");
        let paragrafo_resumo_item = document.createElement("p");
        paragrafo_resumo_item.classList.add("info_qtd_nome_tamanho_item");
        paragrafo_resumo_item.innerHTML = `${pedidoAtual.itens[i].item.quantidade} x ${pedidoAtual.itens[i].item.nome} (${pedidoAtual.itens[i].item.tamanho})`;
        let paragrafo_preco = document.createElement("p");
        paragrafo_preco.innerHTML = "R$XX,XX";
        div_resumo_pedido_final.appendChild(div_resumo_item);
        div_resumo_item.appendChild(paragrafo_resumo_item);
        div_resumo_item.appendChild(paragrafo_preco);
    }
}


//////////////////////////////////////////////////////////////////////////////
// factory method
class Pedido {

    // preço total
    // listaItens
    // numero do pedido

    constructor(numero){
        this.numero = numero;
        this.itens = [];
    }

    adicionarItem(item){
        let base = getItemBase(item);
        //item.item.adicionado = true;
        base.adicionado = true;
        this.itens.push(item);
        let div_item_carrinho = document.createElement("div");
        div_item_carrinho.classList.add("item_carrinho");
        //div_item_carrinho.classList.add(`item${item.item.numero}`);
        div_item_carrinho.classList.add(`item${base.numero}`);
        let div_imagens_carrinho = document.createElement("div");
        div_imagens_carrinho.classList.add("imagens_carrinho");
        let imagem_item = document.createElement("img");
        imagem_item.src = "img/img_item.png";
        imagem_item.classList.add("img_item");
        let imagem_lixeira = document.createElement("img");
        imagem_lixeira.src = "img/lixeira.png";
        imagem_lixeira.classList.add("img_lixeira");
        //imagem_lixeira.classList.add(item.item.numero);
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
        //h3_nome_item.innerHTML = item.item.nome;
        h3_nome_item.innerHTML = base.nome;
        div_descricao_carrinho.appendChild(h3_nome_item);
        //p_descricao_item.innerHTML = `${item.item.quantidade} x ${item.item.tamanho}<br>${item.opcao}`;
        p_descricao_item.innerHTML = `${base.quantidade} x ${base.tamanho}<br>${item.opcao}`;
        div_descricao_carrinho.appendChild(p_descricao_item);
        h3_preco_item.innerHTML = `R$ XX,XX`;
        div_descricao_carrinho.appendChild(h3_preco_item);
    }

    removerItem(numero){
        let indiceRemovido = -1;
        for(let i = 0; i < this.itens.length; i++){
            if(this.itens[i].item.numero == numero){
                indiceRemovido = i;
            }
            
        }

        if(indiceRemovido != -1){
            this.itens.splice(indiceRemovido, 1);
        }
    }

    calcularPrecoTotal(){
        return this.itens.reduce((total, item)=>total+item.preco, 0);
    }
}

class Item { 
    constructor(numero, categoria="", nome=null, quantidade=1, preco=1.0, tamanho="pequeno",opcao, adicionado = false, observacao=""){
        this.categoria = categoria;
        this.nome = nome;
        this.quantidade = quantidade;
        this.preco = preco;
        this.tamanho = tamanho;
        this.opcao = opcao;
        this.numero = numero;
        this.adicionado = adicionado;
        this.observacao = observacao;
        // extras
        // opções
        
    }
    getNome(){
        return this.nome;
    }

    getPreco(){
        return this.preco;
    }
}

function getItemBase(obj){
    while(obj.item){
        obj = obj.item;
    }
    return obj;
}

function exibeResumoPedido(){
    console.log("entrou na função de exibir resumo pedido...");
    div_resumo_pedido.innerHTML = '';

    let h3_box = document.createElement('div');
    h3_box.classList.add("h3_box");
    let resumo_h3 = document.createElement('h3');
    resumo_h3.classList.add("resumo_h3");
    resumo_h3.innerHTML = "Detalhes do Pedido";
    h3_box.appendChild(resumo_h3);
    div_resumo_pedido.appendChild(h3_box);

    for(let i = 0; i < pedidoAtual.itens.length; i++){
        const item = pedidoAtual.itens[i];
        itemBase = getItemBase(item);

        let item_pedido_box = document.createElement('div');
        item_pedido_box.classList.add("item_pedido_box");
        let div_item = document.createElement('div');//não tem classe
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
        p_preco.innerHTML = "R$ XX,XX";

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

function exibeResumoPagamento(){
    console.log("entrou na função de exibir resumo pagamento...");
    div_resumo_pagamento.innerHTML = '';

    let info_pagamento_box_itens = document.createElement('div');
    info_pagamento_box_itens.classList.add("info_pagamento_box");

    for(let i = 0; i < pedidoAtual.itens.length; i++){
        const item = pedidoAtual.itens[i];
        console.log(item);

        let div_item = document.createElement('div');
        let p_item = document.createElement('p');
        let p_preco =document.createElement('p');
        p_preco.classList.add('preco');

        p_item.innerHTML = `${item.item.nome}`;
        p_preco.innerHTML = "R$ XX,XX";

        div_item.appendChild(p_item);
        div_item.appendChild(p_preco);
         
        info_pagamento_box_itens.appendChild(div_item);
    }

    let info_pagamento_box_subtotal_imposto = document.createElement('div');
    info_pagamento_box_subtotal_imposto.classList.add("info_pagamento_box");

    let div_subtotal = document.createElement('div');
    div_subtotal.classList.add('subtotal_box');
    let p_subtotal = document.createElement('p');
    p_subtotal.classList.add('subtotal');
    p_subtotal.innerHTML = "Subtotal";
    let p_preco_subtotal = document.createElement('p');
    p_preco_subtotal.classList.add('preco');
    p_preco_subtotal.innerHTML = "R$ XX,XX";

    div_subtotal.appendChild(p_subtotal);
    div_subtotal.appendChild(p_preco_subtotal);
    
    let div_imposto = document.createElement('div');
    let p_imposto = document.createElement('p');
    p_imposto.classList.add('imposto');
    p_imposto.innerHTML = "Imposto";
    let p_preco_imposto = document.createElement('p');
    p_preco_imposto.classList.add('preco');
    p_preco_imposto.innerHTML = "R$ XX,XX";
    
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
    p_preco_total.innerHTML = "R$ XX,XX";

    div_total.appendChild(p_total);
    div_total.appendChild(p_preco_total);

    info_pagamento_box_total.appendChild(div_total);

    div_resumo_pagamento.appendChild(info_pagamento_box_itens);
    div_resumo_pagamento.appendChild(info_pagamento_box_subtotal_imposto);
    div_resumo_pagamento.appendChild(info_pagamento_box_total);
}

//Decorator
class AdicionalDecorator{
    
    constructor(item){
        this.item = item;
    }
    getNome(){
        return this.item.getNome();
    }
    getPreco(){
        return this.item.getPreco();
    }

}

class Opcao1 extends AdicionalDecorator{
    getNome(){
        return this.item.getNome();
    }
    getPreco(){
        return this.item.getPreco(); //Valor hipotético
    }
}
class Opcao2 extends AdicionalDecorator{
    getNome(){
        return this.item.getNome();
    }
    getPreco(){
        return this.item.getPreco(); //Valor hipotético
    }
}
class Opcao3 extends AdicionalDecorator{
    getNome(){
        return this.item.getNome();
    }
    getPreco(){
        return this.item.getPreco(); //Valor hipotético
    }
}

class FabricaPedidos {
    static criarNovoPedido(){
        const novoPedido = new Pedido(Math.floor(Math.random() * 1000));
        return novoPedido;
    }
}

class FabricaItens {
    static criarNovoItem(){
        const novoItem = new Item(Math.floor(Math.random() * 1000));
        return novoItem;
    }
}


// template method
class ProcessadorAdicaoItem {
    constructor() {
        if (new.target == ProcessadorAdicaoItem){
            throw new Error("A classe ProcessarAdicaoItem é abstrata!");
        }
    }

    executarAdicao(pedido, item){
        this._validarItem(item);
        const itemProcessado = this.customizarItem(item);
        this._finalizarAdicao(pedido, itemProcessado);
    }

    _validarItem(item){
        if(!(item instanceof Item || item instanceof AdicionalDecorator)){
            throw new Error("Erro de Tipo: O objeto deve ser uma instância válida de Item.");
        }
    }

    _finalizarAdicao(pedido, item){
        pedido.adicionarItem(item);
    }
    
    customizarItem(item){
        throw new Error("O método 'customizarItem()' deve ser implementado pela subclasse.");
    }
}

class ProcessadorAdicaoCardapio extends ProcessadorAdicaoItem{
    customizarItem(item){
        item.observacao = "Adicionado via Cardápio Digital";
        return item;
    }
}

class ProcessadorAdicaoSugestao extends ProcessadorAdicaoItem{
    customizarItem(item){
        //alterar atributos de item para alguma sugestão de produto
        item.observacao = "Adicionado via Sugestão do Sistema";
        return item;
    }
}