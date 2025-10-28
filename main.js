// elementos HTML
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

// variáveis de controle
let pedidoAtual;
let itemAtual;
let qtdItemAtual;
let itemBase;
let processador;

let screenAtual = 0;

// identifica clicks na tela
window.addEventListener('click', e => {
    // identifica clicks no botão
    if(e.target.classList.contains('button')){
        if(e.target.classList.contains('finalizar_pedido')){
            screenAtual = 7; 

            // permite finalizar pedido somente quando houver algum item
            if(pedidoAtual.itens.length > 0){
                // passa a próxima tela
                avancarEtapa(e);
            }
        } else {
            avancarEtapa(e);
        }
    // identifica quando o usuário acessa as sugestões
    } else if(e.target.classList.contains('sugestoes')) {
        avancarEtapa(e);

    // identifica quando o usuário quer fechar uma tela ou voltar uma tela anterior
    } else if(e.target.classList.contains('close_screen') || e.target.classList.contains('voltar')){
        voltarEtapa();
    // identifica quando o usuário quer abrir o carrinho de compras
    } else if(e.target.classList.contains('carrinho_compras')){
        // desativa tela atual
        screen[screenAtual].classList.remove('active');
        screen[screenAtual].classList.add('hidden');

        // ativa tela de carrinho de compras
        screen_carrinho_compras.classList.remove('hidden');
        screen_carrinho_compras.classList.add('active');
    // identifica quando o usuário quer fechar o carrinho de compras
    } else if(e.target.classList.contains('close_screen_carrinho')){
        // desativa tela de carrinho de compras
        screen_carrinho_compras.classList.remove('active');
        screen_carrinho_compras.classList.add('hidden');

        if(screenAtual == 7){
            screenAtual = 1;
        }
        
        // ativa tela anterior ao carrinho de compras
        screen[screenAtual].classList.remove('hidden');
        screen[screenAtual].classList.add('active');
    // identifica quando o usuário quer acessar o resumo do pedido
    } else if(e.target.classList.contains('resumo_pedido')){
        screen[screenAtual].classList.remove('active');
        screen[screenAtual].classList.add('hidden');
        screen_resumo_pedido.classList.remove('hidden');
        screen_resumo_pedido.classList.add('active');
    // identifica quando o usuário quer acessar o resumo do pagamento
    } else if(e.target.classList.contains('resumo_pagamento')){
        screen[screenAtual].classList.remove('active');
        screen[screenAtual].classList.add('hidden');
        screen_resumo_pagamento.classList.remove('hidden');
        screen_resumo_pagamento.classList.add('active');
     // identifica quando o usuário quer excluir um item do carrinho de compras
    } else if(e.target.classList.contains('img_lixeira')){
        // identifica item removido, limpa HTML e remove da lista de pedido
        let item_removido = document.querySelector(`.item${e.target.classList[1]}`);
        item_removido.innerHTML = '';
        pedidoAtual.removerItem(Number(e.target.classList[1]));
    // identifica quando o usuário quer limpar o carrinho
    } else if(e.target.classList.contains('limpar_carrinho')){
        // limpa todo o HTML e a lista do pedido
        div_itens_carrinho.innerHTML = '';
        pedidoAtual.itens = [];
    // identifica quando o usuário seleciona a quantidade de itens
    } else if(screenAtual == 6){
        qtdItemAtual = Number(quantidade_itens.innerHTML);
        alteraQuantidade(e);
    } 
})

function alteraQuantidade(e){
    // identifica quando o usuário reduz a quantidade de itens
    if(e.target.classList.contains('quantidade_menos')){
        if(qtdItemAtual > 1){
            qtdItemAtual--;
        }
    // identifica quando o usuário aumenta a quantidade de itens
    } else if(e.target.classList.contains('quantidade_mais')){
        qtdItemAtual++;
    }

    // escreve a quantidade no HTML
    quantidade_itens.innerHTML = qtdItemAtual;
}

