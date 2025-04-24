import { useEffect, useState } from "react";
import axios from "axios";

function Quiz() {
  const [perguntas, setPerguntas] = useState([]);
  const [indice, setIndice] = useState(0); // controla qual pergunta está
  const [pontos, setPontos] = useState(0); // quantas acertou
  const [fim, setFim] = useState(false);   // se terminou o quiz

  useEffect(() => {
    axios.get("http://localhost:3000/api/perguntas")
      .then(res => setPerguntas(res.data))
      .catch(err => console.log("Erro ao carregar", err));
  }, []);

  const responder = (opcao) => {
    const perguntaAtual = perguntas[indice];

    if (opcao === perguntaAtual.respostaCorreta) {
      setPontos(pontos + 1); // somar ponto se acertar
    }

    // ir para a próxima ou finalizar
    if (indice + 1 < perguntas.length) {
      setIndice(indice + 1);
    } else {
      setFim(true);
    }
  };

  if (perguntas.length === 0) return <p>Carregando...</p>;

  if (fim) {
    return (
      <div>
        <h1>Quiz finalizado!</h1>
        <p>Você acertou {pontos} de {perguntas.length} perguntas ✅</p>
      </div>
    );
  }

  const pergunta = perguntas[indice];

  return (
    <div>
      <h1>Quiz</h1>
      <p>{pergunta.pergunta}</p>
      {pergunta.opcoes.map((opcao, i) => (
        <button key={i} onClick={() => responder(opcao)}>
          {opcao}
        </button>
      ))}
    </div>
  );
}

export default Quiz;
