import { useEffect, useState } from "react";
import axios from "axios";
import carregando from "../assets/carregando.gif"

function Perguntas() {
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

    if (opcao === perguntaAtual.correta) {
      setPontos(pontos + 1); 
    }
    if (indice + 1 < perguntas.length) {
      setIndice(indice + 1);
    } else {
      setFim(true);
    }
  };

  if (perguntas.length === 0) return <img src={carregando} alt="" width="60px"/>; 
  const pergunta = perguntas[indice];
  
  return(
    <div>
        <div id="perguntasBox">
        <h3 id="pergunta">{pergunta.pergunta}</h3>
            <button onClick={() => responder(pergunta.opcoes[0])}>{pergunta.opcoes[0]}</button>
            <button onClick={() => responder(pergunta.opcoes[1])}>{pergunta.opcoes[1]}</button>
            <button onClick={() => responder(pergunta.opcoes[2])}>{pergunta.opcoes[2]}</button>
            <button onClick={() => responder(pergunta.opcoes[3])}>{pergunta.opcoes[3]}</button>
            <button onClick={() => responder(pergunta.opcoes[4])}>{pergunta.opcoes[4]}</button>
        </div>
    </div>

  )
}

export default Perguntas;