function avancarEtapa(e){
    // se o usuário estiver na tela inicial
    if(screenAtual == 0){
        // instancia novo pedido
        pedidoAtual = FabricaPedidos.criarNovoPedido();
        // instancia novo item
        itemAtual = FabricaItens.criarNovoItem();
        // instancia novo processador para identificar a origem do item e validar os tipos
        processador = new ProcessadorAdicaoCardapio();
    // se o usuário estiver na tela de categorias
    } else if(screenAtual == 1){
        // verifica se o item ainda existe. Senão, cria outro
        if(itemAtual == null){
             itemAtual = FabricaItens.criarNovoItem();
        }

        // obtém categoria selecionada
        itemAtual.categoria = e.target.classList[1];
    // se o usuário estiver na tela de itens
    } else if(screenAtual == 2){
        // obtém nome do item atual
        itemAtual.nome = e.target.classList[1];
    // se o usuário estiver na tela de opções
    } else if(screenAtual == 4){ // opções
        for(let i = 0; i < opcoes_radio.length; i++){
            // verifica o item que estiver checado
            if(opcoes_radio[i].checked){
                // instancia opção de acordo com o que foi selecionado
                if(opcoes_radio[i].value === "opcao_1"){
                    itemAtual = new Opcao1(itemAtual);
                } else if(opcoes_radio[i].value === "opcao_2"){
                    itemAtual = new Opcao2(itemAtual);
                } else if(opcoes_radio[i].value === "opcao_3"){
                    itemAtual = new Opcao3(itemAtual);
                }

                // salva opção selecionada 
                itemAtual.opcao = opcoes_radio[i].value;
            }
        }
    
    // se o usuário estiver na tela de tamanhos
    } else if(screenAtual == 5){
        for(let i = 0; i < tamanho_radio.length; i++){
            // verifica o item que estiver checado
            if(tamanho_radio[i].checked){
               itemBase = getItemBase(itemAtual);
               // salva valor do tamanho selecionado
               itemBase.tamanho = tamanho_radio[i].value;
            } 
        }
    // se o usuário estiver na tela de quantidade de itens e selecionou "adicionar ao carrinho"
    } else if(screenAtual == 6){
        // salva quantidade selecionada
        itemBase = getItemBase(itemAtual);
        itemBase.quantidade = qtdItemAtual;
        // adiciona item ao pedido
        processador.executarAdicao(pedidoAtual, itemAtual);
        // limpa item atual
        itemAtual = null;
    //se o usuário estiver na tela de resumo do pedido
    } else if(screenAtual == 7){
        // chama função para exibir o resumo do pedido 
        exibeResumoPedido();
    // se o usuário estiver na tela de resumo de pagamento
    } else if(screenAtual == 8){
        // chama função para exibir o resumo de pagamento
        exibeResumoPagamento();
    // se o usuário estiver na tela de confirmar pedido
    } else if(screenAtual == 9){
        // atualiza valor do número do pedido na exibição
        p_numero_pedido.innerHTML = pedidoAtual.numero;
        // chama função para exibir o pedido confirmado
        exibePedidoConfirmado();
        // esvazia caixa de exibição da tela do carrinho
        div_itens_carrinho.innerHTML = '';
        // esvazia lista de itens do pedido
        pedidoAtual.itens = [];
    }

    // oculta visibilidade da última tela vigente
    screen[screenAtual].classList.remove('active');
    screen[screenAtual].classList.add('hidden');
    
    // caso click na tela final
    if(screenAtual == 10){
        // volta a tela inicial
        screenAtual = 0;
        // esvazia itens da lista
        pedidoAtual.itens = [];
    }
    
    // incrementa screen atual
    screenAtual++;

    // habilita visibilidade da nova tela vigente
    screen[screenAtual].classList.remove('hidden');
    screen[screenAtual].classList.add('active');
}

function voltarEtapa(){
    // oculta visibilidade da última tela vigente
    screen[screenAtual].classList.remove('active');
    screen[screenAtual].classList.add('hidden');

    // decrementa screen atual
    screenAtual--;

    // habilita visibilidade da nova tela vigente
    screen[screenAtual].classList.remove('hidden');
    screen[screenAtual].classList.add('active');
}

