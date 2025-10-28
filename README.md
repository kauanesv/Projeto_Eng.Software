# 📱 SISTEMA DE COMANDA DIGITAL

# INTRODUÇÃO A ENGENHARIA DE REQUISITOS
## 1 OBJETIVO
Este projeto visa desenvolver um sistema de comanda digital humanizada, a fim de otimizar o atendimento em cafeterias, restaurantes, lanchonetes e similares. Para tanto, objetiva-se desenvolver um sistema com interface gráfica que permita ao usuário visualizar o cardápio e realizar o pedido de maneira intuitiva, dinâmica e rápida, sem precisar do auxílio contínuo de um atendente. A fim de facilitar o desenvolvimento do protótipo, pretende-se desenvolver uma comanda digital inspirada em uma cafeteria, mas os componentes do software podem ser reaproveitados em outros tipos de estabelecimentos comerciais.

## 2 TÉCNICA

Nós vamos utilizar partes do modelo ágil de projeto Scrum, o qual vamos seguir os seguintes conceitos:

* Sprint planning (reunião de planejamentos): Consta o momento em que o fizemos o levantamento de requisitos desejados para o projeto e definimos as tarefas.

* Sprint planning parte 1 (Team) : define o que vai ser feito. Nesta parte, nós apresentamos com uma visão de negócio os itens do Product Backlog com maior prioridade. Nós fazemos perguntas/pesquisas/observações para entender e rascunhar possíveis soluções técnicas. Uma vez que os itens apresentados irão formar o Sprint Backlog.

* Sprint Goal: Em conjunto nós o Scrum Team vamos definir uma meta para o Sprint. Uma boa meta do Sprint é descrita em um ou duas frases no máximo. Ela deve descrever o que o time deve alcançar durante o Sprint.

* Sprint planning parte 2 (Team):  define como vai ser desenvolvido.  
Nós pegamos os itens selecionados na Parte 1 e quebramos em tarefas técnicas no Sprint Backlog.
É feito o detalhamento necessário: dependências, estimativas, estratégias de implementação e divisão do trabalho.
Nós como um time garantimos que o processo siga os princípios do Scrum.

* Sprint: é um ciclo curto e com tempo definido (geralmente de uma a quatro semanas) em que nós trabalhamos para completar um incremento de produto utilizável.
Cada Sprint funciona como um mini-projeto, com planejamento, execução, revisão e retrospectiva. O objetivo é manter o foco, gerar entregas de valor de forma contínua e permitir ajustes rápidos com base no feedback e na realidade do mercado

* Sprint review (reunião de revisão): demonstração de resultados e feedbacks para validar a entrega;

* Sprint retrospective (reunião de retrospectiva): análise sobre o desempenho da equipe e os resultados do projeto.
  
## 3 VIABILIDADE TEMPORAL
O desenvolvimento de um sistema de comanda digital humanizado, no formato de quiz e cardápio interativo, é plenamente viável dentro do semestre letivo vigente. Considerando que não haverá integração com meios de pagamento, o escopo do projeto se torna mais enxuto, permitindo foco na interação com o usuário e na geração do pedido. O cronograma pode ser dividido em quatro fases:

1. Planejamento e prototipagem (setembro, 2–3 semanas): definição do fluxo de uso, design das telas em ferramentas como Figma e organização da base de dados.
2. Desenvolvimento do MVP (outubro, 4 semanas): implementação do quiz, cardápio interativo e resumo do pedido em frontend utilizando HTML e CSS, com backend em JavaScript.
3. Testes e ajustes (novembro, 3 semanas): aplicação de testes de usabilidade, correção de erros e refinamento da interface.
4. Entrega e apresentação (final de novembro, 1 semana): apresentação da solução.
Dessa forma, o tempo estimado para a entrega de uma versão funcional é de aproximadamente 10 a 11 semanas. Essa previsão é coerente com a prática de desenvolvimento ágil de MVPs (Produto Mínimo Viável), que normalmente estabelecem prazos de 2 a 3 meses para soluções digitais de pequeno porte. 
## 4 RELEVÂNCIA
A proposta do sistema é altamente significativa, pois integra tecnologia digital de autoatendimento com a humanização da experiência do usuário. No setor de alimentação, soluções interativas oferecem benefícios claros, como maior eficiência operacional, redução de erros nos pedidos e aumento da satisfação dos clientes.
Além do aspecto funcional, a aplicação de interfaces lúdicas e personalizadas promove uma jornada mais agradável e inclusiva, estimulando o engajamento e fortalecendo a relação entre cliente e estabelecimento. Esse enfoque alia inovação tecnológica à valorização do atendimento, tornando o projeto diferenciado e alinhado às demandas atuais de digitalização no setor de serviços.

# LEVANTAMENTO DE REQUISITOS DO PROJETO
## 1 PESQUISAS
### 1.1 Objetivo da Busca
O objetivo foi identificar estudos acadêmicos e reportagens que tratam do uso de sistemas digitais de autoatendimento no setor de alimentação, buscando compreender seus impactos na experiência do usuário, na eficiência operacional e na satisfação dos clientes. Com isto buscamos transformar a tecnologia, que aos olhos de muitos é algo complexo, em algo humanizado e acessível para todos. O intuito é encontrar artigos que debatem e expliquem a importância da humanização da tecnologia para a sociedade.

### 1.2 Fonte de Busca

* ScienceDirect (base de dados acadêmica)
* Portais de notícias internacionais (The Sun, AllRecipes e MIT Technology Review)
* Google Acadêmico (LUT University)
* Consumidor Moderno

### 1.3 Critérios de Seleção

* Selecionar apenas artigos acadêmicos e reportagens publicados recentemente (2024–2025), relacionados a autoatendimento, tecnologia digital no setor alimentício e experiência do usuário.
* Foram descartados materiais que não tinham relação direta com restaurantes, cafeterias ou quiosques digitais.

### 1.4 Materiais Selecionados

