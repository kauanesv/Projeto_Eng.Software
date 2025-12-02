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

const div_categoria = document.querySelector(".screen_3");

let preco_total_carrinho = document.querySelector(".screen_carrinho_compras .preco_total .valor");

let div_resumo_total_pago = document.querySelector('.resumo_total_pago .valor');

// variáveis de controle
let pedidoAtual;
let itemAtual;
let itemBase;
let processador;

let itemSugestao = 0;
let qtdItemAtual = 1;
let screenAtual = 0;

let numeros_itens = [];

let aux_item;

import {teste_remocao_item, teste_exibicao_item} from './auto_testes.js';
import { le_arquivoJson } from './entrada_dados.js';
import { simula_pedido } from './auto_testes.js';
import { teste_fluxo_telas } from './auto_testes.js';
import { clcPrecoTotal } from './calcula_preco.js';
import { identificaCategoriaAtual } from './view.js';
import { exibeIngredientes } from './view.js';
import { exibeProdutoSugestao } from './view.js';
import { calculaPrecoTamanho } from './calcula_preco.js';
import { exibePrecoTamanhos } from './view.js';
import { exibePrecoQuantidade } from './view.js';
import { exibirItemCarrinho } from './view.js';
import { exibeResumoPedido } from './view.js';
import { exibeResumoPagamento } from './view.js';
import { exibePedidoConfirmado } from './view.js';

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
        itemSugestao = 1;
        avancarEtapa(e);

    // identifica quando o usuário quer fechar uma tela ou voltar uma tela anterior
    } else if(e.target.classList.contains('close_screen') || e.target.classList.contains('voltar')){
        itemSugestao = 0;
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
        pedidoAtual.preco_total= pedidoAtual.calcularPrecoTotal();
        preco_total_carrinho.innerHTML = "R$" + pedidoAtual.preco_total.toFixed(2);
    // identifica quando o usuário quer limpar o carrinho
    } else if(e.target.classList.contains('limpar_carrinho')){
        // limpa todo o HTML e a lista do pedido
        div_itens_carrinho.innerHTML = '';
        pedidoAtual.itens = [];
        pedidoAtual.preco_total = 0;
        preco_total_carrinho.innerHTML = "R$" + pedidoAtual.preco_total.toFixed(2);
    // identifica quando o usuário seleciona a quantidade de itens
    } else if(screenAtual == 6){
        //qtdItemAtual = Number(quantidade_itens.innerHTML);
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
    exibePrecoQuantidade(itemBase, qtdItemAtual);
}

