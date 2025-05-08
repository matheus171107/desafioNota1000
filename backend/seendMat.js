const admin = require("firebase-admin");
const serviceAccount = require("./firebase-key.json"); // certifique-se que está correto

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const perguntas =[
  {
    enunciado: "O quadro representa os gastos mensais, em real de uma família com internet, mensalidade escolar e mesada do filho. No início do ano, a internet e a mensalidade escolar tiveram acréscimos, respectivamente, de 20% e 10%. Necessitando manter o valor da despesa mensal total com os itens citados, a família reduzirá a mesada do filho. Qual será a porcentagem da redução da mesada?",
    pergunta: "Qual será a porcentagem da redução da mesada?",
    opcoes: [
      "A) 15,0",
      "B) 23,5",
      "C) 30,0",
      "D) 70,0",
      "E) 76,5"
    ],
    correta: "B) 23,5",
    explicacao: "O novo preço da internet é \n 120.1,2 = 144\n Enquanto a mensalidade é\n 700.1,1 = 770\n Seja x a nova mesada do filho\n 144 + 770 + x = 120 + 700 + 400\n x = 306\n Reduziu em 94 reais\n 94/400 = 0,235 = 23,5 %",
    url: "https://xequematenem.com.br/blog/wp-content/webp-express/webp-images/uploads/2023/07/O-quadro-representa-os-gastos-mensais-em-real-de-uma-familia-com-internet-mensalidade-escolar-e-mesada-do-filho.png.webp",
    categoria: "MATEMÁTICA"
  },
  {
    enunciado: "Contratos de vários serviços disponíveis na internet apresentam uma quantidade excessiva de informações. Isso faz com que o tempo necessário para a leitura desses contratos possa ser longo. O quadro apresenta uma amostra do tempo considerado necessário para a leitura completa do contrato de alguns serviços digitais. O tempo médio, em minuto, necessário para a leitura completa de um contrato de serviço dentre os listados no quadro é, com uma casa decimal, aproximadamente",
    pergunta: "O tempo médio, em minuto, necessário para a leitura completa de um contrato de serviço dentre os listados no quadro é, com uma casa decimal, aproximadamente",
    opcoes: [
      "a) 13,0.",
      "b) 15,0.",
      "c) 19,8.",
      "d) 20,0.",
      "e) 23,3."
    ],
    correta: "c) 19,8.",
    explicacao: "",
    url: "https://xequematenem.com.br/blog/wp-content/webp-express/webp-images/uploads/2024/11/Contratos-de-varios-servicos.png.webp",
    categoria: "MATEMÁTICA"
  },
  {
    enunciado: "A umidade relativa do ar é um dos indicadores utilizados na meteorologia para fazer previsões sobre o clima. O quadro apresenta as médias mensais, em porcentagem, da umidade relativa do ar em um período de seis meses consecutivos em uma cidade. Nessa cidade, a mediana desses dados, em porcentagem, da umidade relativa do ar no período considerado foi",
    pergunta: "Nessa cidade, a mediana desses dados, em porcentagem, da umidade relativa do ar no período considerado foi",
    opcoes: [
      "a) 56",
      "b) 58",
      "c) 59",
      "d) 60",
      "e) 62"
    ],
    correta: "e) 62",
    explicacao: "A mediana é o valor central de um conjunto de dados organizados em ordem crescente ou decrescente. Para um número par de dados, a mediana é a média aritmética dos dois valores centrais.",
    url: "https://xequematenem.com.br/blog/wp-content/webp-express/webp-images/uploads/2024/11/A-umidade-relativa-do-ar.png.webp",
    categoria: "MATEMÁTICA"
  },
  {
    enunciado: "A foto mostra a construção de uma cisterna destinada ao armazenamento de água. Uma cisterna como essa, na forma de cilindro circular reto com 3 m2 de área da base, foi abastecida por um curso-d'água com vazão constante. O seu proprietário registrou a altura do nível da água no interior da cisterna durante o abastecimento em diferentes momentos de um mesmo dia, conforme o quadro. Qual foi a vazão, em metro cúbico por hora, do curso-d'água que abastece a cisterna?",
    pergunta: "Qual foi a vazão, em metro cúbico por hora, do curso-d'água que abastece a cisterna?",
    opcoes: [
      "a) 0,3",
      "b) 0,5",
      "c) 0,9",
      "d) 1,8",
      "e) 2,7"
    ],
    correta: "c) 0,9",
    explicacao: "Em uma variação de 2 horas, o nível da água aumentou 1,1 – 0,5 = 0,6 m. Como a área da base do cilindro é igual a 3 m2, o volume de água (em forma de cilindro) é igual a 3*0,6=1,8 m3 em duas horas. Ou seja, a vazão é de 0,9 m3 por hora.",
    url: "https://xequematenem.com.br/blog/wp-content/webp-express/webp-images/uploads/2023/11/Imagem-PNG-33.png.webp",
    categoria: "MATEMÁTICA"
  },
  {
    enunciado: "Para concretar a laje de sua residência, uma pessoa contratou uma construtora. Tal empresa informa que o preço y do concreto bombeado é composto de duas partes: uma fixa, chamada de taxa de bombeamento, e outra variável, que depende do volume x de concreto utilizado. Sabe-se que a taxa de bombeamento custa R$ 500,00 e que o metro cúbico do concreto bombeado é de R$ 250,00. A expressão que representa o preço y em função do volume x, em metro cúbico, é",
    pergunta: "A expressão que representa o preço y em função do volume x, em metro cúbico, é",
    opcoes: [
      "a) y = 250x",
      "b) y = 500x",
      "c) y = 750x",
      "d) y = 250x + 500",
      "e) y = 500x + 250"
    ],
    correta: "d) y = 250x + 500",
    explicacao: "O preço y está em função do volume x de concreto, em metros cúbicos. Sabendo que existe uma taxa fixa de bombeamento que custa R$ 500,00 e que o m3 de concreto custa R$ 250,00, podemos escrever a função da seguinte forma: y = 250x + 500",
    categoria: "MATEMÁTICA"
  },
  {
    enunciado: "A Pesquisa Nacional por Amostra de Domicílios (Pnad) é uma pesquisa feita anualmente pelo IBGE, exceto nos anos em que há Censo. Em um ano, foram entrevistados 363 mil jovens para fazer um levantamento sobre suas atividades profissionais e/ou acadêmicas. Os resultados da pesquisa estão indicados no gráfico. Jovens em atividade entre 15 e 29 anos (%). De acordo com as informações dadas, o número de jovens entrevistados que trabalha é:",
    pergunta: "De acordo com as informações dadas, o número de jovens entrevistados que trabalha é:",
    opcoes: [
      "a) 114 708.",
      "b) 164 076.",
      "c) 213 444.",
      "d) 284 592.",
      "e) 291 582."
    ],
    correta: "c) 213 444.",
    explicacao: "Pela pesquisa, o total percentual de pessoas que trabalham é de 13,6 + 45,2 = 58,8%. Assim, temos um total de 363.000 ∙ 58,8% = 363.000 ∙ 0,588 = 213.444 pessoas.",
    url: "https://sisq.elitecampinas.com.br/Content/Data/imagens/3B74885AB96F02F951BE076404E2FCD4.png",
    categoria: "MATEMÁTICA"
  },
  {
    enunciado: "O quadro apresenta o número de terremotos de magnitude maior ou igual a 7, na escala Richter, ocorridos em nosso planeta nos anos de 2000 a 2011. Um pesquisador acredita que a mediana representa bem o número anual típico de terremotos em um período. Segundo esse pesquisador, o número anual típico de terremotos de magnitude maior ou igual a 7 é",
    pergunta: "Segundo esse pesquisador, o número anual típico de terremotos de magnitude maior ou igual a 7 é",
    opcoes: [
      "a) 11.",
      "b) 15.",
      "c) 15,5.",
      "d) 15,7.",
      "e) 17,5."
    ],
    correta: "c) 15,5.",
    explicacao: "Temos dados de um total de 12 anos, para fazer a mediana precisamos colocar os dados em ordem crescente e escolher o 6o e 7° termos para fazer a média entre eles. (15 + 16) / 2 = 15,5",
    url: "https://dye22q7xtvl2n.cloudfront.net/images/aio/enem_2_dia_2021_148_0.png",
    categoria: "MATEMÁTICA"
  },
  {
    enunciado: "Após consulta médica, um paciente deve seguir um tratamento composto por três medicamentos: X, Y e Z. O paciente, para adquirir os três medicamentos, faz um orçamento em três farmácias diferentes, conforme o quadro. Dessas farmácias, algumas oferecem descontos: na compra dos medicamentos X e Y na Farmácia 2, recebe-se um desconto de 20% em ambos os produtos, independentemente da compra do medicamento Z, e não há desconto para o medicamento Z; na compra dos 3 medicamentos na Farmácia 3, recebe-se 20% de desconto no valor total da compra. O paciente deseja efetuar a compra de modo a minimizar sua despesa com os medicamentos. De acordo com as informações fornecidas, o paciente deve comprar os medicamentos da seguinte forma:",
    pergunta: "De acordo com as informações fornecidas, o paciente deve comprar os medicamentos da seguinte forma:",
    opcoes: [
      "a) X, Y e Z na Farmácia 1.",
      "b) X e Y na Farmácia 1, e Z na Farmácia 3.",
      "c) X e Y na Farmácia 2, e Z na Farmácia 3.",
      "d) X na Farmácia 2, e Y e Z na Farmácia 3.",
      "e) X, Y e Z na Farmácia 3."
    ],
    correta: "a) X, Y e Z na Farmácia 1.",
    explicacao: "Analisando as alternativas, a compra dos três medicamentos na farmácia 1 resulta no menor preço total.",
    url: "https://xequematenem.com.br/blog/wp-content/webp-express/webp-images/uploads/2023/07/Apos-a-consulta-medica-um-paciente-deve-seguir-um-tratamento-composto-por-tres-medicamentos-X-Y-e-Z.png.webp",
    categoria: "MATEMÁTICA"
  },
  {
    enunciado: "Em uma fábrica de refrigerantes, é necessário que se faça periodicamente o controle no processo de engarrafamento para evitar que sejam envasadas garrafas fora da especificação do volume escrito no rótulo. Diariamente, durante 60 dias, foram anotadas as quantidades de garrafas fora dessas especificações. O resultado está apresentado no quadro. A média diária de garrafas fora das especificações no período considerado é:",
    pergunta: "A média diária de garrafas fora das especificações no período considerado é:",
    opcoes: [
      "a) 0,1.",
      "b) 0,2",
      "c) 1,5.",
      "d) 2,0.",
      "e) 3,0."
    ],
    correta: "b) 0,2",
    explicacao: "",
    url: "https://s4.static.brasilescola.uol.com.br/exercicios/2021/10quadro-quantidade-diaria-garrafas.jpg",
    categoria: "MATEMÁTICA"
  },
  {
    enunciado: "A bula de um antibiótico infantil, fabricado na forma de xarope, recomenda que sejam ministrados, diariamente, no máximo 500 mg desse medicamento para cada quilograma de massa do paciente. Um pediatra prescreveu a dosagem máxima desse antibiótico para ser ministrada diariamente a uma criança de 20 kg pelo período de 5 dias. Esse medicamento pode ser comprado em frascos de 10 mL, 50 mL, 100 mL, 250 mL e 500 mL. Os pais dessa criança decidiram comprar a quantidade exata de medicamento que precisará ser ministrada no tratamento, evitando a sobra de medicamento. Considere que 1 g desse medicamento ocupe um volume de 1 cm3. A capacidade do frasco, em mililitro, que esses pais deverão comprar é:",
    pergunta: "A capacidade do frasco, em mililitro, que esses pais deverão comprar é:",
    opcoes: [
      "a) 10",
      "b) 50",
      "c) 100",
      "d) 250",
      "e) 500"
    ],
    correta: "b) 50",
    explicacao: "  g      kgn\n,5 x  120\n x= 10g/dia\nComo são 5 dias, temos um total de 5 g de medicamento.\nComo o volume do medicamento é de 1 g para cada cm3, temos um total de 50cm3=50mL.",
    categoria: "MATEMÁTICA"
  },
  {
    enunciado: "A caixa-d'água de um edifício terá a forma de um paralelepípedo retângulo reto com volume igual a 28 080 litros. Em uma maquete que representa o edifício, a caixa-d’água tem dimensões 2 cm x 3,51 cm x 4 cm. Dado: 1 dm3 = 1 L. A escala usada pelo arquiteto foi:",
    pergunta: "A escala usada pelo arquiteto foi:",
    opcoes: [
      "a) 1 : 10",
      "b) 1 : 100",
      "c) 1 : 1 000",
      "d) 1 : 10 000",
      "e) 1 : 100 000"
    ],
    correta: "b) 1 : 100",
    explicacao: "A proporção é em três dimensões então para encontrar a proporção em decímetros é necessário calcular a raiz cúbica de x concluindo que a proporção é 1 : 100",
    categoria: "MATEMÁTICA"
  },
  {
    enunciado: "A ideia de usar rolos circulares para deslocar objetos pesados provavelmente surgiu com os antigos egípcios ao construírem as pirâmides. Representando por R o raio da base dos rolos cilíndricos, em metros, a expressão do deslocamento horizontal y do bloco de pedra em função de R, após o rolo ter dado uma volta completa sem deslizar, é",
    pergunta: "A expressão do deslocamento horizontal y do bloco de pedra em função de R, após o rolo ter dado uma volta completa sem deslizar, é",
    opcoes: [
      "a) y = R.",
      "b) y = 2R.",
      "c) y = πR.",
      "d) y = 2πR.",
      "e) y = 4πR."
    ],
    correta: "e) y = 4πR.",
    explicacao: "Ao girar o cilindro 2πR (comprimento da sua circunferência), o bloco de pedra desloca essa mesma distância sobre o rolo, como o rolo se desloca 2πR e pedra também, no total se desloca y = 2πR + 2πR = 4πR",
    url: "https://dye22q7xtvl2n.cloudfront.net/images/enem/2010_165_0.png",
    categoria: "MATEMÁTICA"
  },
  {
    enunciado: "Para apagar os focos A e B de um incêndio, que estavam a uma distância de 30 m um do outro, os bombeiros de um quartel decidiram se posicionar de modo que a distância de um bombeiro ao foco A, de temperatura mais elevada, fosse sempre o dobro da distância desse bombeiro ao foco B, de temperatura menos elevada. Nestas condições, a maior distância, em metro, que dois bombeiros poderiam ter entre eles é:",
    pergunta: "Nestas condições, a maior distância, em metro, que dois bombeiros poderiam ter entre eles é:",
    opcoes: [
      "a) 30.",
      "b) 40.",
      "c) 45.",
      "d) 60.",
      "e) 68."
    ],
    correta: "b) 40.",
    explicacao: "O bombeiro está a distância x do ponto B e 2x do ponto A. Sabemos também que a distância total entre A e B é 30 metros, então x + 2x = 30, x = 10 m. Para que a distância do segundo bombeiro ao ponto A seja duas vezes a distância do ponto B teremos que posicioná-lo ao lado de B a uma distância y de modo que 30 + y = 2y, y = 30 m. Então a distância entre o primeiro bombeiro e o segundo é x + y = 10 + 30 = 40 m",
    categoria: "MATEMÁTICA"
  },
  {
    enunciado: "Um brinquedo infantil caminhão-cegonha é formado por uma carreta e dez carrinhos nela transportados, conforme a figura. No setor de produção da empresa que fabrica esse brinquedo, é feita a pintura de todos os carrinhos para que o aspecto do brinquedo fique mais atraente. São utilizadas as cores amarelo, branco, laranja e verde, e cada carrinho é pintado apenas com uma cor. O caminhão-cegonha tem uma cor fixa. A empresa determinou que em todo caminhão-cegonha deve haver pelo menos um carrinho de cada uma das quatro cores disponíveis. Mudança de posição dos carrinhos no caminhão-cegonha não gera um novo modelo do brinquedo. Com base nessas informações, quantos são os modelos distintos do brinquedo caminhão-cegonha que essa empresa poderá produzir?",
    pergunta: "Quantos são os modelos distintos do brinquedo caminhão-cegonha que essa empresa poderá produzir?",
    opcoes: [
      "a) C6,4",
      "b) C9,3",
      "c) C10,4",
      "d) 64",
      "e) 46"
    ],
    correta: "b) C9,3",
    explicacao: "Como todo caminhão cegonha deve ter pelo menos 1 carrinho de cada cor, é necessário colorir os 6 carrinhos restantes com as cores disponíveis. Isso pode ser feito de: 9! / (6!3!) = C9,3",
    url: "https://sisq.elitecampinas.com.br/Content/Data/imagens/8C6106384313F80B0E048EFAD5543AD2.png",
    categoria: "MATEMÁTICA"
  },
  {
    enunciado: "É comum os artistas plásticos se apropriarem de entes matemáticos para produzirem, por exemplo, formas e imagens por meio de manipulações. Um artista plástico, em uma de suas obras, pretende retratar os diversos polígonos obtidos pelas intersecções de um plano com uma pirâmide regular de base quadrada. Segundo a classificação dos polígonos, quais deles são possíveis de serem obtidos pelo artista plástico?",
    pergunta: "Segundo a classificação dos polígonos, quais deles são possíveis de serem obtidos pelo artista plástico?",
    opcoes: [
      "a) Quadrados, apenas.",
      "b) Triângulos e quadrados, apenas.",
      "c) Triângulos, quadrados e trapézios, apenas.",
      "d) Triângulos, quadrados, trapézios e quadriláteros irregulares, apenas.",
      "e) Triângulos, quadrados, trapézios e quadriláteros irregulares e pentágonos, apenas."
    ],
    correta: "e) Triângulos, quadrados, trapézios e quadriláteros irregulares e pentágonos, apenas.",
    explicacao: "O número de polígonos formados depende do número de faces da pirâmide. Como podemos cortar suas faces em 3, 4 ou 5 pontos, podemos criar triângulos (3 pontos), quadrados, trapézio, quadriláteros irregulares (todos 4 pontos) e Pentágonos (5 pontos).",
    categoria: "MATEMÁTICA"
  }];

// Função para inserir
async function inserirPerguntas() {
  const batch = db.batch();

  perguntas.forEach((pergunta) => {
    const docRef = db.collection("matematica").doc(); // ID automático
    batch.set(docRef, pergunta);
  });

  await batch.commit();
  console.log("✅ Perguntas inseridas com sucesso!");
}

inserirPerguntas().catch(console.error);