function exibePedidoConfirmado(){
    // percorre itens no pedido
    for(let i = 0; i < pedidoAtual.itens.length; i++){
        // cria, classifica e adiciona elementos 
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

function exibirItemCarrinho(base, item){
    // cria, classifica e adiciona elementos da tela do carrinho
    let div_item_carrinho = document.createElement("div");
    div_item_carrinho.classList.add("item_carrinho");
    div_item_carrinho.classList.add(`item${base.numero}`);
    let div_imagens_carrinho = document.createElement("div");
    div_imagens_carrinho.classList.add("imagens_carrinho");
    let imagem_item = document.createElement("img");
    imagem_item.src = "img/img_item.png";
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
    p_descricao_item.innerHTML = `${base.quantidade} x ${base.tamanho}<br>${item.opcao}`;
    div_descricao_carrinho.appendChild(p_descricao_item);
    h3_preco_item.innerHTML = `R$ XX,XX`;
    div_descricao_carrinho.appendChild(h3_preco_item);
}


//////////////////////////////////////////////////////////////////////////////
// factory method
// Classe de pedido
class Pedido {
    constructor(numero){
        this.numero = numero;
        this.itens = [];
    }

    adicionarItem(item){
        let base = getItemBase(item);
        base.adicionado = true;
        this.itens.push(item);
        exibirItemCarrinho(base, item);
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

// Classe de Item
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
    }
    
    getNome(){
        return this.nome;
    }

    getPreco(){
        return this.preco;
    }
}

// factory method (fabrica pedidos)
class FabricaPedidos {
    static criarNovoPedido(){
        const novoPedido = new Pedido(Math.floor(Math.random() * 1000));
        return novoPedido;
    }
}

// factory method (fabrica itens)
class FabricaItens {
    static criarNovoItem(){
        const novoItem = new Item(Math.floor(Math.random() * 1000));
        return novoItem;
    }
}

// Função para pegar o último objeto encapsulado do decorator
function getItemBase(obj){
    while(obj.item){
        obj = obj.item;
    }
    return obj;
}

// Exibir resumo do pedido (elementos dinâmicos)
function exibeResumoPedido(){
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

// Exibir resumo de pagamento (elementos dinâmicos)
function exibeResumoPagamento(){
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
        p_preco.innerHTML = "R$ XX,XX";

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

// Decorator
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

// Decorator Opção 1
class Opcao1 extends AdicionalDecorator{
    getNome(){
        return this.item.getNome();
    }
    getPreco(){
        return this.item.getPreco(); //Valor hipotético
    }
}

// Decorator Opção 2
class Opcao2 extends AdicionalDecorator{
    getNome(){
        return this.item.getNome();
    }
    getPreco(){
        return this.item.getPreco(); //Valor hipotético
    }
}

// Decorator Opção 3
class Opcao3 extends AdicionalDecorator{
    getNome(){
        return this.item.getNome();
    }
    getPreco(){
        return this.item.getPreco(); //Valor hipotético
    }
}

// Template method
class ProcessadorAdicaoItem {
    // Simula classe abstrata
    constructor() {
        if (new.target == ProcessadorAdicaoItem){
            throw new Error("A classe ProcessarAdicaoItem é abstrata!");
        }
    }

    // Executa sequência de métodos (tamplate)
    executarAdicao(pedido, item){
        this._validarItem(item);
        const itemProcessado = this.customizarItem(item);
        this._finalizarAdicao(pedido, itemProcessado);
    }

    // Verifica validade de tipos
    _validarItem(item){
        if(!(item instanceof Item || item instanceof AdicionalDecorator)){
            throw new Error("Erro de Tipo: O objeto deve ser uma instância válida de Item.");
        }
    }

    // Adiciona item ao pedido
    _finalizarAdicao(pedido, item){
        pedido.adicionarItem(item);
    }
    
    // Função concreta para ser implementada pelas subclasses
    customizarItem(item){
        throw new Error("O método 'customizarItem()' deve ser implementado pela subclasse.");
    }
}

// Classe concreta
class ProcessadorAdicaoCardapio extends ProcessadorAdicaoItem{
    // Implementa método concreto herdado do pai
    customizarItem(item){
        item.observacao = "Adicionado via Cardápio Digital";
        return item;
    }
}

// Classe concreta
class ProcessadorAdicaoSugestao extends ProcessadorAdicaoItem{
    // Implementa método concreto herdado do pai
    customizarItem(item){
        //alterar atributos de item para alguma sugestão de produto
        item.observacao = "Adicionado via Sugestão do Sistema";
        return item;
    }
}