function avancarEtapa(e){
    // se o usuário estiver na tela inicial
    if(screenAtual == 0){
        // instancia novo pedido
        pedidoAtual = FabricaPedidos.criarNovoPedido();
        preco_total_carrinho.innerHTML = "R$" + pedidoAtual.preco_total.toFixed(2);
        // instancia novo item
        itemAtual = FabricaItens.criarNovoItem();
        pedidoAtual.preco_total = 0;
    // se o usuário estiver na tela de categorias
    } else if(screenAtual == 1){
        // verifica se o item ainda existe. Senão, cria outro
        if(itemAtual == null){
            itemAtual = FabricaItens.criarNovoItem();
            //pedidoAtual.preco_total = 0;
        }

        if(pedidoAtual == null){
            pedidoAtual = FabricaPedidos.criarNovoPedido();
        }
        // obtém categoria selecionada
        if(itemSugestao) {
             exibeProdutoSugestao(cardapio);
        } else {
            itemAtual.categoria = e.target.classList[1];
            identificaCategoriaAtual(itemAtual.categoria, cardapio, div_categoria); 
        }

        // se o usuário estiver na tela de itens
    } else if(screenAtual == 2){
        // obtém nome do item atual

        const botao = e.target.closest("button.button"); 
        if (!botao) return; 

        itemAtual.numero = botao.classList[1]; 
        //itemAtual.nome = e.target.classList[1];
        aux_item = cardapio.buscarItem(itemAtual.numero);
        if(itemSugestao) itemAtual.categoria = aux_item.categoria;
        itemAtual.ingredientes = aux_item.ingredientes;
        itemAtual.preco = Number(aux_item.preco);
        itemAtual.nome = aux_item.nome;
        itemAtual.img = aux_item.img;

        exibeIngredientes(aux_item);
    // se o usuário estiver na tela de opções
    } else if(screenAtual == 4){ // opções
        for(let i = 0; i < opcoes_radio.length; i++){
            // verifica o item que estiver checado
            itemBase = getItemBase(itemAtual);
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
    
        exibePrecoTamanhos(itemBase);
    // se o usuário estiver na tela de tamanhos
    } else if(screenAtual == 5){
        for(let i = 0; i < tamanho_radio.length; i++){
            // verifica o item que estiver checado
            if(tamanho_radio[i].checked){
                //itemBase = getItemBase(itemAtual);
                // salva valor do tamanho selecionado
                itemBase.tamanho = tamanho_radio[i].value;
            } 
        }
        
        calculaPrecoTamanho(itemBase.tamanho, itemBase);
        // se o usuário estiver na tela de quantidade de itens e selecionou "adicionar ao carrinho"
        exibePrecoQuantidade(itemBase, qtdItemAtual);
    } else if(screenAtual == 6){
        // salva quantidade selecionada
        //itemBase = getItemBase(itemAtual);
        itemBase.quantidade = qtdItemAtual;

        // adiciona item ao pedido
        itemAtual.item.quantidade = itemBase.quantidade;
        itemAtual.item.tamanho = itemBase.tamanho;
        itemAtual.item.preco = itemBase.preco * itemBase.quantidade;
        itemAtual.item.opcao = itemAtual.opcao;

        // instancia novo processador para identificar a origem do item e validar os tipos
        if(itemSugestao) processador = new ProcessadorAdicaoSugestao();
        else processador = new ProcessadorAdicaoCardapio();
        processador.executarAdicao(pedidoAtual, itemAtual.item);
        pedidoAtual.preco_total = pedidoAtual.calcularPrecoTotal()
        // limpa item atual
        quantidade_itens.innerHTML = '1';
        qtdItemAtual = 1;
        itemAtual = null;
        preco_total_carrinho.innerHTML = "R$" + pedidoAtual.preco_total.toFixed(2);
    //se o usuário estiver na tela de resumo do pedido
    } else if(screenAtual == 7){
        // chama função para exibir o resumo do pedido 
        exibeResumoPedido(div_resumo_pedido, pedidoAtual, itemBase);
    // se o usuário estiver na tela de resumo de pagamento
    } else if(screenAtual == 8){
        // chama função para exibir o resumo de pagamento
        exibeResumoPagamento(div_resumo_pagamento, pedidoAtual, itemBase);
    // se o usuário estiver na tela de confirmar pedido
    } else if(screenAtual == 9){
        // atualiza valor do número do pedido na exibição
        p_numero_pedido.innerHTML = pedidoAtual.numero;
        // chama função para exibir o pedido confirmado
        exibePedidoConfirmado(div_resumo_pedido_final, div_resumo_total_pago, pedidoAtual);
        itemAtual = null;
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
        pedidoAtual.preco_total = 0;
        preco_total_carrinho.innerHTML = "R$" + pedidoAtual.preco_total.toFixed(2);
        pedidoAtual = null;
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

//////////////////////////////////////////////////////////////////////////////
// factory method
// Classe de pedido

class Pedido {
    constructor(numero){
        this.numero = numero;
        this.itens = [];
        this.preco_total = 0;
    }

    adicionarItem(item){
        let base = getItemBase(item);
        base.adicionado = true;
        this.itens.push(item);
    }

    removerItem(numero){
        let indiceRemovido = -1;
        for(let i = 0; i < this.itens.length; i++){
            if(this.itens[i].numero == numero){
                indiceRemovido = i;
            }
            
        }

        if(indiceRemovido != -1){
            this.itens.splice(indiceRemovido, 1);
            return true;
        } 

        console.log("O item n° " + numero + " não existe no pedido atual!");
        return false;

    }

    calcularPrecoTotal(){
        return this.itens.reduce((total, item)=>total+item.preco, 0);
    }

    buscarItem(numero){
        let item;
        for(let item of this.itens){
            if(item.numero == numero) return item;    
        }

        return null;
    }
}

// Classe de Item
class Item { 
    constructor(numero, categoria="", nome=null, preco=1.5, ingredientes = [], img = "./img/img_item.png", rotulo = "null", quantidade=1, tamanho="pequeno",opcao, adicionado = false, observacao=""){
        this.categoria = categoria;
        this.nome = nome;
        this.quantidade = quantidade;
        this.preco = preco;
        this.tamanho = tamanho;
        this.opcao = opcao;
        this.numero = numero;
        this.adicionado = adicionado;
        this.observacao = observacao;
        this.ingredientes = ingredientes;
        this.img = img;
        this.rotulo = rotulo;
    }

    getNome(){
        return this.nome;
    }

    getPreco(){
        return this.preco;
    }
    
    toString(){
        let str="";
        for(let i of this.ingredientes){
            str += i+", ";//arrumar vírgula no final
        }
        return "\n\n============ ITEM ============\nCategoria: "+this.categoria+"\nNome: "+this.nome+"\nQuantidade: "+
                this.quantidade+"\nPreço: "+this.preco+"\nTamanho: "+this.tamanho+"\nOpção: "+this.opcao+"\nNúmero: "+
                this.numero+"\nAdicionado: "+this.adicionado+"\nIngredientes: "+str+"\nObservação: "+this.observacao;  
    }

}

// factory method (fabrica pedidos)
export class FabricaPedidos {
    static criarNovoPedido(){
        const novoPedido = new Pedido(Math.floor(Math.random() * 1000));
        return novoPedido;
    }
}

// factory method (fabrica itens)
class FabricaItens {
    static criarNovoItem(){
        // let numero = Math.floor(Math.random() * 1000);
        // numeros_itens.add(numero)
        const novoItem = new Item();
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

    toString(){
        return this.item.toString();  
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
        exibirItemCarrinho(item, div_itens_carrinho);
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

class Cardapio {
    constructor(){
        this.produtos = [];
    }

    adicionarProduto(id, categoria, nome, preco, ingredientes, img, rotulo){
        this.produtos.push(new Item(id, categoria, nome, preco, ingredientes, img, rotulo));
    }

    removerProduto(numero){
        let indiceRemovido = -1;
        for(let i = 0; i < this.produtos.length; i++){
            if(this.produtos[i].id == numero){
                indiceRemovido = i;
            }
        }

        if(indiceRemovido != -1){
            this.produtos.splice(indiceRemovido, 1);
        } else {
            console.log("O produto n° " + numero + " não existe no cardápio!");
        }
    }

    toString(){
        let str = "";
        for(let item of this.produtos){
            str += item.toString();
        }
        return str;
    }

    buscarItem(numero){
        let item;
        for(let item of this.produtos){
            if(item.numero == numero) return item;    
        }

        return null;
    }
}

let cardapio = new Cardapio();
let pedido_simulado = FabricaPedidos.criarNovoPedido();
let lista = [];
let lista1_teste = [0,1,2,3,4,5,6,7,8,9,10];
let lista2_teste = [0,1,7,1,2,3,4,5,4,5,6,7,8,9,10,1];

//Vou considerar o tamanho 15 para teste
let tamanho = 15;

for(let i = 0; i<tamanho;i++){
    lista.push(Math.floor(Math.random() * 11));
}

// incialização do programa e testes
async function main() {
    await le_arquivoJson("./produtos.json", cardapio);
    
    // simula_pedido(cardapio, pedido_simulado);
    
    // teste_fluxo_telas(lista2_teste);
}


main();

