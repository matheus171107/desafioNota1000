import { useEffect, useState } from "react";
import axios from "axios";
import carregando from "../assets/carregando.gif"

function Perguntas() {
  const [perguntas, setPerguntas] = useState([]);
  const [indice, setIndice] = useState(0); // controla qual pergunta está
  const [pontos, setPontos] = useState(0); // quantas acertou
  const [fim, setFim] = useState(false);   // se terminou o quiz
  const [validacao, setValidacao] = useState(true); 

  const Areaexplicacao = document.getElementById("explicacao")
  const Textexplicacao = document.querySelector("#explicacao p")
  const buttonProximo = document.querySelector("#buttonProximo")
  const buttons = document.querySelectorAll("#perguntasBox button")
  const texto = document.querySelector("#texto")

  useEffect(() => {
    axios.get("http://localhost:3000/api/matematica")
      .then(res => setPerguntas(res.data))
      .catch(err => console.log("Erro ao carregar", err));
  }, []);


  const responder = (opcao, buttonIndice) => {
    if(validacao){
      const perguntaAtual = perguntas[indice]; 
      const opcoes = pergunta.opcoes
      const buttonSelect = buttons[buttonIndice]
      const indiceCorreta = opcoes.findIndex(opcoes => opcoes === perguntaAtual.correta)

      Areaexplicacao.style.display = "block"
      Textexplicacao.innerText = pergunta.explicacao
      buttonProximo.style.display = "flex"
      
      if(opcao == perguntaAtual.correta){
        console.log("Resposta Correta")
        buttonSelect.style.backgroundColor = "#83db85"
 
      }else{
        const buttonCorreta = document.querySelectorAll("#perguntasBox button")[indiceCorreta]
        console.log("Resposta Incorrenta")
        buttonSelect.style.backgroundColor = "#ff5e85"
        buttonCorreta.style.backgroundColor = "#83db85"
      }
      setValidacao(false)
    }

  };

  const proximaPergunta = () => {
    Areaexplicacao.style.display = "none"
    for(var i=0; i < buttons.length; i++){
      buttons[i].style.backgroundColor = ""
    }

    if (indice + 1 < perguntas.length) {
      setIndice(indice + 1);
      texto.innerText = `Questão ${indice+2}`
    } else {
      setFim(true);
    }
    setValidacao(true)
  }

  if (perguntas.length === 0) return <img src={carregando} alt="" width="60px"/>; 
  const pergunta = perguntas[indice];
  const urlImg = pergunta.url
  return(
    <div>
        <div id="perguntasBox">
        <h3 className="pergunta">{pergunta.enunciado}</h3>
        {urlImg != null ? <img src={urlImg} alt="" /> : console.log("Não a imgens cadastradas")}
        <h3 className="pergunta">{pergunta.pergunta}</h3>
            <button onClick={() => responder(pergunta.opcoes[0], 0)}>{pergunta.opcoes[0]}</button>
            <button onClick={() => responder(pergunta.opcoes[1], 1)}>{pergunta.opcoes[1]}</button>
            <button onClick={() => responder(pergunta.opcoes[2], 2)}>{pergunta.opcoes[2]}</button>
            <button onClick={() => responder(pergunta.opcoes[3], 3)}>{pergunta.opcoes[3]}</button>
            <button onClick={() => responder(pergunta.opcoes[4], 4)}>{pergunta.opcoes[4]}</button>     
        </div>
        <div id="buttonProximo">
          <button onClick={() => proximaPergunta()}>Proxíma Questão</button>
        </div>
    </div>

  )
}

export default Perguntas;