* Artigos: 

	- “Design of interactive systems: Information visualization methods of self-service technology in fast food restaurants” (ScienceDirect, 2024).

		- Link: [ScienceDirect](https://www.sciencedirect.com/science/article/pii/S2451958824002185?utm_source=chatgpt.com)

		- Palavras-chave utilizadas: “interactive self-service systems”

	* “HUMANIZATION OF DIGITAL TECHNOLOGIES” (LUT University, 2024).

		* Link: [LUT University](https://lutpub.lut.fi/handle/10024/168245)

		* Palavras-chave utilizadas: “tecnologia humanizada”, “humanization technologies”, “tecnologia”, “humanisation”, “technological innovation” e “sustainable development”.

* Reportagens:

	* The Sun (2024) — “Bojangles to roll out digital kiosks in 800+ stores to cut wait times and boost accuracy.”

	* AllRecipes (2025) — “Wendy’s introduces AI-powered multilingual drive-thru service.”

	* Consumidor Moderno (2024) — “O verdadeiro significado de uma tecnologia humanizada”

	* MIT Technology Review (2022) — “Tecnologia e Cultura humanizada a serviço da vida”

### 1.5 Como a Seleção Contribuiu para os Requisitos do Projeto

A proposta do sistema é altamente relevante, pois une tecnologia digital de autoatendimento com humanização da experiência do usuário. No setor de alimentação, soluções de pedidos digitais têm crescido de forma expressiva, melhorando a eficiência operacional, reduzindo erros e aumentando a satisfação dos clientes.

Estudos acadêmicos reforçam essa importância. O artigo selecionado (ScienceDirect, 2024) demonstra como sistemas de autoatendimento com interfaces intuitivas e visualmente claras reduzem erros e elevam indicadores de satisfação:

“Clear visualization methods within self-service systems significantly reduce ordering mistakes and enhance user satisfaction metrics.”

Além disso, notícias de mercado mostram a relevância prática da temática. A rede Bojangles anunciou a implantação de quiosques digitais em mais de 800 unidades, visando reduzir filas e aumentar a precisão dos pedidos (The Sun, 2024).
Da mesma forma, a Wendy’s passou a utilizar inteligência artificial em seus drive-thrus para oferecer atendimento multilíngue e mais inclusivo (AllRecipes, 2025).

Esses exemplos evidenciam que grandes redes já exploram tecnologias digitais para melhorar a jornada do cliente, validando a relevância prática e mercadológica do sistema proposto. Ao adaptar esse conceito ao contexto de uma cafeteria, com foco em humanização e interatividade, o projeto se mostra inovador, viável e alinhado às tendências globais de digitalização no setor de alimentação.

A seleção do artigo Humanization of Digital Technologies leva aos requisitos do nosso projeto, pois nós vamos fazer uma comanda digital humanizada, logo entender o porquê de ter uma e integrá-lá na sociedade é um papel importante. O desenvolvimento de uma tecnologia, no nosso caso a comanda digital humanizada, permite que  o cliente tenha uma experiência focada mais no seu nos seus desejos e necessidades por estar usando uma tecnologia, e não de fato só existir uma tecnologia mas que ninguém sabe usá-la, a não ser pessoas especializadas ou que trabalho na área. Segundo Siemon e Wolff (2024), “This is a design philosophy that prioritises the human experience in the development of technology, with a focus on enhancing human well-being and capabilities rather than simply increasing technological functionality” (p. 178).

Tendo em vista, as ideias sobre os requisitos, vamos focalizar o nosso desenvolvimento em uma tecnologia que vai ajudar na experiência do cliente que frequenta o lugar que tem a comanda digital humanizada. E isto está longe de tirar o emprego de alguém, a ideia de ter uma tecnologia humanizada, está na ideia de expandir a interação entre o humano e a máquina de forma que haja benefícios para a sociedade e para que atraia mais cliente, neste caso em específico. E com isto, quem trabalhasse na lugar que foi implementado o projeto, teria mais facilidade de coordenar os pedidos dos clientes, rapidez no acesso ao pedido e afins. E esta ideia se confirma com, (Cramer, 2015; Jandrić et al., 2018) “This perspective encourages technologies that adapt to and enhance human practices, rather than overshadowing or replacing them.”

Em suma, a acessibilidade para que o humano se beneficie da tecnologia desenvolvida é estabelecida no que diz respeito a respeito da comanda digital humanizada. Onde é natural o uso da tecnologia ao nosso favor, e não como uma ferramenta apenas para tarefas específicas, pois segundo Norman & Stappers (2015) ”technology becomes more than a tool, but a natural extension of human activity that resonates deeply with individual and communal needs.”

Com isto, ao analisar o cenário atual, para que haja uma interconexão entre o humano e a tecnologia, é necessária uma adaptação para atender às necessidades do cotidiano. Esse papel cabe a nós: selecionar estratégias que facilitem e acelerem a ação do cliente, aumentando sua satisfação pós-uso do produto desenvolvido, substituindo, neste caso, o modelo convencional que, apesar de funcional, não contempla e não inclui a sociedade de fato em seu desenvolvimento. Isso está em concordância com o nosso projeto, pois, segundo Dutra (2022), “a transformação do modelo convencional para o adaptável coloca a gestão de dados, derivada da tecnologia atual, como essencial para a rapidez e constância na tomada de decisão, cujo núcleo estratégico é a criação e a entrega de valor para o cliente.”

Observando o cenário atual, a eficiência para o cliente é mais valorizada do que as especificidades técnicas do dispositivo em si. Com isto, “A humanização da tecnologia não está na forma ou no design estético de um dispositivo, mas na sua capacidade de entender o contexto da vida das pessoas, oferecendo soluções no momento exato em que são necessárias” (CONSUMIDOR MODERNO, 2023).

## 2 ENTREVISTA

### 2.1 Objetivo da Entrevista

Foi realizada uma entrevista semi-estruturada com a atendente da Mais1Café da unidade de Apucarana, a fim de entender melhor a experiência dos clientes com a comanda digital do estabelecimento. A Mais1Café consiste em uma rede especializada em cafés que se destaca pelo seu visual jovem e moderno. Seu atendimento é baseado em uma comanda digital disponibilizada em totens, os quais podem ser utilizados pelos clientes durante o atendimento nas lojas físicas.
 
### 2.2 Roteiro da Entrevista

O roteiro da entrevista foi montado com o intuito de abranger os principais aspectos do público-alvo da Mais1Café e do sistema de comanda digital utilizado no estabelecimento. Ele foi elaborado a fim de manter a entrevistada confortável durante o processo e entender o ponto de vista dela em relação ao tema abordado, visto que se trata de uma pessoa que interage com a comanda digital diariamente. Por se tratar de uma entrevista semi-estruturada, a entrevista não se prendeu exclusivamente às perguntas abaixo, de modo que ajustes foram realizados em tempo real sempre que necessário.

#### 2.2.1 Apresentação

Explicar o propósito da entrevista, a fim de contextualizar o entrevistado e deixá-lo confortável a respeito da precedência das perguntas.

#### 2.2.2 Aquecimento

Perguntar sobre nome e período de atuação na loja. Buscar entender a experiência de trabalho da entrevistada e conhecê-la melhor, buscando criar uma transição suave para a etapa principal da entrevista.
Perguntas direcionadas:
* Quem é o público-alvo da Mais1Café? São pessoas mais novas ou mais velhas?
* Qual o horário de pico da loja? 
* Como os clientes fazem o pedido?

#### 2.2.3 Parte principal
Perguntas direcionadas:
* Os clientes geralmente sabem o que querem comprar assim que chegam ou passam muito tempo olhando o cardápio?
* Quais as dificuldades técnicas que os clientes enfrentam ao utilizar a comanda digital? Por que você acha que isso acontece?
* Já teve clientes que não quiseram utilizar a comanda digital? Se sim, por quê?
* A maior parte dos clientes consegue utilizar a comanda digital sozinhos?

#### 2.2.4 Desaquecimento
Perguntas direcionadas:
* O que você acha da comanda digital da Mais1Café? Mudaria alguma coisa? Se sim, o que e por quê?
* (E você? Já usou?) Quando você vai em algum estabelecimento, você prefere ser atendida por um humano ou realizar seu pedido por meio de uma comanda digital? Por quê?
* Você acredita que o sistema de comanda digital pode substituir o atendimento humano no futuro? Por quê?

#### 2.2.5 Conclusão
Agradecer pelas respostas e permitir que a entrevistada faça suas considerações finais, a fim de confirmar suas respostas e refletir se tem algo a mais para complementar.

Perguntas direcionadas:
* Como você acha que seria uma comanda digital ideal?

### 2.3 Transcrição da Entrevista

Inicialmente, a entrevistada fez uma breve apresentação: seu nome é Cynthia, tem 25 anos e trabalha há quase 7 meses na Mais1Café. Antes disso, trabalhou como bartender fazendo e servindo drinks. Inclusive, ela comentou que a comanda digital facilita bastante as coisas, visto que já trabalhou com atendimento ao público em um local que não utilizava esse recurso. Cynthia pontuou que a comanda permite que o atendente foque mais em preparar o pedido, sem precisar dividir sua atenção em mais de uma tarefa simultaneamente. 

Sobre o público-alvo do local, ela comentou que não tem uma faixa etária específica. Pessoas de todas as idades frequentam o local. Sobre o horário de pico, ela comentou que às 9h e às 17h são os horários com maior movimento na cafeteria. Sobre a solicitação de ajuda durante o uso da comanda digital, ela disse que geralmente o pessoal de mais idade e aqueles que não conhecem o estabelecimento costumam pedir ajuda. Sobre os clientes demorarem para fazer o pedido por não saberem o que escolher, ela comentou que não demora muito, mesmo clientes que são novos na cafeteria. Ela disse que às vezes sugere alguma coisa ou responde dúvidas específicas sobre os itens do cardápio, como ingredientes, etc.

Sobre dificuldades técnicas no uso da comanda, ela ressaltou que o pessoal de idade costuma ter mais dificuldade para utilizar o sistema. Inclusive, durante a entrevista um casal de senhores chegou no estabelecimento e não utilizou a comanda. A atendente precisou fazer o pedido por eles no sistema, já que eles optaram por conversar diretamente com ela.

Sobre a interface da comanda digital, ela ressaltou que a tela inicial não é interativa. Parece um cartaz/painel inanimado em vez de uma comanda digital. Embora tenha um texto escrito “Faça o seu pedido”, poderia ter algum elemento mais chamativo, como um botão, que indicasse que se trata de uma comanda digital interativa e instigasse o cliente a interagir com ela. Ela também comentou sobre o cardápio: existem várias categorias de produtos vendidos na cafeteria, como bebidas quentes, bebidas geladas, etc. Os clientes não percebem que existe um menu na lateral da comanda que possibilita transitar por essas categorias. Geralmente, eles confundem esse menu com a segunda tela do cardápio, onde aparecem as principais sugestões de produtos separadas por categorias. Por isso, o design é confuso e pouco intuitivo. É difícil se localizar pela primeira vez. Durante a entrevista, inclusive, uma cliente não conseguiu encontrar o pão de queijo no cardápio e solicitou ajuda para a atendente. Além disso, o sistema às vezes recomenda produtos que não estão disponíveis no estoque, o que pode gerar um sentimento de frustração no usuário por visualizar produtos que não estão disponíveis na unidade.

Quando questionada sobre preferir usar uma comanda ou ser atendida por um humano, ela disse que prefere a comanda, pois pode escolher o seu pedido no seu próprio tempo, olhar o cardápio com calma sem ter alguém esperando para anotar o seu pedido. Ela acredita que o autoatendimento é mais prático. Se a comanda for clara e tiver todas as informações necessárias para guiar o cliente, ela acredita que não há necessidade de um humano para auxiliar o atendimento. Ela também ressaltou que pessoas mais velhas possuem naturalmente dificuldade para mexer na comanda, então pessoas mais jovens sempre terão mais facilidade. Ela comentou que a comanda da Mais1Café costuma colocar nas sugestões o que mais querem vender, não necessariamente o que mais é vendido. Além disso, a seção de sugestões não deixa intuitivo que se trata de sugestões. O título é muito pequeno, inclusive. 

Ademais, ela ressaltou uma característica importante da comanda: o usuário pode selecionar o idioma desejado. Isso ajuda no atendimento de clientes estrangeiros, principalmente em cidades maiores. Ela também comentou que descrições mais detalhadas em produtos diferentes ajuda bastante no atendimento. Também falou que seria interessante ter um selo no produto indicando que o produto é direcionado para pessoas com intolerância, ou seja, não tem glúten, etc. Outra opção seria ter uma categoria só para intolerantes.

### 2.3 Mapa Temático da Entrevista
A partir dos dados obtidos na entrevista, foi realizada uma análise sistemática que permitiu extrair os principais pontos levantados. Nesse sentido, o mapa temático abaixo mostra categoriza e resume o que foi coletado durante a entrevista.

![image](https://github.com/user-attachments/assets/344f8733-f40e-4f80-ae45-ae46efd7766a)

# DEFINIÇÃO DE REQUISITOS DO PROJETO
## 1 HISTÓRIAS DE USUÁRIO
### 1.1 Pesquisas
Com base nas pesquisas anteriores, podemos nos pautar nos seguintes cenários para montar nossas histórias de usuário:
* Artigos → usuários precisam de interfaces claras e intuitivas para reduzir erros e aumentar a satisfação.
* Reportagens → clientes valorizam agilidade no pedido, redução de filas e acessibilidade.
#### 1.1.1  HU - Pedido Intuitivo
Como cliente de cafeteria, quero visualizar um cardápio interativo em formato de quiz **para** que eu consiga montar meu pedido de forma simples e sem erros.
#### 1.1.2 HU - Agilidade no Atendimento
Como cliente em horário de pico, quero fazer meu pedido em um terminal digital para que eu não precise esperar na fila do caixa.
#### 1.1.3 HU - Acessibilidade e Inclusão
Como cliente estrangeiro ou com necessidades específicas, quero ter opções de idioma e interface clara para que eu consiga usar o sistema sem dificuldades.
#### 1.1.4 HU - Praticidade
Como cliente de um restaurante com alta demanda, quero realizar meu pedido de forma rápida e eficiente em uma comanda digital, para otimizar meu tempo de almoço sem depender de interação direta com o atendente.
#### 1.1.5 HU - Humanização/experiência intuitiva
Como cliente de uma cafeteria/doceria, quero fazer meu pedido em uma comanda digital humanizada enquanto permaneço sentado(a), para ser atendido sem precisar que o garçom anote manualmente, apenas trazendo meu pedido pronto.
#### 1.1.6 HU - Organização/eficiência
Como balconista de um bar, quero ter mais controle e organização sobre os pedidos feitos pela comanda digital, para ganhar eficiência na ordem de preparo e entrega dos pedidos

### 1.2 Entrevista
De acordo com a entrevista realizada, foram identificadas três histórias de usuários principais, as quais estão alinhadas com as críticas e expectativas pontuadas durante o levantamento de requisitos.
#### 1.2.1  HU - Tela Inicial Atrativa
Como atendente que trabalha com a comanda digital, quero que a tela inicial seja mais interativa e atrativa para os clientes não confundirem com um painel.

#### 1.2.2 HU - Menu de Categorias Intuitivo
Como cliente da comanda digital, quero que o menu de categorias exiba apenas produtos disponíveis na cafeteria, além de estar posicionado de maneira visível, para que o autoatendimento seja otimizado.

#### 1.2.3 HU - Informações Claras
Como um cliente que não conhece os itens da comanda digital, quero que todos os produtos possuam uma descrição clara dos ingredientes e das opções para pessoas com restrições alimentares para facilitar a compreensão sobre os produtos oferecidos.
	
## 2 DIAGRAMA DE SEQUÊNCIA
### 2.1 Pesquisas
#### 2.1.1 Diagrama HU1 (Pedido Intuitivo)
Diagramas de sequência inspirado na “HU - Pedido Intuitivo”, visando a montagem do pedido de forma simples e de modo a evitar possíveis erros. O diagrama foi feito no software Umbrello e possui a seguinte definição de agentes:

* **Atores →** Cliente;

* **Objetos →** Terminal de Autoatendimento, Sistema de Pedidos e Cozinha.

![image](https://github.com/user-attachments/assets/0b96b9a3-ca42-4303-86d9-1bd0c8359e1d)

#### 2.1.2 Diagrama  HU6 (Organização/eficiência)
* **Atores →** Balconista e cliente;

* **Objetos →** SistemasDePedidos, ComandaDigital e Cozinha;

* **“Função”/Mensagem →** fazerPedido(), enviarDadosDoPedido(), organizarPedidosPorOrdem, enviarPedidoParaPreparo(), confirmarRecebimento() e atualizarStatusPedido().

![image](https://github.com/user-attachments/assets/1753bcc3-4e33-49fd-817e-5562ceb44fa2)

### 2.2 Entrevista
Diagrama de sequência inspirado na “HU - Menu de Categorias Intuitivo”, visando descrever as ações que devem ser realizadas sequencialmente para que não apareçam para o usuário produtos indisponíveis no estoque. O diagrama foi feito no software StarUML, com a seguinte definição de agentes:

* **Atores →** Usuário, Sistema de Comanda Digital;

* **Objetos →** Cardápio, Estoque.

![image](https://github.com/user-attachments/assets/b2103463-45dc-4022-80bd-77d15d569aaf)


## 3 EMBASAMENTO NA PESQUISA ANTERIOR
### 3.1 Pesquisas
* **Sobre HU1 (pedido intuitivo):** 
	* “Clear visualization methods within self-service systems significantly reduce ordering mistakes and enhance user satisfaction metrics.” (ScienceDirect, 2024)
   
* **Sobre HU2 (agilidade no atendimento):** 
	* “Bojangles to roll out digital kiosks in 800+ stores to cut wait times and boost accuracy.” (The Sun, 2024)
   
* **Sobre HU3 (acessibilidade e inclusão):** 
	* “Wendy’s introduces AI-powered multilingual drive-thru service.” (AllRecipes, 2025)
   
* **Sobre HU4 (praticidade):** 
	* “This is a design philosophy that prioritises the human experience in the development of technology, with a focus on enhancing human well-being and capabilities rather than simply increasing technological functionality” (Siemon & Wolff, 2024, p.178).
   
* **Sobre HU5 (humanização/experiência intuitiva):**
	* “Technology becomes more than a tool, but a natural extension of human activity that resonates deeply with individual and communal needs” (Norman & Stappers, 2015).
   
* **Sobre HU6 (organização/eficiência):**
	* “A transformação do modelo convencional para o adaptável coloca a gestão de dados, derivada da tecnologia atual, como essencial para a rapidez e constância na tomada de decisão” (Dutra, 2022).

### 3.2 Entrevista
* **Sobre HU1 (tela inicial atrativa):** 
	* Como mencionado durante a entrevista, a atendente comentou que alguns clientes não conseguem identificar que o totem se trata de um sistema interativo e dinâmico. Por isso, alguns entram no estabelecimento e ignoram essa tecnologia, inutilizando a comanda digital. Como saída, a tela inicial pode ter um design mais atrativo, com itens em movimento para chamar a atenção do usuário.

* **Sobre HU2 (menu de categorias intuitivo):** 
	* De acordo com o que foi mencionado na entrevista, o menu de categorias está na lateral da comanda e alguns clientes não conseguem identificá-lo, prejudicando a experiência do usuário. Além disso, alguns produtos indisponíveis no estoque são mostrados e sugeridos de imediato, gerando frustração no cliente ao tentar comprar e perceber sua indisponibilidade.

* **Sobre HU3 (informações claras):** 
	* Com base no que foi dito durante a entrevista, os clientes costumam tirar dúvidas com a atendente sobre ingredientes específicos dos itens comercializados, principalmente no que tange às opções para pessoas com intolerância alimentar. Por isso, informações claras e maior detalhamento dos produtos podem auxiliar o fluxo do autoatendimento.

# VALIDAÇÃO DE REQUISITOS DO PROJETO
## 1 REVISÃO/INSPEÇÃO DE REQUISITOS
Ao analisar as HU’s anteriormente levantadas, podemos definir cinco critérios de aceitação para cada uma delas, a fim de encontrar possíveis problemas, ambiguidades ou falhas. 
### 1.1 Pesquisas
* **HU1 - Pedido Intuitivo**
	* O sistema apresenta perguntas passo a passo (ex: tipo de bebida → tamanho → adicionais);
	* O usuário consegue concluir o pedido em até 5 passos;
	* Não há duplicidade ou conflito de opções (ex: leite sem lactose + leite integral);
	* O usuário consegue voltar ao passo anterior do quiz sem perder as informações já selecionadas;
	* O sistema exibe uma mensagem de erro clara se o usuário tentar selecionar opções conflitantes.
   
* **HU2 - Agilidade no Atendimento**
	* O tempo médio de finalização do pedido deve ser inferior a 2 minutos;
	* O sistema deve confirmar o pedido com número de protocolo ou senha;
	* O pedido deve ser enviado automaticamente à cozinha;
	* A confirmação do pedido (protocolo/senha) é exibida em um formato grande e legível para fácil visualização;
	* O sistema fornece um feedback visual ou sonoro quando o pedido é enviado com sucesso à cozinha.
   
* **HU3 - Acessibilidade e Inclusão**
	* O sistema oferece pelo menos 2 idiomas além do português;
	* Os elementos visuais seguem boas práticas de contraste e legibilidade;
	* O sistema é navegável apenas pelo toque, sem necessidade de teclado físico;
	* A mudança de idioma é acessível e pode ser feita a qualquer momento do fluxo do pedido;
	* A interface permite o uso de leitores de tela ou tecnologias assistivas.
   
* **HU4 - Praticidade**
	* Pedido concluído em até 2 minutos;
	* Confirmação imediata após envio;
	* Exibição em tempo real para o atendente;
	* Compatível com celular e tablet;
	* Resumo do pedido antes de confirmar.
   
* **HU5 - Humanização/experiência intuitiva)**
	* O pedido pode ser feito sentado;
	* Interface fornece feedback visual/sonoro após ações;
	* O sistema de comanda digital notifica para o cliente quando o pedido estiver pronto;
	* O pedido é passado/transmitido ,imediatamente, para a cozinha para começar a fazer;
	* Interface consistente em diferentes dispositivos.
   
* **HU6 - Organização/eficiência**
	* Pedidos automaticamente são organizados por ordem de chegada;
 	* Balconista consegue visualizar os status dos pedidos solicitados;
	* Sistema permite filtrar os pedidos por status (ex: em preparo, pronto, entregue);
	* Atualização em tempo real para balcão e cliente (quando qualquer pedido é feito, tem atualização no sistema em tempo real, por isso vale para o cliente que pediu e para o balconista que está visualizando).
	* Relatórios de pedidos concluídos no fim do dia (O que pode ser feito uma estatística sobre qual foi o item mais pedido por exemplo).

### 1.2 Entrevistas
* **HU1 - Tela Inicial Atrativa**
	* Existe um botão chamativo na tela inicial que instigue o cliente a clicar e iniciar o autoatendimento;
	* Os elementos da tela inicial são animados, ou seja, se movem para indicar que se trata de um software dinâmico;
	* Existe uma frase de interação na tela inicial, como “O que você deseja comer hoje?” ou “Que tal escolher o seu próximo café?”;
	* As sugestões dos produtos mais vendidos podem aparecer logo na tela inicial, instigando o usuário a ver mais itens;
	* Pode haver um ícone de uma mãozinha na tela inicial sinalizando o movimento que o usuário deve realizar para iniciar o autoatendimento.

* **HU2 - Menu de Categorias Intuitivo**
	* A segunda tela do sistema consiste no menu com todas as categorias de produtos disponíveis. Assim, o usuário inicia o autoatendimento filtrando a categoria que mais lhe agrada;
	* Existe um ícone de menu no canto superior da tela durante todo o autoatendimento. Assim, o usuário consegue identificar onde fica o menu de categorias e pode acessá-lo sempre que for necessário;
	* A seção de sugestões está separada dos itens exibidos em cada categoria do menu, a fim de que os clientes não confundam as duas coisas;
	* Exibir apenas produtos que estejam disponíveis no estabelecimento. Para tanto, fazer uma verificação em tempo real do estoque da loja antes de exibir o produto para o usuário;
	* Usar elementos chamativos para destacar as categorias de produtos, como ícones ou fontes características.

* **HU3 - Informações Claras**
	* Ao clicar no produto desejado, deve aparecer uma lista de ingredientes detalhada de cada produto no cardápio;
	* Deve haver um selo na lateral de cada produto indicando se ele é “sem glúten”, “sem lactose”, etc;
	* Dentre as categorias dos produtos, pode haver uma destinada para alimentos para pessoas com restrições alimentares;
	* Assim que o usuário acessar a comanda, pode haver uma pequena pergunta para saber se ele tem restrição alimentar. Se tiver, o cardápio irá mostrar primeiro as opções para intolerantes;
	* A fim de tornar a comanda mais descritiva, pode haver uma opção de descrição audiovisual para pessoas idosas ou com algum tipo de deficiência.

## 2 PROTÓTIPO DE MÉDIA FIDELIDADE
## 2.1 Fluxo de Telas

<img width="500" alt="fluxo_telas_v1" src="https://github.com/user-attachments/assets/23abed59-4b81-4ee8-af92-a5aaab00eee2" />

<img width="500" alt="fluxo_telas_v1_1" src="https://github.com/user-attachments/assets/299f1d54-bcfb-47ed-b493-149a13b822b5" />

<img width="500" alt="fluxo_telas_v1_2" src="https://github.com/user-attachments/assets/cfc9b0bf-2517-4fb7-8050-3aed3363bae3" />

<img width="500" alt="fluxo_telas_v1_3" src="https://github.com/user-attachments/assets/066b4e8b-2553-4486-ab45-1c63b72c2e70" />

<img width="500" alt="fluxo_telas_v1_4" src="https://github.com/user-attachments/assets/9cd259fb-1b16-41fa-843b-7b8ba4a52b40" />

<img width="500" alt="fluxo_telas_v1_5" src="https://github.com/user-attachments/assets/bcf73a8f-71ae-4917-a37e-18563c46b53f" />

<img width="500" alt="fluxo_telas_v1_6" src="https://github.com/user-attachments/assets/6a5538d0-c9f7-4a9e-a220-e4796e58149c" />

<img width="500" alt="fluxo_telas_v1_7" src="https://github.com/user-attachments/assets/8be57b93-3eb3-4201-b2cf-b7a918467318" />

<img width="500" alt="fluxo_telas_v1_8" src="https://github.com/user-attachments/assets/7c4bed63-0cb9-42da-976e-7f7c0be10bac" />

<img width="500" alt="fluxo_telas_v1_9" src="https://github.com/user-attachments/assets/34f08599-1d55-4d7e-a97c-2868ed4035d5" />

<img width="500" alt="fluxo_telas_v1_10" src="https://github.com/user-attachments/assets/5ffda358-05c0-46fc-8866-f1bb37a5c901" />

<img width="500" alt="fluxo_telas_v1_11" src="https://github.com/user-attachments/assets/eba93fd9-b75b-49fa-b758-eef0fd1171cd" />



## 2.2 Como os artefatos atendem aos requisitos
### 2.2.1 Pesquisas
* **HU1 – Cliente realiza pedido pelo quiz interativo**
	* A navegação em formato de quiz demonstra a aplicação prática da HU1, garantindo clareza e orientação passo a passo para o usuário. Ao longo da navegação, as perguntas são apresentadas de maneira sequencial e, para confirmar o pedido, o usuário passa por cinco passos principais: seleção, tamanho, quantidade, extras e confirmação. Os tipos de itens são especificados na etapa de seleção, assim cada item é previamente categorizado a fim de evitar conflito de opções. Além disso, em todas as etapas da montagem do pedido, é exibido um botão do canto superior esquerdo da tela que permite ao usuário voltar à etapa anterior. 

* **HU2 - Cliente faz pedido com o máximo de agilidade e clareza**
	* Com base nas perguntas rápidas, organizadas em cinco etapas principais, o tempo médio de finalização do pedido é de aproximadamente 2 minutos ou menos (variando conforme o nível de decisão do usuário em relação ao que deseja pedir). Após a confirmação, é exibida uma tela com a mensagem “Pedido confirmado!”, acompanhada de um bloco contendo o número do pedido (protocolo) em fonte grande e legível. Nessa mesma tela, também são apresentadas informações sobre o tempo estimado de espera. Embora isso não possa ser percebido na imagem estática da última tela, pode ser implementado um retorno sonoro como complemento para sinalizar a confirmação.
   
* **HU3 - Cliente tem acessibilidade durante todo o processo**
	* Tanto a tela inicial quanto às demais telas de seleção, possuem um alta legibilidade, alcançado pela junção do fundo branco, botões grandes e preenchidos, com fontes igualmente grandes e legíveis. Na tela inicial, o usuário tem a opção de navegar em outros dois idiomas além do português, sendo estes o inglês e espanhol, dispostos pelos ícones das bandeiras do respectivo país na parte inferior da tela. Apesar de só mostrado na tela inicial, a ideia é que essa mudança seja possível em todas as etapas do pedido. Além disso, todo o sistema é projetado para funcionar em totem/quiosques, que são aparelhos navegáveis pelo toque. Por fim, leitores de tela podem ser implementados como opções adicionais junto aos ícones de idioma, e também estariam disponíveis durante todo o período de navegação.
   
* **HU4 - Tela inicial intuitiva/Menu dos pedidos/Carrinho e resumo do pedido/Tela de confirmação.**
	* A história de usuário utilizada para o desenvolvimento do fluxo foi a quarta, na qual o cliente, utilizando o próprio celular ou um tablet disponibilizado pelo estabelecimento como comanda digital, tem a possibilidade de iniciar o seu pedido de forma mais prática e autônoma.  Os artefatos construídos demonstram esse processo a partir de uma tela inicial intuitiva, que direciona o cliente de maneira clara para o início da solicitação, seguida por um menu de pedidos bem estruturado que apresenta os pratos de forma organizada e permite a adição imediata ao carrinho. Neste processo, o cliente pode escolher o prato desejado para o almoço, visualizar em tempo real todos os itens adicionados ao pedido, ter a oportunidade de revisá-los com calma, realizar alterações caso seja necessário e até mesmo cancelar antes da finalização, garantindo maior flexibilidade e controle com base na experiência.
Ao concluir o pedido, o sistema gera automaticamente a previsão do tempo estimado para o preparo do prato e apresenta uma tela de acompanhamento em que o consumidor pode verificar o andamento da produção. Essa funcionalidade proporciona maior transparência e tranquilidade, pois o consumidor/cliente sabe exatamente o que esperar em relação ao prazo de entrega e consegue se planejar melhor durante a sua refeição.
Esta abordagem está totalmente alinhada com os critérios de aceitação definidos, uma vez que o processo de solicitação é rápido, intuitivo e imediato, evitando filas, esperas desnecessárias ou a necessidade de intervenção de atendentes. Além disso, o pedido confirmado passa a integrar o sistema de maneira instantânea, garantindo integração entre cliente e cozinha de forma eficiente e confiável.
Outro ponto relevante é a compatibilidade multiplataforma,na qual a solução foi pensada para rodar tanto em celulares quanto em tablets disponíveis no estabelecimento, oferecendo versatilidade e facilidade de uso. Dessa forma, promove-se uma experiência moderna e digitalizada para o cliente, além de otimizar o fluxo interno da cafeteria, já que os pedidos chegam organizados e estruturados, reduzindo erros de comunicação e aumentando a agilidade do serviço.
Portanto, a implementação dessa história de usuário, representada pelas telas desenvolvidas, demonstra não apenas o cumprimento dos requisitos técnicos e funcionais propostos, mas também o valor agregado à jornada do cliente que passa a ser mais fluida, interativa e satisfatória, ao mesmo tempo em que fortalece a eficiência operacional do estabelecimento

### 2.2.2 Entrevista
* **HU1 - Tela Inicial Atrativa**
	* Conforme a primeira imagem do fluxo de telas pautado na entrevista, a tela inicial projetada apresenta um ícone grande de uma mãozinha, sinalizando que o usuário pode interagir diretamente com ela. Evidentemente, a versão final terá animações reais que geram esse efeito de maneira fidedigna. Além disso, também há uma frase de interação direta com o usuário, incentivando-o a iniciar o seu autoatendimento. Por hora, as sugestões de produtos não foram colocadas na tela inicial para evitar poluição visual, mas isso pode ser alterado futuramente em versões mais sofisticadas.

* **HU2 - Menu de Categorias Intuitivo**
	* Além da tela inicial, a segunda partição da primeira imagem do fluxo de telas apresenta o menu principal, onde o usuário pode transitar pelas categorias de produtos disponíveis no estabelecimento. Como a tela inteira é destinada apenas para as categorias de produtos, o usuário não irá se confundir com nenhuma outra funcionalidade do sistema. Além disso, as sugestões de produtos foram colocadas de maneira intuitiva e clara, a fim de que o cliente possa entender do que se trata. Vale destacar que o menu de categorias é exibido assim que o usuário inicia o autoatendimento, facilitando e filtrando a escolha do seu pedido. Ele também pode retornar a esse menu em qualquer etapa do atendimento, visto que há um ícone de “voltar” no canto superior da tela.

* **HU3 - Informações Claras**
	* A segunda figura do fluxo de telas mostra o cardápio de uma das categorias disponíveis e a exibição de um produto específico. No primeiro caso, existem selos ao lado das imagens dos produtos, indicando se o produto está entre os mais vendidos ou possui opção para pessoas com algum tipo de intolerância. Quando o usuário seleciona o produto, aparece uma janela flutuante com uma descrição detalhada dos ingredientes do item selecionado. Por hora, não foi criada uma categoria exclusiva para alimentos com opções para intolerantes, pois a lista de opções do produto e o selo já atendem a essa especificação. Contudo, isso pode ser otimizado em versões futuras da comanda digital. Além disso, um ícone de microfone pode ser adicionado em todas telas da comanda para sinalizar descrição audiovisual, conforme pontuado nos critérios de aceitação da terceira história de usuário.

# ITERAÇÃO NA ENGENHARIA DE REQUISITOS
## 1 PROCESSO DE GERENCIAMENTO
Quando surge a necessidade de adicionar uma nova funcionalidade ou promover uma melhoria no sistema, o primeiro passo é especificar claramente a mudança, definindo o que será incluído, ou alterado e, a partir disto, criar uma nova história de usuário com critérios de aceitação objetivos, que permitam validar se a alteração atende ao propósito desejado. Em seguida, deve-se realizar uma análise de impacto, avaliando como a mudança poderá afetar o funcionamento geral do sistema, incluindo possíveis riscos de falhas, necessidade de refatoração, interrupção do serviço, aumento de custos ou atrasos no cronograma.
Essa análise deve considerar não apenas a operação direta da nova funcionalidade, mas também como ela interage com fluxos existentes, garantindo que a experiência do usuário e a integridade do sistema não sejam comprometidas. Com base nessa avaliação, decide-se se a mudança é viável e segura para implementação. 
Caso seja aprovada, os requisitos existentes devem ser revisados e ajustados para incorporar a alteração de forma coerente, assegurando que o sistema continue funcionando corretamente e de maneira eficiente. Finalmente, a implementação deve ocorrer de forma controlada, acompanhada de testes e validações, de modo a minimizar impactos negativos, preservar a estabilidade do sistema e garantir que a nova funcionalidade traga benefícios claros para os usuários.

## 2 RASTREABILIDADE
Durante o levantamento de requisitos, o projeto contemplou múltiplas formas para identificar características e especificações necessárias em uma comanda digital. Assim, uma maneira viável de rastrear mudanças nos requisitos do projeto consiste em acompanhar pesquisas, reportagens e a dinâmica do mercado para entender as novas demandas que surgem e impactam o uso da comanda digital. Além disso, quando o sistema for implementado na prática ou testado por um usuário, pode-se coletar feedbacks que evidenciam a experiência do usuário e apontam possíveis melhorias a serem realizadas. Para tanto, a comanda digital pode ter uma seção de “Reportar problema”, onde o usuário pode descrever bugs ou solicitar novas funcionalidades. Ademais, a comanda digital pode solicitar uma avaliação do usuário ao fim de cada atendimento, onde ele pode avaliar o sistema em uma escala de 1 a 5 e deixar um comentário opcional sobre sua experiência durante o autoatendimento. À medida que esses dados forem coletados, eles podem ser analisados e julgados como pertinentes ou não.

## 3 FERRAMENTAS
As mudanças registradas e implementadas nos requisitos da comanda podem ser documentadas no repositório do github do projeto, onde existe o versionamento completo da comanda, desde os seus requisitos iniciais até a versão mais recente. Além disso, caso seja implementada a funcionalidade “Reportar problema” na comanda ou a avaliação rápida ao fim de cada atendimento, os dados coletados podem ser registrados em um banco de dados, onde serão armazenadas possíveis mudanças solicitadas para o projeto.

# GESTÃO DE QUALIDADE
O gerenciamento da qualidade tem como objetivo definir os processos, os papéis, os padrões e as métricas realizadas pela equipe para conseguir garantir a qualidade do Software, durante toda a etapa de desenvolvimento. O sistema de comanda digital humanizada desenvolvido segue o padrão de arquitetura MVC e boas práticas de Engenharia de Software, buscando sempre assegurar a manutenção, o desempenho, a segurança e a usabilidade do mesmo. Com isto, para garantir que o sistema seja mantido, monitorado, avaliado e otimizado serão adotadas práticas contínuas de gestão de qualidade,

## 1.1 PAPÉIS E RESPONSABILIDADES
* João Pedro: responsável por documentar Visão e Modelo no MVC, pelo back-end e pela implementação do padrão de projeto Decorator;
* Kauane: responsável por documentar Controlador no MVC, pelo back-end e pela implementação do padrão de projeto Template Method;
* Estefane: responsável pelo front-end, pelo back-end e pela implementação do padrão de projeto Factory Method.
## 1.2 FERRAMENTAS E PADRÕES DE DOCUMENTAÇÃO
* Ferramentas e padrões de documentação
* Controle de versionamento pelo github; 
* Gerenciamento de tarefas/atividades foi feito pelo Trello;
* Documentação no README do git;
* Comunicação: Discord e reuniões semanais.
## 1.3 PADRÕES DE CÓDIGO
* O uso da linguagem de programação JavaScript, porque o sistema é implementado utilizando CSS e HTML, com isto a linguagem utilizada se encaixa perfeitamente no contexto de um WebSite da comanda digital;
* Implementação dos padrões de projeto Factory Method, Template Method e Decorator para assim assegurar flexibilidade e reuso do código, sendo assim fácil de manutenibilidade;
* Utilização do padrão de arquitetura Model-View-Controller (MVC).
## 1.4 PADRÕES NÃO FUNCIONAIS
* Usabilidade: Interface intuitiva, com botões de fácil acesso, com feedback visual;
* Acessibilidade: Cores contrastantes, ícones representativos (como por exemplo a imagem de click sinalizando posição para iniciar o pedido), alternância de idiomas podendo variar entre Português Brasileiro, Inglês e Espanhol.
* Manutenibilidade: código modular e documentado, sendo assim seguindo os padrões de projeto e de arquitetura.
* Desempenho: O sistema funciona rapidamente, com um tempo de resposta abaixo de um segundo ao selecionar, avançar, confirmar ou exibir os dados na tela.
## 1.5 PROCESSOS DE QUALIDADE
1. Planejamento: As principais tarefas são definidas no Trello com responsáveis da tarefa em específico e prazos. Sendo revisado o progresso semanalmente pelo grupo. 
2. Testes: São realizados testes unitários em funções e métodos, testes de integração entre os módulos separados seguindo o padrão MVC e testes de usabilidade simulando o sistema de comanda digital.
3. Documentação: Foi utilizado o README do Github e o Google Docs para organização e atualização dos documentos, registrando decisões técnicas, mudanças significativas e melhorias. 
4. Feedback: O grupo realiza reuniões quinzenais para avaliar o desempenho do sistema, a usabilidade e a integridade.
## 1.6 GERENCIAMENTO DE PROCESSOS
Desta forma, quando houver de adicionar novas funcionalidades ou realizar melhorias, a equipe especificará mudanças claras, seguida de uma análise de impacto, avaliando os riscos, custo e viabilidade.
	Sendo assim, as modificações aprovadas serão implementadas de forma controlada e documentada, com testes e validações para assegurar a estabilidade do sistema e a manutenção da experiência do usuário.
	Essas ações têm como objetivo preservar o desempenho, a segurança e a coerência estrutural do sistema, promovendo uma melhoria contínua alinhada às necessidades dos usuários e às boas práticas de Engenharia de Software.
# PADRÃO DE ARQUITETURA 
O padrão MVC (Model–View–Controller) foi escolhido para o sistema de comanda digital humanizada por oferecer uma separação clara entre interface, lógica e controle, tornando o código mais organizado, modular e fácil de manter. Essa estrutura permite atualizar a interface sem alterar as regras de negócio, favorece o trabalho em equipe e facilita a adição de novas funcionalidades. Além disso, o MVC integra-se bem com os padrões Factory Method, Template Method e Decorator, garantindo baixo acoplamento, alta coesão e maior escalabilidade do sistema, resultando em uma experiência de uso mais fluida e humanizada.
## 1.1. PADRÃO DE ARQUITETURA VISÃO DO MVC
A visão é uma das três camadas fundamentais do padrão de arquitetural Model-View-Controller (MVC) sendo o mesmo responsável por exibir para o usuário dados do sistema e capturar a interação entre eles. Diante disso, essa camada atua como uma interface entre o usuário e as aplicações internas do sistema, onde basicamente ela traduz os dados processados pela camada Modelo em elementos intuitivos e compreensíveis para exibição.
Com isto, a visão não corresponde à parte lógica e nem manipula diretamente os  dados. Sua real função é exibir o estado atual dos dados no Modelo e reagir visualmente com as atualizações que no Modelo ocorrem, ou seja, atualizar quando os dados forem alterados. Desta forma, quando o usuário interage com a interface - por exemplo quando selecionar alguma opção ou confirmar uma ação - a Visão vai ter o papel de solicitar a ação para o Controlador, que por sua vez as interpreta e, se necessário, solicita as mudanças no Modelo. Com as modificações no modelo, a visão vai ser responsável por renderizar os dados atualizados, garantindo que o usuário tenha a representação mais recente do sistema.
No contexto do sistema de comanda digital humanizada, a parte da visão se torna fundamental para a boa experiência do usuário, pois ela representa as telas de interação que possibilitam ao usuário visualizar o cardápio, selecionar itens, confirmar pedidos e alternar entre idiomas. Seu papel é garantir uma comunicação intuitiva, clara e acessível entre o usuário e as funcionalidades internas que compõem a tecnologia, mantendo assim a separação entre a lógica dos dados e a camada de apresentação - que é a base do MVC.
## 1.2. PADRÃO DE ARQUITETURA - MODELO DO MVC
A camada de Modelo, na arquitetura MVC, é responsável por encapsular o estado e as regras de negócio da aplicação, garantindo que toda a lógica referente ao funcionamento interno seja inerente à interface visual. Desta forma, no caso da comanda digital humanizada, o Modelo foi projetado para representar e gerenciar os estados dos dados essenciais do sistema, como listas de produtos disponíveis, os pedidos realizados pelo usuário, o valor total da comanda e o status de cada solicitação. 
	Sendo assim, o Modelo tem como função atuar na base lógica das execuções realizadas pelo usuário, mantendo a integridade das informações para que todas as ações sigam as regras definidas para o funcionamento correto do sistema. Com isso, é o mesmo que realiza armazenamento, atualização e fornecimento de dados, recebendo instruções, diretamente, do Controlador - como adicionar um item, remover um produto ou confirmar um produto - processando assim, essas solicitações conforme a lógica que estiver implementada.
	Diante disto, o Modelo também tem o papel de notificar a camada de Visão sempre que ocorrer uma mudança do estado de um dado, permitindo que a interface seja atualizada de forma coerente e estável com os dados atuais. Este tipo de comunicação entre os dois é extremamente importante, pois garante a sincronização entre o que o usuário vê e o que realmente está armazenado no sistema.
	Consoante a isto, manter esta separação entre a lógica e apresentação torna o sistema mais organizado, modulado e facíl de manutenção, além de possibilitar futuras expansões, como a integração com banco de dados ou serviços externos. Consequentemente, assegura que a comanda digital humanizada funcione de forma consistente e confiável, mantendo a coerência entre os dados internos e o que é exibido ao usuário.
## 1.3. PADRÃO DE ARQUITETURA - CONTROLADOR DO MVC
O Controle é o cerne do sistema da comanda digital, atuando como o mediador central que gerencia o fluxo de controle e o estado da aplicação. Sua responsabilidade primordial é desacoplar a interface do usuário (View) da lógica de negócio e dos dados (Model), garantindo que o sistema seja organizado, manutenível e escalável.
Ele opera em um ciclo contínuo de escuta, interpretação e despacho, recebendo todas as interações do usuário provenientes da interface, como toques em botões, seleção de categorias ou respostas ao quiz. A partir dessas ações, o Controle interpreta os eventos e os traduz em chamadas de funções lógicas. Por exemplo, um toque no botão “Finalizar Pedido” é convertido em uma chamada ao Model, como Model.exibirResumoPedido().
Além disso, o Controle é o responsável por gerenciar o quiz e o fluxo de telas, determinando qual será exibida em cada etapa. Durante o processo interativo, ele conduz o usuário passo a passo — da seleção às opções, tamanho, quantidade e extras — garantindo também a possibilidade de retorno a etapas anteriores, quando necessário.
Na integração com o Model, o Controle desempenha funções essenciais. Ele aciona a lógica de negócio, por exemplo, ao chamar Model.consultarEstoque() antes de exibir um produto, cumprindo o requisito de evitar que o cliente visualize itens indisponíveis. Após a execução das operações, o Controle instrui o Model a atualizar seus dados, mantendo o estado do sistema coerente.
Com os dados processados, o Controle seleciona a View apropriada para apresentar as informações ao usuário. Quando o pedido é confirmado pelo Model, o Controle carrega a tela de confirmação e insere nela detalhes como o número do protocolo e o tempo estimado de espera.
Dessa forma, o Controle assegura que a experiência do usuário seja fluida e intuitiva, mantendo a integridade dos dados e a eficiência operacional, ao garantir que o Model organize e envie os pedidos corretamente para a cozinha. Segue abaixo, o diagrama do padrão de arquitetura utilizado no sistema:

<img width="721" height="437" alt="Captura de tela 2025-10-28 110148" src="https://github.com/user-attachments/assets/dd3de3e6-84d9-4a49-be68-d88ded7789a0" />

# PADRÃO DE PROJETO
Os padrões de projeto selecionados pela equipe foram Decorator feito pelo João Pedro, Template Method feito pela Kauane e o Factory Method feito pela Estefane. O uso desses padrões teve como objetivo garantir uma arquitetura mais flexível, modular e de fácil manutenibilidade, além de proporcionar melhor organização de código favorecendo a reutilização de componentes.
## 1.1 DECORATOR

<img width="389" height="478" alt="image" src="https://github.com/user-attachments/assets/0b633937-7c88-4f4e-bce4-7ed1e1b63147" />

O padrão decorator permite a adição dinâmica de novas características aos itens do pedido, sem modificar sua original. As classes Opcao1, Opcao2 e Opcao3 decoram os objetos Item, acrescentando informações como opcionais, complementos ou ajustes no preço. Essa abordagem oferece flexibilidade ao sistema, permitindo que o cliente personalize seu pedido de maneira humanizada e modular, sem necessidade de criar diversas subclasses para cada combinação possível.
## 1.2 TEMPLATE METHOD

<img width="529" height="329" alt="image" src="https://github.com/user-attachments/assets/38fcd557-f611-4be3-84c7-47a5a4e9c417" />


O padrão Template Method foi utilizado para estruturar o fluxo de operações que estão envolvidas na adição de itens à comanda.  Essa estrutura é implementada na classe abstrata ProcessadorAdicaoItem, e suas subclasses (ProcessadorAdicaoCardapio e ProcessadorAdicaoSugestao) adaptam o comportamento de acordo com o contexto. Isso permite que o sistema siga sempre uma sequência consistente de operações, e ao mesmo tempo em que permite variações específicas conforme a origem e a necessidade do item.
## 1.3 FACTORY METHOD

<img width="418" height="435" alt="image" src="https://github.com/user-attachments/assets/ee8e1d37-739f-4fa0-9e77-829d52514e04" />

O padrão Factory Method foi utilizado para padronizar e centralizar a criação dos objetos Pedido e Item, garantindo maior organização e baixo acoplamento no sistema. Através das classes FabricaPedidos e FabricaItens, o sistema gera automaticamente novos pedidos e itens, evitando a necessidade de instanciar diretamente estas classes. Com isto, a comanda digital se torna mais flexível e fácil de manter, permitindo que futuras alterações no processo de criação sejam feitas sem impactar o restante do código.

[link_video_slide.pdf](https://github.com/user-attachments/files/23190160/link_video_slide.pdf)
