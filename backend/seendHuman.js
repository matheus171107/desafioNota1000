const admin = require("firebase-admin");
const serviceAccount = require("./firebase-key.json");

admin.initializeApp({

  credential: admin.credential.cert(serviceAccount),

});

const db = admin.firestore();

const perguntas = [
    {
      enunciado: "A representação de Demócrito é semelhante à de Anaxágoras, na medida em que um infinitamente múltiplo é a origem; mas nele a determinação dos princípios fundamentais aparece de maneira tal que contém aquilo que para o que foi formado não é, absolutamente, o aspecto simples para si. Por exemplo, partículas de carne e de ouro seriam princípios que, através de sua concentração, formam aquilo que aparece como figura. HEGEL, G. W. F. Crítica moderna. In: SOUZA, J. C. (Org.). Os pré-socráticos: vida e obra. São Paulo: Nova Cultural, 2000 (adaptado).",
      pergunta: "O texto faz uma apresentação crítica acerca do pensamento de Demócrito, segundo o qual o “princípio constitutivo das coisas” estava representado pelo(a)?",
      opcoes: [
        "A) número, que fundamenta a criação dos deuses.",
        "B) devir, que simboliza o constante movimento dos objetos.",
        "C) água, que expressa a causa material da origem do universo.",
        "D) imobilidade, que sustenta a existência do ser atemporal.",
        "E) átomo, que explica o surgimento dos entes."
      ],
      correta: "E) átomo, que explica o surgimento dos entes.",
      explicacao: "O texto descreve que o princípio constitutivo das coisas para Demócrito eram os átomos, o que o diferencia de outras propostas filosóficas como a água ou o devir.",
      categoria: "FILOSOFIA"
    },
    {
      enunciado: "Sempre que a relevância do discurso entra em jogo, a questão torna-se política por definição, pois é o discurso que faz do homem um ser político. E tudo que os homens fazem, sabem ou experimentam só tem sentido na medida em que pode ser discutido. Haverá, talvez, verdades que ficam além da linguagem e que podem ser de grande relevância para o homem no singular, isto é, para o homem que, seja o que for, não é um ser político. Mas homens no plural, isto é, os homens que vivem e se movem e agem neste mundo, só podem experimentar o significado das coisas por poderem falar e ser inteligíveis entre si e consigo mesmos. ARENDT, H. À condição humana. Rio de Janeiro: Forense Universitária, 2004.",
      pergunta: "No trecho, a filósofa Hannah Arendt mostra a importância da linguagem no processo de?",
      opcoes: [
        "A) entendimento da cultura.",
        "B) aumento da criatividade",
        "C) percepção da individualidade.",
        "D) melhoria da técnica.",
        "E) construção da sociabilidade"
      ],
      correta: "E) construção da sociabilidade",
      explicacao: "Em sua obra A Condição Humana, Hannah Arendt defende que a linguagem (discurso) é uma ferramenta essencial para a construção da sociabilidade entre os seres humanos.",
      categoria: "FILOSOFIA"
    },
    {
      enunciado: "Superar a história da escravidão como principal marca da trajetória do negro no país tem sido uma tônica daqueles que se dedicam a pesquisar as heranças de origem afro à cultura brasileira. A esse esforço de reconstrução da própria história do país, alia-se agora a criação da plataforma digital Ancestralidades. “A história do negro no Brasil vai continuar sendo contada, e cada passo que a gente dá para trás é um passo que a gente avança”, diz Márcio Black, idealizador da plataforma.",
      pergunta: "Em relação ao conhecimento sobre a formação cultural brasileira, iniciativas como a descrita no texto favorecem o(a)?",
      opcoes: [
        "A) recuperação do tradicionalismo.",
        "B) estímulo ao antropocentrismo",
        "C) reforço do etnocentrismo ",
        "D) resgate do teocentrismo",
        "E) crítica ao eurocentrismo "
      ],
      correta: "E) crítica ao eurocentrismo",
      explicacao: "O texto fala sobre a valorização da cultura negra como forma de enfrentar a visão colonizadora da história nacional, o que caracteriza uma crítica ao eurocentrismo.",
      categoria: "SOCIOLOGIA"
    },
    {
      enunciado: "Para os Impérios Coloniais, o problema das doenças que atingiam os escravos era algo com que cotidianamente deparavam os senhores. Em vista disso, uma série de obras dedicadas à administração de escravos foi publicada com vista a implementar uma moderna gestão da mão de obra escravista em convergência com o Iluminismo. Nesse contexto, o saber médico adquiria um papel extremamente relevante. Este era encarado como um instrumento fundamental ao desenvolvimento colonial, dada a percepção do impacto que as doenças tropicais causavam na população branca e nos povos escravizados. ABREU, J. L. N. A Colônia enferma: a saúde dos povos: a medicina das “luzes” e as informações sobre as enfermidades da América portuguesa. História, Ciências, Saúde - Manguinhos, n. 3, jul.-set. 2007 (adaptado).",
      pergunta: "De acordo com o texto, a importância da medicina se justifica no âmbito dos objetivos?",
      opcoes: [
        "A) econômicos das elites.",
        "B) naturalistas dos viajantes.",
        "C) abolicionistas dos letrados.",
        "D) tradicionalistas dos nativos.",
        "E) emancipadores das metrópoles."
      ],
      correta: "A) econômicos das elites.",
      explicacao: "O texto mostra que o saber médico era valorizado porque contribuía para preservar a mão de obra escravizada, atendendo aos interesses econômicos das elites coloniais.",
      categoria: "HISTÓRIA"
    },
    {
      enunciado: "A pessoa com deficiência de qualquer modalidade - seja visual, auditiva, física ou mental - encontra-se em uma posição de grande vulnerabilidade em relação às pessoas sem deficiência, sendo frequentemente marcante a assimetria das relações de poder na interação entre ambas. Tal assimetria de relação hierárquica é multiplicada conforme a severidade de cada caso, sendo ampliada se a pessoa com necessidades especiais pertencer a um outro grupo de risco, por exemplo, se for mulher ou criança.",
      pergunta: "A realidade abordada no texto indica a necessidade de se promover uma ética interpessoal centrada no?",
      opcoes: [
        "A) cuidado, proteção e valorização dos indivíduos.",
        "B) entendimento, perdão e tolerância dos responsáveis.",
        "C) cerceamento, arregimentação e controle de entidades.",
        "D) regramento, legislação e responsabilização de culpados.",
        "E) ensimesmamento, interiorização e indulgência dos agentes."
      ],
      correta: "A) cuidado, proteção e valorização dos indivíduos.",
      explicacao: "O texto destaca a necessidade de uma ética baseada no reconhecimento da vulnerabilidade das pessoas com deficiência, promovendo cuidado e valorização.",
      categoria: "SOCIOLOGIA"
    },
    {
      enunciado: "Tal qual num exército, não se compreende um efetivo composto apenas de oficiais. Também na saúde pública, os funcionários técnicos graduados necessitam ser assistidos por auxiliares em número suficiente e com preparo adequado, constituído pelas enfermeiras de saúde pública, educadoras ou visitadoras sanitárias, técnicos de laboratório, inspetores ou guardas etc., para não falarmos no pessoal burocrático, não especializado.",
      pergunta: "A lógica que estrutura o funcionamento do sistema de saúde descrita no texto representa uma?",
      opcoes: [
        "A) higienização moral.",
        "B) imposição eugênica.",
        "C) assimilação cultural.",
        "D) hegemonização identitária.",
        "E) hierarquização profissional."
      ],
      correta: "E) hierarquização profissional.",
      explicacao: "O texto faz uma analogia com o exército para ilustrar a organização hierárquica da saúde pública, com diferentes funções e níveis de especialização.",
      categoria: "SOCIOLOGIA"
    },
    {
      enunciado: "Quem se mete pelo caminho do pedido de perdão deve estar pronto a escutar uma palavra de recusa. Entrar na atmosfera do perdão é aceitar medir-se com a possibilidade sempre aberta do imperdoável. Perdão pedido não é perdão a que se tem direito. É com o preço destas reservas que a grandeza do perdão se manifesta. RICOEUR, P. O perdão pode curar. Disponível em: www.lusosofia.net. Acesso em: 14 out. 2019.",
      pergunta: "A reflexão sobre o perdão apresentada no texto encontra fundamento na(s)?",
      opcoes: [
        "A) rejeição particular amparada pelo desejo de poder.",
        "B) decisão subjetiva determinada pela vontade divina.",
        "C) liberdade mitigada pela predestinação do espírito.",
        "D) escolhas humanas definidas pelo conhecimento empírico.",
        "E) relações interpessoais mediadas pela autonomia dos indivíduos."
      ],
      correta: "E) relações interpessoais mediadas pela autonomia dos indivíduos.",
      explicacao: "Ricoeur entende o perdão como uma escolha livre, dependente da relação entre os envolvidos, o que aponta para a autonomia e a ética interpessoal.",
      categoria: "FILOSOFIA"
    },
    {
      enunciado: "Os séculos XV e XVI, quando se vão desmoronando as estruturas socioeconômicas da Idade Média perante os novos imperativos da Época Moderna, constituem um momento-chave na história florestal de toda a Europa Ocidental. Abre-se, genericamente, um longo período de “crise florestal”, que se manifesta com acuidade nos países onde mais se desenvolvem as atividades industriais e comerciais. As necessidades em produtos lenhosos aumentam drasticamente com o crescimento do consumo nos mercados urbanos e nas regiões onde progridem a metalurgia e a construção naval, além da sua utilização na vida quotidiana de toda a população. DEVY-VARETA, N. Para uma geografia histórica da floresta portuguesa. Revista da Faculdade de Letras - Geografia, n. 1, 1986 (adaptado).",
      pergunta: "Qual acontecimento do período contribuiu diretamente para o agravamento da situação descrita?",
      opcoes: [
        "A) O processo de expansão marítima.",
        "B) A eclosão do renascimento cultural.",
        "C) A concretização da centralização política.",
        "D) O movimento de reformas religiosas.",
        "E) A manutenção do sistema feudal."
      ],
      correta: "A) O processo de expansão marítima.",
      explicacao: "O crescimento da construção naval, impulsionado pelas grandes navegações, aumentou a demanda por madeira e agravou a crise florestal na Europa.",
      categoria: "HISTÓRIA"
    },
    {
      enunciado: "Era uma vez um país, uma cidade, uma praça, algumas mães... Las Madres de Plaza de Mayo! Silenciosas, com lenços brancos na cabeça, rondavam a Praça de Maio. Incansáveis, caminharam por dias, meses, anos. Foram chamadas de loucas. Em silêncio, criaram um fato político, escancararam as entranhas da repressão, desafiaram o aparato militar e suas dores ecoaram pelo mundo.",
      pergunta: "Qual problema de âmbito nacional argentino o movimento social mencionado enfrentava?",
      opcoes: [
        "A) A luta por salários justos para mães trabalhadoras.",
        "B) A repressão política e o desaparecimento de pessoas.",
        "C) A privatização da educação pública no país.",
        "D) A presença de militares em funções políticas.",
        "E) A desigualdade social nas grandes cidades."
      ],
      correta: "B) A repressão política e o desaparecimento de pessoas.",
      explicacao: "O movimento das Mães da Praça de Maio denunciava os desaparecimentos forçados cometidos pela ditadura militar argentina durante os anos 1970.",
      categoria: "SOCIOLOGIA"
    },
    {
      enunciado: "A singularidade da questão da terra na África Colonial é a expropriação por parte do colonizador e as desigualdades raciais no acesso à terra. Após a independência, as populações de colonos brancos tenderam a diminuir, apesar de a proporção de terra em posse da minoria branca não ter diminuído proporcionalmente. MOYO, S. A terra africana e as questões agrárias: o caso das lutas pela terra no Zimbábue. In: FERNANDES, B. M.; MARQUES, M. I. M.; SUZUKI, J. C. (Org.). Geografia agrária: teoria e poder. São Paulo: Expressão Popular, 2007.",
      pergunta: "Com base no texto, uma característica socioespacial e um consequente desdobramento que marcou o processo de ocupação do espaço rural na África subsaariana foram?",
      opcoes: [
        "A) Exploração do campesinato pela elite proprietária - Domínio das instituições fundiárias pelo poder público.",
        "B) Adoção de práticas discriminatórias de acesso à terra - Controle do uso especulativo da propriedade fundiária.",
        "C) Desorganização da economia rural de subsistência - Crescimento do consumo interno de alimentos pelas famílias camponesas.",
        "D) Crescimento dos assentamentos rurais com mão de obra familiar - Avanço crescente das áreas rurais sobre as regiões urbanas.",
        "E) Concentração das áreas cultiváveis no setor agroexportador - Aumento da ocupação da população pobre em territórios agrícolas marginais."
      ],
      correta: "E) Concentração das áreas cultiváveis no setor agroexportador - Aumento da ocupação da população pobre em territórios agrícolas marginais.",
      explicacao: "Mesmo após o fim do colonialismo, a estrutura fundiária concentrada permaneceu, levando a marginalização dos pequenos agricultores nos espaços menos produtivos.",
      categoria: "GEOGRAFIA"
    } ];

// Função para inserir

async function inserirPerguntas() {
  const batch = db.batch();
  perguntas.forEach((pergunta) => {
    const docRef = db.collection("humanas").doc(); // ID automático
    batch.set(docRef, pergunta);

  });

  await batch.commit();
  console.log("✅ Perguntas inseridas com sucesso!");

}

inserirPerguntas().catch(console.error);
