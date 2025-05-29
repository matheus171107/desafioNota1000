const admin = require("firebase-admin");

const serviceAccount = require("./firebase-key.json"); // certifique-se que está correto

admin.initializeApp({

  credential: admin.credential.cert(serviceAccount),

});

const db = admin.firestore();

const perguntas = [
    {
      enunciado: "As cetonas fazem parte de famílias olfativas encontradas em muitos alimentos. A molécula de hexan-3-ona é um exemplo desses compostos voláteis responsáveis pelo aroma, podendo ser obtida por processos energéticos realizados em meio ácido, na presença de oxidantes como o permanganato de potássio. Para se produzir esse composto volátil em laboratório, deve-se oxidar a molécula de",
      pergunta: "Para se produzir esse composto volátil em laboratório, deve-se oxidar a molécula de",
      opcoes: [
        "a) hexanal.",
        "b) hexan-1-ol.",
        "c) hexan-3-ol.",
        "d) hex-1-en-1-ol",
        "e) ácido hexanoico"
      ],
      correta: "c) hexan-3-ol.",
      explicacao: "A reação de oxidação de álcoois pode produzir cetonas ou aldeídos, a depender da posição do grupo funcional, ou seja, da hidroxila. Como queremos produzir cetonas, a hidroxila não pode estar em carbonos terminais. Respeitando o total de seis carbonos e nenhuma insaturação, temos, como única opção o hexan-3-ol, cuja estrutura pode ser vista a seguir.",
      categoria: "QUÍMICA"
    },
    {
      enunciado: "Um garoto comprou vários abacates na feira, mas descobriu que eles não estavam maduros o suficiente para serem consumidos. Sua mãe recomendou que ele colocasse os abacates em um recipiente fechado, pois isso aceleraria seu amadurecimento. Com certa dúvida, o garoto realizou esta experiência: colocou alguns abacates no recipiente e deixou os demais em uma fruteira aberta. Surpreendendo-se, ele percebeu que os frutos que estavam no recipiente fechado amadureceram mais rapidamente.",
      pergunta: "A aceleração desse processo é causada por",
      opcoes: [
        "a) acúmulo de gás etileno.",
        "b) redução da umidade do ar",
        "c) aumento da concentração de CO2.",
        "d) diminuição da intensidade luminosa",
        "e) isolamento do contato com O2 atmosférico"
      ],
      correta: "a) acúmulo de gás etileno.",
      explicacao: "O etileno é um gás produzido naturalmente por muitas frutas (como o abacate, banana, maçã, etc.) e atua como um hormônio vegetal que regula o amadurecimento dos frutos. Quando os abacates são colocados em um recipiente fechado, o etileno liberado por eles fica concentrado no ambiente e acelera o processo de amadurecimento.",
      categoria: "BIOLOGIA"
    },
    {
      enunciado: "Uma concessionária é responsável por um trecho de 480 quilômetros de uma rodovia. Nesse trecho, foram construídas 10 praças de pedágio, onde funcionários recebem os pagamentos nas cabines de cobrança. Também existe o serviço automático, em que os veículos providos de um dispositivo passam por uma cancela, que se abre automaticamente, evitando filas e diminuindo o tempo de viagem. Sugerido a considerar, o tempo médio para efetuar a passagem em uma cabine é de 3 minutos, e as velocidades máximas permitidas na rodovia são 100 km/h, para veículos leves, e 80 km/h, para veículos de grande porte. Considerem um carro e um caminhão viajando, ambos com velocidades constantes e iguais às máximas permitidas, e que somente o caminhão tenha o serviço automático de cobrança.",
      pergunta: "Comparado ao caminhão, quantos minutos a menos o carro leva para percorrer toda a rodovia?",
      opcoes: [
        "a) 30",
        "b) 42",
        "c) 72",
        "d) 288",
        "e) 360"
      ],
      correta: "b) 42",
      explicacao: "O caminhão, mesmo com cobrança automática, é mais lento (80 km/h) que o carro (100 km/h). O carro também para nos pedágios, mas a diferença de tempo total é de 42 minutos a menos para o carro.",
      categoria: "FÍSICA"
    },
    {
      enunciado: "De modo geral, a palavra “aromático” invoca associações agradáveis, como cheiro de café fresco ou de um pão doce de canela. Associações similares ocorriam no passado da história da química orgânica, quando os compostos ditos “aromáticos apresentavam um odor agradável e foram isolados de óleos naturais. À medida que as estruturas desses compostos eram elucidadas, foi se descobrindo que vários deles continham uma unidade estrutural específica. Os compostos aromáticos que continham essa unidade estrutural tomaram-se parte de uma grande família, muito mais com base em suas estruturas eletrônicas do que nos seus cheiros, como as substâncias a seguir, encontradas em óleos vegetais.",
      pergunta: "A característica estrutural dessa família de compostos é a presença de",
      opcoes: [
        "a) ramificações.",
        "b) insaturações.",
        "c) anel benzênico.",
        "d) átomos de oxigênio.",
        "e) carbonos assimétricos."
      ],
      correta: "c) anel benzênico.",
      explicacao: "Compostos chamados de aromáticos apresentam anel benzênico, conhecido também como anel aromático.",
      url: "https://d23vy2bv3rsfba.cloudfront.net/questoes_imagens/0_51b5c003af366a5c86adf07be4d4aa9b_8157268.jpg.png",
      categoria: "QUÍMICA"
    },
    {
      enunciado: "No processo de captação da luz pelo olho para a formação de imagens estão envolvidas duas estruturas celulares: os cones e os bastonetes. Os cones são sensíveis à energia dos fótons, e os bastonetes, à quantidade de fótons incidentes. A energia dos fótons que compõem os raios luminosos está associada à sua frequência, e a intensidade, ao número de fótons incidentes.",
      pergunta: "Um animal que tem bastonetes mais sensíveis irá",
      opcoes: [
        "a) apresentar daltonismo.",
        "b) perceber cores fora do espectro do visível.",
        "c) enxergar bem em ambientes mal iluminados.",
        "d) necessitar de mais luminosidade para enxergar.",
        "e) fazer uma pequena distinção de cores em ambientes iluminados."
      ],
      correta: "c) enxergar bem em ambientes mal iluminados.",
      explicacao: "Os bastonetes determinam a visão em preto e branco, sendo mais sensíveis à luz do que os cones. Dessa forma, promovem maior sensibilidade e melhor visão em ambientes menos iluminados.",
      categoria: "FÍSICA"
    },
    {
      enunciado: "Algumas toneladas de medicamentos para uso humano e veterinário são produzidas por ano. Os fármacos são desenvolvidos para serem estáveis, mantendo suas propriedades químicas de forma a atender a um propósito terapêutico. Após o consumo de fármacos, parte de sua dosagem é excretada de forma inalterada, persistindo no meio ambiente. Em todo o mundo, antibióticos, hormônios, anestésicos, anti-inflamatórios, entre outros, são detectados em concentrações preocupantes no esgoto doméstico, em águas superficiais e de subsolo. Dessa forma, a ocorrência de fármacos residuais no meio ambiente pode apresentar efeitos adversos em organismos aquáticos e terrestres.",
      pergunta: "Qual ação minimiza a permanência desses contaminantes nos recursos hídricos?",
      opcoes: [
        "a) Utilização de esterco como fertilizante na agricultura.",
        "b) Ampliação das redes de coleta de esgoto na zona urbana.",
        "c) Descarte dos medicamentos fora do prazo de validade em lixões.",
        "d) Desenvolvimento de novos processos nas estações de tratamento de efluentes.",
        "e) Reúso dos lodos provenientes das estações de tratamento de esgoto na agricultura."
      ],
      correta: "d) Desenvolvimento de novos processos nas estações de tratamento de efluentes.",
      explicacao: "O tratamento das águas contaminadas resultaria na minimização da contaminação dos recursos hídricos, uma vez que os contaminantes seriam retirados.",
      categoria: "BIOLOGIA"
    },
    {
      enunciado: "Na cidade de São Paulo, as ilhas de calor são responsáveis pela alteração da direção do fluxo da brisa marítima que deveria atingir a região de mananciais. Mas, ao cruzar a ilha de calor, a brisa marítima agora encontra um fluxo de ar vertical, que transfere para ela energia térmica absorvida das superfícies quentes da cidade, deslocando-a para altas altitudes. Dessa maneira, há condensação e chuvas fortes no centro da cidade, em vez de na região de mananciais. A imagem apresenta os três subsistemas que trocam energia nesse fenômeno. No processo de fortes chuvas no centro da cidade de São Paulo, há dois mecanismos dominantes de transferência de calor: entre o Sol e a ilha de calor, e entre a ilha de calor e a brisa marítima.",
      pergunta: "Esses mecanismos são, respectivamente:",
      opcoes: [
        "a) irradiação e convecção.",
        "b) irradiação e irradiação.",
        "c) condução e irradiação.",
        "d) convecção e irradiação.",
        "e) convecção e convecção."
      ],
      correta: "a) irradiação e convecção.",
      explicacao: "No caso do Sol para a ilha de calor, temos a radiação (ou irradiação) e as brisas marítima e terrestre são formadas pela convecção.",
      url: "https://d23vy2bv3rsfba.cloudfront.net/questoes_imagens/0_0702fffc229ea9c4fc9699be233a0af1_6164898.jpg.png",
      categoria: "FÍSICA"
    },
    {
      enunciado: "A imagem apresenta as etapas do funcionamento de uma estação individual para tratamento do esgoto residencial.",
      pergunta: "Em qual etapa decanta-se o lodo a ser separado do esgoto residencial?",
      opcoes: [
        "a) 1",
        "b) 2",
        "c) 3",
        "d) 5",
        "e) 6"
      ],
      correta: "c) 3",
      explicacao: "O tratamento de esgoto até o seu devido descarte passa por diferentes etapas. Dentre essas etapas, nós temos o tanque séptico. Neste tanque o resíduo deve permanecer em repouso para que haja uma decantação. Com essa decantação, é possível separar o lodo do esgoto residencial.",
      url: "https://dye22q7xtvl2n.cloudfront.net/images/aio/enem_2_dia_2021_122_0.png",
      categoria: "QUÍMICA"
    },
    {
      enunciado: "A utilização de extratos de origem natural tem recebido a atenção de pesquisadores em todo o mundo, principalmente nos países em desenvolvimento que são altamente acometidos por doenças infecciosas e parasitárias. Um bom exemplo dessa utilização são os produtos de origem botânica que combatem insetos.",
      pergunta: "O uso desses produtos pode auxiliar no controle da:",
      opcoes: [
        "a) esquistossomose.",
        "b) leptospirose.",
        "c) leishmaniose.",
        "d) hanseníase.",
        "e) aids."
      ],
      correta: "c) leishmaniose.",
      explicacao: "Como a leishmaniose é uma doença transmitida pelo mosquito palha, também conhecido como birigui, que é um inseto. Como a substância tem ação inseticida, auxilia no controle dos vetores dessa doença.",
      categoria: "BIOLOGIA"
    },
    {
      enunciado: "Darwin, em viagem às Ilhas Galápagos, observou que os tentilhões apresentavam bicos com formatos diferentes em cada ilha, de acordo com o tipo de alimentação disponível. Lamarck, ao explicar que o pescoço da girafa teria esticado para colher folhas e frutos no alto das árvores, elaborou ideias importantes sobre a evolução dos seres vivos.",
      pergunta: "O texto aponta que uma ideia comum às teorias da evolução, propostas por Darwin e por Lamarck, refere-se à interação entre os organismos e seus ambientes, que é denominada de",
      opcoes: [
        "a) mutação.",
        "b) adaptação",
        "c) seleção natural.",
        "d) recombinação gênica.",
        "e) variabilidade genética."
      ],
      correta: "b) adaptação",
      explicacao: "Apesar das diferenças, ambos dizem que os indivíduos sofrem efeito da evolução e possuem adaptações para sobreviver no ambiente.",
      categoria: "BIOLOGIA"
    },
    {
      enunciado: "Um dos problemas dos combustíveis que contêm carbono é que sua queima produz dióxido de carbono. Portanto, uma característica importante, ao se escolher um combustível, é analisar seu calor de combustão (Hcº) definido como a energia liberada na queima completa de um mol de combustível no estado padrão. O quadro seguinte relaciona algumas substâncias que contêm carbono e seu Hcº.",
      pergunta: "Neste contexto, qual dos combustíveis, quando queimado completamente, libera mais dióxido de carbono no ambiente pela mesma quantidade de energia produzida?",
      opcoes: [
        "a) Benzeno.",
        "b) Metano.",
        "c) Glicose.",
        "d) Octano.",
        "e) Etanol."
      ],
      correta: "c) Glicose.",
      explicacao: "A glicose, ao ser queimada, libera mais CO2 por unidade de energia do que os outros combustíveis listados.",
      categoria: "QUÍMICA"
    },
    {
      enunciado: "Na Idade Média, para elaborar preparados a partir de plantas produtoras de óleos essenciais, as coletas das espécies eram realizadas ao raiar do dia. Naquela época, essa prática era fundamentada misticamente pelo efeito mágico dos raios lunares, que seria anulado pela emissão dos raios solares. Com a evolução da ciência, foi comprovado que a coleta de algumas espécies ao raiar do dia garante a obtenção de material com maiores quantidades de óleos essenciais.",
      pergunta: "A explicação científica que justifica essa prática se baseia na:",
      opcoes: [
        "a) volatilização das substâncias de interesse.",
        "b) polimerização dos óleos catalisada pela radiação solar",
        "c) solubilização das substâncias de interesse pelo orvalho.",
        "d) oxidação do óleo pelo oxigênio produzido na fotossíntese.",
        "e) liberação das moléculas de óleo durante o processo de fotossíntese."
      ],
      correta: "a) volatilização das substâncias de interesse.",
      explicacao: "Ao amanhecer, ocorrerá o aumento da temperatura, bem como a evaporação dos compostos mais voláteis, como é o caso de alguns óleos essenciais.",
      categoria: "QUÍMICA"
    },
    {
      enunciado: "Uma equipe de cientistas lançará uma expedição ao Titanic para criar um detalhado mapa 3D que “vai tirar, virtualmente, o Titanic do fundo do mar para o público”. A expedição ao local, a 4 quilômetros de profundidade no Oceano Atlântico, está sendo apresentada como a mais sofisticada expedição científica ao Titanic. Ela utilizará tecnologias de imagem e sonar que nunca tinham sido aplicadas ao navio, para obter o mais completo inventário de seu conteúdo. Esta complementação é necessária em razão das condições do navio, naufragado há um século.",
      pergunta: "No problema apresentado para gerar imagens através de camadas de sedimentos depositados no navio, o sonar é mais adequado, pois a",
      opcoes: [
        "a) propagação da luz na água ocorre a uma velocidade maior que a do som neste meio",
        "b) absorção da luz ao longo de uma camada de água é facilitada enquanto a absorção do som não.",
        "c) refração da luz a uma grande profundidade acontece com uma intensidade menor que a do som.",
        "d) atenuação da luz nos materiais analisados é distinta da atenuação de som nestes mesmos materiais.",
        "e) reflexão da luz nas camadas de sedimentos é menos intensa do que a reflexão do som neste material."
      ],
      correta: "d) atenuação da luz nos materiais analisados é distinta da atenuação de som nestes mesmos materiais.",
      explicacao: "A luz, ao incidir nas primeiras camadas dos sedimentos do navio, sofrerá atenuações provenientes de reflexões e absorções. Já o Sonar, ao entrar em contato com esses sedimentos, produz ecos. Esses ecos são captados em instantes diferentes pelo receptor, facilitando o mapeamento tridimensional do navio.",
      categoria: "FÍSICA"
    }
  ];

// Função para inserir

async function inserirPerguntas() {

  const batch = db.batch();

  perguntas.forEach((pergunta) => {

    const docRef = db.collection("natureza").doc(); // ID automático

    batch.set(docRef, pergunta);

  });

  await batch.commit();

  console.log("✅ Perguntas inseridas com sucesso!");

}

inserirPerguntas().catch(console.error);
