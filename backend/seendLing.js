const admin = require("firebase-admin");
const serviceAccount = require("./firebase-key.json"); // certifique-se que está correto

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const perguntas =[
  {
    enunciado: "O mais antigo grupo de rap indígena do país, Brô MCs, surgiu em 2009, na aldeia Jaguapiru, em Dourados, Mato Grosso do Sul. Os integrantes conheceram o rap pelo rádio, ouvindo um programa que apresentava cantores e grupos brasileiros desse gênero musical. O Brô MCs conseguiu influenciar outros a fazerem rap e a lutarem pelas causas indígenas. Um dos nomes do movimento, Kunumí MC, é um jovem de 16 anos, da aldeia Krukutu, em São Paulo. O adolescente enxerga o rap como uma cultura da defesa e começou a fazer rimas quando percebeu que a poesia, pela qual sempre se interessou, podia virar música. Nas letras que cria, inspiradas tanto pelo rap quanto pelos ritmos indígenas, tenta incluir sempre assuntos aos quais acha importante dar voz, principalmente, a questão da demarcação de terras.",
    pergunta: "O movimento rap dos povos originários do Brasil revela o(a)",
    opcoes: [
      "A)fusão de manifestações artísticas urbanas contemporâneas com a cultura indígena.",
      "B)contraposição das temáticas socioambientais indígenas às questões urbanas.",
      "C)rejeição da indústria radiofônica às músicas indígenas.",
      "D)distanciamento da realidade social indígena.",
      "E)estímulo ao estudo da poesia indígena."
    ],
    correta: "A)fusão de manifestações artísticas urbanas contemporâneas com a cultura indígena.",
    explicacao: "O texto mostra como o grupo Brô MCs e o jovem Kunumí MC unem o rap, que é uma expressão artística urbana e contemporânea, com elementos da cultura indígena, como os ritmos tradicionais e as lutas dos povos originários, como a demarcação de terras.",
    "categoria": "ARTES"
  },
  {
    enunciado: "O texto estabelece uma relação entre elementos da natureza e comandos de um programa de computador para...",
    pergunta: "O texto estabelece uma relação entre elementos da natureza e comandos de um programa de computador para",
    opcoes: [
      "A)alertar as pessoas sobre a rápida destruição da natureza.",
      "B)conscientizar os indivíduos sobre a passagem acelerada do tempo.",
      "C)apresentar aos leitores os avanços tecnológicos na área da agricultura.",
      "D)orientar os usuários sobre o emprego sustentável das novas tecnologias",
      "E)informar os interessados sobre o tempo de crescimento de novas árvores."
    ],
    correta: "A)alertar as pessoas sobre a rápida destruição da natureza.",
    explicacao: "O texto utiliza uma metáfora, comparando elementos naturais a comandos de exclusão de um programa de computador, para destacar a urgência e a rapidez com que a natureza está sendo destruída.",
    categoria: "LINGUA ESTRANGEIRA"
  },
  {
    enunciado: "A anorexia é um transtorno alimentar caracterizado por grande perda de peso, ausência de menstruação e distúrbio na vivência do peso ou da forma corporal. Fatores familiares, psicológicos, socioculturais e fisiológicos interagem entre si, predispondo, precipitando e/ou mantendo o transtorno. Anoréxicos têm medo doentio de engordar e experienciam uma grande necessidade de controle sobre o peso e a forma do corpo. Dietas exíguas, uso de laxantes, diuréticos e indução de vômito são estratégias para manter o peso e a forma corporal. O exercício também é uma estratégia para perder e controlar o peso, sendo praticado de maneira ritualizada e excessiva. O objetivo é alcançar um corpo ideal condizente com os padrões de beleza, eliminando as poucas calorias que o sujeito se permite ingerir.",
    pergunta: "Uma causa determinante que contribui para a anorexia, vinculada ao exercício físico, é o(a)",
    opcoes: [
      "A)busca por um modelo de corpo e beleza estereotipado socialmente",
      "B)conjunto de fatores familiares, psicológicos e socioculturais.",
      "C)utilização de medicamentos e dietas restritivas.",
      "D)recorrência da provocação do vômito.",
      "E)medo exagerado de ganhar peso."
    ],
    correta: "A)busca por um modelo de corpo e beleza estereotipado socialmente",
    explicacao: "O texto destaca que o objetivo dos anoréxicos é alcançar um corpo ideal condizente com os padrões de beleza, o que mostra claramente a influência dos estereótipos sociais na prática excessiva de exercícios físicos como tentativa de manter esse padrão.",
    categoria: "EDUCAÇÃO FÍSICA"
  },
  {
    enunciado: "Teu dedo curioso me segue lento no rosto\nOs sulcos, as sombras machucadas por onde a luz passou.\nQue silêncio, prenda minha... Que desvio triunfal da verdade,\nQue círculos vagarosos na lagoa em que uma asa gratuita roçou...\nTive quatro amores eternos...\nO primeiro era moça donzela,\nO segundo... eclipse, boi que fala, cataclisma,\nO terceiro era a rica senhora,\nO quarto éstu... E eu afinal me repousei dos meus cuidados",
    pergunta: "O trecho revela, no último verso, um sentimento de:",
    opcoes: [
      "A)vergonha das marcas provocadas pela passagem do tempo.",
      "B)indecisão em face das possibilidades afetivas do presente.",
      "C)serenidade sedimentada pela entrega pacífica ao desejo.",
      "D)frustração causada pela vontade de retorno ao passado.",
      "E)disponibilidade para a exploração do prazer efêmero."
    ],
    correta: "C)serenidade sedimentada pela entrega pacífica ao desejo.",
    explicacao: "No último verso “E eu afinal me repousei dos meus cuidados”, o eu lírico indica um desejo de repouso expresso, conforme explícito pela alternativa C ao mencionar a “serenidade” associada ao repouso.",
    categoria: "LITERATURA"
  },
  {
    enunciado: "(Tradução da placa: Não me esqueçam quando eu for um nome importante.) A contemporaneidade identificada na performance/instalação do artista mineiro Paulo Nazareth reside principalmente na forma como ele:",
    pergunta: "A contemporaneidade identificada na performance/instalação do artista mineiro Paulo Nazareth reside principalmente na forma como ele:",
    opcoes: [
      "A)resgata conhecidas referências do modernismo mineiro.",
      "B)utiliza técnicas e suportes tradicionais na construção das formas.",
      "C)articula questões de identidade, território e códigos de linguagens",
      "D)imita o papel das celebridades no mundo contemporâneo.",
      "E)camufla o aspecto plástico e a composição visual de sua montagem."
    ],
    correta: "C)articula questões de identidade, território e códigos de linguagens",
    explicacao: "A obra de Paulo Nazareth combina performance, instalação e crítica social. Ao se posicionar com uma placa que diz 'Não me esqueçam quando eu for um nome importante', ele provoca reflexões sobre identidade, reconhecimento, desigualdade, colonialismo e a relação entre arte, mercado e território.",
    categoria: "LITERATURA"
  },
  {
    enunciado: "O Marabaixo é uma expressão artístico-cultural formada nas tradições e na identificação cultural entre as comunidades negras do Amapá. O nome remonta às mortes de escravizados em navios negreiros que eram jogados na água. Em sua homenagem, hinos de lamento eram cantados mar abaixo, mar acima. Posteriormente, o Marabaixo se integrou à vivência das comunidades negras em um ciclo de danças, cantorias com tambores e festas religiosas, recebendo, em 2018, o título de Patrimônio Cultural do Brasil.",
    pergunta: "A manifestação do Marabaixo se constituiu em expressão de arte e cultura, exercendo função de:",
    opcoes: [
      "A)ressignificar episódios dramáticos em novas práticas culturais.",
      "B)adaptar coreografias como imitação dos movimentos do mar.",
      "C)lembrar dos mortos no passado escravista como forma de lamento.",
      "D)perpetuar uma narrativa de apagamento dos fatos históricos traumáticos.",
      "E)ritualizar a passagem de atos fúnebres nas produções coletivas com espírito festivo."
    ],
    correta: "A)ressignificar episódios dramáticos em novas práticas culturais.",
    explicacao: "O texto mostra que o Marabaixo surgiu como uma forma de homenagem e lamento pelas mortes de escravizados, mas ao longo do tempo se transformou em uma expressão cultural viva, com danças, cantorias e festas religiosas. Isso caracteriza um processo de ressignificação, em que episódios trágicos da história são transformados em novas práticas culturais.",
    categoria: "ARTES"
  },
  {
    enunciado: "As lutas podem ser classificadas de diferentes formas, de acordo com a relação espacial entre os oponentes. As lutas de contato direto são caracterizadas pela manutenção do contato direto entre os adversários, os quais procuram empurrar, desequilibrar, projetar ou imobilizar o oponente. Já as lutas que mantêm o adversário a distância são caracterizadas pela manutenção de uma distância segura em relação ao adversário, para não ser atingido pelo oponente, procurando o contato apenas no momento da aplicação de uma técnica (golpe).",
    pergunta: "Com base na classificação presente no texto, são exemplos de luta de contato direto e de luta que mantém o adversário a distância, respectivamente:",
    opcoes: [
      "A)judô e karatê.",
      "B)jiu-jítsu e sumô.",
      "C)boxe e kung fu.",
      "D)esgrima e luta olímpica.",
      "E)Muay Thai e tae kwon do."
    ],
    correta: "A)judô e karatê.",
    explicacao: "Luta de contato direto: envolve manutenção constante de contato físico com o oponente, como no judô, onde os lutadores se seguram e tentam desequilibrar ou projetar o adversário. Luta que mantém o adversário à distância: há distanciamento, e o contato acontece apenas no momento do golpe, como no karatê.",
    categoria: "EDUCAÇÃO FÍSICA"
  },
  {
    enunciado: "Morir muy vivos. No todo es perder, es cierto. Si te esfuerzas mucho y bien, porque no viene de fábrica, ganas conocimiento del mundo y de ti mismo, empatía, sosiego y, en suma, algo que podríamos denominar sabiduría. Pero creo que para ello hay que mantenerse alerta y no darse nunca por vencido. Pero también es un tiempo para saldar cuentas. No creo que haya que dejarse llevar por el peso de los días como un leño podrido al que las olas arrojan finalmente a la playa. Uno siempre puede intentar sacarse alguna de las piedras que lleva a la espalda, decir las cosas que nunca se atrevió a decir, cumplir en la medida de lo posible los deseos arrumbados, rescatar algún sueño que quedó en la cuneta. No rendirse, esa es la clave. Y sobre todo decirse: ¿y por qué no? Porque la vejez no está reñida con la audacia. Debemos aspirar a morir muy vivos.",
    pergunta: "Nesse texto, ao utilizar a expressão “morir muy vivos”, a escritora Rosa Montero evidencia a importância de se:",
    opcoes: [
      "A)acumular sabedoria com o passar do tempo.",
      "B)observar o impacto dos anos sobre o corpo.",
      "C)rever os erros e os acertos de sua trajetória.",
      "D)desfrutar de todas as fases da vida.",
      "E)libertar das amarras sociais."
    ],
    correta: "D)desfrutar de todas as fases da vida.",
    explicacao: "O texto de Rosa Montero transmite uma mensagem de vitalidade, coragem e aproveitamento da vida em sua totalidade, mesmo na velhice. A autora incentiva o leitor a não se entregar ao cansaço ou à rotina, mas sim a continuar sonhando, realizando desejos antigos, enfrentando seus medos e vivendo com intensidade, independentemente da idade.",
    categoria: "LINGUA ESTRANGEIRA"
  },
  {
    enunciado: "Nessa tirinha, produzida na década de 1970, os recursos verbais e não verbais sinalizam a finalidade de:",
    pergunta: "Nessa tirinha, produzida na década de 1970, os recursos verbais e não verbais sinalizam a finalidade de:",
    opcoes: [
      "A)reforçar a luta por direitos civis.",
      "B)explicitar a autonomia feminina.",
      "C)ironizar as condições de igualdade.",
      "D)estimular a abdicação da vida social.",
      "E)criticar as obrigações da maternidade."
    ],
    correta: "C)ironizar as condições de igualdade.",
    explicacao: "A ironia está presente quando se associa o “término da luta pela emancipação feminina” com o início da maternidade. Percebe-se, nesse contexto, que não há igualdade entre os gêneros no que diz respeito aos cuidados do “neném”.",
    categoria: "PORTUGUÊS"
  },
  {
    enunciado: "Singular ocorrência - Há ocorrências bem singulares. Está vendo aquela dama que vai entrando na igreja da Cruz? Parou agora no adro para dar uma esmola. - De preto? - Justamente; lá vai entrando; entrou. - Não ponha mais na carta. Esse olhar está dizendo que a dama é uma recordação de outro tempo, e não há de ser muito tempo, a julgar pelo corpo: é moça de truz. - Deve ter quarenta e seis anos. - Ah! conservada. Vamos lá; deixe de olhar para o chão e conte-me tudo. Está viúva, naturalmente? - Não. - Bem; o marido ainda vive. É velho? - Não é casada. - Solteira? - Assim, assim. Deve chamar-se hoje D. Maria de tal. Em 1860 florescia com o nome familiar de Marocas. Não era costureira, nem proprietária, nem mestra de meninas; vá excluindo as profissões e chegará lá. Morava na Rua do Sacramento. Já então era esbelta, e, seguramente, mais linda do que hoje; modos sérios, linguagem limpa.",
    pergunta: "No diálogo, descortinam-se aspectos da condição da mulher em meados do século XIX. O ponto de vista dos personagens manifesta conceitos segundo os quais a mulher:",
    opcoes: [
      "A)encontra um modo de dignificar-se na prática da caridade.",
      "B)preserva a aparência jovem conforme seu estilo de vida.",
      "C)Condiciona seu bem-estar à estabilidade do casamento.",
      "D)tem sua identidade e seu lugar referendados pelo homem.",
      "E)renuncia à sua participação no mercado de trabalho."
    ],
    correta: "D)tem sua identidade e seu lugar referendados pelo homem.",
    explicacao: "Na sociedade do século XIX, a identidade da mulher era definida principalmente a partir de sua relação com os homens. Os personagens tentam “classificar” a dama observada com base no seu estado civil (se é casada, viúva, solteira), associando automaticamente isso à sua posição social e identidade.",
    categoria: "LITERATURA"
  }];

// Função para inserir
async function inserirPerguntas() {
  const batch = db.batch();

  perguntas.forEach((pergunta) => {
    const docRef = db.collection("linguagens").doc(); // ID automático
    batch.set(docRef, pergunta);
  });

  await batch.commit();
  console.log("✅ Perguntas inseridas com sucesso!");
}

inserirPerguntas().catch(console.error);